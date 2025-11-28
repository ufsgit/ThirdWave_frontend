import { Student_Course_Selection } from "./Student_Course_Selection";


export class Followup_History
{
    Entry_Date:Date;
    Remark:string;
    Branch:string;
    Department:string;
    Status:string;
    FollowUp:string;
    User_Name:string;
    By_User_Name:string;
    Course_Applications:Student_Course_Selection[];
constructor(values: Object = {})  
{
Object.assign(this, values) 
}
}

