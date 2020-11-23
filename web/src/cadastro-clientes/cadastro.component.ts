import { Component, OnInit } from '@angular/core';
import { FormBuilder,  FormGroup, Validators } from '@angular/forms';
import { Cliente } from 'src/types/Cliente.type';
import { ConsultaEnderecoService } from './cadastro.component.service';

@Component({
  selector: 'app-root',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit{
  cepMask = [/[1-9]/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];
  form: FormGroup;
  submitted = false;
  indexToEdit;
  clientes: Cliente;

  constructor(
    private consultaEnderecoService: ConsultaEnderecoService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      nome: ['', Validators.required],
      dataNascimento: ['', Validators.required],
      sexo: ['', Validators.required],
      cep: '',
      endereco: '',
      numero: '',
      complemento: '',
      bairro: '',
      estado: '',
      cidade: ''
    });

    this.findAll();    
  }

  get nome() { return this.form.get('nome'); }
  get dataNascimento() { return this.form.get('dataNascimento'); }
  get sexo() { return this.form.get('sexo'); }

  findAll() {
    this.consultaEnderecoService.findAll().subscribe(response => {
      console.log({response});

      this.clientes = response;
    });
  }

  onSubmit(customerData) {    
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    this.consultaEnderecoService.save(customerData)
    .subscribe(response => {
      console.log("Salvou");

      this.findAll();
      
    })

    this.form.reset();
  }

  getEndereco(cep) {
    this.consultaEnderecoService.getEndereco(cep)
    .subscribe(data => {
      console.log(data);
      this.form.setValue({
        nome: this.form.value.nome,
        dataNascimento: this.form.value.dataNascimento,
        sexo: this.form.value.sexo,
        cep: data.cep.replace(/\D/g, ''),
        endereco: data.logradouro,
        numero: '',
        complemento: data.complemento,
        bairro: data.bairro,
        estado: data.uf,
        cidade: data.localidade
      })
    }, error => {
      console.log({error});
    })
  }

  editar(index) {
    console.log({index});

    this.indexToEdit = index

    const cadastroParaEditar = this.clientes[index];

    this.form.setValue({
      nome: cadastroParaEditar.nome,
      dataNascimento: cadastroParaEditar.dataNascimento,
      sexo: cadastroParaEditar.sexo,
      cep: cadastroParaEditar.cep.replace(/\D/g, ''),
      endereco: cadastroParaEditar.endereco,
      numero: cadastroParaEditar.numero,
      complemento: cadastroParaEditar.complemento,
      bairro: cadastroParaEditar.bairro,
      estado: cadastroParaEditar.estado,
      cidade: cadastroParaEditar.cidade
    })
  }

  remover(index) {
    console.log({index});
    
    this.consultaEnderecoService.remove(this.clientes[index].id)
    .subscribe(response => {
      console.log("Removeu");
      
      this.findAll();
    })
  }
}
