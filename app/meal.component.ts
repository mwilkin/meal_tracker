import { Component } from 'angular2/core';
import { Meal } from './meal.model';

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
