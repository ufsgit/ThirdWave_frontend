export class Department_University {
  
    University_Id: number;
    University_Name:string;
    Department_Name:string;
    Country_Id:number;
Country_Name:string;
Department_Id: number;

    constructor(values: Object = {}) {
        Object.assign(this, values)
    }
}

