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
import { Agent } from "../../../models/Agent";
import { ApplicationStatus } from "../../../models/ApplicationStatus";
import { Subject } from "../../../models/Subject";
import { DatePipe } from "@angular/common";

import {
	ROUTES,
	Get_Page_Permission,
} from "../../../components/sidebar/sidebar.component";
import {
	MatDialog,
	MatDialogRef,
	MAT_DIALOG_DATA,
	MatDialogConfig,
	MatAutocompleteSelectedEvent,
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
import { Intake } from "../../../models/Intake";
import { Country_Service } from "../../../services/Country.service";
import { Country } from "../../../models/Country";
import { University_Service } from "../../../services/University.Service";
import { University } from "../../../models/University";
import { Intake_Year } from "../../../models/Intake_Year";
import { Applicationdetails } from "../../../models/Applicationdetails";
import { Bph_Status } from "../../../models/Bph_Status";
import { Offerletter_Type } from "../../../models/Offerletter_Type";
import { Application_Status_Service } from "../../../services/Application_status.service";
import { Conditions } from "../../../models/Conditions";
//import { debug } from 'console';

import { environment } from "../../../../environments/environment.js";

import * as io from "socket.io-client";
import { Status_Change_Data } from "app/models/Status_Change_Data";
import { Department_Service } from "app/services/Department.Service";
import { Course } from "app/models/Course";
import { Course_Service } from "app/services/Course.service";
import { Applicationdocument } from "app/models/Applicationdocument";
import { ApplicationdetailsHistory } from "app/models/ApplicationdetailsHistory";
import { Department_Status_Service } from "app/services/Department_Status.Service";
import { Process_Notification } from "app/models/Process_Notification";
import { Process_Fields } from "app/models/Process_Fields";
import { Task_Detrails } from "app/models/Task_Detrails";
import { Process_Department } from "app/models/Process_Department";
import { Profile } from "app/models/Profile";
import { Application_Course } from "app/models/Application_Course";
import { Application_List } from "app/models/Application_List";
import { Application_Transfer } from "app/models/Application_Transfer";
import { Class } from "app/models/Class";
import { Client_Accounts } from "app/models/Client_Accounts";
import { Company } from "app/models/Company";
import { Course_Apply } from "app/models/Course_Apply";
import { Course_Selection } from "app/models/Course_Selection";
import { Currency } from "app/models/Currency";
import { Duration } from "app/models/Duration";
import { Enquiry_For } from "app/models/Enquiry_For";
import { enquiry_mode } from "app/models/Enquiry_Mode";
import { Enquiry_Source } from "app/models/Enquiry_Source";
import { Fees } from "app/models/Fees";
import { Fees_Receipt } from "app/models/Fees_Receipt";
import { Fees_Receipt_Data } from "app/models/Fees_Receipt_Data";
import { Followup_History } from "app/models/FollowUp_History";
import { IELTS_Type } from "app/models/IELTS_Type";
import { Ielts } from "app/models/Ielts";
import { Ielts_Details } from "app/models/Ielts_Details";
import { Internship } from "app/models/Internship";
import { Invoice } from "app/models/Invoice";
import { Invoice_Document } from "app/models/Invoice_Document";
import { LOR_1 } from "app/models/LOR_1";
import { LOR_2 } from "app/models/LOR_2";
import { Level_Detail } from "app/models/Level_Detail";
import { MOI } from "app/models/MOI";
import { Marital_Status } from "app/models/Marital_Status";
import { Passport } from "app/models/Passport";
import { Pre_Admission } from "app/models/Pre_Admission";
import { Pre_Visa } from "app/models/Pre_Visa";
import { Proceeding_Details } from "app/models/Proceeding_Details";
import { Process_Status_Details } from "app/models/Process_Status_Details";
import { Qualification } from "app/models/Qualification";
import { Refund_Request } from "app/models/Refund_Request";
import { Registration_Details } from "app/models/Registration_Details";
import { Remarks } from "app/models/Remarks";
import { Resume } from "app/models/Resume";
import { Review } from "app/models/Review";
import { SOP } from "app/models/SOP";
import { Send_Welcome_Mail } from "app/models/Send_Welcome_Mail";
import { Shore } from "app/models/Shore";
import { Sort_By } from "app/models/Sort_By";
import { StudentChecklist } from "app/models/StudentChecklist";
import { Student_Course_Apply } from "app/models/Student_Course_Apply";
import { Student_Course_Selection } from "app/models/Student_Course_Selection";
import { Student_Document } from "app/models/Student_Document";
import { Student_Fields } from "app/models/Student_Fields";
import { Student_FollowUp } from "app/models/Student_FollowUp";
import { Student_Message } from "app/models/Student_Message";
import { Student_Status } from "app/models/Student_Status";
import { Student_Task } from "app/models/Student_Task";
import { Sub_Section } from "app/models/Sub_Section";
import { Sub_Status } from "app/models/Sub_Status";
import { Task_Item } from "app/models/Task_Item";
import { Task_Status } from "app/models/Task_Status";
import { Transfer } from "app/models/Transfer";
import { Visa } from "app/models/Visa";
import { Visa_Document } from "app/models/Visa_Document";
import { Visa_Type } from "app/models/Visa_Type";
import { Work_Experience } from "app/models/Work_Experience";
import { feesreceiptdocument } from "app/models/feesreceiptdocument";
import { Tagged_User } from "app/models/Tagged_User";
import { Chats } from "app/models/Chats";
import { Chat_Window_Service } from "app/services/Chat_Window.Service";
import { Intake_Service } from "app/services/Intake.service";
import { Country_Intake } from "app/models/Country_Intake";

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
	selector: "app-Application_List_report",
	templateUrl: "./Application_List_report.component.html",
	styleUrls: ["./Application_List_report.component.css"],
	providers: [
		{
			provide: DateAdapter,
			useClass: MomentDateAdapter,
			deps: [MAT_DATE_LOCALE],
		},
		{ provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },DatePipe
	],
})
export class Application_List_reportComponent implements OnInit {
	url = environment.NotificationPath; //'http://regnewapi.trackbox.co.in:3646/'
	private socket;
	Status_Search: Department_Status = new Department_Status();
	User_Search: User_Details = new User_Details();
	Search_Name = "";
	Department_Search: Department = new Department();
	Search_Branch: Branch = new Branch();
	Search_FromDate: Date = new Date();
	Search_ToDate: Date = new Date();
	Look_In_Date: Boolean = false;
	Active_In: Boolean = true;
	More_Search_Options: boolean = true;
	View_Type_:number=0;
	Department_Status_Mode_Data1: Department_Status[];
	Department_Status_Mode_Data1_Filter: Department_Status[];
	Department_Status_Mode1_: Department_Status = new Department_Status();

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


	Application_Status_Mode_Search_: ApplicationStatus = new ApplicationStatus;
Application_Status_Mode_Search_Temp: ApplicationStatus = new ApplicationStatus;
Application_Status_Mode_Search_Data: ApplicationStatus[]


	Intake_Mode_: Intake = new Intake();
	Intake_Mode_Temp: Intake = new Intake();
	Intake_Mode_Data: Intake[];
	Intake_Search: Intake = new Intake();
	group_restriction: number;

	Data_Count:number;

	Intake_Year_: Intake_Year = new Intake_Year();
	Intake_Year_Temp: Intake_Year = new Intake_Year();
	Intake_Year_Data: Intake_Year[];
	Intake_Year_Search: Intake_Year = new Intake_Year();

	Lead_Data: Student[];
	Student_Data_Search: Student[];
	Lead_: Student = new Student();
	Search_Div: boolean = false;
	array: any;
	color = "primary";
	mode = "indeterminate";
	value = 50;
	myInnerHeight: number;
	myInnerHeightTwo: number;
	myInnerHeightThree: number;
	myInnerHeightFour: number;
	myInnerHeightFive: number;
	myInnerHeightlist: number;
	myInnerHeighttemp1: number;
	myTotalHeight: number;
	myHeight: number;
	issLoading: boolean;
	Search_Student_Name = "";
	Search_Application_No=0;

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
	Agent_Id: number;
	Application_status_Id: number;
	Menu_Id: number = 66;

	RowCount: number = 0;
	RowCount2: number = 0;
	nextflag: number = -1;
	Page_Length_: number = 15;
	firstnum: number = 0;
	lastnum: number = 1;
	Roundrobin_check:number;
	shownext: boolean = false;
	showprev: boolean = false;

	Application_fees_paid:string;

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
	list_view:boolean=true;

	Agent_View: boolean;
	Export_Permission: any;
	Export_View: boolean = false;

	Graph: boolean = false;
	Summary_Sub: boolean = true;

	Agent_Mode_: Agent = new Agent();
	Agent_Mode_Temp: Agent = new Agent();
	Agent_Mode_Data: Agent[];

	Application_Status_Mode_: ApplicationStatus = new ApplicationStatus();
	Application_Status_Mode_Temp: ApplicationStatus = new ApplicationStatus();
	Application_Status_Mode_Data: ApplicationStatus[];
	Application_Status_Mode_Data_Temp: ApplicationStatus[];
	Course_Data: Course[];

	Department_Status_Dropdown_: Department_Status = new Department_Status();
	Department_Status_Dropdown_Temp: Department_Status = new Department_Status();
	Department_Status_Dropdown_Data: Department_Status[];

	Department_Status_Mode_: Department_Status = new Department_Status();
	Department_Status_Mode_Temp: Department_Status = new Department_Status();
	Department_Status_Mode_Data: Department_Status[];
	Department_Status_Mode_Data_Temp: Department_Status[];

	Course_Link_Button:boolean=false;
	Country_Temp: Country = new Country();
	University_Temp: University = new University();
	Course_Temp: Course = new Course();
	Department_Status_Mode_Temp1: Department_Status = new Department_Status();

	  Created_User_Search: User_Details = new User_Details();

	Course_: Course = new Course();

	Application_Country_: Country = new Country();

	Intake_Year_Mode_: Intake_Year = new Intake_Year();
	Intake_Year_Mode_Temp: Intake_Year = new Intake_Year();
	Intake_Year_Mode_Data: Intake_Year[];

	Agent_Search: Agent = new Agent();
	Country_Data: Country[];
	Country_Data_Filter: Country[];
	University_Data_Filter_2: University[];
	Department_Status_Data_Filter_2: Department_Status[];
	countryAll = {
		'Country_Id':0,
		'Country_Name':'All'
	  }
	  universityAll = {
			"University_Id": 0,
			"University_Name": "All"
	  }
	  selectedUniversity;

	
    Look_In_Date_Summary: boolean = true;
	
	Duration_Id: number = 0;
	Edit_save_button_view:boolean=true;

	University_Data: University[];
	Department_Status_Data: Department_Status[];
	Profile_Country_: Country = new Country();
	University_1: University = new University();
	Status_1: Department_Status = new Department_Status();
	University_Data_Filter: University[];
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
	Application_status_Id_: number = 0;
	ApplicationDetails_Data: Applicationdetails[];
	Change_Status_Button_View: boolean;
	Change_User_Button_View:boolean;
	Change_Status_Button_Permission: any;
	Change_User_Button_Permission: any;
	Bph_Status_: Bph_Status = new Bph_Status();
	Bph_Status_Temp: Bph_Status = new Bph_Status();
	Bph_Status_Data: Bph_Status[];
	Application_Status_Edit: string;
	application_details_View: boolean = false;
	Applicationmodal_View: boolean = true;
	Change_Status_View: boolean = false;
	Change_User_View:boolean=false;
	App_List_Student_Name:string;
	App_List_Course_Name:string;
	App_List_University_Name:string;
	Offtertype_View: boolean = false;

	taskCreationData = null;
	Student_Id_Edit: number;
	Student_Id: number = 0;
	ImageFile_: any;
	Display_File_: string;
	User_Details_Data: User_Details[];
	User_Div: boolean = false;

	tagged_users: Tagged_User[];
	Users: User_Details[];
	messageText: string = "";
	Applicationdetails_Dataview: Applicationdetails[];
	ApplicationDetails_: Applicationdetails = new Applicationdetails();
	// Application_Status_:number;
	ImageFile_Doc: any;

	Automatic_Department_Data: Department[];
	Automatic_Department_Data_Temp: Department = new Department();
	Automatic_Department_: Department = new Department();
	Notification_Department_: Department = new Department();
	Application_Status_: ApplicationStatus = new ApplicationStatus();
	Student_Id_Transfer: number;
	Status_Id_Transfer: number;
	Save_Student_Approved_Status: number;

	Application_Id_Log: number;
	conditions_appid: number;
	ApplicationStatus_Id_Log: number;
	ApplicationStatus_Name_Log: string;
	History_View: boolean = false;
	Data_View:boolean = false;
	FeesId_History: number;
 Agent_Temp1: User_Details = new User_Details();

	ApplicationdetailsHistory_Data: ApplicationdetailsHistory[];
	Bph_Approved_Status: number;
	Old_Application_Status_Id: number;

	Application_Lodgement_permission: any;
	Lodgement_section_View: boolean = false;

	Application_Offerchasing_permission: any;
	Offerchasing_section_View: boolean = false;

	Agent_Applicationlist_Permission:any;
	Agent_Applicationlist_View:boolean = false;
	Add_Comment_View: boolean = false;

	Application_No_Permission:any;
	Application_No_View:boolean = false;

	Offerletter_Type_: Offerletter_Type = new Offerletter_Type();
	Offerletter_Type_Data: Offerletter_Type[];
	Offerletter_Type_Temp: Offerletter_Type = new Offerletter_Type();

	Conditions_Sub: Conditions = new Conditions();
	Conditions_Sub_Data: Conditions[];
	Conditions_Search_Data: Conditions[];
	Save_Call_Status: boolean = false;

	To_Username_Popup:string;

	ApplicationDocument_Description: string;
	ApplicationDocument_File_Array: any[];
	ApplicationDocument_Array: Applicationdocument[];
	ImageFile_Application: any;
	ApplicationDisplay_File_Name_: string;
	Chats_: Chats = new Chats();

	Conditions_Sub_Index: number = -1;
	Comment_Data: Chats[];
	University_Temp_Data_: University = new University();
	University_Temp_Array: University[];

	Course_Temp_Data_: Course = new Course();

	Country_Temp_Data_: Country = new Country();
	Country_Temp_Array: Country[];
	To_user_list = "";
	Course_Temp_Array: Course[];
	Application_Id_Temp_: number;
isTypeaheadOpen = false;
	Course_Data_Filter: Course[];

	Select_TaggedUser: boolean = false;
	id_num: any;
	Transfer_app_Status_Id: number;
	Transfer_app_Student_Id: number;
	Transfer_app_Department_Id: number;
	Transfer_app_Status_Name: string;
	Application_Id_Ref_: number = 0;
	Viewconditions_View: boolean = false;
	condition_viewId: number;
	Enrolled_Application_Only_View_Permission: any;
	Login_Department_Name_: string = "";
	Status_Change_Data_: Status_Change_Data = new Status_Change_Data();
	Pointer_Start_: number = 1;
	Pointer_Stop_: number = 0;
	Total_List_Rows: number = 0;
	Applicatin_View_Permission:any
	View_Permission:any
	Login_User_Id:number;
	isStatusChanged = false;
	User_Details_Filter: User_Details[];
	Tagged_Ids: any;


	ApplicationStatus1: string = '';
	process_document_Data :Process_Notification[];
	process_data_list_Data :Process_Fields[];
	Intake_Data_List:Intake[];
	Intake_Year_List:Intake_Year[];
	process_CheckList_Data :Process_Notification[];
	process_Task_Data :Task_Detrails[];
    Process_Notification_Data:Process_Department[]
	process_Task_Data_pending :Task_Detrails[]=[];
	Profile_: Profile = new Profile();

	document_view : boolean =false;
	Data_list_view  : boolean =false;
	Task_Details_view : boolean = false;
	Student_Id_localStorage: string = "";

	selectedApplicationsIdDetails = {
		University_Id: null,
		Country_Id: null,
		Course_Id: null,
		Application_status_Id : null,

	  };

	   Agent_Data1: User_Details[];
	  Fees_Date: Date = new Date();
	
	  files = [];
  
	  Registration_Data_: Registration_Details = new Registration_Details();
	  Send_Welcome_Mail_Data_: Send_Welcome_Mail = new Send_Welcome_Mail();
  

	  Application_details_Id_History: number;
	  Search_Agent: Client_Accounts = new Client_Accounts();
	  Save_Agent_: Client_Accounts = new Client_Accounts();
	  Student_Message_: Student_Message = new Student_Message();
	  Subject_: Subject = new Subject();
	  Search_Country: Country = new Country();
	  Search_Subject: Subject = new Subject();
	  Subject_Id: number;
	  Document_Data: Document[];
  
	  Student_Document_Data: Student_Document[];
	  Student_Message_Data: Student_Message[];
	  Amount: number;
	  Description: string;
  
	  Search_Intake_Temp: any;
  
	  Search_Intake_Year_Temp: any;
  
	  Search_Sub_Section_Temp: any;
	  Registered_Check: number;
  
	  Missed_Count: number;
	
	  Gender_: Gender = new Gender();
	  Gender_Name_Search: string;

  
	  Task_Status_Id_: number = 0;
	  Task_Item_Id_: number = 0;
  
	  Enquiry_For_: Enquiry_For = new Enquiry_For();
	  Enquiry_For_Temp: Enquiry_For = new Enquiry_For();
	  Enquiry_For_Data: Enquiry_For[];
  
	  enquiry_mode_: enquiry_mode = new enquiry_mode();
	  enquiry_mode_Temp: enquiry_mode = new enquiry_mode();
	  enquiry_mode_Data: enquiry_mode[];
  
	  class_: Class = new Class();
	  class_Temp: Class = new Class();
	  class_Data: Class[];
  
	  Sort_By_Search: Sort_By = new Sort_By();
	  Sort_By_Temp: Sort_By = new Sort_By();
	  Sort_By_Data: Sort_By[];
  
	  Shore_: Shore = new Shore();
	  Shore_Temp: Shore = new Shore();
	  Shore_Data: Shore[];
  
	  Qualification_: Qualification = new Qualification();
  

	  showIntakeYearDiv = false;
	  Ielts_Details_: Ielts_Details = new Ielts_Details();
  
	  Work_experience_: Work_Experience = new Work_Experience();
	  Refund_Request_: Refund_Request = new Refund_Request();
  
	  // this.socket = io(this.url, { transports: ["websocket"] });
	  // this.socket = io(this.url);
  
	  More_Options_View:boolean=false;
	  More_Options_Button:boolean=true;
	  Less_Options_Button:boolean=false;

	  Department_Drop_Data: Department[];
	  Department_Data_C_Temp: Department = new Department();

	  Request_Department_Grid_: Department = new Department();
	  Currency_: Currency = new Currency();
	  Currency_Temp: Currency = new Currency();
	  Currency_Data: Currency[];
  
	  Task_Status_: Task_Status = new Task_Status();
	  Task_Status_Temp: Task_Status = new Task_Status();
	  Task_Status_Data: Task_Status[];
	  Task_Status_Search: Task_Status = new Task_Status();
  
	  Cas_Followup_: Student_Task = new Student_Task();
  
	  Profile_Intake_Mode_: Intake = new Intake();
	  Profile_Intake_Mode_Temp: Intake = new Intake();
	  Profile_Intake_Mode_Data: Intake[];

	  Search_Types:number=0;
  
	  Marital_Status_: Marital_Status = new Marital_Status();
	  Marital_Status_Temp: Marital_Status = new Marital_Status();
	  Marital_Status_Data: Marital_Status[];
  
	  Visa_Type_: Visa_Type = new Visa_Type();
	  Visa_Type_Temp: Visa_Type = new Visa_Type();
	  Visa_Type_Data: Visa_Type[];
  
	  IELTS_Type_: IELTS_Type = new IELTS_Type();
	  IELTS_Type_Temp: IELTS_Type = new IELTS_Type();
	  IELTS_Type_Data: IELTS_Type[];
  
	  //Task_Status_: Task_Status = new Task_Status();
  
	  // ApplicationDetails_:Applicationdetails = new Applicationdetails();

	  Qualification_Data: Qualification[];
  
	  Previsa_Data: Pre_Visa[];
	  Preadmission_Data: Pre_Admission[];
  
	  Refund_Request_Data: Refund_Request[];
  
	  Work_experience_Data: Work_Experience[];
  
	  Student_Checklist_Data: Pre_Visa[];
  
	  Student_Checklist_Preadmission_Data: Pre_Admission[];
  
	  FeesrecepitDetails_Data: Fees[];

	  Applicationdocument_Data: Applicationdocument[];
  
	  StudentChecklist_Data: StudentChecklist[];
  

	  Resume_Data: Resume[];
	  Resume_: Resume = new Resume();
	  Resume_Name_Search: string;
  
	  Resume_Mode_: Resume = new Resume();
	  Resume_Mode_Temp: Resume = new Resume();
	  Resume_Mode_Data: Resume[];
  
	  Passport_Data: Passport[];
	  Passport_: Passport = new Passport();
	  Passport_Name_Search: string;
  
	  Passport_Mode_: Passport = new Passport();
	  Passport_Mode_Temp: Passport = new Passport();
	  Passport_Mode_Data: Passport[];
  
	  LOR_1_Data: LOR_1[];
	  LOR_1_: LOR_1 = new LOR_1();
	  LOR_1_Data_Name_Search: string;
	  Intake_Mode_Data_Filter: Intake[];
	  LOR_1_Mode_: LOR_1 = new LOR_1();
	  LOR_1_Mode_Temp: LOR_1 = new LOR_1();
	  LOR_1_Mode_Data: LOR_1[];
  
	  LOR_2_Data: LOR_2[];
	  LOR_2_: LOR_2 = new LOR_2();
	  LOR_2_Data_Name_Search: string;
  
	  LOR_2_Mode_: LOR_2 = new LOR_2();
	  LOR_2_Mode_Temp: LOR_2 = new LOR_2();
	  LOR_2_Mode_Data: LOR_2[];
  
	  MOI_Data: MOI[];
	  MOI_: MOI = new MOI();
	  MOI_Data_Name_Search: string;
  
	  MOI_Mode_: MOI = new MOI();
	  MOI_Mode_Temp: MOI = new MOI();
	  MOI_Mode_Data: MOI[];
  
	  SOP_Data: SOP[];
	  SOP_: SOP = new SOP();
	  SOP_Data_Name_Search: string;
  
	  SOP_Mode_: SOP = new SOP();
	  SOP_Mode_Temp: SOP = new SOP();
	  SOP_Mode_Data: SOP[];
  
	  Ielts_: Ielts = new Ielts();
	  Ielts_Temp: Ielts = new Ielts();
	  Ielts_Data: Ielts[];
  
	  Ielts_Mode_: Ielts = new Ielts();
	  Ielts_Mode_Temp: Ielts = new Ielts();
	  Ielts_Mode_Data: Ielts[];
  
	  Registration_Visiblility: boolean;
	  Remove_Registration_Visibility: boolean;
  
	  Activte_Visiblility: boolean;
	  Remove_Activte_Visiblility: boolean;

	  Student_Approve_Button_View: boolean;
	  Remove_Approval_Button_View: boolean;
	  Application_Active_Button_View: boolean;
	  Application_Deactive_Button_View: boolean;
	  Move_To_PreApplication_Button_View: boolean;
	  Send_To_Bph_Button_View: boolean;
	  Visa_Rejection_Button_View: boolean;
	  Closed_Button_View: boolean;
	  Cas_Transfer_Button_View: boolean;
	  Refund_Transfer_Button_View: boolean;
	  Counsilor_Transfer_Button_View: boolean;
	  Application_Transfer_Button_View: boolean;
	  Admission_Transfer_Button_View: boolean;
	  PreAdmission_Transfer_Button_View: boolean;
	  PreVisa_Transfer_Button_View: boolean;
	  Visa_Transfer_Button_View: boolean;
	  myInnerHeighttemp: number;
  
	  Offer_Received: Boolean = true;
  
	  Page_Length_Course: number = 10;

	  Student_Course_Apply_Data: Student_Course_Apply[];
	  Student_Course_Apply_: Student_Course_Apply = new Student_Course_Apply();
  
	  Student_Checklist_Country_Id: number;
	  Student_Preadmission_Checklist_Country_Id: number;
  

	  EditIndex: number;
	  Student_Data: Student[];
	  Student_: Student = new Student();

	  Student_Name_Search: string='';
	  Entry_View: boolean = true;

	  Refund_View: boolean = true;
	  Historydata_View: boolean = true;
	  App_View: boolean = true;

	  Languagemodal_View: boolean = true;
	  Qualificationmodal_View: boolean = true;
	  Qualificationnew_View: boolean = true;
	  Workexperiencenew_View: boolean = true;
  
	  Applicationlist_View: boolean = true;
	  Feesmodal_View: boolean = true;
	  Visamodal_View: boolean = true;
	  Pre_Visamodal_View: boolean = true;
	  Pre_Visachecklistmodal_View: boolean = true;
  
	  Pre_AdmissionModal_View: boolean = true;
  
	  Reviewmodal_View: boolean = true;
	  Reviewdetails_View: boolean = true;
  
	  Tasknewmodal_View: boolean = true;
  
	  Invoicemodal_View: boolean = true;
	  tab_view: boolean = true;
	  profile_View: boolean = true;
	  New_view: boolean = true;
	  Sms_Button_view = true;
	  More_Button_view = true;
	  Application_View: boolean = false;
	  Checklist_View: boolean = false;
	  View_document: boolean = false;
	  message_View: boolean = false;
	  Course_View: boolean = false;
	  course_history_View: boolean = false;

	  language_details_View: boolean = false;
	  Fees_Receipt_Id_temp: number = 0;

  
	  Qualification_details_View: boolean = false;
	  Fee_Collection_View: boolean = false;
  
	  FollowUp_History_: Followup_History = new Followup_History();
  
	  Total_Receipt: any;
  
	  Advance_Search: boolean = true;
	  Index: number;
	
	  Registration_Permissions: any;
	  Remove_Registration_Permissions: any;
  
	  Activity_Permissions: any;
	  Remove_Activity_Permissions: any;
	
	  Student_Approve_Button_Permission: any;
	  Remove_Approval_Button_Permission: any;
	  Application_Active_Button_Permission: any;
	  Application_Deactive_Button_Permission: any;
	  Move_To_PreApplication_Button_Permission: any;
	  Send_To_Bph_Button_Permission: any;
	  Visa_Rejection_Button_Permission: any;
	  Closed_Button_Permission: any;
	  Cas_Transfer_Button_Permission: any;
	  Refund_Transfer_Button_Permission: any;
	  Counsilor_Transfer_Button_Permission: any;
	  Application_Transfer_Button_Permission: any;
	  Admission_Transfer_Button_Permission: any;
	  PreAdmission_Transfer_Button_Permission: any;
	  PreVisa_Transfer_Button_Permission: any;
	  Visa_Transfer_Button_Permission: any;
  
	  paidfees: number = 0;
	  Fees_Receipt_Id_data: number = 0;
	  Student_Edit: boolean;
	  Student_Save: boolean;
	  Register_Save: boolean;
	  Register_Remove: boolean;
	  Student_Delete: boolean = false;

	  myInnerHeightInner: number;
	
	  myHeightsub: number;
	  myHeightsubtwo: number;
	  myHeightsubthree: number;
	  myHeightsubfour: number;
	  Client_Accounts_Data: Client_Accounts[];
	
