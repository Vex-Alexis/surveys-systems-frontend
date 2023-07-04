import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsurveyComponent } from './listsurvey.component';

describe('ListsurveyComponent', () => {
  let component: ListsurveyComponent;
  let fixture: ComponentFixture<ListsurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListsurveyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListsurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
