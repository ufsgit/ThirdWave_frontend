

export class Qualification
{
Qualification_Id:number;
slno:number;
Student_id:number;
Credential:string;
school:string;
MarkPer:String;
Fromyear:String;
Toyear:String;
result:String;
Field:String;
Backlog_History:string;
Year_of_passing:string;

constructor(values: Object = {})  
{
Object.assign(this, values) 
}
}

