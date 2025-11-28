export class Student_Message
{
Student_Message_Id:number;
Student_Id:number;
Entry_Date:Date;
Message_Detail:string;
constructor(values: Object = {})  
{
Object.assign(this, values) 
}
}

