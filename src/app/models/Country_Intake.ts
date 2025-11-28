import { Intake } from "./Intake";

export class Country_Intake
{
    Country_Intake_Id :number; 
    Country_Id :number; 
    Intake_Id :number;
    Intake_Name: string; 
    Year_Id :number; 
    Intake_Year_Name:string;
    Status_Id :number; 
    Status_Name :string;
    Intake_Data:Intake[];
constructor(values: Object = {})  
{
Object.assign(this, values) 
}
}

