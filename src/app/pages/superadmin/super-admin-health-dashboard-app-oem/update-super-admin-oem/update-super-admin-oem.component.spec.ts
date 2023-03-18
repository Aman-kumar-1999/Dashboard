import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSuperAdminOemComponent } from './update-super-admin-oem.component';

describe('UpdateSuperAdminOemComponent', () => {
  let component: UpdateSuperAdminOemComponent;
  let fixture: ComponentFixture<UpdateSuperAdminOemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSuperAdminOemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateSuperAdminOemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
