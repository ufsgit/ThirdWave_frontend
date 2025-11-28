import { Student } from "./Student";

export class Send_Welcome_Mail
{

Send_Welcome_Mail_Array:Student[];
Login_Id:number;
Login_User:string;
Student_Id:number;
Student_Name:string;
Student_Email:string;
Voucher_No:string;
Amount:string;
Entry_Date:Date;
Fees_Name:string;
Description:string;


constructor(values: Object = {})  
{
Object.assign(this, values) 
}
}