import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertSuperAdminPortalComponent } from './insert-super-admin-portal.component';

describe('InsertSuperAdminPortalComponent', () => {
  let component: InsertSuperAdminPortalComponent;
  let fixture: ComponentFixture<InsertSuperAdminPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertSuperAdminPortalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertSuperAdminPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
