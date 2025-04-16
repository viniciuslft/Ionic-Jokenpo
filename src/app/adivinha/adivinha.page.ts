import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adivinha',
  templateUrl: './adivinha.page.html',
  styleUrls: ['./adivinha.page.scss'],
  standalone:false
})

export class AdivinhaPage {
  escolhaUsuario: number = 0;
  numeroComputador: number = 0;
  resultado: string = '';

  jogar() {
    this.numeroComputador = Math.floor(Math.random() * 3) + 1;

    const escolha = +this.escolhaUsuario; // força conversão para número

    if (escolha === this.numeroComputador) {
      this.resultado = `🎉 Parabéns! Você acertou. O número era ${this.numeroComputador}`;
    } else {
      this.resultado = `😢 Você errou. O número era ${this.numeroComputador}`;
    }
  }

}
