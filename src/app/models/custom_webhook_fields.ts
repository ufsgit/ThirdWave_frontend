export class custom_webhook_fields
{
Custom_Webhook_Fields_Id :number; 
Webhook_Id :number;  
Field_Name :string; 
Field_Map :string; 

constructor(values: Object = {})  
{
Object.assign(this, values) 
}
}

