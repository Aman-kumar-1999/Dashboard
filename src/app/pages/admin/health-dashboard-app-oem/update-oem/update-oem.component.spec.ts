import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOemComponent } from './update-oem.component';

describe('UpdateOemComponent', () => {
  let component: UpdateOemComponent;
  let fixture: ComponentFixture<UpdateOemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateOemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateOemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
