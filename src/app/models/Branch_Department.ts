export class Branch_Department {
    Branch_Department_Id: number;
    Branch_Id: number;
    Department_Id: number;
    Branch_Name:string;
    Department_Name:string;
    constructor(values: Object = {}) {
        Object.assign(this, values)
    }
}

