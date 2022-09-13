import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalhesProdutosPage } from './detalhes-produtos.page';

const routes: Routes = [
  {
    path: '',
    component: DetalhesProdutosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalhesProdutosPageRoutingModule {}
