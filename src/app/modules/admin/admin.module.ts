/***
 * Admin module
 * Declare all componets that is used in admin module
 */
 import { NgModule } from '@angular/core';
 import { FormsModule } from '@angular/forms';
 import { HttpModule } from '@angular/http';
 import { RouterModule } from '@angular/router';
 import { MatProgressSpinnerModule, MatDialogModule, MatAutocompleteModule, MatPaginatorModule, MatToolbarModule, MatSidenavModule, MatMenuModule, MatIconModule, MatButtonModule, MatSelectModule, MatFormFieldModule, MatDatepickerModule, MatExpansionModule, MatCheckboxModule, MatChipsModule, MatInputModule } from '@angular/material';
 import { MatNativeDateModule} from '@angular/material';
 import { SharedModule } from '../shared-module/shared-module';
 import { AdminRoutes } from './admin.routing';
 import { AdminComponent } from './admin.component';
 import {HttpClientModule} from '@angular/common/http';
 import { GoogleChartsModule } from 'angular-google-charts';
 import { User_DetailsComponent } from './User_Details/User_Details.component';
 import { CountryComponent } from './Country/Country.component'; 
 import { CourseComponent } from './Course/Course.component'; 
 import { Course_IntakeComponent } from './Course_Intake/Course_Intake.component'; 
 import { DocumentComponent } from './Document/Document.component';
 
 import { DurationComponent } from './Duration/Duration.component'; 
 import { IntakeComponent } from './Intake/Intake.component'; 
 import { InternshipComponent } from './Internship/Internship.component'; 
 import { Level_DetailComponent } from './Level_Detail/Level_Detail.component'; 
 import { StudentComponent } from './Student/Student.component'; 
 import { Student_DocumentComponent } from './Student_Document/Student_Document.component'; 
 import { Student_MessageComponent } from './Student_Message/Student_Message.component'; 
 import { Student_StatusComponent } from './Student_Status/Student_Status.component';
 import {Enquiry_SourceComponent } from './Enquiry_Source/Enquiry_Source.component';  
 import { SubjectComponent } from './Subject/Subject.component'; 
 import { UniversityComponent } from './University/University.component'; 
 import { AgentComponent } from './Agent/Agent.component'; 
 import { Home_PageComponent } from './Home_Page/Home_Page.component'; 
 import { DashboardComponent } from './Dashboard/Dashboard.component'; 
 import { Course_ImportComponent } from './Course_Import/Course_Import.component'; 
 import { Account_GroupComponent } from './Account_Group/Account_Group.component'; 
 import { Client_AccountsComponent } from './Client_Accounts/Client_Accounts.component';
 import { DepartmentComponent } from './Department/Department.component';
 import { Department_StatusComponent } from './Department_Status/Department_Status.component';
 import { Student_ReportComponent } from './Student_Report/Student_Report.component';
 import { Work_reportComponent } from './Work_report/Work_report.component';
 import { BranchComponent } from './Branch/Branch.component';
 import { RemarksComponent } from './Remarks/Remarks.component';
 import { TimeTrackComponent } from './TimeTrack/TimeTrack.component'; 
 import { Registration_ReportComponent } from './Registration_Report/Registration_Report.component'; 
 import { Efficiency_ReportComponent } from './Efficiency_Report/Efficiency_Report.component';
 import { Student_ImportComponent } from './Student_Import/Student_Import.component';
 import { Pending_FollowUpComponent } from './Pending_FollowUp/Pending_FollowUp.component';
 import { FeesComponent } from './Fees/Fees.component';
 import { Fees_Receipt_ReportComponent } from './Fees_Receipt_Report/Fees_Receipt_Report.component';
 import { Enquiry_Source_SummaryComponent } from './Enquiry_Source_Summary/Enquiry_Source_Summary.component';
 import { Counselor_Fees_Receipt_ReportComponent } from './Counselor_Fees_Receipt_Report/Counselor_Fees_Receipt_Report.component';
 import { Counselor_Registration_ReportComponent } from './Counselor_Registration_Report/Counselor_Registration_Report.component'
 //import { Student_Summary_ReportComponent } from './Counselor_Registration_Report/Counselor_Registration_Report.component'
 import { Student_Summary_ReportComponent } from './Student_Summary_Report/Student_Summary_Report.component';
 
 //import { Enquiry_Source_ReportComponent } from './Enquiry_Source_Report/Enquiry_Source_Report.component'; 
 
 
 import { ScrollingModule } from '@angular/cdk/scrolling';
 
 import { from } from 'rxjs';
 import { Staff_Target_ReportComponent } from './Staff_Target_Report/Staff_Target_Report.component';
 import { Student_SearchComponent } from './Student_Search/Student_Search.component';
 import { Work_SummaryComponent } from './Work_Summary/Work_Summary.component';
 import { Userwise_SummaryComponent } from './Userwise_Summary/Userwise_Summary.component';
 import { Branchwise_SummaryComponent } from './Branchwise_Summary/Branchwise_Summary.component';
 import { PageAComponent } from './PageA/PageA.component';
 import { PageCComponent } from './PageC/PageC.component';
 import { PageBComponent } from './PageB/PageB.component';
 import { Enquiry_Source_ReportComponent } from './Enquiry_Source_Report/Enquiry_Source_Report.component';
 import { Receipt_Summary_ReportComponent } from './Receipt_Summary_Report/Receipt_Summary_Report.component';
 import { Registration_SummaryComponent } from './Registration_Summary/Registration_Summary.component';
 import { Enquiry_ConversionComponent } from './Enquiry_Conversion/Enquiry_Conversion.component';
 import { Employee_SummaryComponent } from './Employee_Summary/Employee_Summary.component';
 import { User_RoleComponent } from './User_Role/User_Role.component';
 import { CompanyComponent } from './Company/Company.component';
 import { SettingsComponent } from './Settings/Settings.component';
 import { Documentation_ReportComponent } from './Documentation_Report/Documentation_Report.component';
