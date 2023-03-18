import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertInfraComponent } from './insert-infra.component';

describe('InsertInfraComponent', () => {
  let component: InsertInfraComponent;
  let fixture: ComponentFixture<InsertInfraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertInfraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertInfraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
