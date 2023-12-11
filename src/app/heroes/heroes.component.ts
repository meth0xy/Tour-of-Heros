import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Hero } from '../hero';
import { HeroDetailsComponent } from '../hero-details/hero-details.component';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule, FormsModule, HeroDetailsComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss'
})

export class HeroesComponent {
  heroes!: Hero[];
  currentSelectedHero : Hero | undefined;
  selectHero (hero: Hero | undefined) {
    this.currentSelectedHero = hero;
  }
  getHeroes () {
    this.heroes = this.heroService.getHeros();
  }

  ngOnInit() {
    this.getHeroes();
  }

  constructor(private heroService: HeroService) {}
}
