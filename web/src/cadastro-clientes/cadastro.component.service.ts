import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from 'src/types/Cliente.type';

const ClientesAPI = 'http://localhost:5000/api/clientes';

@Injectable({
    providedIn: 'root'
})
export class ConsultaEnderecoService {

  constructor(private http: HttpClient) {}

  public getEndereco(cep: number): Observable<any> {
    return this.http.get(`https://viacep.com.br/ws/${cep}/json/`);
  }

  public findAll(): Observable<any> {
    return this.http.get(ClientesAPI);
  }

  public save(cliente: Cliente): Observable<any> {
    return this.http.post(ClientesAPI, cliente)
  }

  public update(cliente: Cliente): Observable<any> {
    return this.http.put(`${ClientesAPI}/${cliente.id}`, cliente)
  }

  public remove(id: number): Observable<any> {
    return this.http.delete(`${ClientesAPI}/${id}`)
  }
}