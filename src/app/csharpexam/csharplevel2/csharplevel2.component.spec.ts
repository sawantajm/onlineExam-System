import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Csharplevel2Component } from './csharplevel2.component';

describe('Csharplevel2Component', () => {
  let component: Csharplevel2Component;
  let fixture: ComponentFixture<Csharplevel2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Csharplevel2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Csharplevel2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
