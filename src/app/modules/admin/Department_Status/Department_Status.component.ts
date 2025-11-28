import {
  Component,
  OnInit,
  Input,
  Injectable,
  ErrorHandler,
} from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable, of as observableOf, merge, throwError } from "rxjs";
import { Department_Status_Service } from "../../../services/Department_Status.service";
import { DialogBox_Component } from "../DialogBox/DialogBox.component";
import { Department_Status } from "../../../models/Department_Status";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogConfig,
} from "@angular/material";
import { CATCH_ERROR_VAR } from "@angular/compiler/src/output/output_ast";
import { getParseErrors, syntaxError } from "@angular/compiler";
import { Message } from "@angular/compiler/src/i18n/i18n_ast";
import {
  ROUTES,
  Get_Page_Permission,
} from "../../../components/sidebar/sidebar.component";
//import { ConsoleReporter } from 'jasmine';
import { error } from "@angular/compiler/src/util";
import { Sub_Status } from "app/models/Sub_Status";
import { Status_Type } from "app/models/Status_Type";
import { Department } from "app/models/Department";
import { User_Details_Service } from "app/services/User_Details.service";
import { Class } from "app/models/Class";
import { Student_Service } from "app/services/Student.service";
import { StatusType } from "app/models/StatusType";
import { statusType } from "aws-sdk/clients/iam";

@Component({
  selector: "app-Department_Status",
  templateUrl: "./Department_Status.component.html",
  styleUrls: ["./Department_Status.component.css"],
})
export class Department_StatusComponent implements OnInit {
  Department_Status_Data: Department_Status[];
  Department_Status_: Department_Status = new Department_Status();
  Department_Status_Name_Search: string;
  Entry_View: boolean = true;
  Sub_Status_View: boolean = true;
  Status_View: boolean = true;
  EditIndex: number;
  Menu_Id: number = 16;
  color = "primary";
  mode = "indeterminate";
  value = 50;
  Total_Entries: Number;

  Order_Name_Search_: number;
  issLoading: boolean;
  Department_Status_Edit: boolean;
  Department_Status_Save: boolean;
  Department_Status_Delete: boolean;
  array: any;
  myInnerHeight: number;
  myTotalHeight: number;
  Login_User: string = "0";
  Permissions: any;
  Department_Status_Data1: Department_Status[];

  Sub_Status_Data: Sub_Status[];
  Sub_Status_: Sub_Status = new Sub_Status();
  Sub_Status_Search: string;

  // Status_Type_:number=0;
  StatusTypes: StatusType[];
  StatusTypes_Temp: StatusType = new StatusType()
  SelectedStatusType_: StatusType = new StatusType()
  Automatic_Department_Data: Department[];
  Automatic_Department_Data_Temp: Department = new Department();

  Automatic_Department_: Department = new Department();
  Search_Department_: Department = new Department();
  Search_Department1_: Department = new Department();
  Search_Transfer_Department_: Department = new Department();
  Notification_Department_: Department = new Department();

  Status_Type_: Status_Type = new Status_Type();
  Status_Type_Mode_: Status_Type = new Status_Type();
  Status_Type_Mode_Temp: Status_Type = new Status_Type();
  Status_Type_Mode_Data: Status_Type[];

  Class_: Class = new Class();
  Class_Mode_: Class = new Class();
  Class_Mode_Temp: Class = new Class();
  Class_Data: Class[];

  Status_Followup: number = 1;
  Application_Status_Followup: number = 1;

  Display_In: number = 1;

  Enable_Registration_Checkbox: boolean = true;
  Enable_Checkbox: number;
  Enable_Transfer_Status: number;

  departmentList = [];
  notificationDepartId: any = [];
  showDropdow = false;

  processStatusConfig = {}; // Define the type based on you
  index:number=0;

    processStatusDetailsFromChild: any;
  showChildComponent = false;
  progress: number = 0; // Percentage of progress

  constructor(
    public Department_Status_Service_: Department_Status_Service,
    public Student_Service_: Student_Service,
    public User_Details_Service_: User_Details_Service,
    private route: ActivatedRoute,
    private router: Router,
    public dialogBox: MatDialog
  ) {}
  ngOnInit() {
    this.Login_User = localStorage.getItem("Login_User");
    this.getDepartmentList();
    {
      this.Page_Load();
    }
  }

  // Function to get notification list
  // Function to get department dropdown
  getDepartmentList() {
    this.Department_Status_Service_.getDepartmentList().subscribe(
      (data) => {
        this.departmentList = data[0];
      },
      (err) => {
        this.departmentList = [];
      }
    );
  }

