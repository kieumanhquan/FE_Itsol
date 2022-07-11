import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilerecruitComponent } from './filerecruit.component';

describe('FilerecruitComponent', () => {
  let component: FilerecruitComponent;
  let fixture: ComponentFixture<FilerecruitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilerecruitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilerecruitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
