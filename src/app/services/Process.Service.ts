import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment.js";
import { Department } from "../models/Department.js";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

import { Process } from "../models/process.interface.js";
@Injectable({
  providedIn: "root",
})
export class ProcessService {
  AnimationKeyframesSequenceMetadata;
  currentlySelectedProcess: any;

  constructor(private http: HttpClient) {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }),
    };
  }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }


  //   Function to save a process
  Save_Process(process) {
    return this.http.post(
      environment.BasePath + "Process/Save_Process/",
      process
    );
  }

  // Function to get all process
  getAll() {
    return this.http.get<{ data: Process[] }>(
      `${environment.BasePath}Process/Get_Process`
    );
  }

  // Function to delete process
  deleteProcess(pricessId: number) {
    return this.http.get(
      `${environment.BasePath}Process/Delete_process/${pricessId}`
    );
  }

  // Functtion to update process
  updateProcess(process, processId) {
    return this.http.post(
        `${environment.BasePath}Process/Update_Process/${processId}`,
        process,
    )
  }   

  // Function to Search process
  searchProcess(searchString: string) {
    return this.http.get<{data: Process[]}>(
        `${environment.BasePath}Process/Search_process/${searchString}`
    )
  }

  // Functon to get process department status
  getDepartmentStatus(id) {
    return this.http.get(`${environment.BasePath}Process/get_process_status_task/${id}`)
  }

  Duplicate_process(Process_Id_) {
    debugger
    return this.http.get(
      environment.BasePath + "Process/Duplicate_process/" + Process_Id_
    );
  }

  // Functon to get status list by department id
  getProcessStatusListByProcessId(processId: number) {
    return this.http.get(`${environment.BasePath}Process/getProcessStautusByProcessId/${processId}`)
  }

   // Functon to get status list by department id
   getProcessStatusChartListByProcessId(processId: number) {
    return this.http.get(`${environment.BasePath}Process/getProcessStatusFlowChartById/${processId}`)
  }
  // Function to update department status id
  updateProcessStatus(departmentStatusId, editingId) {
    return this.http.post(`${environment.BasePath}Process/updateProcessStatusbyId`, {
      id: editingId,
      departmentStatusId,
    })
  }

  Search_Department(Department_Name): Observable<any> {
    return this.http.get(
      environment.BasePath + "Department/Search_Department/" + Department_Name
    );
  }
  Delete_Department(Department_Id) {
    return this.http.get(
      environment.BasePath + "Department/Delete_Department/" + Department_Id
    );
  }
  Get_Department(Department_Id) {
    return this.http.get(
      environment.BasePath + "Department/Get_Department/" + Department_Id
    );
  }
  Get_Status_Selection_Edit(Department_Id) {
   
    return this.http.get(
      environment.BasePath +
        "Department/Get_Status_Selection_Edit/" +
        Department_Id
    );
  }
  Search_Department_Status(Department_Status_Name): Observable<any> {
    return this.http.get(
      environment.BasePath +
        "Department_Status/Search_Department_Status/" +
        Department_Status_Name
    );
  }

  Load_Status_Dropdown(): Observable<any> {
    return this.http.get(
      environment.BasePath + "Department/Load_Status_Dropdown/"
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

  Load_DefaultDepartment(): Observable<any> {
    return this.http.get(
      environment.BasePath + "Department/Load_DefaultDepartment/"
    );
  }

  Search_DefultUser_Typeahead(Branch_Id_, Department_Id_): Observable<any> {
    return this.http.get(
      environment.BasePath +
        "Department/Search_DefultUser_Typeahead/" +
        Branch_Id_ +
        "/" +
        Department_Id_
    );
  }

  Search_BranchDefaultDepartment_Typeahead(Branch_Id_): Observable<any> {
    return this.http.get(
      environment.BasePath +
        "Department/Search_BranchDefaultDepartment_Typeahead/" +
        Branch_Id_
    );
  }

  Search_DefaultDepartmentStatus_Typeahead(
    Branch_Id_,
    Department_Id_
  ): Observable<any> {
    return this.http.get(
      environment.BasePath +
        "Department/Search_DefaultDepartmentStatus_Typeahead/" +
        Branch_Id_ +
        "/" +
        Department_Id_
    );
  }

  Search_DefaultDepartment_User_Typeahead(Department_Id_): Observable<any> {
    return this.http.get(
      environment.BasePath +
        "Department/Search_DefaultDepartment_User_Typeahead/" +
        Department_Id_
    );
  }

  Load_Color(): Observable<any> {
    return this.http.get(environment.BasePath + "Student/Load_Color/");
  }


  Search_Document_new(Document_Name): Observable<any> {
    
    return this.http.get(
      environment.BasePath +
        "Department_Status/Search_Document_new/" +
        Document_Name
    );
  }


  Search_Check_list_new(Check_List_Name): Observable<any> {
    
    return this.http.get(
      environment.BasePath +
        "Department_Status/Search_Check_list_new/" +
        Check_List_Name
    );
  }



  Search_Notification_new(Department_Name): Observable<any> {
    
    return this.http.get(
      environment.BasePath +
        "Department_Status/Search_Notification_new/" +
        Department_Name
    );
  }

  Search_Department_Status_new(Department_Status_Name): Observable<any> {
    
    return this.http.get(
      environment.BasePath +
        "Department_Status/Search_Department_Status_new/" +
        Department_Status_Name
    );
  }


  
  // Search_Process_department_Details(Check_List_Name): Observable<any> {
  //  
  //   return this.http.get(
  //     environment.BasePath +
  //       "Department_Status/Search_Process_department_Details/" +
  //       Check_List_Name
  //   );
  // }



  Search_Process_department_Details(Department_Status_Id_,Process_id_): Observable<any> {
    
    var Search_Data = { Department_Status_Id_: Department_Status_Id_,
      Process_id_: Process_id_ };
    return this.http.get(
      environment.BasePath + "Department_Status/Search_Process_department_Details/",
      { params: Search_Data }
    );
  }

  Search_Process_department_Details_contain(Department_Status_Id_,Process_id_): Observable<any> {
   
    var Search_Data = { Department_Status_Id_: Department_Status_Id_,
      Process_id_: Process_id_ };
    return this.http.get(
      environment.BasePath + "Department_Status/Search_Process_department_Details_contain/",
      { params: Search_Data }
    
    );
    
  }


  Search_Process_NextStatus_Details_contain(Department_Status_Id_,Process_id_): Observable<any> {
    debugger
    var Search_Data = { Department_Status_Id_: Department_Status_Id_,
      Process_id_: Process_id_ };
    return this.http.get(
      environment.BasePath + "Department_Status/Search_Process_NextStatus_Details_contain/",
      { params: Search_Data }
    
    );
    
  }

  Search_Process_status(Department_Status_Name):Observable<any>
{

 
var Search_Data={'Department_Status_Name':Department_Status_Name}
 return this.http.get(environment.BasePath +'Process/Search_Process_status/',{params:Search_Data});}

}
