import { Component, OnInit,Input,Injectable } from '@angular/core';
import { environment } from '../../environments/environment.js';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { AnimationKeyframesSequenceMetadata } from '@angular/animations';
@Injectable({
providedIn: 'root'
})
export class Remarks_Service {
constructor(private http: HttpClient)
{
const httpOptions = {
headers: new HttpHeaders({
'Content-Type':  'application/json'
})
};
}AnimationKeyframesSequenceMetadata
Save_Remarks(Remarks_)
{
return this.http.post(environment.BasePath +'Remarks/Save_Remarks/',Remarks_);}

Save_Document_Type(Document_Type_)
{
return this.http.post(environment.BasePath +'Remarks/Save_Document_Type/',Document_Type_);}


Save_Username(Remarks_)
{
return this.http.post(environment.BasePath +'Remarks/Save_Username/',Remarks_);}

private extractData(res: Response)
{
let body = res;
return body || { };
}
Search_Remarks(Remarks_Name):Observable<any>
{
var Search_Data={'Remarks_Name':Remarks_Name}
 return this.http.get(environment.BasePath +'Remarks/Search_Remarks/',{params:Search_Data});}

 Search_Document_Type(Document_Type_Name_Search):Observable<any>
 {
 var Search_Data={'Document_Type_Name_Search':Document_Type_Name_Search}
  return this.http.get(environment.BasePath +'Remarks/Search_Document_Type/',{params:Search_Data});}

 Search_Username(Login_User):Observable<any>
 {
        debugger
 var Search_Data={'Login_User':Login_User}
  return this.http.get(environment.BasePath +'Remarks/Search_Username/',{params:Search_Data});}

Delete_Remarks(Remarks_Id)
{
 return this.http.get(environment.BasePath +'Remarks/Delete_Remarks/'+Remarks_Id);}

 Delete_Document_Type(Document_Type_Id)
 {
  return this.http.get(environment.BasePath +'Remarks/Delete_Document_Type/'+Document_Type_Id);}



Get_Remarks(Remarks_Id)
{
 return this.http.get(environment.BasePath +'Remarks/Get_Remarks/'+Remarks_Id);}

 Get_Menu_Status(Menu_Id_,Login_User_)
 {
        return this.http.get(environment.BasePath + 'Student/Get_Menu_Status/' + Menu_Id_+'/'+Login_User_);
}


Search_Task_Type(Task_Type_Name_Search):Observable<any>
{
var Search_Data={'Task_Type_Name_Search':Task_Type_Name_Search}
 return this.http.get(environment.BasePath +'Remarks/Search_Task_Type/',{params:Search_Data});}

 Save_Task_Type(Task_Type_)
{
return this.http.post(environment.BasePath +'Remarks/Save_Task_Type/',Task_Type_);}
Delete_Task_Type(Task_Type_Id)
{
 return this.http.get(environment.BasePath +'Remarks/Delete_Task_Type/'+Task_Type_Id);}


}

