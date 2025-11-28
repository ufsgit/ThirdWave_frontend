import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Course_Import_Service } from "../../../services/Course_Import.service";
import { Student_Import } from "../../../models/Student_Import";
import { Import_Master } from "../../../models/Import_Master";
import { Student_Import_Details } from "../../../models/Student_Import_Details";
import { Course } from "../../../models/Course";
import {
	ROUTES,
	Get_Page_Permission,
} from "../../../components/sidebar/sidebar.component";
import { MomentDateAdapter } from "@angular/material-moment-adapter";
import {
	DateAdapter,
	MAT_DATE_FORMATS,
	MAT_DATE_LOCALE,
} from "@angular/material/core";
import * as _moment from "moment";
import { default as _rollupMoment } from "moment";
 import * as XLSX from "ts-xlsx";
const moment = _rollupMoment || _moment;
export const MY_FORMATS = {
	parse: {
		dateInput: "DD/MM/YYYY",
	},
	display: {
		dateInput: "DD/MM/YYYY",
		monthYearLabel: "MMM YYYY",
		dateA11yLabel: "DD/MM/YYYY",
		monthYearA11yLabel: "MMMM YYYY",
	},
};
import {
	MatDialog,
	MatDialogRef,
	MAT_DIALOG_DATA,
	MatDialogConfig,
} from "@angular/material";
import { DialogBox_Component } from "../DialogBox/DialogBox.component";
import { Branch } from "../../../models/Branch";
import { Department } from "../../../models/Department";
import { Department_Status } from "../../../models/Department_Status";
import { User_Details } from "../../../models/User_Details";
import { Student_Service } from "../../../services/Student.service";
import { Enquiry_Source } from "../../../models/Enquiry_Source";
import { Enquiry_Source_Service } from "../../../services/Enquiry_Source.service";
import { Student_Import_Service } from "../../../services/Student_Import.Service";
import { Student_FollowUp } from "../../../models/Student_FollowUp";
import { Student } from "../../../models/Student";
import { User_Sub } from "app/models/User_Sub";

