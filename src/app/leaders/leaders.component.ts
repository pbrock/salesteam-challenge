import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'leaders',
  templateUrl: './leaders.component.html',
  styleUrls: ['./leaders.component.scss']
})
export class LeadersComponent implements OnInit {
  @Input() team: any;
  public leaders: Array<any> = [];

  constructor() { 
    
  }

  ngOnInit() {
    this.leaders = this.findLeaders(this.team);
  }

  findLeaders(teamMembers: Array<any>) {
    let upperBound:number = 0;
    let lowerBound:number = 0;
    let currentLeaders: Array<any> = [{},{},{}]; 

    for (var i = 0; i < teamMembers.length; i++) {
      let sales: number = parseInt(teamMembers[i].sales.month);
      const member: object = teamMembers[i];

      if(sales >= upperBound){
        currentLeaders.unshift(member);
        currentLeaders.splice(-1, 1);
        upperBound = sales;
      } else if(sales >= lowerBound && lowerBound === 0){
        currentLeaders.splice(1, 2);
        currentLeaders.push(member);
        lowerBound = sales;
      } else if(currentLeaders.length < 3) {
        currentLeaders.push(member);
        lowerBound = sales;
      } else if(sales >= lowerBound && currentLeaders.length === 3){
        currentLeaders.push(member);
        currentLeaders.splice(-1, 1);
        upperBound = sales;
      }
    }

    return currentLeaders;
  }

}
