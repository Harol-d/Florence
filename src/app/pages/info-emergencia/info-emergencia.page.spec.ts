import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoEmergenciaPage } from './info-emergencia.page';

describe('InfoEmergenciaPage', () => {
  let component: InfoEmergenciaPage;
  let fixture: ComponentFixture<InfoEmergenciaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoEmergenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
