import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal-details',
  inputs: ['meal'],
  template: `
    <div class="meal-form">
      <h3>Edit Meal Details: </h3>
      <div class="container">
        <div class="row">
          <div class="col-md-2 col-sm-offset-2">
            <h4>Name: </h4><hr>
            <h4>Calorie content:</h4><hr>
            <h4>Description: </h4>
          </div>
          <div class="col-md-8">
            <h4><input [(ngModel)]="meal.name" class="input-lg input-width"/></h4>
            <h4><input [(ngModel)]="meal.calories" class="input-lg input-width" type="number"/></h4>
            <h4><input [(ngModel)]="meal.description" class="input-lg input-width"/></h4>
          </div>
        </div>
      </div>
    </div>
  `
})
export class EditMealDetailsComponent {
  public meal: Meal;
}
