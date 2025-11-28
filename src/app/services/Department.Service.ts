import { Component, OnInit, Input, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.js';
import { Department } from '../models/Department';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { AnimationKeyframesSequenceMetadata } from '@angular/animations';
@Injectable({
    providedIn: 'root'
})
export class Department_Service {
    constructor(private http: HttpClient) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
    } AnimationKeyframesSequenceMetadata
     Save_Department(Department_) {
        return this.http.post(environment.BasePath + 'Department/Save_Department/', Department_);
    }
    private extractData(res: Response) {
        let body = res;
        return body || {};
    }
    Search_Department(Department_Name): Observable<any> {
        return this.http.get(environment.BasePath + 'Department/Search_Department/' + Department_Name);
    }
    Delete_Department(Department_Id) {
        return this.http.get(environment.BasePath + 'Department/Delete_Department/' + Department_Id);
    }
    Get_Department(Department_Id) {
        return this.http.get(environment.BasePath + 'Department/Get_Department/' + Department_Id);
    }
    Get_Status_Selection_Edit(Department_Id) {
        return this.http.get(environment.BasePath + 'Department/Get_Status_Selection_Edit/' + Department_Id);
    }
    Search_Department_Status(Department_Status_Name): Observable<any> {
        
        return this.http.get(environment.BasePath + 'Department_Status/Search_Department_Status/' + Department_Status_Name);
    }

    Load_Status_Dropdown(): Observable<any> {
		return this.http.get(environment.BasePath + "Department/Load_Status_Dropdown/");
	}

    Get_Menu_Status(Menu_Id_,Login_User_)
    {
        return this.http.get(environment.BasePath + 'Student/Get_Menu_Status/' + Menu_Id_+'/'+Login_User_);
    }

    Load_DefaultDepartment(): Observable<any>
{
    return this.http.get(environment.BasePath + 'Department/Load_DefaultDepartment/');
}

Search_DefultUser_Typeahead(Branch_Id_,Department_Id_): Observable<any> {
    
    return this.http.get(environment.BasePath +'Department/Search_DefultUser_Typeahead/'+ Branch_Id_+'/'+Department_Id_);
}

Search_BranchDefaultDepartment_Typeahead(Branch_Id_): Observable<any> {
    
    return this.http.get(environment.BasePath +'Department/Search_BranchDefaultDepartment_Typeahead/'+ Branch_Id_);
}

Search_DefaultDepartmentStatus_Typeahead(Branch_Id_,Department_Id_): Observable<any> {
    
    return this.http.get(environment.BasePath +'Department/Search_DefaultDepartmentStatus_Typeahead/'+ Branch_Id_ +"/" + Department_Id_ );
}


Search_DefaultDepartment_User_Typeahead(Department_Id_): Observable<any> {
    
    return this.http.get(environment.BasePath +'Department/Search_DefaultDepartment_User_Typeahead/' + Department_Id_);
}


Load_Color(): Observable<any>
{
    return this.http.get(environment.BasePath + 'Student/Load_Color/');
}



}

