import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHealthDashboardCotsComponent } from './user-health-dashboard-cots.component';

describe('UserHealthDashboardCotsComponent', () => {
  let component: UserHealthDashboardCotsComponent;
  let fixture: ComponentFixture<UserHealthDashboardCotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserHealthDashboardCotsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserHealthDashboardCotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
