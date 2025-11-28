import { Component, OnInit,Input,Injectable } from '@angular/core';
import { environment } from '../../environments/environment.js';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { AnimationKeyframesSequenceMetadata } from '@angular/animations';
@Injectable({
providedIn: 'root'
})
export class Fees_Service {
constructor(private http: HttpClient)
{
const httpOptions = {
headers: new HttpHeaders({
'Content-Type':  'application/json'
})
};
}AnimationKeyframesSequenceMetadata
Save_Fees(Fees_)
{
return this.http.post(environment.BasePath +'Fees/Save_Fees/',Fees_);}
private extractData(res: Response)
{
let body = res;
return body || { };
}
// Search_Fees_Data(Student_Id):Observable<any>
// {
// var Search_Data={'Student_Id':Student_Id}
//  return this.http.get(environment.BasePath +'Fees/Search_Fees_Data/',{params:Search_Data});}
Search_Fees_Data(Fees_Name):Observable<any>
{
return this.http.get(environment.BasePath +'Fees/Search_Fees_Data/'+Fees_Name);}

Search_Fees_Typeahead(Fees_Name):Observable<any>
{
var Search_Data={'Fees_Name':Fees_Name}
return this.http.get(environment.BasePath +'Fees/Search_Fees/',{params:Search_Data});}

Delete_Fees(Fees_Id)
{
 return this.http.get(environment.BasePath +'Fees/Delete_Fees/'+Fees_Id);}
Get_Fees(Fees_Id)
{
 return this.http.get(environment.BasePath +'Fees/Get_Fee/'+Fees_Id);}

 Get_Menu_Status(Menu_Id_,Login_User_)
 {
        return this.http.get(environment.BasePath + 'Student/Get_Menu_Status/' + Menu_Id_+'/'+Login_User_);
}
Search_Fees(Fees_Name):Observable<any>
{
        
var Search_Data={'Fees_Name':Fees_Name}
 return this.http.get(environment.BasePath +'Fees/Search_Fees/',{params:Search_Data});}



 Save_DataField(Data_Field_)
{
return this.http.post(environment.BasePath +'Fees/Save_DataField/',Data_Field_);}

Search_DataFields(Fields_Name):Observable<any>
{
       
        
var Search_Data={'Fields_Name':Fields_Name}
 return this.http.get(environment.BasePath +'Fees/Search_DataFields/',{params:Search_Data});}


 
 Delete_DataFields(Fields_Id)
{
       
 return this.http.get(environment.BasePath +'Fees/Delete_DataFields/'+Fields_Id);}
}
