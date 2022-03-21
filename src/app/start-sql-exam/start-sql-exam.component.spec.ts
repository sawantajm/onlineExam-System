import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartSqlExamComponent } from './start-sql-exam.component';

describe('StartSqlExamComponent', () => {
  let component: StartSqlExamComponent;
  let fixture: ComponentFixture<StartSqlExamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartSqlExamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartSqlExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
