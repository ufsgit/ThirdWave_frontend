import { Component, OnInit,Input,Injectable } from '@angular/core';
import { environment } from '../../environments/environment.js';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { AnimationKeyframesSequenceMetadata } from '@angular/animations';
@Injectable({
providedIn: 'root'
})
export class Student_Message_Service {
constructor(private http: HttpClient)
{
const httpOptions = {
headers: new HttpHeaders({
'Content-Type':  'application/json'
})
};
}AnimationKeyframesSequenceMetadata
Save_Student_Message(Student_Message_)
{
return this.http.post(environment.BasePath +'Student_Message/Save_Student_Message/',Student_Message_);}
private extractData(res: Response)
{
let body = res;
return body || { };
}
Search_Student_Message(Student_Id):Observable<any>
{
var Search_Data={'Student_Id':Student_Id}
 return this.http.get(environment.BasePath +'Student_Message/Search_Student_Message/',{params:Search_Data});}

Delete_Student_Message(Student_Message_Id)
{ 
    
 return this.http.get(environment.BasePath +'Student_Message/Delete_Student_Message/'+Student_Message_Id);}
Get_Student_Message(Student_Message_Id)
{
 return this.http.get(environment.BasePath +'Student_Message/Get_Student_Message/'+Student_Message_Id);}
}

