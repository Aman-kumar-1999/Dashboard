import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSuperAdminOemComponent } from './delete-super-admin-oem.component';

describe('DeleteSuperAdminOemComponent', () => {
  let component: DeleteSuperAdminOemComponent;
  let fixture: ComponentFixture<DeleteSuperAdminOemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteSuperAdminOemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteSuperAdminOemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
