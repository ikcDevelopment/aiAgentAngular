import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentProject } from './agent-project';

describe('AgentProject', () => {
  let component: AgentProject;
  let fixture: ComponentFixture<AgentProject>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgentProject]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgentProject);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
