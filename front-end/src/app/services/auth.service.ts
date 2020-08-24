import { Injectable } from '@angular/core';

import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usuario: Usuario;
  constructor() { }


  login(auth: Usuario){
    if(auth.tipo == 1){
      console.log('admin');
      return;
    }
    console.log(auth.usuario, auth.senha, auth.tipo);
    return;
  }
}
