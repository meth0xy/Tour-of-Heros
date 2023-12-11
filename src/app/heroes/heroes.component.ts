import { Component } from '@angular/core';
import { Hero } from '../hero';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss'
})

export class HeroesComponent {
  hero : Hero = {
    name: 'Wisdom',
    id: 1,
  }
}
