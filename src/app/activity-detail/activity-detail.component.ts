import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Activity } from '../activity';
import { ActivityService } from '../activity.service';

@Component({
  selector: 'activity-detail',
  templateUrl: './activity-detail.component.html',
})
export class ActivityDetailComponent implements OnInit {
  @Input() activity: Activity;

  constructor(
    private route: ActivatedRoute,
    private activityService: ActivityService,
    private location: Location
  ) { }
  
    ngOnInit() {
      this.getActivity();
    }

    getActivity(): void {
      const id = +this.route.snapshot.paramMap.get('id');
      this.activityService.getActivity(id)
        .subscribe(activity => this.activity = activity);
    }

    save(): void {
      this.activityService.updateActivity(this.activity)
        .subscribe(() => this.goBack());
    }

    goBack(): void {
      this.location.back();
    }
}