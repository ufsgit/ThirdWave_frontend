import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Course_Service } from "../../../services/Course.service";
import { University_Service } from "../../../services/University.service";
import { Country_Service } from "../../../services/Country.service";
import { Subject_Service } from "../../../services/Subject.service";
// import { Sub_Section_Service } from '../../../services/Sub_Section_Service';

import { Internship_Service } from "../../../services/Internship.service";

import { DialogBox_Component } from "../DialogBox/DialogBox.component";
import { Course } from "../../../models/Course";
import { Ielts } from "../../../models/Ielts";
import { Subject } from "../../../models/Subject";
import { Internship } from "../../../models/Internship";
import { University } from "../../../models/University";
import { Country } from "../../../models/Country";
import { Level_Detail } from "../../../models/Level_Detail";
import { Duration } from "../../../models/Duration";
// import { Intake } from '../../../models/Intake';

import { MatDialog } from "@angular/material";
import {
  ROUTES,
  Get_Page_Permission,
} from "../../../components/sidebar/sidebar.component";
import { Intake } from "../../../models/Intake";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { Sub_Section } from "../../../models/Sub_Section";
// import { Sub_Section_Service } from 'app/services/Sub_Section_Service';
import { Sub_Section_Service } from "../../../services/Sub_Section.Service";
import { ProcessService } from "../../../services/Process.Service";
import { Enquiry_Source_Service } from "../../../services/Enquiry_Source.service";
import { Process } from "app/models/process";
import { Student_Service } from "app/services/Student.Service";
import { IELTS_Type } from "app/models/IELTS_Type";
import { qualification_master } from "app/models/qualification_master";
//import { Subject } from 'rxjs';
@Component({
  selector: "app-Course",
  templateUrl: "./Course.component.html",
  styleUrls: ["./Course.component.css"],
})
export class CourseComponent implements OnInit {
 
  Course_Data: Course[];
  Course_: Course = new Course();

  Intake_Data: Intake[];

  Course_Name_Search: string;

  Subject_Id: number;
  Subject_Name: string;
  Sub_Section_Id: number;
  Sub_Section_Name: string;
  University_Name: string;
  University_Id: string;
  Page_Length_: number = 100;

  Total_Course: number
    showSubjectsDialog: boolean = false;
  selectedCourseId: number = 0;
  
  Intake_Mode_: Intake = new Intake();
	Intake_Mode_Temp: Intake = new Intake();
	Intake_Mode_Data: Intake[];
    Intake_Search:Intake = new Intake();

  Entry_View: boolean = true;
  EditIndex: number;
  Total_Entries: number;
  Search_Subject_: Subject = new Subject();
  Subject_Data: Subject[];

  Search_Sub_Section_: Sub_Section = new Sub_Section();
  Sub_Section_Data: Sub_Section[];
  University_: University = new University();
  Search_University_: University = new University();
  University_Data: University[];

  University_Temp: University = new University();
  Subject_Temp: Subject = new Subject();
  Sub_Section_Temp: Sub_Section = new Sub_Section();
  Country_Temp: Country = new Country();

  Search_Internship_: Internship = new Internship();
  Internship_: Internship = new Internship();
  Internship_Data: Internship[];
  Internship_Search_Data: Internship[];
  Internship_Search_Temp: Internship = new Internship();
  Internship_Temp: Internship = new Internship();

  University_1: University = new University();

  Ielts_: Ielts = new Ielts();
  Ielts_Data: Ielts[];
  Ielts_Temp: Ielts = new Ielts();
  IELTS_Type_Data: IELTS_Type[];
  Level_: Level_Detail = new Level_Detail();
  Level_Data: Level_Detail[];
  Level_Search_Data: Level_Detail[];
  Level_Temp: Level_Detail = new Level_Detail();
  Level_Search_Temp: Level_Detail = new Level_Detail();
  Search_Course_name: string;
  // Search_Intake_:string;
  Search_Duration_: Duration = new Duration();
  Search_Level_: Level_Detail = new Level_Detail();
  //Search_Internship_:string;
  Status_Select_All: boolean = false;

  Duration_Id: number;
  Advance_Search: boolean = true;
  Duration_: Duration = new Duration();
  Duration_Data: Duration[];
  Duration_Search_Data: Duration[];
  Duration_Temp: Duration = new Duration();
  Duration_Search_Temp: Duration = new Duration();
  Process_: Process = new Process();

  Profile_Country_: Country = new Country();

  Country_Data_Filter: Country[];

  University_Data_Filter_2: University[];

  // Intake_:Intake=new Intake();
  // Intake_Data:Intake[];
  // Intake_Temp:Intake=new Intake();

  Intake_Id: number;
  // Intake_Name:string;

  Country_: Country = new Country();
  Subject_: Subject = new Subject();
  Sub_Section_: Sub_Section = new Sub_Section();

  Search_Country_: Country = new Country();
  Intake: Intake = new Intake();
  Country_Data: Country[];

  Intake_Selection: Intake[];

  color = "primary";
  mode = "indeterminate";
  value = 50;
  issLoading: boolean;
  Permissions: any;
  Course_Edit: boolean;
  Course_Save: boolean;
  Course_Delete: boolean;
  myInnerHeight: number;
  myInnerHeight1:number;
  Pointer_Start_: number;
  Pointer_Stop_: number;
  nextflag: number;

  myTotalHeight: number;
  MyInnerHeight: number;
  MyTotalHeight: number;
  existingCourseSubjects: any[] = [];
  Select_Status: boolean = false;
  Select_Selection: boolean = false;
  IntakeSelection: boolean;
  IntakeStatus: boolean;
  Item_Export: boolean;
  Login_User: string = "0";

  // Variable to handle processes
  ProcessId: number;
  // processes = [

  processes: Process[];

