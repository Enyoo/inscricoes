import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AlunosComponent } from './alunos/alunos.component';
import { CoordenacaoComponent } from './coordenacao/coordenacao.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
