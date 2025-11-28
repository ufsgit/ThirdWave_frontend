export class feesreceiptdocument
{


    New_Entry:number;
    Feesreceipt_document_Id:number;
    Fees_Receipt_Id:number;
   Student_Id:number;
   Entry_date:Date;
   FeesreceiptFile_Name:string;
   FeesreceiptDocument_Id:number;
   FeesreceiptDocument_Name:string;
   FeesreceiptDocument_File_Name:string;
   FeesreceiptDocument_Description:string;

constructor(values: Object = {})  
{
Object.assign(this, values) 
}
}
