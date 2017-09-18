import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ninja Switchboard';
  switches=[true, true, true, true, true, true, true, true, true, true];
  setSwitch(idx) {
    this.switches[idx] = !this.switches[idx];
  }
}
