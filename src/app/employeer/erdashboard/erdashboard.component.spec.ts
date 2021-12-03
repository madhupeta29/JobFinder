import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErdashboardComponent } from './erdashboard.component';

describe('ErdashboardComponent', () => {
  let component: ErdashboardComponent;
  let fixture: ComponentFixture<ErdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErdashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
