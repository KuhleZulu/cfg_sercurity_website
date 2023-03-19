import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css'],
})
export class SuccessComponent {
  @Input() message?: string;
  @Input() action?: string;
  @Input() title?: string;
  @Output() okEvent = new EventEmitter<any>();
  ok = () => this.okEvent.emit(true);
}
