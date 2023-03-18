import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateInfraComponent } from './update-infra.component';

describe('UpdateInfraComponent', () => {
  let component: UpdateInfraComponent;
  let fixture: ComponentFixture<UpdateInfraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateInfraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateInfraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
