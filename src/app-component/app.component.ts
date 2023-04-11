import { Component, OnInit } from '@angular/core';
import { Task } from 'src/interfaces/task.interface';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AppService } from 'src/app-service/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'erin-cornell-todo-app';
  tasks$: Observable<Task[]> | undefined;
  taskForm = this.formBuilder.group({
    description: new FormControl('', [Validators.required]),
  });

  constructor(
    private formBuilder: FormBuilder,
    private appService: AppService
  ) {}

  ngOnInit() {
    this.tasks$ = this.appService.fetchAllTasks$();
  }

  onBoxCheck(task: Task) {
    console.log(task);
    console.log('updating task');
    if (task.completed) {
      this.appService
        .updateTask$(false, task.description, task.task_id)
        .subscribe();
    } else {
      this.appService
        .updateTask$(true, task.description, task.task_id)
        .subscribe();
    }
  }

  onDeleteTask(task: Task) {
    console.log(task);
    this.appService.deleteTask$(task.task_id).subscribe((response) => {
      console.log(response);
      this.ngOnInit();
    });
  }

  onSubmit() {
    if (this.taskForm.value.description) {
      this.appService
        .createTask$(this.taskForm.value.description)
        .subscribe((response) => {
          console.log(response);
          this.ngOnInit();
        });
      console.log('form submitted');
      console.log(this.taskForm.value.description);
      this.taskForm.reset({ description: '' });
    }
  }

  get description() {
    return this.taskForm.get('description');
  }
}
