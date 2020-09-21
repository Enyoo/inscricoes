import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Usuario } from '../models/usuario';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usuario: Usuario;
  constructor(private http: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  login(auth: Usuario): Observable<Usuario>{
      return this.http.post<Usuario>(environment.baseUrl+'login', auth, this.httpOptions);
  }
}