  // Function to open and close notification dropdown
  toggleNotificationDropdown() {
    this.showDropdow = !this.showDropdow;
  }

  redirectToCreateStatusTask(statusId: number, Department_Status) {
    // Share data through event emitter
    this.Department_Status_Service_.shareDepartment = Department_Status;

    // Navigate to details page
    this.router.navigate(["Status_Task", statusId]);
  }

  // Function to add notification department
  addNotificationToArray(event, department) {
    const ischecked = event.target.checked;
    if (ischecked) {
      this.notificationDepartId.push(department.Department_Id);
    } else {
      this.notificationDepartId = this.notificationDepartId.filter(
        (item) => item !== department.Department_Id
      );
    }

    console.log(this.notificationDepartId);
  }

  // Function to check notifications defaultly
  checkNotificationDefaultly(id) {
    try {
      for(let i of this.notificationDepartId) {
        if(id == i) {
          return true;
        }
      }
    } catch {
      return false;
    }
  }

  Page_Load() {
    this.Get_Menu_Status(16, this.Login_User);
    this.myInnerHeight = window.innerHeight;
    this.myTotalHeight = this.myInnerHeight;
    this.myTotalHeight = this.myTotalHeight - 90;
    this.myInnerHeight = this.myInnerHeight - 170;
       this.Clr_Department_Status();
    this.Load_StatusType();
 
    this.Search_Department_Status();
    this.Load_Automatic_Departments();
    this.Get_Student_PageLoadData_Dropdowns();

    this.Entry_View = false;
    this.Status_View = true;
    this.Sub_Status_View = true;
  }

