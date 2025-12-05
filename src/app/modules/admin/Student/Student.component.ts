import { Component, DebugElement, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Student_Service } from "../../../services/Student.Service";
import { Country_Service } from "../../../services/Country.service";
import { Intake_Service } from "../../../services/Intake.service";
import { University_Service } from "../../../services/University.Service";
import { Subject_Service } from "../../../services/Subject.service";
import { Document_Service } from "../../../services/Document.Service";
import { Course_Service } from "../../../services/Course.service";
import { Department_Service } from "../../../services/Department.Service";
import { Student_Message_Service } from "../../../services/Student_Message.Service";
import { Client_Accounts_Service } from "../../../services/Client_Accounts.Service";
import { DialogBox_Component } from "../DialogBox/DialogBox.component";
import { Student } from "../../../models/Student";
import { Course } from "../../../models/Course";
import { Gender } from "../../../models/Gender";
import { Passport } from "../../../models/Passport";
import { Resume } from "../../../models/Resume";
import { LOR_1 } from "../../../models/LOR_1";
import { LOR_2 } from "../../../models/LOR_2";
import { MOI } from "../../../models/MOI";
import { SOP } from "../../../models/SOP";
import { Agent } from "../../../models/Agent";
import { ApplicationStatus } from "../../../models/ApplicationStatus";
import { Internship } from "../../../models/Internship";
import { Level_Detail } from "../../../models/Level_Detail";
import { Subject } from "../../../models/Subject";
import { Remarks } from "../../../models/Remarks";
import { feesreceiptdocument } from "../../../models/feesreceiptdocument";
import { Client_Accounts } from "../../../models/Client_Accounts";
import { Duration } from "../../../models/Duration";
import { Country } from "../../../models/Country";
import { University } from "../../../models/University";
import { Document } from "../../../models/Document";
import { Student_Message } from "../../../models/Student_Message";
import { Student_Course_Apply } from "../../../models/Student_Course_Apply";
import { Student_Status } from "../../../models/Student_Status";
import { Enquiry_Source } from "../../../models/Enquiry_Source";
import { User_Details } from "../../../models/User_Details";
import { Department } from "../../../models/Department";
import { Department_Status } from "../../../models/Department_Status";
import { Branch } from "../../../models/Branch";
import { StudentChecklist } from "../../../models/StudentChecklist";
import { Student_FollowUp } from "../../../models/Student_FollowUp";
import { Course_Selection } from "../../../models/Course_Selection";
import { Student_Course_Selection } from "../../../models/Student_Course_Selection";
import { Internship_Service } from "../../../services/Internship.service";
import { MomentDateAdapter } from "@angular/material-moment-adapter";
import {
	DateAdapter,
	MAT_DATE_FORMATS,
	MAT_DATE_LOCALE,
} from "@angular/material/core";
import * as _moment from "moment";
import { default as _rollupMoment } from "moment";
import {
	ROUTES,
	Get_Page_Permission,
} from "../../../components/sidebar/sidebar.component";
import { MatDialog, MatGridTileHeaderCssMatStyler } from "@angular/material";
import { Student_Document } from "../../../models/Student_Document";
import { Ielts } from "../../../models/Ielts";
import { Intake } from "../../../models/Intake";
import { Intake_Year } from "../../../models/Intake_Year";
import { Course_Apply } from "../../../models/Course_Apply";
import { Applicationdetails } from "../../../models/Applicationdetails";
import { ApplicationdetailsHistory } from "../../../models/ApplicationdetailsHistory";
import { Applicationdocument } from "../../../models/Applicationdocument";
import { FormControl } from "@angular/forms";
import { Fees } from "../../../models/Fees";
import { Fees_Receipt } from "../../../models/Fees_Receipt";
import { Fees_Receipt_Data } from "../../../models/Fees_Receipt_Data";
import { Company_Service } from "../../../services/Company.Service";
import { Company } from "../../../models/Company";
import { Registration_Details } from "../../../models/Registration_Details";
import { Followup_History } from "../../../models/FollowUp_History";
import { environment } from "../../../../environments/environment.js";
import * as JSZip from "jszip";
import { HttpClient } from "@angular/common/http";
import { saveAs } from "file-saver";
import { Sub_Section } from "../../../models/Sub_Section";
import { Sub_Section_Service } from "../../../services/Sub_Section.Service";
import { Send_Welcome_Mail } from "../../../models/Send_Welcome_Mail";
import { Visa } from "../../../models/Visa";
import { Pre_Visa } from "../../../models/Pre_Visa";

import { Review } from "../../../models/Review";
import { Enquiry_For } from "../../../models/Enquiry_For";
import { enquiry_mode } from "../../../models/Enquiry_Mode";

import { Visa_Document } from "../../../models/Visa_Document";
import { Invoice } from "../../../models/Invoice";
import { Marital_Status } from "../../../models/Marital_Status";
import { Visa_Type } from "../../../models/Visa_Type";
import { Invoice_Document } from "../../../models/Invoice_Document";
import { MatTooltipModule } from "@angular/material/tooltip";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { Shore } from "../../../models/Shore";
//import { Shore } from "app/models/Shore";
import { Qualification } from "../../../models/Qualification";
import { Work_Experience } from "../../../models/Work_Experience";
import { Refund_Request } from "../../../models/Refund_Request";
import { Ielts_Details } from "app/models/Ielts_Details";
import { IELTS_Type } from "app/models/IELTS_Type";
import { Profile } from "../../../models/Profile";
import { Application_List } from "app/models/Application_List";
import { Application_Transfer } from "app/models/Application_Transfer";
import { Bph_Status } from "app/models/Bph_Status";
import { Proceeding_Details } from "app/models/Proceeding_Details";
import { Application_Course } from "app/models/Application_Course";
import { Class } from "app/models/Class";
import { AgmMap } from "@agm/core";
import { Sort_By } from "app/models/Sort_By";
import { Student_Task } from "app/models/Student_Task";
import { Task_Status } from "app/models/Task_Status";
import { Sub_Status } from "app/models/Sub_Status";
import { Extension_Data } from "app/models/Extension_Data";
import { Pre_Admission } from "app/models/Pre_Admission";
import { Task_Item } from "app/models/Task_Item";
import * as io from "socket.io-client";
import { Transfer } from "app/models/Transfer";
import { Currency } from "app/models/Currency";
import { Status_Change_Data } from "app/models/Status_Change_Data";
import { Offerletter_Type } from "app/models/Offerletter_Type";
import { Conditions } from "app/models/Conditions";
import { Department_Status_Service } from "app/services/Department_Status.Service";
import { Process_Status_Details } from "app/models/Process_Status_Details";
import { Process_Notification } from "app/models/Process_Notification";
import { Process_Fields } from "app/models/Process_Fields";
import { Student_Fields } from "app/models/Student_Fields";
import { Process_Department } from "app/models/Process_Department";
import { Task_Detrails } from "app/models/Task_Detrails";
import { DatePipe } from "@angular/common";
import { Tagged_User } from "app/models/Tagged_User";
import { Chats } from "app/models/Chats";
import { Chat_Window_Service } from "app/services/Chat_Window.Service";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { Rating } from "app/models/Rating";
import { Document_Type } from "app/models/Document_Type";
import { endWith } from "rxjs/operators";
import { Payment_Tab_Details } from "app/models/Payment_Tab_Details";
import { Account_Tab_Details } from "app/models/Account_Tab_Details";

// import { AnyTxtRecord } from 'dns';
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
const moment = _rollupMoment || _moment;
@Component({
	selector: "app-Student",
	templateUrl: "./Student.component.html",
	styleUrls: ["./Student.component.css"],
	providers: [
		{
			provide: DateAdapter,
			useClass: MomentDateAdapter,
			deps: [MAT_DATE_LOCALE],
		},
		{ provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
		DatePipe	],
})
export class StudentComponent implements OnInit {
	// private url = "http://localhost:3510";
	// private url = 'https://regdemoapi.adat.in/';
	// private url = 'https://regdemoapi.adat.in/';
	url = environment.NotificationPath; // 'http://regnewapi.trackbox.co.in:3646/'

	private socket;
	year: any;
	month: any;
	day: any;
	date: any;
	Hours: any;
	Minutes: any;
	Seconds: any;

	Search_FromDate: Date = new Date();

	Search_ToDate: Date = new Date();
	Fees_Date: Date = new Date();
	zip = new JSZip();
	files = [];

	Registration_Data_: Registration_Details = new Registration_Details();
	Send_Welcome_Mail_Data_: Send_Welcome_Mail = new Send_Welcome_Mail();

	Student_Id_Edit: number;
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
	Data_Count: number;
	Save_Student_Approved_Status: number;
	Course_Link_Button:boolean=false;

	Gender_Data: Gender[];
	Gender_: Gender = new Gender();
	Gender_Name_Search: string;
	Bph_Approved_Status: number;
	Old_Application_Status_Id: number;

	Task_Status_Id_: number = 0;
	Task_Item_Id_: number = 0;

	Enquiry_For_: Enquiry_For = new Enquiry_For();
	Enquiry_For_Temp: Enquiry_For = new Enquiry_For();
	Enquiry_For_Data: Enquiry_For[];

	Rating_: Rating = new Rating();
	Rating_Temp: Rating = new Rating();
	Rating_Data: Rating[];

	enquiry_mode_: enquiry_mode = new enquiry_mode();
	enquiry_mode_Temp: enquiry_mode = new enquiry_mode();
	enquiry_mode_Data: enquiry_mode[];

	class_: Class = new Class();
	class_Temp: Class = new Class();
	class_Data: Class[];
	 Date_Type: number = 1;

	Sort_By_Search: Sort_By = new Sort_By();
	Sort_By_Temp: Sort_By = new Sort_By();
	Sort_By_Data: Sort_By[];

	Shore_: Shore = new Shore();
	Shore_Temp: Shore = new Shore();
	Shore_Data: Shore[];

	Qualification_: Qualification = new Qualification();

	Ielts_Details_: Ielts_Details = new Ielts_Details();

	Work_experience_: Work_Experience = new Work_Experience();
	Refund_Request_: Refund_Request = new Refund_Request();

	// this.socket = io(this.url, { transports: ["websocket"] });
	// this.socket = io(this.url);
	Intake_Mode_Profile_: Intake = new Intake();
	Intake_Mode_: Intake = new Intake();
	Intake_Mode_T_: Intake = new Intake();
	Intake_Mode_Temp: Intake = new Intake();
	Intake_Mode_Data: Intake[];
	Intake_Mode_Data_Filter: Intake[];

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
	Intake_Date_Year_Check:boolean;
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
	ApplicationDetails_Data: Applicationdetails[];
	Qualification_Data: Qualification[];

	Previsa_Data: Pre_Visa[];
	Preadmission_Data: Pre_Admission[];

	Refund_Request_Data: Refund_Request[];

	Work_experience_Data: Work_Experience[];

	Student_Checklist_Data: Pre_Visa[];

	Student_Checklist_Preadmission_Data: Pre_Admission[];

	FeesrecepitDetails_Data: Fees[];
	ApplicationdetailsHistory_Data: ApplicationdetailsHistory[];
	Applicationdocument_Data: Applicationdocument[];

	StudentChecklist_Data: StudentChecklist[];

	Intake_Year_Mode_: Intake_Year = new Intake_Year();
	Intake_Year_Mode_Temp: Intake_Year = new Intake_Year();
	Intake_Year_Mode_Data: Intake_Year[];

	Agent_Mode_: Agent = new Agent();
	Agent_Mode_Temp: Agent = new Agent();
	Agent_Mode_Data: Agent[];

	Application_Status_Mode_: ApplicationStatus = new ApplicationStatus();
	Application_Status_Mode_Temp: ApplicationStatus = new ApplicationStatus();
	Application_Status_Mode_Data: ApplicationStatus[];

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

	Data_View:boolean = false;
	Search_Div: boolean = false;

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

	preview_div:boolean=false;

	Agent_View: boolean;
	Change_Status_Button_View: boolean;
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

	Page_Length_Course: number = 20;
	missedfollowup_count: number = 0;
	followup_count: number = 0;
	Student_Course_Apply_Data: Student_Course_Apply[];
	Student_Course_Apply_: Student_Course_Apply = new Student_Course_Apply();

	Student_Checklist_Country_Id: number;
	Student_Preadmission_Checklist_Country_Id: number;
	To_Username_Popup:string;

	issLoading: boolean = true;
	EditIndex: number;
	Student_Data: Student[];
	Student_: Student = new Student();
	Profile_: Profile = new Profile();
	Student_Name_Search: string;
	Entry_View: boolean = true;
	History_View: boolean = false;
	Refund_View: boolean = true;
	Historydata_View: boolean = true;
	App_View: boolean = true;
	Applicationmodal_View: boolean = true;
	Languagemodal_View: boolean = true;
	Qualificationmodal_View: boolean = true;
	Qualificationnew_View: boolean = true;
	Workexperiencenew_View: boolean = true;

	selectedIntakeYear: any;
	combinedIntakeData: Array<any> = [];

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
	application_details_View: boolean = false;
	language_details_View: boolean = false;
	Fees_Receipt_Id_temp: number = 0;
	Duration_Id: number = 0;

	Qualification_details_View: boolean = false;
	Fee_Collection_View: boolean = false;

	FollowUp_History_: Followup_History = new Followup_History();



	Agent_Search12: User_Details = new User_Details();
	Total_Receipt: any;

	Advance_Search: boolean = true;
	Index: number;
	Total_Entries: number;
	color = "primary";
	mode = "indeterminate";
	value = 50;
	Permissions: any;
	Registration_Permissions: any;
	Remove_Registration_Permissions: any;

	Activity_Permissions: any;
	Remove_Activity_Permissions: any;
	App_List_Student_Name:string;
	App_List_Course_Name:string;

	Agent_Permissions: any;
	Change_Status_Button_Permission: any;
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
	Change_User_View:boolean=false;
	paidfees: number = 0;
	Fees_Receipt_Id_data: number = 0;
	Student_Edit: boolean;
	Student_Save: boolean;
	Register_Save: boolean;
	Register_Remove: boolean;
	Student_Delete: boolean = false;
	myInnerHeight: number;
	myInnerHeightInner: number;
	myTotalHeight: number;
	myHeight: number;
	myHeightsub: number;
	myHeightsubtwo: number;
	myHeightsubthree: number;
	myHeightsubfour: number;
	Client_Accounts_Data: Client_Accounts[];
	University_Data: University[];
	Applicationdetails_Dataview: Applicationdetails[];

	University_Data_Filter: University[];
	University_: University = new University();
	University_1: University = new University();
	Profile_University_: University = new University();
	Country_Data: Country[];
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
	Search_Duration: Duration = new Duration();
	Search_Level: Level_Detail = new Level_Detail();
	Search_Internship: Internship = new Internship();
	Save_Document_: Document = new Document();
	Internship_: Internship = new Internship();
	Internship_Data: Internship[];
	Internship_Temp: Internship = new Internship();

	Level_: Level_Detail = new Level_Detail();
	Level_Data: Level_Detail[];
	Level_Temp: Level_Detail = new Level_Detail();

	Duration_: Duration = new Duration();
	Duration_Data: Duration[];
	Duration_Temp: Duration = new Duration();
	ApplicationDisplay_File_Name_: string;
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
	Save_Call_Status: boolean = false;

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

	ApplicationDetails_: Applicationdetails = new Applicationdetails();

	private _: any;
	Pointer_Start_: number;
	Pointer_Stop_: number;
	Pointer_Stop_Course: number;

	nextflag: number;
	Item_Export: boolean;

	Show_FollowUp: boolean = true;
	View_History_: boolean = true;
	moredetailsbutton: boolean = true;
	lessdetailsbutton: boolean = true;
	Next_FollowUp_Date_Visible: boolean = true;
	Flag_Followup: number = 0;
	Flag_Student: number = 0;
	Student_Id: number = 0;
	User_Id: number = 0;
	
  Enable_Followup_Reminder: boolean = false;        // checkbox
  FollowUp_Reminder_Time: string = '';


	Users_Data1: User_Details[]
	Users_Data12: User_Details[]
    Users_Temp12: User_Details = new User_Details();
    Agent_Search1: User_Details = new User_Details();

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
	showTransferUserTypeahead:boolean = false;
	Application_Country_: Country = new Country();
	Profile_Country_: Country = new Country();
	Country_Temp: Country = new Country();
	Country1_Data: Country[];

	University_Temp: University = new University();

	Level_Detail_: Level_Detail = new Level_Detail();
	Level_Detail_Temp: Level_Detail = new Level_Detail();
	Level_Detail_Data: Level_Detail[];

	Intake_: Intake = new Intake();
	Intake_Temp: Intake = new Intake();
	Intake_Data: Intake[];

	Intake_Year_: Intake_Year = new Intake_Year();
	Intake_Year_Temp: Intake_Year = new Intake_Year();
	Intake_Year_Data: Intake_Year[];

	Sub_Section_: Sub_Section = new Sub_Section();
	Sub_Section_Temp: Sub_Section = new Sub_Section();
	Sub_Section_Data: Sub_Section[];

	Duration: number;

	Subject_Temp: Subject = new Subject();

	Search_Intake_ = new FormControl();

	Search_Intake_Year_ = new FormControl();

	Search_Sub_Section_ = new FormControl();
	Change_Transfer_Button_Permission:any;
	Change_Transfer_Button_View:boolean;
	Followup_Users_Data: User_Details[];
	Followup_Users_Data_t: User_Details[];
	Followup_Users_Data_t_Filter: User_Details[];
	Followup_Users_Data_tN: Student_FollowUp[];
	Followup_Users_: User_Details = new User_Details();
	Followup_Users_Task_: User_Details = new User_Details();
	Followup_Users_t: User_Details = new User_Details();
	Followup_Users_temp: User_Details = new User_Details();
	Tagged_Ids: any;

	Followup_Users_tN: Student_FollowUp = new Student_FollowUp();
	//Followup_Users_tempN: Student_FollowUp = new Student_FollowUp();

	Followup_Users_tempN: User_Details = new User_Details();

	Followup_Branch_tempN: Branch = new Branch();

	Users_Temp: User_Details = new User_Details();
	Users_Temp_c: User_Details = new User_Details();
	Users_Temp1: User_Details = new User_Details();

	Followup_Users_Temp: User_Details = new User_Details();
	user_category:number;

	
	FollowUp_Status_: Department_Status = new Department_Status();
	FollowUp_Status_Task_: Department_Status = new Department_Status();
	Transfer_Status_: Department_Status = new Department_Status();
	Transfer_Status_k: Sub_Status = new Sub_Status();
	Status_Temp: Department_Status = new Department_Status();
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

	Status_Change_Data_: Status_Change_Data = new Status_Change_Data();

	Followup_Substatus_Data_Filter1: Sub_Status[];
	Followup_Substatus_Data_Filter_Transfer1: Sub_Status[];

	//Followup_Sub_Status_Temp: Sub_Status = new Sub_Status();
	FollowUp_Sub_Status_: Sub_Status = new Sub_Status();
	FollowUp_Sub_Status_Transfer_: Sub_Status = new Sub_Status();

	Department_Temp: Department = new Department();
	Department_Data_Temp: Department = new Department();
	Department_Data_C_Temp: Department = new Department();
	Request_Department_Grid_: Department = new Department();
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

	Documents_: Document = new Document();
	Followup_Branch_Data: Branch[];
	Followup_Branch_Data_Filter: Branch[];

	Documents_Data: Document[];
	Documents_Data_Filter: Document[];

	Branch_Temp: Branch = new Branch();
	Followup_Branch_Temp: Branch = new Branch();

	Remarks_: Remarks = new Remarks();
	Remarks_Data: Remarks[];
	Remarks_Data_Filter: Remarks[];
	Remarks_Temp: Remarks = new Remarks();
	Is_Follow_: number;
	Is_Follow_Status_: number;

	feesreceiptdocument_: feesreceiptdocument = new feesreceiptdocument();

	FollowUp_Data: Student_FollowUp[];
	FollowUp_: Student_FollowUp = new Student_FollowUp();
	Login_User: string = "0";

	User_Div: boolean = false;

	Transfer_: Transfer = new Transfer();

	Followp_History_Data: Followup_History[];
	Show_Followup_History: boolean = true;
	Transfer_view: boolean = true;
	Lead_EditIndex: number = -1;
	Change_Status_View: boolean = false;
	Add_Comment_View: boolean = false;

	Transfer_app_Status_Id: number;
	Transfer_app_Student_Id: number;
	Transfer_app_Department_Id: number;
	Transfer_app_Status_Name: string;
	Application_Id_Ref_: number = 0;

	View_Follow_: boolean = true;
	View_Student_: boolean = true;
	Bph_Status: number;

	Course_Data: Course[];
	Course_Data_Typeahead: Course[];
	Course_: Course = new Course();
	Program_Course_: Course = new Course();
	Course_Temp: Course = new Course();
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

	Black_Start: number = 1;
	Black_Stop: number = 0;
	Red_Start: number = 1;
	Red_Start_Course: number = 1;
	Red_Stop: number = 0;
	Red_Stop_Course: number = 0;
	Total_Rows: number = 0;
	Total_Rows_Course: number = 0;
	Pages: number = 0.0;
	Total_Pages: number = 0;
	Edit_save_button_view:boolean=true;

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

	Department_Status_Mode_: Department_Status = new Department_Status();
	Department_Status_Mode1_: Department_Status = new Department_Status();
	Department_Status_Mode_Temp: Department_Status = new Department_Status();
	Department_Status_Mode_Temp1: Department_Status = new Department_Status();
	Department_Status_Mode_Data: Department_Status[];
	Department_Status_Mode_Data1: Department_Status[];

	User_Details_Filter: User_Details[];


	process_document_Data :Process_Notification[];
	process_data_list_Data :Process_Fields[];
	process_CheckList_Data :Process_Notification[];
	process_Task_Data :Task_Detrails[]=[];
	process_Task_Data_pending :Task_Detrails[]=[];
    Process_Notification_Data:Process_Department[]
	process_Task_Data1 :Student_Task[];



	Department_Status_Mode_Data1_Filter: Department_Status[];
	Department_Status_Mode_Data_Temp: Department_Status[];

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


	ApplicationDocument_Array: Applicationdocument[];
	FeesreceiptDocument_Array: feesreceiptdocument[];

	Application_Status_: ApplicationStatus = new ApplicationStatus();

	DataApplicationDocument_Array: feesreceiptdocument[];

	Checklisst_Array: StudentChecklist[];
	Document_File_Array: any[];
	ApplicationDocument_File_Array: any[];
	FeesreceiptDocument_File_Array: any[];

	Document_File: Document = new Document();
	ApplicationDocument_File: Applicationdocument = new Applicationdocument();
	FeesreceiptDocument_File: feesreceiptdocument = new feesreceiptdocument();
	Document_Start: number;
	Document_Description: string;
	ApplicationDocument_Description: string;
	FeesreceiptDocument_Description: string;
	File: string;
	ApplicationFile: String;
	ImageFile_passport: any;
	ImageFile_Ielts: any;
	ImageFile_Tenth: any;
	ImageFile_Photo: any;
	ImageFile_Experience: any;
	ImageFile_Resume: any;
	ImageFile_Application: any;
	ImageFile_Feesreceipt: any;

	User_Details_Data: User_Details[];

	Offerletter_Type_: Offerletter_Type = new Offerletter_Type();
	Offerletter_Type_Data: Offerletter_Type[];
	Offerletter_Type_Temp: Offerletter_Type = new Offerletter_Type();

	Tenth_Certificate: string;
	Passport_Copy: string;
	IELTS: string;
	Work_Experience: string;
	Resume: string;
	Passport_Photo: string;

	selectedPdfPreview:any='';

pdfload: boolean = true;

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

	fees_check:number=0;
	fees_check_Fees_Mandatory:number=0;
	Fees_Receipt_Status:number;

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

	Conditions_Sub: Conditions = new Conditions();
	Conditions_Sub_Data: Conditions[];
	Conditions_Search_Data: Conditions[];

	Statistics_Tab_View: boolean = false;
	Statistics_View: boolean = false;
	Statistics_Tab_Permission: any;
	Statistics_Tab_Edit: boolean = false;

	Document_View_Status: boolean = false;
	Documewnt_View_Permission: any;
	Document_View_Option: boolean = false;
	selectedDocumentId: number; // To hold the selected document ID
	selectedDocumentName: string ; // To hold the selected document name

	More_Search_Options: boolean = true;
	More_Search_Options_Profile: boolean = true;
	App_Search_Options: boolean = true;
	Department_Search: Department = new Department();
	Department_Data: Department[];
	Department_Drop_Data: Department[];
	Department_: Department = new Department();

	User_Search: User_Details = new User_Details();
	By_User_Search: User_Details = new User_Details();
	Users_Data: User_Details[];
	User: User_Details[];
	Users_Data2: User_Details[]
	Search_Branch: Branch = new Branch();
	Enquiry_For_Search: Enquiry_For = new Enquiry_For();
	Class_Search: Class = new Class();
	Intake_Search: Intake = new Intake();
	Agent_Search: Agent = new Agent();
	Intake_Year_Search: Intake_Year = new Intake_Year();

	Branch_Temp1: Branch = new Branch();
	Branch_Data: Branch[];
	Search_Status: Department_Status = new Department_Status();
	Status_Data: Department_Status[];
	Search_By_: any;

	Is_Registered: any;

	Look_In_Date: boolean = true;
	Expense_Include: boolean = true;
	Search_Name: "";
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
//   Course_Data: Course[];
//   Course_: Course = new Course();
	Task_Doc_View:boolean=false;
	Rating_View:boolean=false;

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

	
	messageText: string = "";
	Auditor_Status_Permission: any;
	Auditor_Status_View: boolean = false;
	ImageFile_: any;

	Payment_Status_Permission: any;
	Payment_Status_View: boolean = false;
	Display_File_: string;
	Channel_Id_Temp_: number;
	Chats_: Chats = new Chats();

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
	To_User_Search1: User_Details = new User_Details();

	showIntakeYearDiv = false;

	Pre_Visa_View: boolean = false;

	Pre_Visa_Checklist_View: boolean = false;

	Pre_Visa_Tab_Permission: any;

	Pre_Visa_Tab_View: boolean = false;
	Pre_Visa_Tab_Edit: boolean = false;
	Pre_Visa_Tab_Delete: boolean = false;
	Pre_Visa_Tab_Save: boolean = false;
	Previsa_: Pre_Visa = new Pre_Visa();
	Pre_Visa_Data: Pre_Visa[];

	Comment_Data: Chats[];

	Tasknew_View: boolean = false;
	Tasknew_Tab_Permission: any;
	Tasknew_Tab_View: boolean = false;
	Tasknew_Tab_Edit: boolean = false;
	Tasknew_Tab_Delete: boolean = false;
	Tasknew_Tab_Save: boolean = false;

	taskCreationData = null;

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


	showIntakeFields: boolean = true;


	transfer_status_Dept_Id_:number;

	Language_Tab_Permission: any;
	// Pre_Admission_Tab_Views:boolean =false;
	Language_Tab_View: boolean = false;
	Language_Tab_Edit: boolean = false;
	Language_Tab_Delete: boolean = false;
	Language_Tab_Save: boolean = false;

	// Followup_Users_Data: User_Details[];
	Faculty_Users_Data: User_Details[];
	Followup_Users_Data_Filter: User_Details[];

	Intake_Data_List:Intake[];
	Intake_Year_List:Intake_Year[];
	Admission_Details_Tab_View: boolean = false;

	Admission_Tab_Permission: any;
	Admission_Tab_View: boolean = false;
	Admission_Tab_Edit: boolean = false;
	Admission_Tab_Delete: boolean = false;
	Admission_Tab_Save: boolean = false;
	To_user_list = "";

	Task_doc_Description:string;
	// Image_Photo:string;

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
	App_List_University_Name:string;
	Select_TaggedUser: boolean = false;
	ImageFile_Visa: any;
	Display_VisaFile_: string;
	Visa_Document_File_Array: any[];
	Visa_Document_File: Visa_Document = new Visa_Document();
	Visa_Document_Array: Visa_Document[];
	Visa_Document_: Visa_Document = new Visa_Document();
	Visa_Document_Description: string;
	Application_Status_Mode_Data_Temp: ApplicationStatus[];

	group_restriction: number;

	Automatic_Department_: Department = new Department();
	Notification_Department_: Department = new Department();

	Application_Id_Temp_: number;

	ApplicationStatus_Id_Log: number;
	ApplicationStatus_Name_Log: string;

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

	Course_Data_Filter: Course[];
	Country_Data_Filter: Country[];
	DepartmentT_Data_Filter: Department[];
	University_Data_Filter_2: University[];
	Intake_Data_Filter_2: University[];
	Save_button_view:boolean=true;

	Buttonset_view: boolean = true;
	Transfer_Button_view: boolean = true;
	Users: User_Details[];

	Mail_Data_: Send_Welcome_Mail = new Send_Welcome_Mail();
	Program_Course_Temp: Course = new Course();
	Profile_University_Temp: University = new University();
	Profile_Country_Temp: Country = new Country();
	Temp_Date_Followup: Date;
	Course_Temp_Data_: Course = new Course();
	Course_Temp_Array: Course[];
	University_Temp_Data_: University = new University();
	University_Temp_Array: University[];
	Country_Temp_Data_: Country = new Country();
	Country_Temp_Array: Country[];
	Login_User_Name: string;
	Branch_Id: number;
	Usertype: number;
	Login_Department:number
	Extension: number;
	Application_Status_Edit: string;
	cas_task_id: number;
	Followp_History_Data_Details: Followup_History[];
	transfer_student_id_:Number;
	Roundrobin_check:number;

	transfer_source: string;
	Transfer_department_Id: number;
	Transfer_departmentstatus_Id: number;
	Transfer_departmentstatusname: string;

	expandedCourses: boolean[] = [];

	transfer_typeahead: boolean = false;

	Course_Fees_Index: number = -1;
	Course_Fees: Visa = new Visa();
	Course_Fees_Data: Visa[];
	timeDiff: number;
	Application_Transfer_: Application_Transfer = new Application_Transfer();
	Application_List_: Application_List = new Application_List();
	Application_List_Data: Application_List[];

	Application_Id_Log: number;

	Student_Id_Transfer: number;

	To_Account_: Client_Accounts = new Client_Accounts();
	To_Account_Temp: Client_Accounts = new Client_Accounts();
	To_Account_Data: Client_Accounts[];
	Task_Student_Data: Student_Task[];
	Task_Student_Previsa_Data: Student_Task[];
	Task_Student_Preadmission_Data: Student_Task[];
	Task_Student_Tasknew_Data: Student_Task[];
	transferDate:Date;

	Followphistoryview: boolean = false;
	Followupdetailsview: boolean = false;

	Bph_Status_: Bph_Status = new Bph_Status();
	Bph_Status_Temp: Bph_Status = new Bph_Status();
	Bph_Status_Data: Bph_Status[];

	Extension_Data_: Extension_Data = new Extension_Data();

	Fees_Course_: Applicationdetails = new Applicationdetails();
	Fees_Course_Data: Applicationdetails[];
	Course_Fees_Data_Filter: Applicationdetails[];
	Fees_Course_Temp: Applicationdetails = new Applicationdetails();
	Fees_Course_Data_Temp_Array: Applicationdetails[];
	FeesId_History: number;
	Task_Group_Id: number;

	Student_Id_localStorage: string = "";

	DefaultDept_: Branch = new Branch();
	DefaultDept_Temp: Branch = new Branch();
	DefaultDept_Data: Branch[];

	DefaultUsers_: Branch = new Branch();
	DefaultUsers_Temp: Branch = new Branch();
	DefaultUsers_Data: Branch[];

	DefaultStatus_: Branch = new Branch();
	DefaultStatus_Temp: Branch = new Branch();
	DefaultStatus_Data: Branch[];

	Transfer_temp_name: string;

	

	Default_dep_id: number;
	Branch_dep_id: number;
	Martialdetails_view: boolean = true;
	Application_cousellor_permission: any;
	Create_New_Student_Button_Permission:any
	cousellor_section_View: boolean = false;
	CreateStudentButtonView: boolean = false;
	Application_Lodgement_permission: any;
	Lodgement_section_View: boolean = false;

	Automatic_Department_Data: Department[];
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
	Documents1_: Document = new Document();
	Documents_Temp: Document = new Document();
	Documents_Data1: Document[];
	Student_Documents_Data: Student_Document[];
	Student_Documents_Data1: Student_Document[];
	Student_Documents_: Student_Document = new Student_Document();
	Student_Documents_Array: Student_Document[] = [ new Student_Document()];
	Image_Photo: any;
	ImageFile_Doc: any;
	Application_fees_paid:string;

	Payment_Tab_Permission: any;
	Payment_Tab_Edit: boolean = false;
	Payment_Tab_View: boolean = false;
	Payment_Tab_Delete: boolean = false;
	Payment_New_View:boolean=false;
	Paymentmodal_View: boolean = true;
	Payment_Tab_Save: boolean = true;

	Register_Transfer_Department_Id: number;
	allowedFileTypes: string = ''; // Initially no restriction
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
	id_num: any;
	Count_Task_:number
	Followp_Count_data_:number
	tagged_users: Tagged_User[];
	Login_Department_Name:string
	From_Application:string = '0'
	Login_User_Id:number;
	Round_Robin_Status:number;
	Typeahead_Department_Id:number;
	isStatusChanged = false;

	Search_Document_Type: Document_Type = new Document_Type();
Search_Document_Type_Temp: Document_Type = new Document_Type();
Search_Document_Type_Data: Document_Type[];

Student_Id_Notification: string = "";
	Student_Name_Notification: string = "";


	document_view : boolean =false;
	Data_list_view  : boolean =false;
	Task_Details_view : boolean = false;

	selectedApplicationsIdDetails = {
		University_Id: null,
		Country_Id: null,
		Course_Id: null,
		Application_status_Id : null,
	  };

	  process_status_Temp: Process_Status_Details = new Process_Status_Details();
	// process_data_listdata1: any;
	process_data_listdata1 :Student_Fields[];

	PS_Details_Index_Sub_ : number =-1;
	If_file_changed: boolean=false;
	filteredNotificationIntake: any[] = [];


	/*** Added on 13-06-2024 */

	Payment_View:boolean=false;
	Accounts_From_Data: Client_Accounts[];
	enq_clint_id_:number;
	Accounts_To_: Client_Accounts = new Client_Accounts();
	Payment_Tab_Details_: Payment_Tab_Details = new Payment_Tab_Details();
	Payment_Tab_Details_Temp: Payment_Tab_Details = new Payment_Tab_Details();
	Payment_Tab_Details_Data: Payment_Tab_Details[];
	Payment_Tab_Details_Search_Data: Payment_Tab_Details[];
	Accounts_Data_11: Client_Accounts[];
	Accounts_Data_11_Temp: Client_Accounts = new Client_Accounts();
	Accounts_: Client_Accounts = new Client_Accounts();
	Accounts_Temp: Client_Accounts = new Client_Accounts();
	Accounts_Data: Client_Accounts[];
	Accounts_From_Temp: Client_Accounts = new Client_Accounts();
	Accounts_To_Pc_: Client_Accounts = new Client_Accounts();
	Accounts_To_Rc_: Client_Accounts = new Client_Accounts();
	Accounts_To_AcT_: Client_Accounts = new Client_Accounts();
	Accounts_From_Pc_: Client_Accounts = new Client_Accounts();
	Accounts_From_Rc_: Client_Accounts = new Client_Accounts();
	Accounts_From_AcT_: Client_Accounts = new Client_Accounts();
	Accounts_Data_Uni: Client_Accounts[];
	Accounts_Data_Uni_Temp: Client_Accounts = new Client_Accounts();
	Enquiry_Source_Client_Data:any;
	Account_Tab_Details_: Account_Tab_Details = new Account_Tab_Details();
	Account_Tab_Details_Temp: Account_Tab_Details = new Account_Tab_Details();
	Account_Tab_Details_Data: Account_Tab_Details[];
	
	/*** */


	/*** Added on 14-06-2024 */
	Payment_Tab_Amount_View: boolean = false;
	Accounts_To_Enquiry_Source_: Enquiry_Source = new Enquiry_Source();

	Navbar_Leads_View:number;
	Navbar_Leads_View_Menus:number
	Navbar_Leads_View_Menus1:number=0;
	Navbar_Leads_View_Menus2:number=0;
	Name_Show:string;


	/*** */

	/*** Added on 31-07-2024 */
	User_Category_Check_Fees_Receipt_Hide : number = 0;
	Document_type_Data=[];
	acceptedFileTypes: string;
	user_category_New: any;
	Move_to_Freelancer: any;
	FollowUp_Count: any;
	Transfer_Button_Status: number=0;
	// combinedIntakeData: { intake: string; year: string; }[];
	isUploadDocumentVisible: boolean = false;
	Student_Documents: any = {
		Documents_: '',
		Image_Photo: '',
		Description: ''
	  };
	  

	constructor(
		public Sub_Section_Service_: Sub_Section_Service,
		private _http: HttpClient,
		public Company_Service_: Company_Service,
		public Document_Service_:Document_Service,
		public Chat_Window_Service_: Chat_Window_Service,
		public Internship_Service_: Internship_Service,
		public Student_Message_Service: Student_Message_Service,
		public Document_Service: Document_Service,
		public Client_Accounts_Service: Client_Accounts_Service,
		public Subject_Service_: Subject_Service,
		public University_Service_: University_Service,
		public Country_Service_: Country_Service,
		public Student_Service_: Student_Service,
		public Department_Status_Service_:Department_Status_Service,
		public Course_Service_: Course_Service,
		public Intake_Service_: Intake_Service,
		private sanitizer: DomSanitizer,
		public Department_Service_: Department_Service,
		private route: ActivatedRoute,
		private router: Router,
		public dialogBox: MatDialog,
		private datePipe: DatePipe
	) {
		this.socket = io(this.url, {
			transports: ["websocket"],
			auth: {
				token: localStorage.getItem("token"),
			},
		});
		this.socket = io(this.url);
	}
	ngOnInit() {
		
		this.Course_Selection_Data = [];
		this.Login_User = localStorage.getItem("Login_User");
		this.Login_User_Id=Number(this.Login_User)
		this.Login_User_Name = localStorage.getItem("uname");
		this.Branch_Id = Number(localStorage.getItem("Branch"));
		this.Login_Department = Number(localStorage.getItem("Login_Department"));
		this.Extension = Number(localStorage.getItem("Extension"));
		this.Usertype = Number(localStorage.getItem("User_Type"));
		this.Login_Department_Name= localStorage.getItem("Login_Department_Name");
		
		this.From_Application = localStorage.getItem("From_Application");
		if(this.From_Application == '1'){
			localStorage.removeItem("From_Application")
		}else{
			this.From_Application == '0'
		}
		this.Student_Id_Notification =localStorage.getItem("Notification_Student_Id");
		this.Student_Name_Notification =localStorage.getItem("Notification_Student_Name");

		this.Student_Id_localStorage = localStorage.getItem("Student_Id");
		console.log('this.Student_Id_localStorage: ', this.Student_Id_localStorage);
		this.Round_Robin_Status = Number(localStorage.getItem("Round_Robin_Status"));

		this.Application_cousellor_permission = Get_Page_Permission(106);
		console.log('this.Application_cousellor_permission: ', this.Application_cousellor_permission);
		this.Application_Lodgement_permission = Get_Page_Permission(107);
		this.Create_New_Student_Button_Permission = Get_Page_Permission(174);
		console.log('this.Create_New_Student_Button_Permission: ', this.Create_New_Student_Button_Permission);

		if (this.Student_Id_localStorage > "0") {
			this.Student_Id = Number(this.Student_Id_localStorage);
			localStorage.setItem("Student_Id", "0");
		}

		if (this.Student_Id_Notification > "0" || this.Student_Id_Notification == "-1") {
			this.Student_Id = Number(this.Student_Id_Notification);
			localStorage.setItem("Notification_Student_Id", "0");

		}



		this.Navbar_Leads_View_Menus= Number(localStorage.getItem('Navbar_Non_Registered_Lead'));

		this.Navbar_Leads_View_Menus1= Number(localStorage.getItem('Navbar_Non_Registered_Lead1'));
		// this.Navbar_Leads_View_Menus2= Number(localStorage.getItem('Navbar_Non_Registered_Lead2'));

		localStorage.setItem("Navbar_Non_Registered_Lead", "0");
		localStorage.setItem("Navbar_Non_Registered_Lead1", "0");
		// localStorage.setItem("Navbar_Non_Registered_Lead2", "0");

		// console.log('	this.Navbar_Leads_View_Menus: ', 	this.Navbar_Leads_View_Menus);
		this.Navbar_Leads_View = Number(localStorage.getItem("Navbar_Leads_View"));

if(this.Navbar_Leads_View_Menus1==1)
{
	this.Navbar_Leads_View_Menus=1
}
// if(this.Navbar_Leads_View_Menus2==2)
// {
// 	this.Navbar_Leads_View_Menus=2
// }



		if (this.Navbar_Leads_View_Menus == 1) {
			this.Name_Show = 'Student';
			this.Student_Service_.updateNavTitle('Student'); 

			// this.Nav_Title_Show = true;
			localStorage.setItem('Navbar_Non_Registered_Lead', '1');
		} else if (this.Navbar_Leads_View_Menus == 2) {
			this.Name_Show = 'Lead';
			this.Student_Service_.updateNavTitle('Lead'); 

			// this.Nav_Title_Show = true;
			localStorage.setItem('Navbar_Non_Registered_Lead', '2');
		}

		// this.Permissions = Get_Page_Permission(5);
		// this.Remove_Registration_Permissions = Get_Page_Permission(23);
		// this.Registration_Permissions = Get_Page_Permission(22);
		// this.Fees_Collection_Permission=Get_Page_Permission(31)
		// this.Application_Tab_Permission=Get_Page_Permission(40)
		// this.Search_Course_Tab_Permission=Get_Page_Permission(41)
		// this.Fees_Collection_Tab_Permission=Get_Page_Permission(42)
		// this.Statistics_Tab_Permission=Get_Page_Permission(45)
		// this.Documewnt_View_Permission=Get_Page_Permission(49)
		// this.CheckList_View_Permission=Get_Page_Permission(62);

		// if(this.Permissions==undefined || this.Permissions==null)
		//  {
		//     localStorage.removeItem('token');
		//     this.router.navigateByUrl('Home_Page');
		//  }
		// else
		{
			//this.Search_Lead_button();
			//  this.Fees_Collection_Edit=this.Permissions.Edit;
			//  this.Fees_Collection_Delete=this.Permissions.Delete

			this.Page_Load();
			this.Gender_Data = [];
			this.Gender_Data.push({ Gender_Id: 0, Gender_Name: "Select" });
			this.Gender_Data.push({ Gender_Id: 1, Gender_Name: "Male" });
			this.Gender_Data.push({ Gender_Id: 2, Gender_Name: "Female" });
			this.Application_Click_Status = false;
			this.Message_Click_Status = false;
			this.Document_Click_Status = false;
			this.Course_Click_Status = false;
			this.Fee_Collection_Click_Status = false;
			this.Statistics_Click_Status = false;

			// this.Resume_Data=[];
			// this.Resume_Data.push({'Resume_Id':0,'Resume_Name':'Select'});
			// this.Resume_Data.push({'Resume_Id':1,'Resume_Name':'Yes'});
			// this.Resume_Data.push({'Resume_Id':2,'Resume_Name':'No'});

			// this.Passport_Data=[];
			// this.Passport_Data.push({'Passport_Id':0,'Passport_Name':'Select'});
			// this.Passport_Data.push({'Passport_Id':1,'Passport_Name':'Yes'});
			// this.Passport_Data.push({'Passport_Id':2,'Passport_Name':'No'});

			// this.LOR_1_Data=[];
			// this.LOR_1_Data.push({'LOR_1_Id':0,'LOR_1_Name':'Select'});
			// this.LOR_1_Data.push({'LOR_1_Id':1,'LOR_1_Name':'Institution'});
			// this.LOR_1_Data.push({'LOR_1_Id':2,'LOR_1_Name':'Employer'});

			// this.LOR_2_Data=[];
			// this.LOR_2_Data.push({'LOR_2_Id':0,'LOR_2_Name':'Select'});
			// this.LOR_2_Data.push({'LOR_2_Id':1,'LOR_2_Name':'Institution'});
			// this.LOR_2_Data.push({'LOR_2_Id':2,'LOR_2_Name':'Employer'});

			// this.Ielts_Data=[];
			// this.Ielts_Data.push({'Ielts_Id':0,'Ielts_Name':'Select'});
			// this.Ielts_Data.push({'Ielts_Id':1,'Ielts_Name':'Yes'});
			// this.Ielts_Data.push({'Ielts_Id':2,'Ielts_Name':'No'});

			// this.MOI_Data=[];
			// this.MOI_Data.push({'MOI_Id':0,'MOI_Name':'Select'});
			// this.MOI_Data.push({'MOI_Id':1,'MOI_Name':'Yes'});
			// this.MOI_Data.push({'MOI_Id':2,'MOI_Name':'No'});

			// this.SOP_Data=[];
			// this.SOP_Data.push({'SOP_Id':0,'SOP_Name':'Select'});
			// this.SOP_Data.push({'SOP_Id':1,'SOP_Name':'Yes'});
			// this.SOP_Data.push({'SOP_Id':2,'SOP_Name':'No'});

			// if (this.Fees_Collection_Tab_Permission != undefined && this.Fees_Collection_Tab_Permission != null)
			// {
			// this.Fees_Collection_Tab_Edit=this.Fees_Collection_Tab_Permission.Edit
			// this.Fees_Collection_Tab_View=this.Fees_Collection_Tab_Permission.View
			// }
			// if (this.Application_Tab_Permission != undefined && this.Application_Tab_Permission != null)
			// {
			// this.Application_Tab_Edit=this.Application_Tab_Permission.Edit;
			// this.Application_Tab_View=this.Application_Tab_Permission.View
			// }
			// if (this.Search_Course_Tab_Permission != undefined && this.Search_Course_Tab_Permission != null)
			// {
			// this.Search_Course_Tab_View=this.Search_Course_Tab_Permission.View
			// this.Search_Course_Tab_Edit=this.Search_Course_Tab_Permission.Edit
			// }
			// if (this.Statistics_Tab_Permission != undefined && this.Statistics_Tab_Permission != null)
			// {
			// this.Statistics_Tab_View=this.Statistics_Tab_Permission.View
			// this.Statistics_Tab_Edit=this.Statistics_Tab_Permission.Edit
			// }
			// if (this.Documewnt_View_Permission != undefined && this.Documewnt_View_Permission != null)
			// {
			// this.Document_View_Status=this.Documewnt_View_Permission.View
			// //this.Statistics_Tab_Edit=this.Statistics_Tab_Permission.Edit
			// }
			// if (this.Fees_Collection_Permission != undefined && this.Fees_Collection_Permission != null)
			// {
			// this.Fees_Receipt_Edit= this.Fees_Collection_Permission.Edit;
			// this.Fees_Receipt_Delete=this.Fees_Collection_Permission.Delete;
			// }

			if (
				this.Application_cousellor_permission != undefined &&
				this.Application_cousellor_permission != null
			) {
				this.cousellor_section_View =
					this.Application_cousellor_permission.View;
			}

			if(this.Create_New_Student_Button_Permission != undefined && this.Create_New_Student_Button_Permission != null){
				this.CreateStudentButtonView=this.Create_New_Student_Button_Permission.View
				console.log('this.CreateStudentButtonView: ', this.CreateStudentButtonView);
			}

			if (
				this.Application_Lodgement_permission != undefined &&
				this.Application_Lodgement_permission != null
			) {
				this.Lodgement_section_View =
					this.Application_Lodgement_permission.View;
			}
		}
	}

	Page_Load() {
		this.myInnerHeight = window.innerHeight;
		this.myTotalHeight = this.myInnerHeight;
		this.myTotalHeight = this.myTotalHeight - 100;
		this.myInnerHeight = this.myInnerHeight - 220;

		
		this.myHeight = this.myInnerHeight - 150;
		this.myHeightsub = this.myInnerHeight - 330;
		this.myHeightsubtwo = this.myInnerHeight - 100;
		this.myHeightsubthree = this.myInnerHeight - 80;
		this.myHeightsubfour = this.myInnerHeight - 170;
		this.myInnerHeightInner = this.myInnerHeight - 280;
		this.myInnerHeighttemp = this.myInnerHeight;
		
		this.Entry_View = false;
		this.profile_View = true;
		this.Martialdetails_view = true;
		this.tab_view = true;
		this.Buttonset_view = true;
		this.Transfer_Button_view = false;
		this.Transfer_view = false;
		this.application_details_View = false;
		this.language_details_View = false;
		this.course_history_View = false;
		this.Checklist_View = false;
		this.View_document = false;
		this.Course_View = false;
		this.Fee_Collection_View = false;
		this.Applicationmodal_View = false;
this.Data_View= false;

/** Added on 13-06-2024 */
this.Paymentmodal_View=false;

/*** */
		// this.Qualificationmodal_View = false;
		// this.Qualificationnew_View=true;

		this.Qualificationmodal_View = true;
		this.Qualificationnew_View = false;
		this.Workexperiencenew_View = false;

		//this.Qualificationmodal_View = false;
		this.Feesmodal_View = false;
		this.Visamodal_View = false;
		this.Pre_Visamodal_View = false;
		this.Reviewmodal_View = false;
		this.Reviewdetails_View = false;
		this.Visa_View = false;
		this.Invoice_View = false;
		this.Invoicemodal_View = false;
		this.Visa_Click_Status = false;
		this.History_View = false;
		this.Pre_Visa_View = false;
		this.Tasknew_View = false;
		this.Tasknewmodal_View = false;
		this.Pre_Admission_View = false;
		this.Pre_AdmissionModal_View = false;
		this.Pre_Visa_Checklist_View=false;
		this.Pre_Visachecklistmodal_View=false;
		//this.Review=false;
		this.New_view = true;
		this.Search_Div = true;
		//
		// if(this.Course_Data.length==0)
		// {
		//      this.Start=0;
		// }

		//this.Task_Item_Dropdown();
		this.Load_Automatic_Departments();
		this.Resume_Mode_Dropdown();

		this.Document_Type_Dropdown();
		debugger;
		this.Get_Student_PageLoadData_Dropdowns();
			debugger;
		//this.Passport_Mode_Dropdown();
		this.LOR1_Mode_Dropdown();
		this.LOR2_Mode_Dropdown();
		this.MOI_Mode_Dropdown();
		this.SOP_Mode_Dropdown();
		this.Load_Application_status_forchangestatus();
		this.Load_StatusType();
	

		//this.IELTS_Mode_Dropdown();
		//this.Load_Intake();
		//this.Load_Enquiryfor();
		//this.Load_Shore();
		this.Load_Profile_Intake();
		//this.Load_Intake_year();
		//this.Load_Agents();
		//this.Load_application_status();
		//this.Load_Marital_Status();
		//this.Load_Visa_Type();
		this.Get_Checklist();
		this.Get_Last_Followup();
		this.Statistics_View = false;
		this.message_View = false;
		this.Look_In_Date = true;
		this.Search_By_ = 1;
		this.Is_Registered = 1;
		this.clr_receipt();
		this.Clr_Student();
		this.Clr_ApplicationDetails();
		this.clr_Visa_Tab();
		this.clr_Invoice_Tab();
		this.Clr_Pre_Visa();
		this.Clr_Pre_Admission();
		this.Clr_Document();

		//this.Clr_Course()
		//this.Public_Search_Course();

		// this.Get_Menu_Status(5, this.Login_User);
		// this.Get_Menu_Status(23, this.Login_User);
		// this.Get_Menu_Status(22, this.Login_User);
		// this.Get_Menu_Status(31, this.Login_User);
		// this.Get_Menu_Status(40, this.Login_User);
		// this.Get_Menu_Status(41, this.Login_User);
		// this.Get_Menu_Status(42, this.Login_User);
		// this.Get_Menu_Status(45, this.Login_User);

		// this.Get_Menu_Status(60, this.Login_User);
		// this.Get_Menu_Status(61, this.Login_User);
		// this.Get_Menu_Status(63, this.Login_User);
		// this.Get_Menu_Status(64, this.Login_User);
		// this.Get_Menu_Status(65, this.Login_User);
		// this.Get_Menu_Status(68, this.Login_User);
		// this.Get_Menu_Status(69, this.Login_User);

		// this.Get_Menu_Status(72, this.Login_User);

		// this.Get_Menu_Status(73, this.Login_User);
		// this.Get_Menu_Status(75, this.Login_User);
		// this.Get_Menu_Status(76, this.Login_User);
		// this.Get_Menu_Status(77, this.Login_User);
		// this.Get_Menu_Status(78, this.Login_User);
		// this.Get_Menu_Status(79, this.Login_User);
		// this.Get_Menu_Status(80, this.Login_User);
		// this.Get_Menu_Status(81, this.Login_User);
		// this.Get_Menu_Status(82, this.Login_User);
		// this.Get_Menu_Status(83, this.Login_User);
		// this.Get_Menu_Status(84, this.Login_User);
		// this.Get_Menu_Status(85, this.Login_User);
		// this.Get_Menu_Status(86, this.Login_User);
		// this.Get_Menu_Status(87, this.Login_User);
		// this.Get_Menu_Status(88, this.Login_User);
		// this.Get_Menu_Status(89, this.Login_User);
		// this.Get_Menu_Status(90, this.Login_User);
		this.Get_Menu_Status_Multiple(
			"5,23,22,31,40,41,42,45,60,61,63,64,65,68,69,72,73,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,97,98,99,102,103,109,112,114,115,116,117,118,119,125,146,179",
			this.Login_User
		);
		//  this.Get_Menu_Status(66,this.Login_User)

		this.Load_Dropdowns();
		//this.Search_Document();
		// this.Get_Lead_Load_Data();
		this.Get_Lead_Load_Data_ByUser(this.Login_User);
		this.Pointer_Start_ = 1;
		this.Pointer_Stop_Course = this.Page_Length_Course;
		this.Black_Stop = this.Page_Length;
		this.Red_Stop = this.Page_Length;
		// this.Pointer_Stop_Course =this.Page_Length;
		this.Pointer_Stop_ = this.Page_Length;
		this.Black_Stop = this.Page_Length;
		this.Red_Stop_Course = this.Page_Length_Course;
		this.Remove_Registration_Visibility = false;
		this.Registration_Visiblility = false;
		this.Remove_Activte_Visiblility = false;
		this.Activte_Visiblility = false;
		this.Agent_View = false;

	}

	async Get_site_Pageload() {
		const response = await this.Student_Service_.Get_site_Pageload();

		this.Country1_Data = response[0];
		this.Country_Temp.Country_Id = 0;
		this.Country_Temp.Country_Name = "All";
		this.Country1_Data.unshift(Object.assign({}, this.Country_Temp));
		this.Country_ = this.Country1_Data[0];
		//this.Application_Country_ = this.Country1_Data[0];

		this.Ielts_Data = response[1];
		this.Ielts_Temp.Ielts_Id = 0;
		this.Ielts_Temp.Ielts_Name = "All";
		this.Ielts_Data.unshift(Object.assign({}, this.Ielts_Temp));
		this.Ielts_ = this.Ielts_Data[0];

		this.Intake_Data = response[5];
		this.Intake_Year_Data = response[6];
		// this.Intake_Temp.Intake_Id = 0;
		// this.Intake_Temp.Intake_Name = "All";
		// this.Intake_Data.unshift(Object.assign({},this.Intake_Temp));
		// this.Intake_ = this.Intake_Data[0];

		this.Sub_Section_Data = response[9];

		this.Level_Detail_Data = response[4];
		this.Level_Detail_Temp.Level_Detail_Id = 0;
		this.Level_Detail_Temp.Level_Detail_Name = "All";
		this.Level_Detail_Data.unshift(Object.assign({}, this.Level_Detail_Temp));
		this.Level_Detail_ = this.Level_Detail_Data[0];

		// this.University_Data = response[7];
		// this.University_Temp.University_Id = 0;
		// this.University_Temp.University_Name = "All";
		// this.University_Data.unshift(Object.assign({},this.University_Temp));
		// this.University_ = this.University_Data[0];

		this.Duration_Data = response[3];

		this.Subject_Data = response[2];
		// this.Subject_Temp.Subject_Id = 0;
		// this.Subject_Temp.Subject_Name = "All";
		//this.Subject_Data.unshift(this.Subject_Temp);
		// this.Subject_= this.Subject_Data[0];
	}
	isMobileMenu() {
		if ($(window).width() > 991) {
			return false;
		}
		return true;
	}
	isDesktopMenu() {
		if ($(window).width() < 991) {
			return false;
		}
		return true;
	}
	Get_Sub_Section_From_Course(Subject_1_temp) {
		this.Subject_ = Subject_1_temp;
		this.issLoading = true;
		this.Sub_Section_Service_.Get_Sub_Section_From_Course(
			Subject_1_temp.Subject_Id
		).subscribe(
			(Save_status) => {
				this.Sub_Section_Data = Save_status[0];

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

	// Get_Menu_Status(Menu_id, Login_user_id) {
	// 	this.issLoading = true;
	// 	this.Student_Service_.Get_Menu_Status(Menu_id, Login_user_id).subscribe(
	// 		(Rows) => {
	// 			if (Menu_id == 5)
	// 				if (Rows[0][0] == undefined) {
	// 					localStorage.removeItem("token");
	// 					this.router.navigateByUrl("Home_Page");
	// 				}

	// 			var a = Rows[0];

	// 			if (Rows[0][0] != undefined)
	// 				if (Rows[0][0].View > 0) {
	// 					if (Menu_id == 5) {
	// 						this.Permissions = Rows[0][0];
	// 						if (this.Permissions == undefined || this.Permissions == null) {
	// 							localStorage.removeItem("token");
	// 							this.router.navigateByUrl("Home_Page");
	// 						}
	// 						this.Student_Edit = this.Permissions.Edit;
	// 						this.Student_Save = this.Permissions.Save;
	// 						this.Student_Delete = this.Permissions.Delete;
	// 					} else if (Menu_id == 23) {
	// 						this.Remove_Registration_Permissions = Rows[0][0];

	// 						if (this.Remove_Registration_Permissions.View == true)
	// 							this.Remove_Registration_Visibility = true;
	// 					} else if (Menu_id == 22) {
	// 						this.Registration_Permissions = Rows[0][0];

	// 						if (this.Registration_Permissions.View == true)
	// 							this.Registration_Visiblility = true;
	// 					} else if (Menu_id == 31) {

	// 						this.Fees_Collection_Permission = Rows[0][0];
	// 						if (
	// 							this.Fees_Collection_Permission != undefined &&
	// 							this.Fees_Collection_Permission != null
	// 						) {

	// 							this.Fees_Receipt_Edit = this.Fees_Collection_Permission.Edit;
	// 							this.Fees_Receipt_Delete =
	// 								this.Fees_Collection_Permission.Delete;
	// 							this.Fees_Receipt_Save = this.Fees_Collection_Permission.Save;
	// 						}
	// 					} else if (Menu_id == 40) {
	// 						this.Course_History_Tab_Permission = Rows[0][0];
	// 						if (
	// 							this.Course_History_Tab_Permission != undefined &&
	// 							this.Course_History_Tab_Permission != null
	// 						) {
	// 							this.Course_History_Tab_Edit =
	// 								this.Course_History_Tab_Permission.Edit;
	// 							this.Course_History_Tab_View =
	// 								this.Course_History_Tab_Permission.View;
	// 						}
	// 					} else if (Menu_id == 61) {
	// 						this.Checklist_Tab_Permission = Rows[0][0];
	// 						if (
	// 							this.Checklist_Tab_Permission != undefined &&
	// 							this.Checklist_Tab_Permission != null
	// 						) {
	// 							this.Checklist_Tab_Edit = this.Checklist_Tab_Permission.Edit;
	// 							this.Checklist_Tab_View = this.Checklist_Tab_Permission.View;
	// 						}
	// 					} else if (Menu_id == 60) {
	// 						this.Applications_Details_Tab_Permission = Rows[0][0];
	// 						if (
	// 							this.Applications_Details_Tab_Permission != undefined &&
	// 							this.Applications_Details_Tab_Permission != null
	// 						) {
	// 							this.Applications_Details_Tab_Edit =
	// 								this.Applications_Details_Tab_Permission.Edit;
	// 							this.Applications_Details_Tab_View =
	// 								this.Applications_Details_Tab_Permission.View;
	// 							this.Applications_Details_Tab_Delete =
	// 								this.Applications_Details_Tab_Permission.Delete;
	// 							this.Applications_Details_Tab_Save =
	// 								this.Applications_Details_Tab_Permission.Save;
	// 							// this.Agent_View=true;
	// 						}
	// 					} else if (Menu_id == 41) {
	// 						this.Search_Course_Tab_Permission = Rows[0][0];
	// 						if (
	// 							this.Search_Course_Tab_Permission != undefined &&
	// 							this.Search_Course_Tab_Permission != null
	// 						) {
	// 							this.Search_Course_Tab_View =
	// 								this.Search_Course_Tab_Permission.View;
	// 							this.Search_Course_Tab_Edit =
	// 								this.Search_Course_Tab_Permission.Edit;
	// 						}
	// 					} else if (Menu_id == 42) {
	// 						this.Fees_Collection_Tab_Permission = Rows[0][0];
	// 						if (
	// 							this.Fees_Collection_Tab_Permission != undefined &&
	// 							this.Fees_Collection_Tab_Permission != null
	// 						) {
	// 							this.Fees_Collection_Tab_Edit =
	// 								this.Fees_Collection_Tab_Permission.Edit;
	// 							this.Fees_Collection_Tab_View =
	// 								this.Fees_Collection_Tab_Permission.View;
	// 						}
	// 					} else if (Menu_id == 45) {
	// 						// this.Statistics_Tab_Permission=Rows[0][0];
	// 						// if (this.Statistics_Tab_Permission != undefined && this.Statistics_Tab_Permission != null)
	// 						// {
	// 						//     this.Statistics_Tab_View=this.Statistics_Tab_Permission.View
	// 						//     this.Statistics_Tab_Edit=this.Statistics_Tab_Permission.Edit
	// 						// }
	// 					}
	// 					// else if (Menu_id==49)
	// 					// {

	// 					//     this.Documewnt_View_Permission=Rows[0][0];
	// 					//     if (this.Documewnt_View_Permission != undefined && this.Documewnt_View_Permission != null)
	// 					//     {

	// 					//         this.Document_View_Status=this.Documewnt_View_Permission.View

	// 					//     }

	// 					// }
	// 					else if (Menu_id == 64) {
	// 						this.Remove_Activity_Permissions = Rows[0][0];

	// 						if (this.Remove_Activity_Permissions.View == true)
	// 							this.Remove_Activte_Visiblility = true;
	// 					} else if (Menu_id == 63) {
	// 						this.Activity_Permissions = Rows[0][0];

	// 						if (this.Activity_Permissions.View == true)
	// 							this.Activte_Visiblility = true;
	// 					}
	// 					else if (Menu_id == 65)
	// 					 {
	// 						this.Agent_Permissions = Rows[0][0];

	// 						if (this.Agent_Permissions.View == true)
	// 						 this.Agent_View = true;

	// 					}
	// 					else if (Menu_id == 68) {
	// 						this.Invoice_Tab_Permission = Rows[0][0];
	// 						if (
	// 							this.Invoice_Tab_Permission != undefined &&
	// 							this.Invoice_Tab_Permission != null
	// 						) {
	// 							this.Invoice_Tab_View = this.Invoice_Tab_Permission.View;
	// 							this.Invoice_Tab_Edit = this.Invoice_Tab_Permission.Edit;
	// 						}
	// 					}
	// 					else if (Menu_id == 69) {
	// 						this.Visa_Tab_Permission = Rows[0][0];
	// 						if (
	// 							this.Visa_Tab_Permission != undefined &&
	// 							this.Visa_Tab_Permission != null
	// 						)

	// 						 {
	// 							this.Visa_Tab_Edit = this.Visa_Tab_Permission.Edit;
	// 							this.Visa_Tab_View = this.Visa_Tab_Permission.View;
	// 							this.Visa_Tab_Delete = this.Visa_Tab_Permission.Delete;
	// 							this.Visa_Tab_Save = this.Visa_Tab_Permission.Save;
	// 						}
	// 					}

	// 					else if (Menu_id == 97) {
	// 						this.Pre_Admission_Tab_Permission = Rows[0][0];
	// 						if (
	// 							this.Pre_Admission_Tab_Permission != undefined &&
	// 							this.Pre_Admission_Tab_Permission != null
	// 						)

	// 						 {
	// 							this.Pre_Admission_Tab_Edit = this.Pre_Admission_Tab_Permission.Edit;
	// 							this.Pre_Admission_Tab_View = this.Pre_Admission_Tab_Permission.View;
	// 							this.Pre_Admission_Tab_Delete = this.Pre_Admission_Tab_Permission.Delete;
	// 							this.Pre_Admission_Tab_Save = this.Pre_Admission_Tab_Permission.Save;
	// 						}
	// 					}

	// 					else if (Menu_id == 73) {
	// 						this.Pre_Visa_Tab_Permission = Rows[0][0];
	// 						if (
	// 							this.Pre_Visa_Tab_Permission != undefined &&
	// 							this.Pre_Visa_Tab_Permission != null
	// 						)

	// 						 {
	// 							this.Pre_Visa_Tab_Edit = this.Pre_Visa_Tab_Permission.Edit;
	// 							this.Pre_Visa_Tab_View = this.Pre_Visa_Tab_Permission.View;
	// 							this.Pre_Visa_Tab_Delete = this.Pre_Visa_Tab_Permission.Delete;
	// 							this.Pre_Visa_Tab_Save = this.Pre_Visa_Tab_Permission.Save;
	// 						}
	// 					}

	// 					else if (Menu_id == 72)
	// 					 {
	// 						this.Review_Tab_Permission = Rows[0][0];
	// 						if (
	// 							this.Review_Tab_Permission != undefined &&
	// 							this.Review_Tab_Permission != null
	// 						)

	// 						 {
	// 							this.Review_Tab_Edit = this.Review_Tab_Permission.Edit;
	// 							this.Review_Tab_View = this.Review_Tab_Permission.View;
	// 							this.Review_Tab_Delete = this.Review_Tab_Permission.Delete;
	// 							this.Review_Tab_Save = this.Review_Tab_Permission.Save;
	// 						}
	// 					}

	// 					else if (Menu_id == 75)
	// 					 {

	// 						this.Change_Status_Button_Permission = Rows[0][0];

	// 						if (this.Change_Status_Button_Permission.View == true)
	// 						 this.Change_Status_Button_View = true;

	// 					}
	// 					else if (Menu_id == 76)
	// 					 {
	// 						this.Student_Approve_Button_Permission = Rows[0][0];

	// 						if (this.Student_Approve_Button_Permission.View == true)
	// 						 this.Student_Approve_Button_View = true;

	// 					}
	// 					else if (Menu_id == 77)
	// 					 {
	// 						this.Remove_Approval_Button_Permission = Rows[0][0];

	// 						if (this.Remove_Approval_Button_Permission.View == true)
	// 						 this.Remove_Approval_Button_View = true;

	// 					}

	// 					else if (Menu_id == 78)
	// 					 {

	// 						this.Application_Active_Button_Permission = Rows[0][0];

	// 						if (this.Application_Active_Button_Permission.View == true)
	// 						 this.Application_Active_Button_View = true;

	// 					}
	// 					else if (Menu_id == 79)
	// 					 {
	// 						this.Application_Deactive_Button_Permission = Rows[0][0];

	// 						if (this.Application_Deactive_Button_Permission.View == true)
	// 						 this.Application_Deactive_Button_View = true;

	// 					}

	// 					else if (Menu_id == 80)
	// 					 {
	// 						this.Move_To_PreApplication_Button_Permission = Rows[0][0];

	// 						if (this.Move_To_PreApplication_Button_Permission.View == true)
	// 						 this.Move_To_PreApplication_Button_View = true;

	// 					}

	// 					else if (Menu_id == 81)
	// 					 {
	// 						this.Send_To_Bph_Button_Permission = Rows[0][0];

	// 						if (this.Send_To_Bph_Button_Permission.View == true)
	// 						 this.Send_To_Bph_Button_View = true;

	// 					}

	// 					else if (Menu_id == 82)
	// 					 {
	// 						this.Visa_Rejection_Button_Permission = Rows[0][0];

	// 						if (this.Visa_Rejection_Button_Permission.View == true)
	// 						 this.Visa_Rejection_Button_View = true;

	// 					}
	// 					else if (Menu_id == 83)
	// 					 {
	// 						this.Cas_Transfer_Button_Permission = Rows[0][0];

	// 						if (this.Cas_Transfer_Button_Permission.View == true)
	// 						 this.Cas_Transfer_Button_View = true;

	// 					}
	// 					else if (Menu_id == 84)
	// 					 {
	// 						this.Refund_Transfer_Button_Permission = Rows[0][0];

	// 						if (this.Refund_Transfer_Button_Permission.View == true)
	// 						 this.Refund_Transfer_Button_View = true;

	// 					}
	// 					else if (Menu_id == 85)
	// 					 {
	// 						this.Counsilor_Transfer_Button_Permission = Rows[0][0];

	// 						if (this.Counsilor_Transfer_Button_Permission.View == true)
	// 						 this.Counsilor_Transfer_Button_View = true;

	// 					}
	// 					else if (Menu_id == 86)
	// 					 {
	// 						this.Application_Transfer_Button_Permission = Rows[0][0];

	// 						if (this.Application_Transfer_Button_Permission.View == true)
	// 						 this.Application_Transfer_Button_View = true;

	// 					}
	// 					else if (Menu_id == 87)
	// 					 {
	// 						this.Admission_Transfer_Button_Permission = Rows[0][0];

	// 						if (this.Admission_Transfer_Button_Permission.View == true)
	// 						 this.Admission_Transfer_Button_View = true;

	// 					}
	// 					else if (Menu_id == 88)
	// 					 {
	// 						this.PreAdmission_Transfer_Button_Permission = Rows[0][0];

	// 						if (this.PreAdmission_Transfer_Button_Permission.View == true)
	// 						 this.PreAdmission_Transfer_Button_View = true;

	// 					}
	// 					else if (Menu_id == 89)
	// 					 {
	// 						this.PreVisa_Transfer_Button_Permission = Rows[0][0];

	// 						if (this.PreVisa_Transfer_Button_Permission.View == true)
	// 						 this.PreVisa_Transfer_Button_View = true;

	// 					}
	// 					else if (Menu_id == 90)
	// 					 {
	// 						this.Visa_Transfer_Button_Permission = Rows[0][0];

	// 						if (this.Visa_Transfer_Button_Permission.View == true)
	// 						 this.Visa_Transfer_Button_View = true;

	// 					}

	// 				}
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

	Get_Menu_Status_Multiple(Menu_id, Login_user_id) {
		this.issLoading = true;

		this.Student_Service_.Get_Menu_Status_Multiple(
			Menu_id,
			Login_user_id
		).subscribe(
			(Rows) => {
				
				if (Menu_id == 5)
					if (Rows[0][0] == undefined) {
						localStorage.removeItem("token");
						this.router.navigateByUrl("Home_Page");
					}
				Rows = Rows[0];
				this.temparray = Rows;

				//if (Rows[0][0] != undefined)
				for (
					var i = 0;
					i < this.temparray.length;
					i++ //if (Rows[i][0].View > 0)
				) {
					Menu_id = Rows[i]["menu_id"];
					if (Menu_id == 5) {
						this.Permissions = Rows[i];
						if (this.Permissions == undefined || this.Permissions == null) {
							localStorage.removeItem("token");
							this.router.navigateByUrl("Home_Page");
						}
						this.Student_Edit = this.Permissions.Edit;
						this.Student_Save = this.Permissions.Save;
						this.Student_Delete = this.Permissions.Delete;
					} else if (Menu_id == 23) {
						this.Remove_Registration_Permissions = Rows[i];

						if (this.Remove_Registration_Permissions.View == true)
							this.Remove_Registration_Visibility = true;
					} else if (Menu_id == 22) {
						this.Registration_Permissions = Rows[i];

						if (this.Registration_Permissions.View == true)
							this.Registration_Visiblility = true;
					} else if (Menu_id == 31) {
						this.Fees_Collection_Permission = Rows[i];
						if (
							this.Fees_Collection_Permission != undefined &&
							this.Fees_Collection_Permission != null
						) {
							this.Fees_Receipt_Edit = this.Fees_Collection_Permission.Edit;
							this.Fees_Receipt_Delete = this.Fees_Collection_Permission.Delete;
							this.Fees_Receipt_Save = this.Fees_Collection_Permission.Save;
							this.Fees_Collection_Tab_View =
								this.Fees_Collection_Permission.View;
						}
					} else if (Menu_id == 40) {
						this.Course_History_Tab_Permission = Rows[i];
						if (
							this.Course_History_Tab_Permission != undefined &&
							this.Course_History_Tab_Permission != null
						) {
							this.Course_History_Tab_Edit =
								this.Course_History_Tab_Permission.Edit;
							this.Course_History_Tab_View =
								this.Course_History_Tab_Permission.View;
						}
					} else if (Menu_id == 61) {
						this.Checklist_Tab_Permission = Rows[i];
						if (
							this.Checklist_Tab_Permission != undefined &&
							this.Checklist_Tab_Permission != null
						) {
							this.Checklist_Tab_Edit = this.Checklist_Tab_Permission.Edit;
							this.Checklist_Tab_View = this.Checklist_Tab_Permission.View;
						}
					} else if (Menu_id == 60) {
						this.Applications_Details_Tab_Permission = Rows[i];
						if (
							this.Applications_Details_Tab_Permission != undefined &&
							this.Applications_Details_Tab_Permission != null
						) {
							this.Applications_Details_Tab_Edit =
								this.Applications_Details_Tab_Permission.Edit;
							this.Applications_Details_Tab_View =
								this.Applications_Details_Tab_Permission.View;
							this.Applications_Details_Tab_Delete =
								this.Applications_Details_Tab_Permission.Delete;
							this.Applications_Details_Tab_Save =
								this.Applications_Details_Tab_Permission.Save;
							// this.Agent_View=true;
						}
					} else if (Menu_id == 41) {
						this.Search_Course_Tab_Permission = Rows[i];
						if (
							this.Search_Course_Tab_Permission != undefined &&
							this.Search_Course_Tab_Permission != null
						) {
							this.Search_Course_Tab_View =
								this.Search_Course_Tab_Permission.View;
							this.Search_Course_Tab_Edit =
								this.Search_Course_Tab_Permission.Edit;
						}
					} else if (Menu_id == 42) {
						this.Fees_Collection_Tab_Permission = Rows[i];
						if (
							this.Fees_Collection_Tab_Permission != undefined &&
							this.Fees_Collection_Tab_Permission != null
						) {
							this.Fees_Collection_Tab_Edit =
								this.Fees_Collection_Tab_Permission.Edit;
							// this.Fees_Collection_Tab_View =
							// 	this.Fees_Collection_Tab_Permission.View;
						}
					} else if (Menu_id == 45) {
						// this.Statistics_Tab_Permission=Rows[0][0];
						// if (this.Statistics_Tab_Permission != undefined && this.Statistics_Tab_Permission != null)
						// {
						//     this.Statistics_Tab_View=this.Statistics_Tab_Permission.View
						//     this.Statistics_Tab_Edit=this.Statistics_Tab_Permission.Edit
						// }
					}
					// else if (Menu_id==49)
					// {

					//     this.Documewnt_View_Permission=Rows[0][0];
					//     if (this.Documewnt_View_Permission != undefined && this.Documewnt_View_Permission != null)
					//     {

					//         this.Document_View_Status=this.Documewnt_View_Permission.View

					//     }

					// }
					else if (Menu_id == 64) {
						this.Remove_Activity_Permissions = Rows[i];

						if (this.Remove_Activity_Permissions.View == true)
							this.Remove_Activte_Visiblility = true;
					} else if (Menu_id == 63) {
						this.Activity_Permissions = Rows[i];

						if (this.Activity_Permissions.View == true)
							this.Activte_Visiblility = true;
					} else if (Menu_id == 65) {
						this.Agent_Permissions = Rows[i];

						if (this.Agent_Permissions.View == true) this.Agent_View = true;
					} 
					
					else if (Menu_id == 68) {
						this.Invoice_Tab_Permission = Rows[i];
						if (
							this.Invoice_Tab_Permission != undefined &&
							this.Invoice_Tab_Permission != null
						) {
							this.Invoice_Tab_View = this.Invoice_Tab_Permission.View;
							this.Invoice_Tab_Edit = this.Invoice_Tab_Permission.Edit;
						}
					} 
					else if (Menu_id == 179) {
						
						this.Change_Transfer_Button_Permission = Rows[i];

						if (this.Change_Transfer_Button_Permission.View == true)
							this.Change_Transfer_Button_View = true;
					}

					// else if (Menu_id == 114) {
					// 	this.Department_Typeahead_Permission = Rows[i];
					// 	if (
					// 		this.Department_Typeahead_Permission != undefined &&
					// 		this.Department_Typeahead_Permission != null
					// 	) {
					// 		this.Department_Typeahead_View = this.Department_Typeahead_Permission.View;
							
					// 	}
					// } 

					// else if (Menu_id == 115) {
					// 	this.Branch_Typeahead_Permission = Rows[i];
					// 	if (
					// 		this.Branch_Typeahead_Permission != undefined &&
					// 		this.Branch_Typeahead_Permission != null
					// 	) {
					// 		this.Branch_Typeahead_View = this.Branch_Typeahead_Permission.View;
							
					// 	}
					// } 

					else if (Menu_id == 125) {
						
						this.Profile_Refund_Permission = Rows[i];
						if (
							this.Profile_Refund_Permission != undefined &&
							this.Profile_Refund_Permission != null
						) {
							this.Profile_Refund_View = this.Profile_Refund_Permission.View;
							
						}
					} 

				

					// else if (Menu_id == 116) {
					// 	this.Tostaff_Typeahead_Permission = Rows[i];
					// 	if (
					// 		this.Tostaff_Typeahead_Permission != undefined &&
					// 		this.Tostaff_Typeahead_Permission != null
					// 	) {
					// 		this.Tostaff_Typeahead_View = this.Tostaff_Typeahead_Permission.View;
							
					// 	}
					// } 


					else if (Menu_id == 117) {
						this.Student_approved_Status_Permission = Rows[i];
						if (
							this.Student_approved_Status_Permission != undefined &&
							this.Student_approved_Status_Permission != null
						) {
							this.Student_approved_Status_View = this.Student_approved_Status_Permission.View;
							
						}
					} 


					else if (Menu_id == 118) {
						this.Auditor_Status_Permission = Rows[i];
						if (
							this.Auditor_Status_Permission != undefined &&
							this.Auditor_Status_Permission != null
						) {
							this.Auditor_Status_View = this.Auditor_Status_Permission.View;
							
						}
					} 

					else if (Menu_id == 119) {
						this.Payment_Status_Permission = Rows[i];
						if (
							this.Payment_Status_Permission != undefined &&
							this.Payment_Status_Permission != null
						) {
							this.Payment_Status_View = this.Payment_Status_Permission.View;
							
						}
					} 
					
					
					else if (Menu_id == 69) {
						this.Visa_Tab_Permission = Rows[i];
						if (
							this.Visa_Tab_Permission != undefined &&
							this.Visa_Tab_Permission != null
						) {
							this.Visa_Tab_Edit = this.Visa_Tab_Permission.Edit;
							this.Visa_Tab_View = this.Visa_Tab_Permission.View;
							this.Visa_Tab_Delete = this.Visa_Tab_Permission.Delete;
							this.Visa_Tab_Save = this.Visa_Tab_Permission.Save;
						}
					} else if (Menu_id == 97) {
						this.Pre_Admission_Tab_Permission = Rows[i];
						if (
							this.Pre_Admission_Tab_Permission != undefined &&
							this.Pre_Admission_Tab_Permission != null
						) {
							this.Pre_Admission_Tab_Edit =
								this.Pre_Admission_Tab_Permission.Edit;
							this.Pre_Admission_Tab_View =
								this.Pre_Admission_Tab_Permission.View;
							this.Pre_Admission_Tab_Delete =
								this.Pre_Admission_Tab_Permission.Delete;
							this.Pre_Admission_Tab_Save =
								this.Pre_Admission_Tab_Permission.Save;
						}
					} else if (Menu_id == 73) {
						this.Pre_Visa_Tab_Permission = Rows[i];
						if (
							this.Pre_Visa_Tab_Permission != undefined &&
							this.Pre_Visa_Tab_Permission != null
						) {
							this.Pre_Visa_Tab_Edit = this.Pre_Visa_Tab_Permission.Edit;
							this.Pre_Visa_Tab_View = this.Pre_Visa_Tab_Permission.View;
							this.Pre_Visa_Tab_Delete = this.Pre_Visa_Tab_Permission.Delete;
							this.Pre_Visa_Tab_Save = this.Pre_Visa_Tab_Permission.Save;
						}
					} else if (Menu_id == 72) {
						this.Review_Tab_Permission = Rows[i];
						if (
							this.Review_Tab_Permission != undefined &&
							this.Review_Tab_Permission != null
						) {
							this.Review_Tab_Edit = this.Review_Tab_Permission.Edit;
							this.Review_Tab_View = this.Review_Tab_Permission.View;
							this.Review_Tab_Delete = this.Review_Tab_Permission.Delete;
							this.Review_Tab_Save = this.Review_Tab_Permission.Save;
						}
					} else if (Menu_id == 75) {
						this.Change_Status_Button_Permission = Rows[i];

						if (this.Change_Status_Button_Permission.View == true)
							this.Change_Status_Button_View = true;
					} else if (Menu_id == 76) {
						this.Student_Approve_Button_Permission = Rows[i];

						if (this.Student_Approve_Button_Permission.View == true)
							this.Student_Approve_Button_View = true;
					} else if (Menu_id == 77) {
						this.Remove_Approval_Button_Permission = Rows[i];

						if (this.Remove_Approval_Button_Permission.View == true)
							this.Remove_Approval_Button_View = true;
					} else if (Menu_id == 78) {
						this.Application_Active_Button_Permission = Rows[i];

						if (this.Application_Active_Button_Permission.View == true)
							this.Application_Active_Button_View = true;
					} else if (Menu_id == 79) {
						this.Application_Deactive_Button_Permission = Rows[i];

						if (this.Application_Deactive_Button_Permission.View == true)
							this.Application_Deactive_Button_View = true;
					} else if (Menu_id == 80) {
						this.Move_To_PreApplication_Button_Permission = Rows[i];

						if (this.Move_To_PreApplication_Button_Permission.View == true)
							this.Move_To_PreApplication_Button_View = true;
					} else if (Menu_id == 81) {
						this.Send_To_Bph_Button_Permission = Rows[i];

						if (this.Send_To_Bph_Button_Permission.View == true)
							this.Send_To_Bph_Button_View = true;
					} else if (Menu_id == 82) {
						this.Visa_Rejection_Button_Permission = Rows[i];

						if (this.Visa_Rejection_Button_Permission.View == true)
							this.Visa_Rejection_Button_View = true;
					} else if (Menu_id == 102) {
						this.Closed_Button_Permission = Rows[i];

						if (this.Closed_Button_Permission.View == true)
							this.Closed_Button_View = true;
					} else if (Menu_id == 83) {
						this.Cas_Transfer_Button_Permission = Rows[i];

						if (this.Cas_Transfer_Button_Permission.View == true)
							this.Cas_Transfer_Button_View = true;
					} else if (Menu_id == 84) {
						this.Refund_Transfer_Button_Permission = Rows[i];

						if (this.Refund_Transfer_Button_Permission.View == true)
							this.Refund_Transfer_Button_View = true;
					} else if (Menu_id == 85) {
						this.Counsilor_Transfer_Button_Permission = Rows[i];

						if (this.Counsilor_Transfer_Button_Permission.View == true)
							this.Counsilor_Transfer_Button_View = true;
					} else if (Menu_id == 86) {
						this.Application_Transfer_Button_Permission = Rows[i];

						if (this.Application_Transfer_Button_Permission.View == true)
							this.Application_Transfer_Button_View = true;
					} else if (Menu_id == 87) {
						this.Admission_Transfer_Button_Permission = Rows[i];

						if (this.Admission_Transfer_Button_Permission.View == true)
							this.Admission_Transfer_Button_View = true;
					} else if (Menu_id == 88) {
						this.PreAdmission_Transfer_Button_Permission = Rows[i];

						if (this.PreAdmission_Transfer_Button_Permission.View == true)
							this.PreAdmission_Transfer_Button_View = true;
					} else if (Menu_id == 89) {
						this.PreVisa_Transfer_Button_Permission = Rows[i];

						if (this.PreVisa_Transfer_Button_Permission.View == true)
							this.PreVisa_Transfer_Button_View = true;
					} else if (Menu_id == 90) {
						this.Visa_Transfer_Button_Permission = Rows[i];

						if (this.Visa_Transfer_Button_Permission.View == true)
							this.Visa_Transfer_Button_View = true;
					} else if (Menu_id == 99) {
						this.Qualification_Tab_Permission = Rows[i];
						if (
							this.Qualification_Tab_Permission != undefined &&
							this.Qualification_Tab_Permission != null
						) {
							this.Qualification_Tab_Edit =
								this.Qualification_Tab_Permission.Edit;
							this.Qualification_Tab_View =
								this.Qualification_Tab_Permission.View;
							this.Qualification_Tab_Delete =
								this.Qualification_Tab_Permission.Delete;
							this.Qualification_Tab_Save =
								this.Qualification_Tab_Permission.Save;
						}
					} else if (Menu_id == 98) {
						this.Language_Tab_Permission = Rows[i];
						if (
							this.Language_Tab_Permission != undefined &&
							this.Language_Tab_Permission != null
						) {
							this.Language_Tab_Edit = this.Language_Tab_Permission.Edit;
							this.Language_Details_Tab_View =
								this.Language_Tab_Permission.View;
							this.Language_Tab_Delete = this.Language_Tab_Permission.Delete;
							this.Language_Tab_Save = this.Language_Tab_Permission.Save;
						}
					} else if (Menu_id == 102) {
						this.Language_Tab_Permission = Rows[i];
						if (
							this.Language_Tab_Permission != undefined &&
							this.Language_Tab_Permission != null
						) {
							this.Language_Tab_Edit = this.Language_Tab_Permission.Edit;
							this.Language_Details_Tab_View =
								this.Language_Tab_Permission.View;
							this.Language_Tab_Delete = this.Language_Tab_Permission.Delete;
							this.Language_Tab_Save = this.Language_Tab_Permission.Save;
						}
					} else if (Menu_id == 103) {
						this.Tasknew_Tab_Permission = Rows[i];

						if (
							this.Tasknew_Tab_Permission != undefined &&
							this.Tasknew_Tab_Permission != null
						) {
							this.Tasknew_Tab_Edit = this.Tasknew_Tab_Permission.Edit;
							this.Tasknew_Tab_View = this.Tasknew_Tab_Permission.View;
							this.Tasknew_Tab_Delete = this.Tasknew_Tab_Permission.Delete;
							this.Tasknew_Tab_Save = this.Tasknew_Tab_Permission.Save;
						}
					} else if (Menu_id == 109) {
						this.Documents_Tab_Permission = Rows[i];

						if (
							this.Documents_Tab_Permission != undefined &&
							this.Documents_Tab_Permission != null
						) {
							this.Documents_Tab_Edit = this.Documents_Tab_Permission.Edit;
							this.Documents_Tab_View = this.Documents_Tab_Permission.View;
							this.Documents_Tab_Delete = this.Documents_Tab_Permission.Delete;
							this.Documents_Tab_Save = this.Documents_Tab_Permission.Save;
						}
					} else if (Menu_id == 112) {
						this.Application_History_Delete_Permission = Rows[i];

						if (
							this.Application_History_Delete_Permission != undefined &&
							this.Application_History_Delete_Permission != null
						) {
							this.Application_History_Delete_View =
								this.Application_History_Delete_Permission.Delete;
						}
					}  else if (Menu_id == 146) {
						this.Payment_Tab_Permission = Rows[i];
						if (
							this.Payment_Tab_Permission != undefined &&
							this.Payment_Tab_Permission != null
						) {
							this.Payment_Tab_Edit =this.Payment_Tab_Permission.Edit;
							this.Payment_Tab_Delete =this.Payment_Tab_Permission.Delete;
							this.Payment_Tab_View =this.Payment_Tab_Permission.View;
							this.Payment_Tab_Save =this.Payment_Tab_Permission.Save;
							}
					} 
					// else if (Menu_id == 147) {
					// 	this.Fees_Collection_Permission = Rows[i];
					// 	if (
					// 		this.Fees_Collection_Permission != undefined &&
					// 		this.Fees_Collection_Permission != null
					// 	) {
					// 		this.Fees_Receipt_Edit = this.Fees_Collection_Permission.Edit;
					// 		this.Fees_Receipt_Delete = this.Fees_Collection_Permission.Delete;
					// 		this.Fees_Receipt_Save = this.Fees_Collection_Permission.Save;
					// 		this.Fees_Collection_Tab_View =
					// 			this.Fees_Collection_Permission.View;
					// 	}
					// }



					if (this.Student_Id_Notification > "0") {
						// this.New_Followup(this.Student_Id_Notification,this.Student_Name_Notification,0,0,0,2);
						this.Edit_Student({ Student_Id: this.Student_Id_Notification }, 1, 1);
						this.Student_Id_Notification='0';
						}
		
						else if(this.Student_Id_Notification == "-1")
					{
		
						this.Create_New();
						this.Student_Id_Notification='0'
					}	

					//   const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Page Not Available', Type: "2" } });
					// this.router.navigateByUrl('Home_Page');
				} // for
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

	//  Get_Lead_Load_Data()
	// {
	// this.issLoading = true;
	// this.Student_Service_.Get_Lead_Load_Data().subscribe(Rows => {

	//     if (Rows != undefined)
	//     {
	//         this.issLoading = false;
	//         this.Department_Data = Rows.returnvalue.Department;
	//         this.Users_Data = Rows.returnvalue.Users;
	//         this.Branch_Data = Rows.returnvalue.Branch;
	//         this.Status_Data = Rows.returnvalue.Department_Status;

	//         this.Department_Temp.Department_Id = 0;
	//         this.Department_Temp.Department_Name = "All";
	//         this.Department_Data.unshift(Object.assign({}, this.Department_Temp));
	//         this.Department_Search = this.Department_Data[0];

	//         this.Users_Temp.User_Details_Id = 0;
	//         this.Users_Temp.User_Details_Name = "All";
	//         this.Users_Data.unshift(Object.assign({}, this.Users_Temp));
	//         this.User_Search = this.Users_Data[0];

	//         this.Branch_Temp1.Branch_Id = 0;
	//         this.Branch_Temp1.Branch_Name = "All";
	//         this.Branch_Data.unshift(this.Branch_Temp1);
	//         this.Search_Branch = this.Branch_Data[0];

	//         this.Status_Temp.Department_Status_Id = 0;
	//         this.Status_Temp.Department_Status_Name = "All";
	//         this.Status_Data.unshift(Object.assign({},this.Status_Temp));
	//         this.Search_Status = this.Status_Data[0];
	//     }
	// },
	// Rows => {
	//     this.issLoading = false;
	//     const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Error Occured', Type: "2" } });
	// });
	// }
	Get_Lead_Load_Data_ByUser(Login_User) {
		this.issLoading = true;
		this.Student_Service_.Get_Lead_Load_Data_ByUser(Login_User).subscribe(
			(Rows) => {
				this.Department_Data = Rows[1].slice();
				this.Department_Data_Temp.Department_Id = 0;
				this.Department_Data_Temp.Department_Name = "All";
				this.Department_Data.unshift(this.Department_Data_Temp);
				// this.Department_Data.unshift(Object.assign({}, this.Department_Temp));
				// this.Department_Search = this.Department_Data[0];
				this.Department_Search = Object.assign({}, this.Department_Data_Temp);
				this.Department_Search = this.Department_Data[0];

				this.Users_Data = Rows[0].slice();
				this.Users_Temp.User_Details_Id = 0;
				this.Users_Temp.User_Details_Name = "All";
				this.Users_Data.unshift(this.Users_Temp);


				this.Users_Data12 = Rows[17].slice();
				this.Users_Temp1.User_Details_Id = 0;
				this.Users_Temp1.User_Details_Name = "All";
				this.Users_Data12.unshift(Object.assign({},this.Users_Temp1));
				this.User_Search = this.Users_Data12[0];
				this.To_User_Search1= this.Users_Data12[0];

				this.Department_Drop_Data = Rows[10].slice();
				this.Department_Data_C_Temp.Department_Id = 0;
				this.Department_Data_C_Temp.Department_Name = "All";
				this.Department_Drop_Data.unshift(this.Department_Data_C_Temp);
				this.Request_Department_Grid_=Object.assign({}, this.Department_Data_C_Temp);
				this.Request_Department_Grid_ = this.Department_Drop_Data[0];







				// this.Users_Data.unshift(Object.assign({}, this.Users_Temp));
				// this.User_Search = this.Users_Data[0];
				this.User_Search = Object.assign({}, this.Users_Temp);

				if (Number(this.Login_User) > 0) {
                    for (var i = 0; i < this.Users_Data.length; i++) {
                        if (Number(this.Login_User) == this.Users_Data[i].User_Details_Id)
                            this.User_Search = this.Users_Data[i];
                    }
                } else this.User_Search = this.Users_Data[0];




				//this.User_Search = this.Users_Data[0];
				this.By_User_Search = Object.assign({}, this.Users_Temp1);
				this.By_User_Search = this.Users_Data[0];

				this.Branch_Data = Rows[2].slice();
				this.Branch_Temp1.Branch_Id = 0;
				this.Branch_Temp1.Branch_Name = "All";
				// this.Branch_Data.unshift(Object.assign({}, this.Branch_Temp1));
				this.Branch_Data.unshift(this.Branch_Temp1);
				this.Search_Branch = Object.assign({}, this.Branch_Temp1);
				this.Search_Branch = this.Branch_Data[0];

				this.Status_Data = Rows[5].slice();
				this.Status_Data_Temp.Department_Status_Id = 0;
				this.Status_Data_Temp.Department_Status_Name = "All";





									
					this.Users_Data2 = Rows[13].slice();
					this.Users_Temp12.User_Details_Id = 0;
					this.Users_Temp12.User_Details_Name = "All";
					this.Users_Data2.unshift(Object.assign({},this.Users_Temp12));
					this.Agent_Search12 = this.Users_Data2[0];


					
					this.Users_Data1 = Rows[14].slice();
					this.Users_Temp1.User_Details_Id = 0;
					this.Users_Temp1.Agent_Name = "All";
					this.Users_Data1.unshift(Object.assign({},this.Users_Temp1));
					this.Agent_Search1 = this.Users_Data1[0];

				//this.Status_Data.unshift(this.Status_Temp);
				// this.Status_Data.unshift(Object.assign({}, this.Status_Temp));
				// this.Search_Status = this.Status_Data[0];
				this.Status_Data.unshift(this.Status_Data_Temp);
				this.Search_Status = Object.assign({}, this.Status_Data_Temp);
				this.Search_Status = this.Status_Data[0];
				this.Search_Lead_button();
			},
			(Rows) => {
				const dialogRef = this.dialogBox.open(DialogBox_Component, {
					panelClass: "Dialogbox-Class",
					data: { Message: "Error Occured", Type: "2" },
				});
			}
		);
	}
	clr_Message() {
		this.Student_Message_.Message_Detail = "";
	}
	Clr_Document() {
		if (this.Documents_Data != null && this.Documents_Data != undefined)
			this.Documents_ = this.Documents_Data[0];
		this.Documents1_=null;
		this.ImageFile_Doc = [];
		// this.If_file_changed=false
		this.Image_Photo = "";
		this.Cas_Followup_.Image_Photo='';
		this.Cas_Followup_.Task_doc_Description='';
		this.Student_Documents_.Description = "";
		this.Student_Documents_.Student_Id = 0;
		this.Student_Documents_.File_Name = "";
		this.Student_Documents_.Student_Document_Id = 0;
		this.Student_Documents_Array=[new Student_Document()]
		//this.Student_Documents_.Image= ""
	}
	Addto_My_Selection(Course_Id, Course_Name) {
		var Is_Exist = false;
		//if(this.Course_Selection_Data.length<5)

		for (var i = 0; i < this.Course_Selection_Data.length; i++) {
			if (this.Course_Selection_Data[i].Course_Id == Course_Id) Is_Exist = true;
		}
		if (Is_Exist == false) {
			this.Course_Selection_.Course_Id = Course_Id;
			this.Course_Selection_.Course_Name = Course_Name;
			this.Course_Selection_Data.push(
				Object.assign({}, this.Course_Selection_)
			);

			var x = document.getElementById("snackbar");
			x.className = "show";
			setTimeout(function () {
				x.className = x.className.replace("show", "");
			}, 3000);
		}

		// else{

		// }
	}
	Get_More_Information(Course_Id, index) {
		this.Course_Data[index].More_Information =
			!this.Course_Data[index].More_Information;

		if (this.Course_Data[index].More_Information == true) {
			this.issLoading = true;
			this.Student_Service_.Get_More_Information(Course_Id).subscribe(
				(Rows) => {
					this.issLoading = false;
					this.Course_Data[index].Application_Fees =
						Rows[0][0].Application_Fees;
					this.Course_Data[index].Tution_Fees = Rows[0][0].Tution_Fees;
					this.Course_Data[index].Level_Detail_Name =
						Rows[0][0].Level_Detail_Name;
					this.Course_Data[index].Duration_Name = Rows[0][0].Duration_Name;
					this.Course_Data[index].Subject_Name = Rows[0][0].Subject_Name;
					this.Course_Data[index].Details = Rows[0][0].Details;
					this.Course_Data[index].Ielts_Minimum_Score =
						Rows[0][0].Ielts_Minimum_Score;
					this.Course_Intake_Data = Rows[1];
					// this.Course_Intake_Year_Data=Rows[1]
					this.Course_Sub_Section_Data = Rows[1];

					var Course_Intake_Temp = " ";
					var Course_Sub_Section_Temp = " ";

					for (var i = 0; i < this.Course_Intake_Data.length; i++) {
						Course_Intake_Temp =
							Course_Intake_Temp + this.Course_Intake_Data[i].Intake_Name + ",";
					}

					for (var i = 0; i < this.Course_Sub_Section_Data.length; i++) {
						Course_Sub_Section_Temp =
							Course_Sub_Section_Temp +
							this.Course_Sub_Section_Data[i].Sub_Section_Name +
							",";
					}

					Course_Intake_Temp = Course_Intake_Temp.substring(
						0,
						Course_Intake_Temp.length - 1
					);
					Course_Sub_Section_Temp = Course_Sub_Section_Temp.substring(
						0,
						Course_Sub_Section_Temp.length - 1
					);

					this.Course_Data[index].Intake_Name = Course_Intake_Temp;
					this.Course_Data[index].Sub_Section_Name = Course_Sub_Section_Temp;
				},
				(Rows) => {
					// const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
				}
			);
		}
	}

	Apply_Now_Click() {
		this.Course_Apply_Data = [];
		this.Apply_Now_Save(13);
	}
	Apply_Now_Save(Agent_Id_Login) {
		if (
			this.Student_.Email == undefined ||
			this.Student_.Email == null ||
			this.Student_.Email == ""
		) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Please add mail address", Type: "3" },
			});
			return;
		}
		for (var i = 0; i < this.Course_Selection_Data.length; i++) {
			this.Course_Apply_Data_Temp.Course_Id =
				this.Course_Selection_Data[i].Course_Id;
			this.Course_Apply_Data.push(
				Object.assign({}, this.Course_Apply_Data_Temp)
			);
		}

		this.Student_Course_Apply_.Course_Apply = this.Course_Apply_Data;
		this.Student_Course_Apply_.Student_Id = this.Student_Id;
		this.Student_Course_Apply_.Login_Id = Number(this.Login_User);
		this.Student_Course_Apply_.expense_include = this.Expense_Include;
		if (this.Course_Apply_Data.length == 0) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Please Select Course", Type: "3" },
			});
			return;
		}

		this.issLoading = true;

		this.Student_Service_.Save_Student_Course(
			this.Student_Course_Apply_
		).subscribe(
			(Save_status) => {
				if (Number(Save_status[0].Student_Course_Apply_Id) > 0) {
					//this.router.navigateByUrl('profile');
					const dialogRef = this.dialogBox.open(DialogBox_Component, {
						panelClass: "Dialogbox-Class",
						data: { Message: "Course Details Sent", Type: "false" },
					});
					this.issLoading = false;

					this.Clr_Course();
				} else {
					const dialogRef = this.dialogBox.open(DialogBox_Component, {
						panelClass: "Dialogbox-Class",
						data: { Message: "Error Occured", Type: "2" },
					});
				}
			},
			(Rows) => {
				// const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
			}
		);
	}
	Delete_Course_Selection(i) {
		//this.Clr_Course()
		this.Course_Selection_Data.splice(i, 1);
	}

	Create_Application() {
		this.Applicationmodal_View = true;
		this.Search_Div = false;
		this.application_details_View = false;
		this.ApplicationDetails_.Offer_Received = false;
		this.ApplicationDetails_.Feespaymentcheck = false;

		this.ApplicationDetails_.Duration_Id = 0;
		// this.closei();
	}

	Create_Language() {
		this.Languagemodal_View = true;
		this.language_details_View = false;
		this.Clr_Ielts_Details();
		// this.closei();
	}

	Create_Newqualification() {
		this.Qualificationnew_View = true;
		this.Qualificationmodal_View = false;
		this.Clr_Qualification();
	}

	Close_NewQualification() {
		this.Qualificationnew_View = false;
		this.Qualificationmodal_View = true;
	}

	Create_NewWorkexperience() {
		this.Workexperiencenew_View = true;
		this.Qualificationmodal_View = false;
		this.Clr_work_experience();
	}

	Close_NewWorkexperience() {
		this.Workexperiencenew_View = false;
		this.Qualificationmodal_View = true;
	}

	Close_qualificationandWorkexperience() {
		this.Workexperiencenew_View = false;
		this.Qualificationmodal_View = true;
		this.Qualificationnew_View = false;
	}

	Create_Qualification() {
		this.Qualificationmodal_View = true;
		this.Qualification_details_View = true;
		this.Qualificationnew_View = false;
		// this.closei();
	}

	Close_Application() {
		this.Applicationmodal_View = false;
		this.Search_Div = true;
		this.application_details_View = true;
		this.Edit_save_button_view =true;
		this.Clr_ApplicationDetails();
	}

	Close_Language() {
		this.Languagemodal_View = false;
		this.language_details_View = true;
		//this.Clr_ApplicationDetails();
	}

	Close_Qualification() {
		this.Qualificationmodal_View = false;
		this.Qualification_details_View = true;
		//this.Clr_ApplicationDetails();
	}
	Create_Fees() {
		this.Feesmodal_View = true;
		this.Fee_Collection_View = false;
		this.clr_receipt();
	}
	Close_Fees() {
		this.Feesmodal_View = false;
		this.Fee_Collection_View = true;
		this.clr_receipt();
		// this.Search_Receipt();
	}
	Create_Visa() {
		
		this.Visamodal_View = true;
		this.Visa_View = false;
		this.Visa_.Visa_Granted = false;
		this.Visa_.Visa_Letter = false;
		this.Visa_.Visa_File = false;
		this.Visa_.Visa_Rejected = false;
		this.Visa_.ATIP_Submitted = false;
		this.Visa_.ATIP_Received = false;
		this.Visa_.Visa_Re_Submitted = false;
		this.clr_Visa_Tab()
	}

	Close_Visa() {
		this.Visamodal_View = false;
		this.Visa_View = true;
		this.clr_Visa_Tab();
		// this.Get_Visa_Details();
	}
	Create_Review() {
		this.Reviewmodal_View = true;
		this.Reviewdetails_View = false;
		this.Clr_Review();
		// this.Visa_View = false;
		// this.Visa_.Visa_Granted = false;
		// this.Visa_.Visa_Letter = false;
		// this.Visa_.Visa_File = false;
	}

	Close_Review() {
		this.Reviewmodal_View = false;
		this.Reviewdetails_View = true;
		// this.Visa_View = true;
		// this.clr_Visa_Tab();
		// this.Get_Visa_Details();
	}
	Create_Pre_Visa() {
		this.Pre_Visachecklistmodal_View = true;
		this.Pre_Visa_Checklist_View = false;
		this.Clr_Pre_Visa();
		this.get_student_checklist(this.Student_Id, 1);
		// this.Visa_.Visa_Granted = false;
		// this.Visa_.Visa_Letter = false;
		// this.Visa_.Visa_File = false;
	}
	Create_Newtask() {
		this.Tasknewmodal_View = true;
		this.Tasknew_View = false;
		this.Clr_Pre_Visa();
		this.get_student_checklist(this.Student_Id, 1);
		// this.Visa_.Visa_Granted = false;
		// this.Visa_.Visa_Letter = false;
		// this.Visa_.Visa_File = false;
	}

	Create_Pre_Admission() {
		this.Pre_AdmissionModal_View = true;
		this.Pre_Admission_View = false;
		this.Clr_Pre_Admission();
		this.get_student_Preadmission_checklist(this.Student_Id, 2);
		// this.Visa_.Visa_Granted = false;
		// this.Visa_.Visa_Letter = false;
		// this.Visa_.Visa_File = false;
	}

	Close_Pre_Visa() {
		this.Pre_Visachecklistmodal_View = false;
		this.Pre_Visa_Checklist_View = true;
		this.clr_Visa_Tab();
		// this.Get_Visa_Details();
	}
	Close_Tasknew() {
		this.Tasknewmodal_View = false;
		this.Tasknew_View = true;
		this.clr_Visa_Tab();
		// this.Get_Visa_Details();
	}

	Close_Pre_Admission() {
		this.Pre_AdmissionModal_View = false;
		this.Pre_Admission_View = true;
		this.clr_Visa_Tab();
		// this.Get_Visa_Details();
	}

	Create_Invoice() {
		this.Invoicemodal_View = true;
		this.Invoice_View = false;
	}

	Close_Invoice() {
		this.Invoicemodal_View = false;
		this.Invoice_View = true;
		this.clr_Invoice_Tab();
		//    this.Get_Invoice_Details();
	}

	Create_New() {
		this.History_View = false;
		this.View_Student_ = true;
		this.Entry_View = true;
		this.profile_View = false;
		this.Martialdetails_view = true;
		this.New_view = true;
		this.Documents_View = false;
		this.Sms_Button_view = false;
		this.More_Button_view = true;
this.More_Search_Options_Profile=true;
this.Data_View= false;
		this.Show_Followup_History = true;
		this.application_details_View = false;
		this.Qualification_details_View = false;
		this.language_details_View = false;
		this.Languagemodal_View = false;
		this.language_details_View = false;
		this.course_history_View = false;
		this.Checklist_View = false;
		this.View_document = false;
		this.Buttonset_view = true;
		this.Transfer_Button_view = false;
		this.Course_View = false;
		this.Fee_Collection_View = false;
		this.Statistics_View = false;
		this.message_View = false;
		this.Show_FollowUp = false;
		this.Visa_View = false;
		this.Invoice_View = false;
		this.welcome_mail_view = false;
		this.Flag_Followup = 1;
		this.Flag_Student = 1;
		this.View_Follow_ = true;
		this.Applicationmodal_View = false;
		this.Qualificationmodal_View = false;
		this.Visamodal_View = false;
		this.Pre_Visamodal_View = false;
		this.Reviewmodal_View = false;
		this.Reviewdetails_View = false;
		this.Pre_Visa_View = false;
		this.Pre_AdmissionModal_View = false;
		this.Pre_Admission_View = false;
		this.Pre_Visa_Checklist_View=false;
		this.Pre_Visachecklistmodal_View=false;
		this.Transfer_Status_k = null;
		this.Payment_View= false;

		this.Tasknew_View = false;
		this.Tasknewmodal_View = false;

		this.Profile_.Phone_Change = 1;
		this.Profile_.Email_Change = 1;
		this.Profile_.Alternative_Email_Change = 1;
		this.Profile_.Alternative_Phone_Number_Change = 1;
		this.Profile_.Whatsapp_Change = 0;

		this.Followup_Status_Data=[];

		this.FollowUp_Branch_ = Object.assign({}, this.Branch_Temp);
		this.FollowUp_Department_ = Object.assign({}, this.Department_Temp);
		this.FollowUp_Status_ = Object.assign({}, this.Status_Temp);
		this.Followup_Users_ = Object.assign({}, this.Users_Temp_c);
		
		
		if(this.FollowUp_Status_.FollowUp == true)
		{
			this.Is_Follow_=1
		}
		else this.Is_Follow_=0
		
		// this.FollowUp_Department_T = Object.assign({},    this.Department_Temp);
		this.FollowUp_Sub_Status_ = null;

		this.Visa_.Approved_Date = new Date();
		this.Visa_.Approved_Date = this.New_Date(this.Visa_.Approved_Date);

		this.Visa_.Approved_Date_L = new Date();
		this.Visa_.Approved_Date_L = this.New_Date(this.Visa_.Approved_Date_L);

		this.Visa_.Approved_Date_F = new Date();
		this.Visa_.Approved_Date_F = this.New_Date(this.Visa_.Approved_Date_F);

		this.Invoice_.Entry_Date = new Date();
		this.Invoice_.Entry_Date = this.New_Date(this.Invoice_.Entry_Date);

		this.Visa_.Visa_Rejected_Date = new Date();
		this.Visa_.Visa_Rejected_Date = this.New_Date(
			this.Visa_.Visa_Rejected_Date
		);
		this.Visa_.ATIP_Submitted_Date = new Date();
		this.Visa_.ATIP_Submitted_Date = this.New_Date(
			this.Visa_.ATIP_Submitted_Date
		);
		this.Visa_.ATIP_Received_Date = new Date();
		this.Visa_.ATIP_Received_Date = this.New_Date(
			this.Visa_.ATIP_Received_Date
		);
		this.Profile_.Visa_Date = new Date();
		this.Profile_.Visa_Date = this.New_Date(
			this.Profile_.Visa_Date
		);

		this.Visa_.Visa_Re_Submitted_Date = new Date();
		this.Visa_.Visa_Re_Submitted_Date = this.New_Date(
			this.Visa_.Visa_Re_Submitted_Date
		);


		// this.Get_Last_Followup()
		this.Student_Id = 0;
		this.FollowUp_.Remark = "";
		this.FollowUp_.Next_FollowUp_Date = new Date();
		this.FollowUp_.Next_FollowUp_Date = this.New_Date(
			this.FollowUp_.Next_FollowUp_Date
		);
	

		// this.Profile_.Passport_fromdate = new Date();
		// this.Profile_.Passport_fromdate = this.New_Date(
		// 	this.Profile_.Passport_fromdate
		// );

		// this.Profile_.Passport_Todate = new Date();
		// this.Profile_.Passport_Todate= this.New_Date(
		// 	this.Profile_.Passport_Todate
		// );

		if (this.Document_View_Status == true) this.Document_View_Option = true;
		this.Clr_Student();
		this.Clr_ApplicationDetails();
	}
	Close_Click() {
		let top = document.getElementById("Topdiv");
		if (top !== null) {
			top.scrollIntoView();
			top = null;
		}
		// this.Visa_Tab_View=false;
		if(this.From_Application == '1'){
			window.close();
			return;
		}
		this.ApplicationDetails_Data = [];
		this.Receipt_data = [];
		this.Task_Student_Data = [];
		this.Task_Student_Previsa_Data = [];
		this.Task_Student_Tasknew_Data = [];
		this.Task_Student_Preadmission_Data = [];
		this.Visa_Data = [];
		this.Review_Data = [];
		this.Ielts_Data = [];
		this.Qualification_Data = [];
		this.Work_experience_Data = [];

		this.View_Student_ = true;
		this.Lead_EditIndex = -1;
		this.Flag_Followup = 0;
		this.Flag_Student = 0;
		this.Student_Id = 0;
		this.Entry_View = false;
		this.Transfer_view = false;
		this.View_History_ = true;
		this.Show_Followup_History = true;
		this.Change_Status_View = false;
		this.Add_Comment_View=false;
		this.View_Follow_ = true;
		this.Cas_Followup_View = false;
		this.Cas_FollowupPrevisa_View = false;
		this.Cas_FollowupTasknew_View = false;
		this.Documents_View = false;
		this.Course_Link_Button=false;
		this.Edit_save_button_view =true;

		this.Cas_FollowupPreadmission_View = false;
		this.Remarks_ = null;
		this.Start = 0;
		this.Total_Pages = 0;
		this.Invoice_View = false;
		this.Visa_View = false;
		this.Feesmodal_View = false;
		this.Visa_Click_Status = false;
		this.Applicationmodal_View = false;
		this.Qualificationmodal_View = false;
		this.Qualificationnew_View = false;
		this.Workexperiencenew_View = false;
		this.language_details_View = false;
		this.Languagemodal_View = false;
		this.Pre_Visamodal_View = false;
		this.Pre_Visa_View = false;
		this.Tasknew_View = false;
		this.Tasknewmodal_View = false;
		this.Pre_AdmissionModal_View = false;
		this.Pre_Admission_View = false;
		this.Pre_Visa_Checklist_View=false;
		this.Pre_Visachecklistmodal_View=false;
		this.Reviewmodal_View = false;
		this.Reviewdetails_View = false;
		this.Followup_Substatus_Data = [];
		this.Transfer_Status_ = null;

		this.Followup_Transfer_Status_Data = [];
		this.Transfer_Status_ = null;
		this.Transfer_Status_k = null;
		this.Task_Student_Tasknew_Data = [];
		this.Student_Documents_Data = [];
		this.Followp_History_Data=[];
		this.Followp_History_Data_Details=[];

		this.ApplicationDetails_.Followup_Date_Check=false;
		this.ApplicationDetails_.Followup_Date = new Date();
		this.ApplicationDetails_.Followup_Date = this.New_Date(
			new Date(moment(this.ApplicationDetails_.Followup_Date).format("YYYY-MM-DD"))
		);
		this.ApplicationDetails_.Deadline_Date = new Date();
		this.ApplicationDetails_.Deadline_Date = this.New_Date(
			new Date(moment(this.ApplicationDetails_.Deadline_Date).format("YYYY-MM-DD"))
		);

		this.Clr_Course();
		this.Clr_Student();
		this.Clr_ApplicationDetails();
		this.Close_Visa();

		if (this.Student_.Send_Welcome_Mail_Status == 1) {
			this.welcome_mail_view = false;
		} else this.welcome_mail_view = true;

		//this.clr_FollowUp();
	}
	Close_Click_History() {
		this.History_View = false;
		this.application_details_View = true;
	}

	Close_Click_Change_Status() {
		
		this.Change_Status_View = false;
		this.Add_Comment_View=false;
		this.Search_Div = true;
		this.application_details_View = true;
		this.ApplicationDetails_.Bph_Remark='';
		this.ApplicationDetails_.Followup_Date_Check=false;
		this.ApplicationDetails_.Followup_Date = new Date();
		this.ApplicationDetails_.Followup_Date = this.New_Date(
			new Date(moment(this.ApplicationDetails_.Followup_Date).format("YYYY-MM-DD"))
		);
		this.ApplicationDetails_.Deadline_Date = new Date();
		this.ApplicationDetails_.Deadline_Date = this.New_Date(
			new Date(moment(this.ApplicationDetails_.Deadline_Date).format("YYYY-MM-DD"))
		);
		this.ApplicationDetails_.Data ="";
		this.ImageFile_Doc = [];
		this.Image_Photo = "";
		this.Student_Documents_.File_Name = "";
		this.document_view = false;
		this.Data_list_view = false;
		this.Task_Details_view = false;

	}
	Clr_Course() {
		// this.Country_.Country_Name=""
		// this.Level_Detail_.Level_Detail_Name=null;
		// this.Intake_.Intake_Name=null;
		// this.Ielts_.Ielts_Name=null
		// this.Course_Data_Typeahead=null
		this.Course_Selection_Data = [];
		this.Country_Data = null;
		this.Level_.Level_Detail_Id = null;
		this.Course_Name = null;
		this.Course_Data = [];
		//this.Search_Intake_=null;
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

	Get_Time() {}

	trackByFn(index, item) {
		return index;
	}
	Clr_Student() {
		this.Student_Name = "";
		this.Student_Id_Edit = 0;
		this.Profile_.Student_Id = 0;
		this.Profile_.Student_Name = "";
		this.Registered_Check = 0;
		this.Student_.Last_Name = "";
		this.Student_.Gender = "";
		this.Profile_.Address1 = "";
		this.Profile_.Address2 = "";
		this.Student_.Pincode = "";
		this.Profile_.Email = "";
		this.Profile_.Age = 0;
    this.Profile_.Tenth_Qualification = "";
    this.Profile_.Twelfth_Qualification = "";
    this.Profile_.UG_Qualification = "";
    this.Profile_.PG_Qualification = "";
    this.Profile_.IELTS_Score = "";
    this.Profile_.Experience_Years = 0;
    this.Profile_.Total_Budget = "";
    this.Profile_.Gaps = "";
		this.Profile_.Phone_Number = "";
		this.Profile_.Alternative_Phone_Number = "";
		this.Profile_.Alternative_Email = "";
		this.Profile_.Whatsapp = "";
		this.Profile_.Refund_Amount = "";
		this.Profile_.Invoice_Amount = "";
		this.Profile_.Refund_Description = "";
		this.Student_.Facebook = "";
		this.Student_.Passport_Copy = "";
		this.Student_.Passport_Photo = "";
		this.Student_.Tenth_Certificate = "";
		this.Student_.IELTS = "";
		this.Student_.Work_Experience = "";
		this.Student_.Resume = "";
		this.View_History_ = true;
		this.Profile_.Reference = "";
		this.Profile_.Dob = "";
		this.Profile_.Date_of_Marriage = "";
		this.Profile_.Previous_Visa_Rejection = "";
		this.Profile_.Dropbox_Link = "";
		this.Profile_.Spouse_Name = "";
		this.Profile_.Spouse_Occupation = "";
		this.Profile_.Spouse_Qualification = "";
		this.Profile_.No_of_Kids_and_Age = "";
		this.Profile_.Guardian_telephone = "";
		this.Profile_.Counsilor_Note = "";
		this.Profile_.BPH_Note = "";
		this.Profile_.Pre_Visa_Note = "";

		// this.Student_.Dob="";
		this.Student_.Country = undefined;
		this.Profile_.Country_Name = "";
		this.Student_.Promotional_Code = "";
		this.Profile_.Student_Status_Id = undefined;
		this.Profile_.Enquiry_Source_Id = undefined;
		this.Fees_Receipt_.Amount = null;
		this.Fees_Receipt_.Description = "";
		this.Fees_Receipt_.Entry_date = ''
		// this.Fees_Receipt_.Entry_date = this.New_Date(
		// 	this.Fees_Receipt_.Entry_date
		// );
		this.Fees_Data_ = null;
		this.Transfer_Status_ = null;
		this.Fees_.Fees_Id = undefined;
		// this.Profile_.Visa_Date = new Date();
		// this.Profile_.Visa_Date = this.New_Date(
		// 	this.Profile_.Visa_Date
		// );

		this.Profile_.Visa_Date = new Date();
		this.Profile_.Visa_Date = this.New_Date(
			new Date(moment(this.Profile_.Visa_Date).format("YYYY-MM-DD"))
		);
		this.Profile_.Phone_Change = 1;
		this.Profile_.Email_Change = 1;
		this.Profile_.Alternative_Phone_Number_Change = 1;
		this.Profile_.Alternative_Email_Change = 1;

		this.Profile_.Passport_fromdate = "";
		this.Profile_.Passport_Todate = "";

		this.Student_.Password = "";
		this.Student_.Dob = "";
		this.Student_.Created_On = new Date();
		this.Student_.Created_On = this.New_Date(this.Student_.Created_On);

		this.ApplicationDetails_.Followup_Date = new Date();
		this.ApplicationDetails_.Followup_Date = this.New_Date(
			new Date(moment(this.ApplicationDetails_.Followup_Date).format("YYYY-MM-DD"))
		);
		this.ApplicationDetails_.Deadline_Date = new Date();
		this.ApplicationDetails_.Deadline_Date = this.New_Date(
			new Date(moment(this.ApplicationDetails_.Deadline_Date).format("YYYY-MM-DD"))
		);
		// this.Student_.Dob=this.New_Date(this.Student_.Dob);
		this.Search_FromDate = new Date();
		this.Search_FromDate = this.New_Date(this.Search_FromDate);
		this.Search_ToDate = new Date();
		this.Search_ToDate = this.New_Date(this.Search_ToDate);
		this.Document_Array = [];
		this.Document_File_Array = [];
		this.Tenth_Certificate = null;
		this.Display_Tenth_ = "";
		this.Passport_Copy = null;
		this.Display_passport_ = "";
		this.Passport_Photo = null;
		this.Display_Photo_ = "";
		this.Resume = null;
		this.Display_Resume_ = "";

		this.IELTS = null;
		this.Display_Ielts_ = "";
		this.Work_Experience = null;
		this.Display_Experience_ = "";
		this.Remarks_ = null;
		this.FollowUp_Sub_Status_Transfer_ = null;
		this.Transfer_Status_ = null;
		this.Save_button_view=true;
		// this.Search_Intake_.value=null;

		// this.Resume_.Resume_Name="";
		// this.Passport_.Passport_Name="";
		// this.LOR_1_.LOR_1_Name="";
		// this.LOR_2_.LOR_2_Name="";
		// this.MOI_.MOI_Name="";
		// this.SOP_.SOP_Name="";
		// this.Ielts_.Ielts_Name="";

		// this.Student_.Visa_Submission_Date=this.New_Date(this.Student_.Visa_Submission_Date);
		this.Student_.Visa_Submission_Date = "";
		this.Student_.Course_Link = "";
		this.Student_.Year = "";
		this.Student_.Intake = "";
		this.Student_.Intake_Year = "";
		this.Student_.Reference = "";
		this.Student_.Activity = "";
		this.Student_.College_University = "";
		this.Student_.Programme_Course = "";
		this.Student_.Agent = "";
		this.Student_.Status_Details = "";
		this.Student_.Student_Remark = "";

		this.Profile_.Transfer_Remark = "";

		// this.Student_.sslc_year = "";
		// this.Student_.sslc_institution = "";
		// this.Student_.sslc_markoverall = "";
		// this.Student_.sslc_englishmark = "";
		// this.Student_.plustwo_year = "";
		// this.Student_.plustwo_institution = "";
		// this.Student_.plustwo_markoverall = "";
		// this.Student_.plustwo_englishmark = "";
		// this.Student_.graduation_year = "";
		// this.Student_.graduation_institution = "";
		// this.Student_.graduation_markoverall = "";
		// this.Student_.graduation_englishmark = "";
		// this.Student_.postgraduation_year = "";
		// this.Student_.postgraduation_institution = "";
		// this.Student_.postgraduation_markoverall = "";
		// this.Student_.postgraduation_englishmark = "";
		// this.Student_.other_year = "";
		// this.Student_.other_instituation = "";
		// this.Student_.other_markoverall = "";
		// this.Student_.other_englishmark = "";

		// this.Student_.exp_institution_1 = "";
		// this.Student_.exp_institution_2 = "";
		// this.Student_.exp_institution_3 = "";
		// this.Student_.exp_institution_4 = "";
		// this.Student_.exp_designation_1 = "";
		// this.Student_.exp_designation_2 = "";
		// this.Student_.exp_designation_3 = "";
		// this.Student_.exp_designation_4 = "";

		this.Student_.exp_tenure_from_1 = new Date();
		this.Student_.exp_tenure_from_1 = this.New_Date(
			this.Student_.exp_tenure_from_1
		);
		this.Student_.exp_tenure_from_2 = new Date();
		this.Student_.exp_tenure_from_2 = this.New_Date(
			this.Student_.exp_tenure_from_2
		);
		this.Student_.exp_tenure_from_3 = new Date();
		this.Student_.exp_tenure_from_3 = this.New_Date(
			this.Student_.exp_tenure_from_3
		);
		this.Student_.exp_tenure_from_4 = new Date();
		this.Student_.exp_tenure_from_4 = this.New_Date(
			this.Student_.exp_tenure_from_4
		);
		this.Student_.exp_tenure_to_1 = new Date();
		this.Student_.exp_tenure_to_1 = this.New_Date(
			this.Student_.exp_tenure_to_1
		);
		this.Student_.exp_tenure_to_2 = new Date();
		this.Student_.exp_tenure_to_2 = this.New_Date(
			this.Student_.exp_tenure_to_2
		);
		this.Student_.exp_tenure_to_3 = new Date();
		this.Student_.exp_tenure_to_3 = this.New_Date(
			this.Student_.exp_tenure_to_3
		);
		this.Student_.exp_tenure_to_4 = new Date();
		this.Student_.exp_tenure_to_4 = this.New_Date(
			this.Student_.exp_tenure_to_4
		);
		this.Student_.Passport_fromdate = new Date();
		this.Student_.Passport_fromdate = this.New_Date(
			this.Student_.Passport_fromdate
		);

		this.Student_.Passport_Todate = new Date();
		this.Student_.Passport_Todate = this.New_Date(
			this.Student_.Passport_Todate
		);

		this.Student_.Date_of_Marriage = new Date();
		this.Student_.Date_of_Marriage = this.New_Date(
			this.Student_.Date_of_Marriage
		);

		// this.Profile_.Passport_fromdate = new Date();
		// this.Profile_.Passport_fromdate = this.New_Date(
		// this.Profile_.Passport_fromdate
		// );

		// this.Profile_.Passport_Todate = new Date();
		// this.Profile_.Passport_Todate= this.New_Date(
		// this.Profile_.Passport_Todate
		// );

		this.Student_.IELTS_Overall = "";
		this.Student_.IELTS_Listening = "";
		this.Student_.IELTS_Reading = "";
		this.Student_.IELTS_Writting = "";
		this.Student_.IELTS_Speaking = "";
		this.Student_.Marital_Status_Name = "";

		this.Profile_.Passport_No = "";
		this.Student_.LOR_1_Id = undefined;
		this.Student_.LOR_2_Id = undefined;
		this.Student_.MOI_Id = undefined;
		this.Student_.SOP_Id = undefined;
		this.Student_.Passport_Id = undefined;
		this.Student_.Resume_Id = undefined;

		this.Profile_Country_ = null;
		this.Profile_University_ = null;
		this.Program_Course_ = null;
		// this.Program_Course_.Course_Id=0;

		//
		//this.Search_Intake_=;

		this.Remove_Registration_Visibility = false;
		this.Registration_Visiblility = false;

		// this.Remove_Activte_Visiblility=false;
		// this.Activte_Visiblility=false;

		this.Document_Description = "";
		this.Display_File_Name_ = "";
		this.ImageFile = null;

		if (this.Gender_Data != null && this.Gender_Data != undefined)
			this.Gender_ = this.Gender_Data[0];

		if (
			this.Student_Status_Data != null &&
			this.Student_Status_Data != undefined
		)
			this.Student_Status_ = this.Student_Status_Data[0];

			if (
				this.Intake_Mode_Data != null &&
				this.Intake_Mode_Data != undefined
			)
				this.Intake_Mode_Profile_ = this.Intake_Mode_Data[0];

		if (
			this.Student_Status_Search_Data != null &&
			this.Student_Status_Search_Data != undefined
		)
			this.Student_Status_Search_ = this.Student_Status_Search_Data[0];

		if (
			this.Enquiry_Source_Data != null &&
			this.Enquiry_Source_Data != undefined
		)
			this.Enquiry_Source_ = this.Enquiry_Source_Data[0];

		if (this.Shore_Data != null && this.Shore_Data != undefined)
			this.Shore_ = this.Shore_Data[0];

		if (this.Enquiry_For_Data != null && this.Enquiry_For_Data != undefined)
			this.Enquiry_For_ = this.Enquiry_For_Data[0];

		if (this.enquiry_mode_Data != null && this.enquiry_mode_Data != undefined)
			this.enquiry_mode_ = this.enquiry_mode_Data[0];

		if (this.class_Data != null && this.class_Data != undefined)
			this.class_ = this.class_Data[0];

		if (
			this.Enquiry_Source_Search_Data != null &&
			this.Enquiry_Source_Search_Data != undefined
		)
			this.Enquiry_Source_Search_ = this.Enquiry_Source_Search_Data[0];

		if (
			this.Marital_Status_Data != null &&
			this.Marital_Status_Data != undefined
		)
			this.Marital_Status_ = this.Marital_Status_Data[0];

		if (
			this.Profile_Intake_Mode_Data != null &&
			this.Profile_Intake_Mode_Data != undefined
		)
			this.Profile_Intake_Mode_ = this.Profile_Intake_Mode_Data[0];

		// if(this.Fees_Array!=null && this.Fees_Array != undefined)
		// this.Fees_Data_=this.Fees_Data_[0];
		// if (this.To_Account_Data != null && this.To_Account_Data != undefined)
		// 	this.To_Account_ = this.To_Account_Data[0];

		if (this.Resume_Mode_Data != null && this.Resume_Mode_Data != undefined)
			this.Resume_Mode_ = this.Resume_Mode_Data[0];

		if (this.Passport_Mode_Data != null && this.Passport_Mode_Data != undefined)
			this.Passport_Mode_ = this.Passport_Mode_Data[0];

		if (this.LOR_1_Mode_Data != null && this.LOR_1_Mode_Data != undefined)
			this.LOR_1_Mode_ = this.LOR_1_Mode_Data[0];

		if (this.LOR_2_Mode_Data != null && this.LOR_2_Mode_Data != undefined)
			this.LOR_2_Mode_ = this.LOR_2_Mode_Data[0];

		if (this.MOI_Mode_Data != null && this.MOI_Mode_Data != undefined)
			this.MOI_Mode_ = this.MOI_Mode_Data[0];

		if (this.SOP_Mode_Data != null && this.SOP_Mode_Data != undefined)
			this.SOP_Mode_ = this.SOP_Mode_Data[0];

		if (this.Ielts_Mode_Data != null && this.Ielts_Mode_Data != undefined)
			this.Ielts_Mode_ = this.Ielts_Mode_Data[0];

		this.Save_Agent_.Client_Accounts_Name = "";
		this.Save_Agent_.Client_Accounts_Id = undefined;
		this.Save_Agent_ = new Client_Accounts();
			
		// this.Flag_Followup=1;
		// this.Flag_Student=1;
		// this.View_Follow_=true;
		// this.Show_FollowUp=false;
	}

	Phone_Change() {
		// this.Profile_.Phone_Change=1;
		this.Profile_.Whatsapp = "";
		if (
			this.Profile_.Phone_Number == undefined ||
			this.Profile_.Phone_Number == null ||
			this.Profile_.Phone_Number == ""
		)
			this.Profile_.Whatsapp = "";
		else this.Profile_.Whatsapp = this.Profile_.Phone_Number;
	}
	Email_Change() {
		this.Profile_.Email_Change = 1;
	}
	Alternative_Phone_Number_Change() {
		this.Profile_.Alternative_Phone_Number_Change = 1;
	}
	Alternative_Email_Change() {
		this.Profile_.Alternative_Email_Change = 1;
	}

	Search_Student_Message() {
		this.issLoading = true;
		this.Student_Message_Service.Search_Student_Message(
			this.Student_Id_Edit
		).subscribe(
			(Rows) => {
				this.Student_Message_Data = Rows[0];
				this.Total_Entries = this.Student_Message_Data.length;
				if (this.Student_Message_Data.length == 0) {
					this.issLoading = false;
					// const dialogRef = this.dialogBox.open(DialogBox_Component, {
					// 	panelClass: "Dialogbox-Class",
					// 	data: { Message: "No Details Found", Type: "3" },
					// });
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
	Save_Student_Message() {
		this.Student_Message_.Student_Id = this.Student_Id_Edit;
		this.Student_Message_Service.Save_Student_Message(
			this.Student_Message_
		).subscribe(
			(Save_status) => {
				Save_status = Save_status[0];
				if (Number(Save_status[0].Student_Message_Id_) > 0) {
					const dialogRef = this.dialogBox.open(DialogBox_Component, {
						panelClass: "Dialogbox-Class",
						data: { Message: "Saved", Type: "false" },
					});
					this.Get_Message_Details(this.Student_Id_Edit);
					this.clr_Message();
				}
			},
			(Rows) => {
				const dialogRef = this.dialogBox.open(DialogBox_Component, {
					panelClass: "Dialogbox-Class",
					data: { Message: "Error Occured", Type: "2" },
				});
			}
		);
	}
	Delete_Application_Details(Application_details_Id, index) {
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
				this.Student_Service_.Delete_Application_Details(
					Application_details_Id
				).subscribe(
					(Delete_status) => {
						Delete_status = Delete_status[0];
						Delete_status = Delete_status[0].DeleteStatus_;
						if (Delete_status == 1) {
							this.ApplicationDetails_Data.splice(index, 1);
							const dialogRef = this.dialogBox.open(DialogBox_Component, {
								panelClass: "Dialogbox-Class",
								data: { Message: "Deleted", Type: false },
							});
							this.Clr_ApplicationDetails();
							this.Get_ApplicationDetails();
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


	CourseLInk()
	{
	   

	   var Course_link_ = this.ApplicationDetails_.Course_Link;
	   var temp=Course_link_
	   window.open(temp)  
	   
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
		this.ApplicationDetails_.Application_Fees="";

		this.ApplicationDetails_.Feespaymentcheck = false;
		this.ApplicationDetails_.Offer_Received = false;
		this.ApplicationDetails_.Portal_User_Name = "";
		this.ApplicationDetails_.Password = "";
		this.Duration_Id = 0;

		this.ApplicationDetails_.Offer_Student_Id = "";

		this.combinedIntakeData=[];

		this.ApplicationDetails_.Application_No = "";
		this.ApplicationDetails_.Student_Reference_Id = "";
		this.ApplicationDocument_Array = [];
		this.ImageFile_Application = [];
		this.ApplicationDocument_File_Array = [];
		this.Intake_Mode_ =null;
		this.Intake_Mode_Data_Filter = [];
		// this.Application_Country_ = null;
		this.Application_Country_  = new Country();
		this.University_1 = null;
		this.Course_ = null;
		if (this.Intake_Mode_Data != null && this.Intake_Mode_Data != undefined)
			this.Intake_Mode_ = this.Intake_Mode_Data[0];
		// if (this.Intake_Mode_Data_Filter != null && this.Intake_Mode_Data_Filter != undefined)
		// 	this.Intake_Mode_ = this.Intake_Mode_Data_Filter[0];
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
		this.ApplicationDocument_Description = "";
		this.Display_ApplicationFile_ = "";
	}
	Edit_ApplicationDetails(Applicationdetails_e: any, index) {
		
		debugger;
		let top = document.getElementById("Topdiv");
		if (top !== null) {
			top.scrollIntoView();
			top = null;
		}
		this.Create_Application();
		debugger;
		// this.Clr_ApplicationDetails();
		// this.ApplicationDetails_=Applicationdetails_e
		// this.ApplicationDetails_ = Object.assign({},Applicationdetails_e);
		// this.Student_Service_.Get_ApplicationDetails(this.Student_.Student_Id).subscribe(Rows =>{
		//  this.ApplicationDetails_= Object.assign({},Rows[0][0]);

		this.ApplicationDetails_ = Applicationdetails_e;	
		if(this.ApplicationDetails_.To_User_Id != this.Login_User_Id )
		{
			this.Edit_save_button_view =false;
		}
		if (index==1)
		{
			this.ApplicationDetails_.Application_details_Id=0
			this.Edit_save_button_view=true;
		}
		this.ApplicationDetails_ = Object.assign({}, Applicationdetails_e);
		debugger;
		this.Save_Student_Approved_Status = Applicationdetails_e.Student_Approved_Status;
		this.Bph_Approved_Status = Applicationdetails_e.Bph_Approved_Status;
		this.Old_Application_Status_Id =
			this.ApplicationDetails_.Application_status_Id;
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
		debugger;
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
			debugger;
		if (this.ApplicationDetails_.Offer_Received.toString() == "1")
			this.ApplicationDetails_.Offer_Received = true;
		else this.ApplicationDetails_.Offer_Received = false;
debugger;
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
			debugger;
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
			debugger;
		for (var i = 0; i < this.Agent_Mode_Data.length; i++) {
			if (this.ApplicationDetails_.Agent_Id == this.Agent_Mode_Data[i].Agent_Id)
				this.Agent_Mode_ = this.Agent_Mode_Data[i];
		}
		debugger;
		// for (var i = 0; i < this.Application_Status_Mode_Data.length; i++) {
		// 	if (
		// 		this.ApplicationDetails_.Application_status_Id ==
		// 		this.Application_Status_Mode_Data[i].Application_status_Id
		// 	)
		// 		this.Application_Status_Mode_ = this.Application_Status_Mode_Data[i];
		// }

		
    // // Loop through Intake_Mode_Data_Filter to find the matching Intake_Mode_T
	// 
	// this.Intake_Service_.getIntakeByCourse(Applicationdetails_e.Course_Id).subscribe(
	// 	(intakeData) => {
	// 		this.issLoading=true;
	// 		this.Intake_Mode_Data_Filter = intakeData[0];
	// 		console.log('Intake_Mode_Data:', this.Intake_Mode_Data_Filter);
	// 		for (let i = 0; i < this.Intake_Mode_Data_Filter.length; i++) {
	// 			if (this.ApplicationDetails_.intake_Id == this.Intake_Mode_Data_Filter[i].Intake_Id) {
	// 				this.Intake_Mode_ = this.Intake_Mode_Data_Filter[i];
	// 			   }}


	// 			   this.combinedIntakeData.push({
	// 				Intake_Year_Id: 0,
	// 				Intake_Id: 0,
	// 				Intake_Year_Name: 'Select',
	// 				Intake_Name: 'Select',
	// 				Display_Name: 'Select'
	// 			  });

	// 			  
	// 			  console.log('this.Intake_Year_Mode_Data: ', this.Intake_Year_Mode_Data);
	// 			  console.log('this.combinedIntakeData: ', this.combinedIntakeData);
	// 			  console.log('this.ApplicationDetails_ : ', this.ApplicationDetails_ );
			
	// 			this.Intake_Year_Mode_Data.forEach((year) => {
				
	// 			  // Skip if Intake_Year_Id is 0 (Select)
	// 			  if (year.Intake_Year_Id !== 0) {
	// 				this.Intake_Mode_Data_Filter.forEach((intake) => {
	// 				  // Skip if Intake_Id is 0 (Select)
	// 				  if (intake.Intake_Id !== 0) {
	// 					// Combine year and intake into a single display string
	// 					this.combinedIntakeData.push({
							
	// 					  Intake_Year_Id: year.Intake_Year_Id,
	// 					  Intake_Id: intake.Intake_Id,
	// 					  Intake_Year_Name: year.Intake_Year_Name,
	// 					  Intake_Name: intake.Intake_Name,
	// 					  Display_Name: `${year.Intake_Year_Name} - ${intake.Intake_Name.trim()}`
	// 					});
	// 				  }
	// 				});
	// 			  }
	// 			});



	
	// console.log('this.ApplicationDetails_: ', this.ApplicationDetails_);

	// console.log(' this.combinedIntakeData: ',  this.combinedIntakeData);
	// console.log('this.combinedIntakeData[2]: ', );

	// console.log('this.ApplicationDetails_.Intake_Year_Id: ', this.ApplicationDetails_.Intake_Year_Id);
	// console.log('this.ApplicationDetails_.intake_Id: ', this.ApplicationDetails_.intake_Id);
	// this.selectedIntakeYear=this.combinedIntakeData.find(item => 
	// 	item.Intake_Year_Id == this.ApplicationDetails_.Intake_Year_Id &&
		
	// 	 item.Intake_Id == this.ApplicationDetails_.intake_Id

	// );
	
	// console.log('this.selectedIntakeYear: ', this.selectedIntakeYear);
	// this.issLoading=false;
			
	// 	},
	// 	(error) => {
	// 		console.error('Error fetching intake data:', error);
	// 	}
	// );





debugger;

	this.Intake_Service_.getIntakeByCountry(Applicationdetails_e.Country_Id).subscribe(
	  (intakeData: any) => {
		debugger;
		if (intakeData && Array.isArray(intakeData) && intakeData.length > 0) {
		  // Store the intake data
		  this.combinedIntakeData = intakeData[0];

		  // Find and set the selected intake
		  if (this.ApplicationDetails_) {
			this.selectedIntakeYear = this.combinedIntakeData.find(item => 
			  item.Intake_Year_Id === this.ApplicationDetails_.Intake_Year_Id && 
			  item.Intake_Id === this.ApplicationDetails_.intake_Id
			) || this.combinedIntakeData[0]; // Default to first item if no match found
		  }
debugger;
		  console.log('Combined Intake Data:', this.combinedIntakeData);
		  console.log('Selected Intake Year:', this.selectedIntakeYear);
		} else {
		  // If no data received, at least add the Select option
		  this.combinedIntakeData = [{
			Intake_Year_Id: 0,
			Intake_Id: 0,
			Intake_Year_Name: 'Select',
			Intake_Name: 'Select',
			Display_Name: 'Select'
		  }];
		  this.selectedIntakeYear = this.combinedIntakeData[0];
		}
debugger;
		this.issLoading = false;
	  },
	  (error) => {
		console.error('Error fetching intake data:', error);
		this.issLoading = false;
		// Add error handling (e.g., show error message to user)
	  }
	);

	// this.Intake_Mode_Data_Filter = this.Intake_Mode_Data
   
		// for (var i = 0; i < this.Intake_Mode_Data.length; i++) {
		// 	if (
		// 		this.ApplicationDetails_.intake_Id == this.Intake_Mode_Data[i].Intake_Id
		// 	)
		// 		this.Intake_Mode_ = this.Intake_Mode_Data[i];
		// }
		for (var i = 0; i < this.Intake_Year_Mode_Data.length; i++) {
			if (
				this.ApplicationDetails_.Intake_Year_Id ==
				this.Intake_Year_Mode_Data[i].Intake_Year_Id
			)
				this.Intake_Year_Mode_ = this.Intake_Year_Mode_Data[i];
		}
debugger;
		this.Country_Temp.Country_Id = this.ApplicationDetails_.Country_Id;
		this.Country_Temp.Country_Name = this.ApplicationDetails_.Country_Name;
		this.Application_Country_ = Object.assign({}, this.Country_Temp);
debugger;
		this.University_Temp.University_Id = this.ApplicationDetails_.University_Id;
		this.University_Temp.University_Name =
			this.ApplicationDetails_.University_Name;
		this.University_1 = Object.assign({}, this.University_Temp);
debugger;
		this.Course_Temp.Course_Id = this.ApplicationDetails_.Course_Id;
		this.Course_Temp.Course_Name = this.ApplicationDetails_.Course_Name;
		this.Course_ = Object.assign({}, this.Course_Temp);
debugger;
		//
		// this.Document_Array= Rows[1];
		// this.Document_File_Array=[];
		// for(var i=0;i<this.Document_Array.length;i++)
		// this.Document_File_Array.push('')

		this.Get_Application_DocumentList(
			this.ApplicationDetails_.Application_details_Id
		);
debugger;
		this.Activte_Visiblility = false;
		this.Remove_Activte_Visiblility = false;

		if (this.ApplicationDetails_.Activation_Status == true) {
			if (
				this.Remove_Activity_Permissions != undefined &&
				this.Remove_Activity_Permissions != null
			)
				if (this.Remove_Activity_Permissions.View == true)
					this.Remove_Activte_Visiblility = true;
		} else {
			if (
				this.Activity_Permissions != undefined &&
				this.Activity_Permissions != null
			)
				if (this.Activity_Permissions.View == true)
					this.Activte_Visiblility = true;
		}

		debugger;

console.log('this.selectedIntakeYear: ', this.selectedIntakeYear);

		// this.issLoading = false;
		// } ,
		// Rows => {
		// this.issLoading = false;
		// const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
		// });
		//  this.Get_ApplicationDetails();

		// this.Get_ApplicationDetailswise_History(this.ApplicationDetails_.Application_details_Id);
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

	Get_QualificationDetails(Student_id_) {
		//  this.Clr_ApplicationDetails();
		this.issLoading = true;

		this.Student_Service_.Get_QualificationDetails(Student_id_).subscribe(
			(Rows) => {
				this.Qualification_Data = Rows[0];
				this.issLoading = false;
			},
			(Rows) => {
				this.issLoading = false;
			}
		);
	}

// 	Get_Previsa_Details(Student_id_,Master_id_temp_) {
// 		//  this.Clr_ApplicationDetails();
// 		this.issLoading = true;

// 		this.Student_Service_.Get_Previsa_Details(Student_id_).subscribe(
// 			(Rows) => {
// 				
// 				this.Previsa_Data = Rows[0];


// 				if(this.Previsa_Data.length>0)
// {
// 	this.Pre_Visachecklistmodal_View = true;
// 	this.Pre_Visa_Checklist_View = false;
// 	// this.Get_Previsa_Details_Edit(Master_id_temp_);


// }

// else
// {
// this.Pre_Visa_Checklist_View = true;
// 			this.Pre_Visachecklistmodal_View = false;

// }
				

// 				this.issLoading = false;
// 			},
// 			(Rows) => {
// 				this.issLoading = false;
// 			}
// 		);
// 	}


	Get_Previsa_Details(Student_id_) {
		//  this.Clr_ApplicationDetails();
		this.issLoading = true;

		this.Student_Service_.Get_Previsa_Details(Student_id_).subscribe(
			(Rows) => {

				
				this.Previsa_Data = Rows[0];


				if(this.Previsa_Data.length>0)
				{
					this.Edit_Pre_Visa(this.Previsa_Data[0],1)
				}

				this.issLoading = false;
			},
			(Rows) => {
				this.issLoading = false;
			}
		);
	}

	Get_Preadmission_Details(Student_id_) {
		//  this.Clr_ApplicationDetails();
		this.issLoading = true;

		this.Student_Service_.Get_Preadmission_Details(Student_id_).subscribe(
			(Rows) => {
				this.Preadmission_Data = Rows[0];

				this.issLoading = false;
			},
			(Rows) => {
				this.issLoading = false;
			}
		);
	}

	Get_Previsa_Details_Edit(Student_Checklist_Master_Id_) {
		this.issLoading = true;

		this.Student_Service_.Get_Previsa_Details_Edit(
			Student_Checklist_Master_Id_
		).subscribe(
			(Rows) => {
				this.Student_Checklist_Data = Rows[0];
				//   this.Previsa_=Object.assign({},Rows[0][0]);
				for (var i = 0; i < this.Student_Checklist_Data.length; i++) {
					if (this.Student_Checklist_Data[i].Check_Box.toString() == "1") {
						this.Student_Checklist_Data[i].Check_Box = true;
					} else {
						this.Student_Checklist_Data[i].Check_Box = false;
					}
				}
				if (this.Student_Checklist_Data.length == 0) {
					// const dialogRef = this.dialogBox.open(DialogBox_Component, {
					// 	panelClass: "Dialogbox-Class",
					// 	data: { Message: "No Details Found", Type: false },
					// });
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

	Get_Preadmission_Details_Edit(Student_Preadmission_Checklist_Master_Id_) {
		this.issLoading = true;

		this.Student_Service_.Get_Preadmission_Details_Edit(
			Student_Preadmission_Checklist_Master_Id_
		).subscribe(
			(Rows) => {
				this.Student_Checklist_Preadmission_Data = Rows[0];
				//   this.Previsa_=Object.assign({},Rows[0][0]);
				for (
					var i = 0;
					i < this.Student_Checklist_Preadmission_Data.length;
					i++
				) {
					if (
						this.Student_Checklist_Preadmission_Data[i].Check_Box.toString() ==
						"1"
					) {
						this.Student_Checklist_Preadmission_Data[i].Check_Box = true;
					} else {
						this.Student_Checklist_Preadmission_Data[i].Check_Box = false;
					}
				}
				if (this.Student_Checklist_Preadmission_Data.length == 0) {
					// const dialogRef = this.dialogBox.open(DialogBox_Component, {
					// 	panelClass: "Dialogbox-Class",
					// 	data: { Message: "No Details Found", Type: false },
					// });
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

	Get_ReviewDetails(Student_id_) {
		//  this.Clr_ApplicationDetails();
		this.issLoading = true;

		this.Student_Service_.Get_ReviewDetails(Student_id_).subscribe(
			(Rows) => {
				this.Review_Data = Rows[0];
				this.issLoading = false;
			},
			(Rows) => {
				this.issLoading = false;
			}
		);
	}
	Get_WorkexperienceDetails(Student_Id_) {
		//  this.Clr_ApplicationDetails();
		this.issLoading = true;

		this.Student_Service_.Get_WorkexperienceDetails(Student_Id_).subscribe(
			(Rows) => {
				this.Work_experience_Data = Rows[0];
				this.issLoading = false;
			},
			(Rows) => {
				this.issLoading = false;
			}
		);
	}


	Get_Comments(Application_Id_Log) {
		//  this.Clr_ApplicationDetails();
		this.issLoading = true;

		this.Student_Service_.Get_Comments(Application_Id_Log).subscribe(
			(Rows) => {
				
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

	Get_Visa_Task(Task_Group_Id) {
		this.issLoading = true;

		this.Student_Service_.Get_Visa_Task(
			this.Profile_.Student_Id,
			Task_Group_Id
		).subscribe(
			(Rows) => {
				this.Task_Student_Data = Rows[0];
				this.issLoading = false;
			},
			(Rows) => {
				this.issLoading = false;
			}
		);
	}

	Get_Previsa_Task(Task_Group_Id) {
		this.issLoading = true;

		this.Student_Service_.Get_Previsa_Task(
			this.Profile_.Student_Id,
			Task_Group_Id
		).subscribe(
			(Rows) => {
				this.Task_Student_Previsa_Data = Rows[0];
				this.issLoading = false;
			},
			(Rows) => {
				this.issLoading = false;
			}
		);
	}
	Get_Tasknew_Task(Task_Group_Id) {
		this.issLoading = true;
		this.Count_Task_  = 0
		
		this.Student_Service_.Get_Tasknew_Task(
			this.Profile_.Student_Id,
			Task_Group_Id,Number(this.Login_User)
		).subscribe(
			(Rows) => {
				
				this.Task_Student_Tasknew_Data = Rows[0];
				this.Count_Task_ =Rows[1][0].Student_Task_Count
				this.issLoading = false;
			},
			(Rows) => {
				this.issLoading = false;
			}
		);
	}
	Get_Preadmission_Task(Task_Group_Id) {
		this.issLoading = true;

		this.Student_Service_.Get_Preadmission_Task(
			this.Profile_.Student_Id,
			Task_Group_Id
		).subscribe(
			(Rows) => {
				this.Task_Student_Preadmission_Data = Rows[0];
				this.issLoading = false;
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
		this.Intake_Mode_Data_Filter = []; 
	}
	Get_Proceeding_Details() {
		//  this.Clr_ApplicationDetails();
		this.issLoading = true;

		this.Student_Service_.Get_Proceeding_Details(
			this.Profile_.Student_Id
		).subscribe(
			(Rows) => {
				//this.Work_experience_Data = Rows[0];
				this.Proceeding_ = Object.assign({}, Rows[0][0]);

				this.issLoading = false;
			},
			(Rows) => {
				this.issLoading = false;
			}
		);
	}

	Get_Ielts_Details(Student_Id_) {
		//  this.Clr_ApplicationDetails();
		this.issLoading = true;

		this.Student_Service_.Get_Ielts_Details(Student_Id_).subscribe(
			(Rows) => {
				this.Ielts_Data = Rows[0];
				this.issLoading = false;
			},
			(Rows) => {
				this.issLoading = false;
			}
		);
	}

	Get_Refundrequestdetails(Student_Id_, Fees_Receipt_Id_temp) {
		//  this.Clr_ApplicationDetails();
		this.issLoading = true;

		this.Student_Service_.Get_Refundrequestdetails(
			Student_Id_,
			Fees_Receipt_Id_temp
		).subscribe(
			(Rows) => {
				this.Refund_Request_Data = Rows[0];
				this.issLoading = false;
			},
			(Rows) => {
				this.issLoading = false;
			}
		);
	}

	Get_Feesrecepitdetails() {
		//  this.Clr_ApplicationDetails();
		this.issLoading = true;
		this.Student_Service_.Get_Feesrecepitdetails(
			this.Student_.Student_Id
		).subscribe(
			(Rows) => {
				this.FeesrecepitDetails_Data = Rows[0];
				this.issLoading = false;
			},
			(Rows) => {
				this.issLoading = false;
			}
		);
	}

	Get_Receipt_Sum() {
		this.issLoading = true;
		this.Student_Service_.Get_Receipt_Sum(this.Profile_.Student_Id).subscribe(
			(Rows) => {
				//this.Visa_Data=Rows[0];
				this.paidfees = Rows[0][0].paid_fees;
				this.issLoading = false;
			},
			(Rows) => {
				this.issLoading = false;
			}
		);
	}

	Get_Application_DocumentList(application_details_id) {
		//    this.Clr_ApplicationDetails();
		this.issLoading = true;
		this.Student_Service_.Get_Application_DocumentList(
			application_details_id
		).subscribe(
			(Rows) => {
				this.ApplicationDocument_Array = Rows[0];
				this.ApplicationDocument_File_Array = [];
				for (var i = 0; i < this.ApplicationDocument_Array.length; i++)
					this.ApplicationDocument_File_Array.push("");
				this.issLoading = false;
			},
			(Rows) => {
				this.issLoading = false;
			}
		);
	}

	Get_Feesrecepit_DocumentList(feesrecepit_id) {
		//    this.Clr_ApplicationDetails();
		this.issLoading = true;
		this.Student_Service_.Get_Feesrecepit_DocumentList(
			feesrecepit_id
		).subscribe(
			(Rows) => {
				this.FeesreceiptDocument_Array = Rows[0];
				this.FeesreceiptDocument_File_Array = [];
				for (var i = 0; i < this.FeesreceiptDocument_Array.length; i++)
					this.FeesreceiptDocument_File_Array.push("");
				this.issLoading = false;
			},
			(Rows) => {
				this.issLoading = false;
			}
		);
	}

	Search_ApplicationDetails() {
		this.issLoading = true;

		this.Student_Service_.Search_ApplicationDetails(
			this.Application_details_Id_History
		).subscribe(
			(Rows) => {
				this.ApplicationdetailsHistory_Data = Rows[0];

				// if (this.ApplicationdetailsHistory_Data.length == 0) {
				// 	const dialogRef = this.dialogBox.open(DialogBox_Component, {
				// 		panelClass: "Dialogbox-Class",
				// 		data: { Message: "No Details Found", Type: "3" },
				// 	});
				// }
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
	Get_Checklist() {
		this.History_View = false;
		this.Data_View= false;
		//   this.Historydata_View=true;

		//   this.Clr_ApplicationDetails();
		this.issLoading = true;
		this.Student_Service_.Get_Checklist().subscribe(
			(Rows) => {
				this.StudentChecklist_Data = Rows[0];
				this.issLoading = false;
			},
			(Rows) => {
				this.issLoading = false;
			}
		);
	}
	Get_ApplicationDetails_History() {
		this.History_View = true;
		//   this.Historydata_View=true;

		this.Clr_ApplicationDetails();
		this.issLoading = true;
		this.Student_Service_.Get_ApplicationDetails_History(
			this.Student_.Student_Id
		).subscribe(
			(Rows) => {
				this.ApplicationdetailsHistory_Data = Rows[0];
				this.issLoading = false;
			},
			(Rows) => {
				this.issLoading = false;
			}
		);
	}

	onCountryChange() {
		
		// Get the selected course object
		this.Intake_Mode_Data_Filter=[]
		this.combinedIntakeData=[];
		
		this.Intake_Service_.getIntakeByCountry(this.Application_Country_.Country_Id).subscribe(
			(intakeData) => {
				
				this.Intake_Mode_Data_Filter = intakeData[0];

				console.log('this.Intake_Mode_Data_Filter: new ', this.Intake_Mode_Data_Filter);
				console.log('this.Intake_Year_Mode_Data: new ', this.Intake_Year_Mode_Data);
				console.log('this.Intake_Mode_Data:  new', this.Intake_Mode_Data);


				// let combinedIntakeData: { Intake_Year_Id: number; Intake_Id: number; Display_Name: string }[] = [];

				// Loop through Intake_Year_Mode_Data and Intake_Mode_Data to create combined dropdown options

				this.combinedIntakeData.push({
					Intake_Year_Id: 0,
					Intake_Id: 0,
					Intake_Year_Name: 'Select',
					Intake_Name: 'Select',
					Display_Name: 'Select'
				  });

				this.Intake_Year_Mode_Data.forEach((year) => {
				  // Skip if Intake_Year_Id is 0 (Select)
				  if (year.Intake_Year_Id !== 0) {
					this.Intake_Mode_Data_Filter.forEach((intake) => {
					  // Skip if Intake_Id is 0 (Select)
					  if (intake.Intake_Id !== 0) {
						// Combine year and intake into a single display string
						this.combinedIntakeData.push({
						  Intake_Year_Id: year.Intake_Year_Id,
						  Intake_Id: intake.Intake_Id,
						  Intake_Year_Name: year.Intake_Year_Name,
						  Intake_Name: intake.Intake_Name,
						  Display_Name: `${year.Intake_Year_Name} - ${intake.Intake_Name.trim()}`
						});
					  }
					});
				  }
				});


console.log('this.combinedIntakeData: ', this.combinedIntakeData);
				
			},
			(error) => {
				console.error('Error fetching intake data:', error);
			}
		);
	  
		// Call a function to fetch intake based on the selected course

	  }



// 	onCourseChange() {
		
// 		// Get the selected course object
// 		this.Intake_Mode_Data_Filter=[]
// 		this.combinedIntakeData=[];
// 		
// 		this.Intake_Service_.getIntakeByCourse(this.Course_.Course_Id).subscribe(
// 			(intakeData) => {
// 				
// 				this.Intake_Mode_Data_Filter = intakeData[0];

// 				console.log('this.Intake_Mode_Data_Filter: new ', this.Intake_Mode_Data_Filter);
// 				console.log('this.Intake_Year_Mode_Data: new ', this.Intake_Year_Mode_Data);
// 				console.log('this.Intake_Mode_Data:  new', this.Intake_Mode_Data);


// 				// let combinedIntakeData: { Intake_Year_Id: number; Intake_Id: number; Display_Name: string }[] = [];

// 				// Loop through Intake_Year_Mode_Data and Intake_Mode_Data to create combined dropdown options

// 				this.combinedIntakeData.push({
// 					Intake_Year_Id: 0,
// 					Intake_Id: 0,
// 					Intake_Year_Name: 'Select',
// 					Intake_Name: 'Select',
// 					Display_Name: 'Select'
// 				  });

// 				this.Intake_Year_Mode_Data.forEach((year) => {
// 				  // Skip if Intake_Year_Id is 0 (Select)
// 				  if (year.Intake_Year_Id !== 0) {
// 					this.Intake_Mode_Data_Filter.forEach((intake) => {
// 					  // Skip if Intake_Id is 0 (Select)
// 					  if (intake.Intake_Id !== 0) {
// 						// Combine year and intake into a single display string
// 						this.combinedIntakeData.push({
// 						  Intake_Year_Id: year.Intake_Year_Id,
// 						  Intake_Id: intake.Intake_Id,
// 						  Intake_Year_Name: year.Intake_Year_Name,
// 						  Intake_Name: intake.Intake_Name,
// 						  Display_Name: `${year.Intake_Year_Name} - ${intake.Intake_Name.trim()}`
// 						});
// 					  }
// 					});
// 				  }
// 				});


// console.log('this.combinedIntakeData: ', this.combinedIntakeData);
				
// 			},
// 			(error) => {
// 				console.error('Error fetching intake data:', error);
// 			}
// 		);
	  
// 		// Call a function to fetch intake based on the selected course

// 	  }
	  




	// onCourseChange() {
	// 	
	// 	this.Intake_Mode_ = null; 
	// 	 this.filteredNotificationIntake = this.Intake_Mode_Data.filter(
	// 		Intake => Intake.Intake_Id == this.Course_.Intake_Id
	  
		
	//   );
	//   console.log(this.filteredNotificationIntake,"filteredNotificationIntake");
	//   }
	  
	 
	//   openDialog(): void {
	//     const dialogRef = this.dialogBox.open(StudentComponent, {
	//       width: '6000px',

	//     });
	//     var application_details_id_
	// this. Get_ApplicationDetailswise_History(application_details_id_)
	//     dialogRef.afterClosed().subscribe(result => {
	//       console.log('The dialog was closed');

	//     });
	//   }

	// Get_ApplicationDetailswise_History(application_details_id_) {
	//
	// 	this.History_View = true;
	// 	this.application_details_View = false;
	// 	this.Qualification_details_View=false;
	// 	this.language_details_View=false;

	// 	this.Clr_ApplicationDetails();
	// 	this.issLoading = true;
	// 	this.Student_Service_.Get_ApplicationDetailswise_History(
	// 		application_details_id_
	// 	).subscribe(
	// 		(Rows) => {
	//
	// 			// const dialogRef = this.dialogBox.open( StudentComponent);

	// 			this.ApplicationdetailsHistory_Data = Rows[0];

	// 			this.issLoading = false;
	// 		},
	// 		(Rows) => {
	// 			this.issLoading = false;
	// 		}
	// 	);
	// }

	Get_ApplicationDetailswise_History(application_details_id_, feesdetails_id_) {
		this.History_View = true;
		this.application_details_View = false;
		this.Qualification_details_View = false;
		this.Data_View= false;
		this.language_details_View = false;
		this.FeesId_History = feesdetails_id_;
		this.Clr_ApplicationDetails();
		this.issLoading = true;
		this.Student_Service_.Get_ApplicationDetailswise_History(
			application_details_id_,
			feesdetails_id_
		).subscribe(
			(Rows) => {
				// const dialogRef = this.dialogBox.open( StudentComponent);

				this.ApplicationdetailsHistory_Data = Rows[0];

				this.issLoading = false;
			},
			(Rows) => {
				this.issLoading = false;
			}
		);
	}

	Save_ApplicationDetails() {
		this.History_View = false;
		this.Data_View= false;
		// this.Historydata_View=false;

		this.ApplicationDetails_.Country_Id = this.Application_Country_.Country_Id;
		this.ApplicationDetails_.Country_Name =
			this.Application_Country_.Country_Name;
		this.ApplicationDetails_.Date_Of_Applying = this.New_Date(
			new Date(
				moment(this.ApplicationDetails_.Date_Of_Applying).format("YYYY-MM-DD")
			)
		);
		this.ApplicationDetails_.Intake_Year_Id =
			this.Intake_Year_Mode_.Intake_Year_Id;
		this.ApplicationDetails_.Intake_Year_Name =
			this.Intake_Year_Mode_.Intake_Year_Name;
		this.ApplicationDetails_.intake_Name = this.Intake_Mode_.Intake_Name;
		this.ApplicationDetails_.intake_Id = this.Intake_Mode_.Intake_Id;
		this.ApplicationDetails_.University_Name =
			this.University_1.University_Name;
		this.ApplicationDetails_.University_Id = this.University_1.University_Id;
		this.ApplicationDetails_.Course_Name = this.Course_.Course_Name;
		this.ApplicationDetails_.Course_Id = this.Course_.Course_Id;
		this.ApplicationDetails_.Agent_Id = this.Agent_Mode_.Agent_Id;
		this.ApplicationDetails_.Agent_Name = this.Agent_Mode_.Agent_Name;
		
		this.ApplicationDetails_.Application_Status_Name =
			this.Application_Status_Mode_.Application_Status_Name;
		this.ApplicationDetails_.Application_status_Id =
			this.Application_Status_Mode_.Application_status_Id;
		this.ApplicationDetails_.Student_Id = this.Profile_.Student_Id;

		// if (this.Fees_Data_== undefined || this.Fees_Data_ == null || this.Fees_Data_.Fees_Id == undefined || this.Fees_Data_.Fees_Id==0) {
		//     const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Select Fees', Type: "3" } });
		//     return;
		// }
		//     if(this.Fees_Receipt_.Amount==null || this.Fees_Receipt_.Amount==undefined){
		//     const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data: { Message: 'Select Amount', Type: "3" }});
		//     return;
		// }
		if (this.Save_Call_Status == true) return;
		else this.Save_Call_Status = true;
		this.issLoading = true;

		this.Student_Service_.Save_ApplicationDetails(
			this.ApplicationDetails_
		).subscribe(
			(Save_status) => {
				Save_status = Save_status[0];
				if (Number(Save_status[0].Application_details_Id_) > 0) {
					const dialogRef = this.dialogBox.open(DialogBox_Component, {
						panelClass: "Dialogbox-Class",
						data: { Message: "Saved", Type: "false" },
					});
					this.Save_Call_Status = false;
					this.Clr_ApplicationDetails();
					this.Get_ApplicationDetails();
				}
			},
			(Rows) => {
				const dialogRef = this.dialogBox.open(DialogBox_Component, {
					panelClass: "Dialogbox-Class",
					data: { Message: "Error Occured", Type: "2" },
				});
			}
		);
		this.Save_Call_Status = false;
	}


	Search_University_Typeahead_Country(event: any) {
		

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
		
		if (this.University_Data == undefined || this.University_Data.length == 0) {
			this.issLoading = true;
			
			this.University_Service_.Search_University_Typeahead_Country(Value,this.Application_Country_.Country_Id).subscribe(
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
	display_University_12(University_e: University) {
		if (University_e) {
			return University_e.University_Name;
		}
	}


		Country_Change1() {
			// Reset values
			this.University_1 = null;
			this.University_Data = [];
			this.University_Data_Filter_2 = [];
			this.Intake_Mode_Data_Filter = [];
			this.combinedIntakeData = [];
		
	
			  this.Intake_Service_.getIntakeByCountry(this.Application_Country_.Country_Id)
				.subscribe(
				  (intakeData: any) => {
					// Since Intake_Mode_Data_Filter already contains the combined data we need
					if (intakeData && Array.isArray(intakeData) && intakeData.length > 0) {
					  this.combinedIntakeData = intakeData[0];
					  
					  // Log for verification
					  console.log('Combined Intake Data:', this.combinedIntakeData);
					}
				  },
				  (error) => {
					console.error('Error fetching intake data:', error);
				  }
				);
		
		  }
	
// 	Country_Change1(){
// 		
// 		this.University_1=null;
// 		this.University_Data=[];
// 		this.University_Data_Filter_2=[];
// 		// Get the selected course object
// 		this.Intake_Mode_Data_Filter=[]
// 		this.combinedIntakeData=[];
// 		
// 		this.Intake_Service_.getIntakeByCountry(this.Application_Country_.Country_Id).subscribe(
// 			(intakeData) => {
// 				
// 				this.Intake_Mode_Data_Filter = intakeData[0];

// 				console.log('this.Intake_Mode_Data_Filter: new ', this.Intake_Mode_Data_Filter);
// 				console.log('this.Intake_Year_Mode_Data: new ', this.Intake_Year_Mode_Data);
// 				console.log('this.Intake_Mode_Data:  new', this.Intake_Mode_Data);


// 				// let combinedIntakeData: { Intake_Year_Id: number; Intake_Id: number; Display_Name: string }[] = [];

// 				// Loop through Intake_Year_Mode_Data and Intake_Mode_Data to create combined dropdown options

// 				this.combinedIntakeData.push({
// 					Intake_Year_Id: 0,
// 					Intake_Id: 0,
// 					Intake_Year_Name: 'Select',
// 					Intake_Name: 'Select',
// 					Display_Name: 'Select'
// 				  });

// 				this.Intake_Year_Mode_Data.forEach((year) => {
// 				  // Skip if Intake_Year_Id is 0 (Select)
// 				  if (year.Intake_Year_Id !== 0) {
// 					this.Intake_Mode_Data_Filter.forEach((intake) => {
// 					  // Skip if Intake_Id is 0 (Select)
// 					  if (intake.Intake_Id !== 0) {
// 						// Combine year and intake into a single display string
// 						this.combinedIntakeData.push({
// 						  Intake_Year_Id: year.Intake_Year_Id,
// 						  Intake_Id: intake.Intake_Id,
// 						  Intake_Year_Name: year.Intake_Year_Name,
// 						  Intake_Name: intake.Intake_Name,
// 						  Display_Name: `${year.Intake_Year_Name} - ${intake.Intake_Name.trim()}`
// 						});
// 					  }
// 					});
// 				  }
// 				});


// console.log('this.combinedIntakeData: ', this.combinedIntakeData);
				
// 			},
// 			(error) => {
// 				console.error('Error fetching intake data:', error);
// 			}
// 		);
// 	}

	Save_Receipt() {
		this.Fees_Receipt_.User_Id = Number(this.Login_User);
		this.Fees_Receipt_.Fees_Id = this.Fees_Data_.Fees_Id;
		this.Fees_Receipt_.Entry_date = this.New_Date(
			new Date(moment(this.Fees_Receipt_.Entry_date).format("YYYY-MM-DD"))
		);
		this.Fees_Receipt_.Student_Id = this.Student_Id;

		if (
			this.Fees_Data_ == undefined ||
			this.Fees_Data_ == null ||
			this.Fees_Data_.Fees_Id == undefined ||
			this.Fees_Data_.Fees_Id == 0
		) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Select Fees Type", Type: "3" },
			});
			return;
		}

		if (
			this.Fees_Receipt_.Amount == null ||
			this.Fees_Receipt_.Amount == undefined
		) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Enter Amount", Type: "3" },
			});
			return;
		}
		if (this.Save_Call_Status == true) return;
		else this.Save_Call_Status = true;
		this.issLoading = true;
		this.Student_Service_.Save_Receipt(this.Fees_Receipt_).subscribe(
			(Save_status) => {
				Save_status = Save_status[0];
				if (Number(Save_status[0].Fees_Receipt_Id_) > 0) {
					const dialogRef = this.dialogBox.open(DialogBox_Component, {
						panelClass: "Dialogbox-Class",
						data: { Message: "Saved", Type: "false" },
					});
					this.Save_Call_Status = false;
					this.clr_receipt();
					this.Search_Receipt();
					// this.clr_receipt();
				}
			},
			(Rows) => {
				const dialogRef = this.dialogBox.open(DialogBox_Component, {
					panelClass: "Dialogbox-Class",
					data: { Message: "Error Occured", Type: "2" },
				});
			}
		);
		this.Save_Call_Status = false;
	}
	clr_receipt() {
		this.FeesreceiptDocument_Array = [];
		this.ImageFile_Feesreceipt = [];
		this.FeesreceiptDocument_File_Array = [];
		this.Fees_Receipt_.Fees_Receipt_Id = 0;
		this.Fees_Receipt_.To_Account_Id = null;
		this.Fees_Receipt_.Amount = null;
		this.Fees_Receipt_.Description = "";
		this.FeesreceiptDocument_Description = "";
		this.Fees_Receipt_.Currency = "";
		this.Fees_Receipt_.Fees_Id = null;
		this.FeesreceiptDocument_Array = [];
		this.FeesreceiptDocument_File_Array = [];
		this.Fees_Receipt_.Entry_date = '';
		// this.Fees_Receipt_.Entry_date = this.New_Date(
		// 	this.Fees_Receipt_.Entry_date
		// );
		this.Display_FeesrecepitFile_ = "";

		if (this.To_Account_Data != null && this.To_Account_Data != undefined)
			this.To_Account_ = this.To_Account_Data[0];

		if (this.Fees_Array != null && this.Fees_Array != undefined)
			this.Fees_Data_ = this.Fees_Array[0];

		if (this.Currency_Data != null && this.Currency_Data != undefined)
			this.Currency_ = this.Currency_Data[0];

		// if(this.Fees_Data_!=null && this.Fees_Data_ != undefined)
		// this.To_Account_=this.Fees_Data_[0];
		// if(this.Fees_Array!=null && this.Fees_Array!= undefined)
		//    this.Fees_Data_=this.Fees_Array[0];
		// this.File='';
		this.Course_Fees_Data_Filter = [];
		this.Fees_Course_ = null;
	}
	Search_Receipt() {
		this.issLoading = true;
		// this.Fees_Receipt_.Entry_Date=this.New_Date(new Date(moment(this.Fees_Receipt_.Entry_Date).format('YYYY-MM-DD')));

		this.Student_Service_.Search_Receipt(this.Profile_.Student_Id).subscribe(
			(Rows) => {
				this.Receipt_data = Rows[0];

				this.Fees_Array = Rows[1];
				this.Fees_Temp.Fees_Id = 0;
				this.Fees_Temp.Fees_Name = "Select";
				this.Fees_Array.unshift(this.Fees_Temp);
				this.Fees_Data_ = this.Fees_Array[0];

				// this.Total_Receipt=this.Receipt_data_.length
				// if(this.Student_Message_Data.length==0)
				// {
				// this.issLoading=false;
				// const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'No Details Found',Type:"3"}});
				// }
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
	Tab_Click(Current_tab) {
		this.profile_View = false;
		this.Martialdetails_view = false;
		this.application_details_View = false;
		this.language_details_View = false;
		this.Languagemodal_View = false;
		this.Applicationmodal_View = false;
		this.Qualificationmodal_View = false;
		this.Qualification_details_View = false;
		this.Feesmodal_View = false;
		this.Visamodal_View = false;
		this.Buttonset_view = false;
		this.Change_Status_View = false;
		this.Add_Comment_View=false;
		this.Transfer_Button_view = false;
		this.Invoicemodal_View = false;
		this.Checklist_View = false;
		this.View_document = false;
		this.Course_View = false;
		this.message_View = false;
		this.Fee_Collection_View = false;
		this.Statistics_View = false;
		this.course_history_View = false;
		this.Visa_View = false;
		// this.Pre_Visa_View=false;
		this.Workexperiencenew_View = false;
		this.Qualificationnew_View = false;
		//this.Review=false;
		this.Cas_Followup_View = false;
		this.Cas_FollowupPrevisa_View = false;
		this.Cas_FollowupTasknew_View = false;
		this.Cas_FollowupPreadmission_View = false;
		this.Invoice_View = false;
		this.History_View = false;
		this.Data_View= false;
		this.New_view = false;
		this.Pre_Visamodal_View = false;
		this.Pre_Visa_View = false;
		this.Tasknew_View = false;
		this.Tasknewmodal_View = false;

		/** Added on 13-06-2024 */
		this.Payment_Tab_View = true;
		this.Paymentmodal_View = false;
		this.Payment_View= false;
		/*** */

		this.Reviewdetails_View = false;
		this.Reviewmodal_View = false;
		this.Show_Followup_History = true;
		this.Workexperiencenew_View = false;
		this.Qualificationnew_View = false;
		this.Pre_AdmissionModal_View = false;
		this.Pre_Admission_View = false;
		this.Pre_Visa_Checklist_View=false;
		this.Pre_Visachecklistmodal_View=false;
		this.document_view = false;
		this.Documents_View = false;
		this.Data_list_view = false;
		this.Task_Details_view = false;
		this.Clr_Document();


		if (Current_tab == 1) {
			this.profile_View = true;
			// this.Martialdetails_view=true;
			this.Buttonset_view = true;
			this.New_view = true;
		} else if (Current_tab == 2) {
			this.course_history_View = true;

			if (this.Course_History_Click_Status == false) {
				this.Course_History_Click_Status = true;
				this.Get_Student_Course_Apply(this.Student_Id_Edit);
			}
			this.Get_Student_Course_Apply(this.Student_Id_Edit);
		} else if (Current_tab == 3) {
			this.View_document = true;

			if (this.Document_Click_Status == false) {
				this.Document_Click_Status = true;
				this.Get_Student_Document(this.Student_Id_Edit);
			}
		} else if (Current_tab == 4) {
			this.message_View = true;

			if (this.Message_Click_Status == false) {
				this.Message_Click_Status = true;
				this.Get_Message_Details(this.Student_Id_Edit);
			}
		} else if (Current_tab == 5) {
			this.Course_View = true;

			if (this.Course_Click_Status == false) {
				this.Course_Click_Status = true;
				this.Get_site_Pageload();
			}
		} else if (Current_tab == 6) {
			
		
			this.Fee_Collection_View = true;
			this.Feesmodal_View = false;

			// this.Fees_Receipt_Save =true;
			this.Show_FollowUp = true;
			if (this.Fee_Collection_Click_Status == false) {
				this.Fee_Collection_Click_Status = true;
				this.Load_fees_tab();
				this.Search_Receipt();
				this.clr_receipt();
				this.Load_Application_Fees_Dropdown();
			}
		} else if (Current_tab == 7) {
			this.Statistics_View = true;

			if (this.Statistics_Click_Status == false) {
				this.Statistics_Click_Status = true;
				this.Load_Statistics();
			}
		} else if (Current_tab == 8) {
			this.application_details_View = true;

			// this.History_View=false;
			// this.Applicationmodal_View=false;
			// this.Clr_ApplicationDetails()
			//this.Show_FollowUp = false;
			this.Show_FollowUp = true;
			this.Applicationmodal_View = false;
			if (this.Application_Details_Click_Status == false) {
				this.Application_Details_Click_Status = true;
				//	this.Get_ApplicationDetails();
			}
			this.Get_ApplicationDetails();
			this.Get_Proceeding_Details();
		} else if (Current_tab == 12) {
			this.Qualification_details_View = true;

			// this.History_View=false;
			// this.Applicationmodal_View=false;
			// this.Clr_ApplicationDetails()
			this.Show_FollowUp = true;
			this.Qualificationmodal_View = true;
			if (this.Qualification_Details_Click_Status == false) {
				this.Qualification_Details_Click_Status = true;
				//this.Get_QualificationDetails(this.Student_Id);
			}
			this.Clr_Qualification();
			this.Clr_work_experience();
			this.Get_QualificationDetails(this.Student_Id_Edit);
			this.Get_WorkexperienceDetails(this.Student_Id_Edit);
		} else if (Current_tab == 13) {
			this.language_details_View = true;

			// this.History_View=false;
			// this.Applicationmodal_View=false;
			// this.Clr_ApplicationDetails()
			this.Languagemodal_View = false;
			this.Get_Ielts_Details(this.Student_Id_Edit);
			if (this.Language_Details_Click_Status == false) {
				this.Language_Details_Click_Status = true;
				//this.Get_ApplicationDetails();
			}
			//this.Get_ApplicationDetails();
		} else if (Current_tab == 9) {
			this.Checklist_View = true;

			if (this.Checklist_Click_Status == false) {
				this.Checklist_Click_Status = true;
				this.Get_Checklist();
			}
			this.Get_Checklist();
		} else if (Current_tab == 10) {
			this.Visa_View = true;
			this.Show_FollowUp = true;
			this.Task_Group_Id = 1;
			this.Task_Item_Dropdown(this.Task_Group_Id);
			// this.Close_Visa();
			if (this.Visa_Click_Status == false) {
				this.Visa_Click_Status = true;

				this.Get_Visa_Details();
				this.Get_Receipt_Sum();
				this.Get_Visa_Task(this.Task_Group_Id);
			}
			// else
			// {
			//     if(this.Visa_Data.length==1)
			//  {
			//     this.Edit_Visa(this.Visa_Data[0],0);
			//  }
			// }
			// this.Get_Visa_Details();
			this.Get_Receipt_Sum();
		} else if (Current_tab == 11) {
			
			this.Pre_Visa_View = true;
			this.Pre_Visamodal_View = false;
			this.Task_Group_Id = 2;
			// this.Workexperiencenew_View=false;
			// this.Qualificationnew_View=false;

			// this.Edit_Pre_Visa(pre_visa_e: Pre_Visa, index)

			this.Get_Previsa_Details(this.Student_Id_Edit);
			this.Get_Previsa_Task(this.Task_Group_Id);
			this.Task_Item_Dropdown(this.Task_Group_Id);

			if (this.Pre_Visa_View_Click_Status == false) {
				this.Pre_Visa_View_Click_Status = true;
				//this.Get_Invoice_Details();
			}
			//this.Get_Invoice_Details();
		} else if (Current_tab == 20) {
			this.Pre_Admission_View = true;
			this.Pre_AdmissionModal_View = false;
			this.Task_Group_Id = 3;
			// this.Workexperiencenew_View=false;
			// this.Qualificationnew_View=false;
			// this.Get_Previsa_Details(this.Profile_.Student_Id);
			this.Get_Preadmission_Details(this.Student_Id_Edit);
			this.Get_Preadmission_Task(this.Task_Group_Id);
			this.Task_Item_Dropdown(this.Task_Group_Id);

			// if (this.Pre_Admission_View_Click_Status == false) {
			// 	this.Pre_Admission_View_Click_Status = true;
			// 	//this.Get_Invoice_Details();
			// }
			//this.Get_Invoice_Details();
		} else if (Current_tab == 14) {
			//this.Review = true;
			this.Reviewdetails_View = true;
			this.Reviewmodal_View = false;
			this.Show_FollowUp = true;
			// this.Workexperiencenew_View=false;
			// this.Qualificationnew_View=false;
			this.Get_ReviewDetails(this.Student_Id_Edit);

			if (this.Review_Click_Status == false) {
				this.Review_Click_Status = true;
				this.Get_Invoice_Details();
			}
			this.Get_Invoice_Details();
		} else if (Current_tab == 21) {
			this.Tasknew_View = true;
			this.Tasknewmodal_View = false;
			this.Show_FollowUp = true;
			this.Task_Group_Id = 4;
			// this.Workexperiencenew_View=false;
			// this.Qualificationnew_View=false;

			this.Get_Tasknew_Task(this.Task_Group_Id);

			this.Task_Item_Dropdown(this.Task_Group_Id);

			// if (this.Pre_Visa_View_Click_Status == false) {
			// 	this.Pre_Visa_View_Click_Status = true;
			// 	//this.Get_Invoice_Details();
			// }
			//this.Get_Invoice_Details();
		} else if (Current_tab == 22) {
			this.Show_FollowUp = true;
			this.Documents_View = true;
			this.Student_Documents_Array[0].Documents_=this.Documents_Data[0]

			this.Search_Document();
		}

		else if (Current_tab == 23) {
			this.Pre_Visa_Checklist_View = true;
			this.Pre_Visachecklistmodal_View = false;
			this.Task_Group_Id = 2;
			// this.Workexperiencenew_View=false;
			// this.Qualificationnew_View=false;
			this.Get_Previsa_Details(this.Student_Id_Edit);
			// this.Get_Previsa_Task(this.Task_Group_Id);
			// this.Task_Item_Dropdown(this.Task_Group_Id);

			if (this.Pre_Visa_View_Click_Status == false) {
				this.Pre_Visa_View_Click_Status = true;
				//this.Get_Invoice_Details();
			}
			//this.Get_Invoice_Details();
		}

		else if (Current_tab == 24) {
			this.Payment_Tab_View = true;
			this.Paymentmodal_View = false;
			this.Payment_View= true;

			// this.Fees_Receipt_Save =true;
			// this.Show_FollowUp = true;
			this.Clr_Payment_Tab_Details();
			this.Get_Payment_Tab_Details();
			this.Get_Enquiry_Source_Client_Id();
			// if (this.Fee_Collection_Click_Status == false) {
			// 	this.Fee_Collection_Click_Status = true;
			// 	this.Load_fees_tab();
			// 	this.Search_Receipt();
			// 	this.clr_receipt();
			// 	this.Load_Application_Fees_Dropdown();
			// }
		}


	}
	Load_Statistics() {}
	Load_fees_tab() {
		this.Search_Receipt();
	}

	Load_Application_Fees_Dropdown() {
		this.issLoading = true;

		this.Student_Service_.Load_Application_Fees_Dropdown(
			this.Profile_.Student_Id
		).subscribe(
			(Rows) => {
				if (Rows != null) {
					this.Application_Fees_Course_Data = Rows[0];
					this.Application_Fees_Course_Temp.Application_details_Id = 0;
					this.Application_Fees_Course_Temp.Course_Name = "Select";
					this.Application_Fees_Course_Data.unshift(
						this.Application_Fees_Course_Temp
					);
					this.Application_Fees_Course_ = this.Application_Fees_Course_Data[0];

					this.issLoading = false;
				}
			},
			(Rows) => {
				this.issLoading = false;
			}
		);
	}

	Load_Dropdowns() {
		this.Internship_Service_.Get_Course_Load_Data().subscribe(
			(Rows) => {
				this.Internship_Data = Rows[0];
				this.Internship_Temp.Internship_Id = 0;
				this.Internship_Temp.Internship_Name = "All";
				this.Internship_Data.unshift(Object.assign({}, this.Internship_Temp));
				this.Internship_ = this.Internship_Data[0];

				this.Duration_Data = Rows[2];
				this.Duration_Temp.Duration_Id = 0;
				this.Duration_Temp.Duration_Name = "All";
				this.Duration_Data.unshift(Object.assign({}, this.Duration_Temp));
				this.Duration_ = this.Duration_Data[0];

				this.Level_Data = Rows[3];
				this.Level_Temp.Level_Detail_Id = 0;
				this.Level_Temp.Level_Detail_Name = "All";
				this.Level_Data.unshift(Object.assign({}, this.Level_Temp));
				this.Level_ = this.Level_Data[0];

				this.Student_Status_Data = Rows[4].slice();
				this.Student_Status_Temp.Student_Status_Id = 0;
				this.Student_Status_Temp.Student_Status_Name = "Select";
				this.Student_Status_Data.unshift(
					Object.assign({}, this.Student_Status_Temp)
				);
				this.Student_Status_ = this.Student_Status_Data[0];
console.log('Rows[5]: ', Rows[5]);
				this.Enquiry_Source_Data = Rows[5].slice();
				
				this.Enquiry_Source_Temp.Enquiry_Source_Id = 0;
				this.Enquiry_Source_Temp.Enquiry_Source_Name = "Select";
				this.Enquiry_Source_Temp.Client_Accounts_Id = 0;
				this.Enquiry_Source_Data.unshift(
					Object.assign({}, this.Enquiry_Source_Temp)
				);
				this.Enquiry_Source_ = this.Enquiry_Source_Data[0];
				this.Accounts_To_Enquiry_Source_ = this.Enquiry_Source_Data[0];

				// this.Fees_Array = Rows[6].slice();
				// this.Fees_Temp.Fees_Id = 0;
				// this.Fees_Temp.Fees_Name = "Select";
				// this.Fees_Array.unshift(this.Fees_Temp);
				// this.Fees_Data_ = this.Fees_Array[0];

				this.Student_Status_Search_Data = Rows[4].slice();
				this.Student_Status_Search_Temp.Student_Status_Id = 0;
				this.Student_Status_Search_Temp.Student_Status_Name = "All";
				this.Student_Status_Search_Data.unshift(
					Object.assign({}, this.Student_Status_Search_Temp)
				);
				this.Student_Status_Search_ = this.Student_Status_Search_Data[0];
			},
			(Rows) => {
				const dialogRef = this.dialogBox.open(DialogBox_Component, {
					panelClass: "Dialogbox-Class",
					data: { Message: "Error Occured", Type: "2" },
				});
			}
		);
	}

	Get_Student_PageLoadData_Dropdowns() {
				debugger;
		this.Student_Service_.Get_Student_PageLoadData_Dropdowns().subscribe(
			(Rows) => {
						debugger;
				this.Passport_Mode_Data = Rows[0].slice();
				this.Passport_Mode_Temp.Passport_Id = 0;
				this.Passport_Mode_Temp.Passport_Name = "Select";
				this.Passport_Mode_Data.unshift(
					Object.assign({}, this.Passport_Mode_Temp)
				);
					debugger;
				this.Passport_Mode_ = this.Passport_Mode_Data[0];

				this.Ielts_Mode_Data = Rows[1].slice();
				this.Ielts_Mode_Temp.Ielts_Id = 0;
				this.Ielts_Mode_Temp.Ielts_Name = "Select";
				this.Ielts_Mode_Data.unshift(Object.assign({}, this.Ielts_Mode_Temp));
				this.Ielts_Mode_ = this.Ielts_Mode_Data[0];

				this.Intake_Mode_Data = Rows[2].slice();
				this.Intake_Mode_Temp.Intake_Id = 0;
				this.Intake_Mode_Temp.Intake_Name = "Select";
				this.Intake_Mode_Data.unshift(Object.assign({}, this.Intake_Mode_Temp));
				
				this.Intake_Mode_ = this.Intake_Mode_Data[0];
				this.Intake_Search = this.Intake_Mode_Data[0];
				this.Intake_Mode_Profile_ =this.Intake_Mode_Data[0];

				this.Enquiry_For_Data = Rows[3].slice();
				this.Enquiry_For_Temp.Enquiryfor_Id = 0;
				this.Enquiry_For_Temp.Enquirfor_Name = "Select";
				this.Enquiry_For_Data.unshift(Object.assign({}, this.Enquiry_For_Temp));
				this.Enquiry_For_ = this.Enquiry_For_Data[0];
				this.Enquiry_For_Search = this.Enquiry_For_Data[0];

				this.Rating_Data = Rows[21].slice();
				this.Rating_Temp.Rating_Id = 0;
				this.Rating_Temp.Rating_Name = "Select";
				this.Rating_Data.unshift(Object.assign({}, this.Rating_Temp));
				this.Rating_ = this.Rating_Data[0];

				this.Shore_Data = Rows[4].slice();
				this.Shore_Temp.Shore_Id = 0;
				this.Shore_Temp.Shore_Name = "Select";
				this.Shore_Data.unshift(Object.assign({}, this.Shore_Temp));
				this.Shore_ = this.Shore_Data[0];

				this.Intake_Year_Mode_Data = Rows[5].slice();
				this.Intake_Year_Mode_Temp.Intake_Year_Id = 0;
				this.Intake_Year_Mode_Temp.Intake_Year_Name = "Select";
				this.Intake_Year_Mode_Data.unshift(
					
					Object.assign({}, this.Intake_Year_Mode_Temp)
				);
				this.Intake_Year_Mode_ = this.Intake_Year_Mode_Data[0];
				this.Intake_Year_Search = this.Intake_Year_Mode_Data[0];
				

				this.Agent_Mode_Data = Rows[6].slice();
				this.Agent_Mode_Temp.Agent_Id = 0;
				this.Agent_Mode_Temp.Agent_Name = "Select";
				this.Agent_Mode_Data.unshift(Object.assign({}, this.Agent_Mode_Temp));
				this.Agent_Mode_ = this.Agent_Mode_Data[0];
				this.Agent_Search = this.Agent_Mode_Data[0];

				this.Application_Status_Mode_Data = Rows[7].slice();
				this.Application_Status_Mode_Temp.Application_status_Id = 0;
				this.Application_Status_Mode_Temp.Application_Status_Name = "Select";
				this.Application_Status_Mode_Data.unshift(
					Object.assign({}, this.Application_Status_Mode_Temp)
				);
				this.Application_Status_Mode_ = this.Application_Status_Mode_Data[0];

				this.Marital_Status_Data = Rows[8].slice();
				this.Marital_Status_Temp.Marital_Status_Id = 0;
				this.Marital_Status_Temp.Marital_Status_Name = "Select";
				this.Marital_Status_Data.unshift(
					Object.assign({}, this.Marital_Status_Temp)
				);
				this.Marital_Status_ = this.Marital_Status_Data[0];

				this.Visa_Type_Data = Rows[9].slice();
				this.Visa_Type_Temp.Visa_Type_Id = 0;
				this.Visa_Type_Temp.Visa_Type_Name = "Select";
				this.Visa_Type_Data.unshift(Object.assign({}, this.Visa_Type_Temp));
				this.Visa_Type_ = this.Visa_Type_Data[0];

				this.IELTS_Type_Data = Rows[10].slice();
				this.IELTS_Type_Temp.Ielts_Type = 0;
				this.IELTS_Type_Temp.Ielts_Type_Name = "Select";
				this.IELTS_Type_Data.unshift(Object.assign({}, this.IELTS_Type_Temp));
				this.IELTS_Type_ = this.IELTS_Type_Data[0];

				this.enquiry_mode_Data = Rows[11].slice();
				this.enquiry_mode_Temp.Enquiry_Mode_Id = 0;
				this.enquiry_mode_Temp.Enquiry_Mode_Name = "Select";
				this.enquiry_mode_Data.unshift(
					Object.assign({}, this.enquiry_mode_Temp)
				);
				this.enquiry_mode_ = this.enquiry_mode_Data[0];

				this.To_Account_Data = Rows[12].slice();
				this.To_Account_Temp.Client_Accounts_Id = 0;
				this.To_Account_Temp.Client_Accounts_Name = "Select";
				this.To_Account_Data.unshift(Object.assign({}, this.To_Account_Temp));
				this.To_Account_ = this.To_Account_Data[0];

				this.Bph_Status_Data = Rows[13].slice();
				this.Bph_Status_Temp.Bph_Status_Id = 0;
				this.Bph_Status_Temp.Bph_Status_Name = "Select";
				this.Bph_Status_Data.unshift(Object.assign({}, this.Bph_Status_Temp));
				this.Bph_Status_ = this.Bph_Status_Data[0];

				this.class_Data = Rows[14].slice();
				this.class_Temp.Class_Id = 0;
				this.class_Temp.Class_Name = "Select";
				this.class_Data.unshift(Object.assign({}, this.class_Temp));
				this.class_ = this.class_Data[0];
				this.Class_Search = this.class_Data[0];

				this.Sort_By_Data = Rows[15].slice();
				this.Sort_By_Temp.Sort_By_Id = 0;
				this.Sort_By_Temp.Sort_By_Name = "Select";
				this.Sort_By_Data.unshift(Object.assign({}, this.Sort_By_Temp));
				this.Sort_By_Search = this.Sort_By_Data[0];

				this.Task_Status_Data = Rows[16].slice();
				this.Task_Status_Temp.Task_Status_Id = 0;
				this.Task_Status_Temp.Status_Name = "Select";
				this.Task_Status_Data.unshift(Object.assign({}, this.Task_Status_Temp));
				this.Task_Status_ = this.Task_Status_Data[0];

				this.Currency_Data = Rows[17].slice();
				this.Currency_Temp.Currency_Id = 0;
				this.Currency_Temp.Currency_Name = "Select";
				this.Currency_Data.unshift(Object.assign({}, this.Currency_Temp));
				this.Currency_ = this.Currency_Data[0];
						debugger;


				if (this.Student_Id_localStorage > "0") {
					this.Edit_Student({ Student_Id: this.Student_Id_localStorage }, 1, 1);
				}
			},
			(Rows) => {
				const dialogRef = this.dialogBox.open(DialogBox_Component, {
					panelClass: "Dialogbox-Class",
					data: { Message: "Error Occured", Type: "2" },
				});
			}
		);
	}

	Public_Search_Course_Click() {
		this.Page_Start_Course = 0;
		this.Page_End_Course = this.Page_Length_Course;

		this.Pointer_Start_ = 1;
		this.Pointer_Stop_Course = this.Page_Length_Course;
		this.Red_Start_Course = 1;
		this.Total_Rows_Course = 0;
		this.Red_Stop_Course = this.Page_Length_Course;
		this.Public_Search_Course();
	}
	Public_Search_Course() {
		this.Courses_Found = 0;
		// this.Start=1;
		var Level_Detail_Id = 0,
			Country_Id = 0,
			Intake_Id = 0,
			Status_Selection = "",
			Duration_Selection = "",
			Intake_Selection = "",
			Sub_Section_Selection = "",
			Ielts_Id = 0,
			University = 0,
			Subject_1 = 0;
		if (this.Level_Detail_ != undefined && this.Level_Detail_ != null)
			if (
				this.Level_Detail_.Level_Detail_Id != undefined &&
				this.Level_Detail_.Level_Detail_Id != null
			)
				Level_Detail_Id = this.Level_Detail_.Level_Detail_Id;

		if (this.Country_ != undefined && this.Country_ != null)
			if (
				this.Country_.Country_Id != undefined &&
				this.Country_.Country_Id != null
			)
				Country_Id = this.Country_.Country_Id;

		this.Search_Intake_Temp = this.Search_Intake_;

		// this.Search_Intake_Year_Temp=this.Search_Intake_Year_;

		if (this.Search_Intake_.value != undefined) {
			for (var i = 0; i < this.Search_Intake_.value.length; i++) {
				Intake_Selection =
					Intake_Selection +
					this.Search_Intake_.value[i].Intake_Id.toString() +
					",";
			}
			if (Intake_Selection.length > 0)
				Intake_Selection = Intake_Selection.substring(
					0,
					Intake_Selection.length - 1
				);
		}

		// if (this.Search_Intake_Year_.value !=undefined)
		// {
		//     for (var i=0;i<this.Search_Intake_Year_.value.length;i++)
		//     {
		//         Intake_Year_Selection=Intake_Year_Selection + this.Search_Intake_Year_.value[i].Intake_Year_Id.toString() +",";
		//     }
		//     if(Intake_Year_Selection.length>0)
		//     Intake_Year_Selection=Intake_Year_Selection.substring(0,Intake_Year_Selection.length-1)
		// }

		this.Search_Sub_Section_Temp = this.Search_Sub_Section_;

		if (this.Search_Sub_Section_.value != undefined) {
			for (var i = 0; i < this.Search_Sub_Section_.value.length; i++) {
				Sub_Section_Selection =
					Sub_Section_Selection +
					this.Search_Sub_Section_.value[i].Sub_Section_Id.toString() +
					",";
			}
			if (Sub_Section_Selection.length > 0)
				Sub_Section_Selection = Sub_Section_Selection.substring(
					0,
					Sub_Section_Selection.length - 1
				);
		}

		if (this.Ielts_ != undefined && this.Ielts_ != null)
			if (this.Ielts_.Ielts_Id != undefined && this.Ielts_.Ielts_Id != null)
				Ielts_Id = this.Ielts_.Ielts_Id;

		if (this.University_ != undefined && this.University_ != null)
			if (
				this.University_.University_Id != undefined &&
				this.University_.University_Id != null
			)
				University = this.University_.University_Id;

		if (this.Subject_ != undefined && this.Subject_ != null)
			if (
				this.Subject_.Subject_Id != undefined &&
				this.Subject_.Subject_Id != null
			)
				Subject_1 = this.Subject_.Subject_Id;

		for (var i = 0; i < this.Subject_Data.length; i++) {
			if (this.Subject_Data[i].Selection == true)
				Status_Selection =
					Status_Selection + this.Subject_Data[i].Subject_Id.toString() + ",";
		}
		if (Status_Selection.length > 0)
			Status_Selection = Status_Selection.substring(
				0,
				Status_Selection.length - 1
			);

		for (var i = 0; i < this.Duration_Data.length; i++) {
			if (this.Duration_Data[i].Selection == true)
				Duration_Selection =
					Duration_Selection +
					this.Duration_Data[i].Duration_Id.toString() +
					",";
		}

		if (Duration_Selection.length > 0)
			Duration_Selection = Duration_Selection.substring(
				0,
				Duration_Selection.length - 1
			);
		var course_Name_Temp = "";
		if (this.Course_Name != undefined)
			if (this.Course_Name.Course_Name != undefined)
				course_Name_Temp = this.Course_Name.Course_Name;
			else course_Name_Temp = this.Course_Name;

		this.issLoading = true;

		this.Student_Service_.Public_Search_Course(
			Level_Detail_Id,
			Country_Id,
			Intake_Selection,
			Sub_Section_Selection,
			course_Name_Temp,
			Status_Selection,
			Duration_Selection,
			Ielts_Id,
			this.Page_Start_Course,
			this.Page_End_Course,
			this.Page_Length_Course,
			University,
			Subject_1
		).subscribe(
			(Rows) => {
				this.issLoading = false;
				this.Course_Data = Rows[0];
				if (this.Course_Data.length > 0) {
					this.next_previous = true;
				}
				this.Courses_Found =
					this.Course_Data[this.Course_Data.length - 1].Course_Id;
				this.Course_Data.splice(this.Course_Data.length - 1);
				this.Pages = this.Courses_Found / this.Page_Length_Course;
				this.Total_Pages = Math.trunc(this.Pages);
				if (this.Pages > this.Total_Pages) {
					this.Total_Pages = Number(this.Total_Pages) + 1;
				}
			},
			(Rows) => {}
		);
	}
	Fees_Receipt_Mail(Fees_Receipt_) {
		if (
			this.Student_.Email == undefined ||
			this.Student_.Email == null ||
			this.Student_.Email == ""
		) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Please add mail address", Type: "3" },
			});
			return;
		}
		this.Receipt_Details_.Receipt_Array = Fees_Receipt_;
		this.Receipt_Details_.Login_Id = Number(this.Login_User);
		this.Receipt_Details_.Student_Name = this.Student_.Student_Name;
		this.Receipt_Details_.Student_Email = this.Student_.Email;
		this.issLoading = true;
		this.Student_Service_.Fees_Receipt_Mail(this.Receipt_Details_).subscribe(
			(Status) => {
				//  log(Graph_Status)

				var mail_Data = Status;

				if (mail_Data == null) {
					const dialogRef = this.dialogBox.open(DialogBox_Component, {
						panelClass: "Dialogbox-Class",
						data: { Message: "Sent", Type: "false" },
					});
					this.issLoading = false;
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
	// OnPrint(Receipt_data_) {
	//
	//     this.Entry_View=false;
	//     this.Fee_Collection_View=false;
	//     this.Section_To_Print=true;
	//     this.Entry_View=true;
	//     this.Receipt_Date=Receipt_data_.Entry_Date;
	//     this.Receipt_Amount=Receipt_data_.Amount;
	//     this.Receipt_Fees=Receipt_data_.Fees_Name;
	//     this.Receipt_Voucher=Receipt_data_.Voucher_No;
	//     this.Receipt_Student=this.Student_.Student_Name;

	//     window.print();
	//   }

	// Search_Student_Click()
	//     {
	//         this.Pointer_Start_ = 1;
	//         this.Pointer_Stop_ = this.Page_Length_;

	//         this.Black_Start =1;
	//         this.Black_Stop = this.Page_Length_;
	//         this.Red_Start = 1;
	//         this.Total_Rows=0;
	//         this.Red_Stop = this.Page_Length_;

	//         this.Search_Student();
	//     }
	Edit_Student_Message(Student_Message_e: Student_Message, index) {
		this.Entry_View = true;
		this.Student_Message_ = Student_Message_e;
		this.Student_Message_ = Object.assign({}, Student_Message_e);
		//  this.Search_Student_Message();
	}

	Delete_Student_Message() {
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
				this.Student_Message_Service.Delete_Student_Message(
					this.Student_.Student_Id
				).subscribe(
					(Delete_status) => {
						if (Delete_status[0][0].Student_Message_Id_ > 0) {
							// this.Student_Message_Data.splice(this.EditIndex, 1);
							const dialogRef = this.dialogBox.open(DialogBox_Component, {
								panelClass: "Dialogbox-Class",
								data: { Message: "Deleted", Type: "false" },
							});
						} else {
							this.issLoading = false;
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
	Remove_Registration() {
		const dialogRef = this.dialogBox.open(DialogBox_Component, {
			panelClass: "Dialogbox-Class",
			data: {
				Message: "Do you want to Remove Enrollment ?",
				Type: true,
				Heading: "Confirm",
			},
		});
		dialogRef.afterClosed().subscribe((result) => {
			if (result == "Yes") {
				this.issLoading = true;
				this.Student_Service_.Remove_Registration(
					this.Profile_.Student_Id
				).subscribe(
					(update_status) => {
						if (update_status[0][0].Student_Id_ > 0) {
							// this.Student_Message_Data.splice(this.EditIndex, 1);
							this.Profile_.Is_Registered = 0
							const dialogRef = this.dialogBox.open(DialogBox_Component, {
								panelClass: "Dialogbox-Class",
								data: { Message: "Enrollment Removed", Type: "false" },
							});
							this.Total_Rows = this.Total_Rows - this.Student_Data.length;
							this.Search_Student();
							this.Remove_Registration_Visibility = false;
							this.Registration_Visiblility = false;

							if (
								this.Remove_Registration_Permissions != undefined &&
								this.Remove_Registration_Permissions != null
							)
								if (this.Registration_Permissions.View == true)
									this.Registration_Visiblility = true;
						} else {
							this.issLoading = false;
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
	Register_Candidate() {
		// if (
		// 	this.Student_.Email == undefined ||
		// 	this.Student_.Email == null ||
		// 	this.Student_.Email == ""
		// ) {
		// 	const dialogRef = this.dialogBox.open(DialogBox_Component, {
		// 		panelClass: "Dialogbox-Class",
		// 		data: { Message: "Please add mail address", Type: "3" },
		// 	});
		// 	return;
		// }
		this.Registration_Data_.Student_Id = this.Profile_.Student_Id;
		this.Registration_Data_.Student_Name = this.Profile_.Student_Name;
		this.Registration_Data_.Login_Id = Number(this.Login_User);

		const dialogRef = this.dialogBox.open(DialogBox_Component, {
			panelClass: "Dialogbox-Class",
			data: {
				Message: "Do you want to Enroll ?",
				Type: true,
				Heading: "Confirm",
			},
		});
		dialogRef.afterClosed().subscribe((result) => {
			if (result == "Yes") {
				this.issLoading = true;

				this.Student_Service_.Register_Candidate(
					this.Registration_Data_
				).subscribe(
					(Save_status) => {
						

						if (Number(Save_status[0].Student_Id_) > 0) {
							this.Profile_.Is_Registered=1
							this.Remove_Registration_Visibility = false;
							this.Registration_Visiblility = false;
							if (
								this.Remove_Registration_Permissions != undefined &&
								this.Remove_Registration_Permissions != null
							)
								if (this.Remove_Registration_Permissions.View == true)
									this.Remove_Registration_Visibility = true;

							const dialogRef = this.dialogBox.open(DialogBox_Component, {
								panelClass: "Dialogbox-Class",
								data: { Message: "Enrolled", Type: "false" },
							});
							this.Total_Rows = this.Total_Rows - this.Student_Data.length;
							this.Search_Student();
							this.Transfer_department_Id = Save_status[0].Department_Id_Reg_;
							this.Register_Transfer_Status =
								Save_status[0].Register_Transfer_Status_Tik_;
							this.Transfer_departmentstatus_Id = Save_status[0].Status_Id_;
							this.Transfer_departmentstatusname = Save_status[0].Status_Name_;
							if (this.Register_Transfer_Status == true) {
								this.Transfer_Cofirmation_Register("");
							}
							//     this.Clr_Student();
							//     this.Create_New();
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

	Send_Welcome_Mail() {
		this.Send_Welcome_Mail_Data_.Student_Id = this.Student_.Student_Id;
		this.Send_Welcome_Mail_Data_.Student_Name = this.Student_.Student_Name;
		this.Send_Welcome_Mail_Data_.Login_Id = Number(this.Login_User);
		this.Send_Welcome_Mail_Data_.Student_Email = this.Student_.Email;
		this.issLoading = true;

		this.Student_Service_.Send_Welcome_Mail(
			this.Send_Welcome_Mail_Data_
		).subscribe(
			(Status) => {
				this.Total_Rows = this.Total_Rows - this.Student_Data.length;

				//  log(Graph_Status)

				var mail_Data = Status;
				this.issLoading = false;
				if (mail_Data == null) {
					const dialogRef = this.dialogBox.open(DialogBox_Component, {
						panelClass: "Dialogbox-Class",
						data: { Message: "Saved", Type: "false" },
					});
					this.issLoading = false;
					this.welcome_mail_view = false;
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

	// Send_Registration_Mail(){

	// }

	File_Change(event: Event) {
		const file = (event.target as HTMLInputElement).files;
		this.ImageFile = file;
		this.Display_File_Name_ = this.ImageFile[0].name;
	}
	File_Change_Passport(event: Event) {
		const file = (event.target as HTMLInputElement).files;
		this.ImageFile_passport = file;
		this.Display_passport_ = this.ImageFile_passport[0].name;
	}
	File_Change_IELTS(event: Event) {
		const file = (event.target as HTMLInputElement).files;
		this.ImageFile_Ielts = file;
		this.Display_Ielts_ = this.ImageFile_Ielts[0].name;
	}
	File_Change_Tenth(event: Event) {
		const file = (event.target as HTMLInputElement).files;
		this.ImageFile_Tenth = file;
		this.Display_Tenth_ = this.ImageFile_Tenth[0].name;
	}
	File_Change_Photo(event: Event) {
		const file = (event.target as HTMLInputElement).files;
		this.ImageFile_Photo = file;
		this.Display_Photo_ = this.ImageFile_Photo[0].name;
	}
	File_Change_Experience(event: Event) {
		const file = (event.target as HTMLInputElement).files;
		this.ImageFile_Experience = file;
		this.Display_Experience_ = this.ImageFile_Experience[0].name;
	}
	File_Change_Resume(event: Event) {
		const file = (event.target as HTMLInputElement).files;
		this.ImageFile_Resume = file;
		this.Display_Resume_ = this.ImageFile_Resume[0].name;
	}
	File_Change_Application(event: Event) {
		const file = (event.target as HTMLInputElement).files;
		this.ImageFile_Application = file;
		this.Display_ApplicationFile_ = this.ImageFile_Application[0].name;
		this.ApplicationDocument_File.ApplicationDocument_Name = "";
		this.ApplicationDocument_File.ApplicationDocument_File_Name = "";
	}
	File_Change_Feesrecepit(event: Event) {
		const file = (event.target as HTMLInputElement).files;
		this.ImageFile_Feesreceipt = file;
		this.Display_FeesrecepitFile_ = this.ImageFile_Feesreceipt[0].name;
		this.FeesreceiptDocument_File.FeesreceiptDocument_Name = "";
		this.FeesreceiptDocument_File.FeesreceiptDocument_File_Name = "";
	}

	Get_Resume_Photo() {
		this.Entry_View = true;
		this.issLoading = true;

		this.Student_Service_.Get_Resume_Photo(this.Student_.Resume).subscribe(
			(Rows) => {
				this.Student_Data = Rows[0];
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
		// this.Store_Document_Service_.Get_Store_Document_Photo(this.Store_Document_Id).subscribe(Rows =>
		//     {
		//         this.Store_Document_Data= Rows[0];
		//         this.issLoading = false;
		//     },
		//      Rows => {
		//             this.issLoading = false;
		//        const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
		//     });
	}
	Get_MOI_Photo() {
		this.Entry_View = true;
		this.issLoading = true;

		this.Student_Service_.Get_MOI_Photo(this.Student_.Passport_Photo).subscribe(
			(Rows) => {
				this.Student_Data = Rows[0];
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

	Get_SOP_Photo() {
		this.Entry_View = true;
		this.issLoading = true;

		this.Student_Service_.Get_SOP_Photo(this.Student_.Passport_Copy).subscribe(
			(Rows) => {
				this.Student_Data = Rows[0];
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

	Get_IELTS_Photo() {
		this.Entry_View = true;
		this.issLoading = true;

		this.Student_Service_.Get_IELTS_Photo(this.Student_.IELTS).subscribe(
			(Rows) => {
				this.Student_Data = Rows[0];
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
	Download_Photo(Photo) {
		//var bs= 'http://newapi.mik.net.in/uploads/'
		var bs = "http://etalk7526api.trackbox.co.in/Documents/Uploads/";
		// var bs= environment.FilePath+'/uploads/';
		var s = bs + Photo;

		window.open(s, "_blank");
	}
	Download_Student_File(File_Name) {
		var File_Name_Temp;
		if (File_Name == "Passport_Copy")
			File_Name_Temp = this.Student_.Passport_Copy;
		else if (File_Name == "IELTS") File_Name_Temp = this.Student_.IELTS;
		else if (File_Name == "Passport_Photo")
			File_Name_Temp = this.Student_.Passport_Photo;
		else if (File_Name == "Tenth_Certificate")
			File_Name_Temp = this.Student_.Tenth_Certificate;
		else if (File_Name == "Work_Experience")
			File_Name_Temp = this.Student_.Work_Experience;
		else if (File_Name == "Resume") File_Name_Temp = this.Student_.Resume;

		var bs = environment.FilePath + "Uploads/"; //'C:/Teena/Edabroad/Back End/Uploads/'
		var s = bs + File_Name_Temp;

		window.open(s, "_blank");
	}
	Search_More_Options1(Student_Data_d) {
		if (Student_Data_d.more_info == true) 
		{
			Student_Data_d.more_info = false;

			
		}
			
		//  this.More_Details_Options = false;
		else 
		{
			Student_Data_d.more_info = true;


		}
		


		

		// this.More_Details_Options = true;
	}

	// KeyUpFunction(event: Event) {
	//
	// //    if(even=== 13)
	// }

	// Add_Document() {
	// 	if (this.Document_Array == null || this.Document_Array == undefined)
	// 		this.Document_Array = [];
	// 	if (
	// 		this.Document_File_Array == null ||
	// 		this.Document_File_Array == undefined
	// 	)
	// 		this.Document_File_Array = [];

	// 	// this.Document_Array.push(this.Document_Description)
	// 	this.Document_File.Document_Name = this.Document_Description;
	// 	this.Document_File.Document_File_Name = this.Display_File_Name_;
	// 	this.Document_File.New_Entry = 1;

	// 	if (
	// 		this.ImageFile != null &&
	// 		this.ImageFile != undefined &&
	// 		this.ImageFile != ""
	// 	) {
	// 		this.Document_File.File_Name = this.ImageFile[0].name;
	// 		this.Document_Array.push(Object.assign({}, this.Document_File));
	// 		this.Document_File_Array.push(this.ImageFile[0]);
	// 		this.Document_Description = "";
	// 		this.Display_File_Name_ = "";
	// 		this.ImageFile = null;
	// 	} else {
	// 		const dialogRef = this.dialogBox.open(DialogBox_Component, {
	// 			panelClass: "Dialogbox-Class",
	// 			data: { Message: "Select File", Type: "3" },
	// 		});
	// 		return;
	// 	}
	// }
	Add_ApplicationDocument() {
		if (
			this.ApplicationDocument_Array == null ||
			this.ApplicationDocument_Array == undefined
		)
			this.ApplicationDocument_Array = [];
		if (
			this.ApplicationDocument_File_Array == null ||
			this.ApplicationDocument_File_Array == undefined
		)
			this.ApplicationDocument_File_Array = [];

		// this.Document_Array.push(this.Document_Description)
		this.ApplicationDocument_File.ApplicationDocument_Name =
			this.ApplicationDocument_Description;
		this.ApplicationDocument_File.ApplicationDocument_File_Name =
			this.Display_ApplicationFile_;
		this.ApplicationDocument_File.New_Entry = 1;

		if (
			this.ImageFile_Application != null &&
			this.ImageFile_Application != undefined &&
			this.ImageFile_Application != ""
		) {
			this.ApplicationDocument_File.ApplicationFile_Name =
				this.ImageFile_Application[0].name;
			this.ApplicationDocument_Array.push(
				Object.assign({}, this.ApplicationDocument_File)
			);
			this.ApplicationDocument_File_Array.push(this.ImageFile_Application[0]);
			this.ApplicationDocument_Description = "";
			this.Display_ApplicationFile_ = "";
			this.ImageFile_Application = null;
		} else {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Select File", Type: "3" },
			});
			return;
		}
	}
	Add_FeesrecepitDocument() {
		if (
			this.FeesreceiptDocument_Array == null ||
			this.FeesreceiptDocument_Array == undefined
		)
			this.FeesreceiptDocument_Array = [];
		if (
			this.FeesreceiptDocument_File_Array == null ||
			this.FeesreceiptDocument_File_Array == undefined
		)
			this.FeesreceiptDocument_File_Array = [];

		// this.Document_Array.push(this.Document_Description)
		this.FeesreceiptDocument_File.FeesreceiptDocument_Name =
			this.FeesreceiptDocument_Description;
		this.FeesreceiptDocument_File.FeesreceiptDocument_File_Name =
			this.Display_FeesrecepitFile_;
		this.FeesreceiptDocument_File.New_Entry = 1;

		if (
			this.ImageFile_Feesreceipt != null &&
			this.ImageFile_Feesreceipt != undefined &&
			this.ImageFile_Feesreceipt != ""
		) {
			this.FeesreceiptDocument_File.FeesreceiptFile_Name =
				this.ImageFile_Feesreceipt[0].name;
			this.FeesreceiptDocument_Array.push(
				Object.assign({}, this.FeesreceiptDocument_File)
			);
			this.FeesreceiptDocument_File_Array.push(this.ImageFile_Feesreceipt[0]);
			this.FeesreceiptDocument_Description = "";
			this.Display_FeesrecepitFile_ = "";
			this.ImageFile_Feesreceipt = null;
		} else {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Select File", Type: "3" },
			});
			return;
		}
	}

	Delete_Student_File(File_Name) {
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
				this.Delete_Student_File_Function(File_Name);
			}
		});
	}

	Delete_Student_File_Function(File_Name) {
		var is_apicall = 0;
		if (File_Name == "Work_Experience") {
			this.Work_Experience = null;
			this.Display_Experience_ = "";
			if (this.Student_.Work_Experience != "") is_apicall = 1;
		} else if (File_Name == "Passport_Copy") {
			this.Passport_Copy = null;
			this.Display_passport_ = "";
			if (this.Student_.Passport_Copy != "") is_apicall = 1;
		} else if (File_Name == "IELTS") {
			this.IELTS = null;
			this.Display_Ielts_ = "";
			if (this.Student_.IELTS != "") is_apicall = 1;
		} else if (File_Name == "Passport_Photo") {
			this.Passport_Photo = null;
			this.Display_Photo_ = "";
			if (this.Student_.Passport_Photo != "") is_apicall = 1;
		} else if (File_Name == "Tenth_Certificate") {
			this.Tenth_Certificate = null;
			this.Display_Tenth_ = "";
			if (this.Student_.Tenth_Certificate != "") is_apicall = 1;
		} else if (File_Name == "Resume") {
			this.Resume = null;
			this.Display_Resume_ = "";
			this.Resume_File_Name = "";
			if (this.Student_.Resume != "") is_apicall = 1;
		}
		if (is_apicall == 1) {
			this.issLoading = true;
			this.Student_Service_.Delete_Student_File(
				this.Student_.Student_Id,
				File_Name
			).subscribe((Delete_status) => {
				this.issLoading = false;
				if (Delete_status[0][0].Student_Id_ > 0) {
					if (File_Name == "Work_Experience")
						this.Student_.Work_Experience = "";
					else if (File_Name == "Passport_Copy")
						this.Student_.Passport_Copy = "";
					else if (File_Name == "IELTS") this.Student_.IELTS = "";
					else if (File_Name == "Passport_Photo")
						this.Student_.Passport_Photo = "";
					else if (File_Name == "Tenth_Certificate")
						this.Student_.Tenth_Certificate = "";
					else if (File_Name == "Resume") this.Student_.Resume = "";

					const dialogRef = this.dialogBox.open(DialogBox_Component, {
						panelClass: "Dialogbox-Class",
						data: { Message: "Deleted", Type: "false" },
					});
				}
			});
		}
	}
	Remove_Document(i) {
		this.Document_Array.splice(i);
		this.Document_File_Array.splice(i);
	}

	Remove_ApplicationDocument(i) {
		this.ApplicationDocument_Array.splice(i);
		this.ApplicationDocument_File_Array.splice(i);
	}
	// Save_Student_Document() {
	// 	//this.issLoading=true;
	// 	if (this.Save_Document_ == undefined || this.Save_Document_ == null) {
	// 		const dialogRef = this.dialogBox.open(DialogBox_Component, {
	// 			panelClass: "Dialogbox-Class",
	// 			data: { Message: "Select Document", Type: "3" },
	// 		});
	// 		return;
	// 	}
	// 	if (
	// 		this.Save_Document_.Document_Id == undefined ||
	// 		this.Save_Document_.Document_Id == null
	// 	) {
	// 		const dialogRef = this.dialogBox.open(DialogBox_Component, {
	// 			panelClass: "Dialogbox-Class",
	// 			data: { Message: "Select Document", Type: "3" },
	// 		});
	// 		return;
	// 	}

	// 	if (
	// 		this.ImageFile == null ||
	// 		this.ImageFile == undefined ||
	// 		this.ImageFile == ""
	// 	) {
	// 		this.File = "";
	// 		this.ImageFile = [];

	// 		const dialogRef = this.dialogBox.open(DialogBox_Component, {
	// 			panelClass: "Dialogbox-Class",
	// 			data: { Message: "Choose a File", Type: "3" },
	// 		});
	// 		return;
	// 	}
	// 	if (
	// 		this.Document_Description == null ||
	// 		this.Document_Description == undefined ||
	// 		this.Document_Description == ""
	// 	) {
	// 		const dialogRef = this.dialogBox.open(DialogBox_Component, {
	// 			panelClass: "Dialogbox-Class",
	// 			data: { Message: "Enter Document Description", Type: "3" },
	// 		});
	// 		return;
	// 	}
	// 	this.Student_Service_.Save_Student_Document(
	// 		this.Save_Document_.Document_Id,
	// 		this.Student_Id_Edit,
	// 		this.ImageFile
	// 	).subscribe(
	// 		(Save_status) => {
	// 			Save_status = Save_status[0];

	// 			if (Number(Save_status[0].Student_Document_Id_) > 0) {
	// 				const dialogRef = this.dialogBox.open(DialogBox_Component, {
	// 					panelClass: "Dialogbox-Class",
	// 					data: { Message: "Saved", Type: "false" },
	// 				});
	// 				this.Get_Student_Document(this.Student_Id_Edit);
	// 				this.Clr_Document();
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
	//     Public_Search_Course_Typeahead2()
	//     {

	//     var Level_Detail_Id=0,Country_Id=0,Intake_Id=0, Status_Selection='', Duration_Selection='',Intake_Selection='',Sub_Section_Selection='',Ielts_Id=0,University=0,Subject_1=0;
	//     if (this.Level_Detail_ != undefined && this.Level_Detail_!=null)
	//     if (this.Level_Detail_.Level_Detail_Id != undefined && this.Level_Detail_.Level_Detail_Id != null)
	//     Level_Detail_Id = this.Level_Detail_.Level_Detail_Id;

	//     if (this.Country_ != undefined && this.Country_!=null)
	//     if (this.Country_.Country_Id != undefined && this.Country_.Country_Id != null)
	//     Country_Id = this.Country_.Country_Id;

	//     // if (this.Intake_ != undefined && this.Intake_!=null)
	//     // if (this.Intake_.Intake_Id != undefined && this.Intake_.Intake_Id != null)
	//     // Intake_Id = this.Intake_.Intake_Id;
	//
	//     this.Search_Intake_Temp=this.Search_Intake_;
	//    // this.Search_Sub_Section_Temp=this.Search_Sub_Section_;

	//     if (this.Search_Intake_.value !=undefined)
	//     {
	//         for (var i=0;i<this.Search_Intake_.value.length;i++)
	//         {
	//             Intake_Selection=Intake_Selection + this.Search_Intake_.value[i].Intake_Id.toString() +",";
	//         }
	//         if(Intake_Selection.length>0)
	//         Intake_Selection=Intake_Selection.substring(0,Intake_Selection.length-1)
	//     }

	//     if (this.Search_Sub_Section_.value !=undefined)
	//     {
	//         for (var i=0;i<this.Search_Sub_Section_.value.length;i++)
	//         {
	//             Sub_Section_Selection=Sub_Section_Selection + this.Search_Sub_Section_.value[i].Sub_Section_Id.toString() +",";
	//         }
	//         if(Sub_Section_Selection.length>0)
	//         Sub_Section_Selection=Sub_Section_Selection.substring(0,Sub_Section_Selection.length-1)
	//     }

	//     if (this.Ielts_ != undefined && this.Ielts_!=null)
	//     if (this.Ielts_.Ielts_Id != undefined && this.Ielts_.Ielts_Id != null)
	//     Ielts_Id = this.Ielts_.Ielts_Id;

	//     if (this.University_ != undefined && this.University_!=null)
	//     if (this.University_.University_Id != undefined && this.University_.University_Id!= null)
	//     University = this.University_.University_Id;

	//     if (this.Subject_ != undefined && this.Subject_!=null)
	//     if (this.Subject_.Subject_Id != undefined && this.Subject_.Subject_Id!= null)
	//     Subject_1 = this.Subject_.Subject_Id;

	//     for (var i=0;i<this.Subject_Data.length;i++)
	//     {
	//     if(this.Subject_Data[i].Selection==true)
	//     Status_Selection=Status_Selection + this.Subject_Data[i].Subject_Id.toString() +",";
	//     }
	//     if(Status_Selection.length>0)
	//     Status_Selection=Status_Selection.substring(0,Status_Selection.length-1)

	//     for (var i=0;i<this.Duration_Data.length;i++)
	//     {
	//     if(this.Duration_Data[i].Selection==true)
	//     Duration_Selection=Duration_Selection + this.Duration_Data[i].Duration_Id.toString() +",";
	//     }

	//     if(Duration_Selection.length>0)
	//     Duration_Selection=Duration_Selection.substring(0,Duration_Selection.length-1)
	//
	//     var course_Name_Temp=''
	//     if(this.Course_Name!=undefined)
	//       if(this.Course_Name.Course_Name !=undefined)
	//         course_Name_Temp = this.Course_Name.Course_Name
	//       else
	//         course_Name_Temp = this.Course_Name
	//
	//         this.issLoading=true;
	//       this.Student_Service_.Public_Search_Course(Level_Detail_Id, Country_Id, Intake_Selection,Sub_Section_Selection,
	//          course_Name_Temp,Status_Selection,Duration_Selection,Ielts_Id,this.Page_Start,this.Page_End,this.Page_Length,University,Subject_1).subscribe(Rows => {

	//            this.issLoading=false;
	//         this.Course_Data=Rows[0];

	//     },
	//     Rows => {
	//     });
	//     }

	Public_Search_Course_Typeahead() {
		this.issLoading = true;
		var Level_Detail_Id = 0,
			Country_Id = 0,
			Intake_Id = 0,
			Intake_Year_Id = 0,
			Sub_Section_Id = 0,
			Status_Selection = "",
			Duration_Selection = "",
			Intake_Selection = "",
			Sub_Section_Selection = "",
			Ielts_Id = 0,
			University = 0,
			Subject_1 = 0;
		if (this.Level_Detail_ != undefined && this.Level_Detail_ != null)
			if (
				this.Level_Detail_.Level_Detail_Id != undefined &&
				this.Level_Detail_.Level_Detail_Id != null
			)
				Level_Detail_Id = this.Level_Detail_.Level_Detail_Id;

		if (this.Country_ != undefined && this.Country_ != null)
			if (
				this.Country_.Country_Id != undefined &&
				this.Country_.Country_Id != null
			)
				Country_Id = this.Country_.Country_Id;

		if (this.Intake_ != undefined && this.Intake_ != null)
			if (this.Intake_.Intake_Id != undefined && this.Intake_.Intake_Id != null)
				Intake_Id = this.Intake_.Intake_Id;

		if (this.Intake_Year_ != undefined && this.Intake_Year_ != null)
			if (
				this.Intake_Year_.Intake_Year_Id != undefined &&
				this.Intake_Year_.Intake_Year_Id != null
			)
				Intake_Year_Id = this.Intake_Year_.Intake_Year_Id;

		if (this.Sub_Section_ != undefined && this.Sub_Section_ != null)
			if (
				this.Sub_Section_.Sub_Section_Id != undefined &&
				this.Sub_Section_.Sub_Section_Id != null
			)
				Sub_Section_Id = this.Sub_Section_.Sub_Section_Id;

		if (this.Search_Intake_.value != undefined) {
			for (var i = 0; i < this.Search_Intake_.value.length; i++) {
				Intake_Selection =
					Intake_Selection +
					this.Search_Intake_.value[i].Intake_Id.toString() +
					",";
			}
			if (Intake_Selection.length > 0)
				Intake_Selection = Intake_Selection.substring(
					0,
					Intake_Selection.length - 1
				);
		}

		// if (this.Search_Intake_Year_.value !=undefined)
		// {
		//     for (var i=0;i<this.Search_Intake_Year_.value.length;i++)
		//     {
		//         Intake_Year_Selection=Intake_Year_Selection + this.Search_Intake_Year_.value[i].Intake_Year_Id.toString() +",";
		//     }
		//     if(Intake_Year_Selection.length>0)
		//     Intake_Year_Selection=Intake_Year_Selection.substring(0,Intake_Year_Selection.length-1)
		// }

		if (this.Search_Sub_Section_.value != undefined) {
			for (var i = 0; i < this.Search_Sub_Section_.value.length; i++) {
				Sub_Section_Selection =
					Sub_Section_Selection +
					this.Search_Sub_Section_.value[i].Sub_Section_Id.toString() +
					",";
			}
			if (Sub_Section_Selection.length > 0)
				Sub_Section_Selection = Sub_Section_Selection.substring(
					0,
					Sub_Section_Selection.length - 1
				);
		}

		if (this.Ielts_ != undefined && this.Ielts_ != null)
			if (this.Ielts_.Ielts_Id != undefined && this.Ielts_.Ielts_Id != null)
				Ielts_Id = this.Ielts_.Ielts_Id;

		if (this.University_ != undefined && this.University_ != null)
			if (
				this.University_.University_Id != undefined &&
				this.University_.University_Id != null
			)
				University = this.University_.University_Id;

		if (this.Subject_ != undefined && this.Subject_ != null)
			if (
				this.Subject_.Subject_Id != undefined &&
				this.Subject_.Subject_Id != null
			)
				Subject_1 = this.Subject_.Subject_Id;

		for (var i = 0; i < this.Subject_Data.length; i++) {
			if (this.Subject_Data[i].Selection == true)
				Status_Selection =
					Status_Selection + this.Subject_Data[i].Subject_Id.toString() + ",";
		}
		if (Status_Selection.length > 0)
			Status_Selection = Status_Selection.substring(
				0,
				Status_Selection.length - 1
			);

		for (var i = 0; i < this.Duration_Data.length; i++) {
			if (this.Duration_Data[i].Selection == true)
				Duration_Selection =
					Duration_Selection +
					this.Duration_Data[i].Duration_Id.toString() +
					",";
		}
		if (Duration_Selection.length > 0)
			Duration_Selection = Duration_Selection.substring(
				0,
				Duration_Selection.length - 1
			);

		var course_Name_Temp = "";
		if (this.Course_Name != undefined)
			if (this.Course_Name.Course_Name != undefined)
				course_Name_Temp = this.Course_Name.Course_Name;
			else course_Name_Temp = this.Course_Name;

		this.Student_Service_.Public_Search_Course_Typeahead(
			Level_Detail_Id,
			Country_Id,
			Intake_Selection,
			Sub_Section_Selection,
			course_Name_Temp,
			Status_Selection,
			Duration_Selection,
			Ielts_Id,
			this.Page_Start,
			this.Page_End_Course,
			this.Page_Length_Course,
			University,
			Subject_1
		).subscribe(
			(Rows) => {
				this.issLoading = false;
				this.Course_Data_Typeahead = Rows[0];
			},
			(Rows) => {}
		);
	}
	display_Course(Course_e: Course) {
		if (Course_e) {
			return Course_e.Course_Name;
		}
	}
	// Search_Fees_Typeahead(event: any)
	// {
	//     var Value = "";
	//     if (event.target.value == "")
	//         Value = undefined;
	//     else
	//         Value = event.target.value;
	//
	//         // if(this.Fees_Search_==null||this.Fees_Search_.Fees_Id==undefined)
	//         // {
	//         //     const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});

	//         // }

	//                this.issLoading = true;
	//     this.Student_Service_.Search_Fees_Typeahead(this.Fees_Search_.Fees_Id,'').subscribe(Rows => {

	//         if (Rows != null) {
	//             this.Fees_Data = Rows[0];
	//             this.issLoading = false;
	//         }
	//     },
	//         Rows => {
	//             this.issLoading = false;
	//            });

	// }
	// display_Fees(Fees_e: Fees)
	// {
	// if (Fees_e) { return Fees_e.Fees_Name; }
	// }

	display_University_(University_e: University) {
		if (University_e) {
			return University_e.University_Name;
		}
	}
	Search_More_Options() {
		if (this.More_Search_Options == true) {
			this.myInnerHeight = this.myInnerHeighttemp - 60;
			this.More_Search_Options = false;
		} else {
			this.More_Search_Options = true;
			this.myInnerHeight = this.myInnerHeighttemp;
		}
	}
	SendLInk() {
		// var str = this.Profile_.Phone_Number;
		var unique_id = this.Profile_.Unique_Id;

		// str = str.replace(/[^0-9+#]/g, "");

		// var char ='+91';
		var Phone_Number;
		// //alert(str.includes(char))
		// if(str.includes(char)==false)
		// {
		// 	Phone_Number =char+this.Profile_.Phone_Number;
		// }
		// else
		//  {
		// 	Phone_Number =str;
		//  }
		//console.log(str.includes(char));

		this.Profile_.Whatsapp = this.Profile_.Whatsapp.replace(
			/[^0-9+#]/g,
			""
		);
		var plus = "+";
		var char = "+91";
		const str = this.Profile_.Whatsapp;

		var first2 = str.substring(0, 2);

		if (this.Profile_.Whatsapp.length > 10 && first2 == "91") {
			Phone_Number = plus + this.Profile_.Whatsapp;
		} else if (
			this.Profile_.Whatsapp.length <= 10 &&
			this.Profile_.Whatsapp.includes(char) == false
		) {
			Phone_Number = char + this.Profile_.Whatsapp;
		} else {
			Phone_Number = this.Profile_.Whatsapp;
		}

		this.issLoading = true;

		this.Student_Service_.SendLInk(
			this.Profile_.Student_Id,
			this.Login_User
		).subscribe(
			(Rows) => {
				Rows = Rows[0];
				if (Number(Rows[0].Student_Id_) > 0) {
					var temp =
						"https://wa.me/" +
						Phone_Number +
						"?text=Hai please update your details here   https://matglobarstudent.adat.in/?id=" +
						unique_id;
					window.open(temp);
					const dialogRef = this.dialogBox.open(DialogBox_Component, {
						panelClass: "Dialogbox-Class",
						data: { Message: "Sent", Type: "false" },
					});
				}
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

	// matglobarstudent.adat.in

	//metxstudent.trackbox.in

	DropboxLInk() {
		// var str = this.Profile_.Phone_Number;
		var unique_id = this.Profile_.Unique_Id;

		// str = str.replace(/[^0-9+#]/g, "");

		// var char ='+91';
		var Phone_Number;
		// //alert(str.includes(char))
		// if(str.includes(char)==false)
		// {
		//  Phone_Number =char+this.Profile_.Phone_Number;
		// }
		// else
		//  {
		//  Phone_Number =str;
		//  }
		//console.log(str.includes(char));

		this.Profile_.Phone_Number = this.Profile_.Phone_Number.replace(
			/[^0-9+#]/g,
			""
		);
		var plus = "+";
		var char = "+91";
		const str = this.Profile_.Phone_Number;

		var first2 = str.substring(0, 2);

		if (this.Profile_.Phone_Number.length > 10 && first2 == "91") {
			Phone_Number = plus + this.Profile_.Phone_Number;
		} else if (
			this.Profile_.Phone_Number.length <= 10 &&
			this.Profile_.Phone_Number.includes(char) == false
		) {
			Phone_Number = char + this.Profile_.Phone_Number;
		} else {
			Phone_Number = this.Profile_.Phone_Number;
		}

		//this.issLoading = true;

		var temp = "https://dropbox.com/";
		window.open(temp);
		// const dialogRef = this.dialogBox.open(DialogBox_Component, {
		//     panelClass: "Dialogbox-Class",
		//     data: { Message: "Sent", Type: "false" },
		// });
	}
	Search_More_Options_Profile() {
		// if (this.More_Search_Options == true)
		// {
		// 	this.myInnerHeight=this.myInnerHeighttemp-90;
		// 	this.More_Search_Options = false;
		// }

		// else
		// {
		// 	this.More_Search_Options = true;
		// 	this.myInnerHeight=this.myInnerHeighttemp
		// }

		if (this.More_Search_Options_Profile == true)
			this.More_Search_Options_Profile = false;
		else this.More_Search_Options_Profile = true;

		if (this.More_Search_Options_Profile == false) this.profile_View = true;
		this.Martialdetails_view = true;
		this.Buttonset_view = false;
		this.Transfer_Button_view = false;
		//this.Show_FollowUp = true;

		if (this.More_Search_Options_Profile == true) this.profile_View = false;
		this.Martialdetails_view = false;
		this.Buttonset_view = true;
		this.Transfer_Button_view = false;
		//this.Show_FollowUp = false;
	}

	Search_Lead_button() {
		
		this.Black_Start = 1;
		this.Black_Stop = this.Page_Length;
		this.Red_Start = 1;
		this.Total_Rows = 0;
		this.Red_Stop = this.Page_Length;
		this.missedfollowup_count = 0;
		this.Search_Student();
	}
	Search_Student() {
		
		var value = 1,
			Register_Value = 1,
			dept_id = 0,
			User_Id = 0,
			By_User_Id = 0,
			Search_value_ = "",
			search_name_ = "",
			look_In_Date_Value = 0,
			branch_id = 0,
			Enquiry_For_id = 0,
			Class_Id = 0,
			Sort_By_Id = 0,
			Intake_Id = 0,
			Intake_Year_Id = 0,
			Agent_Id = 0,
			Department_Status_Id = 0,
			User_Id1 = 0,
			Freelancer_manager_Id1=0,
			UserRoleString = "",
			Department_String = "",
              Date_Type_Value_ = 1;

		if (this.Search_By_ != undefined && this.Search_By_ != null)
			if (
				this.Search_By_ != undefined &&
				this.Search_By_ != null &&
				this.Search_By_ != ""
			)
				value = this.Search_By_;
		if (this.Is_Registered != undefined && this.Is_Registered != null)
			if (
				this.Is_Registered != undefined &&
				this.Is_Registered != null &&
				this.Is_Registered != ""
			)
				Register_Value = this.Is_Registered;


				if (this.Navbar_Leads_View_Menus == 2)
				{Register_Value =3}
				if (this.Navbar_Leads_View_Menus == 1)
					{Register_Value =2}



		if (this.Look_In_Date == true) look_In_Date_Value = 1;
 // Get Date Type value
    if (this.Date_Type != undefined && this.Date_Type != null) {
       
        Date_Type_Value_ = this.Date_Type;
    }
 console.log('this.Date_Type: ', this.Date_Type);
		if (
			this.Search_Name != undefined &&
			this.Search_Name != null &&
			this.Search_Name != ""
		) {
			Search_value_ = this.Search_Name;
		}
		search_name_ = Search_value_.trim();

		if (this.User_Search != undefined && this.User_Search != null)
			if (
				this.User_Search.User_Details_Id != undefined &&
				this.User_Search.User_Details_Id != null
			)
				User_Id = this.User_Search.User_Details_Id;

		if (this.By_User_Search != undefined && this.By_User_Search != null)
			if (
				this.By_User_Search.User_Details_Id != undefined &&
				this.By_User_Search.User_Details_Id != null
			)
				By_User_Id = this.By_User_Search.User_Details_Id;

		if (this.Department_Search != undefined && this.Department_Search != null)
			if (
				this.Department_Search.Department_Id != undefined &&
				this.Department_Search.Department_Id != null
			)
				dept_id = this.Department_Search.Department_Id;

		if (this.Search_Branch != undefined && this.Search_Branch != null)
			if (
				this.Search_Branch.Branch_Id != undefined &&
				this.Search_Branch.Branch_Id != null
			)
				branch_id = this.Search_Branch.Branch_Id;

		if (this.Enquiry_For_Search != undefined && this.Enquiry_For_Search != null)
			if (
				this.Enquiry_For_Search.Enquiryfor_Id != undefined &&
				this.Enquiry_For_Search.Enquiryfor_Id != null
			)
				Enquiry_For_id = this.Enquiry_For_Search.Enquiryfor_Id;

		if (this.Class_Search != undefined && this.Class_Search != null)
			if (
				this.Class_Search.Class_Id != undefined &&
				this.Class_Search.Class_Id != null
			)
				Class_Id = this.Class_Search.Class_Id;

		if (this.Sort_By_Search != undefined && this.Sort_By_Search != null)
			if (
				this.Sort_By_Search.Sort_By_Id != undefined &&
				this.Sort_By_Search.Sort_By_Id != null
			)
				Sort_By_Id = this.Sort_By_Search.Sort_By_Id;

		if (this.Intake_Search != undefined && this.Intake_Search != null)
			if (
				this.Intake_Search.Intake_Id != undefined &&
				this.Intake_Search.Intake_Id != null
			)
				Intake_Id = this.Intake_Search.Intake_Id;

		if (this.Intake_Year_Search != undefined && this.Intake_Year_Search != null)
			if (
				this.Intake_Year_Search.Intake_Year_Id != undefined &&
				this.Intake_Year_Search.Intake_Year_Id != null
			)
				Intake_Year_Id = this.Intake_Year_Search.Intake_Year_Id;

		if (this.Agent_Search != undefined && this.Agent_Search != null)
			if (
				this.Agent_Search.Agent_Id != undefined &&
				this.Agent_Search.Agent_Id != null
			)
				Agent_Id = this.Agent_Search.Agent_Id;

		if (this.Search_Status != undefined && this.Search_Status != null)
			if (
				this.Search_Status.Department_Status_Id != undefined &&
				this.Search_Status.Department_Status_Id != null
			)
				Department_Status_Id = this.Search_Status.Department_Status_Id;

				if (this.Agent_Search12 != undefined && this.Agent_Search12!=null)
					if (this.Agent_Search12.User_Details_Id != undefined && this.Agent_Search12.User_Details_Id != null)
						Freelancer_manager_Id1 = this.Agent_Search12.User_Details_Id;
				

				if (this.Agent_Search1 != undefined && this.Agent_Search1!=null)
					if (this.Agent_Search1.User_Details_Id != undefined && this.Agent_Search1.User_Details_Id != null)
					User_Id1 = this.Agent_Search1.User_Details_Id;
		this.issLoading = true;
		this.Old_search_name = this.Search_Name;
		this.Old_Branch_id = this.Search_Branch.Branch_Id;
		if (this.Old_Branch_id == undefined) this.Old_Branch_id = 0;
		this.Old_Department_id = this.Department_Search.Department_Id;
		if (this.Old_Department_id == undefined) this.Old_Department_id = 0;
		this.Old_Status_id = this.Search_Status.Department_Status_Id;
		if (this.Old_Status_id == undefined) this.Old_Status_id = 0;
		this.Old_Is_Registered = Register_Value;
		this.Old_Search_FromDate = this.Search_FromDate;
		this.Old_Search_ToDate = this.Search_ToDate;
		this.Student_Data =[]
		
		this.Student_Service_.Search_Student(
			moment(this.Search_FromDate).format("YYYY-MM-DD"),
			moment(this.Search_ToDate).format("YYYY-MM-DD"),
			value,
			search_name_,
			dept_id,
			branch_id,
			Enquiry_For_id,
			Class_Id,
			Sort_By_Id,
			Intake_Id,
			Intake_Year_Id,
			Agent_Id,
			User_Id,
			By_User_Id,
			Department_Status_Id,
			User_Id1,
			Freelancer_manager_Id1,
			look_In_Date_Value,
			this.Black_Start,
			this.Black_Stop,
			this.Login_User,
			this.Red_Start,
			this.Red_Stop,
			Register_Value,Date_Type_Value_
		).subscribe(
			(Rows) => {
				
				
				this.Student_Data = Rows.returnvalue.Leads;
				console.log('this.Student_Data: ', this.Student_Data);

				this.Data_Count =
					this.Student_Data[this.Student_Data.length - 1].Student_Id;
				this.Student_Data.splice(this.Student_Data.length - 1);
				this.Missed_Count =
					this.Student_Data[this.Student_Data.length - 1].Student_Id;
				this.Student_Data.splice(this.Student_Data.length - 1);
				// this.Total_Entries = this.Student_Data.length;
				this.missedfollowup_count = 0;
				this.followup_count = 0;
				if (this.Student_Data.length > 0) {
					if (this.Student_Data[0].User_Status == 2) {
						localStorage.clear();
						this.router.navigateByUrl("/auth/login");
					}
				}

				this.Temp_Date_Followup = new Date();
				var temp = this.New_Date(this.Temp_Date_Followup);
				for (var i = 0; i < this.Student_Data.length; i++) {
					var temp_next = moment(
						this.Student_Data[i].Actual_Next_FollowUp_Date
					).format("YYYY-MM-DD");

					//if (this.New_Date(this.Lead_Data_Search[i].Next_FollowUp_Date_Actual)<this.New_Date(this.todate))
					if (temp_next < temp) this.Student_Data[i].tp = 2;
					else this.Student_Data[i].tp = 1;

					// this.Student_Data[i].RowNo =this.Total_Rows+this.Student_Data.length- i;
					this.Student_Data[i].RowNo =
						this.Total_Rows + this.Student_Data.length - i;

						//No setting in student list begin
					this.Student_Data[i].RowNo =
					
						this.Total_Rows+ i+1;
						//No setting in student list end
						console.log('RowNo: ', this.Student_Data[i].RowNo);
					this.Student_Data[i].RowNo_sort = i + 1 + this.Total_Rows;
					if (this.Student_Data[i].tp == 1)
				
						this.followup_count = this.followup_count + 1;
						console.log('followup_count: ', this.followup_count);

						console.log('this.Student_Data[i].tp: ', this.Student_Data[i].tp);
					if (this.Student_Data[i].tp == 2)
						this.missedfollowup_count = this.missedfollowup_count + 1;
					console.log('missedfollowup_count: ', this.missedfollowup_count);
					
				}

				
				// this.Student_Data = this.Student_Data.sort(
				// 	(a, b) => b.RowNo_sort - a.RowNo_sort				);

				if (this.Student_Data.length > 0)
					this.Total_Rows = this.Total_Rows + this.Student_Data.length;
				console.log('Total_Rows: ', this.Total_Rows);

				this.issLoading = false;

				// if (this.Student_Data.length == 0) {
				// 	this.issLoading = false;
				// 	const dialogRef = this.dialogBox.open(DialogBox_Component, {
				// 		panelClass: "Dialogbox-Class",
				// 		data: { Message: "No Details Found", Type: "3" },
				// 	});
				// }
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

	Export() {
		if (this.Student_Data == undefined) {
			// const dialogRef = this.dialogBox.open(DialogBox_Component, {
			// 	panelClass: "Dialogbox-Class",
			// 	data: { Message: "No Details Found", Type: "3" },
			// });
		} else {
			this.Student_Service_.exportExcel(this.Student_Data, "Student_Report");
		}
	}

	Search_Document() {
		this.Document_Service.Search_Document(this.Student_Id_Edit).subscribe(
			(Rows) => {
				
				if (Rows != null) {
					
					this.Student_Documents_Data = Rows[1];
					this.Student_Documents_Data1 = Rows[0];
					// console.log('this.Student_Documents_Data: ', this.Student_Documents_Data);
					
				}


				var j = 0;

				for (var i = 0; i < this.Student_Documents_Data.length; i++) {
				  this.Student_Documents_Data[i].Item_Details = [];      
				  for (var j = 0; j < this.Student_Documents_Data1.length; j++) {
					if (
					  Number(this.Student_Documents_Data[i].Document_Type_Id) == this.Student_Documents_Data1[j].Document_Type_Id
					) {          
					  this.Student_Documents_Data[i].Item_Details.push(Object.assign({}, this.Student_Documents_Data1[j]));
					 
					} 
				  }
				}
				console.log('this.Student_Documents_Data: ', this.Student_Documents_Data);

				//  this.issLoading = false;
			},
			(Rows) => {
				//       this.issLoading = false;
				//  const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
			}
		);
	}

	Get_Message_Details(Student_Id) {
		this.Student_Service_.Get_Message_Details(Student_Id).subscribe(
			(Rows) => {
				if (Rows != null) {
					this.Student_Message_Data = Rows[0];
				}
				//  this.issLoading = false;
			},
			(Rows) => {
				//       this.issLoading = false;
				//  const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
			}
		);
	}
	Get_Student_Document(Student_Id) {
		console.log('Student_Id: *******', Student_Id);
		
		this.Save_Call_Status = false;
		this.Student_Service_.Get_Student_Document(Student_Id).subscribe(
			(Rows) => {
				
				console.log('Rows:####### ', Rows);
				if (Rows != null) {
					this.Student_Documents_Data = Rows[0];
					this.Student_Documents_Data1 = Rows[0];
					// this.Image_Photo = Rows[0][0].File_Name;
				}


				var j = 0;

				for (var i = 0; i < this.Student_Documents_Data.length; i++) {
				  this.Student_Documents_Data[i].Item_Details = [];      
				  for (var j = 0; j < this.Student_Documents_Data1.length; j++) {
					if (
					  Number(this.Student_Documents_Data[i].Document_Type_Id) == this.Student_Documents_Data1[j].Document_Type_Id
					) {          
					  this.Student_Documents_Data[i].Item_Details.push(Object.assign({}, this.Student_Documents_Data1[j]));
					 
					} 
				  }
				}


				// var j = 0;

				// for (var i = 0; i < this.Student_Documents_Data.length; i++) {
				//   this.Student_Documents_Data[i].Item_Details = [];      
				//   for (var j = 0; j < this.Search_Document_Type_Data.length; j++) {
				// 	if (
				// 	  Number(this.Student_Documents_Data[i].Document_Type_Id) == this.Search_Document_Type_Data[j].Document_Type_Id
				// 	) {          
				// 	  this.Student_Documents_Data[i].Item_Details.push(Object.assign({}, this.Search_Document_Type_Data[j]));
				// 	} 
				//   }
				// }




				//  this.issLoading = false;
			},
			(Rows) => {
				//       this.issLoading = false;
				//  const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
			}
		);
	}


	Document_Type_Dropdown() {
		// this.issLoading = true;
		this.Document_Service_.Document_Type_Dropdown().subscribe(
		  (Rows) => {
			if (Rows != null) {
			  this.Search_Document_Type_Data = Rows[0];
			  this.Search_Document_Type_Temp.Document_Type_Id = 0;
			  this.Search_Document_Type_Temp.Document_Type_Name = "Select";
			  this.Search_Document_Type_Data.unshift(this.Search_Document_Type_Temp);
			  this.Search_Document_Type = this.Search_Document_Type_Data[0];
			  this.issLoading = false;
			}
		  },
		  (Rows) => {
			this.issLoading = false;
		  }
		);
	  }
	Get_Student_Course_Apply(Student_Id) {
		//this.selection_box=true
		this.Student_Service_.Get_Student_Course_Apply(Student_Id).subscribe(
			(Rows) => {
				if (Rows != null) {
					this.Student_Course_Apply_Data = Rows[0];
				}
			},
			(Rows) => {}
		);
	}

	Get_Student_Course_Selection(Student_Course_Apply_Id) {
		// this.selection_box=true
		this.Student_Service_.Get_Student_Course_Selection(
			Student_Course_Apply_Id
		).subscribe(
			(Rows) => {
				if (Rows != null) {
					this.Student_Course_Selection_Data = Rows[0];
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
	Advance_Search_Click() {
		this.Advance_Search = !this.Advance_Search;
	}

	Move_To_Freelancer_Click() {
		if (this.Student_Id) {
		  // Open a confirmation dialog
		  const confirmDialogRef = this.dialogBox.open(DialogBox_Component, {
			panelClass: "Dialogbox-Class",
			data: {
				Message: "Do you want to Transfer ?",
				Type: true,
				Heading: "Confirm",
			},// Type can be "confirmation" for your custom confirmation type
		  });
	  
		  // After the confirmation dialog closes, execute the logic if the user confirms
		  confirmDialogRef.afterClosed().subscribe((confirmed) => {
			
			if (confirmed == "Yes") {
			  // User confirmed, proceed with the transfer logic
			  this.Student_Service_.Move_To_Freelancer_Click(this.Student_Id, this.Login_User).subscribe(
				(response: any) => {
				  console.log('Response from server:', response);
				  
				  if (response && Array.isArray(response) && response.length > 0 && 
					Array.isArray(response[0]) && response[0].length > 0 && 
					response[0][0].AffectedRows === 1) {
					const dialogRef = this.dialogBox.open(DialogBox_Component, {
					  panelClass: "Dialogbox-Class",
					  data: { Message: "Student transferred back to freelancer", Type: "false" }
					});

				this.Close_Click()
				this.Search_Lead_button();

				  } else {
					const dialogRef = this.dialogBox.open(DialogBox_Component, {
					  panelClass: "Dialogbox-Class",
					  data: { Message: "Error Occurred", Type: "2" }
					});
				  }
				},
				(error) => {
				  console.error('Error moving student to freelancer', error);
				  const dialogRef = this.dialogBox.open(DialogBox_Component, {
					panelClass: "Dialogbox-Class",
					data: { Message: "Error Occurred", Type: "2" }
				  });
				}
			  );
			}
		  });
		} else {
		  console.error('Student ID is not available');
		  const dialogRef = this.dialogBox.open(DialogBox_Component, {
			panelClass: "Dialogbox-Class",
			data: { Message: "Student ID is not available", Type: "2" }
		  });
		}
	  }
	  
	
	// Move_To_Freelancer_Click() {
	// 	if (this.Student_Id) {
	// 		
	// 	  this.Student_Service_.Move_To_Freelancer_Click(this.Student_Id,this.Login_User).subscribe(
	// 		(response) => {
	// 		  // Handle successful response
	// 		  console.log('Student moved to freelancer successfully', response);
	// 		  // You might want to update the UI or navigate to a different page
	// 		},
	// 		(error) => {
	// 		  // Handle error
	// 		  console.error('Error moving student to freelancer', error);
	// 		  // You might want to show an error message to the user
	// 		}
	// 	  );
	// 	} else {
	// 	  console.error('Student ID is not available');
	// 	  // You might want to show an error message to the user
	// 	}
	//   }
	Next_Click() {
		
		if (
			this.Old_search_name != this.Search_Name ||
			this.Old_Branch_id != this.Search_Branch.Branch_Id ||
			this.Old_Department_id != this.Department_Search.Department_Id ||
			this.Old_Status_id != this.Search_Status.Department_Status_Id ||
			// this.Old_Is_Registered != this.Is_Registered ||
			moment(this.Old_Search_FromDate).format("YYYY-MM-DD") !=
				moment(this.Search_FromDate).format("YYYY-MM-DD") ||
			moment(this.Old_Search_ToDate).format("YYYY-MM-DD") !=
				moment(this.Search_ToDate).format("YYYY-MM-DD")
		) {
			this.Search_Lead_button();
			
		} else if (this.Student_Data.length == this.Page_Length) {
			this.Black_Start = this.Black_Start + this.Page_Length;
			this.Black_Stop = this.Black_Stop + this.Page_Length;
			if (this.missedfollowup_count > 0) {
				this.Red_Start = this.Red_Start + this.missedfollowup_count;
				this.Red_Stop = this.Red_Start + this.Page_Length;
			}
			this.nextflag = 1;
			
			if (this.Student_Data.length > 0) {
				this.Search_Student();
			}
		} else {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "No Other Details", Type: "3" },
			});
		}
	}
	previous_Click() {
		
		if (
			
			this.Old_search_name != this.Search_Name ||
			this.Old_Branch_id != this.Search_Branch.Branch_Id ||
			this.Old_Department_id != this.Department_Search.Department_Id ||
			this.Old_Status_id != this.Search_Status.Department_Status_Id ||
			// this.Old_Is_Registered != this.Is_Registered ||
			this.Old_Search_FromDate != this.Search_FromDate ||
			this.Old_Search_ToDate != this.Search_ToDate
		) {
			this.Search_Lead_button();
		}
		//
		else if (this.Black_Start > 1) {
			{
				this.Black_Start = this.Black_Start - this.Page_Length;
				this.Black_Stop = this.Black_Stop - this.Page_Length;
			}
			if (this.missedfollowup_count > 0 || this.Red_Start > 1) {
				this.Red_Start = this.Red_Start - this.Page_Length;
				if (this.Red_Start <= 0) this.Red_Start = 1;
				this.Red_Stop = this.Red_Start + this.Page_Length;
			}
			this.Total_Rows =
				this.Total_Rows - this.Student_Data.length - this.Page_Length;
			if (this.Total_Rows < 0) {
				this.Total_Rows = 0;
			}
			this.Search_Student();
		} else {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "No Other Details", Type: "3" },
			});
		}

		//   }
	}
	Next_Click_Course() {
		//this.Start = 0;
		if (this.Course_Data.length == this.Page_Length_Course) {
			this.Page_Start_Course = this.Page_Start_Course + this.Page_Length_Course;
			this.Page_End_Course = this.Page_End_Course + this.Page_Length_Course;
			this.Start = Number(this.Start) + 1;
			if (this.Course_Data.length > 0) {
				this.Public_Search_Course();
			}
		}
	}
	previous_Click_Course() {
		// this.Start = 0;

		if (this.Page_Start_Course > 1) {
			{
				this.Page_Start_Course =
					this.Page_Start_Course - this.Page_Length_Course;
				this.Page_End_Course = this.Page_End_Course - this.Page_Length_Course;
				this.Start = Number(this.Start) - 1;
			}
			// if (this.missedfollowup_count > 0 || this.Red_Start > 1) {
			//     this.Red_Start = this.Red_Start - this.Page_Length_;
			//     if (this.Red_Start <= 0)
			//         this.Red_Start = 1;
			//     this.Red_Stop = this.Red_Start + this.Page_Length_;
			// }
			this.Total_Rows_Course =
				this.Total_Rows_Course -
				this.Course_Data.length -
				this.Page_Length_Course;
			this.Public_Search_Course();
		}
	}
	Search_Student_Status() {
		this.issLoading = true;
		this.Student_Service_.Search_Student_Status("").subscribe(
			(Rows) => {
				this.Student_Status_Data = Rows[0];
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
	Search_Enquiry_Source() {
		this.issLoading = true;
		this.Student_Service_.Search_Enquiry_Source("").subscribe(
			(Rows) => {
				this.Student_Status_Data = Rows[0];
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
	View_Student_Click_() {
		this.View_History_ = true;
		//this.New_view=true;
		//this.profile_View = true;
		this.New_view = true;
		// this.More_Search_Options_Profile = true;
		// this.Show_FollowUp=true;
		this.History_View = false;
		this.Data_View= false;
		this.Show_Followup_History = true;
		this.Edit_Student(
			this.Student_Data[this.Lead_EditIndex],
			this.Lead_EditIndex,
			2
		);
	}

	Transfer_Click_() {
		this.View_History_ = true;
		this.History_View = false;
		this.Data_View= false;
		this.Show_Followup_History = true;
		this.Transfer_view = true;
		this.Show_FollowUp = true;
		this.Buttonset_view = false;
		this.Transfer_Button_view = true;
		this.Transfer_department_Id = null;
		this.transfer_typeahead = true;

		//this.Status_Change();
	}

	Transfer_Click_Student() {
		this.View_History_ = true;
		this.History_View = false;
		this.Show_Followup_History = true;
		this.Transfer_view = true;
		this.Show_FollowUp = true;
		this.Buttonset_view = false;
		this.Transfer_Button_view = true;
		this.Transfer_department_Id = null;
		this.transfer_typeahead = true;
		this.Student_Name = this.Profile_.Student_Name;

		this.New_view = false;
		this.profile_View = false;
		this.Martialdetails_view = false;
		this.tab_view = false;
	}

	Close_Click_Transfer() {
		this.Show_FollowUp = false;
		this.Buttonset_view = true;
		this.Transfer_Button_view = false;
		this.Transfer_view = false;
		this.transfer_typeahead = false;

		this.Followup_Transfer_Status_Data = [];
		this.Followup_Substatus_Data_Filter1 = [];
		this.Followup_Substatus_Data1 = [];

		this.Transfer_Status_ = null;
		this.Transfer_Status_k = null;
		this.Profile_.Transfer_Remark = "";
		this.Close_Click();
	}

	Edit_Student(Student_e: any, index, Call_From) {
		
		this.Get_Menu_Status_Multiple(49, this.Login_User);

		this.View_Student_ = true;
		this.View_Follow_ = false;
		this.Lead_EditIndex = index;
		this.Entry_View = true;
		this.profile_View = true;

this.user_category_New=Student_e.user_category
this.Move_to_Freelancer=Student_e.Move_to_Freelancer
this.FollowUp_Count=Student_e.FollowUp_Count

		// this.Martialdetails_view=false;
		this.Statistics_View = true;
		this.Buttonset_view = true;
		this.Transfer_Button_view = false;
		this.tab_view = true;
		this.Visa_View = false;
		this.History_View = false;
		this.Data_View= false;
		this.application_details_View = false;
		this.language_details_View = false;
		this.Qualification_details_View = false;
		this.Applicationmodal_View = false;
		this.Languagemodal_View = false;
		this.Qualificationmodal_View = false;
		this.Feesmodal_View = false;
		this.Visamodal_View = false;
		this.Pre_Visamodal_View = false;
		this.Student_Name = Student_e.Student_Name;

		
		this.User_Category_Check_Fees_Receipt_Hide = Student_e.user_category;

		this.Tasknew_View = false;
		this.Tasknewmodal_View = false;

		/** Added on 13-06-2024 */
		this.Payment_Tab_View = true;
		this.Paymentmodal_View = false;
		this.Payment_View=false;
		/** */

		this.Reviewmodal_View = false;
		this.Reviewdetails_View = false;
		this.Pre_Visa_View = false;
		this.Invoicemodal_View = false;
		this.course_history_View = false;
		this.Checklist_View = false;
		this.View_document = false;
		this.Course_View = false;
		this.Fee_Collection_View = false;
		this.message_View = false;
		this.profile_View = false;

		this.Sms_Button_view = true;
		this.More_Button_view = true;

		this.View_History_ = false;
		this.New_view = true;
		this.More_Search_Options_Profile = true;

		if (this.Document_View_Status == true) this.Document_View_Option = true;

		if (Call_From == 0) {
			this.Flag_Followup = 1;
			this.Show_FollowUp = false;
			this.Get_FollowUp_Details();
		
		} else if (Call_From == 2) {
			this.Flag_Followup = 0;
			this.Flag_Student = 1;
			// this.View_Follow_ = true;
			// this.profile_View = true;
			this.Show_FollowUp = true;
			//sthis.Get_FollowUp_Details();
		
		} else {
			this.Flag_Followup = 0;
			this.Show_FollowUp = true;
		}

		this.Flag_Student = 1;
		this.FollowUp_.Remark = "";
		this.Student_Id = Student_e.Student_Id;
		//console.log(this.Student_Id);
		this.Student_Id_Edit = Student_e.Student_Id;
		this.Save_Agent_.Client_Accounts_Name = Student_e.Client_Accounts_Name;
		this.Save_Agent_.Client_Accounts_Id = Student_e.Agent_Id;

		this.Application_Click_Status = false;
		this.Fee_Collection_Click_Status = false;

		if (this.Profile_.Visa_Date == null) {
			this.Profile_.Visa_Date  = new Date();
			this.Profile_.Visa_Date  = this.New_Date(
				this.Profile_.Visa_Date 
			);
		} else
			this.Profile_.Visa_Date  = this.New_Date(
				new Date(moment(this.Profile_.Visa_Date ).format("YYYY-MM-DD"))
			);
		this.Get_Student_Edit(Student_e.Student_Id);

		
		this.issLoading = true;
		
		this.Student_Service_.Get_Student(Student_e.Student_Id,Number(this.Login_User)).subscribe(
			(Rows) => {
				
				this.Profile_ = Object.assign({}, Rows[0][0]);
				console.log('Profile_: ', this.Profile_);
				this.Count_Task_ = Rows[2][0].Task_Count_

				this.Followp_Count_data_ = Rows[2][0].Followup_Count_
				//this.Student_ = Object.assign({}, Rows[0][0]);
				this.Remove_Registration_Visibility = false;
				this.Registration_Visiblility = false;
				// if(this.Student_.Is_Registered==true)
				// {
				//     if(this.Remove_Registration_Permissions.View==true)
				//         this.Remove_Registration_Visibility=true;
				// }
				// else
				// {
				//     if(this.Registration_Permissions.View==true)
				//         this.Registration_Visiblility=true;
				// }


				// Check if Usertype is 1 or if Profile_.To_User_Id matches the logged-in user
if (this.Usertype === 1 || this.Profile_.To_User_Id == Number(this.Login_User)) {
    this.Save_button_view = true;
} else {
    this.Save_button_view = false;
}
console.log('this.Profile_.Parent_Use: ', this.Profile_.Parent_User);
// Additional checks
if (this.Profile_.Parent_User && Number(this.Profile_.Parent_User) === Number(this.Login_User) && this.Followp_Count_data_ === 1) {

	this.Save_button_view = true;
}

// if(this.Profile_.To_User_Id != Number(this.Login_User))
// {
// 	this.Save_button_view =false
// }
// else
// this.Save_button_view =true

				if (this.Profile_.Is_Registered == 1){
					this.Registered_Check = 1;
					this.Student_Service_.updateNavTitle('Student');
				}else{
					this.Student_Service_.updateNavTitle('Lead');
				} 

				if (this.Student_.Send_Welcome_Mail_Status == 0) {
					this.welcome_mail_view = true;
				} else {
					this.welcome_mail_view = false;
				}

				if (this.Profile_.Is_Registered == 1) {
					if (
						this.Remove_Registration_Permissions != undefined &&
						this.Remove_Registration_Permissions != null
					)
						if (this.Remove_Registration_Permissions.View == true)
							this.Remove_Registration_Visibility = true;
				} else {
					if (
						this.Registration_Permissions != undefined &&
						this.Registration_Permissions != null
					)
						if (this.Registration_Permissions.View == true)
							this.Registration_Visiblility = true;
				}

				this.Display_Resume_ = this.Student_.Resume_File_Name;
				this.Display_passport_ = this.Student_.Passport_Copy_File_Name;
				this.Display_Ielts_ = this.Student_.IELTS_File_Name;
				this.Display_Photo_ = this.Student_.Passport_Photo_File_Name;
				this.Display_Tenth_ = this.Student_.Tenth_Certificate_File_Name;
				this.Display_Experience_ = this.Student_.Work_Experience_File_Name;

				// this.Document_Array = Rows[1];
				// this.Document_File_Array = [];
				// for (var i = 0; i < this.Document_Array.length; i++)
				// 	this.Document_File_Array.push("");
				// // this.Document_File_Array
				for (var i = 0; i < this.Gender_Data.length; i++) {
					if (this.Student_.Gender == this.Gender_Data[i].Gender_Name)
						this.Gender_ = this.Gender_Data[i];
				}

				for (var i = 0; i < this.Student_Status_Data.length; i++) {
					if (
						this.Student_.Student_Status_Id ==
						this.Student_Status_Data[i].Student_Status_Id
					)
						this.Student_Status_ = this.Student_Status_Data[i];
				}

				for (var i = 0; i < this.Enquiry_Source_Data.length; i++) {
					if (
						this.Profile_.Enquiry_Source_Id ==
						this.Enquiry_Source_Data[i].Enquiry_Source_Id
					)
						this.Enquiry_Source_ = this.Enquiry_Source_Data[i];
				}

				for (var i = 0; i < this.enquiry_mode_Data.length; i++) {
					if (
						this.Profile_.Enquiry_Mode_Id ==
						this.enquiry_mode_Data[i].Enquiry_Mode_Id
					)
						this.enquiry_mode_ = this.enquiry_mode_Data[i];
				}

				for (var i = 0; i < this.Intake_Mode_Data.length; i++) {
					if (
						this.Profile_.Intake_Id ==
						this.Intake_Mode_Data[i].Intake_Id
					)
						this.Intake_Mode_Profile_ = this.Intake_Mode_Data[i];
				}

				for (var i = 0; i < this.Shore_Data.length; i++) {
					if (this.Profile_.Shore_Id == this.Shore_Data[i].Shore_Id)
						this.Shore_ = this.Shore_Data[i];
				}

				for (var i = 0; i < this.Enquiry_For_Data.length; i++) {
					if (
						this.Profile_.Enquiryfor_Id ==
						this.Enquiry_For_Data[i].Enquiryfor_Id
					)
						this.Enquiry_For_ = this.Enquiry_For_Data[i];
				}

				for (var i = 0; i < this.Passport_Mode_Data.length; i++) {
					if (
						this.Profile_.Passport_Id == this.Passport_Mode_Data[i].Passport_Id
					)
						this.Passport_Mode_ = this.Passport_Mode_Data[i];
				}

				for (var i = 0; i < this.Marital_Status_Data.length; i++) {
					if (
						this.Profile_.Marital_Status_Id ==
						this.Marital_Status_Data[i].Marital_Status_Id
					)
						this.Marital_Status_ = this.Marital_Status_Data[i];
				}

				//     for (var i = 0; i < this.Resume_Data.length; i++)
				//     {
				//        if (this.Student_.Resume_Id == this.Resume_Data[i].Resume_Id) {
				//            this.Resume_ = this.Resume_Data[i];
				//        }
				//    }

				for (var i = 0; i < this.Resume_Mode_Data.length; i++) {
					if (this.Student_.Resume_Id == this.Resume_Mode_Data[i].Resume_Id)
						this.Resume_Mode_ = this.Resume_Mode_Data[i];
				}

				//    for (var i = 0; i < this.LOR_1_Data.length; i++)
				//    {
				//       if (this.Student_.LOR_1_Id == this.LOR_1_Data[i].LOR_1_Id) {
				//           this.LOR_1_ = this.LOR_1_Data[i];
				//       }
				//   }

				for (var i = 0; i < this.LOR_1_Mode_Data.length; i++) {
					if (this.Student_.LOR_1_Id == this.LOR_1_Mode_Data[i].LOR_1_Id)
						this.LOR_1_Mode_ = this.LOR_1_Mode_Data[i];
				}

				//   for (var i = 0; i < this.LOR_2_Data.length; i++)
				//   {
				//      if (this.Student_.LOR_2_Id == this.LOR_2_Data[i].LOR_2_Id) {
				//          this.LOR_2_ = this.LOR_2_Data[i];
				//      }
				//  }

				for (var i = 0; i < this.LOR_2_Mode_Data.length; i++) {
					if (this.Student_.LOR_2_Id == this.LOR_2_Mode_Data[i].LOR_2_Id)
						this.LOR_2_Mode_ = this.LOR_2_Mode_Data[i];
				}
				//    for (var i = 0; i < this.Ielts_Data.length; i++)
				//     {
				//        if (this.Student_.Ielts_Id == this.Ielts_Data[i].Ielts_Id) {
				//            this.Ielts_ = this.Ielts_Data[i];
				//        }
				//    }
				for (var i = 0; i < this.Ielts_Mode_Data.length; i++) {
					if (this.Student_.Ielts_Id == this.Ielts_Mode_Data[i].Ielts_Id)
						this.Ielts_Mode_ = this.Ielts_Mode_Data[i];
				}

				//    for (var i = 0; i < this.MOI_Data.length; i++)
				//     {
				//        if (this.Student_.MOI_Id == this.MOI_Data[i].MOI_Id) {
				//            this.MOI_ = this.MOI_Data[i];
				//        }
				//    }

				for (var i = 0; i < this.MOI_Mode_Data.length; i++) {
					if (this.Student_.MOI_Id == this.MOI_Mode_Data[i].MOI_Id)
						this.MOI_Mode_ = this.MOI_Mode_Data[i];
				}

				for (var i = 0; i < this.SOP_Mode_Data.length; i++) {
					if (this.Student_.SOP_Id == this.SOP_Mode_Data[i].SOP_Id)
						this.SOP_Mode_ = this.SOP_Mode_Data[i];
				}

				//    for (var i = 0; i < this.Passport_Data.length; i++)
				//    {
				//       if (this.Student_.Passport_Id == this.Passport_Data[i].Passport_Id) {
				//           this.Passport_ = this.Passport_Data[i];
				//       }
				//   }

				for (var i = 0; i < this.Passport_Mode_Data.length; i++) {
					if (
						this.Student_.Passport_Id == this.Passport_Mode_Data[i].Passport_Id
					)
						this.Passport_Mode_ = this.Passport_Mode_Data[i];
				}

				for (var i = 0; i < this.Marital_Status_Data.length; i++) {
					if (
						this.Student_.Marital_Status_Id ==
						this.Marital_Status_Data[i].Marital_Status_Id
					)
						this.Marital_Status_ = this.Marital_Status_Data[i];
				}
				for (var i = 0; i < this.Profile_Intake_Mode_Data.length; i++) {
					if (
						this.Student_.Intake_Id ==
						this.Profile_Intake_Mode_Data[i].Intake_Id
					)
						this.Profile_Intake_Mode_ = this.Profile_Intake_Mode_Data[i];
				}
				this.Profile_.Phone_Change = 0;
				this.Profile_.Email_Change = 0;
				this.Profile_.Alternative_Phone_Number_Change = 0;
				this.Profile_.Alternative_Email_Change = 0;

				this.Profile_Country_Temp.Country_Id = this.Profile_.Country_Id;
				this.Profile_Country_Temp.Country_Name = this.Profile_.Country_Name;
				this.Profile_Country_ = Object.assign({}, this.Profile_Country_Temp);

				this.Profile_University_Temp.University_Id =
					this.Student_.Profile_University_Id;
				this.Profile_University_Temp.University_Name =
					this.Student_.College_University;
				this.Profile_University_ = Object.assign(
					{},
					this.Profile_University_Temp
				);

				this.Program_Course_Temp.Course_Id = this.Profile_.Program_Course_Id;
				this.Program_Course_Temp.Course_Name =
					this.Profile_.Program_Course_Name;
				this.Program_Course_ = Object.assign({}, this.Program_Course_Temp);

				//    for (var i = 0; i < this.SOP_Data.length; i++)
				//     {
				//        if (this.Student_.SOP_Id == this.SOP_Data[i].SOP_Id) {
				//            this.SOP_ = this.SOP_Data[i];
				//        }
				//    }

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
	// Search_Status_Typeahead(event: any)
	// {
	//     var Value = "";
	//     if (event.target.value == "")
	//         Value = "";
	//     else
	//         Value = event.target.value.toLowerCase();
	//     if (this.Followup_Status_Data == undefined || this.Followup_Status_Data.length==0)
	//     {
	//         this.issLoading = true;
	//         this.Student_Service_.Search_Status_Typeahead('',3).subscribe(Rows => {
	//         if (Rows != null)
	//         {
	//             this.Followup_Status_Data = Rows[0];
	//             this.issLoading = false;
	//             this.Followup_Status_Data_filter=[];
	//             for (var i=0;i<this.Followup_Status_Data.length;i++)
	//             {
	//                 if(this.Followup_Status_Data[i].Status_Name.toLowerCase().includes(Value))
	//                     this.Followup_Status_Data_filter.push(this.Followup_Status_Data[i])
	//             }
	//         }
	//     },
	//     Rows => {
	//      this.issLoading = false;
	//     });
	//     }
	//     else
	//     {
	//         this.Followup_Status_Data_filter=[];
	//         for (var i=0;i<this.Followup_Status_Data.length;i++)
	//         {
	//             if(this.Followup_Status_Data[i].Status_Name.toLowerCase().includes(Value))
	//                 this.Followup_Status_Data_filter.push(this.Followup_Status_Data[i])
	//         }
	//     }

	// }
	transfer_button()
{
	this.showTransferUserTypeahead = !this.showTransferUserTypeahead;
	console.log('showTransferUserTypeahead: ', this.showTransferUserTypeahead);
	if (this.showTransferUserTypeahead) {
		// If `showTransferUserTypeahead` is true, set `Next_FollowUp_Date` to `transferDate`
		this.FollowUp_.Next_FollowUp_Date = this.transferDate;

this.Transfer_Button_Status=1


	} else {
		// If `showTransferUserTypeahead` is false, set `Next_FollowUp_Date` to the current date
		this.FollowUp_.Next_FollowUp_Date = new Date();
					this.FollowUp_.Next_FollowUp_Date = this.New_Date(
						this.FollowUp_.Next_FollowUp_Date
					);
					this.Transfer_Button_Status=0
	}
	
	
	console.log('transferDate: ', this.transferDate);
}
	University_Typeahead(event: any) {
		var Value = "";
		if (event.target.value == "") Value = "";
		else Value = event.target.value.toLowerCase();
		if (
			this.Country_ == null ||
			this.Country_.Country_Id == 0 ||
			this.Level_Detail_ == null ||
			this.Level_Detail_.Level_Detail_Id == 0
		) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Select Country and Level", Type: "3" },
			});
		} else if (
			this.University_Data == undefined ||
			this.University_Data.length == 0
		) {
			this.issLoading = true;

			this.University_Service_.University_Typeahead_with_Level_Country(
				this.Country_.Country_Id,
				this.Level_Detail_.Level_Detail_Id,
				Value
			).subscribe(
				(Rows) => {
					if (Rows != null) {
						this.University_Data = Rows[0];
						this.issLoading = false;
						this.University_Data_Filter = [];
						for (var i = 0; i < this.University_Data.length; i++) {
							if (
								this.University_Data[i].University_Name.toLowerCase().includes(
									Value
								)
							)
								this.University_Data_Filter.push(this.University_Data[i]);
						}
					}
				},
				(Rows) => {
					this.issLoading = false;
				}
			);
		} else {
			this.University_Data_Filter = [];
			for (var i = 0; i < this.University_Data.length; i++) {
				if (
					this.University_Data[i].University_Name.toLowerCase().includes(Value)
				)
					this.University_Data_Filter.push(this.University_Data[i]);
			}
		}
	}
	display_University(University_e: University) {
		if (University_e) {
			return University_e.University_Name;
		}
	}
	Remarks_Typeahead(event: any) {
		var Value = "";
		if (event.target.value == "") Value = "";
		else Value = event.target.value.toLowerCase();
		if (this.Remarks_Data == undefined || this.Remarks_Data.length == 0) {
			this.issLoading = true;
			this.Student_Service_.Remarks_Typeahead(Value).subscribe(
				(Rows) => {
					if (Rows != null) {
						this.Remarks_Data = Rows[0];
						this.Remarks_Data_Filter = [];
						this.issLoading = false;
						for (var i = 0; i < this.Remarks_Data.length; i++) {
							if (
								this.Remarks_Data[i].Remarks_Name.toLowerCase().includes(Value)
							)
								this.Remarks_Data_Filter.push(this.Remarks_Data[i]);
						}
					}
				},
				(Rows) => {
					this.issLoading = false;
				}
			);
		} else {
			this.Remarks_Data_Filter = [];
			for (var i = 0; i < this.Remarks_Data.length; i++) {
				if (this.Remarks_Data[i].Remarks_Name.toLowerCase().includes(Value))
					this.Remarks_Data_Filter.push(this.Remarks_Data[i]);
			}
		}
	}
	display_Remarks(Remarks_e: Remarks) {
		if (Remarks_e) {
			return Remarks_e.Remarks_Name;
		}
	}

	Agent_Typeahead(event: any) {
		var Value = "";
		if (event.target.value == "") Value = undefined;
		else Value = event.target.value;
		this.issLoading = true;

		this.Client_Accounts_Service.Agent_Typeahead(Value).subscribe(
			(Rows) => {
				if (Rows != null) {
					this.Client_Accounts_Data = Rows[0];
				}
				this.issLoading = false;
			},
			(Rows) => {
				this.issLoading = false;
			}
		);
	}
	display_Agent(Client_Accounts_e: Client_Accounts) {
		if (Client_Accounts_e) {
			return Client_Accounts_e.Client_Accounts_Name;
		}
	}

	Search_Country_Typeahead(event: any) {
		var Value = "";
		if (event.target.value == "") Value = "";
		else Value = event.target.value.toLowerCase();
		this.clearIntakeDropdown();
		if (this.Country_Data == undefined || this.Country_Data.length == 0) {
			this.issLoading = true;
debugger
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



	Search_Application_StatusforChangeStatus_Typeahead(event: any, Source :number) {
		
		var Value = "";
		if (event.target.value == "" || Source==1) 
		
		{

			Value = "";

			
	this.document_view  =false;
	this.Data_list_view   =false;
	this.Task_Details_view  = false;
		}
		else Value = event.target.value.toLowerCase();

		if (this.Department_Status_Mode_Data1 == undefined || this.Department_Status_Mode_Data1.length == 0) {
			this.issLoading = true;
			
			this.Country_Service_.Search_Application_StatusforChangeStatus_Typeahead(Value,this.Login_User,this.selectedApplicationsIdDetails,this.Student_Id).subscribe(
				(Rows) => {
						
					
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
  
this.clearIntakeYearDiv();
this.showIntakeYearDiv=false;
		this.Country_Service_.Search_Application_StatusFor_Process_Document(Process_id,Department_Status_Id,this.Application_Id_Log,this.Student_Id).subscribe(
			(Rows) => {
					
				this.showIntakeYearDiv=true;
				if (Rows != null) {
					this.process_document_Data = Rows[0];
					this.process_data_list_Data = Rows[1];
					this.ApplicationDetails_.Registration_Mandatory= Rows[2][0].Registration_Mandatory
					this.ApplicationDetails_.Fees_Status= Rows[2][0].Fees_Status
					
					this.ApplicationDetails_.Fees_Name= Rows[2][0].Fees_Name
					this.ApplicationDetails_.Task_Status= Rows[2][0].Task_new
					this.ApplicationDetails_.Department_Status_Duration=Rows[7][0].Status_Order
					this.Transfer_temp_name=Rows[7][0].Transfer_Department_Name
					

					this.user_category=Rows[11][0].user_category_student;
					this.fees_check =Rows[13][0].fees_check;
					console.log('Rows[13][0].fees_check: ', Rows[13][0].fees_check);
					this.Fees_Receipt_Status  =Rows[14][0].Fees_Receipt_Status;
					this.fees_check_Fees_Mandatory =Rows[15][0].Fees_Mandatory;
					
					
this.ApplicationDetails_.Deadline_Date = new Date();



const hoursToAdd = this.ApplicationDetails_.Department_Status_Duration;
console.log('hoursToAdd: ', this.Followup_Users_.User_Details_Id);

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
					
					this.process_Task_Data_pending = Rows[8];
					
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
						this.Profile_.Is_Registered == 0 &&
						this.ApplicationDetails_.Registration_Mandatory == 1
					) {
						const dialogRef = this.dialogBox.open(DialogBox_Component, {
							panelClass: "Dialogbox-Class",
							data: { Message: "Registraion mandatory, please register the candidate to use this status", Type: "3" },
						});
						this.Department_Status_Mode1_=null;
						 return;
					}
					
					console.log('this.Profile_.Fees_Status: ', this.Profile_.Fees_Status);
					console.log('Profile_: ', this.Profile_);
					console.log('this.ApplicationDetails_.Fees_Status : ', this.ApplicationDetails_.Fees_Status );
					console.log('this.ApplicationDetails_.Fees_Name : ', this.ApplicationDetails_.Fees_Name );
					console.log('ApplicationDetails_.: ', this.ApplicationDetails_);
					console.log('his.user_category: ', this.user_category);
					console.log('this.Department_Status_Mode1_: ', this.Department_Status_Mode1_);
					if (
						this.Profile_.Fees_Status == 0 &&
						
						this.ApplicationDetails_.Fees_Status == 1 &&  this.user_category!=2
				
						
					
					) {
						const dialogRef = this.dialogBox.open(DialogBox_Component, {
							panelClass: "Dialogbox-Class",
							data: { Message:  this.ApplicationDetails_.Fees_Name + " is mandatory, please pay fees to use this status", Type: "3" },
						});
						this.Department_Status_Mode1_=null;
						 return;
					}
if(this.fees_check_Fees_Mandatory==1)
{


					console.log('fees_check: ', this.fees_check);
					if (
						this.fees_check == 0 &&  this.user_category!=2
						
						
					) {
						const dialogRef = this.dialogBox.open(DialogBox_Component, {
							panelClass: "Dialogbox-Class",
							data: { Message:  this.ApplicationDetails_.Fees_Name + " is mandatory, please pay fees to use this status", Type: "3" },
						});
						this.Department_Status_Mode1_=null;
					
						 return;
					}

					if (
						this.Fees_Receipt_Status != 2 &&  this.user_category!=2
						
					) {
						const dialogRef = this.dialogBox.open(DialogBox_Component, {
							panelClass: "Dialogbox-Class",
							data: { Message:  this.ApplicationDetails_.Fees_Name + " is not Approved, please Approve to use this status", Type: "3" },
						});
						this.Department_Status_Mode1_=null;
						 return;
					}

					
				}				

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
					
					
// Assign the data from Rows[16]
const intakeRawList = Rows[16];

// Create a combined list with Display_Name
this.combinedIntakeData = intakeRawList.map((item: any) => ({
  ...item,
  Display_Name: `${item.Intake_Year_Name} - ${item.Intake_Name}`
}));
					// this.Intake_Data_List =Rows[13][0];
					// this.Intake_Year_List =Rows[14][0];
				}
				this.issLoading = false;
				
			},
			(Rows) => {
				this.issLoading = false;
			}
			);
	}



	Task_Item_Dropdown(Task_Group_Id) {
		this.issLoading = true;
		this.Student_Service_.Task_Item_Dropdown(Task_Group_Id).subscribe(
			(Rows) => {
				if (Rows != null) {
					this.Task_Item_Data_search = Rows[0];
					this.Task_Item_Temp.Task_Item_Id = 0;
					this.Task_Item_Temp.Task_Item_Name = "Select";
					this.Task_Item_Data_search.unshift(this.Task_Item_Temp);

					this.Task_Item_ = this.Task_Item_Data_search[0];
					this.Task_Item_search_ = this.Task_Item_Data_search[0];
					this.Task_Item_search_Tasknew_ = this.Task_Item_Data_search[0];
					this.issLoading = false;

					if (this.Task_Item_Id_ > 0) {
						for (var i = 0; i < this.Task_Item_Data_search.length; i++) {
							if (
								this.Task_Item_Data_search[i].Task_Item_Id == this.Task_Item_Id_
							)
								this.Task_Item_ = this.Task_Item_Data_search[i];
						}
					} else this.Task_Item_ = this.Task_Item_Data_search[1];

					// this.Search_Task_Data()
				}
			},
			(Rows) => {
				this.issLoading = false;
			}
		);
	}

	clearIntakeDropdown() {
		this.Intake_Mode_ = null; // Clear the selected value
		this.Intake_Mode_Data_Filter = []; // Clear the options list
		// this.Intake_Mode_Data =[];
	}

	Search_University_Typeahead(event: any) {
		var Value = "";
		if (event.target.value == "") Value = "";
		else Value = event.target.value.toLowerCase();
		this.clearIntakeDropdown();
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
	display_University_1(University_e: University) {
		if (University_e) {
			return University_e.University_Name;
		}
	}

	// Search_Intake_Typeahead(event: any) {
	// 	var Value = "";
	// 	if (event.target.value == "") Value = "";
	// 	else Value = event.target.value.toLowerCase();

	// 	if (this.Intake_Data == undefined || this.Intake_Data.length == 0) {
	// 		this.issLoading = true;
	// 		this.Intake_Service_.Search_Intake_Typeahead(Value).subscribe(
	// 			(Rows) => {
	// 				if (Rows != null) {
	// 					this.Intake_Data = Rows[0];
	// 					this.Intake_Data_Filter_2 = [];
	// 					for (var i = 0; i < this.Intake_Data.length; i++) {
	// 						if (
	// 							this.Intake_Data[i].Intake_Name.toLowerCase().includes(
	// 								Value
	// 							)
	// 						)
	// 							this.Intake_Data_Filter_2.push(this.Intake_Data[i]);
	// 					}
	// 				}
	// 				this.issLoading = false;
	// 			},
	// 			(Rows) => {
	// 				this.issLoading = false;
	// 			}
	// 		);
	// 	} else {
	// 		this.Intake_Data_Filter_2 = [];
	// 		for (var i = 0; i < this.Intake_Data.length; i++) {
	// 			if (
	// 				this.Intake_Data[i].Intake_Name.toLowerCase().includes(Value)
	// 			)
	// 				this.Intake_Data_Filter_2.push(this.Intake_Data[i]);
	// 		}
	// 	}
	// }
	// display_Intake_1(Intake_e: Intake) {
	// 	if (Intake_e) {
	// 		return Intake_e.Intake_Name;
	// 	}
	// }


	
	Search_Courses_Typeahead(event: any) {
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
	display_Course_1_temp(Course_e: Course) {
		if (Course_e) {
			return Course_e.Course_Name;
		}
	}



	Search_Courses_Typeahead_tempp(event: any) {
		
		var Value = "";

		if (this.University_1 == undefined || this.University_1 == null || this.University_1.University_Id == undefined ||
			this.University_1.University_Id == 0) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Select University", Type: "3" },
			});
			return;
		}
		
		if (event.target.value == "") Value = "";
		else Value = event.target.value.toLowerCase();
		
		if (this.Course_Data == undefined || this.Course_Data.length == 0) {
			console.log('this.Course_Data: ', this.Course_Data);
			this.issLoading = true;
			
			this.Course_Service_.Search_Courses_Typeahead_tempp(Value,this.University_1.University_Id).subscribe(
				(Rows) => {
					
					console.log(this.Course_,"this.course");
					
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

	Search_Courses_Fees_Typeahead(event: any) {
		var Value = "";
		if (event.target.value == "") Value = "";
		else Value = event.target.value.toLowerCase();

		// if (this.Fees_Course_Data == undefined || this.Fees_Course_Data.length == 0) {
		this.issLoading = true;

		this.Course_Service_.Search_Courses_Fees_Typeahead(
			Value,
			this.Student_Id
		).subscribe(
			(Rows) => {
				if (Rows != null) {
					this.Fees_Course_Data = Rows[0];
					this.Course_Fees_Data_Filter = [];
					for (var i = 0; i < this.Fees_Course_Data.length; i++) {
						if (
							this.Fees_Course_Data[i].Course_Name.toLowerCase().includes(Value)
						)
							this.Course_Fees_Data_Filter.push(this.Fees_Course_Data[i]);
					}
				}
				this.issLoading = false;
			},
			(Rows) => {
				this.issLoading = false;
			}
		);
		// }

		// else {
		//
		//  this.Course_Fees_Data_Filter = [];
		//  for (var i = 0; i < this.Fees_Course_Data.length; i++) {
		//      if (this.Fees_Course_Data[i].Course_Name.toLowerCase().includes(Value))
		//          this.Course_Fees_Data_Filter.push(this.Fees_Course_Data[i]);
		//  }
		// }
	}
	display_Course_Fees(Course_F: Applicationdetails) {
		if (Course_F) {
			return Course_F.Course_Name;
		}
	}

	Search_Subject_Typeahead() {}

	Subject_Typeahead(event: any) {
		var Value = "";
		if (event.target.value == "") Value = undefined;
		else Value = event.target.value;
		this.issLoading = true;

		this.Subject_Service_.Subject_Typeahead(Value).subscribe(
			(Rows) => {
				if (Rows != null) {
					this.Subject_Data = Rows[0];
				}
				this.issLoading = false;
			},
			(Rows) => {
				this.issLoading = false;
			}
		);
	}
	display_Subject(Subject_e: Subject) {
		if (Subject_e) {
			return Subject_e.Subject_Name;
		}
	}

	Delete_Student(Student_Id, index) {
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
				this.Student_Service_.Delete_Student(Student_Id,Number(this.Login_User)).subscribe(
					(Delete_status) => {
						
						if (Delete_status[0][0].Student_Id_ > 0) {
							this.Total_Rows = this.Total_Rows - this.Student_Data.length;
							this.Student_Data.splice(this.EditIndex, 1);

							const dialogRef = this.dialogBox.open(DialogBox_Component, {
								panelClass: "Dialogbox-Class",
								data: { Message: "Deleted", Type: "false" },
							});
							this.Clr_Student();
							this.Search_Student();
							this.Close_Click();
						} else {
							this.issLoading = false;
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

	// Delete_Student_Document(index, Student_Document_Id) {
	// 	const dialogRef = this.dialogBox.open(DialogBox_Component, {
	// 		panelClass: "Dialogbox-Class",
	// 		data: {
	// 			Message: "Do you want to delete ?",
	// 			Type: true,
	// 			Heading: "Confirm",
	// 		},
	// 	});
	// 	dialogRef.afterClosed().subscribe((result) => {
	// 		if (result == "Yes") {
	// 			this.issLoading = true;

	// 			if (Student_Document_Id > 0) {
	// 				this.Student_Service_.Delete_Student_Document(
	// 					Student_Document_Id
	// 				).subscribe(
	// 					(Delete_status) => {
	// 						if (Delete_status[0][0].Student_Document_Id_ > 0) {
	// 							this.Document_Array.splice(index, 1);
	// 							this.Document_File_Array.splice(index, 1);
	// 							const dialogRef = this.dialogBox.open(DialogBox_Component, {
	// 								panelClass: "Dialogbox-Class",
	// 								data: { Message: "Deleted", Type: "false" },
	// 							});
	// 						} else {
	// 							this.issLoading = false;
	// 							const dialogRef = this.dialogBox.open(DialogBox_Component, {
	// 								panelClass: "Dialogbox-Class",
	// 								data: { Message: "Error Occured", Type: "2" },
	// 							});
	// 						}
	// 						this.issLoading = false;
	// 					},
	// 					(Rows) => {
	// 						this.issLoading = false;
	// 						const dialogRef = this.dialogBox.open(DialogBox_Component, {
	// 							panelClass: "Dialogbox-Class",
	// 							data: { Message: "Error Occured", Type: "2" },
	// 						});
	// 					}
	// 				);
	// 			} else {
	// 				this.Document_Array.splice(index, 1);
	// 				this.Document_File_Array.splice(index, 1);
	// 				this.issLoading = false;
	// 				const dialogRef = this.dialogBox.open(DialogBox_Component, {
	// 					panelClass: "Dialogbox-Class",
	// 					data: { Message: "Deleted", Type: "false" },
	// 				});
	// 			}
	// 		}
	// 	});
	// }

	Delete_Application_Document(index, Application_Document_Id) {
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

				if (Application_Document_Id > 0) {
					this.Student_Service_.Delete_Application_Document(
						Application_Document_Id
					).subscribe(
						(Delete_status) => {
							if (Number(Delete_status[0][0].Application_Document_Id_) > 0) {
								this.ApplicationDocument_Array.splice(index, 1);
								this.ApplicationDocument_File_Array.splice(index, 1);
								const dialogRef = this.dialogBox.open(DialogBox_Component, {
									panelClass: "Dialogbox-Class",
									data: { Message: "Deleted", Type: "false" },
								});
							} else {
								this.issLoading = false;
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
				} else {
					this.ApplicationDocument_Array.splice(index, 1);
					this.ApplicationDocument_File_Array.splice(index, 1);
					this.issLoading = false;
					const dialogRef = this.dialogBox.open(DialogBox_Component, {
						panelClass: "Dialogbox-Class",
						data: { Message: "Deleted", Type: "false" },
					});
				}
			}
		});
	}

	Delete_FeesRecepit_Document(index, Feesreceipt_document_Id) {
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

				if (Feesreceipt_document_Id > 0) {
					this.Student_Service_.Delete_FeesRecepit_Document(
						Feesreceipt_document_Id
					).subscribe(
						(Delete_status) => {
							if (Number(Delete_status[0][0].Feesreceipt_document_Id_) > 0) {
								this.FeesreceiptDocument_Array.splice(index, 1);
								this.FeesreceiptDocument_File_Array.splice(index, 1);
								const dialogRef = this.dialogBox.open(DialogBox_Component, {
									panelClass: "Dialogbox-Class",
									data: { Message: "Deleted", Type: "false" },
								});
							} else {
								this.issLoading = false;
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
				} else {
					this.FeesreceiptDocument_Array.splice(index, 1);
					this.FeesreceiptDocument_File_Array.splice(index, 1);
					this.issLoading = false;
					const dialogRef = this.dialogBox.open(DialogBox_Component, {
						panelClass: "Dialogbox-Class",
						data: { Message: "Deleted", Type: "false" },
					});
				}
			}
		});
	}
	Delete_File1(index) {}
	Get_Fees_Receipt(Fees_Receipt_Id) {
		this.issLoading = true;
		this.Student_Service_.Get_Fees_Receipt(Fees_Receipt_Id).subscribe(
			(Rows) => {},

			(Rows) => {
				this.issLoading = false;
				const dialogRef = this.dialogBox.open(DialogBox_Component, {
					panelClass: "Dialogbox-Class",
					data: { Message: "Error Occured", Type: "2" },
				});
			}
		);
	}

	Edit_Fees_Receipt(Fees_Receipt_e: Fees_Receipt, index) {
		// this.Entry_View=true;
		// this.Fees_Receipt_=Fees_Receipt_e;
		this.Create_Fees();
		this.Fees_Receipt_ = Fees_Receipt_e;
		this.Fees_Receipt_ = Object.assign({}, Fees_Receipt_e);
		// if (this.Fees_Receipt_.Entry_date == null) {
		// 	this.Fees_Receipt_.Entry_date = new Date();
		// 	this.Fees_Receipt_.Entry_date = this.New_Date(
		// 		this.Fees_Receipt_.Entry_date
		// 	);
		// } else
		// 	this.Fees_Receipt_.Entry_date = this.New_Date(
		// 		new Date(moment(this.Fees_Receipt_.Entry_date).format("YYYY-MM-DD"))
		// 	);
		this.feesreceiptdocument_.FeesreceiptDocument_Description =
			this.FeesreceiptDocument_Description;

		this.Get_Feesrecepit_DocumentList(this.Fees_Receipt_.Fees_Receipt_Id);

		// this.Get_Fees_Receipt(this.Receipt_data_.Fees_Receipt_Id);
		for (var i = 0; i < this.Fees_Array.length; i++) {
			if (this.Fees_Receipt_.Fees_Id == this.Fees_Array[i].Fees_Id)
				this.Fees_Data_ = this.Fees_Array[i];
		}

		for (var i = 0; i < this.To_Account_Data.length; i++) {
			if (
				this.Fees_Receipt_.To_Account_Id ==
				this.To_Account_Data[i].Client_Accounts_Id
			)
				this.To_Account_ = this.To_Account_Data[i];
		}

		for (var i = 0; i < this.Currency_Data.length; i++) {
			if (
				this.Fees_Receipt_.Currency_Id ==
				this.Currency_Data[i].Currency_Id
			)
				this.Currency_ = this.Currency_Data[i];
		}

		// this.Fees_Course_Temp.Course_Id = this.ApplicationDetails_.Course_Id;
		this.Fees_Course_Temp.Course_Name = this.Fees_Receipt_.Course_Name;
		this.Fees_Course_Temp.Application_details_Id =
			this.Fees_Receipt_.Application_details_Id;
		this.Fees_Course_ = Object.assign({}, this.Fees_Course_Temp);
	}

	Delete_Receipt(Fees_Receipt_Id, Application_details_Id, index) {
		const dialogRef = this.dialogBox.open(DialogBox_Component, {
			panelClass: "Dialogbox-Class",
			data: {
				Message: "Do you want to delete ?",
				Type: true,
				Heading: "Confirm",
			},
		});
		// this.Search_Receipt();
		dialogRef.afterClosed().subscribe((result) => {
			if (result == "Yes") {
				this.issLoading = true;
				this.Student_Service_.Delete_Receipt(
					Fees_Receipt_Id,
					Application_details_Id
				).subscribe(
					(Delete_status) => {
						// log(Delete_status)
						if (Delete_status[0][0].Fees_Receipt_Id_ > 0) {
							this.Profile_.Fees_Status=Delete_status[0][0].fees_Status
							// this.Fees_Receipt_Data.splice(index, 1);
							const dialogRef = this.dialogBox.open(DialogBox_Component, {
								panelClass: "Dialogbox-Class",
								data: { Message: "Deleted", Type: "false" },
							});
							this.Search_Receipt();
						} else {
							this.issLoading = false;
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
	Level_Change() {
		this.University_ = null;
		this.University_Data_Filter = [];
		this.University_Data = [];
	}
	Country_Change() {
		this.University_ = null;
		this.University_Data_Filter = [];
		this.University_Data = [];
	}
	Branch_Change(Branch_T: Branch) {
		this.FollowUp_Department_Temp.Department_Id =
			Branch_T.Default_Department_Id;
		this.FollowUp_Department_Temp.Department_Name =
			Branch_T.Default_Department_Name;
		this.FollowUp_Department_ = Object.assign(
			{},
			this.FollowUp_Department_Temp
		);


if(Branch_T.Default_User_Id !=0 || Branch_T.Default_User_Name !="")
{

	this.Followup_Users_temp.User_Details_Id = Branch_T.Default_User_Id;
		this.Followup_Users_temp.User_Details_Name = Branch_T.Default_User_Name;
		this.Followup_Users_ = Object.assign({}, this.Followup_Users_temp);

}
else
{
	this.Followup_Users_ =null
	this.Followup_Users_Task_ =null
	this.FollowUp_Department_Task_ =null
}



		this.Followup_Status_Temp.Department_Status_Id = Branch_T.Default_Status_Id;
		this.Followup_Status_Temp.Department_Status_Name =
			Branch_T.Default_Status_Name;
		this.FollowUp_Status_ = Object.assign({}, this.Followup_Status_Temp);

		this.Followup_sub_b = Branch_T.Is_FollowUp;

		// this.Duration=Branch_T.Duration;

		// this.Followup_Sub_Status_Temp.Sub_Status_Id = Branch_T.Default_Status_Id;
		// this.Followup_Sub_Status_Temp.Sub_Status_Name = Branch_T.Default_Status_Name;
		// this.FollowUp_Sub_Status_ = Object.assign({}, this.Followup_Sub_Status_Temp);

		//return
		// this.FollowUp_Department_ = null;
		// this.Followup_Users_ = null;
		// this.FollowUp_Status_ = null;
		// this.Followup_Department_Data = [];
		// this.Followup_Department_Data_Check = [];
		// this.Followup_Users_Data = [];
		// this.Followup_Status_Data = [];
		//this.DefaultDept_Data = [];
	}
	Focus_It() {
		setTimeout("$('[name=Followup_Status]').focus();", 0);
	}
	Department_Change() {
		//  document.getElementById("Followup_Status").focus();
		// $("[name=Followup_Status]").focus();
		// this.Focus_It();
		this.Followup_Users_ = null;
		this.Followup_Users_Task_ = null;
		this.FollowUp_Status_ = null;
		this.Followup_Users_Data = [];
		this.Followup_Users_Data_t = []
		this.Followup_Status_Data = [];
		this.Followup_Department_Data = [];
		// if (this.FollowUp_Department_.Department_FollowUp == true)
		// 	this.Is_Follow_ = 1;
		// else this.Is_Follow_ = 0;
		this.FollowUp_.Next_FollowUp_Date = new Date();
		this.FollowUp_.Next_FollowUp_Date = this.New_Date(
			this.FollowUp_.Next_FollowUp_Date
		);
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



	Search_Document_Typeahead(event: any,source:number) {
		// if (this.Followup_Branch_Data == undefined)
		// this.Followup_Branch_Data = [];
		// if (this.Followup_Branch_Data.length == 0) {
			var Value = "";
			if (event.target.value == "") Value = "";
			else Value = event.target.value.toLowerCase();

		if (
			this.Documents_Data1 == undefined ||
			this.Documents_Data1.length == 0
		) {
			this.issLoading = true;
			this.Student_Service_.Search_Document_Typeahead("").subscribe(
				(Rows) => {
					
					if (Rows != null) {
						this.Documents_Data1 = Rows[0];
						this.Documents_Data_Filter = []
						if(source==1){
							for (var i = 0; i < this.Documents_Data1.length; i++) {
								if (
									this.Documents_Data1[i].Document_Name.toLowerCase().includes(
										Value
									)
								)
									this.Documents_Data_Filter.push(
										this.Documents_Data1[i]
									);
							}
						}else{
							this.Documents_Data_Filter = Rows[0];
						}
						
						this.issLoading = false;
					}
				},
				(Rows) => {
					this.issLoading = false;
				}
			);
		}else {
			if(source==1){
				this.Documents_Data_Filter = [];
				for (var i = 0; i < this.Documents_Data1.length; i++) {
					if (
						this.Documents_Data1[i].Document_Name.toLowerCase().includes(Value)
					)
						this.Documents_Data_Filter.push(this.Documents_Data1[i]);
				}
			}else{
				this.Documents_Data_Filter = [];
				for (var i = 0; i < this.Documents_Data1.length; i++) {					
						this.Documents_Data_Filter.push(this.Documents_Data1[i]);
				}
			}
			
		}
		// }
	}
	display_Document(Document_: Document) {
		if (Document_) {
			return Document_.Document_Name;
		}
	}





	Search_Branch_Department_Typeahead(event: any,source:number) {
		
		var Value = "";
		if (event.target.value == "") Value = "";
		else Value = event.target.value.toLowerCase();

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
				// if (
				// 	this.Followup_Department_Data_Check == undefined ||
				// 	this.Followup_Department_Data_Check.length == 0
				// ) {
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




	display_Department(Department_: Department) {
		if (Department_) {
			return Department_.Department_Name;
		}
	}
	display_DepartmentT(Department_t: Student_FollowUp) {
		if (Department_t) {
			return Department_t.Dept_Name;
		}
	}

	// Search_BranchDefaultDepartment_Typeahead(event: any) {
	//
	// 	var Value = "";
	// 	if (event.target.value == "") Value = undefined;
	// 	else Value = event.target.value;

	// 		if (
	// 			this.DefaultUsers_Data == undefined ||
	// 			this.DefaultUsers_Data.length == 0
	// 		) {
	// 			this.issLoading = true;
	//
	// 			this.Department_Service_.Search_BranchDefaultDepartment_Typeahead(this.Branch_Id).subscribe(
	// 				(Rows) => {
	// 					if (Rows != null) {
	//
	// 						this.DefaultUsers_Data = Rows[0];
	// 						this.issLoading = false;
	// 					}
	// 				},
	// 				(Rows) => {
	// 					this.issLoading = false;
	// 				}
	// 			);
	// 		}

	// }

	// display_Defultusers(defaultuser: User_Details) {
	//
	// 	if (defaultuser) {
	//
	// 		return defaultuser.User_Details_Name;
	// 	}
	// }

	Search_BranchDefaultDepartment_Typeahead(event: any) {
		var Value = "";
		if (event.target.value == "") Value = undefined;
		else Value = event.target.value;

		if (
			this.DefaultDept_Data == undefined ||
			this.DefaultDept_Data.length == 0
		) {
			this.issLoading = true;

			this.Department_Service_.Search_BranchDefaultDepartment_Typeahead(
				this.FollowUp_Branch_.Branch_Id
			).subscribe(
				(Rows) => {
					if (Rows != null) {
						this.DefaultDept_Data = Rows[0];
						this.Default_dep_id =
							this.DefaultDept_Data[0].Default_Department_Id;
						this.issLoading = false;
					}
				},
				(Rows) => {
					this.issLoading = false;
				}
			);
		}
	}

	display_Defultdept(defaultdept: Branch) {
		if (defaultdept) {
			return defaultdept.Default_Department_Name;
		}
	}

	Search_DefaultDepartmentStatus_Typeahead(event: any) {
		var Value = "";
		if (event.target.value == "") Value = undefined;
		else Value = event.target.value;

		if (
			this.DefaultStatus_Data == undefined ||
			this.DefaultStatus_Data.length == 0
		) {
			this.issLoading = true;

			this.Department_Service_.Search_DefaultDepartmentStatus_Typeahead(
				this.FollowUp_Branch_.Branch_Id,
				this.Default_dep_id
			).subscribe(
				(Rows) => {
					if (Rows != null) {
						this.DefaultStatus_Data = Rows[0];
						this.issLoading = false;
					}
				},
				(Rows) => {
					this.issLoading = false;
				}
			);
		}
	}

	display_Defultstatus(defaultstatus: Branch) {
		if (defaultstatus) {
			return defaultstatus.Default_Status_Name;
		}
	}

	Search_DefaultDepartment_User_Typeahead(event: any) {
		var Value = "";
		if (event.target.value == "") Value = undefined;
		else Value = event.target.value;

		if (
			this.DefaultUsers_Data == undefined ||
			this.DefaultUsers_Data.length == 0
		) {
			this.issLoading = true;

			this.Department_Service_.Search_DefaultDepartment_User_Typeahead(
				this.Default_dep_id
			).subscribe(
				(Rows) => {
					if (Rows != null) {
						this.DefaultUsers_Data = Rows[0];
						this.issLoading = false;
					}
				},
				(Rows) => {
					this.issLoading = false;
				}
			);
		}
	}

	defaultusers(defaultusers: Branch) {
		if (defaultusers) {
			return defaultusers.Default_User_Name;
		}
	}


	Search_Department_Status_Typeahead(event: any,source:number) {




		var Value = "";
		if (event.target.value == "") Value = "";
		else Value = event.target.value.toLowerCase();

		if (
			this.FollowUp_Department_ == null ||
			this.FollowUp_Department_.Department_Id == undefined
		) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Select Department", Type: "3" },
			});
		} 
		
		else {
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
						this.Followup_Status_Data_filter = []
						this.issLoading = false;
						if (source==1){
							for (var i = 0; i < this.Followup_Status_Data.length; i++) {
								if (
									this.Followup_Status_Data[i].Department_Status_Name.toLowerCase().includes(
										Value
									)
								)
									this.Followup_Status_Data_filter.push(
										this.Followup_Status_Data[i]
									);
							}
						}else{
							this.Followup_Status_Data_filter = Rows[0];
						}
					
						
					}
				},
				(Rows) => {
					this.issLoading = false;
				}
			);
		}
		else {
			if(source==1){
				this.Followup_Status_Data_filter = [];
				for (var i = 0; i < this.Followup_Status_Data.length; i++) {
					if (
						this.Followup_Status_Data[i].Department_Status_Name.toLowerCase().includes(Value)
					)
						this.Followup_Status_Data_filter.push(this.Followup_Status_Data[i]);
				}
			}else{
				this.Followup_Status_Data_filter = [];
				for (var i = 0; i < this.Followup_Status_Data.length; i++) {
						this.Followup_Status_Data_filter.push(this.Followup_Status_Data[i]);
				}
			}
			
		}
		}
	}
	Search_Department_Transfer_Status_Typeahead(event: any) {
		var Value = "";
		this.Followup_Substatus_Data_Filter1 = [];
		this.Followup_Substatus_Data1 = [];
		this.Transfer_Status_k = null;

		if (event.target.value == "") Value = undefined;
		else Value = event.target.value;

		if (
			this.Transfer_department_Id == null ||
			this.Transfer_department_Id == undefined
		) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Select Department", Type: "3" },
			});
		} else {
			if (
				this.Followup_Transfer_Status_Data == undefined ||
				this.Followup_Transfer_Status_Data.length == 0
			) {
				this.issLoading = true;

				this.Student_Service_.Search_Department_Transfer_Status_Typeahead(
					this.Transfer_department_Id,
					""
				).subscribe(
					(Rows) => {
						if (Rows != null) {
							this.Followup_Transfer_Status_Data = Rows[0];
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

	display_Followup_Status(Status_t: Department_Status) {
		if (Status_t) {
			return Status_t.Department_Status_Name;
		}
	}
	display_Followup_Status_transfer(Status_: Department_Status) {
		if (Status_) {
			return Status_.Department_Status_Name;
		}
	}
	// Search_Substatus_Typeahead(event: any) {
	// 	// var Value = "";
	// 	// if (event.target.value == "") Value = undefined;
	// 	// else Value = event.target.value;
	// 	//
	// 	// if (
	// 	// 	this.FollowUp_Sub_Status_ == null ||
	// 	// 	this.FollowUp_Sub_Status_.Sub_Status_Id == undefined
	// 	// ) {
	// 	// 	const dialogRef = this.dialogBox.open(DialogBox_Component, {
	// 	// 		panelClass: "Dialogbox-Class",
	// 	// 		data: { Message: "Select Sub Status", Type: "3" },
	// 	// 	});
	// //	} else {
	// 		if (
	// 			this.Followup_Substatus_Data == undefined ||
	// 			this.Followup_Substatus_Data.length == 0
	// 		) {
	// 			this.issLoading = true;
	//
	// 			this.Student_Service_.Search_Substatus_Typeahead(
	// 				this.FollowUp_Department_.Department_Status_Id,
	// 				""
	// 			).subscribe(
	// 				(Rows) => {
	// 					if (Rows != null) {
	//
	// 						this.Followup_Substatus_Data = Rows[0];
	// 						this.issLoading = false;
	// 					}
	// 				},
	// 				(Rows) => {
	// 					this.issLoading = false;
	// 				}
	// 			);
	// 		}
	// 	//}
	// }

	// Search_Substatus_Typeahead(event: any) {

	// 	var Value = "";

	//  if (this.FollowUp_Status_.Department_Status_Id == undefined ||this.FollowUp_Status_.Department_Status_Id == 0) {
	//

	// 		const dialogRef = this.dialogBox.open(DialogBox_Component, {
	// 	panelClass: "Dialogbox-Class",
	// 	data: { Message: "Select Status ", Type: "3" },
	// 	});
	// 	return;
	// 	} else if (
	// 	this.Followup_Substatus_Data == undefined ||
	// 	this.Followup_Substatus_Data.length == 0
	// 	) {
	// 	this.issLoading = true;

	//  this.sub_typeahead=this.FollowUp_Status_.Department_Status_Id;

	// 	this.Student_Service_.Search_Substatus_Typeahead(

	// 	this.sub_typeahead,""
	// 	).subscribe(

	// 	(Rows) => {

	// 	if (Rows != null) {

	// 	this.Followup_Substatus_Data = Rows[0];

	// 	this.Followup_Substatus_Data_Filter = [];
	// 	this.issLoading = false;
	// 	for (var i = 0; i < this.Followup_Substatus_Data.length; i++) {
	// 	if (
	// 	this.Followup_Substatus_Data[
	// 	i
	// 	].Sub_Status_Name.toLowerCase().includes(Value)
	// 	)
	// 	this.Followup_Substatus_Data_Filter.push(
	// 	this.Followup_Substatus_Data[i]
	// 	);
	// 	}
	// 	}
	// 	},
	// 	(Rows) => {
	// 	this.issLoading = false;
	// 	}
	// 	);
	// 	} else {
	// 	this.Followup_Substatus_Data_Filter = [];
	// 	for (var i = 0; i < this.Followup_Substatus_Data.length; i++) {
	// 	if (
	// 	this.Followup_Substatus_Data[i].Sub_Status_Name.toLowerCase().includes(
	// 	Value
	// 	)
	// 	)
	// 	this.Followup_Substatus_Data_Filter.push(this.Followup_Substatus_Data[i]);
	// 	}
	// 	}
	// 	}

	Search_Substatus_Typeahead_Transfer(event: any) {
		var Value = "";
		// if (event.target.value == "") Value = "";
		// else Value = event.target.value.toLowerCase();
		if (
			this.Transfer_Status_.Department_Status_Id == undefined ||
			this.Transfer_Status_.Department_Status_Id == 0
		) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Select Status ", Type: "3" },
			});
			return;
		} else if (
			this.Followup_Substatus_Data1 == undefined ||
			this.Followup_Substatus_Data1.length == 0
		) {
			this.issLoading = true;

			this.sub_typeahead = this.Transfer_Status_.Department_Status_Id;

			this.Student_Service_.Search_Substatus_Typeahead(
				this.sub_typeahead,
				""
			).subscribe(
				(Rows) => {
					if (Rows != null) {
						this.Followup_Substatus_Data1 = Rows[0];

						this.Followup_Substatus_Data_Filter1 = [];
						this.issLoading = false;
						for (var i = 0; i < this.Followup_Substatus_Data1.length; i++) {
							if (
								this.Followup_Substatus_Data1[
									i
								].Sub_Status_Name.toLowerCase().includes(Value)
							)
								this.Followup_Substatus_Data_Filter1.push(
									this.Followup_Substatus_Data1[i]
								);
						}
					}
				},
				(Rows) => {
					this.issLoading = false;
				}
			);
		} else {
			this.Followup_Substatus_Data_Filter1 = [];
			for (var i = 0; i < this.Followup_Substatus_Data1.length; i++) {
				if (
					this.Followup_Substatus_Data1[
						i
					].Sub_Status_Name.toLowerCase().includes(Value)
				)
					this.Followup_Substatus_Data_Filter1.push(
						this.Followup_Substatus_Data1[i]
					);
			}
		}
	}

	datepickershow(Status) {
		this.Followup_sub = Status.FollowUp;
		this.Duration = Status.Duration;
	}

	display_Sub_Status(Sub_Status_tr: Sub_Status) {
		if (Sub_Status_tr) {
			return Sub_Status_tr.Sub_Status_Name;
		}
	}

	display_Sub_Status_transfer(Sub_Status_t_: Sub_Status) {
		if (Sub_Status_t_) {
			return Sub_Status_t_.Sub_Status_Name;
		}
	}

	Status_Change() {
		this.FollowUp_Sub_Status_ = null;
		this.FollowUp_Sub_Status_Transfer_ = null;
		this.Followup_Substatus_Data_Filter = [];
		this.Followup_Substatus_Data_Filter_Transfer = [];
		this.Followup_Substatus_Data = [];

		// if (this.FollowUp_Status_.FollowUp == "1")
		// 	this.Is_Follow_Status_ = 1;
		// else this.Is_Follow_Status_ = 0;

		if (this.FollowUp_Status_.FollowUp == true)
			this.Is_Follow_ = 1;
		else this.Is_Follow_ = 0;

		// this.FollowUp_Status_.Department_Status_Id=0;
		//  this.Search_Substatus_Typeahead(this.FollowUp_Status_.Department_Status_Id);
	}
	Status_Change1() {
		// this.Transfer_Status_=null;
		this.FollowUp_Sub_Status_Transfer_ = null;
		this.Followup_Substatus_Data_Filter1 = [];
		this.Followup_Substatus_Data_Filter_Transfer1 = [];
		this.Followup_Substatus_Data1 = [];
		// this.FollowUp_Status_.Department_Status_Id=0;
		this.Search_Substatus_Typeahead_Transfer(
			this.Transfer_Status_.Department_Status_Id
		);
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

				this.Student_Service_.Search_Department_User_Typeahead_New(
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
	// display_Followup_Users(Users_: User_Details) {
	// 	if (Users_) {
	// 		return Users_.User_Details_Name;
	// 	}
	// }
	display_Followup_UsersT(Users_T: Student_FollowUp) {
		if (Users_T) {
			return Users_T.UserName;
		}
	}

	// Search_Department_User_Typeahead_Task(event: any) {
	//
	// 	var Value = "";
	// 	if (event.target.value == "") Value = undefined;
	// 	else Value = event.target.value;
	//
	// 	if (
	// 		this.FollowUp_Department_T == null ||
	// 		this.FollowUp_Department_T.Department_Id == undefined
	// 	) {
	// 		const dialogRef = this.dialogBox.open(DialogBox_Component, {
	// 			panelClass: "Dialogbox-Class",
	// 			data: { Message: "Select Department", Type: "3" },
	// 		});
	// 	} else {
	// 		if (
	// 			this.Followup_Users_Data_t == undefined ||
	// 			this.Followup_Users_Data_t.length == 0
	// 		) {
	// 			this.Search_Department_User_Typeahead_Task_service(this.FollowUp_Department_T.Department_Id)
	// 		}
	// 	}
	// }

	Search_Department_User_Typeahead_Tasknew(event: any) {
		var Value = "";
		if (event.target.value == "") Value = undefined;
		else Value = event.target.value;

		if (
			this.FollowUp_Department_TN == null ||
			this.FollowUp_Department_TN.Department == undefined
		) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Select Department", Type: "3" },
			});
		} else {
			if (
				this.Followup_Users_Data_tN == undefined ||
				this.Followup_Users_Data_tN.length == 0
			) {
				// this.Search_Department_User_Typeahead_Task_service(this.FollowUp_Department_T.Department_Id)

				this.issLoading = true;

				this.Student_Service_.Search_Department_User_Typeahead_Tasknew(
					this.FollowUp_Department_TN.Department,
					this.Profile_.Student_Id
				).subscribe(
					(Rows) => {
						if (Rows != null) {
							this.Followup_Users_Data_tN = Rows[0];
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




	Search_User_Typeahead(event: any) 
{
//   if(this.To_Staff_Change_Permissions.View != true)
//     {
//       return;
//     }
//     else
      {
        var Value = "";
        if (event.target.value == "") Value = "";
        else Value = event.target.value;
        if (
            this.Followup_Users_Data == undefined ||
            this.Followup_Users_Data.length == 0
            ) 
              {
                this.issLoading = true;
				
                this.Student_Service_.Search_Faculty_Typeahead("",0).subscribe(
                (Rows) => 
                  {
                    if (Rows != null) 
                      {
                        this.Followup_Users_Data = Rows[0];
                        this.issLoading = false;
      
                        this.Followup_Users_Data_Filter = [];
      
                        for (var i = 0; i < this.Followup_Users_Data.length; i++) 
                          {
                            if (this.Followup_Users_Data[i].User_Details_Name.toLowerCase().includes(Value))
                            this.Followup_Users_Data_Filter.push(this.Followup_Users_Data[i]);
                          }
                      }
                  },
                (Rows) => 
                  {
                    this.issLoading = false;
                  });
            } 
            else 
            {
              this.Followup_Users_Data_Filter = [];
              for (var i = 0; i < this.Followup_Users_Data.length; i++) 
                {
                  if (this.Followup_Users_Data[i].User_Details_Name.toLowerCase().includes(Value))
                    this.Followup_Users_Data_Filter.push(this.Followup_Users_Data[i]);
              }
            }

      }

}

display_Followup_Users(Users_: User_Details) {
if (Users_) {
return Users_.User_Details_Name;
}
}
	Search_Department_User_Typeahead_Fllowup(event: any,source:number) {
		var Value = "";
		if (event.target.value == "") Value = "";
		else Value = event.target.value.toLowerCase();

		if (
			this.FollowUp_Branch_ == null ||
			this.FollowUp_Branch_.Branch_Id == undefined
		) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Select Branch", Type: "3" },
			});
		} else if (
			this.FollowUp_Department_ == null ||
			this.FollowUp_Department_.Department_Id == undefined
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
					this.FollowUp_Branch_.Branch_Id,this.FollowUp_Department_.Department_Id,""
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

	


	Search_Department_User_Typeahead_Task_service(Department_Id) {
		this.issLoading = true;

		this.Student_Service_.Search_Department_User_Typeahead_Task(
			Department_Id
		).subscribe(
			(Rows) => {
				if (Rows != null) {
					this.Followup_Users_Data_t = Rows[0];
					this.issLoading = false;
				}
			},
			(Rows) => {
				this.issLoading = false;
				// const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
			}
		);
	}

	Check_Duplicate_Student() {
		// var phone=this.Student_.Phone_Number;
		// this.Student_.Phone_Number   = phone.toString().trim();

		this.Student_Service_.Check_Duplicate_Student(
			this.Student_.Phone_Number,
			this.Branch_Id
		).subscribe(
			(Rows) => {
				//log(Save_status)
				var status = Rows.returnvalue.Leads;
				if (Number(status[0].Student_Id_) > 0) {
					this.Save_Call_Status = false;
					var Show_FollowUp_Date;
					if (status[0].Department_Status == 0) {
						Show_FollowUp_Date = "";
					} else {
						Show_FollowUp_Date =
							",FollowUp Date is :" + status[0].Duplicate_FollowUp_Date;
					}
					const dialogRef = this.dialogBox.open(DialogBox_Component, {
						panelClass: "Dialogbox-Class",
						data: {
							Message:
								"The Phone Number Already Exist for " +
								status[0].Duplicate_Student_Name +
								" and is handled by " +
								status[0].Duplicate_User_Name +
								Show_FollowUp_Date +
								" ,Department is: " +
								status[0].Duplicate_Department_Name +
								" and Remark is: " +
								status[0].Duplicate_Remark_Name +
								",Do you want to add FollowUp?",
							Type: true,
							Heading: "Duplicate Entry",
						},
					});
					dialogRef.afterClosed().subscribe((result) => {
						if (result == "Yes") {
							this.Save_Call_Status = false;
							this.New_Followup(
								status[0].Student_Id_,
								status[0].Duplicate_Student_Name,
								status[0].Duplicate_Registration,
								status[0].Duplicate_Welcome_Status,
								0,
								0,0
							);
						}
					});
				} else {
					// const dialogRef = this.dialogBox.open(DialogBox_Component, {
					// 	panelClass: "Dialogbox-Class",
					// 	data: { Message: "No Details Found", Type: "3" },
					// });
					this.Save_Call_Status = false;
				}
				this.issLoading = false;
			},
			(Rows) => {
				this.issLoading = false;
				const dialogRef = this.dialogBox.open(DialogBox_Component, {
					panelClass: "Dialogbox-Class",
					data: { Message: "Error Occured", Type: "2" },
				});
				this.Save_Call_Status = false;
			}
		);
	}

	// Load_Intake() {
	// 	this.issLoading = true;
	// 	this.Intake_Service_.Load_Intake().subscribe(
	// 		(Rows) => {
	// 			if (Rows != null) {
	// 				this.Intake_Mode_Data = Rows[0];
	// 				this.Intake_Mode_Temp.Intake_Id = 0;
	// 				this.Intake_Mode_Temp.Intake_Name = "Select";
	// 				this.Intake_Mode_Data.unshift(this.Intake_Mode_Temp);

	// 				this.Intake_Mode_ = this.Intake_Mode_Data[0];
	// 				this.issLoading = false;
	// 			}
	// 		},
	// 		(Rows) => {
	// 			this.issLoading = false;
	// 		}
	// 	);
	// }

	// Load_Enquiryfor() {
	// 	this.issLoading = true;
	// 	this.Student_Service_.Load_Enquiryfor().subscribe(
	// 		(Rows) => {
	// 			if (Rows != null) {
	// 				this.Enquiry_For_Data = Rows[0];
	// 				this.Enquiry_For_Temp.Enquiryfor_Id = 0;
	// 				this.Enquiry_For_Temp.Enquirfor_Name = "Select";
	// 				this.Enquiry_For_Data.unshift(this.Enquiry_For_Temp);

	// 				this.Enquiry_For_ = this.Enquiry_For_Data[0];
	// 				this.issLoading = false;
	// 			}
	// 		},
	// 		(Rows) => {
	// 			this.issLoading = false;
	// 		}
	// 	);
	// }

	// Load_Shore() {
	// 	this.issLoading = true;
	// 	this.Student_Service_.Load_Shore().subscribe(
	// 		(Rows) => {
	// 			if (Rows != null) {
	// 				this.Shore_Data = Rows[0];
	// 				this.Shore_Temp.Shore_Id = 0;
	// 				this.Shore_Temp.Shore_Name = "Select";
	// 				this.Shore_Data.unshift(this.Shore_Temp);

	// 				this.Shore_ = this.Shore_Data[0];
	// 				this.issLoading = false;
	// 			}
	// 		},
	// 		(Rows) => {
	// 			this.issLoading = false;
	// 		}
	// 	);
	// }
	Load_Profile_Intake() {
		this.issLoading = true;
		this.Intake_Service_.Load_Intake().subscribe(
			(Rows) => {
				if (Rows != null) {
					this.Profile_Intake_Mode_Data = Rows[0];
					this.Profile_Intake_Mode_Temp.Intake_Id = 0;
					this.Profile_Intake_Mode_Temp.Intake_Name = "Select";
					this.Profile_Intake_Mode_Data.unshift(this.Profile_Intake_Mode_Temp);

					this.Profile_Intake_Mode_ = this.Profile_Intake_Mode_Data[0];
					this.issLoading = false;
				}
			},
			(Rows) => {
				this.issLoading = false;
			}
		);
	}

	// Load_Intake_year() {
	// 	this.issLoading = true;
	// 	this.Intake_Service_.Load_Intake_year().subscribe(
	// 		(Rows) => {
	// 			if (Rows != null) {
	// 				this.Intake_Year_Mode_Data = Rows[0];
	// 				this.Intake_Year_Mode_Temp.Intake_Year_Id = 0;
	// 				this.Intake_Year_Mode_Temp.Intake_Year_Name = "Select";
	// 				this.Intake_Year_Mode_Data.unshift(this.Intake_Year_Mode_Temp);

	// 				this.Intake_Year_Mode_ = this.Intake_Year_Mode_Data[0];
	// 				this.issLoading = false;
	// 			}
	// 		},
	// 		(Rows) => {
	// 			this.issLoading = false;
	// 		}
	// 	);
	// }

	// Load_Agents() {
	// 	this.issLoading = true;
	// 	this.Student_Service_.Load_Agents().subscribe(
	// 		(Rows) => {
	// 			if (Rows != null) {
	// 				this.Agent_Mode_Data = Rows[0];
	// 				this.Agent_Mode_Temp.Agent_Id = 0;
	// 				this.Agent_Mode_Temp.Agent_Name = "Select";
	// 				this.Agent_Mode_Data.unshift(this.Agent_Mode_Temp);
	// 				this.Agent_Mode_ = this.Agent_Mode_Data[0];
	// 				this.issLoading = false;
	// 			}
	// 		},
	// 		(Rows) => {
	// 			this.issLoading = false;
	// 		}
	// 	);
	// }
	// Load_application_status() {
	// 	this.issLoading = true;
	// 	this.Student_Service_.Load_application_status().subscribe(
	// 		(Rows) => {
	// 			if (Rows != null) {
	// 				this.Application_Status_Mode_Data = Rows[0];
	// 				this.Application_Status_Mode_Temp.Application_status_Id = 0;
	// 				this.Application_Status_Mode_Temp.Application_Status_Name = "Select";
	// 				this.Application_Status_Mode_Data.unshift(
	// 					this.Application_Status_Mode_Temp
	// 				);

	// 				this.Application_Status_Mode_ = this.Application_Status_Mode_Data[0];
	// 				this.issLoading = false;
	// 			}
	// 		},
	// 		(Rows) => {
	// 			this.issLoading = false;
	// 		}
	// 	);
	// }
	// Load_Marital_Status() {
	// 	this.issLoading = true;
	// 	this.Student_Service_.Load_Marital_Status().subscribe(
	// 		(Rows) => {
	// 			if (Rows != null) {
	// 				this.Marital_Status_Data = Rows[0];
	// 				this.Marital_Status_Temp.Marital_Status_Id = 0;
	// 				this.Marital_Status_Temp.Marital_Status_Name = "Select";
	// 				this.Marital_Status_Data.unshift(this.Marital_Status_Temp);

	// 				this.Marital_Status_ = this.Marital_Status_Data[0];
	// 				this.issLoading = false;
	// 			}
	// 		},
	// 		(Rows) => {
	// 			this.issLoading = false;
	// 		}
	// 	);
	// }

	// Load_Visa_Type() {
	// 	this.issLoading = true;
	// 	this.Student_Service_.Load_Visa_Type().subscribe(
	// 		(Rows) => {
	// 			if (Rows != null) {
	// 				this.Visa_Type_Data = Rows[0];
	// 				this.Visa_Type_Temp.Visa_Type_Id = 0;
	// 				this.Visa_Type_Temp.Visa_Type_Name = "Select";
	// 				this.Visa_Type_Data.unshift(this.Visa_Type_Temp);

	// 				this.Visa_Type_ = this.Visa_Type_Data[0];
	// 				this.issLoading = false;
	// 			}
	// 		},
	// 		(Rows) => {
	// 			this.issLoading = false;
	// 		}
	// 	);
	// }

	Resume_Mode_Dropdown() {
		this.issLoading = true;
		this.Student_Service_.Resume_Mode_Dropdown().subscribe(
			(Rows) => {
				if (Rows != null) {
					this.Resume_Mode_Data = Rows[0];
					this.Resume_Mode_Temp.Resume_Id = 0;
					this.Resume_Mode_Temp.Resume_Name = "Select";
					this.Resume_Mode_Data.unshift(this.Resume_Mode_Temp);

					this.Resume_Mode_ = this.Resume_Mode_Data[0];
					this.issLoading = false;
				}
			},
			(Rows) => {
				this.issLoading = false;
			}
		);
	}

	// Passport_Mode_Dropdown() {
	// 	this.issLoading = true;
	// 	this.Student_Service_.Passport_Mode_Dropdown().subscribe(
	// 		(Rows) => {
	// 			if (Rows != null) {
	// 				this.Passport_Mode_Data = Rows[0];
	// 				this.Passport_Mode_Temp.Passport_Id = 0;
	// 				this.Passport_Mode_Temp.Passport_Name = "Select";
	// 				this.Passport_Mode_Data.unshift(this.Passport_Mode_Temp);

	// 				this.Passport_Mode_ = this.Passport_Mode_Data[0];
	// 				this.issLoading = false;
	// 			}
	// 		},
	// 		(Rows) => {
	// 			this.issLoading = false;
	// 		}
	// 	);
	// }

	LOR1_Mode_Dropdown() {
		this.issLoading = true;
		this.Student_Service_.LOR1_Mode_Dropdown().subscribe(
			(Rows) => {
				if (Rows != null) {
					this.LOR_1_Mode_Data = Rows[0];
					this.LOR_1_Mode_Temp.LOR_1_Id = 0;
					this.LOR_1_Mode_Temp.LOR_1_Name = "Select";
					this.LOR_1_Mode_Data.unshift(this.LOR_1_Mode_Temp);

					this.LOR_1_Mode_ = this.LOR_1_Mode_Data[0];
					this.issLoading = false;
				}
			},
			(Rows) => {
				this.issLoading = false;
			}
		);
	}
	LOR2_Mode_Dropdown() {
		this.issLoading = true;
		this.Student_Service_.LOR2_Mode_Dropdown().subscribe(
			(Rows) => {
				if (Rows != null) {
					this.LOR_2_Mode_Data = Rows[0];
					this.LOR_2_Mode_Temp.LOR_2_Id = 0;
					this.LOR_2_Mode_Temp.LOR_2_Name = "Select";
					this.LOR_2_Mode_Data.unshift(this.LOR_2_Mode_Temp);

					this.LOR_2_Mode_ = this.LOR_2_Mode_Data[0];
					this.issLoading = false;
				}
			},
			(Rows) => {
				this.issLoading = false;
			}
		);
	}
	MOI_Mode_Dropdown() {
		this.issLoading = true;
		this.Student_Service_.MOI_Mode_Dropdown().subscribe(
			(Rows) => {
				if (Rows != null) {
					this.MOI_Mode_Data = Rows[0];
					this.MOI_Mode_Temp.MOI_Id = 0;
					this.MOI_Mode_Temp.MOI_Name = "Select";
					this.MOI_Mode_Data.unshift(this.MOI_Mode_Temp);

					this.MOI_Mode_ = this.MOI_Mode_Data[0];
					this.issLoading = false;
				}
			},
			(Rows) => {
				this.issLoading = false;
			}
		);
	}
	SOP_Mode_Dropdown() {
		this.issLoading = true;
		this.Student_Service_.SOP_Mode_Dropdown().subscribe(
			(Rows) => {
				if (Rows != null) {
					this.SOP_Mode_Data = Rows[0];
					this.SOP_Mode_Temp.SOP_Id = 0;
					this.SOP_Mode_Temp.SOP_Name = "Select";
					this.SOP_Mode_Data.unshift(this.SOP_Mode_Temp);

					this.SOP_Mode_ = this.SOP_Mode_Data[0];
					this.issLoading = false;
				}
			},
			(Rows) => {
				this.issLoading = false;
			}
		);
	}

	// IELTS_Mode_Dropdown() {
	// 	this.issLoading = true;
	// 	this.Student_Service_.IELTS_Mode_Dropdown().subscribe(
	// 		(Rows) => {
	// 			if (Rows != null) {
	// 				this.Ielts_Mode_Data = Rows[0];
	// 				this.Ielts_Mode_Temp.Ielts_Id = 0;
	// 				this.Ielts_Mode_Temp.Ielts_Name = "Select";
	// 				this.Ielts_Mode_Data.unshift(this.Ielts_Mode_Temp);

	// 				this.Ielts_Mode_ = this.Ielts_Mode_Data[0];
	// 				this.issLoading = false;
	// 			}
	// 		},
	// 		(Rows) => {
	// 			this.issLoading = false;
	// 		}
	// 	);
	// }

	New_Date_followup(Date_) {
		this.date = Date_;
		this.day = this.date.getDate().toString();
		this.month = this.date.getMonth() + 1;
		this.year = this.date.getFullYear();

		if (this.month < 10) {
			this.month = "0" + this.month;
		}

		if (Number.parseInt(this.day) < 10) {
			this.day = "0" + this.day;
		}

		this.date = this.day + "-" + this.month + "-" + this.year;
		return this.date;
	}

	Save_Profile() {

		// if (this.isStatusChanged) {
		// 	this.createTaskByProcessOfStatus();
		//   }
	  

		if (this.Flag_Student == 1) {
			if (
				this.Profile_.Student_Name == undefined ||
				this.Profile_.Student_Name == null ||
				this.Profile_.Student_Name == ""
			) {
				const dialogRef = this.dialogBox.open(DialogBox_Component, {
					panelClass: "Dialogbox-Class",
					data: { Message: "Enter Student Name", Type: "3" },
				});
				return;
			}

			if (
				this.Profile_.Phone_Number == undefined ||
				this.Profile_.Phone_Number == null ||
				this.Profile_.Phone_Number == ""
			) {
				const dialogRef = this.dialogBox.open(DialogBox_Component, {
					panelClass: "Dialogbox-Class",
					data: { Message: "Enter Mobile", Type: "3" },
				});
				return;
			}
			if (
				this.Enquiry_Source_ == undefined ||
				this.Enquiry_Source_ == null ||
				this.Enquiry_Source_.Enquiry_Source_Id == undefined ||
				this.Enquiry_Source_.Enquiry_Source_Id == 0
			) {
				const dialogRef = this.dialogBox.open(DialogBox_Component, {
					panelClass: "Dialogbox-Class",
					data: { Message: "Select Enquiry source", Type: "3" },
				});
				return;
			}




			// if (this.Enquiry_For_ == undefined ||this.Enquiry_For_ == null ||this.Enquiry_For_.Enquiryfor_Id == undefined ||this.Enquiry_For_.Enquiryfor_Id == 0)
			//  {
			// 	const dialogRef = this.dialogBox.open(DialogBox_Component, {panelClass: "Dialogbox-Class",data: { Message: "Select Enquiry for", Type: "3" },});
			// 	return;
			// }

			// if (this.Shore_ == undefined ||this.Shore_ == null ||this.Shore_.Shore_Id == undefined ||this.Shore_.Shore_Id == 0)
			//  {
			// 	const dialogRef = this.dialogBox.open(DialogBox_Component, {panelClass: "Dialogbox-Class",data: { Message: "Select Shore", Type: "3" },});
			// 	return;
			// }

			// if (this.enquiry_mode_ == undefined ||this.enquiry_mode_ == null ||this.enquiry_mode_.Enquiry_Mode_Id == undefined ||this.enquiry_mode_.Enquiry_Mode_Id == 0)
			//  {
			// 	const dialogRef = this.dialogBox.open(DialogBox_Component, {panelClass: "Dialogbox-Class",data: { Message: "Select Mode Of Enquiry", Type: "3" },});
			// 	return;
			// }

			// if (this.Profile_.Guardian_telephone == undefined ||this.Profile_.Guardian_telephone == null ||this.Profile_.Guardian_telephone == "")
			// {const dialogRef = this.dialogBox.open(DialogBox_Component, {panelClass: "Dialogbox-Class",data: { Message: "Enter Guardian Telephone", Type: "3" },});
			// 	return;
			// }

			if (
				this.Profile_.Email != "" &&
				this.Profile_.Email == this.Profile_.Alternative_Email
			) {
				const dialogRef = this.dialogBox.open(DialogBox_Component, {
					panelClass: "Dialogbox-Class",
					data: {
						Message: "E-mail Id and Alternative Email are Same",
						Type: "3",
					},
				});
				return;
			}

			if (
				this.Profile_.Phone_Number == this.Profile_.Alternative_Phone_Number
			) {
				const dialogRef = this.dialogBox.open(DialogBox_Component, {
					panelClass: "Dialogbox-Class",
					data: {
						Message: "Mobile and Alternative Mobile are Same",
						Type: "3",
					},
				});
				return;
			}

			//    if (this.Profile_.Phone_Number == this.Profile_.Guardian_telephone )
			// 	{const dialogRef = this.dialogBox.open(DialogBox_Component, {panelClass: "Dialogbox-Class",data: { Message: "Mobile and Guardian Telephone are Same", Type: "3" },});
			// 	   return;
			//    }

			//    if (this.Profile_.Alternative_Phone_Number == this.Profile_.Guardian_telephone )
			// 	{const dialogRef = this.dialogBox.open(DialogBox_Component, {panelClass: "Dialogbox-Class",data: { Message: "Alternative Mobile and Guardian Telephone are Same", Type: "3" },});
			// 	   return;
			//    }
			
			if (this.Passport_Mode_.Passport_Id == 1) {
				if (
					this.Profile_.Passport_fromdate == undefined ||
					this.Profile_.Passport_fromdate == null ||
					this.Profile_.Passport_fromdate == "NaN" ||
					this.Profile_.Passport_fromdate == ""
				) {
					// this.Profile_.Passport_fromdate = "";
					const dialogRef = this.dialogBox.open(DialogBox_Component, {
								panelClass: "Dialogbox-Class",
								data: { Message: "Select From  Date", Type: "3" },
							});
							return;
				} 
				else
					this.Profile_.Passport_fromdate = this.New_Date(
						new Date(moment(this.Profile_.Passport_fromdate).format("YYYY-MM-DD"))
					);
			}







			if (this.Passport_Mode_.Passport_Id == 1) {
				// if (
				// 	this.Profile_.Passport_Todate == undefined ||
				// 	this.Profile_.Passport_Todate == null
				// ) {
				// 	const dialogRef = this.dialogBox.open(DialogBox_Component, {
				// 		panelClass: "Dialogbox-Class",
				// 		data: { Message: "Select To  Date", Type: "3" },
				// 	});
				// 	return;
				// }
				if (
					this.Profile_.Passport_Todate == undefined ||
					this.Profile_.Passport_Todate == null ||
					this.Profile_.Passport_Todate == "NaN" ||
					this.Profile_.Passport_Todate == ""
				) {
					const dialogRef = this.dialogBox.open(DialogBox_Component, {
						panelClass: "Dialogbox-Class",
						data: { Message: "Select To  Date", Type: "3" },
					});
					return;
				} else
					this.Profile_.Passport_Todate = this.New_Date(
						new Date(moment(this.Profile_.Passport_Todate).format("YYYY-MM-DD"))
					);


			}
		}
			console.log('this.FollowUp_Department_', this.FollowUp_Department_.Department_Id);


			

		if (this.Flag_Followup == 1) {
			if (
				this.FollowUp_Branch_ == null ||
				this.FollowUp_Branch_ == undefined ||
				this.FollowUp_Branch_.Branch_Id == undefined ||
				this.FollowUp_Branch_.Branch_Id == null
			) {
				const dialogRef = this.dialogBox.open(DialogBox_Component, {
					panelClass: "Dialogbox-Class",
					data: { Message: "select Followup Branch", Type: "3" },
				});
				return;
			} else if (
				this.FollowUp_Department_ == null ||
				this.FollowUp_Department_ == undefined ||
				this.FollowUp_Department_.Department_Id == undefined ||
				this.FollowUp_Department_.Department_Id == null
		
				
			) {
				const dialogRef = this.dialogBox.open(DialogBox_Component, {
					panelClass: "Dialogbox-Class",
					data: { Message: "Select Followup Department", Type: "3" },
				});
				return;
						console.log('this.FollowUp_Department_.Department_Id: ', this.FollowUp_Department_.Department_Id);
			}
			 else if (
				this.FollowUp_Status_ == null ||
				
				
			
				this.FollowUp_Status_ == undefined ||
				this.FollowUp_Status_.Department_Status_Id == undefined ||
				this.FollowUp_Status_.Department_Status_Id == null
			) 
			
		
				
				{
				const dialogRef = this.dialogBox.open(DialogBox_Component, {
					panelClass: "Dialogbox-Class",
					data: { Message: "Select Status", Type: "3" },
				});
				return;

				console.log('this.FollowUp_Status_: ', this.FollowUp_Status_);
				
			}



		//  else if (
			
		// 	this.FollowUp_Status_.Registration_Mandatory == true 
		// ) 
		
		// {
		// 	if(this.Profile_.Is_Registered==0){
		// 	const dialogRef = this.dialogBox.open(DialogBox_Component, {
		// 		panelClass: "Dialogbox-Class",
		// 		data: { Message: "Select Status", Type: "3" },
		// 	});
		// 	return;
		// }
		// }
		
			// else if (
			// 	this.FollowUp_Sub_Status_ == null ||
			// 	this.FollowUp_Sub_Status_ == undefined ||
			// 	this.FollowUp_Sub_Status_.Sub_Status_Id == undefined ||
			// 	this.FollowUp_Sub_Status_.Sub_Status_Id == null
			// ) {
			// 	const dialogRef = this.dialogBox.open(DialogBox_Component, {
			// 		panelClass: "Dialogbox-Class",
			// 		data: { Message: "Select Sub Status", Type: "3" },
			// 	});
			// 	return;
			// }
			// commented for round robin begin
			else if (
				this.Followup_Users_ == null ||
				this.Followup_Users_ == undefined ||
				this.Followup_Users_.User_Details_Id == undefined ||
				this.Followup_Users_.User_Details_Id == null
			) {
				const dialogRef = this.dialogBox.open(DialogBox_Component, {
					panelClass: "Dialogbox-Class",
					data: { Message: "Select To Staff", Type: "3" },
				});
				return;
			}
			// commented for round robin end
			if (this.FollowUp_.Next_FollowUp_Date == null) {
				const dialogRef = this.dialogBox.open(DialogBox_Component, {
					panelClass: "Dialogbox-Class",
					data: { Message: "Choose Follow Up on", Type: "3" },
				});
				return;
			}
			// 	else if (this.class_ == undefined ||this.class_ == null ||this.class_.Class_Id == undefined ||this.class_.Class_Id == 0)
			//  {
			// 	const dialogRef = this.dialogBox.open(DialogBox_Component, {panelClass: "Dialogbox-Class",data: { Message: "Select Class", Type: "3" },});
			// 	return;
			// }

			if (this.Remarks_ == null) {
				const dialogRef = this.dialogBox.open(DialogBox_Component, {
					panelClass: "Dialogbox-Class",
					data: { Message: "Enter the Remark", Type: "3" },
				});
				return;
			} else if (this.Remarks_.Remarks_Name != null) {
				Remarks_Id_temp = this.Remarks_.Remarks_Id;
				Remarks_Caption_Temp = this.Remarks_.Remarks_Name;
			} else {
				Remarks_Caption_Temp = String(this.Remarks_);
			}
			if ((Remarks_Caption_Temp == null || Remarks_Caption_Temp == "")) {
				const dialogRef = this.dialogBox.open(DialogBox_Component, {
					panelClass: "Dialogbox-Class",
					data: { Message: "Enter the Remark", Type: "3" },
				});
				return;
			}

			//this.FollowUp_.Next_FollowUp_Date = new Date();
			// var	dateFirst = new Date(this.FollowUp_.Next_FollowUp_Date)
			var dateFirst = new Date(this.FollowUp_.Next_FollowUp_Date);
			dateFirst = new Date(dateFirst);
			var dateSecond = new Date();
			dateSecond = new Date(dateSecond);
			//var timeDiff = Math.abs(dateSecond.getDay() - dateFirst.getDay());
			//var timeDiff =0
			const msInDay = 24 * 60 * 60 * 1000;
			this.timeDiff = Math.trunc(
				Math.abs(dateSecond.getTime() - dateFirst.getTime()) / msInDay
			);
			var DayDiff = Math.round(
				Math.abs(dateSecond.getTime() - dateFirst.getTime())
			);
			//  var addeddate= dateFirst.setDate( dateFirst.getDate() + timeDiff );
			var addeddate = new Date(dateSecond);
			addeddate.setDate(addeddate.getDate() + this.Duration);
			// var addeddate1 = new Date()
			//addeddate1  = new Date(addeddate1);
			var addeddate1 = this.New_Date_followup(
				new Date(moment(addeddate).format("YYYY-MM-DD"))
			);

			if (this.Duration < this.timeDiff + 1 && this.Followup_sub == "1") {
				const dialogRef = this.dialogBox.open(DialogBox_Component, {
					panelClass: "Dialogbox-Class",
					data: { Message: "Select Date Upto " + addeddate1, Type: "3" },
				});
				return;
			}
		}
		// if (this.FollowUp_Status_ == null ||this.FollowUp_Status_ == undefined ||this.FollowUp_Status_.Department_Status_Id == undefined ||this.FollowUp_Status_.Department_Status_Id == null)
		//  {const dialogRef = this.dialogBox.open(DialogBox_Component, {panelClass: "Dialogbox-Class",data: { Message: "Select Followup Status", Type: "3" },});
		// 	return;
		// }

		// if (this.Followup_Users_ == null ||this.Followup_Users_ == undefined ||this.Followup_Users_.User_Details_Id == undefined ||this.Followup_Users_.User_Details_Id == null)
		//  {const dialogRef = this.dialogBox.open(DialogBox_Component, {panelClass: "Dialogbox-Class",data: { Message: "Select Followup To Staff", Type: "3" },});
		// 	return;
		// }

		// if (this.Remarks_ == null)
		// {const dialogRef = this.dialogBox.open(DialogBox_Component, {panelClass: "Dialogbox-Class",data: { Message: "Enter the Remark", Type: "3" },});
		// 	return;
		// }

		if (
			this.Profile_.Dob == undefined ||
			this.Profile_.Dob == null ||
			this.Profile_.Dob == "NaN" ||
			this.Profile_.Dob == ""
		) {
			this.Profile_.Dob = "";
		} else
			this.Profile_.Dob = this.New_Date(
				new Date(moment(this.Profile_.Dob).format("YYYY-MM-DD"))
			);

			
		// if (
		// 	this.Profile_.Visa_Date == undefined ||
		// 	this.Profile_.Visa_Date == null
			
		// ) else
		// 	this.Profile_.Visa_Date = this.New_Date(
		// 		new Date(moment(this.Profile_.Visa_Date).format("YYYY-MM-DD"))
		// 	);

		if (
			this.Profile_.Date_of_Marriage == undefined ||
			this.Profile_.Date_of_Marriage == null ||
			this.Profile_.Date_of_Marriage == "NaN" ||
			this.Profile_.Date_of_Marriage == ""
		) {
			this.Profile_.Date_of_Marriage = "";
		} else
			this.Profile_.Date_of_Marriage = this.New_Date(
				new Date(moment(this.Profile_.Date_of_Marriage).format("YYYY-MM-DD"))
			);

		var Programe_Course_Id_temp = 0;
		var Programe_Course_Caption_Temp = "";

		if (this.Program_Course_ != undefined || this.Program_Course_ != null) {
			if (
				this.Program_Course_.Course_Id == undefined ||
				this.Program_Course_.Course_Id == null
			) {
				Programe_Course_Id_temp = -1; //this.Program_Course_.Course_Id
				Programe_Course_Caption_Temp = String(this.Program_Course_); //this.Program_Course_.Course_Name
			} else {
				Programe_Course_Id_temp = this.Program_Course_.Course_Id;
				Programe_Course_Caption_Temp = this.Program_Course_.Course_Name;
			}
		} else {
			Programe_Course_Id_temp = 0;
			Programe_Course_Caption_Temp = "";
		}

		var Profile_University_Id_temp = 0;
		var Profile_University_Caption_Temp = "";

		if (
			this.Profile_University_ != undefined ||
			this.Profile_University_ != null
		) {
			if (
				this.Profile_University_.University_Id == undefined ||
				this.Profile_University_.University_Id == null
			) {
				Profile_University_Id_temp = -1;
				Profile_University_Caption_Temp = String(this.Profile_University_);
			} else {
				Profile_University_Id_temp = this.Profile_University_.University_Id;
				Profile_University_Caption_Temp =
					this.Profile_University_.University_Name;
			}
		} else {
			Profile_University_Id_temp = 0;
			Profile_University_Caption_Temp = "";
		}

		var Profile_Country_Id_temp = 0;
		var Profile_Country_Caption_Temp = "";

		if (this.Profile_Country_ != undefined || this.Profile_Country_ != null) {
			if (
				this.Profile_Country_.Country_Id == undefined ||
				this.Profile_Country_.Country_Id == null
			) {
				Profile_Country_Id_temp = -1;
				Profile_Country_Caption_Temp = String(this.Profile_Country_);
			} else {
				Profile_Country_Id_temp = this.Profile_Country_.Country_Id;
				Profile_Country_Caption_Temp = this.Profile_Country_.Country_Name;
			}
		} else {
			Profile_Country_Id_temp = 0;
			Profile_Country_Caption_Temp = "";
		}

		this.Profile_.Enquiry_Source_Id = this.Enquiry_Source_.Enquiry_Source_Id;
		this.Profile_.Enquiry_Source_Name =
			this.Enquiry_Source_.Enquiry_Source_Name;
		this.Profile_.Enquiryfor_Id = this.Enquiry_For_.Enquiryfor_Id;
		this.Profile_.Enquirfor_Name = this.Enquiry_For_.Enquirfor_Name;
		this.Profile_.Shore_Id = this.Shore_.Shore_Id;
		this.Profile_.Shore_Name = this.Shore_.Shore_Name;
		this.Profile_.Enquiry_Mode_Id = this.enquiry_mode_.Enquiry_Mode_Id;
		this.Profile_.Enquiry_Mode_Name = this.enquiry_mode_.Enquiry_Mode_Name;
			this.Profile_.Intake_Id = this.Intake_Mode_Profile_.Intake_Id;
		this.Profile_.Intake_Name = this.Intake_Mode_Profile_.Intake_Name;
		// this.Profile_.Intake_Id = 0;
		// this.Profile_.Intake_Name ='';
		this.Profile_.Program_Course_Id = Programe_Course_Id_temp;
		this.Profile_.Program_Course_Name = Programe_Course_Caption_Temp;
		this.Profile_.Country_Name = Profile_Country_Caption_Temp;
		this.Profile_.Country_Id = Profile_Country_Id_temp;
		this.Profile_.Marital_Status_Id = this.Marital_Status_.Marital_Status_Id;
		this.Profile_.Marital_Status_Name =
			this.Marital_Status_.Marital_Status_Name;
		this.Profile_.Passport_Id = this.Passport_Mode_.Passport_Id;
		this.Profile_.Student_Status_Id = 1;
		this.Profile_.Agent_Id = 1;
		this.Profile_.Department_Id = this.Login_Department;
		this.Profile_.Branch_Id = this.Branch_Id;

		this.FollowUp_.Status_Id = this.FollowUp_Status_.Department_Status_Id;
		this.FollowUp_.Branch = this.FollowUp_Branch_.Branch_Id;
		this.FollowUp_.Branch_Name = this.FollowUp_Branch_.Branch_Name;
		this.FollowUp_.Department_Name = this.FollowUp_Department_.Department_Name;
		this.FollowUp_.Department = this.FollowUp_Department_.Department_Id;
		// this.Profile_.Visa_Date = this.New_Date(
		// 	new Date(moment(this.Profile_.Visa_Date).format("YYYY-MM-DD"))
		// );
		
		// this.Profile_.Visa_Date = new Date(moment(this.Profile_.Visa_Date).format("YYYY-MM-DD"));

		// this.Profile_.Visa_Date = this.New_Date(
		// 	new Date(moment(this.Profile_.Visa_Date).format("YYYY-MM-DD"))
		// );
		this.FollowUp_.Department_FollowUp =this.FollowUp_Status_.FollowUp;
		this.FollowUp_.Department_Name = this.FollowUp_Department_.Department_Name;
		this.FollowUp_.Department_Status_Name =
			this.FollowUp_Status_.Department_Status_Name;
			
		this.FollowUp_.To_User_Id = this.Followup_Users_.User_Details_Id;
		console.log('this.FollowUp_.To_User_Id: ', this.FollowUp_.To_User_Id);
		this.FollowUp_.To_User_Name = this.Followup_Users_.User_Details_Name;
		console.log('this.FollowUp_.To_User_Name: ', this.FollowUp_.To_User_Name);
		// this.FollowUp_.To_User_Id = 0;
		// this.FollowUp_.To_User_Name = '';
		this.FollowUp_.By_User_Id = Number(this.Login_User);
		this.FollowUp_.By_User_Name = this.Login_User_Name;
		this.FollowUp_.Class_Id = this.FollowUp_Status_.Class_Id;
		this.FollowUp_.Class_Name = this.FollowUp_Status_.Class_Name;
		this.FollowUp_.Class_Order = this.FollowUp_Status_.Class_Order;
		this.FollowUp_.Status_Type_Id = this.FollowUp_Status_.Status_Type_Id;
		this.FollowUp_.Status_Type_Name = this.FollowUp_Status_.Status_Type_Name;
		

		this.FollowUp_.Next_FollowUp_Date = this.New_Date(
			new Date(moment(this.FollowUp_.Next_FollowUp_Date).format("YYYY-MM-DD"))
		);
		console.log('this.Enable_Followup_Reminder && this.FollowUp_Reminder_Time: ', this.Enable_Followup_Reminder && this.FollowUp_Reminder_Time);
// Reminder fields from Followup checkbox + time
if (this.Enable_Followup_Reminder && this.FollowUp_Reminder_Time) {
	
  // you MUST create these properties in the model / backend DTO
  this.FollowUp_.Reminder_Enabled = 1;
  console.log('  this.FollowUp_.Reminder_Enabled: ',   this.FollowUp_.Reminder_Enabled);
  this.FollowUp_.Reminder_Time = this.FollowUp_Reminder_Time;   // 'HH:mm'
} else {
  this.FollowUp_.Reminder_Enabled = 0;
  console.log('this.FollowUp_.Reminder_Enabled: ', this.FollowUp_.Reminder_Enabled);
  this.FollowUp_.Reminder_Time = null;
}

		if (this.FollowUp_Sub_Status_ == null) {
			this.FollowUp_.Sub_Status_Id = 1;
			this.FollowUp_.Sub_Status_Name = "";
		} else {
			this.FollowUp_.Sub_Status_Id = this.FollowUp_Sub_Status_.Sub_Status_Id;
			this.FollowUp_.Sub_Status_Name =
				this.FollowUp_Sub_Status_.Sub_Status_Name;
		}
		var Remarks_Id_temp = 0;
		var Remarks_Caption_Temp = "";
		//this.issLoading=true;
		if (this.Flag_Followup == 1) {
			if (this.Remarks_.Remarks_Id != undefined) {
				Remarks_Id_temp = this.Remarks_.Remarks_Id;
				Remarks_Caption_Temp = this.Remarks_.Remarks_Name;
			} else {
				Remarks_Caption_Temp = String(this.Remarks_);
			}
			this.FollowUp_.Remark_id = Remarks_Id_temp;
			this.FollowUp_.Remark = Remarks_Caption_Temp;
		} else {
			this.FollowUp_.Remark_id = 0;
		}
		this.Profile_.Student_FollowUp_ = this.FollowUp_;
		// else
		// {
		// 	this.FollowUp_.Status = this.FollowUp_Status_.Department_Status_Id;
		// 	this.FollowUp_.Department_Status_Name =this.FollowUp_Status_.Department_Status_Name;
		// 	this.FollowUp_.User_Id = this.Followup_Users_.User_Details_Id;
		// 	this.FollowUp_.User_Details_Name = this.Followup_Users_.User_Details_Name;
		// 	this.FollowUp_.By_User_Id = Number(this.Login_User);
		// 	this.FollowUp_.By_User_Name = this.Login_User_Name;
		// }
		this.Profile_.Flag_Student = this.Flag_Student;
		this.Profile_.Flag_Followup = this.Flag_Followup;

		if (this.Save_Call_Status == true) return;
		else this.Save_Call_Status = true;
		this.issLoading = true;

		this.Student_Service_.Save_Profile(this.Profile_).subscribe(
			(Save_status) => {
				
				Save_status = Save_status[0];
				if (Number(Save_status[0].Student_Id_) > 0) {

console.log('this.Transfer_Button_Status:  last', this.Transfer_Button_Status);
					if(Save_status[0].Status_Transfer_Check_==1 && Save_status[0].Round_Robin_Check_==1 && this.Transfer_Button_Status==0)
			

					{  this.transfer_status_Dept_Id_=Save_status[0].Status_Transfer_Dept_Id_
						this.transfer_student_id_=Number(Save_status[0].Student_Id_)
						this.Transfer_Cofirmation_Status('');
					}
					else
					{
						this.Search_Lead_button();
					}


					const dialogRef = this.dialogBox.open(DialogBox_Component, {
						panelClass: "Dialogbox-Class",
						data: { Message: "Saved", Type: "false" },
					});
					//this.Get_WorkexperienceDetails(Save_work_experience[0].Student_Id_);
					



					this.Save_Call_Status = false;
					this.Total_Rows = this.Total_Rows - this.Student_Data.length;

					this.Profile_.Phone_Change = 0;
					this.Profile_.Email_Change = 0;
					this.Profile_.Alternative_Phone_Number_Change = 0;
					this.Profile_.Alternative_Email_Change = 0;
					
					if (this.profile_View == true) {
						this.Create_New();
						this.Clr_Student();
						//this.Search_Student();
						this.Close_Click();
					} else {
						this.Close_Click();
						//this.Search_Student();
					}
				} else if (Number(Save_status[0].Duplicate_type) == 1) {
					this.Save_Call_Status = false;
					var Show_FollowUp_Date;
					if (Save_status[0].Department_Status == 0) {
						Show_FollowUp_Date = "";
					} else {
						Show_FollowUp_Date =
							",FollowUp Date is :" + Save_status[0].Duplicate_FollowUp_Date;
					}
					const dialogRef = this.dialogBox.open(DialogBox_Component, {
						panelClass: "Dialogbox-Class",
						data: {
							Message: Save_status[0].Duplicate_Message_,
							// "The Phone Number Already Exist for " +
							// Save_status[0].Duplicate_Student_Name +
							// " and is handled by " +
							// Save_status[0].Duplicate_User_Name +
							// Show_FollowUp_Date +
							// " ,Department is: " +
							// Save_status[0].Duplicate_Department_Name +
							// " and Remark is: " +
							// Save_status[0].Duplicate_Remark_Name +
							// ",Do you want to add FollowUp?",
							Type: true,
							Heading: "Duplicate Entry",
						},
					});
					dialogRef.afterClosed().subscribe((result) => {
						if (result == "Yes") {
							this.Save_Call_Status = false;
							this.New_Followup(
								Save_status[0].Duplicate_Student_Id,
								Save_status[0].Duplicate_Student_Name,
								Save_status[0].Duplicate_Registration,
								Save_status[0].Duplicate_Welcome_Status,
								0,
								0,0
							);
							this.Buttonset_view = true;
						}
					});
				} else if (Number(Save_status[0].Student_Id_) == -2) {
					const dialogRef = this.dialogBox.open(DialogBox_Component, {
						panelClass: "Dialogbox-Class",
						data: {
							Message:
								" Email is Already Exist for " +
								Save_status[0].Duplicate_Student_Name +
								" and is handled by " +
								Save_status[0].Duplicate_User_Name +
								",FollowUp Date is :" +
								Save_status[0].Duplicate_FollowUp_Date +
								" ,Department is: " +
								Save_status[0].Duplicate_Department_Name +
								" and Remark is: " +
								Save_status[0].Duplicate_Remark_Name,
							Type: "3",
						},
					});
					this.Save_Call_Status = false;
				} 

				else if (Number(Save_status[0].Student_Id_) == -3) {
					const dialogRef = this.dialogBox.open(DialogBox_Component, {
						panelClass: "Dialogbox-Class",
						data: {
							Message:
								" User Not Found ",
							Type: "3",
						},
					});
					this.Save_Call_Status = false;
				} 

				else if (Number(Save_status[0].Student_Id_) == -4) {
					const dialogRef = this.dialogBox.open(DialogBox_Component, {
						panelClass: "Dialogbox-Class",
						data: {
							Message:
								" Selected status only used with Enrolled Student ",
							Type: "3",
						},
					});
					this.Save_Call_Status = false;
				} 
				
				
				
				else {
					const dialogRef = this.dialogBox.open(DialogBox_Component, {
						panelClass: "Dialogbox-Class",
						data: { Message: "Error Occured", Type: "2" },
					});
				}

const n
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

	// 	Date_Difference(Date_)
	// 	{

	//     this.date = Date_;
	//     this.year = this.date.getFullYear();
	//     this.month = this.date.getMonth() + 1;

	// 	function padTo2Digits(num: number) {
	// 		return num.toString().padStart(2, '0');
	// 	  }

	// 	[
	// 		padTo2Digits(this.date.getHours()),
	// 		padTo2Digits(this.date.getMinutes()),
	// 		padTo2Digits(this.date.getSeconds()),
	// 	  ]

	//     if (this.month < 10)
	//     {
	//         this.month = "0" + this.month;
	//     }
	//     this.day = this.date.getDate().toString();

	//     if (Number.parseInt(this.day) < 10)
	//     {
	//         this.day = "0" + this.day;
	//     }
	// 	this.Hours = this.date.getHours().toString();
	// 	this.Minutes = this.date.getMinutes().toString();
	// 	this.Seconds = this.date.getSeconds().toString();

	//     this.date = this.year + "-" + this.month + "-" + this.day+ "-" + this.Seconds+ "-" + this.Minutes+ "-" + this.Seconds;
	//     return this.date;
	// }
	// Add_Date_Hostel(Date_, days) {
	// 	this.date = new Date(Date_);
	// 	//this.date=new Date();
	//
	// 	this.date.setDate(this.date.getDate() + days);
	// 	this.year = this.date.getFullYear();
	// 	this.monthnew = this.month + days;
	// 	if (this.month < 10) {
	// 	this.month = "0" + this.month;
	// 	}
	// 	this.day = this.date.getDate().toString();

	// 	if (Number.parseInt(this.day) < 10) {
	// 	this.day = "0" + this.day;
	// 	}
	// 	this.date = this.year + "-" + this.monthnew + "-" + this.day;

	// 	return this.date;
	// 	}

	Save_Student() {
		if (this.Flag_Student == 1) {
			// if(this.Save_Agent_==undefined || this.Save_Agent_==null || this.Save_Agent_.Client_Accounts_Id==undefined || this.Save_Agent_.Client_Accounts_Id==0)
			// {
			//     const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: ' Please Select Agent', Type: "3" } });
			//     return;
			// }
			if (
				this.Enquiry_Source_ == undefined ||
				this.Enquiry_Source_ == null ||
				this.Enquiry_Source_.Enquiry_Source_Id == undefined ||
				this.Enquiry_Source_.Enquiry_Source_Id == 0
			) {
				const dialogRef = this.dialogBox.open(DialogBox_Component, {
					panelClass: "Dialogbox-Class",
					data: { Message: "Select Enquiry source", Type: "3" },
				});
				return;
			}
			if (
				this.Student_.Student_Name == undefined ||
				this.Student_.Student_Name == null ||
				this.Student_.Student_Name == ""
			) {
				const dialogRef = this.dialogBox.open(DialogBox_Component, {
					panelClass: "Dialogbox-Class",
					data: { Message: "Enter Student Name", Type: "3" },
				});
				return;
			}
			// if (this.Student_.Dob== undefined || this.Student_.Dob == null || this.Student_.Dob == "" ) {
			//     const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Enter DOB', Type: "3" } });
			//     return;
			// }
			// if (this.Gender_ == undefined || this.Gender_ == null || this.Gender_.Gender_Id == undefined || this.Gender_.Gender_Id==0) {
			//     const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Select Gender', Type: "3" } });
			//     return;
			// }
			// if (this.Student_Status_== undefined || this.Student_Status_ == null || this.Student_Status_.Student_Status_Id == undefined || this.Student_Status_.Student_Status_Id==0) {
			//     const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Select status', Type: "3" } });
			//     return;
			// }

			if (
				this.Student_.Phone_Number == undefined ||
				this.Student_.Phone_Number == null ||
				this.Student_.Phone_Number == ""
			) {
				const dialogRef = this.dialogBox.open(DialogBox_Component, {
					panelClass: "Dialogbox-Class",
					data: { Message: "Enter Mobile Number", Type: "3" },
				});
				return;
			}
			// if (this.Student_.Email== undefined || this.Student_.Email == null || this.Student_.Email== "" ) {
			//     const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Please add mail address', Type: "3" } });
			//     return;
			// }
		}
		if (this.Flag_Followup == 1) {
			if (
				this.FollowUp_Branch_ == null ||
				this.FollowUp_Branch_ == undefined ||
				this.FollowUp_Branch_.Branch_Id == undefined ||
				this.FollowUp_Branch_.Branch_Id == null
			) {
				const dialogRef = this.dialogBox.open(DialogBox_Component, {
					panelClass: "Dialogbox-Class",
					data: { Message: "select Followup Branch", Type: "3" },
				});
				return;
			} else if (
				this.FollowUp_Department_ == null ||
				this.FollowUp_Department_ == undefined ||
				this.FollowUp_Department_.Department_Id == undefined ||
				this.FollowUp_Department_.Department_Id == null
			) {
				const dialogRef = this.dialogBox.open(DialogBox_Component, {
					panelClass: "Dialogbox-Class",
					data: { Message: "Select Followup Department", Type: "3" },
				});
				return;
			} else if (
				this.FollowUp_Status_ == null ||
				this.FollowUp_Status_ == undefined ||
				this.FollowUp_Status_.Department_Status_Id == undefined ||
				this.FollowUp_Status_.Department_Status_Id == null
			) {
				const dialogRef = this.dialogBox.open(DialogBox_Component, {
					panelClass: "Dialogbox-Class",
					data: { Message: "Select Followup Status", Type: "3" },
				});
				return;
			} else if (
				this.Followup_Users_ == null ||
				this.Followup_Users_ == undefined ||
				this.Followup_Users_.User_Details_Id == undefined ||
				this.Followup_Users_.User_Details_Id == null
			) {
				const dialogRef = this.dialogBox.open(DialogBox_Component, {
					panelClass: "Dialogbox-Class",
					data: { Message: "Select Followup To Staff", Type: "3" },
				});
				return;
			} else {
				var Resume_Id = 0;
				var LOR_1_Id = 0;
				var LOR_2_Id = 0;
				var Ielts_Id = 0;
				var MOI_Id = 0;
				var SOP_Id = 0;

				var Remarks_Id_temp = 0;
				var Remarks_Caption_Temp = "";

				if (this.Remarks_ == null) {
					const dialogRef = this.dialogBox.open(DialogBox_Component, {
						panelClass: "Dialogbox-Class",
						data: { Message: "Enter the Remark", Type: "3" },
					});
					return;
				} else if (this.Remarks_.Remarks_Name != null) {
					Remarks_Id_temp = this.Remarks_.Remarks_Id;
					Remarks_Caption_Temp = this.Remarks_.Remarks_Name;
				} else {
					Remarks_Caption_Temp = String(this.Remarks_);
				}
				if (Remarks_Caption_Temp == null || Remarks_Caption_Temp == "") {
					const dialogRef = this.dialogBox.open(DialogBox_Component, {
						panelClass: "Dialogbox-Class",
						data: { Message: "Enter the Remark", Type: "3" },
					});
					return;
				}
			}
		}

		var Main_Array = {
			Student: this.Fill_Student(),
			Followup: this.Fill_Followup(),
		};
		if (Main_Array.Student == null && Main_Array.Followup == null) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Saved", Type: "false" },
			});
			return;
		}

		var Checklisst_Array = [];
		for (var m = 0; m < this.StudentChecklist_Data.length; m++) {
			if (
				Boolean(this.StudentChecklist_Data[m].Applicable) == true ||
				Boolean(this.StudentChecklist_Data[m].Checklist_Status) == true
			) {
				Checklisst_Array.push(this.StudentChecklist_Data[m]);
			}
			// else
			//     Checklisst_Array.push(this.StudentChecklist_Data[m]);
		}

		if (this.Save_Call_Status == true) return;
		else this.Save_Call_Status = true;
		this.issLoading = true;
		this.Student_.Resume_Id = this.Resume_Mode_.Resume_Id;
		this.Student_.Passport_Id = this.Passport_Mode_.Passport_Id;
		this.Student_.LOR_1_Id = this.LOR_1_Mode_.LOR_1_Id;
		this.Student_.LOR_2_Id = this.LOR_2_Mode_.LOR_2_Id;
		this.Student_.MOI_Id = this.MOI_Mode_.MOI_Id;
		this.Student_.SOP_Id = this.SOP_Mode_.SOP_Id;
		this.Student_.Ielts_Id = this.Ielts_Mode_.Ielts_Id;

		//  this.Student_.Programme_Course=this.Course_.Course_Id;

		this.Student_Service_.Save_Student(
			Main_Array,
			this.ImageFile_passport,
			this.ImageFile_Ielts,
			this.ImageFile_Photo,
			this.ImageFile_Tenth,
			this.ImageFile_Experience,
			this.ImageFile_Resume,
			this.Document_File_Array,
			this.Document_Array,
			this.Document_Description,
			this.ImageFile,
			this.Display_File_Name_,
			Checklisst_Array
		).subscribe(
			(Save_status) => {
				//log(Save_status)
				
				if (Number(Save_status[0][0].Student_Id_) > 0) {
					const dialogRef = this.dialogBox.open(DialogBox_Component, {
						panelClass: "Dialogbox-Class",
						data: { Message: "Saved", Type: "false" },
					});
					this.Save_Call_Status = false;
					this.Total_Rows = this.Total_Rows - this.Student_Data.length;

					if (this.profile_View == true) {
						// this.Create_New();
						this.Clr_Student();
						this.Search_Student();
						this.Close_Click();
					} else {
						this.Close_Click();
						this.Search_Student();
					}
				} else if (Number(Save_status[0][0].Student_Id_) == -1) {
					this.Save_Call_Status = false;
					var Show_FollowUp_Date;
					if (Save_status[0][0].Department_Status == 0) {
						Show_FollowUp_Date = "";
					} else {
						Show_FollowUp_Date =
							",FollowUp Date is :" + Save_status[0][0].Duplicate_FollowUp_Date;
					}
					const dialogRef = this.dialogBox.open(DialogBox_Component, {
						panelClass: "Dialogbox-Class",
						data: {
							Message:
								"The Phone Number Already Exist for " +
								Save_status[0][0].Duplicate_Student_Name +
								" and is handled by " +
								Save_status[0][0].Duplicate_User_Name +
								Show_FollowUp_Date +
								" ,Department is: " +
								Save_status[0][0].Duplicate_Department_Name +
								" and Remark is: " +
								Save_status[0][0].Duplicate_Remark_Name +
								",Do you want to add FollowUp?",
							Type: true,
							Heading: "Duplicate Entry",
						},
					});
					dialogRef.afterClosed().subscribe((result) => {
						if (result == "Yes") {
							this.Save_Call_Status = false;
							this.New_Followup(
								Save_status[0][0].Duplicate_Student_Id,
								Save_status[0][0].Duplicate_Student_Name,
								Save_status[0][0].Duplicate_Registration,
								Save_status[0][0].Duplicate_Welcome_Status,
								0,
								0,0
							);
						}
					});
				} else if (Number(Save_status[0][0].Student_Id_) == -2) {
					const dialogRef = this.dialogBox.open(DialogBox_Component, {
						panelClass: "Dialogbox-Class",
						data: {
							Message:
								" Email is Already Exist for " +
								Save_status[0][0].Duplicate_Student_Name +
								" and is handled by " +
								Save_status[0][0].Duplicate_User_Name +
								",FollowUp Date is :" +
								Save_status[0][0].Duplicate_FollowUp_Date +
								" ,Department is: " +
								Save_status[0][0].Duplicate_Department_Name +
								" and Remark is: " +
								Save_status[0][0].Duplicate_Remark_Name,
							Type: "3",
						},
					});
					this.Save_Call_Status = false;
				} else {
					const dialogRef = this.dialogBox.open(DialogBox_Component, {
						panelClass: "Dialogbox-Class",
						data: { Message: "Error Occured", Type: "2" },
					});
					this.Save_Call_Status = false;
				}
				this.issLoading = false;
			},
			(Rows) => {
				this.issLoading = false;
				const dialogRef = this.dialogBox.open(DialogBox_Component, {
					panelClass: "Dialogbox-Class",
					data: { Message: "Error Occured", Type: "2" },
				});
				this.Save_Call_Status = false;
			}
		);
	}
	Fill_Student() {
		var phone = this.Student_.Phone_Number;
		if (this.Flag_Student == 1) {
			if (
				this.Student_.Dob == undefined ||
				this.Student_.Dob == null ||
				this.Student_.Dob == "NaN" ||
				this.Student_.Dob == ""
			) {
				this.Student_.Dob = "";
			} else
				this.Student_.Dob = this.New_Date(
					new Date(moment(this.Student_.Dob).format("YYYY-MM-DD"))
				);

			// if(this.Student_.Created_On==undefined || this.Student_.Created_On==null || this.Student_.Created_On =='NaN' || this.Student_.Created_On=="")
			// {
			//     this.Student_.Created_On = "";
			// }
			// else
			// this.Student_.Created_On = this.New_Date(
			// 	new Date(moment(this.Student_.Created_On).format("YYYY-MM-DD"))
			// );

			var Programe_Course_Id_temp = 0;
			var Programe_Course_Caption_Temp = "";

			if (this.Program_Course_ != undefined || this.Program_Course_ != null) {
				if (
					this.Program_Course_.Course_Id == undefined ||
					this.Program_Course_.Course_Id == null
				) {
					Programe_Course_Id_temp = -1; //this.Program_Course_.Course_Id
					Programe_Course_Caption_Temp = String(this.Program_Course_); //this.Program_Course_.Course_Name
				} else {
					Programe_Course_Id_temp = this.Program_Course_.Course_Id;
					Programe_Course_Caption_Temp = this.Program_Course_.Course_Name;
				}
			} else {
				Programe_Course_Id_temp = 0;
				Programe_Course_Caption_Temp = "";
			}

			var Profile_University_Id_temp = 0;
			var Profile_University_Caption_Temp = "";

			if (
				this.Profile_University_ != undefined ||
				this.Profile_University_ != null
			) {
				if (
					this.Profile_University_.University_Id == undefined ||
					this.Profile_University_.University_Id == null
				) {
					Profile_University_Id_temp = -1;
					Profile_University_Caption_Temp = String(this.Profile_University_);
				} else {
					Profile_University_Id_temp = this.Profile_University_.University_Id;
					Profile_University_Caption_Temp =
						this.Profile_University_.University_Name;
				}
			} else {
				Profile_University_Id_temp = 0;
				Profile_University_Caption_Temp = "";
			}

			var Profile_Country_Id_temp = 0;
			var Profile_Country_Caption_Temp = "";

			if (this.Profile_Country_ != undefined || this.Profile_Country_ != null) {
				if (
					this.Profile_Country_.Country_Id == undefined ||
					this.Profile_Country_.Country_Id == null
				) {
					Profile_Country_Id_temp = -1;
					Profile_Country_Caption_Temp = String(this.Profile_Country_);
				} else {
					Profile_Country_Id_temp = this.Profile_Country_.Country_Id;
					Profile_Country_Caption_Temp = this.Profile_Country_.Country_Name;
				}
			} else {
				Profile_Country_Id_temp = 0;
				Profile_Country_Caption_Temp = "";
			}
			//for new university ,country and course

			// this.Student_.Dob = this.New_Date(new Date(moment(this.Student_.Dob).format('YYYY-MM-DD')));

			this.Student_.Phone_Number = phone.toString().trim();
			//  replace(/ +/g, "");
			// this.Student_.Resume_Id = this.Resume_.Resume_Id;
			this.Student_.LOR_1_Id = this.LOR_1_.LOR_1_Id;
			this.Student_.LOR_2_Id = this.LOR_2_.LOR_2_Id;
			this.Student_.Ielts_Id = this.Ielts_.Ielts_Id;
			this.Student_.MOI_Id = this.MOI_.MOI_Id;
			this.Student_.Marital_Status_Id = this.Marital_Status_.Marital_Status_Id;
			this.Student_.Marital_Status_Name =
				this.Marital_Status_.Marital_Status_Name;

			this.Student_.Intake_Id = this.Profile_Intake_Mode_.Intake_Id;
			this.Student_.Intake = this.Profile_Intake_Mode_.Intake_Name;

			this.Student_.Program_Course_Id = Programe_Course_Id_temp;
			this.Student_.Programme_Course = Programe_Course_Caption_Temp;
			this.Student_.Profile_University_Id = Programe_Course_Id_temp;
			this.Student_.College_University = Profile_University_Caption_Temp;

			this.Student_.Country_Name = Profile_Country_Caption_Temp;
			this.Student_.Profile_Country_Id = Profile_Country_Id_temp;

			this.Student_.Passport_Id = this.Passport_.Passport_Id;
			this.Student_.Resume_Id = this.Resume_.Resume_Id;

			this.Student_.SOP_Id = this.SOP_.SOP_Id;

			this.Student_.Gender = this.Gender_.Gender_Name;
			this.Student_.Student_Status_Id = 1; //this.Student_Status_.Student_Status_Id;

			this.Student_.Enquiry_Source_Id = this.Enquiry_Source_.Enquiry_Source_Id;
			this.Student_.Enquiry_Source_Name =
				this.Enquiry_Source_.Enquiry_Source_Name;
			this.Student_.Agent_Id = 1; //this.Save_Agent_.Client_Accounts_Id;
			this.Student_.Passport_Copy_File_Name = this.Display_passport_;
			this.Student_.Passport_Photo_File_Name = this.Display_Photo_;
			this.Student_.Tenth_Certificate_File_Name = this.Display_Tenth_;
			this.Student_.Work_Experience_File_Name = this.Display_Experience_;
			this.Student_.Resume_File_Name = this.Display_Resume_;
			this.Student_.IELTS_File_Name = this.Display_Ielts_;

			this.Student_.Login_Branch = this.Branch_Id;
			this.Student_.Enquiryfor_Id = this.Enquiry_For_.Enquiryfor_Id;
			this.Student_.Enquirfor_Name = this.Enquiry_For_.Enquirfor_Name;
			this.Student_.Shore_Id = this.Shore_.Shore_Id;
			this.Student_.Shore_Name = this.Shore_.Shore_Name;

			// if(this.Program_Course_.Course_Id==undefined||this.Program_Course_.Course_Id==null)
			// {
			//   this.Student_.Program_Course_Id=0
			//   this.Student_.Programme_Course=String(this.Program_Course_);
			// }
			// else
			// {
			//     this.Student_.Programme_Course=this.Program_Course_.Course_Name;
			//     this.Student_.Program_Course_Id=this.Program_Course_.Course_Id;
			// }
			// if(this.Profile_Country_.Country_Id==undefined||this.Profile_Country_.Country_Id==null)
			// {
			//   this.Student_.Profile_Country_Id=0
			//   this.Student_.Country_Name=String(this.Profile_Country_);
			// }
			// else
			// {
			//     this.Student_.Profile_Country_Id=this.Profile_Country_.Country_Id;
			//     this.Student_.Country_Name=this.Profile_Country_.Country_Name;
			// }
			return this.Student_;
		} else return null;
	}
	Fill_Followup() {
		if (this.Flag_Followup == 1) {
			if (
				this.FollowUp_.Next_FollowUp_Date == undefined ||
				this.FollowUp_.Next_FollowUp_Date == null
			) {
				this.FollowUp_.Next_FollowUp_Date = new Date();
			}
			var Remarks_Id_temp = 0;
			var Remarks_Caption_Temp = "";

			if (this.Remarks_.Remarks_Id != undefined) {
				Remarks_Id_temp = this.Remarks_.Remarks_Id;
				Remarks_Caption_Temp = this.Remarks_.Remarks_Name;
			} else {
				Remarks_Caption_Temp = String(this.Remarks_);
			}

			this.FollowUp_.Remark_id = Remarks_Id_temp;
			this.FollowUp_.Remark = Remarks_Caption_Temp;
			this.FollowUp_.Student_Id = this.Student_Id;

			this.FollowUp_.Next_FollowUp_Date = this.New_Date(
				new Date(moment(this.FollowUp_.Next_FollowUp_Date).format("YYYY-MM-DD"))
			);
			this.FollowUp_.Department = 0;
			this.FollowUp_.Department_Name =
				this.FollowUp_Department_.Department_Name;
			this.FollowUp_.Department_FollowUp =
				this.FollowUp_Department_.Department_FollowUp;
			this.FollowUp_.Branch = 0;
			this.FollowUp_.Branch_Name = this.FollowUp_Branch_.Branch_Name;
			this.FollowUp_.Status_Id = this.FollowUp_Status_.Department_Status_Id;
			this.FollowUp_.Department_Status_Name =
				this.FollowUp_Status_.Department_Status_Name;
			this.FollowUp_.To_User_Id = this.Followup_Users_.User_Details_Id;
			this.FollowUp_.To_User_Name = this.Followup_Users_.User_Details_Name;
			// this.FollowUp_.To_User_Id = this.Followup_Users_.User_Details_Id;
			// this.FollowUp_.To_User_Name = this.Followup_Users_.User_Details_Name;
			this.FollowUp_.By_User_Id = Number(this.Login_User);
			this.FollowUp_.By_User_Name = this.Login_User_Name;

			return this.FollowUp_;
		} else return null;
	}
	View_Follow_Click_() {
		if (this.Fee_Collection_View != undefined) {
			this.Fee_Collection_View = false;
		}

		this.FollowUp_Sub_Status_ = null;
		this.Followup_Substatus_Data_Filter = [];
		this.Followup_Substatus_Data = [];

		this.View_History_ = false;
		this.Fee_Collection_View = false;
		
		// this.Document_View_Status=true;

		
		this.Buttonset_view = true;
		this.Transfer_Button_view = false;

		this.New_Followup(
			this.Student_Id,
			this.Student_.Student_Name,
			this.Student_.Is_Registered,
			this.Student_.Send_Welcome_Mail_Status,
			this.Lead_EditIndex,
			1,this.Profile_.To_User_Id
		);
		this.New_view = true;
		this.profile_View=false;
		let top1 = document.getElementById("Bottom1div");
		if (top1 == null) {
			top1.scrollIntoView();
			top1 != null;
		}

		//this.Create_New=true;
	}
	downloadZip() {
		var ar = [];
		this.zip.forEach(function (relativePath, file) {
			ar.push(relativePath);
		});
		for (var i = 0; i < ar.length; i++) this.zip.remove(ar[i]);

		this.files = [];
		for (var i = 0; i < this.Document_Array.length; i++) {
			// this.files.push(this.Document_Array[i].File_Name);
		}
		if (this.Student_.Passport_Copy != "")
			this.files.push(this.Student_.Passport_Copy);
		if (this.Student_.IELTS != "") this.files.push(this.Student_.IELTS);
		if (this.Student_.Passport_Photo != "")
			this.files.push(this.Student_.Passport_Photo);
		if (this.Student_.Tenth_Certificate != "")
			this.files.push(this.Student_.Tenth_Certificate);
		if (this.Student_.Work_Experience != "")
			this.files.push(this.Student_.Work_Experience);
		if (this.Student_.Resume != "") this.files.push(this.Student_.Resume);
		if (this.files.length > 0) {
			this.issLoading = true;
			this.startDownload(0);
		} else {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "No Files to Download", Type: "2" },
			});
		}
	}

	private startDownload(fileId) {
		// ;

		var bs = environment.FilePath + "/uploads/";
		this.loadSvgData(bs + this.files[fileId], fileId, this.saveAsZip);
	}
	private loadSvgData(url: string, fileId, callback: Function): void {
		this._http
			.get(url, { responseType: "arraybuffer" })
			.subscribe((x) => callback(x, fileId, url));
	}

	saveAsZip = (content: Blob, fileid, Extenssion): void => {
		// ;

		var n = Extenssion.lastIndexOf(".");
		var extn = "File";
		extn = extn.concat(fileid);
		extn = extn.concat(".");
		extn = extn.concat(Extenssion.substring(n + 1, Extenssion.length));
		this.zip.file(extn, content);
		fileid++;
		if (fileid == this.files.length) this.download();
		else this.startDownload(fileid);
	};

	private download() {
		this.zip
			.generateAsync({ type: "blob" })
			.then((blob) => this.save_zipfile(blob));
	}
	save_zipfile(blob) {
		saveAs(blob, "Documents.zip");
		this.issLoading = false;
	}
	New_Followup(
		Student_Id_,
		Student_Name_,
		registration_status,
		mail_status,
		index,
		Call_From,
		to_user_Id
	) {
		let top = document.getElementById("Topdiv");
		if (top !== null) {
			top.scrollIntoView();
			top = null;
		}


// 		if(to_user_Id != Number(this.Login_User))
// 		{
// 			this.Save_button_view =false
// 		}
// 		else
// 		this.Save_button_view =true
// 

// 		if (
// 			this.Save_button_view == false ) {

// 			const dialogRef = this.dialogBox.open(DialogBox_Component, {
// 				panelClass: "Dialogbox-Class",
// 				data: { Message: "Sorry Cant Edit this Profile", Type: "3" },
// 			});
// 			return;
// 		}
if (to_user_Id == Number(this.Login_User) || this.Usertype == 1) {
	
    this.Save_button_view = true;
} else {
	
    this.Save_button_view = false;
}

if (this.Save_button_view === false) {
    const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: {
            Message: "Sorry, can't edit this profile",
            Type: "3"
        }
    });
    return;
}


    // // Set Save_button_view to true if Login_User matches to_user_Id or Usertype is 1
    // this.Save_button_view = (Number(this.Login_User) === to_user_Id || this.Usertype === 1);

    // if (!this.Save_button_view) {
    //   const dialogRef = this.dialogBox.open(DialogBox_Component, {
    //     panelClass: "Dialogbox-Class",
    //     data: {
    //       Message: "Sorry, can't edit this profile",
    //       Type: "3"
    //     }
    //   });
    // }


		this.View_Follow_ = true;
		this.View_History_ = false;
		this.Student_Id = Student_Id_;
		this.Profile_.Student_Id = Student_Id_;
		this.Fee_Collection_View = false;
		this.Next_FollowUp_Date_Visible = true;
		this.New_view = false;
		this.Get_FollowUp_Details();
		this.Student_Name = Student_Name_;
		this.Student_Name_t = Student_Name_
		this.welcome_mail_view = false;
		this.Registration_Visiblility = false;
		this.Remove_Registration_Visibility = false;
		// this.FollowUp_.Student_Id = Student_Id_;
		this.Show_FollowUp = false;
		this.Entry_View = true;
		this.tab_view = true;
		this.profile_View = false;
		this.Martialdetails_view = false;
		

		this.application_details_View = false;
		this.Qualification_details_View = false;
		this.language_details_View = false;
		this.course_history_View = false;
		this.Buttonset_view = false;
		this.Transfer_Button_view = false;
		this.Visa_View = false;
		this.History_View = false;
		this.Data_View= false;
		this.Is_Follow_ = 0;
		this.Is_Follow_Status_=0;
		this.Visamodal_View = false;
		this.Pre_Visamodal_View = false;
		this.Tasknew_View = false;
		this.Tasknewmodal_View = false;
		this.Reviewmodal_View = false;
		this.Reviewdetails_View = false;
		this.Pre_Visa_View = false;
		this.View_document = false;
		this.Course_View = false;
		this.message_View = false;
		this.Flag_Followup = 1;
		this.FollowUp_.Next_FollowUp_Date = new Date();
		this.FollowUp_.Next_FollowUp_Date = this.New_Date(
			this.FollowUp_.Next_FollowUp_Date
		);
		if (mail_status == 0) {
			this.welcome_mail_view = true;
		} else {
			this.welcome_mail_view = false;
		}
		if (registration_status == true) {
			if (
				this.Remove_Registration_Permissions != undefined &&
				this.Remove_Registration_Permissions != null
			)
				if (this.Remove_Registration_Permissions.View == true)
					this.Remove_Registration_Visibility = true;
		} else {
			if (
				this.Registration_Permissions != undefined &&
				this.Registration_Permissions != null
			)
				if (this.Registration_Permissions.View == true)
					this.Registration_Visiblility = true;
		}

		if (Call_From == 0) {
			//for duplicate student followup
			this.View_Student_ = true;
			this.Student_Delete = false;
			this.Lead_EditIndex = index;
			this.Flag_Student = 0;
			this.welcome_mail_view = false;
			this.Registration_Visiblility = false;
			this.Remove_Registration_Visibility = false;
		} else if (Call_From == 2) {
			//followup icon click from student search
			this.View_Student_ = false;
			this.Buttonset_view = true;
			this.Transfer_Button_view = false;
			this.Lead_EditIndex = index;
			this.Flag_Student = 0;
			this.tab_view = false;
			this.FollowUp_.Next_FollowUp_Date = new Date();
			this.FollowUp_.Next_FollowUp_Date = this.New_Date(
				this.FollowUp_.Next_FollowUp_Date
			);
			this.Registration_Visiblility = false;
			this.Remove_Registration_Visibility = false;
		} else {
			this.View_Student_ = true;
			this.Lead_EditIndex = index;
			this.Buttonset_view = true;
			this.Flag_Student = 1;
			this.profile_View = true;
			this.View_document = true;
			if (this.Document_View_Status == true) this.Document_View_Option = true;
		}
	}
	// Followup_History() {
	// 	//  this.Student_Id=this.Student_Data[this.Lead_EditIndex].Student_Id;
	// 	let top = document.getElementById("Bottomdiv");
	// 	if (top !== null) {
	// 		top.scrollIntoView();
	// 		top = null;
	// 	}
	// 	if (this.Show_Followup_History == true) {
	// 		this.Show_Followup_History = false;
	// 		this.issLoading = true;

	// 		this.Student_Service_.Followup_History(this.Student_Id).subscribe(
	// 			(Rows) => {
	// 				this.issLoading = false;
	// 				if (Rows.returnvalue.FollowUp.length > 0)
	// 					this.Followp_History_Data = Rows.returnvalue.FollowUp;
	// 			},
	// 			(Rows) => {
	// 				this.issLoading = false;
	// 				const dialogRef = this.dialogBox.open(DialogBox_Component, {
	// 					panelClass: "Dialogbox-Class",
	// 					data: { Message: "Error Occured", Type: "2" },
	// 				});
	// 			}
	// 		);
	// 	} else this.Show_Followup_History = true;
	// }





	Followup_History(show) {

if (show==1){
this.moredetailsbutton=false
this.lessdetailsbutton=true
}
else
{
this.moredetailsbutton=true
this.lessdetailsbutton=false
}



		;
		this.Transfer_view = false;
		this.Followupdetailsview = !this.Followupdetailsview;
		this.Followphistoryview = false;
	
		//  this.Student_Id=this.Student_Data[this.Lead_EditIndex].Student_Id;
		let top = document.getElementById("Bottomdiv");
		if (top !== null) {
		  top.scrollIntoView();
		  top = null;
		}
		// if (this.Show_Followup_History == true) {
		//   this.Show_Followup_History = false;
		this.issLoading = true;
	
		this.Student_Service_.Followup_History(this.Student_Id).subscribe(
		  (Rows) => {
			this.issLoading = false;
			if (Rows.returnvalue.FollowUp.length > 0)
			  this.Followp_History_Data = Rows.returnvalue.FollowUp;
		  },
		  (Rows) => {
			this.issLoading = false;
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
			  panelClass: "Dialogbox-Class",
			  data: { Message: "Error Occured", Type: "2" },
			});
		  }
		);
		// }
		//  else this.Show_Followup_History = true;
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
						this.FollowUp_Branch_ = Object.assign({}, this.Branch_Temp);

						this.Department_Temp.Department_FollowUp =
							this.FollowUp_.Department_FollowUp;
						this.Department_Temp.Department_Id = this.FollowUp_.Department;
						this.Department_Temp.Department_Name =
							this.FollowUp_.Department_Name;
						this.FollowUp_Department_ = Object.assign({}, this.Department_Temp);

						
						this.Status_Temp.FollowUp =
							this.FollowUp_.Department_FollowUp;
						this.Status_Temp.Department_Status_Id = this.FollowUp_.Status_Id;
						this.Status_Temp.Department_Status_Name =
							this.FollowUp_.Department_Status_Name;
						this.Status_Temp.Class_Id = this.FollowUp_.Class_Id;
						this.Status_Temp.Class_Name =
								this.FollowUp_.Class_Name;
						this.Status_Temp.Class_Order = this.FollowUp_.Class_Order;	
						this.FollowUp_Status_ = Object.assign({}, this.Status_Temp);

						this.Users_Temp_c.User_Details_Id = this.FollowUp_.User_Id;
						this.Users_Temp_c.User_Details_Name =
							this.FollowUp_.User_Details_Name;
						this.Followup_Users_ = Object.assign({}, this.Users_Temp_c);

						if (this.FollowUp_.Department_FollowUp == true) this.Is_Follow_ = 1;
						else this.Is_Follow_ = 0;

						

						this.FollowUp_.Next_FollowUp_Date = new Date();
						this.FollowUp_.Next_FollowUp_Date = this.New_Date(
							this.FollowUp_.Next_FollowUp_Date
						);

						this.FollowUp_.Remark = "";
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

	Refund_request(Fees_Receipt_Id_temp) {
		this.Fees_Receipt_Id_data = Fees_Receipt_Id_temp;
		this.Refund_View = true;
		this.Get_Refundrequestdetails(
			this.Profile_.Student_Id,
			Fees_Receipt_Id_temp
		);
	}
	oveToFreelancerClick(studentId: number): void {
		// this.Student_Service_.moveToFreelancer(studentId).subscribe({
	
		// });
	}
	
	Get_FollowUp_Details() {
		//return
		this.issLoading = true;
		this.language_details_View = false;
		this.Languagemodal_View = false;
		
		// this.New_view=false;
		this.Transfer_view = false;
		this.Qualificationmodal_View = false;
		this.Workexperiencenew_View = false;

		this.Followup_Department_Data=[];
		this.Followup_Status_Data=[];
		this.Followup_Users_Data_t=[];
		this.Followup_Status_Data_filter = []


		

		this.Student_Service_.Get_FollowUp_Details(this.Student_Id).subscribe(
			(Rows) => {
				this.issLoading = false;
				//this.profile_View = false;

				


				this.FollowUp_ = Rows.returnvalue.FollowUp[0];
				this.Is_Follow_ = Rows.returnvalue.FollowUp[0].Department_FollowUp;
				this.transferDate = Rows.returnvalue.FollowUp[0].Next_FollowUp_Date ;
				console.log('transferDate: ', this.transferDate);

				if (this.FollowUp_.Is_Registered == 1) {
					this.Registered_Check = 1;

					this.Remove_Registration_Visibility=true
					this.Registration_Visiblility=false
				}

else
{
	this.Registration_Visiblility=true
	this.Remove_Registration_Visibility=false
}




				if (this.FollowUp_ != null && this.FollowUp_ != undefined) {
					this.Followup_Branch_Temp.Branch_Id = this.FollowUp_.Branch;
					this.Followup_Branch_Temp.Branch_Name = this.FollowUp_.Branch_Name;
					this.FollowUp_Branch_ = Object.assign({}, this.Followup_Branch_Temp);

					this.Followup_Department_Temp.Department_FollowUp =
						this.FollowUp_.Department_FollowUp;
					this.Followup_Department_Temp.Department_Id =
						this.FollowUp_.Department;
					this.Followup_Department_Temp.Department_Name =
						this.FollowUp_.Department_Name;
					this.FollowUp_Department_ = Object.assign(
						{},
						this.Followup_Department_Temp
					);

					this.Followup_Status_Temp.FollowUp =
							this.FollowUp_.Department_FollowUp;
					this.Followup_Status_Temp.Department_Status_Id =
						this.FollowUp_.Status_Id;
					this.Followup_Status_Temp.Department_Status_Name =
						this.FollowUp_.Department_Status_Name;
					this.FollowUp_Status_ = Object.assign({}, this.Followup_Status_Temp);

					

					this.Followup_Status_Temp.Status_Type_Id =
						this.FollowUp_.Status_Type_Id;
					this.Followup_Status_Temp.Status_Type_Name =
						this.FollowUp_.Status_Type_Name;

					this.Followup_Sub_Status_Temp.Sub_Status_Id =
						this.FollowUp_.Sub_Status_Id;
					this.Followup_Sub_Status_Temp.Sub_Status_Name =
						this.FollowUp_.Sub_Status_Name;
					this.FollowUp_Status_ = Object.assign({}, this.Followup_Status_Temp);

					this.Followup_Users_Temp.User_Details_Id = this.FollowUp_.To_User_Id;
					this.Followup_Users_Temp.User_Details_Name =
						this.FollowUp_.To_User_Name;
					this.Followup_Users_ = Object.assign({}, this.Followup_Users_Temp);


					if(this.Followup_Users_.User_Details_Id != Number(this.Login_User)&& 
					this.Usertype != 1)
					{
						this.Save_button_view =false
					}
					else
						this.Save_button_view =true


					this.FollowUp_.Remark = "";
					this.Remarks_Temp.Remarks_Id = 0;
					this.Remarks_Temp.Remarks_Name = "";
					this.Remarks_ = this.Remarks_Temp;

					this.FollowUp_.Next_FollowUp_Date = new Date();
					this.FollowUp_.Next_FollowUp_Date = this.New_Date(
						this.FollowUp_.Next_FollowUp_Date
					);
				}

				for (var i = 0; i < this.class_Data.length; i++) {
					if (this.FollowUp_.Class_Id == this.class_Data[i].Class_Id)
						this.class_ = this.class_Data[i];
				}
				// this.Lead_Id=0;
				if (this.FollowUp_.Department_FollowUp == true) {
					this.Is_Follow_ = 1;
				} else this.Is_Follow_ = 0;
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

	Download_All(Items_) {
		var bs = "C:/Teena/Edabroad/Back End/Uploads/";
		var s = bs + Items_;

		window.open(s, "_blank");
	}

	Get_Student_Edit(Student_Id) {
		this.issLoading = true;

		this.Student_Service_.Get_Student_Edit(Student_Id).subscribe(
			(Rows) => {
				this.StudentChecklist_Data = Rows[0];
				for (var j = 0; j < this.StudentChecklist_Data.length; j++) {
					if (this.StudentChecklist_Data[j].Applicable.toString() == "1")
						this.StudentChecklist_Data[j].Applicable = true;
					else this.StudentChecklist_Data[j].Applicable = false;
					if (this.StudentChecklist_Data[j].Checklist_Status.toString() == "1")
						this.StudentChecklist_Data[j].Checklist_Status = true;
					else this.StudentChecklist_Data[j].Checklist_Status = false;
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
							this.Remove_Activte_Visiblility = false;
							this.Activte_Visiblility = false;

							if (
								this.Remove_Activity_Permissions != undefined &&
								this.Remove_Activity_Permissions != null
							)
								if (this.Remove_Activity_Permissions.View == true)
									this.Remove_Activte_Visiblility = true;

							const dialogRef = this.dialogBox.open(DialogBox_Component, {
								panelClass: "Dialogbox-Class",
								data: { Message: "Activated", Type: "false" },
							});
							// this.Total_Rows = this.Total_Rows - this.Student_Data.length;
							// this.Search_Student();

							this.Get_ApplicationDetails();
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
		// });
	// }

	// Change_Bph_Status(application_details_Id) {
	// 	this.Application_Status_Edit = application_details_Id;
	// 	this.application_details_View = false;
	// 	this.Applicationmodal_View = false;
	// 	this.Change_Status_View = true;
	// }



	Change_Bph_Status(application_details_u: any, i) { 
		
		this.showIntakeYearDiv=false;
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
		this.Change_Status_View = true;
		this.Add_Comment_View=false;
		
		//   this.Application_Status_Edit=application_details_u.;
		this.App_List_Student_Name = application_details_u.Student_Name;
		this.App_List_Course_Name = application_details_u.Course_Name;
		this.App_List_University_Name = application_details_u.University_Name;

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
		this.Change_Status_View = true;

		this.ApplicationDetails_.Followup_Date = new Date();
		this.ApplicationDetails_.Followup_Date = this.New_Date(
			new Date(moment(this.ApplicationDetails_.Followup_Date).format("YYYY-MM-DD"))
		);
		this.ApplicationDetails_.Deadline_Date = new Date();
		this.ApplicationDetails_.Deadline_Date = this.New_Date(
			new Date(moment(this.ApplicationDetails_.Deadline_Date).format("YYYY-MM-DD"))
		);

		// if (this.Offerchasing_section_View == true) {
		// 	this.Offtertype_View = true;
		// }


		// this.Search_Div = false;

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


		// this.Department_Status_Mode_Temp1.Department_Status_Id = application_details_u.Application_status_Id;
		// this.Department_Status_Mode_Temp1.Department_Status_Name = application_details_u.Application_Status_Name;
		// this.Department_Status_Mode1_ = Object.assign({}, this.Department_Status_Mode_Temp1);



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
			this.Add_Comment_View=true;
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
			;
			this.Chat_Window_Service_.Save_Comments(
				this.Chats_,
				this.ImageFile_,
				this.Document_File_Array
			).subscribe(
				(Save_status) => {
					
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
console.log('this.To_user_list: ', this.To_user_list);
					Save_status = Save_status[0];
					console.log('Save_status[0]: ', Save_status[0]);
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


	// scrollToBottom() {
	// 	const div = this.chatsec.nativeElement.querySelector(".div-b");
	// 	div.scrollTop = div.scrollHeight;
	// }


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





	findNewDate() {
		;
		const date = new Date();
		const nowDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
		return nowDate;
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




	Clr_Bph_Status() {
		// if (this.Department_Status_Mode_Data != null && this.Department_Status_Mode_Data != undefined)
		// 	this.Department_Status_Mode_ = this.Department_Status_Mode_Data[0];
		this.ApplicationDetails_.Bph_Remark = "";
		this.Department_Status_Mode1_=null
	
		
	}






	Save_Bph_Status() {
		if (
			this.Department_Status_Mode_ == undefined ||
			this.Department_Status_Mode_ == null ||
			this.Department_Status_Mode_.Department_Status_Id == undefined ||
			this.Department_Status_Mode_.Department_Status_Id == 0
		) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Select Department Status", Type: "3" },
			});
			return;
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
		// this.ApplicationDetails_.Student_Id=this.Student_.Student_Id;

		const dialogRef = this.dialogBox.open(DialogBox_Component, {
			panelClass: "Dialogbox-Class",
			data: {
				Message: "Do you want to Change Status?",
				Type: true,
				Heading: "Confirm",
			},
		});

		dialogRef.afterClosed().subscribe((result) => {
			this.Bph_Status = this.Department_Status_Mode_.Department_Status_Id;
			if (result == "Yes") {
				this.issLoading = true;

				this.Student_Service_.Save_Bph_Status(
					this.Application_Status_Edit,
					this.Login_User,
					this.Bph_Status,
					this.ApplicationDetails_.Bph_Remark
				).subscribe(
					(Save_status) => {
						
						if (Number(Save_status[0][0].Application_details_Id_) == -2) {
							const dialogRef = this.dialogBox.open(DialogBox_Component, {
								panelClass: "Dialogbox-Class",
								data: { Message: "Counsellor User not found", Type: "2" },
							});
						} else if (Number(Save_status[0][0].Application_details_Id_) > 0) {
							this.Remove_Activte_Visiblility = false;
							this.Activte_Visiblility = false;

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

							this.Get_ApplicationDetails();
							this.Clr_Bph_Status();
							// this.Search_Student();
							this.Search_Lead_button();
							if (Number(this.Login_User != Save_status[0][0].To_User_)) {
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
		});
	}




	Save_Lodgemet() {
        var empty_data=false;
    



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



	if (this.Intake_Date_Year_Check) { 
		// if (
		// 	this.Intake_Mode_ === undefined ||
		// 	this.Intake_Mode_ === null ||
		// 	this.Intake_Mode_.Intake_Id === undefined ||
		// 	this.Intake_Mode_.Intake_Id === 0
		// ) {
		// 	const dialogRef = this.dialogBox.open(DialogBox_Component, {
		// 		panelClass: "Dialogbox-Class",
		// 		data: { Message: "Select Intake Mode", Type: "3" },
		// 	});
		// 	return;
		// }
				
		// if (
		// 	this.Intake_Year_Mode_ == undefined ||
		// 	this.Intake_Year_Mode_ == null ||
		// 	this.Intake_Year_Mode_.Intake_Year_Id == undefined ||
		// 	this.Intake_Year_Mode_.Intake_Year_Id == 0
		// ) {
		// 	const dialogRef = this.dialogBox.open(DialogBox_Component, {
		// 		panelClass: "Dialogbox-Class",
		// 		data: { Message: "Select Year", Type: "3" },
		// 	});
		// 	return;
		// }
		
			if (
						this.selectedIntakeYear === undefined ||
						this.selectedIntakeYear === null ||
						this.selectedIntakeYear.Intake_Id === undefined ||
						this.selectedIntakeYear.Intake_Id === 0 ||
						this.selectedIntakeYear.Intake_Year_Id === undefined ||
						this.selectedIntakeYear.Intake_Year_Id === 0
					  ) {
						const dialogRef = this.dialogBox.open(DialogBox_Component, {
						  panelClass: "Dialogbox-Class",
						  data: { Message: "Select Intake & Year", Type: "3" },
						});
						return;
					  }
		// checks if Intake_Date_Year_Check is true

		this.Status_Change_Data_.Intake_Id = this.selectedIntakeYear.Intake_Id;
		this.Status_Change_Data_.Intake_Name = this.selectedIntakeYear.Intake_Name;
		this.Status_Change_Data_.Intake_Year_Id = this.selectedIntakeYear.Intake_Year_Id;
		this.Status_Change_Data_.Intake_Year_Name = this.selectedIntakeYear.Intake_Year_Name;
		this.Status_Change_Data_.Intake_Date_Year_Check = this.Intake_Date_Year_Check;
		
		console.log('this.Status_Change_Data_.Intake_Date_Year_Check : ', this.Status_Change_Data_.Intake_Date_Year_Check );
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
            this.Profile_.Is_Registered == 0 &&
            this.ApplicationDetails_.Registration_Mandatory == 1
        ) {
            const dialogRef = this.dialogBox.open(DialogBox_Component, {
                panelClass: "Dialogbox-Class",
                data: { Message: "Registraion mandatory, please register the candidate to continue", Type: "3" },
            });
            return;
        }



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
                    data: { Message: "Choose Followup Date", Type: "3" },
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
            
            
            
            this.Status_Change_Data_.process_document_Data = this.process_document_Data;

			


            
            this.Status_Change_Data_.process_Task_Data = this.process_Task_Data;
			this.process_Task_Data.forEach(ele=>{
				let Department_Name=this.Department_Drop_Data.find(elem=>elem.Department_Id==ele.Department_Id)
				console.log('Department_Name: ', Department_Name);
				ele.Department_Name=Department_Name.Department_Name
				})
				console.log('this.process_Task_Dataaaaaaaaaaaaaaaa: ', this.process_Task_Data);

            
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
					console.log('process_document_Dataaaaaaaaaaaa: ', this.Status_Change_Data_.process_document_Data);
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

                console.log('this.Status_Change_Data_.process_document_Data: ', this.Status_Change_Data_);
				
                // Execute your function after the loop and uploads are done
                this.Student_Service_.Save_Lodgemet({
                    ...this.Status_Change_Data_,
                    details: this.selectedApplicationsIdDetails,
                    duration:this.ApplicationDetails_.Department_Status_Duration,
                  }).subscribe(
                    (Save_status) => {
                        
						
                        if (Number(Save_status[0].value1[0].Application_details_Id_) > 0) {
        
                            
        
                            if (Number(Save_status[0].value1[0].Activation_Status_) == 1)
                            {
                                this.Activate_Application(this.Status_Change_Data_, 0)
                            }
        
                            if (Save_status[0].value1[0].Transferdept_Tik_ == 0  )
                            {
                                const dialogRef = this.dialogBox.open(DialogBox_Component, {
                                    panelClass: "Dialogbox-Class",
                                    data: { Message: "Saved", Type: "false" },
                                });
                            }

							else if (Save_status[0].value1[0].Transferdept_Tik_ ==1 && Number(Save_status[0].value4[0].Student_Task_Id_) != -1) {
								this.To_Username_Popup=Save_status[0].value4[0].ToUser_Name_

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
									Notification_Type_Name: Save_status[0].value4[0].Notification_Type_Name_,
									Entry_Type: Save_status[0].value4[0].Entry_Type_,
									To_User: Save_status[0].value4[0].User_Id_,
									Notification_Id: Save_status[0].value4[0].Notification_Id_,
									Student_Id: Save_status[0].value4[0].Student_Id_,
								};
								this.socket.emit("new-message", message);						
				
							}

							this.issLoading = false;
							this.Get_ApplicationDetails()
                            
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
                        //             Notification_Type_Name: Save_status[0].value1[0].Notification_Type_Name_,
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
			    // Hide the div elements
				this.showIntakeYearDiv = false;

                        this.Get_ApplicationDetails();
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

	createTaskByProcessOfStatus() {
		this.Task_Group_Id = 4;
		// this.Workexperiencenew_View=false;
		// this.Qualificationnew_View=false;
		if(this.ApplicationDetails_.Task_Status==1)
		{
		this.Get_Tasknew_Task(this.Task_Group_Id);
		this.Task_Item_Dropdown(this.Task_Group_Id);
		this.Add_CAS_Followup_Tasknew();
		}
		  this.Cas_Followup_.Student_Id = this.Profile_.Student_Id;
		  this.Cas_Followup_.Department_Id = this.FollowUp_Department_Task_.Department_Id;
		  this.Cas_Followup_.Department_Name = this.FollowUp_Department_Task_.Department_Name;
	
		  if (this.Tostaff_Typeahead_View == true) {
			this.Cas_Followup_.To_User = this.Followup_Users_Task_.User_Details_Id;
			this.Cas_Followup_.To_User_Name = this.Followup_Users_Task_.User_Details_Name;
		  } else {
			this.Cas_Followup_.To_User = 0;
			this.Cas_Followup_.To_User_Name = "";
		  }
	  
		  this.Cas_Followup_.Task_Status = this.Task_Status_.Task_Status_Id;
		  this.Cas_Followup_.Status_Name = this.Task_Status_.Status_Name;
		  this.Cas_Followup_.Task_Item_Id =
		  this.Task_Item_search_Tasknew_.Task_Item_Id;
	  
		  this.Cas_Followup_.By_User_Id = Number(this.Login_User);
		  this.Cas_Followup_.By_User_Name = this.Login_User_Name;
	  
		  this.Cas_Followup_.Branch_Id = this.FollowUp_Branch_Task_.Branch_Id;
		  this.Cas_Followup_.Branch_Name = this.FollowUp_Branch_Task_.Branch_Name;
	  
		  this.Cas_Followup_.Followup_Date = this.New_Date(
			new Date(moment(this.Cas_Followup_.Followup_Date).format("YYYY-MM-DD"))
		  );

		 
		  
		  this.Cas_Followup_.Task_Group_Id = this.Task_Group_Id;
	  
		//   if (this.Save_Call_Status == true) return;
		//   else this.Save_Call_Status = true;
		  this.issLoading = true;
		  ;
		  this.Student_Service_.Save_CAS_NewTask_Followup_By_Process_ID(
			{...this.Cas_Followup_, status: this.FollowUp_Status_}
		  ).subscribe(
			(Save_work_experience) => {
			  ;
			  Save_work_experience = Save_work_experience[0];
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
				this.Close_TasknewCas_Followup();
				this.Get_Tasknew_Task(this.Task_Group_Id);
	  
				var notification_type_ = "Task";
				var message = {
				  To_User: Save_work_experience[0].To_User_,
				  Task_Count: Save_work_experience[0].Task_Count_,
				  Student_Name: Save_work_experience[0].Student_Name_,
				  From_User_Name: Save_work_experience[0].From_User_Name_,
				  Entry_Type: Save_work_experience[0].Entry_Type_,
				  Notification_Type_Name: notification_type_,
				};
				this.socket.emit("new-message", message);
				//  }
			  } else if (Number(Save_work_experience[0].To_User_) == -1) {
				this.Save_Call_Status = false;
				const dialogRef = this.dialogBox.open(DialogBox_Component, {
				  panelClass: "Dialogbox-Class",
				  data: { Message: "No User Found", Type: "3" },
				});
	  
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




	Student_Approve(Application_details_Id, index) {
		// this.ApplicationDetails_.Student_Id=this.Student_.Student_Id;

		const dialogRef = this.dialogBox.open(DialogBox_Component, {
			panelClass: "Dialogbox-Class",
			data: {
				Message: "Do you want to Student Approve ?",
				Type: true,
				Heading: "Confirm",
			},
		});

		dialogRef.afterClosed().subscribe((result) => {
			if (result == "Yes") {
				this.issLoading = true;

				this.Student_Service_.Student_Approve(
					Application_details_Id,
					this.Login_User
				).subscribe(
					(Save_status) => {
						if (Number(Save_status[0][0].Application_details_Id_) > 0) {
							// this.Remove_Activte_Visiblility = false;
							// this.Activte_Visiblility = false;

							// if (
							//  this.Remove_Activity_Permissions != undefined &&
							//  this.Remove_Activity_Permissions != null
							// )
							//  if (this.Remove_Activity_Permissions.View == true)
							//      this.Remove_Activte_Visiblility = true;

							const dialogRef = this.dialogBox.open(DialogBox_Component, {
								panelClass: "Dialogbox-Class",
								data: { Message: "Approved", Type: "false" },
							});
							// this.Total_Rows = this.Total_Rows - this.Student_Data.length;
							// this.Search_Student();

							this.Get_ApplicationDetails();
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

	Remove_Activity(Application_details_Id, index) {
		//    application_details_id_
		const dialogRef = this.dialogBox.open(DialogBox_Component, {
			panelClass: "Dialogbox-Class",
			data: {
				Message: "Do you want to Deactivate ?",
				Type: true,
				Heading: "Confirm",
			},
		});

		dialogRef.afterClosed().subscribe((result) => {
			if (result == "Yes") {
				this.issLoading = true;
				this.Student_Service_.Remove_Activity(Application_details_Id).subscribe(
					(update_status) => {
						if (update_status[0][0].Application_details_Id_ > 0) {
							const dialogRef = this.dialogBox.open(DialogBox_Component, {
								panelClass: "Dialogbox-Class",
								data: { Message: "Deactivated", Type: "false" },
							});
							// this.Total_Rows = this.Total_Rows - this.Student_Data.length;
							this.Get_ApplicationDetails();
							if (Number(this.Login_User) != update_status[0][0].To_User_) {
								var message = {
									Student_Name: update_status[0][0].Student_Name_,
									From_User_Name: update_status[0][0].From_User_Name_,
									Notification_Type_Name:
										update_status[0][0].Notification_Type_Name_,
									Entry_Type: update_status[0][0].Entry_Type_,
									To_User: update_status[0][0].To_User_,
									Notification_Id: update_status[0][0].Notification_Id_,
									Student_Id: update_status[0][0].Student_Id_,
								};
								this.socket.emit("new-message", message);
							}
							this.Remove_Activte_Visiblility = false;
							this.Activte_Visiblility = false;

							if (
								this.Remove_Activity_Permissions != undefined &&
								this.Remove_Activity_Permissions != null
							)
								if (this.Activity_Permissions.View == true)
									this.Activte_Visiblility = true;
						} else {
							this.issLoading = false;
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
	Remove_Student_Approval(Application_details_Id, index) {
		//    application_details_id_
		const dialogRef = this.dialogBox.open(DialogBox_Component, {
			panelClass: "Dialogbox-Class",
			data: {
				Message: "Do you want to Remove Student Approval ?",
				Type: true,
				Heading: "Confirm",
			},
		});

		dialogRef.afterClosed().subscribe((result) => {
			if (result == "Yes") {
				this.issLoading = true;
				this.Student_Service_.Remove_Student_Approval(
					Application_details_Id
				).subscribe(
					(update_status) => {
						if (update_status[0][0].Application_details_Id_ > 0) {
							const dialogRef = this.dialogBox.open(DialogBox_Component, {
								panelClass: "Dialogbox-Class",
								data: { Message: "Approval Removed", Type: "false" },
							});
							// this.Total_Rows = this.Total_Rows - this.Student_Data.length;
							this.Get_ApplicationDetails();
							// this.Remove_Activte_Visiblility = false;
							// this.Activte_Visiblility = false;

							// if (
							// 	this.Remove_Activity_Permissions != undefined &&
							// 	this.Remove_Activity_Permissions != null
							// )
							// 	if (this.Activity_Permissions.View == true)
							// 		this.Activte_Visiblility = true;
						} else {
							this.issLoading = false;
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
	Fill_Applicationdetails() {
		
		this.History_View = false;
		this.Data_View= false;
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

		if(this.ApplicationDetails_.Course_Link ==null || this.ApplicationDetails_.Course_Link ==undefined)
		{
			this.ApplicationDetails_.Course_Link="";

		}

		if(this.ApplicationDetails_.Remark ==null || this.ApplicationDetails_.Remark ==undefined)
		{
			this.ApplicationDetails_.Remark="";

		}
		
		// this.ApplicationDetails_.Intake_Year_Id =
		// 	this.Intake_Year_Mode_.Intake_Year_Id;
		// this.ApplicationDetails_.Intake_Year_Name =
		// 	this.Intake_Year_Mode_.Intake_Year_Name;
		// this.ApplicationDetails_.intake_Name = this.Intake_Mode_.Intake_Name;
		// this.ApplicationDetails_.intake_Id = this.Intake_Mode_.Intake_Id;


		this.ApplicationDetails_.Intake_Year_Id =this.selectedIntakeYear.Intake_Year_Id;
		this.ApplicationDetails_.Intake_Year_Name =this.selectedIntakeYear.Intake_Year_Name;
		this.ApplicationDetails_.intake_Name = this.selectedIntakeYear.Intake_Name;
		this.ApplicationDetails_.intake_Id = this.selectedIntakeYear.Intake_Id;


		this.ApplicationDetails_.User_Id = Number(this.Login_User);
		console.log('this.ApplicationDetails_.User_Id: ', this.ApplicationDetails_.User_Id);
		//   this.ApplicationDetails_.Agent_Name=this.Agent_Mode_.Agent_Name;
		this.ApplicationDetails_.Application_Status_Name =
			this.Application_Status_Mode_.Application_Status_Name;
		this.ApplicationDetails_.Application_status_Id =
			this.Application_Status_Mode_.Application_status_Id;
		this.ApplicationDetails_.Student_Id = this.Profile_.Student_Id;
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
	Fill_FeesReceipt() {
		this.Fees_Receipt_.User_Id = Number(this.Login_User);
		this.Fees_Receipt_.Fees_Id = this.Fees_Data_.Fees_Id;

		// this.Fees_Receipt_.Entry_date = this.New_Date(
		// 	new Date(moment(this.Fees_Receipt_.Entry_date).format("YYYY-MM-DD"))
		// );

		if (
			this.Fees_Receipt_.Entry_date == undefined ||
			this.Fees_Receipt_.Entry_date == null ||
			this.Fees_Receipt_.Entry_date == "NaN" ||
			this.Fees_Receipt_.Entry_date == ""
		) {
			this.Fees_Receipt_.Entry_date = "";
		} else
			this.Fees_Receipt_.Entry_date = this.New_Date(
				new Date(moment(this.Fees_Receipt_.Entry_date).format("YYYY-MM-DD"))
			);


		this.Fees_Receipt_.Student_Id = this.Student_Id;

		this.Fees_Receipt_.Student_Name = this.Student_.Student_Name;
		this.Fees_Receipt_.Student_Email = this.Student_.Email;
		this.Fees_Receipt_.To_Account_Id = this.To_Account_.Client_Accounts_Id;
		this.Fees_Receipt_.To_Account_Name = this.To_Account_.Client_Accounts_Name;

		this.Fees_Receipt_.Currency_Id = this.Currency_.Currency_Id;
		this.Fees_Receipt_.Currency = this.Currency_.Currency_Name;

		// this.Fees_Receipt_.Application_details_Id=this.Application_Fees_Course_.Application_details_Id;
		// this.Fees_Receipt_.Application_details_Id=this.Fees_Course_.Application_details_Id;
		// this.Fees_Receipt_.Course_Name=this.Fees_Course_.Course_Name;

		if (this.Fees_Course_ == undefined || this.Fees_Course_ == null) {
			// this.Fees_Receipt_.Course_Id = 0;
			this.Fees_Receipt_.Course_Name = "";
			this.Fees_Receipt_.Application_details_Id = 0;
		} else if (this.Fees_Data_.Fees_Id != 2) {
			this.Fees_Receipt_.Course_Name = "";
			this.Fees_Receipt_.Application_details_Id = 0;
			// this.Fees_Receipt_.Course_Id = this.Fees_Course_.Course_Id;
		} else {
			this.Fees_Receipt_.Course_Name = this.Fees_Course_.Course_Name;
			this.Fees_Receipt_.Application_details_Id =
				this.Fees_Course_.Application_details_Id;
			// this.Fees_Receipt_.Course_Id = this.Fees_Course_.Course_Id;
		}

		// if  (this.Fees_Course_.Course_Id == undefined || this.Fees_Course_.Course_Id == null )
		// {
		// 	// this.Fees_Receipt_.Course_Id = 0;
		// 	this.Fees_Receipt_.Course_Name = '';
		// } else {
		// 	this.Fees_Receipt_.Course_Name = this.Fees_Course_.Course_Name;
		// 	// this.Fees_Receipt_.Course_Id = this.Fees_Course_.Course_Id;
		// }

		return this.Fees_Receipt_;
	}
	Save_ApplicationDetails_Datas() {
		
		if (this.Application_Country_.Country_Id ==null ||
			this.Application_Country_.Country_Id ==undefined ||
			this.Application_Country_ == undefined ||
			this.Application_Country_ == null
		) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Select  Country", Type: "3" },
			});
			return;
		}
		if (this.University_1 == null ||
			this.University_1.University_Id == null || 
			this.University_1.University_Id == undefined || 
			this.University_1 == undefined
			) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Select University", Type: "3" },
			});
			return;
		}

		if (this.Course_ == undefined || this.Course_ == null) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Select Course", Type: "3" },
			});
			return;
		}
		

		// if (
		// 	this.Intake_Year_Mode_ == undefined ||
		// 	this.Intake_Year_Mode_ == null ||
		// 	this.Intake_Year_Mode_.Intake_Year_Id == undefined ||
		// 	this.Intake_Year_Mode_.Intake_Year_Id == 0
		// ) {
		// 	const dialogRef = this.dialogBox.open(DialogBox_Component, {
		// 		panelClass: "Dialogbox-Class",
		// 		data: { Message: "Select Year", Type: "3" },
		// 	});
		// 	return;
		// }

		if (
			this.selectedIntakeYear == undefined ||
			this.selectedIntakeYear == null ||
			this.selectedIntakeYear.Intake_Id == undefined ||
			this.selectedIntakeYear.Intake_Id == 0
		) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Select Intake & Year", Type: "3" },
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

		console.log('Main_Array: ', Main_Array);
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
				this.issLoading = false;
				console.log('Save_status: ', Save_status);
				if (Save_status[0][0].Save_Status === 0) {
					console.log('Save_status[0][0].Save_Status: ', Save_status[0][0].Save_Status);
				
					const dialogRef = this.dialogBox.open(DialogBox_Component, {
						panelClass: "Dialogbox-Class",
						data: { Message: "Contact admin. This user doesn’t have permission in mentor department.", Type: "2" },
					});
					return;
				  }
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
					this.Get_ApplicationDetails();
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

	Save_FeesReceipt() {
		if (
			this.Fees_Data_ == undefined ||
			this.Fees_Data_ == null ||
			this.Fees_Data_.Fees_Id == undefined ||
			this.Fees_Data_.Fees_Id == 0
		) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Select Fees Type", Type: "3" },
			});
			return;
		}
		if (this.Fees_Receipt_.Entry_date == null || this.Fees_Receipt_.Entry_date == undefined || this.Fees_Receipt_.Entry_date == '') {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Choose Receipt Date", Type: "3" },
			});
			return;
		}

		if (this.Fees_Data_.Fees_Id == 2) {
			if (
				this.Fees_Course_ == undefined ||
				this.Fees_Course_ == null || this.Fees_Course_.Course_Id == undefined || this.Fees_Course_.Course_Id == null
				// this.Fees_Course_.Country_Id == undefined ||
				// this.Fees_Course_.Country_Id  == 0
			) {
				const dialogRef = this.dialogBox.open(DialogBox_Component, {
					panelClass: "Dialogbox-Class",
					data: { Message: "Select Course", Type: "3" },
				});
				return;
			}
		}
		if (
			this.Fees_Receipt_.Amount == null ||
			this.Fees_Receipt_.Amount == undefined
		) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Enter Amount", Type: "3" },
			});
			return;
		}


		if (
			this.Currency_ == undefined ||
			this.Currency_ == null ||
			this.Currency_.Currency_Id == undefined ||
			this.Currency_.Currency_Id == 0
		) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Select Currency", Type: "3" },
			});
			return;
		}

		if (
			this.To_Account_ == undefined ||
			this.To_Account_ == null ||
			this.To_Account_.Client_Accounts_Id == undefined ||
			this.To_Account_.Client_Accounts_Id == 0
		) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Select To Account", Type: "3" },
			});
			return;
		}

		// if (
		// 	this.Student_.Email == undefined ||
		// 	this.Student_.Email == null ||
		// 	this.Student_.Email == ""
		// ) {
		// 	const dialogRef = this.dialogBox.open(DialogBox_Component, {
		// 		panelClass: "Dialogbox-Class",
		// 		data: { Message: "Please add mail address", Type: "3" },
		// 	});
		// 	return;
		// }
		var Main_Array = {
			Fees: this.Fill_FeesReceipt(),
		};

		if (this.Save_Call_Status == true) return;
		else this.Save_Call_Status = true;
		this.issLoading = true;
		
		this.Student_Service_.Save_FeesReceipt(
			Main_Array,
			this.FeesreceiptDocument_File_Array,
			this.FeesreceiptDocument_Array,
			this.FeesreceiptDocument_Description,
			this.ImageFile_Feesreceipt,
			this.FeesreceiptDisplay_File_Name_
		).subscribe(
			
			(Save_status) => {
				
				// Number(Save_status[0][0].Fees_Receipt_Id_)>0

				if (Number(Save_status[0][0].Fees_Receipt_Id_) > 0) {
					this.Profile_.Fees_Status=1
					const dialogRef = this.dialogBox.open(DialogBox_Component, {
						panelClass: "Dialogbox-Class",
						data: { Message: "Saved", Type: "false" },
					});
					this.Save_Call_Status = false;

					this.issLoading = false;

					
					// this.Student_Service_.Send_Receipt_Sms_Email(
					// 	Save_status[0][0].Phone_,
					// 	Save_status[0][0].Email_,
					// 	Save_status[0][0].Student_Name_,
					// 	Save_status[0][0].Amount_,
					// 	Save_status[0][0].Entry_date_,
					// 	Save_status[0][0].Amount_,
					// ).subscribe(
					// 	(Rows) => {
					// 		
					// 		this.issLoading = false;
					// 		const dialogRef = this.dialogBox.open(DialogBox_Component, {
					// 			panelClass: "Dialogbox-Class",
					// 			data: { Message: "Mail Sent", Type: "false" },
					// 		});
					// 	}
					// );



					this.clr_receipt();
					this.Search_Receipt();
					this.Close_Fees();
					//this.Search_Student();
					this.Search_Lead_button();
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

	Edit_Fees(Fees_Receipt_e: any, index) {
		this.View_Student_ = true;
		this.View_Follow_ = false;
		this.Lead_EditIndex = index;
		this.Entry_View = true;
		this.profile_View = true;
		this.Martialdetails_view = true;
		this.Statistics_View = true;
		this.tab_view = true;
		this.application_details_View = false;
		this.Qualification_details_View = false;
		this.language_details_View = false;
		this.course_history_View = false;
		this.Checklist_View = false;
		this.View_document = false;
		this.Course_View = false;
		this.Fee_Collection_View = false;
		this.message_View = false;
		this.View_History_ = false;
		if (this.Document_View_Status == true) this.Document_View_Option = true;

		this.Create_Fees();
		this.Student_Service_.Get_Fees_Receipt(
			Fees_Receipt_e.Fees_Receipt_Id
		).subscribe(
			(Rows) => {
				this.Fees_Receipt_ = Object.assign({}, Rows[0][0]);

				// if (this.Fees_Receipt_.Entry_date == null) {
				// 	this.Fees_Receipt_.Entry_date = new Date();
				// 	this.Fees_Receipt_.Entry_date = this.New_Date(
				// 		this.Fees_Receipt_.Entry_date
				// 	);
				// } else
				// 	this.Fees_Receipt_.Entry_date = this.New_Date(
				// 		new Date(moment(this.Fees_Receipt_.Entry_date).format("YYYY-MM-DD"))
				// 	);

				// this.Get_Feesrecepit_DocumentList(this.Fees_Receipt_.Fees_Receipt_Id)

				// this.Get_Fees_Receipt(this.Receipt_data_.Fees_Receipt_Id);
				for (var i = 0; i < this.Fees_Array.length; i++) {
					if (this.Fees_Receipt_.Fees_Id == this.Fees_Array[i].Fees_Id)
						this.Fees_Data_ = this.Fees_Array[i];
				}

				this.FeesreceiptDocument_Array = Rows[1];
				this.FeesreceiptDocument_File_Array = [];
				for (var i = 0; i < this.FeesreceiptDocument_Array.length; i++)
					this.FeesreceiptDocument_File_Array.push("");

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

	clr_Visa_Tab() {
		this.Visa_Document_File_Array = [];
		this.Visa_Document_Array = [];
		this.ImageFile_Visa = [];
		this.Visa_.Visa_Id = 0;
		this.Visa_.Application_No = "";
		this.Visa_.Total_Fees = 0;
		this.Visa_.Scholarship_Fees = 0;
		this.Visa_.Balance_Fees = 0;
		this.Visa_.Paid_Fees = 0;
		if (this.paidfees == 0) this.paidfees = 0;

		this.Visa_.Description = "";

		this.Visa_.Username = "";
		this.Visa_.Password = "";
		this.Visa_.Security_Question = "";

		this.Visa_.Visa_Type_Name = "";
		if (this.Visa_Type_Data != null && this.Visa_Type_Data != undefined)
			this.Visa_Type_ = this.Visa_Type_Data[0];

		this.Visa_.Approved_Date = new Date();
		this.Visa_.Approved_Date = this.New_Date(
			new Date(moment(this.Visa_.Approved_Date).format("YYYY-MM-DD"))
		);

		this.Visa_.Approved_Date_L = new Date();
		this.Visa_.Approved_Date_L = this.New_Date(
			new Date(moment(this.Visa_.Approved_Date_L).format("YYYY-MM-DD"))
		);

		this.Visa_.Approved_Date_F = new Date();
		this.Visa_.Approved_Date_F = this.New_Date(
			new Date(moment(this.Visa_.Approved_Date_F).format("YYYY-MM-DD"))
		);

		this.Visa_.Visa_Rejected_Date = new Date();
		this.Visa_.Visa_Rejected_Date = this.New_Date(
			this.Visa_.Visa_Rejected_Date
		);
		this.Visa_.ATIP_Submitted_Date = new Date();
		this.Visa_.ATIP_Submitted_Date = this.New_Date(
			this.Visa_.ATIP_Submitted_Date
		);
		this.Visa_.ATIP_Received_Date = new Date();
		this.Visa_.ATIP_Received_Date = this.New_Date(
			this.Visa_.ATIP_Received_Date
		);
		this.Visa_.Visa_Re_Submitted_Date = new Date();
		this.Visa_.Visa_Re_Submitted_Date = this.New_Date(
			this.Visa_.Visa_Re_Submitted_Date
		);

		this.Visa_.Visa_Granted = false;
		this.Visa_.Visa_Letter = false;
		this.Visa_.Visa_File = false;
		this.Visa_Document_Description = "";

		this.Visa_Document_Array = [];
		// this.Visa_Data = [];
		this.Visa_Document_.Visa_Document_File_Name = "";
		this.Visa_Document_.Visa_Document_Name = "";
		this.Display_VisaFile_ = "";
		//this.Visa_Document_.New_Entry=0;
	}
	Save_Visa() {
		if (
			this.Visa_.Application_No == null ||
			this.Visa_.Application_No == undefined ||
			this.Visa_.Application_No == ""
		) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Enter Application No", Type: "3" },
			});
			return;
		}
		if (this.Visa_.Visa_Letter == true && this.Visa_.Approved_Date_L == null) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Choose Visa submitted Date", Type: "3" },
			});
			return;
		}
		if (this.Visa_.Visa_File == true && this.Visa_.Approved_Date_F == null) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Choose Biometric Date", Type: "3" },
			});
			return;
		}

		if (this.Visa_.Visa_Granted == true && this.Visa_.Approved_Date == null) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Choose Visa Granted Date", Type: "3" },
			});
			return;
		}
		if (
			this.Visa_.Visa_Rejected == true &&
			this.Visa_.Visa_Rejected_Date == null
		) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Choose Visa Rejected Date", Type: "3" },
			});
			return;
		}
		if (
			this.Visa_.ATIP_Submitted == true &&
			this.Visa_.ATIP_Submitted_Date == null
		) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Choose ATIP Submitted Date", Type: "3" },
			});
			return;
		}

		if (
			this.Visa_.ATIP_Received == true &&
			this.Visa_.ATIP_Received_Date == null
		) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Choose ATIP Received Date", Type: "3" },
			});
			return;
		}
		if (
			this.Visa_.Visa_Re_Submitted == true &&
			this.Visa_.Visa_Re_Submitted_Date == null
		) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Choose Visa Re-Submitted Date", Type: "3" },
			});
			return;
		}
		var Visa_Granted_Status = 0;
		if (Boolean(this.Visa_.Visa_Granted) == true) Visa_Granted_Status = 1;

		var Visa_Letter_Status = 0;
		if (Boolean(this.Visa_.Visa_Letter) == true) Visa_Letter_Status = 1;

		var Visa_File_Status = 0;
		if (Boolean(this.Visa_.Visa_File) == true) Visa_File_Status = 1;

		this.Visa_.Approved_Date = this.New_Date(
			new Date(moment(this.Visa_.Approved_Date).format("YYYY-MM-DD"))
		);
		this.Visa_.Approved_Date_L = this.New_Date(
			new Date(moment(this.Visa_.Approved_Date_L).format("YYYY-MM-DD"))
		);
		this.Visa_.Approved_Date_F = this.New_Date(
			new Date(moment(this.Visa_.Approved_Date_F).format("YYYY-MM-DD"))
		);

		var Visa_Rejected_status = 0;
		if (Boolean(this.Visa_.Visa_Rejected) == true) Visa_Rejected_status = 1;

		this.Visa_.Visa_Rejected_Date = this.New_Date(
			new Date(moment(this.Visa_.Visa_Rejected_Date).format("YYYY-MM-DD"))
		);

		var ATIP_Submitted_status = 0;
		if (Boolean(this.Visa_.ATIP_Submitted) == true) ATIP_Submitted_status = 1;

		this.Visa_.ATIP_Submitted_Date = this.New_Date(
			new Date(moment(this.Visa_.ATIP_Submitted_Date).format("YYYY-MM-DD"))
		);

		var ATIP_Received_status = 0;
		if (Boolean(this.Visa_.ATIP_Received) == true) ATIP_Received_status = 1;

		this.Visa_.ATIP_Received_Date = this.New_Date(
			new Date(moment(this.Visa_.ATIP_Received_Date).format("YYYY-MM-DD"))
		);

		var Visa_Re_Submitted_status = 0;
		if (Boolean(this.Visa_.Visa_Re_Submitted) == true)
			Visa_Re_Submitted_status = 1;

		this.Visa_.Visa_Re_Submitted_Date = this.New_Date(
			new Date(moment(this.Visa_.Visa_Re_Submitted_Date).format("YYYY-MM-DD"))
		);
		// else
		// if (Boolean(this.Visa_.Visa_Granted) == false )
		this.Visa_.Student_Id = this.Profile_.Student_Id;

		this.Visa_.Visa_Type_Id = this.Visa_Type_.Visa_Type_Id;
		this.Visa_.Visa_Type_Name = this.Visa_Type_.Visa_Type_Name;

		if (this.Save_Call_Status == true) return;
		else this.Save_Call_Status = true;
		this.issLoading = true;

		this.Student_Service_.Save_Visa(
			this.Visa_,
			this.Visa_Document_File_Array,
			this.Visa_Document_Array,
			this.Visa_Document_Description,
			this.ImageFile_Visa,
			this.Display_VisaFile_
		).subscribe(
			(Save_status) => {
				if (Number(Save_status[0][0].Visa_Id_) > 0) {
					const dialogRef = this.dialogBox.open(DialogBox_Component, {
						panelClass: "Dialogbox-Class",
						data: { Message: "Saved", Type: "false" },
					});
					this.Save_Call_Status = false;
					this.clr_Visa_Tab();
					this.Get_Visa_Details();
					this.Close_Visa();
					this.issLoading = false;
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
	File_Change_Visa(event: Event) {
		const file = (event.target as HTMLInputElement).files;
		this.ImageFile_Visa = file;
		this.Display_VisaFile_ = this.ImageFile_Visa[0].name;
		this.Visa_Document_File.Visa_Document_Name = "";
		this.Visa_Document_File.Visa_Document_File_Name = "";
	}
	Add_Visa_Document() {
		if (
			this.Visa_Document_Array == null ||
			this.Visa_Document_Array == undefined
		)
			this.Visa_Document_Array = [];
		if (
			this.Visa_Document_File_Array == null ||
			this.Visa_Document_File_Array == undefined
		)
			this.Visa_Document_File_Array = [];

		// this.Document_Array.push(this.Document_Description)
		this.Visa_Document_.Visa_Document_Name = this.Visa_Document_Description;
		this.Visa_Document_.Visa_Document_File_Name = this.Display_VisaFile_;
		this.Visa_Document_.New_Entry = 1;

		if (
			this.ImageFile_Visa != null &&
			this.ImageFile_Visa != undefined &&
			this.ImageFile_Visa != ""
		) {
			this.Visa_Document_.Visa_Document_File_Name = this.ImageFile_Visa[0].name;
			this.Visa_Document_Array.push(Object.assign({}, this.Visa_Document_));
			this.Visa_Document_File_Array.push(this.ImageFile_Visa[0]);
			this.Visa_Document_Description = "";
			this.Display_VisaFile_ = "";
			this.ImageFile_Visa = null;
		} else {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Select File", Type: "3" },
			});
			return;
		}
	}
	Get_Visa_Details() {
		this.issLoading = true;
		this.Student_Service_.Get_Visa_Details(this.Profile_.Student_Id).subscribe(
			(Rows) => {
				this.Visa_Data = Rows[0];
				//  if(this.Visa_Data.length==1)
				//  {
				//     this.Edit_Visa(this.Visa_Data[0],0);
				//  }
				this.issLoading = false;
			},
			(Rows) => {
				this.issLoading = false;
			}
		);
	}

	Edit_Visa(Visa_e: Visa, index) {
		//console.log(Visa_e);
		//this.Create_Visa();

		this.Visa_View = false;
		this.Visamodal_View = true;
		this.Visa_ = Object.assign({}, Visa_e);

		if (this.Visa_.Visa_GrantedCheck_Box.toString() == "1")
			this.Visa_.Visa_Granted = true;
		else this.Visa_.Visa_Granted = false;
		if (this.Visa_.Approved_Date == null) {
			this.Visa_.Approved_Date = new Date();
			this.Visa_.Approved_Date = this.New_Date(this.Visa_.Approved_Date);
		} else
			this.Visa_.Approved_Date = this.New_Date(
				new Date(moment(this.Visa_.Approved_Date).format("YYYY-MM-DD"))
			);

		if (this.Visa_.Visa_Letter.toString() == "1") this.Visa_.Visa_Letter = true;
		else this.Visa_.Visa_Letter = false;
		if (this.Visa_.Approved_Date_L == null) {
			this.Visa_.Approved_Date_L = new Date();
			this.Visa_.Approved_Date_L = this.New_Date(this.Visa_.Approved_Date_L);
		} else
			this.Visa_.Approved_Date_L = this.New_Date(
				new Date(moment(this.Visa_.Approved_Date_L).format("YYYY-MM-DD"))
			);

		if (this.Visa_.Visa_File.toString() == "1") this.Visa_.Visa_File = true;
		else this.Visa_.Visa_File = false;
		if (this.Visa_.Approved_Date_F == null) {
			this.Visa_.Approved_Date_F = new Date();
			this.Visa_.Approved_Date_F = this.New_Date(this.Visa_.Approved_Date_F);
		} else
			this.Visa_.Approved_Date_F = this.New_Date(
				new Date(moment(this.Visa_.Approved_Date_F).format("YYYY-MM-DD"))
			);

		if (this.Visa_.Visa_Rejected.toString() == "1")
			this.Visa_.Visa_Rejected = true;
		else this.Visa_.Visa_Rejected = false;
		if (this.Visa_.Visa_Rejected_Date == null) {
			this.Visa_.Visa_Rejected_Date = new Date();
			this.Visa_.Visa_Rejected_Date = this.New_Date(
				this.Visa_.Visa_Rejected_Date
			);
		} else
			this.Visa_.Visa_Rejected_Date = this.New_Date(
				new Date(moment(this.Visa_.Visa_Rejected_Date).format("YYYY-MM-DD"))
			);

		if (this.Visa_.ATIP_Submitted.toString() == "1")
			this.Visa_.ATIP_Submitted = true;
		else this.Visa_.ATIP_Submitted = false;
		if (this.Visa_.ATIP_Submitted_Date == null) {
			this.Visa_.ATIP_Submitted_Date = new Date();
			this.Visa_.ATIP_Submitted_Date = this.New_Date(
				this.Visa_.ATIP_Submitted_Date
			);
		} else
			this.Visa_.ATIP_Submitted_Date = this.New_Date(
				new Date(moment(this.Visa_.ATIP_Submitted_Date).format("YYYY-MM-DD"))
			);

		if (this.Visa_.ATIP_Received.toString() == "1")
			this.Visa_.ATIP_Received = true;
		else this.Visa_.ATIP_Received = false;
		if (this.Visa_.ATIP_Received_Date == null) {
			this.Visa_.ATIP_Received_Date = new Date();
			this.Visa_.ATIP_Received_Date = this.New_Date(
				this.Visa_.ATIP_Received_Date
			);
		} else
			this.Visa_.ATIP_Received_Date = this.New_Date(
				new Date(moment(this.Visa_.ATIP_Received_Date).format("YYYY-MM-DD"))
			);

		if (this.Visa_.Visa_Re_Submitted.toString() == "1")
			this.Visa_.Visa_Re_Submitted = true;
		else this.Visa_.Visa_Re_Submitted = false;
		if (this.Visa_.Visa_Re_Submitted_Date == null) {
			this.Visa_.Visa_Re_Submitted_Date = new Date();
			this.Visa_.Visa_Re_Submitted_Date = this.New_Date(
				this.Visa_.Visa_Re_Submitted_Date
			);
		} else
			this.Visa_.Visa_Re_Submitted_Date = this.New_Date(
				new Date(moment(this.Visa_.Visa_Re_Submitted_Date).format("YYYY-MM-DD"))
			);

		// if (this.Visa_.Check_Box.toString()=='1')
		// this.Visa_.Visa_Letter=true;
		// else
		// this.Visa_.Visa_Letter=false;
		// if(this.Visa_.Approved_Date_F==null)
		// {
		//     this.Visa_.Approved_Date_F=new Date();
		//     this.Visa_.Approved_Date_F=this.New_Date(this.Visa_.Approved_Date_F);
		// }
		// else
		//         this.Visa_.Approved_Date_F= this.New_Date(new Date(moment(this.Visa_.Approved_Date_F).format('YYYY-MM-DD')));

		for (var i = 0; i < this.Visa_Type_Data.length; i++) {
			if (this.Visa_.Visa_Type_Id == this.Visa_Type_Data[i].Visa_Type_Id)
				this.Visa_Type_ = this.Visa_Type_Data[i];
		}

		this.Get_Visa_Documents(this.Visa_.Visa_Id);
		//  for (var i = 0; i < this.Fees_Array.length; i++)a_
		//         {
		//         if (this.Fees_Receipt_.Fees_Id== this.Fees_Array[i].Fees_Id)
		//         this.Fees_Data_=this.Fees_Array[i];
		//         }
	}
	Get_Visa_Documents(Visa_Id) {
		this.issLoading = true;
		this.Student_Service_.Get_Visa_Documents(Visa_Id).subscribe(
			(Rows) => {
				this.Visa_Document_Array = Rows[0];
				this.Visa_Document_File_Array = [];
				for (var i = 0; i < this.Visa_Document_Array.length; i++)
					this.Visa_Document_File_Array.push("");
				this.issLoading = false;
			},
			(Rows) => {
				this.issLoading = false;
			}
		);
	}
	Delete_Visa_Document(index, Visa_Document_Id) {
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

				if (Visa_Document_Id > 0) {
					this.Student_Service_.Delete_Visa_Document(
						Visa_Document_Id
					).subscribe(
						(Delete_status) => {
							if (Number(Delete_status[0][0].Visa_Document_Id_) > 0) {
								this.Visa_Document_Array.splice(index, 1);
								this.Visa_Document_File_Array.splice(index, 1);
								const dialogRef = this.dialogBox.open(DialogBox_Component, {
									panelClass: "Dialogbox-Class",
									data: { Message: "Deleted", Type: "false" },
								});
								// this.Get_Visa_Documents();
							} else {
								this.issLoading = false;
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
				} else {
					this.Visa_Document_Array.splice(index, 1);
					this.Visa_Document_File_Array.splice(index, 1);
					this.issLoading = false;
					const dialogRef = this.dialogBox.open(DialogBox_Component, {
						panelClass: "Dialogbox-Class",
						data: { Message: "Deleted", Type: "false" },
					});
				}
			}
		});
	}
	Delete_Visa(Visa_Id, index) {
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

				this.Student_Service_.Delete_Visa(Visa_Id).subscribe(
					(Delete_status) => {
						if (Delete_status[0][0].Visa_Id_ > 0) {
							const dialogRef = this.dialogBox.open(DialogBox_Component, {
								panelClass: "Dialogbox-Class",
								data: { Message: "Deleted", Type: "false" },
							});
							this.Get_Visa_Details();
						} else {
							this.issLoading = false;
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
	clr_Invoice_Tab() {
		this.Invoice_Document_File_Array = [];
		this.Invoice_.Invoice_Id = 0;
		this.Invoice_.Description = "";
		this.Invoice_.Entry_Date = new Date();
		this.Invoice_.Entry_Date = this.New_Date(
			new Date(moment(this.Invoice_.Entry_Date).format("YYYY-MM-DD"))
		);
		this.Invoice_.Amount = 0;
		this.Invoice_Document_Array = [];
		// this.Invoice_Data = [];
		this.Invoice_Document_.Invoice_Document_File_Name = "";
		this.Invoice_Document_.Invoice_Document_Name = "";
		this.Display_InvoiceFile_ = "";
	}

	Save_Invoice() {
		if (
			this.Invoice_.Amount == null ||
			this.Invoice_.Amount == undefined ||
			this.Invoice_.Amount == 0
		) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Enter Amount", Type: "3" },
			});
			return;
		}
		// var Visa_Granted_Status = 0;
		// if (Boolean(this.Visa_.Visa_Granted) == true )
		//     Visa_Granted_Status = 1;
		this.Invoice_.Entry_Date = this.New_Date(
			new Date(moment(this.Invoice_.Entry_Date).format("YYYY-MM-DD"))
		);
		this.Invoice_.Student_Id = this.Student_.Student_Id;

		if (this.Save_Call_Status == true) return;
		else this.Save_Call_Status = true;
		this.issLoading = true;

		this.Student_Service_.Save_Invoice(
			this.Invoice_,
			this.Invoice_Document_File_Array,
			this.Invoice_Document_Array,
			this.Invoice_Document_Description,
			this.ImageFile_Invoice,
			this.Display_InvoiceFile_
		).subscribe(
			(Save_status) => {
				if (Number(Save_status[0][0].Invoice_Id_) > 0) {
					const dialogRef = this.dialogBox.open(DialogBox_Component, {
						panelClass: "Dialogbox-Class",
						data: { Message: "Saved", Type: "false" },
					});
					this.Save_Call_Status = false;
					this.clr_Invoice_Tab();
					this.Get_Invoice_Details();
					this.issLoading = false;
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
	File_Change_Invoice(event: Event) {
		const file = (event.target as HTMLInputElement).files;
		this.ImageFile_Invoice = file;
		this.Display_InvoiceFile_ = this.ImageFile_Invoice[0].name;
		this.Invoice_Document_File.Invoice_Document_File_Name = "";
		this.Invoice_Document_File.Invoice_Document_File_Name = "";
	}
	Add_Invoice_Document() {
		if (
			this.Invoice_Document_Array == null ||
			this.Invoice_Document_Array == undefined
		)
			this.Invoice_Document_Array = [];
		if (
			this.Invoice_Document_File_Array == null ||
			this.Invoice_Document_File_Array == undefined
		)
			this.Invoice_Document_File_Array = [];

		// this.Document_Array.push(this.Document_Description)
		this.Invoice_Document_.Invoice_Document_Name =
			this.Invoice_Document_Description;
		this.Invoice_Document_.Invoice_Document_File_Name =
			this.Display_InvoiceFile_;
		this.Invoice_Document_.New_Entry = 1;

		if (
			this.ImageFile_Invoice != null &&
			this.ImageFile_Invoice != undefined &&
			this.ImageFile_Invoice != ""
		) {
			this.Invoice_Document_.Invoice_Document_File_Name =
				this.ImageFile_Invoice[0].name;
			this.Invoice_Document_Array.push(
				Object.assign({}, this.Invoice_Document_)
			);
			this.Invoice_Document_File_Array.push(this.ImageFile_Invoice[0]);
			this.Invoice_Document_Description = "";
			this.Display_InvoiceFile_ = "";
			this.ImageFile_Invoice = null;
		} else {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Select File", Type: "3" },
			});
			return;
		}
	}
	Get_Invoice_Details() {
		this.issLoading = true;
		this.Student_Service_.Get_Invoice_Details(
			this.Student_.Student_Id
		).subscribe(
			(Rows) => {
				this.Invoice_Data = Rows[0];
				this.issLoading = false;
			},
			(Rows) => {
				this.issLoading = false;
			}
		);
	}

	Edit_Invoice(Invoice_e: Invoice, index) {
		this.Create_Invoice();
		this.Invoice_ = Object.assign({}, Invoice_e);

		if (this.Visa_.Approved_Date == null) {
			this.Visa_.Approved_Date = new Date();
			this.Visa_.Approved_Date = this.New_Date(this.Visa_.Approved_Date);
		} else
			this.Visa_.Approved_Date = this.New_Date(
				new Date(moment(this.Visa_.Approved_Date).format("YYYY-MM-DD"))
			);

		this.Get_Invoice_Documents(this.Invoice_.Invoice_Id);
		//  for (var i = 0; i < this.Fees_Array.length; i++)
		//         {
		//         if (this.Fees_Receipt_.Fees_Id== this.Fees_Array[i].Fees_Id)
		//         this.Fees_Data_=this.Fees_Array[i];
		//         }
	}
	Get_Invoice_Documents(Invoice_Id) {
		this.issLoading = true;
		this.Student_Service_.Get_Invoice_Documents(Invoice_Id).subscribe(
			(Rows) => {
				this.Invoice_Document_Array = Rows[0];
				this.Invoice_Document_File_Array = [];
				for (var i = 0; i < this.Invoice_Document_Array.length; i++)
					this.Invoice_Document_File_Array.push("");
				this.issLoading = false;
			},
			(Rows) => {
				this.issLoading = false;
			}
		);
	}
	Delete_Invoice_Document(index, Invoice_Document_Id) {
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

				if (Invoice_Document_Id > 0) {
					this.Student_Service_.Delete_Invoice_Document(
						Invoice_Document_Id
					).subscribe(
						(Delete_status) => {
							if (Number(Delete_status[0][0].Invoice_Document_Id_) > 0) {
								this.Invoice_Document_Array.splice(index, 1);
								this.Invoice_Document_File_Array.splice(index, 1);
								const dialogRef = this.dialogBox.open(DialogBox_Component, {
									panelClass: "Dialogbox-Class",
									data: { Message: "Deleted", Type: "false" },
								});
								// this.Get_Visa_Documents();
							} else {
								this.issLoading = false;
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
				} else {
					this.Invoice_Document_Array.splice(index, 1);
					this.Invoice_Document_File_Array.splice(index, 1);
					this.issLoading = false;
					const dialogRef = this.dialogBox.open(DialogBox_Component, {
						panelClass: "Dialogbox-Class",
						data: { Message: "Deleted", Type: "false" },
					});
				}
			}
		});
	}
	Delete_Invoice(Invoice_Id, index) {
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

				this.Student_Service_.Delete_Invoice(Invoice_Id).subscribe(
					(Delete_status) => {
						if (Delete_status[0][0].Invoice_Id_ > 0) {
							const dialogRef = this.dialogBox.open(DialogBox_Component, {
								panelClass: "Dialogbox-Class",
								data: { Message: "Deleted", Type: "false" },
							});
							this.Get_Invoice_Details();
						} else {
							this.issLoading = false;
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

	Calculate_Balance_Fees() {
		var totalfees = 0,
			scholarshipfees = 0,
			balancefees = 0;
		if (this.Visa_.Total_Fees == undefined || this.Visa_.Total_Fees == null)
			this.Visa_.Total_Fees = 0;
		else totalfees = this.Visa_.Total_Fees;
		if (
			this.Visa_.Scholarship_Fees == undefined ||
			this.Visa_.Scholarship_Fees == null
		)
			this.Visa_.Scholarship_Fees = 0;
		else scholarshipfees = this.Visa_.Scholarship_Fees;
		balancefees = Number(totalfees) - Number(scholarshipfees);
		this.Visa_.Balance_Fees = Number(balancefees.toFixed(2));
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

	Plus_Course_Fees(event) {
		// if (this.Fees_Type.Fees_Type_Id == undefined || this.Fees_Type.Fees_Type_Id == null || this.Fees_Type.Fees_Type_Id == 0 || this.Fees_Type==null )
		// {
		//     const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message:'Select Fees ',Type:"3"}});
		//     return
		// }
		// else if (this.Course_Fees.Amount == undefined || this.Course_Fees.Amount == null || this.Course_Fees.Amount==0 )
		// {
		//     const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message:'Enter the Amount',Type:"3"}});
		//     return
		// }
		// else if (this.Course_Fees.Tax == undefined || this.Course_Fees.Tax == null)
		// {
		//     const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message:'Enter the Tax',Type:"3"}});
		//     return
		// }

		// else if (this.Course_Fees.Instalment_Period == undefined || this.Course_Fees.Instalment_Period == null  )
		// {
		//     const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message:'Enter the Instalment Period',Type:"3"}});
		//     return
		// }

		if (this.Course_Fees_Data == undefined) this.Course_Fees_Data = [];
		//this.Course_Fees.Visa_Id = this.Fees_Type.Fees_Type_Id
		//this.Course_Fees.Visa_Type_Name = this.Fees_Type.Fees_Type_Name

		if (this.Course_Fees_Index >= 0) {
			this.Course_Fees_Data[this.Course_Fees_Index] = Object.assign(
				{},
				this.Course_Fees
			); // this.Sales_Details_;
		} else {
			this.Course_Fees_Data.push(Object.assign({}, this.Course_Fees));
		}
		this.Course_Fees_Index = -1;
		//this.Clr_Course_Fees();
	}
	Save_Qualification() {
		if (
			this.Qualification_.Credential === undefined ||
			this.Qualification_.Credential == null ||
			this.Qualification_.Credential == ""
		) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Enter Class/Level ", Type: "3" },
			});
			return;
		}
		if (
			this.Qualification_.Field === undefined ||
			this.Qualification_.Field == null ||
			this.Qualification_.Field == ""
		) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Enter Field ", Type: "3" },
			});
			return;
		}
		if (
			this.Qualification_.school === undefined ||
			this.Qualification_.school == null ||
			this.Qualification_.school == ""
		) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Enter Board/University ", Type: "3" },
			});
			return;
		}
		if (
			this.Qualification_.Fromyear === undefined ||
			this.Qualification_.Fromyear == null ||
			this.Qualification_.Fromyear == ""
		) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Enter From Year ", Type: "3" },
			});
			return;
		}
		if (
			this.Qualification_.Toyear === undefined ||
			this.Qualification_.Toyear == null ||
			this.Qualification_.Toyear == ""
		) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Enter To Year ", Type: "3" },
			});
			return;
		}
		if (
			this.Qualification_.MarkPer === undefined ||
			this.Qualification_.MarkPer == null ||
			this.Qualification_.MarkPer == ""
		) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Enter Percentage(%) ", Type: "3" },
			});
			return;
		}
		if (
			this.Qualification_.Backlog_History === undefined ||
			this.Qualification_.Backlog_History == null ||
			this.Qualification_.Backlog_History == ""
		) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Enter Backlog History ", Type: "3" },
			});
			return;
		}
		if (
			this.Qualification_.Year_of_passing === undefined ||
			this.Qualification_.Year_of_passing == null ||
			this.Qualification_.Year_of_passing == ""
		) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Enter Year of Passing ", Type: "3" },
			});
			return;
		}
		if (
			this.Qualification_.result === undefined ||
			this.Qualification_.result == null ||
			this.Qualification_.result == ""
		) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Enter Result ", Type: "3" },
			});
			return;
		}

		this.Qualification_.Student_id = this.Profile_.Student_Id;
		if (this.Save_Call_Status == true) return;
		else this.Save_Call_Status = true;
		this.issLoading = true;
		this.Student_Service_.Save_Qualification(this.Qualification_).subscribe(
			(Save_Qualification) => {
				Save_Qualification = Save_Qualification[0];
				if (Number(Save_Qualification[0].Qualification_Id_) > 0) {
					this.Save_Call_Status = false;
					const dialogRef = this.dialogBox.open(DialogBox_Component, {
						panelClass: "Dialogbox-Class",
						data: { Message: "Saved", Type: "false" },
					});
					this.Get_QualificationDetails(Save_Qualification[0].Student_id_);
					this.Clr_Qualification();
					this.Close_qualificationandWorkexperience();
					//this.Close_NewQualification();
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

	Save_work_experience() {
		if (
			this.Work_experience_.Company === undefined ||
			this.Work_experience_.Company == null ||
			this.Work_experience_.Company == ""
		) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Enter Company ", Type: "3" },
			});
			return;
		}
		if (
			this.Work_experience_.Designation === undefined ||
			this.Work_experience_.Designation == null ||
			this.Work_experience_.Designation == ""
		) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Enter Designation ", Type: "3" },
			});
			return;
		}
		
		// if (
		// 	this.Work_experience_.Salary_Mode === undefined ||
		// 	this.Work_experience_.Salary_Mode == null ||
		// 	this.Work_experience_.Salary_Mode == ""
		// ) {
		// 	const dialogRef = this.dialogBox.open(DialogBox_Component, {
		// 		panelClass: "Dialogbox-Class",
		// 		data: { Message: "Enter Salary Mode ", Type: "3" },
		// 	});
		// 	return;
		// }
		if (
			this.Work_experience_.Ex_From === undefined ||
			this.Work_experience_.Ex_From == null ||
			this.Work_experience_.Ex_From == ""
		) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Enter From Year ", Type: "3" },
			});
			return;
		}
		if (
			this.Work_experience_.Ex_To === undefined ||
			this.Work_experience_.Ex_To == null ||
			this.Work_experience_.Ex_To == ""
		) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Enter To Year ", Type: "3" },
			});
			return;
		}

		if (
			this.Work_experience_.Salary === undefined ||
			this.Work_experience_.Salary == null ||
			this.Work_experience_.Salary == ""
		) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Enter Salary(Monthly)", Type: "3" },
			});
			return;
		}
		this.Work_experience_.Student_Id = this.Profile_.Student_Id;
		if (this.Save_Call_Status == true) return;
		else this.Save_Call_Status = true;
		this.issLoading = true;
		this.Student_Service_.Save_work_experience(this.Work_experience_).subscribe(
			(Save_work_experience) => {
				Save_work_experience = Save_work_experience[0];
				if (Number(Save_work_experience[0].Work_Experience_Id_) > 0) {
					this.Save_Call_Status = false;
					const dialogRef = this.dialogBox.open(DialogBox_Component, {
						panelClass: "Dialogbox-Class",
						data: { Message: "Saved", Type: "false" },
					});
					this.Get_WorkexperienceDetails(Save_work_experience[0].Student_Id_);
					this.Clr_work_experience();
					this.Close_qualificationandWorkexperience();
					//this.Close_NewQualification();
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

	Save_Ielts_Details() {
		if (
			this.IELTS_Type_ == undefined ||
			this.IELTS_Type_ == null ||
			this.IELTS_Type_.Ielts_Type == undefined ||
			this.IELTS_Type_.Ielts_Type == 0
		) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Select Exam", Type: "3" },
			});
			return;
		}

		if (
			this.Ielts_Details_.Exam_Check == true &&
			this.Ielts_Details_.Exam_Date == null
		) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Choose Exam Date", Type: "3" },
			});
			return;
		}

		if (
			this.Ielts_Details_.Exam_Date == undefined ||
			this.Ielts_Details_.Exam_Date == null ||
			this.Ielts_Details_.Exam_Date == "NaN" ||
			this.Ielts_Details_.Exam_Date == ""
		) {
			this.Ielts_Details_.Exam_Date = "";
		} else
			this.Ielts_Details_.Exam_Date = this.New_Date(
				new Date(moment(this.Ielts_Details_.Exam_Date).format("YYYY-MM-DD"))
			);

		// this.Ielts_Details_.Exam_Date = this.New_Date(
		// 	new Date(moment(this.Ielts_Details_.Exam_Date).format("YYYY-MM-DD"))
		// );

		this.Ielts_Details_.Student_Id = this.Profile_.Student_Id;
		this.Ielts_Details_.Ielts_Type = this.IELTS_Type_.Ielts_Type;
		this.Ielts_Details_.Ielts_Type_Name = this.IELTS_Type_.Ielts_Type_Name;
		this.issLoading = true;

		this.Student_Service_.Save_Ielts_Details(this.Ielts_Details_).subscribe(
			(Save_Ielts_Details) => {
				
				Save_Ielts_Details = Save_Ielts_Details[0];
				if (Number(Save_Ielts_Details[0].Ielts_Details_Id_) > 0) {
					const dialogRef = this.dialogBox.open(DialogBox_Component, {
						panelClass: "Dialogbox-Class",
						data: { Message: "Saved", Type: "false" },
					});
					this.Get_Ielts_Details(this.Profile_.Student_Id);
					this.Clr_Ielts_Details();
					this.Close_Language();
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

	Edit_Qualification(Qualification_e: Qualification, index) {
		//this.Entry_View=true;
		this.Qualificationnew_View = true;
		this.Qualificationmodal_View = false;
		this.Qualification_ = Qualification_e;
		this.Qualification_ = Object.assign({}, Qualification_e);
	}

	Edit_Refund_Request(Refund_Request_e: Refund_Request, index) {
		//this.Entry_View=true;
		this.Refund_Request_ = Refund_Request_e;
		this.Refund_Request_ = Object.assign({}, Refund_Request_e);
	}

	// Edit_Pre_Visa(Student_Checklist_Master_Id,index)
	// {

	//
	// this.Pre_Visamodal_View=true;
	// this.Pre_Visa_View=false;

	// this.Get_Previsa_Details_Edit(Student_Checklist_Master_Id);

	// }
	Edit_Pre_Visa(pre_visa_e: Pre_Visa, index) {
		this.Pre_Visachecklistmodal_View = true;
		this.Pre_Visa_Checklist_View = false;
		this.Previsa_ = pre_visa_e;
		this.Previsa_ = Object.assign({}, pre_visa_e);
		this.Get_Previsa_Details_Edit(this.Previsa_.Student_Checklist_Master_Id);
	}

	Edit_Tasknew(pre_visa_e: Pre_Visa, index) {
		this.Tasknewmodal_View = true;
		this.Tasknew_View = false;
		this.Previsa_ = pre_visa_e;
		this.Previsa_ = Object.assign({}, pre_visa_e);
		this.Get_Previsa_Details_Edit(this.Previsa_.Student_Checklist_Master_Id);
	}

	Edit_Pre_Admission(pre_admission_e: Pre_Admission, index) {
		this.Pre_AdmissionModal_View = true;
		this.Pre_Admission_View = false;
		this.Preadmission_ = pre_admission_e;
		this.Preadmission_ = Object.assign({}, pre_admission_e);
		this.Get_Preadmission_Details_Edit(
			this.Preadmission_.Student_Preadmission_Checklist_Master_Id
		);
	}

	Edit_Review(Review_e: Review, index) {
		this.Reviewmodal_View = true;
		this.Reviewdetails_View = false;
		this.Review_ = Review_e;
		this.Review_ = Object.assign({}, Review_e);

		if (this.Review_.Facebook.toString() == "1") this.Review_.Facebook = true;
		else this.Review_.Facebook = false;
		if (this.Review_.Facebook_Date == null) {
			this.Review_.Facebook_Date = new Date();
			this.Review_.Facebook_Date = this.New_Date(this.Review_.Facebook_Date);
		} else
			this.Review_.Facebook_Date = this.New_Date(
				new Date(moment(this.Review_.Facebook_Date).format("YYYY-MM-DD"))
			);

		if (this.Review_.Instagram.toString() == "1") this.Review_.Instagram = true;
		else this.Review_.Instagram = false;
		if (this.Review_.Instagram_Date == null) {
			this.Review_.Instagram_Date = new Date();
			this.Review_.Instagram_Date = this.New_Date(this.Review_.Instagram_Date);
		} else
			this.Review_.Instagram_Date = this.New_Date(
				new Date(moment(this.Review_.Instagram_Date).format("YYYY-MM-DD"))
			);

		if (this.Review_.Gmail.toString() == "1") this.Review_.Gmail = true;
		else this.Review_.Gmail = false;
		if (this.Review_.Google_Date == null) {
			this.Review_.Google_Date = new Date();
			this.Review_.Google_Date = this.New_Date(this.Review_.Google_Date);
		} else
			this.Review_.Google_Date = this.New_Date(
				new Date(moment(this.Review_.Google_Date).format("YYYY-MM-DD"))
			);

		if (this.Review_.Checklist.toString() == "1") this.Review_.Checklist = true;
		else this.Review_.Checklist = false;
		if (this.Review_.Checklist_Date == null) {
			this.Review_.Checklist_Date = new Date();
			this.Review_.Checklist_Date = this.New_Date(this.Review_.Checklist_Date);
		} else
			this.Review_.Checklist_Date = this.New_Date(
				new Date(moment(this.Review_.Checklist_Date).format("YYYY-MM-DD"))
			);

		if (this.Review_.Kit.toString() == "1") this.Review_.Kit = true;
		else this.Review_.Kit = false;
		if (this.Review_.Kit_Date == null) {
			this.Review_.Kit_Date = new Date();
			this.Review_.Kit_Date = this.New_Date(this.Review_.Kit_Date);
		} else
			this.Review_.Kit_Date = this.New_Date(
				new Date(moment(this.Review_.Kit_Date).format("YYYY-MM-DD"))
			);

		if (this.Review_.Ticket.toString() == "1") this.Review_.Ticket = true;
		else this.Review_.Ticket = false;
		if (this.Review_.Ticket_Date == null) {
			this.Review_.Ticket_Date = new Date();
			this.Review_.Ticket_Date = this.New_Date(this.Review_.Ticket_Date);
		} else
			this.Review_.Ticket_Date = this.New_Date(
				new Date(moment(this.Review_.Ticket_Date).format("YYYY-MM-DD"))
			);

		if (this.Review_.Accomodation.toString() == "1")
			this.Review_.Accomodation = true;
		else this.Review_.Accomodation = false;
		if (this.Review_.Accomodation_Date == null) {
			this.Review_.Accomodation_Date = new Date();
			this.Review_.Accomodation_Date = this.New_Date(
				this.Review_.Accomodation_Date
			);
		} else
			this.Review_.Accomodation_Date = this.New_Date(
				new Date(moment(this.Review_.Accomodation_Date).format("YYYY-MM-DD"))
			);

		if (this.Review_.Airport_Pickup.toString() == "1")
			this.Review_.Airport_Pickup = true;
		else this.Review_.Airport_Pickup = false;
		if (this.Review_.Airport_Pickup_Date == null) {
			this.Review_.Airport_Pickup_Date = new Date();
			this.Review_.Airport_Pickup_Date = this.New_Date(
				this.Review_.Airport_Pickup_Date
			);
		} else
			this.Review_.Airport_Pickup_Date = this.New_Date(
				new Date(moment(this.Review_.Airport_Pickup_Date).format("YYYY-MM-DD"))
			);
	}

	Edit_Workexperience(Workexperience_e: Work_Experience, index) {
		this.Workexperiencenew_View = true;
		this.Qualificationmodal_View = false;
		//this.Entry_View=true;
		this.Work_experience_ = Workexperience_e;
		this.Work_experience_ = Object.assign({}, Workexperience_e);
	}

	Edit_Ielts_Details(Ielts_Details_e: Ielts_Details, index) {
		this.Ielts_Details_ = Ielts_Details_e;
		for (var i = 0; i < this.IELTS_Type_Data.length; i++) {
			if (this.Ielts_Details_.Ielts_Type == this.IELTS_Type_Data[i].Ielts_Type)
				this.IELTS_Type_ = this.IELTS_Type_Data[i];
		}

		if (this.Ielts_Details_.Exam_Check == true)
			this.Ielts_Details_.Exam_Check = true;
		else this.Ielts_Details_.Exam_Check = false;
		// if (this.Ielts_Details_.Exam_Date == null) {

		// 	this.Ielts_Details_.Exam_Date = this.New_Date(
		// 		this.Ielts_Details_.Exam_Date
		// 	);
		// } else
		// 	this.Ielts_Details_.Exam_Date = this.New_Date(
		// 		new Date(moment(this.Ielts_Details_.Exam_Date).format("YYYY-MM-DD"))
		// 	);

		this.language_details_View = false;
		this.Languagemodal_View = true;
		//this.Ielts_Details_=Ielts_Details_e;
		this.Ielts_Details_ = Object.assign({}, Ielts_Details_e);
	}

	Delete_Qualificationdetails(Qualification_Id, index) {
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
				this.Student_Service_.Delete_Qualificationdetails(
					Qualification_Id
				).subscribe(
					(Delete_status) => {
						Delete_status = Delete_status[0];
						Delete_status = Delete_status[0].DeleteStatus_.data[0];
						if (Delete_status == 1) {
							this.Qualification_Data.splice(index, 1);
							const dialogRef = this.dialogBox.open(DialogBox_Component, {
								panelClass: "Dialogbox-Class",
								data: { Message: "Deleted", Type: "false" },
							});
							this.Clr_Qualification();
						}
						// else
						// {
						// this.issLoading=false;
						// const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Can not be deleted because its already Used',Type:"2"}});
						// }
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

	Delete_Pre_Visa(Previsa_, index) {
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
				this.Student_Service_.Delete_Pre_Visa(
					Previsa_.Student_Checklist_Master_Id
				).subscribe(
					(Delete_status) => {
						var Delete_status_ = Delete_status[0];
						//Delete_status = Delete_status[0].DeleteStatus_.data[0];
						if (Delete_status_[0].Student_Checklist_Master_Id_ > 0) {
							this.Previsa_Data.splice(index, 1);
							const dialogRef = this.dialogBox.open(DialogBox_Component, {
								panelClass: "Dialogbox-Class",
								data: { Message: "Deleted", Type: "false" },
							});
							this.Clr_Pre_Visa();
							this.Get_Previsa_Details(this.Profile_.Student_Id);
						}
						// else
						// {
						// this.issLoading=false;
						// const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Can not be deleted because its already Used',Type:"2"}});
						// }
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

	Delete_Pre_Admission(Preadmission_, index) {
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
				this.Student_Service_.Delete_Pre_Admission(
					Preadmission_.Student_Preadmission_Checklist_Master_Id
				).subscribe(
					(Delete_status) => {
						var Delete_status_ = Delete_status[0];
						//Delete_status = Delete_status[0].DeleteStatus_.data[0];
						if (
							Delete_status_[0].Student_Preadmission_Checklist_Master_Id_ > 0
						) {
							this.Previsa_Data.splice(index, 1);
							const dialogRef = this.dialogBox.open(DialogBox_Component, {
								panelClass: "Dialogbox-Class",
								data: { Message: "Deleted", Type: "false" },
							});
							this.Clr_Pre_Admission();
							this.Get_Preadmission_Details(this.Profile_.Student_Id);
						}
						// else
						// {
						// this.issLoading=false;
						// const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Can not be deleted because its already Used',Type:"2"}});
						// }
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

	Delete_Review(Review_Id, index) {
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
				this.Student_Service_.Delete_Review(Review_Id).subscribe(
					(Delete_status) => {
						Delete_status = Delete_status[0];
						Delete_status = Delete_status[0].DeleteStatus_.data[0];
						if (Delete_status == 1) {
							this.Review_Data.splice(index, 1);
							const dialogRef = this.dialogBox.open(DialogBox_Component, {
								panelClass: "Dialogbox-Class",
								data: { Message: "Deleted", Type: "false" },
							});
							this.Clr_Pre_Visa();
						}
						// else
						// {
						// this.issLoading=false;
						// const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Can not be deleted because its already Used',Type:"2"}});
						// }
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

	Delete_Refund_Request(Refund_Request_Id, index) {
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
				this.Student_Service_.Delete_Refund_Request(
					Refund_Request_Id
				).subscribe(
					(Delete_status) => {
						Delete_status = Delete_status[0];
						Delete_status = Delete_status[0].DeleteStatus_.data[0];
						if (Delete_status == 1) {
							this.Refund_Request_Data.splice(index, 1);
							const dialogRef = this.dialogBox.open(DialogBox_Component, {
								panelClass: "Dialogbox-Class",
								data: { Message: "Deleted", Type: "false" },
							});
							this.Clr_Refund_Request();
						}
						// else
						// {
						// this.issLoading=false;
						// const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Can not be deleted because its already Used',Type:"2"}});
						// }
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

	Delete_Workexperiencedetails(Work_Experience_Id, index) {
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
				this.Student_Service_.Delete_Workexperiencedetails(
					Work_Experience_Id
				).subscribe(
					(Delete_status) => {
						Delete_status = Delete_status[0];
						Delete_status = Delete_status[0].DeleteStatus_.data[0];
						if (Delete_status == 1) {
							this.Work_experience_Data.splice(index, 1);
							const dialogRef = this.dialogBox.open(DialogBox_Component, {
								panelClass: "Dialogbox-Class",
								data: { Message: "Deleted", Type: "false" },
							});
							this.Clr_work_experience();
						}
						// else
						// {
						// this.issLoading=false;
						// const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Can not be deleted because its already Used',Type:"2"}});
						// }
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

	Delete_Ielts_Details(Ielts_Details_Id, index) {
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
				this.Student_Service_.Delete_Ielts_Details(Ielts_Details_Id).subscribe(
					(Delete_status) => {
						Delete_status = Delete_status[0];
						Delete_status = Delete_status[0].DeleteStatus_.data[0];
						if (Delete_status == 1) {
							this.Ielts_Data.splice(index, 1);
							const dialogRef = this.dialogBox.open(DialogBox_Component, {
								panelClass: "Dialogbox-Class",
								data: { Message: "Deleted", Type: "false" },
							});
							this.Clr_Ielts_Details();
						}
						// else
						// {
						// this.issLoading=false;
						// const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Can not be deleted because its already Used',Type:"2"}});
						// }
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

	Clr_Qualification() {
		this.Qualification_.Qualification_Id = 0;
		this.Qualification_.Credential = "";
		this.Qualification_.Field = "";
		this.Qualification_.school = "";
		this.Qualification_.Fromyear = "";
		this.Qualification_.Toyear = "";
		this.Qualification_.MarkPer = "";
		this.Qualification_.Backlog_History = "";
		this.Qualification_.Year_of_passing = "";
		this.Qualification_.result = "";
	}
	Clr_work_experience() {
		this.Work_experience_.Work_Experience_Id = 0;
		this.Work_experience_.Company = "";
		this.Work_experience_.Designation = "";
		this.Work_experience_.Salary = "";
		this.Work_experience_.Salary_Mode = "";
		this.Work_experience_.Ex_From = "";
		this.Work_experience_.Ex_To = "";
	}

	Clr_Ielts_Details() {
		this.Ielts_Details_.Ielts_Details_Id = 0;
		this.Ielts_Details_.Description = "";
		this.Ielts_Details_.Listening = "";
		this.Ielts_Details_.Reading = "";
		this.Ielts_Details_.Speaking = "";
		this.Ielts_Details_.Overall = "";
		this.Ielts_Details_.Writing = "";
		this.Ielts_Details_.Exam_Check = false;

		// this.Ielts_Details_.Exam_Date = new Date();
		// 		this.Ielts_Details_.Exam_Date = this.New_Date(this.Ielts_Details_.Exam_Date);

		this.Ielts_Details_.Exam_Date = "";
		// this.Ielts_Details_.Exam_Date = this.New_Date(
		// 	new Date(moment(this.Ielts_Details_.Exam_Date).format("YYYY-MM-DD"))
		// );

		if (this.IELTS_Type_Data != null && this.IELTS_Type_Data != undefined)
			this.IELTS_Type_ = this.IELTS_Type_Data[0];
	}

	Save_Refund_Request() {
		if (
			this.Refund_Request_.Reason === undefined ||
			this.Refund_Request_.Reason == null ||
			this.Refund_Request_.Reason == ""
		) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Enter Amount", Type: "3" },
			});
			// this.refund_message="Enter Reason";
			return;
		}
		if (
			this.Refund_Request_.Remark === undefined ||
			this.Refund_Request_.Remark == null ||
			this.Refund_Request_.Remark == ""
		) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Enter Remark", Type: "3" },
			});
			// this.refund_message="Enter Remark";
			return;
		}

		this.Refund_Request_.Student_Id = this.Profile_.Student_Id;
		this.Refund_Request_.Fees_Receipt_Id = this.Fees_Receipt_Id_data;
		this.Refund_Request_.User_Id = Number(this.Login_User);

		this.issLoading = true;

		this.Student_Service_.Save_Refund_Request(this.Refund_Request_).subscribe(
			(Save_Refund_Request) => {
				Save_Refund_Request = Save_Refund_Request[0];
				if (Number(Save_Refund_Request[0].Refund_Request_Id_) > 0) {
					const dialogRef = this.dialogBox.open(DialogBox_Component, {
						panelClass: "Dialogbox-Class",
						data: { Message: "Saved", Type: "false" },
					});
					//this.Get_WorkexperienceDetails(Save_Refund_Request[0].Refund_Request_Id);
					this.Clr_Refund_Request();
					this.Search_Receipt();
					if (Number(this.Login_User) != Save_Refund_Request[0].To_User_) {
						var message = {
							Student_Name: Save_Refund_Request[0].Student_Name_,
							From_User_Name: Save_Refund_Request[0].From_User_Name_,
							Notification_Type_Name:
								Save_Refund_Request[0].Notification_Type_Name_,
							Entry_Type: Save_Refund_Request[0].Entry_Type_,
							To_User: Save_Refund_Request[0].To_User_,
							Notification_Id: Save_Refund_Request[0].Notification_Id_,
							Student_Id: Save_Refund_Request[0].Student_Id_,
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
					data: { Message: Rows.error.error, Type: "2" },
				});
			}
		);
	}

	Save_pre_visa() {
		var Menu_Status = false;

		var Department_Status = false;
		for (var j = 0; j < this.Student_Checklist_Data.length; j++) {
			if (this.Student_Checklist_Data[j].Check_Box == true)
				Department_Status = true;
		}
		if (Department_Status == false) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Select Atleast One Checklist", Type: "3" },
			});
			return;
		}

		var Checklist_Details = [];

		for (var m = 0; m < this.Student_Checklist_Data.length; m++) {
			if (Boolean(this.Student_Checklist_Data[m].Check_Box) == true) {
				Checklist_Details.push({
					Checklist_Id: this.Student_Checklist_Data[m].Checklist_Id,
				});
			}
		}

		this.Previsa_.Student_Id = this.Profile_.Student_Id;
		this.Previsa_.Country_Id = this.Student_Checklist_Country_Id;
		this.Previsa_.Checklist_Details = Checklist_Details;
		this.Previsa_.User_Id = Number(this.Login_User);

		this.issLoading = true;
		this.Student_Service_.Save_pre_visa(this.Previsa_).subscribe(
			(Save_pre_visa) => {
				Save_pre_visa = Save_pre_visa[0];
				if (Number(Save_pre_visa[0].Student_Checklist_Master_Id_) > 0) {
					const dialogRef = this.dialogBox.open(DialogBox_Component, {
						panelClass: "Dialogbox-Class",
						data: { Message: "Saved", Type: "false" },
					});
					//this.Get_WorkexperienceDetails(Save_Refund_Request[0].Refund_Request_Id);
					this.Clr_Pre_Visa();
					this.Get_Previsa_Details(this.Profile_.Student_Id);
					this.Close_Pre_Visa();
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
	Save_Pre_Admission() {
		var Menu_Status = false;

		var Department_Status = false;
		for (var j = 0; j < this.Student_Checklist_Preadmission_Data.length; j++) {
			if (this.Student_Checklist_Preadmission_Data[j].Check_Box == true)
				Department_Status = true;
		}
		if (Department_Status == false) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Select Atleast One Checklist", Type: "3" },
			});
			return;
		}

		var Checklist_Details = [];

		for (var m = 0; m < this.Student_Checklist_Preadmission_Data.length; m++) {
			if (
				Boolean(this.Student_Checklist_Preadmission_Data[m].Check_Box) == true
			) {
				Checklist_Details.push({
					Checklist_Id:
						this.Student_Checklist_Preadmission_Data[m].Checklist_Id,
				});
			}
		}

		this.Preadmission_.Student_Id = this.Profile_.Student_Id;
		this.Preadmission_.Country_Id =
			this.Student_Preadmission_Checklist_Country_Id;
		this.Preadmission_.Checklist_Details = Checklist_Details;
		this.Preadmission_.User_Id = Number(this.Login_User);

		this.issLoading = true;
		this.Student_Service_.Save_Pre_Admission(this.Preadmission_).subscribe(
			(Save_pre_visa) => {
				Save_pre_visa = Save_pre_visa[0];
				if (
					Number(Save_pre_visa[0].Student_Preadmission_Checklist_Master_Id_) > 0
				) {
					const dialogRef = this.dialogBox.open(DialogBox_Component, {
						panelClass: "Dialogbox-Class",
						data: { Message: "Saved", Type: "false" },
					});
					//this.Get_WorkexperienceDetails(Save_Refund_Request[0].Refund_Request_Id);
					this.Clr_Pre_Admission();
					this.Get_Preadmission_Details(this.Profile_.Student_Id);
					this.Close_Pre_Admission();
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

	Save_Review() {
		if (this.Review_.Facebook == true && this.Review_.Facebook_Date == null) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Choose Facebook Date", Type: "3" },
			});
			return;
		}

		if (this.Review_.Instagram == true && this.Review_.Instagram_Date == null) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Choose Instagram Date", Type: "3" },
			});
			return;
		}

		if (this.Review_.Gmail == true && this.Review_.Google_Date == null) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Choose Google Date", Type: "3" },
			});
			return;
		}

		if (this.Review_.Checklist == true && this.Review_.Checklist_Date == null) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Choose Checklist Date", Type: "3" },
			});
			return;
		}

		if (this.Review_.Kit == true && this.Review_.Kit_Date == null) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Choose Kit Date", Type: "3" },
			});
			return;
		}

		if (this.Review_.Ticket == true && this.Review_.Ticket_Date == null) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Choose Ticket Date", Type: "3" },
			});
			return;
		}

		if (
			this.Review_.Accomodation == true &&
			this.Review_.Accomodation_Date == null
		) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Choose Accomodation Date", Type: "3" },
			});
			return;
		}

		if (
			this.Review_.Airport_Pickup == true &&
			this.Review_.Airport_Pickup_Date == null
		) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Choose Airport Pickup Date", Type: "3" },
			});
			return;
		}

		var Menu_Status = false;

		if (
			this.Review_.Facebook == true ||
			this.Review_.Instagram == true ||
			this.Review_.Gmail == true ||
			this.Review_.Checklist == true ||
			this.Review_.Kit == true ||
			this.Review_.Ticket == true ||
			this.Review_.Accomodation == true ||
			this.Review_.Airport_Pickup == true
		)
			Menu_Status = true;
		if (Menu_Status == false) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Select Atleast One Data", Type: "3" },
			});
			return;
		}

		var Facebook_Status = 0;
		if (Boolean(this.Review_.Facebook) == true) Facebook_Status = 1;

		this.Review_.Facebook_Date = this.New_Date(
			new Date(moment(this.Review_.Facebook_Date).format("YYYY-MM-DD"))
		);

		var Instagram_Status = 0;
		if (Boolean(this.Review_.Instagram) == true) Instagram_Status = 1;

		this.Review_.Instagram_Date = this.New_Date(
			new Date(moment(this.Review_.Instagram_Date).format("YYYY-MM-DD"))
		);

		var Gmail_Status = 0;
		if (Boolean(this.Review_.Gmail) == true) Facebook_Status = 1;

		this.Review_.Google_Date = this.New_Date(
			new Date(moment(this.Review_.Google_Date).format("YYYY-MM-DD"))
		);

		var Checklist_Status = 0;
		if (Boolean(this.Review_.Checklist) == true) Checklist_Status = 1;

		this.Review_.Checklist_Date = this.New_Date(
			new Date(moment(this.Review_.Checklist_Date).format("YYYY-MM-DD"))
		);

		var Kit_Status = 0;
		if (Boolean(this.Review_.Kit) == true) Kit_Status = 1;

		this.Review_.Kit_Date = this.New_Date(
			new Date(moment(this.Review_.Kit_Date).format("YYYY-MM-DD"))
		);

		var Ticket_Status = 0;
		if (Boolean(this.Review_.Ticket) == true) Ticket_Status = 1;

		this.Review_.Ticket_Date = this.New_Date(
			new Date(moment(this.Review_.Ticket_Date).format("YYYY-MM-DD"))
		);

		var Accomodation_Status = 0;
		if (Boolean(this.Review_.Accomodation) == true) Accomodation_Status = 1;

		this.Review_.Accomodation_Date = this.New_Date(
			new Date(moment(this.Review_.Accomodation_Date).format("YYYY-MM-DD"))
		);

		var Airport_Pickup_Status = 0;
		if (Boolean(this.Review_.Airport_Pickup) == true) Airport_Pickup_Status = 1;

		this.Review_.Airport_Pickup_Date = this.New_Date(
			new Date(moment(this.Review_.Airport_Pickup_Date).format("YYYY-MM-DD"))
		);

		this.Review_.Student_Id = this.Profile_.Student_Id;
		this.Review_.User_Id = Number(this.Login_User);
		this.issLoading = true;

		this.Student_Service_.Save_Review(this.Review_).subscribe(
			(Save_Review) => {
				Save_Review = Save_Review[0];
				if (Number(Save_Review[0].Review_Id_) > 0) {
					const dialogRef = this.dialogBox.open(DialogBox_Component, {
						panelClass: "Dialogbox-Class",
						data: { Message: "Saved", Type: "false" },
					});
					//this.Get_WorkexperienceDetails(Save_Refund_Request[0].Refund_Request_Id);
					this.Clr_Review();
					this.Get_ReviewDetails(this.Profile_.Student_Id);
					this.Close_Review();
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
	Clr_Refund_Request() {
		this.Refund_Request_.Reason = "";
		this.Refund_Request_.Remark = "";
	}
	Clr_Pre_Visa() {
		this.Previsa_.Student_Checklist_Master_Id = 0;
		this.Previsa_.Check_Box = false;

		if (this.Student_Checklist_Data != undefined)
			for (var i = 0; i < this.Student_Checklist_Data.length; i++) {
				this.Student_Checklist_Data[i].Check_Box = false;
			}
	}

	Clr_Pre_Admission() {
		this.Preadmission_.Student_Preadmission_Checklist_Master_Id = 0;
		this.Preadmission_.Check_Box = false;

		if (this.Student_Checklist_Preadmission_Data != undefined)
			for (
				var i = 0;
				i < this.Student_Checklist_Preadmission_Data.length;
				i++
			) {
				this.Student_Checklist_Preadmission_Data[i].Check_Box = false;
			}
	}

	Clr_Review() {
		this.Review_.Review_Id = 0;
		this.Review_.Facebook = false;
		this.Review_.Gmail = false;
		this.Review_.Instagram = false;
		this.Review_.Checklist = false;
		this.Review_.Kit = false;
		this.Review_.Ticket = false;
		this.Review_.Accomodation = false;
		this.Review_.Airport_Pickup = false;

		this.Review_.Facebook_Date = new Date();
		this.Review_.Facebook_Date = this.New_Date(this.Review_.Facebook_Date);
		this.Review_.Instagram_Date = new Date();
		this.Review_.Instagram_Date = this.New_Date(this.Review_.Instagram_Date);
		this.Review_.Google_Date = new Date();
		this.Review_.Google_Date = this.New_Date(this.Review_.Google_Date);

		this.Review_.Checklist_Date = new Date();
		this.Review_.Checklist_Date = this.New_Date(this.Review_.Checklist_Date);
		this.Review_.Kit_Date = new Date();
		this.Review_.Kit_Date = this.New_Date(this.Review_.Kit_Date);
		this.Review_.Ticket_Date = new Date();
		this.Review_.Ticket_Date = this.New_Date(this.Review_.Ticket_Date);
		this.Review_.Accomodation_Date = new Date();
		this.Review_.Accomodation_Date = this.New_Date(
			this.Review_.Accomodation_Date
		);
		this.Review_.Airport_Pickup_Date = new Date();
		this.Review_.Airport_Pickup_Date = this.New_Date(
			this.Review_.Airport_Pickup_Date
		);
	}
// 	Transfer_Cofirmation(Transfer_Source) {
// 		var Bph_Approve = false;

// 		if (
// 			this.Transfer_Status_ == null ||
// 			this.Transfer_Status_ == undefined ||
// 			this.Transfer_Status_.Department_Status_Id == undefined ||
// 			this.Transfer_Status_.Department_Status_Name == null
// 		) {
// 			const dialogRef = this.dialogBox.open(DialogBox_Component, {
// 				panelClass: "Dialogbox-Class",
// 				data: { Message: "Select Status", Type: "3" },
// 			});
// 			return;
// 		}

// 		if (
// 			this.Profile_.Transfer_Remark == undefined ||
// 			this.Profile_.Transfer_Remark == null ||
// 			this.Profile_.Transfer_Remark == ""
// 		) {
// 			const dialogRef = this.dialogBox.open(DialogBox_Component, {
// 				panelClass: "Dialogbox-Class",
// 				data: { Message: "Enter Remark", Type: "3" },
// 			});
// 			return;
// 		}

// 		this.Profile_.Transfer_Status_Id =
// 			this.Transfer_Status_.Department_Status_Id;
// 		this.Profile_.Transfer_Status_Name =
// 			this.Transfer_Status_.Department_Status_Name;

// 		const dialogRef = this.dialogBox.open(DialogBox_Component, {
// 			panelClass: "Dialogbox-Class",
// 			data: {
// 				Message: "Do you want to Transfer ?",
// 				Type: true,
// 				Heading: "Confirm",
// 			},
// 		});
// 		dialogRef.afterClosed().subscribe((result) => {
// 			if (result == "Yes") {
// 

// 				this.Transfer_.Student_Id=this.Profile_.Student_Id;
// 				this.Transfer_.transfer_source=this.transfer_source;
// 				this.Transfer_.Login_User=Number(this.Login_User);
// 				this.Transfer_.Transfer_department_Id=this.Transfer_department_Id;
// 				this.Transfer_.Transfer_Remark=this.Profile_.Transfer_Remark;
// 				this.Transfer_.Transfer_Status_Id=this.Profile_.Transfer_Status_Id;
// 				this.Transfer_.Transfer_Status_Name=this.Profile_.Transfer_Status_Name;
// 				this.Transfer_.Substatus_Id=0;
// 				this.Transfer_.Substatus_Name="undefined";
// 				this.Transfer_.Application_Id_Ref=0;
// 				this.Transfer_.Followup_Branch_Id=this.FollowUp_.Branch;
// 				this.Transfer_.Followup_Branch_Name=this.FollowUp_.Branch_Name;
// 				this.Transfer_.Followup_Department_Id=this.FollowUp_.Department;
// 				this.Transfer_.Followup_Department_Name=this.FollowUp_.Department_Name;
// 				this.Transfer_.Followup_Status_Id=this.FollowUp_.Status_Id;
// 				this.Transfer_.Followup_Status_Name=this.FollowUp_.Department_Status_Name;
// 				this.Transfer_.Followup_To_User_Id=this.FollowUp_.To_User_Id;
// 				this.Transfer_.Followup_To_User_Name=this.FollowUp_.To_User_Name;
// 				this.Transfer_.Next_FollowUp_Date = this.New_Date(
// 					new Date(moment(this.FollowUp_.Next_FollowUp_Date).format("YYYY-MM-DD"))
// 				);



// 				this.issLoading = true;


// 				this.Student_Service_.Transfer_Cofirmation(
// 					this.Transfer_
// 				).subscribe(
// 					(Save_status) => {
// 						
// 						if (Save_status[0][0].Student_Id_ > 0) {
// 							this.Total_Rows = this.Total_Rows - this.Student_Data.length;

// 							const dialogRef = this.dialogBox.open(DialogBox_Component, {
// 								panelClass: "Dialogbox-Class",
// 								data: { Message: "Transferred", Type: "false" },
// 							});

// 							this.Clr_Student();
// 							this.Search_Student();
// 							this.Close_Click();
// 							//socket emit code
// 							if (Number(this.Login_User) != Save_status[0][0].User_Id_) {
// 								var message = {
// 									Student_Name: Save_status[0][0].Student_Name_,
// 									From_User_Name: Save_status[0][0].From_User_Name_,
// 									Notification_Type_Name:
// 										Save_status[0][0].Notification_Type_Name_,
// 									Entry_Type: Save_status[0][0].Entry_Type_,
// 									To_User: Save_status[0][0].User_Id_,
// 									Notification_Id: Save_status[0][0].Notification_Id_,
// 									Student_Id: Save_status[0][0].Student_Id_,
// 								};
// 								this.socket.emit("new-message", message);
// 							}
// 						} else if (Save_status[0][0].Student_Id_ == -1) {
// 							this.Total_Rows = this.Total_Rows - this.Student_Data.length;

// 							const dialogRef = this.dialogBox.open(DialogBox_Component, {
// 								panelClass: "Dialogbox-Class",
// 								data: { Message: "User Not Found", Type: "3" },
// 							});
// 							this.Clr_Student();
// 							this.Search_Student();
// 							this.Close_Click();
// 						} else {
// 							this.issLoading = false;
// 							const dialogRef = this.dialogBox.open(DialogBox_Component, {
// 								panelClass: "Dialogbox-Class",
// 								data: { Message: "Error Occured", Type: "2" },
// 							});
// 						}
// 						this.issLoading = false;
// 					},
// 					(Rows) => {
// 						this.issLoading = false;
// 						const dialogRef = this.dialogBox.open(DialogBox_Component, {
// 							panelClass: "Dialogbox-Class",
// 							data: { Message: "Error Occured", Type: "2" },
// 						});
// 					}
// 				);
// 			}
// 		});
// 	}


Transfer_Cofirmation(Transfer_Source) {
	var Bph_Approve = false;

	if (
		this.Transfer_Status_ == null ||
		this.Transfer_Status_ == undefined ||
		this.Transfer_Status_.Department_Status_Id == undefined ||
		this.Transfer_Status_.Department_Status_Name == null
	) {
		const dialogRef = this.dialogBox.open(DialogBox_Component, {
			panelClass: "Dialogbox-Class",
			data: { Message: "Select Status", Type: "3" },
		});
		return;
	}

	if (
		this.Profile_.Transfer_Remark == undefined ||
		this.Profile_.Transfer_Remark == null ||
		this.Profile_.Transfer_Remark == ""
	) {
		const dialogRef = this.dialogBox.open(DialogBox_Component, {
			panelClass: "Dialogbox-Class",
			data: { Message: "Enter Remark", Type: "3" },
		});
		return;
	}

	this.Profile_.Transfer_Status_Id =
		this.Transfer_Status_.Department_Status_Id;
	this.Profile_.Transfer_Status_Name =
		this.Transfer_Status_.Department_Status_Name;

	const dialogRef = this.dialogBox.open(DialogBox_Component, {
		panelClass: "Dialogbox-Class",
		data: {
			Message: "Do you want to Transfer ?",
			Type: true,
			Heading: "Confirm",
		},
	});
	dialogRef.afterClosed().subscribe((result) => {
		if (result == "Yes") {
			this.issLoading = true;
			this.Student_Service_.Transfer_Cofirmation(
				this.Profile_.Student_Id,
				this.transfer_source,
				this.Login_User,
				this.Transfer_department_Id,
				this.Profile_.Transfer_Remark,
				this.Profile_.Transfer_Status_Id,
				this.Profile_.Transfer_Status_Name,
				this.FollowUp_.Next_FollowUp_Date,

				0,
				"undefined",
				0,this.ApplicationDetails_.Department_Status_Duration
			).subscribe(
				(Save_status) => {
					
					if (Save_status[0][0].Student_Id_ > 0) {
						this.Total_Rows = this.Total_Rows - this.Student_Data.length;

						const dialogRef = this.dialogBox.open(DialogBox_Component, {
							panelClass: "Dialogbox-Class",
							data: { Message: "Transferred", Type: "false" },
						});

						this.Clr_Student();
						this.Search_Student();
						this.Close_Click();
						//socket emit code
						if (Number(this.Login_User) != Save_status[0][0].User_Id_) {
							var message = {
								Student_Name: Save_status[0][0].Student_Name_,
								From_User_Name: Save_status[0][0].From_User_Name_,
								Notification_Type_Name:
									Save_status[0][0].Notification_Type_Name_,
								Entry_Type: Save_status[0][0].Entry_Type_,
								To_User: Save_status[0][0].User_Id_,
								Notification_Id: Save_status[0][0].Notification_Id_,
								Student_Id: Save_status[0][0].Student_Id_,
							};
							this.socket.emit("new-message", message);
						}
					} else if (Save_status[0][0].Student_Id_ == -1) {
						this.Total_Rows = this.Total_Rows - this.Student_Data.length;

						const dialogRef = this.dialogBox.open(DialogBox_Component, {
							panelClass: "Dialogbox-Class",
							data: { Message: "User Not Found", Type: "3" },
						});
						this.Clr_Student();
						this.Search_Student();
						this.Close_Click();
					} else {
						this.issLoading = false;
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
		this.Application_Id_Ref_,
		this.ApplicationDetails_.Department_Status_Duration,
	).subscribe(
		(Save_status) => {
			
			if (Number(this.Login_User) != Save_status[0][0].User_Id_) {
				const utcDate = new Date(Save_status[0][0].Deadline);
const localDate = utcDate.toLocaleString()
console.log('localDate: ', localDate);
				this.Search_Lead_button();
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



				this.To_Username_Popup=Save_status[0][0].ToUser_Name_

					const dialogRef = this.dialogBox.open(DialogBox_Component, {
						panelClass: "Dialogbox-Class",
						data: { Message: "Transferred To " +this.To_Username_Popup, Type: "false" },
					});

				
			}

			if (Number(this.Login_User_Id) == Save_status[0][0].User_Id_) {
				this.To_Username_Popup=Save_status[0][0].ToUser_Name_

				const dialogRef = this.dialogBox.open(DialogBox_Component, {
					panelClass: "Dialogbox-Class",
					data: { Message: "Transferred To " +this.To_Username_Popup, Type: "false" },
				});



			}
			this.Get_ApplicationDetails();
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

Transfer_Cofirmation_Register(Transfer_Source) {
	// dialogRef.afterClosed().subscribe((result) => {
	//  if (result == "Yes") {
	this.issLoading = true;

	this.Student_Service_.Transfer_Cofirmation(
		this.Profile_.Student_Id,
		"undefined",
		this.Login_User,
		this.Transfer_department_Id,
		this.Profile_.Transfer_Remark,
		this.Transfer_departmentstatus_Id,
		this.Transfer_departmentstatusname,
		this.FollowUp_.Next_FollowUp_Date,
		0,
		"undefined",
		0
	).subscribe(
		(Save_status) => {
			
			if (Save_status[0][0].Student_Id_ > 0) {
				// this.Total_Rows = this.Total_Rows - this.Student_Data.length;

				// const dialogRef = this.dialogBox.open(DialogBox_Component, {
				//  panelClass: "Dialogbox-Class",
				//  data: { Message: "Transferred", Type: "false" },
				// });

				// this.Clr_Student();
				// this.Search_Student();
				// this.Close_Click();
				//socket emit code
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
			} else if (Save_status[0][0].Student_Id_ == -1) {
				this.Total_Rows = this.Total_Rows - this.Student_Data.length;

				// const dialogRef = this.dialogBox.open(DialogBox_Component, {
				//  panelClass: "Dialogbox-Class",
				//  data: { Message: "User Not Found", Type: "3" },
				// });
				// this.Clr_Student();
				// this.Search_Student();
				// this.Close_Click();
			} else {
				this.issLoading = false;
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
	// }
	// });
}




Transfer_Cofirmation_Status(Transfer_Source) {
	// dialogRef.afterClosed().subscribe((result) => {
	//  if (result == "Yes") {
	this.issLoading = true;

	this.Student_Service_.Transfer_Cofirmation(
		this.transfer_student_id_,
		"undefined",
		this.Login_User,
		this.transfer_status_Dept_Id_,
		this.FollowUp_.Remark,
		this.FollowUp_.Status_Id,
		this.FollowUp_.Department_Status_Name,
		this.FollowUp_.Next_FollowUp_Date,
		0,
		"undefined",
		0
	).subscribe(
		(Save_status) => {
			this.Search_Lead_button();
			if (Save_status[0][0].Student_Id_ > 0) {
				this.Total_Rows = 0;
				
				// this.Total_Rows = this.Total_Rows - this.Student_Data.length;

				// const dialogRef = this.dialogBox.open(DialogBox_Component, {
				//  panelClass: "Dialogbox-Class",
				//  data: { Message: "Transferred", Type: "false" },
				// });

				// this.Clr_Student();
				// this.Search_Student();
				// this.Close_Click();
				//socket emit code
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
			} else if (Save_status[0][0].Student_Id_ == -1) {
				this.Total_Rows = this.Total_Rows - this.Student_Data.length;

				const dialogRef = this.dialogBox.open(DialogBox_Component, {
				 panelClass: "Dialogbox-Class",
				 data: { Message: "User Not Found", Type: "3" },
				});
				// this.Clr_Student();
				// this.Search_Student();
				// this.Close_Click();
			} else {
				this.issLoading = false;
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
	// }
	// });
}



	Get_Transfer_status(Transfer_Source, Department_id) {
		//this.issLoading = true;
		this.Followup_Transfer_Status_Data = [];
		this.Followup_Substatus_Data_Filter1 = [];
		this.Followup_Substatus_Data1 = [];
		this.Transfer_Status_k = null;
		this.Transfer_Status_ = null;
		this.Profile_.Transfer_Remark = "";

		this.transfer_source = Transfer_Source;
		this.Transfer_department_Id = Department_id;
		// this.Student_Service_.Get_WorkexperienceDetails(Transfer_Source).subscribe(
		// 	(Rows) => {
		// 		;
		// 		this.Work_experience_Data = Rows[0];
		// 		this.issLoading = false;
		// 	},
		// 	(Rows) => {
		// 		this.issLoading = false;
		// 	}
		// );
	}

	Add_CAS_Followup(Student_Task_Id, Student_Id, task_item_id, task_group_id,Document_Upload,Rating) {
		this.Cas_Followup_.Followup_Date = new Date();
		this.Cas_Followup_.Followup_Date = this.New_Date(
			this.Cas_Followup_.Followup_Date
		);
		// this.Cas_Followup_.End_Date = new Date();
		// this.Cas_Followup_.Followup_Date = this.New_Date(this.Cas_Followup_.End_Date)

		this.Task_Doc_View=Document_Upload 
		this.Rating_View=Rating
		this.Task_Group_Id = 1;
		this.cas_task_id = Student_Task_Id;
		this.cas_task_student_id = Student_Id;
		this.cas_task_item_id = task_item_id;
		this.cas_task_group_id = task_group_id;
		this.Cas_Followup_View = true;
		this.Visa_View = false;
		this.Pre_Visamodal_View = false;
		this.Pre_Visa_View = false;
		this.Pre_Admission_View = false;
		this.Pre_AdmissionModal_View = false;
		this.Pre_Visa_Checklist_View=false;
		this.Pre_Visachecklistmodal_View=false;
		this.Cas_FollowupPrevisa_View = false;
		this.Tasknew_View = false;
		this.Tasknewmodal_View = false;
		this.Cas_FollowupTasknew_View = false;
		this.Clr_cas_Followup();
	}

	Add_CAS_Followup_Previsa() {
		this.Cas_Followup_.Followup_Date = new Date();
		this.Cas_Followup_.Followup_Date = this.New_Date(
			this.Cas_Followup_.Followup_Date
		);
		this.Task_Group_Id = 2;
		this.Cas_FollowupPrevisa_View = true;
		this.Visa_View = false;
		this.Pre_Visamodal_View = false;
		this.Pre_Visa_View = false;
		this.Pre_Admission_View = false;
		this.Pre_AdmissionModal_View = false;
		this.Pre_Visa_Checklist_View=false;
		this.Pre_Visachecklistmodal_View=false;
		this.Clr_cas_Followup();
	}
	Add_CAS_Followup_Tasknew() {
		this.Cas_Followup_.Followup_Date = new Date();
		this.Cas_Followup_.Followup_Date = this.New_Date(
			this.Cas_Followup_.Followup_Date
		);
		this.Cas_Followup_.Deadline=null
		this.Cas_Followup_.Duration=0
		this.Task_Group_Id = 4;
		this.Cas_FollowupPrevisa_View = false;
		this.Tasknew_View = false;
		this.Tasknewmodal_View = false;
		this.Cas_FollowupTasknew_View = true;
		this.Visa_View = false;
		this.Pre_Visamodal_View = false;
		this.Pre_Visa_View = false;
		this.Pre_Admission_View = false;
		this.Pre_AdmissionModal_View = false;
		this.Pre_Visa_Checklist_View=false;
		this.Pre_Visachecklistmodal_View=false;
		this.Clr_Tasknewcas_Followup();

		this.FollowUp_Branch_Task_ = Object.assign({}, this.Branch_Temp);
		this.FollowUp_Department_Task_ = Object.assign({}, this.Department_Temp);
		this.FollowUp_Status_Task_ = Object.assign({}, this.Status_Temp);
		this.Followup_Users_Task_ = Object.assign({}, this.Users_Temp_c);

	}

	Add_CAS_Followup_Preadmission() {
		this.Cas_Followup_.Followup_Date = new Date();
		this.Cas_Followup_.Followup_Date = this.New_Date(
			this.Cas_Followup_.Followup_Date
		);
		this.Task_Group_Id = 3;
		this.Cas_FollowupPreadmission_View = true;
		this.Visa_View = false;
		this.Pre_Visamodal_View = false;
		this.Pre_Visa_View = false;
		this.Pre_Admission_View = false;
		this.Pre_AdmissionModal_View = false;
		this.Pre_Visa_Checklist_View=false;
		this.Pre_Visachecklistmodal_View=false;

		this.Clr_cas_Followup();
	}

	// Save_Cas_Followup() {
	// 	if (
	// 		this.Task_Item_search_ == undefined ||
	// 		this.Task_Item_search_ == null ||
	// 		this.Task_Item_search_.Task_Item_Id == undefined ||
	// 		this.Task_Item_search_.Task_Item_Id == 0
	// 	) {
	// 		const dialogRef = this.dialogBox.open(DialogBox_Component, {
	// 			panelClass: "Dialogbox-Class",
	// 			data: { Message: "Select Task", Type: "3" },
	// 		});
	// 		return;
	// 	}

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

	// 	this.Cas_Followup_.Student_Id = this.Profile_.Student_Id;
	// 	this.Cas_Followup_.Task_Status = this.Task_Status_.Task_Status_Id;
	// 	this.Cas_Followup_.Status_Name = this.Task_Status_.Status_Name;
	// 	this.Cas_Followup_.To_User = Number(this.Login_User);
	// 	this.Cas_Followup_.To_User_Name = this.Login_User_Name;
	// 	this.Cas_Followup_.Task_Item_Id = this.Task_Item_search_.Task_Item_Id;
	// 	this.Cas_Followup_.Followup_Date = this.New_Date(
	// 		new Date(moment(this.Cas_Followup_.Followup_Date).format("YYYY-MM-DD"))
	// 	);
	// 	this.Cas_Followup_.Task_Group_Id = this.Task_Group_Id;

	// 	if (this.Save_Call_Status == true) return;
	// 	else this.Save_Call_Status = true;
	// 	this.issLoading = true;

	// 	this.Student_Service_.Save_Cas_Followup(this.Cas_Followup_).subscribe(
	// 		(Save_work_experience) => {
	// 			Save_work_experience = Save_work_experience[0];
	// 			if (Number(Save_work_experience[0].Student_Task_Id_) > 0) {
	// 				if (this.Task_Group_Id == 1) {
	// 					this.Save_Call_Status = false;
	// 					const dialogRef = this.dialogBox.open(DialogBox_Component, {
	// 						panelClass: "Dialogbox-Class",
	// 						data: { Message: "Saved", Type: "false" },
	// 					});
	// 					// this.Get_WorkexperienceDetails(Save_work_experience[0].Student_Id_);
	// 					this.Clr_cas_Followup();
	// 					this.Close_Cas_Followup();
	// 					this.Get_Visa_Task(this.Task_Group_Id);
	// 				}

	// 				if (this.Task_Group_Id == 2) {
	// 					this.Save_Call_Status = false;
	// 					const dialogRef = this.dialogBox.open(DialogBox_Component, {
	// 						panelClass: "Dialogbox-Class",
	// 						data: { Message: "Saved", Type: "false" },
	// 					});
	// 					// this.Get_WorkexperienceDetails(Save_work_experience[0].Student_Id_);
	// 					this.Clr_cas_Followup();
	// 					this.Close_previsadetails();
	// 					this.Get_Previsa_Task(this.Task_Group_Id);
	// 				}

	// 				if (this.Task_Group_Id == 3) {
	// 					this.Save_Call_Status = false;
	// 					const dialogRef = this.dialogBox.open(DialogBox_Component, {
	// 						panelClass: "Dialogbox-Class",
	// 						data: { Message: "Saved", Type: "false" },
	// 					});
	// 					// this.Get_WorkexperienceDetails(Save_work_experience[0].Student_Id_);
	// 					this.Clr_cas_Followup();
	// 					this.Close_preadmissiondetails();
	// 					this.Get_Preadmission_Task(this.Task_Group_Id);
	// 				}
	// 				var notification_type_ = "Task";
	// 				var message = {
	// 					To_User: Save_work_experience[0].To_User_,
	// 					Task_Count: Save_work_experience[0].Task_Count_,
	// 					Notification_Type_Name: notification_type_,
	// 				};
	// 				this.socket.emit("new-message", message);
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

	Edit_Visa_Task(Student_Task_e: Student_Task, index) {
		this.Cas_Followup_View = true;
		this.Cas_FollowupPrevisa_View = false;
		this.Pre_Visa_View = false;
		// this.Cas_FollowupPrevisa_View=true;
		this.Visa_View = false;
		//this.Entry_View=true;
		this.Cas_Followup_ = Student_Task_e;
		this.Cas_Followup_ = Object.assign({}, Student_Task_e);

		if (this.Cas_Followup_.Followup_Date == null) {
			this.Cas_Followup_.Followup_Date = new Date();
			this.Cas_Followup_.Followup_Date = this.New_Date(
				this.Cas_Followup_.Followup_Date
			);
		} else
			this.Cas_Followup_.Followup_Date = this.New_Date(
				new Date(moment(this.Cas_Followup_.Followup_Date).format("YYYY-MM-DD"))
			);

		for (var i = 0; i < this.Task_Status_Data.length; i++) {
			if (
				this.Cas_Followup_.Task_Status ==
				this.Task_Status_Data[i].Task_Status_Id
			)
				this.Task_Status_ = this.Task_Status_Data[i];
		}

		for (var i = 0; i < this.Task_Item_Data_search.length; i++) {
			if (
				this.Cas_Followup_.Task_Item_Id ==
				this.Task_Item_Data_search[i].Task_Item_Id
			)
				this.Task_Item_search_ = this.Task_Item_Data_search[i];
		}
	}

	Edit_PreVisa_Task(Student_Task_e: Student_Task, index) {
		this.Cas_Followup_View = false;
		this.Cas_FollowupPrevisa_View = true;
		// this.Cas_FollowupPrevisa_View=true;
		this.Visa_View = false;
		this.Pre_Visa_View = false;
		//this.Entry_View=true;
		this.Cas_Followup_ = Student_Task_e;
		this.Cas_Followup_ = Object.assign({}, Student_Task_e);

		if (this.Cas_Followup_.Followup_Date == null) {
			this.Cas_Followup_.Followup_Date = new Date();
			this.Cas_Followup_.Followup_Date = this.New_Date(
				this.Cas_Followup_.Followup_Date
			);
		} else
			this.Cas_Followup_.Followup_Date = this.New_Date(
				new Date(moment(this.Cas_Followup_.Followup_Date).format("YYYY-MM-DD"))
			);

		for (var i = 0; i < this.Task_Status_Data.length; i++) {
			if (
				this.Cas_Followup_.Task_Status ==
				this.Task_Status_Data[i].Task_Status_Id
			)
				this.Task_Status_ = this.Task_Status_Data[i];
		}

		for (var i = 0; i < this.Task_Item_Data_search.length; i++) {
			if (
				this.Cas_Followup_.Task_Item_Id ==
				this.Task_Item_Data_search[i].Task_Item_Id
			)
				this.Task_Item_search_ = this.Task_Item_Data_search[i];
		}
	}

	Edit_Tasknew_Task(Student_Task_e: Student_Task, index) {
		
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

	Edit_PreAdmission_Task(Student_Task_e: Student_Task, index) {
		this.Cas_Followup_View = false;
		this.Cas_FollowupPrevisa_View = false;
		this.Cas_FollowupPreadmission_View = true;
		// this.Cas_FollowupPrevisa_View=true;
		this.Visa_View = false;
		this.Pre_Visa_View = false;
		this.Pre_Admission_View = false;
		this.Pre_Visa_Checklist_View=false;

		//this.Entry_View=true;
		this.Cas_Followup_ = Student_Task_e;
		this.Cas_Followup_ = Object.assign({}, Student_Task_e);

		if (this.Cas_Followup_.Followup_Date == null) {
			this.Cas_Followup_.Followup_Date = new Date();
			this.Cas_Followup_.Followup_Date = this.New_Date(
				this.Cas_Followup_.Followup_Date
			);
		} else
			this.Cas_Followup_.Followup_Date = this.New_Date(
				new Date(moment(this.Cas_Followup_.Followup_Date).format("YYYY-MM-DD"))
			);

		for (var i = 0; i < this.Task_Status_Data.length; i++) {
			if (
				this.Cas_Followup_.Task_Status ==
				this.Task_Status_Data[i].Task_Status_Id
			)
				this.Task_Status_ = this.Task_Status_Data[i];
		}

		for (var i = 0; i < this.Task_Item_Data_search.length; i++) {
			if (
				this.Cas_Followup_.Task_Item_Id ==
				this.Task_Item_Data_search[i].Task_Item_Id
			)
				this.Task_Item_search_ = this.Task_Item_Data_search[i];
		}
	}

	Delete_Visa_Task(Student_Task_Id, index) {
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
				this.Student_Service_.Delete_Visa_Task(Student_Task_Id).subscribe(
					(Delete_status) => {
						Delete_status = Delete_status[0];
						Delete_status = Delete_status[0].DeleteStatus_.data[0];
						if (Delete_status == 1) {
							this.Task_Student_Data.splice(index, 1);
							const dialogRef = this.dialogBox.open(DialogBox_Component, {
								panelClass: "Dialogbox-Class",
								data: { Message: "Deleted", Type: "false" },
							});
							//this.Clr_work_experience();
							this.Get_Visa_Task(this.Task_Group_Id);
						}
						// else
						// {
						// this.issLoading=false;
						// const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Can not be deleted because its already Used',Type:"2"}});
						// }
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

	Delete_PreVisa_Task(Student_Task_Id, index) {
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
				this.Student_Service_.Delete_Visa_Task(Student_Task_Id).subscribe(
					(Delete_status) => {
						Delete_status = Delete_status[0];
						Delete_status = Delete_status[0].DeleteStatus_.data[0];
						if (Delete_status == 1) {
							this.Task_Student_Previsa_Data.splice(index, 1);
							const dialogRef = this.dialogBox.open(DialogBox_Component, {
								panelClass: "Dialogbox-Class",
								data: { Message: "Deleted", Type: "false" },
							});
							//this.Clr_work_experience();
							this.Get_Previsa_Task(this.Task_Group_Id);
						}
						// else
						// {
						// this.issLoading=false;
						// const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Can not be deleted because its already Used',Type:"2"}});
						// }
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

	Delete_Tasknew(Student_Task_Id, index) {
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
				this.Student_Service_.Delete_Tasknew(Student_Task_Id).subscribe(
					(Delete_status) => {
						Delete_status = Delete_status[0];
						Delete_status = Delete_status[0].DeleteStatus_.data[0];
						if (Delete_status == 1) {
							this.Task_Student_Tasknew_Data.splice(index, 1);
							const dialogRef = this.dialogBox.open(DialogBox_Component, {
								panelClass: "Dialogbox-Class",
								data: { Message: "Deleted", Type: "false" },
							});
							//this.Clr_work_experience();
							this.Get_Tasknew_Task(this.Task_Group_Id);
						}
						// else
						// {
						// this.issLoading=false;
						// const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Can not be deleted because its already Used',Type:"2"}});
						// }
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

	Delete_Preadmission_Task(Student_Task_Id, index) {
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
				this.Student_Service_.Delete_Visa_Task(Student_Task_Id).subscribe(
					(Delete_status) => {
						Delete_status = Delete_status[0];
						Delete_status = Delete_status[0].DeleteStatus_.data[0];
						if (Delete_status == 1) {
							this.Task_Student_Preadmission_Data.splice(index, 1);
							const dialogRef = this.dialogBox.open(DialogBox_Component, {
								panelClass: "Dialogbox-Class",
								data: { Message: "Deleted", Type: "false" },
							});
							//this.Clr_work_experience();
							this.Get_Preadmission_Task(this.Task_Group_Id);
						}
						// else
						// {
						// this.issLoading=false;
						// const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Can not be deleted because its already Used',Type:"2"}});
						// }
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

	Clr_cas_Followup() {
		this.Cas_Followup_.Student_Task_Id = 0;
		this.Cas_Followup_.Remark = "";
		this.Cas_Followup_.Task_Details = "";
		this.Cas_Followup_.Task_Group_Id = 0;


		this.Cas_Followup_.Followup_Date = new Date();
		this.Cas_Followup_.Followup_Date = this.New_Date(
			this.Cas_Followup_.Followup_Date
		);
		
		// this.Cas_Followup_.End_Date = new Date();
		// this.Cas_Followup_.End_Date = this.New_Date(
		// 	this.Cas_Followup_.End_Date
		// );
		

		if (this.Task_Status_Data != null && this.Task_Status_Data != undefined)
			this.Task_Status_ = this.Task_Status_Data[0];

		if (this.Rating_Data != null && this.Rating_Data != undefined)
			this.Rating_ = this.Rating_Data[0];

		if (
			this.Task_Item_Data_search != null &&
			this.Task_Item_Data_search != undefined
		)
			this.Task_Item_search_ = this.Task_Item_Data_search[0];
	}

	Clr_Tasknewcas_Followup() {
		this.Cas_Followup_.Student_Task_Id = 0;
		this.Cas_Followup_.Remark = "";
		this.Cas_Followup_.Task_Details = "";
		this.Cas_Followup_.Task_Group_Id = 0;
		this.Cas_Followup_.Duration_in_Hours = 0;       

		this.Cas_Followup_.Followup_Date = new Date();
		this.Cas_Followup_.Followup_Date = this.New_Date(
			this.Cas_Followup_.Followup_Date
		);

		if (this.Task_Status_Data != null && this.Task_Status_Data != undefined)
			this.Task_Status_ = this.Task_Status_Data[0];

		if (
			this.Task_Item_Data_search != null &&
			this.Task_Item_Data_search != undefined
		)
			this.Task_Item_search_Tasknew_ = this.Task_Item_Data_search[0];

		// this.FollowUp_Department_TN = null;
		// this.Followup_Users_tN = null;
		this.Followup_Users_tempN.User_Details_Id = Number(this.Login_User);
		this.Followup_Users_tempN.User_Details_Name = this.Login_User_Name
		this.Followup_Users_Task_ = this.Followup_Users_tempN;

		this.FollowUp_Department_TempN.Department_Id = Number(this.Login_Department);
		this.FollowUp_Department_TempN.Department_Name = this.Login_Department_Name;
		this.FollowUp_Department_Task_ = this.FollowUp_Department_TempN;
	}

	Close_TasknewCas_Followup() {
		this.Cas_FollowupTasknew_View = false;
		this.Tasknew_View = true;

		this.Clr_Tasknewcas_Followup();
	}

	Close_Cas_Followup() {
		this.Cas_Followup_View = false;
		this.Cas_Followup_View = false
		this.Visa_View = true;
		this.Clr_cas_Followup();
	}

	Close_previsadetails() {
		this.Pre_Visa_View = true;
		this.Cas_FollowupPrevisa_View = false;
		this.Clr_cas_Followup();
	}

	Close_preadmissiondetails() {
		this.Pre_Admission_View = true;
		this.Cas_FollowupPreadmission_View = false;
		this.Clr_cas_Followup();
	}

	Close_Tasknewdetails() {
		this.Tasknew_View = true;
		this.Cas_FollowupTasknew_View = false;
		this.Clr_Tasknewcas_Followup();
		// this.Clr_cas_Followup();
	}

	Transfer_With_Application(Transfer_Source) {
		var Transfer_Application_Status = false;
		var Application_Fees_Status = false;
		var Bph_Approved = false;
		for (var j = 0; j < this.ApplicationDetails_Data.length; j++) {
			if (this.ApplicationDetails_Data[j].checkbox == true)
				Transfer_Application_Status = true;
		}

		if (Transfer_Source == "admission") {
			for (var j = 0; j < this.ApplicationDetails_Data.length; j++) {
				if (this.ApplicationDetails_Data[j].checkbox == true)
					Transfer_Application_Status = true;
			}

			for (var j = 0; j < this.ApplicationDetails_Data.length; j++) {
				if (this.ApplicationDetails_Data[j].checkbox == true) {
					if (this.ApplicationDetails_Data[j].Application_Fees_Paid == "-1")
						Application_Fees_Status = true;
				}
			}

			for (var j = 0; j < this.ApplicationDetails_Data.length; j++) {
				if (this.ApplicationDetails_Data[j].checkbox == true) {
					if (this.ApplicationDetails_Data[j].Bph_Approved_Status != 2)
						Bph_Approved = true;
				}
			}
		}

		if (Transfer_Source == "bph") {
			var Bph_Approved_Status = false;

			for (var j = 0; j < this.ApplicationDetails_Data.length; j++) {
				if (this.ApplicationDetails_Data[j].checkbox == true)
					Transfer_Application_Status = true;
			}

			for (var j = 0; j < this.ApplicationDetails_Data.length; j++) {
				if (this.ApplicationDetails_Data[j].checkbox == true) {
					if (this.ApplicationDetails_Data[j].Student_Approved_Status == 0)
						Bph_Approved_Status = true;
				}
			}

			// for (var j = 0; j < this.ApplicationDetails_Data.length; j++) {
			// 	if (this.ApplicationDetails_Data[j].checkbox == true) {
			// 		if (this.ApplicationDetails_Data[j].Bph_Approved_Status != 2)
			// 			Bph_Approved = true;
			// 	}
			// }
		}

		if (Transfer_Application_Status == false) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Select Atleast One Application", Type: "3" },
			});
			return;
		} else if (Application_Fees_Status == true) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Please Pay Application Fees", Type: "3" },
			});
			return;
		} else if (Bph_Approved_Status == true) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Please Make Student Approve", Type: "3" },
			});
			return;
		} else if (Bph_Approved == true) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Please Make Auditor Approve", Type: "3" },
			});
			return;
		} else {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: {
					Message: "Do you want to Transfer ?",
					Type: true,
					Heading: "Confirm",
				},
			});

			dialogRef.afterClosed().subscribe((result) => {
				if (result == "Yes") {
					this.Application_Transfer_.Application_List_Data = [];
					for (var i = 0; i < this.ApplicationDetails_Data.length; i++) {
						if (this.ApplicationDetails_Data[i].checkbox == true) {
							this.Application_Transfer_.Application_List_Data.push(
								Object.assign({}, this.ApplicationDetails_Data[i])
							);
						}
					}
					//document.getElementById("Save_Button").hidden=true;
					this.issLoading = true;
					this.Application_Transfer_.Student_Id = this.Profile_.Student_Id;
					this.Application_Transfer_.Transfer_Source = Transfer_Source;
					this.Application_Transfer_.Login_User = this.Login_User;
					this.Application_Transfer_.Login_Department = this.Login_Department;

					this.Student_Service_.Transfer_With_Application(
						this.Application_Transfer_
					).subscribe(
						(Save_status) => {
							if (Number(Save_status[0].Student_Id_) > 0) {
								const dialogRef = this.dialogBox.open(DialogBox_Component, {
									panelClass: "Dialogbox-Class",
									data: { Message: "Transferred", Type: "false" },
								});
								document.getElementById("Save_Button").hidden = false;
								this.Clr_ApplicationDetails();
								this.Get_ApplicationDetails();
								this.Search_Lead_button();
								this.Close_Click();
								if (Number(this.Login_User) != Save_status[0].To_User_) {
									var message = {
										Student_Name: Save_status[0].Student_Name_,
										From_User_Name: Save_status[0].From_User_Name_,
										Notification_Type_Name:
											Save_status[0].Notification_Type_Name_,
										Entry_Type: Save_status[0].Entry_Type_,
										To_User: Save_status[0].To_User_,
										Notification_Id: Save_status[0].Notification_Id_,
										Student_Id: Save_status[0].Student_Id_,
									};
									this.socket.emit("new-message", message);
								}
							} else if (Number(Save_status[0].Student_Id_) == -1) {
								const dialogRef = this.dialogBox.open(DialogBox_Component, {
									panelClass: "Dialogbox-Class",
									data: { Message: "User Not Found", Type: "3" },
								});
								document.getElementById("Save_Button").hidden = false;
								this.Clr_ApplicationDetails();
								this.Get_ApplicationDetails();
								this.Search_Lead_button();
							} else {
								const dialogRef = this.dialogBox.open(DialogBox_Component, {
									panelClass: "Dialogbox-Class",
									data: { Message: "Error Occured", Type: "2" },
								});
								document.getElementById("Save_Button").hidden = false;
							}
							this.issLoading = false;
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
			});
		}
	}
	Make_A_Call(Phone_Number) {
		// this.issLoading=true;
		this.Extension_Data_.Extension = this.Extension;
		this.Extension_Data_.Phone_No = Phone_Number.replace("+", "");

		this.Student_Service_.Make_A_Call(this.Extension_Data_).subscribe(
			(Save_status) => {
				Save_status = Save_status[0];
			}
		);
	}

	get_student_checklist(Student_Id_, Checklist_Type) {

		
		//  this.Clr_ApplicationDetails();
		this.Student_Checklist_Data = [];
		this.issLoading = true;

		this.Student_Service_.get_student_checklist(
			Student_Id_,
			Checklist_Type
		).subscribe(
			(Rows) => {
				if (Rows[0].length > 0) {
					this.Student_Checklist_Data = Rows[0];
					this.Student_Checklist_Country_Id = Rows[0][0].Country_Id;
				}
				this.issLoading = false;
			},
			(Rows) => {
				this.issLoading = false;
			}
		);
	}

	get_student_Preadmission_checklist(Student_Id_, Checklist_Type) {
		//  this.Clr_ApplicationDetails();
		this.Student_Checklist_Preadmission_Data = [];
		this.issLoading = true;

		this.Student_Service_.get_student_Preadmission_checklist(
			Student_Id_,
			Checklist_Type
		).subscribe(
			(Rows) => {
				if (Rows[0].length > 0) {
					this.Student_Checklist_Preadmission_Data = Rows[0];
					this.Student_Preadmission_Checklist_Country_Id =
						Rows[0][0].Country_Id;
				}
				this.issLoading = false;
			},
			(Rows) => {
				this.issLoading = false;
			}
		);
	}

	// Search_Department_Typeahead(event: any) {
	//
	// 	var Value = "";
	// 	if (event.target.value == "") Value = undefined;
	// 	else Value = event.target.value;

	// 		if (
	// 			this.Followup_Department_Data_T == undefined ||
	// 			this.Followup_Department_Data_T.length == 0
	// 		) {
	// 			this.issLoading = true;
	//
	// 			this.Student_Service_.Search_Department_Typeahead(
	// 				this.Profile_.Student_Id).subscribe(
	// 				(Rows) => {
	// 					if (Rows != null) {
	//
	// 						this.Followup_Department_Data_T = Rows[0];
	// 						this.issLoading = false;
	// 					}
	// 				},
	// 				(Rows) => {
	// 					this.issLoading = false;
	// 				}
	// 			);
	// 		}
	// 	//}
	// }

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
			this.Profile_.Student_Id
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

	// Save_CAS_NewTask_Followup()
	// {
	// 	if (
	// 		this.Task_Item_search_Tasknew_ == undefined ||
	// 		this.Task_Item_search_Tasknew_ == null ||
	// 		this.Task_Item_search_Tasknew_.Task_Item_Id == undefined ||
	// 		this.Task_Item_search_Tasknew_.Task_Item_Id == 0
	// 		) {
	// 		const dialogRef = this.dialogBox.open(DialogBox_Component, {
	// 		panelClass: "Dialogbox-Class",
	// 		data: { Message: "Select Task", Type: "3" },
	// 		});
	// 		return;
	// 		}

	//
	// 	 this.Cas_Followup_.Student_Id=this.Profile_.Student_Id;
	// 	 this.Cas_Followup_.Department_Id=this.FollowUp_Department_TN.Department
	// 	 this.Cas_Followup_.Department_Name=this.FollowUp_Department_TN.Dept_Name
	// 	 this.Cas_Followup_.To_User=this.Followup_Users_tN.User_Id;
	// 	 this.Cas_Followup_.To_User_Name=this.Followup_Users_tN.UserName;
	// 	 this.Cas_Followup_.Task_Status=this.Task_Status_.Task_Status_Id;
	// 	 this.Cas_Followup_.Status_Name=this.Task_Status_.Status_Name;
	// 	 this.Cas_Followup_.Task_Item_Id=this.Task_Item_search_Tasknew_.Task_Item_Id;

	// 	 this.Cas_Followup_.By_User_Id=Number(this.Login_User);
	// 	 this.Cas_Followup_.By_User_Name=this.Login_User_Name;

	// 	 this.Cas_Followup_.Followup_Date = this.New_Date(new Date(moment(this.Cas_Followup_.Followup_Date).format("YYYY-MM-DD")));
	// 	 this.Cas_Followup_.Task_Group_Id=this.Task_Group_Id;

	// 	 if (this.Save_Call_Status == true) return;
	// 		else this.Save_Call_Status = true;
	// 	this.issLoading=true;
	//
	// 	this.Student_Service_.Save_CAS_NewTask_Followup(this.Cas_Followup_).subscribe(Save_work_experience => {

	//
	// 		Save_work_experience=Save_work_experience[0];
	// 	if(Number(Save_work_experience[0].Student_Task_Id_)>0)
	// 	{

	// 	if(this.Task_Group_Id==4)
	// 	{

	//
	// 	this.Save_Call_Status = false;
	// 	const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Saved',Type:"false"}});
	// 	this.Clr_Tasknewcas_Followup();
	// 	this.Close_TasknewCas_Followup();
	// 	this.Get_Tasknew_Task(this.Task_Group_Id);
	// }

	// 	}
	// 	else{
	// 	const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
	// 	}
	// 	this.issLoading=false;
	// 	},
	// 	Rows => {
	// 	this.issLoading=false;
	// 	const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:Rows.error.error,Type:"2"}});
	// 	});
	// }

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

		if(this.Tostaff_Typeahead_View ==true)
		{
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

		// if (
		// 	this.Cas_Followup_.End_Date == undefined ||
		// 	this.Cas_Followup_.End_Date == null
		// ) {
		// 	const dialogRef = this.dialogBox.open(DialogBox_Component, {
		// 		panelClass: "Dialogbox-Class",
		// 		data: { Message: "Choose end Date", Type: "3" },
		// 	});
		// 	return;
		// }


		this.Cas_Followup_.Student_Id = this.Profile_.Student_Id;
		this.Cas_Followup_.Department_Id = this.FollowUp_Department_Task_.Department_Id;
		this.Cas_Followup_.Department_Name = this.FollowUp_Department_Task_.Department_Name;
		if(this.Tostaff_Typeahead_View ==true)
		{
			this.Cas_Followup_.To_User = this.Followup_Users_Task_.User_Details_Id;		
			this.Cas_Followup_.To_User_Name = this.Followup_Users_Task_.User_Details_Name;

		}
		else
		{
			this.Cas_Followup_.To_User = 0;	
			this.Cas_Followup_.To_User_Name = "";
		}
		
		
		this.Cas_Followup_.Task_Status = this.Task_Status_.Task_Status_Id;
		this.Cas_Followup_.Status_Name = this.Task_Status_.Status_Name;
		this.Cas_Followup_.Task_Item_Id =
			this.Task_Item_search_Tasknew_.Task_Item_Id;

		this.Cas_Followup_.By_User_Id = Number(this.Login_User);
		this.Cas_Followup_.By_User_Name = this.Login_User_Name;

		this.Cas_Followup_.Branch_Id = this.FollowUp_Branch_Task_.Branch_Id;
		this.Cas_Followup_.Branch_Name = this.FollowUp_Branch_Task_.Branch_Name;

		
		// this.Cas_Followup_.End_Date = this.New_Date(
		// 	new Date(moment(this.Cas_Followup_.End_Date).format("YYYY-MM-DD"))
		// );


		this.Cas_Followup_.Followup_Date = this.New_Date(
			new Date(moment(this.Cas_Followup_.Followup_Date).format("YYYY-MM-DD"))
		);
		this.Cas_Followup_.Task_Group_Id = this.Task_Group_Id;
		console.log('	this.Cas_Followup_: ', 	this.Cas_Followup_);


//
// 		const currentTime = new Date();
// 		const hoursToAdd = this.Cas_Followup_.Duration_in_Hours;
// 		const updatedTime = new Date(currentTime.getTime() + hoursToAdd * 60 * 60 * 1000);
// 		const utcDate = new Date(updatedTime);
// 		const localDate = utcDate.toLocaleString()
// 		console.log('localDate: ', localDate);

// 		this.Cas_Followup_.Duration =localDate;



		if (this.Save_Call_Status == true) return;
		else this.Save_Call_Status = true;
		this.issLoading = true;

		this.Student_Service_.Save_CAS_NewTask_Followup(
			this.Cas_Followup_
		).subscribe(
			(Save_work_experience) => {
				
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

					this.Profile_.Task_Status=1

					const dialogRef = this.dialogBox.open(DialogBox_Component, {
						panelClass: "Dialogbox-Class",
						data: { Message: "Saved", Type: "false" },
					});
					this.Save_Call_Status = false;

					// this.Get_WorkexperienceDetails(Save_work_experience[0].Student_Id_);
					this.Clr_Tasknewcas_Followup();
					this.Close_TasknewCas_Followup();
					this.Get_Tasknew_Task(this.Task_Group_Id);

					var notification_type_ = "Task";
					var message = {
						To_User: Save_work_experience[0].To_User_,
						Task_Count: Save_work_experience[0].Task_Count_,
						Student_Name: Save_work_experience[0].Student_Name_,
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
				}
				
				else if (Number(Save_work_experience[0].To_User_) == -1) {
					this.Save_Call_Status = false;
					const dialogRef = this.dialogBox.open(DialogBox_Component, {
						panelClass: "Dialogbox-Class",
						data: { Message: "No User Found", Type: "3" },
					});
					
					//  }
				}
				
				
				
				
				
				else {
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

	Load_Automatic_Departments() {
		this.issLoading = true;
		this.Student_Service_.Load_Automatic_Departments().subscribe(
			(Rows) => {
				if (Rows != null) {
					
					this.Automatic_Department_Data = Rows[0];
					this.Enable_Call = Rows[1][0].Settings_Value;
					this.Enable_Highest_Department = Rows[1][0].Highest_Department_Profile;
					this.Enable_Class = Rows[1][0].Class_Profile;
					this.Enable_Highest_Status = Rows[1][0].Highest_Status_Profile;

					if (this.Enable_Call == 1) this.Enable_Call_Button = true;
					else this.Enable_Call_Button = false;

					if (this.Enable_Highest_Department == 1) this.Enable_Highest_Department_Profile = true;
					else this.Enable_Highest_Department_Profile = false;

					if (this.Enable_Highest_Status == 1) this.Enable_Highest_Status_Profile = true;
					else this.Enable_Highest_Status_Profile = false;

					if (this.Enable_Class == 1) this.Enable_Class_Profile = true;
					else this.Enable_Class_Profile = false;

					this.Documents_Data = Rows[2];
					// this.Documents_Temp.Document_Id = 0;
					// this.Documents_Temp.Document_Name = "Select";
					this.Documents_Data.unshift(this.Documents_Temp);
					// this.Documents_ = this.Documents_Data[0];
					console.log('this.Student_Documents_Array: ', this.Student_Documents_Array);
					console.log('this.Student_Documents_Array[0].Documents_ : ', this.Student_Documents_Array );
					this.issLoading = false;

				}
			},
			(Rows) => {
				this.issLoading = false;
			}
		);
	}




	// File_Change_std_Doc(event: Event) {
	// 	const file = (event.target as HTMLInputElement).files;
	// 	console.log('	this.ImageFile_Doc: ', 	this.ImageFile_Doc);
	// 	this.ImageFile_Doc=file;
	// 	console.log('file: ', file);
	// 	this.Image_Photo = file[0].name;
	// 	console.log('	this.Image_Photo : ', 	this.Image_Photo );
	// 	// Document_data_view.Image_Photo=this.ImageFile_Doc[0].name
	// 	// Document_data_view.ImageFile_Doc=file
	// 	// Document_data_view.Document_Name=''
	// }
	application_File_Change_std_Doc(Document_data_view,event: Event) {
		console.log('Document_data_view: ', Document_data_view);
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

	setSelectedDocument(document: any) {
		this.selectedDocumentId = document.Document_Id; // Store Document_Id
		console.log('document.Document_Id: ', document.Document_Id);
		this.selectedDocumentName = document.Document_Name; // Store Document_Name
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
		console.log('this.Student_Documents_: ', this.Student_Documents_);
	  }
	//   upload(doc) {
	// 	return new Promise<void | void>((resolve, reject) => {
	// 	  if (this.If_file_changed && doc) {
	// 		const file = doc.item(0);
	// 		this.Student_Service_.uploadFile(file)
	// 		  .then(() => {
	// 			resolve(); // No argument is needed for resolve
	// 		  })
	// 		  .catch((error) => reject(error));
	// 	  } else {
	// 		// Resolve immediately if no file changed
	// 		resolve();
	// 	  }
	// 	});
	//   }
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
	  
	  Add_Student_Document(){
		this.Student_Documents_Array.push(new Student_Document())
		console.log('this.Student_Documents_Array: ', this.Student_Documents_Array);

		this.Student_Documents_Array[	this.Student_Documents_Array.length-1].Documents_=this.Documents_Data[0]

	  }
	  Save_Student_Document() {
		const uploadPromises = [];
		this.Save_Call_Status = false;
		//this.issLoading=true;
	this.Student_Documents_Array.forEach(data=>{
		
		if (data.Documents_ == undefined || data.Documents_ == null) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
			  panelClass: "Dialogbox-Class",
			  data: { Message: "Select Document Name", Type: "3" },
			});
			return;
		  }
		  if (
			data.Documents_.Document_Id == undefined ||
			data.Documents_.Document_Id == null ||
			data.Documents_.Document_Id == 0
			) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
			  panelClass: "Dialogbox-Class",
			  data: { Message: "Select Document Name", Type: "3" },
			});
			return;
		  }
	  
		  if (
			data.Image_Photo == null ||
			data.Image_Photo == undefined ||
			data.Image_Photo == ""
		  ) {
			data.Image_Photo = "";
			data.ImageFile_Doc = [];
	  
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
			  panelClass: "Dialogbox-Class",
			  data: { Message: "Choose a File", Type: "3" },
			});
			return;
		  }
		  // if (
		  //  this.Student_Documents_.Description == null ||
		  //  this.Student_Documents_.Description == undefined ||
		  //  this.Student_Documents_.Description == ""
		  // ) {
		  //  const dialogRef = this.dialogBox.open(DialogBox_Component, {
		  //    panelClass: "Dialogbox-Class",
		  //    data: { Message: "Enter Document Description", Type: "3" },
		  //  });
		  //  return;
		  // }


		  
		  if (data.Documents_.Document_Id === 123) {
			// First, check if ImageFile_Doc is defined and not empty
			if (data.ImageFile_Doc && data.ImageFile_Doc.length > 0) {
			  const fileType = data.ImageFile_Doc[0].type; // Access the file type of the first file
		  
			  if (fileType !== "image/jpeg" && fileType !== "image/png") {
				const dialogRef = this.dialogBox.open(DialogBox_Component, {
				  panelClass: "Dialogbox-Class",
				  data: { Message: "Only JPEG files are allowed for this document.", Type: "3" },
				});
				return; // Stop the process if the file is not JPEG
			  }
			} else {
			  // If no file is selected or the array is empty, show an error dialog
			  const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "No file selected", Type: "3" },
			  });
			  return; // Stop the process
			}
		  }



		  
		  this.Student_Documents_.Student_Id = this.Student_Id_Edit;
		  this.Student_Documents_.File_Name = data.Image_Photo;
		  this.Student_Documents_.Document_Id = data.Documents_.Document_Id;
		  this.Student_Documents_.Document_Name = data.Documents_.Document_Name;
		  this.Student_Documents_.Description = data.Description;
		  let Documents={...this.Student_Documents_}
		  console.log('Documents: ', Documents);
		//   if (this.Save_Call_Status == true) return;
		//   else this.Save_Call_Status = true;
		console.log('this.Save_Call_Status =: ', this.Save_Call_Status );
		if (this.Save_Call_Status == true) return;
		else this.Save_Call_Status = true;
		  this.issLoading = true;
		  
	// 	  uploadPromises.push(

	// 	  this.upload(data.ImageFile_Doc).then(s3Uploaded=>{
	// 		console.log("this.Student_Documents_: ", data);
			
	// 		return this.Student_Service_.Save_Student_Document(
	// 			Documents,
	// 			data.ImageFile_Doc,
	// 			this.Document_File_Array
	// 		  ).toPromise(); // Convert observable to promise
	// 		})
	// 	  );
		
	// 	  }
	// )
		uploadPromises.push(
			this.upload(data.ImageFile_Doc,this.Student_Documents_.Student_Id).then(key => {
			  if (typeof key === 'string') {
				console.log('key: ', key);
				Documents.File_Name = key;  // Set the S3 key as the file name
		
			  }
			  console.log("Documents after upload: ", Documents);
			  
			  return this.Student_Service_.Save_Student_Document(
				Documents,
				data.ImageFile_Doc,
				this.Document_File_Array
			  ).toPromise(); // Convert observable to promise
			})
		  );
		});
	  
		
	Promise.all(uploadPromises)
  .then((saveStatusArray) => {
	console.log('saveStatusArray: ', saveStatusArray);


      if (Number(saveStatusArray[0][0][0].Student_Id_) > 0) {
		const dialogRef = this.dialogBox.open(DialogBox_Component, {
						  panelClass: "Dialogbox-Class",
						  data: { Message: "Saved", Type: "false" },
						});
						this.Save_Call_Status == false;
						this.Get_Student_Document(this.Student_Id_Edit);
						this.Search_Document();
						const distinctUserIds = saveStatusArray[0][0][0].Distinct_User_Ids;
						console.log('saveStatusArray[0][0][0].Distinct_User_Ids: ', saveStatusArray[0][0][0].Distinct_User_Ids);
				
if (distinctUserIds && Array.isArray(distinctUserIds)) {
    distinctUserIds.forEach(userId => {
        console.log('distinctUserIds: ', distinctUserIds);
        console.log('userId: ', userId);
    
        const message = {
            From_User_Name: this.Login_User_Name,
            Notification_Type_Name: 'Document Saved',
            Entry_Type: 4,
            To_User: userId,
            Notification_Id: Date.now()
        };
        this.socket.emit("new-message", message);
    });
}
						this.issLoading = false;

						this.Save_Call_Status = false;
					
					
						this.Clr_Document();



						
					}  else {
		const dialogRef = this.dialogBox.open(DialogBox_Component, {
						  panelClass: "Dialogbox-Class",
						  data: { Message: "Error Occured", Type: "2" },
						});
						this.issLoading = false;
					}
      })
  

  .catch(error => {
    console.error("Error in Promise.all:", error);
	this.issLoading = false;
			  const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: error.error.error, Type: "2" },
  });

	  })}



	  Save_Student_Task_Document() {
		const uploadPromises = [];

		//this.issLoading=true;
	// this.Student_Documents_Array.forEach(data=>{
		
		// if (this.Documents1_ == undefined || this.Documents1_ == null) {
		// 	const dialogRef = this.dialogBox.open(DialogBox_Component, {
		// 	  panelClass: "Dialogbox-Class",
		// 	  data: { Message: "Select Document Name", Type: "3" },
		// 	});
		// 	return;
		//   }
		//   if (
		// 	this.Documents1_.Document_Id == undefined ||
		// 	this.Documents1_.Document_Id == null ||
		// 	this.Documents1_.Document_Id == 0
		// 	) {
		// 	const dialogRef = this.dialogBox.open(DialogBox_Component, {
		// 	  panelClass: "Dialogbox-Class",
		// 	  data: { Message: "Select Document Name", Type: "3" },
		// 	});
		// 	return;
		//   }
		//   
		//   if (
		// 	this.Cas_Followup_.Image_Photo == null ||
		// 	this.Cas_Followup_.Image_Photo == undefined ||
		// 	this.Cas_Followup_.Image_Photo == ""
		//   ) {
		// 	this.Cas_Followup_.Image_Photo = "";
		// 	this.ImageFile_Doc = [];
	  
		// 	const dialogRef = this.dialogBox.open(DialogBox_Component, {
		// 	  panelClass: "Dialogbox-Class",
		// 	  data: { Message: "Choose a File", Type: "3" },
		// 	});
		// 	return;
		//   }

		  this.Student_Documents_.Student_Id = this.Student_Id_Edit;
		  this.Student_Documents_.File_Name = this.Cas_Followup_.Image_Photo;
		  this.Student_Documents_.Document_Id = this.Documents1_.Document_Id;
		  this.Student_Documents_.Document_Name = this.Documents1_.Document_Name;
		  this.Student_Documents_.Description = this.Cas_Followup_.Task_doc_Description;
		  let Documents={...this.Student_Documents_}
		  console.log('Documents: ', Documents);
		//   if (this.Save_Call_Status == true) return;
		//   else this.Save_Call_Status = true;
		// if (this.Save_Call_Status == true) return;
		// else this.Save_Call_Status = true;
		  this.issLoading = true;
		  
		  uploadPromises.push(

		  this.upload(this.Cas_Followup_.ImageFile_Doc,this.Student_Documents_.Student_Id).then(s3Uploaded=>{
			// console.log("this.Student_Documents_: ", data);
			
			return this.Student_Service_.Save_Student_Document(
				Documents,
				this.Cas_Followup_.ImageFile_Doc,
				this.Document_File_Array
			  ).toPromise(); // Convert observable to promise
			})
		  );
		
		//   }

		//   )
	Promise.all(uploadPromises)
  .then((saveStatusArray) => {


      if (Number(saveStatusArray[0][0][0].Student_Id_) > 0) {
		
		// const dialogRef = this.dialogBox.open(DialogBox_Component, {
		// 				  panelClass: "Dialogbox-Class",
		// 				  data: { Message: "Saved", Type: "false" },
		// 				});
						this.issLoading = false;

						// this.Save_Call_Status = false;
						this.Get_Student_Document(this.Student_Id_Edit);
						this.Clr_Document();
      } else {
		const dialogRef = this.dialogBox.open(DialogBox_Component, {
						  panelClass: "Dialogbox-Class",
						  data: { Message: "Error Occured", Type: "2" },
						});
						this.issLoading = false;
					}
      })
  

  .catch(error => {
    console.error("Error in Promise.all:", error);
	this.issLoading = false;
			  const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: error.error.error, Type: "2" },
  });

	  })}


// 	  this.Student_Service_.Save_Student_Document(
// 		Documents,
// 	data.ImageFile_Doc,
// 		this.Document_File_Array
// 	  ).subscribe(
// 		(Save_status) => {
// 		  //Save_status = Save_status[0];
  
// 		  if (Number(Save_status[0][0].Student_Id_) > 0) {
// 			const dialogRef = this.dialogBox.open(DialogBox_Component, {
// 			  panelClass: "Dialogbox-Class",
// 			  data: { Message: "Saved", Type: "false" },
// 			});
// 			this.Save_Call_Status = false;
// 			this.Get_Student_Document(this.Student_Id_Edit);
// 			// this.Clr_Document();
// 		  } else {
// 			const dialogRef = this.dialogBox.open(DialogBox_Component, {
// 			  panelClass: "Dialogbox-Class",
// 			  data: { Message: "Error Occured", Type: "2" },
// 			});
// 		  }
// 		  this.issLoading = false;
// 		},
// 		(Rows) => {
// 		  this.issLoading = false;
// 		  const dialogRef = this.dialogBox.open(DialogBox_Component, {
// 			panelClass: "Dialogbox-Class",
// 			data: { Message: Rows.error.error, Type: "2" },
// 		  });
// 		}
// 	  );
// })

	Edit_Documents(Student_Documents_temp: Student_Document, index) {
		// this.Clr_Document()
		console.log('Student_Documents_temp: ', Student_Documents_temp);
		 // Add this line to open the upload form
		 this.isUploadDocumentVisible = true;
		this.Student_Documents_ = Object.assign({}, Student_Documents_temp);
		this.Image_Photo = this.Student_Documents_.File_Name;
		for (var i = 0; i < this.Documents_Data.length; i++) {
			if (
				this.Student_Documents_.Document_Id ==
				this.Documents_Data[i].Document_Id
			)
				this.Documents_ = this.Documents_Data[i];
		}
		this.Student_Documents_Array[0].Student_Id = 	this.Student_Documents_.Student_Id;
		this.Student_Documents_Array[0].Description = 	this.Student_Documents_.Description;
		
		this.Student_Documents_Array[0].Document_Id =this.Documents_.Document_Id;
		this.Student_Documents_Array[0].Document_Name =this.Documents_.Document_Name;
		this.Student_Documents_Array[0].Image_Photo=this.Image_Photo 
		this.Student_Documents_Array[0].Documents_=	this.Documents_ 
		this.Get_Student_Document(this.Student_Documents_.Student_Id);
	}

	Delete_Student_Document(Student_Document_Id_Temp_, index) {
		
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

				if (Student_Document_Id_Temp_ > 0) {
					this.Student_Service_.Delete_Student_Document(
						Student_Document_Id_Temp_
					).subscribe(
						(Delete_status) => {
							
							if (Delete_status[0][0].Student_Document_Id_ > 0) {
								this.Student_Documents_Data.splice(index, 1);
								//this.Document_File_Array.splice(index, 1);
								const dialogRef = this.dialogBox.open(DialogBox_Component, {
									panelClass: "Dialogbox-Class",
									data: { Message: "Deleted", Type: "false" },
								});
								
								// this.Get_Student_Document(this.Student_Id_Edit);
						this.Search_Document();
						// this.Clr_Document();
							
							} 
					
							else {
								this.issLoading = false;
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
				} else {
					
					this.Document_Array.splice(index, 1);
					this.Document_File_Array.splice(index, 1);
					this.issLoading = false;
					const dialogRef = this.dialogBox.open(DialogBox_Component, {
						panelClass: "Dialogbox-Class",
						data: { Message: "Deleted", Type: "false" },
					});
				}
			}
		});
	}

	Get_FollowUp_History_Withdate() {
		this.Transfer_view = false;
		this.Followphistoryview = true;
		this.Followupdetailsview = false;
		this.moredetailsbutton=true;
		// this.profile_View=false;
		//  this.Student_Id=this.Student_Data[this.Lead_EditIndex].Student_Id;
		let top = document.getElementById("Bottomdiv");
		if (top !== null) {
		  top.scrollIntoView();
		  top = null;
		}
		if (this.Show_Followup_History == true) {
		  this.Show_Followup_History = false;
		  this.issLoading = true;
	
		  this.Student_Service_.Get_FollowUp_History_Withdate(
			this.Student_Id
		  ).subscribe(
			(Rows) => {
			  this.issLoading = false;
			  if (Rows.returnvalue.FollowUp.length > 0)
				this.Followp_History_Data_Details = Rows.returnvalue.FollowUp;
			},
			(Rows) => {
			  this.issLoading = false;
			  const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Error Occured", Type: "2" },
			  });
			}
		  );
		} else this.Show_Followup_History = true;
	  }


// 	Transfer_Cofirmation_Register(Transfer_Source) {
	


// 		this.Transfer_.Student_Id=this.Profile_.Student_Id;
// 		this.Transfer_.transfer_source="undefined";
// 		this.Transfer_.Login_User=Number(this.Login_User);
// 		this.Transfer_.Transfer_department_Id=this.Transfer_department_Id;
// 		this.Transfer_.Transfer_Remark="";
// 		this.Transfer_.Transfer_Status_Id=this.Transfer_departmentstatus_Id;
// 		this.Transfer_.Transfer_Status_Name=this.Transfer_departmentstatusname;
// 		this.Transfer_.Substatus_Id=0;
// 		this.Transfer_.Substatus_Name="undefined";
// 		this.Transfer_.Application_Id_Ref=0;
// 		this.Transfer_.Followup_Branch_Id=this.FollowUp_.Branch;
// 		this.Transfer_.Followup_Branch_Name=this.FollowUp_.Branch_Name;
// 		this.Transfer_.Followup_Department_Id=this.FollowUp_.Department;
// 		this.Transfer_.Followup_Department_Name=this.FollowUp_.Department_Name;
// 		this.Transfer_.Followup_Status_Id=this.FollowUp_.Status_Id;
// 		this.Transfer_.Followup_Status_Name=this.FollowUp_.Department_Status_Name;
// 		this.Transfer_.Followup_To_User_Id=this.FollowUp_.To_User_Id;
// 		this.Transfer_.Followup_To_User_Name=this.FollowUp_.To_User_Name;
// 		this.Transfer_.Next_FollowUp_Date = this.New_Date(
// 			new Date(moment(this.FollowUp_.Next_FollowUp_Date).format("YYYY-MM-DD"))
// 		);


// 		this.issLoading = true;
// 
// 		this.Student_Service_.Transfer_Cofirmation(
// 			this.Transfer_
// 		).subscribe(
// 			(Save_status) => {
// 				if (Save_status[0][0].Student_Id_ > 0) {
				
// 					if (Number(this.Login_User) != Save_status[0][0].User_Id_) {
// 						var message = {
// 							Student_Name: Save_status[0][0].Student_Name_,
// 							From_User_Name: Save_status[0][0].From_User_Name_,
// 							Notification_Type_Name: Save_status[0][0].Notification_Type_Name_,
// 							Entry_Type: Save_status[0][0].Entry_Type_,
// 							To_User: Save_status[0][0].User_Id_,
// 							Notification_Id: Save_status[0][0].Notification_Id_,
// 							Student_Id: Save_status[0][0].Student_Id_,
// 						};
// 						this.socket.emit("new-message", message);
// 					}
// 				} else if (Save_status[0][0].Student_Id_ == -1) {
// 					this.Total_Rows = this.Total_Rows - this.Student_Data.length;

					
// 				} else {
// 					this.issLoading = false;
// 					const dialogRef = this.dialogBox.open(DialogBox_Component, {
// 						panelClass: "Dialogbox-Class",
// 						data: { Message: "Error Occured", Type: "2" },
// 					});
// 				}
// 				this.issLoading = false;
// 			},
// 			(Rows) => {
// 				this.issLoading = false;
// 				const dialogRef = this.dialogBox.open(DialogBox_Component, {
// 					panelClass: "Dialogbox-Class",
// 					data: { Message: "Error Occured", Type: "2" },
// 				});
// 			}
// 		);
	
// 	}







	Download_Documents(Photo) {
		var bs = environment.FilePath;
		var s = bs + Photo;
		window.open(s, "_blank");
	}
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

		this.Cas_Followup_.Rating_Id = 0;
		this.Cas_Followup_.Rating_Name = "";


		if(this.Rating_View==true){
		
			if (
				this.Rating_ == undefined ||
				this.Rating_ == null ||
				this.Rating_.Rating_Id == undefined ||
				this.Rating_.Rating_Id == 0
			) {
				const dialogRef = this.dialogBox.open(DialogBox_Component, {
					panelClass: "Dialogbox-Class",
					data: { Message: "Select Rating", Type: "3" },
				});
				return;
			}
		
		this.Cas_Followup_.Rating_Id = this.Rating_.Rating_Id;
		this.Cas_Followup_.Rating_Name = this.Rating_.Rating_Name;
		
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

		
		
		



if(this.Task_Doc_View==true){
	if (this.Documents1_ == undefined || this.Documents1_ == null) {
		const dialogRef = this.dialogBox.open(DialogBox_Component, {
		  panelClass: "Dialogbox-Class",
		  data: { Message: "Select Document Name", Type: "3" },
		});
		return;
	  }
	  if (
		this.Documents1_.Document_Id == undefined ||
		this.Documents1_.Document_Id == null ||
		this.Documents1_.Document_Id == 0
		) {
		const dialogRef = this.dialogBox.open(DialogBox_Component, {
		  panelClass: "Dialogbox-Class",
		  data: { Message: "Select Document Name", Type: "3" },
		});
		return;
	  }
	  
	  if (
		this.Cas_Followup_.Image_Photo == null ||
		this.Cas_Followup_.Image_Photo == undefined ||
		this.Cas_Followup_.Image_Photo == ""
	  ) {
		this.Cas_Followup_.Image_Photo = "";
		this.ImageFile_Doc = [];
  
		const dialogRef = this.dialogBox.open(DialogBox_Component, {
		  panelClass: "Dialogbox-Class",
		  data: { Message: "Choose a File", Type: "3" },
		});
		return;
	  }
	this.Save_Student_Task_Document()
}




		if (this.Save_Call_Status == true) return;
		else this.Save_Call_Status = true;
		this.issLoading = true;
		this.Student_Service_.Save_Cas_Followup(this.Cas_Followup_).subscribe(
			(Save_work_experience) => {
				
				this.Count_Task_  = 0
				Save_work_experience = Save_work_experience[0];
				if (Number(Save_work_experience[0].Student_Task_Id_) > 0) {
					this.Save_Call_Status = false;
					const dialogRef = this.dialogBox.open(DialogBox_Component, {
						panelClass: "Dialogbox-Class",
						data: { Message: "Saved", Type: "false" },
					});
					
					this.Count_Task_ = Number(Save_work_experience[0].Task_Count_)
					// this.Get_WorkexperienceDetails(Save_work_experience[0].Student_Id_);
					this.Clr_cas_Followup();
					this.Close_Task_Followup();
					this.Get_Tasknew_Task(4);
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
	S
	Close_Task_Followup() {
		this.Cas_Followup_View = false;
		this.Tasknew_View = true;
		this.Historydiv = false;
		this.Cas_Followup_View = false;
		this.Cas_FollowupTasknew_View = false;
		this.Visa_View = false
		// this.Cas_FollowupPrevisa_View = false
		this.Close_TasknewCas_Followup()
	}
	Task_History_Click(Student_Task_Id_, Student_Name, To_User_Name) {
		this.student_name = Student_Name;
		this.to_user_name = To_User_Name;
		this.Student_Task_Id = Student_Task_Id_;
		this.Historydiv = true;
		this.Tasknew_View = false;
		this.Cas_Followup_View = false;
		this.Get_Task_History(this.Student_Task_Id);
	}
	Close_History() {
		this.Historydiv = false;
		this.Tasknew_View = true;
		this.Cas_Followup_View = false;
		this.Cas_FollowupTasknew_View = false;
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

	Load_StatusType() {
		this.issLoading = true;
		this.Department_Status_Service_.Load_StatusType().subscribe(
			(Rows) => {
				
				if (Rows != null) {


					
					if(Rows[1][0].Round_Robin ==1)
					{

					this.Roundrobin_check=1
					this.Branch_Typeahead_View = false;
					this.Department_Typeahead_View = false;
					this.Tostaff_Typeahead_View = false;
					

					}
					else
					{
						this.Roundrobin_check=0
						this.Branch_Typeahead_View = true;
						this.Department_Typeahead_View = true;
						this.Tostaff_Typeahead_View = true;
					
					}
					
					this.issLoading = false;
				}
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


	  View_Documents(Photo: string) {
		this.selectedPdfPreview = null;
		const basePath = environment.FilePath;
	  
		// Manually encode problematic characters
		const encodedPhoto = Photo.replace(/[:\s+()]/g, (match) => {
		  switch (match) {
			case ':':
			  return '%3A';
			case ' ':
			  return '%20';
			case '+':
			  return '%2B';
	
			default:
			  return match;
		  }
		});
	  
		// Combine the base path with the modified photo path
		const s = basePath + encodedPhoto;
	  
		this.pdfload = false;
		this.preview_div = true;
	  
		// Sanitize the URL for safe use in Angular
		this.selectedPdfPreview = this.sanitizeUrl(s);
	  
		console.log('this.selectedPdfPreview: ', this.selectedPdfPreview);
	  
		this.pdfload = true;
	  }
	  
	//   sanitizeUrl(url: string): SafeResourceUrl {
	// 	return this.sanitizer.bypassSecurityTrustResourceUrl(url);
	//   }


// 	  View_Documents(Photo) {
		
//         this.selectedPdfPreview=null
//         var bs = environment.FilePath;
//         var s = bs + Photo;
        
//     this.pdfload=false

// this.preview_div=true
//     this.selectedPdfPreview=this.sanitizeUrl(s)
//     console.log('this.selectedPdfPreview: ', this.selectedPdfPreview);
//     this.pdfload=true
    
//     }

	closePdfPreview()
	{
		this.preview_div=false;
	}



sanitizeUrl(url: string): SafeResourceUrl {

    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  Close_Click_Comment()
  {
this.Add_Comment_View=false
this.Change_Status_View = false;

this.application_details_View = true;

// this.Applicationmodal_View = true;


  }



  validateInput(event) {
	const key = event.key;
	const isNumber = /[0-9]/.test(key);
	if (!isNumber) {
		event.preventDefault();
	}
	const inputValue = event.target.value;
	if (inputValue && inputValue.length >= 5) { // Limiting to 5 digits
		event.preventDefault();
	}
}

validateInput1(event) {
	const key = event.key;
	const isNumber = /[0-9]/.test(key);
	if (!isNumber) {
		event.preventDefault();
	}
	const inputValue = event.target.value;
	if (inputValue && inputValue.length >= 10) { // Limiting to 5 digits
		event.preventDefault();
	}
}

// Change_Task_Department(Department,i)
// {
// 	let deept =[...this.process_Task_Data]
// 	deept[i].Department_Id=Department.Department_Id
// 	deept[i].Department_Name=Department.Department_Name

// 	this.process_Task_Data=deept

// 	console.log('	this.process_Task_Data: ', 	this.process_Task_Data);


// let a =5

// }
Get_ApplicationDetailswise_Dataview(application_details_id_) {
	
	this.Applicationdetails_Dataview=[];
	this.Data_View = true;
	this.Search_Div = false;
	this.Applicationmodal_View = false;
	this.application_details_View = false;

	this.Change_Status_View=false;

	this.Change_User_View=false;
	
//  #this.FeesId_History = Number(this.Application_fees_paid);
	this.Clr_ApplicationDetails();
	this.issLoading = true;
	
	this.Student_Service_.Get_ApplicationDetailswise_Dataview(
		application_details_id_
	).subscribe(
		(Rows) => {
				
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
Close_Click_DataView(){
	this.Data_View= false;
	this.Change_Status_View=false;
	this.application_details_View = true;
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


let a =5

}


/*** Added on 13-06-2024 */

Create_Payment() {
	this.Paymentmodal_View = true;
	this.Payment_Tab_View = true;
	this.Payment_View =false;
	this.Clr_Payment_Tab_Details();

	// for (var i = 0; i < this.Accounts_From_Data.length; i++) {
	// 	if (
	// 		this.enq_clint_id_ ==
	// 		this.Accounts_From_Data[i].Client_Accounts_Id
	// 	)
	// 		this.Accounts_To_ = this.Accounts_From_Data[i];
	// }
}


Close_Payment() {
	this.Paymentmodal_View = false;
	this.Payment_Tab_View = true;
	this.Payment_View =true;
	this.Get_Payment_Tab_Details();
	// this.clr_Accounts();
	// this.Search_Receipt();
}


Clr_Payment_Tab_Details()
{
	
	
	this.Payment_Tab_Details_.Payment_Tab_Id  =0; 
	this.Payment_Tab_Details_.Student_Id  =0; 
	this.Payment_Tab_Details_.Date =null; 
	this.Payment_Tab_Details_.Voucher_No ="";
	this.Payment_Tab_Details_.From_Account_Id  =0; 
	this.Payment_Tab_Details_.To_Account_Id  =0; 
	this.Payment_Tab_Details_.Amount =0;
	this.Payment_Tab_Details_.Description ="";
	this.Payment_Tab_Details_.Journel_Entry_Id =0; 
	this.Payment_Tab_Details_.User_Id=0;
	this.Payment_Tab_Details_.Payment_Voucher_Id =0; 

	if (
		this.Enquiry_Source_Data != null &&
		this.Enquiry_Source_Data != undefined
	)
		this.Accounts_To_Enquiry_Source_ = this.Enquiry_Source_Data[0];

		if (
			this.To_Account_Data != null &&
			this.To_Account_Data != undefined
		)
			this.Accounts_ = this.To_Account_Data[0];
		
}

Get_Payment_Tab_Details() {
	this.issLoading = true;
	this.Count_Task_  = 0
	this.Student_Service_.Get_Payment_Tab_Details(
		this.Profile_.Student_Id
	).subscribe(
		(Rows) => {
			
			this.Payment_Tab_Details_Search_Data = Rows[0];
			// this.Count_Task_ =Rows[1][0].Student_Task_Count
			this.issLoading = false;
		},
		(Rows) => {
			this.issLoading = false;
		}
	);
}


Edit_Payment_Tab(Payment_Tab_Details_e: Payment_Tab_Details, index) {
	// this.Entry_View=true;
	// this.Fees_Receipt_=Fees_Receipt_e;
	this.Create_Payment();
	this.Payment_Tab_Details_ = Payment_Tab_Details_e;
	this.Payment_Tab_Details_ = Object.assign({}, Payment_Tab_Details_e);
	if (this.Payment_Tab_Details_.Date == null) {
		this.Payment_Tab_Details_.Date = new Date();
		this.Payment_Tab_Details_.Date = this.New_Date(
			this.Payment_Tab_Details_.Date
		);
	} else
		this.Payment_Tab_Details_.Date = this.New_Date(
			new Date(moment(this.Payment_Tab_Details_.Date).format("YYYY-MM-DD"))
		);


		for (var i = 0; i < this.To_Account_Data.length; i++) {
			if (
				this.Payment_Tab_Details_.From_Account_Id ==
				this.To_Account_Data[i].Client_Accounts_Id
			)
				this.Accounts_ = this.To_Account_Data[i];
		}
		// for (var i = 0; i < this.Accounts_From_Data.length; i++) {
		// 	if (
		// 		this.Payment_Tab_Details_.To_Account_Id ==
		// 		this.Accounts_From_Data[i].Client_Accounts_Id
		// 	)
		// 		this.Accounts_To_ = this.Accounts_From_Data[i];
		// }

		for (var i = 0; i < this.Accounts_From_Data.length; i++) {
			if (
				this.enq_clint_id_ ==
				this.Accounts_From_Data[i].Client_Accounts_Id
			)
				this.Accounts_To_ = this.Accounts_From_Data[i];
		}

	
}


Delete_Payment_Tab_Details(Payment_Tab_Id_, index) {
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
			
			this.Student_Service_.Delete_Payment_Tab_Details(
				Payment_Tab_Id_
			).subscribe(
				(Delete_status) => {
					
					Delete_status = Delete_status[0];
					Delete_status = Delete_status[0].Payment_Tab_Id_;
					if (Number(Delete_status) >= 1) {
						this.Payment_Tab_Details_Search_Data.splice(index, 1);
						const dialogRef = this.dialogBox.open(DialogBox_Component, {
							panelClass: "Dialogbox-Class",
							data: { Message: "Deleted", Type: false },
						});
						this.Clr_Payment_Tab_Details();
						this.Get_Payment_Tab_Details();
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


Save_Payment_Tab_Details() {

	


	if (
		this.Accounts_ == undefined ||
		this.Accounts_ == null ||
		this.Accounts_.Client_Accounts_Id == undefined ||
		this.Accounts_.Client_Accounts_Id == 0
	) {
		const dialogRef = this.dialogBox.open(DialogBox_Component, {
			panelClass: "Dialogbox-Class",
			data: { Message: "Select From Account", Type: "3" },
		});
		return;
	}

	if (
		this.Enquiry_Source_ == undefined ||
		this.Enquiry_Source_ == null ||
		this.Enquiry_Source_.Client_Accounts_Id == undefined ||
		this.Enquiry_Source_.Client_Accounts_Id == 0
	) {
		const dialogRef = this.dialogBox.open(DialogBox_Component, {
			panelClass: "Dialogbox-Class",
			data: { Message: "To Account Not Present", Type: "3" },
		});
		return;
	}

	if (
		this.Payment_Tab_Details_.Amount == undefined ||
		this.Payment_Tab_Details_.Amount == null ||
		this.Payment_Tab_Details_.Amount == 0
	) {
		const dialogRef = this.dialogBox.open(DialogBox_Component, {
			panelClass: "Dialogbox-Class",
			data: { Message: "Enter Amount", Type: "3" },
		});
		return;
	}

	if (
		this.Payment_Tab_Details_.Date == undefined ||
		this.Payment_Tab_Details_.Date == null
	) {
		const dialogRef = this.dialogBox.open(DialogBox_Component, {
			panelClass: "Dialogbox-Class",
			data: { Message: "Choose Date", Type: "3" },
		});
		return;
	}
	
	

	this.Payment_Tab_Details_.Student_Id = this.Profile_.Student_Id;
	this.Payment_Tab_Details_.User_Id = Number(this.Login_User);

	this.Payment_Tab_Details_.From_Account_Id =this.Accounts_.Client_Accounts_Id ;
	this.Payment_Tab_Details_.To_Account_Id = this.Enquiry_Source_.Client_Accounts_Id;

	this.Payment_Tab_Details_.Date = this.New_Date(new Date(moment(this.Payment_Tab_Details_.Date).format("YYYY-MM-DD")));
	

	if (this.Save_Call_Status == true) return;
	else this.Save_Call_Status = true;
	this.issLoading = true;

	this.Student_Service_.Save_Payment_Tab_Details(
		this.Payment_Tab_Details_
	).subscribe(
		(Save_work_experience) => {
			
			Save_work_experience = Save_work_experience[1];
			if (Number(Save_work_experience[0].Payment_Tab_Id_) > 0) {
				// if(this.Task_Group_Id==4)
				// {

				this.Save_Call_Status = false;
				const dialogRef = this.dialogBox.open(DialogBox_Component, {
					panelClass: "Dialogbox-Class",
					data: { Message: "Saved", Type: "false" },
				});
				// this.Get_WorkexperienceDetails(Save_work_experience[0].Student_Id_);
				this.Clr_Payment_Tab_Details();
				this.Close_Payment();
				// this.Get_Tasknew_Task(this.Task_Group_Id);

				// var notification_type_ = "Task";
				// var message = {
				// 	To_User: Save_work_experience[0].To_User_,
				// 	Task_Count: Save_work_experience[0].Task_Count_,
				// 	Student_Name: Save_work_experience[0].Student_Name_,
				// 	From_User_Name: Save_work_experience[0].From_User_Name_,
				// 	Entry_Type: Save_work_experience[0].Entry_Type_,
				// 	Notification_Type_Name: notification_type_,
				// };
				// this.socket.emit("new-message", message);
				//  }
			}
			
			// else if (Number(Save_work_experience[0].To_User_) == -1) {
			// 	this.Save_Call_Status = false;
			// 	const dialogRef = this.dialogBox.open(DialogBox_Component, {
			// 		panelClass: "Dialogbox-Class",
			// 		data: { Message: "No User Found", Type: "3" },
			// 	});
				
			// 	//  }
			// }
			
			
			
			
			
			else {
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


Load_Account_Dropdown() {
	this.issLoading = true;
	this.Student_Service_.Load_Account_Dropdown().subscribe(
	  (Rows) => {
		if (Rows != null) {
		  this.Accounts_Data = Rows[0];
		  this.Accounts_Temp.Client_Accounts_Id = 0;
		  this.Accounts_Temp.Client_Accounts_Name = "Select";
		  this.Accounts_Data.unshift(this.Accounts_Temp);
		  this.Accounts_To_AcT_ = this.Accounts_Data[0];


		  this.Accounts_From_Data = Rows[1];
		  this.Accounts_From_Temp.Client_Accounts_Id = 0;
		  this.Accounts_From_Temp.Client_Accounts_Name = "Select";
		  this.Accounts_From_Data.unshift(this.Accounts_From_Temp);

		 
		  this.Accounts_To_ = this.Accounts_From_Data[0];
		  this.Accounts_To_Pc_ = this.Accounts_From_Data[0];
		  this.Accounts_From_AcT_ = this.Accounts_From_Data[0];


		  this.Accounts_Data_11 = Rows[2];
		  this.Accounts_Data_11_Temp.Client_Accounts_Id = 0;
		  this.Accounts_Data_11_Temp.Client_Accounts_Name = "Select";
		  this.Accounts_Data_11.unshift(this.Accounts_Data_11_Temp);

		  this.Accounts_To_Rc_ = this.Accounts_Data_11[0];
		  this.Accounts_ = this.Accounts_Data_11[0];
		  this.Accounts_From_Pc_  = this.Accounts_Data_11[0];

		  this.Accounts_Data_Uni = Rows[3];
		  this.Accounts_Data_Uni_Temp.Client_Accounts_Id = 0;
		  this.Accounts_Data_Uni_Temp.Client_Accounts_Name = "Select";
		  this.Accounts_Data_Uni.unshift(this.Accounts_Data_Uni_Temp);

		  this.Accounts_From_Rc_ = this.Accounts_Data_Uni[0];




		  this.issLoading = false;
		}
	  },
	  (Rows) => {
		this.issLoading = false;
	  }
	);
  }


  Get_Enquiry_Source_Client_Id() {

	
	this.issLoading = true;
	this.Count_Task_  = 0
	this.Student_Service_.Get_Enquiry_Source_Client_Id(
		this.Profile_.Enquiry_Source_Id
	).subscribe(
		(Rows) => {
			
			this.Enquiry_Source_Client_Data = Rows[0];
			

if(this.Enquiry_Source_Client_Data.length>0){
	this.Account_Tab_Details_.Agent_Id =this.Enquiry_Source_Client_Data[0].Client_Account_Id;
	this.Account_Tab_Details_.Agent_Name =this.Enquiry_Source_Client_Data[0].Enquiry_Source_Name;
	this.enq_clint_id_=this.Enquiry_Source_Client_Data[0].Client_Account_Id
}
else {	this.Account_Tab_Details_.Agent_Id =0
	this.Account_Tab_Details_.Agent_Name =""

	this.enq_clint_id_=0
}
			// this.Count_Task_ =Rows[1][0].Student_Task_Count
			this.issLoading = false;
		},
		(Rows) => {
			this.issLoading = false;
		}
	);
}


checkIfPhoto(selectedDocument: any) {
	// Check if the selected document is "PHOTO"
	if (selectedDocument.Document_Id === 123) {
	  this.allowedFileTypes = 'image/jpeg'; // Restrict to JPEG files
	} else {
	  this.allowedFileTypes = ''; // Allow all file types or no restriction
	}
  }
  
showFullCourseName(index: number) {
    this.expandedCourses[index] = true;
  }

  hideFullCourseName(index: number) {
    this.expandedCourses[index] = false;
  }


/**** */

	// Delete_Task_Details(index) {

	// 	console.log('Before deletion:', this.process_Task_Data);
	// 	this.process_Task_Data.splice(index, 1);
	// 	console.log('After deletion:', this.process_Task_Data);
	// 	this.issLoading = false;
	// }

	onDocumentSelected_doc(input) {

		var Document_Id = input.Document_Id;
		let element=[];

		this.Student_Service_.getDocumentTypeByDocumentId(Document_Id).subscribe(Rows => {



			this.Document_type_Data = Rows.result.Document_type;
			for (let i = 0; i < this.Document_type_Data.length; i++) {
				 element.push (this.Document_type_Data[i]['File_Type_Name'])
				
			}
			// this.acceptedFileTypes=  this.formatFileTypes(element)
			console.log('this.acceptedFileTypes: ', this.acceptedFileTypes);

			this.issLoading = false;
		},
			Rows => {
				this.issLoading = false;
				const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Error Occured', Type: "2" } });
			});

	}



	toggleUploadDocumentForm() {
		this.isUploadDocumentVisible = !this.isUploadDocumentVisible;
	  }
	  Students_Docs = {
		Item_Details: [
		  {
			Document_Name: 'Document 1',
			File_Name: 'file1.pdf',
			Document_Upload_DateTime: new Date(),
			Uploaded_By_Name: 'User 1',
			expanded: false, // Track the expanded/collapsed state
		  },
		  {
			Document_Name: 'Document 2',
			File_Name: 'file2.pdf',
			Document_Upload_DateTime: new Date(),
			Uploaded_By_Name: 'User 2',
			expanded: false, // Track the expanded/collapsed state
		  },
		  // Add more documents as needed
		],
	  };
	
	
	  activeIndex: { [key: string]: number | null } = {};
	
	  toggleExpand(docTypeIndex: number, docIndex: number): void {
		this.activeIndex[docTypeIndex] = 
		  this.activeIndex[docTypeIndex] === docIndex ? null : docIndex;
	  }
	}
	// private formatFileTypes(types: string[]): string {
	// 	const formattedTypes = types.map(type => {
	// 	  switch (type.toLowerCase()) {
	// 		case 'pdf':
	// 		  return ['.pdf', 'application/pdf'];
	// 		case 'mp4':
	// 		  return ['.mp4', 'video/mp4'];
			
	// 		default:
	// 		  return [`.${type.toLowerCase()}`];
	// 	  }
	// 	});
	// 	return formattedTypes.join(',');
	//   }

