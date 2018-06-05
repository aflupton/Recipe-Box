import { Component } from '@angular/core';
import { Soup } from './models/soup.model';
import { Meat } from './models/meat.model';
import { Salad } from './models/salad.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = 'Andrew'
  title = 'Recipe Box';
  subtitle = 'Built with Angular';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  soupTitle = 'Soups';
  soups: Soup[] = [
    new Soup('German "Hochzeitssuppe"', '150 minutes', 6),
    new Soup('Egyptian "Molokhia"', '25 minutes', 4),
    new Soup('"Mercimek Çorbası" (Turkish red lentils)', '50 minutes', 4)
  ];
  meatTitle = 'Meats';
  meats: Meat[] = [
    new Meat('"Spicy Kreuzberg" lamb kebab (Berliner-style)', '1 hour', 4),
    new Meat('Moroccan lamb shanks with pomegranate sauce', '5 hours', 4),
    new Meat('Boeuf Bourguignon with pasta', '2 hours', 6)
  ];
  saladTitle = 'Salads';
  salads: Salad[] = [
    new Salad('Lebanese Tabouleh with tomatoes', '45 minutes', 4),
    new Salad('French lentil, beet, and egg salad (served warm)', '1 hour', 6)
  ]
}
