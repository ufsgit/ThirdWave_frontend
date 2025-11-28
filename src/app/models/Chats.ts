import { Tagged_User } from "./Tagged_User";

export class Chats {
	Chat_Id: number;
	Chats: string;
	From_User: number;
	From_User_Name: string;
	Entry_Date: Date;
	File_Name: string;
	Display_File: string;
	Channel_Id: number;
	Student_Id:number;
	Application_Details_Id:number;
	Tagged_User: Tagged_User[];
	TaggedId: Tagged_User[];
	constructor(values: Object = {}) {
		Object.assign(this, values);
	}
}
