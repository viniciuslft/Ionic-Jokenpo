import { Component } from '@angular/core';

@Component({
  selector: 'app-jokenpo',
  templateUrl: './jokenpo.page.html',
  styleUrls: ['./jokenpo.page.scss'],
  standalone: false,
})
export class JokenpoPage {
  opcoes = ['Pedra', 'Papel', 'Tesoura'];
  jogador!: string;
  computador!: string;
  resultado = '';
  placar = { jogador: 0, computador: 0 };

  jogar(opcao: string) {
    this.jogador = opcao;
    const escolhaComputador = this.opcoes[Math.floor(Math.random() * 3)];
    this.computador = escolhaComputador;

    if (this.jogador === this.computador) {
      this.resultado = 'Empate!';
    } else if (
      (this.jogador === 'Pedra' && this.computador === 'Tesoura') ||
      (this.jogador === 'Papel' && this.computador === 'Pedra') ||
      (this.jogador === 'Tesoura' && this.computador === 'Papel')
    ) {
      this.resultado = 'Você venceu!';
      this.placar.jogador++;
    } else {
      this.resultado = 'Computador venceu!';
      this.placar.computador++;
    }
  }
}
