import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncabezadoLogeadoComponent } from './encabezado-logeado.component';

describe('EncabezadoLogeadoComponent', () => {
  let component: EncabezadoLogeadoComponent;
  let fixture: ComponentFixture<EncabezadoLogeadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncabezadoLogeadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EncabezadoLogeadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
