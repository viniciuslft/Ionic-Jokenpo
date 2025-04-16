import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pares-impares',
  templateUrl: './pares-impares.page.html',
  styleUrls: ['./pares-impares.page.scss'],
  standalone:false
})

export class ParesImparesPage {
  numeros: number[] = [];
  limite: number = 0;
  tipo: string = 'todos'; // 'pares', 'ímpares', 'todos'

  gerarNumeros() {
    this.numeros = [];
    let i = 1;
    while (i <= this.limite) {
      if (this.tipo === 'pares' && i % 2 === 0) {
        this.numeros.push(i);
      } else if (this.tipo === 'ímpares' && i % 2 !== 0) {
        this.numeros.push(i);
      } else if (this.tipo === 'todos') {
        this.numeros.push(i);
      }
      i++;
    }
  }
}
