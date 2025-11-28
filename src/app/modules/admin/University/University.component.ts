import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { University_Service } from "../../../services/University.service";
import { DialogBox_Component } from "../DialogBox/DialogBox.component";
import { University } from "../../../models/University";
import { Status } from "../../../models/Status";
import { MatDialog } from "@angular/material";
import {
  ROUTES,
  Get_Page_Permission,
} from "../../../components/sidebar/sidebar.component";
import { Country_Service } from "../../../services/Country.service";
import { ProcessService } from "../../../services/Process.Service";
import { Country } from "app/models/Country";
import { Process } from "app/models/process";
import { Document } from '../../../models/Document';
import { Document_Service } from "app/services/Document.service";
@Component({
  selector: "app-University",
  templateUrl: "./University.component.html",
  styleUrls: ["./University.component.css"],
})
export class UniversityComponent implements OnInit {
  University_Data: University[];
  University_: University = new University();
  University_Search: University = new University();

  University_Name_Search: string;


  Document_Data:Document[]
Document_:Document= new Document();

Document_View_Data:Document[];
  Entry_View: boolean = true;
  profile_View: boolean = true;
  application_View: boolean = true;

  Country_Data_Filter: Country[];

  EditIndex: number;
  Total_Entries: number;
  color = "primary";
  mode = "indeterminate";
  value = 50;
  issLoading: boolean;
  Permissions: any;
  myInnerHeight: number;

  University_Edit: boolean;
  University_Save: boolean;
  University_Delete: boolean;

  Profile_Country_: Country = new Country();

  Document_Data_Temp:Document[]=[];
  Agent_Document_Data_Temp:Document[]=[];
  Status_: Status = new Status();
  Status_Data: Status[];
  Status_Search: Status = new Status();

  ImageFile: any;
  File: string;

  University_File: string;
  University_Image: any;
  University_Photo = [];
  Login_User: string = "0";

  Country_: any;
  // Country_Data = [];
  Country_Data :Country[];
  Country_Data_Temp :Country = new Country();

  processList :Process[];
  processList_Temp :Process = new Process();

  processId: any ;
  // processList = [];

  constructor(
    public University_Service_: University_Service,public Document_Service_:Document_Service,public Country_Service_: Country_Service,
    private route: ActivatedRoute,
    private router: Router,
    public dialogBox: MatDialog,
    private countryService: Country_Service,
    private processService: ProcessService,
  ) {}
  ngOnInit() {
    this.Login_User = localStorage.getItem("Login_User");
    this.issLoading = true;
    this.Page_Load();
    this.getCountryData();
    this.getProcessList();
  }

  chooseCountryProcess() {
    debugger
    // this.processId= this.Country_.ProcessId;

    for (var i = 0; i < this.processList.length; i++) {
      if (this.Country_.ProcessId == this.processList[i].Process_Id)
        this.processId = this.processList[i];
    }

  }

  getProcessList() {
    debugger
    this.processService.getAll().subscribe(
      (data) => {
        debugger
        // this.processList = data.data;


        this.processList = data.data;
        this.processList_Temp.Process_Id = 0;
        this.processList_Temp.Process_Name = "Select";
        this.processList.unshift(Object.assign({}, this.processList_Temp));
        this.processId = this.processList[0];



      },
      (err) => {
        this.processList = [];
      }
    )
  }

  getCountryData() {
    debugger
    this.countryService.Search_Country_Typeahead("").subscribe((data) => {
      // this.Country_Data = data[0];
debugger

      this.Country_Data = data[0].slice();
      this.Country_Data_Temp.Country_Id = 0;
      this.Country_Data_Temp.Country_Name = "Select";
      this.Country_Data.unshift(Object.assign({}, this.Country_Data_Temp));
      this.Country_ = this.Country_Data[0];


    });
  }