  // Variable to handle courses
  qualificationList :qualification_master [];
  qualificationListObj = {};
  savedSubjects: any;
  constructor(
    public Course_Service_: Course_Service,public Student_Service_:Student_Service,
    public Internship_Service_: Internship_Service,
    public Subject_Service_: Subject_Service,
    public Sub_Section_Service_: Sub_Section_Service,
    public Country_Service_: Country_Service,
    public University_Service_: University_Service,
    private route: ActivatedRoute,
    private router: Router,
    public dialogBox: MatDialog,
    private processService: ProcessService,
    private qualificationService: Enquiry_Source_Service
  ) {}
  ngOnInit() {
    this.Login_User = localStorage.getItem("Login_User");
    this.getProcessDrp();
    {
      this.Page_Load();
    }
    this.getQualificationList();
  }

  // Function to get qualification List
  getQualificationList() {
    
    this.qualificationService.Search_Qualification_Master("").subscribe(
      (data) => {
        
        this.qualificationList = data[0];
        this.qualificationList.map((element) => {
          this.qualificationListObj[element.Qualification_Master_Id] = {
            ...element,
            selected: false,
            condent: "",
          };
          return { ...element, selected: false, condent: "" };
        });
      },
      (err) => {

        
        this.qualificationList = [];
      }
    );
  }
// In Course Component
openSubjectsComponent(courseId: number, index: number) {
  console.log('Opening subjects for Course ID:', courseId);
  this.selectedCourseId = courseId;
  
  // Clear existing data first
  this.existingCourseSubjects = [];
  
  // Show dialog
  this.showSubjectsDialog = true;
  
  // Load existing course subjects data
  this.loadExistingCourseSubjects(courseId);
  
  // Hide parent component
  const parentElement = document.querySelector('.course-container');
  if (parentElement) {
    (parentElement as HTMLElement).style.display = 'none';
  }
}

closeSubjectsDialog() {
  this.showSubjectsDialog = false;
  this.selectedCourseId = 0;
  this.existingCourseSubjects = []; // Clear data when closing
  
  // Show parent component again
  const parentElement = document.querySelector('.course-container');
  if (parentElement) {
    (parentElement as HTMLElement).style.display = 'block';
  }
}
  // Function to get course qualification by course id
  getCourseQualificationById(id) {
    this.Course_Service_.getCourseQualificationById(id).subscribe(
      (data: any) => {
        console.log(data);
        data.forEach((elementt) => {
          this.qualificationListObj[elementt.qualification_id] = {
            ...this.qualificationListObj[elementt.qualification_id],
            ...elementt,
          };
          this.qualificationListObj[elementt.qualification_id].condent =
            elementt.content;
          this.qualificationListObj[elementt.qualification_id].selected = true;
        });
        console.log(this.qualificationListObj);
      },
      (err) => {}
    );
  }

  // Function to show input field of qualification
  showInput(event, document) {
    if (event.target.checked === true) {
      this.qualificationListObj[document.Qualification_Master_Id].selected =
        true;
    } else {
      this.qualificationListObj[document.Qualification_Master_Id].selected =
        false;
    }
  }

  // Function to update input text in obj
  updateNotificationText(event, qualificationId) {
    this.qualificationListObj[qualificationId].mark = event.target.value;
  }

  // Function to get process list
  getProcessDrp() {
    this.processService.getAll().subscribe(
      (data) => {
        this.processes = data.data;
      },
      (err) => {
        throw new Error(err);
      }
    );
  }

  Page_Load() {
    this.Get_Menu_Status(3, this.Login_User);

    this.MyInnerHeight = window.innerHeight;
    this.MyTotalHeight = this.MyInnerHeight - 35;
    this.MyTotalHeight = this.MyTotalHeight - 0;
    this.MyInnerHeight = this.MyInnerHeight - 50;
    this.Clr_Course();
    this.Load_Dropdowns();
    // this.Search_Course();
    this.Search_Course_Click();
    this.Pointer_Start_ = 1;
    this.Pointer_Stop_ = this.Page_Length_;
    this.Get_Intakes_InCourse();
    this.Get_Student_PageLoadData_Dropdowns();
    this.Entry_View = false;

    this.myInnerHeight = window.innerHeight;
    this.myTotalHeight = this.myInnerHeight - 300;
    this.myTotalHeight = this.myTotalHeight - -430;
    this.myInnerHeight = this.myInnerHeight - 150;
    
    this.myInnerHeight1 = window.innerHeight;
    this.myTotalHeight = this.myInnerHeight1 - 300;
    this.myTotalHeight = this.myTotalHeight - -430;
    this.myInnerHeight1 = this.myInnerHeight1 - 200;
  }

  Get_Menu_Status(Menu_id, Login_user_id) {
    this.issLoading = false;
    this.Course_Service_.Get_Menu_Status(Menu_id, Login_user_id).subscribe(
      (Rows) => {
        if (Rows[0][0] == undefined) {
          if (Menu_id == 3) {
            localStorage.removeItem("token");
            this.router.navigateByUrl("Home_Page");
          }
        } else if (Rows[0][0].View > 0) {
          if (Menu_id == 3) {
            this.Permissions = Rows[0][0];
            if (this.Permissions == undefined || this.Permissions == null) {
              localStorage.removeItem("token");
              this.router.navigateByUrl("Home_Page");
            }

            this.Course_Edit = this.Permissions.Edit;
            this.Course_Save = this.Permissions.Save;
            this.Course_Delete = this.Permissions.Delete;
          }
        }
      },
      (Rows) => {
        this.issLoading = false;
        const dialogRef = this.dialogBox.open(DialogBox_Component, {
          panelClass: "Dialogbox-Class",
          data: { Message: "Error Occured", Type: "2" },
        });
      }
    );
  }


  
Get_Student_PageLoadData_Dropdowns() {
  this.Student_Service_.Get_Student_PageLoadData_Dropdowns().subscribe(
      (Rows) => {

          
          this.Intake_Mode_Data = Rows[2];
          this.Intake_Mode_Temp.Intake_Id =0;
          this.Intake_Mode_Temp.Intake_Name ="Select";
          if(this.Intake_Mode_Data != undefined)
            {
            this.Intake_Mode_Data.unshift(Object.assign({},this.Intake_Mode_Temp));      
            this.Intake_Search = this.Intake_Mode_Data[0];
          }

          // this.Intake_Year_Data = Rows[5];
          // this.Intake_Year_Temp.Intake_Year_Id =0;
          // this.Intake_Year_Temp.Intake_Year_Name ="Select";
          // this.Intake_Year_Data.unshift(Object.assign({},this.Intake_Year_Temp));      
          // this.Intake_Year_Search = this.Intake_Year_Data[0];


      },
      (Rows) => {
          const dialogRef = this.dialogBox.open(DialogBox_Component, {
              panelClass: "Dialogbox-Class",
              data: { Message: "Error Occured", Type: "2" },
          });
      }
  );
}


