import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'event-emitter-bug';

  receiveEvent(event: boolean) {
    console.log('Put a debugger on me', event);
  }
}
