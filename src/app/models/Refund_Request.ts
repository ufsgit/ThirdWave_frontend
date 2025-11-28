export class Refund_Request
{
    Refund_Request_Id:number;
    Student_Id:number;
    User_Id:number;
    Fees_Receipt_Id:number;
    Reason:string;
    Remark:string;

constructor(values: Object = {})  
{
Object.assign(this, values) 
}
}

