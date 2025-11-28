import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Country_Service } from "../../../services/Country.service";
import { DialogBox_Component } from "../DialogBox/DialogBox.component";
import { Country } from "../../../models/Country";
import { MatDialog } from "@angular/material";
import {
  ROUTES,
  Get_Page_Permission,
} from "../../../components/sidebar/sidebar.component";
import { Checklist } from "app/models/Checklist";
import { ProcessService } from "../../../services/Process.Service";
import { Student_Service } from "app/services/Student.Service";


@Component({
  selector: "app-Country",
  templateUrl: "./Country.component.html",
  styleUrls: ["./Country.component.css"],
})
export class CountryComponent implements OnInit {
  Country_Data: Country[];
  Country_Data1: Country[];
  Country_: Country = new Country();
  ProcessId = null;
  Country_Name_Search: string;
  Entry_View: boolean = true;
  Front_end_View: boolean = true;
  EditIndex: number;
  Total_Entries: number;
  color = "primary";
  mode = "indeterminate";
  value = 50;
  issLoading: boolean;
  Permissions: any;
  Country_Edit: boolean;
  Country_Save: boolean;
  Country_Delete: boolean;
  Checklist_View: boolean = false;
  myInnerHeight: number;
  Login_User: string = "0";

  Checklist_Data: Checklist[];
  Checklist_: Checklist = new Checklist();
  Checklist_Search: string;
	If_file_changed: boolean=false;
  // Variable of Process List
  processList = [];

  constructor(
    public Country_Service_: Country_Service,
    private route: ActivatedRoute,
    private router: Router,
    public dialogBox: MatDialog,
    private processService: ProcessService,
    public Student_Service_: Student_Service
  ) {}

  ngOnInit() {
    this.Login_User = localStorage.getItem("Login_User");
    this.issLoading = true;
    this.Page_Load();
    this.getProcessList();
  }

  // Function to get all process list
  getProcessList() {
    this.processService.getAll().subscribe(
        (data) => {
            this.processList = data.data;
        },
        (err) => {
            this.processList = [];
        }
    )
  }

