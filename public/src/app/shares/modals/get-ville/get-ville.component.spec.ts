import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetVilleComponent } from './get-ville.component';

describe('GetVilleComponent', () => {
  let component: GetVilleComponent;
  let fixture: ComponentFixture<GetVilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetVilleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetVilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
