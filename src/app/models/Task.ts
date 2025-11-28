export class Task
{
Task_Id :number; 
Task_Details:string;
Entry_Date :Date; 
By_User_Id :number;
constructor(values: Object = {})  
{
Object.assign(this, values) 
}
}

