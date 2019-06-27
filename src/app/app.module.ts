import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';  // IMPORTANT: The most important @NgModule decorator annotates the top-level AppModule class.
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  imports: [ // all ngModule "import" need to be put here in "imports"
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
