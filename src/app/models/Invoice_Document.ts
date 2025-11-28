import internal from "assert"

export class Invoice_Document
{
    Invoice_Document_Id :number;
    Invoice_Id :number; 
    Entry_Date :Date; 
    Description :string; 
    Invoice_Document_Name :string; 
    Invoice_Document_File_Name :string; 
    Invoice_File_Name :string;
    New_Entry:number=0;
constructor(values: Object = {})  
{
Object.assign(this, values) 
}
}

