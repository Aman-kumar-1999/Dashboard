import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertCotsComponent } from './insert-cots.component';

describe('InsertCotsComponent', () => {
  let component: InsertCotsComponent;
  let fixture: ComponentFixture<InsertCotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertCotsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertCotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
