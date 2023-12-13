import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
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

  getHeroes () {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
}
