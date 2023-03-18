import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertOemComponent } from './insert-oem.component';

describe('InsertOemComponent', () => {
  let component: InsertOemComponent;
  let fixture: ComponentFixture<InsertOemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertOemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertOemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
