import { Component } from '@angular/core';
import { ComentarioComponent } from './comentario/comentario.component';
import { DiscussaoComponent } from './discussao/discussao.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [ComentarioComponent, DiscussaoComponent],
})
export class AppComponent {
  title = 'Exercicio 2024';
  textExpanded: boolean = false;
  buttonText: string = 'Ver mais';
  textBoxHeight: string = '200px';

  toggleText() {
    this.textExpanded = !this.textExpanded;
    if (this.textExpanded) {
      this.textBoxHeight = 'auto';
      this.buttonText = '';
    } else {
      this.textBoxHeight = '200px';
      this.buttonText = 'Ver mais';
    }
  }
}
