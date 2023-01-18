import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent implements OnInit {
  @Input() title: string = '';
  @Input() bg: string = 'assets/images/logos/test.png';
  style?: BgImageModel = { 'background-image': '' };
  ngOnInit(): void {
    this.style = { 'background-image': `linear-gradient(61deg, rgba(0,0,0,0.45), rgba(7,14,123,0.51)),
    url(${this.bg})` };
  }
}

interface BgImageModel {
  'background-image': string;
}
