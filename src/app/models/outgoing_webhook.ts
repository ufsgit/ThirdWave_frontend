import { custom_webhook_fields } from "./custom_webhook_fields";
import { system_webhook_fields } from "./system_webhook_fields";

export class outgoing_webhook
{
    Webhook_Id :number; 
    Webhook_Name :string; 
    Webhook_Link :string; 

    system_webhook_fields:system_webhook_fields[];
    custom_webhook_fields:custom_webhook_fields[];

    system_webhook_fields_Data_length:number;
    custom_webhook_fields_Data_length:number;
    Check_Box:boolean;
    Description: string;
constructor(values: Object = {})  
{
Object.assign(this, values) 
}
}

