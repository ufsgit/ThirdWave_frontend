export class Mandatory_task
{
    Mandatory_Task__Id:number;
    Task_Item_Id:number;
    Task_Item_Name:string;
    Duration:number;

constructor(values: Object = {})  
{
Object.assign(this, values) 
}
}

