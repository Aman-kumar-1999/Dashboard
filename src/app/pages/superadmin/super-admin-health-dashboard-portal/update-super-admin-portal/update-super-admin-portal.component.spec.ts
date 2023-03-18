import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSuperAdminPortalComponent } from './update-super-admin-portal.component';

describe('UpdateSuperAdminPortalComponent', () => {
  let component: UpdateSuperAdminPortalComponent;
  let fixture: ComponentFixture<UpdateSuperAdminPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSuperAdminPortalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateSuperAdminPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
