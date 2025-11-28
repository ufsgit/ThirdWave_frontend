import { Component, OnInit, Input, Injectable, EventEmitter } from "@angular/core";
import { environment } from "../../environments/environment.js";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from "@angular/common/http";
import { BehaviorSubject, Observable, of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class Department_Status_Service {

  // Event emeiter to pass selected department data when adding task
  // shareDepartmentStatus$ = new EventEmitter();
  shareDepartment: any = null;

  constructor(private http: HttpClient) {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }),
    };
  }

  AnimationKeyframesSequenceMetadata;
  Save_Department_Status(Department_Status_) {
    console.log("The datas are",Department_Status_)
   
    return this.http.post(
      environment.BasePath + "Department_Status/Save_Department_Status/",
      Department_Status_
    );
  }


  Save_process_Status_details(Process_Status_Details_) {
    console.log('Process_Status_Details_: ', Process_Status_Details_);
   
    return this.http.post(
      environment.BasePath + "Department_Status/Save_process_Status_details/",
      Process_Status_Details_
    );
  }
  private extractData(res: Response) {
    let body = res;
    return body || {};
  }
  Search_Department_Status(
    Department_Status_Name,
    dept_id,
    transfer_dept_id,Order_Name_Search
  ): Observable<any> {
    var Search_Data = {
      Department_Status_Name_: Department_Status_Name,
      dept_id_: dept_id,
      transfer_dept_id_: transfer_dept_id,Order_: Order_Name_Search,
    };
    return this.http.get(
      environment.BasePath + "Department_Status/Search_Department_Status/",
      { params: Search_Data }
    );
  }
  Delete_Department_Status(Department_Status_Id) {
    return this.http.get(
      environment.BasePath +
        "Department_Status/Delete_Department_Status/" +
        Department_Status_Id
    );
  }
  Get_Department_Status(Department_Status_Id) {
    return this.http.get(
      environment.BasePath +
        "Department_Status/Get_Department_Status/" +
        Department_Status_Id
    );
  }

  Get_Menu_Status(Menu_Id_, Login_User_) {
    return this.http.get(
      environment.BasePath +
        "Student/Get_Menu_Status/" +
        Menu_Id_ +
        "/" +
        Login_User_
    );
  }

  Get_Sub_Status(Department_Status_Id) {
    return this.http.get(
      environment.BasePath +
        "Department_Status/Get_Sub_Status/" +
        Department_Status_Id
    );
  }

  Save_Sub_Status(Sub_Status_) {
    return this.http.post(
      environment.BasePath + "Department_Status/Save_Sub_Status/",
      Sub_Status_
    );
  }

  Delete_Sub_Status(Sub_Status_Id) {
    return this.http.get(
      environment.BasePath +
        "Department_Status/Delete_Sub_Status/" +
        Sub_Status_Id
    );
  }

  Load_StatusType(): Observable<any> {
    return this.http.get(environment.BasePath + "Department/Load_StatusType/");
  }

  getDepartmentList() {
   
    return this.http.get<any>(
      
        `${environment.BasePath}Department/Search_Branch_Department_Typeahead/41`
    )
  }
}
