import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DadosProdutosService {

  public dadosServicos : any

  private produtos = [
    {id: 1, nome: 'Alinhamento', valor: 49.90, garantia: 6},
    {id: 2, nome: 'Balanceamento', valor: 39.90, garantia: 5},
    {id: 3, nome: 'Revisão de Freios', valor: 129.90, garantia: 12},
    {id: 4, nome: 'Revisão de suspensão', valor: 199.90, garantia: 12}
  ]

  constructor() { }

  enviarTodosDados(){
    return this.produtos
  }

  enviarDadosId(id: number){
    const produtoSelecionado = this.produtos.filter(produto => produto.id === id)
    return produtoSelecionado [0]
  }

  recebeDados(dadosRecebidos : any){
    dadosRecebidos.id = this.produtos.length + 1
    this.produtos.push(dadosRecebidos)
  }


}
