import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Workout } from './items.model';
import { Test } from './items.model';
import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
items: Workout[];
test: Test[];
  constructor(private http: HttpClient) { }

  getWorkoutList(): Observable<Workout[]> {
    return this.http.get<Workout[]>('/assets/workoutList.json')
     
  }

  getTestList() {
    return this.http.get<Test[]>('http://127.0.0.1:8000/items/')
  }
}
