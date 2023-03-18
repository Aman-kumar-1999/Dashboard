import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAdminHealthDashboardInfraComponent } from './super-admin-health-dashboard-infra.component';

describe('SuperAdminHealthDashboardInfraComponent', () => {
  let component: SuperAdminHealthDashboardInfraComponent;
  let fixture: ComponentFixture<SuperAdminHealthDashboardInfraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperAdminHealthDashboardInfraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperAdminHealthDashboardInfraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
