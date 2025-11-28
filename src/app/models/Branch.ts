
import { Department } from '../models/Department';
export class Branch {
    Branch_Id: number;
    Branch_Name: string;
    Address: string;
    Location: string;
    District: string;
    State: string;
    Country: string;
    PinCode: string;
    Phone_Number: string;
    Email: string;
    Branch_Code: string;
    Department_Data: Department[];
    Check_Box:boolean;
    Opening  :Number  ;
    Type :number  ;
Company:number;
Default_Department_Id:number;
Default_Department_Name:string;
Default_User_Id:number;
Default_User_Name:string;
Default_Status_Id:number;
Default_Status_Name:string;
Is_FollowUp:string;

    constructor(values: Object = {}) {
        Object.assign(this, values)
    }
}

