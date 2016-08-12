import { Component, EventEmitter } from 'angular2/core';
import { MealListComponent } from './meal-list.component';
import { Meal } from './meal.model';

@Component ({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
    <div class="container">
      <h1>Meal Tracker</h1>
        <meal-list
          [mealList]="meals"
          (onMealSelect)="mealWasSelected($event)">
        </meal-list>
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
    console.log('parent', clickedMeal);
  }
}
