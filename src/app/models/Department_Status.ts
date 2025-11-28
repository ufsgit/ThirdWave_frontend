import { Process } from "./process";
import { Process_sub_status } from "./Process_sub_status";

export class Department_Status {
    Check_Box:boolean;
    Department_Status_Id: number;
    Department_Status_Name:string;
    Status_Order: number;
    Sub_Order:number;
    Pictorial_Representation_Order:number;
    Editable: boolean;
    Color: string;
    Status_Type_Id:number;
    Status_Type_Name:string;
    Transfer_Status:boolean;
    Notification_Status:boolean;
    Registration:boolean;
    // Notification_Department_Id:number;
    Notification_Department_Id: string;
    Notification_Department_Name:string;
    Transfer_Department_Name:string;
    Transfer_Department_Id:number;
    FollowUp:boolean;
    Display_In:number;
    Class_Id:number;
    Class_Name:string;
    Class_Order:number;
    Registration_Mandatory:boolean;
    Update_in_Profile:boolean;
    Activation:boolean;
    Fees_paid:boolean;
    Fees_Mandatory:boolean;
    Color_Type_Name:string;

    Notification: boolean;
    Task_new : boolean;
    Document_view: boolean;

    Intake_Date_Year:boolean;
    Public_Status:boolean;
    CheckList: boolean;
    Sub_Status: boolean;
    Followup: string;
    process_id :number;
 
    Process_sub_status_Sub_Data:Process_sub_status[]
    Dept_Status_Type_Id: number;
    Dept_Status_Type_Name:string;


    Insert_Not_Found :boolean;
    Process_Filer_Data:Process[];
    Process_Filer_Data_length:number;
    Process_Status_Data:Department_Status[];
    Process_Status_Data_length:number;

    Country_Data:[];
    Country_Data_length:number;
    University_Data:[];
    University_Data_length:number;
    Process_Department_Status_Id:string;

    Process_Status_View:boolean;
    
    Order_In_PS:number;
  Application_FollowUp: boolean;

    constructor(values: Object = {}) {
        Object.assign(this, values)
    }
}

