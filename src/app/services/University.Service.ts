import { Component, OnInit,Input,Injectable } from '@angular/core';
import { environment } from '../../environments/environment.js';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { AnimationKeyframesSequenceMetadata } from '@angular/animations';
@Injectable({
providedIn: 'root'
})
export class University_Service {
constructor(private http: HttpClient)
{
const httpOptions = {
headers: new HttpHeaders({
'Content-Type':  'application/json'
})
};
}AnimationKeyframesSequenceMetadata

// Save_University(University_): Observable<any> {
//     const postData = new FormData();
//     postData.append("University_Id", University_.University_Id);
//     postData.append("University_Name", University_.University_Name);
//     postData.append("About", University_.About);
//     postData.append("About1", University_.About1); 
//     postData.append("About2", University_.About2);
//     postData.append("Location", University_.Location);
//     postData.append("Address", University_.Address);
//     postData.append("Founded_In", University_.Founded_In);
//     postData.append("Institution_Type", University_.Institution_Type);
//     postData.append("Cost_Of_Living", University_.Cost_Of_Living);
//     postData.append("Tution_Fee", University_.Tution_Fee);
//     postData.append("Application_Fee", University_.Application_Fee);
//     postData.append("Type_Of_Accomodation", University_.Type_Of_Accomodation);
//     postData.append("Contact_Number", University_.Contact_Number);
//     postData.append("Email", University_.Email);
//     postData.append("Web", University_.Web);
//     postData.append("Fb", University_.Fb);
//     postData.append("Linkedin", University_.Linkedin);
//     postData.append("Twitter", University_.Twitter);
//     postData.append("Googlemap", University_.Googlemap);
//     postData.append("Status", University_.Status);
//     postData.append("Country_Id", University_.Country_Id);
//     postData.append("Sub_Heading1", University_.Sub_Heading1);
//     postData.append("Sub_Heading2", University_.Sub_Heading2);
//     postData.append("Sub_Heading3", University_.Sub_Heading3);
//     postData.append("School_Rank", University_.School_Rank);
//     postData.append("Video_Link", University_.Video_Link);
//     postData.append("Sub_Heading_Colored", University_.Sub_Heading_Colored);
//     postData.append("Banner_Image", University_.Banner_Image);
//     if(image!=undefined){
//   for(const img of image)
//   {
//      postData.append("myFile", img);
// }
//     }
    
//     return this.http.post(environment.BasePath + 'University/Save_University', postData);
// }
Save_University_Photos(University_Id,University_File,image: File[]): Observable<any> 
{
    const postData = new FormData();
    postData.append("University_Id", University_Id);
   
    postData.append("Photo", University_File);
    if(image!=undefined){
    for(const img of image)
    {
       postData.append("myFile", img);
  }
}

return this.http.post(environment.BasePath + 'University/Save_University_Photos', postData);
}
private extractData(res: Response)
{
let body = res;
return body || { };
}
Save_University(University_)
{
return this.http.post(environment.BasePath +'University/Save_University/',University_);}
University_Typeahead_with_Level_Country(Country_Id,Level_Detail_Id,University_Id): Observable<any> {
    var Search_Data = { 'University_Name': University_Id,'Country_Id': Country_Id,'Level_Detail_Id': Level_Detail_Id }
    return this.http.get(environment.BasePath + 'University/University_Typeahead_with_Level_Country/', { params: Search_Data });
}
University_Typeahead_with_Country(Country_Id,University_Name): Observable<any> {
  console.log('Country_Id: ', Country_Id);
    var Search_Data = { 'University_Name': University_Name,'Country_Id': Country_Id }
    return this.http.get(environment.BasePath + 'University/University_Typeahead_with_Country/', { params: Search_Data });
}
University_Typeahead(University_Id): Observable<any> {
  var Search_Data = { 'University_Name': University_Id}
  return this.http.get(environment.BasePath + 'University/University_Typeahead/', { params: Search_Data });
}



update_commission(University_Id) {
  return this.http.get(
    environment.BasePath + "University/update_commission/" + University_Id
  );
}
Load_Country()
 {
  return this.http.get(environment.BasePath +'University/Load_Country/');}
 Load_Status()
 {
  return this.http.get(environment.BasePath +'University/Load_Status/');}
Search_University(University_Name,Country_Id):Observable<any>
{
var Search_Data={'University_Name':University_Name, 'Country_Id': Country_Id }
 return this.http.get(environment.BasePath +'University/Search_University/',{params:Search_Data});}
Delete_University(University_Id)
{
 return this.http.get(environment.BasePath +'University/Delete_University/'+University_Id);}
Get_University(University_Id)
{
 return this.http.get(environment.BasePath +'University/Get_University_Photos/'+University_Id);}


 Search_University_Typeahead(University_Name): Observable<any> {
  var Search_Data = { 'University_Name': University_Name}
  return this.http.get(environment.BasePath + 'University/Search_University_Typeahead/', { params: Search_Data });
}

Search_University_Typeahead_Country(University_Name,Country_Id): Observable<any> {
  debugger
  var Search_Data = { 'University_Name': University_Name,'Country_Id':Country_Id}
  return this.http.get(environment.BasePath + 'University/Search_University_Typeahead_Country/', { params: Search_Data });
}
Search_Status_Typeahead(Department_Status_Name,universityId): Observable<any> {
  debugger
  var Search_Data = { 'Department_Status_Name': Department_Status_Name,
    'universityId':universityId
  }
  return this.http.get(environment.BasePath + 'University/Search_Status_Typeahead/', { params: Search_Data });
}
// Search_Status_Typeahead(Department_Status_Name, universityId): Observable<any> {
//   var Search_Data = { 
//     'Department_Status_Name': Department_Status_Name,
//     'universityId': universityId
//   };
//   return this.http.get(environment.BasePath + 'University/Search_Status_Typeahead/', { params: Search_Data });
// }

Search_Status_Typeahead_check(Department_Status_Name, University_Ids: any[]): Observable<any> {
  var Search_Data = { 'Department_Status_Name': Department_Status_Name,
    University_Ids: University_Ids
  }
  return this.http.get(environment.BasePath + 'University/Search_Status_Typeahead_check/', { params: Search_Data });
}


Search_Status_Typeahead1(Department_Status_Name): Observable<any> {
  var Search_Data = { 'Department_Status_Name': Department_Status_Name
    
  }
  return this.http.get(environment.BasePath + 'University/Search_Status_Typeahead1/', { params: Search_Data });
}
Get_Menu_Status(Menu_Id_,Login_User_)
{
    return this.http.get(environment.BasePath + 'Student/Get_Menu_Status/' + Menu_Id_+'/'+Login_User_);
}


}

