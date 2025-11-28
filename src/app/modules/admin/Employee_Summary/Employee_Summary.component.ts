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
import { Remarks } from 'app/models/Remarks';
import { Student_FollowUp } from 'app/models/Student_FollowUp';
import { Enquiry_Source } from 'app/models/Enquiry_Source';
import { Internship_Service } from 'app/services/Internship.service';

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
  selector: 'app-Employee_Summary',
  templateUrl: './Employee_Summary.component.html',
  styleUrls: ['./Employee_Summary.component.css'],
providers: [
  {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
  {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
 })


 export class Employee_SummaryComponent implements OnInit {
    Status_Search: Department_Status = new Department_Status();
    User_Search: User_Details = new User_Details();
    Search_Name = "";
    Department_Search: Department = new Department()
    Search_Branch: Branch = new Branch();
    Search_FromDate: Date = new Date();
    Search_ToDate: Date = new Date();
    Look_In_Date: Boolean = true;
    More_Search_Options: boolean = true;

    Enquiry_Source_Search_:Enquiry_Source=new Enquiry_Source()
    Enquiry_Source_:Enquiry_Source=new Enquiry_Source();

    Enquiry_Source_Data:Enquiry_Source[];
    Enquiry_Source_Search_Data:Enquiry_Source[];
    Enquiry_Source_Temp:Enquiry_Source=new Enquiry_Source();
    Enquiry_Source_Search_Temp:Enquiry_Source=new Enquiry_Source();

    Total_Entries:number=0

    myTotalHeight:number;

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
    FollowUp_:Student_FollowUp=new Student_FollowUp()

    Lead_Data: Student[]
    Student_Data_Search: Student[]
    Student_Data:Student[]
    Student_Data_Item:Student=new Student()
    Lead_: Student = new Student();
    Search_Div: boolean = false;
    array: any;
    color = 'primary';
    mode = 'indeterminate';
    value = 50;
myInnerHeight: number;
    issLoading: boolean;

    Show_FollowUp:boolean=false
    main_View:boolean=false
    Student_Selected_Data:Student[]

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
    Menu_Id: number = 53;

    Select_Student:boolean=false;
    Select_View:boolean=false;
    Student_Id:number=0;
    Student_:Student =new Student()


    Enquiry_Source_data_temp:[]
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

    Followup_Users_Data:User_Details[]
    Followup_Users_:User_Details= new User_Details();

    Student_Selection_Data_Temp:Student[];


    FollowUp_Status_:Department_Status= new Department_Status();

    Followup_Status_Data:Department_Status[]


    FollowUp_Department_:Department= new Department();
    Followup_Department_Data:Department[]
    Followup_Department_Data_Check:Department[]

    FollowUp_Branch_:Branch= new Branch();
    Followup_Branch_Data:Branch[]
    Branch_Temp:Branch= new Branch();

    Remarks_:Remarks= new Remarks
    Remarks_Data:Remarks[]
    Remarks_Temp:Remarks= new Remarks();
    Login_Id:number
    Summary_Div:boolean=false

    Export_Permission:any
    Export_View:boolean=false
    Load_Graph=0;
    Graph_Button: boolean = false;
    Enquiry_Source_title = '';
    Enquiry_Source_type = 'PieChart';
    Enquiry_Source_data = [
      
    ];
    Enquiry_Source_columnNames = [];
    Enquiry_Source_options = {
      is3D: true,
    };
    width = 550;
    height = 400;
  
    Total:number=0;
    Total_Amount:number=0;
    Total_Registration:number=0;

    Title_Bar = 'Browser market shares at a specific website, 2014';
  Type_Bar = 'BarChart';
    Data_Bar = [
   
  ];
  columnNames_Bar = ['Browser', 'Count'];
  options_Bar = {
    is3D: true,
  };
Permissions: any;


 
constructor(public Student_Service_:Student_Service, public Internship_Service_:Internship_Service,private route: ActivatedRoute, private router: Router,public dialogBox: MatDialog) 
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
    this.myInnerHeight = this.myInnerHeight - 200;
    this.Show_FollowUp=false
    this.Black_Stop = this.Page_Length_;
    this.Red_Stop = this.Page_Length_;
   this.main_View=false
   this.Summary_Div=true ;
   this.Get_Menu_Status(53,this.Login_User);
   this.Get_Menu_Status(38,this.Login_User);
   this.Load_Dropdowns();
  // this.Search_Student_Report();
   
   //this.Search_EnquirySource_Graph()
   this.Show_FollowUp=false
    this.Search_By_=1;
    this.Registered_By_ = 1;
    // this.Get_Lead_Load_Data();
    this.Get_Lead_Load_Data_ByUser(this.Login_User);

    this.Search_FromDate = this.New_Date(this.Search_FromDate);
    this.Search_ToDate = this.New_Date(this.Search_ToDate);
    this.Search_Enquriy_Summary()

    this.myInnerHeight = (window.innerHeight);
    this.myTotalHeight=this.myInnerHeight - 250;
    this.myTotalHeight=this.myTotalHeight-40;
    this.myInnerHeight = this.myInnerHeight - 250;
}

Get_Menu_Status(Menu_id, Login_user_id)
{
    
this.issLoading = false;
this.Student_Service_.Get_Menu_Status(Menu_id,Login_user_id).subscribe(Rows => {            
    // if(Menu_id==17)

    if (Rows[0][0]==undefined)
    {
        if(Menu_id==53)
        {
        localStorage.removeItem('token');
        this.router.navigateByUrl('Home_Page');
        }
    }  
    else
    // if (Rows[0][0]!=undefined)
    if (Rows[0][0].View >0) 
    {
        if(Menu_id==53)
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

Load_Dropdowns() 
{
      

  this. Internship_Service_.Get_Course_Load_Data().subscribe(Rows =>
        
{
 
 

    this.Enquiry_Source_Data = Rows[5].slice();
    this.Enquiry_Source_Temp.Enquiry_Source_Id = 0;
    this.Enquiry_Source_Temp.Enquiry_Source_Name = "Select";
    this.Enquiry_Source_Data.unshift(this.Enquiry_Source_Temp);
    this.Enquiry_Source_ = this.Enquiry_Source_Data[0];
    
    // this.Fees_Array = Rows[6].slice();
    // this.Fees_Temp.Fees_Id = 0;
    // this.Fees_Temp.Fees_Name = "Select";
    // this.Fees_Array.unshift(this.Fees_Temp);
    // this.Fees_Data_ = this.Fees_Array[0];

    
    
  },
Rows => { 
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}}); });
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

Student_View_Click()
{
    
 
 for(var i=0;i<this.Student_Data_Search.length;i++)
{
    if(this.Select_Student==false)
        this.Student_Data_Search[i].Check_Box_View=true;
    else
        this.Student_Data_Search[i].Check_Box_View=false;
}
}
New_Followup()
{
    
    this.Show_FollowUp=true;
    this.main_View=false
    // this.FollowUp_.Next_FollowUp_Date=new Date();
    // this.FollowUp_.Next_FollowUp_Date=this.New_Date( this.FollowUp_.Next_FollowUp_Date);
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
Search_More_Options()
{
    if (this.More_Search_Options == true)
    this.More_Search_Options = false;
    else
    this.More_Search_Options = true;
}
Export()
{
        this.Student_Service_.exportExcel(this.Student_Data_Search,'Employee_Summary')

}
Branch_Change()
{ 
    this.FollowUp_Department_=null;
    this.Followup_Users_=null;
    this.FollowUp_Status_=null;
    this.Followup_Department_Data=[];
    this.Followup_Department_Data_Check=[];
    this.Followup_Users_Data=[];
    this.Followup_Status_Data=[];
}
Focus_It()
{  
    setTimeout("$('[name=Followup_Status]').focus();", 0)
}
Department_Change()
{    
    //  document.getElementById("Followup_Status").focus(); 
        $('[name=Followup_Status]').focus();
    this.Focus_It();
    this.Followup_Users_=null;
    this.FollowUp_Status_=null;
    this.Followup_Users_Data=[];
    this.Followup_Status_Data=[];
    this.Followup_Department_Data=[];
    // if(this.FollowUp_Department_.Department_FollowUp==true)
    // this.Next_FollowUp_Date_Visible=false;
    // else
    // this.Next_FollowUp_Date_Visible=true;
    this.FollowUp_.Next_FollowUp_Date=new Date();
    this.FollowUp_.Next_FollowUp_Date=this.New_Date(this.FollowUp_.Next_FollowUp_Date);
}


Search_Enquriy_Summary()
{
    
    this.main_View=true
    this.Summary_Div=false
    this.Load_Graph=1;
    var User_Id=0,look_In_Date_Value=0,branch_id=0;
    this.Total=0, this.Total_Amount=0,this.Total_Registration=0;
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
    
    this.Student_Service_.Search_Employee_Summary(moment(this.Search_FromDate).format('YYYY-MM-DD'),
    moment(this.Search_ToDate).format('YYYY-MM-DD'),this.Login_User,look_In_Date_Value,branch_id)
.subscribe(Graph_Status => 
{

 //  log(Graph_Status)
    
    this.issLoading = false;
    this.Student_Data_Search = Graph_Status.returnvalue.Leads;
    this.Total_Entries=this.Student_Data_Search.length
    var Enquiry_Source_data_temp = Graph_Status.returnvalue.Leads;
    for(var j=0;j<Enquiry_Source_data_temp.length;j++){
        this.Total=Number(this.Total)+Number(Enquiry_Source_data_temp[j].No_of_Students)
    }
    for(var j=0;j<Enquiry_Source_data_temp.length;j++){
        this.Total_Amount=Number(this.Total_Amount)+Number(Enquiry_Source_data_temp[j].Receipt_Amount)
    }
    for(var j=0;j<Enquiry_Source_data_temp.length;j++){
        this.Total_Registration=Number(this.Total_Registration)+Number(Enquiry_Source_data_temp[j].Registration_Count)
    }
    this.issLoading = false;
    var result = [];
     this.Enquiry_Source_columnNames=[];
   
    for (var i in Enquiry_Source_data_temp)
    {
        result.push([Enquiry_Source_data_temp[i].Enquiry_Source_Name, Enquiry_Source_data_temp[i].Data_Count]);
      
    }
        
    
   // var data_temp = new google.visualization.DataTable(result);
    this.Enquiry_Source_columnNames.push('User')
    this.Enquiry_Source_columnNames.push('Count')
    this.Enquiry_Source_data = result;  
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
Search_Student_Report()
{
    
    this.main_View=true
    this.Summary_Div=false
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
    }
},
Rows => {
    this.issLoading = false;
    const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Error Occured', Type: "2" } });
});
}


Get_Lead_Load_Data_ByUser(Login_User)
    {
        
        this.issLoading = true;
        this.Student_Service_.Get_Lead_Load_Data_ByUser(Login_User).subscribe(Rows => 
        
    {
     
    
      this.Department_Data = Rows[1].slice();
   this.Department_Temp.Department_Id = 0;
   this.Department_Temp.Department_Name = "Select";
   this.Department_Data.unshift(this.Department_Temp);
   this.Department_Search = this.Department_Data[0];

   this.Users_Data = Rows[0].slice();
   this.Users_Temp.User_Details_Id = 0;
   this.Users_Temp.User_Details_Name = "All";
   this.Users_Data.unshift(this.Users_Temp);
   this.User_Search = this.Users_Data[0];
   
  
   this.Branch_Data = Rows[2].slice();
   this.Branch_Temp1.Branch_Id = 0;
   this.Branch_Temp1.Branch_Name = "All";
   this.Branch_Data.unshift(this.Branch_Temp1);
   this.Search_Branch = this.Branch_Data[0];

   this.Status_Data = Rows[5].slice();
   this.Status_Temp.Department_Status_Id = 0;
   this.Status_Temp.Department_Status_Name = "All";
   this.Status_Data.unshift(this.Status_Temp);
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
        this.Search_Student_Report();
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
    this.Search_Student_Report();
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
Search_Branch_Department_Typeahead(event: any)
{   
    var Value = "";
    if (event.target.value == "")
        Value = undefined;
    else
        Value = event.target.value;
      
        if(this.FollowUp_Branch_==null||this.FollowUp_Branch_.Branch_Id==undefined)
        {
            const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Select Branch',Type:"3"}});
        }
        else{
             
             if(this.Followup_Department_Data==undefined || this.Followup_Department_Data.length==0)
            {
                if(this.Followup_Department_Data_Check==undefined ||this.Followup_Department_Data_Check.length==0)
                {
            this.issLoading = true;
    this.Student_Service_.Search_Branch_Department_Typeahead(this.FollowUp_Branch_.Branch_Id,'').subscribe(Rows => {
   
        if (Rows != null) {
            // if(Rows.code!=undefined)
            // {
            //     const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:Rows.Code,Type:"false"}});
            // }
            this.Followup_Department_Data = Rows[0];
             this.Followup_Department_Data_Check = Rows[0];
            this.issLoading = false;
        }
    },
        Rows => {
            this.issLoading = false;
        const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
        });
        }
        else
        {
            this.Followup_Department_Data=  this.Followup_Department_Data_Check;
        }
    }
    }  
}
display_Department(Department_: Department) {
    if (Department_) { 
        return Department_.Department_Name; }
}

Search_Department_Status_Typeahead(event: any)
{
    var Value = "";
    if (event.target.value == "")
        Value = undefined;
    else
        Value = event.target.value;
      
        if(this.FollowUp_Department_==null||this.FollowUp_Department_.Department_Id==undefined)
        {
            const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});

        }
        else
        { 
            if(this.Followup_Status_Data==undefined || this.Followup_Status_Data.length==0)
            {
            this.issLoading = true;
    this.Student_Service_.Search_Department_Status_Typeahead(this.FollowUp_Department_.Department_Id,'').subscribe(Rows => {
 
        if (Rows != null) {
            this.Followup_Status_Data = Rows[0];
            this.issLoading = false;
        }
    },
        Rows => {
            this.issLoading = false;
           });
    }
}    
}
display_Followup_Status(Status_: Department_Status) 
{
    if (Status_) { return Status_.Department_Status_Name; }
}

Search_Department_User_Typeahead(event: any)
{ 
    
    var Value = "";
    if (event.target.value == "")
        Value = undefined;
    else
        Value = event.target.value;
       
        if(this.FollowUp_Department_==null||this.FollowUp_Department_.Department_Id==undefined)
        {
            const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class', data:{Message:'Error Occured',Type:"3"}});

        }
        else
        {    
           if(this.Followup_Users_Data==undefined || this.Followup_Users_Data.length==0)
           {
            this.issLoading = true;
    this.Student_Service_.Search_Department_User_Typeahead(this.FollowUp_Branch_.Branch_Id,this.FollowUp_Department_.Department_Id,'').subscribe(Rows => {
        

        if (Rows != null) {
            this.Followup_Users_Data = Rows[0];
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
display_Followup_Users(Users_: User_Details)
 {
     
    if (Users_) { return Users_.User_Details_Name; }
}
Remarks_Typeahead(event: any) {

    var Value = "";
    if (event.target.value == "")
        Value = undefined;
    else
        Value = event.target.value;
    this.issLoading = true;


    this.Student_Service_.Remarks_Typeahead(Value).subscribe(Rows => {
        if (Rows != null) {
        
            this.Remarks_Data = Rows[0];

        }
        this.issLoading = false;
    },
        Rows => {
            this.issLoading = false;
        });
}
display_Remarks(Remarks_e: Remarks) {
    
    if (Remarks_e) { return Remarks_e.Remarks_Name; }
} 


Save_Student_Report_FollowUp()
 { 
     
   
    if(this.FollowUp_Branch_==null||this.FollowUp_Branch_.Branch_Id==undefined){
        const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Enter Branch', Type: "3" } });
        return;
    }
    if(this.FollowUp_Department_==null||this.FollowUp_Department_.Department_Id==undefined){
        const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Enter Department', Type: "3" } });
        return;
    }
    if(this.FollowUp_Status_==null||this.FollowUp_Status_.Department_Status_Id==undefined){
        const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Enter Status', Type: "3" } });
        return;
    }
    if(this.Followup_Users_==null||this.Followup_Users_.User_Details_Id==undefined){
        const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Enter User', Type: "3" } });
        return;
    }
   
    if(this.FollowUp_.Next_FollowUp_Date==undefined){
        const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Choose Date', Type: "3" } });
        return;
    }
{
     
this.Student_.Branch= this.FollowUp_Branch_.Branch_Id;
this.Student_.Department= this.FollowUp_Department_.Department_Id;
this.Student_.Status=this.FollowUp_Status_.Department_Status_Id;
this.Student_.Next_FollowUp_Date= this.New_Date(new Date(moment(this.FollowUp_.Next_FollowUp_Date).format('YYYY-MM-DD')));
this.Student_.User_Id= this.Followup_Users_.User_Details_Id;
this.Student_.By_User_Id= parseInt(this.Login_User)
 
var Student_Deatils=[];

for (var m = 0; m < this.Student_Data_Search.length; m++) 
{
    if (Boolean(this.Student_Data_Search[m].Check_Box_View) == true)
    {
        //this.Student_Selection_Data_Temp.push(this.Student_Data[m]);
        Student_Deatils.push({'Student_Id':this.Student_Data_Search[m].Student_Id} )
    }
}
 this.Student_.Student_Selected_Details =Student_Deatils;
    if(Student_Deatils.length==0){
        const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Please Select Student',Type:"2"}});
        this.Close_Click();
    }

document.getElementById('Save_Button').hidden=true;
this.issLoading=true;
 

this.Student_Service_.Save_Student_Report_FollowUp(this.Student_).subscribe(Save_status => {
        this.issLoading=false;
              
   
  // log(Save_status[0][0])
if(Number(Save_status[0][0].Student_Id_)>0)
{
   
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Saved',Type:"false"}});
       
    
        this.Close_Click();
document.getElementById('Save_Button').hidden=false;
}

else{
    this.issLoading=false;
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
document.getElementById('Save_Button').hidden=false;
}

},
Rows => { 
        this.issLoading=false;
document.getElementById('Save_Button').hidden=false;
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
});
}
} 
Close_Click()
{
    this.Show_FollowUp=false;
    this.main_View=true
    this.Select_Student=false;
    this.Select_View=false;
    this.FollowUp_Branch_=null
    this.FollowUp_Department_=null
    this.FollowUp_Status_=null
    this.Followup_Users_=null
    this.Remarks_=null;
    this.Student_.Next_FollowUp_Date=null
    
    
}
}

