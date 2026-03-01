import {Component, Input, SimpleChanges} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {AgentProjectService} from '../../services/memory/agent-project/agent-project-service';
import {MemoryModel} from '../../services/memory/agent-project/memory-model';

@Component({
  selector: 'app-agent-memory',
    imports: [
        FormsModule,
        ReactiveFormsModule
    ],
  templateUrl: './agent-memory.html',
  styleUrl: './agent-memory.css',
})
export class AgentMemory {
    @Input() chatId:string='';
    componentTitle: string = 'Agent Memory';
    msg:string = '';

    form = new FormGroup({
        'chatId': new FormControl('', [Validators.required, Validators.minLength(5)]),
        'memoryType': new FormControl('', Validators.required)
    });

    constructor(
        private projectInMemorDb:AgentProjectService
    ) {
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
                this.projectInMemorDb.addUpdateMemory(this.chatId, this.createMemoryModel());
                this.msg = this.projectInMemorDb.msg;
            }
        }
    }

    private uploadMemory(){}

    private createMemoryModel():MemoryModel{
        const body:MemoryModel={
            chatId: this.form.controls.chatId.value!,
            memoryType: this.form.controls.memoryType.value!
        };

        return body;
    }

}
