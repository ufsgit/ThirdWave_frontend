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
import { Fees } from 'app/models/Fees';
import { Fees_Receipt } from 'app/models/Fees_Receipt';

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
selector: 'app-Counselor_Fees_Receipt_Report',
templateUrl: './Counselor_Fees_Receipt_Report.component.html',
styleUrls: ['./Counselor_Fees_Receipt_Report.component.css'],
providers: [
{provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
{provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
],
})

export class Counselor_Fees_Receipt_ReportComponent implements OnInit {
    Status_Search: Department_Status = new Department_Status();
    User_Search: User_Details = new User_Details();
    Search_Name = "";
    Department_Search: Department = new Department()
    Search_Branch: Branch = new Branch();
    Search_FromDate: Date = new Date();
    Search_ToDate: Date = new Date();
    Look_In_Date: Boolean = true;
    More_Search_Options: boolean = true;

    Department_Data: Department[]
    Users_Data: User_Details[]
    Branch_Data: Branch[]
    Status_Data: Department_Status[]
    Gender_Data: Gender[]
    Branch_Temp1: Branch = new Branch();
    Users_Temp: User_Details = new User_Details();
    Department_Temp: Department = new Department();
    Status_Temp: Department_Status = new Department_Status();
    missedfollowup_count: number = 1;
    followup_count: number = 1;

    Fees_Temp:Fees=new Fees();
    Fees_Data:Fees[]
    Fees_Name_Search:Fees=new Fees();
    Fees_Receipt_Temp:Fees_Receipt=new Fees_Receipt();
    Fees_Receipt_Data:Fees_Receipt[]
    Fees_Description_Search:Fees_Receipt=new Fees_Receipt()
    Fees_Amount_Search:Fees_Receipt=new Fees_Receipt();

    Lead_Data: Student[]
    Student_Data_Search: Student[]
    Fees_Receipt_Search:Fees_Receipt[]
    Lead_: Student = new Student();
    Search_Div: boolean = false;
    array: any;
    color = 'primary';
    mode = 'indeterminate';
    value = 50;
myInnerHeight: number;
    issLoading: boolean;

    Black: boolean = false;
    Red: boolean = false;
    pagePointer: number = 0;
    pageindex2: number = 0;
    pageindex: number = 0;
    Total_Rows: number = 0;
    isLoading = false;
    Search_By_: any;
    Registered_By_: any;
    year: any;
    month: any;
    day: any;
    date: any;
    Login_User: string = "0";
    Menu_Id: number = 33;

    RowCount: number = 0;
    RowCount2: number = 0;
    nextflag: number = -1;
    Page_Length_: number = 10;
    firstnum: number = 0;
    lastnum: number = 1;
    shownext: boolean = false;
    showprev: boolean = false;

    Black_Start: number = 1;
    Black_Stop: number = 0;
    Red_Start: number = 1;
    Red_Stop: number = 0;
    points25: boolean = false;
    Edit_Page_Permission: any;
    RowNo:number
    tp:number

    Export_Permission:any
    Export_View:boolean=false
    
    
 
constructor(public Student_Service_:Student_Service, private route: ActivatedRoute, private router: Router,public dialogBox: MatDialog) 
{   }
ngOnInit() 
{
  
    this.Login_User = localStorage.getItem("Login_User");
    this.array = Get_Page_Permission(this.Menu_Id);
    this.Export_Permission= Get_Page_Permission(38);
    if (this.array == undefined || this.array == null)
    {
        localStorage.removeItem('token');
        this.router.navigateByUrl('/auth/login');
    }
    else 
    {
        this.Page_Load()
        if (this.Export_Permission != undefined && this.Export_Permission != null)
        this.Export_View=this.Export_Permission.View
    }
}
Page_Load()
{
    this.myInnerHeight = (window.innerHeight);
    this.myInnerHeight = this.myInnerHeight - 200;
    
    this.Black_Stop = this.Page_Length_;
    this.Red_Stop = this.Page_Length_;
   this.Search_Fees_Receipt_Report();
    this.Search_By_=1;
    this.Registered_By_ = 1;
    this.Get_Lead_Load_Data();
    this.Search_FromDate = this.New_Date(this.Search_FromDate);
    this.Search_ToDate = this.New_Date(this.Search_ToDate);
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
trackByFn(index, item) 
{
return index;
}
Edit_Lead(Lead_Id, i) {
        localStorage.setItem('Lead_Id', Lead_Id);

        this.Edit_Page_Permission = Get_Page_Permission(1);
        if (this.Edit_Page_Permission == undefined) {
            const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'No permission to view', Type: "2" } });
        }
        else if (this.Edit_Page_Permission.View == true)
            this.router.navigateByUrl('/Leads');
        else {
            const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'No permission to view', Type: "2" } });
        }

    }
