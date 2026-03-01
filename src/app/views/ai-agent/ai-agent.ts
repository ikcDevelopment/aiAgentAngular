import {Component, Input, SimpleChanges} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {AgentProjectService} from '../../services/memory/agent-project/agent-project-service';
import {AiAgentModel} from '../../services/memory/agent-project/ai-agent-model';

@Component({
  selector: 'app-ai-agent',
    imports: [
        FormsModule,
        ReactiveFormsModule
    ],
  templateUrl: './ai-agent.html',
  styleUrl: './ai-agent.css',
})
export class AiAgent {
    @Input() chatId:string='';
    componentTitle: string = 'Ai Agent';
    msg:string = '';

    form = new FormGroup({
        'chatId': new FormControl('', [Validators.required, Validators.minLength(5)]),
        'chatInput': new FormControl('', Validators.required),
        'role': new FormControl('', Validators.required),
        'goal': new FormControl('', Validators.required),
        'context': new FormControl('', Validators.required),
        'output_format': new FormControl(''),
        'max_iterations': new FormControl(''),
        'return_intermediate': new FormControl(''),
        'automatically_passthrough_binary_images': new FormControl(''),
        'batch_processing': new FormControl(''),
        'enable_streaming': new FormControl('')
    });

    constructor( private projectInMemorDb:AgentProjectService) {
    }

    /**
     * These properties are sent from any component that needs setting users
     *
     * first gets into ngOnChanges and then on ngOnInit
     * @param changes
     */
    ngOnChanges(changes: SimpleChanges): void {
        let propsRead: number = 0;

        for (const propName in changes) {
            this.form.controls.chatId.setValue(this.chatId);
        }
    }

    submit(){
        if(this.form.dirty){
            if (this.form.status == 'VALID') {
                this.projectInMemorDb.addUpdateAiAgent(this.chatId, this.createAgentModel());
                this.msg = this.projectInMemorDb.msg;
            }
        }
    }

    uploadAgent(){}

    private createAgentModel(): AiAgentModel{
        const body:AiAgentModel={
            automatically_passthrough_binary_images: this.form.controls.automatically_passthrough_binary_images.value!,
            batch_processing: this.form.controls.batch_processing.value!,
            chatId: this.form.controls.chatId.value!,
            chatInput: this.form.controls.chatInput.value!,
            contex: this.form.controls.context.value!,
            enable_streaming: this.form.controls.enable_streaming.value!,
            goal: this.form.controls.goal.value!,
            max_iterations: this.form.controls.max_iterations.value!,
            output_format: this.form.controls.output_format.value!,
            return_intermediate: this.form.controls.return_intermediate.value!,
            role: this.form.controls.role.value!
        }

        return body;
    }

}
