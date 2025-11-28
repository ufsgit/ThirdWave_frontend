export class Payment_Tab_Details
{


Payment_Tab_Id  :number;  
Student_Id  :number;  
Date :Date; 
Voucher_No : string;
From_Account_Id  :number;  
To_Account_Id  :number;  
Amount :number;
Description : string;
Entry_Date :Date; 
Journel_Entry_Id :number;  
User_Id:number;
Payment_Voucher_Id:number;

constructor(values: Object = {})  
{
Object.assign(this, values) 
}
}

