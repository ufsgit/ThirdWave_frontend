export class Process_sub_status
{

    Process_sub_status_id:number;
    Process_Status_Details_id:number;
    Department_Status_Id:number;
    Department_Status_Name: string;
    Process_sub_status_Id:number;
    Process_sub_status_Name: string;
    checkbox_view:boolean;
    Duration:number;
  
constructor(values: Object = {})  
{
Object.assign(this, values) 
}
}

