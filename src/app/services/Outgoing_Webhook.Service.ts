import { Component, OnInit,Input,Injectable } from '@angular/core';
import { environment } from '../../environments/environment.js';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { AnimationKeyframesSequenceMetadata } from '@angular/animations';
@Injectable({
providedIn: 'root'
})
export class Outgoing_Webhook_Service {
constructor(private http: HttpClient)
{
const httpOptions = {
headers: new HttpHeaders({
'Content-Type':  'application/json'
})
};
}AnimationKeyframesSequenceMetadata


Save_Document_Type(Document_Type_)
{
return this.http.post(environment.BasePath +'Remarks/Save_Document_Type/',Document_Type_);}


 Search_Document_Type(Document_Type_Name_Search):Observable<any>
 {
 var Search_Data={'Document_Type_Name_Search':Document_Type_Name_Search}
  return this.http.get(environment.BasePath +'Remarks/Search_Document_Type/',{params:Search_Data});}



Get_Remarks(Remarks_Id)
{
 return this.http.get(environment.BasePath +'Remarks/Get_Remarks/'+Remarks_Id);}

// <----------------------------->

 Get_Menu_Status(Menu_Id_,Login_User_)
 {
        return this.http.get(environment.BasePath + 'Student/Get_Menu_Status/' + Menu_Id_+'/'+Login_User_);
}

Load_Webhook_Dropdowns(): Observable<any> {
       return this.http.get(
              environment.BasePath + "Outgoing_Webhook/Load_Webhook_Dropdowns/"
       );
}

Save_Outgoing_Webhook(outgoing_webhook_)
{
    return this.http.post(environment.BasePath +'Outgoing_Webhook/Save_Outgoing_Webhook/',outgoing_webhook_);
}

Search_Outgoing_Webhook(Webhook_Name_Search):Observable<any>
{
       debugger
var Search_Data={'Webhook_Name_Search':Webhook_Name_Search}
 return this.http.get(environment.BasePath +'Outgoing_Webhook/Search_Outgoing_Webhook/',{params:Search_Data});}

 Get_Outgoing_Webhook(Webhook_Id)
 {
  return this.http.get(environment.BasePath +'Outgoing_Webhook/Get_Outgoing_Webhook/'+Webhook_Id);}

  Delete_Outgoing_Webhook(Webhook_Id)
{
 return this.http.get(environment.BasePath +'Outgoing_Webhook/Delete_Outgoing_Webhook/'+Webhook_Id);}


}

