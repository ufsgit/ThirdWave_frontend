import { Component, OnInit } from "@angular/core";
import { ProcessService } from "../../../services/Process.Service";
import { DialogBox_Component } from "../DialogBox/DialogBox.component";
import { Department } from "../../../models/Department";
import { Process } from "../../../models/process.interface";
import { Colors } from "../../../models/Colors";
import { Department_Status } from "../../../models/Department_Status";

import { ActivatedRoute, Router } from "@angular/router";
// import { MatColorPickerModule } from 'mat-color-picker';

import {
  ROUTES,
  Get_Page_Permission,
} from "../../../components/sidebar/sidebar.component";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogConfig,
} from "@angular/material";
import { data } from "jquery";
import { Process_StatusComponent } from "../Process_Status/Process_Status.component";

@Component({
  selector: "app-Process",
  templateUrl: "./Process.component.html",
  styleUrls: ["./Process.component.css"],
})
export class ProcessComponent implements OnInit {
  constructor(
    public processService: ProcessService,
    private route: ActivatedRoute,
    private ProcessStatusComponent:Process_StatusComponent,
    private router: Router,
    public dialogBox: MatDialog
  ) {}
  newProcess = {
    Process_Name: null,
    Order_IN: null,
    Color: "#eef2f6",
  };
  tempProcess = {
    Process_Name: null,
    Order_IN: null,
    Color: "#eef2f6",
  };
  Process_Data: Process[];
  editingProcesssId: number;
  isEditing = false;
  searchString: string;

  Department_: Department = new Department();
  Department_Data;
  Total_Entries: Number;
  Department_Status_: Department_Status = new Department_Status();
  Department_Status_Data: Department_Status[];
  Department_Name_Search: string;
  Entry_View: boolean = true;
  EditIndex: number;
  color = "primary";
  mode = "indeterminate";
  value = 50;
  myInnerHeight: number;
  myTotalHeight: number;
  issLoading: boolean;
  Edit_Id: number;
  Menu_Id: number = 14;
  Department_Edit: boolean;
  Department_Save: boolean;
  Department_Delete: boolean;
  array: any;
  Login_User: string = "0";
  Permissions: any;
  Transfer_Method_: number = 0;
  Color_Type_: string = "";

  Department_Status_Dropdown_: Department_Status = new Department_Status();
  Department_Status_Dropdown_Temp: Department_Status = new Department_Status();
  Department_Status_Dropdown_Data: Department_Status[];

  Color_Status_: Colors = new Colors();
  Color_Status_Temp: Colors = new Colors();
  Color_Status_Data: Colors[];
  isDepartmentStatusSelected = {};

  selectedColor: string = "#007bff";

  ngOnInit() {
    debugger
    this.getAllProcess();
    this.Login_User = localStorage.getItem("Login_User");
    this.Page_Load();
    this.Search_Department_Status();
  }

