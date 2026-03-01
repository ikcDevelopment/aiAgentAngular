import {Component, Input, SimpleChanges} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {AgentProjectService} from '../../services/memory/agent-project/agent-project-service';
import {ToolsModel} from '../../services/memory/agent-project/tools-model';

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
    @Input() chatId:string='';
    componentTitle: string = 'Agent Tools';
    msg:string = '';

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

    /**
     * These properties are sent from any component that needs setting users
     *
     * first gets into ngOnChanges and then on ngOnInit
     * @param changes
     */
    ngOnChanges(changes: SimpleChanges): void {
        let propsRead: number = 0;

        for (const propName in changes) {
            this.form.controls.chatId.setValue(this.chatId);
        }
    }

    submit(){
        if(this.form.dirty){
            if (this.form.status == 'VALID') {
                this.projectInMemorDb.addUpdateTools(this.chatId, this.createToolsModel());
                this.msg = this.projectInMemorDb.msg;
                console.log(this.projectInMemorDb.db);
            }
        }
    }

    uploadTools(){}

    private createToolsModel(): ToolsModel{
        const body:ToolsModel={
            agenda: '', catalogo_vehiculos: '', chatId: '', consultas_generales: ''}

        return body;
    }

}
