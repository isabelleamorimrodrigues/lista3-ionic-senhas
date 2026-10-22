import { Component } from '@angular/core';
import { SenhasService } from '../services/senhas.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  // Injetamos o serviço caso queiramos exibir alguma informação estatística ou de reset
  constructor(public senhasService: SenhasService) {}

  // Método opcional para limpar/reiniciar as senhas do dia, se necessário
  public reiniciarAtendimento() {
    this.senhasService.senhasGeral = 0;
    this.senhasService.senhasPrior = 0;
    this.senhasService.senhasExame = 0;
    this.senhasService.senhasTotal = 0;
  }
}