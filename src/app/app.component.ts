import { Component } from '@angular/core';
import { Soup } from './models/soup.model';
import { Meat } from './models/meat.model';
import { Salad } from './models/salad.model';
import 'bootstrap';

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
    new Soup('German "Hochzeitssuppe"', '150 minutes', 6, 4),
    new Soup('Egyptian "Molokhia"', '25 minutes', 4, 3),
    new Soup('"Mercimek Çorbası" (Turkish red lentils)', '50 minutes', 4, 5)
  ];
  selectedSoup = null;
  editSoup(clickedSoup) {
    this.selectedSoup = clickedSoup;
  };
  finishedEditingSoup() {
    this.selectedSoup = null;
  };
  meatTitle = 'Meats';
  meats: Meat[] = [
    new Meat('"Spicy Kreuzberg" lamb kebab (Berliner-style)', '1 hour', 4, 4),
    new Meat('Moroccan lamb shanks with pomegranate sauce', '5 hours', 4, 5),
    new Meat('French Boeuf Bourguignon with pasta', '2 hours', 6, 4)
  ];
  selectedMeat = null;
  editMeat(clickedMeat) {
    this.selectedMeat = clickedMeat;
  };
  finishedEditingMeat() {
    this.selectedMeat = null;
  };
  saladTitle = 'Salads';
  salads: Salad[] = [
    new Salad('Lebanese Tabouleh with tomatoes', '45 minutes', 4, 5),
    new Salad('French lentil, beet, and egg salad (served warm)', '1 hour', 6, 4)
  ];
  selectedSalad = null;
  editSalad(clickedSalad) {
    this.selectedSalad = clickedSalad;
  };
  finishedEditingSalad() {
    this.selectedSalad = null;
  };
  starColor(currentRecipe) {
    if (currentRecipe.stars === 3) {
      return "bg-info";
    } else if (currentRecipe.stars === 4) {
      return "bg-warning";
    } else if (currentRecipe.stars === 5) {
      return "bg-danger";
    }
  }
}
