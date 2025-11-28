
export class Channels
{
    Channel_Id : number
    Channel_Name :string
    User_Id : number 
    User_Name :string 
    Channel_Type : number  
    Entry_Date : Date
    Msg_Count : number 
constructor(values: Object = {})  
{
Object.assign(this, values) 
}
}

