import { Component, OnInit,Input,Injectable } from '@angular/core';
import { environment } from '../../environments/environment.js';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { AnimationKeyframesSequenceMetadata } from '@angular/animations';
@Injectable({
providedIn: 'root'
})
export class Holiday_Service {
constructor(private http: HttpClient)
{
const httpOptions = {
headers: new HttpHeaders({
'Content-Type':  'application/json'
})
};
}AnimationKeyframesSequenceMetadata
Save_Holiday(Holiday_)
{
     
return this.http.post(environment.BasePath +'Holiday/Save_Holiday/',Holiday_);}
private extractData(res: Response)
{
let body = res;
return body || { };
}
Search_Holiday(Holiday_Name):Observable<any>
{
    
 return this.http.get(environment.BasePath +'Holiday/Search_Holiday/'+Holiday_Name);}


 

 Delete_Holiday(Holiday_Id_)
{
 return this.http.get(environment.BasePath +'Holiday/Delete_Holiday/'+Holiday_Id_);}
Get_Holiday(Holiday_Id)
{
 return this.http.get(environment.BasePath +'Holiday/Get_Holiday/'+Holiday_Id);}
 Get_Holiday_Region(Holiday_Id)
{
 return this.http.get(environment.BasePath +'Holiday/Get_Holiday_Region/'+Holiday_Id);}

 Get_Menu_Status(Menu_Id_,Login_User_)
 {
        return this.http.get(environment.BasePath + 'Student/Get_Menu_Status/' + Menu_Id_+'/'+Login_User_);
}

}

