import { Component, OnInit,Input,Injectable } from '@angular/core';
import { environment } from '../../environments/environment.js';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { AnimationKeyframesSequenceMetadata } from '@angular/animations';
@Injectable({
providedIn: 'root'
})
export class Document_Service {
constructor(private http: HttpClient)
{
const httpOptions = {
headers: new HttpHeaders({
'Content-Type':  'application/json'
})
};
}AnimationKeyframesSequenceMetadata
Save_Document(Document_)
{
return this.http.post(environment.BasePath +'Document/Save_Document/',Document_);}
private extractData(res: Response)
{
let body = res;
return body || { };
}

Get_Mandatory_Document_Edit(University_Id)
{debugger
 return this.http.get(environment.BasePath +'Document/Get_Mandatory_Document_Edit/'+University_Id);
}

Document_Search(Document_Name, Document_Type): Observable<any> {
   debugger
    const Search_Data = {
        'Document_Name_': Document_Name,
        'Document_Type': Document_Type || 0
    };
    return this.http.get(environment.BasePath + 'Document/Document_Search/', { params: Search_Data });
}
Search_Document(Student_Id_):Observable<any>
{
var Search_Data={'Student_Id_':Student_Id_}
 return this.http.get(environment.BasePath +'Document/Search_Document/',{params:Search_Data});}
Delete_Document(Document_Id)
{
 return this.http.get(environment.BasePath +'Document/Delete_Document/'+Document_Id);}
Get_Document(Document_Id)
{
 return this.http.get(environment.BasePath +'Document/Get_Document/'+Document_Id);}

 Document_Type_Dropdown(): Observable<any> {
    return this.http.get(
        environment.BasePath + "Student/Document_Type_Dropdown/"
    );
}
Load_Document_Data(): Observable<any> {
    debugger;
    return this.http.get(environment.BasePath + 'Document/Load_Document_Data/');
  }
  Load_Country_Type(): Observable<any> {
    debugger;
    return this.http.get(environment.BasePath + 'Document/Load_Country_Type/');
  }
  Load_University_Type(): Observable<any> {
    debugger;
    return this.http.get(environment.BasePath + 'Document/Load_University_Type/');
  }
  Load_Process_Data(): Observable<any> {
    debugger;
    return this.http.get(environment.BasePath + 'Document/Load_Process_Data/');
  }
  
Save_Process_view(Process_Status_Details_,Login_User_)
{
    debugger
    let payload={
        Process_Status_Details_,Login_User_
    }
return this.http.post(environment.BasePath +'Document/Save_Process_view/',payload);}

Load_File_Type(): Observable<any> {
  debugger;
  return this.http.get(environment.BasePath + 'Document/Load_File_Type/');
}

Get_File_Type(Document_Id_): Observable<any> {
  debugger;
  return this.http.get(environment.BasePath + 'Document/Get_File_Type/'+Document_Id_);
}

Get_Process_Status_by_process(selectedProcess): Observable<any> {
  debugger;
  return this.http.get(environment.BasePath + 'Document/Get_Process_Status_by_process/'+selectedProcess);
}

}