@Component({
	selector: "app-Data_Migration",
	templateUrl: "./Data_Migration.component.html",
	styleUrls: ["./Data_Migration.component.css"],
	providers: [
		{
			provide: DateAdapter,
			useClass: MomentDateAdapter,
			deps: [MAT_DATE_LOCALE],
		},
		{ provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
	],
})
export class Data_MigrationComponent implements OnInit {
	Enquiry_Source_Name_Search: string;

	Student_Import: Student_Import = new Student_Import();
	Course_Import_Name_Search = "";
	Entry_View: boolean = true;
	Duplicate_View: boolean = true;
	Search_view: boolean = true;
	myInnerHeight: number;
	myHeight: number;

	Total_Import_Entries: number;
	Total_Duplicate_Data: number;
	Total_Imports: number;

	EditIndex: number;
	Total_Entries: number = 0;
	Data: string;
	color = "primary";
	mode = "indeterminate";
	value = 50;
	issLoading: boolean;
	Permissions: any;
	Course_Import_Edit: boolean;
	Course_Import_Save: boolean;
	Course_Import_Delete: boolean;
	year: any;
	month: any;
	day: any;
	date: any;
	isLoading = false;
	Login_Id: string;
	Search_FromDate: Date = new Date();
	Search_ToDate: Date = new Date();
	Is_Expiry_Show: boolean = true;
	Look_In_Date: Boolean = true;
	Employee_Edit: boolean = false;
	Employee_Name: string;
	Employee_Id: number;
	arrayBuffer: any;
	file: File;
	Key_Value_Name: string = "";
	Store_Id: number;
	Store_Name: string;
	Store_Edit: boolean = false;
	User_Type: number;
	Course_Import_Details_Data: Course[];
	Student_Import_Details_Data: Student_Import_Details[];
	ImageFile: any;
	Display_File_Name_: string;
	Next_FollowUp_Date_Visible: boolean = true;

	Excel_File: [];

	Course_Import_Index: number;
	Student_Import_: Student_Import = new Student_Import();
	Course_Import_Data: any;
	Import_Master_: Import_Master;
	Search_Student_Import_Details_Data: any;

	FollowUp_Branch_: Branch = new Branch();
	Search_Branch: Branch = new Branch();
	Followup_Branch_Data: Branch[];

	FollowUp_Department_: Department = new Department();
	Followup_Department_Data: Department[];
	Followup_Department_Data_Check: Department[];

	FollowUp_Status_: Department_Status = new Department_Status();
	Status_Temp: Department_Status = new Department_Status();
	Followup_Status_Data: Department_Status[];

	Followup_Users_Data: User_Details[];
	Followup_Users_: User_Details = new User_Details();
	Users_Temp: User_Details = new User_Details();

	User_Sub_Data_Temp:User_Sub[]=[];
User_Sub_Data:User_Sub[];
User_Sub_:User_Sub=new User_Sub;

	Enquiry_Source_Data: Enquiry_Source[];
	Enquiry_Source_Search_: Enquiry_Source = new Enquiry_Source();
	Enquiry_Source_: Enquiry_Source = new Enquiry_Source();
	Enquiry_Source_Search_Data: Enquiry_Source[];
	Enquiry_Source_Temp: Enquiry_Source = new Enquiry_Source();
	Enquiry_Source_Search_Temp: Enquiry_Source = new Enquiry_Source();

	FollowUp_: Student_FollowUp = new Student_FollowUp();
	Student_Duplicate_Array: Student[];
	Login_User: string = "0";
	Branch_Id: number;
	checkbox: boolean = false;

	constructor(
		public Enquiry_Source_Service_: Enquiry_Source_Service,
		public Student_Service_: Student_Service,
		public Student_Import_Service_: Student_Import_Service,
		private router: Router,
		public dialogBox: MatDialog
	) {}
	ngOnInit() {
		
		this.User_Type = Number(localStorage.getItem("User_Type"));

		this.Login_Id = localStorage.getItem("Login_User");
		this.Branch_Id = Number(localStorage.getItem("Branch"));
		// this.Permissions = Get_Page_Permission(27);

		// if(this.Permissions==undefined || this.Permissions==null)
		// {
		// localStorage.removeItem('token');
		// this.router.navigateByUrl('Home_Page');
		// }
		// else
		{
			// this.Course_Import_Edit=this.Permissions.Edit;
			// this.Course_Import_Save=this.Permissions.Save;
			// this.Course_Import_Delete=this.Permissions.Delete;
			this.Page_Load();
		}
	}
	trackByFn(index, item) {
		return index;
	}
	// Download_Excel()
	// {
	//         this.Student_Service_.exportExcel(,'Excel_File')

	// }

	// Search_Users_Import() {
	// 	
	// 	this.issLoading = true;
		
		
	// 	this.Student_Service_.Search_Users_Import('').subscribe(
	// 		(Rows) => {
	// 			;
	// 			this.User_Sub_Data = Rows[0];
	// 			this.issLoading = false;
	// 		},
	// 		(Rows) => {
	// 			this.issLoading = false;
	// 		}
	// 	);
	// }



	Create_New() {
		this.Entry_View = true;
		this.Search_view = false;
		this.Duplicate_View = false;
		this.Clr_Student_Import();
	}
	Close_Click() {
		this.Search_view = true;
		this.Entry_View = false;
		this.Duplicate_View = false;
		this.Is_Expiry_Show = true;
		this.FollowUp_Branch_ = null;
		this.FollowUp_Department_ = null;
		this.FollowUp_Status_ = null;
		this.Followup_Users_ = null;
		this.Enquiry_Source_ = null;
		this.FollowUp_.Next_FollowUp_Date = new Date();
		this.FollowUp_.Next_FollowUp_Date = this.New_Date(
			this.FollowUp_.Next_FollowUp_Date
		);
		this.Search_FromDate = new Date();
		this.Search_FromDate = this.New_Date(this.Search_FromDate);
		this.Search_ToDate = new Date();
		this.Search_ToDate = this.New_Date(this.Search_ToDate);
	}

	Clr_Student_Import() {
		this.Student_Import_Details_Data = [];
		this.Display_File_Name_ = null;
		this.FollowUp_.Next_FollowUp_Date = new Date();
		this.FollowUp_.Next_FollowUp_Date = this.New_Date(
			this.FollowUp_.Next_FollowUp_Date
		);

		this.FollowUp_Branch_ =null;
		this.Followup_Branch_Data =[];
		this.Enquiry_Source_ =null;
		this.Enquiry_Source_Data =[];
		this.FollowUp_Department_ =null;
		this.Followup_Department_Data =[];
		this.FollowUp_Status_ =null;
		this.Followup_Status_Data =[];
		this.Followup_Users_ =null;
		this.Followup_Users_Data =[];
	}

	Page_Load() {
		this.myInnerHeight = window.innerHeight;
		this.myInnerHeight = this.myInnerHeight - 530;
		this.myHeight = window.innerHeight;
		this.myHeight = this.myHeight - 400;
		this.Search_view = false;
		this.Entry_View = true;
		this.Duplicate_View = false;
		this.User_Sub_.Check_Box=false;
		// this.Search_Users_Import();
		if (this.User_Type == 2) {
			this.Store_Edit = true;
			//this.Course_Import_Details_Data()
			this.FollowUp_.Next_FollowUp_Date = new Date();
			this.FollowUp_.Next_FollowUp_Date = this.New_Date(
				this.FollowUp_.Next_FollowUp_Date
			);

			this.Clr_Student_Import();
			
			this.Get_Menu_Status(123, this.Login_Id);

			//this.FollowUp_.Next_FollowUp_Date=this.New_Date(this.FollowUp_.Next_FollowUp_Date);
		}
	}

	Get_Menu_Status(Menu_id, Login_user_id) {
		this.issLoading = false;
		this.Student_Service_.Get_Menu_Status(Menu_id, Login_user_id).subscribe(
			(Rows) => {
				
				if (Rows[0][0] == undefined) {
					if (Menu_id == 123) {
						localStorage.removeItem("token");
						this.router.navigateByUrl("Home_Page");
					}
				} else if (Rows[0][0].View > 0) {
					if (Menu_id == 123) {
						this.Permissions = Rows[0][0];
						if (this.Permissions == undefined || this.Permissions == null) {
							localStorage.removeItem("token");
							this.router.navigateByUrl("Home_Page");
						}
						this.Course_Import_Edit = this.Permissions.Edit;
						this.Course_Import_Save = this.Permissions.Save;
						this.Course_Import_Delete = this.Permissions.Delete;
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

	Search_Student_Import() {
		var look_In_Date_Value = 0;
		if (this.Look_In_Date == true) look_In_Date_Value = 1;
		this.issLoading = true;

		this.Student_Import_Service_.Search_Student_Import(
			moment(this.Search_FromDate).format("YYYY-MM-DD"),
			moment(this.Search_ToDate).format("YYYY-MM-DD"),
			look_In_Date_Value
		).subscribe(
			(Rows) => {
				this.Search_Student_Import_Details_Data = Rows[0];

				//this.Total_Entries=this.Search_Student_Import_Details_Data.length;

				this.issLoading = false;

				if (this.Search_Student_Import_Details_Data.length == 0) {
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

	// Delete_Course_Import(User_Id,index)
	// {

	// const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Do you want to delete ?',Type:"true",Heading:'Confirm'}});
	// this.Search_Student_Import();
	// dialogRef.afterClosed().subscribe(result =>
	// {

	// if(result=='Yes')
	// {

	// this.Course_Import_Details_Data.splice(index, 1);

	// const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Deleted',Type:"false"}});

	// }
	// });
	// }

	Delete_Student_Import(Student_Import_Id, index) {
		this.Student_Import_Details_Data.splice(index, 1);
	}
	Focus_It() {
		setTimeout("$('[name=Followup_Status]').focus();", 0);
	}

	incomingfile(event) {
		
		this.file = event.target.files[0];
		// this.ImageFile = this.file;
		this.Display_File_Name_ = this.file.name;
		//const file = (event.target as HTMLInputElement).files
		this.Upload();
	}

	Branch_Change() {
		this.FollowUp_Department_ = null;
		this.Followup_Users_ = null;
		this.FollowUp_Status_ = null;
		this.Followup_Department_Data = [];
		this.Followup_Department_Data_Check = [];
		this.Followup_Users_Data = [];
		this.Followup_Status_Data = [];
	}
	Department_Change() {
		//  document.getElementById("Followup_Status").focus();
		$("[name=Followup_Status]").focus();
		this.Focus_It();
		this.Followup_Users_ = null;
		this.FollowUp_Status_ = null;
		this.Followup_Users_Data = [];
		this.Followup_Status_Data = [];
		this.Followup_Department_Data = [];
		if (this.FollowUp_Department_.Department_FollowUp == true)
			this.Next_FollowUp_Date_Visible = false;
		else this.Next_FollowUp_Date_Visible = true;
		this.FollowUp_.Next_FollowUp_Date = new Date();
		this.FollowUp_.Next_FollowUp_Date = this.New_Date(
			this.FollowUp_.Next_FollowUp_Date
		);
	}
	New_Date(Date_) {
		this.date = Date_;
		this.year = this.date.getFullYear();
		this.month = this.date.getMonth() + 1;
		if (this.month < 10) {
			this.month = "0" + this.month;
		}
		this.day = this.date.getDate().toString();
		if (Number.parseInt(this.day) < 10) {
			this.day = "0" + this.day;
		}
		this.date = this.year + "-" + this.month + "-" + this.day;
		return this.date;
	}
	
	
	// Upload() {
	// 	let fileReader = new FileReader();
	// 	fileReader.onload = (e) => {
	// 		this.arrayBuffer = fileReader.result;
	// 		var data = new Uint8Array(this.arrayBuffer);
	// 		var arr = new Array();
	// 		for (var i = 0; i != data.length; ++i)
	// 			arr[i] = String.fromCharCode(data[i]);
	// 		var bstr = arr.join("");
	// 		var workbook = XLSX.read(bstr, { type: "binary" });
	// 		var first_sheet_name = workbook.SheetNames[0];
	// 		var worksheet = workbook.Sheets[first_sheet_name];

	// 		this.Student_Import_Details_Data = XLSX.utils.sheet_to_json(worksheet, {
	// 			raw: true,
	// 		});

	// 		this.Student_Import_Details_Data.sort();
	// 	};

	// 	fileReader.readAsArrayBuffer(this.file);
	// }

	Upload() {

		
        let fileReader = new FileReader();
        fileReader.onload = (e) => {
            this.arrayBuffer = fileReader.result;
            var data = new Uint8Array(this.arrayBuffer);
            var arr = new Array();
            for (var i = 0; i != data.length; ++i)
                arr[i] = String.fromCharCode(data[i]);
            var bstr = arr.join("");
			var worksheet;
            var workbook = XLSX.read(bstr, { type: "binary" });
            var first_sheet_name = workbook.SheetNames[0];
             worksheet = workbook.Sheets[first_sheet_name];
            this.Student_Import_Details_Data = XLSX.utils.sheet_to_json(worksheet, {
                raw: true,
            });
			
            var Date_Temp,Date_Tempc;
            for (var j=2;j-1<=this.Student_Import_Details_Data.length;j++) 
            {
                      this.Student_Import_Details_Data[j-2].Slno=(worksheet['A'+j]!=undefined) ? worksheet['A'+j].v :''
                    //   var s = worksheet['B'+j].v;
                      this.Student_Import_Details_Data[j-2].Registration_Date=(worksheet['B'+j]!=undefined) ? worksheet['B'+j].v :''
					  this.Student_Import_Details_Data[j-2].Student_Name=(worksheet['C'+j]!=undefined) ? worksheet['C'+j].v :''
                      this.Student_Import_Details_Data[j-2].Address1=(worksheet['D'+j]!=undefined) ? worksheet['D'+j].v :''
					  this.Student_Import_Details_Data[j-2].Address2=(worksheet['E'+j]!=undefined) ? worksheet['E'+j].v :0
                      this.Student_Import_Details_Data[j-2].Mobile=(worksheet['F'+j]!=undefined) ? worksheet['F'+j].v :''
					//   
                      this.Student_Import_Details_Data[j-2].Email=(worksheet['G'+j]!=undefined) ? worksheet['G'+j].v :''
					  this.Student_Import_Details_Data[j-2].Country=(worksheet['H'+j]!=undefined) ? worksheet['H'+j].v :''
					//   this.Student_Import_Details_Data[j-2].Counsilor=(worksheet['I'+j]!=undefined) ? worksheet['I'+j].v :''
					  this.Student_Import_Details_Data[j-2].Probable_Intake=(worksheet['J'+j]!=undefined) ? worksheet['J'+j].v :''
					  this.Student_Import_Details_Data[j-2].Enquiry_Source=(worksheet['K'+j]!=undefined) ? worksheet['K'+j].v :''
					  this.Student_Import_Details_Data[j-2].Status=(worksheet['L'+j]!=undefined) ? worksheet['L'+j].v :''
					  this.Student_Import_Details_Data[j-2].Remarks=(worksheet['M'+j]!=undefined) ? worksheet['M'+j].v :''
					//   this.Student_Import_Details_Data[j-2].Applied_Via=(worksheet['N'+j]!=undefined) ? worksheet['N'+j].v :''
					  this.Student_Import_Details_Data[j-2].Department=(worksheet['O'+j]!=undefined) ? worksheet['O'+j].v :''
					  this.Student_Import_Details_Data[j-2].Owner=(worksheet['P'+j]!=undefined) ? worksheet['P'+j].v :''
					//   this.Student_Import_Details_Data[j-2].Lost_Date=(worksheet['Q'+j]!=undefined) ? worksheet['Q'+j].v :''
					//   this.Student_Import_Details_Data[j-2].Live_Update=(worksheet['R'+j]!=undefined) ? worksheet['R'+j].v :''
					//   this.Student_Import_Details_Data[j-2].Lost_Reason=(worksheet['S'+j]!=undefined) ? worksheet['S'+j].v :''
					//   this.Student_Import_Details_Data[j-2].Next_Action_Date=(worksheet['T'+j]!=undefined) ? worksheet['T'+j].v :''
					//   this.Student_Import_Details_Data[j-2].Branch=(worksheet['U'+j]!=undefined) ? worksheet['U'+j].v :''
					//   this.Student_Import_Details_Data[j-2].Business=(worksheet['V'+j]!=undefined) ? worksheet['V'+j].v :''
					//   this.Student_Import_Details_Data[j-2].Street1=(worksheet['W'+j]!=undefined) ? worksheet['W'+j].v :''
					//   this.Student_Import_Details_Data[j-2].Street2=(worksheet['X'+j]!=undefined) ? worksheet['X'+j].v :''
					//   this.Student_Import_Details_Data[j-2].State=(worksheet['Y'+j]!=undefined) ? worksheet['Y'+j].v :''
					//   this.Student_Import_Details_Data[j-2].City=(worksheet['Z'+j]!=undefined) ? worksheet['Z'+j].v :''
					//   this.Student_Import_Details_Data[j-2].Pincode=(worksheet['AA'+j]!=undefined) ? worksheet['AA'+j].v :''
					//   this.Student_Import_Details_Data[j-2].Post_Office=(worksheet['AB'+j]!=undefined) ? worksheet['AB'+j].v :''
					//   this.Student_Import_Details_Data[j-2].Fees=(worksheet['AC'+j]!=undefined) ? worksheet['AC'+j].v :''
					//   this.Student_Import_Details_Data[j-2].Gender=(worksheet['AD'+j]!=undefined) ? worksheet['AD'+j].v :''
					//   this.Student_Import_Details_Data[j-2].Date_of_Birth=(worksheet['AE'+j]!=undefined) ? worksheet['AE'+j].v :''
					//   this.Student_Import_Details_Data[j-2].Education_Qualification=(worksheet['AF'+j]!=undefined) ? worksheet['AF'+j].v :''
					//   this.Student_Import_Details_Data[j-2].Stream=(worksheet['AG'+j]!=undefined) ? worksheet['AG'+j].v :''
					//   this.Student_Import_Details_Data[j-2].Year_of_Passing=(worksheet['AH'+j]!=undefined) ? worksheet['AH'+j].v :''
					//   this.Student_Import_Details_Data[j-2].College=(worksheet['AI'+j]!=undefined) ? worksheet['AI'+j].v :''
					//   this.Student_Import_Details_Data[j-2].Status=(worksheet['AJ'+j]!=undefined) ? worksheet['AJ'+j].v :''
					//   this.Student_Import_Details_Data[j-2].Experience=(worksheet['AK'+j]!=undefined) ? worksheet['AK'+j].v :''
					//   this.Student_Import_Details_Data[j-2].Contacted_Date=(worksheet['AL'+j]!=undefined) ? worksheet['AL'+j].v :''
					//   this.Student_Import_Details_Data[j-2].Created_Username=(worksheet['AM'+j]!=undefined) ? worksheet['AM'+j].v :''
					//   this.Student_Import_Details_Data[j-2].Created_Time=(worksheet['AN'+j]!=undefined) ? worksheet['AN'+j].v :''
					//   this.Student_Import_Details_Data[j-2].Updated_Username=(worksheet['AO'+j]!=undefined) ? worksheet['AO'+j].v :''
					//   this.Student_Import_Details_Data[j-2].Updated_Time=(worksheet['AP'+j]!=undefined) ? worksheet['AP'+j].v :''
					//   this.Student_Import_Details_Data[j-2].Viewed_Username=(worksheet['AQ'+j]!=undefined) ? worksheet['AQ'+j].v :''
					//   this.Student_Import_Details_Data[j-2].Viewed_Time=(worksheet['AR'+j]!=undefined) ? worksheet['AR'+j].v :''                      
              Date_Tempc = new Date("January 1, 1900");
              Date_Tempc.setDate(Date_Tempc.getDate() + parseInt( this.Student_Import_Details_Data[j-2].Registration_Date.toString())-2);
              this.Student_Import_Details_Data[j-2].Registration_Date=this.New_Date(new Date(moment(Date_Tempc).format('YYYY-MM-DD')));
			//   Date_Tempc = new Date("January 1, 1900");
            //   Date_Tempc.setDate(Date_Tempc.getDate() + parseInt( this.Student_Import_Details_Data[j-2].Admission_Date.toString())-2);
            //   this.Student_Import_Details_Data[j-2].Admission_Date=this.New_Date(new Date(moment(Date_Tempc).format('YYYY-MM-DD')));
			//   Date_Tempc = new Date("January 1, 1900");
            //   Date_Tempc.setDate(Date_Tempc.getDate() + parseInt( this.Student_Import_Details_Data[j-2].Next_Action_Date.toString())-2);
            //   this.Student_Import_Details_Data[j-2].Next_Action_Date=this.New_Date(new Date(moment(Date_Tempc).format('YYYY-MM-DD')));
			//   Date_Tempc = new Date("January 1, 1900");
            //   Date_Tempc.setDate(Date_Tempc.getDate() + parseInt( this.Student_Import_Details_Data[j-2].Lost_Date.toString())-2);
            //   this.Student_Import_Details_Data[j-2].Lost_Date=this.New_Date(new Date(moment(Date_Tempc).format('YYYY-MM-DD')));

            //   if(Date_Tempc== undefined){  
            //   }
            //   Date_Temp = new Date("January 1, 1900");
            //   Date_Temp.setDate(Date_Temp.getDate() + parseInt( this.Student_Import_Details_Data[j-2].Date.toString())-2);
            //   this.Student_Import_Details_Data[j-2].Date=this.New_Date(new Date(moment(Date_Temp).format('YYYY-MM-DD')));
            }
            // this.Student_Import_Details_Data.sort();
        };

        fileReader.readAsArrayBuffer(this.file);
    }





	// Search_Enquiry_Source()
	// {
	// this.issLoading=true;
	// this.Enquiry_Source_Service_.Search_Enquiry_Source(this.Enquiry_Source_Name_Search).subscribe(Rows => {
	//  this.Enquiry_Source_Data=Rows[0];
	// this.Total_Entries=this.Enquiry_Source_Data.length;
	// if(this.Enquiry_Source_Data.length==0)
	// {
	// this.issLoading=false;
	// const dialogRef = this.dialogBox.open
	// ( DialogBox_Component, {panelClass:'Dialogbox-Class'
	// ,data:{Message:'No Details Found',Type:"3"}});
	// }
	// this.issLoading=false;
	//  },
	//  Rows => {
	// this.issLoading=false;
	// const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
	//  });
	// }
	Search_Branch_Typeahead(event: any) {
		var Value = "";
		if (this.Followup_Branch_Data == undefined) this.Followup_Branch_Data = [];
		if (this.Followup_Branch_Data.length == 0) {
			if (event.target.value == "") Value = undefined;
			else Value = event.target.value;

			if (
				this.Followup_Branch_Data == undefined ||
				this.Followup_Branch_Data.length == 0
			) {
				this.issLoading = true;
				this.Student_Service_.Search_Branch_Typeahead("").subscribe(
					(Rows) => {
						if (Rows != null) {
							this.Followup_Branch_Data = Rows[0];
							this.issLoading = false;
						}
					},
					(Rows) => {
						this.issLoading = false;
						// const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
					}
				);
			}
		}
	}
	Search_Enquiry_Source_Typeahead(event: any) {
		var Value = "";
		if (this.Enquiry_Source_Data == undefined) this.Enquiry_Source_Data = [];
		if (this.Enquiry_Source_Data.length == 0) {
			if (event.target.value == "") Value = undefined;
			else Value = event.target.value;

			if (
				this.Enquiry_Source_Data == undefined ||
				this.Enquiry_Source_Data.length == 0
			) {
				this.issLoading = true;
				this.Enquiry_Source_Service_.Search_Enquiry_Source_Typeahead(
					""
				).subscribe(
					(Rows) => {
						if (Rows != null) {
							this.Enquiry_Source_Data = Rows[0];
							this.issLoading = false;
						}
					},
					(Rows) => {
						this.issLoading = false;
						// const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
					}
				);
			}
		}
	}
	display_Enquiry_Source(Enquiry_Source_: Enquiry_Source) {
		if (Enquiry_Source_) {
			return Enquiry_Source_.Enquiry_Source_Name;
		}
	}
	display_Branch(Branch_: Branch) {
		if (Branch_) {
			return Branch_.Branch_Name;
		}
	}
	Search_Branch_Department_Typeahead(event: any) {
		var Value = "";
		if (event.target.value == "") Value = undefined;
		else Value = event.target.value;

		if (
			this.FollowUp_Branch_ == null ||
			this.FollowUp_Branch_.Branch_Id == undefined
		) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Select Branch", Type: "3" },
			});
		} else {
			if (
				this.Followup_Department_Data == undefined ||
				this.Followup_Department_Data.length == 0
			) {
				if (
					this.Followup_Department_Data_Check == undefined ||
					this.Followup_Department_Data_Check.length == 0
				) {
					this.issLoading = true;
					this.Student_Service_.Search_Branch_Department_Typeahead(
						this.FollowUp_Branch_.Branch_Id,
						""
					).subscribe(
						(Rows) => {
							if (Rows != null) {
								// if(Rows.code!=undefined)
								// {
								//     const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:Rows.Code,Type:"false"}});
								// }
								this.Followup_Department_Data = Rows[0];
								this.Followup_Department_Data_Check = Rows[0];
								this.issLoading = false;
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
				} else {
					this.Followup_Department_Data = this.Followup_Department_Data_Check;
				}
			}
		}
	}
	display_Department(Department_: Department) {
		if (Department_) {
			return Department_.Department_Name;
		}
	}
	Search_Department_Status_Typeahead(event: any) {
		var Value = "";
		if (event.target.value == "") Value = undefined;
		else Value = event.target.value;

		if (
			this.FollowUp_Department_ == null ||
			this.FollowUp_Department_.Department_Id == undefined
		) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Select Department", Type: "3" },
			});
		} else {
			if (
				this.Followup_Status_Data == undefined ||
				this.Followup_Status_Data.length == 0
			) {
				this.issLoading = true;
				this.Student_Service_.Search_Department_Status_Typeahead(
					this.FollowUp_Department_.Department_Id,
					""
				).subscribe(
					(Rows) => {
						if (Rows != null) {
							this.Followup_Status_Data = Rows[0];
							this.issLoading = false;
						}
					},
					(Rows) => {
						this.issLoading = false;
					}
				);
			}
		}
	}
	display_Followup_Status(Status_: Department_Status) {
		if (Status_) {
			return Status_.Department_Status_Name;
		}
	}
	Search_Department_User_Typeahead(event: any) {
		var Value = "";
		if (event.target.value == "") Value = undefined;
		else Value = event.target.value;

		if (
			this.FollowUp_Department_ == null ||
			this.FollowUp_Department_.Department_Id == undefined
		) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Select Status", Type: "3" },
			});
		} else {
			if (
				this.Followup_Users_Data == undefined ||
				this.Followup_Users_Data.length == 0
			) {
				this.issLoading = true;
				this.Student_Service_.Search_Department_User_Typeahead(
					this.FollowUp_Branch_.Branch_Id,
					this.FollowUp_Department_.Department_Id,
					""
				).subscribe(
					(Rows) => {
						if (Rows != null) {
							this.Followup_Users_Data = Rows[0];
							this.issLoading = false;
						}
					},
					(Rows) => {
						this.issLoading = false;
						// const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
					}
				);
			}
		}
	}
	display_Followup_Users(Users_: User_Details) {
		if (Users_) {
			return Users_.User_Details_Name;
		}
	}
	Save_Data_Migration() {
		
		if (
			this.Student_Import_Details_Data == undefined ||
			this.Student_Import_Details_Data == null ||
			this.Student_Import_Details_Data == undefined
		) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Please Choose File", Type: "3" },
			});
			return;
		}
		// if (
		// 	this.FollowUp_Branch_ == null ||
		// 	this.FollowUp_Branch_.Branch_Id == undefined
		// ) {
		// 	const dialogRef = this.dialogBox.open(DialogBox_Component, {
		// 		panelClass: "Dialogbox-Class",
		// 		data: { Message: "Enter Branch", Type: "3" },
		// 	});
		// 	return;
		// }
		// if (
		// 	this.FollowUp_Department_ == null ||
		// 	this.FollowUp_Department_.Department_Id == undefined
		// ) {
		// 	const dialogRef = this.dialogBox.open(DialogBox_Component, {
		// 		panelClass: "Dialogbox-Class",
		// 		data: { Message: "Enter Department", Type: "3" },
		// 	});
		// 	return;
		// }
		// if (
		// 	this.FollowUp_Status_ == null ||
		// 	this.FollowUp_Status_.Department_Status_Id == undefined
		// ) {
		// 	const dialogRef = this.dialogBox.open(DialogBox_Component, {
		// 		panelClass: "Dialogbox-Class",
		// 		data: { Message: "Enter Status", Type: "3" },
		// 	});
		// 	return;
		// }

		var Check_Status=false;
	// for (var j = 0; j < this.User_Sub_Data.length; j++)
	// {
	// 	if(this.User_Sub_Data[j].Check_Box== true)
	// 	Check_Status=true;
	// }
// 	if (Check_Status==false)
// 	{
//    const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Select Atleast One User', Type: "3" } });
//    return;
//    }
		// if (
		// 	this.Followup_Users_ == null ||
		// 	this.Followup_Users_.User_Details_Id == undefined
		// ) {
		// 	const dialogRef = this.dialogBox.open(DialogBox_Component, {
		// 		panelClass: "Dialogbox-Class",
		// 		data: { Message: "Enter User", Type: "3" },
		// 	});
		// 	return;
		// }
		// if (
		// 	this.Enquiry_Source_ == null ||
		// 	this.Enquiry_Source_.Enquiry_Source_Id == undefined
		// ) {
		// 	const dialogRef = this.dialogBox.open(DialogBox_Component, {
		// 		panelClass: "Dialogbox-Class",
		// 		data: { Message: "Enter Enquiry Source", Type: "3" },
		// 	});
		// 	return;
		// }
		// if (this.FollowUp_.Next_FollowUp_Date == undefined) {
		// 	const dialogRef = this.dialogBox.open(DialogBox_Component, {
		// 		panelClass: "Dialogbox-Class",
		// 		data: { Message: "Choose Date", Type: "3" },
		// 	});
		// 	return;
		// }
		//delete this.Course_Import_Details_Data['Category']

		// if (this.Student_Import_Details_Data.length == 0) {
		// 	const dialogRef = this.dialogBox.open(DialogBox_Component, {
		// 		panelClass: "Dialogbox-Class",
		// 		data: { Message: "Please Add Details", Type: "3" },
		// 	});

		// 	return;
		// }
		var j = 0;
		for (var i = 0; i < this.Student_Import_Details_Data.length; i++) {
			j = i + 1;




			// if ( isNaN(this.Student_Import_Details_Data[i].Next_Action_Date)) {

			// 	this.Student_Import_Details_Data[i].Next_Action_Date =new Date();
				
			// }

			// if ('NaN-NaN-NaN' == this.Student_Import_Details_Data[i].Next_Action_Date || undefined == this.Student_Import_Details_Data[i].Next_Action_Date || null == this.Student_Import_Details_Data[i].Next_Action_Date  ) {
			// 	this.Student_Import_Details_Data[i].Next_Action_Date_temp =new Date();
				
			// }
			// else{

			// }

			if (undefined == this.Student_Import_Details_Data[i].Student_Name) {
				const dialogRef = this.dialogBox.open(DialogBox_Component, {
					panelClass: "Dialogbox-Class",
					data: { Message: "Student Client name is blank at row " + j, Type: "3" },
				});
				i = this.Student_Import_Details_Data.length;
				return;
			}
			if ("" == this.Student_Import_Details_Data[i].Student_Name.toString().trim()) {
				const dialogRef = this.dialogBox.open(DialogBox_Component, {
					panelClass: "Dialogbox-Class",
					data: { Message: "Student Client name is blank at row " + j, Type: "3" },
				});
				i = this.Student_Import_Details_Data.length;
				return;
			}

		


			// if ("null" == this.Student_Import_Details_Data[i].Client_Name.trim()) {
			// 	const dialogRef = this.dialogBox.open(DialogBox_Component, {
			// 		panelClass: "Dialogbox-Class",
			// 		data: { Message: "Student Client name is blank at row " + j, Type: "3" },
			// 	});
			// 	i = this.Student_Import_Details_Data.length;
			// 	return;
			// }
			
			
			
			else if (undefined == this.Student_Import_Details_Data[i].Mobile) {
				const dialogRef = this.dialogBox.open(DialogBox_Component, {
					panelClass: "Dialogbox-Class",
					data: { Message: "Mobile is blank at row " + j, Type: "3" },
				});
				i = this.Student_Import_Details_Data.length;
				return;
			} else if (
				"" == this.Student_Import_Details_Data[i].Mobile.toString().trim()
			) {
				const dialogRef = this.dialogBox.open(DialogBox_Component, {
					panelClass: "Dialogbox-Class",
					data: { Message: "Mobile number is blank at row " + j, Type: "3" },
				});
				i = this.Student_Import_Details_Data.length;
				return;
			}

			
			else if (undefined == this.Student_Import_Details_Data[i].Registration_Date) {
                const dialogRef = this.dialogBox.open(DialogBox_Component, {
                    panelClass: "Dialogbox-Class",
                    data: { Message: "Enquiry Date is blank at row " + j, Type: "3" },
                });
                i = this.Student_Import_Details_Data.length;
                return;
            } else if (
                "" == this.Student_Import_Details_Data[i].Registration_Date.toString().trim()
            ) {
                const dialogRef = this.dialogBox.open(DialogBox_Component, {
                    panelClass: "Dialogbox-Class",
                    data: { Message: "Enquiry Date is blank at row " + j, Type: "3" },
                });
                i = this.Student_Import_Details_Data.length;
                return;
            }

            
      




            
         



           
        


			// else if (undefined == this.Student_Import_Details_Data[i].Lost_Date) {
            //     const dialogRef = this.dialogBox.open(DialogBox_Component, {
            //         panelClass: "Dialogbox-Class",
            //         data: { Message: "Lost Date is blank at row " + j, Type: "3" },
            //     });
            //     i = this.Student_Import_Details_Data.length;
            //     return;
            // } else if (
            //     "" == this.Student_Import_Details_Data[i].Lost_Date.toString().trim()
            // ) {
            //     const dialogRef = this.dialogBox.open(DialogBox_Component, {
            //         panelClass: "Dialogbox-Class",
            //         data: { Message: "Lost Date is blank at row " + j, Type: "3" },
            //     });
            //     i = this.Student_Import_Details_Data.length;
            //     return;
            // }

            
            // else if (
            //     "" == this.Student_Import_Details_Data[i].Lost_Date.toString().trim()
            // ) {
            //     const dialogRef = this.dialogBox.open(DialogBox_Component, {
            //         panelClass: "Dialogbox-Class",
            //         data: { Message: "Lost Date is blank at row " + j, Type: "3" },
            //     });
            //     i = this.Student_Import_Details_Data.length;
            //     return;
            // }

            // else if (
            //     "NaN-NaN-NaN" == this.Student_Import_Details_Data[i].Lost_Date.toString().trim()
            // ) {
            //     const dialogRef = this.dialogBox.open(DialogBox_Component, {
            //         panelClass: "Dialogbox-Class",
            //         data: { Message: "Lost Date is blank at row " + j, Type: "3" },
            //     });
            //     i = this.Student_Import_Details_Data.length;
            //     return;
            // }
			this.Student_Import_Details_Data[i].Branch="Ernakulam"




			
		}
		{
			this.Student_Import_.Branch = 0;
			this.Student_Import_.Department = 0;
			this.Student_Import_.Status = 0;
			this.Student_Import_.Enquiry_Source =0;
			this.Student_Import_.Next_FollowUp_Date = this.New_Date(
				new Date(moment(this.FollowUp_.Next_FollowUp_Date).format("YYYY-MM-DD"))
			);
			//this.Student_Import_.To_User = this.Followup_Users_.User_Details_Id;
			this.Student_Import_.By_User_Id = parseInt(this.Login_Id);
			this.Student_Import_.Login_Branch = this.Branch_Id;

			this.Student_Import_.Student_Import_Details =
				this.Student_Import_Details_Data;

			document.getElementById("Save_Button").hidden = true;


			// this.User_Sub_Data_Temp=[]; 
			// for (var i = 0; i< this.User_Sub_Data.length; i++) 
			// {
			// if (Boolean(this.User_Sub_Data[i].Check_Box) == true) 
			// 	{
			// 	this.User_Sub_Data_Temp.push(this.User_Sub_Data[i]);
			// 	}
			// }
			// this.Student_Import_.User_Sub_Data = this.User_Sub_Data_Temp; 


			this.issLoading = true;
			
			this.Student_Import_Service_.Save_Data_Migration(
				this.Student_Import_
			).subscribe(
				(Save_status) => {
					
					
					this.issLoading = false;

					// log(Save_status[0][0])
					if (Number(Save_status[0] == undefined)) {
						this.issLoading = false;
						const dialogRef = this.dialogBox.open(DialogBox_Component, {
							panelClass: "Dialogbox-Class",
							data: { Message: "Error Occured", Type: "2" },
						});

						document.getElementById("Save_Button").hidden = false;
						//this.Clr_Student_Import();
					}
					if (Number(Save_status[0][0].import_master_id) > 0) {
						this.Student_Duplicate_Array = Save_status[1];
						this.Total_Duplicate_Data = this.Student_Duplicate_Array.length;
						this.Total_Import_Entries = this.Student_Import_Details_Data.length;
						this.Total_Imports =
							this.Student_Import_Details_Data.length -
							this.Student_Duplicate_Array.length;

						//const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:' Imported',Type:"false"}});
						this.Duplicate_View = true;
						this.Entry_View = false;
						this.Search_view = false;
						this.Search_Student_Import();
						this.Clr_Student_Import();
						//this.Close_Click();
						document.getElementById("Save_Button").hidden = true;
					}
					// else if(Number(Save_status[0][0].Student_Id_)==-1)
					//         {
					//             this.Duplicate_View=true;
					//             //const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'The Phone Number Already Exist for '+Save_status[0][0].Duplicate_Student_Name+' and is handled by '+Save_status[0][0].Duplicate_User_Name,Type:"2"}});
					//         }
					else {
						this.issLoading = false;
						const dialogRef = this.dialogBox.open(DialogBox_Component, {
							panelClass: "Dialogbox-Class",
							data: { Message: "Error Occured", Type: "2" },
						});
						document.getElementById("Save_Button").hidden = true;
					}
				},
				(Rows) => {
					this.issLoading = false;
					document.getElementById("Save_Button").hidden = true;
					const dialogRef = this.dialogBox.open(DialogBox_Component, {
						panelClass: "Dialogbox-Class",
						data: { Message: "Error Occured", Type: "2" },
					});
				}
			);
		}
	}


Import_Temp()
{
	
}

	Edit_Course_Import(Import_Master_e: Import_Master, index) {
		this.Course_Import_Index = index;
		this.Student_Import_Service_.Get_Student_Import(
			Import_Master_e.Import_Master_Id
		).subscribe(
			(Rows) => {
				if (Rows != null) {
					this.Course_Import_Details_Data = Rows[0];

					this.issLoading = false;
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
		this.Entry_View = true;
		this.Import_Master_ = Import_Master_e;
		this.Import_Master_ = Object.assign({}, Import_Master_e);
	}
}
