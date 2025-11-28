
import { Component, OnInit,Input,Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of as observableOf, merge } from 'rxjs';
import { Student_Service } from '../../../services/Student.service';
import { DialogBox_Component } from '../DialogBox/DialogBox.component';
import { Student } from '../../../models/Student';
import { Branch } from '../../../models/Branch';
import { User_Details } from '../../../models/User_Details';
import { Department } from '../../../models/Department';
import { Department_Status } from '../../../models/Department_Status';
import { Gender } from '../../../models/Gender';
import { ROUTES,Get_Page_Permission } from '../../../components/sidebar/sidebar.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA,MatDialogConfig} from '@angular/material';
import {FormControl} from '@angular/forms';
import {MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import * as _moment from 'moment';
import {default as _rollupMoment} from 'moment';
import { Company } from '../../../models/Company';
import { Company_Service } from '../../../services/Company.Service';

// import { Company_Service } from '../../../services/Company.service';

const moment = _rollupMoment || _moment;
export const MY_FORMATS = {
parse: {
dateInput: 'DD/MM/YYYY',
},
display: {
dateInput: 'DD/MM/YYYY',monthYearLabel: 'MMM YYYY',dateA11yLabel: 'DD/MM/YYYY',monthYearA11yLabel: 'MMMM YYYY',
},
};

@Component({
selector: 'app-Company',
templateUrl: './Company.component.html',
styleUrls: ['./Company.component.css'],
providers:[
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
    ],
    })

export class CompanyComponent implements OnInit {
   
    Company_Div: boolean = false;

    array: any;
    color = 'primary';
    mode = 'indeterminate';

    issLoading: boolean;

    Login_User: string = "0";
    Menu_Id: number = 55;

    
    Company_:Company= new Company();

    company_data_temp:Company []
    ImageFile: any;
    File: string;
    file:File;
    companyfile:string;
  Permissions: any;

 
constructor(public Company_Service_:Company_Service, private route: ActivatedRoute, private router: Router,public dialogBox: MatDialog) 
{   }
ngOnInit() 
{
  
    this.Login_User = localStorage.getItem("Login_User");
    // this.array = Get_Page_Permission(this.Menu_Id);
    
    // if (this.array == undefined || this.array == null)
    // {
    //     localStorage.removeItem('token');
    //     this.router.navigateByUrl('/auth/login');
    // }
    // else 
    {
        this.Page_Load()
        // this.Company_.Company_Id=0
    }
}
Page_Load()
{
    this.Get_Menu_Status(55,this.Login_User); 

 
    this.Company_Div=true 
    this.Get_Company();

 
}

Get_Menu_Status(Menu_id, Login_user_id)
{
    
this.issLoading = false;
this.Company_Service_.Get_Menu_Status(Menu_id,Login_user_id).subscribe(Rows => {            

    
    if (Rows[0][0]==undefined)
    {
        if(Menu_id==55)
        {
        localStorage.removeItem('token');
        this.router.navigateByUrl('Home_Page');
        }
    }  
    else
    if (Rows[0][0].View >0) 
    {      
        if(Menu_id==55)
        {
            this.Permissions=Rows[0][0];
            if(this.Permissions==undefined || this.Permissions==null)
                {
                    localStorage.removeItem('token');
                    this.router.navigateByUrl('Home_Page');
                }               
                //this.Company_.Company_Id=0
        }
    }
},
Rows => {
    this.issLoading = false;
    const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Error Occured', Type: "2" } });
});
}


// File_Change(event: Event)
// {
//     ;
//     const file = (event.target as HTMLInputElement).files;
//     this.ImageFile = file;
//     this.Company_.Logo =this.ImageFile.Name;
// }
File_Change(event)
{
    ;
    this.file = event.target.files[0]; 
    this.ImageFile = this.file;
    this.companyfile=this.file.name;
    this.Company_.Logo =this.ImageFile.Name;
    
}

Save_Company()
{
    if (this.Company_.companyname== undefined || this.Company_.companyname == null || this.Company_.companyname == "" ) {
        const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Enter Name', Type: "3" } });
        return;
    }

    // if (this.Company_.Phone1== undefined || this.Company_.Phone1 == null || this.Company_.Phone1 == "" ) {
    //     const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Enter Phone1', Type: "3" } });
    //     return;
    // }

    if (this.Company_.Phone2== undefined || this.Company_.Phone2 == null || this.Company_.Phone2 == "" ) {
        const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Enter Phone2', Type: "3" } });
        return;
    }

    // if (this.Company_.Mobile== undefined || this.Company_.Mobile == null || this.Company_.Mobile == "" ) {
    //     const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Enter Mobile', Type: "3" } });
    //     return;
    // }

    if (this.Company_.Email== undefined || this.Company_.Email == null || this.Company_.Email == "" ) {
        const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Enter Email', Type: "3" } });
        return;
    }

    if (this.Company_.Website== undefined || this.Company_.Website == null || this.Company_.Website == "" ) {
        const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Enter Website', Type: "3" } });
        return;
    }

    if (this.Company_.Address1== undefined || this.Company_.Address1 == null || this.Company_.Address1 == "" ) {
        const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Enter Address1', Type: "3" } });
        return;
    }

    if (this.Company_.Address2== undefined || this.Company_.Address2 == null || this.Company_.Address2 == "" ) {
        const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Enter Address2', Type: "3" } });
        return;
    }

    if (this.Company_.Address3== undefined || this.Company_.Address3 == null || this.Company_.Address3 == "" ) {
        const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Enter Address3', Type: "3" } });
        return;
    }

    if(this.Company_.Logo == null || this.Company_.Logo == undefined){
        this.Company_.Logo = "";
        this.ImageFile = [];
    }

   
    this.issLoading = true;
    this.Company_Service_.Save_Company(this.Company_,this.ImageFile).subscribe(Save_status => {
            
            this.issLoading=false;
        if(Number(Save_status[0][0].Company_Id_)>0)
        { 
            this.Company_.Company_Id=Save_status[0][0].Company_Id_
            this.Company_.Logo=''
        const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Saved',Type:"false"}});
        }
     
        
        this.issLoading=false;
        },
        Rows => { 
            
        this.issLoading=false;
        const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
 
    });
}

Get_Company()
{
    

    // this.issLoading=true;
    
    this.Company_Service_.Get_Company().subscribe(Rows =>
        {
            
            // this.Company_=Rows[0];
            // this.Company_=Rows[0].Company_Data;
            
            this.company_data_temp =Rows['Company_Data']

            if(this.company_data_temp[0]!=undefined){
                this.Company_=this.company_data_temp[0];
                this.Company_.Logo='';
            }
           else{
            this.Company_.Company_Id=0;
           }
            // this.Company_.companyname=this.company_data_temp[0].companyname;
            // this.Company_.Phone1=this.company_data_temp[0].Phone1;
            // this.Company_.Phone2=this.company_data_temp[0].Phone2;
            // this.Company_.Mobile=this.company_data_temp[0].Mobile;
            // this.Company_.Email=this.company_data_temp[0].Email;
            // this.Company_.Website=this.company_data_temp[0].Website;
            // this.Company_.Address1=this.company_data_temp[0].Address1;
            // this.Company_.Address2=this.company_data_temp[0].Address2;
            // this.Company_.Address3=this.company_data_temp[0].Address3;
            // this.Company_.Logo=this.company_data_temp[0].Logo;
            



            this.issLoading=false;
        },
        Rows => { 
            
        this.issLoading=false;
        const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}})
    })
}


}











