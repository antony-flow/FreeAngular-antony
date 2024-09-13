import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }
  getBestRatedhero(): string {
    return "best rated";
  }
  getBestActionHero(): string{
    return "best action ";
  }
}
