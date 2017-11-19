import { Component, Input, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  constructor() { }
  
    ngOnInit() {
    }
}