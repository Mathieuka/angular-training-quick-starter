import { Injectable } from '@angular/core';
import { Hero } from './Hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';

import { MessageService } from "./message.service";


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private messageService: MessageService // here we inject the MessageService
    ) { }
  
  //This asynchronous approach will work when the HeroService requests heroes from the server.
  getHeroes(): Observable<Hero[]> {
    //NOTE: Here when the heroService fetch the HEROES, we call the function add() come from message.service.ts for push a new message in messageService
    this.messageService.add('HeroService: fetched heroes'); 
    return of(HEROES); // of(HEROES) returns an Observable<Hero[]> that emits a single value, the array of mock heroes.
  }

  //This asynchronous approach will work when the HeroService requests heroes from the server.
  getHero(id: number): Observable<Hero>{
    this.messageService.add(`HeroService => fetched the hero with the id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
