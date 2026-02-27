import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleAgents } from './example-agents';

describe('ExampleAgents', () => {
  let component: ExampleAgents;
  let fixture: ComponentFixture<ExampleAgents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExampleAgents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleAgents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
