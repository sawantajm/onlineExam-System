import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConductExamComponent } from './conduct-exam.component';

describe('ConductExamComponent', () => {
  let component: ConductExamComponent;
  let fixture: ComponentFixture<ConductExamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConductExamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConductExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
