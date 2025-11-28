import { Component, OnInit,Input,Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of as observableOf, merge } from 'rxjs';
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
import { Remarks } from '../../../models/Remarks';
import { Followup_History } from '../../../models/FollowUp_History';
import { Student_FollowUp } from '../../../models/Student_FollowUp';
import { Sub_Status } from 'app/models/Sub_Status';
import { Class } from 'app/models/Class';
import { Country } from 'app/models/Country';
import { Intake } from 'app/models/Intake';
import { Level_Detail } from 'app/models/Level_Detail';
import { University } from 'app/models/University';
import { Course_Search_Service } from 'app/services/Course_Search.Service';
import { Ielts } from 'app/models/Ielts';
import { Course } from 'app/models/Course';
import { Intake_Year } from 'app/models/Intake_Year';
import { Student_Course_Apply } from 'app/models/Student_Course_Apply';
import { Subject } from 'app/models/Subject';
import { Duration } from 'app/models/Duration';
import { Course_Selection } from 'app/models/Course_Selection';

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
selector: 'app-Course_Search',
templateUrl: './Course_Search.component.html',
styleUrls: ['./Course_Search.component.css'],
providers: [
{provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
{provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
],
})

export class Course_SearchComponent implements OnInit {
    Status_Search: Department_Status = new Department_Status();
    User_Search: User_Details = new User_Details();
   // Search_Name = "";
   Search_PhoneNumber="";
    Department_Search: Department = new Department()
    Search_Branch: Branch = new Branch();
    Search_FromDate: Date = new Date();
    Search_ToDate: Date = new Date();
    Look_In_Date: Boolean = true;
    More_Search_Options: boolean = true;
    Followup_sub:string;

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

    FollowUp_Sub_Status_: Sub_Status = new Sub_Status();

    Followup_Sub_Status_Temp: Sub_Status = new Sub_Status();
	Followup_Sub_Status_Data: Sub_Status[];

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
    FollowUp_History_:Followup_History=new  Followup_History();
    Followp_History_Data:Followup_History[];
    Show_Followup_History:boolean=true;
    Transfer_view: boolean = true;
    Buttonset_view: boolean = true;
	Transfer_Button_view: boolean = true;

    sub_typeahead:number;

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
    Menu_Id: number = 167;
    

    Next_FollowUp_Date_Visible:boolean=true;

    Select_Student:boolean=false;
    Select_View:boolean=false;
    Student_Id:number=0;
    Student_:Student =new Student()

    Lead_EditIndex:number=-1;
    View_History_:boolean=true;

    class_: Class = new Class();
	class_Temp: Class = new Class();
	class_Data: Class[];

    Country_: Country = new Country();
	Country_Temp: Country = new Country();
	Country_Data: Country[];

    Level_Detail_Data: Level_Detail[]
    Level_Detail_Temp: Level_Detail = new Level_Detail();
    Level_Detail_: Level_Detail = new Level_Detail();
   
    Intake_: Intake = new Intake();
    Intake_Temp: Intake = new Intake();
    Intake_Data: Intake[]


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

    Transfer_department_Id:number;

	transfer_typeahead:boolean=false;

    Followup_Users_Data:User_Details[]
    Followup_Users_:User_Details= new User_Details();

    Student_Selection_Data_Temp:Student[];


    FollowUp_Status_:Department_Status= new Department_Status();

    Followup_Status_Data:Department_Status[]

    Followup_Substatus_Data:Sub_Status[];


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
    timeDiff:number

    Export_Permission:any
    Export_View:boolean=false;
  Permissions: any;
  Duration:number;
  Login_User_Name: string;
  Usertype:number;
  Login_Department:number;
  Branch_Id:number;
  Student_Id_localStorage: string = "";

  Followup_Substatus_Data_Filter:Sub_Status[];

  Course_Search_view:boolean=true;
  Course_Search_view_result:boolean=true;

