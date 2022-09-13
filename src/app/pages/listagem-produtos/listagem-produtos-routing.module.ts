import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListagemProdutosPage } from './listagem-produtos.page';

const routes: Routes = [
  {
    path: '',
    component: ListagemProdutosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListagemProdutosPageRoutingModule {}
