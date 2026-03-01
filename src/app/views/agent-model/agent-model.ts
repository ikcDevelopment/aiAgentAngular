import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';

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
    componentTitle: string = 'Agent Model';

    form = new FormGroup({
        'chatId': new FormControl('', [Validators.required, Validators.minLength(5)]),
        'modelo': new FormControl('gemini-2.5-flash', Validators.required),
        'temperature': new FormControl(1, Validators.required)
    });

    constructor() {
    }

    submit(){

    }
}
