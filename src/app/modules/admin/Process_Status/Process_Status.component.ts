import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
// import { Department_Status_Service } from "../../../services/Department_Status.Service";
import { DialogBox_Component } from "../DialogBox/DialogBox.component";
import { Department_Status } from "../../../models/Department_Status";
import { MatDialog } from "@angular/material";

import { Sub_Status } from "app/models/Sub_Status";
import { Status_Type } from "app/models/Status_Type";
import { Department } from "app/models/Department";
// import { User_Details_Service } from "app/services/User_Details.Service";
import { Class } from "app/models/Class";
// import { Student_Service } from "app/services/Student.Service";
import { ProcessService } from "../../../services/Process.Service";
import { Department_Status_Service } from "app/services/Department_Status.service";
import { Student_Service } from "app/services/Student.service";
import { User_Details_Service } from "app/services/User_Details.service";
import { Task_Item } from "app/models/Task_Item";
import { Task_Detrails } from "app/models/Task_Detrails";
import { Check_List } from "app/models/Check_List";
import { Process_sub_status } from "app/models/Process_sub_status";
import { Process_Status_Details } from "app/models/Process_Status_Details";
import { Process_Department } from "app/models/Process_Department";
import { Process_Notification } from "app/models/Process_Notification";
import { Process_Check_List } from "app/models/Process_Check_List";
import { Process_Fields } from "app/models/Process_Fields";
import { Mandatory_task } from "app/models/Mandatory_task";
import { Fees } from "app/models/Fees";

@Component({
  selector: "app-Process_Status",
  templateUrl: "./Process_Status.component.html",
  styleUrls: ["./Process_Status.component.css"],
})
export class Process_StatusComponent implements OnInit {
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
  issLoading: boolean;
  Department_Status_Edit: boolean;
  Department_Status_Save: boolean;
  Department_Status_Delete: boolean;
  Edit_Process_Status_Name:string;
  array: any;
  myInnerHeight: number;
  myInnerHeightThree: number;
  myTotalHeight: number;
  Login_User: string = "0";
  Permissions: any;
  Department_Status_Data1: Department_Status[];

  Sub_Status_Data: Sub_Status[];
  Sub_Status_: Sub_Status = new Sub_Status();
  Sub_Status_Search: string;

  // Status_Type_:number=0;
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

  Display_In: number = 1;

  Enable_Registration_Checkbox: boolean = true;
  Enable_Checkbox: number;
  Enable_Transfer_Status: number;

  departmentList = [];
  notificationDepartId: any = [];
  showDropdow = false;

  processStatusList = [];
  editingDepartmentStatus: any;
  edintingDepartmentStatusId = null;
  edit = false;

  isDepartmentStatusSelected = {};
  isDocumentSelected = {};
  isCheckListSelected = {};
  isNotificationSelected = {};


  Department_Data:Department[];
  Department_Temp :Department = new Department();
  Department_ : Department = new Department();
  Department_Notification_:Department = new Department();

  Transfer_Department_Data :Department[];
  Transfer_Department_Temp :Department = new Department();
  Transfer_Department_ : Department = new Department();

  Fees_Data :Fees[];
  Fees_Temp :Fees = new Fees();
  Fees_ : Fees = new Fees();

  Task_Data:Task_Item[];
  Task_Temp :Task_Item = new Task_Item();
  Task_ : Task_Item = new Task_Item();


  Mandatory_Task_Data:Task_Item[];
  Mandatory_Task_Temp :Task_Item = new Task_Item();
  Mandatory_Task_ : Task_Item = new Task_Item();

  Task_Detrails_: Task_Detrails =  new Task_Detrails();
  TD_Details_Index_Sub_ : number =-1;
  Task_Details_Sub_Data: Task_Detrails[];

  Department_Status_Dropdown_Data: Department_Status[];
  Department_Status_Dropdown_: Department_Status = new Department_Status();
  Document_Data: Document[];
  Check_List_Data: Check_List[];
  Department_D_Data: Department[];

  Edit_Department_Status_Name:string;

  Process_sub_status_Data:Process_sub_status[]
  Process_sub_status_Data_Temp:Process_sub_status[]=[];
  newCheckedItems:Process_sub_status[];
  Process_sub_status_Data_checkbox_true:Process_sub_status[];

  Process_Status_Details_: Process_Status_Details = new Process_Status_Details();

  Process_Department_Data:Process_Department[]
  Process_Department_Data_Temp:Process_Department[]=[];
  Process_department_Data_checkbox_true:Process_Department[];
  newCheckedItems_Notification:Process_Department[];

  Process_Notification_Data:Process_Notification[]
  Process_Notification_Data_Temp:Process_Notification[]=[];

  Process_Document_checkbox_true:Process_Notification[];
  newCheckedItems_Document:Process_Notification[];


  Process_Check_List_Data:Process_Check_List[]
  Process_Check_List_Data_Temp:Process_Check_List[]=[];
  
  Process_Status_Details_id_: number;
  Process_id_: number;

  Department_Status_Id_: number;

  Process_Status_Details_Data:Process_Status_Details[];

  Process_Fields_Data:Process_Fields[];
    Process_Fields_Data_Temp:Process_Fields[]=[];

    Process_Fields_checkbox_true:Process_Fields[];
    newCheckedItems_Fields:Process_Fields[];

    Mandatory_Task_Detrails_: Mandatory_task =  new Mandatory_task();
    MTD_Details_Index_Sub_ : number =-1;
    MTask_Details_Sub_Data: Mandatory_task[]=[];

    Process_status_Name_Search: string;
    Department_Status_Mode_Data1: Department_Status[];
    Department_Status_Mode_Data1_Filter: Department_Status[];
    filteredNotificationDepartments: any[] = [];

    showChildComponent = false;
    processStatusConfig = {}; // Define the type based on you

    processStatusDetailsFromChild: any;

  constructor(
    public Department_Status_Service_: Department_Status_Service,
    public Student_Service_: Student_Service,
    public User_Details_Service_: User_Details_Service,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public dialogBox: MatDialog,
    private processService: ProcessService
  ) {}
  ngOnInit() {
    this.Login_User = localStorage.getItem("Login_User");
       this.getDepartmentList();

    // Call the function to get process id from route
    // after getting it. get process status list
    this.getProcessIdFromRoute();


    this.Page_Load();
    // this.Search_Process_department_Details(this.editingDepartmentStatus.Department_Status_Id,this.editingDepartmentStatus.processId)


  }


  Page_Load() {
    this.Get_Student_PageLoadData_Dropdowns();

    this.Task_Details_Sub_Data = [];

    this.myInnerHeight = window.innerHeight;
	
		this.myInnerHeight = this.myInnerHeight - 290;


    this.myInnerHeightThree = this.myInnerHeight - -80;

    
    // this.Search_Department_Status();  
    
    this.Search_Department_Status();
    this.Search_Document();    
    this.Search_Check_list();
    this.Search_Notification();

    // this.editProcessStatus();
		
  }

  // Function to retrive process id from activated route
  getProcessIdFromRoute() {
    debugger
    // Subscribe to parmas to get process id from route
    this.activatedRoute.paramMap.subscribe((params) => {
      debugger
      const processId = params.get("processId");
      this.getDepartmentStatusDetailsProcessId(processId);
  });

  // Extract query parameters
  this.activatedRoute.queryParams.subscribe((queryParams) => {
    debugger
      this.Edit_Process_Status_Name = queryParams["Process_Name"];
  });
  }

