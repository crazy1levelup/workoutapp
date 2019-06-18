import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/app/shared.service';
import { DomSanitizer } from '@angular/platform-browser';
import { SeparateItemsService } from 'src/app/separate-items.service';

@Component({
  selector: 'app-saved-list-detail',
  templateUrl: './saved-list-detail.component.html',
  styleUrls: ['./saved-list-detail.component.css']
})
export class SavedListDetailComponent implements OnInit {
  items=[];
  item;
  video;
  videoLink;

  constructor(private route:ActivatedRoute, private share:SharedService,private sanitizer: DomSanitizer, private sepItem: SeparateItemsService) {
    this.sepItem.getWorkout().subscribe(data=> this.items = data);
   }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      var moreItems = this.items.filter((res) =>{
        return res.id === parseInt(params.get('id'))
        
      })
      this.item = moreItems[0];
      if(this.item) {
        console.log(this.item.videolink)
        this.videoLink = 'https://www.youtube.com/embed/' + this.item.videolink;
        this.video = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoLink)
        console.log(this.videoLink)
      }
    })
  }

}
