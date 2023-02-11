import { Component, OnInit } from '@angular/core';
import { UxModel } from 'src/models/ux.model';
import { UxService } from 'src/services/ux.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'CFG Security';
  ux?: UxModel;

  constructor(private uxService: UxService) {
  setTimeout(() => {
    this.laod()
  }, 5);
  }

  laod(){
    this.uxService.uxObservable.subscribe((data) => {
      if (data) {
        this.ux = data;
      }
    });
  }
}

/**
   
Componet.html --> View 
Componet.ts  --> Logic




 */
