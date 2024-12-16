import { Component } from '@angular/core';
import { signal } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  mensagem = signal<string>("Hello World!")
  tarefas = [
    { titulo: 'Estudar Angular', descricao: 'Assistir vídeo-aulas e ler a documentação oficial.' },
    { titulo: 'Fazer Exercícios', descricao: 'Implementar um projeto simples para praticar.' },
    { titulo: 'Revisar Código', descricao: 'Refatorar o código existente e melhorar a performance.' },
    { titulo: 'Criar Testes', descricao: 'Escrever testes unitários para garantir a qualidade.' }
  ];
}
