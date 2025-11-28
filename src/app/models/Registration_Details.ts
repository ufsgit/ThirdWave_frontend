import { Student } from "./Student";

export class Registration_Details
{

Registration_Array:Student[];
Login_Id:number;
Login_User:string;
Student_Id:number;
Student_Name:string;
Student_Email:string;
Student_Registration_Id:number;
constructor(values: Object = {})  
{
Object.assign(this, values) 
}
}

