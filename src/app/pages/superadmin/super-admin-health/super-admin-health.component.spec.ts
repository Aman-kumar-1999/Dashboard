import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAdminHealthComponent } from './super-admin-health.component';

describe('SuperAdminHealthComponent', () => {
  let component: SuperAdminHealthComponent;
  let fixture: ComponentFixture<SuperAdminHealthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperAdminHealthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperAdminHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
