export class Process_Check_List
{

    Process_Check_List_id:number;
    Process_Status_Details_id:number;
    Document_Name: string;  
    Document_Id:string;
    checkbox_view:boolean;
constructor(values: Object = {})  
{
Object.assign(this, values) 
}
}

