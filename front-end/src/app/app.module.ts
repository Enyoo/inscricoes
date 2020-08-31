import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoordenacaoComponent } from './coordenacao/coordenacao.component';
import { AlunosComponent } from './alunos/alunos.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { CadastroProfessorComponent } from './cadastro-professor/cadastro-professor.component';
import { CadastroOfertaComponent } from './cadastro-oferta/cadastro-oferta.component';
import { CadastroAlunosComponent } from './cadastro-alunos/cadastro-alunos.component';
import { GestaoMatriculasComponent } from './gestao-matriculas/gestao-matriculas.component';
import { GestaoMatriculasDisciplinaComponent } from './gestao-matriculas-disciplina/gestao-matriculas-disciplina.component';

@NgModule({
  declarations: [
    AppComponent,
    CoordenacaoComponent,
    AlunosComponent,
    LoginComponent,
    CadastroProfessorComponent,
    CadastroOfertaComponent,
    CadastroAlunosComponent,
    GestaoMatriculasComponent,
    GestaoMatriculasDisciplinaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
