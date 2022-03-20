import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueAddRemoveComponent } from './que-add-remove.component';

describe('QueAddRemoveComponent', () => {
  let component: QueAddRemoveComponent;
  let fixture: ComponentFixture<QueAddRemoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueAddRemoveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QueAddRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
