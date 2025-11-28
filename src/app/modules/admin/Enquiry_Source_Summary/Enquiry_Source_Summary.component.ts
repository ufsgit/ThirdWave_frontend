import { Component, OnInit,ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student_Service } from '../../../services/Student.Service';
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
import { Enquiry_Source } from '../../../models/Enquiry_Source';


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
selector: 'app-Dashboard',
templateUrl: './Enquiry_Source_Summary.component.html',
styleUrls: ['./Enquiry_Source_Summary.component.css'],
providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
    ],
})
export class Enquiry_Source_SummaryComponent implements OnInit {
    Permissions: any;
    Dashboard_Edit:boolean;
    Dashboard_Save:boolean;
    Dashboard_Delete:boolean;

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

    FollowUp_Department_:Department= new Department();
    Followup_Users_Data:User_Details[]
    Followup_Users_:User_Details= new User_Details();
    FollowUp_Branch_:Branch= new Branch();

    Enquiry_Source_Search_:Enquiry_Source=new Enquiry_Source()
    Enquiry_Source_:Enquiry_Source=new Enquiry_Source();

    Enquiry_Source_Data:Enquiry_Source[];
    Enquiry_Source_Search_Data:Enquiry_Source[];
    Enquiry_Source_Temp:Enquiry_Source=new Enquiry_Source();
    Enquiry_Source_Search_Temp:Enquiry_Source=new Enquiry_Source();

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
    Menu_Id: number = 17;

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
    Summary_Div:boolean=false

    Total_Students:number=0;
 
