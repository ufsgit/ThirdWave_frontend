import { Region } from "./Region";

export class Holiday {
    Holiday_Id: number=0;
    Holiday_Date: any;
    Holiday_Name:string;
    Region_Ids:Region[];
    constructor(values: Object = {}) {
        Object.assign(this, values)
    }
}