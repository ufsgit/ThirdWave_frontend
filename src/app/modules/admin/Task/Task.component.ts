import { Component, OnInit,Input,Injectable, ErrorHandler } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of as observableOf, merge, throwError } from 'rxjs';
import { Task_Service } from '../../../services/Task.service';
import { DialogBox_Component } from '../DialogBox/DialogBox.component';
// import { Task} from '../../../models/Task';
import { Task} from '../../../models/Task';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA,MatDialogConfig} from '@angular/material';

import {MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import * as _moment from 'moment';
import {default as _rollupMoment} from 'moment';
import { User_Details } from '../../../models/User_Details';
import { CATCH_ERROR_VAR, THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { getParseErrors, syntaxError } from '@angular/compiler';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { ROUTES,Get_Page_Permission } from '../../../components/sidebar/sidebar.component'
//import { ConsoleReporter } from 'jasmine';
import { error } from '@angular/compiler/src/util';
import { User_Type } from 'app/models/User_Type';

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
selector: 'app-Task',
templateUrl: './Task.component.html',
styleUrls: ['./Task.component.css'],
providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
    ],
})
export class TaskComponent implements OnInit {
Task_Data:Task[]
Task_:Task= new Task();
Task_Name_Search:string;
Task_Edit_View:boolean;
Task_Data_Search: Task[]

Entry_View:boolean=false;
EditIndex: number;
Menu_Id:number=16;
color = 'primary';
mode = 'indeterminate';
value = 50;Total_Entries:Number;
issLoading: boolean;
Task_Edit:boolean;
Task_Save:boolean;
Task_Delete:boolean;
array:any;
myInnerHeight: number;
myTotalHeight:number;
Login_User:string="0";
Permissions: any;

Search_FromDate: Date = new Date();
    Search_ToDate: Date = new Date();
    Look_In_Date: Boolean = true;
    year: any;
    month: any;
    day: any;
    date: any;


    User_Details_:User_Details = new User_Details;
    User_Details_Temp:User_Details = new User_Details;
    User_Details_Data: User_Details[]