import { Work_HistoryComponent } from './Work_History/Work_History.component';

import { Details_checkComponent } from './Details_check/Details_check.component';
import { Registration_EnquirySourceComponent } from './Registration_EnquirySource/Registration_EnquirySource.component';
import { Check_ListComponent } from './Check_List/Check_List.component';

import {Agent_DetailsComponent} from './Agent_Details/Agent_Details.component';
import { Application_ReportComponent } from './Application_Report/Application_Report.component';
import { TaskComponent } from './Task/Task.component';
import { NotificationComponent } from './Notification/Notification.component';
import { Receipt_ConfirmationComponent } from './Receipt_Confirmation/Receipt_Confirmation.component';
import { Refund_ConfirmationComponent } from './Refund_Confirmation/Refund_Confirmation.component';
import { Refund_ApprovalComponent } from './Refund_Approval/Refund_Approval.component';
import { Student_TaskComponent } from './Student_Task/Student_Task.component';
import { Application_DashboardComponent } from './Application_Dashboard/Application_Dashboard.component';
import { Passport_Expiry_ReportComponent } from './Passport_Expiry_Report/Passport_Expiry_Report.component';
import { Application_StatusComponent } from './Application_Status/Application_Status.component';
import { Task_ItemComponent } from './Task_Item/Task_Item.component';