  // Function to get status list by process id
  getDepartmentStatusDetailsProcessId(processId) {
   this.issLoading=true
    this.processService.getProcessStatusListByProcessId(processId).subscribe(
      (next: any) => {
       
        this.processStatusList = next.data;
        this.issLoading=false

    
      },
      (err) => {
        console.log(err);
      }
    );
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
  

  clearAllCheckBox(checkbox){
    switch (checkbox){

      // case 'DataField':
      //   if(!this.Process_Status_Details_.Data_Fields){
      //     this.Process_Fields_Data.forEach(doc=>{
      //       doc.checkbox_view=false
      //       doc.checkbox_view_new=false
           
      //     })
      //   }
      //   break;
    //   case 'Notification':
    //     if(!this.Process_Status_Details_.Notification){
    //       this.Process_Department_Data.forEach(doc=>{
    //         doc.checkbox_view=false
           
    //       })
    //     }
    //     break;

    // case 'Document':
    // if(!this.Process_Status_Details_.Document_view){
    //   this.Process_Notification_Data.forEach(doc=>{
    //     doc.checkbox_view=false
    //     doc.checkbox_view_new=false
    //   })
    // }
    // break;
    
    case 'Task':
if(!this.Process_Status_Details_.Task_new){


  this.Task_Details_Sub_Data=[]
  this.clr_Task_details();
}
break;
case 'MandatoryTask':
  if(!this.Process_Status_Details_.Mandatory_Task){
  
  
    this.MTask_Details_Sub_Data=[]
    //this.clr_Task_details();
  }
  break;
  
  }
  }


  clearAllCheckBox3(checkbox){
    debugger
    switch (checkbox){

      case 'DataField':
        if(!this.Process_Status_Details_.Data_Fields){
          this.Process_Fields_Data.forEach(doc1=>{
            doc1.checkbox_view1=false
            doc1.checkbox_view_new2=false
           
          })
        }
        break;
    //   case 'Notification':
    //     if(!this.Process_Status_Details_.Notification){
    //       this.Process_Department_Data.forEach(doc=>{
    //         doc.checkbox_view=false
           
    //       })
    //     }
    //     break;

    // case 'Document':
    // if(!this.Process_Status_Details_.Document_view){
    //   this.Process_Notification_Data.forEach(doc=>{
    //     doc.checkbox_view=false
    //     doc.checkbox_view_new=false
    //   })
    // }
    // break;
    
//     case 'Task':
// if(!this.Process_Status_Details_.Task_new){


//   this.Task_Details_Sub_Data=[]
//   this.clr_Task_details();
// }
// break;
// case 'MandatoryTask':
//   if(!this.Process_Status_Details_.Mandatory_Task){
  
  
//     this.MTask_Details_Sub_Data=[]
//     //this.clr_Task_details();
//   }
//   break;
  
  }
  }


  clearAllCheckBox1(checkbox){
    switch (checkbox){

      // case 'DataField':
      //   if(!this.Process_Status_Details_.Data_Fields){
      //     this.Process_Fields_Data.forEach(doc=>{
      //       doc.checkbox_view=false
      //       doc.checkbox_view_new=false
           
      //     })
      //   }
      //   break;
      case 'Notification':
        if(!this.Process_Status_Details_.Notification){
          this.Process_Department_Data.forEach(doc2=>{
            doc2.checkbox_view3=false
           
          })
        }
        break;

//     case 'Document':
//     if(!this.Process_Status_Details_.Document_view){
//       this.Process_Notification_Data.forEach(doc=>{
//         doc.checkbox_view=false
//         doc.checkbox_view_new=false
//       })
//     }
//     break;
    
//     case 'Task':
// if(!this.Process_Status_Details_.Task_new){


//   this.Task_Details_Sub_Data=[]
//   this.clr_Task_details();
// }
// break;
// case 'MandatoryTask':
//   if(!this.Process_Status_Details_.Mandatory_Task){
  
  
//     this.MTask_Details_Sub_Data=[]
//     //this.clr_Task_details();
//   }
//   break;
  
  }
  }


  
  clearAllCheckBox2(checkbox){
    switch (checkbox){

      // case 'DataField':
      //   if(!this.Process_Status_Details_.Data_Fields){
      //     this.Process_Fields_Data.forEach(doc=>{
      //       doc.checkbox_view=false
      //       doc.checkbox_view_new=false
           
      //     })
      //   }
      //   break;
      // case 'Notification':
      //   if(!this.Process_Status_Details_.Notification){
      //     this.Process_Department_Data.forEach(doc=>{
      //       doc.checkbox_view=false
           
      //     })
      //   }
      //   break;

    case 'Document':
    if(!this.Process_Status_Details_.Document_view){
      this.Process_Notification_Data.forEach(doc3=>{
        doc3.checkbox_view4=false
        doc3.checkbox_view_new5=false
      })
    }
    break;
    
//     case 'Task':
// if(!this.Process_Status_Details_.Task_new){


//   this.Task_Details_Sub_Data=[]
//   this.clr_Task_details();
// }
// break;
// case 'MandatoryTask':
//   if(!this.Process_Status_Details_.Mandatory_Task){
  
  
//     this.MTask_Details_Sub_Data=[]
//     //this.clr_Task_details();
//   }
//   break;
  
  }
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
      for (let i of this.notificationDepartId) {
        if (id == i) {
          return true;
        }
      }
    } catch {
      return false;
    }
  }

  // Function to go back to process
  goBackToDepartmentDetails() {
    this.router.navigateByUrl("Process");
  }

