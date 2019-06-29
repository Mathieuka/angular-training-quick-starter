import { Component, OnInit } from '@angular/core';
import { Hero } from '../Hero';

//import service
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})


export class HeroesComponent implements OnInit {
   selectedHero: Hero;
   heroes; 
   
   constructor(
      private HeroService: HeroService, // inject HeroService  NOTE: When Angular creates a HeroesComponent, the Dependency Injection system sets 
                                                                   //the heroService parameter to the singleton instance of HeroService.
   ) { }
  
   ngOnInit() {
     this.getHeroes(); // here we get the heroes just before the app mount
   }

   getHeroes = (): void =>{
     this.HeroService.getHeroes().subscribe(heroes => this.heroes = heroes); // here we subscribe to the observable in hero.service.ts
   }

   onSelect(hero: Hero): void{
     this.selectedHero = hero;
   }

}
