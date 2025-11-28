export class Work_Experience
{
    Work_Experience_Id:number;
    Slno:number;
    Student_Id:number;
    Ex_From:string;
    Ex_To:string;
    Years:string;
    Company:string;
    Designation:string;
    Salary:string;
    Salary_Mode:string;


constructor(values: Object = {})  
{
Object.assign(this, values) 
}
}

