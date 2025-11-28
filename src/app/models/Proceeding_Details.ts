export class Proceeding_Details
{
    Application_Master_Id:number;
    Student_Id:number;
    Year_Name : string; 
    University_Name : string; 
    Country_Name : string; 
    Intake_Name : string;
    Partner_Name:string;
    Course_Name:string;


constructor(values: Object = {})  
{
Object.assign(this, values) 
}
}