// Get_Menu_Status()
// {
// this.issLoading = true;
// this.Company_Service_.Get_Menu_Status(54,this.Login_User).subscribe(Rows => {            
//     if (Rows[0][0].Menu_Status == 0) {
//         const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Page Not Available', Type: "2" } });
//         this.router.navigateByUrl('Home_Page');
//     }
// },
// Rows => {
//     this.issLoading = false;
//     const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Error Occured', Type: "2" } });
// });
// }


































// import { Component, OnInit,Input,Injectable } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { Observable, of as observableOf, merge } from 'rxjs';
// import { Student_Service } from '../../../services/Student.service';
// import { DialogBox_Component } from '../DialogBox/DialogBox.component';
// import { Student } from '../../../models/Student';
// import { Branch } from '../../../models/Branch';
// import { User_Details } from '../../../models/User_Details';
// import { Department } from '../../../models/Department';
// import { Department_Status } from '../../../models/Department_Status';
// import { Gender } from '../../../models/Gender';
// import { ROUTES,Get_Page_Permission } from '../../../components/sidebar/sidebar.component';
// import {MatDialog, MatDialogRef, MAT_DIALOG_DATA,MatDialogConfig} from '@angular/material';
// import {FormControl} from '@angular/forms';
// import {MomentDateAdapter} from '@angular/material-moment-adapter';
// import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
// import * as _moment from 'moment';
// import {default as _rollupMoment} from 'moment';
// import { Company } from 'app/models/Company';
// import { Company_Service } from 'app/services/Company.Service';

// // import { Company_Service } from '../../../services/Company.service';

// const moment = _rollupMoment || _moment;
// export const MY_FORMATS = {
// parse: {
// dateInput: 'DD/MM/YYYY',
// },
// display: {
// dateInput: 'DD/MM/YYYY',monthYearLabel: 'MMM YYYY',dateA11yLabel: 'DD/MM/YYYY',monthYearA11yLabel: 'MMMM YYYY',
// },
// };

// @Component({
// selector: 'app-Company',
// templateUrl: './Company.component.html',
// styleUrls: ['./Company.component.css'],
// providers:[
//     {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
//     {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
//     ],
//     })

// export class CompanyComponent implements OnInit {
   
//     Company_Div: boolean = false;

//     array: any;
//     color = 'primary';
//     mode = 'indeterminate';

//     issLoading: boolean;

  
//     Login_User: string = "0";
//     Menu_Id: number = 54;

  
//     Company_:Company= new Company();
//     company_data_temp:Company []

