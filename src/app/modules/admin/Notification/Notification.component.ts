import { Component, OnInit, Input, Injectable } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable, of as observableOf, merge } from "rxjs";
import { Student_Service } from "../../../services/Student.service";
import { DialogBox_Component } from "../DialogBox/DialogBox.component";
import { Student } from "../../../models/Student";
import { Branch } from "../../../models/Branch";
import { User_Details } from "../../../models/User_Details";
import { Department } from "../../../models/Department";
import { Department_Status } from "../../../models/Department_Status";
import { Gender } from "../../../models/Gender";
import { Agent } from "../../../models/Agent";
import { ApplicationStatus } from "../../../models/ApplicationStatus";
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
import { FormControl } from "@angular/forms";
import { MomentDateAdapter } from "@angular/material-moment-adapter";
import {
	DateAdapter,
	MAT_DATE_FORMATS,
	MAT_DATE_LOCALE,
} from "@angular/material/core";
import * as _moment from "moment";
import { default as _rollupMoment } from "moment";
import { Applicationdetails } from "app/models/Applicationdetails";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { Notification_Type } from "app/models/Notification_Type";
import { Internship_Service } from "app/services/Internship.service";
//import { debug } from 'console';

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

@Component({
	selector: "app-Notification",
	templateUrl: "./Notification.component.html",
	styleUrls: ["./Notification.component.css"],
	providers: [
		{
			provide: DateAdapter,
			useClass: MomentDateAdapter,
			deps: [MAT_DATE_LOCALE],
		},
		{ provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
	],
})
export class NotificationComponent implements OnInit {
	Status_Search: Department_Status = new Department_Status();
	User_Search: User_Details = new User_Details();
	Search_Name = "";
	Department_Search: Department = new Department();
	Search_Branch: Branch = new Branch();
	Search_FromDate: Date = new Date();
	Search_ToDate: Date = new Date();
	Look_In_Date: Boolean = true;
	More_Search_Options: boolean = true;

	Notification_Details: Applicationdetails[];

	Department_Data: Department[];
	Users_Data: User_Details[];
	Branch_Data: Branch[];
	Status_Data: Department_Status[];
	Gender_Data: Gender[];
	Branch_Temp1: Branch = new Branch();
	Users_Temp: User_Details = new User_Details();
	Department_Temp: Department = new Department();
	Status_Temp: Department_Status = new Department_Status();
	missedfollowup_count: number = 1;
	followup_count: number = 1;

	Lead_Data: Student[];
	Student_Data_Search: Student[];
	Lead_: Student = new Student();
	Search_Div: boolean = false;
	array: any;
	color = "primary";
	mode = "indeterminate";
	value = 50;
	myInnerHeight: number;
	myTotalHeight: number;
	issLoading: boolean;

	Black: boolean = false;
	Red: boolean = false;
	pagePointer: number = 0;
	pageindex2: number = 0;
	pageindex: number = 0;
	Total_Rows: number = 0;
	isLoading = false;
	Search_By_: any;
	Registered_By_: any;
	Search_Notification_By_:any;
	year: any;
	month: any;
	day: any;
	date: any;
	Login_User: string = "0";
	Agent_Id: number;
	Application_status_Id: number;
	Menu_Id: number = 74;

	RowCount: number = 0;
	RowCount2: number = 0;
	nextflag: number = -1;
	Page_Length_: number = 10;
	firstnum: number = 0;
	lastnum: number = 1;
	shownext: boolean = false;
	showprev: boolean = false;

	Notification_Count: string;

	Black_Start: number = 1;
	Black_Stop: number = 0;
	Red_Start: number = 1;
	Red_Stop: number = 0;
	points25: boolean = false;
	Edit_Page_Permission: any;
	Total_Entries: number = 0;
	Total_Data: number = 0;
	Agent_Permissions: any;
	WorkSummary_Div: boolean = false;
	User_Details_Id: number;

	Agent_View: boolean;
	Export_Permission: any;
	Export_View: boolean = false;

	markall_button_view: boolean = true;

	Graph: boolean = false;
	Summary_Sub: boolean = true;

	Agent_Mode_: Agent = new Agent();
	Agent_Mode_Temp: Agent = new Agent();
	Agent_Mode_Data: Agent[];

	Last_Notification: number;

	Application_Status_Mode_: ApplicationStatus = new ApplicationStatus();
	Application_Status_Mode_Temp: ApplicationStatus = new ApplicationStatus();
	Application_Status_Mode_Data: ApplicationStatus[];

	Notification_Type_: Notification_Type = new Notification_Type();
	Notification_Type_Temp: Notification_Type = new Notification_Type();
	Notification_Type_Data: Notification_Type[];

	Agent_Search: Agent = new Agent();

	Enquiry_Source_title = "";
	Enquiry_Source_type = "BarChart";
	Type_PIe = "PieChart";
	Branchwise_data = [];
	Data_Bar = [];
	Branchwise_columnNames = ["User_Detils_Name", "Data_Count"];
	Enquiry_Source_options = {
		is3D: true,
	};
	width = 550;
	height = 400;
	Permissions: any;
	Is_Status: any;

	constructor(
		public Student_Service_: Student_Service,
		private route: ActivatedRoute,
		private router: Router,
		public dialogBox: MatDialog,
		public Internship_Service_: Internship_Service
	) {}
	ngOnInit() {
		this.Notification_Count = localStorage.getItem("Notification_Count");
		this.Login_User = localStorage.getItem("Login_User");
		// this.array = Get_Page_Permission(this.Menu_Id);
		// this.Export_Permission=Get_Page_Permission(38);
		// if (this.array == undefined || this.array == null)
		// {
		//     localStorage.removeItem('token');
		//     this.router.navigateByUrl('/auth/login');
		// }
		// else
		{
			this.Page_Load();
			// if (this.Export_Permission != undefined && this.Export_Permission != null)
			//     this.Export_View=this.Export_Permission.View
		}
	}
	Page_Load() {
		// this.myInnerHeight = window.innerHeight;
		// this.myInnerHeight = this.myInnerHeight - 150;

		this.Black_Stop = this.Page_Length_;
		this.Red_Stop = this.Page_Length_;

		this.Last_Notification = 0;

		this.Search_Div = true;
		this.Search_By_ = 1;
		this.Registered_By_ = 1;
		this.Is_Status = 1;
		this.Search_Notification_By_=2
		var my_date = new Date();
		this.Search_FromDate = new Date();
		this.Search_FromDate = new Date(
			my_date.getFullYear(),
			my_date.getMonth(),
			1
		);
		this.Search_ToDate = new Date();
		this.Search_ToDate = this.New_Date(this.Search_ToDate);
		// this.Get_Lead_Load_Data();
		this.Get_Menu_Status(74, this.Login_User);
		this.Get_Menu_Status(66, this.Login_User);
		this.Get_Menu_Status(38, this.Login_User);
		this.Get_Menu_Status(65, this.Login_User);
		this.Load_Agents();
		this.Load_application_status();
		this.Search_Notification();
		this.Load_Dropdowns();
		this.Get_Lead_Load_Data_ByUser(this.Login_User);

		this.myInnerHeight = window.innerHeight;
		this.myTotalHeight = this.myInnerHeight - 180;
		this.myTotalHeight = this.myTotalHeight - 40;
		this.myInnerHeight = this.myInnerHeight - 280;
		this.Agent_View = false;
	}
	Load_Dropdowns() {
		this.Internship_Service_.Get_Course_Load_Data().subscribe(
			(Rows) => {
				
				this.Notification_Type_Data = Rows[6];
				this.Notification_Type_Temp.Notification_Type_Id = 0;
				this.Notification_Type_Temp.Notification_Type_Name = "All";
				this.Notification_Type_Data.unshift(
					Object.assign({}, this.Notification_Type_Temp)
				);
				this.Notification_Type_ = this.Notification_Type_Data[0];
			},
			(Rows) => {
				const dialogRef = this.dialogBox.open(DialogBox_Component, {
					panelClass: "Dialogbox-Class",
					data: { Message: "Error Occured", Type: "2" },
				});
			}
		);
	}
	Get_Menu_Status(Menu_id, Login_user_id) {
		this.issLoading = false;
		debugger
		this.Student_Service_.Get_Menu_Status(Menu_id, Login_user_id).subscribe(
			(Rows) => {
				// if(Menu_id==66)

				if (Rows[0][0] == undefined) {
					if (Menu_id == 74) {
						localStorage.removeItem("token");
						this.router.navigateByUrl("Home_Page");
					}
				}
				// else
				// if (Rows[0][0]!=undefined)
				if (Rows[0][0].View > 0) {
					if (Menu_id == 74) {
						this.Permissions = Rows[0][0];
						if (this.Permissions == undefined || this.Permissions == null) {
							localStorage.removeItem("token");
							this.router.navigateByUrl("Home_Page");
						}
					}
				}

				if (Menu_id == 38) {
					this.Export_Permission = Rows[0][0];

					if (
						this.Export_Permission != undefined &&
						this.Export_Permission != null
					)
						this.Export_View = this.Export_Permission.View;
					else this.Export_View = true;
				} else if (Menu_id == 65) {
					this.Agent_Permissions = Rows[0][0];

					if (this.Agent_Permissions.View == true) this.Agent_View = true;
					else this.Agent_View = false;
				}

				// else
				// {
				//     localStorage.removeItem('token');
				//                 this.router.navigateByUrl('Home_Page');
				// }
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
	trackByFn(index, item) {
		return index;
	}
	Edit_Lead(Lead_Id, i) {
		localStorage.setItem("Lead_Id", Lead_Id);

		this.Edit_Page_Permission = Get_Page_Permission(1);
		if (this.Edit_Page_Permission == undefined) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "No permission to view", Type: "2" },
			});
		} else if (this.Edit_Page_Permission.View == true)
			this.router.navigateByUrl("/Leads");
		else {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "No permission to view", Type: "2" },
			});
		}
	}
	Search_Lead_button2() {
		this.Black_Start = 1;
		this.Black_Stop = this.Page_Length_;
		this.Red_Start = 1;
		this.Total_Rows = 0;
		this.Red_Stop = this.Page_Length_;
		// this.Search_Work_report(this.User_Search.User_Details_Id);
	}

	Search_Lead_button() {
		this.Black_Start = 1;
		this.Black_Stop = this.Page_Length_;
		this.Red_Start = 1;
		this.Total_Rows = 0;
		this.Red_Stop = this.Page_Length_;
		//this.Search_Work_report(this.User_Search.User_Details_Id);
		// this.Search_Application_Report();
	}
	Search_More_Options() {
		if (this.More_Search_Options == true) this.More_Search_Options = false;
		else this.More_Search_Options = true;
	}
	Export() {
		this.Student_Service_.exportExcel(
			this.Student_Data_Search,
			"Application-Report"
		);
	}

	View_Details_Click(User_Details_Id) {
		//this.issLoading =true;

		for (var i = 0; i < this.Users_Data.length; i++) {
			if (User_Details_Id == this.Users_Data[i].User_Details_Id)
				this.User_Search = this.Users_Data[i];
		}
		// this.Search_Application_Report();
	}

	// Search_Notification()
	// {

	//     this.WorkSummary_Div=false
	//     this.Search_Div=true
	//     this.Graph=false
	// var value = 1, dept_id=0,Status_Value=1,search_name_='0',look_In_Date_Value=0,branch_id=0,User_Id=0,Agent_Id=0,Application_status_Id=0;

	//     if (this.Look_In_Date == true )
	//         look_In_Date_Value = 1;

	//     if (this.User_Search != undefined && this.User_Search!=null)
	//     if (this.User_Search.User_Details_Id != undefined && this.User_Search.User_Details_Id != null)
	//     User_Id = this.User_Search.User_Details_Id;

	//     if (this.Agent_Mode_ != undefined && this.Agent_Mode_!=null)
	//     if (this.Agent_Mode_.Agent_Id != undefined && this.Agent_Mode_.Agent_Id != null)
	//     Agent_Id = this.Agent_Mode_.Agent_Id;

	//     if (this.Application_Status_Mode_ != undefined && this.Application_Status_Mode_!=null)
	//     if (this.Application_Status_Mode_.Application_status_Id != undefined && this.Application_Status_Mode_.Application_status_Id != null)
	//     Application_status_Id = this.Application_Status_Mode_.Application_status_Id;

	//     if (this.Search_Branch != undefined && this.Search_Branch != null)
	//     if (this.Search_Branch.Branch_Id != undefined && this.Search_Branch.Branch_Id != null)
	//     branch_id = this.Search_Branch.Branch_Id;

	//     if (this.Is_Status != undefined && this.Is_Status != null)
	//     if (this.Is_Status != undefined && this.Is_Status != null && this.Is_Status != '')
	//        Status_Value = this.Is_Status;

	//     this.issLoading = true;

	//     this.Student_Service_.Search_Notification(moment(this.Search_FromDate).format('YYYY-MM-DD'), moment(this.Search_ToDate).format('YYYY-MM-DD'),
	//     branch_id, User_Id,look_In_Date_Value, this.Login_User,Status_Value, Agent_Id,Application_status_Id,Application_status_Id,Application_status_Id,Application_status_Id,Application_status_Id)
	// .subscribe(Rows =>
	// {

	//     this.Student_Data_Search = Rows.returnvalue.Leads;
	//     this.Total_Data=this.Student_Data_Search.length
	//     this.missedfollowup_count =0;
	//     this.followup_count=0;

	// this.issLoading = false;
	// if(this.Student_Data_Search.length==0)
	// {
	//     const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'No Details Found',Type:"3"}});
	// }
	// },
	// Rows =>
	// {
	//     const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
	//     this.issLoading = false;
	// });
	// }

	Search_Notification() {
		//  this.Clr_ApplicationDetails();
		var notification_type_ = 0,search_name_='0';
		var Sort_By_=1;
		this.issLoading = true;
		var loginuser = Number(this.Login_User);
		if (this.Notification_Type_ != undefined && this.Notification_Type_ != null)
			if (
				this.Notification_Type_.Notification_Type_Id != undefined &&
				this.Notification_Type_.Notification_Type_Id != null
			)
				notification_type_ = this.Notification_Type_.Notification_Type_Id;


		
		if (this.Search_Notification_By_ != undefined && this.Search_Notification_By_ != null)
			if (
				this.Search_Notification_By_ != undefined &&
				this.Search_Notification_By_ != null &&
				this.Search_Notification_By_ != ""
		)
		Sort_By_ = this.Search_Notification_By_;	
		
		if (
            this.Search_Name != undefined &&
            this.Search_Name != null &&
            this.Search_Name != ""
        )
            search_name_ = this.Search_Name;

		
		this.Student_Service_.Search_Notification(
			loginuser,
			notification_type_,
			Sort_By_,
			search_name_,
			this.Black_Start,
			this.Black_Stop
		).subscribe(
			(Rows) => {
				
				this.Notification_Details = Rows[0];
				this.Last_Notification = this.Notification_Details.length - 1;

				this.Total_Data = this.Notification_Details.length;
				this.issLoading = false;
			},
			(Rows) => {
				this.issLoading = false;
			}
		);
	}

	Get_Lead_Load_Data_ByUser(Login_User) {
		this.issLoading = true;
		this.Student_Service_.Get_Lead_Load_Data_ByUser(Login_User).subscribe(
			(Rows) => {
				this.Department_Data = Rows[1].slice();
				this.Department_Temp.Department_Id = 0;
				this.Department_Temp.Department_Name = "All";
				this.Department_Data.unshift(Object.assign({}, this.Department_Temp));
				this.Department_Search = this.Department_Data[0];

				this.Users_Data = Rows[0].slice();
				this.Users_Temp.User_Details_Id = 0;
				this.Users_Temp.User_Details_Name = "All";
				this.Users_Data.unshift(Object.assign({}, this.Users_Temp));
				this.User_Search = this.Users_Data[0];

				this.Branch_Data = Rows[2].slice();
				this.Branch_Temp1.Branch_Id = 0;
				this.Branch_Temp1.Branch_Name = "All";
				this.Branch_Data.unshift(Object.assign({}, this.Branch_Temp1));
				this.Search_Branch = this.Branch_Data[0];

				this.Status_Data = Rows[5].slice();
				this.Status_Temp.Department_Status_Id = 0;
				this.Status_Temp.Department_Status_Name = "All";
				this.Status_Data.unshift(Object.assign({}, this.Status_Temp));
				this.Status_Search = this.Status_Data[0];
			},
			(Rows) => {
				const dialogRef = this.dialogBox.open(DialogBox_Component, {
					panelClass: "Dialogbox-Class",
					data: { Message: "Error Occured", Type: "2" },
				});
			}
		);
	}

	Next_Click() {
		if (this.Notification_Details.length == this.Page_Length_) {
			this.Black_Start = this.Black_Start + this.Page_Length_;
			this.Black_Stop = this.Black_Stop + this.Page_Length_;
			if (this.missedfollowup_count > 0) {
				this.Red_Start = this.Red_Start + this.missedfollowup_count;
				this.Red_Stop = this.Red_Start + this.Page_Length_;
			}
			this.nextflag = 1;
			if (this.Notification_Details.length > 0) {
				this.Search_Notification();
			}
		}
	}
	previous_Click() {
		if (this.Black_Start > 1) {
			{
				this.Black_Start = this.Black_Start - this.Page_Length_;
				this.Black_Stop = this.Black_Stop - this.Page_Length_;
			}
			if (this.missedfollowup_count > 0 || this.Red_Start > 1) {
				this.Red_Start = this.Red_Start - this.Page_Length_;
				if (this.Red_Start <= 0) this.Red_Start = 1;
				this.Red_Stop = this.Red_Start + this.Page_Length_;
			}
			this.Total_Rows =
				this.Total_Rows - this.Notification_Details.length - this.Page_Length_;
			this.Search_Notification();
		}
	}

	Graph_View() {
		this.Graph = true;
		this.Summary_Sub = false;
	}

	Load_Agents() {
		this.issLoading = true;
		this.Student_Service_.Load_Agents().subscribe(
			(Rows) => {
				if (Rows != null) {
					this.Agent_Mode_Data = Rows[0];
					this.Agent_Mode_Temp.Agent_Id = 0;
					this.Agent_Mode_Temp.Agent_Name = "Select";
					this.Agent_Mode_Data.unshift(this.Agent_Mode_Temp);

					this.Agent_Mode_ = this.Agent_Mode_Data[0];
					this.issLoading = false;
				}
			},
			(Rows) => {
				this.issLoading = false;
			}
		);
	}

	Load_application_status() {
		this.issLoading = true;
		this.Student_Service_.Load_application_status().subscribe(
			(Rows) => {
				if (Rows != null) {
					this.Application_Status_Mode_Data = Rows[0];
					this.Application_Status_Mode_Temp.Application_status_Id = 0;
					this.Application_Status_Mode_Temp.Application_Status_Name = "Select";
					this.Application_Status_Mode_Data.unshift(
						this.Application_Status_Mode_Temp
					);

					this.Application_Status_Mode_ = this.Application_Status_Mode_Data[1];
					this.issLoading = false;
					// this.Search_Application_Report();
				}
			},
			(Rows) => {
				this.issLoading = false;
			}
		);
	}

	Edit_Student_Notification(Student_Id, i) {
		
		localStorage.setItem("Student_Id", Student_Id);
		console.log(Student_Id);
		this.Edit_Page_Permission = Get_Page_Permission(5);
		if (this.Edit_Page_Permission == undefined) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "No permission to view", Type: "2" },
			});
		} else if (this.Edit_Page_Permission.View == true)
			// this.router.navigateByUrl('/Stu');
			// window.open('/Student')
			this.goToLink();
		else {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "No permission to view", Type: "2" },
			});
		}
	}

	goToLink() {
		return;
		const url = this.router.serializeUrl(
			this.router.createUrlTree(["/Student"])
		);
		// window.open('/Student');
		window.open(url, "_blank");
	}

	Mark_All_Read() {
		this.issLoading = false;

		this.markall_button_view = false;
		
		this.Student_Service_.Notification_Read_Status(
			this.Notification_Count,
			this.Login_User
		).subscribe(
			(Rows) => {
				
				localStorage.setItem("Notification_Count", "0");
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
