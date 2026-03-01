import {Component} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
    selector: 'app-agent-project',
    imports: [FormsModule,
        ReactiveFormsModule],
    templateUrl: './agent-project.html',
    styleUrl: './agent-project.css',
})
export class AgentProject {
    componentTitle: string = 'Agent Project';

    form = new FormGroup({
        'chatId': new FormControl('', Validators.required),
        'chatName': new FormControl('', Validators.required),
        'chatDescription': new FormControl('', Validators.required),
        'chatUrl': new FormControl('', [Validators.required, Validators.minLength(5)]),
        'idChatPublic': new FormControl('no', Validators.required),
        'chatMode': new FormControl('', Validators.required),
        'chatAuth': new FormControl('', Validators.required),
        'chatInitMsg': new FormControl('', Validators.required),
        'makeAgentAvailableInAtom': new FormControl('', Validators.required),
        'chatResponseMode': new FormControl('', Validators.required),
        'clickToStart': new FormControl('no', Validators.required),
        'alwaysOutputData': new FormControl('no', Validators.required),
        'executeOnce': new FormControl('no', Validators.required),
        'retryOnFail': new FormControl('no', Validators.required),
        'onErrorWhatDo': new FormControl('', Validators.required),
        'note': new FormControl('', Validators.required),
        'displayNoteOnChat': new FormControl('no', Validators.required)
    });

    constructor() {
    }

    submit(){}

}
