export class Account_Tab_Details
{

Account_Tab_Details_Id :number; 
Agent_Id :number; 
Agent_Name : string;
Date :Date; 
EntryDate :Date; 
Commission_Amount :number;
To_Account_Id :number; 
Voucher_No : string; 
Description : string;
Journel_Id :number; 
Student_Id :number; 
User_Id :number;
From_Account_Id :number; 


constructor(values: Object = {})  
{
Object.assign(this, values) 
}
}

