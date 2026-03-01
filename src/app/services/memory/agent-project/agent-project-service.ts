import { Injectable } from '@angular/core';
import {AgentProjectModel} from './agent-project-model';
import {AiAgentModel} from './ai-agent-model';
import {LlmModel} from './llm-model';
import {MemoryModel} from './memory-model';

@Injectable({
  providedIn: 'root',
})
export class AgentProjectService {
  db:Map<string, AgentProjectModel>=new Map<string, AgentProjectModel>();
  error:boolean=false;
  msg:string='';

  constructor(

  ) {
  }

  addProject(project:AgentProjectModel){
      const projectInDb = this.db.get(project.chatId);
      this.error=false;
      this.msg = 'Proyecto adicionado exitosamente';

      if(projectInDb == undefined){
          this.db.set(project.chatId, project);
      }else{
          this.error=true;
          this.msg = 'Proyecto ya existe en base de datos';
      }
  }

  updateProject(project:AgentProjectModel){
      this.db.set(project.chatId, project);
  }

  getProject(projectId:string): AgentProjectModel | undefined{
      const projectInDb = this.db.get(projectId);

      if(projectInDb == undefined){
          this.error=true;
          this.msg='Proyecto no existe en base de datos';

      }

      return projectInDb;
  }

  deleteProject(projectId:string): boolean{
      if(this.db.delete(projectId)){
          this.error=false;
          this.msg='Proyecto eliminado de la base de datos';
          return true;
      } else{
          this.error=true;
          this.msg='Proyecto no encontrado en la base de datos';
      }

      return false;
  }

  addUpdateAiAgent(projectId:string, agent:AiAgentModel):boolean{
      const project = this.getProject(projectId);

      if(project !== undefined){
          this.error=false;
          this.msg='Agente persistido exitosamente';
          project.aiAgent = agent;
          this.updateProject(project);
          return this.error;
      }else{
          this.error=true;
          this.msg='Proyecto no existe en db';
          return this.error;
      }
  }

  addUpdateModel(projectId:string, llmModel:LlmModel):boolean{
      const project = this.getProject(projectId);

      if(project !== undefined){
          this.error=false;
          this.msg='Modelo persistido exitosamente';
          project.llmModel = llmModel;
          this.updateProject(project);
          return this.error;
      }else{
          this.error=true;
          this.msg='Proyecto no existe en db';
          return this.error;
      }

  }

  addUpdateMemory(projectId:string, memory:MemoryModel):boolean{
      const project = this.getProject(projectId);

      if(project !== undefined){
          this.error=false;
          this.msg='Modelo persistido exitosamente';
          project.memory = memory;
          this.updateProject(project);
          return this.error;
      }else{
          this.error=true;
          this.msg='Proyecto no existe en db';
          return this.error;
      }
  }
}
