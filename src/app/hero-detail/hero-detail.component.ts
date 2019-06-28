import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from "../Hero";
import { HEROES } from "../mock-heroes";

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
     private route: ActivatedRoute, // inject the possibility to access of the information like data, params etc.. of the route
  ) { }

  ngOnInit() {
    //   this.route.paramMap.subscribe(params=> {
    //   console.log(params," route params in hero-detail.component");
    //      const { heroId } = params.params;
    //     [ this.hero ] = HEROES.filter(hero => {
    //     if( hero.id === ~~heroId){
    //       return hero;
    //     }
    //   });
    // })
  }

}
