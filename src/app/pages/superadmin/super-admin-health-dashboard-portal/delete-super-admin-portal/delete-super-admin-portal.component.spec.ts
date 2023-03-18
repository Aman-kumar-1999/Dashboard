import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSuperAdminPortalComponent } from './delete-super-admin-portal.component';

describe('DeleteSuperAdminPortalComponent', () => {
  let component: DeleteSuperAdminPortalComponent;
  let fixture: ComponentFixture<DeleteSuperAdminPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteSuperAdminPortalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteSuperAdminPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
