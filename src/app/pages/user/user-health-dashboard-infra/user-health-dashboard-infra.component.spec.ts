import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHealthDashboardInfraComponent } from './user-health-dashboard-infra.component';

describe('UserHealthDashboardInfraComponent', () => {
  let component: UserHealthDashboardInfraComponent;
  let fixture: ComponentFixture<UserHealthDashboardInfraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserHealthDashboardInfraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserHealthDashboardInfraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
