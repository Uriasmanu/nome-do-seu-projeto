import { Component } from '@angular/core';

@Component({
  selector: 'app-comentario',
  standalone: true,
  imports: [],
  templateUrl: './comentario.component.html',
  styleUrl: '../app.component.scss'
})
export class ComentarioComponent {
  textExpanded: boolean = false;
  textBoxHeight: string = '170px';

  toggleText() {
    this.textExpanded = !this.textExpanded;
    if (this.textExpanded) {
      this.textBoxHeight = 'auto';

    } else {
      this.textBoxHeight = '170px';

    }
  }

}
