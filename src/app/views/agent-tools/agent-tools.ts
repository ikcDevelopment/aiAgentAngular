import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {AgentProjectService} from '../../services/memory/agent-project/agent-project-service';

@Component({
  selector: 'app-agent-tools',
  imports: [
      FormsModule,
      ReactiveFormsModule
  ],
  templateUrl: './agent-tools.html',
  styleUrl: './agent-tools.css',
})
export class AgentTools {
    componentTitle: string = 'Agent Tools';

    // Consultas generales
    // catalogo de vehiculos
    // agendamiento de citas

    form = new FormGroup({
        'chatId': new FormControl('', [Validators.required, Validators.minLength(5)]),
        'consultas_generales': new FormControl('', Validators.required),
        'catalogo_vehiculos': new FormControl('', Validators.required),
        'agenda': new FormControl('', Validators.required)
    });

    constructor( private projectInMemorDb:AgentProjectService) {
    }

    submit(){

    }

    uploadTools(){}

    private createToolsModel(){}

}
