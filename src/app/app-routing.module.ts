import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'listagem-produtos',
    pathMatch: 'full'
  },
  {
    path: 'listagem-produtos',
    loadChildren: () => import('./pages/listagem-produtos/listagem-produtos.module').then( m => m.ListagemProdutosPageModule)
  },
  {
    path: 'detalhes-produtos/:id',
    loadChildren: () => import('./pages/detalhes-produtos/detalhes-produtos.module').then( m => m.DetalhesProdutosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
