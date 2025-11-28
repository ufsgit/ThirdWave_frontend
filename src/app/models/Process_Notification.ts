export class Process_Notification
{

    Process_Notification_id:number;
    Process_Status_Details_id:number;
    File_Name:string;
    Document_Id:number;
    Document_Name: string;  
    // checkbox_view:boolean;
    Application_details_Id:number;
    // checkbox_view_new:boolean;
    Image_Photo: any;
    ImageFile_Doc:any;
    Image_Path:any;
    Mandatory:boolean;

    checkbox_view4:boolean;
    checkbox_view_new5:boolean;
constructor(values: Object = {})  
{
Object.assign(this, values) 
}
}

