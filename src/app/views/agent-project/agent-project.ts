import {Component, Input, SimpleChanges} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MemoryModel} from '../../services/memory/agent-project/memory-model';
import {AgentProjectModel} from '../../services/memory/agent-project/agent-project-model';
import {AgentProjectService} from '../../services/memory/agent-project/agent-project-service';

@Component({
    selector: 'app-agent-project',
    imports: [FormsModule,
        ReactiveFormsModule],
    templateUrl: './agent-project.html',
    styleUrl: './agent-project.css',
})
export class AgentProject {
    @Input() chatId:string='';
    componentTitle: string = 'Agent Project';
    msg:string = '';

    form = new FormGroup({
        'chatId': new FormControl('', Validators.required),
        'chatName': new FormControl('', Validators.required),
        'chatDescription': new FormControl(''),
        'chatUrl': new FormControl(''),
        'idChatPublic': new FormControl('no'),
        'chatMode': new FormControl(''),
        'chatAuth': new FormControl(''),
        'chatInitMsg': new FormControl('', Validators.required),
        'makeAgentAvailableInAtom': new FormControl(''),
        'chatResponseMode': new FormControl(''),
        'clickToStart': new FormControl('no'),
        'alwaysOutputData': new FormControl('no'),
        'executeOnce': new FormControl('no'),
        'retryOnFail': new FormControl('no'),
        'onErrorWhatDo': new FormControl(''),
        'note': new FormControl(''),
        'displayNoteOnChat': new FormControl('no')
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
                this.projectInMemorDb.updateProject(this.createAgentProjectModel());
                this.msg = this.projectInMemorDb.msg;
            }
        }
    }

    private createAgentProjectModel():AgentProjectModel{
        const body:AgentProjectModel={
            alwaysOutputData: this.form.controls.alwaysOutputData.value!,
            chatAuth: this.form.controls.chatAuth.value!,
            chatDescription: this.form.controls.chatDescription.value!,
            chatInitMsg: this.form.controls.chatInitMsg.value!,
            chatMode: this.form.controls.chatMode.value!,
            chatName: this.form.controls.chatName.value!,
            chatResponseMode: this.form.controls.chatResponseMode.value!,
            chatUrl: this.form.controls.chatUrl.value!,
            clickToStart: this.form.controls.clickToStart.value!,
            displayNoteOnChat: this.form.controls.displayNoteOnChat.value!,
            executeOnce: this.form.controls.executeOnce.value!,
            idChatPublic: this.form.controls.idChatPublic.value!,
            makeAgentAvailableInAtom: this.form.controls.makeAgentAvailableInAtom.value!,
            note: this.form.controls.note.value!,
            onErrorWhatDo: this.form.controls.onErrorWhatDo.value!,
            retryOnFail: this.form.controls.retryOnFail.value!,
            chatId: this.form.controls.chatId.value!

        };

        return body;
    }
}
