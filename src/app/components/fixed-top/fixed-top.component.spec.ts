import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedTopComponent } from './fixed-top.component';

describe('FixedTopComponent', () => {
  let component: FixedTopComponent;
  let fixture: ComponentFixture<FixedTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixedTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
