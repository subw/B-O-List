import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Hero } from '../hero';
import { ActivityService } from '../activity.service';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private activityService: ActivityService,
    private location: Location
  ) { }
  
    ngOnInit() {
      this.getHero();
    }

    getHero(): void {
      const id = +this.route.snapshot.paramMap.get('id');
      this.activityService.getHero(id)
        .subscribe(hero => this.hero = hero);
    }

    save(): void {
      this.activityService.updateHero(this.hero)
        .subscribe(() => this.goBack());
    }

    goBack(): void {
      this.location.back();
    }
}