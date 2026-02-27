import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {AgentAiRequest} from '../models/agent-ai-request';
import {JsonPipe} from '@angular/common';
import {CognitiveService} from '../services/cognitiveService';

@Component({
    selector: 'app-agent-ai-component',
    imports: [
        FormsModule,
        ReactiveFormsModule,
        JsonPipe
    ],
    templateUrl: './agent-ai-component.html',
    styleUrl: './agent-ai-component.css',
})
export class AgentAiComponent {
    loading = false;
    response: any = {id:'4587', name:'Estuardo'};

    form = new FormGroup({
        'userInput': new FormControl('', [Validators.required, Validators.minLength(5)]),
        'agriculturalUnit': new FormControl('', Validators.required),
        'preferredCurrency': new FormControl('', Validators.required)
    });

    constructor(
        private fb: FormBuilder,
        private cognitiveService: CognitiveService
    ) {}

    submit() {

        if (this.form.invalid) return;

        const request: AgentAiRequest = {
            userInput: this.form.value.userInput!,
            metadata: {
                agriculturalUnit: this.form.value.agriculturalUnit || undefined,
                preferredCurrency: this.form.value.preferredCurrency || undefined
            }
        };

        this.loading = true;

        this.cognitiveService.analyzeAgentIntent(request)
            .subscribe({
                next: (res) => {
                    this.response = res;
                    this.loading = false;
                },
                error: () => this.loading = false
            });
    }

}
