import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from 'src/types/Cliente.type';

const ClientesAPI = 'http://localhost:5000/api/clientes';

@Injectable({
    providedIn: 'root'
})
export class CadastroClienteService {

  constructor(private http: HttpClient) {}

  public getEndereco(cep: number): Observable<any> {
    return this.http.get(`https://viacep.com.br/ws/${cep}/json/`);
  }

  public findAll(): Observable<any> {
    return this.http.get(ClientesAPI);
  }

  public findById(id: number): Observable<any> {
    return this.http.get(`${ClientesAPI}/${id}`)
  }

  public save(cliente: Cliente): Observable<any> {
    return cliente.id 
      ? this.http.put(`${ClientesAPI}/${cliente.id}`, cliente)
      : this.http.post(ClientesAPI, cliente)
  }

  public update(cliente: Cliente): Observable<any> {
    return this.http.put(`${ClientesAPI}/${cliente.id}`, cliente)
  }

  public remove(id: number): Observable<any> {
    return this.http.delete(`${ClientesAPI}/${id}`)
  }
}