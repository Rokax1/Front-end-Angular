import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaActividadesComponent } from './area-actividades.component';

describe('AreaActividadesComponent', () => {
  let component: AreaActividadesComponent;
  let fixture: ComponentFixture<AreaActividadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaActividadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaActividadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