  UniversityNew_: University = new University();
University_Temp: University = new University();
UniversityNew_Data: University[];


Page_Start_Course:number=0;
Page_End_Course:number=0;
Page_Length_Course: number = 10;
Pointer_Stop_Course:number;
Red_Start_Course: number = 1;
Total_Rows_Course: number = 0;
Red_Stop_Course: number = 0;
Start:number =1;

Page_Start:number=0;
Page_End:number=10;
Page_Length:number=10;
Student_Course_Apply_Id_Log:number;
Pointer_Start_:number;

Courses_Found2:number = 0;

Ielts_: Ielts = new Ielts();
Ielts_Temp: Ielts = new Ielts();
Ielts_Data: Ielts[]
Application_Data: Student_Course_Apply[]
Course_Data:Course[];
Course_Data1:Course[];

Intake_Year_: Intake_Year = new Intake_Year();
Intake_Year_Temp: Intake_Year = new Intake_Year();
Intake_Year_Data: Intake_Year[];

Subject_Data: Subject[];

Duration_:Duration=new Duration();
Duration_Data:Duration[];
Duration_Temp:Duration=new Duration();

Course_Name:any;

next_previous:boolean=false;
Pages : number =0.0;
Total_Pages : number =0;

Courses_Found:number = 0;
Courses_Found1:number = 0;

Course_Selection_:Course_Selection=new Course_Selection;
 Course_Selection_Data:Course_Selection[]

 
constructor(public Student_Service_:Student_Service,public Course_Search_Service_:Course_Search_Service, private route: ActivatedRoute, private router: Router,public dialogBox: MatDialog) 
{   }
ngOnInit() 
{
  
    this.Login_User = localStorage.getItem("Login_User");
    this.Login_User_Name = localStorage.getItem("uname");
    this.Usertype = Number(localStorage.getItem("User_Type"));
    this.Login_Department = Number(localStorage.getItem("Login_Department"));
    this.Branch_Id = Number(localStorage.getItem("Branch"));

  
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
        // this.Export_View=this.Export_Permission.View
    }
}
Page_Load()
{
 
    this.myInnerHeight = (window.innerHeight);
    this.myInnerHeight = this.myInnerHeight - 200;
    this.Show_FollowUp=false
    this.Black_Stop = this.Page_Length_;
    this.Red_Stop = this.Page_Length_;
   this.main_View=true
  // this.Search_Student_Report();
   this.Show_FollowUp=false
    this.Search_By_=1;
    this.Registered_By_ = 1;
    // this.Get_Menu_Status()
    this.Get_Menu_Status(167,this.Login_User);
    // this.Get_Menu_Status(38,this.Login_User);
    this.clr_course_search();
    this.Public_Search_Course();
    // this.Get_Lead_Load_Data();
    this.Get_Student_PageLoadData_Dropdowns();
    this.Search_FromDate = this.New_Date(this.Search_FromDate);
    this.Search_ToDate = this.New_Date(this.Search_ToDate);

}

