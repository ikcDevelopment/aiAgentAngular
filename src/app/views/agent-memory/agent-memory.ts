import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {AgentProjectService} from '../../services/memory/agent-project/agent-project-service';

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

    constructor(
        private projectInMemorDb:AgentProjectService
    ) {
    }

    submit(){

    }

    uploadMemory(){}

    private createMemoryModel(){}

}
