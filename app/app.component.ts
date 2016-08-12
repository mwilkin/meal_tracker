import { Component, EventEmitter } from 'angular2/core';

@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  template: `
    <h3>Meal name: {{ meal.name}}. Description: {{ meal.descrition}}. Calorie count: {{ meal.calories}}</h3>
  `
})
export class MealComponent {
  public meal: Meal;
}

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  directives: [MealComponent],
  template: `
    <meal-display *ngFor="#currentMeal of mealList" (click)="mealClicked(currentMeal)"
    [class.selected]="currentMeal === selectedMeal" [meal]="currentMeal"></meal-display>
  `
})
export class MealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  constructor() {
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void {
    console.log('child', clickedMeal);
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
  }
}

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
export class Meal {
  constructor(public name: string, public description: string, public calories: number, public id: number){

  }
}
