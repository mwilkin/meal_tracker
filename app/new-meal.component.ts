import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  template: `
    <div class="meal-form">
      <h3>Create a new Meal:</h3>
      <input placeholder="Name" class="col-sm-8 input-lg" #newName>
      <input placeholder="Description" class="col-sm-8 input-lg" #newDescription>
      <input placeholder="Calories" class="col-sm-8 input-lg" #newCalories>
      <button (click)="addMeal(newName, newDescription, newCalories)" class="btn-success btn-lg add-button">Add</button>
    </div>
  `
})
export class NewMealComponent {
  public onSubmitNewMeal: EventEmitter<Meal>;
  constructor(){
    this.onSubmitNewMeal = new EventEmitter();
  }
  addMeal(userName: HTMLInputElement, userDescription: HTMLInputElement, userCalories: HTMLInputElement){
    this.onSubmitNewMeal.emit(userName.value);
    userName.value = "";
    userDescription.value = "";
    userCalories.value = "";

  }
}
