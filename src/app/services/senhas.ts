import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SenhasService {

  // Variáveis públicas (Passo 8)
  public senhasGeral: number = 0;
  public senhasPrior: number = 0;
  public senhasExame: number = 0;
  public senhasTotal: number = 0;

  constructor() { }

  // Métodos com pós-incremento (Passos 9, 10 e 11)
  public alterarSenhasGeral(): number {
    this.senhasTotal++;
    return this.senhasGeral++;
  }

  public alterarSenhasPrior(): number {
    this.senhasTotal++;
    return this.senhasPrior++;
  }

  public alterarSenhasExame(): number {
    this.senhasTotal++;
    return this.senhasExame++;
  }
}