  // To open editing page
  editProcessStatus(departmentStatus: any) {
    
    debugger 
    // assign editing data to variable
    this.editingDepartmentStatus = departmentStatus;

    this.Edit_Department_Status_Name=this.editingDepartmentStatus.Department_Status_Name

    console.log(this.editingDepartmentStatus); 
 
this.issLoading=true;
this.processService.Search_Process_department_Details_contain(this.editingDepartmentStatus.Department_Status_Id,this.editingDepartmentStatus.processId).subscribe(
  (Rows) => {
    
    debugger
    console.log('Rows[0]: ', Rows[0]);
    this.Process_Status_Details_Data = Rows[0];
    this.issLoading=false;
    if(Rows[0].length>0)
    {
    this.Process_Status_Details_=Rows[0][0];
    if (this.Process_Status_Details_Data[0].Registration_Mandatory == true)
    this.Process_Status_Details_.Registration_Mandatory = true;
  else this.Process_Status_Details_.Registration_Mandatory= false;
    if (this.Process_Status_Details_Data[0].Fees_Mandatory == true)
    this.Process_Status_Details_.Fees_Mandatory = true;
  else this.Process_Status_Details_.Fees_Mandatory= false;
  if (this.Process_Status_Details_Data[0].Notification == true)
  this.Process_Status_Details_.Notification = true;
  else this.Process_Status_Details_.Notification= false;
  if (this.Process_Status_Details_Data[0].Transfer_Status == true)
  this.Process_Status_Details_.Transfer_Status = true;
  else this.Process_Status_Details_.Transfer_Status= false;
  if (this.Process_Status_Details_Data[0].Task_new == true)
  this.Process_Status_Details_.Task_new = true;
  else this.Process_Status_Details_.Task_new= false;
  if (this.Process_Status_Details_Data[0].Document_view == true)
  this.Process_Status_Details_.Document_view = true;
  else this.Process_Status_Details_.Document_view= false;
  if (this.Process_Status_Details_Data[0].CheckList == true)
  this.Process_Status_Details_.CheckList = true;
  else this.Process_Status_Details_.CheckList= false;
  if (this.Process_Status_Details_Data[0].Sub_Status == true)
  this.Process_Status_Details_.Sub_Status = true;
  else this.Process_Status_Details_.Sub_Status= false;
  if (this.Process_Status_Details_Data[0].Update_in_Profile == true)
  this.Process_Status_Details_.Update_in_Profile = true;
  else this.Process_Status_Details_.Update_in_Profile= false;
  if (this.Process_Status_Details_Data[0].Sub_Status == true)
  this.Process_Status_Details_.Sub_Status = true;
  else this.Process_Status_Details_.Sub_Status= false;
  if (this.Process_Status_Details_Data[0].Update_in_Profile == true)
  this.Process_Status_Details_.Update_in_Profile = true;
  else this.Process_Status_Details_.Update_in_Profile= false;

  if (this.Process_Status_Details_Data[0].Data_Fields == true)
  this.Process_Status_Details_.Data_Fields = true;
  else this.Process_Status_Details_.Data_Fields= false;


  if (this.Process_Status_Details_Data[0].Mandatory_Task == true)
  this.Process_Status_Details_.Mandatory_Task = true;
  else this.Process_Status_Details_.Mandatory_Task= false;


  }



for (var i = 0; i < this.Transfer_Department_Data.length; i++) {
  if (
    this.Process_Status_Details_.Transfer_Department_Id ==
    this.Transfer_Department_Data[i].Department_Id
  )
    this.Transfer_Department_ = this.Transfer_Department_Data[i];
}

for (var i = 0; i < this.Fees_Data.length; i++) {
  if (
    this.Process_Status_Details_.Fees_Id ==
    this.Fees_Data[i].Fees_Id
  )
    this.Fees_ = this.Fees_Data[i];
}




for (var i = 0; i < this.Class_Data.length; i++) {
  if (
    this.Process_Status_Details_.Class_Id ==
    this.Class_Data[i].Class_Id
  )
    this.Class_Mode_ = this.Class_Data[i];
}


debugger

    this.Process_sub_status_Data = Rows[1];
   ;


  //  if (Process_sub_status_Data.checkbox_view) {
  //   // Add the checked item to the new array if it's checked
  //   this.newCheckedItems.push(departmentStatus);
  // } 

  this.Process_sub_status_Data_checkbox_true = [];

    for (let i = 0; i < this.Process_sub_status_Data.length; i++) {
      if (this.Process_sub_status_Data[i].checkbox_view.toString() === '1') {
        this.Process_sub_status_Data_checkbox_true.push(this.Process_sub_status_Data[i]);
      }
    }
console.log(this.Process_sub_status_Data_checkbox_true,'this.Process_sub_status_Data_checkbox_true')
    // for(var i=0;i<this.Process_sub_status_Data.length;i++)
    // {
    // if (this.Process_sub_status_Data[i].checkbox_view.toString()=='1')
    // {
    // this.Process_sub_status_Data[i].checkbox_view=true
    // }
    // else 
    // {
    // this.Process_sub_status_Data[i].checkbox_view=false
    // }
    // }






    this.Process_Department_Data = Rows[2];

    this.Process_department_Data_checkbox_true = [];

    for (let i = 0; i < this.Process_Department_Data.length; i++) {
      if (this.Process_Department_Data[i].checkbox_view3.toString() === '1') {
        this.Process_department_Data_checkbox_true.push(this.Process_Department_Data[i]);
      }
    }
console.log(this.Process_department_Data_checkbox_true,'this.Process_department_Data_checkbox_true')


    this.Automatic_Department_Data=Rows[2];
    this.Task_Details_Sub_Data = Rows[3];
    this.Process_Notification_Data = Rows[4];

    this.Process_Document_checkbox_true = [];

    for (let i = 0; i < this.Process_Notification_Data.length; i++) {
      if (this.Process_Notification_Data[i].checkbox_view4.toString() === '1' ||this.Process_Notification_Data[i].checkbox_view_new5.toString() === '1') {
        this.Process_Document_checkbox_true.push(this.Process_Notification_Data[i]);
      }
    }
console.log(this.Process_Document_checkbox_true,'this.Process_Document_checkbox_true')


    this.Process_Check_List_Data = Rows[5];
    this.Process_Fields_Data = Rows[6];

    this.Process_Fields_checkbox_true = [];

    for (let i = 0; i < this.Process_Fields_Data.length; i++) {
      if (this.Process_Fields_Data[i].checkbox_view1.toString() === '1' ||this.Process_Fields_Data[i].checkbox_view_new2.toString() === '1') {
        this.Process_Fields_checkbox_true.push(this.Process_Fields_Data[i]);
      }
    }
console.log(this.Process_Fields_checkbox_true,'this.Process_Fields_checkbox_true')




    this.MTask_Details_Sub_Data = Rows[7];



  },
  (Rows) => {
    this.issLoading = false;
  }
);



// this.Search_Process_department_Details(this.editingDepartmentStatus.Department_Status_Id,this.editingDepartmentStatus.processId)

    // this.Search_Department_Status();    
    // this.Search_Document();    
    // this.Search_Check_list();
    // this.Search_Notification();
    


    // open the editing form
    this.edit = true;    
    // this.editProcessStatus1(this.Process_Status_Details_)

    

  }



  // editProcessStatus1(Process_Status_Details_e: Process_Status_Details) {
  //    this.Process_Status_Details_ = Process_Status_Details_e;
  //       this.Process_Status_Details_ = Object.assign({}, Process_Status_Details_e);    
  //       this.edit = true;
  //       this.Process_Status_Details_.Class_Id = this.Class_Mode_.Class_Id
  //       this.Process_Status_Details_.Class_Name = this.Class_Mode_.Class_Name;
  //       this.Process_Status_Details_.Department_Status_Id= this.editingDepartmentStatus.Department_Status_Id;
  //       this.Process_Status_Details_.Department_Status_Name= this.editingDepartmentStatus.Department_Status_Name;
  //       this.Process_Status_Details_.Followup = this.editingDepartmentStatus.Followup;
  //   for (var i = 0; i < this.Class_Data.length; i++)
  //     if (
  //       this.Class_Data[i].Class_Id == this.Process_Status_Details_.Class_Id
  //     )
  //       this.Class_Mode_ = this.Class_Data[i];
  // }
  // Function to open and close notification dropdown

  toggleNotificationDropdown() {
    this.showDropdow = !this.showDropdow;
  }

  // Function to hide edit page and show list page
  Close_Click() {
    this.edit = false;
    this.Task_Details_Sub_Data = [];
    this.clr_process_department_status();

  }

  // Function to save department status
  // And update process status
  // Save_Department_Status() {
  //   // Save editing process status id
  //  
  //   this.edintingDepartmentStatusId = this.editingDepartmentStatus.id;

  //   // Delete department status id to prevent updation process from
  //   delete this.editingDepartmentStatus.Department_Status_Id;

  //   // Save selected notification department in request object
  //   this.editingDepartmentStatus.Notification_Department_Id = JSON.stringify(
  //     this.notificationDepartId
  //   );

  //   // Save current data
  //  
  //   this.Department_Status_Service_.Save_Department_Status(
  //     this.editingDepartmentStatus
  //   ).subscribe(
  //     (Save_status) => {
  //      
  //       // Update in process status table
  //       if (Save_status[0].length) {
  //         // Send process status updation request after completing department status updation
  //         this.processService
  //           .updateProcessStatus(
  //             Save_status[0][0].Department_Status_Id_,
  //             this.edintingDepartmentStatusId
  //           )
  //           .subscribe(
  //             (data) => {},
  //             (err) => {
  //               console.log(err);
  //             }
  //           );
  //       }
  //       this.issLoading = false;

