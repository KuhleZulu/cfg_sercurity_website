import { Component, OnInit } from '@angular/core';
import { OUR_LEADERSHIP_TEAM_LIST } from 'src/mock-data/our_leadership_team';
import { OurLeadershipTeamModel } from 'src/models/our.leadership.team.model';

@Component({
  selector: 'app-leadership-team',
  templateUrl: './leadership-team.component.html',
  styleUrls: ['./leadership-team.component.css']
})
export class LeadershipTeamComponent implements OnInit{

  ourLeaderShipTeamList: OurLeadershipTeamModel[] = OUR_LEADERSHIP_TEAM_LIST;


  body = 'Content will be available soon.'
  showPopup = false;
  constructor() {}

  ngOnInit(): void {}

  readValues(id: number) {
  this.showPopup = true;
  }
  onClose(){
    this.showPopup = false;
  }

}
