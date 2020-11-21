import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ConsultaEnderecoService {

  constructor(private http: HttpClient) {}

  public getEndereco(cep: number): Observable<any> {
    return this.http.get(`https://viacep.com.br/ws/${cep}/json/`);
  }
}