import { Component, OnInit, Input, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.js';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class Task_Service {
    constructor(private http: HttpClient) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
    } AnimationKeyframesSequenceMetadata
    Save_Task(Task_) {
        return this.http.post(environment.BasePath + 'Task/Save_Task/', Task_);
    }
    private extractData(res: Response) {
        let body = res;
        return body || {};
    }
    Load_User_Details(): Observable<any>
{
    return this.http.get(environment.BasePath + 'Task/Load_User_Details/');
}

    Search_Task(Task_Name_Search,Search_FromDate,Search_ToDate,look_In_Date_Value,Usersearch_): Observable<any> {
        return this.http.get(environment.BasePath + 'Task/Search_Task/' + Task_Name_Search +'/'+ Search_FromDate+'/'+Search_ToDate+'/'+look_In_Date_Value+'/'+Usersearch_);
    }

    Search_Task_front_view(Usersearch_): Observable<any> {
        return this.http.get(environment.BasePath + 'Task/Search_Task_front_view/'+Usersearch_ );
    }
    Delete_Task(Task_Id_) {
        return this.http.get(environment.BasePath + 'Task/Delete_Task/' + Task_Id_);
    }
    Get_Task(Task_Id) {
        return this.http.get(environment.BasePath + 'Task/Get_Task/' + Task_Id);
    }

    Get_Menu_Status(Menu_Id_,Login_User_)
    {
           return this.http.get(environment.BasePath + 'Student/Get_Menu_Status/' + Menu_Id_+'/'+Login_User_);
   }
   

}

