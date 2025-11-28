export class Visa_Document
{
Visa_Document_Id:number;
Visa_Id:number;
Entry_Date:Date;
Description:string;
Visa_Document_Name:string;
Visa_Document_File_Name:string;
New_Entry : number;
constructor(values: Object = {})  
{
Object.assign(this, values) 
}
}

