import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { Cliente } from 'src/types/Cliente.type';
import { CadastroClienteService } from '../cadastro.component.service';

@Component({
  selector: 'app-cadastro-list-page',
  templateUrl: './cadastro.list.component.html',
  styleUrls: ['./cadastro.list.component.css']
})
export class CadastroListComponent implements OnInit{
  clientes: Cliente[] = [];

  constructor(
    private cadastroClienteService: CadastroClienteService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.findAll()  ;
  }

  findAll() {
    this.cadastroClienteService.findAll()
    .subscribe(response => {
      this.clientes = response;
    });
  }

  adicionarCliente() {
    this.router.navigate([ '/cadastros/novo' ]);
  }

  editar(cliente: Cliente) {    
    this.router.navigate([ `/cadastros/${cliente.id}` ]);
  }

  remover(index) {    
    this.cadastroClienteService.remove(this.clientes[index].id)
    .subscribe(() => {      
      this.findAll();
    })
  }
}
