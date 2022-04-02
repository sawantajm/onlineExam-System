import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Csharplevel3Component } from './csharplevel3.component';

describe('Csharplevel3Component', () => {
  let component: Csharplevel3Component;
  let fixture: ComponentFixture<Csharplevel3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Csharplevel3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Csharplevel3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
