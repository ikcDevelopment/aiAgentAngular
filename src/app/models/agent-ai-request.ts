export interface AgentAiRequest {
    userInput: string;
    metadata: {
        agriculturalUnit?: string;
        preferredCurrency?: string;
    };
}
