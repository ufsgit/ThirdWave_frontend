import {  Injectable } from '@angular/core';
import { environment } from '../../environments/environment.js';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class Branch_Service {
    constructor(private http: HttpClient) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
    } 
    Save_Branch(Branch_) {
        
        return this.http.post(environment.BasePath + 'Branch/Save_Branch/', Branch_);
    }
    private extractData(res: Response) {
        let body = res;
        return body || {};
    }
    Search_Company() {
        
        return this.http.get(environment.BasePath + 'Branch/Search_Company/');
    }

    Get_Branch_Department_Edit(Branch_Id) {
        return this.http.get(environment.BasePath + 'Branch/Get_Branch_Department_Edit/' + Branch_Id);
    }
    Search_Branch(Branch_Name): Observable<any> {
        return this.http.get(environment.BasePath + 'Branch/Search_Branch/' + Branch_Name);
    }
    Delete_Branch(Branch_Id) {
        return this.http.get(environment.BasePath + 'Branch/Delete_Branch/' + Branch_Id);
    }
    Get_Branch(Branch_Id) {
        return this.http.get(environment.BasePath + 'Branch/Get_Branch/' + Branch_Id);
    }
    Get_Menu_Status(Menu_Id_,Login_User_)
    {
           return this.http.get(environment.BasePath + 'Student/Get_Menu_Status/' + Menu_Id_+'/'+Login_User_);
   }
}

