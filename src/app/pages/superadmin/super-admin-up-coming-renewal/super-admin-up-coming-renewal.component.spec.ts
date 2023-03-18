import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAdminUpComingRenewalComponent } from './super-admin-up-coming-renewal.component';

describe('SuperAdminUpComingRenewalComponent', () => {
  let component: SuperAdminUpComingRenewalComponent;
  let fixture: ComponentFixture<SuperAdminUpComingRenewalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperAdminUpComingRenewalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperAdminUpComingRenewalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
