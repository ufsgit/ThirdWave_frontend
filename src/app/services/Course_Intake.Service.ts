import { Component, OnInit,Input,Injectable } from '@angular/core';
import { environment } from '../../environments/environment.js';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { AnimationKeyframesSequenceMetadata } from '@angular/animations';
@Injectable({
providedIn: 'root'
})
export class Course_Intake_Service {
constructor(private http: HttpClient)
{
const httpOptions = {
headers: new HttpHeaders({
'Content-Type':  'application/json'
})
};
}AnimationKeyframesSequenceMetadata
Save_Course_Intake(Course_Intake_)
{
return this.http.post(environment.BasePath +'Course_Intake/Save_Course_Intake/',Course_Intake_);}
private extractData(res: Response)
{
let body = res;
return body || { };
}
Search_Course_Intake(Course_Intake_Name):Observable<any>
{
var Search_Data={'Course_Intake_Name':Course_Intake_Name}
 return this.http.get(environment.BasePath +'Course_Intake/Search_Course_Intake/',{params:Search_Data});}
Delete_Course_Intake(Course_Intake_Id)
{
 return this.http.get(environment.BasePath +'Course_Intake/Delete_Course_Intake/'+Course_Intake_Id);}
Get_Course_Intake(Course_Intake_Id)
{
 return this.http.get(environment.BasePath +'Course_Intake/Get_Course_Intake/'+Course_Intake_Id);}
}

