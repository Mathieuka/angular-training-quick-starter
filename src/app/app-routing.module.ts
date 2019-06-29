import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { routes } from './route';

//IMPORTANT: think to change <app-heroes></app-heroes> to  <router-outlet></router-outlet> in app.component.html
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes) // initialize the router and start it listening for browser location changes.
                                 // The method is called forRoot() because you configure the router at the application's root level.
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
