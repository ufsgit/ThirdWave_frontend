import { Student_Selected_Details } from "./Student_Selected_Details";

export class Application_Report_Details
{

// Student_Id:number;
Branch:number;
Branch_Name:string;
By_User_Id:number;
By_User_Name:string;
Department_Id:number;
Department_Name:string;
To_User_Id:number;
To_User_Name:string;
Student_Selected_Details:Student_Selected_Details[];
Check_Box_View:Boolean;



constructor(values: Object = {})  
{
Object.assign(this, values) 
}
}

