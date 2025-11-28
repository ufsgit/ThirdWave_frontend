export class StatusType {
  Status_Type_Id: number;
    Status_Type_Name: string;
    Description: string;
  
    constructor(values: Object = {}) {
      Object.assign(this, values);
    }
  }