import { Application_SettingsComponent } from './Application_Settings/Application_Settings.component';
import { DocumentNameComponent } from './DocumentName/DocumentName.component';
import { AccountsComponent } from './Accounts/Accounts.component';
import { Data_MigrationComponent } from './Data_Migration/Data_Migration.component';
import { Fees_Pending_ReportComponent } from './Fees_Pending_Report/Fees_Pending_Report.component';
import { Class_SummaryComponent } from './Class_Summary/Class_Summary.component';
import { ClassComponent } from './Class/Class.component';
import { Enquirywise_Status_ReportComponent } from './Enquirywise_Status_Report/Enquirywise_Status_Report.component';
import { Department_Status_ReportComponent } from './Department_Status_Report/Department_Status_Report.component';
import { FollowUp_Status_ReportComponent } from './FollowUp_Status_Report/FollowUp_Status_Report.component';
import { Department_ReportComponent } from './Department_Report/Department_Report.component';
import { Chat_WindowComponent } from './Chat_Window/Chat_Window.component';
import { Student_Followup_ReportComponent } from './Student_Followup_Report/Student_Followup_Report.component';
import { Application_DataComponent } from './Application_Data/Application_Data.component';
import { ProcessComponent } from "./Process/Process.component";
import { Process_StatusComponent } from './Process_Status/Process_Status.component';
import { Data_FieldsComponent } from './Data_Fields/Data_Fields.component';
import { Application_ListComponent } from './Application_List/Application_List.component';
import { FilterPipe } from '../../services/SearchByStatus';
import { HolidayListComponent } from 'app/holiday-list/holiday-list.component';
import { RegionListComponent } from 'app/region-list/region-list.component';
import { ApplicationListComponent } from 'app/application-list/application-list.component';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { Change_UsernameComponent } from './Change_Username/Change_Username.component';
import { Document_TypeComponent } from './Document_Type/Document_Type.component';
import { Freelancer_DetailsComponent } from './Freelancer_Details/Freelancer_Details.component';
import { Task_ReportComponent } from './Task_Report/Task_Report.component';
import { My_Student_ReportComponent } from './My_Student_Report/My_Student_Report.component';
import { Agent_StudentComponent } from './Agent_Student/Agent_Student.component';
import { Agency_DashboardComponent } from './Agency_Dashboard/Agency_Dashboard.component';
import { Registration_Summary_AgentComponent } from './Registration_Summary_Agent/Registration_Summary_Agent.component';
import { Receipt_Summary_Report_AgentComponent } from './Receipt_Summary_Report_Agent/Receipt_Summary_Report_Agent.component';
import { Agent_StudentDetailsComponent } from './Agent_Student_Details/Agent_Student_Details.component';
import { Agent_SummaryComponent } from './Agent_Summary/Agent_Summary.component';
import { Freelancer_DashboardComponent } from './Freelancer_Dashboard/Freelancer_Dashboard.component';
import { Registration_Summary_FreelancerComponent } from './Registration_Summary_Freelancer/Registration_Summary_Freelancer.component';
import { Receipt_Summary_Report_FreelancerComponent } from './Receipt_Summary_Report_Freelancer/Receipt_Summary_Report_Freelancer.component';
import { Freelancer_Student_DetailsComponent } from './Freelancer_Student_Details/Freelancer_Student_Details.component';
import { Freelancer_PaymentComponent } from './Freelancer_payment/Freelancer_Payment.component';
import { Freelancer_AmountComponent } from './Freelancer_Amount/Freelancer_Amount.component';
import { Freelancer_User_AmountComponent } from './Freelancer_User_Amount/Freelancer_User_Amount.component';

import { MatSortModule } from '@angular/material/sort';
import { Country_IntakeComponent } from './Country_Intake/Country_Intake.component';
import { Leads_ReportComponent } from './Leads_Report/Leads_Report.component';

