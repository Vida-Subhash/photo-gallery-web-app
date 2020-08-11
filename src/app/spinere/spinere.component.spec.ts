import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinereComponent } from './spinere.component';

describe('SpinereComponent', () => {
  let component: SpinereComponent;
  let fixture: ComponentFixture<SpinereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpinereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
