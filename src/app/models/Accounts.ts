export class Accounts
{
    Client_Accounts_Id:number;
    Client_Accounts_Name:string;
    Account_Group_Id:number;
    Group_Name:string;
DeleteStatus:number;

constructor(values: Object = {})  
{
Object.assign(this, values) 
}
}
