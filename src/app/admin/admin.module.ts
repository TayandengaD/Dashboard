import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from './dashboard/dashboard.component';
import {MyProfileComponent} from './my-profile/my-profile.component';
import {AboutComponent} from './about/about.component';
import {DashboardService} from '../dashboard.service';
import {ProjectsComponent} from './projects/projects.component';
import {FormsModule} from '@angular/forms';
import {TeamSizeValidatorDirective} from '../team-size-validator.directive';


@NgModule({
  declarations: [
    DashboardComponent,
    MyProfileComponent,
    AboutComponent,
    ProjectsComponent,
    TeamSizeValidatorDirective
  ],
  imports: [CommonModule, FormsModule],
  exports: [DashboardComponent, MyProfileComponent, AboutComponent, ProjectsComponent, TeamSizeValidatorDirective],
  providers: [DashboardService]
})
export class AdminModule { }