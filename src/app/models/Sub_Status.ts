export class Sub_Status {
   
    Sub_Status_Id: number;
    Sub_Status_Name:string;
    Status_Id: number;
    Duration: number;
    FollowUp: string;
    
    constructor(values: Object = {}) {
        Object.assign(this, values)
    }
}

