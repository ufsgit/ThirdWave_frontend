import { Intake } from "./Intake";

export class Course
{
Row_No : number;
Course_Id:number;
Course_Name:string;
Course:string;
Course_Code:string;
Code:string;
Subject_Id:number;
Sub_Section_Id:number;
Subject:string;
Sub_Section:string;
Duration_Id:number;
Intake_Name:string;
Duration:string;
Level_Id:number;
Level:string;
Ielts_Minimum_Score:number;
Ielts:string;
Internship_Id:number;
Internship:string;
Notes:string;
Details:string;
Application_Fees:string;
Fees:string;
University_Id:number;
University:string;
Country_Id:number;
Country:string;
Internship_Status:number;
Intake:string;
Tag:string;
Intake_Id: number;
Intake_Data: Intake[]
IsSelect:boolean;
IsStatus: boolean;

Gold:number;
Silver:number;
Platinum:number;
Course_Status:number;
Tution_Fees:string;
Entry_Requirement:string;
IELTS_Name:string;
Living_Expense:string;
Work_Experience:string;

More_Information:boolean=false;
Level_Detail_Name:string;
Duration_Name:string;
Subject_Name:string;
Sub_Section_Name:string;

ProcessId: number;


Student_Course_Apply_Id:number

Registration_Fees:string
Date_Charges: string
Bank_Statements: string 
Insurance: string 
VFS_Charges : string 
Apostille: string 
Other_Charges : string;
Course_Temp:string;

Course_Link: string;
qualification: any;
English_Test_Data: any;
English_Test_Status: boolean = false;


constructor(values: Object = {})  
{
Object.assign(this, values) 
}
}

