## Meal Tracker App | JS Angular2

#### JavaScript Angular2

#### Indpendent Project Week 2

#### August 12, 2016

#### By _**Matt Wilkin**_

## Description
This is a simple meal tracking application built with JS Angular2 that allows users to log meals, meal details and the calorie content.
## Objectives

| Basic Objectives        | Complete           |
| ------------- |:-------------:|
| User should be able to log consumed food by submitting a form that includes food name, description, and calorie content.     | X |
| User should be able to view a list of all foods logged.     | X |
| User should be able to edit the food log details: food name, description, and calorie count.     | X |
|   User should be able to view: 1. all foods 2. foods with more than 500 calories 3. food with less than 500 calories   | X |

### Further Exploration
* Custom SASS styling with corresponding Gulp tasks to compile.
* Display of the total number of calories consumed in a day, and/or the average number of calories consumed in a day.
* Add a property that records when each food was eaten. The user could enter a date and time, or the app can generate a timestamp.
* Expand the application to display multiple days of food logs. Group the food entries by day. Then include a component to display the total calories for whichever day the user selects.
* Add a new master component to average the total calories consumed per day so that the user can figure out how much exercise they should be getting on a regular basis.

## Component Tree
| Component        | Function           | Parent  |
| ------------- |:-------------:| -----:|
| App Component | Hold Data | -- |
| MealListComponent | Display meal name, description, calories and filter meals by calorie criteria | App Component |
| New Meal Component | Makes form to create a new meal | Meal List Component |
| Edit Meal Component | Allows user to edit a meal's properties(name, description, calories) | MealListComponent |
| Edit Meal Component | Allows user to edit a meal's properties | Meal List Component |
| Meal Component | Displays a single meal | Meal List Component |
| Meal Model | model class definition | not a component |

## Setup/Installation Requirements

* Clone this repository: (<a href= "https://github.com/mwilkin/meal_tracker">Wilkin Meal Tracker)

* In the command-line run:
```
$ npm install
```
```
$ bower install
```
```
$ bower init
```
* Install globals if needed(gulp, bower, sass, typescript, etc.)
```
$ npm install gulp
```
```
$ npm install bower
```
```
$ npm install typescript
```
```
$ apm install atom-typescript
```
```
$ gulp build
```
* Launch server
```
$ gulp serve
```

## Known Bugs

* Currently no known bugs

## Support and contact details

If you run into any issues or have questions, ideas, or concerns, please feel free to email me at the link below or contact me on GitHub.

* Email: <a href="mailto:mwilkin22@gmail.com">Matt Wilkin</a>

* GitHub: <a href="https://github.com/mwilkin/github-api">mwilkin</a>

## Technologies Used

* JavaScript
* TypeScript
* Angular2
* HTML
* CSS
* Sass
* Bower
* Node Packet Manager

### License

*MIT License*
<a href="https://opensource.org/licenses/MIT">https://opensource.org/licenses/MIT</a>

Copyright (c) 2016 **_Matt Wilkin_**
