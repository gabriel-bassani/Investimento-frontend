import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadialbarChartComponent } from './radialbar-chart.component';

describe('RadialbarChartComponent', () => {
  let component: RadialbarChartComponent;
  let fixture: ComponentFixture<RadialbarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadialbarChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadialbarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
