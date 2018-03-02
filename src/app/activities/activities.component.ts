import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Activity } from '../activity';
import { ActivityService } from '../activity.service';

@Component({
  selector: 'my-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css'],
  providers: []
})
export class ActivitiesComponent implements OnInit {
  activities: Activity[];

  constructor(private activityService: ActivityService) { }

  ngOnInit(): void {
    this.getActivities();
  }

  getActivities(): void {
    this.activityService.getActivities().subscribe(activities => this.activities = activities);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.activityService.addActivity({ name } as Activity)
      .subscribe(activity => {
        this.activities.push(activity);
      });
  }

  delete(activity: Activity): void {
    this.activities = this.activities.filter(h => h !== activity);
    this.activityService.deleteActivity(activity).subscribe();
  }
}