	  University_: University = new University();

	  Profile_University_: University = new University();

	  DepartmentT_Data: Department[];
	  Universitys_Data: Country[];
	  Search_Subject_: Subject = new Subject();
	  Subject_Data: Subject[];
	  Phone_Number_: number;
	  refund_message: string;
  
	  Task_Item_: Task_Item = new Task_Item();
	  Task_Item_search_: Task_Item = new Task_Item();
	  Task_Item_search_Tasknew_: Task_Item = new Task_Item();
	  Task_Item_Temp: Task_Item = new Task_Item();
	  Task_Item_Data_search: Task_Item[];
	  Task_Item_Data_search_Tasknew: Task_Item[];
  
	  Search_University: University = new University();

	  Search_Level: Level_Detail = new Level_Detail();
	  Search_Internship: Internship = new Internship();
	  Save_Document_: Document = new Document();
	  Internship_: Internship = new Internship();
	  Internship_Data: Internship[];
	  Internship_Temp: Internship = new Internship();
  
	  Level_: Level_Detail = new Level_Detail();
	  Level_Data: Level_Detail[];
	  Level_Temp: Level_Detail = new Level_Detail();
  

	  Duration_Data: _moment.Duration[];

	  FeesreceiptDisplay_File_Name_: string;
	  Display_File_Name_: string;
	  Display_passport_: string;
	  Display_Ielts_: string;
	  Display_Tenth_: string;
	  Display_Photo_: string;
	  Display_Experience_: string;
	  Display_Resume_: string;
	  Display_ApplicationFile_: string;
	  Display_FeesrecepitFile_: string;

  
	  Student_Status_Search_: Student_Status = new Student_Status();
	  Student_Status_: Student_Status = new Student_Status();
	  Student_Status_Data: Student_Status[];
	  Student_Status_Search_Data: Student_Status[];
	  Student_Status_Temp: Student_Status = new Student_Status();
	  Student_Status_Search_Temp: Student_Status = new Student_Status();
	  Student_Course_Selection_Data: Student_Course_Selection[];
  
	  Enquiry_Source_Search_: Enquiry_Source = new Enquiry_Source();
	  Enquiry_Source_: Enquiry_Source = new Enquiry_Source();
  
	  Enquiry_Source_Data: Enquiry_Source[];
	  Fees_Data_: Fees = new Fees();
	  Fees_Array: Fees[];
	  Receipt_data_: Fees_Receipt = new Fees_Receipt();
	  Receipt_data: Fees_Receipt[];
  
	  Enquiry_Source_Search_Data: Enquiry_Source[];
	  Enquiry_Source_Temp: Enquiry_Source = new Enquiry_Source();
	  Enquiry_Source_Search_Temp: Enquiry_Source = new Enquiry_Source();
	  Fees_Temp: Fees = new Fees();
	  Fees_Search_Temp: Fees = new Fees();
	  Fees_Receipt_: Fees_Receipt = new Fees_Receipt();
	  Fees_Receipt_Data: Fees_Receipt[];
	  Fees_: Fees = new Fees();
  
	  Application_Fees_Course_: Application_Course = new Application_Course();
	  Application_Fees_Course_Temp: Application_Course = new Application_Course();
	  Application_Fees_Course_Data: Application_Course[];
  
	  ApplicationDetails_Temp: Applicationdetails = new Applicationdetails();
	  ApplicationDetails_Search_Temp: Applicationdetails = new Applicationdetails();
  

  
	  private _: any;

	  Item_Export: boolean;
  
	  Show_FollowUp: boolean = true;
	  View_History_: boolean = true;
	  moredetailsbutton: boolean = true;
	  lessdetailsbutton: boolean = true;
	  Next_FollowUp_Date_Visible: boolean = true;
	  Flag_Followup: number = 0;
	  Flag_Student: number = 0;
	  User_Id: number = 0;
  
	  Receipt_Voucher: number;
	  Receipt_Fees: string;
	  Receipt_Student: string;
	  Receipt_Date: Date;
	  Receipt_Amount: string;
	  Followup_sub_b: string;
	  Followup_sub: string;
	  //Student_Course_Apply_Id:number
  
	  Student_Name: string;
	  Country_: Country = new Country();

	  Level_Detail_: Level_Detail = new Level_Detail();
	  Level_Detail_Temp: Level_Detail = new Level_Detail();
	  Level_Detail_Data: Level_Detail[];
  
	  Intake_: Intake = new Intake();
	  Intake_Temp: Intake = new Intake();
	  Intake_Data: Intake[];
  
  
	  Sub_Section_: Sub_Section = new Sub_Section();
	  Sub_Section_Temp: Sub_Section = new Sub_Section();
	  Sub_Section_Data: Sub_Section[];
  
	  Duration: number;
  
	  Subject_Temp: Subject = new Subject();
  
	  Search_Intake_ = new FormControl();
  
	  Search_Intake_Year_ = new FormControl();
  
	  Search_Sub_Section_ = new FormControl();
  
	  Followup_Users_Data: User_Details[];
	  Followup_Users_Data_t: User_Details[];
	  Followup_Users_Data_t_Filter: User_Details[];
	  Followup_Users_Data_tN: Student_FollowUp[];

	  Followup_Users_: User_Details = new User_Details();
	  Followup_Users_List_: User_Details = new User_Details();
	  Followup_Users_Task_: User_Details = new User_Details();
	  Followup_Users_t: User_Details = new User_Details();
	  Followup_Users_temp: User_Details = new User_Details();
  
	  Followup_Users_tN: Student_FollowUp = new Student_FollowUp();
	  //Followup_Users_tempN: Student_FollowUp = new Student_FollowUp();
  
	  Followup_Users_tempN: User_Details = new User_Details();
  
	  Followup_Branch_tempN: Branch = new Branch();
  
	
	  Users_Temp_c: User_Details = new User_Details();
	  Users_Temp1: User_Details = new User_Details();
  
	  Followup_Users_Temp: User_Details = new User_Details();
  
	  FollowUp_Status_: Department_Status = new Department_Status();
	  FollowUp_Status_Task_: Department_Status = new Department_Status();
	  Transfer_Status_: Department_Status = new Department_Status();
	  Transfer_Status_k: Sub_Status = new Sub_Status();
	
	  Status_Data_Temp: Department_Status = new Department_Status();
	  Followup_Status_Temp: Department_Status = new Department_Status();
	  Followup_Status_Data: Department_Status[];
	  Followup_Status_Data_filter: Department_Status[];
	  Followup_Transfer_Status_Data: Department_Status[];
	  Followup_Substatus_Data: Sub_Status[];
  
	  Followup_Substatus_Data_Filter: Sub_Status[];
	  Followup_Substatus_Data_Filter_Transfer: Sub_Status[];
  
	  Followup_Sub_Status_Temp: Sub_Status = new Sub_Status();
	  Followup_Sub_Status_Data: Sub_Status[];
  
	  Followup_Substatus_Data1: Sub_Status[];
  
	  Users_Data1: User_Details[]
  
	  Followup_Substatus_Data_Filter1: Sub_Status[];
	  Followup_Substatus_Data_Filter_Transfer1: Sub_Status[];
	  To_User_Search: User_Details = new User_Details();
	  //Followup_Sub_Status_Temp: Sub_Status = new Sub_Status();
	  FollowUp_Sub_Status_: Sub_Status = new Sub_Status();
	  FollowUp_Sub_Status_Transfer_: Sub_Status = new Sub_Status();
  

	  Department_Data_Temp: Department = new Department();
	  Followup_Department_Temp: Department = new Department();
	  FollowUp_Department_: Department = new Department();
	  FollowUp_Department_Task_: Department = new Department();
	  FollowUp_Department_T: Department = new Department();
  
	  FollowUp_Department_Temp: Department = new Department();
	  Followup_Department_Data: Department[];
	  Followup_Department_Data_T: Department[];
	  Followup_Department_Data_Check: Department[];
  
	  FollowUp_Department_TN: Student_FollowUp = new Student_FollowUp();
	  //FollowUp_Department_TempN: Student_FollowUp = new Student_FollowUp();
	  FollowUp_Department_TempN: Department = new Department();
	  Followup_Department_DataN: Student_FollowUp[];
	  Followup_Department_Data_TN: Student_FollowUp[];
	  Followup_Department_Data_CheckN: Student_FollowUp[];
  
	  FollowUp_Branch_: Branch = new Branch();
	  FollowUp_Branch_Task_: Branch = new Branch();
	  Followup_Branch_Data: Branch[];
	  Followup_Branch_Data_Filter: Branch[];
	  Branch_Temp: Branch = new Branch();
	  Followup_Branch_Temp: Branch = new Branch();
  

	  selectedUniversities: any[] = [];
	  selectedCourses: any[] = []; // Holds selected courses


	  Remarks_: Remarks = new Remarks();
	  Remarks_Data: Remarks[];
	  Remarks_Data_Filter: Remarks[];
	  Remarks_Temp: Remarks = new Remarks();
	  Is_Follow_: number;
	  Is_Follow_Status_: number;
  
	  feesreceiptdocument_: feesreceiptdocument = new feesreceiptdocument();
  
	  FollowUp_Data: Student_FollowUp[];
	  FollowUp_: Student_FollowUp = new Student_FollowUp();

	  Transfer_: Transfer = new Transfer();
  
	  Followp_History_Data: Followup_History[];
	  Show_Followup_History: boolean = true;
	  Transfer_view: boolean = true;
	  Lead_EditIndex: number = -1;

	  View_Follow_: boolean = true;
	  View_Student_: boolean = true;
	  Bph_Status: number;
  
	  Course_Data_Typeahead: Course[];
	  Program_Course_: Course = new Course();
	  More: boolean = false;
  
	  sub_typeahead: number;
  
	  Course_Name: any;
	  Receipt_Details_: Fees_Receipt_Data = new Fees_Receipt_Data();
	  Proceeding_: Proceeding_Details = new Proceeding_Details();
	  Section_To_Print: boolean = false;
  
	  Page_Start: number = 0;
	  Page_End: number = 0;
	  Page_Start_Course: number = 0;
	  Page_End_Course: number = 0;
	  Page_Length: number = 10;
  

	  Red_Start_Course: number = 1;

	  Red_Stop_Course: number = 0;

	  Total_Rows_Course: number = 0;
	  Pages: number = 0.0;
	  Total_Pages: number = 0;

  
	  Course_Selection_: Course_Selection = new Course_Selection();
	  Course_Selection_Data: Course_Selection[];
	  Course_Intake_Data: any;
	  Course_Sub_Section_Data: any;
  
	  Passport_Copy_File_Name: string;
	  IELTS_File_Name: string;
	  Passport_Photo_File_Name: string;
	  Tenth_Certificate_File_Name: string;
	  Work_experience_File_Name: string;
	  Resume_File_Name: string;
	  Duration_Difference: number;
	  temparray: any;
	  welcome_mail_view: boolean = true;
  
	  Course_Apply_Data: Course_Apply[];
	  Course_Apply_Data_Temp: Course_Apply = new Course_Apply();
  

	  process_Task_Data1 :Student_Task[];
  

  
	  //Student_Course_Apply_:Student_Course_Apply= new Student_Course_Apply;
  
	  ImageFile: any;
	  ApplicationImageFile: any;
	  Application_Click_Status: boolean;
	  Profile_Click_Status: boolean;
	  Document_Click_Status: boolean;
	  Message_Click_Status: boolean;
	  Course_Click_Status: boolean;
	  Fee_Collection_Click_Status: boolean;
	  Statistics_Click_Status: boolean;
	  Checklist_Click_Status: boolean;
	  Course_History_Click_Status: boolean;
	  Application_Details_Click_Status: boolean;
	  Qualification_Details_Click_Status: boolean;
	  Language_Details_Click_Status: boolean;
  
	  Document_Array: Document[];
  
	 
	  FeesreceiptDocument_Array: feesreceiptdocument[];

  
	  DataApplicationDocument_Array: feesreceiptdocument[];
  
	  Checklisst_Array: StudentChecklist[];
	  Document_File_Array: any[];
	  FeesreceiptDocument_File_Array: any[];
  
	  Document_File: Document = new Document();
	  ApplicationDocument_File: Applicationdocument = new Applicationdocument();
	  FeesreceiptDocument_File: feesreceiptdocument = new feesreceiptdocument();
	  Document_Start: number;
	  Document_Description: string;
	
	  FeesreceiptDocument_Description: string;
	  File: string;
	  ApplicationFile: String;
	  ImageFile_passport: any;
	  ImageFile_Ielts: any;
	  ImageFile_Tenth: any;
	  ImageFile_Photo: any;
	  ImageFile_Experience: any;
	  ImageFile_Resume: any;

	  ImageFile_Feesreceipt: any;

  
	  Tenth_Certificate: string;
	  Passport_Copy: string;
	  IELTS: string;
	  Work_Experience: string;
	  Resume: string;
	  Passport_Photo: string;
  
	  Subject_1: Subject = new Subject();
  
	  Fees_Collection_Edit: boolean;
	  Fees_Collection_Delete: boolean;
	  Fees_Receipt_Edit: boolean;
	  Fees_Receipt_Save: boolean = false;
	  Fees_Receipt_Delete: boolean;
	  Fees_Collection_Permission: any;
  
	  Course_History_Tab_Permission: any;
	  Course_History_Tab_View: boolean = false;
	  Course_History_Tab_Edit: boolean = false;
  
	  Applications_Tab_Permission: any;
	  Applications_Tab_View: boolean = false;
	  Applications_Tab_Edit: boolean = false;
  
	  Applications_Details_Tab_Permission: any;
	  Applications_Details_Tab_View: boolean = false;
	  //Qualification_Details_Tab_View: boolean = false;
	  //Language_Details_Tab_View: boolean = false;
	  Applications_Details_Tab_Edit: boolean = false;
	  Applications_Details_Tab_Delete: boolean = false;
	  Applications_Details_Tab_Save: boolean = false;
  
	  Search_Course_Tab_Permission: any;
	  Search_Course_Tab_Edit: boolean = false;
	  Search_Course_Tab_View: boolean = false;
	  Make_Click: boolean;
	  Student_Approve_Visibility: string;
  
	  Fees_Collection_Tab_Permission: any;
	  Fees_Collection_Tab_Edit: boolean = false;
	  Fees_Collection_Tab_View: boolean = false;
	  Fees_Collection_Tab_Delete: boolean = false;
  
	  Checklist_Tab_Permission: any;
	  Checklist_Tab_Edit: boolean = false;
	  Checklist_Tab_View: boolean = false;

	  Statistics_Tab_View: boolean = false;
	  Statistics_View: boolean = false;
	  Statistics_Tab_Permission: any;
	  Statistics_Tab_Edit: boolean = false;
  
	  Document_View_Status: boolean = false;
	  Documewnt_View_Permission: any;
	  Document_View_Option: boolean = false;
  

	  More_Search_Options_Profile: boolean = true;
	  App_Search_Options: boolean = true;

	  Department_: Department = new Department();
  
	
	  By_User_Search: User_Details = new User_Details();



	  User: User_Details[];
	
	  Enquiry_For_Search: Enquiry_For = new Enquiry_For();
	  Class_Search: Class = new Class();
	
  
	  Is_Registered: any;
  

	  Expense_Include: boolean = true;
	  Company_: Company = new Company();
  
	  company_data_temp: Company[];
	  Courses_Found: number = 0;
	  Start: number = 1;
	  next_previous: boolean = false;
  
	  Old_search_name: string;
	  Old_Department_id: number;
	  Old_Branch_id: number;
	  Old_Status_id: number;
	  Old_Is_Registered: number;
	  Old_Search_FromDate: Date;
	  Old_Search_ToDate: Date;
  
	  Invoice_Tab_Permission: any;
	  Invoice_Tab_View: boolean = false;
	  Invoice_Tab_Edit: boolean = false;
	  Invoice_View: boolean = false;
  
	  Department_Typeahead_Permission: any;
	  Department_Typeahead_View: boolean = false;
  
	  Branch_Typeahead_Permission: any;
	  Branch_Typeahead_View: boolean = false;
  
	  Profile_Refund_Permission: any;
	  Profile_Refund_View: boolean = false;
  
	  Tostaff_Typeahead_Permission: any;
	  Tostaff_Typeahead_View: boolean = false;
  
  
	  Student_approved_Status_Permission: any;
	  Student_approved_Status_View: boolean = false;
  
	  
  
	  Auditor_Status_Permission: any;
	  Auditor_Status_View: boolean = false;
  
	  Payment_Status_Permission: any;
	  Payment_Status_View: boolean = false;
  
	  Visa_View: boolean = false;
	  Cas_Followup_View: boolean = false;
	  Cas_FollowupPrevisa_View: boolean = false;
	  Cas_FollowupTasknew_View: boolean = false;
	  Cas_FollowupPreadmission_View: boolean = false;
  
	  Visa_Tab_Permission: any;
	  Visa_Tab_View: boolean = false;
	  Visa_Tab_Edit: boolean = false;
	  Visa_Tab_Delete: boolean = false;
	  Visa_Tab_Save: boolean = false;
	  Visa_: Visa = new Visa();
	  Visa_Data: Visa[];
  
	  Pre_Visa_View: boolean = false;
  
	  Pre_Visa_Checklist_View: boolean = false;
  
	  Pre_Visa_Tab_Permission: any;
  
	  Pre_Visa_Tab_View: boolean = false;
	  Pre_Visa_Tab_Edit: boolean = false;
	  Pre_Visa_Tab_Delete: boolean = false;
	  Pre_Visa_Tab_Save: boolean = false;
	  Previsa_: Pre_Visa = new Pre_Visa();
	  Pre_Visa_Data: Pre_Visa[];
  
	  Tasknew_View: boolean = false;
	  Tasknew_Tab_Permission: any;
	  Tasknew_Tab_View: boolean = false;
	  Tasknew_Tab_Edit: boolean = false;
	  Tasknew_Tab_Delete: boolean = false;
	  Tasknew_Tab_Save: boolean = false;
  
	  Pre_Admission_View: boolean = false;
  
	  Pre_Admission_Tab_Permission: any;
	  // Pre_Admission_Tab_Views:boolean =false;
	  Pre_Admission_Tab_View: boolean = false;
	  Pre_Admission_Tab_Edit: boolean = false;
	  Pre_Admission_Tab_Delete: boolean = false;
	  Pre_Admission_Tab_Save: boolean = false;
  
	  Qualification_Details_Tab_View: boolean = false;
  
	  Qualification_Tab_Permission: any;
	  // Pre_Admission_Tab_Views:boolean =false;
	  Qualification_Tab_View: boolean = false;
	  Qualification_Tab_Edit: boolean = false;
	  Qualification_Tab_Delete: boolean = false;
	  Qualification_Tab_Save: boolean = false;
  
	  Language_Details_Tab_View: boolean = false;
  
	  transfer_status_Dept_Id_:number;
  
	  Language_Tab_Permission: any;
	  // Pre_Admission_Tab_Views:boolean =false;
	  Language_Tab_View: boolean = false;
	  Language_Tab_Edit: boolean = false;
	  Language_Tab_Delete: boolean = false;
	  Language_Tab_Save: boolean = false;
  
	  Admission_Details_Tab_View: boolean = false;
  
	  Admission_Tab_Permission: any;
	  Admission_Tab_View: boolean = false;
	  Admission_Tab_Edit: boolean = false;
	  Admission_Tab_Delete: boolean = false;
	  Admission_Tab_Save: boolean = false;
  
	  Preadmission_: Pre_Admission = new Pre_Admission();
	  Pre_Admission_Data: Pre_Admission[];
  
	  //Reviewdetails_View: boolean = false;
  
	  Review_Tab_Permission: any;
	  Review_Tab_View: boolean = false;
	  Review_Tab_Edit: boolean = false;
	  Review_Tab_Delete: boolean = false;
	  Review_Tab_Save: boolean = false;
	  Review_: Review = new Review();
	  Review_Data: Review[];
  
	  ImageFile_Visa: any;
	  Display_VisaFile_: string;
	  Visa_Document_File_Array: any[];
	  Visa_Document_File: Visa_Document = new Visa_Document();
	  Visa_Document_Array: Visa_Document[];
	  Visa_Document_: Visa_Document = new Visa_Document();
	  Visa_Document_Description: string;
	 
  
	  Invoice_: Invoice = new Invoice();
	  Invoice_Data: Invoice[];
	  ImageFile_Invoice: any;
	  Display_InvoiceFile_: string;
	  Invoice_Document_File_Array: any[];
	  Invoice_Document_File: Invoice_Document = new Invoice_Document();
	  Invoice_Document_Array: Invoice_Document[];
	  Invoice_Document_: Invoice_Document = new Invoice_Document();
	  Invoice_Document_Description: string;
  
	  Invoice_Click_Status: boolean;
	  Visa_Click_Status: boolean;
  
	  Pre_Visa_View_Click_Status: boolean;
  
	  Pre_Admission_View_Click_Status: boolean;
  
	  Review_Click_Status: boolean;
  

	  Save_button_view:boolean=true;
  
	  Buttonset_view: boolean = true;
	  Transfer_Button_view: boolean = true;
  
	  Mail_Data_: Send_Welcome_Mail = new Send_Welcome_Mail();
	  Program_Course_Temp: Course = new Course();
	  Profile_University_Temp: University = new University();
	  Profile_Country_Temp: Country = new Country();
	  Temp_Date_Followup: Date;

	  Login_User_Name: string;
	  Branch_Id: number;
	  Usertype: number;
	  Login_Department:number
	  Extension: number;

	  cas_task_id: number;
	  Followp_History_Data_Details: Followup_History[];
	  transfer_student_id_:Number;

  
	  transfer_source: string;
	  Transfer_department_Id: number;
	  Transfer_departmentstatus_Id: number;
	  Transfer_departmentstatusname: string;
  
	  transfer_typeahead: boolean = false;
  
	  Course_Fees_Index: number = -1;
	  Course_Fees: Visa = new Visa();
	  Course_Fees_Data: Visa[];
	  timeDiff: number;
	  Application_Transfer_: Application_Transfer = new Application_Transfer();
	  Application_List_: Application_List = new Application_List();
	  Application_List_Data: Application_List[];
  

  
	  To_Account_: Client_Accounts = new Client_Accounts();
	  To_Account_Temp: Client_Accounts = new Client_Accounts();
	  To_Account_Data: Client_Accounts[];
	  Task_Student_Data: Student_Task[];
	  Task_Student_Previsa_Data: Student_Task[];
	  Task_Student_Preadmission_Data: Student_Task[];
	  Task_Student_Tasknew_Data: Student_Task[];
  
	  Followphistoryview: boolean = false;
	  Followupdetailsview: boolean = false;
  
  
	  Fees_Course_: Applicationdetails = new Applicationdetails();
	  Fees_Course_Data: Applicationdetails[];
	  Course_Fees_Data_Filter: Applicationdetails[];
	  Fees_Course_Temp: Applicationdetails = new Applicationdetails();
	  Fees_Course_Data_Temp_Array: Applicationdetails[];
	 
	  Task_Group_Id: number;
  

  
	  DefaultDept_: Branch = new Branch();
	  DefaultDept_Temp: Branch = new Branch();
	  DefaultDept_Data: Branch[];
  
	  DefaultUsers_: Branch = new Branch();
	  DefaultUsers_Temp: Branch = new Branch();
	  DefaultUsers_Data: Branch[];
  
	  DefaultStatus_: Branch = new Branch();
	  DefaultStatus_Temp: Branch = new Branch();
	  DefaultStatus_Data: Branch[];
  
	  
  
	  
  
	  Default_dep_id: number;
	  Branch_dep_id: number;
	  Martialdetails_view: boolean = true;
	  Application_cousellor_permission: any;
	  cousellor_section_View: boolean = false;
  
	
	  Enable_Call_Button: boolean = true;
	  Enable_Call: number;
	  Enable_Highest_Department_Profile: boolean = true;
	  Enable_Highest_Department: number;
  
  
	  Enable_Highest_Status_Profile: boolean = true;
	  Enable_Highest_Status: number;
  
	  Enable_Class_Profile: boolean = true;
	  Enable_Class: number;
  
  
	  Documents_View: boolean = false;
	  Documents_Tab_Permission: any;
	  Documents_Tab_View: boolean = false;
	  Documents_Tab_Edit: boolean = false;
	  Documents_Tab_Delete: boolean = false;
	  Documents_Tab_Save: boolean = false;
	  Documents_: Document = new Document();
	  Documents_Temp: Document = new Document();
	  Documents_Data: Document[];
	  Student_Documents_Data: Student_Document[];
	  Student_Documents_: Student_Document = new Student_Document();
	  Student_Documents_Array: Student_Document[] = [ new Student_Document()];
	  Image_Photo: any;
	
	  
  
	  Register_Transfer_Department_Id: number;
  
	  Register_Transfer_Status: boolean;
	  Task_Date_View: boolean = true;
	  Application_History_Delete_Permission: any;
	  Application_History_Delete_View: boolean = false;
	  Student_Name_t:string;
	  
	  student_name: string;
	  to_user_name: string;
	  Student_Task_Id: number;
	  Historydiv: boolean = false;
	  Student_Task_Data: Student_Task[];
	  // cas_task_id: number;
	  cas_task_student_id: number;
	  cas_task_item_id: number;
	  cas_task_group_id: number;
	  Count_Task_:number
	  Login_Department_Name:string
	  user_category:number;
	  Intake_Date_Year_Check:boolean;
	  Round_Robin_Status:number;
	  Typeahead_Department_Id:number;

	  expandedCourses: boolean[] = [];
  
	  expandedUniversity:boolean[] = [];
	  expandedUser:boolean[] = [];
	  expandedRemark: boolean[] = [];

		process_status_Temp: Process_Status_Details = new Process_Status_Details();
	  // process_data_listdata1: any;
	  process_data_listdata1 :Student_Fields[];
  
	  PS_Details_Index_Sub_ : number =-1;
	  If_file_changed: boolean=false;
	Transfer_temp_name: string;

	Navbar_Leads_View:number;
	Navbar_Leads_View_Menus:number
	Name_Show:string;

	/*** Added on 21-11-2024 */

	selectedIntakeYear: any;
	combinedIntakeData: Array<any> = [];
	countryIntakeData : Country_Intake[];
	Country_Intake_Mode_Temp_ : Country_Intake = new Country_Intake();
	Country_Intake_Mode_ : Country_Intake = new Country_Intake();

