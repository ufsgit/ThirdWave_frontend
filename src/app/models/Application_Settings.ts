export class Application_Settings
{
    Application_Settings_Id :number
    Settings_Group_Id :number 
    Settings_Name :string 
    Settings_Value :string
    Editable:number
    Department_Id:number;
    Register_Transfer_Status:boolean=false;
    Department_Status_Id:number;
    Department_Status_Name:string;
    Registration_By:number;
    Branch:boolean;
    Department:boolean;
    Tostaff:boolean;
    Round_Robin:boolean;
    Import_with_Status:boolean;
    Import_with_Enquiry_Source:boolean;
    Highest_Department_Profile:boolean;
    Receipt_Notification_User:number;
    Class_Profile:boolean;
    Highest_Status_Profile:boolean;

constructor(values: Object = {})  
{
Object.assign(this, values) 
}
}

