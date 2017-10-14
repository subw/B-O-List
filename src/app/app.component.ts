import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'the League of Draaaaven';
  hero: Hero = {
    name: 'SubwaveZ',
    id: 1
  }
}

export class Hero {
  id: number;
  name: string;
}