//     companyname: string;
//     Phone1:string;
//     Phone2:string;
//     Mobile:string;
//     Email:string;
//     Website:string;
//     Address1:string;
//     Address2:string;
//     Address3:string;
//     Logo:string;

//     ImageFile: any;
//     File: string;

 
// constructor(public Company_Service_:Company_Service, private route: ActivatedRoute, private router: Router,public dialogBox: MatDialog) 
// {   }
// ngOnInit() 
// {
  
//     this.Login_User = localStorage.getItem("Login_User");
//     this.array = Get_Page_Permission(this.Menu_Id);
    
//     if (this.array == undefined || this.array == null)
//     {
//         localStorage.removeItem('token');
//         this.router.navigateByUrl('/auth/login');
//     }
//     else 
//     {
//         this.Page_Load()
     
//     }
// }
// Page_Load()
// {
 
//     this.Company_Div=true 
//     this.Get_Company();

 
// }

// Get_Menu_Status()
// {
// this.issLoading = true;
// this.Company_Service_.Get_Menu_Status(54,this.Login_User).subscribe(Rows => {            
//     if (Rows[0][0].Menu_Status == 0) {
//         const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Page Not Available', Type: "2" } });
//         this.router.navigateByUrl('Home_Page');
//     }
// },
// Rows => {
//     this.issLoading = false;
//     const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Error Occured', Type: "2" } });
// });
// }

// File_Change(event: Event)
// {
    
// const file = (event.target as HTMLInputElement).files;
// this.ImageFile = file;
// }

// Save_Company()
// {
    
//     if (this.companyname== undefined || this.companyname == null || this.companyname == "" ) {
//         const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Enter Name', Type: "3" } });
//         return;
//     }

//     if (this.Phone1== undefined || this.Phone1 == null || this.Phone1 == "" ) {
//         const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Enter Phone1', Type: "3" } });
//         return;
//     }

//     if (this.Phone2== undefined || this.Phone2 == null || this.Phone2 == "" ) {
//         const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Enter Phone2', Type: "3" } });
//         return;
//     }

//     if (this.Mobile== undefined || this.Mobile == null || this.Mobile == "" ) {
//         const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Enter Mobile', Type: "3" } });
//         return;
//     }

//     if (this.Email== undefined || this.Email == null || this.Email == "" ) {
//         const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Enter Email', Type: "3" } });
//         return;
//     }

//     if (this.Website== undefined || this.Website == null || this.Website == "" ) {
//         const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Enter Website', Type: "3" } });
//         return;
//     }

//     if (this.Address1== undefined || this.Address1 == null || this.Address1 == "" ) {
//         const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Enter Address1', Type: "3" } });
//         return;
//     }

//     if (this.Address2== undefined || this.Address2 == null || this.Address2 == "" ) {
//         const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Enter Address2', Type: "3" } });
//         return;
//     }

//     if (this.Address3== undefined || this.Address3 == null || this.Address3 == "" ) {
//         const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Enter Address3', Type: "3" } });
//         return;
//     }

//     if(this.Logo == null || this.Logo == undefined){
//         this.Logo = "";
//         this.ImageFile = [];
//     }

//     this.Company_.companyname=this.companyname;
//     this.Company_.Phone1=this.Phone1;
//     this.Company_.Phone2=this.Phone2;
//     this.Company_.Mobile=this.Mobile;
//     this.Company_.Email=this.Email;
//     this.Company_.Website=this.Website;
//     this.Company_.Address1=this.Address1;
//     this.Company_.Address2=this.Address2;
//     this.Company_.Address3=this.Address3;
//      this.Company_.Logo=this.Logo;



//     this.issLoading = true;
 
//     this.Company_Service_.Save_Company(this.Company_,this.ImageFile).subscribe(Save_status => {
            
//             this.issLoading=false;
//         if(Number(Save_status[0].Company_Id_)>0)
//         { 
//         const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Saved',Type:"false"}});
           
   
//         }
     
        
//         this.issLoading=false;
//         },
//         Rows => { 
            
//         this.issLoading=false;
//         const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
 
//     });
// }

// Get_Company()
// {
    

//     // this.issLoading=true;
    
//     this.Company_Service_.Get_Company().subscribe(Rows =>
//         {
//             // this.Company_=Rows[0];
//             // this.Company_=Rows[0].Company_Data;
            
//             this.company_data_temp =Rows['Company_Data']
//             this.companyname=this.company_data_temp[0].companyname;
//             this.Phone1=this.company_data_temp[0].Phone1;
//             this.Phone2=this.company_data_temp[0].Phone2;
//             this.Mobile=this.company_data_temp[0].Mobile;
//             this.Email=this.company_data_temp[0].Email;
//             this.Website=this.company_data_temp[0].Website;
//             this.Address1=this.company_data_temp[0].Address1;
//             this.Address2=this.company_data_temp[0].Address2;
//             this.Address3=this.company_data_temp[0].Address3;
//             this.Logo=this.company_data_temp[0].Logo;
            



//             this.issLoading=false;
//         },
//         Rows => { 
            
//         this.issLoading=false;
//         const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}})
//     })
// }


// }