  Create_New() {
    this.Entry_View = true;
    this.Clr_Course();
  }

  Close_Click() {
    this.Entry_View = false;
    this.getQualificationList();
  }

  trackByFn(index, item) {
    return index;
  }

  Clr_Course() {
    this.Course_.Course_Id = undefined;
    this.Course_.Course_Name = "";
    this.Course_.Course_Code = "";
    this.Course_.Subject_Id = undefined;
    this.Course_.Sub_Section_Id = undefined;

    this.Course_.Duration_Id = undefined;
    this.Course_.Level_Id = undefined;
    this.Course_.Ielts_Minimum_Score = undefined;
    this.Course_.Internship_Id = undefined;
    this.Course_.Notes = "";
    this.Course_.Intake = "";
    this.Course_.Intake_Name = "";
    this.Course_.Tution_Fees = "";
    this.Course_.Living_Expense = "";
    this.Course_.Work_Experience = "";
    this.Course_.Registration_Fees = "";
    this.Course_.VFS_Charges = "";
    this.Course_.Other_Charges = "";
    this.Course_.Apostille = "";
    this.Course_.Bank_Statements = "";
    this.Course_.Insurance = "";
    this.Course_.Date_Charges = "";
    this.Course_.Entry_Requirement = "";
    this.Course_.IELTS_Name = "";
    this.Course_.Course_Link = "";

    this.Course_.Details = "";
    this.Course_.Tag = "";this.Course_.Gold=0;
    this.Course_.Platinum=0;
    this.Course_.Silver=0;
    this.Course_.Application_Fees = undefined;
    this.Course_.University_Id = undefined;
    this.Course_.Country_Id = undefined;

    this.Select_Status = false;
    this.Select_Selection = false;
    this.Subject_.Subject_Id = undefined;
    this.Subject_.Subject_Name = "";
    this.Subject_ = new Subject();

    // this.Select_Status=false;
    // this.Select_Selection=false;
    this.Sub_Section_.Sub_Section_Id = undefined;
    this.Sub_Section_.Sub_Section_Name = "";
    this.Sub_Section_ = new Sub_Section();

    this.University_.University_Name = "";
    this.University_.University_Id = undefined;
    this.University_ = new University();

    this.Country_.Country_Id = undefined;
    this.Country_.Country_Name = "";
    this.Country_ = new Country();

    if (this.Duration_ != null && this.Duration_Data != undefined)
      this.Duration_ = this.Duration_Data[0];

    if (this.Level_ != null && this.Level_Data != undefined)
      this.Level_ = this.Level_Data[0];

    if (this.Ielts_ != null && this.Ielts_Data != undefined)
      this.Ielts_ = this.Ielts_Data[0];

    if (this.Internship_ != null && this.Internship_Data != undefined)
      this.Internship_ = this.Internship_Data[0];
    if (this.Intake_Data != undefined)
      for (var i = 0; i < this.Intake_Data.length; i++) {
        this.Intake_Data[i].Intake_Selection = false;
        this.Intake_Data[i].Intake_Status = false;
      }
if (this.IELTS_Type_Data != undefined)
      for (var i = 0; i < this.Intake_Data.length; i++) {
        this.IELTS_Type_Data[i].Ielts_Selection = false;
        this.IELTS_Type_Data[i].Ielts_Minimum_Score = 0;
      }
      

    // if(this.Intake_!=null && this.Intake_Data != undefined)
    // this.Intake_=this.Intake_Data[0];
  }

