import { Injectable } from '@angular/core';
import {AgentProjectModel} from './agent-project-model';

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
}
