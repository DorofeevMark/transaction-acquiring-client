import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InputFormComponent} from './input-form/input-form.component';


const routes: Routes = [
  {
    path: '',
    component: InputFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
