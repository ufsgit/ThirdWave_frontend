import { Component, OnInit,Input,Injectable } from '@angular/core';
import { environment } from '../../environments/environment.js';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { AnimationKeyframesSequenceMetadata } from '@angular/animations';
@Injectable({
providedIn: 'root'
})
export class Task_Item_Service {
constructor(private http: HttpClient)
{
const httpOptions = {
headers: new HttpHeaders({
'Content-Type':  'application/json'
})
};
}AnimationKeyframesSequenceMetadata
Save_Task_Item(Task_Item_)
{
return this.http.post(environment.BasePath +'Application_Status/Save_Task_Item/',Task_Item_);}
private extractData(res: Response)
{
let body = res;
return body || { };
}
Search_Task_Item(Task_Item_Search):Observable<any>
{
var Search_Data={'Task_Item_Search':Task_Item_Search}
return this.http.get(environment.BasePath +'Application_Status/Search_Task_Item/',{params:Search_Data});}
Search_Enquiry_Source_Typeahead(Enquiry_Source_Name):Observable<any>
{
var Search_Data={'Enquiry_Source_Name':Enquiry_Source_Name}
return this.http.get(environment.BasePath +'Enquiry_Source/Search_Enquiry_Source/',{params:Search_Data});}

Delete_Task_Item(Task_Item_Id)
{
 return this.http.get(environment.BasePath +'Application_Status/Delete_Task_Item/'+Task_Item_Id);}

Get_Enquiry_Source(Enquiry_Source_Id)
{
 return this.http.get(environment.BasePath +'Enquiry_Source/Get_Enquiry_Source/'+Enquiry_Source_Id);}


 Get_Menu_Status(Menu_Id_,Login_User_)
 {
        return this.http.get(environment.BasePath + 'Student/Get_Menu_Status/' + Menu_Id_+'/'+Login_User_);
}


Task_Type_Dropdown(): Observable<any> {
        return this.http.get(
            environment.BasePath + "Student/Task_Type_Dropdown/"
        );
    }
}
