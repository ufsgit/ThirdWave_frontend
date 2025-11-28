export class Intake
{
Intake_Id:number;
Intake_Name:string;
Intake_Status:boolean;
Intake_Selection:boolean;


Status_Id : number;
Status_Name: string;
Status_Selection:boolean;


constructor(values: Object = {})  
{
Object.assign(this, values) 
}
}

