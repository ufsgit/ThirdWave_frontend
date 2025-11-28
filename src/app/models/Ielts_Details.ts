export class Ielts_Details
{
    Ielts_Details_Id:number;
    Slno:number;
    Student_Id:number;
    Exam_Date_Status:boolean;
    Exam_Date:string;
    Fees_Payment_Status:boolean;
    Fees_Payment_Date:Date;
    Fees_Payment_Amount:number;
    Speaking_Status:boolean;
    Speaking_Date:Date;
    Listening:string;
    Reading:string;
    Writing:string;
    Speaking:string;
    Overall:string;
    Course_Type:number;
    Batch:number;
    Course_Status:number;
    Exam_Booked_With:number;
    Exam_Centre:string;
    Ielts_Type:number;
    Registration_Date:Date;
    Starting_Date:Date;
    Ending_Date:Date;
    datequery:Date;
    Starting_Date_Status:boolean;
    Ending_Date_Status:boolean;
    Registration_Date_Status:boolean;
    Description:string;
    Ielts_Type_Name:string;
    Exam_Check:boolean;

constructor(values: Object = {})  
{
Object.assign(this, values) 
}
}

