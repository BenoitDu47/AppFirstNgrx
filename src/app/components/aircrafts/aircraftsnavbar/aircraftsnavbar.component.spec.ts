import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AircraftsnavbarComponent } from './aircraftsnavbar.component';

describe('AircraftsnavbarComponent', () => {
  let component: AircraftsnavbarComponent;
  let fixture: ComponentFixture<AircraftsnavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AircraftsnavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AircraftsnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
