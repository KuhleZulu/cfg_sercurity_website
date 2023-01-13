import { Component, OnInit } from '@angular/core';
import { TECHNOLOGIES } from 'src/mock-data/technologies';
import { TRAININGS } from 'src/mock-data/trainings';
import { TechnologyModel } from 'src/models/technology.model';
import { TrainingModel } from 'src/models/training.model';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit{
  trainings: TrainingModel[] = TRAININGS;
  constructor(){}

  ngOnInit(): void {}

}
