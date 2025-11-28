import { Component, OnInit,Input,Injectable } from '@angular/core';
import { environment } from '../../environments/environment.js';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { AnimationKeyframesSequenceMetadata } from '@angular/animations';
@Injectable({
providedIn: 'root'
})
export class Client_Accounts_Service {
constructor(private http: HttpClient)
{
const httpOptions = {
headers: new HttpHeaders({
'Content-Type':  'application/json'
})
};
}AnimationKeyframesSequenceMetadata
Save_Client_Accounts(Client_Accounts_)
{
return this.http.post(environment.BasePath +'Client_Accounts/Save_Client_Accounts/',Client_Accounts_);}
private extractData(res: Response)
{
let body = res;
return body || { };
}
Search_Client_Accounts(Client_Accounts_Name_,Account_Group_,Pointer_Start_,Pointer_Stop_,Page_Length_):Observable<any>
{ 
     
    var Search_Data={'Client_Accounts_Name_':Client_Accounts_Name_,'Account_Group_':Account_Group_,'Pointer_Start_':Pointer_Start_,'Pointer_Stop_':Pointer_Stop_,'Page_Length_':Page_Length_}
    return this.http.get(environment.BasePath +'Client_Accounts/Search_Client_Accounts/',{params:Search_Data});}
   
 //return this.http.get(environment.BasePath +'Client_Accounts/Search_Client_Accounts/'+Client_Accounts_Name_+'/'+Account_Group_);}
 

 Search_Agent(Client_Accounts_Name_,Account_Group_,Pointer_Start_,Pointer_Stop_,Page_Length_):Observable<any>
 {
      
     var Search_Data={'Client_Accounts_Name_':Client_Accounts_Name_,'Account_Group_':Account_Group_,'Pointer_Start_':Pointer_Start_,'Pointer_Stop_':Pointer_Stop_,'Page_Length_':Page_Length_}
     return this.http.get(environment.BasePath +'Agent/Search_Agent/',{params:Search_Data});}
 

     Save_Agent(Client_Accounts_)
     {
     return this.http.post(environment.BasePath +'Agent/Save_Agent/',Client_Accounts_);}


     Delete_Agent(Client_Accounts_Id_)
     {
      return this.http.get(environment.BasePath +'Agent/Delete_Agent/'+Client_Accounts_Id_);}

      Agent_Typeahead(Client_Accounts_Name_): Observable<any> {
        var Search_Data = { 'Client_Accounts_Name_': Client_Accounts_Name_, }
        return this.http.get(environment.BasePath + 'Student/Agent_Typeahead/', { params: Search_Data });
    }








Search_Customer(Client_Accounts_Name,Employee_Id):Observable<any>
{
 return this.http.get(environment.BasePath +'Client_Accounts/Search_Customer/'+Client_Accounts_Name+ '/' +Employee_Id);}
 
 Get_Client_Employee_Typeahead(Client_Accounts_Id):Observable<any>
 {
  return this.http.get(environment.BasePath +'Client_Accounts/Get_Client_Employee_Typeahead/'+Client_Accounts_Id);}


 Delete_Client_Accounts(Client_Accounts_Id_)
{
 return this.http.get(environment.BasePath +'Client_Accounts/Delete_Client_Accounts/'+Client_Accounts_Id_);}
Get_Client_Accounts(Client_Accounts_Id_)
{
 return this.http.get(environment.BasePath +'Client_Accounts/Get_Client_Accounts/'+Client_Accounts_Id_);}
}

