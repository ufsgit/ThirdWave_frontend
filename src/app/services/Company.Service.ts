import { Component, OnInit, Input, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.js';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { AnimationKeyframesSequenceMetadata } from '@angular/animations';
// import { Student_Status } from '../../../models/Student_Status';
import * as FileSaver from 'file-saver';
// import * as XLSX from 'xlsx';
//import { Company } from 'app/models/Company';
import { Company } from '../models/Company';
@Injectable({
    providedIn: 'root'
})
export class Company_Service {
    constructor(private http: HttpClient) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
    } AnimationKeyframesSequenceMetadata



    Save_Company(Company_:Company,image: File[]) {
        
        const postData = new FormData();
        postData.append("Company_Id", Company_.Company_Id.toString());
        postData.append("companyname", Company_.companyname);
        postData.append("Phone1", Company_.Phone1);
        postData.append("Phone2", Company_.Phone2);
        postData.append("Mobile", Company_.Mobile);
        postData.append("Email", Company_.Email);
        postData.append("Website", Company_.Website);
        postData.append("Address1", Company_.Address1);
        postData.append("Address2", Company_.Address2);
        postData.append("Address3", Company_.Address3);
        postData.append("Logo", Company_.Logo);

        ;
        if (image != undefined) {
            for (const img of image) {
                postData.append("myFile", img);
            }
        }

        return this.http.post(environment.BasePath + 'Company/Save_Company', postData);
    }
    Delete_Company(Company_Id) {
        return this.http.get(environment.BasePath + 'Company/Delete_Company/' + Company_Id);
    }
    Get_Company() {
        return this.http.get(environment.BasePath + 'Company/Get_Company/');
    }

    Get_Menu_Status(Menu_Id_,Login_User_)
    {
           return this.http.get(environment.BasePath + 'Student/Get_Menu_Status/' + Menu_Id_+'/'+Login_User_);
   }
   Get_Application_Settings() {
    return this.http.get(environment.BasePath + 'Company/Get_Application_Settings/');
    }
    Save_Application_Settings(Application_Settings_) {
        
        return this.http.post(environment.BasePath + 'Company/Save_Application_Settings/', Application_Settings_);
    }

    Save_User_Resignation_Management(User_Resignation_Management_) {
        
        return this.http.post(environment.BasePath + 'Company/Save_User_Resignation_Management/', User_Resignation_Management_);
    }

}


// Get_Menu_Status(Menu_Id_,Login_User_)
// {
//        return this.http.get(environment.BasePath + 'Student/Get_Menu_Status/' + Menu_Id_+'/'+Login_User_);
// }















// import { Component, OnInit, Input, Injectable } from '@angular/core';
// import { environment } from '../../environments/environment.js';
// import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
// import { Observable, of } from 'rxjs';
// import { map, catchError, tap } from 'rxjs/operators';
// import { AnimationKeyframesSequenceMetadata } from '@angular/animations';
// // import { Student_Status } from '../../../models/Student_Status';
// import * as FileSaver from 'file-saver';
// import * as XLSX from 'xlsx';
// // import { Company } from 'app/models/Company';
// import{Company} from 'app/models/Company';
// @Injectable({
//     providedIn: 'root'
// })
// export class Company_Service {
//     constructor(private http: HttpClient) {
//         const httpOptions = {
//             headers: new HttpHeaders({
//                 'Content-Type': 'application/json'
//             })
//         };
//     } AnimationKeyframesSequenceMetadata



//     Save_Company(Company_:Company,image: File[]) {
        
//         const postData = new FormData();
//          postData.append("Company_Id", Company_.Company_Id.toString());
//         postData.append("companyname", Company_.companyname);
//         postData.append("Phone1", Company_.Phone1);
//         postData.append("Phone2", Company_.Phone2);
//         postData.append("Mobile", Company_.Mobile);
//         postData.append("Email", Company_.Email);
//         postData.append("Website", Company_.Website);
//         postData.append("Address1", Company_.Address1);
//         postData.append("Address2", Company_.Address2);
//         postData.append("Address3", Company_.Address3);
//         postData.append("Logo", Company_.Logo);

//         if (image != undefined) {
//             for (const img of image) {
//                 postData.append("myFile", img);
//             }
//         }



      
//         return this.http.post(environment.BasePath + 'Company/Save_Company', postData);
//     }




//     Delete_Company(Company_Id) {
//         return this.http.get(environment.BasePath + 'Company/Delete_Company/' + Company_Id);
//     }
//     Get_Company() {
//         return this.http.get(environment.BasePath + 'Company/Get_Company/');
//     }




// }



