export class User_Resignation_Management
{
    User_Resignation_Management_Id :number;
    Resigned_User_Id :number;
    Resigned_User_Name :string;
    New_asigned_User_Id :number;
    New_asigned_User_Name :string;
    Created_By  :number;
    
constructor(values: Object = {})  
{
Object.assign(this, values) 
}
}

