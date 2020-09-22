import { Usuario } from './../models/usuario';
import { AuthService } from './../services/auth.service';
import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  acessando = '';
  usuario: Usuario = new Usuario;
  erro = '';
  constructor(private router: Router, private service: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    this.erro = '';
    this.acessando = 'carregando...';
    this.usuario.usuario = f.value.login;
    this.usuario.senha = f.value.senha;
    if(this.usuario.usuario == 'enyoc' || this.usuario.usuario == 'caef'){
      if(this.usuario.senha == '@caef@ifce@'){
        this.router.navigate(['/coordenacao']);
      }
      this.service.login(this.usuario).subscribe({
        next: retorno => {
          if(retorno == null) {
            this.acessando = '';
            return this.erro = 'Usuário ou senha incorreto.';
          }
        },
        complete: ()=>console.warn(this.usuario)
      });
    }


    if(this.usuario.usuario == this.usuario.senha){
      this.service.login(this.usuario).subscribe({
        next: retorno => {
          if(retorno == null) {
            this.acessando = '';
            return this.erro = 'Usuário ou senha incorreto.';
          }
          this.service.usuario = retorno;
          console.info(retorno);
        },
        complete: ()=>{
          if(this.erro == ''){
            console.log(this.service.usuario);
            this.service.usuarioAutenticado(true);
            this.router.navigate(['/aluno']);
          }
        }
      })
    }
  }

}