  Load_Dropdowns() {
    
    this.Internship_Service_.Get_Course_Load_Data().subscribe(
      (Rows) => {
        
        //  this.Internship_Data =  Object.assign({},Rows[0]);
        console.log(Rows);
        this.Internship_Data = Rows[0] ;
         
        this.Internship_Temp.Internship_Id = 0;
        this.Internship_Temp.Internship_Name = "Select";
        this.Internship_Data.unshift(this.Internship_Temp);
        this.Internship_ = this.Internship_Data[0];

        //    this.Internship_Search_Data =  Object.assign({},Rows[0]);
        this.Internship_Search_Data = Rows[0].slice();
        this.Internship_Search_Temp.Internship_Id = 0;
        this.Internship_Search_Temp.Internship_Name = "All";
        this.Internship_Search_Data.unshift(this.Internship_Search_Temp);
        this.Search_Internship_ = this.Internship_Search_Data[0];

        //    this.Duration_Data = Rows[2];
        this.Duration_Data = Rows[2].slice();
        this.Duration_Temp.Duration_Id = 0;
        this.Duration_Temp.Duration_Name = "Select";
        this.Duration_Data.unshift(this.Duration_Temp);
        this.Duration_ = this.Duration_Data[0];

        this.Duration_Search_Data = Rows[2].slice();
        this.Duration_Search_Temp.Duration_Id = 0;
        this.Duration_Search_Temp.Duration_Name = "All";
        this.Duration_Search_Data.unshift(this.Duration_Search_Temp);
        this.Search_Duration_ = this.Duration_Search_Data[0];

        this.Level_Data = Rows[3].slice();
        this.Level_Temp.Level_Detail_Id = 0;
        this.Level_Temp.Level_Detail_Name = "Select";
        this.Level_Data.unshift(this.Level_Temp);
        this.Level_ = this.Level_Data[0];

        this.Level_Search_Data = Rows[3].slice();
        this.Level_Search_Temp.Level_Detail_Id = 0;
        this.Level_Search_Temp.Level_Detail_Name = "All";
        this.Level_Search_Data.unshift(this.Level_Search_Temp);
        this.Search_Level_ = this.Level_Search_Data[0];

        // this.Ielts_Data = Rows[1];
        // this.Ielts_Temp.Ielts_Id = 0;
        // this.Ielts_Temp.Ielts_Name = "Select";
        // this.Ielts_Data.unshift(this.Ielts_Temp);
        // this.Ielts_ = this.Ielts_Data[0];
        // alert(Rows[10]);

  
    
      console.log('Loaded IELTS_Type_Data: ', this.IELTS_Type_Data);
    
        this.IELTS_Type_Data= Rows[10].slice();
        console.log('Rows[10]: ', Rows[10]);
        console.log(this.IELTS_Type_Data);
        debugger;
        //    this.Intake_Data = Rows[4];
        //    this.Intake_Temp.Intake_Id = 0;
        //    this.Intake_Temp.Intake_Name = "Select";
        //    this.Intake_Data.unshift(this.Intake_Temp);
        //    this.Intake_ = this.Intake_Data[0];
      },
      (Rows) => {
        const dialogRef = this.dialogBox.open(DialogBox_Component, {
          panelClass: "Dialogbox-Class",
          data: { Message: "Error Occured", Type: "2" },
        });
      }
    );
  }
// Update_IELTS_Score(IELTS_Type_Value)

// {console.log('IELTS_Type_Value: ', IELTS_Type_Value);
//   debugger
//   if (IELTS_Type_Value.Ielts_Selection == true )
//     IELTS_Type_Value.Ielts_Data_visibility=1;
//   else
//     IELTS_Type_Value.Ielts_Data_visibility=0;

// }
// Enhanced Update_IELTS_Score method
Update_IELTS_Score(IELTS_Type_Value: any) {
  console.log('IELTS_Type_Value: ', IELTS_Type_Value);
  
  if (IELTS_Type_Value.Ielts_Selection == true) {
    IELTS_Type_Value.Ielts_Data_visibility = 1;
  } else {
    IELTS_Type_Value.Ielts_Data_visibility = 0;
    IELTS_Type_Value.Ielts_Minimum_Score = ''; // Clear score when deselected
  }
}

  University_Typeahead(event: any) {
    var Value = "";
    if (event.target.value == "") Value = undefined;
    else Value = event.target.value;
    this.issLoading = true;

    this.University_Service_.University_Typeahead(Value).subscribe(
      (Rows) => {
        if (Rows != null) {
          this.University_Data = Rows[0];
        }
        this.issLoading = false;
      },
      (Rows) => {
        this.issLoading = false;
      }
    );
  }

  display_University_(University_e: University) {
    if (University_e) {
      return University_e.University_Name;
    }
  }

  Search_Country_Typeahead(event: any) {
    var Value = "";
    if (event.target.value == "") Value = undefined;
    else Value = event.target.value;
    this.issLoading = true;

    this.Country_Service_.Search_Country_Typeahead(Value).subscribe(
      (Rows) => {
        this.Country_Data = Rows[0];
        this.issLoading = false;
      },
      (Rows) => {
        this.issLoading = false;
        const dialogRef = this.dialogBox.open(DialogBox_Component, {
          panelClass: "Dialogbox-Class",
          data: { Message: "Error Occured", Type: "2" },
        });
      }
    );
  }

  display_Country_(Country_e: Country) {
    if (Country_e) {
      return Country_e.Country_Name;
    }
  }

  Subject_Typeahead(event: any) {
    var Value = "";
    if (event.target.value == "") Value = undefined;
    else Value = event.target.value;
    this.issLoading = true;

    this.Subject_Service_.Subject_Typeahead(Value).subscribe(
      (Rows) => {
        if (Rows != null) {
          this.Subject_Data = Rows[0];
        }
        this.issLoading = false;
      },
      (Rows) => {
        this.issLoading = false;
      }
    );
  }

  display_Subject_(Subject_e: Subject) {
    if (Subject_e) {
      return Subject_e.Subject_Name;
    }
  }

  Sub_Section_Typeahead(event: any) {
    var Value = "";
    if (event.target.value == "") Value = undefined;
    else Value = event.target.value;
    this.issLoading = true;

    this.Sub_Section_Service_.Sub_Section_Typeahead(Value).subscribe(
      (Rows) => {
        if (Rows != null) {
          this.Sub_Section_Data = Rows[0];
        }
        this.issLoading = false;
      },
      (Rows) => {
        this.issLoading = false;
      }
    );
  }

  display_Sub_Section_(Sub_Section_e: Sub_Section) {
    if (Sub_Section_e) {
      return Sub_Section_e.Sub_Section_Name;
    }
  }

  Search_Course_Click() {
    this.Pointer_Start_ = 1;
    this.Pointer_Stop_ = this.Page_Length_;

    this.Search_Course();
  }

