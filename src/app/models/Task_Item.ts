export class Task_Item
{
    Task_Item_Id:number;
    Task_Item_Name:string;
    Task_Type_Id:number;
    Task_Item_Group:number;   
    Duration:number;
    Document_Upload:boolean;
    Rating:boolean;
    Notification_Department_Id:number;
    Notification_Department_Name:string;
constructor(values: Object = {})  
{
Object.assign(this, values) 
}
}

