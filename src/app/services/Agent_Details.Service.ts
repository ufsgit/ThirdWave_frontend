import { Component, OnInit,Input,Injectable } from '@angular/core';
import { environment } from '../../environments/environment.js';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { AnimationKeyframesSequenceMetadata } from '@angular/animations';
@Injectable({
providedIn: 'root'
})
export class Agent_Details_Service {
constructor(private http: HttpClient)
{
const httpOptions = {
headers: new HttpHeaders({
'Content-Type':  'application/json'
})
};
}AnimationKeyframesSequenceMetadata
Save_Agent_Details(Agent_Details_)
{
     
return this.http.post(environment.BasePath +'Agent_Details/Save_Agent_Details/',Agent_Details_);}
saveManageUser(Agent_Details_)
{
     
return this.http.post(environment.BasePath +'Agent_Details/Save_Manage_User/',Agent_Details_);}

Save_Freelancer_Details(Agent_Details_)
{
    debugger 
return this.http.post(environment.BasePath +'Agent_Details/Save_Freelancer_Details/',Agent_Details_);}

Save_Freelancer_Payment(Agent_Details_)
{
    debugger 
return this.http.post(environment.BasePath +'Agent_Details/Save_Freelancer_Payment/',Agent_Details_);}

private extractData(res: Response)
{
let body = res;
return body || { };
}
Search_Agent_Details(Name_,Login_User_Id_,User_Type_):Observable<any>
{
    
 return this.http.get(environment.BasePath +'Agent_Details/Search_Agent_Details/'+Name_+'/'+Login_User_Id_+'/'+User_Type_);}

 getAgentUsers(AgentUser_Id) {
	return this.http.get(
		environment.BasePath + "Agent_Details/getAgentUsers/" + AgentUser_Id
	);
}
 Search_Freelancer_Details(Name_,Login_User_Id_,User_Type_):Observable<any>
{
    debugger
 return this.http.get(environment.BasePath +'Agent_Details/Search_Freelancer_Details/' + Name_+'/'+Login_User_Id_+'/'+User_Type_);}

 Search_Freelancer_Payment(FromDate,ToDate,Name):Observable<any>
 {
     debugger
  return this.http.get(environment.BasePath +'Agent_Details/Search_Freelancer_Payment/' + FromDate+'/'+ToDate+'/'+Name);}
 
 Search_Agent_Details_Typeahead(Agent_Name):Observable<any>
 {
  return this.http.get(environment.BasePath +'Agent_Details/Search_Agent_Details_Typeahead/'+Agent_Name);}

 Load_Agent_Details(Agent_Name):Observable<any>
 {
  return this.http.get(environment.BasePath +'Agent_Details/Load_Agent_Details/'+Agent_Name);}

 Delete_Agent_Details(Agent_Id_)
{
 return this.http.get(environment.BasePath +'Agent_Details/Delete_Agent_Details/'+Agent_Id_);}

 forgetPassword()
 {debugger
  return this.http.get(environment.BasePath +'Public_Data/forgetPassword/');}
  
 Delete_Agent_Payment(Agent_Id_)
{
 return this.http.get(environment.BasePath +'Agent_Details/Delete_Agent_Payment/'+Agent_Id_);}
Get_Agent_Details(Agent_Id_)
{
 return this.http.get(environment.BasePath +'Agent_Details/Get_Agent_Details/'+Agent_Id_);}

 Get_Agent_Department_Data(Agent_Id_)
 {
  return this.http.get(environment.BasePath +'Agent_Details/Get_Agent_Department_Data/'+Agent_Id_);}
 


 Get_Menu_Status(Menu_Id_,Login_User_)
 {
        return this.http.get(environment.BasePath + 'Student/Get_Menu_Status/' + Menu_Id_+'/'+Login_User_);
}

Search_Name_Typeahead(Agent_Name): Observable<any> {
  debugger
    var Search_Data = { Agent_Name: Agent_Name };
    return this.http.get(
      environment.BasePath + "Agent_Details/Search_Name_Typeahead/",
      { params: Search_Data }
    );
  }

}

