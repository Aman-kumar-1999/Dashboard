import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserUpComingRenewalComponent } from './user-up-coming-renewal.component';

describe('UserUpComingRenewalComponent', () => {
  let component: UserUpComingRenewalComponent;
  let fixture: ComponentFixture<UserUpComingRenewalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserUpComingRenewalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserUpComingRenewalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
