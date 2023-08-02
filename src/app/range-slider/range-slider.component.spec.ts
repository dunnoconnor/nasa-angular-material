import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeSliderComponent } from './range-slider.component';
import { MaterialModule } from '../material/material.module';

describe('RangeSliderComponent', () => {
  let component: RangeSliderComponent;
  let fixture: ComponentFixture<RangeSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [RangeSliderComponent]
    });
    fixture = TestBed.createComponent(RangeSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
