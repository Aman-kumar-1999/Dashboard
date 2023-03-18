import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertSuperAdminOemComponent } from './insert-super-admin-oem.component';

describe('InsertSuperAdminOemComponent', () => {
  let component: InsertSuperAdminOemComponent;
  let fixture: ComponentFixture<InsertSuperAdminOemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertSuperAdminOemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertSuperAdminOemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