  Page_Load() {
    this.myInnerHeight = window.innerHeight;
    this.myInnerHeight = this.myInnerHeight - 220;
    this.Get_Menu_Status(2, this.Login_User);
    this.Clr_Country();
    this.Search_Country();
    this.Entry_View = false;
    this.Front_end_View = true;
  }
  Get_Menu_Status(Menu_id, Login_user_id) {
    this.issLoading = false;
    this.Country_Service_.Get_Menu_Status(Menu_id, Login_user_id).subscribe(
      (Rows) => {
        if (Rows[0][0] == undefined) {
          if (Menu_id == 2) {
            localStorage.removeItem("token");
            this.router.navigateByUrl("Home_Page");
          }
        } else if (Rows[0][0].View > 0) {
          if (Menu_id == 2) {
            this.Permissions = Rows[0][0];
            if (this.Permissions == undefined || this.Permissions == null) {
              localStorage.removeItem("token");
              this.router.navigateByUrl("Home_Page");
            }

            this.Country_Edit = this.Permissions.Edit;
            this.Country_Save = this.Permissions.Save;
            this.Country_Delete = this.Permissions.Delete;
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
  Create_New() {
    this.Entry_View = true;
    this.Front_end_View = false;
    this.Clr_Country();
  }
  Close_Click() {
    this.Entry_View = false;
    this.Front_end_View = true;
  }
  Close_Click_checklist() {
    this.Entry_View = false;
    this.Front_end_View = true;
    this.Checklist_View = false;
  }
  trackByFn(index, item) {
    return index;
  }

  Clr_Country() {
    this.Country_.Country_Id = 0;
    this.Country_.Country_Name = "";
    this.Country_.Gold=0;
    this.Country_.Platinum=0;
    this.Country_.Silver=0;
    this.Country_.Image_Photo='';
    this.Country_.ImageFile_Doc='';
    


  }
  Search_Country() {
    this.issLoading = true;
    this.Country_Service_.Search_Country(this.Country_Name_Search).subscribe(
      (Rows) => {
        this.Country_Data = Rows[0];
        this.Total_Entries = this.Country_Data.length;
        if (this.Country_Data.length == 0) {
          this.issLoading = false;
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

  Delete_Country(Country_Id, index) {
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
        this.Country_Service_.Delete_Country(Country_Id).subscribe(
          (Delete_status) => {
            if (Delete_status[0][0].Country_Id_ > 0) {
              this.Country_Data.splice(this.EditIndex, 1);
              const dialogRef = this.dialogBox.open(DialogBox_Component, {
                panelClass: "Dialogbox-Class",
                data: { Message: "Deleted", Type: "false" },
              });
              this.Search_Country();
            } else if (Number(Delete_status[0][0].Country_Id_) == -2) {
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
  Save_Country1() {
    const uploadPromises = [];
    if (
      this.Country_.Country_Name == undefined ||
      this.Country_.Country_Name == null ||
      this.Country_.Country_Name == undefined ||
      this.Country_.Country_Name == ""
    ) {
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "Enter Country", Type: "3" },
      });
      return;
    }

    this.issLoading = true;

    const data = {
        ...this.Country_,
        ProcessId: this.ProcessId,
    }

debugger
    this.Country_Service_.Save_Country(data).subscribe(
      (Save_status) => {
        debugger
        Save_status = Save_status[0];
        
        // Get rid Process selection
        this.ProcessId = null;

        if (Number(Save_status[0].Country_Id_) > 0) {
          const dialogRef = this.dialogBox.open(DialogBox_Component, {
            panelClass: "Dialogbox-Class",
            data: { Message: "Saved", Type: "false" },
          });
          this.Search_Country();
          this.Clr_Country();
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



  Save_Country() {
    // Validate Country Name
    if (
      this.Country_.Country_Name == undefined ||
      this.Country_.Country_Name == null ||
      this.Country_.Country_Name == undefined ||
      this.Country_.Country_Name == ""
    ) {
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "Enter Country", Type: "3" },
      });
      return;
    }
  
    // Set loading state
    this.issLoading = true;
  
    const data = {
      ...this.Country_,
      ProcessId: this.ProcessId,
    };
  
    // Function to handle file upload and country save
    const handleFileUploadAndSave = async () => {
      try {
        // Upload the file first
        const key = await this.upload(data.ImageFile_Doc, this.Country_.Country_Name);
  
        // If the upload is successful, set the S3 key as the file name
        if (typeof key === 'string') {
          console.log('Uploaded file key: ', key);
          data.File_Key = key; // Assuming File_Name is the field for the S3 key
        }
  debugger
        // Now save the country data
        const saveStatus = await this.Country_Service_.Save_Country(data).toPromise();
  debugger
        // Handle success
        if (Number(saveStatus[0][0].Country_Id_) > 0) {
          const dialogRef = this.dialogBox.open(DialogBox_Component, {
            panelClass: 'Dialogbox-Class',
            data: { Message: 'Saved', Type: 'false' },
          });
          this.Search_Country();
          this.Clr_Country();
        } else {
          const dialogRef = this.dialogBox.open(DialogBox_Component, {
            panelClass: 'Dialogbox-Class',
            data: { Message: 'Error Occurred', Type: '2' },
          });
        }
      } catch (error) {
        // Handle errors for both file upload and country save
        const dialogRef = this.dialogBox.open(DialogBox_Component, {
          panelClass: 'Dialogbox-Class',
          data: { Message: error.message || 'An error occurred', Type: '2' },
        });
      } finally {
        // Reset loading state
        this.issLoading = false;
      }
    };
  
    // Call the function to handle file upload and country save
    handleFileUploadAndSave();
  }
  
  Edit_Country(Country_e: Country, index) {
    this.Entry_View = true;
    this.Front_end_View = false;
    this.Country_ = Country_e;
    this.Country_ = Object.assign({}, Country_e);
    this.ProcessId = Country_e.ProcessId;
  }

  Add_Checklist(Country_e: Country, index) {
    this.Entry_View = false;
    this.Front_end_View = false;
    //this.Entry_View=true;
    this.Checklist_View = true;
    this.Country_ = Country_e;
    this.Country_ = Object.assign({}, Country_e);
    this.Get_Checklist_Country(this.Country_.Country_Id);
  }

  Get_Checklist_Country(Country_Id) {
    this.issLoading = true;

    this.Country_Service_.Get_Checklist_Country(Country_Id).subscribe(
      (Rows) => {
        this.issLoading = false;
        this.Country_Data1 = Rows[0];
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

  Save_Checklist() {
    if (
      this.Checklist_.Checklist_Name === undefined ||
      this.Checklist_.Checklist_Name == null ||
      this.Checklist_.Checklist_Name == ""
    ) {
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "Enter Checklist ", Type: "3" },
      });
      return;
    } else if (
      this.Checklist_.Checklist_Type === undefined ||
      this.Checklist_.Checklist_Type == null ||
      this.Checklist_.Checklist_Type == 0
    ) {
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "Select Checklist Type", Type: "3" },
      });
      return;
    }

    this.issLoading = true;

    this.Checklist_.Country_Id = this.Country_.Country_Id;
    if (this.Checklist_.Checklist_Type == 1) {
      this.Checklist_.Checklist_Type_Name = "Pre Visa";
    } else {
      this.Checklist_.Checklist_Type_Name = "Pre Admission";
    }

    this.Country_Service_.Save_Checklist(this.Checklist_).subscribe(
      (Save_status) => {
        Save_status = Save_status[0];
        if (Number(Save_status[0].Checklist_Id_) > 0) {
          const dialogRef = this.dialogBox.open(DialogBox_Component, {
            panelClass: "Dialogbox-Class",
            data: { Message: "Saved", Type: "false" },
          });
          this.Clr_Checklist();
          this.Get_Checklist_Country(this.Country_.Country_Id);
          //this.Close_Click();
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

  Edit_Checklist(Checklist_e: Checklist, index) {
    this.Checklist_ = Checklist_e;
    this.Checklist_ = Object.assign({}, Checklist_e);
  }

  Delete_Checklist(Checklist_Id, index) {
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

        this.Country_Service_.Delete_Checklist(Checklist_Id).subscribe(
          (Delete_status) => {
            Delete_status = Delete_status[0];
            Delete_status = Delete_status[0].DeleteStatus_;
            this.Country_Data1.splice(index, 1);
            if (Delete_status == 1) {
              this.Country_Data1.splice(index, 1);
              const dialogRef = this.dialogBox.open(DialogBox_Component, {
                panelClass: "Dialogbox-Class",
                data: { Message: "Deleted", Type: "false" },
              });
              this.Get_Checklist_Country(this.Country_.Country_Id);
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

  Clr_Checklist() {
    this.Checklist_.Checklist_Id = 0;
    this.Checklist_.Checklist_Name = "";
    this.Checklist_.Checklist_Type = 1;
    this.Checklist_.Checklist_Type_Name = "";
  }


  update_commission_Country(){
    debugger
    this.Country_Service_.update_commission_Country(this.Country_.Country_Id).subscribe(
      (Rows) => {
        debugger
        this.issLoading = false;
        // Display success dialog
        const dialogRef = this.dialogBox.open(DialogBox_Component, {
          panelClass: "Dialogbox-Class",
          data: { Message: "Updated Sucessfully", Type: "false" },
        });
      },
      (error) => {
        this.issLoading = false;
        // Display error dialog
        const dialogRef = this.dialogBox.open(DialogBox_Component, {
          panelClass: "Dialogbox-Class",
          data: { Message: "Error Occured", Type: "2" },
        });
      }
    );
  }


  File_Change_std_Doc(event: Event,Student_Documents_) {
		console.log('Student_Documents_: ', Student_Documents_);
		this.If_file_changed = true;
		const file = (event.target as HTMLInputElement).files;
		
		const fileSizeInMB = file[0].size / (1024 * 1024); // Convert bytes to megabytes

		if (fileSizeInMB > 3) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "File size exceeds 3 MB. Please select a smaller file.", Type: "3" },
			  });
		  // You can also reset the input if needed
		  // event.target.value = null;
		} else {
		  // Proceed with the file upload or other actions
		  console.log('File size is within the limit.');
		  Student_Documents_.ImageFile_Doc = file;
		Student_Documents_.Image_Photo = file[0].name;
		}

	  }

    upload(doc: FileList | null,Student_Id): Promise<string | void> {
      return new Promise<string | void>((resolve, reject) => {
        if (this.If_file_changed && doc) {
        const file = doc.item(0);
        if (file) {
          this.Student_Service_.uploadFile(file,Student_Id)
          .then((key) => {
            resolve(key);
          })
          .catch((error) => reject(error));
        } else {
          reject(new Error("No file found"));
        }
        } else {
        resolve();
        }
      });
      }

}
