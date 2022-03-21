import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartcsharpexamComponent } from './startcsharpexam.component';

describe('StartcsharpexamComponent', () => {
  let component: StartcsharpexamComponent;
  let fixture: ComponentFixture<StartcsharpexamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartcsharpexamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartcsharpexamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
