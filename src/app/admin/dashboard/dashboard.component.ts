import { Component, OnInit } from '@angular/core';
import {DashboardService} from '../../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  Designation: string ;
  Username: string ;
  NoOfTeamMembers: number ;
  TotalCostOfAllProjects: number ;
  PendingTasks: number ;
  UpComingProjects: number ;
  ProjectCost: number ;
  CurrentExpenditure: number ;
  AvailableFunds: number ;
  ToDay: Date ;

  Clients: string[] ;
  Projects: string[];
  Years: number[] = [];
  TeamMembersSummary = [];
  TeamMembers = [];

  constructor(private dashboardService: DashboardService ) {}

  ngOnInit(): void {
    this.Designation = 'Team Leader';
    this.Username = 'Damir Gojovic';
    this.NoOfTeamMembers = 41;
    this.TotalCostOfAllProjects = 1100;
    this.PendingTasks = 15;
    this.UpComingProjects = 2;
    this.ProjectCost = 313424;
    this.CurrentExpenditure = 98765;
    this.AvailableFunds = 87655;
    this.ToDay = new Date();

    this.Clients = [
      'Maverick Solutions', 'Gordas', 'World Co.'
    ];

    this.Projects = [
      'Project A', 'Project B', 'Project C', 'Project D'
    ];
    for (let i = 2021; i >= 2010; i--)
    {
      this.Years.push(i);
    }

    this.TeamMembersSummary = this.dashboardService.getTeamMembersSummary();

    this.TeamMembers = [
      {
        Region: 'East', Members: [
          { ID: 1, Name: 'Worker1', Status: 'Available' },
          { ID: 2, Name: 'Worker2', Status: 'Available' },
          { ID: 3, Name: 'Worker3', Status: 'Busy' },
          { ID: 4, Name: 'Worker4', Status: 'Busy' }
        ]
      },
      {
        Region: 'West', Members: [
          { ID: 5, Name: 'Worker1', Status: 'Available' },
          { ID: 6, Name: 'Worker2', Status: 'Available' },
          { ID: 7, Name: 'Worker3', Status: 'Busy' },
          { ID: 8, Name: 'Worker4', Status: 'Busy' }
        ]
      },
      {
        Region: 'South', Members: [
          { ID: 9, Name: 'Worker1', Status: 'Available' },
          { ID: 10, Name: 'Worker2', Status: 'Available' },
          { ID: 11, Name: 'Worker3', Status: 'Busy' },
          { ID: 12, Name: 'Worker4', Status: 'Busy' }
        ]
      },
      {
        Region: 'North', Members: [
          { ID: 13, Name: 'Worker1', Status: 'Available' },
          { ID: 14, Name: 'Worker2', Status: 'Available' },
          { ID: 15, Name: 'Worker3', Status: 'Busy' },
          { ID: 16, Name: 'Worker4', Status: 'Busy' }
        ]
      }
    ];
  }
  onProjectChange($event) {
    if ($event.target.innerHTML === 'Project A')
    {
      this.ProjectCost = 2113507;
      this.CurrentExpenditure = 96788;
      this.AvailableFunds = 52436;
    }
    else if ($event.target.innerHTML === 'Project B') {
      this.ProjectCost = 88923;
      this.CurrentExpenditure = 22450;
      this.AvailableFunds = 2640;
    }
    else if ($event.target.innerHTML === 'Project C') {
      this.ProjectCost = 662183;
      this.CurrentExpenditure = 7721;
      this.AvailableFunds = 9811;
    }
    else if ($event.target.innerHTML === 'Project D') {
      this.ProjectCost = 928431;
      this.CurrentExpenditure = 562;
      this.AvailableFunds = 883;
    }
  }
}
