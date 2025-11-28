import { Component, OnInit,Input,Injectable } from '@angular/core';
import { environment } from '../../environments/environment.js';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { AnimationKeyframesSequenceMetadata } from '@angular/animations';
@Injectable({
providedIn: 'root'
})
export class Level_Detail_Service {
constructor(private http: HttpClient)
{
const httpOptions = {
headers: new HttpHeaders({
'Content-Type':  'application/json'
})
};
}AnimationKeyframesSequenceMetadata
Save_Level_Detail(Level_Detail_)
{
return this.http.post(environment.BasePath +'Level_Detail/Save_Level_Detail/',Level_Detail_);}
private extractData(res: Response)
{
let body = res;
return body || { };
}
Search_Level_Detail(Level_Detail_Name):Observable<any>
{
var Search_Data={'Level_Detail_Name':Level_Detail_Name}
 return this.http.get(environment.BasePath +'Level_Detail/Search_Level_Detail/',{params:Search_Data});}
 
Delete_Level_Detail(Level_Detail_Id)
{
 return this.http.get(environment.BasePath +'Level_Detail/Delete_Level_Detail/'+Level_Detail_Id);}
Get_Level_Detail(Level_Detail_Id)
{
 return this.http.get(environment.BasePath +'Level_Detail/Get_Level_Detail/'+Level_Detail_Id);}
}

