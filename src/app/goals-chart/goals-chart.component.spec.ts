import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalsChartComponent } from './goals-chart.component';

describe('GoalsChartComponent', () => {
  let component: GoalsChartComponent;
  let fixture: ComponentFixture<GoalsChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoalsChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoalsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
