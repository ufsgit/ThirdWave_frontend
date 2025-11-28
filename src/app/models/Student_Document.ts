import { Document_Type } from "./Document_Type";

export class Student_Document
{
Student_Document_Id:number;
Student_Id:number;
Document_Id:number;
Document_Name:string
Description:string
File_Name:string;
Document_File_Name:string;
Image:string;
ImageFile_Doc:any;
Documents_:any;
Image_Photo:string;
Document_Type_Id:number;
Document_Type_Name:string;
Item_Details:Document_Type[];

constructor(values: Object = {})  
{
Object.assign(this, values) 
}
}

