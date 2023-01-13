import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit{

  @Output() closeEvent = new EventEmitter<boolean>();
  @Input() title = 'Hey';
  @Input() body = 'Hey';
  constructor() { }

  ngOnInit(): void {
  }
  onClose(){
    this.closeEvent.emit(false);
  }
}
