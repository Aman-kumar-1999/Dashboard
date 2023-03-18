import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthDashboardAppOemComponent } from './health-dashboard-app-oem.component';

describe('HealthDashboardAppOemComponent', () => {
  let component: HealthDashboardAppOemComponent;
  let fixture: ComponentFixture<HealthDashboardAppOemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthDashboardAppOemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthDashboardAppOemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
