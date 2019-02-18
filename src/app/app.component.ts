import { Component, OnInit } from '@angular/core';
import json from './data/team.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sales-team';
  data = json;
  salesPeople = this.data.section.salespeople;
  feed = this.data.feed;
  overview = this.data.overview;
  
  constructor() {}

}
