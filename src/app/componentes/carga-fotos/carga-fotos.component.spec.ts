import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargaFotosComponent } from './carga-fotos.component';

describe('CargaFotosComponent', () => {
  let component: CargaFotosComponent;
  let fixture: ComponentFixture<CargaFotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargaFotosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CargaFotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
