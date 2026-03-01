import { Routes } from '@angular/router';
import {AiAgentEditor} from './ai-agent-editor/ai-agent-editor';
import {AiAgentDescription} from './ai-agent-description/ai-agent-description';
import {DesignAgents} from './design-agents/design-agents';
import {LibrariesAgents} from './libraries-agents/libraries-agents';
import {ExampleAgents} from './example-agents/example-agents';
import {AgentAiComponent} from './agent-ai-component/agent-ai-component';
import {AgentProjectDesign} from './agent-project-design/agent-project-design';

export const routes: Routes = [

  {
    path: 'editor',
    component: AiAgentEditor
  },
  {
    path: 'description',
    component: AiAgentDescription
  },
  {
    path: 'design',
    component: DesignAgents
  },
  {
    path: 'libraries',
    component: LibrariesAgents
  },
  {
    path: 'example',
    component: ExampleAgents
  },
    {
        path: 'prompt',
        component: AgentAiComponent
    },
    {
        path:'ai-agent',
        component: AgentProjectDesign
    },
  {
    path: '**',
    component: AiAgentEditor
  }
];
