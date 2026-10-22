import { Component } from '@angular/core';
import { SenhasService } from '../services/senhas.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  // Injetamos o SenhasService para termos acesso aos contadores em tempo real
  constructor(public senhasService: SenhasService) {}

}
