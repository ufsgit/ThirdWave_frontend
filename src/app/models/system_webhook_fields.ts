export class system_webhook_fields
{
    System_Webhook_Fields_Id :number; 
    Webhook_Id :number;  
    Slno :number;  
    Fields_Id :number;  
    Field_Map :string;
    Fields_Name:string;

constructor(values: Object = {})  
{
Object.assign(this, values) 
}
}

