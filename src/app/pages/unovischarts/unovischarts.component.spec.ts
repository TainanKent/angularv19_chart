import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnovischartsComponent } from './unovischarts.component';

describe('UnovischartsComponent', () => {
  let component: UnovischartsComponent;
  let fixture: ComponentFixture<UnovischartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnovischartsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnovischartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
