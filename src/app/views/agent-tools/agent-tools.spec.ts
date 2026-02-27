import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentTools } from './agent-tools';

describe('AgentTools', () => {
  let component: AgentTools;
  let fixture: ComponentFixture<AgentTools>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgentTools]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgentTools);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
