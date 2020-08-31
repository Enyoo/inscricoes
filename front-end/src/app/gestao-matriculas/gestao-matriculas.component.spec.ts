import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestaoMatriculasComponent } from './gestao-matriculas.component';

describe('GestaoMatriculasComponent', () => {
  let component: GestaoMatriculasComponent;
  let fixture: ComponentFixture<GestaoMatriculasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestaoMatriculasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestaoMatriculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
