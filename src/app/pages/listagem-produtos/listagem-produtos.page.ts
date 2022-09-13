import { Component, OnInit } from '@angular/core';
import { DadosProdutosService } from 'src/app/services/dados-produtos.service';

@Component({
  selector: 'app-listagem-produtos',
  templateUrl: './listagem-produtos.page.html',
  styleUrls: ['./listagem-produtos.page.scss'],
})
export class ListagemProdutosPage implements OnInit {

  public todosDados : any

  constructor(private dados: DadosProdutosService) {
    this.todosDados = this.dados.enviarTodosDados()
  }

  ngOnInit() {
  }

}
