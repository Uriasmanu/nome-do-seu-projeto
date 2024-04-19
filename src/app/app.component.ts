import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Exercicio 2024';
  textExpanded: boolean = false;
  buttonText: string = 'Ver mais';
  textBoxHeight: string = '100px'; // Altura inicial para exibir metade do texto

  toggleText() {
    this.textExpanded = !this.textExpanded;
    if (this.textExpanded) {
      this.textBoxHeight = 'auto'; // Expandir o texto
      this.buttonText = '';
    } else {
      this.textBoxHeight = '100px'; // Recolher o texto para mostrar apenas metade
      this.buttonText = 'Ver mais';
    }
  }
}
