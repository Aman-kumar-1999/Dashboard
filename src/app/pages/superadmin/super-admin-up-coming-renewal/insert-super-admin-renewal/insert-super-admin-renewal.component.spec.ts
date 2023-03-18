import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertSuperAdminRenewalComponent } from './insert-super-admin-renewal.component';

describe('InsertSuperAdminRenewalComponent', () => {
  let component: InsertSuperAdminRenewalComponent;
  let fixture: ComponentFixture<InsertSuperAdminRenewalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertSuperAdminRenewalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertSuperAdminRenewalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
