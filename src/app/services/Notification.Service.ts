import { Component, OnInit,Input,Injectable } from '@angular/core';
import { environment } from '../../environments/environment.js';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { AnimationKeyframesSequenceMetadata } from '@angular/animations';
@Injectable({
providedIn: 'root'
})
export class Notification_Service {
constructor(private http: HttpClient)
{
const httpOptions = {
headers: new HttpHeaders({
'Content-Type':  'application/json'
})
};
}AnimationKeyframesSequenceMetadata
private extractData(res: Response)
{
let body = res;
return body || { };
}
Save_Notification(Notification_)
{
return this.http.post(environment.BasePath +'Notification/Save_Notification/',Notification_);}
Search_Notification(Notification_Name):Observable<any>
{
 var Search_Data = { 'Notification_Name_':Notification_Name}
 return this.http.get(environment.BasePath +'Notification/Search_Notification/',{params:Search_Data});}
Delete_Notification(Notification_Id)
{
 return this.http.get(environment.BasePath +'Notification/Delete_Notification/'+Notification_Id);}
Get_Notification(Notification_Id)
{
 return this.http.get(environment.BasePath +'Notification/Get_Notification/'+Notification_Id);}
 
 Load_Notification_Status(): Observable<any>
 {
     return this.http.get(environment.BasePath + 'Notification/Load_Notification_Status/');
 }

}
