export class Enquiry_Source
{
Enquiry_Source_Id:number;
Enquiry_Source_Name:string;
DeleteStatus:number;
Enquiry_Source_Under_Id:number;
Enquiry_Source_Under_Name:string;

/** Added on 14-06-2024 */
Client_Accounts_Id:number;
/*** */
constructor(values: Object = {})  
{
Object.assign(this, values) 
}
}
