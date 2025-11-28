import { Component, OnInit,Input,Injectable } from '@angular/core';
import { environment } from '../../environments/environment.js';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { AnimationKeyframesSequenceMetadata } from '@angular/animations';
@Injectable({
providedIn: 'root'
})
export class Accounts_Service {
constructor(private http: HttpClient)
{
const httpOptions = {
headers: new HttpHeaders({
'Content-Type':  'application/json'
})
};
}AnimationKeyframesSequenceMetadata
Save_Accounts(Accounts_)
{
return this.http.post(environment.BasePath +'Accounts/Save_Accounts/',Accounts_);}
private extractData(res: Response)
{
let body = res;
return body || { };
}
// Search_Accounts_Data(Student_Id):Observable<any>
// {
// var Search_Data={'Student_Id':Student_Id}
//  return this.http.get(environment.BasePath +'Accounts/Search_Accounts_Data/',{params:Search_Data});}
Search_Client_Accounts_Data(Client_Accounts_Name):Observable<any>
{
return this.http.get(environment.BasePath +'Accounts/Search_Client_Accounts_Data/'+Client_Accounts_Name);}

Search_Accounts_Typeahead(Client_Accounts_Name):Observable<any>
{
var Search_Data={'Client_Accounts_Name':Client_Accounts_Name}
return this.http.get(environment.BasePath +'Accounts/Search_Accounts/',{params:Search_Data});}

Delete_Accounts(Client_Accounts_Id)
{
 return this.http.get(environment.BasePath +'Accounts/Delete_Accounts/'+Client_Accounts_Id);}
Get_Accounts(Client_Accounts_Id)
{
 return this.http.get(environment.BasePath +'Accounts/Get_Accounts/'+Client_Accounts_Id);}

 Get_Menu_Status(Menu_Id_,Login_User_)
 {
        return this.http.get(environment.BasePath + 'Student/Get_Menu_Status/' + Menu_Id_+'/'+Login_User_);
}
Search_Accounts(Client_Accounts_Name,Account_Group_Id_):Observable<any>
{
        
var Search_Data={'Client_Accounts_Name':Client_Accounts_Name,'Account_Group_Id_':Account_Group_Id_}
 return this.http.get(environment.BasePath +'Accounts/Search_Accounts/',{params:Search_Data});}

 Load_AccountGroup(): Observable<any>
 {
     return this.http.get(environment.BasePath + 'Accounts/Load_AccountGroup/');
 }

}