  //       // Remove selected notification department id
  //       this.notificationDepartId = [];

  //       Save_status = Save_status[0];

  //       if (Save_status != undefined) {
  //         // Show a success message if updation completed successfully
  //         if (Number(Save_status[0].Department_Status_Id_) > 0) {
  //           const dialogRef = this.dialogBox.open(DialogBox_Component, {
  //             panelClass: "Dialogbox-Class",
  //             data: { Message: "Saved", Type: "false" },
  //           });

  //           // Show save button againe
  //           document.getElementById("Save_Button").hidden = false;
  //         }
  //       } else {
  //         // Show an error messa if updation failed
  //         const dialogRef = this.dialogBox.open(DialogBox_Component, {
  //           panelClass: "Dialogbox-Class",
  //           data: { Message: "Error Occured", Type: "2" },
  //         });

  //         // Show save button agane
  //         document.getElementById("Save_Button").hidden = false;
  //       }

  //       // Stope spinner
  //       this.issLoading = false;

  //       // Close editing tab
  //       this.Close_Click();
  //     },
  //     (Rows) => {
  //       // Remove selected notification department id
  //       this.notificationDepartId = null;

  //       // Stope spinner
  //       this.issLoading = false;

  //       // Show an error meessage if updation failed
  //       const dialogRef = this.dialogBox.open(DialogBox_Component, {
  //         panelClass: "Dialogbox-Class",
  //         data: { Message: "Error Occured", Type: "2" },
  //       });

  //       // Show save button agane
  //       document.getElementById("Save_Button").hidden = false;
        
  //       // Close editing tab
  //       this.Close_Click();
  //     }
  //   );
  // }

  Get_Student_PageLoadData_Dropdowns() {
   
    this.Student_Service_.Get_Student_PageLoadData_Dropdowns().subscribe(
      (Rows) => {
       debugger
        this.Class_Data = Rows[14].slice();
        this.Class_Mode_Temp.Class_Id = 0;
        this.Class_Mode_Temp.Class_Name = "Select";
        this.Class_Data.unshift(Object.assign({}, this.Class_Mode_Temp));
        this.Class_Mode_ = this.Class_Data[0];

        this.Department_Data = Rows[19].slice();
				this.Department_Temp.Department_Id = 0;
				this.Department_Temp.Department_Name = "Select";
				this.Department_Data.unshift(Object.assign({}, this.Department_Temp));
				this.Department_ = this.Department_Data[0];

        this.Task_Data = Rows[20].slice();
				this.Task_Temp.Task_Item_Id = 0;
				this.Task_Temp.Task_Item_Name = "Select";
				this.Task_Data.unshift(Object.assign({}, this.Task_Temp));
				this.Task_ = this.Task_Data[0];


        this.Mandatory_Task_Data = Rows[20].slice();
				this.Mandatory_Task_Temp.Task_Item_Id = 0;
				this.Mandatory_Task_Temp.Task_Item_Name = "Select";
				this.Mandatory_Task_Data.unshift(Object.assign({}, this.Mandatory_Task_Temp));
				this.Mandatory_Task_ = this.Mandatory_Task_Data[0];


        this.Transfer_Department_Data = Rows[19].slice();
				this.Transfer_Department_Temp.Department_Id = 0;
				this.Transfer_Department_Temp.Department_Name = "Select";
				this.Transfer_Department_Data.unshift(Object.assign({}, this.Transfer_Department_Temp));
				this.Transfer_Department_ = this.Transfer_Department_Data[0];

        this.Automatic_Department_Data = Rows[19].slice();
				this.Automatic_Department_Data_Temp.Department_Id = 0;
				this.Automatic_Department_Data_Temp.Department_Name = "Select";
				this.Automatic_Department_Data.unshift(Object.assign({}, this.Automatic_Department_Data_Temp));
				this.Automatic_Department_ = this.Automatic_Department_Data[0];


        this.Department_Data = Rows[19].slice();
				this.Department_Temp.Department_Id = 0;
				this.Department_Temp.Department_Name = "Select";
				this.Department_Data.unshift(Object.assign({}, this.Department_Temp));
				this.Department_Notification_ = this.Department_Data[0];


        this.Fees_Data = Rows[29].slice();
				this.Fees_Temp.Fees_Id = 0;
				this.Fees_Temp.Fees_Name = "Select";
				this.Fees_Data.unshift(Object.assign({}, this.Fees_Temp));
				this.Fees_ = this.Fees_Data[0];

      },
      (Rows) => {
        const dialogRef = this.dialogBox.open(DialogBox_Component, {
          panelClass: "Dialogbox-Class",
          data: { Message: "Error Occured", Type: "2" },
        });
      }
    );
  }

 


  Add_Task_Details(){
debugger
    // if (
    //   this.Department_ == undefined ||
    //   this.Department_ == null ||
    //   this.Department_.Department_Id == 0 ||
    //   this.Department_.Department_Id == null
    // ) {
    //   const dialogRef = this.dialogBox.open(DialogBox_Component, {
    //     panelClass: "Dialogbox-Class",
    //     data: { Message: "Select Department", Type: "3" },
    //   });
    //   return;
    // }
    if (
      this.Task_ == undefined ||
      this.Task_ == null ||
      this.Task_.Task_Item_Id == 0 ||
      this.Task_.Task_Item_Id == null
    ) {
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "Select Task", Type: "3" },
      });
      return;
    }

