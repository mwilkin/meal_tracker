import { Component } from 'angular2/core';

@Component ({
  selector: 'my-app',
  template: `
    <div class="container">
      <h1>Meal Tracker</h1>
      <h3 *ngFor="#meal of meals" (click)="mealWasSelected(meal)">Meal name: {{  meal.name }}. Description: {{  meal.description }}. Calorie count: {{  meal.calories }}</h3>
    </div>
  `
})
export class AppComponent {
  public meals: Meal[];
  constructor(){
    this.meals = [
      new Meal("Hamburgers!", "No bun!", 1500, 0),
      new Meal("Chocolate Shake", "No whipcream!", 600, 1),
      new Meal("Apple", "I'm still hungry", 150, 2),
      new Meal("Kind Bar", "Dark Chocolate, nuts & sea salt. Yum!", 200, 3),
      new Meal("More Hamburgers!", "No bun!", 1500, 0)
    ];
  }
  mealWasSelected(clickedMeal: Meal): void {
    console.log(clickedMeal);
  }
}
export class Meal {
  constructor(public name: string, public description: string, public calories: number, public id: number){

  }
}
