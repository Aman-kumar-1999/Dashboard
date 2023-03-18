import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertSuperAdminInfraComponent } from './insert-super-admin-infra.component';

describe('InsertSuperAdminInfraComponent', () => {
  let component: InsertSuperAdminInfraComponent;
  let fixture: ComponentFixture<InsertSuperAdminInfraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertSuperAdminInfraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertSuperAdminInfraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
