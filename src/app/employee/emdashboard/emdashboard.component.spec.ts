import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmdashboardComponent } from './emdashboard.component';

describe('EmdashboardComponent', () => {
  let component: EmdashboardComponent;
  let fixture: ComponentFixture<EmdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmdashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
