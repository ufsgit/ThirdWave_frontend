export class Invoice
{
    Invoice_Id :number; 
    Entry_Date :Date; 
    Student_Id :number;
    Amount :number;
    Description :string;
constructor(values: Object = {})  
{
Object.assign(this, values) 
}
}

