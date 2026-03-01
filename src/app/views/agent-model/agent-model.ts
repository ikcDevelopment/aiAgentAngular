import {Component, Input, SimpleChanges} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {AgentProjectService} from '../../services/memory/agent-project/agent-project-service';
import {LlmModel} from '../../services/memory/agent-project/llm-model';

@Component({
  selector: 'app-agent-model',
    imports: [
        FormsModule,
        ReactiveFormsModule
    ],
  templateUrl: './agent-model.html',
  styleUrl: './agent-model.css',
})
export class AgentModel {
    @Input() chatId:string='';
    componentTitle: string = 'Agent Model';
    msg:string = '';

    form = new FormGroup({
        'chatId': new FormControl('', [Validators.required, Validators.minLength(5)]),
        'modelo': new FormControl('gemini-2.5-flash', Validators.required),
        'temperature': new FormControl(1, Validators.required)
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
                this.projectInMemorDb.addUpdateModel(this.chatId, this.createLlmModel());
                this.msg = this.projectInMemorDb.msg;
            }
        }
    }

    uploadLlmModel(){}

    private createLlmModel():LlmModel{
        const body: LlmModel={
            chatId: this.form.controls.chatId.value!,
            modelo: this.form.controls.modelo.value!,
            temperature: this.form.controls.temperature.value!
        }

        return body;
    }
}
