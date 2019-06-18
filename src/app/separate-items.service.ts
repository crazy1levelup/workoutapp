import { Injectable } from '@angular/core';
import { Workout, SavedWorkout } from './items.model';
import { HttpClient } from '@angular/common/http';
import {ToastrService, Toast} from 'ngx-toastr'


@Injectable({
  providedIn: 'root'
})
export class SeparateItemsService {
  constructor(private http: HttpClient, private toastr: ToastrService) { }

adToWorkout(workout: SavedWorkout) {
  console.log(workout)
  return this.http.post('http://127.0.0.1:8000/saveditems/', workout).subscribe(res => this.toastr.success('added', (workout.name).toString()), error =>{
  this.toastr.error('It already exists in your workout')
  
  })
  

}
getWorkout() {
  return this.http.get<SavedWorkout[]>('http://127.0.0.1:8000/saveditems/')
  
}

}
