import { Student_Import_Details } from "./Student_Import_Details";
import { User_Sub } from "./User_Sub";
export class Student_Import {
	By_User_Id: number;
	Branch: number;
	Department: number;
	Status: number;
	To_User: number;
	Enquiry_Source: number;
	Next_FollowUp_Date: Date;
	Student_Import_Details: Student_Import_Details[];
	Login_Branch: number;
	User_Sub_Data:User_Sub[]
	constructor(values: Object = {}) {
		Object.assign(this, values);
	}
}
