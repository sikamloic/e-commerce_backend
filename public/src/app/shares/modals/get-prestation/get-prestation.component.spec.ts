import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPrestationComponent } from './get-prestation.component';

describe('GetPrestationComponent', () => {
  let component: GetPrestationComponent;
  let fixture: ComponentFixture<GetPrestationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetPrestationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetPrestationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
