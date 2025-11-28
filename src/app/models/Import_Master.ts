
import { Course_Import } from '../models/Course_Import';
export class Import_Master
{

 Import_Master_Id:number;
 Entry_Date:Date;


// Description1:string;
// User_Id:string;
// Store_Id:number;

Course_Import:Course_Import[]
constructor(values: Object = {})  
{
Object.assign(this, values) 
}
}

