import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAdminHealthDashboardAppOemComponent } from './super-admin-health-dashboard-app-oem.component';

describe('SuperAdminHealthDashboardAppOemComponent', () => {
  let component: SuperAdminHealthDashboardAppOemComponent;
  let fixture: ComponentFixture<SuperAdminHealthDashboardAppOemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperAdminHealthDashboardAppOemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperAdminHealthDashboardAppOemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
