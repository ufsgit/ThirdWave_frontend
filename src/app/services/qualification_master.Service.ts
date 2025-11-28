import { Component, OnInit,Input,Injectable } from '@angular/core';
import { environment } from '../../environments/environment.js';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { AnimationKeyframesSequenceMetadata } from '@angular/animations';
@Injectable({
providedIn: 'root'
})
export class qualification_master_Service {
constructor(private http: HttpClient)
{
const httpOptions = {
headers: new HttpHeaders({
'Content-Type':  'application/json'
})
};
}AnimationKeyframesSequenceMetadata

Save_Qualification_Master(Qualification_Master_)
{
return this.http.post(environment.BasePath +'Qualification_Master/Save_Qualification_Master/',Qualification_Master_);}

private extractData(res: Response)
{
let body = res;
return body || { };
}

Search_Qualification_Master(Qualification_Master_Name_):Observable<any>
{
var Search_Data={'Qualification_Master_Name':Qualification_Master_Name_}
return this.http.get(environment.BasePath +'qualification_master/Search_qualification_master/',{params:Search_Data});}

Search_Qualification_Master_Typeahead(Qualification_Master_Name_):Observable<any>
{
var Search_Data={'Qualification_Master_Name':Qualification_Master_Name_}
return this.http.get(environment.BasePath +'Qualification_Master/Search_qualification_master/',{params:Search_Data});}

Delete_qualification_master(Qualification_Master_Id_)
{
 return this.http.get(environment.BasePath +'Qualification_Master/Delete_qualification_master/'+Qualification_Master_Id_);}

Get_qualification_master(Qualification_Master_Id_)
{
 return this.http.get(environment.BasePath +'Qualification_Master/Get_qualification_master/'+Qualification_Master_Id_);}

 Get_Menu_Status(Menu_Id_,Login_User_)
 {
        return this.http.get(environment.BasePath + 'Student/Get_Menu_Status/' + Menu_Id_+'/'+Login_User_);
}  

}
