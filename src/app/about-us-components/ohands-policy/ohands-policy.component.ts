import { Component, OnInit } from '@angular/core';
import { OHANDSPOLICY } from 'src/mock-data/ohandspolicy';
import { OhandspolicyModel } from 'src/models/ohandspolicy.model';

@Component({
  selector: 'app-ohands-policy',
  templateUrl: './ohands-policy.component.html',
  styleUrls: ['./ohands-policy.component.css']
})
export class OhandsPolicyComponent implements OnInit{
  ohandspolicy: OhandspolicyModel [] = OHANDSPOLICY;
  constructor(){}

  ngOnInit(): void {}
}
