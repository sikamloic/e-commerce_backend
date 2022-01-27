import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCoiffeuseComponent } from './dashboard-coiffeuse.component';

describe('DashboardCoiffeuseComponent', () => {
  let component: DashboardCoiffeuseComponent;
  let fixture: ComponentFixture<DashboardCoiffeuseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardCoiffeuseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardCoiffeuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
