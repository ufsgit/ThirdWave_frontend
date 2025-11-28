
export class Transfer
{
Student_Id:number;
transfer_source:string;
Login_User:number;
Transfer_department_Id:number;
Transfer_Remark:string;
Transfer_Status_Id:number;
Transfer_Status_Name:string;
Substatus_Id:number;
Substatus_Name:string;
Application_Id_Ref:number;
Followup_Branch_Id:number;
Followup_Branch_Name:string;
Followup_Department_Id:number;
Followup_Department_Name:string;
Followup_Status_Id:number;
Followup_Status_Name:string;
Followup_To_User_Id:number;
Followup_To_User_Name:string;
Next_FollowUp_Date:Date;


constructor(values: Object = {})  
{
Object.assign(this, values) 
}
}

