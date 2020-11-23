import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { CadastroFormComponent } from './cadastro-clientes/clientes-form-page/cadastro.form.component';
import { CadastroListComponent } from './cadastro-clientes/clientes-list-page/cadastro.list.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'cadastros', component: CadastroListComponent },
    { path: 'cadastros/:id', component: CadastroFormComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }