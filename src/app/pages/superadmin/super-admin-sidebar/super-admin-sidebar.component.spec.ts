import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAdminSidebarComponent } from './super-admin-sidebar.component';

describe('SuperAdminSidebarComponent', () => {
  let component: SuperAdminSidebarComponent;
  let fixture: ComponentFixture<SuperAdminSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperAdminSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperAdminSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
