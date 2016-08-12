import { Component } from 'angular2/core';

@Component ({
  selector: 'my-app',
  template: `
    <div class="container">
      <h1>Meal Tracker</h1>
      <h3>{{  meal.name }}</h3>
      <h3>{{  meal.description }}</h3>
      <h3>{{  meal.calories }}</h3>
    </div>
  `
})
export class AppComponent {
  public meal: Meal;
  constructor(){
    this.meal = new Meal("Hamburgers!", "No bun!", 1500, 0);
  }
}
export class Meal {
  constructor(public name: string, public description: string, public calories: number, public id: number){

  }
}
