import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertPortalComponent } from './insert-portal.component';

describe('InsertPortalComponent', () => {
  let component: InsertPortalComponent;
  let fixture: ComponentFixture<InsertPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertPortalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
