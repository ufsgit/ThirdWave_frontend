import { Student } from "./Student"

export class Report_Data
{

Report_Array:Student[];
Login_Id:number;
Login_User:string;

constructor(values: Object = {})  
{
Object.assign(this, values) 
}
}

