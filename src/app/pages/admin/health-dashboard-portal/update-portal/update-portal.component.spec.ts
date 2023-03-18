import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePortalComponent } from './update-portal.component';

describe('UpdatePortalComponent', () => {
  let component: UpdatePortalComponent;
  let fixture: ComponentFixture<UpdatePortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePortalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatePortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
