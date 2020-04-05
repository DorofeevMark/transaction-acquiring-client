import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InputFormComponent} from './components/input-form/input-form.component';
import {AppComponent} from './app.component';
import {LogsComponent} from './components/logs/logs.component';


const routes: Routes = [
  {
    path: '',
    component: InputFormComponent,
    pathMatch: 'full'
  },
  {
    path: 'logs',
    component: LogsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
