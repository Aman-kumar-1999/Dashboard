import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAdminHealthDashboardCotsComponent } from './super-admin-health-dashboard-cots.component';

describe('SuperAdminHealthDashboardCotsComponent', () => {
  let component: SuperAdminHealthDashboardCotsComponent;
  let fixture: ComponentFixture<SuperAdminHealthDashboardCotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperAdminHealthDashboardCotsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperAdminHealthDashboardCotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
