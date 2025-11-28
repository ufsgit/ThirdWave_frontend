export class Data_Field
{
    Fields_Id:number;
    Fields_Name: string;  
DeleteStatus:number;
Data_Type:number;

constructor(values: Object = {})  
{
Object.assign(this, values) 
}
}
