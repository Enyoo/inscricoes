import { GestaoMatriculasDisciplinaComponent } from './gestao-matriculas-disciplina/gestao-matriculas-disciplina.component';
import { CadastroProfessorComponent } from './cadastro-professor/cadastro-professor.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AlunosComponent } from './alunos/alunos.component';
import { CoordenacaoComponent } from './coordenacao/coordenacao.component';
import { GestaoMatriculasComponent } from './gestao-matriculas/gestao-matriculas.component';
import { CadastroAlunosComponent } from './cadastro-alunos/cadastro-alunos.component';
import { CadastroOfertaComponent } from './cadastro-oferta/cadastro-oferta.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'aluno',
    component: AlunosComponent
  },
  {
    path: 'coordenacao',
    component: CoordenacaoComponent
  },
  {
    path: 'cadastro-oferta',
    component: CadastroOfertaComponent
  },
  {
    path: 'cadastro-professor',
    component: CadastroProfessorComponent
  },
  {
    path: 'cadastro-alunos',
    component: CadastroAlunosComponent
  },
  {
    path: 'gestao-matriculas',
    component: GestaoMatriculasComponent
  },
  {
    path: 'gestao-matriculas-disciplina',
    component: GestaoMatriculasDisciplinaComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
