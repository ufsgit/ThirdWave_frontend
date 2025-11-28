import { Process } from "./process.interface";
import { University } from "./University";

export class Document
{
Document_Id:number;
Document_Name:string;
Document_Type:number;
Document_Type_Id:number;
Document_Type_Name:string;
agency_documents_id: number;
agency_documents_name: string;
Document_Order:number;
 // New properties
 Agent_Mandatory: boolean;
 Agent_Document: boolean;
 Document_View_Data:Document;
 File_Type_Data:any[];

constructor(values: Object = {})  
{
Object.assign(this, values) 
}
}

