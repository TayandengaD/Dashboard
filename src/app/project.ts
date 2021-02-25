import {ClientLocation} from './client-location';

export class Project {
  projectID: null;
  projectName: any;
  dateOfStart: any;
  teamSize: null;
  active: boolean;
  status: null;
  clientLocationID: null;
  clientLocation: ClientLocation;

  constructor() {

    this.projectID = 0;
    this.projectName = null;
    this.dateOfStart = null;
    this.teamSize = 0;
    this.active = true;
    this.status = null;
    this.clientLocationID = null;
    this.clientLocation = new ClientLocation();
  }
}
