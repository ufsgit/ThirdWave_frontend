export class Subject
{
Subject_Id:number;
Subject_Name:string;
Selection:boolean
constructor(values: Object = {})  
{
Object.assign(this, values) 
}
}

