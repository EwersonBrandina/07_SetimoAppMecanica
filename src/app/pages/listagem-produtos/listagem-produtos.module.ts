import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListagemProdutosPageRoutingModule } from './listagem-produtos-routing.module';

import { ListagemProdutosPage } from './listagem-produtos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListagemProdutosPageRoutingModule
  ],
  declarations: [ListagemProdutosPage]
})
export class ListagemProdutosPageModule {}
