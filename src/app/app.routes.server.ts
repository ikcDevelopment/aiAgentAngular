import { RenderMode, ServerRoute } from '@angular/ssr';
import {AiAgentEditor} from './ai-agent-editor/ai-agent-editor';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
