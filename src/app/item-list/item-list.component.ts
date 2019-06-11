import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Workout } from '../items.model';
import { ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
items=[];
  constructor(private share: SharedService,private route:ActivatedRoute ) {
    this.share.getWorkoutList().subscribe(data=> this.items = data);
    
   }

  ngOnInit() {
    }
  

}
