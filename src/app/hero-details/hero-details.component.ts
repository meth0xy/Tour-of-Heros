import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hero } from '../hero';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hero-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './hero-details.component.html',
  styleUrl: './hero-details.component.scss'
})
export class HeroDetailsComponent {
@Input () currentSelectedHero! : Hero;
@Output () closeDetails = new EventEmitter<void>();

onCloseDetails () {
  this.closeDetails.emit();
}
}
