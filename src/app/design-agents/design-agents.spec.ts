import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignAgents } from './design-agents';

describe('DesignAgents', () => {
  let component: DesignAgents;
  let fixture: ComponentFixture<DesignAgents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesignAgents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesignAgents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