    Summary_Sub:boolean=true;
    Searchview:boolean=true;
  usersdropview:boolean=true;
    save_view:boolean=true;
    Login_User_Type:number;
    Source_list:number;
constructor(public Task_Service_:Task_Service, private route: ActivatedRoute, private router: Router,public dialogBox: MatDialog) { }
ngOnInit() 
{
    this.Login_User=localStorage.getItem(("Login_User"));
    this.Login_User_Type=Number(localStorage.getItem(("User_Type")));

    // this.array=Get_Page_Permission(this.Menu_Id);
    // if(this.array==undefined || this.array==null)
    // {
    // localStorage.removeItem('token');
    // this.router.navigateByUrl('/auth/login');
    // }
    // else 
    {
    // this.Task_Edit= this.array.Edit;
    // this.Task_Save= this.array.Save;
    // this.Task_Delete= this.array.Delete;
this.Page_Load()
}}
Page_Load()
{
    this.Get_Menu_Status(71,this.Login_User); 

    this.myInnerHeight = (window.innerHeight);
    this.myInnerHeight = this.myInnerHeight - 250;
this.Clr_Task();
this.Search_Task();
this.Search_Task_front_view();
this.Load_User_Details();
this.Clr_search();
// this.Searchview=false;
// this.save_view=true;
this.Entry_View=true;
this.usersdropview=false;
this.myInnerHeight = (window.innerHeight);
this.myTotalHeight=this.myInnerHeight - 180;
this.myTotalHeight=this.myTotalHeight-40;
this.myInnerHeight = this.myInnerHeight - 250;

this.Search_FromDate = this.New_Date(this.Search_FromDate);
    this.Search_ToDate = this.New_Date(this.Search_ToDate);
  //  console.log(this.Task_Name_Search)
}

New_Date(Date_)
{
    this.date = Date_;
    this.year = this.date.getFullYear();
    this.month = this.date.getMonth() + 1;
    if (this.month < 10)
    {
        this.month = "0" + this.month;
    }
    this.day = this.date.getDate().toString();
    if (Number.parseInt(this.day) < 10)
    {
        this.day = "0" + this.day;
    }
    this.date = this.year + "-" + this.month + "-" + this.day;
    return this.date;
}


Get_Menu_Status(Menu_id, Login_user_id)
{
    
this.issLoading = false;
this.Task_Service_.Get_Menu_Status(Menu_id,Login_user_id).subscribe(Rows => {            
    this.array=Rows[0][0]
    
    if (Rows[0][0]==undefined)
    {
        if(Menu_id==71)
        {
        localStorage.removeItem('token');
        this.router.navigateByUrl('Home_Page');
        }
    }  
    else
    if (Rows[0][0].View >0) 
    {
        
        
        if(Menu_id==71)
        {
            
           

            this.Permissions=Rows[0][0];
            if(this.Permissions==undefined || this.Permissions==null)
                {
                    localStorage.removeItem('token');
                    this.router.navigateByUrl('Home_Page');
                }
               
                this.Task_Edit= this.array.Edit;
                this.Task_Save= this.array.Save;
                this.Task_Delete= this.array.Delete;
        }

    }
},
Rows => {
    this.issLoading = false;
    const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Error Occured', Type: "2" } });
});
}

Create_New_Task() 
{
this.Entry_View = true;
this.Clr_Task();
}
Close_Click()
{
this.Entry_View = false;
}
Close_Click_Task()
{
    // this.Search_Task_front_view();
  this.Entry_View=true;

  this.Task_.Task_Id=0;
this.Task_.Task_Details="";
// this.Task_Edit_View=true;
    //this.Clr_search();
}
trackByFn(index, item) 
{
return index;
}

Clr_Task()
{
this.Task_.Task_Id=0;
this.Task_.Task_Details="";
this.Task_Edit_View=true;
// Task_.Task_Details=
// this.Task_.Status_Order=0;
// this.Task_.Editable=false;
// this.Task_.Color="";
this.Source_list=1
}
 Clr_search()
 {

this.Task_.Task_Details=""
this.Search_FromDate=new Date();
this.Search_FromDate=this.New_Date( this.Search_FromDate);
this.Search_ToDate=new Date();
this.Search_ToDate=this.New_Date( this.Search_ToDate);
if(this.User_Details_Data!=null && this.User_Details_Data != undefined)
this.User_Details_=this.User_Details_Data[0];

 }

Load_User_Details()
{
    
    this.issLoading = true;
    this.Task_Service_.Load_User_Details().subscribe(Rows => {
        
        if (Rows != null) {
            this.User_Details_Data = Rows[0];
            this.User_Details_Temp.User_Details_Id = 0;
            this.User_Details_Temp.User_Details_Name = "Select";
            this.User_Details_Data.unshift(this.User_Details_Temp);
            
            this.User_Details_ = this.User_Details_Data[0];
            this.issLoading = false;
        }
    },
        Rows => {
        
            this.issLoading = false;
        });
}

show_Loader()
{

}
hide_Loader()
{

}
Search_front_click()
{

    this.Entry_View=false; 
    this.Searchview=false;
    if(this.Login_User_Type==1)


   this.usersdropview=true;

else

    this.usersdropview=false;
}
Search_Task()
{
   this.Searchview=true;

    this.Entry_View=false;
    var look_In_Date_Value=0,Usersearch=0,SearchName='';
    if (this.Look_In_Date == true )
    look_In_Date_Value = 1;  

if (this.Task_Name_Search=='')
SearchName=undefined;
else
SearchName=this.Task_Name_Search;

// if(this.Login_User_Type==1)
// {
//     Usersearch=0
// }
//    else
//   Usersearch=Number(this.Login_User);



  if(this.Login_User_Type==1)
  {
      if (this.User_Details_ != undefined && this.User_Details_!=null)
      if (this.User_Details_.User_Details_Id != undefined && this.User_Details_.User_Details_Id != null)
      Usersearch = this.User_Details_.User_Details_Id;
  }
     else
    Usersearch=Number(this.Login_User);

// if(this.Login_User_Type==1)


//    this.usersdropview=true;

// else

//     this.usersdropview=false;


    this.issLoading=true;
    
this.Task_Service_.Search_Task(SearchName,moment(this.Search_FromDate).format('YYYY-MM-DD'),
moment(this.Search_ToDate).format('YYYY-MM-DD'),look_In_Date_Value,Usersearch).subscribe(Rows => {
    
this.Task_Data=Rows[0];
this.Total_Entries=this.Task_Data.length;

if(this.Task_Data.length==0)
{
const dialogRef = this.dialogBox.open
( DialogBox_Component, {panelClass:'Dialogbox-Class'
,data:{Message:'No Details Found',Type:"3"}});
}
this.issLoading=false;
},
Rows => { 
    this.issLoading=false;
 const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}}); });

}