  Export() {
    if (this.Course_Data == undefined) {
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "No Details Found", Type: "3" },
      });
    } else {
      this.Course_Service_.exportExcel(this.Course_Data, "Course_Report");
    }
  }
  
  

  Get_Intakes_InCourse() {
    this.issLoading = true;
    this.Course_Service_.Get_Intakes_InCourse().subscribe(
      (Rows) => {
        this.Intake_Data = Rows[0];
        for (var j = 0; j < this.Intake_Data.length; j++) {
          if (this.Intake_Data[j].Intake_Selection.toString() == "1")
            this.Intake_Data[j].Intake_Selection = true;
          else this.Intake_Data[j].Intake_Selection = false;
          if (this.Intake_Data[j].Intake_Status.toString() == "1")
            this.Intake_Data[j].Intake_Status = true;
          else this.Intake_Data[j].Intake_Status = false;
        }

        if (Rows != null) {
          this.Intake_Data = Rows[0];
        }
        this.issLoading = false;
      },
      (Rows) => {
        this.issLoading = false;
        const dialogRef = this.dialogBox.open(DialogBox_Component, {
          panelClass: "Dialogbox-Class",
          data: { Message: "Error Occured", Type: "2" },
        });
      }
    );
  }

  Search_Course() {
    
    var Search_Course_name = 0,
      Search_Level = 0,
      Search_Internship = 0,
      Search_Duration = 0,
      Search_Country_temp = 0,
      Search_University = 0,
      Subject_Id_ = 0,Intake_Id=0,
      Sub_Section_Id_ = 0;

    // if (this.Search_Country_ == undefined || this.Search_Country_ == null)
    //   Search_Country_temp = 0;
    // else if (
    //   this.Search_Country_.Country_Id == undefined ||
    //   this.Search_Country_.Country_Id == null
    // )
    //   Search_Country_temp = 0;
    // else Search_Country_temp = this.Search_Country_.Country_Id;

    if (this.Profile_Country_ != undefined && this.Profile_Country_ != null)
      if (this.Profile_Country_.Country_Id != undefined && this.Profile_Country_.Country_Id != null)
        Search_Country_temp = this.Profile_Country_.Country_Id;

    if (this.University_1 != undefined && this.University_1 != null)
		if (this.University_1.University_Id != undefined && this.University_1.University_Id != null)
      Search_University = this.University_1.University_Id;

    if (this.Search_Course_name == null) this.Search_Course_name = undefined;

    // if (this.Search_Intake_ != null && this.Search_Intake_ != undefined && this.Search_Intake_ != '')
    //     Search_Intake = 0;

    if (
      this.Search_Duration_ != undefined &&
      this.Search_Duration_ != null &&
      this.Search_Duration_.toString() != "Duration_"
    ) {
      if (
        this.Search_Duration_.Duration_Id != undefined &&
        this.Search_Duration_.Duration_Id != null
      ) {
        Search_Duration = this.Search_Duration_.Duration_Id;
      }
    }
    if (
      this.Search_Level_ != undefined &&
      this.Search_Level_ != null &&
      this.Search_Level_.toString() != "Level_"
    ) {
      if (
        this.Search_Level_.Level_Detail_Id != undefined &&
        this.Search_Level_.Level_Detail_Id != null
      ) {
        Search_Level = this.Search_Level_.Level_Detail_Id;
      }
    }

    if (
      this.Search_Internship_ != undefined &&
      this.Search_Internship_ != null &&
      this.Search_Internship_.toString() != "Internship_"
    ) {
      if (
        this.Search_Internship_.Internship_Id != undefined &&
        this.Search_Internship_.Internship_Id != null
      ) {
        Search_Internship = this.Search_Internship_.Internship_Id;
      }
    }
    // if (this.Search_University_ == undefined || this.Search_University_ == null)
    //   Search_University = 0;
    // else if (
    //   this.Search_University_.University_Id == undefined ||
    //   this.Search_University_.University_Id == null
    // )
    //   Search_University = 0;
    // else Search_University = this.Search_University_.University_Id;

    if (this.Search_Subject_ == undefined || this.Search_Subject_ == null)
      Subject_Id_ = 0;
    else if (
      this.Search_Subject_.Subject_Id == undefined ||
      this.Search_Subject_.Subject_Id == null
    )
      Subject_Id_ = 0;
    else Subject_Id_ = this.Search_Subject_.Subject_Id;

    if (
      this.Search_Sub_Section_ == undefined ||
      this.Search_Sub_Section_ == null
    )
      Sub_Section_Id_ = 0;
    else if (
      this.Search_Sub_Section_.Sub_Section_Id == undefined ||
      this.Search_Sub_Section_.Sub_Section_Id == null
    )
      Sub_Section_Id_ = 0;
    else Sub_Section_Id_ = this.Search_Sub_Section_.Sub_Section_Id;
    
    if (this.Intake_Search != undefined && this.Intake_Search != null)
      if (this.Intake_Search.Intake_Id != undefined && this.Intake_Search.Intake_Id != null)
      Intake_Id = this.Intake_Search.Intake_Id;
    this.issLoading = true;
    debugger
    this.Course_Service_.Search_Course(
      this.Search_Course_name,
      Search_Level,
      Search_Country_temp,
      Search_Internship,
      Search_Duration,
      Search_University,
      Subject_Id_,
      Intake_Id,
      Sub_Section_Id_,
      this.Pointer_Start_,
      this.Pointer_Stop_,
      this.Page_Length_
    ).subscribe(
      (Rows) => {
        console.log('Rows: ', Rows);
      debugger
      this.Course_Data = Rows[0] || [];
console.log('this.Course_Data: ', this.Course_Data);

if (this.Course_Data.length > 0) {
  this.Total_Course = this.Course_Data[this.Course_Data.length - 1].Course_Id;

  // 🔍 Only splice if you're intentionally adding a dummy row to the end (optional)
  // this.Course_Data.splice(this.Course_Data.length - 1);

  this.Total_Entries = this.Course_Data.length;
} else {
  this.issLoading = false;
  this.dialogBox.open(DialogBox_Component, {
    panelClass: "Dialogbox-Class",
    data: { Message: "No Details Found", Type: "3" },
  });
}

this.issLoading = false;
        // this.Course_Data = Rows[0];
     
        // console.log('this.Course_Data: ', this.Course_Data);

        // this.Total_Course =
       
        //   this.Course_Data[this.Course_Data.length - 1].Course_Id;
        //   console.log('this.Course_Data[this.Course_Data.length - 1].Course_Id: ', this.Course_Data[this.Course_Data.length - 1].Course_Id);
        //   console.log('this.Course_Data.length - 1: ', this.Course_Data.length - 1);
        // this.Course_Data.splice(this.Course_Data.length - 1);
 
        // this.Total_Entries = this.Course_Data.length;
        // console.log('his.Course_Data.length: ', this.Course_Data.length);
        // console.log('this.Total_Course: ', this.Total_Course);
        // if (this.Course_Data.length == 0) {
        //   console.log('this.Course_Data: ', this.Course_Data);
        //   this.issLoading = false;
        //   const dialogRef = this.dialogBox.open(DialogBox_Component, {
        //     panelClass: "Dialogbox-Class",
        //     data: { Message: "No Details Found", Type: "3" },
        //   });
        // }
        // this.issLoading = false;
      },
      (Rows) => {
        this.issLoading = false;
        const dialogRef = this.dialogBox.open(DialogBox_Component, {
          panelClass: "Dialogbox-Class",
          data: { Message: "Error Occured", Type: "2" },
        });
      }
    );
  }

  Advance_Search_Click() {
    this.Advance_Search = !this.Advance_Search;
  }
 

