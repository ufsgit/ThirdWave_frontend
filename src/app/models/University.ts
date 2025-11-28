import { Document } from "./Document";
export class University
{
University_Id:number;
University_Name:string;
About	:string;
About1	:string;
About2	:string;
Location:string;
Address	:string;
Founded_In:string;
Institution_Type:string;
Cost_Of_Living	:string;
Tution_Fee	:string;
Application_Fee	:string;
Type_Of_Accomodation:string;
Contact_Number:string;
Email:string;
Web	:string;
Fb	:string;
Linkedin:string;
Twitter	:string;
Googlemap:string;
Status	:number;
Country_Id:number;
Sub_Heading1:string;
Sub_Heading2:string;
Sub_Heading3:string;
School_Rank	:string;
Video_Link	:string;
Sub_Heading_Colored	:string;
Banner_Image:string;
Univerity_Temp:string;
processId: number;
Gold:number;
Silver:number;
University_View:boolean;
Document_View_Data:Document[];
Platinum:number;
constructor(values: Object = {})  
{
Object.assign(this, values) 
}
}

