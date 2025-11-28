
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
import { User_Details_Service } from '../../../services/User_Details.service';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import * as _moment from 'moment';
import {default as _rollupMoment} from 'moment';
import { Company } from '../../../models/Company';
import { Company_Service } from '../../../services/Company.Service';
import { Application_Settings } from '../../../models/Application_Settings';
import { Country_Service } from 'app/services/Country.service';
import { User_Resignation_Management } from 'app/models/User_Resignation_Management';

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
selector: 'app-User_Resignation_Management',
templateUrl: './User_Resignation_Management.component.html',
styleUrls: ['./User_Resignation_Management.component.css'],
providers:[
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
    ],
    })

export class User_Resignation_ManagementComponent implements OnInit {
   
    Application_Div: boolean = false;

    array: any;
    color = 'primary';
    mode = 'indeterminate';

    issLoading: boolean;

    Login_User: string = "0";
    Menu_Id: number = 181;

    
    Application_Settings_:Application_Settings = new Application_Settings()

    Application_Settings_Data:Application_Settings []
    ImageFile: any;
    File: string;
    file:File;
    companyfile:string;
    Permissions: any;

    Registration_by:number;

    Status_Data: Department_Status[];
    Search_Status: Department_Status = new Department_Status();
    Status_Temp: Department_Status = new Department_Status();
    Department_Status_Dropdown_: Department_Status = new Department_Status();
	Department_Status_Dropdown_Temp: Department_Status = new Department_Status();
	Department_Status_Dropdown_Data: Department_Status[];

    User_Profile_Department_:Department=new Department();
    User_Profile_Department_Temp:Department=new Department();
    User_Profile_Department_Data: Department[];
    Reg_Transfer_Status:boolean=false;
    Users_:User_Details=new User_Details();
    Users_Temp:User_Details=new User_Details();
    Users_Data: User_Details[];
    Document_Process_Users_:User_Details=new User_Details();

    Resigned_User_:User_Details=new User_Details();
    New_asigned_User_:User_Details=new User_Details();

    Backup_User_: User_Details = new User_Details;
    Backup_User_Temp: User_Details = new User_Details;
    Backup_User_Data: User_Details[];
    Backup_User_Data1: User_Details[];
    Backup_User_Data_Filter: User_Details[]
    User_Details_:User_Details= new User_Details();

