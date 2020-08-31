import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroOfertaComponent } from './cadastro-oferta.component';

describe('CadastroOfertaComponent', () => {
  let component: CadastroOfertaComponent;
  let fixture: ComponentFixture<CadastroOfertaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroOfertaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroOfertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
