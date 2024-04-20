import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-discussao',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './discussao.component.html',
  styleUrl: './discussao.component.scss'
})
export class DiscussaoComponent {
  showTopicForm: boolean = false;
  showTopcoResp: boolean = false;
  topicSubject: string = '';
  topicContent: string = '';

  toggleTopicForm() {
    this.showTopicForm = !this.showTopicForm;
    // Resetar a exibição de topco-Resp quando o formulário é alternado
    this.showTopcoResp = false;
  }

  updateSubject(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.topicSubject = inputElement.value;
  }

  updateContent(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.topicContent = inputElement.value;
  }

  submitTopic() {
    // Aqui você pode adicionar lógica para lidar com o envio do tópico
    console.log('Assunto:', this.topicSubject);
    console.log('Conteúdo:', this.topicContent);

    // Após o envio, exibir topco-Resp e iniciar temporizador para ocultá-lo após 5 segundos
    this.showTopcoResp = true;
    setTimeout(() => {
      this.showTopcoResp = false;
    }, 3000);

    // Após o envio, ocultar o formulário novamente
    this.showTopicForm = false;
  }
}
