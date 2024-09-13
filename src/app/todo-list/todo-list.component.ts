import { Component, signal } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { todoType } from '../../model/todo';
import { NgClass } from '@angular/common';
// import { DatePipe } from '@angular/common';
import { TodoPipe } from '../../pipes/todopipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [NgFor, ReactiveFormsModule, NgClass, FormsModule, TodoPipe,RouterLink],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {
  
  isDisabled: boolean = false;
  bgcolor = 'grey';
  isActive: boolean = false;
  demoText: string = '';
  inputText = new FormControl('');
  todoList: todoType[] = [];
  // birthday = new Date();
  sampleText: string = 'calling Pipe';
  count = signal(0);

  ngOnInit(): void {
    this.todoList = [
      {
        id: 1,
        text: 'hello',
        completed: false,
      },
      {
        id: 2,
        text: 'world',
        completed: false,
      },
    ];
  }
  HandleAddTask() {
    if (this.inputText.value) {
      this.todoList.push({
        id: this.todoList.length + 1,
        text: this.inputText.value,
        completed: false,
      });
      this.inputText.reset();
    }
  }
  DeleteTask(TaskId: number) {
    this.todoList = this.todoList.filter((item) => TaskId !== item.id);
  }
  OnToggleTask(Taskid: number) {
    this.todoList.map((item) => {
      if (Taskid === item.id) item.completed = !item.completed;
      return item;
    });
  }
  disabled: boolean = true;
  HandleIncrease() {
    this.count.update((value) => value + 1);
    if (this.disabled === true) {
      this.disabled = false;
    }
  }

  HandleDecrease() {
    if (this.count() <= 0) {
      alert("Can't decrement this more");
      this.disabled = true;
    } else {
      this.count.update((value) => value - 1);
      this.disabled = false;
    }
  }
  // onMouseOver() {
  //   this.isActive = true;
  //   setTimeout(() => {
  //     this.isActive = false;
  //   },2000)
  // }
}
