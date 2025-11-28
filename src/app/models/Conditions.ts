export class Conditions
{
    Conditions_Id:number;
    Conditions_Name:string;
    Condition_Remark:string;
    Completed:boolean=false;
constructor(values: Object = {})  
{
Object.assign(this, values) 
}
}