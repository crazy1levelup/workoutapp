import { Injectable } from '@angular/core';
import { Workout } from './items.model';
@Injectable({
  providedIn: 'root'
})
export class SeparateItemsService {
items=[]

  constructor() { }

adToWorkout(workout) {
  this.items.push(workout)

}
getWorkout() {
  return this.items;
}

}