Get_Menu_Status(Menu_id, Login_user_id)
{
    
this.issLoading = false;
this.Student_Service_.Get_Menu_Status(Menu_id,Login_user_id).subscribe(Rows => {            

    

    // if(Menu_id==17)

    if (Rows[0][0]==undefined)
    {
        if(Menu_id==167)
        {
        localStorage.removeItem('token');
        this.router.navigateByUrl('Home_Page');
        }
    }  
    else
    // if (Rows[0][0]!=undefined)

    if (Rows[0][0].View >0) 
    {
        
        
        if(Menu_id==167)
        {
            
        

            this.Permissions=Rows[0][0];
            if(this.Permissions==undefined || this.Permissions==null)
                {
                    localStorage.removeItem('token');
                    this.router.navigateByUrl('Home_Page');
                }
     
        }

        else if(Menu_id==38)
        {
            
            
            this.Export_Permission=Rows[0][0];

            if (this.Export_Permission != undefined && this.Export_Permission != null)
             this.Export_View=this.Export_Permission.Edit

        }

    }
    else
    {
        localStorage.removeItem('token');
                    this.router.navigateByUrl('Home_Page'); 
    }
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
New_Followup(Student_Id,index)
{
    this.Student_Id=Student_Id;
    // this.View_History_=true;
    this.Lead_EditIndex=index;
    this.Next_FollowUp_Date_Visible=true;
    
    this.Get_FollowUp_Details();
    this.Show_FollowUp=true;
    this.main_View=false

    this.FollowUp_.Next_FollowUp_Date=new Date();
    this.FollowUp_.Next_FollowUp_Date=this.New_Date( this.FollowUp_.Next_FollowUp_Date);
}

Search_Lead_button() 
{
    
    this.Black_Start =1;
    this.Black_Stop = this.Page_Length_;
    this.Red_Start = 1;
    this.Total_Rows=0;
    this.Red_Stop = this.Page_Length_;
    this.Search_Student_Report();
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
        this.Student_Service_.exportExcel(this.Student_Data_Search,'Student_Report')

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
    if(this.FollowUp_Department_.Department_FollowUp==true)
    this.Next_FollowUp_Date_Visible=false;
    else
    this.Next_FollowUp_Date_Visible=true;
    this.FollowUp_.Next_FollowUp_Date=new Date();
    this.FollowUp_.Next_FollowUp_Date=this.New_Date(this.FollowUp_.Next_FollowUp_Date);
}
Get_FollowUp_Details()
{
    this.issLoading = true;
    
    this.Student_Service_.Get_FollowUp_Details(this.Student_Id).subscribe(Rows => {
        
        this.issLoading = false; 
         this.FollowUp_=Rows.returnvalue.FollowUp[0];
         if( this.FollowUp_!=null &&  this.FollowUp_!=undefined)
         {
            this.Branch_Temp.Branch_Id = this.FollowUp_.Branch;
            this.Branch_Temp.Branch_Name = this.FollowUp_.Branch_Name;
            this.FollowUp_Branch_ = Object.assign({},this.Branch_Temp);

            this.Department_Temp.Department_Id = this.FollowUp_.Department;
            this.Department_Temp.Department_Name = this.FollowUp_.Department_Name;
            this.Department_Temp.Department_FollowUp =  this.FollowUp_.Department_FollowUp;
            this.FollowUp_Department_ = Object.assign({}, this.Department_Temp);

            this.Status_Temp.Department_Status_Id = this.FollowUp_.Status_Id;
            this.Status_Temp.Department_Status_Name=this.FollowUp_.Department_Status_Name;
            this.FollowUp_Status_ = Object.assign({},  this.Status_Temp);


            this.Followup_Sub_Status_Temp.Sub_Status_Id = this.FollowUp_.Sub_Status_Id;
					this.Followup_Sub_Status_Temp.Sub_Status_Name =
						this.FollowUp_.Sub_Status_Name;
					this.FollowUp_Sub_Status_ = Object.assign({}, this.Followup_Sub_Status_Temp);

            this.Users_Temp.User_Details_Id = this.FollowUp_.To_User_Id;
            this.Users_Temp.User_Details_Name =this.FollowUp_.To_User_Name;
            this.Followup_Users_ = Object.assign({}, this.Users_Temp);

            this.FollowUp_.Remark="";
            this.Remarks_Temp.Remarks_Id=0;
            this.Remarks_Temp.Remarks_Name="";
            this.Remarks_=this.Remarks_Temp;
            
            this.FollowUp_.Next_FollowUp_Date=new Date();
            this.FollowUp_.Next_FollowUp_Date=this.New_Date( this.FollowUp_.Next_FollowUp_Date);



        }

        for (var i = 0; i < this.class_Data.length; i++) {
            if (
                this.FollowUp_.Class_Id ==
                this.class_Data[i].Class_Id
            )
                this.class_ = this.class_Data[i];
        }

       // this.Lead_Id=0;
       if(this.FollowUp_.Department_FollowUp==true)
       {
      this.Next_FollowUp_Date_Visible=false;
       }
        else
        this.Next_FollowUp_Date_Visible=true;
       
         },
       
         Rows => {
              this.issLoading = false;
       const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
    });
  
}
Search_Student_Report()
{
    
var Phone_Number='0';
this.Student_Data_Search=[];
    
    if (this.Search_PhoneNumber != undefined && this.Search_PhoneNumber != null && this.Search_PhoneNumber != "")
    {
        Phone_Number = this.Search_PhoneNumber;
    }
            
    else{
        const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Enter Mobile/Email', Type: "3" } });
        return;
    }


    this.issLoading = true;


    
    this.Student_Service_.Search_Student_With_PhoneNumber(Phone_Number)
.subscribe(Rows => 
{
   
    
   // log(Rows)
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
// Edit_Student(Student_e:any,index)
// {
//     this.Show_FollowUp=true
//     this.main_View=false
//     this.Lead_EditIndex=index
//     this.FollowUp_.Remark="";
//     this.Student_Id=Student_e.Student_Id;
//     this.issLoading = true;
//     this.Student_Service_.Get_Student(Student_e.Student_Id).subscribe(Rows =>{
//     this.Student_= Object.assign({},Rows[0][0]);
//     this.issLoading = false;
//     } ,
//     Rows => {
//     this.issLoading = false;
//     const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
//     });
// }

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

// Search_Department_Status_Typeahead(event: any)
// {
//     var Value = "";
//     if (event.target.value == "")
//         Value = undefined;
//     else
//         Value = event.target.value;
      
//         if(this.FollowUp_Department_==null||this.FollowUp_Department_.Department_Id==undefined)
//         {
//             const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});

//         }
//         else
//         { 
//             if(this.Followup_Status_Data==undefined || this.Followup_Status_Data.length==0)
//             {
//             this.issLoading = true;
//     this.Student_Service_.Search_Department_Status_Typeahead(this.FollowUp_Department_.Department_Id,'').subscribe(Rows => {
 
//         if (Rows != null) {
//             this.Followup_Status_Data = Rows[0];
//             this.issLoading = false;
//         }
//     },
//         Rows => {
//             this.issLoading = false;
//            });
//     }
// }    
// }
display_Followup_Status(Status_: Department_Status) 
{
    if (Status_) { return Status_.Department_Status_Name; }
}

// Search_Department_User_Typeahead(event: any)
// { 
    
//     var Value = "";
//     if (event.target.value == "")
//         Value = undefined;
//     else
//         Value = event.target.value;
       
//         if(this.FollowUp_Department_==null||this.FollowUp_Department_.Department_Id==undefined)
//         {
//             const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class', data:{Message:'Error Occured',Type:"3"}});

//         }
//         else
//         {    
//            if(this.Followup_Users_Data==undefined || this.Followup_Users_Data.length==0)
//            {
//             this.issLoading = true;
//     this.Student_Service_.Search_Department_User_Typeahead(this.FollowUp_Branch_.Branch_Id,this.FollowUp_Department_.Department_Id,'').subscribe(Rows => {
        

//         if (Rows != null) {
//             this.Followup_Users_Data = Rows[0];
//             this.issLoading = false;
//         }

//     },
//         Rows => {
//             this.issLoading = false;
//         });
//     }
// }    
// }

Search_Department_User_Typeahead(event: any) {		
    var Value = "";
    if (event.target.value == "") Value = undefined;
    else Value = event.target.value;
    if (
        this.FollowUp_Department_ == null ||
        this.FollowUp_Department_.Department_Id == undefined
    ) {
        const dialogRef = this.dialogBox.open(DialogBox_Component, {
            panelClass: "Dialogbox-Class",
            data: { Message: "Select Department", Type: "3" },
        });
    } 
    else {
        if (
            this.Followup_Users_Data == undefined ||
            this.Followup_Users_Data.length == 0
        ) {
            this.issLoading = true;
            
            this.Student_Service_.Search_Department_User_Typeahead_New(					
                 this.Branch_Id,
                this.Login_Department ,
                this.Usertype,
                ""
            ).subscribe(
                (Rows) => {
                    if (Rows != null) {
                        this.Followup_Users_Data = Rows[0];
                        this.issLoading = false;
                    }
                },
                (Rows) => {
                    this.issLoading = false;
                    // const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
                }
            );
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
     
   
    // if(this.FollowUp_Branch_==null||this.FollowUp_Branch_.Branch_Id==undefined){
    //     const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Enter Branch', Type: "3" } });
    //     return;
    // }
    // if(this.FollowUp_Department_==null||this.FollowUp_Department_.Department_Id==undefined){
    //     const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Enter Department', Type: "3" } });
    //     return;
    // }
    if(this.FollowUp_Status_==null||this.FollowUp_Status_.Department_Status_Id==undefined){
        const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Enter Status', Type: "3" } });
        return;
    }

    if (
        this.FollowUp_Sub_Status_ == null ||
        this.FollowUp_Sub_Status_ == undefined ||
        this.FollowUp_Sub_Status_.Sub_Status_Id == undefined ||
        this.FollowUp_Sub_Status_.Sub_Status_Id == null
    ) {
        const dialogRef = this.dialogBox.open(DialogBox_Component, {
            panelClass: "Dialogbox-Class",
            data: { Message: "Select Sub Status", Type: "3" },
        });
        return;
    }
    if(this.Followup_Users_==null||this.Followup_Users_.User_Details_Id==undefined){
        const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Enter User', Type: "3" } });
        return;
    }

   if (this.class_ == undefined ||this.class_ == null ||this.class_.Class_Id == undefined ||this.class_.Class_Id == 0)
		 {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {panelClass: "Dialogbox-Class",data: { Message: "Select Class", Type: "3" },});
			return;
		}
   
    if(this.FollowUp_.Next_FollowUp_Date==undefined){
        const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Choose Date', Type: "3" } });
        return;
    }
    else  
    {
          
        var Remarks_Id_temp=0;
        var Remarks_Caption_Temp="";
       
        if( this.Remarks_==null  )
        {
            const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Enter the Remark',Type:"3"}});   
            return;

            //Remarks_Caption_Temp=this.Remarks_.Remarks_Name;
       }
       else if(this.Remarks_.Remarks_Name!=null)
       {
        Remarks_Id_temp=this.Remarks_.Remarks_Id;
        Remarks_Caption_Temp=this.Remarks_.Remarks_Name;
    }
        else
        {
           Remarks_Caption_Temp=String(this.Remarks_);
        }  
        if(Remarks_Caption_Temp==null || Remarks_Caption_Temp=="" )
    {
        const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Enter the Remark',Type:"3"}});   
        return;
    } 


    
    }

var	dateFirst = new Date(this.FollowUp_.Next_FollowUp_Date);
    dateFirst = new Date(dateFirst)
    

    var dateSecond = new Date()
      dateSecond = new Date(dateSecond);
   
     
     //var timeDiff = Math.abs(dateSecond.getDay() - dateFirst.getDay());

     //var timeDiff =0
     const msInDay = 24 * 60 * 60 * 1000;
      this.timeDiff= 
      Math.trunc(Math.abs(dateSecond.getTime() - dateFirst.getTime()) / msInDay);
    var DayDiff = Math.round(Math.abs(dateSecond.getTime() - dateFirst.getTime()))


    //  var addeddate= dateFirst.setDate( dateFirst.getDate() + timeDiff );



      var addeddate = new Date(dateSecond);
     addeddate.setDate(addeddate.getDate() + this.Duration);
      // var addeddate1 = new Date()
      //addeddate1  = new Date(addeddate1);
      var addeddate1 =this.New_Date_followup(new Date(moment(addeddate).format("YYYY-MM-DD")));
    



if((this.Duration < (this.timeDiff)+1 ) && (this.Followup_sub=='1') )
{

const dialogRef = this.dialogBox.open(DialogBox_Component, {
    panelClass: "Dialogbox-Class",
    data: { Message: "Select Date Upto " + addeddate1, Type: "3" },
});
return;
}





{
this.Student_.Remark_Id=Remarks_Id_temp;
this.Student_.Remark=Remarks_Caption_Temp;     
//this.Student_.Branch= this.FollowUp_Branch_.Branch_Id;
//this.Student_.Department= this.FollowUp_Department_.Department_Id;
this.Student_.Status=this.FollowUp_Status_.Department_Status_Id;
this.Student_.Department_Status_Name =this.FollowUp_Status_.Department_Status_Name;
this.Student_.Next_FollowUp_Date= this.New_Date(new Date(moment(this.FollowUp_.Next_FollowUp_Date).format('YYYY-MM-DD')));
this.Student_.User_Id= this.Followup_Users_.User_Details_Id;

this.Student_.Class_Id=this.class_.Class_Id;
this.Student_.Class_Name=this.class_.Class_Name;
this.Student_.Sub_Status_Id=this.FollowUp_Sub_Status_.Sub_Status_Id;
this.Student_.Sub_Status_Name=this.FollowUp_Sub_Status_.Sub_Status_Name;
this.Student_.Branch_Name= this.FollowUp_Branch_.Branch_Name;
this.Student_.Department_Name= this.FollowUp_Department_.Department_Name;

this.Student_.Branch= this.FollowUp_Branch_.Branch_Id;
this.Student_.Department= this.FollowUp_Department_.Department_Id;


this.Student_.By_User_Id= parseInt(this.Login_User)
this.Student_.By_User_Name=this.Login_User_Name;
this.Student_.To_User_Name= this.Followup_Users_.User_Details_Name;

this.Student_.Department_FollowUp =this.FollowUp_Department_.Department_FollowUp;
 
var Student_Deatils=[];
this.Student_.Student_Id=this.Student_Id;

document.getElementById('Save_Button').hidden=true;
this.issLoading=true;
 

this.Student_Service_.Save_FollowUp(this.Student_).subscribe(Save_status => {
        this.issLoading=false;
              
   
  // log(Save_status[0][0])
if(Number(Save_status[0][0].Student_Id_)>0)
{   
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Saved',Type:"false"}});
        this.Close_Click();
        this.Search_Student_Report();
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
    this.Lead_EditIndex=-1;
    this.Show_FollowUp=false;
    this.main_View=true
    this.Select_Student=false;
    this.Select_View=false;
    this.FollowUp_Branch_=null
    this.FollowUp_Department_=null
    this.FollowUp_Status_=null
    this.FollowUp_Sub_Status_=null
    this.Followup_Users_=null
    this.Remarks_=null;
    this.Student_.Next_FollowUp_Date=null;
    // this.View_History_=false;
    this.Show_Followup_History=true; 
    
    if (
        this.class_Data != null &&
        this.class_Data != undefined
        )
        this.class_ = this.class_Data[0];
}
Followup_History()
{
   
     this.Student_Id=this.Student_Data_Search[this.Lead_EditIndex].Student_Id;
     let top = document.getElementById('Bottomdiv');
     if (top !== null) {
     top.scrollIntoView();
     top = null;
     }
    if(this.Show_Followup_History==true)
    {
        this.Show_Followup_History = false;
        this.issLoading = true;

        this.Student_Service_.Followup_History(this.Student_Id).subscribe(Rows =>
             {
                 
           
            this.issLoading = false;
            if (Rows.returnvalue.FollowUp.length > 0)
                this.Followp_History_Data = Rows.returnvalue.FollowUp;

        },
            Rows => {
                this.issLoading = false;
                const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Error Occured', Type: "2" } });
            });
    }
   
    else
    this.Show_Followup_History=true

}


Search_Department_Status_Typeahead(event: any) {
    var Value = "";
    if (event.target.value == "") Value = undefined;
    else Value = event.target.value;

    if (
        this.FollowUp_Department_ == null ||
        this.FollowUp_Department_.Department_Id == undefined
    ) {
        const dialogRef = this.dialogBox.open(DialogBox_Component, {
            panelClass: "Dialogbox-Class",
            data: { Message: "Select Department", Type: "3" },
        });
    } else {
        if (
            this.Followup_Status_Data == undefined ||
            this.Followup_Status_Data.length == 0
        ) {
            this.issLoading = true;
            
            this.Student_Service_.Search_Department_Status_Typeahead(
                this.FollowUp_Department_.Department_Id,
                ""
            ).subscribe(
                (Rows) => {
                    if (Rows != null) {
                        
                        this.Followup_Status_Data = Rows[0];
                        this.issLoading = false;
                    }
                },
                (Rows) => {
                    this.issLoading = false;
                }
            );
        }
    }
}

Search_Substatus_Typeahead(event: any) {

		
    var Value = "";
    // if (event.target.value == "") Value = "";
    // else Value = event.target.value.toLowerCase();
    if (this.FollowUp_Status_.Department_Status_Id == undefined ||this.FollowUp_Status_.Department_Status_Id == 0) {
    const dialogRef = this.dialogBox.open(DialogBox_Component, {
    panelClass: "Dialogbox-Class",
    data: { Message: "Select Status ", Type: "3" },
    });
    return;
    } else if (
    this.Followup_Substatus_Data == undefined ||
    this.Followup_Substatus_Data.length == 0
    ) {
    this.issLoading = true;
    

// if (this.transfer_typeahead==true){

// 	this.sub_typeahead=this.Transfer_Status_.Department_Status_Id;
// }

// else

this.sub_typeahead=this.FollowUp_Status_.Department_Status_Id;



    this.Student_Service_.Search_Substatus_Typeahead(
    
    this.sub_typeahead,""
    ).subscribe(

    (Rows) => {
        
    if (Rows != null) {
        
    this.Followup_Substatus_Data = Rows[0];
    
    this.Followup_Substatus_Data_Filter = [];
    this.issLoading = false;
    for (var i = 0; i < this.Followup_Substatus_Data.length; i++) {
    if (
    this.Followup_Substatus_Data[
    i
    ].Sub_Status_Name.toLowerCase().includes(Value)
    )
    this.Followup_Substatus_Data_Filter.push(
    this.Followup_Substatus_Data[i]
    );
    }
    }
    },
    (Rows) => {
    this.issLoading = false;
    }
    );
    } else {
    this.Followup_Substatus_Data_Filter = [];
    for (var i = 0; i < this.Followup_Substatus_Data.length; i++) {
    if (
    this.Followup_Substatus_Data[i].Sub_Status_Name.toLowerCase().includes(
    Value
    )
    )
    this.Followup_Substatus_Data_Filter.push(this.Followup_Substatus_Data[i]);
    }
    }
    }


    display_Sub_Status(Sub_Status_tr: Sub_Status) {
		if (Sub_Status_tr) {
			return Sub_Status_tr.Sub_Status_Name;
		}
	}

    datepickershow(Status)
		{
			

			this.Followup_sub=Status.FollowUp;
			this.Duration=Status.Duration;

		}



        New_Date_followup(Date_) {
		
            this.date = Date_;
            this.day = this.date.getDate().toString();
            this.month = this.date.getMonth() + 1;
            this.year = this.date.getFullYear();
        
            if (this.month < 10) {
                this.month = "0" + this.month;
            }
            
            if (Number.parseInt(this.day) < 10) {
                this.day = "0" + this.day;
            }
            
            this.date = this.day + "-" + this.month + "-" + this.year;
            return this.date;
        }
    



        Get_Student_PageLoadData_Dropdowns() {
            this.Student_Service_.Get_Student_PageLoadData_Dropdowns().subscribe(
                (Rows) => {    
                    console.log('Rows: ', Rows);
    
                    this.class_Data = Rows[14].slice();
                    this.class_Temp.Class_Id = 0;
                    this.class_Temp.Class_Name = "Select";
                    this.class_Data.unshift(Object.assign({}, this.class_Temp));
                    this.class_ = this.class_Data[0];
                    //this.Class_Search = this.class_Data[0];

                    this.Country_Data = Rows[30].slice();
                    this.Country_Temp.Country_Id = 0;
                    this.Country_Temp.Country_Name = "Country";
                    this.Country_Data.unshift(Object.assign({}, this.Country_Temp));
                    this.Country_ = this.Country_Data[0];

                    this.Level_Detail_Data = Rows[24];
                    this.Level_Detail_Temp.Level_Detail_Id = 0;
                    this.Level_Detail_Temp.Level_Detail_Name = "Level";
                    this.Level_Detail_Data.unshift(this.Level_Detail_Temp);
                    this.Level_Detail_ = this.Level_Detail_Data[0];
            
                    this.Intake_Data = Rows[2];
                    this.Intake_Temp.Intake_Id = 0;
                    this.Intake_Temp.Intake_Name = "Intake";
                    this.Intake_Data.unshift(this.Intake_Temp);
                    this.Intake_ = this.Intake_Data[0];
    
                    
                },
                (Rows) => {
                    const dialogRef = this.dialogBox.open(DialogBox_Component, {
                        panelClass: "Dialogbox-Class",
                        data: { Message: "Error Occured", Type: "2" },
                    });
                }
            );
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

          clr_course_search()
          {
            if (this.Country_Data != null && this.Country_Data != undefined)
                this.Country_ = this.Country_Data[0];

            this.clearApplication()
          }


          

Public_Search_Course()
{
  console.log("Public_Search_Course");
  debugger
  var Level_Detail_Id=0,Country_Id=0,Intake_Id=0, Status_Selection='',
   Duration_Selection='',Ielts_Id=0,Sub_Section_Id=0,University=0,Subject_1=0,Intake_Year_Id=0;
if (this.Level_Detail_ != undefined && this.Level_Detail_!=null)
  if (this.Level_Detail_.Level_Detail_Id != undefined && this.Level_Detail_.Level_Detail_Id != null)
  Level_Detail_Id = this.Level_Detail_.Level_Detail_Id;

  if (this.Country_ != undefined && this.Country_!=null)
  if (this.Country_.Country_Id != undefined && this.Country_.Country_Id != null)
  Country_Id = this.Country_.Country_Id; 

  if (this.Intake_ != undefined && this.Intake_!=null)
  if (this.Intake_.Intake_Id != undefined && this.Intake_.Intake_Id != null)
  Intake_Id = this.Intake_.Intake_Id;

  if (this.Ielts_ != undefined && this.Ielts_!=null)
  if (this.Ielts_.Ielts_Id != undefined && this.Ielts_.Ielts_Id != null)
  Ielts_Id = this.Ielts_.Ielts_Id;

  if (this.Intake_Year_ != undefined && this.Intake_Year_!=null)
    if (this.Intake_Year_.Intake_Year_Id != undefined && this.Intake_Year_.Intake_Year_Id != null)
        Intake_Year_Id = this.Intake_Year_.Intake_Year_Id;

  if (this.UniversityNew_ != undefined && this.UniversityNew_ != null)
    if (this.UniversityNew_.University_Id != undefined && this.UniversityNew_.University_Id != null)
      University = this.UniversityNew_.University_Id;

    //   for (var i=0;i<this.Subject_Data.length;i++)
    //   {
    //     if(this.Subject_Data[i].Selection==true)
    //       Status_Selection=Status_Selection + this.Subject_Data[i].Subject_Id.toString() +",";
    //   }
    //   if(Status_Selection.length>0)
    //       Status_Selection=Status_Selection.substring(0,Status_Selection.length-1)
   
    //   for (var i=0;i<this.Duration_Data.length;i++)
    //   {
    //     if(this.Duration_Data[i].Selection==true)
    //     Duration_Selection=Duration_Selection + this.Duration_Data[i].Duration_Id.toString() +",";
    //   }
    //   if(Duration_Selection.length>0)
    //     Duration_Selection=Duration_Selection.substring(0,Duration_Selection.length-1)
          
          this.issLoading = true;
          
          this.Course_Search_Service_.Public_Search_Course(Level_Detail_Id,Country_Id,
            Intake_Id,Sub_Section_Id,this.Course_Name,Status_Selection,Duration_Selection,
            Ielts_Id,this.Page_Start,this.Page_End,this.Page_Length,
            University,Subject_1,Intake_Year_Id).subscribe(Rows => {
          debugger
          this.Course_Search_view_result=true;
        this.Course_Data=Rows[0];
        console.log(this.Course_Data,'d1')
        var course_ength=this.Course_Data.length;
        if(Rows[0][0].Course_Id>0)
        {
          this.next_previous = true;
          
        this.Courses_Found = this.Course_Data[0].Course_Id


        this.Courses_Found1 = this.Courses_Found+1;
debugger
        // this.Course_Data.splice(this.Course_Data.length-1)
        this.Course_Data.splice(0, 1);

        // console.log(this.Course_Data,'d2')
        this.Pages = this.Courses_Found/this.Page_Length ;
        this.Total_Pages=Math.trunc( this.Pages);
        if(this.Pages>this.Total_Pages)
        {
            this.Total_Pages = Number(  this.Total_Pages ) + 1;
        } 


        if(this.Total_Pages>1){
            this.Courses_Found2 = this.Courses_Found1;
        }
        else{
            this.Courses_Found2 = this.Courses_Found1-1;

        }
      
        }
        else{
      
          const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'No Details Found',Type: "3" }});
          this.Course_Search_view_result=false;
        }
      
        this.issLoading = false;
      
       
       
         },
         Rows => { 
          this.issLoading = false;
       // const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
         });
      }


      
      Country_Change()
      {

        debugger
    
       
            this.issLoading = true;
            this.Course_Search_Service_.Country_Change_Dropdowns(this.Country_.Country_Id).subscribe(
            (Rows) => {
            if (Rows != null) {
                debugger
                this.UniversityNew_Data = Rows[0].slice();
                this.University_Temp.University_Id = 0;
                this.University_Temp.Country_Id = 0;
                this.University_Temp.University_Name = "University";
                this.UniversityNew_Data.unshift(Object.assign({}, this.University_Temp));
                this.UniversityNew_ = this.UniversityNew_Data[0];;
            
            this.issLoading = false;
            }
            },
            (Rows) => {
            this.issLoading = false;
            }
            );
            

      }

      Public_Search_Course_Click() {
    
        this.Page_Start = 0;
        this.Page_End = this.Page_Length;
    
        this.Pointer_Start_ = 1;
        this.Pointer_Stop_Course = this.Page_Length;
        this.Red_Start_Course = 1;
        this.Total_Rows_Course = 0;
        this.Red_Stop_Course = this.Page_Length;
        this.Start = 1;
        this.Public_Search_Course();
    }

    Application_Search(){
        this.Course_Search_view=true;
        this.Course_Selection_Data=[];
        this.clearApplication();
    }
    
clearApplication() {
  
    this.Course_Name=""
    
    
        if (this.Intake_Data != null && this.Intake_Data != undefined)
                this.Intake_ = this.Intake_Data[0];
       
       
                if (this.Level_Detail_Data != null && this.Level_Detail_Data != undefined)
                this.Level_Detail_ = this.Level_Detail_Data[0];
       
                if (this.Country_Data != null && this.Country_Data != undefined)
                this.Country_ = this.Country_Data[0];
      }
    
      Next_Click1()
      { 
          
          if (this.Course_Data.length == this.Page_Length) {
        
        if(this.Start!=this.Total_Pages){
          this.Page_Start = this.Page_Start + this.Page_Length;
          this.Page_End = this.Page_End+ this.Page_Length;
          this.Start =Number(this.Start)+1; 
          if (this.Course_Data.length > 0)
      {
          
      this.Public_Search_Course();
      }
        }
        else{
          const dialogRef = this.dialogBox.open(DialogBox_Component, {
              panelClass: "Dialogbox-Class",
              data: { Message: "No Other Details", Type: "3" },
          });
        }
      }
      
      else{
        const dialogRef = this.dialogBox.open(DialogBox_Component, {
            panelClass: "Dialogbox-Class",
            data: { Message: "No Other Details", Type: "3" },
        });
      }
      }
      previous_Click1() 
      {
      
      if(this.Course_Data!=undefined)
      if (  this.Page_Start > 0 ) 
      { 
          this.Page_Start = this.Page_Start - this.Page_Length;
          this.Page_End = this.Page_End - this.Page_Length;
          this.Start =Number(this.Start)-1;
          this.Total_Rows_Course =
                      this.Total_Rows_Course -
                      this.Course_Data.length -
                      this.Page_Length;
                  this.Public_Search_Course();
      }
      else{
          
          const dialogRef = this.dialogBox.open(DialogBox_Component, {
              panelClass: "Dialogbox-Class",
              data: { Message: "No Other Details", Type: "3" },
          });
      }
      
      
      }

}

