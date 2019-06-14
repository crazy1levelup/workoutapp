import { Component, OnInit } from '@angular/core';
import { SeparateItemsService } from '../separate-items.service';

@Component({
  selector: 'app-savedlist',
  templateUrl: './savedlist.component.html',
  styleUrls: ['./savedlist.component.css']
})
export class SavedlistComponent implements OnInit {
items;
  constructor(private sepItem: SeparateItemsService) {
    this.items = this.sepItem.getWorkout()
   }

  ngOnInit() {
  }

}
