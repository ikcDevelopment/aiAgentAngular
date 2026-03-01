import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {AgentProjectService} from '../../services/memory/agent-project/agent-project-service';

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
    componentTitle: string = 'Ai Agent';

    form = new FormGroup({
        'chatId': new FormControl('', [Validators.required, Validators.minLength(5)]),
        'chatInput': new FormControl('', Validators.required),
        'role': new FormControl('', Validators.required),
        'goal': new FormControl('', Validators.required),
        'context': new FormControl('', Validators.required),
        'output_format': new FormControl('', Validators.required),
        'max_iterations': new FormControl('', Validators.required),
        'return_intermediate': new FormControl('', Validators.required),
        'automatically_passthrough_binary_images': new FormControl('', Validators.required),
        'batch_processing': new FormControl('', Validators.required),
        'enable_streaming': new FormControl('', Validators.required)
    });

    constructor( private projectInMemorDb:AgentProjectService) {
    }

    submit(){}

    uploadAgent(){}

    private createAgentModel(){}

}
