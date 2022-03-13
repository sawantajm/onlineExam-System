import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampageComponent } from './exampage.component';

describe('ExampageComponent', () => {
  let component: ExampageComponent;
  let fixture: ComponentFixture<ExampageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
