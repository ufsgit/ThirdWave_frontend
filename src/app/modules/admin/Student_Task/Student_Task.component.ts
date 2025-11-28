import { Component, OnInit, Input, Injectable } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable, of as observableOf, merge } from "rxjs";
import { Student_Service } from "../../../services/Student.Service";
import { DialogBox_Component } from "../DialogBox/DialogBox.component";
import { Student } from "../../../models/Student";
import { Branch } from "../../../models/Branch";
import { User_Details } from "../../../models/User_Details";
import { Department } from "../../../models/Department";
import { Department_Status } from "../../../models/Department_Status";
import { Gender } from "../../../models/Gender";
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
import { Remarks } from "../../../models/Remarks";
import { Student_FollowUp } from "../../../models/Student_FollowUp";
import { Enquiry_Source } from "../../../models/Enquiry_Source";
import { Internship_Service } from "../../../services/Internship.service";
import { Fees_Receipt_Status } from "../../../models/Fees_Receipt_Status";
import { Task_Status } from "../../../models/Task_Status";
import { Student_Task } from "../../../models/Student_Task";
import { Task_Item } from "../../../models/Task_Item";

import { environment } from "../../../../environments/environment.js";
import { Task_Group } from "../../../models/Task_group";
import * as io from "socket.io-client";
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
	selector: "app-Student_Task",
	templateUrl: "./Student_Task.component.html",
	styleUrls: ["./Student_Task.component.css"],
	providers: [
		{
			provide: DateAdapter,
			useClass: MomentDateAdapter,
			deps: [MAT_DATE_LOCALE],
		},
		{ provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
	],
})
export class Student_TaskComponent implements OnInit {
	// private url = "http://localhost:3510";
	// private url = 'ws:http://regnewapi.trackbox.co.in:3646/'
	url = environment.NotificationPath; //'http://regnewapi.trackbox.co.in:3646/'
	private socket;
	Status_Search: Department_Status = new Department_Status();
	User_Search: User_Details = new User_Details();
	Search_Name = "";
	Department_Search: Department = new Department();
	Search_Branch: Branch = new Branch();
	Search_Task_Status: Task_Status = new Task_Status();
	Search_Fees_Receipt_Status: Fees_Receipt_Status = new Fees_Receipt_Status();
	Search_FromDate: Date = new Date();
	Search_ToDate: Date = new Date();
	Look_In_Date: Boolean = true;
	More_Search_Options: boolean = true;
	Save_Call_Status: boolean = false;

	Enquiry_Source_Search_: Enquiry_Source = new Enquiry_Source();
	Enquiry_Source_: Enquiry_Source = new Enquiry_Source();
	Cas_Followup_View: boolean = false;
	Enquiry_Source_Data: Enquiry_Source[];
	Enquiry_Source_Search_Data: Enquiry_Source[];
	Enquiry_Source_Temp: Enquiry_Source = new Enquiry_Source();
	Enquiry_Source_Search_Temp: Enquiry_Source = new Enquiry_Source();

	Department_Data: Department[];
	FollowUp_Branch_Task_: Branch = new Branch();
	Users_Data: User_Details[];
	Branch_Data: Branch[];
	cas_task_id: number;
	cas_task_student_id: number;
	cas_task_item_id: number;
	cas_task_group_id: number;
	Cas_Followup_: Student_Task = new Student_Task();
	Temp_Date_Followup: Date;
	Student_Task_Data: Student_Task[];

	Task_Status_Data: Task_Status[];

	Fees_Receipt_Status_Data: Fees_Receipt_Status[];
	Status_Data: Department_Status[];
	Gender_Data: Gender[];
	Branch_Temp1: Branch = new Branch();
	Fees_Receipt_Status_Temp: Fees_Receipt_Status = new Fees_Receipt_Status();
	Users_Temp: User_Details = new User_Details();
	Department_Temp: Department = new Department();
	Status_Temp: Department_Status = new Department_Status();
	missedfollowup_count: number = 1;
	followup_count: number = 1;
	FollowUp_: Student_FollowUp = new Student_FollowUp();
	Followup_Users_Task_: User_Details = new User_Details();

	student_name: string;
	to_user_name: string;

	Lead_Data: Student[];
	Student_Data_Search: Student[];
	Task_Data_Search: Student_Task[];
	Student_Data: Student[];
	Student_Data_Item: Student = new Student();
	Lead_: Student = new Student();
	Search_Div: boolean = false;
	array: any;
	color = "primary";
	mode = "indeterminate";
	value = 50;
	myInnerHeight: number;
	myInnerHeightTwo: number;
	myTotalHeight: number;
	issLoading: boolean;
	approve_reject_status: string;

	Refund_Approval_Comment_View: boolean = false;

	Total_Amount: number = 0;
	Total_Students: number = 0;
	Total_Registration: number = 0;
	Total_Entries: number = 0;

	Show_FollowUp: boolean = false;
	main_View: boolean = false;
	Student_Selected_Data: Student[];

	Black: boolean = false;
	Red: boolean = false;
	pagePointer: number = 0;
	pageindex2: number = 0;
	pageindex: number = 0;
	Total_Rows: number = 0;
	isLoading = false;
	Search_By_: any;
	Registered_By_: any;
	year: any;
	month: any;
	day: any;
	date: any;
	Login_User: string = "0";
	Menu_Id: number = 52;

	Select_Student: boolean = false;
	Select_View: boolean = false;
	Student_Id: number = 0;
	Student_: Student = new Student();

	Enquiry_Source_data_temp: [];
	RowCount: number = 0;
	RowCount2: number = 0;
	nextflag: number = -1;
	Page_Length_: number = 10;
	firstnum: number = 0;
	lastnum: number = 1;
	shownext: boolean = false;
	showprev: boolean = false;

	Followup_Branch_Data_Filter: Branch[];
	Black_Start: number = 1;
	Black_Stop: number = 0;
	Red_Start: number = 1;
	Red_Stop: number = 0;
	points25: boolean = false;
	Edit_Page_Permission: any;
	Comment: String;

	Student_Task_Id: number;

	Followup_Users_Data: User_Details[];
	Followup_Users_Data_t: User_Details[];
	Followup_Users_Data_t_Filter: User_Details[];
	Followup_Users_Data_tN: Student_FollowUp[];
	Followup_Users_: User_Details = new User_Details();
	Followup_Users_t: User_Details = new User_Details();
	Followup_Users_temp: User_Details = new User_Details();

	Followup_Users_tN: Student_FollowUp = new Student_FollowUp();
	//Followup_Users_tempN: Student_FollowUp = new Student_FollowUp();
	Followup_Users_tempN: User_Details = new User_Details();

	FollowUp_Department_TN: Student_FollowUp = new Student_FollowUp();
	//FollowUp_Department_TempN: Student_FollowUp = new Student_FollowUp();
	FollowUp_Department_TempN: Department = new Department();
	Followup_Department_DataN: Student_FollowUp[];
	Followup_Department_Data_TN: Student_FollowUp[];
	Followup_Department_Data_CheckN: Student_FollowUp[];

	Student_Selection_Data_Temp: Student[];

	FollowUp_Status_: Department_Status = new Department_Status();

	Followup_Status_Data: Department_Status[];

	Lead_Fees_Receipt_Id: number;

	FollowUp_Department_: Department = new Department();
	Followup_Department_Data: Department[];
	Followup_Department_Data_Check: Department[];
	FollowUp_Department_Task_: Department = new Department();
	FollowUp_Branch_: Branch = new Branch();
	Followup_Branch_Data: Branch[];
	Branch_Temp: Branch = new Branch();

	Remarks_: Remarks = new Remarks();
	Remarks_Data: Remarks[];
	Remarks_Temp: Remarks = new Remarks();
	Login_Id: number;
	Summary_Div: boolean = false;
	Login_User_Name: string;

	
	Followup_Branch_tempN: Branch = new Branch();

	Export_Permission: any;
	Export_View: boolean = false;
	Load_Graph = 0;
	Graph_Button: boolean = false;
	Enquiry_Source_title = "";
	Enquiry_Source_type = "PieChart";
	Enquiry_Source_data = [];
	Enquiry_Source_columnNames = [];
	Enquiry_Source_options = { is3D: true };
	width = 550;
	height = 400;
	Title_Bar = "Browser market shares at a specific website, 2014";
	Type_Bar = "BarChart";
	Data_Bar = [];
	columnNames_Bar = ["Browser", "Count"];
	options_Bar = { is3D: true };
	Permissions: any;
	Task_Status_: Task_Status = new Task_Status();
	Task_Status_search_: Task_Status = new Task_Status();
	Task_Status_Temp_search: Task_Status = new Task_Status();
	Task_Status_Temp: Task_Status = new Task_Status();
	Task_Status_Data_search: Task_Status[];
	Task_Item_: Task_Item = new Task_Item();
	Task_Item_search_: Task_Item = new Task_Item();
	Task_Item_search_Tasknew_: Task_Item = new Task_Item();
	
	Task_Item_Data_search_Tasknew: Task_Item[];
	Task_Item_Temp: Task_Item = new Task_Item();
	Task_ItemN_Temp: Task_Item = new Task_Item();
	Task_Item_Data_search: Task_Item[];
	Task_Item_Data: Task_Item[];
	Task_Status_Id_: number = 0;
	Task_Item_Id_: number = 0;
	Historydiv: boolean = false;
	Pointer_Start_: number;
	Pointer_Stop_: number;
	Total_Task_Rows: number = 0;
	Task_Group_Id: number;
	Cas_FollowupTasknew_View: boolean = false;
	Tasknew_View: boolean = false;
	Tasknewmodal_View: boolean = true;
	Login_Department:number
	Login_Department_Name:string;
	Assign_User_ :number =1;
	Assign_User_Dashboard_:number;
	pendingtask_click:number=0;
	User_PendingId:number=0;
	Login_User_Temp: string;