loadExistingCourseSubjects(courseId: number) {
  this.issLoading = true;
  this.Course_Service_.Load_Course_Subjects_By_Course(courseId).subscribe(
    (Rows) => {
      this.issLoading = false;
      if (Rows && Rows[0] && Rows[0].length > 0) {
        // Parse the subjects JSON data
        const parsedData = Rows[0].map(item => {
          return {
            ...item,
            Subjects: typeof item.Subjects === 'string' ? JSON.parse(item.Subjects) : item.Subjects
          };
        });
        this.existingCourseSubjects = parsedData;
        console.log('Parsed existing course subjects:', this.existingCourseSubjects);
      } else {
        this.existingCourseSubjects = [];
        console.log('No existing course subjects found');
      }
    },
    (error) => {
      this.issLoading = false;
      console.error('Error loading existing course subjects:', error);
      this.existingCourseSubjects = [];
    }
  );
}




  onSubjectsUpdated(subjects: any[]) {
    // Handle subjects update if needed
    debugger
console.log('Subjects updated for Course ID:', this.selectedCourseId, subjects);
  }

  Next_Click() {
    if (this.Course_Data.length == this.Page_Length_) {
      this.Pointer_Start_ = this.Pointer_Start_ + this.Page_Length_;
      this.Pointer_Stop_ = this.Pointer_Stop_ + this.Page_Length_;
      this.nextflag = 1;
      if (this.Course_Data.length > 0) {
        this.Search_Course();
      }
    }
  }

  previous_Click() {
    if (this.Pointer_Start_ > 1) {
      this.Pointer_Start_ = this.Pointer_Start_ - this.Page_Length_;
      this.Pointer_Stop_ = this.Pointer_Stop_ - this.Page_Length_;
      this.Search_Course();
    }
  }

  Delete_Course(Course_Id, index) {
    const dialogRef = this.dialogBox.open(DialogBox_Component, {
      panelClass: "Dialogbox-Class",
      data: {
        Message: "Do you want to delete ?",
        Type: true,
        Heading: "Confirm",
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result == "Yes") {
        this.issLoading = true;
        this.Course_Service_.Delete_Course(Course_Id).subscribe(
          (Delete_status) => {
            if (Delete_status[0][0].Course_Id_ > 0) {
              this.Course_Data.splice(this.EditIndex, 1);
              const dialogRef = this.dialogBox.open(DialogBox_Component, {
                panelClass: "Dialogbox-Class",
                data: { Message: "Deleted", Type: "false" },
              });
              this.Search_Course();
            } else {
              this.issLoading = false;
              const dialogRef = this.dialogBox.open(DialogBox_Component, {
                panelClass: "Dialogbox-Class",
                data: { Message: "Error Occured", Type: "2" },
              });
            }
            this.issLoading = false;
          },
          (Rows) => {
            this.issLoading = false;
            const dialogRef = this.dialogBox.open(DialogBox_Component, {
              panelClass: "Dialogbox-Class",
              data: { Message: "Error Occured", Type: "2" },
            });
          }
        );
      }
    });
  }

  Save_Course() {
    
    if (
      this.Course_.Course_Name == undefined ||
      this.Course_.Course_Name == null ||
      this.Course_.Course_Name == ""
    ) {
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "Enter Course", Type: "3" },
      });
      return;
    }

    var intakeval = 0;
    for (var i = 0; i < this.Intake_Data.length; i++) {
      if (this.Intake_Data[i].Intake_Selection == true) {
        intakeval = 1;
        break;
      }
    }
    

    this.issLoading = true;
    this.Course_.Country_Id = 0;
    this.Course_.Subject_Id = this.Subject_.Subject_Id;
    this.Course_.Sub_Section_Id = this.Sub_Section_.Sub_Section_Id;
    this.Course_.University_Id = this.University_.University_Id;
    this.Course_.Internship_Id = this.Internship_.Internship_Id;
    this.Course_.Ielts_Minimum_Score = this.Ielts_.Ielts_Id;
    this.Course_.Level_Id = this.Level_.Level_Detail_Id;
    this.Course_.Duration_Id = this.Duration_.Duration_Id;
    this.Course_.Intake_Data = this.Intake_Data;
    this.Course_.ProcessId = this.ProcessId;

    // Get Qualifications selected
    const filteredQualificationObj = [];
    // Filter from default object
    for (const key in this.qualificationListObj) {
      if (this.qualificationListObj[key].selected && this.qualificationListObj[key].mark) {
        filteredQualificationObj.push({
          ...this.qualificationListObj[key],
          mark: this.qualificationListObj[key].mark
        });
      }
    }

    // Send qualification array with object
    this.Course_.qualification = filteredQualificationObj;
     // Prepare English Test Data
       console.log('this.Course_.English_Test_Status: ', this.Course_.English_Test_Status);
           console.log('this.IELTS_Type_Data: ', this.IELTS_Type_Data);
  let englishTestData = [];
  if (this.IELTS_Type_Data) {

  
    for (let i = 0; i < this.IELTS_Type_Data.length; i++) {
      console.log('this.IELTS_Type_Data: ', this.IELTS_Type_Data);
      const testData = this.IELTS_Type_Data[i];
      if (
        testData.Ielts_Minimum_Score !== undefined &&
        testData.Ielts_Minimum_Score !== null &&
        String(testData.Ielts_Minimum_Score).trim() !== ''
      ) {
        englishTestData.push({
          Ielts_Type_Id: testData.Ielts_Type,
         
          Ielts_Type_Name: testData.Ielts_Type_Name,
          Ielts_Minimum_Score: testData.Ielts_Minimum_Score
        });
      }
    }
  } 
 
  console.log('this.IELTS_Type_Data: ', this.IELTS_Type_Data);
  
