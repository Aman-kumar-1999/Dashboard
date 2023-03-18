import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSuperAdminCotsComponent } from './update-super-admin-cots.component';

describe('UpdateSuperAdminCotsComponent', () => {
  let component: UpdateSuperAdminCotsComponent;
  let fixture: ComponentFixture<UpdateSuperAdminCotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSuperAdminCotsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateSuperAdminCotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
