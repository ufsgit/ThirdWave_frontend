export class Region {
    Region_Id: number;
    Region_Name: string;
    To_Time:string;
    From_Time:string;
    constructor(values: Object = {}) {
        Object.assign(this, values)
    }
}