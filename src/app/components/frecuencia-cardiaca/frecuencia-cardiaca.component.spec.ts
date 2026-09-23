import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrecuenciaCardiacaComponent } from './frecuencia-cardiaca.component';

describe('FrecuenciaCardiacaComponent', () => {
  let component: FrecuenciaCardiacaComponent;
  let fixture: ComponentFixture<FrecuenciaCardiacaComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FrecuenciaCardiacaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
