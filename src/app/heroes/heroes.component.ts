import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Activity } from '../activity';
import { ActivityService } from '../activity.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: []
})
export class HeroesComponent implements OnInit {
  heroes: Activity[];

  constructor(private activityService: ActivityService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.activityService.getActivities().subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.activityService.addActivity({ name } as Activity)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(activity: Activity): void {
    this.heroes = this.heroes.filter(h => h !== activity);
    this.activityService.deleteActivity(activity).subscribe();
  }
}



