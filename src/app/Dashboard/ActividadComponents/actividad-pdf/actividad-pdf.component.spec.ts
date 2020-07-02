import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadPdfComponent } from './actividad-pdf.component';

describe('ActividadPdfComponent', () => {
  let component: ActividadPdfComponent;
  let fixture: ComponentFixture<ActividadPdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActividadPdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActividadPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
