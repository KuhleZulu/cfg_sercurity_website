import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css'],
})
export class LoaderComponent implements OnInit {
  @Input() autoStop = true;
  ngOnInit(): void {
    if (this.autoStop) this.stop();
  }

  stop() {
    setTimeout(() => {
      this.showLoader = false;
    }, 1500);
  }
  showLoader = true;
}
