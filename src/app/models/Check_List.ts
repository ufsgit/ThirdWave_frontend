export class Check_List
{
Check_List_Id:number;
Check_List_Name:string;
Applicable:boolean;
Checklist_Status:boolean;
constructor(values: Object = {})  
{
Object.assign(this, values) 
}
}

