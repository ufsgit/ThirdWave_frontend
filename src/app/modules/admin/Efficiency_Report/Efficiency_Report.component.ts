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
selector: 'app-Efficiency_Report',
templateUrl: './Efficiency_Report.component.html',
styleUrls: ['./Efficiency_Report.component.css'],
providers: [
{provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
{provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
],
})

export class Efficiency_ReportComponent implements OnInit {
    Permissions: any;
    Dashboard_Edit:boolean;
    Dashboard_Save:boolean;
    Dashboard_Delete:boolean;

    Status_Search: Department_Status = new Department_Status();
    User_Search: User_Details = new User_Details();
    Search_Name = "";
    Department_Search: Department = new Department()
    Search_Branch: Branch = new Branch();
    Search_User:User_Details=new User_Details()
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

    FollowUp_Department_:Department= new Department();
    Followup_Users_Data:User_Details[]
    Followup_Users_:User_Details= new User_Details();
    FollowUp_Branch_:Branch= new Branch();

    User_Details_:User_Details=new User_Details();
    
    followup_count: number = 1;

    Lead_Data: Student[]
    Student_Data_Search: Student[]
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
    Menu_Id: number = 26;

    RowCount: number = 0;
    RowCount2: number = 0;
    nextflag: number = -1;
    Page_Index1_: number = 0;
    Page_Index2_: number = 0;
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

    Followup_Branch_Data:Branch[]

    Export_Permission:any
    Export_View:boolean=false
  
    Load_Graph=0;
    Graph_Button: boolean = false;
    title = 'Work Chart';
    type = 'Bar';
    data = [];
    columnNames = ['User', ' Count'];
    options = {
    };
    width = 2000;

constructor( public Student_Service_:Student_Service, private route: ActivatedRoute, private router: Router,public dialogBox: MatDialog) { }



ngOnInit() 
{
    this.Login_User = localStorage.getItem("Login_User");
    this.Permissions = Get_Page_Permission(25);
    this.Export_Permission= Get_Page_Permission(38);
    if(this.Permissions==undefined || this.Permissions==null)
    {
    localStorage.removeItem('token');
    this.router.navigateByUrl('Home_Page');
    }
    else
    {
       this.Page_Load()
    // this.Dashboard_Edit=this.Permissions.Edit;
    // this.Dashboard_Save=this.Permissions.Save;
    // this.Dashboard_Delete=this.Permissions.Delete;
   // this.Get_Lead_Load_Data();
   if (this.Export_Permission != undefined && this.Export_Permission != null)
            this.Export_View=this.Export_Permission.View
    }
}
Page_Load()
{
    
   
    this.Get_Lead_Load_Data();
    this.Search_Efficiency_Report()
    this.data.push({})

}
Get_Lead_Load_Data()
{
this.issLoading = true;

this.Student_Service_.Get_Lead_Load_Data().subscribe(Rows => {
   
    if (Rows != undefined)
    {   
       
        this.Load_Graph=0;
        this.issLoading = false;
        this.Department_Data = Rows.returnvalue.Department;
        this.Users_Data = Rows.returnvalue.Users;
        this.Branch_Data = Rows.returnvalue.Branch;
        this.Status_Data = Rows.returnvalue.Department_Status;

        this.Department_Temp.Department_Id = 0;
        this.Department_Temp.Department_Name = "All";
        this.Department_Data.unshift(Object.assign({}, this.Department_Temp));
        this.Department_Search = this.Department_Data[0];

        this.Users_Temp.User_Details_Id = 0;
        this.Users_Temp.User_Details_Name = "Select";
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
    }
},
Rows => {
    this.issLoading = false;
    const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Error Occured', Type: "2" } });
});
}
Search_More_Options()
{
    if (this.More_Search_Options == true)
    this.More_Search_Options = false;
    else
    this.More_Search_Options = true;
}

Search_User_Typeahead(event: any)
{ 
    var Value = "";
    if (event.target.value == "")
    Value = undefined;
    else
    Value = event.target.value;
    this.issLoading=true;
this.Student_Service_.Search_User_Typeahead(Value).subscribe(Rows => {
           
if (Rows != null) {
this.Users_Data = Rows[0];
}
this.issLoading=false;
},
Rows => 
{
    this.issLoading=false;
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
});
}
display_Users(Users_: User_Details)
        {
             
        if (Users_) { return Users_.User_Details_Name;
        }
        }
        Search_Branch_Typeahead(event: any)
        {   
            
            var Value = "";
           if(this.Followup_Branch_Data==undefined)
           this.Followup_Branch_Data=[];
            if(this.Followup_Branch_Data.length==0 )
            {
            if (event.target.value == "")
                Value = undefined;
            else
                Value = event.target.value;
                 
                    if(this.Followup_Branch_Data==undefined || this.Followup_Branch_Data.length==0)
                    {
                this.issLoading = true;
            this.Student_Service_.Search_Branch_Typeahead('').subscribe(Rows => {
         
                if (Rows != null) {
                    this.Followup_Branch_Data = Rows[0];
                    this.issLoading = false;
                }
            },
                Rows => {
                    this.issLoading = false;
                    // const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
                });
            }
        } 
        }
        display_Branch(Branch_: Branch) 
{
    if (Branch_) { return Branch_.Branch_Name; }
}

Search_Efficiency_Report()
{
    
    this.Load_Graph=1;
var User_Id=0,look_In_Date_Value=0,branch_id=0;
    // if(this.Search_By_!=undefined && this.Search_By_!=null)
    // if (this.Search_By_ != undefined && this.Search_By_ != null && this.Search_By_ != '')
    // value=this.Search_By_;

    if (this.Look_In_Date == true )
    look_In_Date_Value = 1;

    // if (this.Search_Name != undefined && this.Search_Name != null && this.Search_Name != '')
    // search_name_ = this.Search_Name;
    // if (this.User_Search == undefined && this.User_Search==null)
    // {
    //     const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Enter Staff Name',Type:"3"}});
    //         return;
    // }

    if (this.User_Search != undefined && this.User_Search!=null)
    if (this.User_Search.User_Details_Id != undefined && this.User_Search.User_Details_Id != null)
    User_Id = this.User_Search.User_Details_Id;


    // if (this.Department_Search != undefined && this.Department_Search != null)
    // if (this.Department_Search.Department_Id != undefined && this.Department_Search.Department_Id != null)
    // dept_id = this.Department_Search.Department_Id;

    if (this.Search_Branch != undefined && this.Search_Branch != null)
    if (this.Search_Branch.Branch_Id != undefined && this.Search_Branch.Branch_Id != null)
    branch_id = this.Search_Branch.Branch_Id;

   
    this.issLoading = true;
    
    this.Student_Service_.Search_Efficiency_Count_Report(moment(this.Search_FromDate).format('YYYY-MM-DD'), moment(this.Search_ToDate).format('YYYY-MM-DD'), branch_id,User_Id)
.subscribe(Graph_Status => 
{

Graph_Status = Graph_Status.returnvalue.Leads;
this.issLoading = false;
var result = [];
for (var i in Graph_Status)
result.push([Graph_Status[i].By_User, Graph_Status[i].Count]);
var data_temp = google.visualization.arrayToDataTable(result);
 
this.data = result;
    if (this.data.length == 0) {
        const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'No Data Found', Type: "3" } });
    }
    this.issLoading = false;
},
    Rows => {

        this.issLoading = false;
        const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Error Occured', Type: "2" } });
    });
}
}

