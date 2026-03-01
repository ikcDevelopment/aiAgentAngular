import { TestBed } from '@angular/core/testing';

import { AgentProjectService } from './agent-project-service';

describe('AgentProjectService', () => {
  let service: AgentProjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgentProjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
