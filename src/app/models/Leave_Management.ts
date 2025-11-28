export class Leave_Management
{
    Leave_Management_Id:number;
    Student_Id:number;
    Destination_User_Name:string;
    Destination_User_Id:number;
    Student_Name : string; 
    Followup_Date : Date; 
    End_Date : Date;
    FromDate :Date;
    ToDate : Date;
    Leave_Status_Id : number; 
    Status_Name : string;
    Remark:string;
    Source_User:number;
    Source_User_Name:string;
    Task_Item_Id:number;
    Task_Group_Id:number;
    tp:number;
    ActualFollowup_Date:Date;
    Department_Id:number;
    Department_Name:string;
    Task_Details:string;
    By_User_Id:number;
    By_User_Name:string;
    RowNo_sort: number;
    RowNo:number
    Branch_Id:number;
    Branch_Name:string;
Deadline:any;
    Duration_in_Hours : number;
    mandatory_Task_Item_Id: number;
    Duration : number=0;
    Description:string;
    Document_Upload:boolean;
    Rating:boolean;

    Image_Photo:string;
    Task_doc_Description:string;
    ImageFile_Doc:any;

    Rating_Id:number;
    Rating_Name:string;

constructor(values: Object = {})  
{
Object.assign(this, values) 
}
}