    User_Resignation_Management_:User_Resignation_Management =new User_Resignation_Management;
    User_Resignation_Management_Data: User_Resignation_Management[];

constructor(public User_Details_Service_:User_Details_Service,public Country_Service_: Country_Service,public Student_Service_: Student_Service,public Company_Service_:Company_Service, private route: ActivatedRoute, private router: Router,public dialogBox: MatDialog) 
{   }
ngOnInit() 
{
    this.Login_User = localStorage.getItem("Login_User");    
    this.Page_Load()   
}
Page_Load()
{debugger
    this.Get_Menu_Status(55,this.Login_User); 
    this.Application_Div=true 
 
    this.Load_Dropdowns();
    this.Get_Student_PageLoadData_Dropdowns();
    this.Get_Student_PageLoadData_Dropdowns();
    
}
Get_Menu_Status(Menu_id, Login_user_id)
{    
this.issLoading = false;
this.Company_Service_.Get_Menu_Status(Menu_id,Login_user_id).subscribe(Rows => {    
    if (Rows[0][0]==undefined)
    {
        if(Menu_id==181)
        {
        localStorage.removeItem('token');
        this.router.navigateByUrl('Home_Page');
        }
    }  
    else
    if (Rows[0][0].View >0) 
    {      
        if(Menu_id==181)
        {
            this.Permissions=Rows[0][0];
            if(this.Permissions==undefined || this.Permissions==null)
                {
                    localStorage.removeItem('token');
                    this.router.navigateByUrl('Home_Page');
                }  
        }
    }
},
Rows => {
    this.issLoading = false;
    const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Error Occured', Type: "2" } });
});
}


// Save_Application_Setitngs()
// {
    
//     this.Application_Settings_.Department_Id=this.User_Profile_Department_.Department_Id;
//     if (this.Application_Settings_.Settings_Value== undefined || this.Application_Settings_.Settings_Value == null  ) {
//         const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Enter Call Status Value', Type: "3" } });
//         return;
//     }

//     this.Application_Settings_.Receipt_Notification_User=this.Users_.User_Details_Id;
//     debugger
//     this.Application_Settings_.Department_Status_Id=this.Search_Status.Department_Status_Id;
//     this.Application_Settings_.Department_Status_Name=this.Search_Status.Department_Status_Name;
//     this.Application_Settings_.Registration_By=this.Registration_by

   
//     if(this.Application_Settings_.Register_Transfer_Status== true){
//         if (
//             this.User_Profile_Department_.Department_Id == undefined ||
//             this.User_Profile_Department_.Department_Id == null ||
//             this.User_Profile_Department_.Department_Id == 0
//         ) {
//             const dialogRef = this.dialogBox.open(DialogBox_Component, {
//                 panelClass: "Dialogbox-Class",
//                 data: { Message: "Select Department", Type: "3" },
//             });
//             return;
//         }
//     }
//     this.issLoading = true;
   
//     this.Company_Service_.Save_Application_Settings(this.Application_Settings_).subscribe(Save_status => {
           
//             this.issLoading=false;
//         if(Number(Save_status[0].Application_Settings_Id_)>0)
//         { 
//             // this.Application_Settings_.Application_Settings_Id=Save_status[0].Application_Settings_Id_
//         const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Saved',Type:"false"}});
//     //    this.Clr_Application_Settings();
    
//     }
     
        
//         this.issLoading=false;
//         },
//         Rows => { 
            
//         this.issLoading=false;
//         const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
 
//     });
// }


Save_User_Resignation_Management()
{
    
   


  
        if (
            this.Resigned_User_ == undefined ||
            this.Resigned_User_ == null ||
            this.Resigned_User_.User_Details_Id == 0
        ) {
            const dialogRef = this.dialogBox.open(DialogBox_Component, {
                panelClass: "Dialogbox-Class",
                data: { Message: "Select Resigned User", Type: "3" },
            });
            return;
        }

        else if (
            this.Backup_User_ == undefined ||
            this.Backup_User_ == null ||
            this.Backup_User_.User_Details_Id == 0
        ) {
            const dialogRef = this.dialogBox.open(DialogBox_Component, {
                panelClass: "Dialogbox-Class",
                data: { Message: "Select New asigned User", Type: "3" },
            });
            return;
        }
   
    this.issLoading = true;

    // this.User_Resignation_Management_.User_Resignation_Management_Id =0;
    this.User_Resignation_Management_.Resigned_User_Id =this.Resigned_User_.User_Details_Id;
    this.User_Resignation_Management_.Resigned_User_Name =this.Resigned_User_.User_Details_Name;
    this.User_Resignation_Management_.New_asigned_User_Id =this.Backup_User_.User_Details_Id;
    this.User_Resignation_Management_.New_asigned_User_Name =this.Backup_User_.User_Details_Name;
    this.User_Resignation_Management_.Created_By  =Number(this.Login_User)
   
    this.Company_Service_.Save_User_Resignation_Management(this.User_Resignation_Management_).subscribe(Save_status => {
           
            this.issLoading=false;
            debugger
        if(Number(Save_status[0].User_Resignation_Management_Id_)>0)
        { 
            // this.Application_Settings_.Application_Settings_Id=Save_status[0].Application_Settings_Id_
        const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Saved',Type:"false"}});
       this.Clr_User_Resignation_Management();
       this.Get_Student_PageLoadData_Dropdowns()
    
    }
     
        
        this.issLoading=false;
        },
        Rows => { 
            
        this.issLoading=false;
        const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
 
    });
}

Get_Application_Settings()
{  
    this.Company_Service_.Get_Application_Settings().subscribe(Rows =>
        {
      
            
            this.Application_Settings_Data =Rows['Settings_Data']

            if(this.Application_Settings_Data[0]!=undefined){
                this.Application_Settings_=this.Application_Settings_Data[0];
            }

            if(this.Application_Settings_Data[0].Registration_By==1){
                this.Registration_by=1
            }
            else
            this.Registration_by=2

            
            for (var i = 0; i < this.User_Profile_Department_Data.length; i++) {
                if (this.Application_Settings_.Department_Id == this.User_Profile_Department_Data[i].Department_Id)
                this.User_Profile_Department_ = this.User_Profile_Department_Data[i];
                }

                for (var i = 0; i < this.Users_Data.length; i++) {
                    if (this.Application_Settings_.Receipt_Notification_User == this.Users_Data[i].User_Details_Id)
                    this.Users_ = this.Users_Data[i];
                    }
                    for (var i = 0; i < this.Status_Data.length; i++) {
                        if (this.Application_Settings_.Department_Status_Id == this.Status_Data[i].Department_Status_Id)
                        this.Search_Status = this.Status_Data[i];
                        }

                //    else{
        //     this.Application_Settings_.Application_Settings_Id=0;
        //    }
            this.issLoading=false;
        },
        Rows => { 
            
        this.issLoading=false;
        const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}})
    })
}


