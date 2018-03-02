import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitiesComponent } from './activities/activities.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { ActivityDetailComponent }  from './activity-detail/activity-detail.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'activities', component: ActivitiesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: ActivityDetailComponent }
];


@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})

export class AppRoutingModule { }
