import { Component, OnInit } from '@angular/core';
import { FormBuilder,  FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CadastroClienteService } from '../cadastro.component.service';

@Component({
  selector: 'app-cadastro-form-page',
  templateUrl: './cadastro.form.component.html',
  styleUrls: ['./cadastro.form.component.css']
})
export class CadastroFormComponent implements OnInit{
  cepMask = [/[1-9]/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];
  form: FormGroup;
  submitted = false;
  id: string;
  isEditMode: boolean = false;
  titulo: string;
  erroBuscarEndereco: string;

  constructor(
    private cadastroClienteService: CadastroClienteService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params[ 'id' ];
    this.isEditMode = this.id !== 'novo';
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
    
    if (this.isEditMode) {
      this.titulo = 'Editar Cliente';
      
      this.cadastroClienteService.findById(+this.id)
      .subscribe(response => {    
        this.form.setValue({
          nome: response.nome,
          dataNascimento: response.dataNascimento,
          sexo: response.sexo,
          cep: response.cep,
          endereco: response.endereco,
          numero: response.numero,
          complemento: response.complemento,
          bairro: response.bairro,
          estado: response.estado,
          cidade: response.cidade
        })    
      })
    } else {
      this.titulo = 'Cadastrar Cliente';
    }
  }

  get nome() { return this.form.get('nome'); }
  get dataNascimento() { return this.form.get('dataNascimento'); }
  get sexo() { return this.form.get('sexo'); }

  onSubmit(customerData) {    
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    const clienteToSave = this.isEditMode 
      ? { ...customerData, id: +this.id }
      : customerData

    this.cadastroClienteService.save(clienteToSave)
    .subscribe(() => {
      this.router.navigate([ '/cadastros' ]);
    })
  }

  getEndereco(cep) {
    this.cadastroClienteService.getEndereco(cep)
    .subscribe(data => {
      if (data.erro) {
        return this.erroBuscarEndereco = 'CEP Inválido.';
      }

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
    })
  }

  cancelar() {
    this.router.navigate([ '/cadastros' ]);
  }
}
