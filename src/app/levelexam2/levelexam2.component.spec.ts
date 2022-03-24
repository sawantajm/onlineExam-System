import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Levelexam2Component } from './levelexam2.component';

describe('Levelexam2Component', () => {
  let component: Levelexam2Component;
  let fixture: ComponentFixture<Levelexam2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Levelexam2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Levelexam2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
