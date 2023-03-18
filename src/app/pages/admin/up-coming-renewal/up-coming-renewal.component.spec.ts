import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpComingRenewalComponent } from './up-coming-renewal.component';

describe('UpComingRenewalComponent', () => {
  let component: UpComingRenewalComponent;
  let fixture: ComponentFixture<UpComingRenewalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpComingRenewalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpComingRenewalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