debugger
    if(this.Department_.Department_Id ==0)
    {
      this.Task_Detrails_.Department_Name =''
    }

    this.Task_Detrails_.Department_Id =
      this.Department_.Department_Id;
    this.Task_Detrails_.Department_Name =
    this.Department_.Department_Name;


      this.Task_Detrails_.Task_Item_Id =
      this.Task_.Task_Item_Id;
    this.Task_Detrails_.Task_Item_Name =
      this.Task_.Task_Item_Name;



    //   this.Task_Detrails_.Department_Id =
    //   this.Task_.Notification_Department_Id;
    // this.Task_Detrails_.Department_Name =
    //   this.Task_.Notification_Department_Name;
    // if (
    //   this.Department_Notification_ == undefined ||
    //   this.Department_Notification_ == null ||
    //   this.Department_Notification_.Department_Id == 0 ||
    //   this.Department_Notification_.Department_Id == null
    // ) {
    //   const dialogRef = this.dialogBox.open(DialogBox_Component, {
    //     panelClass: "Dialogbox-Class",
    //     data: { Message: "Select Department", Type: "3" },
    //   });
    //   return;
    // }
    debugger
    // if(this.Department_Notification_.Department_Id ==0)
    //   {
    //     // this.Task_Detrails_.Notification_Department_Id =0
    //     this.Task_Detrails_.Notification_Department_Name =''
    //   }
      this.Task_Detrails_.Notification_Department_Id =
      this.Department_Notification_.Department_Id;
    this.Task_Detrails_.Notification_Department_Name =
      this.Department_Notification_.Department_Name;



      if (this.TD_Details_Index_Sub_ >= 0) {
        this.Task_Details_Sub_Data[this.TD_Details_Index_Sub_] =
          Object.assign({}, this.Task_Detrails_);
      } else {
        this.Task_Details_Sub_Data.push(
          Object.assign({}, this.Task_Detrails_)
        );
      }
      this.TD_Details_Index_Sub_ = -1;

      this.clr_Task_details();

    
  }

  Edit_Task_Details(
    Task_Details_e: Task_Detrails,
    index
  ) {
   ;
   debugger

    this.TD_Details_Index_Sub_ = index;
    this.Task_Detrails_ = Object.assign(
      {},
      Task_Details_e
    );

    for (var m = 0; m < this.Department_Data.length; m++) {
      if (
        this.Task_Detrails_.Department_Id ==
        this.Department_Data[m].Department_Id
      )
        this.Department_ = this.Department_Data[m];
    }
debugger

this.filteredNotificationDepartments = this.Department_Data

    for (var m = 0; m < this.filteredNotificationDepartments.length; m++) {
      if (
        this.Task_Detrails_.Notification_Department_Id ==
        this.filteredNotificationDepartments[m].Department_Id
      )
        this.Department_Notification_ = this.filteredNotificationDepartments[m];
    }
    console.log(this.Department_Notification_,"Department_Notification_");
    
    for (var m = 0; m < this.Task_Data.length; m++) {
      if (
        this.Task_Detrails_.Task_Item_Id ==
        this.Task_Data[m].Task_Item_Id
      )
        this.Task_ = this.Task_Data[m];
    }
  }

  Delete_Task_Details(index) {
    this.Task_Details_Sub_Data.splice(index, 1);
    this.issLoading = false;

    this.clr_Task_details();
  }

  clr_Task_details(){

debugger
    if (this.Department_Data != null && this.Department_Data != undefined)
    this.Department_ = this.Department_Data[0];


    
    if (this.Department_Data != null && this.Department_Data != undefined)
      this.Department_Notification_ = this.Department_Data[0];


    if (this.Task_Data != null && this.Task_Data != undefined)
    this.Task_ = this.Task_Data[0];

    this.Task_Detrails_.Duration =0;
    // this.Task_Detrails_.Notification_Department_Id=0;
  }



  Add_Mandatory_Task_Details(){


   
   
    if (
      this.Mandatory_Task_ == undefined ||
      this.Mandatory_Task_ == null ||
      this.Mandatory_Task_.Task_Item_Id == 0 ||
      this.Mandatory_Task_.Task_Item_Id == null
    ) {
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "Select Mandatory Task", Type: "3" },
      });
      return;
    }





      this.Mandatory_Task_Detrails_.Task_Item_Id =
      this.Mandatory_Task_.Task_Item_Id;
    this.Mandatory_Task_Detrails_.Task_Item_Name =
      this.Mandatory_Task_.Task_Item_Name;





 

      if (this.MTD_Details_Index_Sub_ >= 0) {
        this.MTask_Details_Sub_Data[this.MTD_Details_Index_Sub_] =
          Object.assign({}, this.Mandatory_Task_Detrails_);
      } else {
        this.MTask_Details_Sub_Data.push(
          Object.assign({}, this.Mandatory_Task_Detrails_)
        );
      }
      this.MTD_Details_Index_Sub_ = -1;

      this.clr_Mandatory_Task_details();

  }


  clr_Mandatory_Task_details(){


   

    if (this.Mandatory_Task_Data != null && this.Mandatory_Task_Data != undefined)
    this.Mandatory_Task_ = this.Mandatory_Task_Data[0];
  }

  Edit_Mandatory_Task_Details(
    Mandatory_Task_Details_e: Mandatory_task,
    index
  ) {
   ;

    this.MTD_Details_Index_Sub_ = index;
    this.Mandatory_Task_Detrails_ = Object.assign(
      {},
      Mandatory_Task_Details_e
    );

  
    for (var m = 0; m < this.Mandatory_Task_Data.length; m++) {
      if (
        this.Mandatory_Task_Detrails_.Task_Item_Id ==
        this.Mandatory_Task_Data[m].Task_Item_Id
      )
        this.Mandatory_Task_ = this.Mandatory_Task_Data[m];
    }
  }

  Delete_MandatoryTask_Details(index) {
    this.MTask_Details_Sub_Data.splice(index, 1);
    this.issLoading = false;

    this.clr_Mandatory_Task_details();
  }





Search_Department_Status() {
  this.processService.Search_Department_Status_new("").subscribe(
    (Rows) => {

    
      //this.Process_sub_status_Data = Rows[0];
    },
    (Rows) => {
      this.issLoading = false;
    }
  );
}

// Function to check is status selected
isDepartmentStatusCheckd(departmentStatus) {
  try {
    if (
      this.isDepartmentStatusSelected[departmentStatus.Department_Status_Id]
        .checked
    ) {
      return true;
    } else {
      return false;
    }
  } catch {
    return false
  }
}



Search_Document() {
  
  this.processService.Search_Document_new("").subscribe(
    (Rows) => {
      
     
      // this.Process_Notification_Data = Rows[0];
    },
    (Rows) => {
      this.issLoading = false;
    }
  );
}

isDocumentCheckd(document) {
  try {
    if (
      this.isDocumentSelected[document.Document_Id]
        .checked
    ) {
      return true;
    } else {
      return false;
    }
  } catch {
    return false
  }
}



Search_Check_list() {
  
  this.processService.Search_Check_list_new("").subscribe(
    (Rows) => {
      
  
      // this.Process_Check_List_Data = Rows[0];
    },
    (Rows) => {
      this.issLoading = false;
    }
  );
}

isCheckListCheckd(document) {
  try {
    if (
      this.isCheckListSelected[document.Document_Id]
        .checked
    ) {
      return true;
    } else {
      return false;
    }
  } catch {
    return false
  }
}


onTaskChange(event: any) {
  debugger
  this.Department_Notification_ = null; 
   this.filteredNotificationDepartments = this.Department_Data.filter(
  department => department.Department_Id == this.Task_.Notification_Department_Id

  
);
console.log(this.filteredNotificationDepartments,"filteredNotificationDepartments");
}


Search_Notification() {
  
  this.processService.Search_Notification_new("").subscribe(
    (Rows) => {
      
   
      // this.Process_Department_Data = Rows[0];
    },
    (Rows) => {
      this.issLoading = false;
    }
  );
}

isNotificationCheckd(department) {
  try {
    if (
      this.isNotificationSelected[department.Department_Id]
        .checked
    ) {
      return true;
    } else {
      return false;
    }
  } catch {
    return false
  }
}
// Show_Process_update(){
//   this.showChildComponent = true;
// }

