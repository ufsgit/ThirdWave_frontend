export class Task_Detrails
{
    Task_Detrails_Id:number;

    Task_Item_Id:number;
    Task_Item_Name:string;
    Notification_Department_Id:number;
    Notification_Department_Name:string;
    Department_Id: number;
    Department_Name: string;
    Duration:any;
    mandatory_Task_Item_Id:number;
    Student_Task_Id: number;

constructor(values: Object = {})  
{
Object.assign(this, values) 
}
}

