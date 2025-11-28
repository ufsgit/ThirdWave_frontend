import { Component, OnInit,Input,Injectable } from '@angular/core';
import { environment } from '../../environments/environment.js';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { AnimationKeyframesSequenceMetadata } from '@angular/animations';
@Injectable({
providedIn: 'root'
})
export class Country_Service {
constructor(private http: HttpClient)
{
const httpOptions = {
headers: new HttpHeaders({
'Content-Type':  'application/json'
})
};
}AnimationKeyframesSequenceMetadata
Save_Country(Country_)
{
return this.http.post(environment.BasePath +'Country/Save_Country/',Country_);}
private extractData(res: Response)
{
let body = res;
return body || { };
}


Search_Country_Typeahead(Country_Name): Observable<any> {
  debugger
    var Search_Data = { 'Country_Name': Country_Name}
    return this.http.get(environment.BasePath + 'Country/Search_Country_Typeahead/', { params: Search_Data });
}


// Search_Application_StatusforChangeStatus_Typeahead(Status_Name,Login_User): Observable<any> {
//    
//     var Search_Data = { 'Status_Name': Status_Name,'Login_User': Login_User}
//     return this.http.get(environment.BasePath + 'Country/Search_Application_StatusforChangeStatus_Typeahead/', { params: Search_Data });
// }


Search_Application_StatusforChangeStatus_Typeahead(
    Status_Name,
    Login_User,
    selectedApplicationDetails,Student_Id=0
  ): Observable<any> {
    debugger;
    var Search_Data = { Status_Name: Status_Name, Login_User: Login_User, ...selectedApplicationDetails,Student_Id: Student_Id };
    return this.http.get(
      environment.BasePath +
        "Country/Search_Application_StatusforChangeStatus_Typeahead/",
      { params: Search_Data }
    );
  }
  // SERVICE METHOD - Add this to your service file
Search_All_Application_Statuses(
    Login_User: any,
    selectedApplicationDetails: any,
    Student_Id: number = 0
): Observable<any> {
    var Search_Data = { 
        Login_User: Login_User, 
        ...selectedApplicationDetails, 
        Student_Id: Student_Id 
    };
    return this.http.get(
        environment.BasePath + "Country/Search_All_Application_Statuses/",
        { params: Search_Data }
    );
}

Search_Country(Country_Name):Observable<any>
{
var Search_Data={'Country_Name':Country_Name}
 return this.http.get(environment.BasePath +'Country/Search_Country/',{params:Search_Data});}
Delete_Country(Country_Id)
{
 return this.http.get(environment.BasePath +'Country/Delete_Country/'+Country_Id);}
Get_Country(Country_Id)
{
 return this.http.get(environment.BasePath +'Country/Get_Country/'+Country_Id);}
Get_Menu_Status(Menu_Id_,Login_User_)
{
    return this.http.get(environment.BasePath + 'Student/Get_Menu_Status/' + Menu_Id_+'/'+Login_User_);
}


Get_Checklist_Country(Country_Id)
   {
    return this.http.get(environment.BasePath +'Student/Get_Checklist_Country/'+Country_Id);
   }



   Save_Checklist(Checklist_)
   {
       
   return this.http.post(environment.BasePath +'Student/Save_Checklist/',Checklist_);
   }

   Delete_Checklist(Checklist_Id)
{
 return this.http.get(environment.BasePath +'Student/Delete_Checklist/'+Checklist_Id);
}

   
update_commission_Country(Country_Id) {
  return this.http.get(
    environment.BasePath + "Country/update_commission_Country/" + Country_Id
  );
}

Search_Application_StatusFor_Process_Document(
  Process_id,
  Department_Status_Id,
  Application_details_Id,
  Student_Id,
  // Transfer_Department_Id
): Observable<any> {
 ;debugger
  var Search_Data = { Process_id: Process_id, Department_Status_Id: Department_Status_Id,Application_details_Id:Application_details_Id,Student_Id: Student_Id};
  return this.http.get(
    environment.BasePath +
      "Country/Search_Application_StatusFor_Process_Document/",
    { params: Search_Data }
  );
}


Save_Country_Intake(Country_Intake_)
{
return this.http.post(environment.BasePath +'Country/Save_Country_Intake/',Country_Intake_);}

Search_Country_Intake(Country_Id_,Intake_Id_,Year_Id_,Status_Id_):Observable<any>
{
   debugger
    var Search_Data={'Country_Id_':Country_Id_,'Intake_Id_':Intake_Id_,'Year_Id_':Year_Id_,'Status_Id_':Status_Id_}
    return this.http.get(environment.BasePath +'Country/Search_Country_Intake/',{params:Search_Data});}

    Delete_Country_Intake(Country_Intake_Id_)
{
    debugger
 return this.http.get(environment.BasePath +'Country/Delete_Country_Intake/'+Country_Intake_Id_);}

 Get_Country_Intake(Country_Intake_Id)
 {
      
  return this.http.get(environment.BasePath +'Country/Get_Country_Intake/'+Country_Intake_Id);}

}

