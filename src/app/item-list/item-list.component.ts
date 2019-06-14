import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { SharedService } from '../shared.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SeparateItemsService } from '../separate-items.service';



@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
items=[];
test=[];
item;
  constructor(private share: SharedService, private sepItem: SeparateItemsService) {
    this.share.getWorkoutList().subscribe(data=> this.items = data);
    this.share.getTestList().subscribe(data1=> this.test = data1);
   }

  ngOnInit() {
   
    }
    doSome(id) {
      if(this.items) {
        var moreItems = this.items.filter((res) =>{
          return res.id === id
        })
        this.item = moreItems[0]
        console.log(id)
        console.log(this.item)
        if(this.item){
          this.sepItem.adToWorkout(this.item)
          console.log(this.sepItem.getWorkout())
        }
       
        
        
      }
     
      
      event.preventDefault();
      event.stopPropagation();
    }

}
