export interface AiAgentModel {
    chatId:string;
    chatInput:string;
    role:string;
    goal:string;
    contex:string;
    output_format:string;
    max_iterations:string;
    return_intermediate:string;
    automatically_passthrough_binary_images:string;
    batch_processing:string;
    enable_streaming:string;
}
