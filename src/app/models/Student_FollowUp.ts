import { Time } from "@angular/common"

export class Student_FollowUp
{
    Student_FollowUp_Id :number
    Student_Id :number 
    Entry_Date :Date 
    Next_FollowUp_Date :Date 
    FollowUp_Difference :number 
    Department :number 
    Status_Id :number 
    To_User_Id :number 
    Branch :number
    Branch_Name:string;
    To_User_Name:string;
    Department_Name:string;
    Department_Status_Name:string
    Remark :string
    Remark_id:number
    By_User_Id :number ;
    By_User_Name:string;
    Department_FollowUp:boolean 
    FollowUp_Type :number
    FollowUP_Time:Time
    Actual_FollowUp_Date:Date;
    FollowUp:string;
    Class_Id:number;
    Class_Name:string;
    Class_Order:number;
    Sub_Status_Id:number;
    Sub_Status_Name:string;
    Is_Registered:number;
    User_Id:number;
    User_Details_Name:string;
    Status_Type_Id:number;
    Status_Type_Name:string;
    First_Time_Dept:boolean;
    Dept_Name:string;
    UserName:string;
    Registration:boolean;
constructor(values: Object = {})  
{
Object.assign(this, values) 
}
}

