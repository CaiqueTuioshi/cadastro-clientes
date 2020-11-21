import { Component, OnInit } from '@angular/core';
import { FormBuilder,  FormGroup, Validators } from '@angular/forms';
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
  clientes = [
    {
      nome: 'Caíque Tuioshi Isiri Lima',
      dataNascimento: '10/11/2020',
      sexo: 'Masculino',
      endereco: 'Rua Teste',
      estado: 'PR',
      cidade: 'Maringá',
      cep: '',
      numero: '',
      complemento: '',
      bairro: ''
    },
    {
      nome: 'Caíque Tuioshi Isiri Lima',
      dataNascimento: '10/11/2020',
      sexo: 'Masculino',
      endereco: 'Rua Teste',
      estado: 'PR',
      cidade: 'Maringá',
      cep: '',
      numero: '',
      complemento: '',
      bairro: ''
    },
    {
      nome: 'Caíque Tuioshi Isiri Lima',
      dataNascimento: '10/11/2020',
      sexo: 'Masculino',
      endereco: 'Rua Teste',
      estado: 'PR',
      cidade: 'Maringá',
      cep: '',
      numero: '',
      complemento: '',
      bairro: ''
    },
    {
      nome: 'Caíque Tuioshi Isiri Lima',
      dataNascimento: '10/11/2020',
      sexo: 'Masculino',
      endereco: 'Rua Teste',
      estado: 'PR',
      cidade: 'Maringá',
      cep: '',
      numero: '',
      complemento: '',
      bairro: ''
    }
  ];

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
    // this.items = this.cartService.getItems();
  }

  get nome() { return this.form.get('nome'); }
  get dataNascimento() { return this.form.get('dataNascimento'); }
  get sexo() { return this.form.get('sexo'); }

  onSubmit(customerData) {    
    this.submitted = true;
    

    if (this.form.invalid) {
      return;
    }

    this.clientes = [
      ...this.clientes,
      customerData
    ]



    // Process checkout data here
    // this.items = this.cartService.clearCart();
    // console.log(
    // {list: this.countries = [
    //   ...this.countries,
    //   customerData
    // ]})

    this.form.reset();

    console.warn('Your order has been submitted', customerData);
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
    
  }
}
