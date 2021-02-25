import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Project} from './project';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private httpClient: HttpClient) {
  }
   getAllProjects(): Observable<Project[]> {
    var currentUser = {token: ''};
    var headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer');
    if (sessionStorage.currentUSer != null){
      currentUser = JSON.parse(sessionStorage.currentUser);
      headers = headers.set('Authorization', 'Bearer' + currentUser.token);
    }
    return this.httpClient
      .get<Project[]>('http://localhost:3000/posts/', {headers, responseType: 'json' })
      .pipe(
        map((data: Project[]) => {
          for (let i = 0; i < data.length; i++)
          {
            // data[i].teamSize = data[i].teamSize * 10;
          }
          return data;
        })
      );
  }

  insertProject(newProject: Project): Observable<Project>{
    return this.httpClient.post<Project>('http://localhost:3000/posts/', newProject, {responseType: 'json'});
  }

  updateProject(existingProject: Project): Observable<Project> {
    // tslint:disable-next-line:max-line-length
    return this.httpClient.put<Project>('http://localhost:3000/posts/' + existingProject.projectID, existingProject, {responseType: 'json'});
  }

  deleteProject(ProjectID: number): Observable<string>
  {
    return this.httpClient.delete<string>('http://localhost:3000/posts/' + ProjectID);
  }

  SearchProjects(searchBy: string, searchText: string): Observable<Project[]> {
    return this.httpClient.get<Project[]>(
      'http://localhost:3000/posts/search/' + searchBy + '/' + searchText,
      { responseType: 'json' }
    );
  }
}