    // Graph_Button: boolean = false;
    // title = 'Work Chart';
    // type = 'LineChart';
    // data = [];
    // columnNames = ['Entry_Date', ' Count'];
    // options = {
    // };
    // width = 2000;
    main_View:boolean=false
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
    Export_Permission:any
    Export_View:boolean=false
   Total_Data:number=0

   

constructor( public Student_Service_:Student_Service, private route: ActivatedRoute, private router: Router,public dialogBox: MatDialog) { }



ngOnInit() 
{
    this.Login_User = localStorage.getItem("Login_User");
    // this.Permissions = Get_Page_Permission(32);
    // this.Export_Permission=Get_Page_Permission(38);
    // if(this.Permissions==undefined || this.Permissions==null)
    // {
    // localStorage.removeItem('token');
    // this.router.navigateByUrl('Home_Page');
    // }
    // else
    {
        //this.data.push({})
        this.Page_Load();
        // if (this.Export_Permission != undefined && this.Export_Permission != null)
        // this.Export_View=this.Export_Permission.View
    

    }
}
Page_Load(){
    
    this.myInnerHeight = (window.innerHeight);
    this.myInnerHeight = this.myInnerHeight - 230;
    
    this.Black_Stop = this.Page_Length_;
    this.Red_Stop = this.Page_Length_;
    this.Search_By_=1;
    this.Registered_By_ = 1;
    this.main_View=false
    this.Summary_Div=true 
    // this.Get_Lead_Load_Data();
    this.Get_Menu_Status(32,this.Login_User);
    this.Get_Menu_Status(38,this.Login_User);
    this.Get_Lead_Load_Data_ByUser(this.Login_User);

  // this.Search_Student_Report();
     var my_date=new Date()
    // this.Search_FromDate = new Date(my_date.getFullYear(), my_date.getMonth(), 1);
    this.Search_ToDate =new Date();
    this.Search_ToDate = this.New_Date(this.Search_ToDate);
    this.Search_FromDate =new Date(my_date.getFullYear(), my_date.getMonth(), 1);
    this.Search_FromDate = this.New_Date(this.Search_FromDate);
     this.Search_Enquriy_Summary();  
     
 this.myInnerHeight = (window.innerHeight);
 this.myTotalHeight=this.myInnerHeight - 230;
 this.myTotalHeight=this.myTotalHeight-40;
 this.myInnerHeight = this.myInnerHeight - 230;
}

Get_Menu_Status(Menu_id, Login_user_id)
{
    
    this.issLoading = false;
    this.Student_Service_.Get_Menu_Status(Menu_id,Login_user_id).subscribe(Rows => {            

    // if(Menu_id==17)

    if (Rows[0][0]==undefined)
    {
        if(Menu_id==32)
        {
        localStorage.removeItem('token');
        this.router.navigateByUrl('Home_Page');
        }
    }  
    else
    // if (Rows[0][0]!=undefined)

    if (Rows[0][0].View >0) 
    {  
        if(Menu_id==32)
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



Search_Lead_button() 
{
    this.Black_Start =1;
    this.Black_Stop = this.Page_Length_;
    this.Red_Start = 1;
    this.Total_Rows=0;
    this.Red_Stop = this.Page_Length_;
    // this.Search_Student_Report();
    this.Search_Enquriy_Summary()
}
// Get_Lead_Load_Data()
// {
//     this.issLoading = true;
//     this.Student_Service_.Get_Lead_Load_Data().subscribe(Rows => {
   
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
   this.Department_Temp.Department_Name = "Select";
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



display_Branch(Branch_: Branch) 
{
    if (Branch_) { return Branch_.Branch_Name; }
}
Export()
{
        this.Student_Service_.exportExcel(this.Student_Data_Search,'Enquiry_Source_Summary')

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

Search_Student_Report()
{
    
    this.main_View=true
    this.Summary_Div=false
    this.Graph=false

var value = 1, dept_id=0,User_Id=0,search_name_='0',look_In_Date_Value=0,Enqury_Id=0,branch_id=0;
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

    if (this.Enquiry_Source_Search_ != undefined && this.Enquiry_Source_Search_ != null)
    if (this.Enquiry_Source_Search_.Enquiry_Source_Id != undefined && this.Enquiry_Source_Search_.Enquiry_Source_Id != null)
    Enqury_Id = this.Enquiry_Source_Search_.Enquiry_Source_Id;

    if (this.Search_Branch != undefined && this.Search_Branch != null)
    if (this.Search_Branch.Branch_Id != undefined && this.Search_Branch.Branch_Id != null)
    branch_id = this.Search_Branch.Branch_Id;

    this.issLoading = true;
    
    this.Student_Service_.Search_Enquiry_Source_Report(moment(this.Search_FromDate).format('YYYY-MM-DD'),moment(this.Search_ToDate).format('YYYY-MM-DD'), look_In_Date_Value,branch_id)
.subscribe(Rows => 
{
    
    //log(Rows)
    this.Student_Data_Search = Rows.returnvalue.Leads;
   
    this.missedfollowup_count =0;
    this.followup_count=0;

    for (var i = 0; i < this.Student_Data_Search.length; i++) {
    this.Student_Data_Search[i].RowNo =i+1 + this.Total_Rows;
    if (this.Student_Data_Search[i].tp == 1)
    this.followup_count = this.followup_count + 1;
    if (this.Student_Data_Search[i].tp == 2)

    this.missedfollowup_count = this.missedfollowup_count + 1;
}

if ( this.Student_Data_Search.length>0)
this.Total_Rows= this.Total_Rows+this.Student_Data_Search.length;
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
Search_Enquriy_Summary()
{
    
    this.main_View=true
    this.Summary_Div=false
    this.Graph=false
    this.Summary_Sub=true;
    this.Total_Students=0;
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

   var c=0;
    this.issLoading = true;
    
    this.Student_Service_.Search_Enquiry_Source_Summary_Track(moment(this.Search_FromDate).format('YYYY-MM-DD'),
    moment(this.Search_ToDate).format('YYYY-MM-DD'),this.Login_User,look_In_Date_Value,branch_id)
.subscribe(Graph_Status => 
{

   
    this.issLoading = false;
    this.Student_Data_Search = Graph_Status.returnvalue.Leads;
    this.Total_Data=this.Student_Data_Search.length
    this.issLoading = false;
    this.Total_Students=0;
    var Branchwise_data_temp = Graph_Status.returnvalue.Leads;
    for(var j=0;j<Branchwise_data_temp.length;j++){
        this.Total_Students=Number(this.Total_Students)+Number(Branchwise_data_temp[j].No_of_Students)
    }
    this.issLoading = false;
    var result = [];
     this.Branchwise_columnNames=[];
    for (var i in Branchwise_data_temp)
    {
        result.push([Branchwise_data_temp[i].Enquiry_Source, Branchwise_data_temp[i].No_of_Students]);
    } 
   // var data_temp = new google.visualization.DataTable(result)
    this.Branchwise_columnNames.push('User_Details_Name')
    this.Branchwise_columnNames.push('Followup_Count')
    this.Branchwise_data = result;
    this.Data_Bar=result;     
 
  
    if (this.Student_Data_Search.length==0) {
        const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'No Data Found', Type: "3" } });
    }
    this.issLoading = false;
    
},
    Rows => {

        this.issLoading = false;
        const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Error Occured', Type: "2" } });
    });
}
Graph_View(){
    this.Summary_Sub=false
    this.Graph=true
}
}