//   let englishTestData = [];
//  if (this.IELTS_Type_Data) {
//     for (let i = 0; i < this.IELTS_Type_Data.length; i++) {
//       const testData = this.IELTS_Type_Data[i];
      
//       // Only include tests that have scores entered
//       if (
//         testData.Ielts_Minimum_Score !== undefined &&
//         testData.Ielts_Minimum_Score !== null &&
//         String(testData.Ielts_Minimum_Score).trim() !== ''
//       ) {
//         englishTestData.push({
//           Ielts_Type_Id: testData.Ielts_Type,
//           Ielts_Type_Name: testData.Ielts_Type_Name,
//           Ielts_Minimum_Score: testData.Ielts_Minimum_Score
//         });
//       }
//     }
//   }

  // Add English test data to course object
  this.Course_.English_Test_Data = englishTestData;

  console.log('this.Course_.English_Test_Data : ', this.Course_.English_Test_Data );

    this.Course_Service_.Save_Course(this.Course_).subscribe(
      (Save_status) => {
        
        this.getQualificationList();
        Save_status = Save_status[0];
        if (Number(Save_status[0].Course_Id_) > 0) {
          const dialogRef = this.dialogBox.open(DialogBox_Component, {
            panelClass: "Dialogbox-Class",
            data: { Message: "Saved", Type: "false" },
          });
          this.Search_Course();
          this.Clr_Course();
        } else {
          const dialogRef = this.dialogBox.open(DialogBox_Component, {
            panelClass: "Dialogbox-Class",
            data: { Message: "Error Occured", Type: "2" },
          });
        }
        this.issLoading = false;
      },
      (Rows) => {
        this.getQualificationList();
        this.issLoading = false;
        const dialogRef = this.dialogBox.open(DialogBox_Component, {
          panelClass: "Dialogbox-Class",
          data: { Message: Rows.error.error, Type: "2" },
        });
      }
    );
  }

  Edit_Course(Course_e: any, index) {
    
    
    console.log("edit called");
    this.getCourseQualificationById(Course_e.Course_Id);

    this.Entry_View = true;
    
    this.Course_ = Course_e;
    // this.Course_=Object.assign({},Course_e);
    this.Subject_.Subject_Name = Course_e.Subject_Name;
    this.Subject_.Subject_Id = Course_e.Subject_Id;
    this.Sub_Section_.Sub_Section_Name = Course_e.Sub_Section_Name;
    this.Sub_Section_.Sub_Section_Id = Course_e.Sub_Section_Id;
    this.University_.University_Name = Course_e.University;
    this.University_.University_Id = Course_e.University_Id;
    this.Country_.Country_Name = Course_e.Country_Name;
    this.Country_.Country_Id = Course_e.Country_Id;
    this.issLoading = true;
    
    
    this.University_Temp.University_Name = this.Course_.University;
    this.University_Temp.University_Id = this.Course_.University_Id;
    this.University_ = Object.assign({},this.University_Temp)

    this.Course_Service_.Get_Course(Course_e.Course_Id).subscribe(
      (Rows) => {
        
        // Save process id int variable to select defaulty
        this.ProcessId = Rows[0][0].processId;


        this.Course_ = Object.assign({}, Rows[0][0]);
        // Handle Intake Data
      this.Intake_Data = Rows[1];
      for (var i = 0; i < this.Intake_Data.length; i++) {
        if (this.Intake_Data[i].Intake_Status.toString() == "1")
          this.Intake_Data[i].Intake_Status = true;
        else this.Intake_Data[i].Intake_Status = false;
        if (this.Intake_Data[i].Intake_Selection.toString() == "1")
          this.Intake_Data[i].Intake_Selection = true;
        else this.Intake_Data[i].Intake_Selection = false;
      }

      // Handle IELTS Type Data - Fixed Implementation
      console.log('Rows[2]: ', Rows[2]);
      
      if (Rows[2] && Rows[2].length > 0) {
        // If there's existing IELTS data for this course, map it properly
        this.IELTS_Type_Data = this.IELTS_Type_Data.map((masterTest: any) => {
      
          const existingTest = Rows[2].find((test: any) => 
            test.ielts_type_id === masterTest.Ielts_Type || 
            test.Ielts_Type_Name === masterTest.Ielts_Type_Name
          );
              console.log('this.IELTS_Type_Data: ', this.IELTS_Type_Data);
          return {
            Ielts_Type_Id: masterTest.Ielts_Type,
            Ielts_Type: masterTest.Ielts_Type, // Add this for consistency
            Ielts_Type_Name: masterTest.Ielts_Type_Name,
            Ielts_Minimum_Score: existingTest != null ? existingTest.minimum_score : '',
            Ielts_Selection: existingTest != null ? true : false, // Add selection flag
            Ielts_Data_visibility: existingTest != null ? 1 : 0 // Add visibility flag
          };
        });
      } else {
        // If no existing data, reset all scores but keep the master list
        this.IELTS_Type_Data = this.IELTS_Type_Data.map((test: any) => ({
          ...test,
          Ielts_Minimum_Score: '',
          Ielts_Selection: false,
          Ielts_Data_visibility: 0
        }));
      }
      
      console.log('Updated IELTS_Type_Data: ', this.IELTS_Type_Data);

      
     
//        this.IELTS_Type_Data = Rows[2].map((test: any) => ({
//   Ielts_Type_Id: test.ielts_type_id,
//   Ielts_Type_Name: test.Ielts_Type_Name,
//   Ielts_Minimum_Score: test.minimum_score || '',  // default to empty if null
// }));
        for (var i = 0; i < this.Internship_Data.length; i++) {
          if (
            this.Course_.Internship_Id == this.Internship_Data[i].Internship_Id
          )
            this.Internship_ = this.Internship_Data[i];
        }
        // for (var i = 0; i < this.Ielts_Data.length; i++) {
        //   if (this.Course_.Ielts_Minimum_Score == this.Ielts_Data[i].Ielts_Id)
        //     this.Ielts_ = this.Ielts_Data[i];
        // }
        for (var i = 0; i < this.Level_Data.length; i++) {
          if (this.Course_.Level_Id == this.Level_Data[i].Level_Detail_Id)
            this.Level_ = this.Level_Data[i];
        }
        for (var i = 0; i < this.Duration_Data.length; i++) {
          if (this.Course_.Duration_Id == this.Duration_Data[i].Duration_Id)
            this.Duration_ = this.Duration_Data[i];
        }
;
        for (var i = 0; i < this.processes.length; i++) {
          if (this.Course_.ProcessId == this.processes[i].Process_Id)
            this.Process_ = this.processes[i];
        }
       ;

        
        this.Subject_Temp.Subject_Id = this.Course_.Subject_Id;
        this.Subject_Temp.Subject_Name = this.Course_.Subject;
        this.Subject_ = Object.assign({},this.Subject_Temp);

        this.Sub_Section_Temp.Sub_Section_Id = this.Course_.Sub_Section_Id;
        this.Sub_Section_Temp.Sub_Section_Name = this.Course_.Sub_Section;
        this.Sub_Section_ = Object.assign({},this.Sub_Section_Temp);

        this.Country_Temp.Country_Id = this.Course_.Country_Id;
        this.Country_Temp.Country_Name = this.Course_.Country;
        this.Country_ = Object.assign({},this.Country_Temp);



        // for (var i = 0; i < this.Intake_Data.length; i++) {
        //     if (this.Course_.Intake_Id== this.Intake_Data[i].Intake_Id)
        //     this.Intake_=this.Intake_Data[i];
        // }

        this.issLoading = false;
      },
      (Rows) => {
        this.issLoading = false;
        const dialogRef = this.dialogBox.open(DialogBox_Component, {
          panelClass: "Dialogbox-Class",
          data: { Message: "Error Occured", Type: "2" },
        });
      }
    );
  }
  	
	Search_University_Typeahead_Country(event: any) {
		

		if (
			this.Profile_Country_ == undefined ||
			this.Profile_Country_ == null ||
			this.Profile_Country_.Country_Id == undefined ||
			this.Profile_Country_.Country_Id == 0
		) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Select Country", Type: "3" },
			});
			return;
		}

		var Value = "";
		if (event.target.value == "") Value = "";
		else Value = event.target.value.toLowerCase();
		
		if (this.University_Data == undefined || this.University_Data.length == 0) {
			this.issLoading = true;
			
			this.University_Service_.Search_University_Typeahead_Country(Value,this.Profile_Country_.Country_Id).subscribe(
				(Rows) => {
					
					if (Rows != null) {
						this.University_Data = Rows[0];
						this.University_Data_Filter_2 = [];
						for (var i = 0; i < this.University_Data.length; i++) {
							if (
								this.University_Data[i].University_Name.toLowerCase().includes(
									Value
								)
							)
								this.University_Data_Filter_2.push(this.University_Data[i]);
						}
					}
					this.issLoading = false;
				},
				(Rows) => {
					this.issLoading = false;
				}
			);
		} else {
			this.University_Data_Filter_2 = [];
			for (var i = 0; i < this.University_Data.length; i++) {
				if (
					this.University_Data[i].University_Name.toLowerCase().includes(Value)
				)
					this.University_Data_Filter_2.push(this.University_Data[i]);
			}
		}
	}
	display_University_1(University_e: University) {
		if (University_e) {
			return University_e.University_Name;
		}
	}


	Country_Change1(){
		this.University_1=null;
		this.University_Data=[];
		this.University_Data_Filter_2=[];
		// this.Course_Data_Filter=[];
		// this.Department_Status_Data=[];
		// this.Department_Status_Data_Filter_2 = [];
	}

  Search_Country_Typeahead1(event: any) {
		var Value = "";
		if (event.target.value == "") Value = "";
		else Value = event.target.value.toLowerCase();

		if (this.Country_Data == undefined || this.Country_Data.length == 0) {
			this.issLoading = true;

			this.Country_Service_.Search_Country_Typeahead(Value).subscribe(
				(Rows) => {
          
					if (Rows != null) {
						this.Country_Data = Rows[0];
						this.Country_Data_Filter = [];
						for (var i = 0; i < this.Country_Data.length; i++) {
							if (
								this.Country_Data[i].Country_Name.toLowerCase().includes(Value)
							)
								this.Country_Data_Filter.push(this.Country_Data[i]);
						}
					}
					this.issLoading = false;
				},
				(Rows) => {
					this.issLoading = false;
				}
			);
		} else {
			this.Country_Data_Filter = [];
			for (var i = 0; i < this.Country_Data.length; i++) {
				if (this.Country_Data[i].Country_Name.toLowerCase().includes(Value))
					this.Country_Data_Filter.push(this.Country_Data[i]);
			}
		}
	}

    display_Country(Country_e: Country) {
		if (Country_e) {
			return Country_e.Country_Name;
		}
	}

  Selection_Click() {
    for (var i = 0; i < this.Intake_Data.length; i++) {
      if (this.Select_Selection == false)
        this.Intake_Data[i].Intake_Selection = true;
      else this.Intake_Data[i].Intake_Selection = false;
    }
  }

  Status_Click() {
    for (var i = 0; i < this.Intake_Data.length; i++) {
      if (this.Select_Status == false) this.Intake_Data[i].Intake_Status = true;
      else this.Intake_Data[i].Intake_Status = false;
    }
  }

  Get_Sub_Section_From_Course(Subject_Id) {
    this.issLoading = true;
    this.Sub_Section_Service_.Get_Sub_Section_From_Course(Subject_Id).subscribe(
      (Save_status) => {
        Save_status = Save_status[0];

        this.issLoading = false;
      },
      (Rows) => {
        this.issLoading = false;
        const dialogRef = this.dialogBox.open(DialogBox_Component, {
          panelClass: "Dialogbox-Class",
          data: { Message: "Error Occured", Type: "2" },
        });
      }
    );
  }
}
