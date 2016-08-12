import { Component, EventEmitter } from 'angular2/core';
import { MealComponent } from './meal.component';
import { Meal } from './meal.model';
import { EditMealDetailsComponent } from './edit-meal-details.component';
import { NewMealComponent } from './new-meal.component';
import { CaloriePipe } from './calorie.pipe';


@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  pipes: [CaloriePipe],
  directives: [MealComponent, EditMealDetailsComponent, NewMealComponent],
  template: `
  <div class="col-md-8 col-md-offset-2">
    <hr>
    <div class="pipe">
      <h2>Filter</h2>
      <select class="filter input-lg" (change)="onChange($event.target.value)">
        <option value="showall" selected="selected">Show All</option>
        <option value="over500">Show High Calorie Meals</option>
        <option value="under500">Show Low Calorie Meals</option>
      </select><hr>
    </div>
    <meal-display *ngFor="#currentMeal of mealList| calorie:selectedCalorie" (click)="mealClicked(currentMeal)" [class.selected]="currentMeal === selectedMeal" [meal]="currentMeal">
    </meal-display>
    <edit-meal-details *ngIf="selectedMeal" [meal]="selectedMeal">
    </edit-meal-details>
    <new-meal (onSubmitNewMeal)="createMeal($event)"></new-meal>
  </div>
  `
})
export class MealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  public selectedCalorie: string = "showAll";
  constructor() {
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void {
    console.log('child', clickedMeal);
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
  }
  createMeal(newEntry: string[]): void {
    this.mealList.push(
      new Meal(newEntry[0], newEntry[1], parseInt(newEntry[2]), this.mealList.length)
    );
  }
  onChange(optionFromMenu) {
    this.selectedCalorie = optionFromMenu;
    console.log(this.selectedCalorie);
  }
}
