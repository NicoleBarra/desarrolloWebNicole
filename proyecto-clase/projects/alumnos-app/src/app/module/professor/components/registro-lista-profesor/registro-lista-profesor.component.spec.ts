import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroListaProfesorComponent } from './registro-lista-profesor.component';

describe('RegistroListaProfesorComponent', () => {
  let component: RegistroListaProfesorComponent;
  let fixture: ComponentFixture<RegistroListaProfesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroListaProfesorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroListaProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
