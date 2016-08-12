import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template: `
    <div class="meal-form">
      <h3>Create a new Meal:</h3>
      <input placeholder="Name" class="col-sm-8 input-lg" #newName>
      <input placeholder="Description" class="col-sm-8 input-lg" #newDescription>
      <input placeholder="Calories" class="col-sm-8 input-lg" #newCalories>
      <button (click)="addMeal(newName, newDescription, newCalories)" class="btn-success btn-lg add-button">Add New Meal</button>
    </div>
  `
})
export class NewMealComponent {
  public onSubmitNewMeal: EventEmitter<String[]>;
  constructor(){
    this.onSubmitNewMeal = new EventEmitter();
  }
  addMeal(userName: HTMLInputElement, userDescription: HTMLInputElement, userCalories: HTMLInputElement){
    var newEntry: String[] = [userName.value, userDescription.value, userCalories.value];
    this.onSubmitNewMeal.emit(newEntry);
    userName.value = "";
    userDescription.value = "";
    userCalories.value = "";
  }
}