	Date_value: string;
	ToDate:Date;
	FromDate:Date;
	Login_User_task:string="0";

	constructor(
		public Student_Service_: Student_Service,
		public Internship_Service_: Internship_Service,
		private route: ActivatedRoute,
		private router: Router,
		public dialogBox: MatDialog
	) {
		this.socket = io(this.url, { transports: ["websocket"] });
		this.socket = io(this.url);
	}
	ngOnInit() {

		debugger
		this.Login_User = localStorage.getItem("Login_User");
		this.Login_User_Temp = localStorage.getItem("Login_User");
		this.Login_User_Name = localStorage.getItem("uname");
		this.Login_Department_Name= localStorage.getItem("Login_Department_Name");
		this.Login_Department = Number(localStorage.getItem("Login_Department"));

		this.Assign_User_Dashboard_ = Number(localStorage.getItem("Assign_User_Dashboard_"));

		this.pendingtask_click = Number(localStorage.getItem("pendingtask_click"));
		this.User_PendingId = Number(localStorage.getItem("User_PendingId"));
		this.Date_value = localStorage.getItem("Look_In_");
		this.FromDate = new Date(localStorage.getItem('Search_FromDate'))
		this.ToDate = new Date(localStorage.getItem('Search_ToDate'));

		localStorage.setItem('pendingtask_click', '0');
        localStorage.setItem('User_PendingId', '0');

        localStorage.setItem('Assign_User_Dashboard_', '1');

if(this.Assign_User_Dashboard_==0){this.Assign_User_=0}

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
		this.Pointer_Start_ = 1;
		this.Pointer_Stop_ = this.Page_Length_;
		this.main_View = false;
		this.Summary_Div = true;
		this.Task_Item_Dropdown_All();
		this.Load_Dropdowns();
		this.Task_Status_Dropdown();
		this.Look_In_Date = false;
		this.Get_Student_PageLoadData_Dropdowns()
		this.Get_Last_Followup();
		// this.Search_Student_Report();
		//this.Search_EnquirySource_Graph();
		this.Show_FollowUp = false;
		this.Search_By_ = 1;
		this.Registered_By_ = 1;
		// this.Get_Lead_Load_Data();
		this.Get_Menu_Status(95, this.Login_User);
		this.Get_Menu_Status(38, this.Login_User);
		this.Get_Lead_Load_Data_ByUser(this.Login_User);
		this.Search_FromDate = this.New_Date(this.Search_FromDate);
		this.Search_ToDate = this.New_Date(this.Search_ToDate);
		this.myInnerHeight = window.innerHeight;
		this.myTotalHeight = this.myInnerHeight;
		this.myTotalHeight = this.myTotalHeight - 90;
		this.myInnerHeight = this.myInnerHeight - 270;
		this.myInnerHeightTwo = this.myInnerHeight - 90;

debugger
		

	}
	Get_Menu_Status(Menu_id, Login_user_id) {
		this.issLoading = false;
		this.Student_Service_.Get_Menu_Status(Menu_id, Login_user_id).subscribe(
			(Rows) => {
				// if(Menu_id==17)
				if (Rows[0][0] == undefined) {
					if (Menu_id == 95) {
						localStorage.removeItem("token");
						this.router.navigateByUrl("Home_Page");
					}
				}
				// if (Rows[0][0]!=undefined)
				else if (Rows[0][0].View > 0) {
					if (Menu_id == 95) {
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
	Load_Dropdowns() {
		this.Internship_Service_.Get_Course_Load_Data().subscribe(
			(Rows) => {
				this.Enquiry_Source_Data = Rows[5].slice();
				this.Enquiry_Source_Temp.Enquiry_Source_Id = 0;
				this.Enquiry_Source_Temp.Enquiry_Source_Name = "Select";
				this.Enquiry_Source_Data.unshift(this.Enquiry_Source_Temp);
				this.Enquiry_Source_ = this.Enquiry_Source_Data[0];
				// this.Fees_Array = Rows[6].slice();
				// this.Fees_Temp.Fees_Id = 0;
				// this.Fees_Temp.Fees_Name = "Select";
				// this.Fees_Array.unshift(this.Fees_Temp);
				// this.Fees_Data_ = this.Fees_Array[0];
			},
			(Rows) => {
				const dialogRef = this.dialogBox.open(DialogBox_Component, {
					panelClass: "Dialogbox-Class",
					data: { Message: "Error Occured", Type: "2" },
				});
			}
		);
	}
	trackByFn(index, item) {
		return index;
	}
	Edit_Lead(Lead_Id, i) {
		debugger
		localStorage.setItem("Student_Id", Lead_Id);
		
		this.Cas_Followup_View = false;
		//this.Cas_FollowupTasknew_View = true;
		this.Tasknew_View = false;

	

		this.Edit_Page_Permission = Get_Page_Permission(5);
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
	Student_View_Click() {
		this.Task_Data_Search = this.Task_Data_Search.map((task: any) => {
			if (task.Task_Status === 1) {
				task.Check_Box_View = !this.Select_Student;
			}
			return task;
		});
	}
	
	New_Followup() {
		this.Show_FollowUp = true;
		this.main_View = false;
		// this.FollowUp_.Next_FollowUp_Date=new Date();
		// this.FollowUp_.Next_FollowUp_Date=this.New_Date( this.FollowUp_.Next_FollowUp_Date);
	}
	Search_Lead_button() {
		this.Pointer_Start_ = 1;
		this.Pointer_Stop_ = this.Page_Length_;
		this.Total_Task_Rows = 0;
		// this.Search_Student_Report();
		this.Search_Task_Data();
	}

	Search_More_Options() {
		if (this.More_Search_Options == true) this.More_Search_Options = false;
		else this.More_Search_Options = true;
	}
	Export() {
		this.Student_Service_.exportExcel(
			this.Student_Data_Search,
			"Receipt_Confirmation"
		);
	}
	Branch_Change() {
		this.FollowUp_Department_ = null;
		this.Followup_Users_ = null;
		this.FollowUp_Status_ = null;
		this.Followup_Department_Data = [];
		this.Followup_Department_Data_Check = [];
		this.Followup_Users_Data = [];
		this.Followup_Status_Data = [];

		this.Followup_Users_ =null
this.Followup_Users_Task_ =null
this.FollowUp_Department_Task_ =null
	}
	Focus_It() {
		setTimeout("$('[name=Followup_Status]').focus();", 0);
	}
	Department_Change() {
		//  document.getElementById("Followup_Status").focus();
		$("[name=Followup_Status]").focus();
		this.Focus_It();
		this.Followup_Users_ = null;
		this.FollowUp_Status_ = null;
		this.Followup_Users_Data = [];
		this.Followup_Users_Data_t=[];
		this.Followup_Status_Data = [];
		this.Followup_Department_Data = [];
		this.Followup_Users_Task_ = null;
		// if(this.FollowUp_Department_.Department_FollowUp==true)
		// this.Next_FollowUp_Date_Visible=false;
		// else
		// this.Next_FollowUp_Date_Visible=true;
		this.FollowUp_.Next_FollowUp_Date = new Date();
		this.FollowUp_.Next_FollowUp_Date = this.New_Date(
			this.FollowUp_.Next_FollowUp_Date
		);
	}
	Search_Task_Data() {
		this.main_View = true;
		this.Summary_Div = false;
		this.Load_Graph = 1;
		(this.Total_Amount = 0),
			(this.Total_Registration = 0),
			(this.Total_Students = 0);
		var User_Id = 0,
			look_In_Date_Value = 0,
			Status_Id = 0,
			Fees_Receipt_Status_Id = 0,
			Task_Item_Id = 0;
		// if(this.Search_By_!=undefined && this.Search_By_!=null)
		// if (this.Search_By_ != undefined && this.Search_By_ != null && this.Search_By_ != '')
		// value=this.Search_By_;
		if (this.Look_In_Date == true) look_In_Date_Value = 1;

		// if (this.Search_Name != undefined && this.Search_Name != null && this.Search_Name != '')
		// search_name_ = this.Search_Name;
		// if (this.User_Search == undefined && this.User_Search==null)
		// {
		//     const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Enter Staff Name',Type:"3"}});
		//         return;
		// }
		if (this.User_Search != undefined && this.User_Search != null)
			if (
				this.User_Search.User_Details_Id != undefined &&
				this.User_Search.User_Details_Id != null
			)
				User_Id = this.User_Search.User_Details_Id;
		// if (this.Department_Search != undefined && this.Department_Search != null)
		// if (this.Department_Search.Department_Id != undefined && this.Department_Search.Department_Id != null)
		// dept_id = this.Department_Search.Department_Id;
		if (
			this.Task_Status_search_ != undefined &&
			this.Task_Status_search_ != null
		)
			if (
				this.Task_Status_search_.Task_Status_Id != undefined &&
				this.Task_Status_search_.Task_Status_Id != null
			)
				Status_Id = this.Task_Status_search_.Task_Status_Id;
		if (this.Task_Item_search_ != undefined && this.Task_Item_search_ != null)
			if (
				this.Task_Item_search_.Task_Item_Id != undefined &&
				this.Task_Item_search_.Task_Item_Id != null
			)
				Task_Item_Id = this.Task_Item_search_.Task_Item_Id;
		if (
			this.Search_Fees_Receipt_Status != undefined &&
			this.Search_Fees_Receipt_Status != null
		)
			if (
				this.Search_Fees_Receipt_Status.Fees_Receipt_Status_Id != undefined &&
				this.Search_Fees_Receipt_Status.Fees_Receipt_Status_Id != null
			)
				Fees_Receipt_Status_Id =
					this.Search_Fees_Receipt_Status.Fees_Receipt_Status_Id;
		var c = 0;
		this.issLoading = true;
debugger
		this.Student_Service_.Search_Task_Data(
			moment(this.Search_FromDate).format("YYYY-MM-DD"),
			moment(this.Search_ToDate).format("YYYY-MM-DD"),
			this.Login_User,
			look_In_Date_Value,
			Status_Id,
			Task_Item_Id,
			this.Pointer_Start_,
			this.Pointer_Stop_,
			this.Page_Length_,Number(this.Assign_User_)
		).subscribe(
			(Graph_Status) => {
				
				this.issLoading = false;
				this.Task_Data_Search = Graph_Status.returnvalue.Leads;
				var Serach_Data = Graph_Status.returnvalue.Leads;
				this.Total_Entries =
					this.Task_Data_Search[
						this.Task_Data_Search.length - 1
					].Student_Task_Id;
				this.Task_Data_Search.pop();

				this.Temp_Date_Followup = new Date();
				var temp = this.New_Date(this.Temp_Date_Followup);
				for (var i = 0; i < this.Task_Data_Search.length; i++) {
					var temp_next = moment(
						this.Task_Data_Search[i].ActualFollowup_Date
					).format("YYYY-MM-DD");
					if (temp_next < temp) this.Task_Data_Search[i].tp = 2;
					else this.Task_Data_Search[i].tp = 1;
debugger
// console.log(this.Task_Data_Search[i].RowNo,'1')
console.log(this.Total_Task_Rows,'1')
console.log(this.Task_Data_Search.length,'2')
console.log(i,'3')
					this.Task_Data_Search[i].RowNo =
						this.Total_Task_Rows + this.Task_Data_Search.length - i;
						// console.log(this.Task_Data_Search[i].RowNo,'2')
					// this.Task_Data_Search[i].RowNo_sort = i + 1 + this.Total_Task_Rows;

					this.Task_Data_Search[i].RowNo =
						this.Total_Task_Rows+ i+1;

						// console.log(this.Task_Data_Search[i].RowNo,'3')
				}
				// this.Task_Data_Search = this.Task_Data_Search.sort(
				// 	(a, b) => b.RowNo_sort - a.RowNo_sort
				// );

				if (this.Task_Data_Search.length > 0)
					this.Total_Task_Rows =
						this.Total_Task_Rows + this.Task_Data_Search.length;
						// console.log(this.Total_Task_Rows,'4')
				// for (var j=0;j<Serach_Data.length;j++)
				// {
				//     this.Total_Amount=Number(this.Total_Amount)+Number(Serach_Data[j].ReceivedAmount)

				// }
				// for (var j=0;j<Serach_Data.length;j++)
				// {
				//     this.Total_Registration=Number(this.Total_Registration)+Number(Serach_Data[j].Registration)

				// }
				// for (var j=0;j<Serach_Data.length;j++)
				// {
				//     this.Total_Students=Number(this.Total_Students)+Number(Serach_Data[j].No_of_Students)

				// }

				// var Enquiry_Source_data_temp = Graph_Status.returnvalue.Leads;
				// this.issLoading = false;
				// var result = [];
				//  this.Enquiry_Source_columnNames=[];

				// for (var i in Enquiry_Source_data_temp)
				// {
				//     result.push([Enquiry_Source_data_temp[i].Enquiry_Source_Name, Enquiry_Source_data_temp[i].Data_Count]);

				// }

				// var data_temp = new google.visualization.DataTable(result);
				// this.Enquiry_Source_columnNames.push('User')
				// this.Enquiry_Source_columnNames.push('Count')
				// this.Enquiry_Source_data = result;
				// this.Data_Bar=result;
				if (Serach_Data.length == 0) {
					const dialogRef = this.dialogBox.open(DialogBox_Component, {
						panelClass: "Dialogbox-Class",
						data: { Message: "No Data Found", Type: "3" },
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
	Task_Status_Dropdown() {
		this.issLoading = true;
		this.Student_Service_.Task_Status_Dropdown().subscribe(
			(Rows) => {
				if (Rows != null) {
					this.Task_Status_Data_search = Rows[0];
					this.Task_Status_Temp_search.Task_Status_Id = 0;
					this.Task_Status_Temp_search.Status_Name = "Select";
					this.Task_Status_Data_search.unshift(this.Task_Status_Temp_search);
					this.Task_Status_search_ = this.Task_Status_Data_search[0];
					this.Task_Status_Data = Rows[0];
					// this.Task_Status_Temp.Task_Status_Id = 0;
					// this.Task_Status_Temp.Status_Name = "Select";
					// this.Task_Status_Data.unshift(this.Task_Status_Temp);
					this.Task_Status_search_ = this.Task_Status_Data[1];
					this.issLoading = false;
					// if(this.Task_Status_Id_ >0)
					// {
					//     for (var i = 0; i < this.Task_Status_Data_search.length; i++) {
					//         if (
					//             this.Task_Status_Data_search[i].Task_Status_Id == this.Task_Status_Id_
					//         )
					//             this.Task_Status_ = this.Task_Status_Data_search[i];

					//     }

					// }
					// else
					//     this.Task_Status_ = this.Task_Status_Data_search[1];
				



					if(this.pendingtask_click>0 && this.User_PendingId>0)
						{
							
							debugger
							// this.Pointer_Start_ = 1;
							// 	this.Pointer_Stop_ = this.Page_Length_;
							// 	this.Total_Task_Rows = 0;
								this.Login_User_task=String(this.User_PendingId);
								this.Login_User=this.Login_User_task;
				
								this.Search_FromDate = this.FromDate;
								this.Search_ToDate = this.ToDate;
								if(this.Date_value=="true"){this.Look_In_Date=true}
								if(this.Date_value=="false"){this.Look_In_Date=false}
								// this.Look_In_Date =Boolean(this.Date_value);
				
								this.Search_Lead_button();
							
						}
						else{
							this.Login_User= localStorage.getItem("Login_User");
							// this.Search_FromDate = this.New_Date(this.Search_FromDate);
							// this.Search_ToDate = this.New_Date(this.Search_ToDate);
							this.Look_In_Date =false;
							this.Search_Lead_button();
						}
				
						this.pendingtask_click=0 ;
						 this.User_PendingId=0;
				}
			},
			(Rows) => {
				this.issLoading = false;
			}
		);
	}
	Get_Student_PageLoadData_Dropdowns() {
		this.Student_Service_.Get_Student_PageLoadData_Dropdowns().subscribe(
			(Rows) => {
				this.Task_Status_Data = Rows[16].slice();
				this.Task_Status_Temp.Task_Status_Id = 0;
				this.Task_Status_Temp.Status_Name = "Select";
				this.Task_Status_Data.unshift(Object.assign({}, this.Task_Status_Temp));
				this.Task_Status_ = this.Task_Status_Data[0];

			},
			(Rows) => {
				const dialogRef = this.dialogBox.open(DialogBox_Component, {
					panelClass: "Dialogbox-Class",
					data: { Message: "Error Occured", Type: "2" },
				});
			}
		);
	}
	Task_Item_Dropdown_All() {
		this.issLoading = true;

		this.Student_Service_.Task_Item_Dropdown_All().subscribe(
			(Rows) => {
				if (Rows != null) {
					this.Task_Item_Data_search = Rows[0].slice();
					this.Task_Item_Data = Rows[0].slice();
					this.Task_Item_Temp.Task_Item_Id = 0;
					this.Task_Item_Temp.Task_Item_Name = "All";
					this.Task_ItemN_Temp.Task_Item_Id=0
					this.Task_ItemN_Temp.Task_Item_Name = "Select"
					this.Task_Item_Data_search.unshift(Object.assign({}, this.Task_Item_Temp));
					this.Task_Item_search_ = this.Task_Item_Data_search[0];
					this.Task_Item_Data.unshift(Object.assign({},this.Task_ItemN_Temp) );
					this.Task_Item_search_Tasknew_ = this.Task_Item_Data[0]
					this.issLoading = false;
					// if(this.Task_Item_Id_ >0)
					// {
					//     for (var i = 0; i < this.Task_Item_Data_search.length; i++) {
					//         if (
					//             this.Task_Item_Data_search[i].Task_Item_Id == this.Task_Item_Id_
					//         )
					//             this.Task_Item_ = this.Task_Item_Data_search[i];
					//     }
					// }
					// else
					//     this.Task_Item_ = this.Task_Item_Data_search[1];
					// this.Search_Task_Data()
				}
			},
			(Rows) => {
				this.issLoading = false;
			}
		);
	}
	Search_Student_Report() {
		this.main_View = true;
		this.Summary_Div = false;
		var value = 1,
			dept_id = 0,
			User_Id = 0,
			search_name_ = "0",
			look_In_Date_Value = 0,
			Enqury_Id = 0,
			branch_id = 0;
		if (this.Search_By_ != undefined && this.Search_By_ != null)
			if (
				this.Search_By_ != undefined &&
				this.Search_By_ != null &&
				this.Search_By_ != ""
			)
				value = this.Search_By_;

		if (this.Look_In_Date == true) look_In_Date_Value = 1;

		if (
			this.Search_Name != undefined &&
			this.Search_Name != null &&
			this.Search_Name != ""
		)
			search_name_ = this.Search_Name;

		if (this.User_Search != undefined && this.User_Search != null)
			if (
				this.User_Search.User_Details_Id != undefined &&
				this.User_Search.User_Details_Id != null
			)
				User_Id = this.User_Search.User_Details_Id;

		if (this.Department_Search != undefined && this.Department_Search != null)
			if (
				this.Department_Search.Department_Id != undefined &&
				this.Department_Search.Department_Id != null
			)
				dept_id = this.Department_Search.Department_Id;

		if (
			this.Enquiry_Source_Search_ != undefined &&
			this.Enquiry_Source_Search_ != null
		)
			if (
				this.Enquiry_Source_Search_.Enquiry_Source_Id != undefined &&
				this.Enquiry_Source_Search_.Enquiry_Source_Id != null
			)
				Enqury_Id = this.Enquiry_Source_Search_.Enquiry_Source_Id;

		if (this.Search_Branch != undefined && this.Search_Branch != null)
			if (
				this.Search_Branch.Branch_Id != undefined &&
				this.Search_Branch.Branch_Id != null
			)
				branch_id = this.Search_Branch.Branch_Id;

		this.issLoading = true;

		this.Student_Service_.Search_Enquiry_Source_Report(
			moment(this.Search_FromDate).format("YYYY-MM-DD"),
			moment(this.Search_ToDate).format("YYYY-MM-DD"),
			look_In_Date_Value,
			branch_id
		).subscribe(
			(Rows) => {
				//log(Rows)
				this.Student_Data_Search = Rows.returnvalue.Leads;
				this.missedfollowup_count = 0;
				this.followup_count = 0;

				for (var i = 0; i < this.Student_Data_Search.length; i++) {
					this.Student_Data_Search[i].RowNo = i + 1 + this.Total_Rows;
					if (this.Student_Data_Search[i].tp == 1)
						this.followup_count = this.followup_count + 1;
					if (this.Student_Data_Search[i].tp == 2)
						this.missedfollowup_count = this.missedfollowup_count + 1;
				}

				if (this.Student_Data_Search.length > 0)
					this.Total_Rows = this.Total_Rows + this.Student_Data_Search.length;
				this.issLoading = false;
				if (this.Student_Data_Search.length == 0) {
					const dialogRef = this.dialogBox.open(DialogBox_Component, {
						panelClass: "Dialogbox-Class",
						data: { Message: "No Details Found", Type: "3" },
					});
				}
			},
			(Rows) => {
				const dialogRef = this.dialogBox.open(DialogBox_Component, {
					panelClass: "Dialogbox-Class",
					data: { Message: "Error Occured", Type: "2" },
				});
				this.issLoading = false;
			}
		);
	}
	Get_Lead_Load_Data() {
		this.issLoading = true;
		this.Student_Service_.Get_Lead_Load_Data().subscribe(
			(Rows) => {
				if (Rows != undefined) {
					this.issLoading = false;
					this.Department_Data = Rows.returnvalue.Department;
					this.Users_Data = Rows.returnvalue.Users;
					this.Branch_Data = Rows.returnvalue.Branch;
					this.Status_Data = Rows.returnvalue.Department_Status;

					this.Department_Temp.Department_Id = 0;
					this.Department_Temp.Department_Name = "All";
					this.Department_Data.unshift(Object.assign({}, this.Department_Temp));
					this.Department_Search = this.Department_Data[0];

					this.Users_Temp.User_Details_Id = 0;
					this.Users_Temp.User_Details_Name = "All";
					this.Users_Data.unshift(Object.assign({}, this.Users_Temp));
					this.User_Search = this.Users_Data[0];
					this.Branch_Temp1.Branch_Id = 0;

					this.Branch_Temp1.Branch_Name = "All";
					this.Branch_Data.unshift(this.Branch_Temp1);
					this.Search_Branch = this.Branch_Data[0];

					this.Status_Temp.Department_Status_Id = 0;
					this.Status_Temp.Department_Status_Name = "All";
					this.Status_Data.unshift(Object.assign({}, this.Status_Temp));
					this.Status_Search = this.Status_Data[0];
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
	Get_Lead_Load_Data_ByUser(Login_User) {
		this.issLoading = true;
		this.Student_Service_.Get_Lead_Load_Data_ByUser(Login_User).subscribe(
			(Rows) => {
				this.Department_Data = Rows[1].slice();
				this.Department_Temp.Department_Id = 0;
				this.Department_Temp.Department_Name = "All";
				this.Department_Data.unshift(this.Department_Temp);
				this.Department_Search = this.Department_Data[0];

				this.Users_Data = Rows[0].slice();
				this.Users_Temp.User_Details_Id = 0;
				this.Users_Temp.User_Details_Name = "All";
				this.Users_Data.unshift(this.Users_Temp);
				this.User_Search = this.Users_Data[0];

				this.Branch_Data = Rows[2].slice();
				this.Branch_Temp1.Branch_Id = 0;
				this.Branch_Temp1.Branch_Name = "All";
				this.Branch_Data.unshift(this.Branch_Temp1);
				this.Search_Branch = this.Branch_Data[0];

				this.Status_Data = Rows[5].slice();
				this.Status_Temp.Department_Status_Id = 0;
				this.Status_Temp.Department_Status_Name = "All";
				this.Status_Data.unshift(this.Status_Temp);
				this.Status_Search = this.Status_Data[0];

				this.Fees_Receipt_Status_Data = Rows[8].slice();
				this.Fees_Receipt_Status_Temp.Fees_Receipt_Status_Id = 0;
				this.Fees_Receipt_Status_Temp.Fees_Receipt_Status_Name = "All";
				this.Fees_Receipt_Status_Data.unshift(this.Fees_Receipt_Status_Temp);
				this.Search_Fees_Receipt_Status = this.Fees_Receipt_Status_Data[0];
			},
			(Rows) => {
				const dialogRef = this.dialogBox.open(DialogBox_Component, {
					panelClass: "Dialogbox-Class",
					data: { Message: "Error Occured", Type: "2" },
				});
			}
		);
	}
	// Next_Click() {
	// 	if (this.Student_Data_Search.length == this.Page_Length_) {
	// 		this.Black_Start = this.Black_Start + this.Page_Length_;
	// 		this.Black_Stop = this.Black_Stop + this.Page_Length_;
	// 		if (this.missedfollowup_count > 0) {
	// 			this.Red_Start = this.Red_Start + this.missedfollowup_count;
	// 			this.Red_Stop = this.Red_Start + this.Page_Length_;
	// 		}
	// 		this.nextflag = 1;
	// 		if (this.Student_Data_Search.length > 0) {
	// 			this.Search_Student_Report();
	// 		}
	// 	}
	// }
	// previous_Click() {
	// 	if (this.Black_Start > 1) {
	// 		{
	// 			this.Black_Start = this.Black_Start - this.Page_Length_;
	// 			this.Black_Stop = this.Black_Stop - this.Page_Length_;
	// 		}
	// 		if (this.missedfollowup_count > 0 || this.Red_Start > 1) {
	// 			this.Red_Start = this.Red_Start - this.Page_Length_;
	// 			if (this.Red_Start <= 0) this.Red_Start = 1;
	// 			this.Red_Stop = this.Red_Start + this.Page_Length_;
	// 		}
	// 		this.Total_Rows =
	// 			this.Total_Rows - this.Student_Data_Search.length - this.Page_Length_;
	// 		this.Search_Student_Report();
	// 	}
	// }
	Next_Click() {
		if (this.Task_Data_Search.length == this.Page_Length_) {
			this.Pointer_Start_ = this.Pointer_Start_ + this.Page_Length_;
			this.Pointer_Stop_ = this.Pointer_Stop_ + this.Page_Length_;
			this.nextflag = 1;
			if (this.Task_Data_Search.length > 0) {
				this.Search_Task_Data();
			}
		} else {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "No Other Details", Type: "3" },
			});
		}
	}

	previous_Click() {
		if (this.Pointer_Start_ > 1) {
			this.Pointer_Start_ = this.Pointer_Start_ - this.Page_Length_;
			this.Pointer_Stop_ = this.Pointer_Stop_ - this.Page_Length_;
		}
		this.Total_Task_Rows =
			this.Total_Task_Rows - this.Task_Data_Search.length - this.Page_Length_;
		if (this.Total_Task_Rows < 0) {
			this.Total_Task_Rows = 0;
		}
		this.Search_Task_Data();
	}
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

	Search_Branch_Typeahead(event: any,source:number) {
		// if (this.Followup_Branch_Data == undefined)
		// this.Followup_Branch_Data = [];
		// if (this.Followup_Branch_Data.length == 0) {
			var Value = "";
			if (event.target.value == "") Value = "";
			else Value = event.target.value.toLowerCase();

		if (
			this.Followup_Branch_Data == undefined ||
			this.Followup_Branch_Data.length == 0
		) {
			this.issLoading = true;
			this.Student_Service_.Search_Branch_Typeahead("").subscribe(
				(Rows) => {
					if (Rows != null) {
						this.Followup_Branch_Data = Rows[0];
						this.Followup_Branch_Data_Filter = []
						if(source==1){
							for (var i = 0; i < this.Followup_Branch_Data.length; i++) {
								if (
									this.Followup_Branch_Data[i].Branch_Name.toLowerCase().includes(
										Value
									)
								)
									this.Followup_Branch_Data_Filter.push(
										this.Followup_Branch_Data[i]
									);
							}
						}else{
							this.Followup_Branch_Data_Filter = Rows[0];
						}
						
						this.issLoading = false;
					}
				},
				(Rows) => {
					this.issLoading = false;
					// const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
				}
			);
		}else {
			if(source==1){
				this.Followup_Branch_Data_Filter = [];
				for (var i = 0; i < this.Followup_Branch_Data.length; i++) {
					if (
						this.Followup_Branch_Data[i].Branch_Name.toLowerCase().includes(Value)
					)
						this.Followup_Branch_Data_Filter.push(this.Followup_Branch_Data[i]);
				}
			}else{
				this.Followup_Branch_Data_Filter = [];
				for (var i = 0; i < this.Followup_Branch_Data.length; i++) {					
						this.Followup_Branch_Data_Filter.push(this.Followup_Branch_Data[i]);
				}
			}
			
		}
		// }
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
				data: { Message: "Error Occured", Type: "2" },
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
				data: { Message: "Error Occured", Type: "3" },
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
	Remarks_Typeahead(event: any) {
		var Value = "";
		if (event.target.value == "") Value = undefined;
		else Value = event.target.value;
		this.issLoading = true;

		this.Student_Service_.Remarks_Typeahead(Value).subscribe(
			(Rows) => {
				if (Rows != null) {
					this.Remarks_Data = Rows[0];
				}
				this.issLoading = false;
			},
			(Rows) => {
				this.issLoading = false;
			}
		);
	}
	display_Remarks(Remarks_e: Remarks) {
		if (Remarks_e) {
			return Remarks_e.Remarks_Name;
		}
	}
	Save_Student_Report_FollowUp() {
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
		if (
			this.Followup_Users_ == null ||
			this.Followup_Users_.User_Details_Id == undefined
		) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Enter User", Type: "3" },
			});
			return;
		}
		if (this.FollowUp_.Next_FollowUp_Date == undefined) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Choose Date", Type: "3" },
			});
			return;
		}
		this.Student_.Branch = this.FollowUp_Branch_.Branch_Id;
		this.Student_.Department = this.FollowUp_Department_.Department_Id;
		this.Student_.Status = this.FollowUp_Status_.Department_Status_Id;
		this.Student_.Next_FollowUp_Date = this.New_Date(
			new Date(moment(this.FollowUp_.Next_FollowUp_Date).format("YYYY-MM-DD"))
		);
		this.Student_.User_Id = this.Followup_Users_.User_Details_Id;
		this.Student_.By_User_Id = parseInt(this.Login_User);
		var Student_Deatils = [];
		for (var m = 0; m < this.Student_Data_Search.length; m++) {
			if (Boolean(this.Student_Data_Search[m].Check_Box_View) == true) {
				//this.Student_Selection_Data_Temp.push(this.Student_Data[m]);
				Student_Deatils.push({
					Student_Id: this.Student_Data_Search[m].Student_Id,
				});
			}
		}
		this.Student_.Student_Selected_Details = Student_Deatils;
		if (Student_Deatils.length == 0) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Please Select Student", Type: "2" },
			});
			this.Close_Click();
		}
		document.getElementById("Save_Button").hidden = true;
		this.issLoading = true;
		this.Student_Service_.Save_Student_Report_FollowUp(this.Student_).subscribe(
			(Save_status) => {
				this.issLoading = false;
				// log(Save_status[0][0])
				if (Number(Save_status[0][0].Student_Id_) > 0) {
					const dialogRef = this.dialogBox.open(DialogBox_Component, {
						panelClass: "Dialogbox-Class",
						data: { Message: "Saved", Type: "false" },
					});
					this.Close_Click();
					document.getElementById("Save_Button").hidden = false;
				} else {
					this.issLoading = false;
					const dialogRef = this.dialogBox.open(DialogBox_Component, {
						panelClass: "Dialogbox-Class",
						data: { Message: "Error Occured", Type: "2" },
					});
					document.getElementById("Save_Button").hidden = false;
				}
			},
			(Rows) => {
				this.issLoading = false;
				document.getElementById("Save_Button").hidden = false;
				const dialogRef = this.dialogBox.open(DialogBox_Component, {
					panelClass: "Dialogbox-Class",
					data: { Message: "Error Occured", Type: "2" },
				});
			}
		);
	}
	Close_Click() {
		this.Show_FollowUp = false;
		this.main_View = true;
		this.Select_Student = false;
		this.Select_View = false;
		this.FollowUp_Branch_ = null;
		this.FollowUp_Department_ = null;
		this.FollowUp_Status_ = null;
		this.Followup_Users_ = null;
		this.Remarks_ = null;
		this.Student_.Next_FollowUp_Date = null;
	}
	Lead_Refund_Approve_Reject() {
		// this.ApplicationDetails_.Student_Id=this.Student_.Student_Id;
		if (
			this.Comment == undefined ||
			this.Comment == null ||
			this.Comment == ""
		) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Enter Comment", Type: "3" },
			});
			return;
		}
		const dialogRef = this.dialogBox.open(DialogBox_Component, {
			panelClass: "Dialogbox-Class",
			data: {
				Message: "Do you want to Continue ?",
				Type: true,
				Heading: "Confirm",
			},
		});

		dialogRef.afterClosed().subscribe((result) => {
			if (result == "Yes") {
				this.issLoading = true;
				this.Student_Service_.Lead_Refund_Approve_Reject(
					this.Lead_Fees_Receipt_Id,
					this.approve_reject_status,
					this.Comment,
					this.Login_User
				).subscribe(
					(Save_status) => {
						if (Number(Save_status[0][0].Fees_Receipt_Id_) > 0) {
							// this.Remove_Activte_Visiblility = false;
							// this.Activte_Visiblility = false;
							// if (
							// 	this.Remove_Activity_Permissions != undefined &&
							// 	this.Remove_Activity_Permissions != null
							// )
							// 	if (this.Remove_Activity_Permissions.View == true)
							// 		this.Remove_Activte_Visiblility = true;
							const dialogRef = this.dialogBox.open(DialogBox_Component, {
								panelClass: "Dialogbox-Class",
								data: { Message: "Saved", Type: "false" },
							});
							// this.Total_Rows = this.Total_Rows - this.Student_Data.length;
							// this.Search_Student();
							this.Refund_Approval_Comment_View = false;
							this.Search_Div = false;
							this.Search_Task_Data();
							this.Comment = "";
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
	// Lead_Refund_Reject(Fees_Receipt_Id, index) {
	//     //    application_details_id_
	//     const dialogRef = this.dialogBox.open(DialogBox_Component, {
	//         panelClass: "Dialogbox-Class",
	//         data: {
	//             Message: "Do you want to Reject ?",
	//             Type: true,
	//             Heading: "Confirm",
	//         },
	//     });

	//     dialogRef.afterClosed().subscribe((result) => {
	//         if (result == "Yes") {
	//             this.issLoading = true;
	//             this.Student_Service_.Lead_Refund_Reject(Fees_Receipt_Id).subscribe(
	//                 (update_status) => {

	//                     if (update_status[0][0].Fees_Receipt_Id_ > 0) {
	//                         const dialogRef = this.dialogBox.open(DialogBox_Component, {
	//                             panelClass: "Dialogbox-Class",
	//                             data: { Message: "Team Lead Rejected", Type: "false" },
	//                         });
	//                         // this.Total_Rows = this.Total_Rows - this.Student_Data.length;
	//                         this.Search_Refund_Approval();

	//                     }

	//                     else {
	//                         this.issLoading = false;
	//                         const dialogRef = this.dialogBox.open(DialogBox_Component, {
	//                             panelClass: "Dialogbox-Class",
	//                             data: { Message: "Error Occured", Type: "2" },
	//                         });
	//                     }
	//                     this.issLoading = false;
	//                 },
	//                 (Rows) => {
	//                     this.issLoading = false;
	//                     const dialogRef = this.dialogBox.open(DialogBox_Component, {
	//                         panelClass: "Dialogbox-Class",
	//                         data: { Message: "Error Occured", Type: "2" },
	//                     });
	//                 }
	//             );
	//         }
	//     });
	// }
	Lead_Refund_Comment_View(Fees_Receipt_Id, status, index) {
		//    application_details_id_

		this.Refund_Approval_Comment_View = true;
		this.Search_Div = true;
		this.approve_reject_status = status;
		this.Lead_Fees_Receipt_Id = Fees_Receipt_Id;
	}
	Lead_Refund_Comment_close() {
		this.Search_Div = false;
		this.Refund_Approval_Comment_View = false;
		this.Comment = "";
	}
	Add_CAS_Followup(Student_Task_Id, Student_Id, task_item_id, task_group_id) {
		this.Cas_Followup_.Followup_Date = new Date();
		this.Cas_Followup_.Followup_Date = this.New_Date(
			this.Cas_Followup_.Followup_Date
		);
		this.Cas_Followup_View = true;
		this.main_View = false;
		this.cas_task_id = Student_Task_Id;
		this.cas_task_student_id = Student_Id;
		this.cas_task_item_id = task_item_id;
		this.cas_task_group_id = task_group_id;
	}
	Clr_cas_Followup() {
		this.Cas_Followup_.Remark = "";
		this.Cas_Followup_.Followup_Date = new Date();
		this.Cas_Followup_.Followup_Date = this.New_Date(
			this.Cas_Followup_.Followup_Date
		);
		if (
			this.Task_Status_Data_search != null &&
			this.Task_Status_Data_search != undefined
		)
			this.Task_Status_search_ = this.Task_Status_Data_search[1];
		if (
			this.Task_Item_Data_search != null &&
			this.Task_Item_Data_search != undefined
		)
			this.Task_Item_search_ = this.Task_Item_Data_search[0];
	}
	// Save_Cas_Followup() {
	// 	if (
	// 		this.Task_Status_ == undefined ||
	// 		this.Task_Status_ == null ||
	// 		this.Task_Status_.Task_Status_Id == undefined ||
	// 		this.Task_Status_.Task_Status_Id == 0
	// 	) {
	// 		const dialogRef = this.dialogBox.open(DialogBox_Component, {
	// 			panelClass: "Dialogbox-Class",
	// 			data: { Message: "Select Status", Type: "3" },
	// 		});
	// 		return;
	// 	}

	// 	if (
	// 		this.Cas_Followup_.Remark == undefined ||
	// 		this.Cas_Followup_.Remark == null ||
	// 		this.Cas_Followup_.Remark == ""
	// 	) {
	// 		const dialogRef = this.dialogBox.open(DialogBox_Component, {
	// 			panelClass: "Dialogbox-Class",
	// 			data: { Message: "Enter Remark", Type: "3" },
	// 		});
	// 		return;
	// 	}
	// 	this.Cas_Followup_.Student_Id = this.cas_task_student_id;
	// 	this.Cas_Followup_.Task_Status = this.Task_Status_.Task_Status_Id;
	// 	this.Cas_Followup_.Status_Name = this.Task_Status_.Status_Name;
	// 	this.Cas_Followup_.To_User = Number(this.Login_User);
	// 	this.Cas_Followup_.To_User_Name = this.Login_User_Name;
	// 	this.Cas_Followup_.Student_Task_Id = this.cas_task_id;
	// 	this.Cas_Followup_.Task_Item_Id = this.cas_task_item_id;
	// 	this.Cas_Followup_.Task_Group_Id = this.cas_task_group_id;
	// 	this.Cas_Followup_.Followup_Date = this.New_Date(
	// 		new Date(moment(this.Cas_Followup_.Followup_Date).format("YYYY-MM-DD"))
	// 	);
	// 	if (this.Save_Call_Status == true) return;
	// 	else this.Save_Call_Status = true;
	// 	this.issLoading = true;
	// 	this.Student_Service_.Save_Cas_Followup(this.Cas_Followup_).subscribe(
	// 		(Save_work_experience) => {
	// 			Save_work_experience = Save_work_experience[0];
	// 			if (Number(Save_work_experience[0].Student_Task_Id_) > 0) {
	// 				this.Save_Call_Status = false;
	// 				const dialogRef = this.dialogBox.open(DialogBox_Component, {
	// 					panelClass: "Dialogbox-Class",
	// 					data: { Message: "Saved", Type: "false" },
	// 				});
	// 				// this.Get_WorkexperienceDetails(Save_work_experience[0].Student_Id_);
	// 				this.Clr_cas_Followup();
	// 				this.Close_Cas_Followup();
	// 				this.Search_Task_Data();
	// 			} else {
	// 				const dialogRef = this.dialogBox.open(DialogBox_Component, {
	// 					panelClass: "Dialogbox-Class",
	// 					data: { Message: "Error Occured", Type: "2" },
	// 				});
	// 			}
	// 			this.issLoading = false;
	// 		},
	// 		(Rows) => {
	// 			this.issLoading = false;
	// 			const dialogRef = this.dialogBox.open(DialogBox_Component, {
	// 				panelClass: "Dialogbox-Class",
	// 				data: { Message: Rows.error.error, Type: "2" },
	// 			});
	// 		}
	// 	);
	// }

	Save_Cas_Followup() {
		
		if (
			this.Task_Status_ == undefined ||
			this.Task_Status_ == null ||
			this.Task_Status_.Task_Status_Id == undefined ||
			this.Task_Status_.Task_Status_Id == 0
		) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Select Status", Type: "3" },
			});
			return;
		}
		// if (
		//     this.Task_Item_search_ == undefined ||
		//     this.Task_Item_search_ == null ||
		//     this.Task_Item_search_.Task_Item_Id == undefined ||
		//     this.Task_Item_search_.Task_Item_Id == 0
		//     ) {
		//     const dialogRef = this.dialogBox.open(DialogBox_Component, {
		//     panelClass: "Dialogbox-Class",
		//     data: { Message: "Select Task", Type: "3" },
		//     });
		//     return;
		//     }
		if (
			this.Cas_Followup_.Remark == undefined ||
			this.Cas_Followup_.Remark == null ||
			this.Cas_Followup_.Remark == ""
		) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Enter Remark", Type: "3" },
			});
			return;
		}

		if (
			this.Cas_Followup_.Followup_Date == undefined ||
			this.Cas_Followup_.Followup_Date == null 
		) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Choose Followup Date", Type: "3" },
			});
			return;
		}

		this.Cas_Followup_.Student_Id = this.cas_task_student_id;
		this.Cas_Followup_.Task_Status = this.Task_Status_.Task_Status_Id;
		this.Cas_Followup_.Status_Name = this.Task_Status_.Status_Name;
		this.Cas_Followup_.To_User = Number(this.Login_User);
		this.Cas_Followup_.To_User_Name = this.Login_User_Name;
		this.Cas_Followup_.Student_Task_Id = this.cas_task_id;
		this.Cas_Followup_.Task_Item_Id = this.cas_task_item_id;
		this.Cas_Followup_.Task_Group_Id = this.cas_task_group_id;
		this.Cas_Followup_.Followup_Date = this.New_Date(
			new Date(moment(this.Cas_Followup_.Followup_Date).format("YYYY-MM-DD"))
		);
		if (this.Save_Call_Status == true) return;
		else this.Save_Call_Status = true;
		this.issLoading = true;
		this.Student_Service_.Save_Cas_Followup(this.Cas_Followup_).subscribe(
			(Save_work_experience) => {
				Save_work_experience = Save_work_experience[0];
				if (Number(Save_work_experience[0].Student_Task_Id_) > 0) {
					this.Save_Call_Status = false;
					const dialogRef = this.dialogBox.open(DialogBox_Component, {
						panelClass: "Dialogbox-Class",
						data: { Message: "Saved", Type: "false" },
					});
					// this.Get_WorkexperienceDetails(Save_work_experience[0].Student_Id_);
					this.Clr_cas_Followup();
					this.Close_Cas_Followup();
					this.Search_Lead_button();

					var notification_type_ = "Task";
					var message = {
						To_User: Save_work_experience[0].To_User_,
						Task_Count: Save_work_experience[0].Task_Count_,
						Notification_Type_Name: notification_type_,
					};
					this.socket.emit("new-message", message);
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
	Close_Cas_Followup() {
		this.Cas_Followup_View = false;
		this.main_View = true;
	}
	Task_History_Click(Student_Task_Id_, Student_Name, To_User_Name) {
		this.student_name = Student_Name;
		this.to_user_name = To_User_Name;
		this.Student_Task_Id = Student_Task_Id_;
		this.Historydiv = true;
		this.main_View = false;
		this.Get_Task_History(this.Student_Task_Id);
	}
	Close_History() {
		this.Historydiv = false;
		this.main_View = true;
	}
	Get_Task_History(Student_Task_Id) {
		//  this.Clr_ApplicationDetails();
		this.issLoading = true;

		this.Student_Service_.Get_Task_History(Student_Task_Id).subscribe(
			(Rows) => {
				this.Student_Task_Data = Rows[0];
				this.issLoading = false;
			},
			(Rows) => {
				this.issLoading = false;
			}
		);
	}


	Get_Last_Followup() {
		if (
			this.FollowUp_.Branch == 0 ||
			this.FollowUp_.Branch == undefined ||
			this.FollowUp_.Branch == null
		) {
			this.issLoading = true;
			this.Student_Service_.Get_Last_Followup(this.Login_User).subscribe(
				(Save_status) => {
					
					Save_status = Save_status.returnvalue.FollowUp[0];
					if (Save_status != undefined) {
						this.issLoading = false;
						this.FollowUp_ = Save_status;
						this.Branch_Temp.Branch_Id = this.FollowUp_.Branch;
						this.Branch_Temp.Branch_Name = this.FollowUp_.Branch_Name;
						this.FollowUp_Branch_Task_ = Object.assign({}, this.Branch_Temp);

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
	}


	Add_CAS_Followup_Tasknew() {
		this.Cas_Followup_.Followup_Date = new Date();
		this.Cas_Followup_.Followup_Date = this.New_Date(
			this.Cas_Followup_.Followup_Date
		);
		this.Task_Group_Id = 4;		
		this.Tasknew_View = false;
		this.Tasknewmodal_View = false;
		this.Cas_FollowupTasknew_View = true;	
		this.main_View = false	
		this.Login_User= localStorage.getItem("Login_User");
		this.Clr_Tasknewcas_Followup();
	}
	Clr_Tasknewcas_Followup() {
		this.Cas_Followup_.Student_Task_Id = 0;
		this.Cas_Followup_.Remark = "";
		this.Cas_Followup_.Task_Details = "";
		this.Cas_Followup_.Task_Group_Id = 0;

		this.Cas_Followup_.Followup_Date = new Date();
		this.Cas_Followup_.Followup_Date = this.New_Date(
			this.Cas_Followup_.Followup_Date
		);

		if (this.Task_Status_Data != null && this.Task_Status_Data != undefined)
			this.Task_Status_ = this.Task_Status_Data[0];

		if (
			this.Task_Item_Data != null &&
			this.Task_Item_Data != undefined
		)
			this.Task_Item_search_Tasknew_ = this.Task_Item_Data[0];

		// this.FollowUp_Department_TN = null;
		// this.Followup_Users_tN = null;
		this.Followup_Users_tempN.User_Details_Id = Number(this.Login_User);
		this.Followup_Users_tempN.User_Details_Name = this.Login_User_Name
		this.Followup_Users_Task_= this.Followup_Users_tempN;

		this.FollowUp_Department_TempN.Department_Id = Number(this.Login_Department);
		this.FollowUp_Department_TempN.Department_Name = this.Login_Department_Name;
		this.FollowUp_Department_Task_ = this.FollowUp_Department_TempN;

		this.FollowUp_Branch_Task_ = Object.assign({}, this.Branch_Temp);
	}
	// Task_Item_Dropdown(Task_Group_Id) {
	// 	this.issLoading = true;
	// 	this.Student_Service_.Task_Item_Dropdown(Task_Group_Id).subscribe(
	// 		(Rows) => {
	// 			if (Rows != null) {
	// 				this.Task_Item_Data_search = Rows[0];
	// 				this.Task_Item_Temp.Task_Item_Id = 0;
	// 				this.Task_Item_Temp.Task_Item_Name = "Select";
	// 				this.Task_Item_Data_search.unshift(this.Task_Item_Temp);

	// 				this.Task_Item_ = this.Task_Item_Data_search[0];
	// 				this.Task_Item_search_ = this.Task_Item_Data_search[0];
	// 				this.Task_Item_search_Tasknew_ = this.Task_Item_Data_search[0];
	// 				this.issLoading = false;

	// 				if (this.Task_Item_Id_ > 0) {
	// 					for (var i = 0; i < this.Task_Item_Data_search.length; i++) {
	// 						if (
	// 							this.Task_Item_Data_search[i].Task_Item_Id == this.Task_Item_Id_
	// 						)
	// 							this.Task_Item_ = this.Task_Item_Data_search[i];
	// 					}
	// 				} else this.Task_Item_ = this.Task_Item_Data_search[1];

	// 				// this.Search_Task_Data()
	// 			}
	// 		},
	// 		(Rows) => {
	// 			this.issLoading = false;
	// 		}
	// 	);
	// }
	display_Followup_UsersT(Users_T: Student_FollowUp) {
		if (Users_T) {
			return Users_T.UserName;
		}
	}
	display_DepartmentT(Department_t: Student_FollowUp) {
		if (Department_t) {
			return Department_t.Dept_Name;
		}
	}
	Close_Tasknewdetails() {
		this.main_View = true;
		this.Cas_FollowupTasknew_View = false;
		this.Clr_Tasknewcas_Followup();
		// this.Clr_cas_Followup();
	}
	Save_CAS_NewTask_Followup() {
		

		if (
			this.FollowUp_Branch_Task_ == undefined ||
			this.FollowUp_Branch_Task_ == null ||
			this.FollowUp_Branch_Task_.Branch_Id == undefined ||
			this.FollowUp_Branch_Task_.Branch_Id == 0
		) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Select Branch", Type: "3" },
			});
			return;
		}


		if (
			this.FollowUp_Department_Task_ == undefined ||
			this.FollowUp_Department_Task_ == null ||
			this.FollowUp_Department_Task_.Department_Id == undefined ||
			this.FollowUp_Department_Task_.Department_Id == 0
		) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Select Department", Type: "3" },
			});
			return;
		}
		debugger
		if (
			this.Followup_Users_Task_ == undefined ||
			this.Followup_Users_Task_ == null ||
			this.Followup_Users_Task_.User_Details_Id == undefined ||
			this.Followup_Users_Task_.User_Details_Id == 0
		) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Select Staff", Type: "3" },
			});
			return;
		}

