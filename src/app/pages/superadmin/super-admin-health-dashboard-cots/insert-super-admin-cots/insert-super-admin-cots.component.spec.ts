import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertSuperAdminCotsComponent } from './insert-super-admin-cots.component';

describe('InsertSuperAdminCotsComponent', () => {
  let component: InsertSuperAdminCotsComponent;
  let fixture: ComponentFixture<InsertSuperAdminCotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertSuperAdminCotsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertSuperAdminCotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
