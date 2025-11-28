import { Component, OnInit,Input,Injectable } from '@angular/core';
import { environment } from '../../environments/environment.js';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { AnimationKeyframesSequenceMetadata } from '@angular/animations';
@Injectable({
providedIn: 'root'
})
export class Student_Document_Service {
constructor(private http: HttpClient)
{
const httpOptions = {
headers: new HttpHeaders({
'Content-Type':  'application/json'
})
};
}AnimationKeyframesSequenceMetadata
Save_Student_Document(Student_Document_)
{
return this.http.post(environment.BasePath +'Student_Document/Save_Student_Document/',Student_Document_);}
private extractData(res: Response)
{
let body = res;
return body || { };
}
Search_Student_Document(Student_Document_Name):Observable<any>
{
var Search_Data={'Student_Document_Name':Student_Document_Name}
 return this.http.get(environment.BasePath +'Student_Document/Search_Student_Document/',{params:Search_Data});}
Delete_Student_Document(Student_Document_Id)
{
 return this.http.get(environment.BasePath +'Student_Document/Delete_Student_Document/'+Student_Document_Id);}
Get_Student_Document(Student_Document_Id)
{
 return this.http.get(environment.BasePath +'Student_Document/Get_Student_Document/'+Student_Document_Id);}
}

