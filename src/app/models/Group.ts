import { Tagged_User } from "./Tagged_User";

export class Group {
	Group_Users: Tagged_User[];
	Group_Name: string;
	From_User: number;
	From_UserName: string;
	Channel_Type: number;
	Channel_Id: number;
	constructor(values: Object = {}) {
		Object.assign(this, values);
	}
}