Search_Task_front_view()
{
    // this.Searchview=true;
    //this.Entry_View=false;
    var look_In_Date_Value=1,By_User_Id,Usersearch=0;
    if (this.Look_In_Date == true )
    look_In_Date_Value = 1;


    if(this.Login_User_Type==1)
{
    if (this.User_Details_ != undefined && this.User_Details_!=null)
    if (this.User_Details_.User_Details_Id != undefined && this.User_Details_.User_Details_Id != null)
    Usersearch = this.User_Details_.User_Details_Id;
}
   else
  Usersearch=Number(this.Login_User);

    this.issLoading=true;
    
this.Task_Service_.Search_Task_front_view(Usersearch).subscribe(Rows => {
    
this.Task_Data=Rows[0];
this.Total_Entries=this.Task_Data.length;

if(this.Task_Data.length==0)
{
const dialogRef = this.dialogBox.open
( DialogBox_Component, {panelClass:'Dialogbox-Class'
,data:{Message:'No Details Found',Type:"3"}});
}
this.issLoading=false;
},
Rows => { 
    this.issLoading=false;
 const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}}); });
 
}
Delete_Task(Task_Id_,index)
{
const dialogRef = this.dialogBox.open
( DialogBox_Component, {panelClass:'Dialogbox-Class'
,data:{Message:'Do you want to delete ?',Type:"true",Heading:'Confirm'}});
dialogRef.afterClosed().subscribe(result =>
{
if(result=='Yes')
{
    this.issLoading=true;
this.Task_Service_.Delete_Task(Task_Id_).subscribe(Delete_status => {
    
if(Delete_status[0].Task_Id_==true){
this.Task_Data.splice(this.EditIndex, 1);
const dialogRef = this.dialogBox.open
( DialogBox_Component, {panelClass:'Dialogbox-Class'
,data:{Message:'Deleted',Type:"false"}});

}
else
{
this.Task_Data.splice(index, 1);
const dialogRef = this.dialogBox.open
( DialogBox_Component, {panelClass:'Dialogbox-Class'
,data:{Message:'Deleted',Type:"false"}});
}
this.issLoading=false;
},
Rows => { this.issLoading=false;
 const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}}); });

}
});
}
Save_Task()
{

if(this.Task_.Task_Details==undefined || this.Task_.Task_Details==null || this.Task_.Task_Details=="")
{
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Enter Task Details',Type:"3"}});   
}
else{
// document.getElementById("Save_Button").hidden=true;
this.issLoading=true;

this.Task_.By_User_Id=Number(this.Login_User);
this.Task_Service_.Save_Task(this.Task_).subscribe(Save_status => {
    
    this.issLoading=false;
Save_status=Save_status[0];
if(Save_status!=undefined)
{
if (Number(Save_status[0].Task_Id_) > 0) 
{
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Saved',Type:"false"}});
// document.getElementById("Save_Button").hidden=false;

if(this.Source_list==1)
{
     this.Search_Task_front_view();
    this.Close_Click_Task();
    
   this.Task_Edit_View=true;
    // this.save_view=true;
    // this.Searchview=false;
}
else
{
     this.Search_Task()
    this.Clr_Task();
    this.Search_Task_front_view();
    // this.Searchview=true;
    // this.save_view=false;
}

// 



// this.Searchview=false;
// this.save_view=true;

// this.Search_Task_front_view();
}
}
else{
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
document.getElementById("Save_Button").hidden=false;
}
this.issLoading=false;
},
Rows => { 
    this.issLoading=false;
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
document.getElementById("Save_Button").hidden=false;
});

}
}
Edit_Task(Task_e:Task,index,Choice)
{

this.Source_list=Choice;
if (Choice==2)
    this.Task_Edit_View=false;
// this.Close_Click_Task();
this.Entry_View=true;
this.Task_=Task_e;
this.Task_ = Object.assign({}, Task_e);
}
}
