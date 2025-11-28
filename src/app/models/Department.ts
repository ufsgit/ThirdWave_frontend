import { Department_Status } from '../models/Department_Status';
export class Department {
    Department_Id: number;
    Department_Name: string;
    Department_FollowUp:boolean;
    Task_Item_Id:number;
    Task_Item_Name:string;
    FollowUp: string;
    Status: string;
    Department_Order: number;
    Color: string;
    Check_Box:boolean;
    Department_Status_Id:number;
    Transfer_Method_Id:number;
    Color_Type_Id:string;
    Department_Status_Data: Department_Status[];
    checkbox_view:boolean
    Color_Type_Name:string;
    Department:any
    Department_management_view: boolean;
  Department_management_view1: number;
  Deparment_management_view1: number;
  Round_Robin_Check:number;
  Agent_View_Check:number;

    constructor(values: Object = {}) {
        Object.assign(this, values)
    }
}

