import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScriptlanesHeadingComponent } from './scriptlanes-heading.component';

describe('ScriptlanesHeadingComponent', () => {
  let component: ScriptlanesHeadingComponent;
  let fixture: ComponentFixture<ScriptlanesHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScriptlanesHeadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScriptlanesHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
