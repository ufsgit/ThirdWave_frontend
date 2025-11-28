import { Component, OnInit,Input,Injectable } from '@angular/core';
import { environment } from '../../environments/environment.js';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { AnimationKeyframesSequenceMetadata } from '@angular/animations';
@Injectable({
providedIn: 'root'
})
export class Intake_Service {
constructor(private http: HttpClient)
{
const httpOptions = {
headers: new HttpHeaders({
'Content-Type':  'application/json'
})
};
}AnimationKeyframesSequenceMetadata
Save_Intake(Intake_)
{
return this.http.post(environment.BasePath +'Intake/Save_Intake/',Intake_);}
private extractData(res: Response)
{
let body = res;
return body || { };
}
Search_Intake(Intake_Name):Observable<any>
{
var Search_Data={'Intake_Name':Intake_Name}
 return this.http.get(environment.BasePath +'Intake/Search_Intake/',{params:Search_Data});}
Delete_Intake(Intake_Id)
{
 return this.http.get(environment.BasePath +'Intake/Delete_Intake/'+Intake_Id);}
Get_Intake(Intake_Id)
{
 return this.http.get(environment.BasePath +'Intake/Get_Intake/'+Intake_Id);}

 Get_Intake_Year(Intake_Year_Id)
 {
  return this.http.get(environment.BasePath +'Intake/Get_Intake_Year/'+Intake_Year_Id);
}
getIntakeByCourse(Course_Id): Observable<any> {
    return this.http.get(
        environment.BasePath + "Student/getIntakeByCourse/" + Course_Id
    );}
    getIntakeByCountry(Country_Id): Observable<any> {
        return this.http.get(
            environment.BasePath + "Student/getIntakeByCountry/" + Country_Id
        );}
Load_Intake(): Observable<any>
{
    return this.http.get(environment.BasePath + 'Intake/Load_Intake/');
}
Load_Intake_year(): Observable<any>
{
    return this.http.get(environment.BasePath + 'Intake/Load_Intake_year/');
}
Get_Menu_Status(Menu_Id_,Login_User_)
{
    return this.http.get(environment.BasePath + 'Student/Get_Menu_Status/' + Menu_Id_+'/'+Login_User_);
}

Search_Intake_Typeahead(Intake_Name): Observable<any> {
    var Search_Data = { 'Intake_Name': Intake_Name}
    return this.http.get(environment.BasePath + 'Student/Search_Intake_Typeahead/', { params: Search_Data });
  }
  

}

