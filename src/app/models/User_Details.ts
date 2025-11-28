
import {User_Menu_Selection} from './User_Menu_Selection';
import { User_Department } from './User_Department';
import { Application_Group } from './Application_Group';
import { ApplicationStatus } from './ApplicationStatus';
import { Department } from './Department';
import { Country } from './Country';
import { Region } from './Region';
import { Subordinates } from './Subordinates';
export class User_Details
{
User_Details_Id:number;
User_Details_Name:string;
Password:string;
Working_Status:number;
User_Status_Name:string;
User_Type:number;
Role_Id:number;
Address1:string;
Address2:string;
Address3:string;
Address4:string;
Pincode:string;
Mobile:string;
Email:string;
Employee_Id:number;
Branch_Id:number;
FollowUp_Target:number;
Influencer_Count:number;
Registration_Target:number;
Client_Accounts_Name:string;
User_Menu_Selection_Data:User_Menu_Selection[];
User_Department_Data:User_Department[];
UserName_Details_Data :Subordinates[];
Department_Name:String;
Department_Id:number;
Backup_User_Id:number;
Backup_User_Name:string;
User_Application_Group:Application_Group[]
User_Application_Status:ApplicationStatus[]
Application_View:boolean
All_Time_Department_View:boolean
Deparment_management_view: boolean
All_Time_Country_View:boolean
All_Time_Departments:Department[]
Default_Application_Status_Id:number;
Default_Application_Status_Name:string;
Region:number
Data_Count:number;
Data_Giving:number;
Countries:Country[]
university:any
Check_Box:boolean
User_Id:string
Deparment_management_view1:number;
Commision_Mode_Id:number;
UserCombination_Id:number;
UserCombination_Name:string;
user_category:number;
AgentManagement_Id: number;
AgentManagement_Name: string;

/** Added on 31-07-2024 */

Agent_Id :number;
Agent_Name : string;
subordinaters_length:number;

constructor(values: Object = {})  
{
Object.assign(this, values) 
}
}

