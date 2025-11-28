import { Component, OnInit,Input,Injectable } from '@angular/core';
import { environment } from '../../environments/environment.js';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { AnimationKeyframesSequenceMetadata } from '@angular/animations';
@Injectable({
providedIn: 'root'
})
export class Enquiry_Source_Service {
constructor(private http: HttpClient)
{
const httpOptions = {
headers: new HttpHeaders({
'Content-Type':  'application/json'
})
};
}AnimationKeyframesSequenceMetadata
Save_Enquiry_Source(Enquiry_Source_)
{
return this.http.post(environment.BasePath +'Enquiry_Source/Save_Enquiry_Source/',Enquiry_Source_);}
private extractData(res: Response)
{
let body = res;
return body || { };
}
Search_Enquiry_Source(Enquiry_Source_Name):Observable<any>
{
var Search_Data={'Enquiry_Source_Name':Enquiry_Source_Name}
return this.http.get(environment.BasePath +'Enquiry_Source/Search_Enquiry_Source/',{params:Search_Data});}
Search_Enquiry_Source_Typeahead(Enquiry_Source_Name):Observable<any>
{
var Search_Data={'Enquiry_Source_Name':Enquiry_Source_Name}
return this.http.get(environment.BasePath +'Enquiry_Source/Search_Enquiry_Source/',{params:Search_Data});}

Delete_Enquiry_Source(Enquiry_Source_Id)
{
 return this.http.get(environment.BasePath +'Enquiry_Source/Delete_Enquiry_Source/'+Enquiry_Source_Id);}
Get_Enquiry_Source(Enquiry_Source_Id)
{
 return this.http.get(environment.BasePath +'Enquiry_Source/Get_Enquiry_Source/'+Enquiry_Source_Id);}


 Get_Menu_Status(Menu_Id_,Login_User_)
 {
        return this.http.get(environment.BasePath + 'Student/Get_Menu_Status/' + Menu_Id_+'/'+Login_User_);
}

Search_Qualification_Master(Enquiry_Source_Name): Observable<any> {
  debugger
        var Search_Data = { Enquiry_Source_Name: Enquiry_Source_Name };
        return this.http.get(
          environment.BasePath + "Qualification_Master/Search_Qualification_Master/",
          { params: Search_Data }
        );
      }
    
      Delete_Qualification_Master(Qualification_Master_Id) {
        return this.http.get(
          environment.BasePath +
            "Enquiry_Source/Delete_Qualification_Master/" +
            Qualification_Master_Id
        );
      }
    
      Save_Qualification_Master(Qualification_) {
       ;
        return this.http.post(
          environment.BasePath + "Enquiry_Source/Save_Qualification_Master/",
          Qualification_
        );
      }

    

}
