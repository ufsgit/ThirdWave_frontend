import { Component, OnInit,Input,Injectable } from '@angular/core';
import { environment } from '../../environments/environment.js';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
 
import { Observable, of } from 'rxjs';
 
@Injectable({
providedIn: 'root'
})
export class Class_Service {
    constructor(private http: HttpClient)
    {
    const httpOptions = {
    headers: new HttpHeaders({
    'Content-Type':  'application/json'
    })
    };
    }AnimationKeyframesSequenceMetadata
    Save_Class(Class_)
    {
        
    return this.http.post(environment.BasePath +'Class/Save_Class/',Class_);}
    private extractData(res: Response)
    {
    let body = res;
    return body || { };
    }
    // Search_Class_Data(Student_Id):Observable<any>
    // {
    // var Search_Data={'Student_Id':Student_Id}
    //  return this.http.get(environment.BasePath +'Class/Search_Class_Data/',{params:Search_Data});}
    Search_Class_Data(Class_Name):Observable<any>
    {
    return this.http.get(environment.BasePath +'Class/Search_Class_Data/'+Class_Name);}
    
    Search_Class_Typeahead(Class_Name):Observable<any>
    {
    var Search_Data={'Class_Name':Class_Name}
    return this.http.get(environment.BasePath +'Class/Search_Class/',{params:Search_Data});}
    
    Delete_Class(Class_Id)
    {
       
     return this.http.get(environment.BasePath +'Class/Delete_Class/'+Class_Id);}
    Get_Class(Class_Id)
    {
     return this.http.get(environment.BasePath +'Class/Get_Class/'+Class_Id);
    }
    
     Get_Menu_Status(Menu_Id_,Login_User_)
     {
            return this.http.get(environment.BasePath + 'Student/Get_Menu_Status/' + Menu_Id_+'/'+Login_User_);
    }
    Search_Class(Class_Name):Observable<any>
    {
            
    var Search_Data={'Class_Name':Class_Name}
     return this.http.get(environment.BasePath +'Class/Search_Class/',{params:Search_Data});}
    
    }
    