  Page_Load() {
    this.myInnerHeight = window.innerHeight;
    this.myInnerHeight = this.myInnerHeight - 230;
    this.Get_Menu_Status(7, this.Login_User);
    this.Clr_University();
    this.Load_Document_Data();
    this.Search_University();
  
    this.Entry_View = false;
    this.profile_View = true;
    this.application_View = true;
  }
  Get_Menu_Status(Menu_id, Login_user_id) {
    this.issLoading = false;
    this.University_Service_.Get_Menu_Status(Menu_id, Login_user_id).subscribe(
      (Rows) => {
        if (Rows[0][0] == undefined) {
          if (Menu_id == 7) {
            localStorage.removeItem("token");
            this.router.navigateByUrl("Home_Page");
          }
        } else if (Rows[0][0].View > 0) {
          if (Menu_id == 7) {
            this.Permissions = Rows[0][0];
            if (this.Permissions == undefined || this.Permissions == null) {
              localStorage.removeItem("token");
              this.router.navigateByUrl("Home_Page");
            }

            this.University_Edit = this.Permissions.Edit;
            this.University_Save = this.Permissions.Save;
            this.University_Delete = this.Permissions.Delete;
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

  Load_Document_Data() {
    debugger; // Add breakpoint for debugging
    this.Document_Service_.Load_Document_Data().subscribe(
      Rows => {
        debugger
        this.Document_View_Data = Rows.Document_Datatype;
        console.log('this.Document_View_Data: ', this.Document_View_Data);
        console.log('Document_Datatype: ', Rows.Document_Datatype);
        this.issLoading = false;
      },
      error => {
        this.issLoading = false;
        const dialogRef = this.dialogBox.open( DialogBox_Component, {
          panelClass: 'Dialogbox-Class',
          data: { Message: 'Error Occured', Type: "2" }
        });
        // this.Search_Mandatory_Document();
      }
      
    );
  }
  Create_New() {
    this.Entry_View = true;
    this.Clr_University();
    this.profile_View = true;
    this.application_View = false;
  }
  Close_Click() {
    this.Entry_View = false;
  }
  trackByFn(index, item) {
    return index;
  }
  Clr_University() {
    this.University_.University_Id = 0;
    this.University_.University_Name = "";
    this.University_.Gold=0;
    this.University_.Platinum=0;
    this.University_.Silver=0;

    if (this.Country_Data != null && this.Country_Data != undefined)
			this.Country_ = this.Country_Data[0];

      if (this.processList != null && this.processList != undefined)
			this.processId = this.processList[0];


      if (this.Document_View_Data != undefined) {
        for (var q = 0; q < this.Document_View_Data.length; q++) {
          this.Document_View_Data[q].Agent_Mandatory = false;
          this.Document_View_Data[q].Agent_Document = false;
        }
      }

     
      
      // for(var m=0;m<this.Document_View_Data.length;m++)
      //   {
      //   this.Document_View_Data[m].Agent_Document=false;}
        
      // for(var m=0;m<this.Document_View_Data.length;m++)
      //   {
      //   this.Document_View_Data[m].Agent_Mandatory=false;}
  }
  Search_University() {
    var Country_Id=0

    if (this.Profile_Country_ != undefined && this.Profile_Country_ != null)
      if (this.Profile_Country_.Country_Id != undefined && this.Profile_Country_.Country_Id != null)
      Country_Id = this.Profile_Country_.Country_Id;

    this.issLoading = true;
    this.University_Service_.Search_University(
      this.University_Name_Search,Country_Id
    ).subscribe(
      (Rows) => {
        this.University_Data = Rows[0];
        this.Total_Entries = this.University_Data.length;
        if (this.University_Data.length == 0) {
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

  Search_Country_Typeahead(event: any) {
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


  Delete_University(University_Id, index) {
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
        this.University_Service_.Delete_University(University_Id).subscribe(
          (Delete_status) => {
            if (Delete_status[0][0].University_Id_ > 0) {
              this.University_Data.splice(this.EditIndex, 1);
              const dialogRef = this.dialogBox.open(DialogBox_Component, {
                panelClass: "Dialogbox-Class",
                data: { Message: "Deleted", Type: "false" },
              });
              this.Search_University();
            } else if (Number(Delete_status[0][0].University_Id_) == -2) {
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

  Save_University() {
    if (
      this.University_.University_Name == undefined ||
      this.University_.University_Name == null ||
      this.University_.University_Name == undefined ||
      this.University_.University_Name == ""
    ) {
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "Enter University", Type: "3" },
      });
      return;
    }
 
  
debugger
    if (
      this.Country_ == undefined ||
      this.Country_== null ||
      this.Country_.Country_Id == undefined || this.Country_.Country_Id == 0 ||
      this.Country_.Country_Id  == 0
    ) {
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "Select Country", Type: "3" },
      });
      return;
    }

    if (
      this.processId == undefined ||
      this.processId== null || this.processId== null || this.processId.Process_Id== 0

    ) {
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "Select Process", Type: "3" },
      });
      return;
    }

    this.Document_Data_Temp = [];
    
    for (var p = 0; p < this.Document_View_Data.length; p++) {
        if (Boolean(this.Document_View_Data[p].Agent_Mandatory) == true ||
            Boolean(this.Document_View_Data[p].Agent_Document) == true) {
            this.Document_Data_Temp.push(this.Document_View_Data[p]);
        }
    }

    this.University_.Document_View_Data = this.Document_Data_Temp;
    console.log('Document_Data_Temp: ', this.Document_Data_Temp);

    // this.Document_.Agent_Document_View_Data = this.Agent_Document_Data_Temp;


    this.issLoading = true;
debugger
    this.University_.Country_Id = this.Country_["Country_Id"];
    this.University_.processId = this.processId.Process_Id;
    console.log(this.University_);
   
    this.University_Service_.Save_University(this.University_).subscribe(
      (Save_status) => {
       debugger
        Save_status = Save_status[0];
        if (Number(Save_status[0].University_Id_) > 0) {
          const dialogRef = this.dialogBox.open(DialogBox_Component, {
            panelClass: "Dialogbox-Class",
            data: { Message: "Saved", Type: "false" },
          });
          this.Search_University();
          this.Clr_University();
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
  Edit_University(University_e: University, index) {
    debugger
    this.Entry_View = true;
    this.University_ = University_e;
    this.University_ = Object.assign({}, University_e);


    for (var i = 0; i < this.Country_Data.length; i++) {
      if (this.University_.Country_Id == this.Country_Data[i].Country_Id)
        this.Country_ = this.Country_Data[i];
      }
        for (var i = 0; i < this.processList.length; i++) {
          if (this.University_.processId == this.processList[i].Process_Id)
            this.processId = this.processList[i];
        }

        this.Get_Mandatory_Document_Edit(this.University_.University_Id);
    
    // this.Country_ = this.University_.Country_Id;
  }
  Get_Mandatory_Document_Edit(University_Id){
    console.log('University_Id: ', University_Id);
      
      this.Document_Service_.Get_Mandatory_Document_Edit(University_Id).subscribe(Rows => 
        {
          debugger
            console.log('Rows: ', Rows);
              
      
         
          this.Document_View_Data = Rows[0];
          for(var i=0;i<this.Document_View_Data.length;i++)
          {
          if (this.Document_View_Data[i].Agent_Document.toString()=='1')
          {
          this.Document_View_Data[i].Agent_Document=true
          }
          else 
          {
          this.Document_View_Data[i].Agent_Document=false
          }
          if (this.Document_View_Data[i].Agent_Mandatory.toString() == '1') {
            this.Document_View_Data[i].Agent_Mandatory = true;
          } else {
            this.Document_View_Data[i].Agent_Mandatory = false;
          }
          
          }
          

 // Handle Agent_Mandatory


          
      
          
          this.issLoading=false;
          },
        Rows => { 
          this.issLoading=false;
       const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}}); });

  }


  update_commission(){
    debugger
    this.University_Service_.update_commission(this.University_.University_Id).subscribe(
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
}
