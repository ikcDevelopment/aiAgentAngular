import {AiAgentModel} from './ai-agent-model';
import {LlmModel} from './llm-model';
import {MemoryModel} from './memory-model';
import {ToolsModel} from './tools-model';

export interface AgentProjectModel {
    chatId:string;
    chatName:string;
    chatDescription:string;
    chatUrl:string;
    idChatPublic:string;
    chatMode:string;
    chatAuth:string;
    chatInitMsg:string;
    makeAgentAvailableInAtom:string;
    chatResponseMode:string;
    clickToStart:string;
    alwaysOutputData:string;
    executeOnce:string;
    retryOnFail:string;
    onErrorWhatDo:string;
    note:string;
    displayNoteOnChat:string;
    aiAgent?:AiAgentModel;
    llmModel?:LlmModel;
    memory?:MemoryModel;
    tools?:ToolsModel
}