  // Function to create new Process
  Save_Process() {
    debugger
    const departmentStatus = [];
    let status = {...this.isDepartmentStatusSelected}
    console.log('status: ', status);
    var Department_Status=false;
    // Send selected department status with process
    for (let i in status) {
      if (status[i].checked) {
        let Order_In_PS = null;
        if (status[i].Order_In_PS == undefined || status[i].Order_In_PS == null) {
          Order_In_PS = 0 ;
        } else {
          Order_In_PS = status[i].Order_In_PS;
        }
        departmentStatus.push({departmentStatusId: i, Order_In_PS: Order_In_PS});
        Department_Status=true
      }
    }

    // var Department_Status=false;
    //     for (var j = 0; j < this.Department_Status_Data.length; j++)
    //     {
    //         if(this.Department_Status_Data[j].Check_Box== true)
    //         Department_Status=true
    //     }


    if (!this.isEditing) {
      // Check is there any fields missing
      if (
        this.newProcess.Process_Name == undefined ||
        this.newProcess.Process_Name == null
      ) {
        const dialogRef = this.dialogBox.open(DialogBox_Component, {
          panelClass: "Dialogbox-Class",
          data: { Message: "Enter The Process Name", Type: "3" },
        });
      } 
      // else if (
      //   this.newProcess.Order_IN == undefined ||
      //   this.newProcess.Order_IN == null ||
      //   this.newProcess.Order_IN == 0
      // ) {
      //   const dialogRef = this.dialogBox.open(DialogBox_Component, {
      //     panelClass: "Dialogbox-Class",
      //     data: { Message: "Enter The Process Order", Type: "3" },
      //   });
      // } 
      
      else if (Department_Status==false)
      {
     const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Select Atleast One Status', Type: "3" } });
     }
      
      
      else {
        // Hide Save button
        console.log('  document.getElementById("Save_Button"): ',   document.getElementById("Save_Button"));
        if(  document.getElementById("Save_Button")){

          document.getElementById("Save_Button").hidden = true;
        }
        debugger
        this.newProcess.Order_IN =1
        // Start spinnter
        this.issLoading = true;

        // Call save process function to save it in backend
        this.processService.Save_Process({...this.newProcess, departmentStatus
        }).subscribe(
          (Save_status: any) => {
            debugger
           
            this.issLoading = false; // Ensure created successfully
            if (Save_status.succes) {
              // Show success dialoge box
              const dialogRef = this.dialogBox.open(DialogBox_Component, {
                panelClass: "Dialogbox-Class",
                data: { Message: "Saved", Type: "false" },
              });
              if(  document.getElementById("Save_Button")){
              // Show save button agane
              document.getElementById("Save_Button").hidden = false;
              }
              this.getAllProcess();

              this.Close_Click();

              // Update departmen status object
              this.Search_Department_Status();
            } else {
              // Show Error dialoge box if it is not success
              const dialogRef = this.dialogBox.open(DialogBox_Component, {
                panelClass: "Dialogbox-Class",
                data: { Message: "Error Occured", Type: "2" },
              });
              // Show save button
              if(  document.getElementById("Save_Button")){
              document.getElementById("Save_Button").hidden = false;
              }
            }
            this.issLoading = false;
            this.isEditing = false;
            this.makeNewProcessFieldClean();
          },
          (Rows) => {
            this.issLoading = false;
            const dialogRef = this.dialogBox.open(DialogBox_Component, {
              panelClass: "Dialogbox-Class",
              data: { Message: "Error Occured", Type: "2" },
            });
            if(  document.getElementById("Save_Button")){
            document.getElementById("Save_Button").hidden = false;
            }
            this.isEditing = false;
            this.makeNewProcessFieldClean();
          }
        );
      }
    } else {
      // Call update function and update the data

      console.log('departmentStatus: ', departmentStatus);
      this.processService
        .updateProcess( {...this.newProcess, departmentStatus }, this.editingProcesssId)
        .subscribe(
          (data) => {
debugger      
this.issLoading = false;

            if (data[0].ProcessId_>0) {
              const dialogRef = this.dialogBox.open(DialogBox_Component, {
                panelClass: "Dialogbox-Class",
                data: { Message: "Saved", Type: "false" },
              });
            }
            // update process
            this.getAllProcess();
            this.newProcess = this.tempProcess;
            // Close editing mode
            this.Close_Click();
          },
          (err) => {
            this.issLoading = false;
            // Close editing mode
            this.Close_Click();
          }
        );
    }
  }

  // Function to clean newProcess field
  makeNewProcessFieldClean() {
    this.newProcess = {...this.tempProcess}
  }
  Create_New121() {
    // Navigate to the Process_update page
    this.router.navigate(['/Process_update']);
  }
  // Function to fetch all process
  getAllProcess() {
    debugger
    this.issLoading = true;
    this.processService.getAll().subscribe(
      (data) => {
        debugger
        this.Process_Data = data.data;
        this.issLoading = false;
      },
      (err) => {
        this.Process_Data = [];
        this.issLoading = false;
      }
    );
  }

  // Function to delete process
  deleteProcess(id: number) {
    console.log(id);
    // Confirm it is not happened unexpectedly
    const dialogRef = this.dialogBox.open(DialogBox_Component, {
      panelClass: "Dialogbox-Class",
      data: {
        Message: "Do you want to delete ?",
        Type: "true",
        Heading: "Confirm",
      },
    });

    // Execute action if it is indentionally did
    dialogRef.afterClosed().subscribe((result) => {
      if (result == "Yes") {
        this.processService.deleteProcess(id).subscribe(
          (status) => {
            debugger
            const dialogRef = this.dialogBox.open(DialogBox_Component, {
              panelClass: "Dialogbox-Class",
              data: { Message: "Deleted", Type: "false" },
            });
            this.issLoading = false;
            // Get updated list
            this.getAllProcess();
          },
          (err) => {
            const dialogRef = this.dialogBox.open(DialogBox_Component, {
              panelClass: "Dialogbox-Class",
              data: { Message: "Error Occured", Type: "2" },
            });
          }
        );
      }
    });
  }

