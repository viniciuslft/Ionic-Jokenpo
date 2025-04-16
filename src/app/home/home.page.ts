import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})

export class HomePage {
  numeros: number[] = [];
  limite: number = 0;

  constructor() {}

  gerarNumeros() {
    this.numeros = [];
    let i = 1;
    while (i <= this.limite) {
      this.numeros.push(i);
      i++;
    }
  }
}
