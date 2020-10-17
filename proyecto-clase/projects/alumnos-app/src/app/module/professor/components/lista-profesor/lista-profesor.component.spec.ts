import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaProfesorComponent } from './lista-profesor.component';

describe('ListaProfesorComponent', () => {
  let component: ListaProfesorComponent;
  let fixture: ComponentFixture<ListaProfesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaProfesorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