	constructor(
		public Department_Service_: Department_Service,
		public Student_Service_: Student_Service,
		public Country_Service_: Country_Service,
		public University_Service_: University_Service,
		public Chat_Window_Service_: Chat_Window_Service,
		public Course_Service_: Course_Service,
		public Application_Status_Service_: Application_Status_Service,
		public Department_Status_Service_:Department_Status_Service,
		public Intake_Service_: Intake_Service,
		private route: ActivatedRoute,
		private router: Router,
		private datePipe: DatePipe,
		public dialogBox: MatDialog
	) {
		this.socket = io(this.url, { transports: ["websocket"] });
		this.socket = io(this.url);
	}
	ngOnInit() {
		this.Login_User = localStorage.getItem("Login_User");
		this.Usertype = Number(localStorage.getItem("User_Type"));


		this.Login_User_Id=Number(this.Login_User)

		this.Login_User_Name = localStorage.getItem("uname");

		this.Application_status_Id_ = Number(
			localStorage.getItem("Application_status_Id")
		);
		this.Application_Lodgement_permission = Get_Page_Permission(107);
		this.Application_Offerchasing_permission = Get_Page_Permission(108);

		this.Agent_Applicationlist_Permission = Get_Page_Permission(121);
		this.Application_No_Permission = Get_Page_Permission(122);

		this.View_Permission = Get_Page_Permission(113);
		this.Enrolled_Application_Only_View_Permission = Get_Page_Permission(110);
		// if(this.View_Permission.view== 1) this.View_Permission=1;
		// if(this.Enrolled_Application_Only_View_Permission.view== 1) this.Enrolled_Application_Only_View_Permission=1;

		// this.Enrolled_Application_Only_View_Permission = Number(
		// 	localStorage.getItem("Enrolled_Application")
		// );
		// this.View_Permission = Number(
		// 	localStorage.getItem("View_Permission")
		// );


		this.Navbar_Leads_View_Menus= Number(localStorage.getItem('Navbar_Non_Registered_Lead'));
		// console.log('	this.Navbar_Leads_View_Menus: ', 	this.Navbar_Leads_View_Menus);
		this.Navbar_Leads_View = Number(localStorage.getItem("Navbar_Leads_View"));

		if (this.Navbar_Leads_View_Menus == 3) {
			this.Name_Show = 'Applications';
			this.Student_Service_.updateNavTitle('Applications'); 

			// this.Nav_Title_Show = true;
			localStorage.setItem('Navbar_Non_Registered_Lead', '3');
		} else if (this.Navbar_Leads_View_Menus == 4) {
			this.Name_Show = 'Agent Applications';
			this.Student_Service_.updateNavTitle('Agent Applications'); 

			// this.Nav_Title_Show = true;
			localStorage.setItem('Navbar_Non_Registered_Lead', '4');
		}



		this.Login_Department_Name_ = localStorage.getItem("Login_Department_Name");
		localStorage.setItem("Application_status_Id", "0");
		{
			this.Page_Load();
		}

		if (
			this.Application_Lodgement_permission != undefined &&
			this.Application_Lodgement_permission != null
		) {
			this.Lodgement_section_View = this.Application_Lodgement_permission.View;
		}

		if (
			this.Application_Offerchasing_permission != undefined &&
			this.Application_Offerchasing_permission != null
		) {
			this.Offerchasing_section_View =
				this.Application_Offerchasing_permission.View;
		}

		if (
			this.Agent_Applicationlist_Permission != undefined &&
			this.Agent_Applicationlist_Permission != null
		) {
			this.Agent_Applicationlist_View =
				this.Agent_Applicationlist_Permission.View;
		}


		if (
			this.Application_No_Permission != undefined &&
			this.Application_No_Permission != null
		) {
			this.Application_No_View =
				this.Application_No_Permission.View;
		}


		this.Student_Id_localStorage = localStorage.getItem("Student_Id");
		

		if (this.Student_Id_localStorage > "0") {
			this.Student_Id = Number(this.Student_Id_localStorage);
			localStorage.setItem("Student_Id", "0");
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
				data: { Message: "Select Department", Type: "3" },
			});
		} else {
			if (
				this.Followup_Users_Data == undefined ||
				this.Followup_Users_Data.length == 0
			) {
				this.issLoading = true;
				var uname = undefined;

				this.Student_Service_.Search_Department_User_Typeahead_Change_User(
					this.FollowUp_Branch_.Branch_Id,
					this.FollowUp_Department_.Department_Id,
					uname,
					this.Usertype
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

	Get_All_ByUser11(event: any,source:number) {
		var Value = "";
		if (
			this.Followup_Users_Data == undefined 
			|| this.Followup_Users_Data == null || this.Followup_Users_Data.length == 0
		) 
		 {
			this.issLoading = true;

			this.sub_typeahead = this.Transfer_Status_.Department_Status_Id;

			this.Student_Service_.Get_All_ByUser(
				 this.Login_User_Id
			).subscribe(
				(Rows) => {
					if (Rows != null) {
						this.Followup_Users_Data = Rows[0];

						this.Followup_Users_Data_t_Filter = [];
						this.issLoading = false;
						for (var i = 0; i < this.Followup_Substatus_Data1.length; i++) {
							if (
								this.Followup_Users_Data[
									i
								].User_Details_Name.toLowerCase().includes(Value)
							)
								this.Followup_Users_Data_t_Filter.push(
									this.Followup_Users_Data[i]
								);
						}
					}
				},
				(Rows) => {
					this.issLoading = false;
				}
			);
		} else {
			this.Followup_Users_Data_t_Filter = [];
			for (var i = 0; i < this.Followup_Substatus_Data1.length; i++) {
				if (
					this.Followup_Substatus_Data1[
						i
					].Sub_Status_Name.toLowerCase().includes(Value)
				)
					this.Followup_Users_Data_t_Filter.push(
						this.Followup_Users_Data[i]
					);
			}
		}
	}



	Get_All_ByUserold(event: any,source:number) {
		var Value = "";
		if (event.target.value == "") Value = "";
		else Value = event.target.value.toLowerCase();

		debugger;
	  
			if (
				this.Followup_Users_Data_t == undefined 
				|| this.Followup_Users_Data_t == null || this.Followup_Users_Data_t.length == 0
			) {
				this.Student_Service_.Get_All_ByUser(
					this.Login_User_Id
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


	Get_Intake_Data_With_Count_Greater_Than_Zero() {

		this.Student_Service_.Get_Intake_Data_With_Count_Greater_Than_Zero().subscribe(
			(Rows) => {

				this.countryIntakeData = Rows[0].slice();
				this.Country_Intake_Mode_Temp_.Intake_Id = 0;
				this.Country_Intake_Mode_Temp_.Intake_Name = "Select";
				this.countryIntakeData.unshift(Object.assign({}, this.Country_Intake_Mode_Temp_));
				this.Country_Intake_Mode_ = this.countryIntakeData[0];
debugger

				this.Country_Intake_Mode_ = this.countryIntakeData[0];


				this.combinedIntakeData.push({
					Intake_Year_Id: 0,
					Intake_Id: 0,
					Intake_Year_Name: 'All',
					Intake_Name: 'All',
					Display_Name: 'All'
				  });

				  this.selectedIntakeYear = this.combinedIntakeData[0];



				this.countryIntakeData.forEach((intake) => {
					if(intake.Year_Id != 0) {
						if(intake.Intake_Id != 0) {
							this.combinedIntakeData.push({  
							Intake_Year_Id: intake.Year_Id,
							Intake_Id: intake.Intake_Id,
							Intake_Year_Name: intake.Intake_Year_Name,
							Intake_Name: intake.Intake_Name,
							Display_Name: `${intake.Intake_Year_Name} - ${intake.Intake_Name.trim()}`
							})
						}
					}
				})


  
				  console.log('this.combinedIntakeData: ', this.combinedIntakeData);				
			},
			(Rows) => {
				const dialogRef = this.dialogBox.open(DialogBox_Component, {
					panelClass: "Dialogbox-Class",
					data: { Message: "Error Occured", Type: "2" },
				});
			}
		);

	}




	Page_Load() {
		// this.myInnerHeight = (window.innerHeight);
    	// this.myInnerHeight = this.myInnerHeight - 130; 
		

		this.Pointer_Start_ = 1;
		this.Pointer_Stop_ = this.Page_Length_;
		this.Search_Div = true;
		this.Search_By_ = 1;
		this.Applicationmodal_View=false;
		this.Registered_By_ = 1;
		this.Is_Status = 1;
		var my_date = new Date();
		// this.Search_FromDate = new Date();
		// this.Search_FromDate = new Date(
		// 	my_date.getFullYear(),
		// 	my_date.getMonth(),
		// 	1
		// );

		
		this.Look_In_Date= false;

		this.Look_In_Date_Summary=true;
		this.Search_FromDate=new Date();
		this.Search_FromDate = this.New_Date(this.Search_FromDate);
		this.Search_ToDate = new Date();
		this.Search_ToDate = this.New_Date(this.Search_ToDate);

		this.ApplicationDetails_.Followup_Date = new Date();
		this.ApplicationDetails_.Followup_Date = this.New_Date(
			new Date(moment(this.ApplicationDetails_.Followup_Date).format("YYYY-MM-DD"))
		);
		// // this.Get_Lead_Load_Data();
		// this.Get_Menu_Status(66, this.Login_User);
		// this.Get_Menu_Status(38,this.Login_User);
		this.Get_Menu_Status(104, this.Login_User);
		this.Get_Menu_Status(75, this.Login_User);
		this.Get_Menu_Status(142, this.Login_User);
		this.Get_Menu_Status(160, this.Login_User);
		this.Get_Menu_Status(132, this.Login_User);
		//this.Get_Menu_Status(113, this.Login_User);
		// this.Load_application_status();

		this.Load_Agents();
		this.Load_OfferLetter_Type();
		this.Load_Application_status_forchangestatus();
		this.Get_Student_PageLoadData_Dropdowns();
		this.Get_Intake_Data_With_Count_Greater_Than_Zero()
		this.Load_Automatic_Departments();
		this.Load_Status_Dropdown();
		// this.Search_Lead_button();
		this.Load_StatusType();
		this.Search_Lead_function(0);
		this.Get_Lead_Load_Data_ByUser(this.Login_User);
		debugger
		this.myInnerHeight = window.innerHeight;
		this.myTotalHeight = this.myInnerHeight;
		this.myTotalHeight = this.myTotalHeight - 130;
		this.myInnerHeightlist = this.myInnerHeight - 230;
		
		this.myInnerHeight = this.myInnerHeight - 170;
		this.myInnerHeighttemp1=this.myInnerHeightlist;
		this.myInnerHeightTwo = this.myInnerHeight - 150;
		this.myInnerHeightThree = this.myInnerHeight - 220;
		this.myInnerHeightFour = this.myInnerHeight - 220;
		this.myInnerHeightFive = this.myInnerHeight - 420;
		
		this.Agent_View = false;
		this.Active_In = false;
		this.myHeight = this.myHeight - 400;
	}

	Get_Menu_Status(Menu_id, Login_user_id) {
		console.log('Menu_id: ', Menu_id);
		this.issLoading = false;
		this.Student_Service_.Get_Menu_Status(Menu_id, Login_user_id).subscribe(
			(Rows) => {
				debugger
				if (Rows[0][0] == undefined) {
					if ( Menu_id == 160 && Menu_id == 104 ) {
						console.log('Menu_id: ', Menu_id);
						localStorage.removeItem("token");
						this.router.navigateByUrl("Home_Page");
					}
				}

				if (Rows[0][0].View > 0) {
					
					if (Menu_id == 160 && Menu_id == 104) {
						console.log('Menu_id33: ', Menu_id);
						this.Permissions = Rows[0][0];
						if (this.Permissions == undefined || this.Permissions == null) {
							localStorage.removeItem("token");
							this.router.navigateByUrl("Home_Page");
						}
					} else if (Menu_id == 75) {
						this.Change_Status_Button_Permission = Rows[0][0];

						if (this.Change_Status_Button_Permission.View == true)
							this.Change_Status_Button_View = true;
					}

					else if (Menu_id == 142) {
						this.Change_User_Button_Permission = Rows[0][0];

						if (this.Change_User_Button_Permission.View == true)
							this.Change_User_Button_View = true;
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


	Load_StatusType() {
		this.issLoading = true;
		this.Department_Status_Service_.Load_StatusType().subscribe(
			(Rows) => {
				
				if (Rows != null) {

					this.Roundrobin_check = Rows[1][0].Round_Robin;
			
				
					this.issLoading = false;
				}
			},
			(Rows) => {
				this.issLoading = false;
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

	// Load_application_status()
	// {
	//     this.issLoading = true;
	//     this.Student_Service_.Load_Application_status_for_user(Number(this.Login_User)).subscribe(Rows => {

	//         if (Rows != null) {
	//             this.Application_Status_Mode_Data = Rows[0];
	//             this.Application_Status_Mode_Temp.Application_status_Id = 0;
	//             this.Application_Status_Mode_Temp.Application_Status_Name = "Select";
	//             this.Application_Status_Mode_Data.unshift(this.Application_Status_Mode_Temp);
	//             this.Application_Status_Mode_ = this.Application_Status_Mode_Data[0];
	//             this.issLoading = false;
	//         }
	//     },
	//         Rows => {

	//             this.issLoading = false;
	//         });
	// }

	Load_Application_status_forchangestatus() {
		this.issLoading = true;

		this.Student_Service_.Load_Application_status_forchangestatus(
			this.Login_User
		).subscribe(
			(Rows) => {
				if (Rows != null) {
					this.Department_Status_Mode_Data = Rows[0];
					this.Department_Status_Mode_Temp.Department_Status_Id = 0;
					this.Department_Status_Mode_Temp.Department_Status_Name = "Select";
					this.Department_Status_Mode_Data.unshift(
						this.Department_Status_Mode_Temp
					);
					this.Department_Status_Mode_Data_Temp =
						this.Department_Status_Mode_Data;
					this.Department_Status_Mode_ = this.Department_Status_Mode_Data[0];
					this.issLoading = false;
				}
			},
			(Rows) => {
				this.issLoading = false;
			}
		);
	}



	Close_Click() {}
	Next_Click() {
		
		if (this.ApplicationDetails_Data.length == this.Page_Length_) {
			this.Pointer_Start_ = this.Pointer_Start_ + this.Page_Length_;
			this.Pointer_Stop_ = this.Pointer_Stop_ + this.Page_Length_;
			this.nextflag = 1;
			if (this.ApplicationDetails_Data.length > 0) {
				this.Search_Application_List();
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
		this.Total_List_Rows =
			this.Total_List_Rows - this.ApplicationDetails_Data.length - this.Page_Length_;
		if (this.Total_List_Rows < 0) {
			this.Total_List_Rows = 0;
		}
		this.Search_Application_List();
	}
	Search_Lead_function(View_Type_t) {	
		debugger
		this.Pointer_Start_ = 1;
		this.Pointer_Stop_ = this.Page_Length_;
		this.Total_List_Rows = 0;
this.View_Type_=this.Search_Types;
this.Search_Application_List()
	}
	Search_Lead_button() {
		debugger
		this.Pointer_Start_ = 1;
		this.Pointer_Stop_ = this.Page_Length_;
		this.Total_List_Rows = 0;
		// this.Search_Student_Report();
		
		// this.Search_Application_List();
	}
	Search_Application_List() {
		debugger


		let University_Ids: number[] = [];
		
		let Course_Ids: number[] = []; 

		this.issLoading = true;
		
		var Is_View_ ,Enrolled_Application_View_,Department_Status_Id_ = 0,Created_User_Id=0,search_name_='',search_application_no_=0,look_In_Date_Value=0,Course_Id=0,Country_Id=0,University_Id=0,Intake_Id=0,Intake_Year_Id=0,Department_Status_Id=0,To_User_Id=0;
 var application_status_ = '';

		if (this.Look_In_Date == true )
		{
			look_In_Date_Value = 1;
		}


		if (this.Department_Status_Dropdown_ != undefined && this.Department_Status_Dropdown_ != null)
		if (
			this.Department_Status_Dropdown_.Department_Status_Id != undefined &&
			this.Department_Status_Dropdown_.Department_Status_Id != null
		)
		Department_Status_Id_ = this.Department_Status_Dropdown_.Department_Status_Id;



	// 	if (this.Look_In_Date_Summary == true )
    // look_In_Date_Value = 1;
		if (
			this.Search_Student_Name != undefined &&
			this.Search_Student_Name != null &&
			this.Search_Student_Name != ""
			 )
			search_name_ = this.Search_Student_Name;
			 else
			search_name_ ='undefined';

	
			if (
				this.Search_Application_No != undefined &&
				this.Search_Application_No != null &&
				this.Search_Application_No != 0
				 )
				search_application_no_ = this.Search_Application_No;
				 else
				 search_application_no_ =0;
	



		if(this.Enrolled_Application_Only_View_Permission==undefined)
		{
	
			Enrolled_Application_View_=0

		}
		else(Enrolled_Application_View_=1);

	
		if(this.View_Permission==undefined)
		{
	
			Is_View_=0

		}
		else(Is_View_=1);

var Entry_type_=3;
		if (this.Navbar_Leads_View_Menus == 3)
		{Entry_type_ =3}
		if (this.Navbar_Leads_View_Menus == 4)
		{Entry_type_ =3}
		

		if (this.Course_ != undefined && this.Course_ != null)
		if (this.Course_.Course_Id != undefined && this.Course_.Course_Id != null)
		Course_Id = this.Course_.Course_Id;

		if (this.Application_Country_ != undefined && this.Application_Country_ != null)
		if (this.Application_Country_.Country_Id != undefined && this.Application_Country_.Country_Id != null)
		Country_Id = this.Application_Country_.Country_Id;
	
		if (this.selectedCourses && this.selectedCourses.length > 0) {
			Course_Ids = this.selectedCourses.map(course => course.Course_Id);
		} else {
			Course_Ids = [0];  // or whatever default value you want to use when no courses are selected
		}
	

		if (this.selectedUniversities && this.selectedUniversities.length > 0) {
			University_Ids = this.selectedUniversities.map(uni => uni.University_Id);
		} else {
			University_Ids = [0];  // or whatever default value you want to use when no universities are selected
		}

		if (this.To_User_Search != undefined && this.To_User_Search!=null)
			if (this.To_User_Search.User_Details_Id != undefined && this.To_User_Search.User_Details_Id != null)
			To_User_Id = this.To_User_Search.User_Details_Id;


		
  if (this.ApplicationStatus1 != undefined && this.ApplicationStatus1 != null && this.ApplicationStatus1 != '') {
        application_status_ = this.ApplicationStatus1;
    } else {
        application_status_ = 'All'; // Default to show all
    }
	
	if (this.Created_User_Search != undefined && this.Created_User_Search != null)
		if (this.Created_User_Search.User_Details_Id != undefined && this.Created_User_Search.User_Details_Id != null)
		Created_User_Id = this.Created_User_Search.User_Details_Id;
		// if (this.University_1 != undefined && this.University_1 != null)
		// if (this.University_1.University_Id != undefined && this.University_1.University_Id != null)
		// University_Id = this.University_1.University_Id;


		// if (this.Intake_Mode_ != undefined && this.Intake_Mode_ != null)
		// 	if (this.Intake_Mode_.Intake_Id != undefined && this.Intake_Mode_.Intake_Id != null)
		// 	Intake_Id = this.Intake_Mode_.Intake_Id;

		// if (this.Intake_Year_Mode_ != undefined && this.Intake_Year_Mode_ != null)
		// 	if (this.Intake_Year_Mode_.Intake_Year_Id != undefined && this.Intake_Year_Mode_.Intake_Year_Id != null)
		// 	Intake_Year_Id = this.Intake_Year_Mode_.Intake_Year_Id;

		if (this.selectedIntakeYear != undefined && this.selectedIntakeYear != null)
			if (this.selectedIntakeYear.Intake_Id != undefined && this.selectedIntakeYear.Intake_Id != null)
			Intake_Id = this.selectedIntakeYear.Intake_Id;

		if (this.selectedIntakeYear != undefined && this.selectedIntakeYear != null)
			if (this.selectedIntakeYear.Intake_Year_Id != undefined && this.selectedIntakeYear.Intake_Year_Id != null)
			Intake_Year_Id = this.selectedIntakeYear.Intake_Year_Id;

		if (this.Status_1 != undefined && this.Status_1 != null)
		if (this.Status_1.Department_Status_Id != undefined && this.Status_1.Department_Status_Id != null)
		Department_Status_Id = this.Status_1.Department_Status_Id;
var followup_user_selection=0;

if (
	this.Followup_Users_ == undefined ||
	this.Followup_Users_ == null ||
	this.Followup_Users_.User_Details_Id == undefined ||
	this.Followup_Users_.User_Details_Id == 0
) 
followup_user_selection=0
else
followup_user_selection=this.Followup_Users_.User_Details_Id;
debugger
		this.Student_Service_.Search_Agent_Application_Report_old(moment(this.Search_FromDate).format('YYYY-MM-DD'), moment(this.Search_ToDate).format('YYYY-MM-DD'),
			this.Login_User,
			Course_Ids, // ,Course_Id,
			Country_Id,   University_Ids,  // Pass the array of University IDs
			// ,University_Id,
			Intake_Id,Intake_Year_Id,Department_Status_Id,
			Enrolled_Application_View_,this.Pointer_Start_,
			this.Pointer_Stop_,
			this.Page_Length_,Is_View_,Department_Status_Id_,search_name_,
			look_In_Date_Value,followup_user_selection,this.View_Type_,2,search_application_no_,To_User_Id,application_status_,Created_User_Id

		).subscribe(
			(Rows) => {
				debugger
				this.ApplicationDetails_Data = Rows[0];
				// console.log("this.ApplicationDetails_Data.length1",this.ApplicationDetails_Data.length);
				// console.log("this.ApplicationDetails_Data.length1",this.ApplicationDetails_Data.length);

				// if (this.Navbar_Leads_View_Menus == 3)
				// {
				// 	this.Data_Count =	this.ApplicationDetails_Data.length
				// }

				// if (this.Navbar_Leads_View_Menus == 4)
				// 	{
				// 		this.Data_Count =	this.ApplicationDetails_Data.length - 1
				// 	}

				// this.Data_Count =	this.ApplicationDetails_Data.length - 1

				if(this.ApplicationDetails_Data.length>0)
					{
						console.log('ApplicationDetails_Data: ', this.ApplicationDetails_Data.length);
						this.Data_Count=Rows[0][0].TotalEntries
					
						console.log('Total_Entries: ', this.Data_Count);
					}
					if(this.ApplicationDetails_Data.length==0)
						{
							this.Data_Count=0
						}	
				  


				// this.Data_Count =
				// 	this.ApplicationDetails_Data[this.ApplicationDetails_Data.length - 1].Application_details_Id;
				this.ApplicationDetails_Data.splice(this.ApplicationDetails_Data.length - 1);
				// console.log("this.ApplicationDetails_Data.length3",this.ApplicationDetails_Data[this.ApplicationDetails_Data.length - 1].Application_details_Id);

			
				this.missedfollowup_count = 0;
				this.followup_count = 0;
				
debugger

// console.log("this.ApplicationDetails_Data.length2",this.ApplicationDetails_Data.length);

				if (this.ApplicationDetails_Data.length > 0)
					this.Total_List_Rows =
						this.Total_List_Rows + this.ApplicationDetails_Data.length;
				this.issLoading = false;
			
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
	//   Change_Bph_Status(application_details_u:any,i)
	//   {
	//

	//   this.Student_Id_Transfer=application_details_u.Student_Id;
	//   this.Application_Status_.Remark=application_details_u.Remark;
	//   this.Application_Id_Log=application_details_u.Application_details_Id;
	//   this.ApplicationStatus_Id_Log=application_details_u.Application_status_Id;
	//   this.ApplicationStatus_Name_Log=application_details_u.Application_Status_Name;
	//   this.Application_Id_Temp_ = application_details_u.Application_details_Id
	//       this.Change_Status_View=true;
	//       if(this.Offerchasing_section_View==true)
	//       {
	//         this.Offtertype_View=true;
	//       }

	//       this.Search_Div = false;

	//       for (var j = 0; j < this.Automatic_Department_Data.length; j++) {
	//         if (
	//             application_details_u.Transfer_Department_Id ==
	//             this.Automatic_Department_Data[j].Department_Id
	//         )
	//             this.Automatic_Department_ = this.Automatic_Department_Data[j];
	//     }

	// for (var k = 0; k < this.Automatic_Department_Data.length; k++) {
	//         if (
	//             application_details_u.Notification_Department_Id ==
	//             this.Automatic_Department_Data[k].Department_Id
	//         )
	//             this.Notification_Department_ = this.Automatic_Department_Data[k];
	//     }

	//   }

	Change_Bph_Status(application_details_u: any, i) {
		debugger
		this.showIntakeYearDiv = false;
		this.process_document_Data=[]
		this.process_data_list_Data=[]
		this.process_Task_Data=[]
		this.Task_Details_view=false
debugger
		
    // Save required variable for fetching department statuses to selectedApplicationsIdDetails
	this.ApplicationDetails_.Bph_Remark=''
    this.selectedApplicationsIdDetails.Country_Id =
      application_details_u.Country_Id;
    this.selectedApplicationsIdDetails.Course_Id =
      application_details_u.Course_Id;
    this.selectedApplicationsIdDetails.University_Id =
      application_details_u.University_Id;
	  this.selectedApplicationsIdDetails.Application_status_Id= application_details_u.Appstatusid




		this.Department_Status_Mode_Data1=[];
		this.Department_Status_Mode_Data1_Filter=[];
		this.Department_Status_Mode1_=null;
		
this.Student_Id= application_details_u.Student_Id
this.Student_Id_Edit = application_details_u.Student_Id;
		this.App_List_Student_Name = application_details_u.Student_Name;
		this.App_List_Course_Name = application_details_u.Course_Name;
this.App_List_University_Name = application_details_u.University_Name;
console.log("App_List_University_Name",this.App_List_University_Name);

		//   this.Application_Status_Edit=application_details_u.;
		this.Student_Id_Transfer = application_details_u.Student_Id;
		this.Application_Status_.Remark = application_details_u.Remark;
		this.Application_Id_Log = application_details_u.Application_details_Id;
		this.ApplicationStatus_Id_Log = application_details_u.Appstatusid;
		this.Application_fees_paid = application_details_u.Application_Fees_Paid;
		this.ApplicationStatus_Name_Log =
			application_details_u.Application_Status_Name;

		this.group_restriction = application_details_u.Group_Restriction;

		if (this.group_restriction > 0) {
			this.Load_Application_status_forchangestatus_restriction(
				this.group_restriction
			);
		} else {
			this.Application_Status_Mode_Data =
				this.Application_Status_Mode_Data_Temp;
		}

		this.Application_Id_Temp_ = application_details_u.Application_details_Id;
		this.Change_Status_View = true;

		if (this.Offerchasing_section_View == true) {
			this.Offtertype_View = true;
		}


		this.ApplicationDetails_.Followup_Date = new Date();
		this.ApplicationDetails_.Followup_Date = this.New_Date(
			new Date(moment(this.ApplicationDetails_.Followup_Date).format("YYYY-MM-DD"))
		);

		this.Search_Div = false;

		//   for (var h = 0; h < this.Application_Status_Mode_Data.length; h++) {
		//     if (
		//         application_details_u.Application_status_Id ==
		//         this.Application_Status_Mode_Data[h].Application_status_Id
		//     )
		//         this.Application_Status_Mode_ = this.Application_Status_Mode_Data[h];
		// }

		// 	if (this.Application_Status_.Transfer_Status.toString() == "1")
		//     this.Application_Status_.Transfer_Status = true;
		//    else this.Application_Status_.Transfer_Status = false;
		;
		this.ApplicationDetails_.Application_No=application_details_u.Application_No;
		;


		// this.Department_Status_Mode_Temp1.Department_Status_Id = application_details_u.Department_Status_Id;
		// this.Department_Status_Mode_Temp1.Department_Status_Name = application_details_u.Department_Status_Name;
		// this.Department_Status_Mode1_ = Object.assign({}, this.Department_Status_Mode_Temp1);

for(var n=0;n<this.Department_Status_Mode_Data.length;n++)
{
	if(application_details_u.Department_Status_Id==this.Department_Status_Mode_Data[n].Department_Status_Id)
	this.Department_Status_Mode_=this.Department_Status_Mode_Data[n];
}
;
for(var m=0;m<this.Agent_Mode_Data.length;m++)
{
	if(application_details_u.Agent_Id==this.Agent_Mode_Data[m].Agent_Id)
	this.Agent_Mode_=this.Agent_Mode_Data[m];
}
		for (var j = 0; j < this.Automatic_Department_Data.length; j++) {
			if (
				application_details_u.Transfer_Department_Id ==
				this.Automatic_Department_Data[j].Department_Id
			)
				this.Automatic_Department_ = this.Automatic_Department_Data[j];
		}
		this.Offerletter_Type_.Offerletter_Type_Id=1;
		//     if (this.Application_Status_.Notification_Status.toString() == "1")
		//     this.Application_Status_.Notification_Status = true;
		//    else this.Application_Status_.Notification_Status = false;

		for (var k = 0; k < this.Automatic_Department_Data.length; k++) {
			if (
				application_details_u.Notification_Department_Id ==
				this.Automatic_Department_Data[k].Department_Id
			)
				this.Notification_Department_ = this.Automatic_Department_Data[k];
		}


// Save all required data to this.taskCreationData to create task when changing status
this.taskCreationData = application_details_u;

this.taskCreationData.Student_Task_Id = 0;
this.taskCreationData.Department_Id = this.Department_Data;
this.taskCreationData.By_User_Id = this.Login_User_Id;
this.taskCreationData.By_User_Name = localStorage.getItem("uname");
this.taskCreationData.Department_Name = localStorage.getItem(
  "Login_Department_Name"
);
this.taskCreationData.Department_Id =
  localStorage.getItem("Login_Department");
this.taskCreationData.Task_Group_Id = 4;
this.taskCreationData.To_User = 0;
this.taskCreationData.To_User_Name = "";
this.taskCreationData.Followup_Date = this.findNewDate();
this.taskCreationData.Remark = "";

this.Load_Conditions_Subdata_Edit(this.Application_Id_Log);
	}





	Change_Application_User(application_details_u: any, i) {
// 		this.process_document_Data=[]
// 		this.process_Task_Data=[]
// 		this.Task_Details_view=false


// 	this.ApplicationDetails_.Bph_Remark=''
//     this.selectedApplicationsIdDetails.Country_Id =
//       application_details_u.Country_Id;
//     this.selectedApplicationsIdDetails.Course_Id =
//       application_details_u.Course_Id;
//     this.selectedApplicationsIdDetails.University_Id =
//       application_details_u.University_Id;
// 	  this.selectedApplicationsIdDetails.Application_status_Id= application_details_u.Appstatusid




// 		this.Department_Status_Mode_Data1=[];
// 		this.Department_Status_Mode_Data1_Filter=[];
// 		this.Department_Status_Mode1_=null;
		
// this.Student_Id= application_details_u.Student_Id
// this.Student_Id_Edit = application_details_u.Student_Id;
// 		this.App_List_Student_Name = application_details_u.Student_Name;


// 		this.Student_Id_Transfer = application_details_u.Student_Id;
// 		this.Application_Status_.Remark = application_details_u.Remark;
// 		this.Application_Id_Log = application_details_u.Application_details_Id;
// 		this.ApplicationStatus_Id_Log = application_details_u.Appstatusid;
// 		this.Application_fees_paid = application_details_u.Application_Fees_Paid;
// 		this.ApplicationStatus_Name_Log =
// 			application_details_u.Application_Status_Name;

// 		this.group_restriction = application_details_u.Group_Restriction;

// 		if (this.group_restriction > 0) {
// 			this.Load_Application_status_forchangestatus_restriction(
// 				this.group_restriction
// 			);
// 		} else {
// 			this.Application_Status_Mode_Data =
// 				this.Application_Status_Mode_Data_Temp;
// 		}

// 		this.Application_Id_Temp_ = application_details_u.Application_details_Id;
		this.Change_User_View = true;

		this.Change_Status_View = false;
		this.Offtertype_View = false;
		this.Viewconditions_View = false;
		this.Add_Comment_View=false;


// 		if (this.Offerchasing_section_View == true) {
// 			this.Offtertype_View = true;
// 		}


// 		this.ApplicationDetails_.Followup_Date = new Date();
// 		this.ApplicationDetails_.Followup_Date = this.New_Date(
// 			new Date(moment(this.ApplicationDetails_.Followup_Date).format("YYYY-MM-DD"))
// 		);

// 		this.Search_Div = false;


// 		;
// 		this.ApplicationDetails_.Application_No=application_details_u.Application_No;
// 		;



// for(var n=0;n<this.Department_Status_Mode_Data.length;n++)
// {
// 	if(application_details_u.Department_Status_Id==this.Department_Status_Mode_Data[n].Department_Status_Id)
// 	this.Department_Status_Mode_=this.Department_Status_Mode_Data[n];
// }
// ;
// for(var m=0;m<this.Agent_Mode_Data.length;m++)
// {
// 	if(application_details_u.Agent_Id==this.Agent_Mode_Data[m].Agent_Id)
// 	this.Agent_Mode_=this.Agent_Mode_Data[m];
// }
// 		for (var j = 0; j < this.Automatic_Department_Data.length; j++) {
// 			if (
// 				application_details_u.Transfer_Department_Id ==
// 				this.Automatic_Department_Data[j].Department_Id
// 			)
// 				this.Automatic_Department_ = this.Automatic_Department_Data[j];
// 		}
// 		this.Offerletter_Type_.Offerletter_Type_Id=1;
	

// 		for (var k = 0; k < this.Automatic_Department_Data.length; k++) {
// 			if (
// 				application_details_u.Notification_Department_Id ==
// 				this.Automatic_Department_Data[k].Department_Id
// 			)
// 				this.Notification_Department_ = this.Automatic_Department_Data[k];
// 		}


// this.taskCreationData = application_details_u;

// this.taskCreationData.Student_Task_Id = 0;
// this.taskCreationData.Department_Id = this.Department_Data;
// this.taskCreationData.By_User_Id = this.Login_User_Id;
// this.taskCreationData.By_User_Name = localStorage.getItem("uname");
// this.taskCreationData.Department_Name = localStorage.getItem(
//   "Login_Department_Name"
// );
// this.taskCreationData.Department_Id =
//   localStorage.getItem("Login_Department");
// this.taskCreationData.Task_Group_Id = 4;
// this.taskCreationData.To_User = 0;
// this.taskCreationData.To_User_Name = "";
// this.taskCreationData.Followup_Date = this.findNewDate();
// this.taskCreationData.Remark = "";

// this.Load_Conditions_Subdata_Edit(this.Application_Id_Log);
	}


	findNewDate() {
		;
		const date = new Date();
		const nowDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
		return nowDate;
	  }


Load_Conditions_Subdata_Edit(Application_details_Id_)
{
	;
	this.Student_Service_.Load_Conditions_Subdata_Edit(Application_details_Id_).subscribe(
		(Rows) => {
			;
			if (Rows != null) {
				this.Conditions_Sub_Data = Rows[0];
				this.issLoading = false;
			}
		},
		(Rows) => {
			this.issLoading = false;
		}
	);

}
	Load_Application_status_forchangestatus_restriction(Group_Restriction_) {
		this.issLoading = true;

		this.Student_Service_.Load_Application_status_forchangestatus_restriction(
			Group_Restriction_
		).subscribe(
			(Rows) => {
				if (Rows != null) {
					this.Application_Status_Mode_Data = Rows[0];

					this.Application_Status_Mode_Temp.Application_status_Id = 0;
					this.Application_Status_Mode_Temp.Application_Status_Name = "Select";
					this.Application_Status_Mode_Data.unshift(
						this.Application_Status_Mode_Temp
					);
					//this.Application_Status_Mode_Data_Temp=this.Application_Status_Mode_Data
					this.Application_Status_Mode_ = this.Application_Status_Mode_Data[0];
					this.issLoading = false;
				}
			},
			(Rows) => {
				this.issLoading = false;
			}
		);
	}

	Clr_Bph_Status() {
		if (
			this.Application_Status_Mode_Data != null &&
			this.Application_Status_Mode_Data != undefined
		)
			this.Application_Status_Mode_ = this.Application_Status_Mode_Data[0];

		this.Application_Status_.Remark = "";
		this.ApplicationDetails_.Application_No =''
		this.Application_Status_.Notification_Status = false;
		this.Application_Status_.Transfer_Status = false;
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


			this.FollowUp_Branch_=null;
			this.FollowUp_Department_=null;
			this.Followup_Users_List_=null;


	}
		
	//   Save_Application_Status() {
	//       if (
	//           this.Application_Status_Mode_ == undefined ||
	//           this.Application_Status_Mode_ == null ||
	//           this.Application_Status_Mode_.Application_status_Id == undefined ||
	//           this.Application_Status_Mode_.Application_status_Id == 0
	//       ) {
	//           const dialogRef = this.dialogBox.open(DialogBox_Component, {
	//               panelClass: "Dialogbox-Class",
	//               data: { Message: "Select Application_Status", Type: "3" },
	//           });
	//           return;
	//       }

	//       if (
	//           this.ApplicationDetails_.Bph_Remark == undefined ||
	//           this.ApplicationDetails_.Bph_Remark == null ||
	//           this.ApplicationDetails_.Bph_Remark == ""
	//       ) {
	//           const dialogRef = this.dialogBox.open(DialogBox_Component, {
	//               panelClass: "Dialogbox-Class",
	//               data: { Message: "Enter Remark", Type: "3" },
	//           });
	//           return;
	//       }
	//       // this.ApplicationDetails_.Student_Id=this.Student_.Student_Id;

	//       const dialogRef = this.dialogBox.open(DialogBox_Component, {
	//           panelClass: "Dialogbox-Class",
	//           data: {
	//               Message: "Do you want to Change Status?",
	//               Type: true,
	//               Heading: "Confirm",
	//           },
	//       });

	//       dialogRef.afterClosed().subscribe((result) => {
	//           this.Application_Status_ = this.Application_Status_Mode_.Application_status_Id;
	//           if (result == "Yes") {
	//               this.issLoading = true;

	//               this.Student_Service_.Save_Application_Status(
	//                   this.Application_Status_Edit,
	//                   this.Login_User,
	//                   this.Application_Status_,
	//                   this.ApplicationDetails_.Bph_Remark
	//               ).subscribe(
	//                   (Save_status) => {
	//                       if (Number(Save_status[0][0].Application_details_Id_) == -2) {
	//                           const dialogRef = this.dialogBox.open(DialogBox_Component, {
	//                               panelClass: "Dialogbox-Class",
	//                               data: { Message: "Counsellor User not found", Type: "2" },
	//                           });

	//                       }

	//                       else if (Number(Save_status[0][0].Application_details_Id_) > 0) {
	//                         //   this.Remove_Activte_Visiblility = false;
	//                         //   this.Activte_Visiblility = false;

	//                           const dialogRef = this.dialogBox.open(DialogBox_Component, {
	//                               panelClass: "Dialogbox-Class",
	//                               data: { Message: "Saved", Type: "false" },
	//                           });

	//                           this.Search_Application_List();
	//                           this.Clr_Bph_Status();
	//                       } else {
	//                           const dialogRef = this.dialogBox.open(DialogBox_Component, {
	//                               panelClass: "Dialogbox-Class",
	//                               data: { Message: "Error Occured", Type: "2" },
	//                           });
	//                       }
	//                       this.issLoading = false;
	//                   },
	//                   (Rows) => {
	//                       this.issLoading = false;
	//                       const dialogRef = this.dialogBox.open(DialogBox_Component, {
	//                           panelClass: "Dialogbox-Class",
	//                           data: { Message: "Error Occured", Type: "2" },
	//                       });
	//                   }
	//               );
	//           }
	//       });
	//   }
	Close_Click_Change_Status() {
		this.Change_Status_View = false;
		this.Offtertype_View = false;
		this.Viewconditions_View = false;
		this.Add_Comment_View=false;
		this.Search_Div = true;
		this.Change_User_View=false;
		this.document_view=false;
		this.Search_Application_List();
		this.Clr_Change_Status()
		this.Clr_conditionssub()
	}


	Close_Click_Change_User()
	{
		this.Change_Status_View = true;
		this.Change_User_View=false;
		this.Offtertype_View = false;
		this.Viewconditions_View = false;
		this.Add_Comment_View=false;
		this.document_view=false;
	}

	Clr_Change_Status(){

		this.ApplicationDetails_.Followup_Date_Check= false;
		this.ApplicationDetails_.Remark='';

		// this.Ielts_Details_.Exam_Date = new Date();
		// 		this.Ielts_Details_.Exam_Date = this.New_Date(this.Ielts_Details_.Exam_Date);
		// this.ApplicationDetails_.Followup_Date = null;
		this.ApplicationDetails_.Followup_Date = new Date();
		this.ApplicationDetails_.Followup_Date = this.New_Date(
			new Date(moment(this.ApplicationDetails_.Followup_Date).format("YYYY-MM-DD"))
		);
		
		if (
			this.Agent_Mode_Data != null &&
			this.Agent_Mode_Data != undefined
		)
			this.Agent_Mode_ = this.Agent_Mode_Data[0];
		if (
			this.Application_Status_Mode_Data != null &&
			this.Application_Status_Mode_Data != undefined
		)
			this.Application_Status_Mode_ = this.Application_Status_Mode_Data[0];
		this.ApplicationDetails_.Application_No = ''
		
	}

	Load_Automatic_Departments() {
		this.issLoading = true;
		this.Student_Service_.Load_Automatic_Departments().subscribe(
			(Rows) => {
				if (Rows != null) {
					this.Automatic_Department_Data = Rows[0].slice();
					this.Automatic_Department_Data_Temp.Department_Id = 0;
					this.Automatic_Department_Data_Temp.Department_Name = "Select";
					this.Automatic_Department_Data.unshift(
						Object.assign({}, this.Automatic_Department_Data_Temp)
					);
					this.Automatic_Department_ = this.Automatic_Department_Data[0];
					this.Notification_Department_ = this.Automatic_Department_Data[0];

					this.issLoading = false;
				}
			},
			(Rows) => {
				this.issLoading = false;
			}
		);
	}

	Save_ApplicationStatusforstatuschange() {
		if (
			this.Application_Status_Mode_ == undefined ||
			this.Application_Status_Mode_ == null ||
			this.Application_Status_Mode_.Application_status_Id == undefined ||
			this.Application_Status_Mode_.Application_status_Id == 0
		) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Select Application_Status", Type: "3" },
			});
			return;
		}

		this.Application_Status_.Application_status_Id =
			this.Application_Status_Mode_.Application_status_Id;
		this.Application_Status_.Application_Status_Name =
			this.Application_Status_Mode_.Application_Status_Name;

		this.Application_Status_.Transfer_Department_Id =
			this.Automatic_Department_.Department_Id;
		this.Application_Status_.Transfer_Department_Name =
			this.Automatic_Department_.Department_Name;

		this.Application_Status_.Notification_Department_Id =
			this.Notification_Department_.Department_Id;
		this.Application_Status_.Notification_Department_Name =
			this.Notification_Department_.Department_Name;

		this.issLoading = true;
		this.Application_Status_Service_.Save_ApplicationStatusforstatuschange(
			this.Application_Status_
		).subscribe(
			(Save_status) => {
				Save_status = Save_status[0];
				if (Number(Save_status[0].Application_status_Id_) > 0) {
					const dialogRef = this.dialogBox.open(DialogBox_Component, {
						panelClass: "Dialogbox-Class",
						data: { Message: "Saved", Type: "false" },
					});
					//   this.Search_Application_Status();
					this.Clr_Bph_Status();
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
					data: { Message: Rows.error, Type: "2" },
				});
			}
		);
	}

	// Save_Lodgemet() {

	// 	if (this.isStatusChanged) {
	// 		this.createTaskByProcessOfStatus();
	// 	  }
	// 	
	

	// 	if (
	// 			this.Department_Status_Mode1_ == undefined ||
	// 			this.Department_Status_Mode1_== null ||
	// 			this.Department_Status_Mode1_.Department_Status_Id== null ||
	// 			this.Department_Status_Mode1_.Department_Status_Id== undefined
	// 		) {
	// 			const dialogRef = this.dialogBox.open(DialogBox_Component, {
	// 				panelClass: "Dialogbox-Class",
	// 				data: { Message: "Select Status", Type: "3" },
	// 			});
	// 			return;
	// 		}

			


	// 		if (
	// 			this.ApplicationDetails_.Remark == undefined ||
	// 			this.ApplicationDetails_.Remark == null ||
	// 			this.ApplicationDetails_.Remark == ""
	// 		) {
	// 			const dialogRef = this.dialogBox.open(DialogBox_Component, {
	// 				panelClass: "Dialogbox-Class",
	// 				data: { Message: "Enter Remark", Type: "3" },
	// 			});
	// 			return;
	// 		}
			
	// 		if (this.ApplicationDetails_.Followup_Date_Check == true) 
	// 			if(this.ApplicationDetails_.Followup_Date == null || this.ApplicationDetails_.Followup_Date == undefined)
	// 		 {
	// 			const dialogRef = this.dialogBox.open(DialogBox_Component, {
	// 				panelClass: "Dialogbox-Class",
	// 				data: { Message: "Choose Followup Date", Type: "3" },
	// 			});
	// 			return;
	// 		}

	// 		if (this.Department_Status_Mode1_.Fees_paid == true && this.Application_fees_paid<'0') {
	// 			const dialogRef = this.dialogBox.open(DialogBox_Component, {
	// 				panelClass: "Dialogbox-Class",
	// 				data: { Message: "Pay Fees", Type: "3" },
	// 			});
	// 			return;
	// 		}

	// 		if (this.ApplicationDetails_.Followup_Date_Check == false)
	// 		{
	// 			this.ApplicationDetails_.Followup_Date = new Date();
	// 	this.ApplicationDetails_.Followup_Date = this.New_Date(
	// 		new Date(moment(this.ApplicationDetails_.Followup_Date).format("YYYY-MM-DD"))
	// 	);
	// 		}
			
	// 		this.ApplicationDetails_.Followup_Date = this.New_Date(
	// 			new Date(moment(this.ApplicationDetails_.Followup_Date).format("YYYY-MM-DD"))
	// 		);

			
	// 		if (this.Offerletter_Type_.Offerletter_Type_Id==1) {
	// 		if (this.Conditions_Sub_Data==null||this.Conditions_Sub_Data==undefined) {
	// 			const dialogRef = this.dialogBox.open(DialogBox_Component, {
	// 				panelClass: "Dialogbox-Class",
	// 				data: { Message: "Add atleast one condition", Type: "3" },
	// 			});
	// 			return;
	// 		}
	// 	}

	// 	this.Status_Change_Data_.Application_details_Id = this.Application_Id_Log;
	// 	this.Status_Change_Data_.LoginUser = Number(this.Login_User);
	// 	this.Status_Change_Data_.Application_status_Id =
	// 		this.Department_Status_Mode1_.Department_Status_Id;
	// 	this.Status_Change_Data_.Application_Status_Name =
	// 		this.Department_Status_Mode1_.Department_Status_Name;

	// 		this.Status_Change_Data_.Class_Id =
	// 		this.Department_Status_Mode1_.Class_Id;
	// 		this.Status_Change_Data_.Class_Name =
	// 		this.Department_Status_Mode1_.Class_Name;
	// 		this.Status_Change_Data_.Class_Order =
	// 		this.Department_Status_Mode1_.Class_Order;


	// 	this.Status_Change_Data_.Agent_Id = this.Agent_Mode_.Agent_Id;
	// 	this.Status_Change_Data_.Application_No =
	// 		this.ApplicationDetails_.Application_No;
	// 	this.Status_Change_Data_.Agent_Name = this.Agent_Mode_.Agent_Name;
	// 	this.Status_Change_Data_.Offerletter_Type_Id =
	// 		this.Offerletter_Type_.Offerletter_Type_Id;
	// 	this.Status_Change_Data_.Offerletter_Type_Name =
	// 		this.Offerletter_Type_.Offerletter_Type_Name;
	// 		this.Status_Change_Data_.Remark =
	// 		this.ApplicationDetails_.Remark;
	// 		;
	// 		this.Status_Change_Data_.Followup_Date_Check=
	// 		this.ApplicationDetails_.Followup_Date_Check;
	// 		this.Status_Change_Data_.Followup_Date=
	// 		this.ApplicationDetails_.Followup_Date
	// 		this.Status_Change_Data_.Student_Id=this.Student_Id_Transfer;

	// 	this.Status_Change_Data_.Conditions_Array = this.Conditions_Sub_Data;
	// 	this.issLoading = true;
	// 	this.Student_Service_.Save_Lodgemet({
	// 		...this.Status_Change_Data_,
	// 		details: this.selectedApplicationsIdDetails,
	// 	  }).subscribe(
	// 		(Save_status) => {
				
	// 			if (Number(Save_status[0].Application_details_Id_) > 0) {

	// 				if(Number(Save_status[0].Activation_Status_) == 1)
	// 				{
	// 					this.Activate_Application(this.Status_Change_Data_, 0)
	// 				}

	// 				const dialogRef = this.dialogBox.open(DialogBox_Component, {
	// 					panelClass: "Dialogbox-Class",
	// 					data: { Message: "Saved", Type: "false" },
	// 				});
	// 			}

	// 			else if (Number(Save_status[0].Application_details_Id_) == -1) {
					
	// 				const dialogRef = this.dialogBox.open(DialogBox_Component, {
	// 					panelClass: "Dialogbox-Class",
	// 					data: {
	// 						Message:
	// 							" Selected status only used with Enrolled Student",
	// 						Type: "3",
	// 					},
	// 				});
	// 				this.issLoading = false;
	// 				return;
	// 			} 
				
	// 			this.Conditions_Sub_Data=[];
	// 			this.ApplicationDetails_.Remark="";
	// 			this.ApplicationDetails_.Followup_Date_Check= false;
				
	
		
	// 			this.Department_Status_Mode1_=null
	// 			this.Close_Click_Change_Status();
	// 			this.Clr_Change_Status();
				
				
	// 			this.Transfer_app_Status_Id = Save_status[0].Application_Status_Id_;
	// 			this.Transfer_app_Student_Id = Save_status[0].Student_Id_;
	// 			this.Transfer_app_Department_Id = Save_status[0].Transfer_department_;
	// 			this.Transfer_app_Status_Name = Save_status[0].Application_Status_Name_;
	// 			this.Application_Id_Ref_ = Save_status[0].Application_details_Id_;

	// 			if (Save_status[0].Transferdept_Tik_ == 1 ) {
	// 				this.Transfer_Cofirmation("");
	// 			} else if (Save_status[0].Notification_Tik_ == 1) {
	// 				if (Number(this.Login_User != Save_status[0].To_User_)) {
	// 					var message = {
	// 						Student_Name: Save_status[0].Student_Name_,
	// 						From_User_Name: Save_status[0].From_User_Name_,
	// 						Notification_Type_Name: Save_status[0].Notification_Type_Name_,
	// 						Entry_Type: Save_status[0].Entry_Type_,
	// 						To_User: Save_status[0].To_User_,
	// 						Notification_Id: Save_status[0].Notification_Id_,
	// 						Student_Id: Save_status[0].Student_Id_,
	// 					};
	// 					this.socket.emit("new-message", message);
	// 				}
	// 			}
	// 			this.Search_Application_List();
	// 			this.issLoading = false;
	// 		},
	// 		(Rows) => {
	// 			this.issLoading = false;
	// 			const dialogRef = this.dialogBox.open(DialogBox_Component, {
	// 				panelClass: "Dialogbox-Class",
	// 				data: { Message: "Error Occured", Type: "2" },
	// 			});
	// 		}
	// 	);
	// }



	Save_Lodgemet() {
        var empty_data=false;
    
        console.log('this.process_data_list_Data: ', this.process_data_list_Data);
    // for(var i=0;i<this.process_data_list_Data.length;i++)
    // {
    //     if(this.process_data_list_Data[i].Mandatory==true
    //         && this.process_data_list_Data[i].Data==''
    //         ) 
    //         {
    //             empty_data=true;
    //             break;
    //         }

    // }

debugger

	for(var i=0;i<this.process_data_list_Data.length;i++)
    {
		if(this.process_data_list_Data[i].Data_Type==2 )

		{
			this.process_data_list_Data[i].Date = this.New_Date(
				new Date(moment(this.process_data_list_Data[i].Date).format("YYYY-MM-DD"))
			);
		}
		else
		{
			this.process_data_list_Data[i].Date=''

		}
		
        if(this.process_data_list_Data[i].Mandatory==true
            && this.process_data_list_Data[i].Data=='' && this.process_data_list_Data[i].Date==''
            ) 
            {
                empty_data=true;
                break;
            }
			
    }

    debugger
    if (
        empty_data==true
    ) {
        const dialogRef = this.dialogBox.open(DialogBox_Component, {
            panelClass: "Dialogbox-Class",
            data: { Message:"Enter mandatory fields", Type: "3" },
        });
        return;
    }


    for(var i=0;i<this.process_document_Data.length;i++)
    {
        if(this.process_document_Data[i].Mandatory==true
            && (this.process_document_Data[i].Image_Photo==''
            ||this.process_document_Data[i].Image_Photo== undefined)
            ) 
            {
                empty_data=true;
                break;
            }

    }
    
    if (
        empty_data==true
    ) {
        const dialogRef = this.dialogBox.open(DialogBox_Component, {
            panelClass: "Dialogbox-Class",
            data: { Message:"Upload mandatory documents", Type: "3" },
        });
        return;
    }



    console.log('this.process_Task_Data: ', this.process_Task_Data);

    for(var i=0;i<this.process_Task_Data.length;i++)
    {

        if(this.process_Task_Data[i].mandatory_Task_Item_Id != null &&
            this.process_Task_Data[i].Student_Task_Id == null
            ) 
            {
                empty_data=true;
                break;
            }

    }
    
    if (
        this.process_Task_Data_pending.length>0
    ) {
        const dialogRef = this.dialogBox.open(DialogBox_Component, {
            panelClass: "Dialogbox-Class",
            data: { Message:"complete  mandatory  task", Type: "3" },
        });
        return;
    }





    

        if (
            this.Department_Status_Mode1_ == undefined ||
            this.Department_Status_Mode1_ == null ||
            this.Department_Status_Mode1_.Department_Status_Id== null ||
            this.Department_Status_Mode1_.Department_Status_Id== undefined
        ) {
            const dialogRef = this.dialogBox.open(DialogBox_Component, {
                panelClass: "Dialogbox-Class",
                data: { Message: "Select Status", Type: "3" },
            });
            return;
        }
		if (this.Intake_Date_Year_Check) { 
			if (
				this.Intake_Mode_ === undefined ||
				this.Intake_Mode_ === null ||
				this.Intake_Mode_.Intake_Id === undefined ||
				this.Intake_Mode_.Intake_Id === 0
			) {
				const dialogRef = this.dialogBox.open(DialogBox_Component, {
					panelClass: "Dialogbox-Class",
					data: { Message: "Select Intake Mode", Type: "3" },
				});
				return;
			}
					
			if (
				this.Intake_Year_Mode_ == undefined ||
				this.Intake_Year_Mode_ == null ||
				this.Intake_Year_Mode_.Intake_Year_Id == undefined ||
				this.Intake_Year_Mode_.Intake_Year_Id == 0
			) {
				const dialogRef = this.dialogBox.open(DialogBox_Component, {
					panelClass: "Dialogbox-Class",
					data: { Message: "Select Year", Type: "3" },
				});
				return;
			}// checks if Intake_Date_Year_Check is true
			this.Status_Change_Data_.Intake_Id = this.Intake_Mode_.Intake_Id;
			this.Status_Change_Data_.Intake_Name = this.Intake_Mode_.Intake_Name;
			this.Status_Change_Data_.Intake_Year_Id = this.Intake_Year_Mode_.Intake_Year_Id;
			this.Status_Change_Data_.Intake_Year_Name = this.Intake_Year_Mode_.Intake_Year_Name;
			this.Status_Change_Data_.Intake_Date_Year_Check = this.Intake_Date_Year_Check;
			console.log('this.Status_Change_Data_.Intake_Date_Year_Check : ', this.Status_Change_Data_.Intake_Date_Year_Check );
		} 
        if (
            this.ApplicationDetails_.Bph_Remark == undefined ||
            this.ApplicationDetails_.Bph_Remark == null ||
            this.ApplicationDetails_.Bph_Remark == "" 
        ) {
            const dialogRef = this.dialogBox.open(DialogBox_Component, {
                panelClass: "Dialogbox-Class",
                data: { Message: "Enter Remark", Type: "3" },
            });
            return;
        }

        if (
            this.ApplicationDetails_.Is_Registered == 0 &&
            this.ApplicationDetails_.Registration_Mandatory == 1
        ) {
            const dialogRef = this.dialogBox.open(DialogBox_Component, {
                panelClass: "Dialogbox-Class",
                data: { Message: "Registraion mandatory, please register the candidate to continue", Type: "3" },
            });
            return;
        }
		console.log('this.process_Task_Data: ', this.process_Task_Data);
		for(var j=0;j<this.process_Task_Data.length;j++)
		
			
		{
			if (this.process_Task_Data[j].Department_Id==0 || this.process_Task_Data[j].Department_Id==null || this.process_Task_Data[j].Department_Id==undefined)	
			{
				const dialogRef = this.dialogBox.open(DialogBox_Component, {
					panelClass: "Dialogbox-Class",
					data: { Message: "Select Department", Type: "3" },
				});
				return;
				
			}
			
		}	

        

    
debugger

        if (this.ApplicationDetails_.Followup_Date_Check == true) 
                if(this.ApplicationDetails_.Followup_Date == null || this.ApplicationDetails_.Followup_Date == undefined)
             {
                const dialogRef = this.dialogBox.open(DialogBox_Component, {
                    panelClass: "Dialogbox-Class",
                    data: { Message: "Choose Followup Date", Type: "3" },
                });
                return;
            }
                if(this.ApplicationDetails_.Deadline_Date == null || this.ApplicationDetails_.Deadline_Date == undefined)
             {
                const dialogRef = this.dialogBox.open(DialogBox_Component, {
                    panelClass: "Dialogbox-Class",
                    data: { Message: "Enter Duration for this Status", Type: "3" },
                });
                return;
            }

            // if (this.Department_Status_Mode1_.Fees_paid == true && this.Application_fees_paid<'0') {
            //  const dialogRef = this.dialogBox.open(DialogBox_Component, {
            //      panelClass: "Dialogbox-Class",
            //      data: { Message: "Pay Fees", Type: "3" },
            //  });
            //  return;
            // }


            // if (this.isStatusChanged) {
            //  this.createTaskByProcessOfStatus();
            //   }
            


            if (this.ApplicationDetails_.Followup_Date_Check == false)
            {
                this.ApplicationDetails_.Followup_Date = new Date();
        this.ApplicationDetails_.Followup_Date = this.New_Date(
            new Date(moment(this.ApplicationDetails_.Followup_Date).format("YYYY-MM-DD"))
        );
                this.ApplicationDetails_.Deadline_Date = new Date();
        this.ApplicationDetails_.Deadline_Date = this.New_Date(
            new Date(moment(this.ApplicationDetails_.Deadline_Date).format("YYYY-MM-DD"))
        );
            }
            

            

        this.ApplicationDetails_.Followup_Date = this.New_Date(
            new Date(moment(this.ApplicationDetails_.Followup_Date).format("YYYY-MM-DD"))
        );
        this.ApplicationDetails_.Deadline_Date = this.New_Date(
            new Date(moment(this.ApplicationDetails_.Deadline_Date,).format("YYYY-MM-DD"))
            );
            

const currentDate = new Date();

//if we can choose deadline 
    // const deadlineDate = new Date(this.ApplicationDetails_.Deadline_Date);

// Check if the deadline date is the same as the current date
        // if (
        // deadlineDate.getDate() === currentDate.getDate() &&
        // deadlineDate.getMonth() === currentDate.getMonth() &&
        // deadlineDate.getFullYear() === currentDate.getFullYear()                                                 
        // ) {
        // this.ApplicationDetails_.Deadline_Date = new Date();
        // } else {   //set hours to 12:00 if choosed date is another day
        // this.ApplicationDetails_.Deadline_Date = new Date(deadlineDate.setHours(0, 0, 0, 0));
        // }








            

            
        // console.log('this.process_Task_Data: ', this.process_Task_Data);
        // const currentTime = new Date();
        // const hoursToAdd = this.process_Task_Data[0].Duration;
        // const updatedTime = new Date(currentTime.getTime() + hoursToAdd * 60 * 60 * 1000);
        // const utcDate = new Date(updatedTime);
        // const localDate = utcDate.toLocaleString()
        // console.log('localDate: ', localDate);

    
        // this.process_Task_Data[0].Duration =localDate;
        // console.log('this.process_Task_Data: ', this.process_Task_Data);

        
        this.Status_Change_Data_.Application_details_Id = this.Application_Id_Log;
        this.Status_Change_Data_.LoginUser = Number(this.Login_User);
        this.Status_Change_Data_.Application_status_Id =
            this.Department_Status_Mode1_.Department_Status_Id;
        this.Status_Change_Data_.Application_Status_Name =
            this.Department_Status_Mode1_.Department_Status_Name;
        this.Status_Change_Data_.Agent_Id = this.Agent_Mode_.Agent_Id;
        this.Status_Change_Data_.Application_No =
            this.ApplicationDetails_.Application_No;
        this.Status_Change_Data_.Agent_Name = this.Agent_Mode_.Agent_Name;
        this.Status_Change_Data_.Offerletter_Type_Id =
            this.Offerletter_Type_.Offerletter_Type_Id;
        this.Status_Change_Data_.Offerletter_Type_Name =
            this.Offerletter_Type_.Offerletter_Type_Name;

            this.Status_Change_Data_.Remark =
            this.ApplicationDetails_.Bph_Remark

            this.Status_Change_Data_.Class_Id =
            this.Department_Status_Mode1_.Class_Id;
            this.Status_Change_Data_.Class_Name =
            this.Department_Status_Mode1_.Class_Name;
            this.Status_Change_Data_.Class_Order =
            this.Department_Status_Mode1_.Class_Order;
            this.Status_Change_Data_.Followup_Date=
            this.ApplicationDetails_.Followup_Date
            this.Status_Change_Data_.Deadline_Date=
            this.ApplicationDetails_.Deadline_Date
            
            this.Status_Change_Data_.Followup_Date_Check=
            this.ApplicationDetails_.Followup_Date_Check;
            
            this.Status_Change_Data_.Student_Id=this.Student_Id;
            this.Status_Change_Data_.Process_status_details_Id = this.ApplicationDetails_.Process_status_details_Id;
            
            
            
            
            
            this.Status_Change_Data_.Conditions_Array = this.Conditions_Sub_Data;
            this.Status_Change_Data_.process_data_list_Data = this.process_data_list_Data;
            
            
         debugger   
		
            this.Status_Change_Data_.process_document_Data = this.process_document_Data;
			this.Status_Change_Data_.process_Task_Data = this.process_Task_Data;
			
			this.process_Task_Data.forEach(ele=>{
				let Department_Name=this.Department_Drop_Data.find(elem=>elem.Department_Id==ele.Department_Id)
				console.log('Department_Name: ', Department_Name);
				ele.Department_Name=Department_Name.Department_Name
				})
				console.log('this.process_Task_Data: ', this.process_Task_Data);
            
            this.Status_Change_Data_.Process_Notification_Data = this.Process_Notification_Data;
            
            
            console.log('this.Status_Change_Data_: ', this.Status_Change_Data_);
            this.issLoading = true;
            
            const uploadPromises = this.process_document_Data.map((document, i) => {
                    if (document['ImageFile_Doc']) {

                            const file = document['ImageFile_Doc'].item(0); // Assuming ImageFile_Doc is a FileList
                return this.Student_Service_.applicationUploadFile(file, document['Document_Id'])
                    .then((data) => {

                        const idOfDocument = data["key"].split("/")[1];
                        console.log(' data["key"].split("/"): ',  data["key"].split("/"));
                        console.log('idOfDocument: ', idOfDocument);
                        
                        let key = {
                            [idOfDocument]: data["key"]
                        };
        
                        return key;
                    })
                    .catch((error) => {
                        console.error("Error uploading file: ", error);
                        throw error;
                    });
            } else {
                const key = { [document['Document_Id']]: null };
                return Promise.resolve(key);
            }
        });
            console.log('uploadPromises: ', uploadPromises);
        
        Promise.all(uploadPromises)
            .then((ids) => {
                // All uploads are complete here
                console.log("All uploads completed. IDs:", ids);
                this.Status_Change_Data_.process_document_Data.forEach(documentDetails => {
                    if (documentDetails && documentDetails.Document_Id) {
                      const documentId = documentDetails.Document_Id.toString();
                      const Document = ids.find(obj => obj && obj[documentId]);
                      console.log('Document: d ', Document);
                      if (Document) {
                          console.log('Document: ', Document);
                          documentDetails['Image_Path'] = Document[documentId];
                        }else{
                            documentDetails['Image_Path'] = null;
                        }
                        
                    }
                });
                                
                
                
           
                this.Status_Change_Data_.process_document_Data = this.process_document_Data;
                this.Status_Change_Data_.process_document_Data = this.process_document_Data.filter(doc => doc.Image_Path !== null);
debugger
                console.log('this.Status_Change_Data_.process_document_Data: ', this.Status_Change_Data_);
                // Execute your function after the loop and uploads are done
                this.Student_Service_.Save_Lodgemet({
                    ...this.Status_Change_Data_,
                    details: this.selectedApplicationsIdDetails,
                    duration:this.ApplicationDetails_.Department_Status_Duration,
                  }).subscribe(
                    (Save_status) => {
                        
                        debugger 
                        if (Number(Save_status[0].value1[0].Application_details_Id_) > 0) {
        
                            
        
                            if (Number(Save_status[0].value1[0].Activation_Status_) == 1)
                            {
                                this.Activate_Application(this.Status_Change_Data_, 0)
                            }

debugger
                            if (Save_status[0].value2.length > 0) {
                                for (let i = 0; i < Save_status[0].value2.length; i++) {
                                    if (Save_status[0].value2[i].Student_Task_Id > 0) {
                                        var message1 = {
                                            Student_Name: Save_status[0].value2[i].Student_Name_,
                                            From_User_Name: Save_status[0].value2[i].From_User_Name_,
                                            Status_Name: Save_status[0].value2[i].Status_Name_,
                                            Task_Item_Name: Save_status[0].value2[i].Task_Item_Name_,
                                            To_User: Save_status[0].value2[i].To_User_,
                                            Notification_Id: Save_status[0].value2[i].Notification_Id_,
                                            Student_Id: Save_status[0].value2[i].Student_Id_,
                                        };
                                        this.socket.emit("new-message", message1);
                                    }
                                }
                            }
                            // if (Save_status[0].value2[0].Student_Task_Id > 0  )
							// 	{
							// 		var message = {
							// 			Student_Name: Save_status[0].value2[0].Student_Name_,
							// 			From_User_Name: Save_status[0].value2[0].From_User_Name_,
							// 			Status_Name: Save_status[0].value2[0].Status_Name_,
							// 			Task_Item_Name: Save_status[0].value2[0].Task_Item_Name_,
										
							// 			To_User: Save_status[0].value2[0].To_User_,
							// 			Notification_Id: Save_status[0].value2[0].Notification_Id_,
							// 			Student_Id: Save_status[0].value2[0].Student_Id_,
							// 		};
							// 		this.socket.emit("new-message", message);	
							// 	}


                            if (Save_status[0].value1[0].Transferdept_Tik_ == 0  )
								{
									const dialogRef = this.dialogBox.open(DialogBox_Component, {
										panelClass: "Dialogbox-Class",
										data: { Message: "Saved", Type: "false" },
									});
								}
	
								else if (Save_status[0].value1[0].Transferdept_Tik_ ==1 && Number(Save_status[0].value4[0].Student_Task_Id_) != -1) {
									this.To_Username_Popup=Save_status[0].value4[0].ToUser_Name_
									debugger
									if (this.To_Username_Popup!= null) {
							
										const dialogRef = this.dialogBox.open(DialogBox_Component, {
											panelClass: "Dialogbox-Class",
											data: { Message: "Transferred To " +this.To_Username_Popup, Type: "false" },
										});
									  } else {
										const dialogRef = this.dialogBox.open(DialogBox_Component, {
											panelClass: "Dialogbox-Class",
											data: { Message: "No user found to transfer .", Type: "2" },
										});
									
										// console.error("No user found to transfer to.");
									  }
									
									var message = {
										Student_Name: Save_status[0].value4[0].Student_Name_,
										From_User_Name: Save_status[0].value4[0].From_User_Name_,
										Status_Name: Save_status[0].value4[0].Status_Name_,
										Task_Item_Name: Save_status[0].value4[0].Task_Item_Name_,
										Task_Details: Save_status[0].value4[0].Task_Details_,
										Remark: Save_status[0].value4[0].Remark_,
										
										Notification_Type_Name: Save_status[0].value4[0].Notification_Type_Name_,
										Entry_Type: Save_status[0].value4[0].Entry_Type_,
										To_User: Save_status[0].value4[0].User_Id_,
										Notification_Id: Save_status[0].value4[0].Notification_Id_,
										Student_Id: Save_status[0].value4[0].Student_Id_,
									};
									this.socket.emit("new-message", message);	
					
								}

								this.issLoading = false;
								 this.showIntakeYearDiv=false;
							this.clearIntakeYearDiv();
								this.Search_Application_List();
                            
                        }
        
        
                        else if (Number(Save_status[0].value1[0].Application_details_Id_) == -1) {
                            
                            const dialogRef = this.dialogBox.open(DialogBox_Component, {
                                panelClass: "Dialogbox-Class",
                                data: {
                                    Message:
                                        " Selected status only used with Enrolled Student",
                                    Type: "3",
                                },
                            });
                            this.issLoading = false;
                            return;
                        } 
        
                        this.ImageFile_Doc=[]
                        // this.Total_Rows = this.Total_Rows - this.Student_Data.length;
                        // this.Search_Student();
                        this.Conditions_Sub_Data=[];
                        // this.Get_ApplicationDetails();
                        // this.Clr_Bph_Status();
                        
                        this.Clr_Bph_Status();
                        this.Close_Click_Change_Status()
                        // this.Close_Click();
                        // this.Search_Student();
                        // this.Search_Lead_button();
                        this.Transfer_app_Status_Id = Save_status[0].value1[0].Application_Status_Id_;
                        this.Transfer_app_Student_Id = Save_status[0].value1[0].Student_Id_;
                        this.Transfer_app_Department_Id = Save_status[0].value1[0].Transfer_department_;
                        this.Transfer_app_Status_Name = Save_status[0].value1[0].Application_Status_Name_;
                        this.Application_Id_Ref_ = Save_status[0].value1[0].Application_details_Id_;
                        //&& this.Application_Id_Ref_>0
        
                        // if (Save_status[0].value1[0].Transferdept_Tik_ == 1  ) {
                        //     this.Transfer_Cofirmation_Application("");
                        // } else if (Save_status[0].value1[0].Notification_Tik_ == 1) {
                        //     if (Number(this.Login_User != Save_status[0].value1[0].To_User_)) {
                        //         var message = {
                        //             Student_Name: Save_status[0].value1[0].Student_Name_,
                        //             From_User_Name: Save_status[0].value1[0].From_User_Name_,
                        //             Notification_Type_Name: Save_status[0].Notification_Type_Name_,
                        //             Entry_Type: Save_status[0].value1[0].Entry_Type_,
                        //             To_User: Save_status[0].value1[0].To_User_,
                        //             Notification_Id: Save_status[0].value1[0].Notification_Id_,
                        //             Student_Id: Save_status[0].value1[0].Student_Id_,
                        //         };
                        //         this.socket.emit("new-message", message);
                        //     }
                        // }



                        if (Number(Save_status[0].value2[0].Student_Task_Id_) == -1) {  

                            const dialogRef = this.dialogBox.open(DialogBox_Component, {
                                panelClass: "Dialogbox-Class",
                                data: { Message: "Error in Task Save", Type: "2" },
                            });
                        
                    }

                    if (Number(Save_status[0].value3[0].Student_Task_Id_) == -1) {  

                        const dialogRef = this.dialogBox.open(DialogBox_Component, {
                            panelClass: "Dialogbox-Class",
                            data: { Message: "Error in Notification Save", Type: "2" },
                        });
                    
                }

				if (Number(Save_status[0].value4[0].Student_Task_Id_) == -1) {  

					const dialogRef = this.dialogBox.open(DialogBox_Component, {
						panelClass: "Dialogbox-Class",
						data: { Message: "Error in Transfer", Type: "2" },
					});
				
			}

this.showIntakeYearDiv = false;
                        // this.Get_ApplicationDetails();
                        // this.Search_Application_List();
                        this.issLoading = false;
                    },
                    (Rows) => {
                        this.issLoading = false;
                        const dialogRef = this.dialogBox.open(DialogBox_Component, {
                            panelClass: "Dialogbox-Class",
                            data: { Message: "Error Occured", Type: "2" },
                        });
                    }
                );          })
            .catch((error) => {
                // Handle any errors in uploads
                console.error("Error in one or more uploads: ", error);
            });
        
        
        
        
    
    }



	Save_Application_Change_User() {
        var empty_data=false;
    

		if (
			this.FollowUp_Branch_ == null ||
			this.FollowUp_Branch_ == undefined ||
			this.FollowUp_Branch_.Branch_Id == undefined ||
			this.FollowUp_Branch_.Branch_Id == null
		) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "select Branch", Type: "3" },
			});
			return;
		}


		if (
			this.FollowUp_Department_ == null ||
			this.FollowUp_Department_ == undefined ||
			this.FollowUp_Department_.Department_Id == undefined ||
			this.FollowUp_Department_.Department_Id == null
		) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Select Department", Type: "3" },
			});
			return;
		}

		if (
			this.Followup_Users_List_ == null ||
			this.Followup_Users_List_ == undefined ||
			this.Followup_Users_List_.User_Details_Id == undefined ||
			this.Followup_Users_List_.User_Details_Id == null
		) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Select To User", Type: "3" },
			});
			return;
		}



        
        this.Status_Change_Data_.Application_details_Id = this.Application_Id_Log;
        this.Status_Change_Data_.LoginUser = Number(this.Login_User);


        // this.Status_Change_Data_.Application_status_Id =
        //     this.Department_Status_Mode1_.Department_Status_Id;
        // this.Status_Change_Data_.Application_Status_Name =
        //     this.Department_Status_Mode1_.Department_Status_Name;
debugger
			this.Status_Change_Data_.Department_Id =this.FollowUp_Department_.Department_Id;
        this.Status_Change_Data_.Department_Name =this.FollowUp_Department_.Department_Name;

		this.Status_Change_Data_.To_User_Id =this.Followup_Users_List_.User_Details_Id;
        this.Status_Change_Data_.To_User_Name =this.Followup_Users_List_.User_Details_Name;


        this.Status_Change_Data_.Agent_Id = this.Agent_Mode_.Agent_Id;
        this.Status_Change_Data_.Application_No =
            this.ApplicationDetails_.Application_No;
        this.Status_Change_Data_.Agent_Name = this.Agent_Mode_.Agent_Name;
        this.Status_Change_Data_.Offerletter_Type_Id =
            this.Offerletter_Type_.Offerletter_Type_Id;
        this.Status_Change_Data_.Offerletter_Type_Name =
            this.Offerletter_Type_.Offerletter_Type_Name;

            this.Status_Change_Data_.Remark =
            this.ApplicationDetails_.Bph_Remark

            
            this.Status_Change_Data_.Student_Id=this.Student_Id;
       
            
            
            this.issLoading = true;
                           
debugger
                this.Student_Service_.Save_Application_Change_User({
                    ...this.Status_Change_Data_,
                    details: this.selectedApplicationsIdDetails,
                    duration:this.ApplicationDetails_.Department_Status_Duration,
                  }).subscribe(
                    (Save_status) => {
                        
                        debugger 
                        if (Number(Save_status[0].value1[0].Application_details_Id_) > 0) {
        


                                const dialogRef = this.dialogBox.open(DialogBox_Component, {
                                    panelClass: "Dialogbox-Class",
                                    data: { Message: "Saved", Type: "false" },
                                });

                            
                        }



                        this.Clr_Bph_Status();
                        this.Close_Click_Change_Status()

                    },
                    (Rows) => {
                        this.issLoading = false;
                        const dialogRef = this.dialogBox.open(DialogBox_Component, {
                            panelClass: "Dialogbox-Class",
                            data: { Message: "Error Occured", Type: "2" },
                        });
                    }
                // );         
			 )
        
        
        
        
        
    
    }


	Get_Lead_Load_Data_ByUser(Login_User) {
		this.issLoading = true;
		this.Student_Service_.Get_Lead_Load_Data_ByUser(Login_User).subscribe(
			(Rows) => {

				this.Department_Drop_Data = Rows[10].slice();
				this.Department_Data_C_Temp.Department_Id = 0;
				this.Department_Data_C_Temp.Department_Name = "All";
				this.Department_Drop_Data.unshift(this.Department_Data_C_Temp);
				this.Request_Department_Grid_=Object.assign({}, this.Department_Data_C_Temp);
				this.Request_Department_Grid_ = this.Department_Drop_Data[0];

				
				this.Users_Data1 = Rows[18].slice();
				this.Users_Temp1.User_Details_Id = 0;
				this.Users_Temp1.User_Details_Name = "All";
				this.Users_Data1.unshift(Object.assign({},this.Users_Temp1));
				this.User_Search = this.Users_Data1[0];
				this.To_User_Search= this.Users_Data1[0];


				  this.Agent_Data1 = Rows[11].slice();
	  console.log('this.Agent_Data1: ', this.Agent_Data1);
   this.Agent_Temp1.User_Details_Id = 0;
   this.Agent_Temp1.User_Details_Name = "All";
   this.Agent_Data1.unshift(Object.assign({},this.Agent_Temp1));
//    this.User_Search = this.Agent_Data1[0];
   this.Created_User_Search= this.Agent_Data1[0];

			},
			(Rows) => {
				const dialogRef = this.dialogBox.open(DialogBox_Component, {
					panelClass: "Dialogbox-Class",
					data: { Message: "Error Occured", Type: "2" },
				});
			}
		);
	}


	Edit_Lead(Lead_Id, i) {
		localStorage.setItem("Student_Id", Lead_Id);

		this.Edit_Page_Permission = Get_Page_Permission(5);
		console.log('		this.Edit_Page_Permission : ', 		this.Edit_Page_Permission );
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
	createTaskByProcessOfStatus() {
		// Call the function to send request to create task according to the status changed
		this.Student_Service_.Save_CAS_NewTask_Followup_By_Process_ID({
		  ...this.taskCreationData,
		  status: {
			Department_Status_Id: this.taskCreationData.Department_Status_Id,
		  },
		}).subscribe(
		  (Save_work_experience) => {
			;
			Save_work_experience = Save_work_experience[0];
			if (Number(Save_work_experience[0].Student_Task_Id_) > 0) {
			  this.Save_Call_Status = false;
	
			  //  }
			} else {
			}
			this.issLoading = false;
		  },
		  (Rows) => {
			this.issLoading = false;
			// const dialogRef = this.dialogBox.open(DialogBox_Component, {
			//   panelClass: "Dialogbox-Class",
			//   data: { Message: Rows.error.error, Type: "2" },
			// });
		  }
		);
	  }


	Activate_Application(Application_details_a: any, index) {
		
		// this.ApplicationDetails_.Student_Id=this.Student_.Student_Id;
		var loginuser = 0;
		loginuser = Number(this.Login_User);
		Application_details_a.LoginUser = loginuser;
		// const dialogRef = this.dialogBox.open(DialogBox_Component, {
		// 	panelClass: "Dialogbox-Class",
		// 	data: {
		// 		Message: "Do you want to Activate ?",
		// 		Type: true,
		// 		Heading: "Confirm",
		// 	},
		// });
		// dialogRef.afterClosed().subscribe((result) => {
		// 	if (result == "Yes") {
				this.issLoading = true;

				this.Student_Service_.Activate_Application(
					Application_details_a
				).subscribe(
					(Save_status) => {
						if (Number(Save_status[0][0].Application_details_Id_) > 0) {
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
								data: { Message: "Activated", Type: "false" },
							});
							// this.Total_Rows = this.Total_Rows - this.Student_Data.length;
							// this.Search_Student();

							this.Search_Application_List();
							if (Number(this.Login_User) != Save_status[0][0].To_User_) {
								var message = {
									Student_Name: Save_status[0][0].Student_Name_,
									From_User_Name: Save_status[0][0].From_User_Name_,
									Notification_Type_Name:
										Save_status[0][0].Notification_Type_Name_,
									Entry_Type: Save_status[0][0].Entry_Type_,
									To_User: Save_status[0][0].To_User_,
									Notification_Id: Save_status[0][0].Notification_Id_,
									Student_Id: Save_status[0][0].Student_Id_,
								};
								this.socket.emit("new-message", message);
							}
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

	Load_OfferLetter_Type() {
		this.issLoading = true;
		this.Student_Service_.Load_OfferLetter_Type().subscribe(
			(Rows) => {
				if (Rows != null) {
					this.Offerletter_Type_Data = Rows[0].slice();
					this.Offerletter_Type_Temp.Offerletter_Type_Id = 0;
					this.Offerletter_Type_Temp.Offerletter_Type_Name = "Select";
					this.Offerletter_Type_Data.unshift(
						Object.assign({}, this.Offerletter_Type_Temp)
					);
					this.Offerletter_Type_ = this.Offerletter_Type_Data[0];
					this.issLoading = false;
				}
			},
			(Rows) => {
				this.issLoading = false;
			}
		);
	}

	Load_Agents() {
		this.issLoading = true;
		this.Student_Service_.Load_Agents().subscribe(
			(Rows) => {
				if (Rows != null) {
					this.Agent_Mode_Data = Rows[0].slice();
					this.Agent_Mode_Temp.Agent_Id = 0;
					this.Agent_Mode_Temp.Agent_Name = "Select";
					this.Agent_Mode_Data.unshift(Object.assign({}, this.Agent_Mode_Temp));
					this.Agent_Mode_ = this.Agent_Mode_Data[0];
					this.issLoading = false;
				}
			},
			(Rows) => {
				this.issLoading = false;
			}
		);
	}

	Clr_conditionssub() {
		this.Conditions_Sub.Conditions_Id = 0;

		if (
			this.Offerletter_Type_Data != undefined &&
			this.Offerletter_Type_Data != null
		)
			this.Offerletter_Type_ = this.Offerletter_Type_Data[0];
	}

	Delete_Conditionssub(Conditions_Sub: Conditions, index) {
		this.Conditions_Sub_Data.splice(index, 1);
		this.Clr_conditionssub();
	}

	Edit_Conditins_Sub(Conditions_e: Conditions, index) {
		this.Conditions_Sub_Index = index;
		this.Conditions_Sub = Object.assign({}, Conditions_e);

		for (var i = 0; i < this.Offerletter_Type_Data.length; i++) {
			if (
				this.Offerletter_Type_Data[i].Offerletter_Type_Id ==
				this.ApplicationDetails_.Offerletter_Type_Id
			) {
				this.Offerletter_Type_ = this.Offerletter_Type_Data[i];
			}
		}
	}

	Plus_Conditions(event) {
			if (
			this.Application_Offerchasing_permission != undefined &&
			this.Application_Offerchasing_permission != null
		) {
			if (
				this.Offerletter_Type_.Offerletter_Type_Id == undefined ||
				this.Offerletter_Type_.Offerletter_Type_Id == null ||
				this.Offerletter_Type_.Offerletter_Type_Id == 0
			) {
				const dialogRef = this.dialogBox.open(DialogBox_Component, {
					panelClass: "Dialogbox-Class",
					data: { Message: "Select Offer Type", Type: "3" },
				});
				return;
			}
			}
		if (
			this.Offerletter_Type_.Offerletter_Type_Id != undefined ||
			this.Offerletter_Type_.Offerletter_Type_Id != null ||
			this.Offerletter_Type_.Offerletter_Type_Id != 0 
		) {
			
			if(this.Conditions_Sub.Conditions_Name==undefined || this.Conditions_Sub.Conditions_Name==null || this.Conditions_Sub.Conditions_Name=='' ){
				const dialogRef = this.dialogBox.open(DialogBox_Component, {
					panelClass: "Dialogbox-Class",
					data: { Message: "Enter Conditions", Type: "3" },
				});
				return;
			}
			
		}
		this.ApplicationDetails_.Offerletter_Type_Id =
			this.Offerletter_Type_.Offerletter_Type_Id;
		this.ApplicationDetails_.Offerletter_Type_Name =
			this.Offerletter_Type_.Offerletter_Type_Name;
		if (this.Conditions_Sub_Data == undefined) this.Conditions_Sub_Data = [];

		if (this.Conditions_Sub_Index >= 0) {
			this.Conditions_Sub_Data[this.Conditions_Sub_Index] = Object.assign(
				{},
				this.Conditions_Sub
			);
		} else {
			this.Conditions_Sub_Data.push(Object.assign({}, this.Conditions_Sub));
		}
		this.Conditions_Sub_Index = -1;

		this.Conditions_Sub.Conditions_Name=null
		this.Clr_conditionssub()


	}

	Save_Offerchasingdetails() {
		this.issLoading = true;

		this.ApplicationDetails_.Conditions = this.Conditions_Sub_Data;

		this.ApplicationDetails_.User_Id = Number(this.Login_User);

		this.Student_Service_.Save_Offerchasingdetails(
			this.ApplicationDetails_
		).subscribe(
			(Save_status) => {
				// Save_status=Save_status[0];
				if (Number(Save_status[0][0].Application_details_Id_) > 0) {
					const dialogRef = this.dialogBox.open(DialogBox_Component, {
						panelClass: "Dialogbox-Class",
						data: { Message: "Saved", Type: "false" },
					});
					// this.Close_Click();
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

	Transfer_Cofirmation(Transfer_Source) {
		
		this.issLoading = true;

		this.Student_Service_.Transfer_Cofirmation(
			this.Transfer_app_Student_Id,
			"undefined",
			this.Login_User,
			this.Transfer_app_Department_Id,
			"undefined",
			this.Transfer_app_Status_Id,
			this.Transfer_app_Status_Name,
			this.Status_Change_Data_.Followup_Date,
			0,
			"undefined",
			this.Application_Id_Ref_
		).subscribe(
			(Save_status) => {
				
				if (Number(this.Login_User) != Save_status[0][0].User_Id_) {
					var message = {
						Student_Name: Save_status[0][0].Student_Name_,
						From_User_Name: Save_status[0][0].From_User_Name_,
						Notification_Type_Name: Save_status[0][0].Notification_Type_Name_,
						Entry_Type: Save_status[0][0].Entry_Type_,
						To_User: Save_status[0][0].User_Id_,
						Notification_Id: Save_status[0][0].Notification_Id_,
						Student_Id: Save_status[0][0].Student_Id_,
					};
					this.socket.emit("new-message", message);
				}
				this.Search_Application_List();
				if (Save_status[0][0].Student_Id_ == -1) {					
					const dialogRef = this.dialogBox.open(DialogBox_Component, {
						panelClass: "Dialogbox-Class",
						data: { Message: "User Not Found", Type: "3" },
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

	View_Conditions(application_details_u: any, i) {
		
		this.conditions_appid = application_details_u.Application_details_Id;
		this.Viewconditions_View = true;
		this.Offtertype_View = false;
		this.Change_Status_View = false;
		this.Search_Div = false;




		this.Search_Conditions();
	}

	Search_Conditions() {
		this.issLoading = true;
		
		this.Student_Service_.Search_Conditions(this.conditions_appid).subscribe(
			(Rows) => {
				
				this.Conditions_Search_Data = Rows[0];


				for(var j=0;j<this.Conditions_Search_Data.length;j++)
            {
            if (this.Conditions_Search_Data[j].Completed==true)
            this.Conditions_Search_Data[j].Completed= true;  
            else
            this.Conditions_Search_Data[j].Completed= false;}


			

				// this.condition_viewId=this.Conditions_Search_Data [0].Conditions_Id
				this.Total_Data = this.Conditions_Search_Data.length;

				this.issLoading = false;
				// if (this.Conditions_Search_Data.length == 0) {
				// 	// const dialogRef = this.dialogBox.open(DialogBox_Component, {
				// 	// 	panelClass: "Dialogbox-Class",
				// 	// 	data: { Message: "No Details Found", Type: "3" },
				// 	// });
				// }
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

	Save_Viewconditions() {
		this.issLoading = true;
		


		for(var j=0;j<this.Conditions_Search_Data.length;j++)
		{
		if (this.Conditions_Search_Data[j].Condition_Remark==null || this.Conditions_Search_Data[j].Condition_Remark==undefined)
		{
			this.Conditions_Search_Data[j].Condition_Remark= "";  
		}
	}
		

		this.Student_Service_.Save_Viewconditions(
			this.Conditions_Search_Data
		).subscribe(
			
			(Save_status) => {
				
				Save_status = Save_status[0];

				if (Number(Save_status[0].Conditions_Id_) > 0) {
					const dialogRef = this.dialogBox.open(DialogBox_Component, {
						panelClass: "Dialogbox-Class",
						data: { Message: "Saved", Type: "false" },
					});

					this.Close_Click_Change_Status();


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

	Create_New_Company()
{
    this.router.navigateByUrl('Employer_Details');
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
			
		
			//  this.router.navigateByUrl('/Student');
			// window.open('/Student');
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


	// Load_Status_Dropdown() {
	// 	this.issLoading = true;
	// 	this.Department_Service_.Load_Status_Dropdown().subscribe(
	// 	  (Rows) => {
	// 		if (Rows != null) {
	// 			
	// 		  this.Department_Status_Dropdown_Data = Rows[0];
	// 		  this.Department_Status_Dropdown_Temp.Department_Status_Id = 0;
	// 		  this.Department_Status_Dropdown_Temp.Department_Status_Name = "Select";
	// 		  this.Department_Status_Dropdown_Data.unshift(this.Department_Status_Dropdown_Temp);
	  
	// 		  this.Department_Status_Dropdown_ = this.Department_Status_Dropdown_Data[0];
	// 		  this.issLoading = false;
	// 		}
	// 	  },
	// 	  (Rows) => {
	// 		this.issLoading = false;
	// 	  }
	// 	);
	//   }



	  Load_Status_Dropdown() {
		this.issLoading = true;
		
		this.Country_Service_.Search_Application_StatusforChangeStatus_Typeahead('',this.Login_User,this.selectedApplicationsIdDetails,this.Student_Id).subscribe(
		  (Rows) => {
			if (Rows != null) {
				
			  this.Department_Status_Dropdown_Data = Rows[0];
			  this.Department_Status_Dropdown_Temp.Department_Status_Id = 0;
			  this.Department_Status_Dropdown_Temp.Department_Status_Name = "Select";
			  this.Department_Status_Dropdown_Data.unshift(this.Department_Status_Dropdown_Temp);
	  
			  this.Department_Status_Dropdown_ = this.Department_Status_Dropdown_Data[0];
			  this.issLoading = false;
			}
		  },
		  (Rows) => {
			this.issLoading = false;
		  }
		);
	  }

	  onUniversityChange(){
		
		this.Course_=null;
		this.Course_Data = [];
		this.Course_Data_Filter=[];
	}
	  onCourseChange() {
		
		// Get the selected course object
		this.Intake_Mode_Data_Filter=[]
		
		this.Intake_Service_.getIntakeByCourse(this.Course_.Course_Id).subscribe(
			(intakeData) => {
				
				this.Intake_Mode_Data_Filter = intakeData[0];
				console.log('Intake_Mode_Data:', this.Intake_Mode_Data_Filter);

				
			},
			(error) => {
				console.error('Error fetching intake data:', error);
			}
		);
	  
		// Call a function to fetch intake based on the selected course

	  }

	  Create_Application() {
		this.Applicationmodal_View = true;
		this.Search_Div = false;
		this.ApplicationDetails_.Offer_Received = false;
		this.ApplicationDetails_.Feespaymentcheck = false;

		this.ApplicationDetails_.Duration_Id = 0;
		// this.closei();
	}


	  Edit_ApplicationDetails(Applicationdetails_e: any, index) {

		
		let top = document.getElementById("Topdiv");
		if (top !== null) {
			top.scrollIntoView();
			top = null;
		}
		this.Create_Application();

		

		// this.Clr_ApplicationDetails();
		// this.ApplicationDetails_=Applicationdetails_e
		// this.ApplicationDetails_ = Object.assign({},Applicationdetails_e);

		// this.Student_Service_.Get_ApplicationDetails(this.Student_.Student_Id).subscribe(Rows =>{
		//  this.ApplicationDetails_= Object.assign({},Rows[0][0]);

		this.ApplicationDetails_ = Applicationdetails_e;

		this.ApplicationDetails_ = Object.assign({}, Applicationdetails_e);
		this.Save_Student_Approved_Status =
			Applicationdetails_e.Student_Approved_Status;
		this.Bph_Approved_Status = Applicationdetails_e.Bph_Approved_Status;
		this.Old_Application_Status_Id =
			this.ApplicationDetails_.Application_status_Id;

			if(this.ApplicationDetails_.To_User_Id != this.Login_User_Id )
		{
			this.Edit_save_button_view =false;
		}

		if (
			this.ApplicationDetails_.Duration_Id == 0 ||
			this.ApplicationDetails_.Duration_Id == null
		) {
			this.Duration_Id = 0;
		} else this.Duration_Id = this.ApplicationDetails_.Duration_Id;



		if(this.ApplicationDetails_.Course_Link !="" && this.ApplicationDetails_.Course_Link !=null && this.ApplicationDetails_.Course_Link !=undefined )
		{
			this.Course_Link_Button=true;
		}

		if (this.ApplicationDetails_.Application_Source == 0) {
			this.ApplicationDetails_.Course_Id = 0;
			this.ApplicationDetails_.University_Id = 0;
		}

		if (this.ApplicationDetails_.Feespaymentcheck.toString() == "1")
			this.ApplicationDetails_.Feespaymentcheck = true;
		else this.ApplicationDetails_.Feespaymentcheck = false;
		if (this.ApplicationDetails_.Fees_Payment_Last_Date == null) {
			this.ApplicationDetails_.Fees_Payment_Last_Date = new Date();
			this.ApplicationDetails_.Fees_Payment_Last_Date = this.New_Date(
				this.ApplicationDetails_.Fees_Payment_Last_Date
			);
		} else
			this.ApplicationDetails_.Fees_Payment_Last_Date = this.New_Date(
				new Date(
					moment(this.ApplicationDetails_.Fees_Payment_Last_Date).format(
						"YYYY-MM-DD"
					)
				)
			);

		if (this.ApplicationDetails_.Offer_Received.toString() == "1")
			this.ApplicationDetails_.Offer_Received = true;
		else this.ApplicationDetails_.Offer_Received = false;

		if (this.ApplicationDetails_.Date_Of_Applying == null) {
			this.ApplicationDetails_.Date_Of_Applying = new Date();
			this.ApplicationDetails_.Date_Of_Applying = this.New_Date(
				this.ApplicationDetails_.Date_Of_Applying
			);
		} else
			this.ApplicationDetails_.Date_Of_Applying = this.New_Date(
				new Date(
					moment(this.ApplicationDetails_.Date_Of_Applying).format("YYYY-MM-DD")
				)
			);

		if (this.ApplicationDetails_.Fees_Payment_Last_Date == null) {
			this.ApplicationDetails_.Fees_Payment_Last_Date = new Date();
			this.ApplicationDetails_.Fees_Payment_Last_Date = this.New_Date(
				this.ApplicationDetails_.Fees_Payment_Last_Date
			);
		} else
			this.ApplicationDetails_.Fees_Payment_Last_Date = this.New_Date(
				new Date(
					moment(this.ApplicationDetails_.Fees_Payment_Last_Date).format(
						"YYYY-MM-DD"
					)
				)
			);

		for (var i = 0; i < this.Agent_Mode_Data.length; i++) {
			if (this.ApplicationDetails_.Agent_Id == this.Agent_Mode_Data[i].Agent_Id)
				this.Agent_Mode_ = this.Agent_Mode_Data[i];
		}

		this.Country_Temp.Country_Id = this.ApplicationDetails_.Country_Id;
		this.Country_Temp.Country_Name = this.ApplicationDetails_.Country_Name;
		this.Application_Country_ = Object.assign({}, this.Country_Temp);
		
		// for (var i = 0; i < this.Application_Status_Mode_Data.length; i++) {
		// 	if (
		// 		this.ApplicationDetails_.Application_status_Id ==
		// 		this.Application_Status_Mode_Data[i].Application_status_Id
		// 	)
		// 		this.Application_Status_Mode_ = this.Application_Status_Mode_Data[i];
		// }
		this.Intake_Service_.getIntakeByCourse(Applicationdetails_e.Course_Id).subscribe(
			(intakeData) => {
				
				this.Intake_Mode_Data_Filter = intakeData[0];
				console.log('Intake_Mode_Data:', this.Intake_Mode_Data_Filter);
				for (let i = 0; i < this.Intake_Mode_Data_Filter.length; i++) {
					if (this.ApplicationDetails_.intake_Id == this.Intake_Mode_Data_Filter[i].Intake_Id) {
						this.Intake_Mode_ = this.Intake_Mode_Data_Filter[i];
					   }}
				
			},
			(error) => {
				console.error('Error fetching intake data:', error);
			}
		);
		for (var i = 0; i < this.Intake_Mode_Data.length; i++) {
			if (
				this.ApplicationDetails_.intake_Id == this.Intake_Mode_Data[i].Intake_Id
			)
				this.Intake_Mode_ = this.Intake_Mode_Data[i];
		}
		for (var i = 0; i < this.Intake_Year_Mode_Data.length; i++) {
			if (
				this.ApplicationDetails_.Intake_Year_Id ==
				this.Intake_Year_Mode_Data[i].Intake_Year_Id
			)
				this.Intake_Year_Mode_ = this.Intake_Year_Mode_Data[i];
		}

		

		this.University_Temp.University_Id = this.ApplicationDetails_.University_Id;
		this.University_Temp.University_Name =
			this.ApplicationDetails_.University_Name;
		this.University_1 = Object.assign({}, this.University_Temp);

		this.Course_Temp.Course_Id = this.ApplicationDetails_.Course_Id;
		this.Course_Temp.Course_Name = this.ApplicationDetails_.Course_Name;
		this.Course_ = Object.assign({}, this.Course_Temp);

		//
		// this.Document_Array= Rows[1];
		// this.Document_File_Array=[];
		// for(var i=0;i<this.Document_Array.length;i++)
		// this.Document_File_Array.push('')

		// this.Get_Application_DocumentList(
		// 	this.ApplicationDetails_.Application_details_Id
		// );

		// this.Activte_Visiblility = false;
		// this.Remove_Activte_Visiblility = false;

		// if (this.ApplicationDetails_.Activation_Status == true) {
		// 	if (
		// 		this.Remove_Activity_Permissions != undefined &&
		// 		this.Remove_Activity_Permissions != null
		// 	)
		// 		if (this.Remove_Activity_Permissions.View == true)
		// 			this.Remove_Activte_Visiblility = true;
		// } else {
		// 	if (
		// 		this.Activity_Permissions != undefined &&
		// 		this.Activity_Permissions != null
		// 	)
		// 		if (this.Activity_Permissions.View == true)
		// 			this.Activte_Visiblility = true;
		// }

		// this.issLoading = false;
		// } ,
		// Rows => {
		// this.issLoading = false;
		// const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
		// });
		//  this.Get_ApplicationDetails();

		// this.Get_ApplicationDetailswise_History(this.ApplicationDetails_.Application_details_Id);
	}


	Close_Application() {
		this.Applicationmodal_View = false;
		this.Edit_save_button_view=true
		this.Search_Div = true;
		this.Clr_ApplicationDetails();
	}

	Clr_ApplicationDetails() {
		this.ApplicationDetails_.User_Id = 0;
		this.ApplicationDetails_.Student_Id = 0;
		this.ApplicationDetails_.Application_details_Id = 0;
		this.ApplicationDetails_.Date_Of_Applying = new Date();
		this.ApplicationDetails_.Date_Of_Applying = this.New_Date(
			this.ApplicationDetails_.Date_Of_Applying
		);
		this.ApplicationDetails_.Fees_Payment_Last_Date = new Date();
		this.ApplicationDetails_.Fees_Payment_Last_Date = this.New_Date(
			this.ApplicationDetails_.Fees_Payment_Last_Date
		);
		this.ApplicationDetails_.Remark = "";
		this.ApplicationDetails_.Course_Link="";
		this.Course_Link_Button=false;

		this.ApplicationDetails_.Living_Expense = "";
		this.ApplicationDetails_.Preference = "";
		this.ApplicationDetails_.Course_Fee = "";
		this.Save_Student_Approved_Status = 0;
		this.Bph_Approved_Status = 1;

		this.ApplicationDetails_.Feespaymentcheck = false;
		this.ApplicationDetails_.Offer_Received = false;
		this.ApplicationDetails_.Portal_User_Name = "";
		this.ApplicationDetails_.Password = "";
		this.Duration_Id = 0;

		this.ApplicationDetails_.Offer_Student_Id = "";

		this.ApplicationDetails_.Application_No = "";
		this.ApplicationDetails_.Student_Reference_Id = "";
		// this.ApplicationDocument_Array = [];
		// this.ImageFile_Application = [];
		// this.ApplicationDocument_File_Array = [];
		this.Application_Country_ = null;
		this.University_1 = null;
		this.Course_ = null;
		if (this.Intake_Mode_Data != null && this.Intake_Mode_Data != undefined)
			this.Intake_Mode_ = this.Intake_Mode_Data[0];
		if (
			this.Intake_Year_Mode_Data != null &&
			this.Intake_Year_Mode_Data != undefined
		)
			this.Intake_Year_Mode_ = this.Intake_Year_Mode_Data[0];
		if (this.Agent_Mode_Data != null && this.Agent_Mode_Data != undefined)
			this.Agent_Mode_ = this.Agent_Mode_Data[0];
		if (
			this.Application_Status_Mode_Data != null &&
			this.Application_Status_Mode_Data != undefined
		)
			this.Application_Status_Mode_ = this.Application_Status_Mode_Data[0];
		// this.ApplicationDocument_Description = "";
		// this.Display_ApplicationFile_ = "";
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

	
	
	Search_University_Typeahead(event: any) {
		var Value = "";
		if (event.target.value == "") Value = "";
		else Value = event.target.value.toLowerCase();
		
		if (this.University_Data == undefined || this.University_Data.length == 0) {
			this.issLoading = true;
			this.University_Service_.Search_University_Typeahead(Value).subscribe(
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
	// display_University_1(University_e: University) {
	// 	if (University_e) {
	// 		return University_e.University_Name;
	// 	}
	// }



	
	Search_University_Typeahead_Country(event: any) {
		debugger

		if (
			this.Application_Country_ == undefined ||
			this.Application_Country_ == null ||
			this.Application_Country_.Country_Id == undefined ||
			this.Application_Country_.Country_Id == null
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
			debugger
			this.University_Service_.Search_University_Typeahead_Country(Value,this.Application_Country_.Country_Id).subscribe(
				(Rows) => {
					debugger
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
	display_University_12(University_e: University) {
		if (University_e) {
			return University_e.University_Name;
		}
	}

	Country_Change1(){
		this.University_1=null;
		this.University_Data=[];
		this.University_Data_Filter_2=[];
		this.Course_Data_Filter=[];
		this.Department_Status_Data=[];
		this.Department_Status_Data_Filter_2 = [];
	}

	University_Change1(){
		this.Course_=null;
		this.Course_Data=[];
		this.Course_Data_Filter=[];
		this.Department_Status_Data=[];
		this.Department_Status_Data_Filter_2 = [];
		this.updateCourses(); // Add this line
	}

	Search_Status_Typeahead(event: any) {
		debugger
		let University_Ids=[];
		if (this.selectedUniversities && this.selectedUniversities.length > 0) {
			University_Ids = this.selectedUniversities.map(uni => uni.University_Id);
		} 
		if (
			!University_Ids.length && this.selectedUniversity != 'All'
		) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Select University", Type: "3" },
			});
			return;
		}


		var Value = "";
		if (event.target.value == "") Value = "";
		else Value = event.target.value.toLowerCase();

		// if (
		// 	this.University_1 == undefined ||
		// 	this.University_1 == null ||
		// 	this.University_1.University_Id == undefined ||
		// 	this.University_1.University_Id == 0
		// ) {
		// 	const dialogRef = this.dialogBox.open(DialogBox_Component, {
		// 		panelClass: "Dialogbox-Class",
		// 		data: { Message: "Select University", Type: "3" },
		// 	});
		// 	return;
		// }
		console.log('this.selectedUniversities: ', this.selectedUniversities);
		
		console.log('University_Ids: ', University_Ids);
		if (this.Department_Status_Data == undefined || this.Department_Status_Data.length == 0) {
			this.issLoading = true;
			this.University_Service_.Search_Status_Typeahead_check(Value,University_Ids).subscribe(
				(Rows) => {
					debugger
					if (Rows != null) {
						this.Department_Status_Data = Rows[0];
						this.Department_Status_Data_Filter_2 = [];
						for (var i = 0; i < this.Department_Status_Data.length; i++) {
							if (
								this.Department_Status_Data[i].Department_Status_Name.toLowerCase().includes(
									Value
								)
							)
								this.Department_Status_Data_Filter_2.push(this.Department_Status_Data[i]);
						}
					}
					this.issLoading = false;
				},
				(Rows) => {
					this.issLoading = false;
				}
			);
		} else {
			this.Department_Status_Data_Filter_2 = [];
			for (var i = 0; i < this.Department_Status_Data.length; i++) {
				if (
					this.Department_Status_Data[i].Department_Status_Name.toLowerCase().includes(Value)
				)
					this.Department_Status_Data_Filter_2.push(this.Department_Status_Data[i]);
			}
		}
	}
	display_Status_1(Department_Status_e: Department_Status) {
		if (Department_Status_e) {
			return Department_Status_e.Department_Status_Name;
		}
	}


	Search_Status_Typeahead1(event: any) {
		var Value = "";
		if (event.target.value == "") Value = "";
		else Value = event.target.value.toLowerCase();

		if (this.Department_Status_Data == undefined || this.Department_Status_Data.length == 0) {
			this.issLoading = true;
			this.University_Service_.Search_Status_Typeahead1(Value).subscribe(
				(Rows) => {
					if (Rows != null) {
						this.Department_Status_Data = Rows[0];
						this.Department_Status_Data_Filter_2 = [];
						for (var i = 0; i < this.Department_Status_Data.length; i++) {
							if (
								this.Department_Status_Data[i].Department_Status_Name.toLowerCase().includes(
									Value
								)
							)
								this.Department_Status_Data_Filter_2.push(this.Department_Status_Data[i]);
						}
					}
					this.issLoading = false;
				},
				(Rows) => {
					this.issLoading = false;
				}
			);
		} else {
			this.Department_Status_Data_Filter_2 = [];
			for (var i = 0; i < this.Department_Status_Data.length; i++) {
				if (
					this.Department_Status_Data[i].Department_Status_Name.toLowerCase().includes(Value)
				)
					this.Department_Status_Data_Filter_2.push(this.Department_Status_Data[i]);
			}
		}
	}
	display_Status_12(Department_Status_e: Department_Status) {
		if (Department_Status_e) {
			return Department_Status_e.Department_Status_Name;
		}
	}
	Search_Courses_Typeahead_University(event: any) {
		let University_Ids=[];
		if (this.selectedUniversities && this.selectedUniversities.length > 0) {
			University_Ids = this.selectedUniversities.map(uni => uni.University_Id);
		} 
		if (
			!University_Ids.length && this.selectedUniversity != 'All'
		) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Select University", Type: "3" },
			});
			return;
		}


		console.log('this.selectedUniversities: ', this.selectedUniversities);
		
		console.log('University_Ids: ', University_Ids);
		var Value = "";
		if (event.target.value == "") Value = "";
		else Value = event.target.value.toLowerCase();
		if (this.Course_Data == undefined || this.Course_Data.length == 0) {
			this.issLoading = true;
			debugger
			this.Course_Service_.Search_Courses_Typeahead_Check(Value,
				// this.University_1.University_Id
				University_Ids,).subscribe(
				(Rows) => {
					debugger
					if (Rows != null) {
						this.Course_Data = Rows[0];
						this.Course_Data_Filter = [];
						console.log('this.Course_Data: ', this.Course_Data);
						for (var i = 0; i < this.Course_Data.length; i++) {
					
							if (this.Course_Data[i].Course_Name.toLowerCase().includes(Value))
								this.Course_Data_Filter.push(this.Course_Data[i]);
						}
					}
					this.issLoading = false;
				},
				(Rows) => {
					this.issLoading = false;
				}
			);
		} else {
			this.Course_Data_Filter = [];
			for (var i = 0; i < this.Course_Data.length; i++) {
				if (this.Course_Data[i].Course_Name.toLowerCase().includes(Value))
					this.Course_Data_Filter.push(this.Course_Data[i]);
			}
		}
	}
	// display_Course_12(Course_e: Course) {
	// 	if (Course_e) {
	// 		return Course_e.Course_Name;
	// 	}
	// }


	Search_Courses_Typeahead(event: any) {
debugger
		if (
			this.Application_Country_ == undefined ||
			this.Application_Country_ == null ||
			this.Application_Country_.Country_Id == undefined ||
			this.Application_Country_.Country_Id == 0
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
		if (this.Course_Data == undefined || this.Course_Data.length == 0) {
			this.issLoading = true;

			this.Course_Service_.Search_Courses_Typeahead(Value).subscribe(
				(Rows) => {
					if (Rows != null) {
						this.Course_Data = Rows[0];
						this.Course_Data_Filter = [];
						for (var i = 0; i < this.Course_Data.length; i++) {
							if (this.Course_Data[i].Course_Name.toLowerCase().includes(Value))
								this.Course_Data_Filter.push(this.Course_Data[i]);
						}
					}
					this.issLoading = false;
				},
				(Rows) => {
					this.issLoading = false;
				}
			);
		} else {
			this.Course_Data_Filter = [];
			for (var i = 0; i < this.Course_Data.length; i++) {
				if (this.Course_Data[i].Course_Name.toLowerCase().includes(Value))
					this.Course_Data_Filter.push(this.Course_Data[i]);
			}
		}
	}
	display_Course_1(Course_e: Course) {
		if (Course_e) {
			return Course_e.Course_Name;
		}
	}



	
	Search_Courses_Typeahead_temp(event: any) {
		var Value = "";
		if (event.target.value == "") Value = "";
		else Value = event.target.value.toLowerCase();
		if (this.Course_Data == undefined || this.Course_Data.length == 0) {
			this.issLoading = true;

			this.Course_Service_.Search_Courses_Typeahead_tempp(Value,this.University_1.University_Id).subscribe(
				(Rows) => {
					if (Rows != null) {
						this.Course_Data = Rows[0];
						this.Course_Data_Filter = [];
						for (var i = 0; i < this.Course_Data.length; i++) {
							if (this.Course_Data[i].Course_Name.toLowerCase().includes(Value))
								this.Course_Data_Filter.push(this.Course_Data[i]);
						}
					}
					this.issLoading = false;
				},
				(Rows) => {
					this.issLoading = false;
				}
			);
		} else {
			this.Course_Data_Filter = [];
			for (var i = 0; i < this.Course_Data.length; i++) {
				if (this.Course_Data[i].Course_Name.toLowerCase().includes(Value))
					this.Course_Data_Filter.push(this.Course_Data[i]);
			}
		}
	}
	display_Course_1_temp(Course_e: Course) {
		if (Course_e) {
			return Course_e.Course_Name;
		}
	}



	Get_Student_PageLoadData_Dropdowns() {
		this.Student_Service_.Get_Student_PageLoadData_Dropdowns().subscribe(
			(Rows) => {

				this.Intake_Mode_Data = Rows[2].slice();
				this.Intake_Mode_Temp.Intake_Id = 0;
				this.Intake_Mode_Temp.Intake_Name = "Select";
				this.Intake_Mode_Data.unshift(Object.assign({}, this.Intake_Mode_Temp));
				this.Intake_Mode_ = this.Intake_Mode_Data[0];
				this.Intake_Search = this.Intake_Mode_Data[0];

				this.Intake_Year_Mode_Data = Rows[5].slice();
				this.Intake_Year_Mode_Temp.Intake_Year_Id = 0;
				this.Intake_Year_Mode_Temp.Intake_Year_Name = "Select";
				this.Intake_Year_Mode_Data.unshift(
					Object.assign({}, this.Intake_Year_Mode_Temp)
				);
				this.Intake_Year_Mode_ = this.Intake_Year_Mode_Data[0];
				this.Intake_Year_Search = this.Intake_Year_Mode_Data[0];

				

			},
			(Rows) => {
				const dialogRef = this.dialogBox.open(DialogBox_Component, {
					panelClass: "Dialogbox-Class",
					data: { Message: "Error Occured", Type: "2" },
				});
			}
		);
	}


	Save_ApplicationDetails_Datas() {
		
		if (
			this.Application_Country_ == undefined ||
			this.Application_Country_ == null ||
			this.Application_Country_.Country_Name == undefined
		) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Select  Country", Type: "3" },
			});
			return;
		}
		if (this.University_1 == undefined || this.University_1 == null || this.University_1.University_Name == undefined) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Select University", Type: "3" },
			});
			return;
		}
		if (this.Course_ == undefined || this.Course_ == null || this.Course_.Course_Name == undefined) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Select Course", Type: "3" },
			});
			return;
		}
		// if (this.Agent_View == true) {
		// 	if (
		// 		this.Agent_Mode_ == undefined ||
		// 		this.Agent_Mode_ == null ||
		// 		this.Agent_Mode_.Agent_Id == undefined ||
		// 		this.Agent_Mode_.Agent_Id == 0
		// 	) {
		// 		const dialogRef = this.dialogBox.open(DialogBox_Component, {
		// 			panelClass: "Dialogbox-Class",
		// 			data: { Message: "Select  Agent", Type: "3" },
		// 		});
		// 		return;
		// 	}
		// }
		if (
			this.Intake_Mode_ == undefined ||
			this.Intake_Mode_ == null ||
			this.Intake_Mode_.Intake_Id == undefined ||
			this.Intake_Mode_.Intake_Id == 0
		) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Select Intake", Type: "3" },
			});
			return;
		}

		if (
			this.Intake_Year_Mode_ == undefined ||
			this.Intake_Year_Mode_ == null ||
			this.Intake_Year_Mode_.Intake_Year_Id == undefined ||
			this.Intake_Year_Mode_.Intake_Year_Id == 0
		) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Select Year", Type: "3" },
			});
			return;
		}

		
		var application_date_ =this.ApplicationDetails_.Date_Of_Applying 
		if (
			this.ApplicationDetails_.Date_Of_Applying == undefined ||
			this.ApplicationDetails_.Date_Of_Applying == null ||
			this.ApplicationDetails_.Date_Of_Applying.toString() ==""
		) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Choose Date", Type: "3" },
			});
			return;
		}

		// if (
		// 	this.Application_Status_Mode_ == undefined ||
		// 	this.Application_Status_Mode_ == null ||
		// 	this.Application_Status_Mode_.Application_status_Id == undefined ||
		// 	this.Application_Status_Mode_.Application_status_Id == 0
		// ) {
		// 	const dialogRef = this.dialogBox.open(DialogBox_Component, {
		// 		panelClass: "Dialogbox-Class",
		// 		data: { Message: "Select Status", Type: "3" },
		// 	});
		// 	return;
		// }

		// if (this.Duration_Id == undefined ||this.Duration_Id == null ||this.Duration_Id == 0)
		//  {
		// 	const dialogRef = this.dialogBox.open(DialogBox_Component, {panelClass: "Dialogbox-Class",data: { Message: "Select Duration", Type: "3" },});
		// 	return;
		// }

		if (
			this.Old_Application_Status_Id !=
				this.Application_Status_Mode_.Application_status_Id &&
			(this.Application_Status_Mode_.Application_status_Id == 9 ||
				this.Application_Status_Mode_.Application_status_Id == 10)
		) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Select not allowed", Type: "3" },
			});

			return;
		}
		if (this.ApplicationDetails_.Offer_Received == true) {
			if (
				this.ApplicationDetails_.Portal_User_Name == undefined ||
				this.ApplicationDetails_.Portal_User_Name == null ||
				this.ApplicationDetails_.Portal_User_Name == ""
			) {
				const dialogRef = this.dialogBox.open(DialogBox_Component, {
					panelClass: "Dialogbox-Class",
					data: { Message: "Enter Portal User Name", Type: "3" },
				});
				return;
			}

			if (
				this.ApplicationDetails_.Password == undefined ||
				this.ApplicationDetails_.Password == null ||
				this.ApplicationDetails_.Password == ""
			) {
				const dialogRef = this.dialogBox.open(DialogBox_Component, {
					panelClass: "Dialogbox-Class",
					data: { Message: "Enter Password", Type: "3" },
				});
				return;
			}

			if (
				this.ApplicationDetails_.Offer_Student_Id == undefined ||
				this.ApplicationDetails_.Offer_Student_Id == null ||
				this.ApplicationDetails_.Offer_Student_Id == ""
			) {
				const dialogRef = this.dialogBox.open(DialogBox_Component, {
					panelClass: "Dialogbox-Class",
					data: { Message: "Enter Student Id", Type: "3" },
				});
				return;
			}
		}

		var Main_Array = {
			Application: this.Fill_Applicationdetails(),
		};
		// if (Main_Array.Application == null )
		// {
		//     const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Saved', Type: "false" } });
		//     return;
		// }
		if (this.Save_Call_Status == true) return;
		else this.Save_Call_Status = true;
		this.issLoading = true;

		this.Student_Service_.Save_ApplicationDetails_Datas(
			Main_Array,
			this.ApplicationDocument_File_Array,
			this.ApplicationDocument_Array,
			this.ApplicationDocument_Description,
			this.ImageFile_Application,
			this.ApplicationDisplay_File_Name_
		).subscribe(
			(Save_status) => {
				
				// Save_status=Save_status[0];
				this.Save_Call_Status = false;
				if (Number(Save_status[0][0].Application_details_Id_) > 0) {
					const dialogRef = this.dialogBox.open(DialogBox_Component, {
						panelClass: "Dialogbox-Class",
						data: { Message: "Saved", Type: "false" },
					});

					if (
						this.ApplicationDetails_.Course_Name !=
						Save_status[0][0].Course_Name_Old_
					) {
						if (
							this.Course_.Course_Id == undefined ||
							this.Course_.Course_Id == null
						) {
							this.Course_Temp_Array = [];
							var Array_Course = [];
							this.Course_Temp_Data_.Course_Id = Save_status[0][0].Course_Id_;
							this.Course_Temp_Data_.Course_Temp = String(this.Course_);
							this.Course_Temp_Array.push(this.Course_Temp_Data_);
							Array_Course.push({
								Course_Id: this.Course_Temp_Array[0].Course_Id,
								Course_Name: this.Course_Temp_Array[0].Course_Temp,
							});
							this.Course_Data.push(Array_Course[0]);
						}
					}

					if (
						this.ApplicationDetails_.Country_Name !=
						Save_status[0][0].Country_Name_Old_
					) {
						if (
							this.Application_Country_.Country_Id == undefined ||
							this.Application_Country_.Country_Id == null
						) {
							this.Country_Temp_Array = [];
							var Array_Country = [];
							this.Country_Temp_Data_.Country_Id =
								Save_status[0][0].Country_Id_;
							this.Country_Temp_Data_.Country_Temp = String(
								this.Application_Country_
							);
							this.Country_Temp_Array.push(this.Country_Temp_Data_);
							Array_Country.push({
								Country_Id: this.Country_Temp_Array[0].Country_Id,
								Country_Name: this.Country_Temp_Array[0].Country_Temp,
							});
							this.Country_Data.push(Array_Country[0]);
						}
					}
					if (
						this.ApplicationDetails_.University_Name !=
						Save_status[0][0].University_Name_Old_
					) {
						if (
							this.University_1.University_Id == undefined ||
							this.University_1.University_Id == null
						) {
							this.University_Temp_Array = [];
							var Array_University = [];
							this.University_Temp_Data_.University_Id =
								Save_status[0][0].University_Id_;
							this.University_Temp_Data_.Univerity_Temp = String(
								this.University_1
							);
							this.University_Temp_Array.push(this.University_Temp_Data_);
							Array_University.push({
								University_Id: this.University_Temp_Array[0].University_Id,
								University_Name: this.University_Temp_Array[0].Univerity_Temp,
							});
							this.University_Data.push(Array_University[0]);
						}
					}
					this.Clr_ApplicationDetails();
					this.Search_Application_List();
					this.Close_Application();
					if (Number(this.Login_User) != Save_status[0][0].To_User_) {
						var message = {
							Student_Name: Save_status[0][0].Student_Name_,
							From_User_Name: Save_status[0][0].From_User_Name_,
							Notification_Type_Name: Save_status[0][0].Notification_Type_Name_,
							Entry_Type: Save_status[0][0].Entry_Type_,
							To_User: Save_status[0][0].To_User_,
							Notification_Id: Save_status[0][0].Notification_Id_,
							Student_Id: Save_status[0][0].Student_Id_,
						};
						this.socket.emit("new-message", message);
					}
				}
			},
			(Rows) => {
				const dialogRef = this.dialogBox.open(DialogBox_Component, {
					panelClass: "Dialogbox-Class",
					data: { Message: "Error Occured", Type: "2" },
				});
				return;
			}
		);
		this.Save_Call_Status = false;
	}


	Fill_Applicationdetails() {
		
		//this.History_View = false;
		//    this.Historydata_View=false;

		this.ApplicationDetails_.Date_Of_Applying = this.New_Date(
			new Date(
				moment(this.ApplicationDetails_.Date_Of_Applying).format("YYYY-MM-DD")
			)
		);

		this.ApplicationDetails_.Fees_Payment_Last_Date = this.New_Date(
			new Date(
				moment(this.ApplicationDetails_.Fees_Payment_Last_Date).format(
					"YYYY-MM-DD"
				)
			)
		);
		
		this.ApplicationDetails_.Intake_Year_Id =
			this.Intake_Year_Mode_.Intake_Year_Id;
		this.ApplicationDetails_.Intake_Year_Name =
			this.Intake_Year_Mode_.Intake_Year_Name;
		this.ApplicationDetails_.intake_Name = this.Intake_Mode_.Intake_Name;
		this.ApplicationDetails_.intake_Id = this.Intake_Mode_.Intake_Id;
		this.ApplicationDetails_.User_Id = Number(this.Login_User);
		//   this.ApplicationDetails_.Agent_Name=this.Agent_Mode_.Agent_Name;
		this.ApplicationDetails_.Application_Status_Name =
		this.ApplicationDetails_.Department_Status_Name;
		this.ApplicationDetails_.Application_status_Id =
		this.ApplicationDetails_.Department_Status_Id;
		this.ApplicationDetails_.Student_Id = this.ApplicationDetails_.Student_Id;
		this.ApplicationDetails_.Student_Approved_Status =
			this.Save_Student_Approved_Status;
		this.ApplicationDetails_.Bph_Approved_Status = this.Bph_Approved_Status;
		this.ApplicationDetails_.Duration_Id = Number(this.Duration_Id);

		// if (
		// 	this.Old_Application_Status_Id != this.Application_Status_Mode_.Application_status_Id &&
		// 	(this.Application_Status_Mode_.Application_status_Id==9 ||this.Application_Status_Mode_.Application_status_Id==10 ))
		// 	{
		// 	const dialogRef = this.dialogBox.open(DialogBox_Component, {
		// 		panelClass: "Dialogbox-Class",
		// 		data: { Message: "Select not allowed", Type: "3" },
		// 	});
		// 	this.issLoading=false;
		// 	return;
		// }
		if(this.ApplicationDetails_.Course_Link ==null || this.ApplicationDetails_.Course_Link ==undefined)
		{
			this.ApplicationDetails_.Course_Link="";

		}

		if(this.ApplicationDetails_.Remark ==null || this.ApplicationDetails_.Remark ==undefined)
		{
			this.ApplicationDetails_.Remark="";

		}


		if (
			this.University_1.University_Id == undefined ||
			this.University_1.University_Id == null
		) {
			this.ApplicationDetails_.University_Id = 0;
			this.ApplicationDetails_.University_Name = String(this.University_1);
		} else {
			this.ApplicationDetails_.University_Name =
				this.University_1.University_Name;
			this.ApplicationDetails_.University_Id = this.University_1.University_Id;
		}

		if (this.Course_.Course_Id == undefined || this.Course_.Course_Id == null) {
			this.ApplicationDetails_.Course_Id = 0;
			this.ApplicationDetails_.Course_Name = String(this.Course_);
		} else {
			this.ApplicationDetails_.Course_Name = this.Course_.Course_Name;
			this.ApplicationDetails_.Course_Id = this.Course_.Course_Id;
		}
		if (
			this.Application_Country_.Country_Id == undefined ||
			this.Application_Country_.Country_Id == null
		) {
			this.ApplicationDetails_.Country_Id = 0;
			this.ApplicationDetails_.Country_Name = String(this.Application_Country_);
		} else {
			this.ApplicationDetails_.Country_Id =
				this.Application_Country_.Country_Id;
			this.ApplicationDetails_.Country_Name =
				this.Application_Country_.Country_Name;
		}
		if (this.Agent_View == false) this.ApplicationDetails_.Agent_Id = 0;
		else this.ApplicationDetails_.Agent_Id = this.Agent_Mode_.Agent_Id;

		if (this.Agent_View == false) this.ApplicationDetails_.Agent_Name = "";
		else this.ApplicationDetails_.Agent_Name = this.Agent_Mode_.Agent_Name;

		return this.ApplicationDetails_;
	}

	CourseLInk()
	{
	   

	   var Course_link_ = this.ApplicationDetails_.Course_Link;
	   var temp=Course_link_
	   window.open(temp)  
	   
   }

   Get_ApplicationDetailswise_History(application_details_id_, feesdetails_id_) {
	debugger
	this.History_View = true;
	this.Search_Div = false;
	this.Applicationmodal_View = false;

	this.Change_Status_View=false;

	this.Change_User_View=false;
	
	this.FeesId_History = Number(this.Application_fees_paid);
	this.Clr_ApplicationDetails();
	this.issLoading = true;
	debugger
	this.Student_Service_.Get_ApplicationDetailswise_History(
		this.Application_Id_Temp_,
		this.Application_fees_paid
	).subscribe(
		(Rows) => {
			debugger
			// const dialogRef = this.dialogBox.open( StudentComponent);

			this.ApplicationdetailsHistory_Data = Rows[0];

			this.issLoading = false;
		},
		(Rows) => {
			this.issLoading = false;
		}
	);
}


Get_ApplicationDetailswise_Dataview(application_details_id_) {
	debugger
	this.Data_View = true;
	this.Search_Div = false;
	this.Applicationmodal_View = false;

	this.Change_Status_View=false;

	this.Change_User_View=false;
	
//  #this.FeesId_History = Number(this.Application_fees_paid);
	this.Clr_ApplicationDetails();
	this.issLoading = true;
	debugger
	this.Student_Service_.Get_ApplicationDetailswise_Dataview(
		this.Application_Id_Temp_
	).subscribe(
		(Rows) => {
			debugger	
			// const dialogRef = this.dialogBox.open( StudentComponent);

			this.Applicationdetails_Dataview = Rows[0];
console.log("Applicationdetails_Dataview",this.Applicationdetails_Dataview);

			this.issLoading = false;
		},
		(Rows) => {
			this.issLoading = false;
		}
	);
}


Close_Click_History() {
	this.History_View = false;	
	// this.Search_Div = true;
	this.Change_Status_View=true;
}
Close_Click_DataView(){
	this.Data_View= false;
	this.Change_Status_View=true;
}

Delete_Application_History(Application_details_history_Id, index) {
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

			this.Student_Service_.Delete_Application_History(
				Application_details_history_Id
			).subscribe(
				(Delete_status) => {
					Delete_status = Delete_status[0];
					Delete_status = Delete_status[0].DeleteStatus_;
					if (Delete_status == 1) {
						this.ApplicationdetailsHistory_Data.splice(index, 1);
						const dialogRef = this.dialogBox.open(DialogBox_Component, {
							panelClass: "Dialogbox-Class",
							data: { Message: "Deleted", Type: false },
						});
						
						//this.Get_ApplicationDetailswise_History(this.ApplicationDetails_.Application_details_Id);
						// this.Search_ApplicationDetails();
					} else {
						this.issLoading = false;
						const dialogRef = this.dialogBox.open(DialogBox_Component, {
							panelClass: "Dialogbox-Class",
							data: { Message: "Error Occured", Type: 2 },
						});
					}
					this.issLoading = false;
				},
				(Rows) => {
					this.issLoading = false;
					const dialogRef = this.dialogBox.open(DialogBox_Component, {
						panelClass: "Dialogbox-Class",
						data: { Message: "Error Occured", Type: 2 },
					});
				}
			);
		}
	});
}




// Search_Application_StatusforChangeStatus_Typeahead(event: any) {

	
// 	var Value = "";
// 	if (event.target.value == "") Value = "";
// 	else Value = event.target.value.toLowerCase();

// 	if (this.Department_Status_Mode_Data1 == undefined || this.Department_Status_Mode_Data1.length == 0) {
// 		this.issLoading = true;
//
// 		this.Country_Service_.Search_Application_StatusforChangeStatus_Typeahead(Value,this.Login_User,this.selectedApplicationsIdDetails).subscribe(
// 			(Rows) => {
// 				
// 				if (Rows != null) {
// 					this.Department_Status_Mode_Data1 = Rows[0];
// 					this.Department_Status_Mode_Data1_Filter = [];
// 					for (var i = 0; i < this.Department_Status_Mode_Data1.length; i++) {
// 						if (
// 							this.Department_Status_Mode_Data1[i].Department_Status_Name.toLowerCase().includes(Value)
// 						)
// 							this.Department_Status_Mode_Data1_Filter.push(this.Department_Status_Mode_Data1[i]);
// 					}
// 				}
// 				this.issLoading = false;
// 			},
// 			(Rows) => {
// 				this.issLoading = false;
// 			}
// 		);
// 	} else {
// 		this.Department_Status_Mode_Data1_Filter = [];
// 		for (var i = 0; i < this.Department_Status_Mode_Data1.length; i++) {
// 			if (this.Department_Status_Mode_Data1[i].Department_Status_Name.toLowerCase().includes(Value))
// 				this.Department_Status_Mode_Data1_Filter.push(this.Department_Status_Mode_Data1[i]);
// 		}
// 	}
// }

Search_Application_StatusforChangeStatus_Typeahead(event: any, Source :number) {
        
    var Value = "";
    if (event.target.value == "" || Source==1) 
    {Value = "" 
    this.document_view  =false;
    this.Data_list_view   =false;
    this.Task_Details_view  = false;
}
    else Value = event.target.value.toLowerCase();

    if (this.Department_Status_Mode_Data1 == undefined || this.Department_Status_Mode_Data1.length == 0) {
        this.issLoading = true;
debugger
        this.Country_Service_.Search_Application_StatusforChangeStatus_Typeahead(Value,this.Login_User,this.selectedApplicationsIdDetails,this.Student_Id).subscribe(
            (Rows) => {
                
                debugger
                if (Rows != null) {
                    this.Department_Status_Mode_Data1 = Rows[0];
                    this.Department_Status_Mode_Data1_Filter = [];
                    for (var i = 0; i < this.Department_Status_Mode_Data1.length; i++) {
                        if (
                            this.Department_Status_Mode_Data1[i].Department_Status_Name.toLowerCase().includes(Value)
                        )
                            this.Department_Status_Mode_Data1_Filter.push(this.Department_Status_Mode_Data1[i]);
                    }
                }
                this.issLoading = false;
                
            },
            (Rows) => {
                this.issLoading = false;
            }
        );
    } else {
        this.Department_Status_Mode_Data1_Filter = [];
        for (var i = 0; i < this.Department_Status_Mode_Data1.length; i++) {
            if (this.Department_Status_Mode_Data1[i].Department_Status_Name.toLowerCase().includes(Value))
                this.Department_Status_Mode_Data1_Filter.push(this.Department_Status_Mode_Data1[i]);
        }
    }
}

display_Application_Status(Application_Status_e: Department_Status) {
	if (Application_Status_e) {
		return Application_Status_e.Department_Status_Name;
	}
}



Get_ApplicationDetails() {
	//  this.Clr_ApplicationDetails();
	this.issLoading = true;
	this.ApplicationDetails_.Date_Of_Applying = new Date();
	this.ApplicationDetails_.Date_Of_Applying = this.New_Date(
		this.ApplicationDetails_.Date_Of_Applying
	);
	this.ApplicationDetails_.Date_Of_Applying = this.New_Date(
		new Date(
			moment(this.ApplicationDetails_.Date_Of_Applying).format("YYYY-MM-DD")
		)
	);

	this.ApplicationDetails_.Fees_Payment_Last_Date = new Date();
	this.ApplicationDetails_.Fees_Payment_Last_Date = this.New_Date(
		this.ApplicationDetails_.Fees_Payment_Last_Date
	);
	this.ApplicationDetails_.Fees_Payment_Last_Date = this.New_Date(
		new Date(
			moment(this.ApplicationDetails_.Fees_Payment_Last_Date).format(
				"YYYY-MM-DD"
			)
		)
	);
	
	this.Student_Service_.Get_ApplicationDetails(
		// this.Profile_.Student_Id
		this.Student_Id_Edit
	).subscribe(
		(Rows) => {
			
			this.ApplicationDetails_Data = Rows[0];
			this.issLoading = false;
		},
		(Rows) => {
			this.issLoading = false;
		}
	);
}
Delete_Task_Details(index) {
	this.process_Task_Data.splice(index, 1);
	this.issLoading = false;

  }

application_File_Change_std_Doc(Document_data_view,event: Event) {
	const file = (event.target as HTMLInputElement).files;
	const fileSizeInMB = file[0].size / (1024 * 1024); // Convert bytes to megabytes

	if (fileSizeInMB > 3) {
		const dialogRef = this.dialogBox.open(DialogBox_Component, {
			panelClass: "Dialogbox-Class",
			data: { Message: "File size exceeds 3 MB. Please select a smaller file.", Type: "3" },
		  });		  // You can also reset the input if needed
	  // event.target.value = null;
	} else {
	this.ImageFile_Doc = file;
	// this.Image_Photo = this.ImageFile_Doc[0].name;
	Document_data_view.Image_Photo=this.ImageFile_Doc[0].name
	Document_data_view.ImageFile_Doc=file}
	// Document_data_view.Document_Name=''
}
clearIntakeYearDiv() {

	if (this.Intake_Mode_Data != null && this.Intake_Mode_Data != undefined)
		this.Intake_Mode_ = this.Intake_Mode_Data[0];

	if (
		this.Intake_Year_Mode_Data != null &&
		this.Intake_Year_Mode_Data != undefined
	)
		this.Intake_Year_Mode_ = this.Intake_Year_Mode_Data[0];

  }


Document_change(Process_id,Department_Status_Id){
	debugger
	this.clearIntakeYearDiv();
	this.showIntakeYearDiv=false;
	this.process_document_Data=[]
	// this.process_data_list_Data=[]
	this.Task_Details_view=false
	this.process_Task_Data=[]
	debugger
	this.Country_Service_.Search_Application_StatusFor_Process_Document(Process_id,Department_Status_Id,this.Application_Id_Log,this.Student_Id).subscribe(
		(Rows) => {
			console.log('Rows: ', Rows);
			this.showIntakeYearDiv=true;
	debugger		
			if (Rows != null) {
				this.process_document_Data = Rows[0];
				this.process_data_list_Data = Rows[1];
				this.ApplicationDetails_.Registration_Mandatory= Rows[2][0].Registration_Mandatory
				this.ApplicationDetails_.Fees_Status= Rows[2][0].Fees_Status
				this.ApplicationDetails_.Task_Status= Rows[2][0].Task_new
				this.ApplicationDetails_.Department_Status_Duration=Rows[7][0].Status_Order
				this.Transfer_temp_name=Rows[7][0].Transfer_Department_Name
				this.process_Task_Data_pending = Rows[8];
				this.ApplicationDetails_.Fees_status_profile = Rows[9][0].Fees_status_profile;
				this.ApplicationDetails_.Is_Registered = Rows[10][0].Is_Registered_profile;
this.ApplicationDetails_.Deadline_Date = new Date();


this.user_category=Rows[11][0].user_category_student


const hoursToAdd = this.ApplicationDetails_.Department_Status_Duration;
// console.log('hoursToAdd: ', this.Followup_Users_.User_Details_Id);

// Loop through and add hours while skipping Sundays
for (let i = 0; i < hoursToAdd; i++) {
this.ApplicationDetails_.Deadline_Date.setHours(this.ApplicationDetails_.Deadline_Date.getHours() + 1);

if (this.ApplicationDetails_.Deadline_Date.getDay() === 0) {
// If the resulting date is Sunday, move to the next Monday
this.ApplicationDetails_.Deadline_Date.setDate(this.ApplicationDetails_.Deadline_Date.getDate() + 1);
}

// Check if the resulting date is one of the specified dates (e.g., "2024-01-19" or "2024-12-25")
const specifiedDates = ["2024-01-20", "2024-12-25"];
const formattedDate = this.ApplicationDetails_.Deadline_Date.toISOString().split('T')[0];

if (specifiedDates.includes(formattedDate)) {
// If the resulting date matches one of the specified dates, add one more day
this.ApplicationDetails_.Deadline_Date.setDate(this.ApplicationDetails_.Deadline_Date.getDate() + 1);
}
}

// Now, this.ApplicationDetails_.Deadline_Date contains the updated date
console.log('Updated Deadline Date:', this.ApplicationDetails_.Deadline_Date);
this.ApplicationDetails_.Deadline_Date=this.datePipe.transform(this.ApplicationDetails_.Deadline_Date, 'yyyy-MM-dd HH:mm:ss');
console.log('  this.ApplicationDetails_.Deadline_Date: ',   this.ApplicationDetails_.Deadline_Date);
				this.ApplicationDetails_.Mandatory_Task= Rows[2][0].Mandatory_Task
				this.ApplicationDetails_.Process_status_details_Id= Rows[2][0].Process_status_details_Id
				this.process_CheckList_Data =Rows[3];
				this.process_Task_Data = Rows[4];
				console.log('this.Department_Drop_Data: ', this.Department_Drop_Data);
			
				
				console.log('this.process_Task_Data: ', this.process_Task_Data);
				this.process_Task_Data1 =  Rows[6];
				
				this.Process_Notification_Data = Rows[5]
				var data_present=false;
				var tempindex=0;
				for(var i=0;i<this.process_CheckList_Data.length;i++)
				{
					data_present=false;
					for(var j=0;j<this.process_document_Data.length;j++)
					{
						if (this.process_document_Data[j].Document_Id==this.process_CheckList_Data[i].Document_Id)	
						{
							data_present=true;
							
						}
						
					}	
					if(data_present==false)
						{
							this.process_document_Data.push(this.process_CheckList_Data[i])
						}
				}
				if (
					this.ApplicationDetails_.Is_Registered == 0 &&
					this.ApplicationDetails_.Registration_Mandatory == 1
				) {
					const dialogRef = this.dialogBox.open(DialogBox_Component, {
						panelClass: "Dialogbox-Class",
						data: { Message: "Registraion mandatory, please register the candidate to use this status", Type: "3" },
					});
					this.Department_Status_Mode1_=null;
					 return;
				}
				debugger
				console.log('this.Profile_.Fees_Status: ', this.Profile_.Fees_Status);
				console.log('Profile_: ', this.Profile_);
				console.log('this.ApplicationDetails_.Fees_Status : ', this.ApplicationDetails_.Fees_Status );
				console.log('ApplicationDetails_.: ', this.ApplicationDetails_);
				// this.ApplicationDetails_.Fees_status_profile = Rows[9][0].Fees_status_profile;
				if (
					(this.ApplicationDetails_.Fees_status_profile == undefined|| this.ApplicationDetails_.Fees_status_profile == null || this.ApplicationDetails_.Fees_status_profile == 0) &&
					this.ApplicationDetails_.Fees_Status == 1 &&  this.user_category!=2
				) {
					const dialogRef = this.dialogBox.open(DialogBox_Component, {
						panelClass: "Dialogbox-Class",
						data: { Message: "Fees mandatory, please pay fees to use this status", Type: "3" },
					});
					this.Department_Status_Mode1_=null;
					 return;
				}


				
				

				console.log('this.process_document_Data: ', this.process_document_Data);
				if(this.process_document_Data.length>0){
					this.document_view = true;
				}

				if(this.process_data_list_Data.length>0){
					this.Data_list_view = true;
				}

				if(this.process_Task_Data.length > 0){
					this.Task_Details_view = true;
				}
				
				this.Intake_Date_Year_Check =Rows[12][0].Intake_Date_Year == 1;
this.Intake_Data_List =Rows[13][0];
this.Intake_Year_List =Rows[14][0];
			}
			this.issLoading = false;
			
		},
		(Rows) => {
			this.issLoading = false;
		}
		);
}


Transfer_Cofirmation_Application(Transfer_Source) {
		
	this.issLoading = true;

	this.Student_Service_.Transfer_Cofirmation(
		this.Transfer_app_Student_Id,
		"undefined",
		this.Login_User,
		this.Transfer_app_Department_Id,
		"undefined",
		this.Transfer_app_Status_Id,
		this.Transfer_app_Status_Name,
		this.Status_Change_Data_.Followup_Date,
		0,
		"undefined",
		this.Application_Id_Ref_
	).subscribe(
		(Save_status) => {
			
			if (Number(this.Login_User) != Save_status[0][0].User_Id_) {
				this.Search_Lead_button();
				var message = {
					Student_Name: Save_status[0][0].Student_Name_,
					From_User_Name: Save_status[0][0].From_User_Name_,
					Status_Name: Save_status[0].value4[0].Status_Name_,
					Task_Item_Name: Save_status[0].value4[0].Task_Item_Name_,
					Task_Details: Save_status[0].value4[0].Task_Details_,
					Notification_Type_Name: Save_status[0][0].Notification_Type_Name_,
					Entry_Type: Save_status[0][0].Entry_Type_,
					To_User: Save_status[0][0].User_Id_,
					Notification_Id: Save_status[0][0].Notification_Id_,
					Student_Id: Save_status[0][0].Student_Id_,
				};
				this.socket.emit("new-message", message);
debugger

				this.To_Username_Popup=Save_status[0][0].ToUser_Name_

					const dialogRef = this.dialogBox.open(DialogBox_Component, {
						panelClass: "Dialogbox-Class",
						data: { Message: "Transferred To " +this.To_Username_Popup, Type: "false" },
					});
				// this.Get_ApplicationDetails();
				this.Search_Application_List();

				
			}
			debugger
			if (Number(this.Login_User_Id) == Save_status[0][0].User_Id_) {
				this.To_Username_Popup=Save_status[0][0].ToUser_Name_

				const dialogRef = this.dialogBox.open(DialogBox_Component, {
					panelClass: "Dialogbox-Class",
					data: { Message: "Transferred To " +this.To_Username_Popup, Type: "false" },
				});

				this.Search_Application_List();

			}



			if (Save_status[0][0].Student_Id_ == -1) {					
				const dialogRef = this.dialogBox.open(DialogBox_Component, {
					panelClass: "Dialogbox-Class",
					data: { Message: "User Not Found", Type: "3" },
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


More_Options_function()
{
debugger
	if(this.More_Options_View==true)
	{
		// this.More_Options_Button=true;
		this.myInnerHeightlist = this.myInnerHeighttemp1 ;
		this.More_Options_View=false;
		// this.Less_Options_Button=false;
	
	}

	else
	{
	// this.More_Options_Button=false;
	this.More_Options_View=true;
	this.myInnerHeightlist = this.myInnerHeighttemp1 -220
	// this.Less_Options_Button=true;

	}


}

onTypeaheadOpen() {
	this.isTypeaheadOpen = true;
  }
  
  onTypeaheadClose() {
	this.isTypeaheadOpen = false;
  }


Close_Click_Comment()
{
this.Add_Comment_View=false
this.Change_Status_View = false;

this.application_details_View = true;

this.list_view=true;
this.Search_Div=true;
// this.Applicationmodal_View = true;


}


Add_Comment(application_details_u: any, i) { 
		
	this.clr_Chat_Window();
	// Save required variable for fetching department statuses to selectedApplicationsIdDetails
	this.selectedApplicationsIdDetails.Country_Id =
	  application_details_u.Country_Id;
	this.selectedApplicationsIdDetails.Course_Id =
	  application_details_u.Course_Id;
	this.selectedApplicationsIdDetails.University_Id =
	  application_details_u.University_Id;
	  
	  this.selectedApplicationsIdDetails.Application_status_Id= application_details_u.Application_status_Id


		this.Department_Status_Mode_Data1=[];
		this.Department_Status_Mode_Data1_Filter=[];
		this.Department_Status_Mode1_=null;

				this.application_details_View = false;
		this.Applicationmodal_View = false;
		this.Change_Status_View = false;
		this.list_view=false;
		this.Add_Comment_View=true;
		this.Search_Div=false
		//   this.Application_Status_Edit=application_details_u.;
		this.App_List_Student_Name = application_details_u.Student_Name;
		
		this.Student_Id_Transfer = application_details_u.Student_Id;
		this.Application_Status_.Remark = application_details_u.Remark;
		this.Application_Id_Log = application_details_u.Application_details_Id;
		this.ApplicationStatus_Id_Log = application_details_u.Application_status_Id;
		this.Application_fees_paid = application_details_u.Application_Fees_Paid;
		this.ApplicationStatus_Name_Log =
			application_details_u.Application_Status_Name;

		this.group_restriction = application_details_u.Group_Restriction;

		if (this.group_restriction > 0) {
			this.Load_Application_status_forchangestatus_restriction(
				this.group_restriction
			);
		} else {
			this.Application_Status_Mode_Data =
				this.Application_Status_Mode_Data_Temp;
		}

		this.Application_Id_Temp_ = application_details_u.Application_details_Id;
		// this.Change_Status_View = true;

		this.ApplicationDetails_.Followup_Date = new Date();
		this.ApplicationDetails_.Followup_Date = this.New_Date(
			new Date(moment(this.ApplicationDetails_.Followup_Date).format("YYYY-MM-DD"))
		);
		this.ApplicationDetails_.Deadline_Date = new Date();
		this.ApplicationDetails_.Deadline_Date = this.New_Date(
			new Date(moment(this.ApplicationDetails_.Deadline_Date).format("YYYY-MM-DD"))
		);



		;
		this.ApplicationDetails_.Application_No=application_details_u.Application_No;
		;
for(var n=0;n<this.Department_Status_Mode_Data.length;n++)
{
	if(application_details_u.Department_Status_Id==this.Department_Status_Mode_Data[n].Department_Status_Id)
	this.Department_Status_Mode_=this.Department_Status_Mode_Data[n];
}
;
for(var m=0;m<this.Agent_Mode_Data.length;m++)
{
	if(application_details_u.Agent_Id==this.Agent_Mode_Data[m].Agent_Id)
	this.Agent_Mode_=this.Agent_Mode_Data[m];
}
		for (var j = 0; j < this.Automatic_Department_Data.length; j++) {
			if (
				application_details_u.Transfer_Department_Id ==
				this.Automatic_Department_Data[j].Department_Id
			)
				this.Automatic_Department_ = this.Automatic_Department_Data[j];
		}
		this.Offerletter_Type_.Offerletter_Type_Id=1;
		//     if (this.Application_Status_.Notification_Status.toString() == "1")
		//     this.Application_Status_.Notification_Status = true;
		//    else this.Application_Status_.Notification_Status = false;

		for (var k = 0; k < this.Automatic_Department_Data.length; k++) {
			if (
				application_details_u.Notification_Department_Id ==
				this.Automatic_Department_Data[k].Department_Id
			)
				this.Notification_Department_ = this.Automatic_Department_Data[k];
		}


		// Save all required data to this.taskCreationData to create task when changing status
this.taskCreationData = application_details_u;
this.taskCreationData.Student_Task_Id = 0;
this.taskCreationData.Department_Id = this.Department_Data;
this.taskCreationData.By_User_Id = this.Login_User_Id;
this.taskCreationData.By_User_Name = localStorage.getItem("uname");
this.taskCreationData.Department_Name = localStorage.getItem(
  "Login_Department_Name"
);
this.taskCreationData.Department_Id =
  localStorage.getItem("Login_Department");
this.taskCreationData.Task_Group_Id = 4;
this.taskCreationData.To_User = 0;
this.taskCreationData.To_User_Name = "";
this.taskCreationData.Followup_Date = this.findNewDate();
this.taskCreationData.Remark = "";

		this.Load_Conditions_Subdata_Edit(this.Application_Id_Log);

		this.Get_Comments(this.Application_Id_Log)


	}


	
	clr_Chat_Window() {
		;
		this.tagged_users = [];
		this.Users = [];
		this.messageText = "";
		this.ImageFile_ = [];
		this.Display_File_ = "";
		this.User_Details_Data = [];
		this.User_Div=false;
	}


	Get_Comments(Application_Id_Log) {
		//  this.Clr_ApplicationDetails();
		this.issLoading = true;
debugger
		this.Student_Service_.Get_Comments(Application_Id_Log).subscribe(
			(Rows) => {
				debugger
				console.log('Rows: ', Rows);
				console.log('Rows[0]: ', Rows[0]);
				this.Comment_Data = Rows[0];
				console.log('this.Comment_Data: ', this.Comment_Data);
				this.issLoading = false;
			},
			(Rows) => {
				this.issLoading = false;
			}
		);
	}


	sendMessage1(message: string): void {


		if (
			this.messageText == undefined ||
			this.messageText == null ||
			this.messageText == ""
		) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Enter Comment", Type: "3" },
			});
			return;
		}
		
		const trimmedString = this.messageText.trim();
		if (trimmedString != "" || this.Display_File_ != "") {
			this.Chats_.Chats = this.messageText;
			this.Chats_.From_User = Number(this.Login_User);
			this.Chats_.From_User_Name = this.Login_User_Name;
			this.Chats_.Display_File = this.Display_File_;
			this.Chats_.Tagged_User = this.tagged_users;

			this.Chats_.Student_Id = this.Student_Id_Transfer;
			this.Chats_.Application_Details_Id = this.Application_Id_Log;
			this.Chats_.Channel_Id = 0;
			// if (this.Save_Call_Status == true) return;
			// else this.Save_Call_Status = true;
			this.issLoading = true;
			debugger;
			this.Chat_Window_Service_.Save_Comments(
				this.Chats_,
				this.ImageFile_,
				this.Document_File_Array
			).subscribe(
				(Save_status) => {
					debugger
					this.issLoading = false;
					let index = 0;


					if (Number(Save_status[0][0].Chat_Id_) > 0) {
						const dialogRef = this.dialogBox.open(DialogBox_Component, {
							panelClass: "Dialogbox-Class",
							data: { Message: "Saved", Type: "false" },
						});

					}


					if (Save_status[1][0].TaggedIn_ != null) {
						while (index < Save_status[1][0].TaggedIn_.length) {
							const element = Save_status[1][0].TaggedIn_[index];

							// Emit the socket event with the element as data
							var msg2 = {
								Notification_Type_Name: "Tagged Comment",
								Entry_Type: 17,
								From_User_Name: "",
								To_User: element,
								Student_Name: Save_status[0][0].messages_,

								// Open_Channel_Id:this.OpenChannel_Id
							};

							this.socket.emit("new-message", msg2);

							index++;
						}
					}

					Save_status = Save_status[0];
					if (Save_status != undefined) {
						if (Number(Save_status[0].Chat_Id_) > 0) {
							var msg = {
								Notification_Type_Name: "Chat",
								From_User_Name: Save_status[0].From_User_Name_,
								From_User: Save_status[0].From_user_,
								Chats: Save_status[0].messages_,
								Date: Save_status[0].Date_,
								Tagged_Users_List: Save_status[0].User_Details_Name_,
								To_User_List: this.To_user_list,
								File_Name: Save_status[0].File_,
								Display_File: Save_status[0].File_Name_,
								Channel_Id: Save_status[0].Channel_Id_,
								// Open_Channel_Id:this.OpenChannel_Id
							};

							this.socket.emit("new-message", msg);

							;
							//this.messages.push(message);

							// setTimeout(() => {
							// 	this.scrollToBottom();
							// }, 100);
							this.Get_Comments(this.Application_Id_Log);
							this.clr_Chat_Window();
						}
					} else {
						const dialogRef = this.dialogBox.open(DialogBox_Component, {
							panelClass: "Dialogbox-Class",
							data: { Message: "Error Occured", Type: "2" },
						});
						document.getElementById("Save_Button").hidden = false;
					}
					this.issLoading = false;
					this.Save_Call_Status = false;
				},
				(Rows) => {
					this.issLoading = false;
					const dialogRef = this.dialogBox.open(DialogBox_Component, {
						panelClass: "Dialogbox-Class",
						data: { Message: "Error Occured", Type: "2" },
					});
					document.getElementById("Save_Button").hidden = false;
				}
			);
		}
	}

	
	User_Click() {
		this.User_Div = true;
		for (var m = 0; m < this.User_Details_Data.length; m++) {
			this.User_Details_Data[m].Check_Box = false;
		}
	}


	Load_User_Details(event: any) {
		;
		var Value = "";
		// if (event== undefined) Value = ""
		if (event.target.value == "") Value = "undefined";
		else if (event.target.value == undefined) Value = "undefined";
		else Value = event.target.value.toLowerCase();
		this.issLoading = true;
		this.Student_Service_.Load_ChatUser_Details(
			Value,
			Number(this.Login_User)
		).subscribe(
			(Rows) => {
				;
				if (Value == "undefined") {
					Value = "";
				}
				if (Rows != null) {
					this.User_Details_Data = Rows[0];

					this.User_Details_Filter = [];

					for (var i = 0; i < this.User_Details_Data.length; i++) {
						if (
							this.User_Details_Data[
								i
							].User_Details_Name.toLowerCase().includes(Value)
						)
							this.User_Details_Filter.push(this.User_Details_Data[i]);
					}
					this.issLoading = false;
				}
			},
			(Rows) => {
				this.issLoading = false;
			}
		);
	}


	Select_All_TaggedUser() {
		if (this.Users == undefined) this.Users = [];
		for (var i = 0; i < this.User_Details_Data.length; i++) {
			if (this.Select_TaggedUser == false)
				this.User_Details_Data[i].Check_Box = true;
			else this.User_Details_Data[i].Check_Box = false;
		}
		for (var m = 0; m < this.User_Details_Data.length; m++) {
			if (Boolean(this.User_Details_Data[m].Check_Box) == true) {
				this.Users.push(this.User_Details_Data[m]);
			} else {
				this.Users = [];
			}
		}
		;
		const uniqueUsers = this.Users.filter(
			(user, index, self) =>
				index ===
				self.findIndex((u) => u.User_Details_Id === user.User_Details_Id)
		);

		// Extract the name property values into an array and use join() to concatenate them into a single string
		const namesString = uniqueUsers
			.map((obj) => `@${obj.User_Details_Name}`)
			.join(", ");
		const id_num = uniqueUsers.map((obj) => obj.User_Details_Id).join(", ");
		const id = parseInt(id_num);

		// Create an object with the concatenated namesString as the value of the name property
		this.tagged_users = [
			{ User_Id: id_num, User_Details_Name: namesString, User_Details_Id: 0 },
		];
	}

	Tagged_Users(User_D_e: User_Details, IsChecked: boolean) {
		;
		if (this.Users == undefined) this.Users = [];
		;
		let index = this.Users.indexOf(User_D_e);
		if (!IsChecked) {
			if (index > -1) {
				this.Users.splice(index, 1);
			}
		} else {
			this.Users.push(User_D_e);
		}

		const uniqueUsers = this.Users.filter(
			(user, index, self) =>
				index ===
				self.findIndex((u) => u.User_Details_Id === user.User_Details_Id)
		);

		// Extract the name property values into an array and use join() to concatenate them into a single string
		const namesString = uniqueUsers
			.map((obj) => `@${obj.User_Details_Name}`)
			.join(", ");
		this.id_num = uniqueUsers.map((obj) => obj.User_Details_Id).join(",");
		const id = parseInt(this.id_num);
		;
		this.Tagged_Ids = this.id_num.split(",").map((id) => parseInt(id));
		// Create an object with the concatenated namesString as the value of the name property
		this.tagged_users = [
			{
				User_Id: this.id_num,
				User_Details_Name: namesString,
				User_Details_Id: 0,
			},
		];
	}





	Search_Branch_Department_Typeahead(event: any) {
		debugger
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

	Change_Task_Department(Department,i)
	{
	let deept =[...this.process_Task_Data]
	
	console.log('this.process_Task_Data: ', this.process_Task_Data);
	
	console.log('deept: ', deept);

	 const dept= this.Department_Drop_Data.find(ele=>ele.Department_Id==Department.target.value)
	 deept[i].Department_Id = Department.target.value
	 deept[i].Department_Name = dept.Department_Name

	 console.log('dept: ', dept);
	this.process_Task_Data=deept

	console.log('	this.process_Task_Data: ', 	this.process_Task_Data);

debugger
let a =5

}




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

	Department_Change() {
		//  document.getElementById("Followup_Status").focus();
		$("[name=Followup_Status]").focus();
		// this.Focus_It();
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






// Less_Options_function()
// {
// 	this.More_Options_Button=true;
// 	this.More_Options_View=false;
// 	this.Less_Options_Button=false;

// }
showFullCourseName(index: number) {
    this.expandedCourses[index] = true;
  }

  hideFullCourseName(index: number) {
    this.expandedCourses[index] = false;
  }


toggleCourseName(index: number) {
    this.expandedCourses[index] = !this.expandedCourses[index];
  }

	

  showFullUniversityName(index: number) {
    this.expandedUniversity[index] = true;
  }

  hideFullUniversityName(index: number) {
    this.expandedUniversity[index] = false;
  }

  showFullUserName(index: number) {
    this.expandedUser[index] = true;
  }

  hideFullUserName(index: number) {
    this.expandedUser[index] = false;
  }

toggleUniversityName(index: number) {
    this.expandedUniversity[index] = !this.expandedUniversity[index];
  }


 

  isSelected(university: any): boolean {
	return this.selectedUniversities.some(selectedUni => selectedUni.University_Name === university.University_Name);
}
// toggleSelection(university: any) {
// 	const index = this.selectedUniversities.findIndex(selectedUni => selectedUni.University_Name === university.University_Name);
// 	if (index === -1) {
// 		this.selectedUniversities.push(university);
// 	} else {
// 		this.selectedUniversities.splice(index, 1);
// 	}
// }
toggleSelection(university: any) {
	this.selectedUniversity=''
	if(university.University_Id == 0){
		this.selectedUniversities=[];
		this.selectedUniversity='All'
		return;
	}
	const index = this.selectedUniversities.findIndex(selectedUni => selectedUni.University_Name === university.University_Name);
	if (index === -1) {
	  this.selectedUniversities.push(university);
	} else {
	  this.selectedUniversities.splice(index, 1);
	}
	this.updateCourses(); // Add this line
  }
showFullRemark(index: number) {
    this.expandedRemark[index] = true;
  }

  hideFullRemark(index: number) {
    this.expandedRemark[index] = false;
  }
  toggleRemark(index: number) {
    this.expandedRemark[index] = !this.expandedRemark[index];
  }
optionSelected(event: MatAutocompleteSelectedEvent) {
	this.University_1 = null ;
	event.option.deselect();
	this.updateCourses(); 
}

// removeUniversity(university: any) {
// 	const index = this.selectedUniversities.findIndex(selectedUni => selectedUni.University_Name === university.University_Name);
// 	if (index >= 0) {
// 		this.selectedUniversities.splice(index, 1);
// 	}
// }

removeUniversity(university: any) {
	const index = this.selectedUniversities.findIndex(selectedUni => selectedUni.University_Name === university.University_Name);
	if (index >= 0) {
	  this.selectedUniversities.splice(index, 1);
	  this.updateCourses(); // Add this line
	}
  }
  updateCourses() {
	this.Course_ = null;
	this.selectedCourses = [];
	this.Course_Data = [];
	this.Course_Data_Filter = [];
  
	if (this.selectedUniversities.length > 0) {
	  const universityIds = this.selectedUniversities.map(uni => uni.University_Id);
	  this.issLoading = true;
  
	  this.Course_Service_.Search_Courses_Typeahead_Check('', universityIds).subscribe(
		(Rows) => {
		  if (Rows != null) {
			this.Course_Data = Rows[0];
			this.Course_Data_Filter = [...this.Course_Data];
		  }
		  this.issLoading = false;
		},
		(error) => {
		  this.issLoading = false;
		  // Handle error
		}
	  );
	}
  }

// Modify your existing display_University_1 method
display_University_1 = (university?: any): string => {
	return university ? university.University_Name : '';
}


// course multi selecttion
isSelectedCourse(course: any): boolean {
    return this.selectedCourses.some(selectedCourse => selectedCourse.Course_Name === course.Course_Name);
  }

  // Method to toggle course selection
  toggleSelectionCourse(course: any) {
    const index = this.selectedCourses.findIndex(selectedCourse => selectedCourse.Course_Name === course.Course_Name);
    if (index === -1) {
      this.selectedCourses.push(course);
    } else {
      this.selectedCourses.splice(index, 1);
    }
  }

  // Method to handle course selection
  optionSelectedCourse(event: MatAutocompleteSelectedEvent) {
    this.Course_ = null; // Clear input field
    event.option.deselect();
  }
  display_Course_12 = (course?: any): string => course ? course.Course_Name : '';
  // Method to remove a course from selected list
  removeCourse(course: any) {
    const index = this.selectedCourses.findIndex(selectedCourse => selectedCourse.Course_Name === course.Course_Name);
    if (index >= 0) {
      this.selectedCourses.splice(index, 1);
    }
  }

//   Export()
// 	{
	   
// 			this.Student_Service_.exportExcel(this.ApplicationDetails_Data,'Application-Report')
	
// 	}
	Export() {
        // Create filtered data from Study_Receipt_Report_Data
        const filteredData = this.ApplicationDetails_Data.map((receipt: any, index: number) => {
			console.log('ApplicationDetails_Data: ', this.ApplicationDetails_Data);
            return {
				No: index + 1,                   // Serial number
				Student: receipt["Student_Name"],
				// 	Address: receipt["Address1"],
				 CreatedUser: receipt["Created_User"],
				University: receipt["University_Name"],
				Course: receipt["Course_Name"],
				Country: receipt["Country_Name"],
				Intake_Year: receipt["Intake_Year_Name"],
				To_Staff: receipt["To_Staff_Name"],
				Status: receipt["AppstatusName"],
				Remark: receipt["Remark"]
            };
        });
    
        // Call exportExcel with the filtered data
        this.Student_Service_.exportExcel(filteredData, 'Agent Application Report');
    }
	Get_All_ByUser(event: any,source:number) {
		var Value = "";
		if (event.target.value == "") Value = "";
		else Value = event.target.value.toLowerCase();

		debugger;
	  
			if (
				this.Followup_Users_Data_t == undefined 
				|| this.Followup_Users_Data_t == null || this.Followup_Users_Data_t.length == 0
			) {
				this.Student_Service_.Get_Subordinates_Users(
					this.Login_User_Id
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


}