Search_Lead_button() 
{
    this.Black_Start =1;
    this.Black_Stop = this.Page_Length_;
    this.Red_Start = 1;
    this.Total_Rows=0;
    this.Red_Stop = this.Page_Length_;
    this.Search_Fees_Receipt_Report();
}
Search_More_Options()
{
    if (this.More_Search_Options == true)
    this.More_Search_Options = false;
    else
    this.More_Search_Options = true;
}
Export()
{
        this.Student_Service_.exportExcel(this.Fees_Receipt_Search,'Fees_Receipt')

}
Search_Fees_Receipt_Report(){
    var value = 1, dept_id=0,User_Id=0,search_name_='0',look_In_Date_Value=0,branch_id=0,Fees_Id=0;
    if(this.Search_By_!=undefined && this.Search_By_!=null)
    if (this.Search_By_ != undefined && this.Search_By_ != null && this.Search_By_ != '')
    value=this.Search_By_;

    if (this.Look_In_Date == true )
    look_In_Date_Value = 1;

    if (this.Search_Name != undefined && this.Search_Name != null && this.Search_Name != '')
    search_name_ = this.Search_Name;

    if (this.User_Search != undefined && this.User_Search!=null)
    if (this.User_Search.User_Details_Id != undefined && this.User_Search.User_Details_Id != null)
    User_Id = this.User_Search.User_Details_Id;

    if (this.Department_Search != undefined && this.Department_Search != null)
    if (this.Department_Search.Department_Id != undefined && this.Department_Search.Department_Id != null)
    dept_id = this.Department_Search.Department_Id;

    if (this.Search_Branch != undefined && this.Search_Branch != null)
    if (this.Search_Branch.Branch_Id != undefined && this.Search_Branch.Branch_Id != null)
    branch_id = this.Search_Branch.Branch_Id;

    if (this.Fees_Name_Search != undefined && this.Fees_Name_Search != null)
    if (this.Fees_Name_Search.Fees_Id != undefined && this.Fees_Name_Search.Fees_Id != null)
    Fees_Id = this.Fees_Name_Search.Fees_Id;



    this.issLoading = true;
    
    this.Student_Service_.Search_Counselor_Fees_Receipt_Report(moment(this.Search_FromDate).format('YYYY-MM-DD'), moment(this.Search_ToDate).format('YYYY-MM-DD'), 
    value, search_name_, dept_id,branch_id, User_Id,   look_In_Date_Value, this.Black_Start,
     this.Black_Stop, this.Login_User, this.Red_Start, this.Red_Stop,Fees_Id)
.subscribe(Rows => 
{
    
   // log(Rows)
    this.Fees_Receipt_Search = Rows.returnvalue.Leads;

    
    this.missedfollowup_count =0;
    this.followup_count=0;

    for (var i = 0; i < this.Fees_Receipt_Search.length; i++) {
    this.Fees_Receipt_Search[i].RowNo =i+1 + this.Total_Rows;
    if (this.Fees_Receipt_Search[i].tp == 1)
    this.followup_count = this.followup_count + 1;
    if (this.Fees_Receipt_Search[i].tp == 2)

    this.missedfollowup_count = this.missedfollowup_count + 1;
}

if ( this.Fees_Receipt_Search.length>0)
this.Total_Rows= this.Total_Rows+this.Fees_Receipt_Search.length;
this.issLoading = false;
if(this.Fees_Receipt_Search.length==0)
{
    const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'No Details Found',Type:"3"}});
}
},
Rows => 
{   
    const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
    this.issLoading = false;
});
}
Get_Lead_Load_Data()
{
this.issLoading = true;
this.Student_Service_.Get_Lead_Load_Data().subscribe(Rows => {
   
    if (Rows != undefined)
    {
        
        this.issLoading = false;
        this.Department_Data = Rows.returnvalue.Department;
        this.Users_Data = Rows.returnvalue.Users;
        this.Branch_Data = Rows.returnvalue.Branch;
        this.Status_Data = Rows.returnvalue.Department_Status;
        this.Fees_Data = Rows.returnvalue.Fees;
        
        this.Department_Temp.Department_Id = 0;
        this.Department_Temp.Department_Name = "All";
        this.Department_Data.unshift(Object.assign({}, this.Department_Temp));
        this.Department_Search = this.Department_Data[0];

        this.Users_Temp.User_Details_Id = 0;
        this.Users_Temp.User_Details_Name = "All";
        this.Users_Data.unshift(Object.assign({}, this.Users_Temp));
        this.User_Search = this.Users_Data[0];
        this.Branch_Temp1.Branch_Id = 0;

        this.Branch_Temp1.Branch_Name = "All";
        this.Branch_Data.unshift(this.Branch_Temp1);
        this.Search_Branch = this.Branch_Data[0];

        this.Status_Temp.Department_Status_Id = 0;
        this.Status_Temp.Department_Status_Name = "All";
        this.Status_Data.unshift(Object.assign({}, this.Status_Temp));
        this.Status_Search = this.Status_Data[0];

        this.Fees_Temp.Fees_Id=0; 
        this.Fees_Temp.Fees_Name="All";
        this.Fees_Data.unshift(Object.assign({}, this.Fees_Temp));
        this.Fees_Name_Search = this.Fees_Data[0];

          }
},
Rows => {
    this.issLoading = false;
    const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Error Occured', Type: "2" } });
});
}
Next_Click()
{
    if (this.Student_Data_Search.length == this.Page_Length_) 
    {
        this.Black_Start = this.Black_Start + this.Page_Length_;
        this.Black_Stop = this.Black_Stop + this.Page_Length_;
        if (this.missedfollowup_count > 0) {
        this.Red_Start = this.Red_Start + this.missedfollowup_count;
        this.Red_Stop = this.Red_Start + this.Page_Length_;
    }
this.nextflag = 1;
    if (this.Student_Data_Search.length > 0)
    {
        this.Search_Fees_Receipt_Report();
    }
}
}
previous_Click()
{
    if (this.Black_Start > 1) {
    {
        this.Black_Start = this.Black_Start - this.Page_Length_;
        this.Black_Stop = this.Black_Stop - this.Page_Length_;
    }
    if (this.missedfollowup_count > 0 || this.Red_Start > 1) 
    {
    this.Red_Start = this.Red_Start - this.Page_Length_;
    if (this.Red_Start <= 0)
    this.Red_Start = 1;
    this.Red_Stop = this.Red_Start + this.Page_Length_;
    }
    this.Total_Rows = this.Total_Rows - this.Student_Data_Search.length - this.Page_Length_;
    this.Search_Fees_Receipt_Report();
}
}   
}

