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
  days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]


  constructor(private sepItem: SeparateItemsService) {
    this.sepItem.getWorkoutDay(this.days[0]).subscribe(res => this.items = res)
  }

  ngOnInit() {
    
  }

  deleteItem(nr) {
    if (this.items) {
      var moreItems = this.items.filter((res) => {
        return res.nr === nr
      })
      var itemID = moreItems[0].id
      if(confirm("Are you sure?")) {
        this.sepItem.deleteWorkout(itemID).subscribe()
        this.items = this.items.filter(item => item.id != itemID);
      }
    }

    event.preventDefault();
    event.stopPropagation();
  }

  changeDayWorkout(day) {
    this.sepItem.getWorkoutDay(day).subscribe(res => this.items = res)
    console.log(this.items)
  }
}
