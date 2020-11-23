import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TextMaskModule } from 'angular2-text-mask';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app/app-routing.module';
import { AppComponent } from './app/app.component';
import { CadastroListComponent } from './app/cadastro-clientes/clientes-list-page/cadastro.list.component';
import { CadastroFormComponent } from './app/cadastro-clientes/clientes-form-page/cadastro.form.component';
import { CadastroClienteService } from './app/cadastro-clientes/cadastro.component.service';
import { HomeComponent } from './app/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CadastroListComponent,
    CadastroFormComponent
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
    CadastroClienteService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
