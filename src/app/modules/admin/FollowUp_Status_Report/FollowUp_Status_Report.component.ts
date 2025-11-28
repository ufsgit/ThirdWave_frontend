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
//import { debug } from 'console';

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
selector: 'app-FollowUp_Status_Report',
templateUrl: './FollowUp_Status_Report.component.html',
styleUrls: ['./FollowUp_Status_Report.component.css'],
providers:[
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
    ],
    })

export class FollowUp_Status_ReportComponent implements OnInit {
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

    Lead_Data: Student[]
    Student_Data_Search: Student[]
    Lead_: Student = new Student();
    Search_Div: boolean = false;
    array: any;
    color = 'primary';
    mode = 'indeterminate';
    value = 50;
myInnerHeight: number;
myTotalHeight:number;
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
    Menu_Id: number = 19;

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
    Total_Entries:number=0
    Total_Data:number=0

    WorkSummary_Div:boolean=false;
     User_Details_Id:number

    Export_Permission:any
    Export_View:boolean=false

    Graph:boolean=false;
    Summary_Sub:boolean=true;

    Enquiry_Source_title = '';
    Enquiry_Source_type = 'BarChart';
    Type_PIe='PieChart'
    Branchwise_data = [  ];
    Data_Bar = [  ];
    Branchwise_columnNames = ['User_Detils_Name', 'Data_Count'];
    Enquiry_Source_options = { 
      is3D: true,
    };
    width = 550;
    height = 400; 
Permissions: any;

 
constructor(public Student_Service_:Student_Service, private route: ActivatedRoute, private router: Router,public dialogBox: MatDialog) 
{   }
ngOnInit() 
{
  
    this.Login_User = localStorage.getItem("Login_User");
    // this.array = Get_Page_Permission(this.Menu_Id);
    // this.Export_Permission=Get_Page_Permission(38);
    // if (this.array == undefined || this.array == null)
    // {
    //     localStorage.removeItem('token');
    //     this.router.navigateByUrl('/auth/login');
    // }
    // else 
    {
        this.Page_Load()
        // if (this.Export_Permission != undefined && this.Export_Permission != null)
        //     this.Export_View=this.Export_Permission.View
    }
}
Page_Load()
{
    
    this.myInnerHeight = (window.innerHeight);
    this.myInnerHeight = this.myInnerHeight - 320;

    this.Black_Stop = this.Page_Length_;
    this.Red_Stop = this.Page_Length_;
    
    this.WorkSummary_Div=true
    this.Search_Div=false
    this.Search_By_=1;
    this.Registered_By_ = 1;
    
    this.Search_FromDate=new Date();
    this.Search_FromDate = this.New_Date(this.Search_FromDate);
    this.Search_ToDate=new Date();
    this.Search_ToDate = this.New_Date(this.Search_ToDate);
    // this.Get_Lead_Load_Data();
    this.Get_Menu_Status(130, this.Login_User);
    this.Get_Menu_Status(38,this.Login_User);


    this.Get_Lead_Load_Data_ByUser(this.Login_User);
    this.Search_Student_Report()
    
    this.myInnerHeight = (window.innerHeight);
    this.myTotalHeight=this.myInnerHeight -320;
    this.myTotalHeight=this.myTotalHeight- -50;
    this.myInnerHeight = this.myInnerHeight - 320;
}

Get_Menu_Status(Menu_id, Login_user_id)
{
    
this.issLoading = false;
this.Student_Service_.Get_Menu_Status(Menu_id,Login_user_id).subscribe(Rows => {           

  // if(Menu_id==19)

    if (Rows[0][0]==undefined)
    {
        if(Menu_id==19)
        {
        localStorage.removeItem('token');
        this.router.navigateByUrl('Home_Page');
        }
    }  
    // else
    // if (Rows[0][0]!=undefined)

    if (Rows[0][0].View >0) 
    {
        if(Menu_id==19)
        {
            this.Permissions=Rows[0][0];
            if(this.Permissions==undefined || this.Permissions==null)
                {
                    localStorage.removeItem('token');
                    this.router.navigateByUrl('Home_Page');
                }
     
        }
    }

        if(Menu_id==38)
        {
            
            
            this.Export_Permission=Rows[0][0];

            if (this.Export_Permission != undefined && this.Export_Permission != null)
            this.Export_View=this.Export_Permission.View;
            else
            this.Export_View=true;

        }

    
    // else
    // {
    //     localStorage.removeItem('token');
    //                 this.router.navigateByUrl('Home_Page'); 
    // }
},
Rows => {
    this.issLoading = false;
    const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Error Occured', Type: "2" } });
});
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
    Search_Lead_button2() 
{
    this.Black_Start =1;
    this.Black_Stop = this.Page_Length_;
    this.Red_Start = 1;
    this.Total_Rows=0;
    this.Red_Stop = this.Page_Length_;
    this.Search_Work_report(this.User_Search.User_Details_Id);
    
}

Search_Lead_button() 
{
    this.Black_Start =1;
    this.Black_Stop = this.Page_Length_;
    this.Red_Start = 1;
    this.Total_Rows=0;
    this.Red_Stop = this.Page_Length_;
    //this.Search_Work_report(this.User_Search.User_Details_Id);
    this.Search_Student_Report()
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
        this.Student_Service_.exportExcel(this.Student_Data_Search,'Work_report')

}
Export_Summary()
{
        this.Student_Service_.exportExcel(this.Student_Data_Search,'Work_Summary')

}
Search_Student_Report()
{
    
    this.WorkSummary_Div=true
    this.Search_Div=false
    this.Summary_Sub=true
    this.Graph=false
    this.Total_Entries=0;
    var value = 1, dept_id=0,User_Id=0,search_name_='0',look_In_Date_Value=0,branch_id=0;
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


    this.issLoading = true;
    
    this.Student_Service_.Search_Work_Summary(moment(this.Search_FromDate).format('YYYY-MM-DD'), moment(this.Search_ToDate).format('YYYY-MM-DD'), User_Id,this.Login_User, look_In_Date_Value,branch_id)
.subscribe(Rows => 
{
    
   // log(Rows)
    this.Student_Data_Search = Rows.returnvalue.Leads;
    this.Total_Entries=0;
    //this.Total_Entries= this.Student_Data_Search.length
    this.issLoading = false;
    var Branchwise_data_temp = Rows.returnvalue.Leads;
    for(var j=0;j<Branchwise_data_temp.length;j++){
        this.Total_Entries=Number( this.Total_Entries)+Number(Branchwise_data_temp[j].No_of_Follow_Up);
    }
    this.issLoading = false;
    var result = [];
     this.Branchwise_columnNames=[];
    for (var i in Branchwise_data_temp)
    {
        result.push([Branchwise_data_temp[i].To_Staff, Branchwise_data_temp[i].No_of_Follow_Up]);
    } 
   // var data_temp = new google.visualization.DataTable(result)
    this.Branchwise_columnNames.push('User_Details_Name')
    this.Branchwise_columnNames.push('Followup_Count')
    this.Branchwise_data = result;
    this.Data_Bar=result;     

this.issLoading = false;
if(this.Student_Data_Search.length==0)
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
View_Back(){
    
    this.WorkSummary_Div=true
    this.Search_Div=false
    this.Search_Student_Report();
}
View_Details_Click(User_Details_Id){
    //this.issLoading =true;
    
    for (var i = 0; i < this.Users_Data.length; i++) {
        if (User_Details_Id== this.Users_Data[i].User_Details_Id)
        this.User_Search=this.Users_Data[i];
    }
    this.Search_Work_report(User_Details_Id);
}

Search_Work_report(User_Id)
{
    
    this.WorkSummary_Div=false
    this.Search_Div=true
    this.Graph=false
var value = 1, dept_id=0,search_name_='0',look_In_Date_Value=0,branch_id=0;
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
    // this.User_Search.User_Details_Id=User_Id


    if (this.Department_Search != undefined && this.Department_Search != null)
    if (this.Department_Search.Department_Id != undefined && this.Department_Search.Department_Id != null)
    dept_id = this.Department_Search.Department_Id;

    if (this.Search_Branch != undefined && this.Search_Branch != null)
    if (this.Search_Branch.Branch_Id != undefined && this.Search_Branch.Branch_Id != null)
    branch_id = this.Search_Branch.Branch_Id;
    //log(User_Id)

    this.issLoading = true;

    //this.Student_Service_.Search_Work_report(moment(this.Search_FromDate).format('YYYY-MM-DD'), moment(this.Search_ToDate).format('YYYY-MM-DD'),value, search_name_, dept_id,branch_id, User_Id,   look_In_Date_Value, this.Black_Start, this.Black_Stop, this.Login_User, this.Red_Start, this.Red_Stop)
    this.Student_Service_.Search_Work_report(moment(this.Search_FromDate).format('YYYY-MM-DD'), moment(this.Search_ToDate).format('YYYY-MM-DD'),
     value, search_name_, dept_id,branch_id, User_Id,look_In_Date_Value, this.Black_Start, this.Black_Stop, this.Login_User, this.Red_Start, this.Red_Stop)
.subscribe(Rows => 
{
   
    this.Student_Data_Search = Rows.returnvalue.Leads;
    this.Total_Data=this.Student_Data_Search.length
    this.missedfollowup_count =0;
    this.followup_count=0;
    
  
this.issLoading = false;
if(this.Student_Data_Search.length==0)
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


// Get_Lead_Load_Data()
// {
// this.issLoading = true;
// this.Student_Service_.Get_Lead_Load_Data().subscribe(Rows => {
   
//     if (Rows != undefined)
//     {
//         this.issLoading = false;
//         this.Department_Data = Rows.returnvalue.Department;
//         this.Users_Data = Rows.returnvalue.Users;
//         this.Branch_Data = Rows.returnvalue.Branch;
//         this.Status_Data = Rows.returnvalue.Department_Status;

//         this.Department_Temp.Department_Id = 0;
//         this.Department_Temp.Department_Name = "All";
//         this.Department_Data.unshift(Object.assign({}, this.Department_Temp));
//         this.Department_Search = this.Department_Data[0];

//         this.Users_Temp.User_Details_Id = 0;
//         this.Users_Temp.User_Details_Name = "All";
//         this.Users_Data.unshift(Object.assign({}, this.Users_Temp));
//         this.User_Search = this.Users_Data[0];
//         this.Branch_Temp1.Branch_Id = 0;

//         this.Branch_Temp1.Branch_Name = "All";
//         this.Branch_Data.unshift(this.Branch_Temp1);
//         this.Search_Branch = this.Branch_Data[0];

//         this.Status_Temp.Department_Status_Id = 0;
//         this.Status_Temp.Department_Status_Name = "All";
//         this.Status_Data.unshift(Object.assign({}, this.Status_Temp));
//         this.Status_Search = this.Status_Data[0];
//     }
// },
// Rows => {
//     this.issLoading = false;
//     const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Error Occured', Type: "2" } });
// });
// }


Get_Lead_Load_Data_ByUser(Login_User)
    {
        
        this.issLoading = true;
        this.Student_Service_.Get_Lead_Load_Data_ByUser(Login_User).subscribe(Rows => 
        
    {
     
    
      this.Department_Data = Rows[1].slice();
   this.Department_Temp.Department_Id = 0;
   this.Department_Temp.Department_Name = "All";
   this.Department_Data.unshift(Object.assign({},this.Department_Temp));
   this.Department_Search = this.Department_Data[0];

   this.Users_Data = Rows[0].slice();
   this.Users_Temp.User_Details_Id = 0;
   this.Users_Temp.User_Details_Name = "All";
   this.Users_Data.unshift(Object.assign({},this.Users_Temp));
   this.User_Search = this.Users_Data[0];
   
  
   this.Branch_Data = Rows[2].slice();
   this.Branch_Temp1.Branch_Id = 0;
   this.Branch_Temp1.Branch_Name = "All";
   this.Branch_Data.unshift(Object.assign({},this.Branch_Temp1));
   this.Search_Branch = this.Branch_Data[0];

   this.Status_Data = Rows[5].slice();
   this.Status_Temp.Department_Status_Id = 0;
   this.Status_Temp.Department_Status_Name = "All";
   this.Status_Data.unshift(Object.assign({},this.Status_Temp));
   this.Status_Search = this.Status_Data[0];



},
Rows => { 
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}}); });
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
        this.Search_Work_report(this.User_Search.User_Details_Id);
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
    this.Search_Work_report(this.User_Search.User_Details_Id);
}
}   

Graph_View(){
    this.Graph=true
    this.Summary_Sub=false
}

Edit_Student_Notification(Student_Id, i) {
    
    localStorage.setItem('Student_Id', Student_Id);
    console.log(Student_Id)
    this.Edit_Page_Permission = Get_Page_Permission(5);
    if (this.Edit_Page_Permission == undefined) {
        const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'No permission to view', Type: "2" } });
    }
    else if (this.Edit_Page_Permission.View == true)
       // this.router.navigateByUrl('/Stu');
      // window.open('/Student')
      this.goToLink();
    else {
        const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'No permission to view', Type: "2" } });
    }
}


goToLink() {
        
    return;
    const url = this.router.serializeUrl(
      this.router.createUrlTree(['/Student'])
    );
    // window.open('/Student');
    window.open(url, '_blank');
  }


}

