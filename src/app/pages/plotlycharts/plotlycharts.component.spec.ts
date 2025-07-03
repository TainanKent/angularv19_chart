import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotlychartsComponent } from './plotlycharts.component';

describe('PlotlychartsComponent', () => {
  let component: PlotlychartsComponent;
  let fixture: ComponentFixture<PlotlychartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlotlychartsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlotlychartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
