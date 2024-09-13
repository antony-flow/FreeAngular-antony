import { Routes } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FormsPageComponent } from './forms-page/forms-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SingletodoComponent } from './singletodo/singletodo.component';
import { AppComponent } from './app.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';

export const routes: Routes = [
  {
    path: 'todoapp',
    component: TodoListComponent,
  },
  {
    path: 'todoapp/:id',
    component: SingletodoComponent,
  },
  {
    path: 'formspage',
    component: FormsPageComponent,
  },
  {
    path: 'dynamicform',
    component: DynamicFormComponent
  },
  { path: 'login', redirectTo: '', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
