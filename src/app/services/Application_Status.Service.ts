import { Component, OnInit,Input,Injectable } from '@angular/core';
import { environment } from '../../environments/environment.js';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { AnimationKeyframesSequenceMetadata } from '@angular/animations';
@Injectable({
providedIn: 'root'
})
export class Application_Status_Service {
constructor(private http: HttpClient)
{
const httpOptions = {
headers: new HttpHeaders({
'Content-Type':  'application/json'
})
};
}AnimationKeyframesSequenceMetadata
Save_Application_Status(Application_Status_)
{
return this.http.post(environment.BasePath +'Application_Status/Save_Application_Status/',Application_Status_);}
private extractData(res: Response)
{
let body = res;
return body || { };
}


Save_ApplicationStatusforstatuschange(Application_Status_)
{
return this.http.post(environment.BasePath +'Application_Status/Save_ApplicationStatusforstatuschange/',Application_Status_);}

Search_Application_Status(Application_Status_Name):Observable<any>
{
var Search_Data={'Application_Status_Name':Application_Status_Name}
return this.http.get(environment.BasePath +'Application_Status/Search_Application_Status/',{params:Search_Data});}
Search_Enquiry_Source_Typeahead(Enquiry_Source_Name):Observable<any>
{
var Search_Data={'Enquiry_Source_Name':Enquiry_Source_Name}
return this.http.get(environment.BasePath +'Enquiry_Source/Search_Enquiry_Source/',{params:Search_Data});}

Delete_Application_Status(Application_status_Id)
{
 return this.http.get(environment.BasePath +'Application_Status/Delete_Application_Status/'+Application_status_Id);}
Get_Enquiry_Source(Enquiry_Source_Id)
{
 return this.http.get(environment.BasePath +'Enquiry_Source/Get_Enquiry_Source/'+Enquiry_Source_Id);}


 Get_Menu_Status(Menu_Id_,Login_User_)
 {
        return this.http.get(environment.BasePath + 'Student/Get_Menu_Status/' + Menu_Id_+'/'+Login_User_);
}

}