		if (
			this.Task_Item_search_Tasknew_ == undefined ||
			this.Task_Item_search_Tasknew_ == null ||
			this.Task_Item_search_Tasknew_.Task_Item_Id == undefined ||
			this.Task_Item_search_Tasknew_.Task_Item_Id == 0
		) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Select Task", Type: "3" },
			});
			return;
		}
		if (
			this.Cas_Followup_.Task_Details == undefined ||
			this.Cas_Followup_.Task_Details == null ||
			this.Cas_Followup_.Task_Details == ""
		) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Enter Task Details", Type: "3" },
			});
			return;
		}
		if (
			this.Task_Status_ == undefined ||
			this.Task_Status_ == null ||
			this.Task_Status_.Task_Status_Id == undefined ||
			this.Task_Status_.Task_Status_Id == 0
		) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Enter Task Status", Type: "3" },
			});
			return;
		}

		if (
			this.Cas_Followup_.Followup_Date == undefined ||
			this.Cas_Followup_.Followup_Date == null 
		) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Choose Followup Date", Type: "3" },
			});
			return;
		}


		if (
			this.Cas_Followup_.Student_Id == undefined ||
			this.Cas_Followup_.Student_Id == null 
		) {
			this.Cas_Followup_.Student_Id = 0;
		}
	
		this.Cas_Followup_.Department_Id = this.FollowUp_Department_Task_.Department_Id;
		this.Cas_Followup_.Department_Name = this.FollowUp_Department_Task_.Department_Name;
		this.Cas_Followup_.To_User = this.Followup_Users_Task_.User_Details_Id;
		this.Cas_Followup_.To_User_Name = this.Followup_Users_Task_.User_Details_Name;
		this.Cas_Followup_.Task_Status = this.Task_Status_.Task_Status_Id;
		this.Cas_Followup_.Status_Name = this.Task_Status_.Status_Name;
		this.Cas_Followup_.Task_Item_Id =
			this.Task_Item_search_Tasknew_.Task_Item_Id;
			this.Cas_Followup_.Branch_Id = this.FollowUp_Branch_Task_.Branch_Id;
			this.Cas_Followup_.Branch_Name = this.FollowUp_Branch_Task_.Branch_Name;

		this.Cas_Followup_.By_User_Id = Number(this.Login_User);
		this.Cas_Followup_.By_User_Name = this.Login_User_Name;
