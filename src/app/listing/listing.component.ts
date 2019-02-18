import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'members',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {
  @Input() members: any;

  constructor() { }

  ngOnInit() {
    console.log(this.members);
  }

}
