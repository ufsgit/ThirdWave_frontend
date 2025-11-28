import { Component, OnInit,Input,Injectable } from '@angular/core';
import { environment } from '../../environments/environment.js';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { AnimationKeyframesSequenceMetadata } from '@angular/animations';
@Injectable({
providedIn: 'root'
})
export class Course_Search_Service {
constructor(private http: HttpClient)
{
const httpOptions = {
headers: new HttpHeaders({
'Content-Type':  'application/json'
})
};
}AnimationKeyframesSequenceMetadata

Country_Change_Dropdowns(Country_Id) {
    return this.http.get(
      environment.BasePath + "Course_Search/Country_Change_Dropdowns/" + Country_Id
    );
  }

  Public_Search_Course(Level_Detail_Id,Country_Id,Intake_Id,Sub_Section_Id,Course_Name,Branch_Search,Duration_Search,Ielts_,Page_Start,Page_End,Page_Length,University,Subject_1,Intake_Year_Id):Observable<any>
  {
             
  
  var Search_Data={'Level_Detail_Id':Level_Detail_Id,'Country_Id':Country_Id,
  'Intake_Id':Intake_Id,'Sub_Section_Id':Sub_Section_Id,
  'Course_Name':encodeURIComponent(Course_Name) ,'Branch_Search':Branch_Search,
  'Duration_Search':Duration_Search,'Ielts_':Ielts_,'Page_Start':Page_Start,
  'Page_End':Page_End,'Page_Length':Page_Length,'University':University,'Subject_1':Subject_1,'Intake_Year_Id':Intake_Year_Id}
  
  return this.http.get(environment.BasePath +'Course_Search/Public_Search_Course/',{params:Search_Data});
  }
  
}

