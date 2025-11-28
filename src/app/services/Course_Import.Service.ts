import { Component, OnInit,Input,Injectable } from '@angular/core';
import { environment } from '../../environments/environment.js';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { AnimationKeyframesSequenceMetadata } from '@angular/animations';
@Injectable({
providedIn: 'root'
})
export class Course_Import_Service {
constructor(private http: HttpClient)
{
const httpOptions = {
headers: new HttpHeaders({
'Content-Type':  'application/json'
})
};
}AnimationKeyframesSequenceMetadata
private extractData(res: Response)
{
let body = res;
return body || { };
}
Search_Course_Import(From_Date,To_Date,look_In_Date_Value):Observable<any>
{
 return this.http.get(environment.BasePath +'Course/Search_Course_Import/'+From_Date+'/'+To_Date + '/'+look_In_Date_Value);}


  Save_Course_Import(Course_Details)
{
  debugger
return this.http.post(environment.BasePath +'Course/Save_Course_Import/',Course_Details);}

Save_Student_Import(Student_Details)
{
return this.http.post(environment.BasePath +'Course/Save_Student_Import/',Student_Details);
}

Delete_Course_Import(Course_Import_Id)
{
 return this.http.get(environment.BasePath +'Course_Import/Delete_Course_Import/'+Course_Import_Id);}

 Get_Course_Import(Import_Master_Id):Observable<any>
 {
  return this.http.get(environment.BasePath +'Course/Get_Course_Import/'+Import_Master_Id);
 }
 Get_Menu_Status(Menu_Id_,Login_User_)
 {
        return this.http.get(environment.BasePath + 'Student/Get_Menu_Status/' + Menu_Id_+'/'+Login_User_);
}
}


