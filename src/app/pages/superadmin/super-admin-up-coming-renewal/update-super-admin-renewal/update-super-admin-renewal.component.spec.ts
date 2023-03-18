import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSuperAdminRenewalComponent } from './update-super-admin-renewal.component';

describe('UpdateSuperAdminRenewalComponent', () => {
  let component: UpdateSuperAdminRenewalComponent;
  let fixture: ComponentFixture<UpdateSuperAdminRenewalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSuperAdminRenewalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateSuperAdminRenewalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
