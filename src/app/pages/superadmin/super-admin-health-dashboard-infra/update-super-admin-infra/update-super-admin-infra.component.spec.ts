import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSuperAdminInfraComponent } from './update-super-admin-infra.component';

describe('UpdateSuperAdminInfraComponent', () => {
  let component: UpdateSuperAdminInfraComponent;
  let fixture: ComponentFixture<UpdateSuperAdminInfraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSuperAdminInfraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateSuperAdminInfraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
