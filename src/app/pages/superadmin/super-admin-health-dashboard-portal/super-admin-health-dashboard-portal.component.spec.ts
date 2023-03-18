import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAdminHealthDashboardPortalComponent } from './super-admin-health-dashboard-portal.component';

describe('SuperAdminHealthDashboardPortalComponent', () => {
  let component: SuperAdminHealthDashboardPortalComponent;
  let fixture: ComponentFixture<SuperAdminHealthDashboardPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperAdminHealthDashboardPortalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperAdminHealthDashboardPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
