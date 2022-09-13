import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalhesProdutosPageRoutingModule } from './detalhes-produtos-routing.module';

import { DetalhesProdutosPage } from './detalhes-produtos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalhesProdutosPageRoutingModule
  ],
  declarations: [DetalhesProdutosPage]
})
export class DetalhesProdutosPageModule {}
