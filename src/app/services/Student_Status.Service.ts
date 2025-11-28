import { Component, OnInit,Input,Injectable } from '@angular/core';
import { environment } from '../../environments/environment.js';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { AnimationKeyframesSequenceMetadata } from '@angular/animations';
@Injectable({
providedIn: 'root'
})
export class Student_Status_Service {
constructor(private http: HttpClient)
{
const httpOptions = {
headers: new HttpHeaders({
'Content-Type':  'application/json'
})
};
}AnimationKeyframesSequenceMetadata
Save_Student_Status(Student_Status_)
{
return this.http.post(environment.BasePath +'Student_Status/Save_Student_Status/',Student_Status_);}
private extractData(res: Response)
{
let body = res;
return body || { };
}
Search_Student_Status(Student_Status_Name):Observable<any>
{
var Search_Data={'Student_Status_Name':Student_Status_Name}
 return this.http.get(environment.BasePath +'Student_Status/Search_Student_Status/',{params:Search_Data});}
Delete_Student_Status(Student_Status_Id)
{
 return this.http.get(environment.BasePath +'Student_Status/Delete_Student_Status/'+Student_Status_Id);}
Get_Student_Status(Student_Status_Id)
{
 return this.http.get(environment.BasePath +'Student_Status/Get_Student_Status/'+Student_Status_Id);}


}
