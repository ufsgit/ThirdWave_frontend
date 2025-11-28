
export class Student_Course_Selection
{
    Course_Id:number;
    Course_Name:string;
    Fees:number;
    Country_Name:string;
    University_Name:string;
constructor(values: Object = {})  
{
Object.assign(this, values) 
}
}