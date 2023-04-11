import { Component } from '@angular/core';
import { Task } from 'src/interfaces/task.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'erin-cornell-todo-app';
  taskList: Task[] = [
    {
      completed: false,
      description: 'Take cat to vet.',
      task_id: 'e2c63199-720d-446a-8c33-45ffc871de79',
    },
    {
      completed: true,
      description: 'Start coding app for Cornell interview',
      task_id: '37d04ca7-e693-4107-b5c7-4138575205a2',
    },
  ];
}
