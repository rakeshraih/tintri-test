import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  statusVM = {};

  inputChnage(val) {
    this.statusVM = {
      statusCode: val
    };
  }
}
