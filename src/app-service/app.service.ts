import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Task} from '../interfaces/task.interface'

@Injectable({ providedIn: 'root' })
export class AppService {
  constructor(private readonly http: HttpClient) {}

  // Fetches all tasks. Returns an observable.
  fetchAllTasks$() {
    return this.http.get<Array<Task>>(
      'https://43byyyxk9d.execute-api.us-east-1.amazonaws.com/v1/tasks'
    );
  }

  // Creates a new task from description
  createTask$(description: string) {
    return this.http.post(
        'https://43byyyxk9d.execute-api.us-east-1.amazonaws.com/v1/tasks',
        {
            completed: false,
            description
        }
    )
  }

  updateTask$(completed: boolean, description: string, taskId: string) {
    return this.http.put(
        `https://43byyyxk9d.execute-api.us-east-1.amazonaws.com/v1/tasks/${taskId}`,
        {
            completed,
            description
        }
    )
  }

  // Deletes a task
  deleteTask$(taskId: string) {
    return this.http.delete(
        `https://43byyyxk9d.execute-api.us-east-1.amazonaws.com/v1/tasks/${taskId}`
    )
  }
}
