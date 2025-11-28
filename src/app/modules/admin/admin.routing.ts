/***
 * All routes with in admin module should be defined here
 */
 import { Routes } from '@angular/router';
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
 
 import { SubjectComponent } from './Subject/Subject.component'; 
 import { UniversityComponent } from './University/University.component'; 
 import { AdminComponent } from './admin.component';
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
 import { Enquiry_SourceComponent } from './Enquiry_Source/Enquiry_Source.component';
 import { TimeTrackComponent } from './TimeTrack/TimeTrack.component';
 import { Registration_ReportComponent } from './Registration_Report/Registration_Report.component';
 import { Efficiency_ReportComponent } from './Efficiency_Report/Efficiency_Report.component';
 import { Student_ImportComponent } from './Student_Import/Student_Import.component';
 import { Pending_FollowUpComponent } from './Pending_FollowUp/Pending_FollowUp.component';
 import { FeesComponent } from './Fees/Fees.component';
 import { Fees_Receipt_ReportComponent } from './Fees_Receipt_Report/Fees_Receipt_Report.component';
 import { Enquiry_Source_SummaryComponent } from './Enquiry_Source_Summary/Enquiry_Source_Summary.component';
 import { Counselor_Fees_Receipt_ReportComponent } from './Counselor_Fees_Receipt_Report/Counselor_Fees_Receipt_Report.component';
 import { Counselor_Registration_ReportComponent } from './Counselor_Registration_Report/Counselor_Registration_Report.component';
 import { Student_Summary_ReportComponent } from './Student_Summary_Report/Student_Summary_Report.component';
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
import { ProcessComponent } from './Process/Process.component';
import { Process_StatusComponent } from './Process_Status/Process_Status.component';
import { Data_FieldsComponent } from './Data_Fields/Data_Fields.component';
import { Application_ListComponent } from './Application_List/Application_List.component';
import { RegionListComponent } from 'app/region-list/region-list.component';
import { HolidayListComponent } from 'app/holiday-list/holiday-list.component';
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
import { Country_IntakeComponent } from './Country_Intake/Country_Intake.component';
import { Leads_ReportComponent } from './Leads_Report/Leads_Report.component';
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
// import { user_working_status_reportComponent } from './user_working_status_report/user_working_status_report.component';
 //import { Userwise_SummaryComponent } from './Userwise_Summary/Userwise_Summary.component';
 
 //import { Enquiry_Source_ReportComponent } from './Enquiry_Source_Report/Enquiry_Source_Report.component';
 export const AdminRoutes: Routes = [
     {
         path: '',
         component: AdminComponent,
         children: [
             { path: '', redirectTo: '/User_Details', pathMatch: 'full' },
             { path: 'User_Details', component: User_DetailsComponent },
             {path:'Department',component: DepartmentComponent},
             {path:'Branch',component: BranchComponent},
             {path:'Department_Status',component: Department_StatusComponent},
             {path:'Country',component: CountryComponent},
             {path:'Course',component: CourseComponent},
             {path:'Course_Intake',component: Course_IntakeComponent},
             {path:'Document',component: DocumentComponent},
             {path:'Enquiry_Source',component: Enquiry_SourceComponent},
             {path:'Duration',component: DurationComponent},
             {path:'Intake',component: IntakeComponent},
             {path:'Internship',component: InternshipComponent},
             {path:'Level_Detail',component: Level_DetailComponent},
             {path:'Student',component: StudentComponent},
             {path:'Student_Document',component: Student_DocumentComponent},
             {path:'Student_Message',component: Student_MessageComponent},
             {path:'Student_Status',component: Student_StatusComponent},
             {path:'Enquiry_Source',component: Enquiry_SourceComponent},
             {path:'Subject',component: SubjectComponent},
             {path:'University',component: UniversityComponent},
             {path:'Agent',component: AgentComponent},
             {path:'Home_Page',component: Home_PageComponent},
             {path:'Dashboard',component: DashboardComponent},
            {path:'Course_Import',component: Course_ImportComponent},
            {path:'Student_Report',component: Student_ReportComponent},
            {path:'Work_report',component:Work_reportComponent },
            {path:'Account_Group',component: Account_GroupComponent},
            {path:'Client_Accounts',component: Client_AccountsComponent},
            {path:'Remarks',component: RemarksComponent},
            {path:'TimeTrack',component: TimeTrackComponent},
            {path:'Registration_Report',component:Registration_ReportComponent},
            {path:'Efficiency_Report',component:Efficiency_ReportComponent},
            {path:'Student_Import',component:Student_ImportComponent},
            {path:'Pending_FollowUp',component:Pending_FollowUpComponent},
            {path:'Fees',component:FeesComponent},
            {path:'Fees_Receipt_Report',component:Fees_Receipt_ReportComponent},
            {path:'Enquiry_Source_Summary',component:Enquiry_Source_SummaryComponent},
            {path:'Counselor_Fees_Receipt_Report',component:Counselor_Fees_Receipt_ReportComponent},
            {path:'Counselor_Registration_Report',component:Counselor_Registration_ReportComponent},
            {path:'Student_Summary_Report',component:Student_Summary_ReportComponent},
            {path:'Staff_Target_Report',component:Staff_Target_ReportComponent},
            {path:'Student_Search',component:Student_SearchComponent},
            {path:'Work_Summary',component:Work_SummaryComponent},
            {path:'Userwise_Summary',component:Userwise_SummaryComponent},
            {path:'Branchwise_Summary',component:Branchwise_SummaryComponent},
            {path:'PageA',component:PageAComponent},
            {path:'PageC',component:PageCComponent},
            {path:'PageB',component:PageBComponent},
            {path:'Enquiry_Source_Report',component:Enquiry_Source_ReportComponent}, 
            {path:'Receipt_Summary_Report',component:Receipt_Summary_ReportComponent},
            {path:'Registration_Summary',component:Registration_SummaryComponent},
            {path:'Enquiry_Conversion',component: Enquiry_ConversionComponent},
            {path:'Employee_Summary',component: Employee_SummaryComponent},
            {path:'User_Role',component: User_RoleComponent},
            {path:'Company',component: CompanyComponent},
            {path:'Settings',component: SettingsComponent},
             {path:'Documentation_Report',component: Documentation_ReportComponent},
             {path:'Work_History',component: Work_HistoryComponent},
             {path:'Registration_EnquirySource',component: Registration_EnquirySourceComponent},
             {path:'Details_check',component: Details_checkComponent}, 
             {path:'Check_List',component: Check_ListComponent}, 
             {path:'Agent_Details',component:Agent_DetailsComponent},
             {path:'Application_Report',component:Application_ReportComponent},
             {path:'Task',component:TaskComponent},
             {path:'Notification',component:NotificationComponent},
             {path:'Receipt_Confirmation',component:Receipt_ConfirmationComponent},
             {path:'Refund_Confirmation',component:Refund_ConfirmationComponent},
             {path:'Refund_Approval',component:Refund_ApprovalComponent},
             {path:'Application_Dashboard',component:Application_DashboardComponent},
             {path:'Student_Task',component:Student_TaskComponent},
             {path:'Passport_Expiry_Report',component:Passport_Expiry_ReportComponent},
             {path:'Application_Status',component:Application_StatusComponent},
             {path:'Task_Item',component:Task_ItemComponent},

             {path:'Application_Settings',component:Application_SettingsComponent},
             {path:'DocumentName',component:DocumentNameComponent},
             {path:'Accounts',component:AccountsComponent},
             {path:'Data_Migration',component:Data_MigrationComponent},
             {path:'Fees_Pending_Report',component:Fees_Pending_ReportComponent},
             {path:'Class_Summary',component:Class_SummaryComponent},
             {path:'Class',component:ClassComponent},
             {path:'Enquirywise_Status_Report',component:Enquirywise_Status_ReportComponent},
             {path:'Department_Status_Report',component:Department_Status_ReportComponent},
             {path:'FollowUp_Status_Report',component:FollowUp_Status_ReportComponent},
             {path:'Department_Report',component:Department_ReportComponent},
             {path:'Chat_Window',component:Chat_WindowComponent},
             {path:'Student_Followup_Report',component:Student_Followup_ReportComponent},
             {path:'Application_Data',component:Application_DataComponent},

             { path: "Process", component: ProcessComponent },
             { path: "Process_Status/:processId", component: Process_StatusComponent},
             { path: "Process_Status/:processId/edit", component: Process_StatusComponent},
             {path:'Data_Fields',component:Data_FieldsComponent},
             { path: "Application_List", component: Application_ListComponent },
             {path:'Region',component: RegionListComponent},
             {path:'Holiday',component: HolidayListComponent},
             {path:'Change_Username',component: Change_UsernameComponent},
             {path:'Document_Type',component: Document_TypeComponent},
             {path:'Freelancer_Details',component: Freelancer_DetailsComponent},
             {path:'Task_Report',component: Task_ReportComponent},
             {path:'My_Student_Report',component: My_Student_ReportComponent},
             {path:'Agent_Student',component: Agent_StudentComponent},
             {path:'Agency_Dashboard',component: Agency_DashboardComponent},  
             
             {path:'Registration_Summary_Agent',component: Registration_Summary_AgentComponent},   
             
            {path:'Receipt_Summary_Report_Agent',component:Receipt_Summary_Report_AgentComponent}, 
            {path:'Agent_StudentDetails',component:Agent_StudentDetailsComponent}, 
            
            {path:'Agent_Summary',component:Agent_SummaryComponent}, 
            
            {path:'Freelancer_Dashboard',component: Freelancer_DashboardComponent},  
            {path:'Registration_Summary_Freelancer',component: Registration_Summary_FreelancerComponent},   
            {path:'Receipt_Summary_Report_Freelancer',component:Receipt_Summary_Report_FreelancerComponent}, 
            {path:'Freelancer_Student_Details',component:Freelancer_Student_DetailsComponent}, 
            {path:'Freelancer_Payment',component:Freelancer_PaymentComponent}, 
            {path:'Freelancer_Amount',component:Freelancer_AmountComponent},
            {path:'Freelancer_User_Amount',component:Freelancer_User_AmountComponent},
            // {path:'Country_Intake',component:Country_IntakeComponent},
            {path:'Leads_Report',component:Leads_ReportComponent},
            {path:'Country_Intake',component:Country_IntakeComponent},
            {path:'Freelancer_Manager',component:Freelancer_ManagerComponent},
            
             {path:'Freelance_Manager_Dashboard',component:Freelance_Manager_DashboardComponent},
             {path:'Lead_Student_Report',component:Lead_Student_ReportComponent},
             {path:'Student_Data_Report',component:Student_Data_ReportComponent},
             {path:'Direct_Application_Report',component:Direct_Application_ReportComponent},
             {path:'Leave_Management',component:Leave_ManagementComponent},
             
             {path:'Agent_Application_Report',component:Agent_Application_ReportComponent},
             {path:'Process_update',component:Process_updateComponent},
             {path:'Freelancer_Transferred_lead_Data',component:Freelancer_Transferred_lead_DataComponent},
             {path:'Application_List_report',component:Application_List_reportComponent},
            
             {path:'Application_List_report_Direct',component:Application_List_report_DirectComponent},
             {path:'User_Enrollment_Summary',component:User_Enrollment_SummaryComponent},
             {path:'Agent_Enrollment_Summary',component:Agent_Enrollment_SummaryComponent},
             {path:'Freelancer_Enrollment_Summary',component:Freelancer_Enrollment_SummaryComponent},
             {path:'Agent_Student_Report',component:Agent_Student_ReportComponent},
             {path:'Intake_Report',component: Intake_ReportComponent},
             {path:'Course_Search',component: Course_SearchComponent},

             {path:'User_Resignation_Management',component:User_Resignation_ManagementComponent},
             {path:'Agent_Summary_Report',component:Agent_Summary_ReportComponent},
             {path:'Freelancer_Summary_Report',component:Freelancer_Summary_ReportComponent},
             {path:'Department_Status_Process_update',component:Department_Status_Process_updateComponent},
             {path:'Freelancer_Commission_Management',component:ProcessFlowDiagramComponent},
             {path:'ProcessFlowDiagram',component:ProcessFlowDiagramComponent},
             {path:'Process_Status_chart',component:Process_Status_chartComponent},
             {path:'Task_Type',component:Task_TypeComponent},
             {path:'qualification_master',component:qualification_masterComponent},
             {path:'Outgoing_Webhook',component:Outgoing_WebhookComponent},

   {path:'user_working_status_report',component:UserWorkingStatusReportComponent},
 {path:'CourseSubjects',component:CourseSubjectsComponent},


             // Always put last, if no routes defined fall into this path, 
             // Routes define under this will not work
             { path: '**', redirectTo: '/auth/login' }
             
         ]
     }
 ];
 