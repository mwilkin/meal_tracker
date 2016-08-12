import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal-details',
  inputs: ['meal'],
  template: `
    <h3> Edit meal name: {{ meal.name }} | Edit description: {{ meal.description }} | Edit calorie amount: {{ meal.calories }}</h3>
  `
})
export class EditMealDetailsComponent {
  public task: Task;
}
