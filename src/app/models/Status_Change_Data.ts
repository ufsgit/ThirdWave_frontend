import { Conditions } from "./Conditions";
import { Intake } from "./Intake";
import { Intake_Year } from "./Intake_Year";
import { Process_Department } from "./Process_Department";
import { Process_Fields } from "./Process_Fields";
import { Process_Notification } from "./Process_Notification";
import { Student_Fields } from "./Student_Fields";
import { Task_Detrails } from "./Task_Detrails";
export class Status_Change_Data
{
   Application_details_Id:number;
   Student_Id:number; 
   Application_status_Id:number;
   Application_Status_Name:string;
   Agent_Id:number;
   Agent_Name:string;   
   User_Id:number;  
   Application_No:string;  
   LoginUser:number;
   Offerletter_Type_Id :number;
   Offerletter_Type_Name:string;
   Remark:string;
   Conditions_Array:Conditions[];
   Class_Id:number;
   Class_Name:string;
   Class_Order:number;
   Followup_Date_Check:boolean;
   Followup_Date:Date;
   Deadline_Date:any;
   Process_status_details_Id:number;

   Intake_Date_Year_Check:boolean;
   Department_Id:number;
   Department_Name:string;
   To_User_Id:number;
   To_User_Name:string;
   From_User_Id:number;
   From_User_Name:string;
   Intake_Id:number;
   Intake_Name:string;
   Data:string;
   Intake_Year_Id:number;
Intake_Year_Name:string;
   process_data_list_Data:Process_Fields[];
   process_document_Data:Process_Notification[];
   Intake_Data_List:Intake[];
   Intake_Year_List:Intake_Year[];
   process_Task_Data:Task_Detrails[];
   Process_Notification_Data:Process_Department[]
SaveChangeUserPermanent :Boolean;
constructor(values: Object = {})  
{
Object.assign(this, values) 
}
}