Get_Student_PageLoadData_Dropdowns() {
    this.Student_Service_.Get_Student_PageLoadData_Dropdowns().subscribe(
        (Rows) => {
debugger
           
            this.Users_Data = Rows[27];
            this.Users_Temp.User_Details_Id =0;
            this.Users_Temp.User_Details_Name ="Select";
            this.Users_Data.unshift(Object.assign({},this.Users_Temp));      
            this.Users_ = this.Users_Data[0];

            this.Resigned_User_ = this.Users_Data[0];
            this.New_asigned_User_ = this.Users_Data[0];
           // this.Document_Process_Users_ = this.Users_Data[0];

           this.Status_Data = Rows[25];
           console.log('this.Status_Data : ', this.Status_Data );
           this.Status_Temp.Department_Status_Id = 0;
           
           this.Status_Temp.Department_Status_Name = "All";
         
           this.Status_Data.unshift(Object.assign({},this.Status_Temp));      
           this.Search_Status = this.Status_Data[0];
           console.log('this.Search_Status: ', this.Search_Status);


           this.User_Resignation_Management_Data = Rows[28];

        //    this.Status_Data = Rows[26];
        //         this.Status_Temp.Department_Status_Id = 0;
        //         console.log('Department_Status_Id: ', this.Status_Temp.Department_Status_Id);
        //         this.Status_Temp.Department_Status_Name = "All";
        //         console.log(' this.Status_Temp.Department_Status_Name : ',  this.Status_Temp.Department_Status_Name );
        //         //this.Status_Data.unshift(this.Status_Temp);
        //         this.Status_Data.unshift(Object.assign({}, this.Status_Temp));
        //         this.Search_Status = this.Status_Data[0];
        //         console.log('Search_Status: ', this.Search_Status);
        },
        (Rows) => {
            const dialogRef = this.dialogBox.open(DialogBox_Component, {
                panelClass: "Dialogbox-Class",
                data: { Message: "Error Occured", Type: "2" },
            });
        }
    );
}


// Clr_Application_Settings()
// {
//     // this.Application_Settings_.Application_Settings_Id=0;
//     // this.Application_Settings_.Settings_Value="";
//     this.Application_Settings_.Register_Transfer_Status="";

    
// if(this.User_Profile_Department_Data!=null && this.User_Profile_Department_Data != undefined)
// this.User_Profile_Department_=this.User_Profile_Department_Data[0];



// }





Load_Dropdowns() 
    {
         
    this.User_Details_Service_.Get_Users_Load_Data().subscribe(Rows =>
    {



this.User_Profile_Department_Data=Rows.Profile_Department;

   this.User_Profile_Department_Temp.Department_Id = 0;
   this.User_Profile_Department_Temp.Department_Name = "Select";
   this.User_Profile_Department_Data.unshift(this.User_Profile_Department_Temp);
   this.User_Profile_Department_ = this.User_Profile_Department_Data[0];
   
    this.Get_Application_Settings();


    },
  Rows => { 
 const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}}); });
}



Resigned_User_Change()
{
var user_departmt =0;
user_departmt = this.Resigned_User_.Department_Id;

// if(user_departmt>0)
// {
//     this.Search_Backup_User_Typeahead();
// }
}


Search_Backup_User_Typeahead(event: any)
{     


  this.Backup_User_Data1=[];
        if (
            this.Resigned_User_ == undefined ||
            this.Resigned_User_ == null ||
            this.Resigned_User_.User_Details_Id == 0
        ) {
            const dialogRef = this.dialogBox.open(DialogBox_Component, {
                panelClass: "Dialogbox-Class",
                data: { Message: "Select Resigned User", Type: "3" },
            });
            return;
        }

        else
   {

    this.Backup_User_Data=[];
    var Value = "";
    if (event.target.value == "")
        Value = "";
    else
        Value = event.target.value;
    if (this.Backup_User_Data == undefined || this.Backup_User_Data.length==0)
    {
        this.issLoading = true;
       
        this.User_Details_Service_.Search_Backup_User_Typeahead('',this.Resigned_User_.Department_Id).subscribe(Rows => {
           
    if (Rows != null) 
    {
        this.Backup_User_Data = Rows[0];


debugger
        // this.Backup_User_Data1 = Rows[0];



this.Backup_User_Data1 = [];

for (var i = 0; i < this.Backup_User_Data.length; i++) {
    if (this.Backup_User_Data[i].User_Details_Id !== this.User_Details_.User_Details_Id) {
        this.Backup_User_Data1.push(this.Backup_User_Data[i]);
    }
}


        this.issLoading = false;
        this.Backup_User_Data_Filter=[];

        for (var i=0;i<this.Backup_User_Data.length;i++)
        {
            if(this.Backup_User_Data[i].User_Details_Name.toLowerCase().includes(Value))
                this.Backup_User_Data_Filter.push(this.Backup_User_Data[i])
        }

    }
    },
    Rows => {
     this.issLoading = false;
    });
    } 

    else
    {
       
        this.Backup_User_Data_Filter=[];
        for (var i=0;i<this.Backup_User_Data.length;i++)
        {
            if(this.Backup_User_Data[i].User_Details_Name.toLowerCase().includes(Value))
                this.Backup_User_Data_Filter.push(this.Backup_User_Data[i])
        }
    }
}

}
display_Backup_User(Backup_User_: User_Details)
{     
    if (Backup_User_) { return Backup_User_.User_Details_Name; }
}

Clr_User_Resignation_Management()
{
    this.User_Resignation_Management_.User_Resignation_Management_Id =0;
    this.User_Resignation_Management_.Resigned_User_Id =0;
    this.User_Resignation_Management_.Resigned_User_Name ='';
    this.User_Resignation_Management_.New_asigned_User_Id =0;
    this.User_Resignation_Management_.New_asigned_User_Name ='';
    this.User_Resignation_Management_.Created_By  =0;
    this.Resigned_User_=null;
    this.Backup_User_ =null;
}

}