debugger
		this.Cas_Followup_.Followup_Date = this.New_Date(
			new Date(moment(this.Cas_Followup_.Followup_Date).format("YYYY-MM-DD"))
		);

		// Check if Followup_Date is invalid
if (this.Cas_Followup_.Followup_Date.toString() === "Invalid Date" || this.Cas_Followup_.Followup_Date.toString() === "NaN-NaN-NaN") {
    // If invalid, set Followup_Date to the current date
    this.Cas_Followup_.Followup_Date = new Date();
    // Call the New_Date method with the current date
    this.Cas_Followup_.Followup_Date = this.New_Date(this.Cas_Followup_.Followup_Date);
}

		
		
		this.Cas_Followup_.Task_Group_Id = this.Task_Group_Id;

		if (this.Save_Call_Status == true) return;
		else this.Save_Call_Status = true;
		this.issLoading = true;

		this.Student_Service_.Save_CAS_NewTask_Followup_Navbar(
			this.Cas_Followup_
		).subscribe(
			(Save_work_experience) => {
				debugger
				Save_work_experience = Save_work_experience[0];

				
 if (Number(Save_work_experience[0].Task_Status_) == 2) {
	var notification_message = {
		To_User: Save_work_experience[0].to_user_temp_,
		Student_Name: Save_work_experience[0].Student_Name_,
		Status_Name: Save_work_experience[0].Status_Name_,
		Remark: Save_work_experience[0].Remark_,
		Task_Item_Name: Save_work_experience[0].Task_Item_Name_,
		Task_Details: Save_work_experience[0].Task_Details_,
		From_User_Name: Save_work_experience[0].From_User_Name_,
		Entry_Type: Save_work_experience[0].Entry_Type_,
		Notification_Type_Status_: "Task Status Update",
	};
	this.socket.emit("new-message", notification_message);
}

				if (Number(Save_work_experience[0].Student_Task_Id_) > 0) {
					// if(this.Task_Group_Id==4)
					// {

					this.Save_Call_Status = false;
					const dialogRef = this.dialogBox.open(DialogBox_Component, {
						panelClass: "Dialogbox-Class",
						data: { Message: "Saved", Type: "false" },
					});
					// this.Get_WorkexperienceDetails(Save_work_experience[0].Student_Id_);
					this.Clr_Tasknewcas_Followup();
					this.Search_Lead_button();
					this.Close_Tasknewdetails();

					var notification_type_ = "Task";
					var message = {
						To_User: Save_work_experience[0].To_User_,
						Task_Count: Save_work_experience[0].Task_Count_,
						Status_Name: Save_work_experience[0].Status_Name_,
						Remark: Save_work_experience[0].Remark_,
						Task_Item_Name: Save_work_experience[0].Task_Item_Name_,
						Task_Details: Save_work_experience[0].Task_Details_,
						From_User_Name: Save_work_experience[0].From_User_Name_,
						Entry_Type: Save_work_experience[0].Entry_Type_,
						Notification_Type_Name: notification_type_,
					};
					this.socket.emit("new-message", message);
					//  }
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



	Search_Department_Typeahead_Tasknew(event: any) {
		var Value = "";
		if (event.target.value == "") Value = undefined;
		else Value = event.target.value;

		// if (
		// 	this.Followup_Department_Data_TN == undefined ||
		// 	this.Followup_Department_Data_TN.length == 0
		// ) {
		this.issLoading = true;

		this.Student_Service_.Search_Department_Typeahead_Tasknew(
			0
		).subscribe(
			(Rows) => {
				if (Rows != null) {
					this.Followup_Department_Data_TN = Rows[0];
					this.issLoading = false;
				}
			},
			(Rows) => {
				this.issLoading = false;
			}
		);
		// }
		//}
	}

	Dept_Change() {
		this.Followup_Users_tN = null;

		this.Followup_Users_Data_tN = [];

		// this.FollowUp_Status_.Department_Status_Id=0;
		//  this.Search_Substatus_Typeahead(this.FollowUp_Status_.Department_Status_Id);
	}


	Search_Branch_Department_Typeahead_Task(event: any,source:number) {
		
		var Value = "";
		if (event.target.value == "") Value = "";
		else Value = event.target.value.toLowerCase();

		if (
			this.FollowUp_Branch_Task_ == null ||
			this.FollowUp_Branch_Task_.Branch_Id == undefined
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
				// if (
				// 	this.Followup_Department_Data_Check == undefined ||
				// 	this.Followup_Department_Data_Check.length == 0
				// ) {
					this.issLoading = true;
					this.Student_Service_.Search_Branch_Department_Typeahead(
						this.FollowUp_Branch_Task_.Branch_Id,
						""
					).subscribe(
						(Rows) => {
							if (Rows != null) {
								// if(Rows.code!=undefined)
								// {
								//     const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:Rows.Code,Type:"false"}});
								// }
								this.Followup_Department_Data = Rows[0];
								this.Followup_Department_Data_Check = [];
								this.issLoading = false;
								if (source==1){
								for (var i = 0; i < this.Followup_Department_Data.length; i++) {
									if (
										this.Followup_Department_Data[i].Department_Name.toLowerCase().includes(
											Value
										)
									)
										this.Followup_Department_Data_Check.push(
											this.Followup_Department_Data[i]
										);
								}
								}
								else{
									this.Followup_Department_Data_Check =Rows[0];
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
				// } else {
				// 	this.Followup_Department_Data = this.Followup_Department_Data_Check;
				// }
			}
			else {
				if(source==1){
					this.Followup_Department_Data_Check = [];
					for (var i = 0; i < this.Followup_Department_Data.length; i++) {
						if (
							this.Followup_Department_Data[i].Department_Name.toLowerCase().includes(Value)
						)
							this.Followup_Department_Data_Check.push(this.Followup_Department_Data[i]);
					}
				}else{
					this.Followup_Department_Data_Check = [];
					for (var i = 0; i < this.Followup_Department_Data.length; i++) {						
							this.Followup_Department_Data_Check.push(this.Followup_Department_Data[i]);
					}
				}
				
			}
		}
	}







	Edit_Tasknew_Task(Student_Task_e: Student_Task, index) {
		debugger
		this.main_View = false;
		this.Cas_Followup_View = false;
		this.Cas_FollowupTasknew_View = true;
		this.Tasknew_View = false;

		this.Cas_Followup_ = Student_Task_e;

	

		console.log('this.Cas_Followup_: ', this.Cas_Followup_);
		this.Cas_Followup_ = Object.assign({}, Student_Task_e);

		this.FollowUp_Department_TempN.Department_Id = Student_Task_e.Department_Id;
		this.FollowUp_Department_TempN.Department_Name = Student_Task_e.Department_Name;
		this.FollowUp_Department_Task_ = this.FollowUp_Department_TempN;

		this.Followup_Users_tempN.User_Details_Id = Student_Task_e.To_User;
		this.Followup_Users_tempN.User_Details_Name = Student_Task_e.To_User_Name;
		this.Followup_Users_Task_ = this.Followup_Users_tempN;

		this.Followup_Branch_tempN.Branch_Id = Student_Task_e.Branch_Id;
		this.Followup_Branch_tempN.Branch_Name = Student_Task_e.Branch_Name;
		this.FollowUp_Branch_Task_ = this.Followup_Branch_tempN;


		for (var i = 0; i < this.Task_Status_Data.length; i++) {
			if (
				this.Cas_Followup_.Task_Status ==
				this.Task_Status_Data[i].Task_Status_Id
			)
				this.Task_Status_ = this.Task_Status_Data[i];
		}

		if (this.Cas_Followup_.Followup_Date == null) {
			this.Cas_Followup_.Followup_Date = new Date();
			this.Cas_Followup_.Followup_Date = this.New_Date(
				this.Cas_Followup_.Followup_Date
			);
		} else
			this.Cas_Followup_.Followup_Date = this.New_Date(
				new Date(moment(this.Cas_Followup_.Followup_Date).format("YYYY-MM-DD"))
			);


			// if (this.Cas_Followup_.End_Date == null) {
			// 	this.Cas_Followup_.End_Date = new Date();
			// 	this.Cas_Followup_.End_Date = this.New_Date(
			// 		this.Cas_Followup_.End_Date
			// 	);
			// } else
			// 	this.Cas_Followup_.End_Date = this.New_Date(
			// 		new Date(moment(this.Cas_Followup_.End_Date).format("YYYY-MM-DD"))
			// 	);
	
		for (var i = 0; i < this.Task_Item_Data_search.length; i++) {
			if (
				this.Cas_Followup_.Task_Item_Id ==
				this.Task_Item_Data_search[i].Task_Item_Id
			)
				this.Task_Item_search_Tasknew_ = this.Task_Item_Data_search[i];
		}
	}




// 	Search_Department_User_Typeahead_Task(Department_Id) {
// 		this.issLoading = true;
//
// 		this.Student_Service_.Search_Department_User_Typeahead_Task(
// 			this.FollowUp_Department_TN.Department
// 		).subscribe(
// 			(Rows) => {
// 				
// 				if (Rows != null) {
// 					this.Followup_Users_Data_tN = Rows[0];
// 					this.issLoading = false;
// 				}
// 			},
// 			(Rows) => {
// 				this.issLoading = false;
// 			}
// 		);
// 	}

// 	display_Followup_UsersT1(Users_T: Student_FollowUp) {
// 		if (Users_T) {
// 			return Users_T.UserName;
// 		}
// 	}




Search_Department_User_Typeahead_Task(event: any,source:number) {
	var Value = "";
	if (event.target.value == "") Value = "";
	else Value = event.target.value.toLowerCase();

	if (
		this.FollowUp_Branch_Task_ == null ||
		this.FollowUp_Branch_Task_.Branch_Id == undefined
	) {
		const dialogRef = this.dialogBox.open(DialogBox_Component, {
			panelClass: "Dialogbox-Class",
			data: { Message: "Select Branch", Type: "3" },
		});
	} else if (
		this.FollowUp_Department_Task_ == null ||
		this.FollowUp_Department_Task_.Department_Id == undefined
	) {
		const dialogRef = this.dialogBox.open(DialogBox_Component, {
			panelClass: "Dialogbox-Class",
			data: { Message: "Select Department", Type: "3" },
		});
	}
		if (
			this.Followup_Users_Data_t == undefined 
			|| this.Followup_Users_Data_t == null || this.Followup_Users_Data_t.length == 0
		) {
			this.Student_Service_.Search_Department_User_Typeahead(
				this.FollowUp_Branch_Task_.Branch_Id,this.FollowUp_Department_Task_.Department_Id,""
			).subscribe(
				(Rows) => {
					if (Rows != null) {
						
						this.Followup_Users_Data_t = Rows[0];
						this.Followup_Users_Data_t_Filter = []
						if (source==1){
							for (var i = 0; i < this.Followup_Users_Data_t.length; i++) {
								if (
									this.Followup_Users_Data_t[i].User_Details_Name.toLowerCase().includes(
										Value
									)
								)
									this.Followup_Users_Data_t_Filter.push(
										this.Followup_Users_Data_t[i]
									);
							}
						}else{
							this.Followup_Users_Data_t_Filter= Rows[0];
						}
						
						this.issLoading = false;
					}
				},
				(Rows) => {
					this.issLoading = false;
					// const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
				}
			);
		// }
	}else {
		if(source==1){
			this.Followup_Users_Data_t_Filter = [];
			for (var i = 0; i < this.Followup_Users_Data_t.length; i++) {
				if (
					this.Followup_Users_Data_t[i].User_Details_Name.toLowerCase().includes(Value)
				)
					this.Followup_Users_Data_t_Filter.push(this.Followup_Users_Data_t[i]);
			}
		}else{
			this.Followup_Users_Data_t_Filter = [];
			for (var i = 0; i < this.Followup_Users_Data_t.length; i++) {					
					this.Followup_Users_Data_t_Filter.push(this.Followup_Users_Data_t[i]);
			}
		}
		
	}
}


Save_Task_Complete() {
	debugger;
	let Status = false;

	// Filter the data to include only items with "Check_Box_View" set to true
	const selectedTasks = this.Task_Data_Search.filter((task: any) => Boolean(task.Check_Box_View) === true);

	// Check if any task is selected
	if (selectedTasks.length === 0) {
		const dialogRef = this.dialogBox.open(DialogBox_Component, {
			panelClass: "Dialogbox-Class",
			data: { Message: "Select Task to Complete", Type: "3" },
		});
		return;
	}

	const dialogRef = this.dialogBox.open(DialogBox_Component, {
		panelClass: "Dialogbox-Class",
		data: {
			Message: "Do you want to Complete the Status ?",
			Type: true,
			Heading: "Confirm",
		},
	});

	dialogRef.afterClosed().subscribe((result) => {
		if (result == "Yes") {

	// If tasks are selected, pass the selected data to the API
	const payload = selectedTasks.map((task: any) => ({
		Student_Task_Id: task.Student_Task_Id,
		Student_Id: task.Student_Id,
		Task_Item_Id: task.Task_Item_Id,
		Task_Group_Id: task.Task_Group_Id,
		Followup_Date: task.Followup_Date,
		ActualFollowup_Date: task.ActualFollowup_Date,
		To_User: task.To_User,
		Task_Status: task.Task_Status,
		Department_Id: task.Department_Id,
		Branch_Id: task.Branch_Id,
		Remark: task.Remark,
		Task_Details: task.Task_Details,
	}));

	// Call the API with the filtered data
	this.Student_Service_.Save_Task_Complete(
		payload,this.Login_User_Temp
	).subscribe(
		(response: any) => {
			debugger
			// Handle API response
			console.log('API response:', response);
	
			// Check if loginUser_ > 0 to show the 'Saved' message
			if (response && response[0] && response[0][0].login_user_ > 0) {
			  // Show success message
			  const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Saved", Type: "false" },
			});
			}

			this.Search_Task_Data()
			this.Select_Student=false;

		  },
		(error: any) => {
			// Handle error
			console.error('API error:', error);

			
		}

		
	);
}
});

}

complete_find(): boolean {
    // Check if Task_Data_Search has any tasks with Task_Status = 1
    return this.Task_Data_Search.some((task: any) => task.Task_Status === 1);
}


	
}
