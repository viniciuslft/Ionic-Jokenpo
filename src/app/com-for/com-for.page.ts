import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-com-for',
  templateUrl: './com-for.page.html',
  styleUrls: ['./com-for.page.scss'],
  standalone:false
})

export class ComForPage {
  numeros: number[] = [];
  limite: number = 0;

  gerarNumeros() {
    this.numeros = [];
    for (let i = 1; i <= this.limite; i++) {
      this.numeros.push(i);
    }
  }
}
