import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertRenewalComponent } from './insert-renewal.component';

describe('InsertRenewalComponent', () => {
  let component: InsertRenewalComponent;
  let fixture: ComponentFixture<InsertRenewalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertRenewalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertRenewalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
