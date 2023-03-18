import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHealthDashboardPortalComponent } from './user-health-dashboard-portal.component';

describe('UserHealthDashboardPortalComponent', () => {
  let component: UserHealthDashboardPortalComponent;
  let fixture: ComponentFixture<UserHealthDashboardPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserHealthDashboardPortalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserHealthDashboardPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
