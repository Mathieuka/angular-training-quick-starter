import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { routes } from './route';

//IMPORTANT: think to change <app-heroes></app-heroes> to  <router-outlet></router-outlet> in app.component.html
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
