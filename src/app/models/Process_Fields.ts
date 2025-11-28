export class Process_Fields
{

    Process_Fields_id:number;
    Process_Status_Details_id:number;
    Fields_Id:number;
    Fields_Name: string;  
    // checkbox_view:boolean;
    // checkbox_view_new:boolean;
    Application_details_Id:number;
    Student_Id:number;
    Data: string;
    Date: string;
    Mandatory:boolean;
    Data_Type:number;
    checkbox_view1:boolean;
    checkbox_view_new2:boolean;

constructor(values: Object = {})  
{
Object.assign(this, values) 
}
}

