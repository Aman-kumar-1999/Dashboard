import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSuperAdminCotsComponent } from './delete-super-admin-cots.component';

describe('DeleteSuperAdminCotsComponent', () => {
  let component: DeleteSuperAdminCotsComponent;
  let fixture: ComponentFixture<DeleteSuperAdminCotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteSuperAdminCotsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteSuperAdminCotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
