import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CurriculoComponent } from './curriculo/curriculo.component';
import { CertificacoesComponent } from './certificacoes/certificacoes.component';
import { ContatoComponent } from './contato/contato.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redireciona para a Home inicialmente
  { path: 'home', component: HomeComponent },
  { path: 'curriculo', component: CurriculoComponent },
  { path: 'certificacoes', component: CertificacoesComponent },
  { path: 'contato', component: ContatoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
