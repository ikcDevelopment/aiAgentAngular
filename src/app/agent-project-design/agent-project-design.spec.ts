import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentProjectDesign } from './agent-project-design';

describe('AgentProjectDesign', () => {
  let component: AgentProjectDesign;
  let fixture: ComponentFixture<AgentProjectDesign>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgentProjectDesign]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgentProjectDesign);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
