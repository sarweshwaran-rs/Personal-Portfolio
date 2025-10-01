import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutDetails } from './about-details';

describe('AboutDetails', () => {
  let component: AboutDetails;
  let fixture: ComponentFixture<AboutDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