  // Function to update Process
  eidtProcess(process: Process, id: number,action='duplicate') {
    // Get process status
    debugger
    this.processService.getDepartmentStatus(id).subscribe(
      (data: any) => {
        console.log('data: ', data);
        for(let i of data.data) {
          if(this.isDepartmentStatusSelected[i.departmentStatusId]) {
            this.isDepartmentStatusSelected[i.departmentStatusId].checked = true;
            this.isDepartmentStatusSelected[i.departmentStatusId].Order_In_PS = i.Order_In;
          }
        }
        console.log(' this.isDepartmentStatusSelected: ',  this.isDepartmentStatusSelected);

    
        this.newProcess = Object.assign({}, process);
        if(action=='duplicate'){
     
          
          this.newProcess.Process_Name=  this.newProcess.Process_Name+'copy'
          this.isEditing = true;
          console.log('  this.isEditing : ',   this.isEditing );
          this.editingProcesssId=0
          this.newProcess['Process_Id']=0
          let existing={
            Department_Status_Id:this.isDepartmentStatusSelected['1'].Department_Status_Id,
            processId:id
          }
          // this.ProcessStatusComponent.editProcessStatus1()
          // this.ProcessStatusComponent.Save_Department_Status()
     
          //  this.Save_Process()
        }else{
          this.Entry_View = true;
    
          // Turn editing mode on
          this.isEditing = true;
      
          // Save editing process id to use when calling update method
          this.editingProcesssId = id;
        }
 
        console.log(' this.newProcess : ',  this.newProcess );
      },
    )    
  
  }


  Duplicate_process(Process_Id_) {
		//  this.Clr_ApplicationDetails();
		this.issLoading = true;
debugger
		this.processService.Duplicate_process(Process_Id_).subscribe(
			(Rows) => {
        debugger
        // if(Number(Rows[0][0].New_ProcessId_)>0)
        // {
        // const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Duplicate Saved',Type:"false"}});        
        // }
       if(Number(Rows[1][0].New_ProcessId_)>0)
        {
        const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Duplicate Saved',Type:"false"}});        
        }
        this.getAllProcess();
				this.issLoading = false;
			},
			(Rows) => {
				this.issLoading = false;
			}
		);
	}

  // Function to search process by name
  searchProcess() {
    debugger
    console.log(this.searchString);
    if (this.searchString) {
      console.log("searching");
      // Start spinner
      this.issLoading = true;

      // Fetch data
      debugger
      this.processService.searchProcess(this.searchString).subscribe(
        (data) => {
          debugger
          // Stope spinner
          this.issLoading = false;

          // update component with response data
          this.Process_Data = data.data;

          if (this.Process_Data.length == 0) {
            const dialogRef = this.dialogBox.open(DialogBox_Component, {
              panelClass: "Dialogbox-Class",
              data: { Message: "No Details Found", Type: false },
            });
          }
        },
        (err) => {
          // Stope spinner
          this.issLoading = false;

          // Show error message
          const dialogRef = this.dialogBox.open(DialogBox_Component, {
            panelClass: "Dialogbox-Class",
            data: { Message: "Error Occured", Type: "2" },
          });
        }
      );
    } else {
      this.getAllProcess();
    }
  }

