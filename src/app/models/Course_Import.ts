
 import { Course } from './Course';
export class Course_Import
{
 Course:Course[]
 User_Id:number;
 Process_Id:number;
 Course_Import_Details: Course[];

constructor(values: Object = {})  
{
Object.assign(this, values) 
}
}

