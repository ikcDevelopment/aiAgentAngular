import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentModel } from './agent-model';

describe('AgentModel', () => {
  let component: AgentModel;
  let fixture: ComponentFixture<AgentModel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgentModel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgentModel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
