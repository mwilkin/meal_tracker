import { Pipe, PipeTransform } from 'angular2/core';
import { Meal } from './meal.model';

@Pipe({
  name: "calorie",
  pure: false
})
  var transform = function (input: Meal[], info){
    var output: Meal[] = [];
    for (var i= 0; i < input.length; i++) {
      if (info[2] >= 500) {
        output.push();
      } else {
        output.push();
      }
    }
    return output;
  }
export class CaloriePipe implements PipeTransform {
  transform(input: Meal[], args) {
    return input;
  }
}
