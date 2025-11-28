export class Tagged_User {
	User_Id: string;
	User_Details_Name: string;
	User_Details_Id: number;
	constructor(values: Object = {}) {
		Object.assign(this, values);
	}
}
