import { Component, OnInit, Input, Injectable } from "@angular/core";
import { environment } from "../../environments/environment.js";
import {
	HttpClient,
	HttpHeaders,
	HttpErrorResponse,
} from "@angular/common/http";
import { Observable, of } from "rxjs";
import { map, catchError, tap } from "rxjs/operators";
import { AnimationKeyframesSequenceMetadata } from "@angular/animations";
@Injectable({
	providedIn: "root",
})
export class Chat_Window_Service {
	constructor(private http: HttpClient) {
		const httpOptions = {
			headers: new HttpHeaders({
				"Content-Type": "application/json",
			}),
		};
	}
	AnimationKeyframesSequenceMetadata;

	// Save_Chat(Chats_) {
	// 	
	// 	return this.http.post(environment.BasePath + 'Chat_Window/Save_Chat/', Chats_);
	// }
	Save_Chat(Chats_, ImageFile_: File[], Document_Array: any[]) {
		const postData = new FormData();
		debugger;
		if (Chats_ != null) {
			postData.append("Chats", Chats_.Chats);
			postData.append("From_User", Chats_.From_User);
			postData.append("From_User_Name", Chats_.From_User_Name);
			postData.append("Display_File", Chats_.Display_File);
			postData.append("Channel_Id", Chats_.Channel_Id);
		}
		if (Chats_.Tagged_User != undefined && Chats_.Tagged_User.length > 0) {
			postData.append("User_Id", Chats_.Tagged_User[0].User_Id);
			postData.append(
				"User_Details_Name",
				Chats_.Tagged_User[0].User_Details_Name
			);
		}

		var i = 0,
			j = 0;
		if (ImageFile_ != undefined) {
			for (const img of ImageFile_) {
				postData.append("myFile", img);
				postData.append("ImageFile_", i.toString());
				i = i + 1;
			}
		}
		postData.append("Document_File_Array", i.toString());

		return this.http.post(
			environment.BasePath + "Chat_Window/Save_Chat",
			postData
		);
	}


	Save_Comments(Chats_, ImageFile_: File[], Document_Array: any[]) {
		const postData = new FormData();

		if (Chats_ != null) {
			postData.append("Chats", Chats_.Chats);
			postData.append("From_User", Chats_.From_User);
			postData.append("From_User_Name", Chats_.From_User_Name);
			postData.append("Display_File", Chats_.Display_File);
			postData.append("Channel_Id", Chats_.Channel_Id);
			postData.append("Student_Id", Chats_.Student_Id);
			postData.append("Application_Details_Id", Chats_.Application_Details_Id);

		}
		if (Chats_.Tagged_User != undefined && Chats_.Tagged_User.length > 0) {
			postData.append("User_Id", Chats_.Tagged_User[0].User_Id);
			postData.append(
				"User_Details_Name",
				Chats_.Tagged_User[0].User_Details_Name
			);
		}

		var i = 0,
			j = 0;
		if (ImageFile_ != undefined) {
			for (const img of ImageFile_) {
				postData.append("myFile", img);
				postData.append("ImageFile_", i.toString());
				i = i + 1;
			}
		}
		postData.append("Document_File_Array", i.toString());

		return this.http.post(
			environment.BasePath + "Chat_Window/Save_Comments",
			postData
		);
	}


	

	private extractData(res: Response) {
		let body = res;
		return body || {};
	}
	Load_ChatUser_Details(Value_, Login_User_): Observable<any> {
		return this.http.get(
			environment.BasePath +
				"Chat_Window/Load_ChatUser_Details/" +
				Value_ +
				"/" +
				Login_User_
		);
	}
	Get_Chats(Channel_Id_, Login_User_) {
		return this.http.get(
			environment.BasePath +
				"Chat_Window/Get_Chats/" +
				Channel_Id_ +
				"/" +
				Login_User_
		);
	}
	// Load_old_messages() {
	// 	return this.http.get(
	// 		environment.BasePath + "Chat_Window/Load_old_messages/"
	// 	);
	// }
	// Load_old_messages(Channel_Id_Temp_) {
	// 	return this.http.get(
	// 		environment.BasePath + "Chat_Window/Load_old_messages/"+Channel_Id_Temp_
	// 	);
	// }
	
Load_old_messages(Channel_Id_Temp_: number, offset: number = 0) {
    return this.http.get(
        environment.BasePath + "Chat_Window/Load_old_messages/" + Channel_Id_Temp_ + "/" + offset
    );
}
	Group_Save(Group_) {
		;
		return this.http.post(
			environment.BasePath + "Chat_Window/Group_Save/",
			Group_
		);
	}
	Load_Channels(Login_User_Id_) {
		return this.http.get(
			environment.BasePath + "Chat_Window/Load_Channels/" + Login_User_Id_
		);
	}

	Load_Exist_Channels(Selected_User_, Login_User_) {
		return this.http.get(
			environment.BasePath +
				"Chat_Window/Load_Exist_Channels/" +
				Selected_User_ +
				"/" +
				Login_User_
		);
	}
	Reset_CurrentChannel_Count(Channel_Id_Temp_, Login_User_) {
		return this.http.get(
			environment.BasePath +
				"Chat_Window/Reset_CurrentChannel_Count/" +
				Channel_Id_Temp_ +
				"/" +
				Login_User_
		);
	}
	Edit_Group(Channel_Id_, Edited_Name_) {
		return this.http.get(
			environment.BasePath +
				"Chat_Window/Edit_Group/" +
				Channel_Id_ +
				"/" +
				Edited_Name_
		);
	}
	Delete_Channel(Channel_Id_) {
		return this.http.get(
			environment.BasePath + "Chat_Window/Delete_Channel/" + Channel_Id_
		);
	}
}