Show_Process_update(): void {
  const dialogRef = this.dialogBox.open(DialogBox_Component, {
    panelClass: 'Dialogbox-Class',
    data: {
      Message: 'Do you want to Apply Change To All Process?',
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

Save_Department_Status(){
  debugger
  
   console.log('this.Process_Status_Details_: ', this.Process_Status_Details_);

 
   if (
    this.Process_Status_Details_.Status_Order == undefined  ||
    this.Process_Status_Details_.Status_Order == null ||
    this.Process_Status_Details_.Status_Order == 0 ) {
    const dialogRef = this.dialogBox.open(DialogBox_Component, {
      panelClass: "Dialogbox-Class",
      data: { Message: "Enter Duration", Type: "3" },
    });
    return;
  }


  if (
    this.Process_Status_Details_.Transfer_Status == true ){
      if( this.Transfer_Department_ == null ||
        this.Transfer_Department_ == undefined ||
        this.Transfer_Department_.Department_Id == 0 ||
        this.Transfer_Department_.Department_Id == undefined )
        {
          const dialogRef = this.dialogBox.open(DialogBox_Component, {
            panelClass: "Dialogbox-Class",
            data: { Message: "Select Transfer Department", Type: "3" },
          });
          return;
        }
    }



    if (
      this.Process_Status_Details_.Fees_Mandatory == true ){
        if( this.Fees_ == null ||
          this.Fees_ == undefined ||
          this.Fees_.Fees_Id == 0 ||
          this.Fees_.Fees_Id == undefined )
          {
            const dialogRef = this.dialogBox.open(DialogBox_Component, {
              panelClass: "Dialogbox-Class",
              data: { Message: "Select Fees", Type: "3" },
            });
            return;
          }
      }


    

 this.Process_Status_Details_.Process_Status_Details_id =this.Process_Status_Details_.Process_Status_Details_id;
  this.Process_Status_Details_.Department_Status_Id= this.editingDepartmentStatus.Department_Status_Id;
  console.log('this.Process_Status_Details_.Department_Status_Id: ', this.Process_Status_Details_.Department_Status_Id);


 this.Process_Status_Details_.Department_Status_Name= this.editingDepartmentStatus.Department_Status_Name;
  this.Process_Status_Details_.Followup = this.editingDepartmentStatus.Followup;

  
 
  this.Process_Status_Details_.Class_Id = this.Class_Mode_.Class_Id
  this.Process_Status_Details_.Class_Name = this.Class_Mode_.Class_Name;

  this.Process_Status_Details_.Registration = this.Process_Status_Details_.Registration;
  this.Process_Status_Details_.Transfer_Status = this.Process_Status_Details_.Transfer_Status;


  this.Process_Status_Details_.Display_In = this.Display_In;

  this.Process_Status_Details_.Update_in_Profile=this.Process_Status_Details_.Update_in_Profile;
  
  this.Process_Status_Details_.Fees_Mandatory=this.Process_Status_Details_.Fees_Mandatory;
 this.Process_Status_Details_.process_id=this.editingDepartmentStatus.processId;
 
//  this.Process_Status_Details_.Process_Status_Details_id=0;


 this.Process_Status_Details_.Sub_Status=this.Process_Status_Details_.Sub_Status;
 this.Process_Status_Details_.Notification=this.Process_Status_Details_.Notification;
 this.Process_Status_Details_.Task_new=this.Process_Status_Details_.Task_new;
 this.Process_Status_Details_.Mandatory_Task=this.Process_Status_Details_.Mandatory_Task;
 this.Process_Status_Details_.Document_view=this.Process_Status_Details_.Document_view;
 this.Process_Status_Details_.CheckList=this.Process_Status_Details_.CheckList;
 this.Process_Status_Details_.Data_Fields=this.Process_Status_Details_.Data_Fields;


 this.Process_Status_Details_.Transfer_Department_Id = this.Transfer_Department_.Department_Id
 this.Process_Status_Details_.Transfer_Department_Name = this.Transfer_Department_.Department_Name;

 this.Process_Status_Details_.Fees_Id = this.Fees_.Fees_Id;
 this.Process_Status_Details_.Fees_Name = this.Fees_.Fees_Name;

this.issLoading = true;




debugger

this.Process_sub_status_Data_Temp=[]; 
for (var i = 0; i< this.Process_sub_status_Data.length; i++) 
{
if (Boolean(this.Process_sub_status_Data[i].checkbox_view) == true) 
    {
    this.Process_sub_status_Data_Temp.push(this.Process_sub_status_Data[i]);
    }
}
this.Process_Status_Details_.Process_sub_status_Sub_Data = this.Process_sub_status_Data_Temp;
console.log('this.Process_sub_status_Data_Temp: ', this.Process_sub_status_Data_Temp);

debugger


this.Process_Department_Data_Temp=[]; 
for (var i = 0; i< this.Process_Department_Data.length; i++) 
{
if (Boolean(this.Process_Department_Data[i].checkbox_view3) == true) 
    {
    this.Process_Department_Data_Temp.push(this.Process_Department_Data[i]);
    }
}
this.Process_Status_Details_.Process_Department_Data = this.Process_Department_Data_Temp;


this.Process_Status_Details_.Task_Details_Sub_Data = this.Task_Details_Sub_Data;



this.Process_Notification_Data_Temp=[]; 
for (var i = 0; i< this.Process_Notification_Data.length; i++) 
{
if (Boolean(this.Process_Notification_Data[i].checkbox_view4) == true || Boolean(this.Process_Notification_Data[i].checkbox_view_new5) == true) 
    {
    this.Process_Notification_Data_Temp.push(this.Process_Notification_Data[i],);
    }

}

this.Process_Status_Details_.Process_Notification_Data = this.Process_Notification_Data_Temp;



this.Process_Check_List_Data_Temp=[]; 
for (var i = 0; i< this.Process_Check_List_Data.length; i++) 
{
if (Boolean(this.Process_Check_List_Data[i].checkbox_view) == true) 
    {
    this.Process_Check_List_Data_Temp.push(this.Process_Check_List_Data[i]);
    }
}
this.Process_Status_Details_.Process_Check_List_Data = this.Process_Check_List_Data_Temp;


this.Process_Fields_Data_Temp=[]; 
for (var i = 0; i< this.Process_Fields_Data.length; i++) 
{
if (Boolean(this.Process_Fields_Data[i].checkbox_view1) == true || Boolean(this.Process_Fields_Data[i].checkbox_view_new2) == true) 
    {
    this.Process_Fields_Data_Temp.push(this.Process_Fields_Data[i],);
    }

}
this.Process_Status_Details_.Process_Fields_Data = this.Process_Fields_Data_Temp;


this.Process_Status_Details_.MTask_Details_Sub_Data = this.MTask_Details_Sub_Data;

this.Process_Status_Details_.newCheckedProcess_sub_status_Data = this.newCheckedItems;

this.Process_Status_Details_.newCheckedItems_Document_Data = this.newCheckedItems_Document;

this.Process_Status_Details_.newCheckedItems_Notification_Data = this.newCheckedItems_Notification;

this.Process_Status_Details_.newCheckedItems_Fields_Data = this.newCheckedItems_Fields;



// this.Process_Status_Details_.Process_Filer_Data = this.processStatusDetailsFromChild.Process_Filer_Data;
// // this.Process_Status_Details_.Process_Filer_Data.process_id_old = this.editingDepartmentStatus.processId;
// debugger
// this.Process_Status_Details_.Process_Filer_Data = this.processStatusDetailsFromChild.Process_Filer_Data.map(item => {
//   return {
//     ...item, // keep existing properties
//     process_ids: [item.Process_Id, this.editingDepartmentStatus.processId] // create an array of process_ids

//   };


// });;



  // Update Process_Filer_Data if process_id is provided
  // const processId = this.editingDepartmentStatus.processId;
  // if (processId) {
  //   const existingProcessIds = this.processStatusDetailsFromChild.Process_Ids || [];
  //   const updatedProcessIds = new Set([...existingProcessIds, processId]);
  //   this.Process_Status_Details_.Process_Filer_Data = Array.from(updatedProcessIds);

  //   console.log('Updated Process_Filer_Data: ', this.Process_Status_Details_.Process_Filer_Data);
  // } else {
  //   console.warn('Process ID is invalid or not provided.');
  // }


// -----------------------------------------------------------------

// const existingProcessIds = this.processStatusDetailsFromChild.Process_Ids || [];
// const updatedProcessIds = new Set([...existingProcessIds, this.editingDepartmentStatus.processId]);
// this.Process_Status_Details_.Process_Filer_Data = Array.from(updatedProcessIds);

// console.log('Updated Process_Filer_Data: ', this.Process_Status_Details_.Process_Filer_Data);


if (this.processStatusDetailsFromChild && this.processStatusDetailsFromChild.Process_Ids) {
  const existingProcessIds = this.processStatusDetailsFromChild.Process_Ids || [];
  const updatedProcessIds = new Set([ this.editingDepartmentStatus.processId,...existingProcessIds]);
  this.Process_Status_Details_.Process_Filer_Data = Array.from(updatedProcessIds);

  console.log('Updated Process_Filer_Data: ', this.Process_Status_Details_.Process_Filer_Data);

  this.Process_Status_Details_.Insert_Not_Found = this.processStatusDetailsFromChild.Insert_Not_Found;
    console.log('Insert_Not_Found: ', this.Process_Status_Details_.Insert_Not_Found);
} else {
  // Handle case where `processStatusDetailsFromChild` or `Process_Ids` is not available
  console.warn('processStatusDetailsFromChild or Process_Ids is not available');
  this.Process_Status_Details_.Process_Filer_Data = [this.editingDepartmentStatus.processId];
}

// --------------------------------------------------------------------

//    // Step 2: Extract and combine process_ids from Process_Filer_Data
//    const combinedProcessIds = this.Process_Status_Details_.Process_Filer_Data
//       .map(item => item.process_ids) // Get process_ids arrays
//       .reduce((acc, curr) => acc.concat(curr), []); // Flatten manually

//  // Step 3: Create a new array and add the combined process_ids to it
//  this.Process_Status_Details_.process_ids_array = combinedProcessIds;
// console.log('this.processStatusDetailsFromChild.Process_Filer_Data: ', this.processStatusDetailsFromChild.Process_Filer_Data);


// this.router.navigate(['/Process_update']).then(() => {
//   // Proceed with saving after navigation
//   this.proceedWithSaving();
// });
// }

// proceedWithSaving(){
debugger
console.log('this.Process_Status_Details_: ', this.Process_Status_Details_);
  this.Department_Status_Service_.Save_process_Status_details(this.Process_Status_Details_).subscribe(
    (Process_Status_Details) => {
     debugger
      Process_Status_Details = Process_Status_Details[0];
      if (Number(Process_Status_Details[0].Process_Status_Details_id_) > 0) {
        const dialogRef = this.dialogBox.open(DialogBox_Component, {
          panelClass: "Dialogbox-Class",
          data: { Message: "Saved", Type: "false" },
        });
        this.Process_Status_Details_id_ = Process_Status_Details[0].Process_Status_Details_id_;
        this.Process_id_ = Process_Status_Details[0].Process_id_;
        this.Department_Status_Id_ =Process_Status_Details[0].Department_Status_Id_;
        this.showChildComponent = false;

this.Close_Click();

        this.Search_Process_department_Details(this.Department_Status_Id_,this.Process_id_);
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
        data: { Message: Rows.error.error, Type: "2" },
      });
    }
    );

}


handleProcessStatusDetails(data: any) {
  this.processStatusDetailsFromChild = data;
  console.log('Received data from child component:', this.processStatusDetailsFromChild);
  this.Save_Department_Status();

}
handleCloseEvent() {
  // Handle the close event here (e.g., hide the child component or navigate back)
  this.showChildComponent = false;  // Hide child component
  this.router.navigate(['/Process_Status']);  // Navigate to the parent route (optional)
}

Search_Process_department_Details(Department_Status_Id_,Process_id_) {
  
  this.processService.Search_Process_department_Details(Department_Status_Id_,Process_id_).subscribe(
    (Rows) => {    
     

      console.log('Rows[0]: ', Rows[0]);
      this.Process_Status_Details_Data = Rows[0];
      this.Process_Status_Details_.Process_Status_Details_id= this.Process_Status_Details_Data[0].Process_Status_Details_id;
    },
    (Rows) => {
      this.issLoading = false;
    }
  );
}

clr_process_department_status(){
  this.Process_Status_Details_.Department_Status_Name ='';
  this.Process_Status_Details_.Department_Status_Id =0;
  this.editingDepartmentStatus.Followup=null;
  
  if (this.Class_Data != null && this.Class_Data != undefined)
  this.Class_Mode_ = this.Class_Data[0];

this.Process_Status_Details_.Registration =false;
this.Process_Status_Details_.Status_Order=0;
this.Process_Status_Details_.Transfer_Status = false;

if (this.Automatic_Department_Data != null && this.Automatic_Department_Data != undefined)
this.Automatic_Department_ = this.Automatic_Department_Data[0];


if (this.Automatic_Department_Data != null && this.Automatic_Department_Data != undefined)
this.Notification_Department_ = this.Automatic_Department_Data[0];

this.Process_Status_Details_.Registration_Mandatory = false;

this.Process_Status_Details_.Activation_Status = false;

this.Process_Status_Details_.Update_in_Profile = false;
this.Process_Status_Details_.Fees_Mandatory = false;



this.Process_Status_Details_.Sub_Status = false;
this.Process_Status_Details_.Notification = false;
this.Process_Status_Details_.Task_new = false;
this.Process_Status_Details_.Document_view = false;
this.Process_Status_Details_.CheckList = false;
this.Process_Status_Details_.Mandatory_Task = false;

this.Process_Status_Details_.newCheckedProcess_sub_status_Data = [];
this.newCheckedItems =[];
this.Process_sub_status_Data_checkbox_true=[];


this.newCheckedItems_Notification =[];
this.Process_department_Data_checkbox_true=[];

this.newCheckedItems_Document=[];
this.Process_Status_Details_.newCheckedItems_Document_Data=[];

this.newCheckedItems_Notification=[];
this.Process_Status_Details_.newCheckedItems_Notification_Data=[];

this.Process_Status_Details_.newCheckedItems_Fields_Data=[];
this.newCheckedItems_Fields=[];

this.Process_Document_checkbox_true=[];
this.Process_Fields_checkbox_true=[];
this.Process_department_Data_checkbox_true=[];

// this.Search_Department_Status();
// this.Search_Document();    
// this.Search_Check_list();
// this.Search_Notification();

}
onClose() {
  this.showChildComponent = false;
  // Your logic to handle the close action
  // For example, navigate back or hide the child component
  console.log('Close button clicked, going back to parent component');
  // Implement your close logic here
}


Search_Process_status()
{

 
this.issLoading=true;
this.processService.Search_Process_status(this.Process_status_Name_Search).subscribe(Rows => {
    
 this.processStatusList=Rows[0];
// this.Total_Entries=this.Country_Data.length;
// if(this.Country_Data.length==0)
// {
// this.issLoading=false;
// const dialogRef = this.dialogBox.open
// ( DialogBox_Component, {panelClass:'Dialogbox-Class'
// ,data:{Message:'No Details Found',Type:"3"}});
// }
this.issLoading=false;
 },
 Rows => { 
this.issLoading=false;
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
 });
}


  // // This method will be triggered when the checkbox state changes
  // onCheckboxChange(departmentStatus) {
  //   debugger
  //   if (departmentStatus.checkbox_view) {
  //     // Add the checked item to the new array if it's checked
  //     this.newCheckedItems.push(departmentStatus);
  //   } else {
  //     // Remove the unchecked item from the new array if it's unchecked
  //     const index = this.newCheckedItems.indexOf(departmentStatus);
  //     if (index > -1) {
  //       this.newCheckedItems.splice(index, 1);
  //     }
  //   }
  //   console.log(this.newCheckedItems,'newCheckedItems');  // You can see the updated array here
  // }
  // onCheckboxChange(departmentStatus) {
  //   // Ensure the array is properly initialized
  //   if (!this.newCheckedItems) {
  //     this.newCheckedItems = [];
  //   }

  //   if (departmentStatus.checkbox_view) {
  //     // Add the checked item to the new array if it's checked
  //     this.newCheckedItems.push(departmentStatus);
  //   } else {
  //     // Remove the unchecked item from the new array if it's unchecked
  //     const index = this.newCheckedItems.indexOf(departmentStatus);
  //     if (index > -1) {
  //       this.newCheckedItems.splice(index, 1);
  //     }
  //   }

  //   console.log(this.newCheckedItems, 'newCheckedItems');  // You can see the updated array here
  // }

  onCheckboxChange(departmentStatus) {
    // Ensure the array is properly initialized
    if (!this.newCheckedItems) {
      this.newCheckedItems = [];
    }
  debugger
    // Check if the departmentStatus exists in Process_sub_status_Data_checkbox_true
    const existingItem = this.Process_sub_status_Data_checkbox_true.find(
      item => item.Department_Status_Id === departmentStatus.Department_Status_Id 
    );
  
    if (existingItem) {
      // If checkbox_view is true, add the item to the newCheckedItems array
      if (departmentStatus.checkbox_view ==false) {
        // Add the newly checked item to the array if it is checked
        if (!this.newCheckedItems.includes(departmentStatus)) {
          this.newCheckedItems.push(departmentStatus);
        }
      } else {
        // If checkbox_view is false, remove it from the newCheckedItems array if unchecked
        const index = this.newCheckedItems.indexOf(departmentStatus);
        if (index > -1) {
          this.newCheckedItems.splice(index, 1);
        }
      }
    } else {
      // If the departmentStatus doesn't exist in Process_sub_status_Data_checkbox_true
      // We add it regardless of the checkbox state.
      if (departmentStatus.checkbox_view) {
        // Add the item if it's checked and not already in the array
        this.newCheckedItems.push(departmentStatus);
      }
      else {
        // If checkbox_view is false, remove it from the newCheckedItems array if unchecked
        const index = this.newCheckedItems.indexOf(departmentStatus);
        if (index > -1) {
          this.newCheckedItems.splice(index, 1);
        }
      }
    }
  
    // Log the updated array for debugging
    console.log(this.newCheckedItems, 'newCheckedItems');
  }


  onCheckboxChangeNotification(departmentData) {
    // Ensure the array is properly initialized
    if (!this.newCheckedItems_Notification) {
      this.newCheckedItems_Notification = [];
    }
  debugger
    // Check if the departmentData exists in Process_sub_status_Data_checkbox_true
    const existingItem = this.Process_department_Data_checkbox_true.find(
      item => item.Department_Id === departmentData.Department_Id 
    );
  
    if (existingItem) {
      // If checkbox_view3 is true, add the item to the newCheckedItems_Notification array
      if (departmentData.checkbox_view3 ==false) {
        // Add the newly checked item to the array if it is checked
        if (!this.newCheckedItems_Notification.includes(departmentData)) {
          this.newCheckedItems_Notification.push(departmentData);
        }
      } else {
        // If checkbox_view3 is false, remove it from the newCheckedItems_Notification array if unchecked
        const index = this.newCheckedItems_Notification.indexOf(departmentData);
        if (index > -1) {
          this.newCheckedItems_Notification.splice(index, 1);
        }
      }
    } else {
      // If the departmentData doesn't exist in Process_department_Data_checkbox_true
      // We add it regardless of the checkbox state.
      if (departmentData.checkbox_view3) {
        // Add the item if it's checked and not already in the array
        this.newCheckedItems_Notification.push(departmentData);
      }
      else {
        // If checkbox_view3 is false, remove it from the newCheckedItems_Notification array if unchecked
        const index = this.newCheckedItems_Notification.indexOf(departmentData);
        if (index > -1) {
          this.newCheckedItems_Notification.splice(index, 1);
        }
      }
    }
  
    // Log the updated array for debugging
    console.log(this.newCheckedItems_Notification, 'newCheckedItems_Notification');
  }
  

  onCheckboxChangeDcoument(documentData) {
    // Ensure the array is properly initialized
    if (!this.newCheckedItems_Document) {
      this.newCheckedItems_Document = [];
    }
  debugger
    // Check if the documentData exists in Process_Document_checkbox_true
    const existingItem = this.Process_Document_checkbox_true.find(
      item => item.Document_Id === documentData.Document_Id 
    );
  
    if (existingItem) {
      // If checkbox_view4 is true, add the item to the newCheckedItems_Document array
      if (documentData.checkbox_view4 ==false || documentData.checkbox_view_new5 ==false) {
        // Add the newly checked item to the array if it is checked
        if (!this.newCheckedItems_Document.includes(documentData)) {
          this.newCheckedItems_Document.push(documentData);
        }
      } else {
        // If checkbox_view4 is false, remove it from the newCheckedItems_Document array if unchecked
        const index = this.newCheckedItems_Document.indexOf(documentData);
        if (index > -1) {
          this.newCheckedItems_Document.splice(index, 1);
        }
      }
    } else {
      // If the documentData doesn't exist in Process_Document_checkbox_true
      // We add it regardless of the checkbox state.
      if (documentData.checkbox_view4 ||  documentData.checkbox_view_new5) {
        // Add the item if it's checked and not already in the array
        this.newCheckedItems_Document.push(documentData);
      }
      else {
        // If checkbox_view4 is false, remove it from the newCheckedItems_Document array if unchecked
        const index = this.newCheckedItems_Document.indexOf(documentData);
        if (index > -1) {
          this.newCheckedItems_Document.splice(index, 1);
        }
      }
    }
  
    // Log the updated array for debugging
    console.log(this.newCheckedItems_Document, 'newCheckedItems_Document');
  }
  

  
  onCheckboxChangeField(FieldData) {
    // Ensure the array is properly initialized
    if (!this.newCheckedItems_Fields) {
      this.newCheckedItems_Fields = [];
    }
  debugger
    // Check if the FieldData exists in Process_Document_checkbox_true
    const existingItem = this.Process_Fields_checkbox_true.find(
      item => item.Fields_Id === FieldData.Fields_Id 
    );
  
    if (existingItem) {
      // If checkbox_view1 is true, add the item to the newCheckedItems_Fields array
      if (FieldData.checkbox_view1 ==false || FieldData.checkbox_view_new2 ==false) {
        // Add the newly checked item to the array if it is checked
        if (!this.newCheckedItems_Fields.includes(FieldData)) {
          this.newCheckedItems_Fields.push(FieldData);
        }
      } else {
        // If checkbox_view1 is false, remove it from the newCheckedItems_Fields array if unchecked
        const index = this.newCheckedItems_Fields.indexOf(FieldData);
        if (index > -1) {
          this.newCheckedItems_Fields.splice(index, 1);
        }
      }
    } else {
      // If the FieldData doesn't exist in Process_Fields_checkbox_true
      // We add it regardless of the checkbox state.
      if (FieldData.checkbox_view1 ||  FieldData.checkbox_view_new2) {
        // Add the item if it's checked and not already in the array
        this.newCheckedItems_Fields.push(FieldData);
      }
      else {
        // If checkbox_view1 is false, remove it from the newCheckedItems_Fields array if unchecked
        const index = this.newCheckedItems_Fields.indexOf(FieldData);
        if (index > -1) {
          this.newCheckedItems_Fields.splice(index, 1);
        }
      }
    }
  
    // Log the updated array for debugging
    console.log(this.newCheckedItems_Fields, 'newCheckedItems_Fields');
  }

  

}
