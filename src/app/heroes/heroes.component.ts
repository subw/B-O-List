import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Hero } from '../hero';
import { ActivityService } from '../activity.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: []
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  constructor(private activityService: ActivityService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.activityService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.activityService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.activityService.deleteHero(hero).subscribe();
  }
}



