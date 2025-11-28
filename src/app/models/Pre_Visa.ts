import { Checklist } from "./Checklist";

export class Pre_Visa
{
Pre_Visa_Id:number;
Student_Id:number;
User_Id:number;
Entry_Date:Date;
Country_Id:number;
Application_details_Id:number;
Country_Name:string;
Check_Box_View:boolean;
Checklist_Id:number;
Checklist_Details:Checklist[];
Student_Checklist_Master_Id:number;
Check_Box:boolean;


constructor(values: Object = {})  
{
Object.assign(this, values) 
}
}

