import {Component, ElementRef, signal, ViewChild} from '@angular/core';
import {Edge, NgxGraphModule, Node} from '@swimlane/ngx-graph';
import {AgentMemory} from '../views/agent-memory/agent-memory';
import {AgentModel} from '../views/agent-model/agent-model';
import {AgentProject} from '../views/agent-project/agent-project';
import {AiAgent} from '../views/ai-agent/ai-agent';
import {AgentTools} from '../views/agent-tools/agent-tools';
import {NgOptimizedImage} from '@angular/common';
import {AgentProjectService} from '../services/memory/agent-project/agent-project-service';


@Component({
  selector: 'app-agent-project-design',
    imports: [NgxGraphModule, AgentMemory, AgentModel, AgentProject, AiAgent, AgentTools, NgOptimizedImage,],
  templateUrl: './agent-project-design.html',
  styleUrl: './agent-project-design.css',
})
export class AgentProjectDesign {
    isOpenModalProyectoAgente= signal(false);
    isOpenModalAgenteIa = signal(false);
    isOpenModalAgenteModelo = signal(false);
    isOpenModalAgenteMemoria = signal(false);
    isOpenModalAgenteHerramientas = signal(false);

    projectNodes: Node[]=[];
    nodesLinks: Edge[]=[];

    title = signal('Test');


    constructor(
        private projectInMemorDb:AgentProjectService
    ) {
        this.fillLinks();
        this.fillNodes();
    }

    private fillNodes(){
        const agentProjectNode: Node= {
            position:{
                x:10,
                y:265
            },
            dimension: {
                width: 250,
                height: 250
            },
            data:{
              color: '#D2D449'
            },
            id: 'agent_project',
            label: 'Proyecto de agente IA'
        };

        this.projectNodes.push(agentProjectNode);

        const aiAgentNode: Node={
            position:{
                x:250,
                y:265
            },
            dimension: {
                width: 250,
                height: 250
            },
            data:{
                color: '#E7B536'
            },
            id:'Agente_ia',
            label:'Agente IA'
        };

        this.projectNodes.push(aiAgentNode);

        const agentModelNode: Node={
            position:{
                x:10,
                y:550
            },
            dimension: {
                width: 250,
                height: 250
            },
            data:{
                color: '#EA34D4'
            },
            id:'agent_model',
            label:'Modelo del agente'
        };

        this.projectNodes.push(agentModelNode);

        const agentMemoryNode: Node={
            position:{
                x:515,
                y:550
            },
            dimension: {
                width: 250,
                height: 250
            },
            data:{
                color: '#3838E5'
            },
            id:'agent_memory',
            label:'Memoria del agente'
        };

        this.projectNodes.push(agentMemoryNode);

        const agentToolsNode: Node={
            position:{
                x:700,
                y:265
            },
            dimension: {
                width: 250,
                height: 250
            },
            data:{
                color: '#3BC7E3'
            },
            id:'agent_tools',
            label:'Herramientas del agente'
        };

        this.projectNodes.push(agentToolsNode);

    }

    private fillLinks(){
        const edge01:Edge={
            source: 'agent_project',
            target: 'Agente_ia',
            id:'agent_project_link_01',
            label:'agent project'
        };

        this.nodesLinks.push(edge01);

        const edge02:Edge={
            source: 'Agente_ia',
            target: 'agent_model',
            id:'Agente_ia_link_01',
            label:'agent ia'
        };

        this.nodesLinks.push(edge02);

        const edge03:Edge={
            source: 'Agente_ia',
            target: 'agent_memory',
            id:'Agente_ia_link_02',
            label:''
        };

        this.nodesLinks.push(edge03);

        const edge04:Edge={
            source: 'Agente_ia',
            target: 'agent_tools',
            id:'agent_ia_link_03',
            label:''
        };
        this.nodesLinks.push(edge04);
    }

    graphClicked(event:any){
        console.log(event);

        this.close();

        const component = event.srcElement.attributes[1].nodeValue;

        switch (component) {
            case 'agent_project':
                this.title.set('Proyecto');
                this.isOpenModalProyectoAgente=signal(true);
                break;
            case 'Agente_ia':
                this.title.set('Agente');
                this.isOpenModalAgenteIa.set(true);
                break;
            case 'agent_model':
                this.title.set('Modelo');
                this.isOpenModalAgenteModelo.set(true);
                break;
            case 'agent_memory':
                this.title.set('Memoria');
                this.isOpenModalAgenteMemoria.set(true);
                break;
            case 'agent_tools':
                this.title.set('Herramientas');
                this.isOpenModalAgenteHerramientas.set(true);
                break;
        }

    }

    close(){
        if(this.isOpenModalProyectoAgente()){
            this.isOpenModalProyectoAgente = signal(false);
        }

        if(this.isOpenModalAgenteIa()){
            this.isOpenModalAgenteIa = signal(false);
        }

        if(this.isOpenModalAgenteModelo()){
            this.isOpenModalAgenteModelo = signal(false);
        }

        if(this.isOpenModalAgenteMemoria()){
            this.isOpenModalAgenteMemoria = signal(false);
        }

        if(this.isOpenModalAgenteHerramientas()){
            this.isOpenModalAgenteHerramientas = signal(false);
        }
    }

    uploadProject(){}

    private createProjectModel(){}

}
