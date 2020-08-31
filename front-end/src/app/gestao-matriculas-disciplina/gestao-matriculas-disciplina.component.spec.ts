import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestaoMatriculasDisciplinaComponent } from './gestao-matriculas-disciplina.component';

describe('GestaoMatriculasDisciplinaComponent', () => {
  let component: GestaoMatriculasDisciplinaComponent;
  let fixture: ComponentFixture<GestaoMatriculasDisciplinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestaoMatriculasDisciplinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestaoMatriculasDisciplinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
