import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  template: `
    <div>
      <div>
        <h3>{{ meal.name}}</h3>
      </div>
      <h4>Calorie count: {{ meal.calories}}</h4>
      <h4>Description: {{ meal.description }}</h4>
      <hr>
    </div>
  `
})
export class MealComponent {
  public meal: Meal;
}
