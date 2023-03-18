import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthDashboardCotsComponent } from './health-dashboard-cots.component';

describe('HealthDashboardCotsComponent', () => {
  let component: HealthDashboardCotsComponent;
  let fixture: ComponentFixture<HealthDashboardCotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthDashboardCotsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthDashboardCotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
