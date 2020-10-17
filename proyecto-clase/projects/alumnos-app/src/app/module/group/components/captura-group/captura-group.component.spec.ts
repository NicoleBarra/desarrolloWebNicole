import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapturaGroupComponent } from './captura-group.component';

describe('CapturaGroupComponent', () => {
  let component: CapturaGroupComponent;
  let fixture: ComponentFixture<CapturaGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapturaGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CapturaGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
