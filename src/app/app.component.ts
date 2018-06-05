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
  soupTitle = 'Soup Recipes';
  soups: Soup[] = [
    new Soup('German "Hochzeitssuppe" soup'),
    new Soup('Egyptian "Molokhia" soup'),
    new Soup('"Mercimek Çorbası" soup (Turkish red lentils)')
  ];
  meatTitle = 'Meat Recipes';
  meats: Meat[] = [
    new Meat('"Spicy Kreuzberg" lamb kebab (Berliner-style)'),
    new Meat('Moroccan lamb shanks with pomegranate sauce'),
    new Meat('Boeuf Bourguignon with pasta')
  ];
  saladTitle = 'Salad Recipes';
  salads: Salad[] = [
    new Salad('Lebanese Tabouleh with tomatoes'),
    new Salad('French lentil salad')
  ]
}
