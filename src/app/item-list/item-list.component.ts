import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { SharedService } from '../shared.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SeparateItemsService } from '../separate-items.service';
import { SavedWorkout } from '../items.model';



@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items = [];
  test = [];
  item: SavedWorkout;
  constructor(private share: SharedService, private sepItem: SeparateItemsService) {
    this.share.getWorkoutList('').subscribe(data => this.items = data);
  }

  ngOnInit() {

  }


  doSome(id, day) {
    if (this.items) {
      var moreItems = this.items.filter((res) => {
        return res.id === id
      })
      this.item = moreItems[0]
      console.log(id)
      this.item = Object.assign({}, this.item, { nr: id, day: day })
      console.log(this.item)
      if (this.item) {
        this.sepItem.adToWorkout(this.item)
        console.log(this.sepItem.getWorkout())
      }
    }
    
  }
  filterType(type) {
    this.share.getWorkoutList(type).subscribe(data => this.items = data);
  }
}
