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

  deleteItem(nr) {
    if (this.items) {
      var moreItems = this.items.filter((res) => {
        return res.nr === nr
      })
      var itemID = moreItems[0].id
      this.sepItem.deleteWorkout(itemID).subscribe()
      this.items = this.items.filter(item => item.id != itemID);
     
    }
    
    
    // this.sepItem.deleteWorkout(nr).subscribe()
    event.preventDefault();
    event.stopPropagation();
  }
}