  // Function to get Department status list
  Search_Department_Status() {
    // Call appi
    this.processService.Search_Department_Status("").subscribe(
      (Rows) => {
        // Loop through all element and create an object with status id.
        // Set checkd: false to every element
        Rows[0].forEach((element) => {
          this.isDepartmentStatusSelected[element.Department_Status_Id] = {
            ...element,
            checked: false,
          };
        });

        // Assign data to our variablevariable
        this.Department_Status_Data = Rows[0];
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
  duplicateProcess(process){
    this.eidtProcess(process,process.prosee)
    
    console.log('this.newProcess: ', this.newProcess);
  }

  // Function to check department status
  selectDepartmentStatus(departmentStatus) {
    this.isDepartmentStatusSelected[
      departmentStatus.Department_Status_Id
    ].checked =
      !this.isDepartmentStatusSelected[departmentStatus.Department_Status_Id]
        .checked;
  }

  // Function to clear selected data
  makeEmptycurrentData() {
    this.Search_Department_Status();
    this.newProcess = {...this.tempProcess}
  }

  // Function to navigate to process status component
  showStatusByProcessId(processId,Process_Name) {
    // navigate to process status component
    this.router.navigate(['Process_Status', processId], { queryParams: { Process_Name: Process_Name } });

  }

  Page_Load() {
    debugger
    this.Get_Menu_Status(14, this.Login_User);

    this.myInnerHeight = window.innerHeight;
    // this.myInnerHeight = this.myInnerHeight - 250;
    this.Clr_Department();
    this.Entry_View = false;
    this.Load_Color();
    this.Search_Department();
    this.Search_Department_Status();
    this.Load_Status_Dropdown();
    this.myInnerHeight = window.innerHeight;
    // this.myTotalHeight=this.myInnerHeight - 100;

    // this.myTotalHeight=this.myTotalHeight-100;
    // this.myInnerHeight = this.myInnerHeight - 230;

    this.myInnerHeight = window.innerHeight;
    this.myTotalHeight = this.myInnerHeight - 100;
    this.myTotalHeight = this.myTotalHeight - 80;
    this.myInnerHeight = this.myInnerHeight - 200;
  }

  Get_Menu_Status(Menu_id, Login_user_id) {
    debugger
    this.issLoading = false;
    this.processService.Get_Menu_Status(Menu_id, Login_user_id).subscribe(
      (Rows) => {
        if (Rows[0][0] == undefined) {
          if (Menu_id == 14) {
            localStorage.removeItem("token");
            this.router.navigateByUrl("Home_Page");
          }
        } else if (Rows[0][0].View > 0) {
          if (Menu_id == 14) {
            this.Permissions = Rows[0][0];
            if (this.Permissions == undefined || this.Permissions == null) {
              localStorage.removeItem("token");
              this.router.navigateByUrl("Home_Page");
            }
            this.Department_Edit = this.Permissions.Edit;
            this.Department_Save = this.Permissions.Save;
            this.Department_Delete = this.Permissions.Delete;
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

  Load_Color() {
    this.issLoading = true;
    this.processService.Load_Color().subscribe(
      (Rows) => {
        if (Rows != null) {
          this.Color_Status_Data = Rows[0];
          this.Color_Status_Temp.Colors_Id = 0;
          this.Color_Status_Temp.Colors_Name = "Select";
          this.Color_Status_Data.unshift(this.Color_Status_Temp);

          this.Color_Status_ = this.Color_Status_Data[0];
          this.issLoading = false;
        }
      },
      (Rows) => {
        this.issLoading = false;
      }
    );
  }

  Create_New() {
    this.Clr_Department();
    this.Entry_View = true;
    this.isEditing = false;
  }

  Close_Click() {
    this.Entry_View = false;
    this.makeEmptycurrentData();
    this.isEditing = false;
  }

  trackByFn(index, item) {
    return index;
  }

  Clr_Department() {
    this.Department_.Department_Id = 0;
    this.Department_.Department_Name = "";
    this.Department_.FollowUp = "0";
    this.Department_.Status = "";
    this.Department_.Department_Order = 0;
    this.Department_.Color = "";
    this.Department_Status_.Check_Box = false;
    if (this.Department_Status_Data != undefined)
      for (var i = 0; i < this.Department_Status_Data.length; i++) {
        this.Department_Status_Data[i].Check_Box = false;
      }
    this.Department_.Transfer_Method_Id = 0;
    this.Transfer_Method_ = 0;

    // this.Department_.Color_Type_Id=0;
    // this.Color_Type_="";

    if (
      this.Department_Status_Dropdown_Data != null &&
      this.Department_Status_Dropdown_Data != undefined
    )
      this.Department_Status_Dropdown_ =
        this.Department_Status_Dropdown_Data[0];
    this.Department_.Color_Type_Name = "#f3f5f6";

    // if(this.Color_Status_Data!=null && this.Color_Status_Data != undefined)
    // this.Color_Status_=this.Color_Status_Data[0];

    // this.Department_.Color_Type_Name="";
  }

  Load_Status_Dropdown1() {
    this.issLoading = true;
    this.processService.Load_Status_Dropdown().subscribe(
      (Rows) => {
        if (Rows != null) {
          this.Department_Status_Dropdown_Data = Rows[0];
          this.Department_Status_Dropdown_Temp.Department_Status_Id = 0;
          this.Department_Status_Dropdown_Temp.Department_Status_Name =
            "Select";
          this.Department_Status_Dropdown_Data.unshift(
            this.Department_Status_Dropdown_Temp
          );

          this.Department_Status_Dropdown_ =
            this.Department_Status_Dropdown_Data[0];
          this.issLoading = false;
        }
      },
      (Rows) => {
        this.issLoading = false;
      }
    );
  }

  Load_Status_Dropdown() {
    this.issLoading = true;
    this.processService.Load_Status_Dropdown().subscribe(
      (Rows) => {
        if (Rows != null) {
          this.Department_Status_Dropdown_Data = Rows[0];
          this.Department_Status_Dropdown_Temp.Department_Status_Id = 0;
          this.Department_Status_Dropdown_Temp.Department_Status_Name =
            "Select";
          this.Department_Status_Dropdown_Data.unshift(
            this.Department_Status_Dropdown_Temp
          );

          this.Department_Status_Dropdown_ =
            this.Department_Status_Dropdown_Data[0];
          this.issLoading = false;
        }
      },
      (Rows) => {
        this.issLoading = false;
      }
    );
  }
  show_Loader() {}
  hide_Loader() {}
  Search_Department() {
    this.issLoading = true;
    this.processService
      .Search_Department(this.Department_Name_Search)
      .subscribe(
        (Rows) => {
          this.issLoading = false;
          this.Department_Data = Rows[0];
          // this.Total_Entries=this.Department_Data.length;
          if (this.Department_Data.length == 0) {
            const dialogRef = this.dialogBox.open(DialogBox_Component, {
              panelClass: "Dialogbox-Class",
              data: { Message: "No Details Found", Type: false },
            });
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

  Delete_Department(Department_, index) {
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
        this.processService
          .Delete_Department(Department_.Department_Id)
          .subscribe(
            (Delete_status) => {
             ;
              if (Number(Delete_status[0][0].Department_Id_) > 0) {
                this.Department_Data.splice(this.EditIndex, 1);
                const dialogRef = this.dialogBox.open(DialogBox_Component, {
                  panelClass: "Dialogbox-Class",
                  data: { Message: "Deleted", Type: "false" },
                });
                this.Search_Department();
                this.Entry_View = false;
              } else if (Number(Delete_status[0][0].Department_Id_) == -2) {
                const dialogRef = this.dialogBox.open(DialogBox_Component, {
                  panelClass: "Dialogbox-Class",
                  data: { Message: "Cannot Delete the Department", Type: "2" },
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
              const dialogRef = this.dialogBox.open(DialogBox_Component, {
                panelClass: "Dialogbox-Class",
                data: { Message: "Error Occured", Type: "2" },
              });
            }
          );
        this.issLoading = false;
      }
    });
  }

  Get_Status_Selection_Edit(Department_Id) {
    this.issLoading = true;
    this.processService.Get_Status_Selection_Edit(Department_Id).subscribe(
      (Rows) => {
        this.Department_Status_Data = Rows[0];
        for (var i = 0; i < this.Department_Status_Data.length; i++) {
          if (this.Department_Status_Data[i].Check_Box.toString() == "1") {
            this.Department_Status_Data[i].Check_Box = true;
          } else {
            this.Department_Status_Data[i].Check_Box = false;
          }
        }
        if (this.Department_Status_Data.length == 0) {
          const dialogRef = this.dialogBox.open(DialogBox_Component, {
            panelClass: "Dialogbox-Class",
            data: { Message: "No Details Found", Type: false },
          });
          this.issLoading = false;
        }
      },
      (Rows) => {
        const dialogRef = this.dialogBox.open(DialogBox_Component, {
          panelClass: "Dialogbox-Class",
          data: { Message: "Error Occured", Type: "2" },
        });
      }
    );
    this.issLoading = false;
  }

  Edit_Department(Department_e: Department, index) {
    this.Entry_View = true;
    this.Department_ = Department_e;
    this.Department_ = Object.assign({}, Department_e);

    if (this.Department_.Transfer_Method_Id == 1) {
      this.Transfer_Method_ = 1;
    }
    if (this.Department_.Transfer_Method_Id == 2) {
      this.Transfer_Method_ = 2;
    }
    if (this.Department_.Transfer_Method_Id == 0) {
      this.Transfer_Method_ = 0;
    }

    this.Get_Status_Selection_Edit(this.Department_.Department_Id);

    for (var i = 0; i < this.Department_Status_Dropdown_Data.length; i++) {
      if (
        this.Department_.Department_Status_Id ==
        this.Department_Status_Dropdown_Data[i].Department_Status_Id
      )
        this.Department_Status_Dropdown_ =
          this.Department_Status_Dropdown_Data[i];
    }
  }
}
