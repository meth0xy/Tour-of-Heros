import { CommonModule, Location } from '@angular/common';
import { Component } from '@angular/core';
import { Hero } from '../hero';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-details',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './hero-details.component.html',
  styleUrl: './hero-details.component.scss'
})
export class HeroDetailsComponent {
  currentSelectedHero! : Hero;
  constructor(private route: ActivatedRoute, private heroService: HeroService, private location: Location) {}

  ngOnInit() {
    this.getHero();
  }

  getHero() {
    const id = Number(this.route.snapshot.params['id']);
    this.heroService.getHero(id).subscribe(hero => this.currentSelectedHero = hero);
  }

  save () {
    if(!this.currentSelectedHero) return;
    this.heroService.updateHero(this.currentSelectedHero).subscribe(() =>  this.goBack())
  }

  goBack() {
    this.location.back();
  }
}
