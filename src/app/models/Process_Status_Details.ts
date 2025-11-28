import { Country } from "./Country";
import { Mandatory_task } from "./Mandatory_task";
import { Process } from "./process.interface";
import { Process_Check_List } from "./Process_Check_List";
import { Process_Department } from "./Process_Department";
import { Process_Fields } from "./Process_Fields";
import { Process_Notification } from "./Process_Notification";
import { Process_sub_status } from "./Process_sub_status";
import { Task_Detrails } from "./Task_Detrails";
import { University } from "./University";

export class Process_Status_Details {
    Process_Status_Details_id:number;
    Check_Box:boolean;
    Department_Status_Id: number;
    Department_Status_Name:string;
    Status_Order: number;
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

    Fees_Name:string;
    Fees_Id:number;

    FollowUp:boolean;
    Display_In:number;
    Class_Id:number;
    Class_Name:string;
    Class_Order:number;
    Registration_Mandatory:boolean;
    Activation_Status:boolean;
    Update_in_Profile:boolean;
    Activation:boolean;
    Fees_paid:boolean;
    Fees_Mandatory:boolean;
    Insert_Not_Found :boolean;
    Notification: boolean;
    Task_new : boolean;
    Document_view: boolean;

    CheckList: boolean;
    Sub_Status: boolean;
    Followup: string;
    process_id :number;
    process_ids_array?: number[]; // Optional property
    Data_Fields: boolean;
    Duration: number;
 
    Mandatory_Task: boolean;
    Process_sub_status_Sub_Data:Process_sub_status[]
    Process_Department_Data:Process_Department[]
    Task_Details_Sub_Data: Task_Detrails[];
    MTask_Details_Sub_Data:Mandatory_task[];
    Process_Notification_Data:Process_Notification[];
    Process_Check_List_Data:Process_Check_List[];
    Process_Fields_Data:Process_Fields[]
    University_Filer_Data:University[];
    Process_Filer_Data:Process[];
    Country_Data:Country[];
    newCheckedProcess_sub_status_Data:Process_sub_status[];

    newCheckedItems_Document_Data:Process_Notification[];
    newCheckedItems_Notification_Data:Process_Department[];
    newCheckedItems_Fields_Data:Process_Fields[];

    processStatusConfig: any = {};
    constructor(values: Object = {}) {
        Object.assign(this, values)
    }
}

