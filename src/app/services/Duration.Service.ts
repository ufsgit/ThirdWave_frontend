import { Component, OnInit,Input,Injectable } from '@angular/core';
import { environment } from '../../environments/environment.js';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { AnimationKeyframesSequenceMetadata } from '@angular/animations';
@Injectable({
providedIn: 'root'
})
export class Duration_Service {
constructor(private http: HttpClient)
{
const httpOptions = {
headers: new HttpHeaders({
'Content-Type':  'application/json'
})
};
}AnimationKeyframesSequenceMetadata
Save_Duration(Duration_)
{
return this.http.post(environment.BasePath +'Duration/Save_Duration/',Duration_);}
private extractData(res: Response)
{
let body = res;
return body || { };
}
Search_Duration(Duration_Name):Observable<any>
{
var Search_Data={'Duration_Name':Duration_Name}
 return this.http.get(environment.BasePath +'Duration/Search_Duration/',{params:Search_Data});}
Delete_Duration(Duration_Id)
{
 return this.http.get(environment.BasePath +'Duration/Delete_Duration/'+Duration_Id);}
Get_Duration(Duration_Id)
{
 return this.http.get(environment.BasePath +'Duration/Get_Duration/'+Duration_Id);}
}

