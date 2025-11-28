import { User_Menu_Selection } from "./User_Menu_Selection";

export class User_Role {
    User_Role_Id: number;
    User_Role_Name: string;
    Role_Under_Id: number;
    Role_Under:string;
    Original_Role_Id:number;
    User_Menu_Selection_Data:User_Menu_Selection[];
    constructor(values: Object = {}) {
        Object.assign(this, values)
    }
}

