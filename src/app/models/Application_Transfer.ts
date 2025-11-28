import { Application_List } from "./Application_List"; 
export class Application_Transfer {
    Student_Id: number;
    Transfer_Source: string;
    Login_User:string;
    Login_Department:number;
    Application_List_Data: Application_List[];
    constructor(values: Object = {}) {
        Object.assign(this, values)
    }
}

