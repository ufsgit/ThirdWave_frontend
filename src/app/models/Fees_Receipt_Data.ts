import { Fees_Receipt } from "./Fees_Receipt";

export class Fees_Receipt_Data
{

Receipt_Array:Fees_Receipt[];
Login_Id:number;
Login_User:string;
Student_Id:number;
Student_Name:string;
Student_Email:string;
Fees_Name:string;
constructor(values: Object = {})  
{
Object.assign(this, values) 
}
}

