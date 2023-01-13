import { Component, OnInit } from '@angular/core';
import { TECHNOLOGIES } from 'src/mock-data/technologies';
import { TechnologyModel } from 'src/models/technology.model';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {
  technologies: TechnologyModel [] = TECHNOLOGIES;
  constructor(){}

  ngOnInit(): void {}
}
