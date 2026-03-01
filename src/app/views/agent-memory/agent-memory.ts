import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';

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
    componentTitle: string = 'Agent Memory';

    form = new FormGroup({
        'chatId': new FormControl('', [Validators.required, Validators.minLength(5)]),
        'memoryType': new FormControl('', Validators.required)
    });

    constructor() {
    }

    submit(){

    }

}
