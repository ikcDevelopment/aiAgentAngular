import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiAgentDescription } from './ai-agent-description';

describe('AiAgentDescription', () => {
  let component: AiAgentDescription;
  let fixture: ComponentFixture<AiAgentDescription>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiAgentDescription]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiAgentDescription);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
