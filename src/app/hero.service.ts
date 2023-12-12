import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from './hero';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})

export class HeroService {
  constructor(private messageService : MessageService) { }

  getHeros(): Observable<Hero[]> {
    this.messageService.add('heroService: fetched heroes');
    return of(HEROES);
  };

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    const heroById = HEROES.find((hero) => hero.id === id);
    if(!heroById) return of();
    return of(heroById)
  }
}
