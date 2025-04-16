import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-com-switch',
  templateUrl: './com-switch.page.html',
  styleUrls: ['./com-switch.page.scss'],
  standalone: false
})

export class ComSwitchPage {
  opcaoSelecionada: string = '';
  mensagem: string = '';

  mostrarMensagem() {
    switch (this.opcaoSelecionada) {
      case 'manha':
        this.mensagem = 'Bom dia! 🌞';
        break;
      case 'tarde':
        this.mensagem = 'Boa tarde! ☀️';
        break;
      case 'noite':
        this.mensagem = 'Boa noite! 🌙';
        break;
      default:
        this.mensagem = 'Por favor, selecione uma opção.';
    }
  }
}
