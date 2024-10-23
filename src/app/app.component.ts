import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'ap1',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Crishna ' + VERSION.full;
  mood = 'Feliz!';

  // image: { url: "../assets/logo.png" }
}
