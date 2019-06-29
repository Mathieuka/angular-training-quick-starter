import { Component, OnInit, Input } from '@angular/core';
import { Hero } from "../Hero";
import { HEROES } from "../mock-heroes";

import { HeroService } from "../hero.service";
import { Location } from '@angular/common';

//routing
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  //NOTE: With @Input we prepare the hero-detail.component to receive a input of type Hero.
  @Input() hero: Hero; // The hero property must be an input property, annotated with the @Input() decorator,
                       // because the external HerosComponent will bind to it like this.
  //selectedHero: Hero;
  
  constructor(
     private heroService: HeroService,  // The heroService gets hero data from the remote server and this component will use it to get the hero to display
     private route: ActivatedRoute,     // Inject the possibility to access of the information like data, params etc.. of the route
     private location: Location         // The location is an Angular service for interacting with the browser, it's for navigate back to the view that navigated here.
  ) { }

  ngOnInit() {
    this.getHero()
  }
  
  //IMPORTANT: the + operator before this.route... is juste for casting the result to an number.
  getHero(): void{ //NOTE: The paramMap is a dictionary of route parameter values extracted from the URL
    const id = +this.route.snapshot.paramMap.get('id'); //NOTE: The route.snapshot is a static image of the route information shortly after the component was created.
    this.heroService.getHero(id).subscribe(hero => this.hero = hero);
  }

  goBack(): void {
  this.location.back();
}

}
