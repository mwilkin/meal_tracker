import { Pipe, PipeTransform } from 'angular2/core';
import { Meal } from './meal.model';

@Pipe({
  name: "calorie",
  pure: false
})
export class CaloriePipe implements PipeTransform {
  transform = function(input: Meal[], info) {
    var calorieCount = info[0];
    var output: Meal[] = [];
    if(calorieCount == "under500") {
      for(var i = 0; i < input.length; i++) {
        if(input[i].calories <= 500) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (calorieCount === "over500") {
      for(var i = 0; i < input.length; i++) {
        if (input[i].calories > 500) {
          output.push(input[i]);
        }
      }
      return output;
    } else{
      return input;
    }
  }
}
