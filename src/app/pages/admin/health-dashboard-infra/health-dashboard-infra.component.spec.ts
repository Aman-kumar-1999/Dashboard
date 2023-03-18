import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthDashboardInfraComponent } from './health-dashboard-infra.component';

describe('HealthDashboardInfraComponent', () => {
  let component: HealthDashboardInfraComponent;
  let fixture: ComponentFixture<HealthDashboardInfraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthDashboardInfraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthDashboardInfraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
