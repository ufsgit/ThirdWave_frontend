import { Component, OnInit,Input,Injectable } from '@angular/core';
import { environment } from '../../environments/environment.js';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { AnimationKeyframesSequenceMetadata } from '@angular/animations';
import * as io from "socket.io-client";
@Injectable({
providedIn: 'root'
})
export class User_Details_Service {
    // private url = "http://localhost:3510";
    // private url = 'ws:http://regnewapi.trackbox.co.in:3646/'
    url = environment.NotificationPath ;// 'http://regnewapi.trackbox.co.in:3646/'
	// private url = 'ws://localhost:3509';
	private socket;
	uname: string;
	Notification_Count: number;
constructor(private http: HttpClient)
{
    this.socket = io(this.url, { transports: ["websocket"] });
const httpOptions = {
headers: new HttpHeaders({
'Content-Type':  'application/json'
})
};
}AnimationKeyframesSequenceMetadata

// Save_User_Details(User_Details_)
// {
// return this.http.post(environment.BasePath +'User_Details/Save_User_Details/',User_Details_);}
// private extractData(res: Response)
// {
// let body = res;
// return body || { };
// }
// Search_User_Details(User_Details_Name):Observable<any>
// {
     
//  return this.http.get(environment.BasePath +'User_Details/Search_User_Details/'+User_Details_Name);
// }
Save_User_Details(User_Details_)
{
return this.http.post(environment.BasePath +'User_Details/Save_User_Details/',User_Details_);}
private extractData(res: Response)
{
let body = res;
return body || { };
}
Load_User_Working_Status_Report(): Observable<any> {
        return this.http.get(
            environment.BasePath + "User_Details/Load_User_Working_Status_Report"
        );
    }
    Load_User_Status(): Observable<any> {
        return this.http.get(
            environment.BasePath + "User_Details/Load_User_Status"
        );
    }
      Load_Department(): Observable<any> {
        return this.http.get(
            environment.BasePath + "User_Details/Load_Department"
        );
    }
 Change_User_Status(User_Id: number, New_Status_Id: number): Observable<any> {
    return this.http.get(
        environment.BasePath + "User_Details/Change_User_Status/" + User_Id + "/" + New_Status_Id
    );
}

Search_User_Details(User_Details_Name_,Branch_Id_,Department_Id_,User_Status_Id_,UserCombination_Id_):Observable<any>
{
     
 //return this.http.get(environment.BasePath +'User_Details/Search_User_Details/'+User_Details_Name_+'/'+Branch_Id_);
 var Search_Data = {
  'User_Details_Name_': User_Details_Name_, 'Branch_Id_': Branch_Id_ ,'Department_Id_':Department_Id_,'User_Status_Id_':User_Status_Id_,'UserCombination_Id_':UserCombination_Id_
}
return this.http.get(environment.BasePath + 'User_Details/Search_User_Details/', { params: Search_Data });
}
Get_Users_Load_Data():Observable<any>
{
return this.http.get(environment.BasePath +'User_Details/Get_Users_Load_Data/');
}
Delete_User_Details(User_Details_Id)
{
 return this.http.get(environment.BasePath +'User_Details/Delete_User_Details/'+User_Details_Id);}
 Get_User_Details_Edit(User_Details_Id)
{
 return this.http.get(environment.BasePath +'User_Details/Get_User_Details_Edit/'+User_Details_Id);
}

Get_User_Role_Edit(User_Role_Id)
{
 return this.http.get(environment.BasePath +'User_Details/Get_User_Role_Edit/'+User_Role_Id);
}

Search_User_Role(User_Role_Name): Observable<any> {
    return this.http.get(environment.BasePath + 'User_Details/Search_User_Role/' + User_Role_Name);
}
Get_Menu_Status(Menu_Id_,Login_User_)
{
       return this.http.get(environment.BasePath + 'Student/Get_Menu_Status/' + Menu_Id_+'/'+Login_User_);
}

Search_Backup_User_Typeahead(User_Details_Name,Department_Id_): Observable<any>
{
    var Search_Data = { 'User_Details_Name': User_Details_Name, 'Department_Id_': Department_Id_}
    return this.http.get(environment.BasePath + 'User_Details/Search_Backup_User_Typeahead/', { params: Search_Data });
}
sendNotification(): Promise<any> {
    return new Promise((resolve, reject) => {
        this.Notification_Count = Number(
            localStorage.getItem("Notification_Count")
        );
        this.uname = localStorage.getItem("uname");
        //   if(this.Notification_Count==0)
        //   {

        var message = { User: this.uname };
        this.socket.emit("new-message", message);
        //alert(resp.coords.longitude);
        //    }
        //    this.Notification_Count++;
        //    if(this.Notification_Count==1000)
        //      this.Notification_Count=0;
        //    localStorage.setItem('Notification_Count',"0");
        resolve({ User: this.uname });
    });
}

/** Added on 26-07-2024 */

Get_Direct_Agent_Combinations():Observable<any>
{
    debugger;
    return this.http.get(environment.BasePath +'Student/Get_Direct_Agent_Combinations/');
}

}

