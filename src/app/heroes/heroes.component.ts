import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Hero } from '../hero';
import { HeroDetailsComponent } from '../hero-details/hero-details.component';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

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

  constructor(private heroService: HeroService, private messageService : MessageService) {}

  ngOnInit() {
    this.getHeroes();
  }

  selectHero (hero: Hero | undefined) {
    this.currentSelectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero?.id}`)
  }

  getHeroes () {
    this.heroService.getHeros().subscribe(heroes => this.heroes = heroes);
  }
}
