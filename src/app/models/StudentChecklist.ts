export class StudentChecklist
{

    Student_Checklist_Id:number;
    Check_List_Id:number;
   Student_Id:number;
   Applicable:boolean;
   Checklist_Status:boolean;
   Description:string;
   Check_List_Name:String;
  
constructor(values: Object = {})  
{
Object.assign(this, values) 
}
}
