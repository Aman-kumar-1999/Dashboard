import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSuperAdminRenewalComponent } from './delete-super-admin-renewal.component';

describe('DeleteSuperAdminRenewalComponent', () => {
  let component: DeleteSuperAdminRenewalComponent;
  let fixture: ComponentFixture<DeleteSuperAdminRenewalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteSuperAdminRenewalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteSuperAdminRenewalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
