import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Workout } from './items.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
items: Workout[];

  constructor(private http: HttpClient) { }

  getWorkoutList(): Observable<Workout[]> {
    return this.http.get<Workout[]>('http://127.0.0.1:8000/items/')
     
  }

  
}
