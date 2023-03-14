import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-event-sender',
  templateUrl: './event-sender.component.html',
  styleUrls: ['./event-sender.component.css'],
})
export class EventSenderComponent implements OnInit {
  @Output() someEvent = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  sendEvent() {
    this.someEvent.emit(true);
  }
}
