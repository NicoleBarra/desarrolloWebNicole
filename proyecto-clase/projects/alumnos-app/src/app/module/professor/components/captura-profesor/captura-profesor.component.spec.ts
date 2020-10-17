import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapturaProfesorComponent } from './captura-profesor.component';

describe('CapturaProfesorComponent', () => {
  let component: CapturaProfesorComponent;
  let fixture: ComponentFixture<CapturaProfesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapturaProfesorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CapturaProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
