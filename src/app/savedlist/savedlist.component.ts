import { Component, OnInit } from '@angular/core';
import { SeparateItemsService } from '../separate-items.service';
import { Workout } from '../items.model';

@Component({
  selector: 'app-savedlist',
  templateUrl: './savedlist.component.html',
  styleUrls: ['./savedlist.component.css']
})
export class SavedlistComponent implements OnInit {
  items = [];
  constructor(private sepItem: SeparateItemsService) {
    this.sepItem.getWorkout().subscribe(res => this.items = res)
  }

  ngOnInit() {
  }

}
