import { Component, OnInit } from '@angular/core';
import { FormBuilder,  FormGroup, Validators } from '@angular/forms';
import { NgbInputDatepickerConfig } from '@ng-bootstrap/ng-bootstrap';
import { ConsultaEnderecoService } from './cadastro.component.service';

@Component({
  selector: 'app-root',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit{
  cepMask = [/[1-9]/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];
  dateMask = [/[1-9]/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
  form: FormGroup;
  submitted = false;
  clientes = [
    {
      nome: 'Caíque Tuioshi Isiri Lima',
      dataNascimento: '10/11/2020',
      sexo: 'Masculino',
      endereco: 'Rua Teste',
      estado: 'PR',
      cidade: 'Maringá',
    },
    {
      nome: 'Caíque Tuioshi Isiri Lima',
      dataNascimento: '10/11/2020',
      sexo: 'Masculino',
      endereco: 'Rua Teste',
      estado: 'PR',
      cidade: 'Maringá',
    },
    {
      nome: 'Caíque Tuioshi Isiri Lima',
      dataNascimento: '10/11/2020',
      sexo: 'Masculino',
      endereco: 'Rua Teste',
      estado: 'PR',
      cidade: 'Maringá',
    },
    {
      nome: 'Caíque Tuioshi Isiri Lima',
      dataNascimento: '10/11/2020',
      sexo: 'Masculino',
      endereco: 'Rua Teste',
      estado: 'PR',
      cidade: 'Maringá',
    }
  ];

  constructor(
    private consultaEnderecoService: ConsultaEnderecoService,
    private formBuilder: FormBuilder,
    // config: NgbInputDatepickerConfig
  ) { 
    //  config.minDate = {year: 1900, month: 1, day: 1};
    //  config.maxDate = {year: 2099, month: 12, day: 31};
    //  config.outsideDays = 'hidden';
    //  config.autoClose = 'outside';
    //  config.placement = ['bottom-left', 'bottom-right'];
  }

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
    const {year, month, day} = customerData.dataNascimento;
    
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

    // this.form.reset();

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
  }

  remover(index) {
    console.log({index});
    
  }
}
