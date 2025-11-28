export class Visa
{
Visa_Id:number;
Approved_Date:Date;
Student_Id:number;
Visa_Granted:boolean;
Visa_Letter:boolean;
Visa_File:boolean;
Approved_Date_L:Date;
Approved_Date_F:Date;
Total_Fees:number;
Scholarship_Fees:number;
Balance_Fees:number;
Paid_Fees:number;
Visa_Type_Id:number;
Visa_Type_Name:string;
Description:string;
Username:string;
Password:string;
Security_Question:string;


Visa_Rejected:boolean;
Visa_Rejected_Date:Date;
ATIP_Submitted:boolean;
ATIP_Submitted_Date:Date;
ATIP_Received:boolean;
ATIP_Received_Date:Date;
Visa_Re_Submitted:boolean;
Visa_Re_Submitted_Date:Date;


Application_No:string;
Visa_GrantedCheck_Box : string;
constructor(values: Object = {})  
{
Object.assign(this, values) 
}
}

