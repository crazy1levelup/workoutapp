import { Injectable } from '@angular/core';
import { Workout, SavedWorkout } from './items.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SeparateItemsService {
  constructor(private http: HttpClient) { }

adToWorkout(workout: SavedWorkout) {
  console.log(workout)
  return this.http.post('http://127.0.0.1:8000/saveditems/', workout).subscribe(res => console.log(res))
  

}
getWorkout() {
  return this.http.get<SavedWorkout[]>('http://127.0.0.1:8000/saveditems/')
  
}

}
