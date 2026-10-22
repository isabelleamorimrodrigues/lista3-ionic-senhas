import { Component } from '@angular/core';
import { SenhasService } from '../services/senhas.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  // Variável local para guardar a última senha gerada e mostrar na tela
  public senhaAtual: string = '-';

  // Injetamos o nosso SenhasService no construtor
  constructor(public senhasService: SenhasService) {}

  // Método chamado ao clicar no botão de Senha Geral
  public gerarGeral() {
    let valor = this.senhasService.alterarSenhasGeral();
    this.senhaAtual = 'G' + valor;
  }

  // Método chamado ao clicar no botão de Senha Prioritária
  public gerarPrior() {
    let valor = this.senhasService.alterarSenhasPrior();
    this.senhaAtual = 'P' + valor;
  }

  // Método chamado ao clicar no botão de Senha de Exame
  public gerarExame() {
    let valor = this.senhasService.alterarSenhasExame();
    this.senhaAtual = 'E' + valor;
  }
}
