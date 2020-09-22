import { AuthService } from './services/auth.service';
import { AuthGuardService } from './guards/auth.guard';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';

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
    GestaoMatriculasDisciplinaComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
