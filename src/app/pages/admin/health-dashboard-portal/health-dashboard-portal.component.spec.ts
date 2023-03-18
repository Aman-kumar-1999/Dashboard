import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthDashboardPortalComponent } from './health-dashboard-portal.component';

describe('HealthDashboardPortalComponent', () => {
  let component: HealthDashboardPortalComponent;
  let fixture: ComponentFixture<HealthDashboardPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthDashboardPortalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthDashboardPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
