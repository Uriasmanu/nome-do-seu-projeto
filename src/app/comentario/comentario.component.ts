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
  textBoxHeight: string = '150px';

  toggleText() {
    this.textExpanded = !this.textExpanded;
    if (this.textExpanded) {
      this.textBoxHeight = '200px';

    } else {
      this.textBoxHeight = '200px';

    }
  }

}
