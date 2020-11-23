import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CadastroComponent } from './cadastro-clientes/cadastro.component';
import { ConsultaEnderecoService } from './cadastro-clientes/cadastro.component.service';
import { HttpClientModule } from '@angular/common/http';
import { TextMaskModule } from 'angular2-text-mask';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TextMaskModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [
    ConsultaEnderecoService
  ],
  bootstrap: [CadastroComponent]
})
export class AppModule { }