  Get_Menu_Status(Menu_id, Login_user_id) {
    this.issLoading = false;
    this.Department_Status_Service_.Get_Menu_Status(
      Menu_id,
      Login_user_id
    ).subscribe(
      (Rows) => {
        if (Rows[0][0] == undefined) {
          if (Menu_id == 16) {
            localStorage.removeItem("token");
            this.router.navigateByUrl("Home_Page");
          }
        } else if (Rows[0][0].View > 0) {
          if (Menu_id == 16) {
            this.Permissions = Rows[0][0];
            if (this.Permissions == undefined || this.Permissions == null) {
              localStorage.removeItem("token");
              this.router.navigateByUrl("Home_Page");
            }

            this.Department_Status_Edit = this.Permissions.Edit;
            this.Department_Status_Save = this.Permissions.Save;
            this.Department_Status_Delete = this.Permissions.Delete;
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

  Create_New_Department_Status() {
        this.Clr_Department_Status();
    this.Entry_View = true;
    this.Status_View = false;
    this.Sub_Status_View = true;

  }

  Load_Automatic_Departments() {
    this.issLoading = true;
    this.User_Details_Service_.Get_Users_Load_Data().subscribe(
      (Rows) => {
       ;
        if (Rows != null) {
          console.log("Rows.Profile_Department", Rows.Profile_Department);
          
          this.Automatic_Department_Data = Rows.Profile_Department;
          console.log('this.Automatic_Department_Data: ', this.Automatic_Department_Data);

          this.Automatic_Department_Data_Temp.Department_Id = 0;
          this.Automatic_Department_Data_Temp.Department_Name = "Select";
          this.Automatic_Department_Data.unshift(
            this.Automatic_Department_Data_Temp
          );
          this.Notification_Department_ = this.Automatic_Department_Data[0];
          this.Automatic_Department_ = this.Automatic_Department_Data[1];
          console.log('this.Automatic_Department_: ', this.Automatic_Department_);
          this.Search_Department1_ = this.Automatic_Department_Data[0];
          this.Search_Transfer_Department_ = this.Automatic_Department_Data[0];

          // this.Automatic_Department_Data = Rows[0].slice();
          // this.Automatic_Department_Data_Temp.Department_Id = 0;
          // this.Automatic_Department_Data_Temp.Department_Name = "Select";
          // this.Automatic_Department_Data.unshift(Object.assign({}, this.Automatic_Department_Data_Temp));
          // this.Automatic_Department_ = this.Automatic_Department_Data[0];
          // this.Notification_Department_ = this.Automatic_Department_Data[0];
          // this.Notification_Department_ = Object.assign({}, this.Automatic_Department_Data[0])
        }
      },
      (Rows) => {
        this.issLoading = false;
      }
    );
  }

  Close_Click() {
        this.Clr_Department_Status();
    this.Entry_View = false;
    this.Status_View = true;
    this.Sub_Status_View = true;
    this.Clr_Sub_Status();

    // this.Status_Type_=0;
    this.notificationDepartId = null;
  }
  trackByFn(index, item) {
    return index;
  }

  Clr_Department_Status() {
    this.progress=0;
    this.Department_Status_.Department_Status_Id = 0;
    this.Department_Status_.Department_Status_Name = "";
    this.Department_Status_.Status_Order = 0;
    this.Department_Status_.Editable = false;
    this.Department_Status_.Sub_Order = 0;
    this.Department_Status_.Pictorial_Representation_Order = 0;
    this.Department_Status_.Color = "";
    this.Department_Status_.Transfer_Status = false;
    this.Department_Status_.Intake_Date_Year = false;
    this.Department_Status_.Public_Status = false;
    this.Department_Status_.Notification_Status = false;
    this.Department_Status_.Registration = false;
    this.Department_Status_.Registration_Mandatory = false;
    this.Department_Status_.Update_in_Profile = false;
    this.Department_Status_.FollowUp = true;
    this.Status_Followup = 1;
    this.Application_Status_Followup = 1;
    this.Display_In = 0;
    this.Department_Status_.Color_Type_Name="#f3f5f6"

    if (
      this.Automatic_Department_Data != null &&
      this.Automatic_Department_Data != undefined
    )
      this.Notification_Department_ = this.Automatic_Department_Data[0];

    if (
      this.Automatic_Department_Data != null &&
      this.Automatic_Department_Data != undefined
    )
      this.Automatic_Department_ = this.Automatic_Department_Data[0];

    if (
      this.Status_Type_Mode_Data != null &&
      this.Status_Type_Mode_Data != undefined
    )
      this.Status_Type_ = this.Status_Type_Mode_Data[0];

if(this.StatusTypes!=null && this.StatusTypes != undefined)
this.SelectedStatusType_=this.StatusTypes[0];
     

    if (this.Class_Data != null && this.Class_Data != undefined)
      this.Class_Mode_ = this.Class_Data[0];
    // this.Department_Status_.Status_Type_Id =0;
    // this.Status_Type_ =0;
  }
  show_Loader() {}
  hide_Loader() {}
  Search_Department_Status() {
    var dept_id = 0,
      transfer_dept_id = 0,Order_Name_Search=0;

      if (
        this.Order_Name_Search_ != undefined &&
        this.Order_Name_Search_ != null 
    )
    Order_Name_Search = this.Order_Name_Search_;

    if (
      this.Search_Department1_ != undefined &&
      this.Search_Department1_ != null
    )
      if (
        this.Search_Department1_.Department_Id != undefined &&
        this.Search_Department1_.Department_Id != null
      )
        dept_id = this.Search_Department1_.Department_Id;

    if (
      this.Search_Transfer_Department_ != undefined &&
      this.Search_Transfer_Department_ != null
    )
      if (
        this.Search_Transfer_Department_.Department_Id != undefined &&
        this.Search_Transfer_Department_.Department_Id != null
      )
        transfer_dept_id = this.Search_Transfer_Department_.Department_Id;

    this.Search_Department_.Department_Id;
    this.issLoading = true;
    debugger
    this.Department_Status_Service_.Search_Department_Status(
      this.Department_Status_Name_Search,
      dept_id,
      transfer_dept_id,Order_Name_Search
    ).subscribe(
      (Rows) => {
        debugger
        console.log("Rows>>>>>>>", Rows);
        
        this.Department_Status_Data = Rows[0];
        this.Total_Entries = this.Department_Status_Data.length;

        if (this.Department_Status_Data.length == 0) {
          const dialogRef = this.dialogBox.open(DialogBox_Component, {
            panelClass: "Dialogbox-Class",
            data: { Message: "No Details Found", Type: "3" },
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

  Delete_Department_Status(Department_Status_Id, index) {
    const dialogRef = this.dialogBox.open(DialogBox_Component, {
      panelClass: "Dialogbox-Class",
      data: {
        Message: "Do you want to delete ?",
        Type: "true",
        Heading: "Confirm",
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result == "Yes") {
        this.issLoading = true;
        this.Department_Status_Service_.Delete_Department_Status(
          Department_Status_Id
        ).subscribe(
          (Delete_status) => {
            if (Number(Delete_status[0][0].Department_Status_Id_) > 0) {
              this.Department_Status_Data.splice(this.EditIndex, 1);
              const dialogRef = this.dialogBox.open(DialogBox_Component, {
                panelClass: "Dialogbox-Class",
                data: { Message: "Deleted", Type: "false" },
              });
              this.Search_Department_Status();
            } else if (
              Number(Delete_status[0][0].Department_Status_Id_) == -2
            ) {
              const dialogRef = this.dialogBox.open(DialogBox_Component, {
                panelClass: "Dialogbox-Class",
                data: {
                  Message: "Already in Use, Cannot be Deleted!",
                  Type: "2",
                },
              });
            } else {
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









  handleProcessStatusDetails(data: any) {

    debugger
    this.processStatusDetailsFromChild = data;
    console.log('Received data from child component:', this.processStatusDetailsFromChild);
    this.Save_Department_Status();

  
  }
  handleCloseEvent() {
    // Handle the close event here (e.g., hide the child component or navigate back)
    this.showChildComponent = false;  // Hide child component
    this.router.navigate(['/Department_Status']);  // Navigate to the parent route (optional)
  }
  

  Show_Process_update(): void {
    const dialogRef = this.dialogBox.open(DialogBox_Component, {
      panelClass: 'Dialogbox-Class',
      data: {
        Message: 'Do you want to add this status To All Process?',
        Type: true,
        Heading: 'Confirm'
      },
      disableClose: true, // Optional: prevent closing the dialog by clicking outside
    });
  
    dialogRef.componentInstance.showCloseIcon = true; // Show the close icon
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'Yes') {
        debugger
        // User clicked 'Yes', perform the action to show the child component
        
        this.showChildComponent = true;
      } else if (result === 'No') {
        debugger;
        // User clicked 'No', save the department status
        this.Save_Department_Status();
      } else if (result === 'Close') {
        debugger;
        // User clicked 'Close', no further actions
        console.log('Dialog closed without actions.');
      }
    });
  }
  onClose() {
    this.showChildComponent = false;
    // Your logic to handle the close action
    // For example, navigate back or hide the child component
    console.log('Close button clicked, going back to parent component');
    // Implement your close logic here
  }
//   Save_Department_Status() {
//     this.Department_Status_.Status_Type_Id = this.Status_Type_.Status_Type_Id;
//     this.Department_Status_.Status_Type_Name =
//       this.Status_Type_.Status_Type_Name;
//     if (
//       this.Department_Status_.Department_Status_Name == undefined ||
//       this.Department_Status_.Department_Status_Name == null ||
//       this.Department_Status_.Department_Status_Name == ""
//     ) {
//       const dialogRef = this.dialogBox.open(DialogBox_Component, {
//         panelClass: "Dialogbox-Class",
//         data: { Message: "Enter Department Status", Type: "3" },
//       });
//       return;
//     }

//     if (this.Department_Status_.Transfer_Status == true) {
//       if (
//         this.Automatic_Department_.Department_Id == undefined ||
//         this.Automatic_Department_.Department_Id == null ||
//         this.Automatic_Department_.Department_Id == 0
//       ) {
//         const dialogRef = this.dialogBox.open(DialogBox_Component, {
//           panelClass: "Dialogbox-Class",
//           data: { Message: "Select Transfer Department", Type: "3" },
//         });
//         return;
//       }
//     }
//     if (this.Department_Status_.Notification_Status == true) {
//       if (
//         this.Notification_Department_.Department_Id == undefined ||
//         this.Notification_Department_.Department_Id == null ||
//         this.Notification_Department_.Department_Id == 0
//       ) {
//         const dialogRef = this.dialogBox.open(DialogBox_Component, {
//           panelClass: "Dialogbox-Class",
//           data: { Message: "Select Notification Department", Type: "3" },
//         });
//         return;
//       }
//     }
//     debugger
 
//     if (this.Status_Followup == 1) {
//       this.Department_Status_.FollowUp = true;
//     } else this.Department_Status_.FollowUp = false;

//     this.Department_Status_.Transfer_Department_Id =
//       this.Automatic_Department_.Department_Id;
//     this.Department_Status_.Transfer_Department_Name =
//       this.Automatic_Department_.Department_Name;

//     this.Department_Status_.Notification_Department_Id = JSON.stringify(this.notificationDepartId)
//     this.Department_Status_.Notification_Department_Name =
//       this.Notification_Department_.Department_Name;
//     this.Department_Status_.Display_In = this.Display_In;

//     this.Department_Status_.Class_Id = this.Class_Mode_.Class_Id;
//     this.Department_Status_.Class_Name = this.Class_Mode_.Class_Name;
//     this.Department_Status_.Class_Order = this.Class_Mode_.Class_Order;
//     debugger
//     this.Department_Status_.Dept_Status_Type_Id= this.SelectedStatusType_.Status_Type_Id;
//     this.Department_Status_.Dept_Status_Type_Name = this.SelectedStatusType_.Status_Type_Name;
//     if (
//       this.Department_Status_.Display_In == 2 ||
//       this.Department_Status_.Display_In == 0
//     ) {
//       this.Department_Status_.Update_in_Profile = true;
//     }

//     this.issLoading = true;
//     this.Department_Status_.Notification_Department_Id = JSON.stringify(this.notificationDepartId);
//     console.log(this.Department_Status_);
   

// debugger

//   // Only add process status details if they exist
//     if (this.processStatusDetailsFromChild) {
// this.Department_Status_.Insert_Not_Found =this.processStatusDetailsFromChild.Insert_Not_Found;
// this.Department_Status_.Process_Filer_Data =this.processStatusDetailsFromChild.Process_Filer_Data;
// this.Department_Status_.Process_Filer_Data_length =this.processStatusDetailsFromChild.Process_Filer_Data.length;
// this.Department_Status_.Process_Status_Data =this.processStatusDetailsFromChild.Process_Status_Data;
// this.Department_Status_.Process_Status_Data_length =this.processStatusDetailsFromChild.Process_Status_Data.length;

// this.Department_Status_.Country_Data =this.processStatusDetailsFromChild.Country_Data;
// this.Department_Status_.Country_Data_length =this.processStatusDetailsFromChild.Country_Data.length;
// this.Department_Status_.University_Data =this.processStatusDetailsFromChild.University_Filer_Data;
// this.Department_Status_.University_Data_length =this.processStatusDetailsFromChild.University_Filer_Data.length;

// // debugger
// // // Assuming `Process_Status_Data` is an array of objects
// // const processStatusData = this.processStatusDetailsFromChild.Process_Status_Data;

// // // Map the `Department_Status_Id` from each object and join them as a comma-separated string
// // this.Department_Status_.Process_Department_Status_Id = processStatusData
// //   .map(item => item.Department_Status_Id)  // Get the Department_Status_Id from each item
// //   .join(',');  // Join them into a string with commas

//     }


// debugger
    
//     this.Department_Status_Service_.Save_Department_Status(
//       this.Department_Status_
//     ).subscribe(
//       (Save_status) => {
//        debugger
//         this.issLoading = false;

//         // Remove selected notification department id
//         this.notificationDepartId = [];

//         Save_status = Save_status[0];
//         if (Save_status != undefined) {
//           if (Number(Save_status[0].Department_Status_Id_) > 0) {
//             const dialogRef = this.dialogBox.open(DialogBox_Component, {
//               panelClass: "Dialogbox-Class",
//               data: { Message: "Saved", Type: "false" },
//             });
//             document.getElementById("Save_Button").hidden = false;
//             this.showChildComponent = false;
//             this.Clr_Department_Status();
//             this.Search_Department_Status();
//           }
//         } else {
//           const dialogRef = this.dialogBox.open(DialogBox_Component, {
//             panelClass: "Dialogbox-Class",
//             data: { Message: "Error Occured", Type: "2" },
//           });
//           document.getElementById("Save_Button").hidden = false;
//         }
//         this.issLoading = false;
//       },
//       (Rows) => {
//         // Remove selected notification department id
//         this.notificationDepartId = null;

//         this.issLoading = false;
//         const dialogRef = this.dialogBox.open(DialogBox_Component, {
//           panelClass: "Dialogbox-Class",
//           data: { Message: "Error Occured", Type: "2" },
//         });
//         document.getElementById("Save_Button").hidden = false;
//       }
//     );
//   }

  Edit_Department_Status(Department_Status_e: Department_Status, index) {
    this.Entry_View = true;
    this.Status_View = false;
    this.Sub_Status_View = true;
    this.Department_Status_ = Department_Status_e;
    this.Department_Status_ = Object.assign({}, Department_Status_e);

    // Update selected notification department id in form
    if(typeof this.Department_Status_.Notification_Department_Id !== 'object') {
      this.notificationDepartId = [this.Department_Status_.Notification_Department_Id];
    } else {
      this.notificationDepartId = this.Department_Status_.Notification_Department_Id;
    }

    console.log(this.notificationDepartId);

    if (this.Department_Status_.FollowUp == true) {
      this.Status_Followup = 1;
    } else {
      this.Status_Followup = 0;
    }

    if (this.Department_Status_.Application_FollowUp == true) {
      this.Application_Status_Followup = 1;
    } else {
      this.Application_Status_Followup = 0;
    }

    if (this.Department_Status_.Display_In == 1) {
      this.Display_In = 1;
    } else if (this.Department_Status_.Display_In == 2) {
      this.Display_In = 2;
    } else this.Display_In = 0;

    this.Department_Status_.FollowUp = true;


    // for (var i = 0; i < this.Status_Type_Mode_Data.length; i++) {
    //   if (
    //     this.Department_Status_.Status_Type_Id ==
    //     this.Status_Type_Mode_Data[i].Status_Type_Id
    //   )
    //     this.Status_Type_ = this.Status_Type_Mode_Data[i];
    // }
    this.Automatic_Department_ = this.Automatic_Department_Data.find(
   
  dept => dept.Department_Id === this.Department_Status_.Transfer_Department_Id
);   console.log('this.Automatic_Department_ : ', this.Automatic_Department_ );
console.log(
  'Matching dept from Automatic_Department_Data:',
  this.Automatic_Department_Data.find(d => d.Department_Id === 328)
);

    // for (var i = 0; i < this.Automatic_Department_Data.length; i++) {
    //   if (
    //     this.Department_Status_.Transfer_Department_Id ==
    //     this.Automatic_Department_Data[i].Department_Id
     
    //   )
    //     this.Automatic_Department_ = this.Automatic_Department_Data[i];
    //        console.log('      this.Automatic_Department_Data[i].Department_Id: ',       this.Automatic_Department_Data[i].Department_Id);
    //     console.log('this.Automatic_Department_: ', this.Automatic_Department_);
    // }
    debugger
    // for (var i = 0; i < this.StatusTypes.length; i++) {
    //   if (
    //     this.Department_Status_.Dept_Status_Type_Id ==
    //     this.StatusTypes[i].Status_Type_Id
    //   )
    //     this.SelectedStatusType_ = this.StatusTypes[i];
    // }
 

for (var i = 0; i < this.StatusTypes.length; i++) {
  if (this.Department_Status_.Status_Type_Id == this.StatusTypes[i].Status_Type_Id)
  this.SelectedStatusType_=this.StatusTypes[i];
}

    
    for (var i = 0; i < this.Class_Data.length; i++) {
      if (this.Department_Status_.Class_Id == this.Class_Data[i].Class_Id)
        this.Class_Mode_ = this.Class_Data[i];
    }

  }

  Clr_Sub_Status() {
    this.Sub_Status_.Sub_Status_Id = 0;
    this.Sub_Status_.Sub_Status_Name = "";
    this.Sub_Status_.Duration = 0;
    this.Sub_Status_.FollowUp = "";
  }

  Add_Sub_Status(Department_Status_e: Department_Status, index) {
    this.Entry_View = true;
    this.Status_View = true;
    this.Sub_Status_View = false;
    this.Department_Status_ = Department_Status_e;
    this.Department_Status_ = Object.assign({}, Department_Status_e);
    this.Get_Sub_Status(this.Department_Status_.Department_Status_Id);
  }

  Get_Sub_Status(Department_Status_Id) {
    this.issLoading = true;

    this.Department_Status_Service_.Get_Sub_Status(
      Department_Status_Id
    ).subscribe(
      (Rows) => {
        this.issLoading = false;
        this.Department_Status_Data1 = Rows[0];
      },
      (Rows) => {
        this.issLoading = false;
        const dialogRef = this.dialogBox.open(DialogBox_Component, {
          panelClass: "Dialogbox-Class",
          data: { Message: "Error Occured", Type: false },
        });
      }
    );
  }

  Edit_Sub_Status(Sub_Status_e: Sub_Status, index) {
    this.Sub_Status_ = Sub_Status_e;
    this.Sub_Status_ = Object.assign({}, Sub_Status_e);
  }

  Delete_Sub_Status(Sub_Status_Id, index) {
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

        this.Department_Status_Service_.Delete_Sub_Status(
          Sub_Status_Id
        ).subscribe(
          (Delete_status) => {
            Delete_status = Delete_status[0];
            Delete_status = Delete_status[0].DeleteStatus_;
            this.Department_Status_Data1.splice(index, 1);
            if (Delete_status == 1) {
              this.Department_Status_Data1.splice(index, 1);
              const dialogRef = this.dialogBox.open(DialogBox_Component, {
                panelClass: "Dialogbox-Class",
                data: { Message: "Deleted", Type: "false" },
              });
              this.Get_Sub_Status(this.Department_Status_.Department_Status_Id);
            } else {
              this.issLoading = false;
              const dialogRef = this.dialogBox.open(DialogBox_Component, {
                panelClass: "Dialogbox-Class",
                data: { Message: "Cannot be Deleted", Type: "2" },
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
  Load_StatusType() {
    this.issLoading = true;
    this.Department_Status_Service_.Load_StatusType().subscribe(
      (Rows) => {
        if (Rows != null) {
          this.Status_Type_Mode_Data = Rows[0];
          this.Enable_Checkbox = Rows[1][0].Registration_By;
          this.Enable_Transfer_Status = Rows[1][0].Round_Robin;
          if (this.Enable_Checkbox == 2)
            this.Enable_Registration_Checkbox = true;
          else this.Enable_Registration_Checkbox = false;

          this.Status_Type_Mode_Temp.Status_Type_Id = 0;
          this.Status_Type_Mode_Temp.Status_Type_Name = "Select";
          this.Status_Type_Mode_Data.unshift(this.Status_Type_Mode_Temp);

          this.Status_Type_ = this.Status_Type_Mode_Data[0];
          this.issLoading = false;
        }
      },
      (Rows) => {
        this.issLoading = false;
      }
    );
  }

  Get_Student_PageLoadData_Dropdowns() {
    debugger
    this.Student_Service_.Get_Student_PageLoadData_Dropdowns().subscribe(
      (Rows) => {
        debugger
        this.Class_Data = Rows[14].slice();
        this.Class_Mode_Temp.Class_Id = 0;
        this.Class_Mode_Temp.Class_Name = "Select";
        this.Class_Data.unshift(Object.assign({}, this.Class_Mode_Temp));
        this.Class_Mode_ = this.Class_Data[0];


        this.StatusTypes = Rows[23].slice();
        this.StatusTypes_Temp.Status_Type_Id = 0;
        this.StatusTypes_Temp.Status_Type_Name = "Select";
        this.StatusTypes.unshift(Object.assign({}, this.StatusTypes_Temp));
        this.SelectedStatusType_ = this.StatusTypes[0];
      },
      (Rows) => {
        const dialogRef = this.dialogBox.open(DialogBox_Component, {
          panelClass: "Dialogbox-Class",
          data: { Message: "Error Occured", Type: "2" },
        });
      }
    );
  }

  Create_New121() {
    // Navigate to the Process_update page
    this.router.navigate(['/Department_Status_Process_update']);
  }
  Save_Department_Status() {
    console.log("Automatic_Department_",this.Automatic_Department_);
    
    console.log('Saving Department Status...', this.Department_Status_);
    
    debugger
    this.Department_Status_.Transfer_Department_Id = this.Automatic_Department_.Department_Id
    this.Department_Status_.Transfer_Department_Name = this.Automatic_Department_.Department_Name
    this.Department_Status_.Status_Type_Id = this.SelectedStatusType_.Status_Type_Id;
    console.log('this.Department_Status_.Status_Type_Id: ', this.Department_Status_.Status_Type_Id);
    this.Department_Status_.Status_Type_Name = this.SelectedStatusType_.Status_Type_Name;
    console.log('   this.Department_Status_.Status_Type_Name: ',    this.Department_Status_.Status_Type_Name);
  
    // Input validation checks (same as before)
    if (
      this.Department_Status_.Department_Status_Name == undefined ||
      this.Department_Status_.Department_Status_Name == null ||
      this.Department_Status_.Department_Status_Name == ""
    ) {
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "Enter Department Status", Type: "3" },
      });
      return;
    } 

    if (this.Application_Status_Followup == 1) {
      console.log('this.Application_Status_Followup : ', this.Application_Status_Followup );
  this.Department_Status_.Application_FollowUp = true;
} else {
  this.Department_Status_.Application_FollowUp = false;
}
  if(this.Status_Followup== 1){
 


this.Department_Status_.FollowUp=true
}
else
this.Department_Status_.FollowUp= false;
   console.log('this.Status_Followup: ', this.Status_Followup);
      console.log('this.Application_Status_Followup : ', this.Application_Status_Followup );
    // Other validation checks...
  debugger
    this.issLoading = true;
  // Automatic_Department_
    // Process Filer Data exists, prepare it for saving
    if (this.processStatusDetailsFromChild) {
      this.Department_Status_.Insert_Not_Found = this.processStatusDetailsFromChild.Insert_Not_Found;
      this.Department_Status_.Process_Filer_Data = this.processStatusDetailsFromChild.Process_Filer_Data;
      this.Department_Status_.Process_Filer_Data_length = this.processStatusDetailsFromChild.Process_Filer_Data.length;
      this.Department_Status_.Process_Status_Data = this.processStatusDetailsFromChild.Process_Status_Data;
      this.Department_Status_.Process_Status_Data_length = this.processStatusDetailsFromChild.Process_Status_Data.length;
      this.Department_Status_.Country_Data = this.processStatusDetailsFromChild.Country_Data;
      this.Department_Status_.Country_Data_length = this.processStatusDetailsFromChild.Country_Data.length;
      this.Department_Status_.University_Data = this.processStatusDetailsFromChild.University_Filer_Data;
      this.Department_Status_.University_Data_length = this.processStatusDetailsFromChild.University_Filer_Data.length;
      this.index = 0;
      this.split_import();
    }
  else{
debugger
      console.log("The datas that are sending to backend is", JSON.stringify(this.Department_Status_, null, 2));
    this.Department_Status_Service_.Save_Department_Status(this.Department_Status_).subscribe(
      (Save_status) => {
        this.issLoading = false;
        debugger
        this.Department_Status_.Department_Status_Id =Save_status[0][0].Department_Status_Id_;
  debugger
     
        
          // If all data has been saved, show success message
          const dialogRef = this.dialogBox.open(DialogBox_Component, {
            panelClass: "Dialogbox-Class",
            data: { Message: "Saved", Type: "false" },
          });
          this.notificationDepartId = [];
          document.getElementById("Save_Button").hidden = false;
          this.showChildComponent = false;
          
          this.Search_Department_Status();
       this.Clr_Department_Status();
      },
      (error) => {
        this.issLoading = false;
        const dialogRef = this.dialogBox.open(DialogBox_Component, {
          panelClass: "Dialogbox-Class",
          data: { Message: "Error Occurred", Type: "2" },
        });
        document.getElementById("Save_Button").hidden = false;
      }
    );
  }
    // Initialize the split import process
  
  }
  
  split_import() {
    debugger
    var i
    this.Department_Status_.Process_Filer_Data=[];
// for( i=this.index;i<this.index+200 && i<this.Student_Import_Details_Data.length ;i++)
for( i=this.index;i<this.index+5 && i<this.processStatusDetailsFromChild.Process_Filer_Data.length ;i++)
{
  this.Department_Status_.Process_Filer_Data.push(this.processStatusDetailsFromChild.Process_Filer_Data[i])
}
const totalLength = this.processStatusDetailsFromChild.Process_Filer_Data.length;
// this.index=this.index+200;
this.index=this.index+5;
this.issLoading = true;


    // const chunkSize = 5; // Number of records per chunk
    // const processFilerData = this.processStatusDetailsFromChild.Process_Filer_Data;
  
    // // Slice a chunk of data from Process_Filer_Data
    // const chunk = processFilerData.slice(this.index, this.index + chunkSize);
  
    // // Update the Process_Filer_Data to only contain the current chunk
    // this.Department_Status_.Process_Filer_Data = chunk;
  
    // // Call the service to save the chunk of data
    this.Department_Status_Service_.Save_Department_Status(this.Department_Status_).subscribe(
      (Save_status) => {
        this.issLoading = false;
        debugger
        this.Department_Status_.Department_Status_Id =Save_status[0][0].Department_Status_Id_;
  debugger
      // this.progress = Math.min((this.index / totalLength) * 100, 100);
      this.progress = Math.ceil(Math.min((this.index / totalLength) * 100, 100));

        // // If there are more records to save, update the index and continue
        // if (this.index + chunkSize < processFilerData.length) {
        //   this.index += chunkSize;
        //   this.split_import(); // Recursively call to save the next chunk
        // } 

        if(this.processStatusDetailsFromChild.Process_Filer_Data.length >this.index)
          {
            this.Department_Status_.Department_Status_Id =Save_status[0][0].Department_Status_Id_;
            this.split_import();
          }
        
        
        else {
          // If all data has been saved, show success message
          const dialogRef = this.dialogBox.open(DialogBox_Component, {
            panelClass: "Dialogbox-Class",
            data: { Message: "Saved", Type: "false" },
          });
          this.notificationDepartId = [];
          document.getElementById("Save_Button").hidden = false;
          this.showChildComponent = false;
          this.Clr_Department_Status();
          this.Search_Department_Status();
        }
      },
      (error) => {
        this.issLoading = false;
        const dialogRef = this.dialogBox.open(DialogBox_Component, {
          panelClass: "Dialogbox-Class",
          data: { Message: "Error Occurred", Type: "2" },
        });
        document.getElementById("Save_Button").hidden = false;
      }
    );
  }
  


}
