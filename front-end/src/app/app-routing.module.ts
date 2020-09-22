import { AuthGuardService } from './guards/auth.guard';
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
    component: AlunosComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'coordenacao',
    component: CoordenacaoComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'cadastro-oferta',
    component: CadastroOfertaComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'cadastro-professor',
    component: CadastroProfessorComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'cadastro-alunos',
    component: CadastroAlunosComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'gestao-matriculas',
    component: GestaoMatriculasComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'gestao-matriculas-disciplina',
    component: GestaoMatriculasDisciplinaComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    component: LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
