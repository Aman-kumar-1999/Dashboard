import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHealthDashboardAppOemComponent } from './user-health-dashboard-app-oem.component';

describe('UserHealthDashboardAppOemComponent', () => {
  let component: UserHealthDashboardAppOemComponent;
  let fixture: ComponentFixture<UserHealthDashboardAppOemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserHealthDashboardAppOemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserHealthDashboardAppOemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
