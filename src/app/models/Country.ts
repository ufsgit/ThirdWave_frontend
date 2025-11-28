export class Country
{
Country_Id:number;
Country_Name:string;
Country_Temp:string;
Check_Box:boolean
checkbox_view:boolean
ProcessId: number;
Gold:number;
Silver:number;
Platinum:number;
Country_Data_view:boolean;
Image_Photo:string;
ImageFile_Doc:any;
File_Key:string;
constructor(values: Object = {})  
{
Object.assign(this, values) 
}
}

