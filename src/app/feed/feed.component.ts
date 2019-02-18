import { Component, Input, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  @Input() feed: any;
  @Input() overview: any;
  @Input() events: Array<any>;
  @Input() name: string;
  @Input() image: string;
  @Input() type: string;

  constructor() {
    
   }

  ngOnInit() {
    this.events = this.feed.events;
    this.name  = this.events[0].name;
    this.image = this.events[0].image;
    this.type =  this.events[0].type;

    this.startTimer();
    
  }

  startTimer() {
    let feedTimer = timer(10000, 10000).subscribe(val => {
      for (var i = 0; i < this.events.length; i++) {
        if(val > this.events.length) {
          return;
        }
        if(val === i){
          this.showEvent(this.events[i]);
          return;
        }
      }
      feedTimer.unsubscribe;
      this.startTimer();
    });
  }

  showEvent(event: any) {
    this.name = event.name;
    this.type = event.type;
    this.image = event.image;
  }

}
