import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCotsComponent } from './update-cots.component';

describe('UpdateCotsComponent', () => {
  let component: UpdateCotsComponent;
  let fixture: ComponentFixture<UpdateCotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCotsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateCotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
