import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AgentAiRequest} from '../models/agent-ai-request';

@Injectable({
  providedIn: 'root',
})
export class CognitiveService {
    constructor(private http: HttpClient) {}

    analyzeAgentIntent(request: AgentAiRequest) {
        return this.http.post('/api/cognitive/accounting-intent', request);
    }
}
