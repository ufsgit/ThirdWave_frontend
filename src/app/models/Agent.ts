export class Agent
{
    AgentUser_Id:number;
    Agent_Id:number;
    Agent_Name:string;
    Phone : string; 
    Email : string; 
    Address : string; 
    Description : string;
    User_Name:string;
    Password:string;
    Enquiry_Source_Id:number;
    Agent_Status:number;
    Enquiry_Source_Name:string;
    Under_User:number
       // Adding subagent properties
       username_subagent: string;
       password_Subagent: string;
    Branch_Id:number;
    Agent_Department_Data:Agent[];
    Department_Name:string;
    Department_Id:number
Department :number ;
To_User_Id :number ;
To_User_Name:string;
User_Details_Id:number
User_Details_Name:string;

Agent_Department_Id:number;
Agent_Department_Name:string;

To_UserId:number;
To_UserName: string

Login_user_id:string
Commission:string;

/** Added on 25-07-2024 */

Department_Name_mentor:string;
Department_mentor :number ;
To_User_Id_mentor :number ;
To_User_Name_mentor:string;

constructor(values: Object = {})  
{
Object.assign(this, values) 
}
}

