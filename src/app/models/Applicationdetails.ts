import { ɵangular_packages_router_router_n } from "@angular/router";
import internal from "assert";
import { Conditions } from "./Conditions";

export class Applicationdetails
{

    Application_details_Id:number;
   Student_Id:number;
   Country_Id:number;
   Country_Name:string;
   University_Id:number;
   University_Name:string;
   Course_Id:number;
   Course_Name:string;
   intake_Id:number;
   intake_Name:string;
   Intake_Year_Id:number;
   Intake_Year_Name:string;
   Date_Of_Applying:Date;
   Remark:string;
   Application_status_Id:number;
   Application_Status_Name:string;
   Agent_Id:number;
   Agent_Name:string;
   Reference_No:number;
   Activation_Status:boolean;
   User_Id:number;
   Student_Reference_Id:string;
   Application_No:string;
   checkbox:boolean;
   Course_Fee:string;
   Living_Expense:string;
   Student_Approved_Status:number;
   Bph_Approved_Status:number;
   Application_Fees_Paid:string;
   Preference:string;
   Application_Source:number;
   Bph_Remark:string;
   Registration_Mandatory:number;
   Department_Status_Id:number;
   Department_Status_Name:string;
   Is_Registered:number;
   Portal_User_Name:string;
   Password:string;
   Offer_Student_Id:string;
   Fees_Payment_Last_Date:Date;

   Feespaymentcheck:boolean;
   Offer_Received:boolean=true;
   LoginUser:number;
   Duration_Id:number;
   RowNo:number
   RowNo_sort:number
   Offerletter_Type_Id :number;
   Offerletter_Type_Name:string;
   Course_Link:string;
   Application_Fees:string;
   To_User_Id:number;
//    Conditions_Id:number;
//    Conditions_Name:string;
   Conditions:Conditions[];
   Followup_Date_Check:boolean;
   Followup_Date:Date;
   Deadline_Date:any;
   Fees_Status:number;
   Task_Status:number;
   Fields_Id : number
   Mandatory_Task:number;
   Data: string;
   Department_Status_Duration:number;
   Fields_Name: string;  
   Process_status_details_Id:number;
  Fees_status_profile:number;
  Fees_Name:string;
constructor(values: Object = {})  
{
Object.assign(this, values) 
}
}
