import { Component, OnInit, Input, Injectable } from "@angular/core";
import { environment } from "../../environments/environment.js";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from "@angular/common/http";
import { Observable, of } from "rxjs";
import { map, catchError, tap } from "rxjs/operators";
import { AnimationKeyframesSequenceMetadata } from "@angular/animations";
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";

@Injectable({
  providedIn: "root",
})
export class Course_Service {
  constructor(private http: HttpClient) {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }),
    };
  }
  AnimationKeyframesSequenceMetadata;


  Save_Course(Course_) {
    return this.http.post(
      environment.BasePath + "Course/Save_Course/",
      Course_
    );
  }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  fileExtension = ".xlsx";

  public exportExcel(jsonData: any[], fileName: string): void {
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(jsonData);
    const wb: XLSX.WorkBook = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer: any = XLSX.write(wb, {
      bookType: "xlsx",
      type: "array",
    });
    this.saveExcelFile(excelBuffer, fileName);
  }
  private saveExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], { type: this.fileType });
    FileSaver.saveAs(data, fileName + this.fileExtension);
  }

  Search_Course(
    Course_Name_,
    Level_Id_,
    Country_Id_,
    Internship_Id_,
    Duration_Id_,
    University_Id_,
    Subject_Id_,
    Intake_Id_,
    Sub_Section_Id_,
    Pointer_Start_,
    Pointer_Stop_,
    Page_Length_
  ): Observable<any> {
    var Search_Data = {
      Course_Name_: Course_Name_,
      Level_Id_: Level_Id_,
      Country_Id_: Country_Id_,
      Internship_Id_: Internship_Id_,
      Duration_Id_: Duration_Id_,
      University_Id_: University_Id_,
      Subject_Id_: Subject_Id_,
      Intake_Id: Intake_Id_,
      Sub_Section_Id_: Sub_Section_Id_,
      Pointer_Start_: Pointer_Start_,
      Pointer_Stop_: Pointer_Stop_,
      Page_Length_: Page_Length_,
    };
    debugger
    return this.http.get(environment.BasePath + "Course/Search_Course/", {
      params: Search_Data,
    });
  }
Load_Qualifications(): Observable<any> {
  return this.http.get(
    environment.BasePath + "Course/Load_Qualifications"
  );
}
Load_States(): Observable<any> {
  return this.http.get(
    environment.BasePath + "Course/Load_States"
  );
}
Load_Universities(): Observable<any> {
  return this.http.get(
    environment.BasePath + "Course/Load_Universities"
  );
}
Delete_Course_Subjects(Id: number): Observable<any> {
  return this.http.get(environment.BasePath + 'Course/Delete_Course_Subjects/' + Id);
}
Load_Subjects_By_Stream(streamId: number): Observable<any> {
 return this.http.get(environment.BasePath + 'Course/Load_Subjects_By_Stream/' + streamId);
}
Load_Course_Subjects_By_Course(courseId: number): Observable<any> {
  return this.http.get(environment.BasePath + 'Course/Load_Course_Subjects_By_Course/' + courseId);
}
Save_Course_Subjects(courseSubjects: any): Observable<any> {
  debugger
 return this.http.post(environment.BasePath + 'Course/Save_Course_Subjects/', courseSubjects);
}

Load_Streams(): Observable<any> {
  return this.http.get(
    environment.BasePath + "Course/Load_Streams"
  );
}

  // Function to get course qualification by id
  getCourseQualificationById(id) {
    return this.http.post(
      environment.BasePath + "Course/Get_Course_Qualification/",
      {id: id}
    );
  }

  Delete_Course(Course_Id) {
    return this.http.get(
      environment.BasePath + "Course/Delete_Course/" + Course_Id
    );
  }

  Get_Course(Course_Id) {
    return this.http.get(
      environment.BasePath + "Course/Get_Course/" + Course_Id
    );
  }
  Get_Intakes_InCourse() {
    return this.http.get(environment.BasePath + "Intake/Get_Intakes_InCourse/");
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

  Search_Courses_Typeahead(Course_Name): Observable<any> {
    var Search_Data = { Course_Name: Course_Name };
    return this.http.get(
      environment.BasePath + "Course/Search_Courses_Typeahead/",
      { params: Search_Data }
    );
  }

  Search_Courses_Typeahead_University(Course_Name,University_Id): Observable<any> {
    var Search_Data = { Course_Name: Course_Name ,University_Id:University_Id};
    return this.http.get(
      environment.BasePath + "Course/Search_Courses_Typeahead_tempp/",
      { params: Search_Data }
    );
  }

  
  Search_Courses_Typeahead_Check(Course_Name: string, University_Ids: any[]): Observable<any> {
    const Search_Data = {
      Course_Name: Course_Name,
      University_Ids: University_Ids
    };
  
    return this.http.get(
      environment.BasePath + "Course/Search_Courses_Typeahead_Check/",
      { params: Search_Data }
    );
  }
  Search_Courses_Typeahead_tempp(Course_Name,University_Id): Observable<any> {
    var Search_Data = { Course_Name: Course_Name ,University_Id :University_Id};
    return this.http.get(
      environment.BasePath + "Course/Search_Courses_Typeahead_tempp/",
      { params: Search_Data }
    );
  }
  Search_Courses_Fees_Typeahead(Course_Name, Student_Id): Observable<any> {
    var Search_Data = { Course_Name: Course_Name, Student_Id: Student_Id };
    return this.http.get(
      environment.BasePath + "Course/Search_Courses_Fees_Typeahead/",
      { params: Search_Data }
    );
  }
}
