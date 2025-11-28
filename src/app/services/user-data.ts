import { Injectable } from "@angular/core";
import { AuthenticationService } from "./Authenticatiuon.Service";

@Injectable({
	providedIn: "root",
})
export class UserData {
	_favorites: string[] = [];
	HAS_LOGGED_IN = "hasLoggedIn";
	HAS_SEEN_TUTORIAL = "hasSeenTutorial";

	constructor(public auth: AuthenticationService) {}
	afterLogin = (httpData) => {
		if (httpData.status === "error") {
			return httpData.message;
		} else if (httpData[0].length > 0) {
			var id = httpData[0];
			debugger
			localStorage.setItem("Access_Token", httpData.token);
			localStorage.setItem("Login_User", id[0].User_Details_Id);
			localStorage.setItem("uname", id[0].User_Details_Name);
			localStorage.setItem("User_Type", id[0].User_Type);
			localStorage.setItem("Branch", id[0].Branch_Id);
			localStorage.setItem("Login_Department", id[0].Department_Id);
			localStorage.setItem("Notification_Count", id[0].Notification_Count);
			localStorage.setItem("Extension", id[0].Extension);
			localStorage.setItem("Login_Department_Name", id[0].Department_Name);
			localStorage.setItem("Updated_Serial_Id", id[0].Updated_Serial_Id);
			localStorage.setItem("Updated_Serial_Id", id[0].Updated_Serial_Id);
			localStorage.setItem("Influencer_Count", id[0].Influencer_Count);
			localStorage.setItem("Client_Accounts_Id", id[0].Client_Accounts_Id);
			localStorage.setItem("Client_Accounts_Name", id[0].Client_Accounts_Name);
			localStorage.setItem('Assign_User_Dashboard_', '1');
			localStorage.setItem('Profile_Type', id[0].Profile_Type);
			localStorage.setItem('UserCombination_Id', id[0].UserCombination_Id);



			this.setToken(httpData.access_token);
			return true;
		} else {
			return httpData.message;
		}
	};
	login(loginData): Promise<any> {
		debugger
		return this.auth.Login(loginData).then(this.afterLogin);
	}
	isLoggedIn(): boolean {
	 debugger
		return localStorage.getItem("Access_Token") ? true : false;
	}

	// signup(signupData): Promise<any> {
	//   // return this.storage.set(this.HAS_LOGGED_IN, true).then(() => {
	//   //   this.setUsername(username);
	//   //   return this.events.publish('user:signup');
	//   // });
	//   return this.auth.signup(signupData).then(httpData => {
	//     return httpData;
	//   });
	// }

	logout() {
		localStorage.clear();
	}
	setToken(username: string) {
		return localStorage.setItem("token", username);
	}
	getToken(): Promise<any> {
		return localStorage.get("token");
	}
}
