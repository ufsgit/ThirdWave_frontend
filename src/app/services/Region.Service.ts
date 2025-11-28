import { Component, OnInit,Input,Injectable } from '@angular/core';
import { environment } from '../../environments/environment.js';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { AnimationKeyframesSequenceMetadata } from '@angular/animations';
@Injectable({
providedIn: 'root'
})
export class Region_Service {
constructor(private http: HttpClient)
{
const httpOptions = {
headers: new HttpHeaders({
'Content-Type':  'application/json'
})
};
}AnimationKeyframesSequenceMetadata
Save_Region(Region_)
{
        debugger
return this.http.post(environment.BasePath +'Region/Save_Region/',Region_);}
private extractData(res: Response)
{
let body = res;
return body || { };
}
Search_Region(Region_Name):Observable<any>
{
    
 return this.http.get(environment.BasePath +'Region/Search_Region/'+Region_Name);}


 

 Delete_Region(Region_Id_)
{
 return this.http.get(environment.BasePath +'Region/Delete_Region/'+Region_Id_);}
Get_Region(Region_Id)
{
 return this.http.get(environment.BasePath +'Region/Get_Region/'+Region_Id);}

 Get_Menu_Status(Menu_Id_,Login_User_)
 {
        return this.http.get(environment.BasePath + 'Student/Get_Menu_Status/' + Menu_Id_+'/'+Login_User_);
}

}

