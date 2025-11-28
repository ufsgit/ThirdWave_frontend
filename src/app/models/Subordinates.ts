export class Subordinates {
    Subordinates_Id :number;
    User_Details_Id:number;
    User_Details_Name:string;
    VIew_All: string;

    Check_Box_View_New:boolean;
    constructor(values: Object = {}) {
        Object.assign(this, values)
    }
}

