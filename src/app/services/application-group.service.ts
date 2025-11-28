import { Component, OnInit,Input,Injectable } from '@angular/core';
import { environment } from '../../environments/environment.js';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { AnimationKeyframesSequenceMetadata } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class ApplicationGroupService {

  constructor(private http: HttpClient) {
    const httpOptions = {
      headers: new HttpHeaders({
      'Content-Type':  'application/json'
      })
      };
   }AnimationKeyframesSequenceMetadata

   Search_Application_Group_Typeahead(Application_Group_Name): Observable<any> {
    var Search_Data = { 'Application_Group_Name': Application_Group_Name}
    return this.http.get(environment.BasePath + 'Application_Group/Search_Application_Group_Typeahead/', { params: Search_Data });
}
Get_Application_Group(Application_Group_Id)
{
return this.http.get(environment.BasePath +'Application_Group/Get_Application_Group/'+Application_Group_Id);}
}
