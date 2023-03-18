import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSuperAdminInfraComponent } from './delete-super-admin-infra.component';

describe('DeleteSuperAdminInfraComponent', () => {
  let component: DeleteSuperAdminInfraComponent;
  let fixture: ComponentFixture<DeleteSuperAdminInfraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteSuperAdminInfraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteSuperAdminInfraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
