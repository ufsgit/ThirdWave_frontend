export class User_Department {
    
    User_Department_Id: number;
    User_Id: number;
    Department_Id: number;
    Branch_Id: number;
    Branch_Name:String;
    Department_Name:string;
    View_Entry: string;
    VIew_All: string;
    Check_Box:boolean;
    Check_Box_VIew_All:boolean;
    countryData:any=[]
    Check_Box_View:boolean;
    constructor(values: Object = {}) {
        Object.assign(this, values)
    }
}

