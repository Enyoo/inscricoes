import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Modalidade } from '../models/modalidade';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ModalidadesService {

  constructor(private http: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  modalidades(): Observable<Modalidade[]>{
    return this.http.get<Modalidade[]>(environment.baseUrl+'modalidades');
  }
  modalidadesNomes(): Observable<string[]>{
      return this.http.get<string[]>(environment.baseUrl+'modalidades/nomes');
  }
  modalidadesTipos(modalidade:Modalidade): Observable<string[]>{
      return this.http.post<string[]>(environment.baseUrl+'modalidades/tipos', modalidade);
  }
  modalidadesDias(modalidade:Modalidade): Observable<string[]>{
      return this.http.post<string[]>(environment.baseUrl+'modalidades/dias', modalidade);
  }
  modalidadesNiveis(modalidade:Modalidade): Observable<string[]>{
      return this.http.post<string[]>(environment.baseUrl+'modalidades/niveis', modalidade);
  }
  modalidadesHorarios(modalidade:Modalidade): Observable<string[]>{
      return this.http.post<string[]>(environment.baseUrl+'modalidades/horarios', modalidade);
  }

  matricularAluno(dados):Observable<boolean> {
    return this.http.post<boolean>(environment.baseUrl+'matricula/salvar', dados, this.httpOptions);
  }
}
