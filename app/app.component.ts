import { Component } from 'angular2/core';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  template: `
    <h3 *ngFor="#currentMeal of mealList" (click)="mealClicked(currentMeal)">Meal name: {{  currentMeal.name }}. Description: {{  currentMeal.description }}. Calorie count: {{  currentMeal.calories }}</h3>
  `
})
export class MealListComponent {
  public mealList: Meal[];
  mealClicked(clickedMeal: Meal): void {
    console.log(clickedMeal);
  }
}

@Component ({
  selector: 'my-app',
  inputs: ['mealList'],
  directives: [MealListComponent],
  template: `
    <div class="container">
      <h1>Meal Tracker</h1>
        <meal-list [mealList]="meals"></meal-list>
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
