import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrariesAgents } from './libraries-agents';

describe('LibrariesAgents', () => {
  let component: LibrariesAgents;
  let fixture: ComponentFixture<LibrariesAgents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibrariesAgents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibrariesAgents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
