import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiAgentEditor } from './ai-agent-editor';

describe('AiAgentEditor', () => {
  let component: AiAgentEditor;
  let fixture: ComponentFixture<AiAgentEditor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiAgentEditor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiAgentEditor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
