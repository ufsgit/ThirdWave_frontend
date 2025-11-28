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
import { Department_Status_Service } from "app/services/Department_Status.service";

@Component({
	selector: "app-Student_Import",
	templateUrl: "./Student_Import.component.html",
	styleUrls: ["./Student_Import.component.css"],
	providers: [
		{
			provide: DateAdapter,
			useClass: MomentDateAdapter,
			deps: [MAT_DATE_LOCALE],
		},
		{ provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
	],
})
export class Student_ImportComponent implements OnInit {
	Enquiry_Source_Name_Search: string;

	Student_Import: Student_Import = new Student_Import();
	Course_Import_Name_Search = "";
	Entry_View: boolean = true;
	Duplicate_View: boolean = true;
	Import_Duplicate_View:boolean = true;
	Search_view: boolean = true;
	myInnerHeight: number;
	myHeight: number;

	Total_Import_Entries: number;
	Total_Duplicate_Data: number;
	Total_Imports: number;
	ToStaff_Student_Data: User_Details[];

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
	Followup_Date_Change:Date;
	Store_Id: number;
	Store_Name: string;
	Store_Edit: boolean = false;
	User_Type: number;
	Course_Import_Details_Data: Course[];
	Student_Import_Details_Data: Student_Import_Details[];
	ImageFile: any;
	Display_File_Name_: string;
	Next_FollowUp_Date_Visible: boolean = true;

	Import_with_Status:number;
	Import_with_Enquiry_Source:number;

	Excel_File: [];

	Course_Import_Index: number;
	Student_Import_: Student_Import = new Student_Import();
	Course_Import_Data: any;
	Import_Master_: Import_Master;
	Search_Student_Import_Details_Data: any;

	FollowUp_Branch_: Branch = new Branch();
	Search_Branch: Branch = new Branch();
	Followup_Branch_Data: Branch[];
	Followup_Branch_Data_Filter: Branch[];

	FollowUp_Department_: Department = new Department();
	Followup_Department_Data: Department[];
	Followup_Department_Data_Check: Department[];

	FollowUp_Status_: Department_Status = new Department_Status();
	Status_Temp: Department_Status = new Department_Status();
	Followup_Status_Data: Department_Status[];

	Followup_Users_Data: User_Details[];
	Followup_Users_: User_Details = new User_Details();
	Users_Temp: User_Details = new User_Details();

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

	Total_Selected:number = 0;
	Balance_Selected:number=0;
	myTotalHeight: number;

	constructor(
		public Enquiry_Source_Service_: Enquiry_Source_Service,
		public Student_Service_: Student_Service,
		public Student_Import_Service_: Student_Import_Service,
		public Department_Status_Service_:Department_Status_Service,
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

	Create_New() {
		this.Entry_View = true;
		this.Search_view = false;
		this.Duplicate_View = false;
		this.Import_Duplicate_View =false;
		this.Clr_Student_Import();
	}

	Clr_New() {
		this.Entry_View = true;
		this.Search_view = false;
		this.Duplicate_View = false;
		this.Import_Duplicate_View =false;
		this.Clr_Student_Import();
	}
	Close_Click() {
		this.Search_view = true;
		this.Entry_View = false;
		this.Duplicate_View = false;
		this.Import_Duplicate_View =false;
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
		this.ToStaff_Student_Data=null;
		this.Balance_Selected=0;
	}

	Page_Load() {
		this.myInnerHeight = window.innerHeight;
		this.myInnerHeight = this.myInnerHeight - 650;
		this.myTotalHeight = this.myInnerHeight;
		this.myTotalHeight = this.myTotalHeight - 30;
		this.myHeight = window.innerHeight;
		this.myHeight = this.myHeight - 400;
		this.Search_view = false;
		this.Entry_View = true;
		this.Duplicate_View = false;
		this.Import_Duplicate_View =false;

		this.Load_StatusType();
		if (this.User_Type == 2) {
			this.Store_Edit = true;
			//this.Course_Import_Details_Data()
			this.FollowUp_.Next_FollowUp_Date = new Date();
			this.FollowUp_.Next_FollowUp_Date = this.New_Date(
				this.FollowUp_.Next_FollowUp_Date
			);

			this.Clr_Student_Import();
			this.Get_Menu_Status(27, this.Login_Id);

			//this.FollowUp_.Next_FollowUp_Date=this.New_Date(this.FollowUp_.Next_FollowUp_Date);
		}
	}

	Get_Menu_Status(Menu_id, Login_user_id) {
		this.issLoading = false;
		this.Student_Service_.Get_Menu_Status(Menu_id, Login_user_id).subscribe(
			(Rows) => {
				if (Rows[0][0] == undefined) {
					if (Menu_id == 27) {
						localStorage.removeItem("token");
						this.router.navigateByUrl("Home_Page");
					}
				} else if (Rows[0][0].View > 0) {
					if (Menu_id == 27) {
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
		this.Total_Selected =this.Student_Import_Details_Data.length

	}
	Focus_It() {
		setTimeout("$('[name=Followup_Status]').focus();", 0);
	}

	incomingfile(event) {
		;
		this.file = event.target.files[0];
		// this.ImageFile = this.file;
		this.Display_File_Name_ = this.file.name;
		//const file = (event.target as HTMLInputElement).files
		// this.Import_Duplicate_View=true;
		this.Upload();
		
		event.target.value='';
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
		
		this.FollowUp_.Next_FollowUp_Date = new Date();
		this.FollowUp_.Next_FollowUp_Date = this.New_Date(
			this.FollowUp_.Next_FollowUp_Date
		);

		this.Get_ToStaff_Student_DataCount();
	}
	Status_Change(){
		
		if (this.FollowUp_Status_.FollowUp == true)
			this.Next_FollowUp_Date_Visible = false;
		else this.Next_FollowUp_Date_Visible = true;
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
	Upload() {
		let fileReader = new FileReader();
		fileReader.onload = (e) => {
			this.arrayBuffer = fileReader.result;
			var data = new Uint8Array(this.arrayBuffer);
			var arr = new Array();
			for (var i = 0; i != data.length; ++i)
				arr[i] = String.fromCharCode(data[i]);
			var bstr = arr.join("");
			var workbook = XLSX.read(bstr, { type: "binary" });
			var first_sheet_name = workbook.SheetNames[0];
			var worksheet = workbook.Sheets[first_sheet_name];

			this.Student_Import_Details_Data = XLSX.utils.sheet_to_json(worksheet, {
				raw: true,
			});
			this.duplicate_check();
			
			
			this.Student_Import_Details_Data.sort();
			this.Total_Selected =this.Student_Import_Details_Data.length
			this.Balance_Selected=this.Student_Import_Details_Data.length
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

	// Search_Branch_Typeahead(event: any) {
	// 	var Value = "";
	// 	if (this.Followup_Branch_Data == undefined) this.Followup_Branch_Data = [];
	// 	if (this.Followup_Branch_Data.length == 0) {
	// 		if (event.target.value == "") Value = undefined;
	// 		else Value = event.target.value;

	// 		if (
	// 			this.Followup_Branch_Data == undefined ||
	// 			this.Followup_Branch_Data.length == 0
	// 		) {
	// 			this.issLoading = true;
	// 			this.Student_Service_.Search_Branch_Typeahead("").subscribe(
	// 				(Rows) => {
	// 					if (Rows != null) {
	// 						this.Followup_Branch_Data = Rows[0];
	// 						this.issLoading = false;
	// 					}
	// 				},
	// 				(Rows) => {
	// 					this.issLoading = false;
						
	// 				}
	// 			);
	// 		}
	// 	}
	// }

	Search_Branch_Typeahead(event: any) {
		var Value = "";
		if (event.target.value == "") Value = "";
		else Value = event.target.value.toLowerCase();

		if (this.Followup_Branch_Data == undefined || this.Followup_Branch_Data.length == 0) {
			this.issLoading = true;

			this.Student_Service_.Search_Branch_Typeahead(Value).subscribe(
				(Rows) => {
					
					if (Rows != null) {
						this.Followup_Branch_Data = Rows[0];
						this.Followup_Branch_Data_Filter = [];
						for (var i = 0; i < this.Followup_Branch_Data.length; i++) {
							if (
								this.Followup_Branch_Data[i].Branch_Name.toLowerCase().includes(Value)
							)
								this.Followup_Branch_Data_Filter.push(this.Followup_Branch_Data[i]);
						}
					}
					this.issLoading = false;
				},
				(Rows) => {
					this.issLoading = false;
				}
			);
		} else {
			this.Followup_Branch_Data_Filter = [];
			for (var i = 0; i < this.Followup_Branch_Data.length; i++) {
				if (this.Followup_Branch_Data[i].Branch_Name.toLowerCase().includes(Value))
					this.Followup_Branch_Data_Filter.push(this.Followup_Branch_Data[i]);
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
	Save_Student_Import() {
		
		
		
		
		
		
		
		
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
		if (
			this.FollowUp_Branch_ == null ||
			this.FollowUp_Branch_.Branch_Id == undefined
		) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Enter Branch", Type: "3" },
			});
			return;
		}
		if (
			this.FollowUp_Department_ == null ||
			this.FollowUp_Department_.Department_Id == undefined
		) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Enter Department", Type: "3" },
			});
			return;
		}



if(this.Import_with_Status==1)
{
		if (
			this.FollowUp_Status_ == null ||
			this.FollowUp_Status_.Department_Status_Id == undefined
		) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Enter Status", Type: "3" },
			});
			return;
		}

	}

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

		if(this.Import_with_Enquiry_Source==1)
{
		if (
			this.Enquiry_Source_ == null ||
			this.Enquiry_Source_.Enquiry_Source_Id == undefined
		) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Enter Enquiry Source", Type: "3" },
			});
			return;
		}
}

		if (this.FollowUp_.Next_FollowUp_Date == undefined) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Choose Date", Type: "3" },
			});
			return;
		}
		//delete this.Course_Import_Details_Data['Category']

		if (this.Student_Import_Details_Data.length == 0) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Please Add Details", Type: "3" },
			});

			return;
		}
		var j = 0;
		for (var i = 0; i < this.Student_Import_Details_Data.length; i++) {
			j = i + 1;

			if (undefined == this.Student_Import_Details_Data[i].Name) {
				const dialogRef = this.dialogBox.open(DialogBox_Component, {
					panelClass: "Dialogbox-Class",
					data: { Message: "Student name is blank at row " + j, Type: "3" },
				});
				i = this.Student_Import_Details_Data.length;
				return;
			}
			

// if(this.Student_Import_Details_Data[i].Name)

			if ("" == String(this.Student_Import_Details_Data[i].Name).trim()) {
				const dialogRef = this.dialogBox.open(DialogBox_Component, {
					panelClass: "Dialogbox-Class",
					data: { Message: "Student name is blank at row " + j, Type: "3" },
				});
				i = this.Student_Import_Details_Data.length;
				return;
			} else if (undefined == this.Student_Import_Details_Data[i].Mobile) {
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

if(this.Import_with_Status==0)

{
			if (undefined == this.Student_Import_Details_Data[i].Department_Status_Name) {
				const dialogRef = this.dialogBox.open(DialogBox_Component, {
					panelClass: "Dialogbox-Class",
					data: { Message: "Department Status Name is blank at row " + j, Type: "3" },
				});
				i = this.Student_Import_Details_Data.length;
				return;
			}

	}

	if(this.Import_with_Enquiry_Source==0)

{
			if (undefined == this.Student_Import_Details_Data[i].Enquiry_Source_Name) {
				const dialogRef = this.dialogBox.open(DialogBox_Component, {
					panelClass: "Dialogbox-Class",
					data: { Message: "Enquiry Source Name is blank at row " + j, Type: "3" },
				});
				i = this.Student_Import_Details_Data.length;
				return;
			}

	}


			var Student_Deatils = [];
		
		for (var m = 0; m < this.Student_Import_Details_Data.length; m++) {
			// if (Boolean(this.Student_Import_Details_Data[m].Check_Box_View) == true) {
				for (var n = 0; n < this.ToStaff_Student_Data.length;n++)
				{
					if ((this.ToStaff_Student_Data[n].Data_Giving) >0)
					{
						for (var k = 0; k < this.ToStaff_Student_Data[n].Data_Giving;k++) 
						{
							this.Student_Import_Details_Data[m].User_Id=this.ToStaff_Student_Data[n].User_Details_Id;
							this.Student_Import_Details_Data[m].User_Name=this.ToStaff_Student_Data[n].User_Details_Name;
							Student_Deatils.push( this.Student_Import_Details_Data[m]);
							m++;
							if (m >=this.Student_Import_Details_Data.length)
							{
								n = this.ToStaff_Student_Data.length;
								m = this.Student_Import_Details_Data.length;
								break

							}
							
							
							
						}
					}
				// }
			}
		}
		


			if (this.Balance_Selected < 0) {
				const dialogRef = this.dialogBox.open(DialogBox_Component, {
					panelClass: "Dialogbox-Class",
					data: { Message: "New assign count is invalid", Type: "3" },
				});
				return;
			}
			// if (this.Balance_Selected < 0) {
			// 	
			// 		const dialogRef = this.dialogBox.open(DialogBox_Component, {
			// 			panelClass: "Dialogbox-Class",
			// 			data: { Message: "New assign exceed total selected students", Type: "3" },
			// 		});
			// 		return;
			// 	}
			if (this.Balance_Selected != 0) {
				const dialogRef = this.dialogBox.open(DialogBox_Component, {
					panelClass: "Dialogbox-Class",
					data: { Message: "New assign is not equal to total selected students", Type: "3" },
				});
				return;
			}

			// else if (this.Student_Import_Details_Data[i].Visa_Submission_Date=='MM-DD-YYYY')
			// {
			//     const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Incorrect Date format' +j ,Type: "3" }});
			//     i= this.Student_Import_Details_Data.length
			//     return;
			// }
		}
		{




			this.Student_Import_.Branch = this.FollowUp_Branch_.Branch_Id;
			this.Student_Import_.Department = this.FollowUp_Department_.Department_Id;

			if(this.Import_with_Status==1)
			{
				this.Student_Import_.Status =this.FollowUp_Status_.Department_Status_Id;
			}
			else			
			{
			this.Student_Import_.Status =0
			}

			if(this.Import_with_Enquiry_Source==1)

			{
				this.Student_Import_.Enquiry_Source =this.Enquiry_Source_.Enquiry_Source_Id;
			}

			else
			{
				this.Student_Import_.Enquiry_Source =0;
			}


			this.Student_Import_.Next_FollowUp_Date = this.New_Date(
				new Date(moment(this.FollowUp_.Next_FollowUp_Date).format("YYYY-MM-DD"))
			);
			// this.Student_Import_.To_User = this.Followup_Users_.User_Details_Id;
			this.Student_Import_.By_User_Id = parseInt(this.Login_Id);
			this.Student_Import_.Login_Branch = this.Branch_Id;

			// this.Student_Import_.Student_Import_Details =
			// 	this.Student_Import_Details_Data;
				this.Student_Import_.Student_Import_Details =Student_Deatils;

			document.getElementById("Save_Button").hidden = true;
			this.issLoading = true;
			;
			this.Student_Import_Service_.Save_Student_Import(
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


	Export()
{
        this.Student_Service_.exportExcel(this.Student_Duplicate_Array,'Duplicate Entries')

}


duplicate_check() {
	const lookup = {};
	const duplicates = [];
	
	for (let i = 0; i < this.Student_Import_Details_Data.length; i++) {
	  const row = this.Student_Import_Details_Data[i];
	  if (lookup[row.Mobile]) {
		duplicates.push(row);
		this.Student_Import_Details_Data.splice(i, 1); // Splice duplicate row from array
		i--; // Adjust the loop counter to account for the removed element
	  } else {
		lookup[row.Mobile] = true;
	  }
	}
 
	if (duplicates.length > 0) {
	  const dialogRef = this.dialogBox.open(DialogBox_Component, {
		panelClass: "Dialogbox-Class",
		data: { Message: "Excel Duplicates Removed", Type: "3" },
	  });
	}
	
	this.Student_duplicate_Import_Check();
	console.log(duplicates);
  }



  Student_duplicate_Import_Check() {
	
	// if (
	// 	this.Student_Import_Details_Data == undefined ||
	// 	this.Student_Import_Details_Data == null ||
	// 	this.Student_Import_Details_Data == undefined
	// ) {
	// 	const dialogRef = this.dialogBox.open(DialogBox_Component, {
	// 		panelClass: "Dialogbox-Class",
	// 		data: { Message: "Please Choose File", Type: "3" },
	// 	});
	// 	return;
	// }
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
	// var j = 0;
	// for (var i = 0; i < this.Student_Import_Details_Data.length; i++) {
	// 	j = i + 1;

	// 	if (undefined == this.Student_Import_Details_Data[i].Name) {
	// 		const dialogRef = this.dialogBox.open(DialogBox_Component, {
	// 			panelClass: "Dialogbox-Class",
	// 			data: { Message: "Student name is blank at row " + j, Type: "3" },
	// 		});
	// 		i = this.Student_Import_Details_Data.length;
	// 		return;
	// 	}
	// 	if ("" == this.Student_Import_Details_Data[i].Name.trim()) {
	// 		const dialogRef = this.dialogBox.open(DialogBox_Component, {
	// 			panelClass: "Dialogbox-Class",
	// 			data: { Message: "Student name is blank at row " + j, Type: "3" },
	// 		});
	// 		i = this.Student_Import_Details_Data.length;
	// 		return;
	// 	} else if (undefined == this.Student_Import_Details_Data[i].Mobile) {
	// 		const dialogRef = this.dialogBox.open(DialogBox_Component, {
	// 			panelClass: "Dialogbox-Class",
	// 			data: { Message: "Mobile is blank at row " + j, Type: "3" },
	// 		});
	// 		i = this.Student_Import_Details_Data.length;
	// 		return;
	// 	} else if (
	// 		"" == this.Student_Import_Details_Data[i].Mobile.toString().trim()
	// 	) {
	// 		const dialogRef = this.dialogBox.open(DialogBox_Component, {
	// 			panelClass: "Dialogbox-Class",
	// 			data: { Message: "Mobile number is blank at row " + j, Type: "3" },
	// 		});
	// 		i = this.Student_Import_Details_Data.length;
	// 		return;
	// 	}

	
	// }
	{
		this.Student_Import_.Branch = this.FollowUp_Branch_.Branch_Id;
		this.Student_Import_.Department = this.FollowUp_Department_.Department_Id;
		this.Student_Import_.Status = 0;
		this.Student_Import_.Enquiry_Source =0;
		this.Student_Import_.Next_FollowUp_Date = this.New_Date(
			new Date(moment(this.FollowUp_.Next_FollowUp_Date).format("YYYY-MM-DD"))
		);
		// this.Student_Import_.To_User = this.Followup_Users_.User_Details_Id;
		this.Student_Import_.By_User_Id = parseInt(this.Login_Id);
		this.Student_Import_.Login_Branch = this.Branch_Id;

		this.Student_Import_.Student_Import_Details =
			 this.Student_Import_Details_Data;

	


		// document.getElementById("Save_Button").hidden = true;
		this.issLoading = true;
		;
		this.Student_Import_Service_.Student_duplicate_Import_Check(
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
					if(this.Student_Duplicate_Array.length ==0)
					{

						this.Import_Duplicate_View=false;
					}
					else
					this.Import_Duplicate_View=true;
					

					this.Duplicate_View = false;;
					this.Entry_View = true;
					this.Search_view = false;
					// this.Search_Student_Import();
					// this.Clr_Student_Import();
					//this.Close_Click();
					// document.getElementById("Save_Button").hidden = true;
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
					// document.getElementById("Save_Button").hidden = true;
				}
			},
			(Rows) => {
				this.issLoading = false;
				// document.getElementById("Save_Button").hidden = true;
				const dialogRef = this.dialogBox.open(DialogBox_Component, {
					panelClass: "Dialogbox-Class",
					data: { Message: "Error Occured", Type: "2" },
				});
			}
		);
	}
}





Date_Change()
{
 
  
  this.FollowUp_.Next_FollowUp_Date= this.New_Date(new Date(moment(this.FollowUp_.Next_FollowUp_Date).format('YYYY-MM-DD')));
  this.Get_ToStaff_Student_DataCount()
}


Get_ToStaff_Student_DataCount() {
 
  this.issLoading = true;
  
  
  this.Student_Service_.Get_ToStaff_Student_DataCount_Excel(this.FollowUp_Branch_.Branch_Id,this.FollowUp_.Next_FollowUp_Date,this.FollowUp_Department_.Department_Id).subscribe(
	  (Rows) => {
		 
		  this.ToStaff_Student_Data = Rows[0];
		  this.issLoading = false;
	  },
	  (Rows) => {
		  this.issLoading = false;
	  }
  );
}


Count_Change()
{
	
	
var count_change=[],count_change_number:any=0;
	
	for (var n = 0; n < this.ToStaff_Student_Data.length;n++)
	
	{
	if ((this.ToStaff_Student_Data[n].Data_Giving) >= 1)
		{
			count_change.push(this.ToStaff_Student_Data[n].Data_Giving);
			count_change_number=0;
		}

	
	}
		
	for(var l=0;l<count_change.length;l++){
		count_change_number =Number(count_change_number) +Number(count_change[l])
	}
	 this.Balance_Selected=	Number(this.Total_Selected) - Number(count_change_number);

 
	
}


Load_StatusType() {
	this.issLoading = true;
	this.Department_Status_Service_.Load_StatusType().subscribe(
		(Rows) => {
			
			if (Rows != null) {

				this.Import_with_Status = Rows[1][0].Import_with_Status;
				this.Import_with_Enquiry_Source=Rows[1][0].Import_with_Enquiry_Source;
				
		
			
				this.issLoading = false;
			}
		},
		(Rows) => {
			this.issLoading = false;
		}
	);
}

}