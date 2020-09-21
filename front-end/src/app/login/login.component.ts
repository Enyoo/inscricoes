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
  usuario: Usuario = new Usuario;
  constructor(private router: Router, private service: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    this.usuario.usuario = f.value.login;
    this.usuario.senha = f.value.senha;
    if(f.value.login == 'enyo'){
      // this.router.navigate(['/coordenacao']);

      this.service.login(this.usuario).subscribe({
        next: retorno => console.info(retorno),
        complete: ()=>console.warn('sessao')
      });
    }


    if(f.value.login == f.value.senha){
      // this.router.navigate(['/aluno']);
      this.service.login(this.usuario).subscribe({
        next: retorno => console.info(retorno),
        complete: ()=>console.warn('sessao')
      });
    }
  }

}
