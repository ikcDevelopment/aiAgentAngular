import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentMemory } from './agent-memory';

describe('AgentMemory', () => {
  let component: AgentMemory;
  let fixture: ComponentFixture<AgentMemory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgentMemory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgentMemory);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
