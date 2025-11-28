import { Component, OnInit,Input,Injectable } from '@angular/core';
import { environment } from '../../environments/environment.js';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { AnimationKeyframesSequenceMetadata } from '@angular/animations';
@Injectable({
providedIn: 'root'
})
export class Candidate_Service {
constructor(private http: HttpClient)
{
const httpOptions = {
headers: new HttpHeaders({
'Content-Type':  'application/json'
})
};
}AnimationKeyframesSequenceMetadata
Save_Candidate(Candidate_)
{
return this.http.post(environment.BasePath +'Candidate/Save_Candidate/',Candidate_);}


Get_followup_status_Load_Data():Observable<any>
{
return this.http.get(environment.BasePath +'Candidate/Get_followup_status_Load_Data');
}

Get_search_type():Observable<any>
{
return this.http.get(environment.BasePath +'Candidate/Get_search_type');
}



private extractData(res: Response)
{
let body = res;
return body || { };
}
// Search_Candidate(Type_Id_,search_name_,To_User_,Status_Selection):Observable<any>
// {
// var Search_Data={'Type_Id_':Type_Id_,'search_name_':search_name_,'To_User_':To_User_,'Status_Selection':Status_Selection}
//  return this.http.get(environment.BasePath +'Candidate/Search_Candidate/',{params:Search_Data});3

// }
Search_Candidate(From_Date_ ,To_Date_ ,Is_Date_Check_ ,Type_Id_ ,search_name_ ,Enquiry_Source_Id_ ,To_User_,Search_Status_ ):Observable<any>
{
var Search_Data={'From_Date_':From_Date_,'To_Date_':To_Date_,'Is_Date_Check_':Is_Date_Check_,'Type_Id_':Type_Id_,'search_name_':search_name_
,'Enquiry_Source_Id_':Enquiry_Source_Id_,'To_User_':To_User_,'Search_Status_':Search_Status_}
 return this.http.get(environment.BasePath +'Candidate/Search_Candidate/',{params:Search_Data});}


 Search_Candidate_Report(From_Date_ ,To_Date_ ,Is_Date_Check_ ,Type_Id_ ,search_name_ ,Enquiry_Source_Id_ ,To_User_,Search_Status_ ):Observable<any>
 {
 var Search_Data={'From_Date_':From_Date_,'To_Date_':To_Date_,'Is_Date_Check_':Is_Date_Check_,'Type_Id_':Type_Id_,'search_name_':search_name_
 ,'Enquiry_Source_Id_':Enquiry_Source_Id_,'To_User_':To_User_,'Search_Status_':Search_Status_}
  return this.http.get(environment.BasePath +'Candidate/Search_Candidate/',{params:Search_Data});}
 


 Get_user_details_Typeahead(User_Details_Name_):Observable<any>{var Search_Data={'User_Details_Name_':User_Details_Name_} 
 return this.http.get(environment.BasePath +'Candidate/Get_user_details_Typeahead/',{params:Search_Data});}
 




Delete_Candidate(Candidate_Id)
{
 return this.http.get(environment.BasePath +'Candidate/Delete_Candidate/'+Candidate_Id);}
Get_Candidate(Candidate_Id)
{
 return this.http.get(environment.BasePath +'Candidate/Get_Candidate/'+Candidate_Id);}
}

