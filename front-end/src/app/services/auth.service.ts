import { Aluno } from './../models/Aluno';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Usuario } from '../models/usuario';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  usuario: Aluno;
  autenticado: boolean = false;
  constructor(private http: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  login(auth: Usuario): Observable<Aluno>{
      return this.http.post<Aluno>(environment.baseUrl+'login', auth, this.httpOptions);
  }

  usuarioAutenticado(state: boolean):void{
    this.autenticado = state;
  }

  dadosUsuarioAutenticado():Aluno{
    return this.usuario;
  }
}
