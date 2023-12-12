import { Component, Input } from '@angular/core';
import { Hero } from '../hero';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  heroes! : Hero[];
  constructor(private heroService : HeroService ) {}

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() {
    this.heroService.getHeros().subscribe(heroes => this.heroes = heroes);
  }

}