import { MatTableModule } from '@angular/material/table';
import { Freelancer_ManagerComponent } from './Freelancer_Manager/Freelancer_Manager.component';
import { Freelance_Manager_DashboardComponent } from './Freelance_Manager_Dashboard/Freelance_Manager_Dashboard.component';
import { Process_updateComponent } from './Process_update/Process_update.component';
import { Freelancer_Transferred_lead_DataComponent } from './Freelancer_Transferred_lead_Data/Freelancer_Transferred_lead_Data.component';
import { Lead_Student_ReportComponent } from './Lead_Student_Report/Lead_Student_Report.component';
import { Student_Data_ReportComponent } from './Student_Data_Report/Student_Data_Report.component';
import { Direct_Application_ReportComponent } from './Direct_Application_Report/Direct_Application_Report.component';
import { Agent_Application_ReportComponent } from './Agent_Application_Report/Agent_Application_Report.component';
import { Leave_ManagementComponent } from './Leave_Management/Leave_Management.component';
import { Application_List_reportComponent } from './Application_List_report/Application_List_report.component';
import { Application_List_report_DirectComponent } from './Application_List_report_Direct/Application_List_report_Direct.component';
import { User_Enrollment_SummaryComponent } from './User_Enrollment_Summary/User_Enrollment_Summary.component';
import { Agent_Enrollment_SummaryComponent } from './Agent_Enrollment_Summary/Agent_Enrollment_Summary.component';
import { Freelancer_Enrollment_SummaryComponent } from './Freelancer_Enrollment_Summary/Freelancer_Enrollment_Summary.component';
import { Agent_Student_ReportComponent } from './Agent_Student_Report/Agent_Student_Report.component';
import { Intake_ReportComponent } from './Intake_Report/Intake_Report.component';
import { User_Resignation_ManagementComponent } from './User_Resignation_Management/User_Resignation_Management.component';
import { Agent_Summary_ReportComponent } from './Agent_Summary_Report/Agent_Summary_Report.component';
import { Freelancer_Summary_ReportComponent } from './Freelancer_Summary_Report/Freelancer_Summary_Report.component';
import { Department_Status_Process_updateComponent } from './Department_Status_Process_update/Department_Status_Process_update.component';
import { Freelancer_Commission_ManagementComponent } from './Freelancer_Commission_Management/Freelancer_Commission_Management.component';
import { ProcessFlowDiagramComponent } from './ProcessFlowDiagram/ProcessFlowDiagram.component';
import { Process_Status_chartComponent } from './Process_Status_chart/Process_Status_chart.component';
import { Task_TypeComponent } from './Task_Type/Task_Type.component';
import { qualification_masterComponent } from './qualification_master/qualification_master.component';

import { UserWorkingStatusReportComponent } from './user-working-status-report/user-working-status-report.component';
import { CourseSubjectsComponent } from './CourseSubjects/CourseSubjects.component';
import { Course_SearchComponent } from './Course_Search/Course_Search.component';
import { Outgoing_WebhookComponent } from './Outgoing_Webhook/Outgoing_Webhook.component';

// import { MatSortModule } from '@angular/material/sort';

// import { MatSortModule } from '@angular/material/sort';
// import { Country_IntakeComponent } from './Country_Intake/Country_Intake.component';


 @NgModule({
   imports: [ 
    
     RouterModule.forChild(AdminRoutes),
     SharedModule,
     MatTableModule,HttpClientModule,
     MatPaginatorModule,
     MatSortModule
   , MatIconModule,
     MatMenuModule,GoogleChartsModule,
     MatSelectModule
     , MatButtonModule
     , MatDialogModule
     , MatToolbarModule, MatExpansionModule
     , MatSidenavModule
     , MatAutocompleteModule
     , MatProgressSpinnerModule
     ,MatFormFieldModule,
     NgxMaterialTimepickerModule,

     MatDatepickerModule,
     ScrollingModule,
     FormsModule,
     HttpModule,
     MatCheckboxModule,
     MatChipsModule ,
     MatInputModule
    ],
   declarations: [AdminComponent,BranchComponent,DepartmentComponent,
     CountryComponent,Department_StatusComponent,
     CourseComponent,
     Course_IntakeComponent,
     DocumentComponent,Student_ReportComponent,Work_reportComponent,
     DurationComponent,
     IntakeComponent,
     InternshipComponent,
     Level_DetailComponent,ApplicationListComponent,
     StudentComponent,
     Student_DocumentComponent,
     Enquiry_SourceComponent,
     Enquiry_SourceComponent,
     Student_MessageComponent,
     Student_StatusComponent,
     SubjectComponent,
     AgentComponent,
     Home_PageComponent,
      DashboardComponent,
     UniversityComponent,
     Course_ImportComponent,
     Account_GroupComponent,
     Client_AccountsComponent,
     RemarksComponent,
     TimeTrackComponent,
     Registration_ReportComponent,
     Efficiency_ReportComponent,
     Student_ImportComponent,
     Pending_FollowUpComponent,
     FeesComponent,
     Fees_Receipt_ReportComponent,
     Enquiry_Source_SummaryComponent,
     Counselor_Fees_Receipt_ReportComponent,
     Counselor_Registration_ReportComponent,
     Student_Summary_ReportComponent,
     Staff_Target_ReportComponent,
     Student_SearchComponent,
     Work_SummaryComponent,
     Userwise_SummaryComponent,
     Branchwise_SummaryComponent,
     PageAComponent,
     PageCComponent,
     PageBComponent,
     Enquiry_Source_ReportComponent,
     Receipt_Summary_ReportComponent,
     Registration_SummaryComponent,
     Enquiry_ConversionComponent,
     Employee_SummaryComponent,
     User_RoleComponent,
     CompanyComponent,
     SettingsComponent,
     Documentation_ReportComponent,
     Work_HistoryComponent,
     Registration_EnquirySourceComponent,
     Details_checkComponent,
     Check_ListComponent,
     Agent_DetailsComponent,
     Application_ReportComponent,
     TaskComponent,
     NotificationComponent,
     Receipt_ConfirmationComponent,
     Refund_ConfirmationComponent,
     Refund_ApprovalComponent,
     Application_DashboardComponent,
     Student_TaskComponent ,
     Passport_Expiry_ReportComponent,
     Application_StatusComponent,
     Task_ItemComponent,
     Agent_Summary_ReportComponent,
     Freelancer_Summary_ReportComponent,
   
    //  Application_ListComponent,
     //Enquiry_Source_ReportComponent,
      User_DetailsComponent,
    Application_SettingsComponent,
    DocumentNameComponent,
    AccountsComponent,
    Data_MigrationComponent,
    Fees_Pending_ReportComponent,
    Class_SummaryComponent,
    ClassComponent,
    Enquirywise_Status_ReportComponent,
    Department_Status_ReportComponent,
    FollowUp_Status_ReportComponent,
    Department_ReportComponent,
    Chat_WindowComponent,
    Student_Followup_ReportComponent,
    Application_DataComponent,
    ProcessComponent,
    Process_StatusComponent,
    Data_FieldsComponent,
    Application_ListComponent,
    FilterPipe,My_Student_ReportComponent,
    RegionListComponent, HolidayListComponent,Change_UsernameComponent,Document_TypeComponent,Freelancer_DetailsComponent,Task_ReportComponent,Agent_StudentComponent,
    Agency_DashboardComponent,Registration_Summary_AgentComponent,Receipt_Summary_Report_AgentComponent,
    Agent_StudentDetailsComponent,Agent_SummaryComponent,Freelancer_DashboardComponent,Registration_Summary_FreelancerComponent,
    Receipt_Summary_Report_FreelancerComponent,Freelancer_Student_DetailsComponent,
    Freelancer_PaymentComponent,Freelancer_AmountComponent,Freelancer_User_AmountComponent,Process_updateComponent,Direct_Application_ReportComponent,
    Agent_Application_ReportComponent,Leave_ManagementComponent,
    Country_IntakeComponent,Leads_ReportComponent,Country_IntakeComponent,Freelancer_ManagerComponent,Freelance_Manager_DashboardComponent,
    Freelancer_Transferred_lead_DataComponent,Lead_Student_ReportComponent,Student_Data_ReportComponent,Application_List_reportComponent,Application_List_report_DirectComponent,    
    User_Enrollment_SummaryComponent,Agent_Enrollment_SummaryComponent,Freelancer_Enrollment_SummaryComponent,Agent_Student_ReportComponent,
    Department_Status_Process_updateComponent,Freelancer_Commission_ManagementComponent,qualification_masterComponent,Outgoing_WebhookComponent,
  Intake_ReportComponent,User_Resignation_ManagementComponent,ProcessFlowDiagramComponent,Process_Status_chartComponent,Task_TypeComponent, UserWorkingStatusReportComponent,CourseSubjectsComponent,Course_SearchComponent],
  providers:[Process_StatusComponent,ApplicationListComponent,UserWorkingStatusReportComponent]
 })
 
 export class AdminModule { }
 