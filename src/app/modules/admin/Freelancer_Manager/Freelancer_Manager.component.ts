// import { Component, OnInit, Input, Injectable } from '@angular/core';
// import { Department_Service } from '../../../services/Department.Service';
// import { DialogBox_Component } from '../DialogBox/DialogBox.component';

// import { Student } from '../../../models/Student';
// import { Department_Status } from '../../../models/Department_Status';
// import { ActivatedRoute, Router } from '@angular/router';
// import { ROUTES,Get_Page_Permission } from '../../../components/sidebar/sidebar.component'
// import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material';
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
selector: 'app-Freelancer_Manager',
templateUrl: './Freelancer_Manager.component.html',
styleUrls: ['./Freelancer_Manager.component.css'],
providers: [
{provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
{provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
],
})

export class Freelancer_ManagerComponent implements OnInit {
    Status_Search: Department_Status = new Department_Status();
    User_Search: User_Details = new User_Details();
    Agent_Search: User_Details = new User_Details();
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
    

    Student_: Student = new Student();
    myTotalHeight:number;

    Lead_Data: Student[]
    Student_Data_Search: Student[]
    Lead_: Student = new Student();
    // Search_Div: boolean = true;
    Search_Div: boolean = false;
    freelancer_manager_div:boolean =true;
    Summary_Div: boolean = false;
    
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
    Menu_Id: number = 164;
    Total_Data:number=0
    Total_Entries:number=0

    Search_Status: Department_Status = new Department_Status();

    Select_Student1: boolean = false;
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

    Export_Permission:any
    Export_View:boolean=false
    Graph:boolean=false;
    Summary_Sub:boolean=true;

    Delete_Permission: any;
    // Export_View: boolean = false;
    Student_Report_Delete_Button:boolean=false;


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
    Missed_follow:number=0;
    User_Type: string;

    /** Added on 23-07-2024 */
    User_Search1: User_Details = new User_Details();
    To_User_Search1: User_Details = new User_Details();
    Total_Students:number = 0;

    /** Added on 31-07-2024  */

    Users_Data1: User_Details[]
    Users_Data12: User_Details[]
    Users_Temp1: User_Details = new User_Details();
    Agent_Search1: User_Details = new User_Details();
    Freelancer_Manager_User_Id : number = 0;
    Total_Students1: number = 0;
    Total_Entries1: number =0
    Freelancer_User_Id : number = 0
Select_View_Check: any;

 
constructor(public Student_Service_:Student_Service, private route: ActivatedRoute, private router: Router,public dialogBox: MatDialog) 
{   }
ngOnInit() 
{
  
    this.Login_User = localStorage.getItem("Login_User");
    this.User_Type= localStorage.getItem("User_Type");
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
    debugger
    this.myInnerHeight = (window.innerHeight);
    this.myInnerHeight = this.myInnerHeight - 230;
    
    this.Black_Stop = this.Page_Length_;
    this.Red_Stop = this.Page_Length_;
    // this.Search_Div=true
    this.freelancer_manager_div=true;
    this.Search_Div=false
    this.Summary_Div=false
    // this.Get_Lead_Load_Data();
    this.Get_Menu_Status(164,this.Login_User);
    this.Get_Menu_Status(38,this.Login_User);

    this.Get_Lead_Load_Data_ByUser(this.Login_User);

    
    //this.Search_By_=1;
   // this.Registered_By_ = 1;
  

   this.Freelancer_manager_search();
    // this.FollowUp_Summary();
    this.Search_FromDate = this.New_Date(this.Search_FromDate);
    this.Search_ToDate = this.New_Date(this.Search_ToDate);
    
    this.myInnerHeight = (window.innerHeight);
    this.myTotalHeight=this.myInnerHeight -230;
    this.myTotalHeight=this.myTotalHeight-40;
    this.myInnerHeight = this.myInnerHeight - 230;
}

Get_Menu_Status(Menu_id, Login_user_id)
{
    debugger
this.issLoading = false;
this.Student_Service_.Get_Menu_Status(Menu_id,Login_user_id).subscribe(Rows => {            

    debugger
    // if(Menu_id==17)

    if (Rows[0][0]==undefined)
    {
        if(Menu_id==164)
        {
          
        localStorage.removeItem('token');
        this.router.navigateByUrl('Freelancer_Student_Details');
        }
    }  
    else
    // if (Rows[0][0]!=undefined)

    if (Rows[0][0].View >0) 
    {
        if(Menu_id==164)
        {
            this.Permissions=Rows[0][0];
            if(this.Permissions==undefined || this.Permissions==null)
                {
                    localStorage.removeItem('token');
                    this.router.navigateByUrl('Freelancer_Student_Details');
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
        else if (Menu_id == 131) {
                   
            this.Delete_Permission = Rows[0][0];

        //     if (
        //         this.Delete_Permission != undefined &&
        //         this.Delete_Permission != null
        //     )
        //         this.Student_Report_Delete_Button = this.Delete_Permission.View;
        //     else this.Student_Report_Delete_Button = true;
        // }

        if (this.Delete_Permission.View == true)
                    this.Student_Report_Delete_Button = true;
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



Delete_Student() {
        
    var Status = false;
    for (var m = 0; m < this.Student_Data_Search.length; m++) {
        if (Boolean(this.Student_Data_Search[m].Check_Box_View) == true)
            Status = true;
    }
    if (Status == false) {
        const dialogRef = this.dialogBox.open(DialogBox_Component, {
            panelClass: "Dialogbox-Class",
            data: { Message: "Select Students ", Type: "3" },
        });
        return;
    }

    var Student_Deatils = [];
    const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: {
            Message: "Do you want to delete ?",
            Type: "true",
            Heading: "Confirm",
        },
    });
    dialogRef.afterClosed().subscribe((result) => {
        
        if (result == "Yes") {
            for (var m = 0; m < this.Student_Data_Search.length; m++) {
                if (Boolean(this.Student_Data_Search[m].Check_Box_View) == true) {
                    //Status=true
                    //this.Student_Selection_Data_Temp.push(this.Student_Data[m]);
                    Student_Deatils.push({
                        Student_Id: this.Student_Data_Search[m].Student_Id,
                    });
                }
            }
            this.issLoading = true;
            this.Student_.Delete_Data_Details = Student_Deatils;
            this.Student_Service_.Delete_Student_Report1(this.Student_).subscribe(
                (Delete_Status) => {
                    
                    this.issLoading = false;
                    if (Number(Delete_Status[0][0].Student_Id_J) > 0) {
                        const dialogRef = this.dialogBox.open(DialogBox_Component, {
                            panelClass: "Dialogbox-Class",
                            data: { Message: "Deleted", Type: "false" },
                        });
                        this.Pending_FollowUp(this.Freelancer_User_Id);
                        // this.Search_Student_Report();
                    }
                },
                (Rows) => {
                    this.issLoading = false;

                    const dialogRef = this.dialogBox.open(DialogBox_Component, {
                        panelClass: "Dialogbox-Class",
                        data: { Message: "Error Occured", Type: "2" },
                    });
                }
            );
        }
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
    debugger
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

    Student_View_Click() {
        for (var i = 0; i < this.Student_Data_Search.length; i++) {
            if (this.Select_Student1 == false)
                this.Student_Data_Search[i].Check_Box_View = true;
            else this.Student_Data_Search[i].Check_Box_View = false;
        }
    }
Search_Lead_button(Freelancer_Manager_User_Id) 
{debugger
    this.Black_Start =1;
    this.Black_Stop = this.Page_Length_;
    this.Red_Start = 1;
    this.Total_Rows=0;
    this.Red_Stop = this.Page_Length_;
    this.FollowUp_Summary(Freelancer_Manager_User_Id);
}

Search_Lead_button3() 
{debugger
    this.Black_Start =1;
    this.Black_Stop = this.Page_Length_;
    this.Red_Start = 1;
    this.Total_Rows=0;
    this.Red_Stop = this.Page_Length_;
    this.Freelancer_manager_search();
}


Delete_Student_freelancer(Student_Id,index)
{
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Do you want to delete ?',Type:true,Heading:'Confirm'}});
this.Pending_FollowUp(this.Freelancer_User_Id);
dialogRef.afterClosed().subscribe(result =>
{
if(result=='Yes')
{
this.issLoading=true;
debugger
  this.Student_Service_.Delete_Student_freelancer(Student_Id).subscribe(
    (response) => {
        debugger
        this.issLoading = false;
        const result = response[0][0].result;

        if (result == 1) {
            // If result is 1, student is deleted
            console.log('response[0][0].result: ', result);
            const dialogRef = this.dialogBox.open(DialogBox_Component, {
                panelClass: "Dialogbox-Class",
                data: { Message: "Deleted", Type: "false" },
            });
            this.Pending_FollowUp(this.Freelancer_User_Id);
            // this.Search_Student_Report();
        } else if (result == -1) {
            // If result is -1, show error message
            const dialogRef = this.dialogBox.open(DialogBox_Component, {
                panelClass: "Dialogbox-Class",
                data: { Message: "Student can't be deleted", Type: "2" },
            });
        }
    },
    (error) => {
        this.issLoading = false;

        const dialogRef = this.dialogBox.open(DialogBox_Component, {
            panelClass: "Dialogbox-Class",
            data: { Message: "Error Occurred", Type: "2" },
        });
    }
);
}
});
}

Search_Lead_button2() 
{debugger
    this.Black_Start =1;
    this.Black_Stop = this.Page_Length_;
    this.Red_Start = 1;
    this.Total_Rows=0;
    this.Red_Stop = this.Page_Length_;
    // this.FollowUp_Summary();
this.Pending_FollowUp(this.Freelancer_User_Id)
}
Search_More_Options()
{debugger
    if (this.More_Search_Options == true)
    this.More_Search_Options = false;
    else
    this.More_Search_Options = true;
}
View_Back(){
    debugger
    // this.Department_Search.Department_Name="All";
    // this.User_Search.User_Details_Name=null;
    // this.Search_Branch.Branch_Name="All"
    // this.Get_Lead_Load_Data_ByUser(this.Login_User);
    if(this.Users_Data12!=null && this.Users_Data12 != undefined)
        {
            this.To_User_Search1=this.Users_Data12[0];
        }
    
    this.Search_Div=true;
    this.Summary_Div=false;
    this.freelancer_manager_div = false;

    // if(this.Users_Data1!=null && this.Users_Data1 != undefined)
    // {this.Agent_Search1=this.Users_Data1[0];}
    this.Freelancer_User_Id = 0
    this.FollowUp_Summary(this.Freelancer_Manager_User_Id);
}

// View_Details_Click(User_Details_Id){
//     //this.issLoading =true;
    
//     for (var i = 0; i < this.Users_Data.length; i++) {
//         if (User_Details_Id== this.Users_Data[i].User_Details_Id)
//         this.User_Search=this.Users_Data[i];
//     }
//     this.Search_Work_report(User_Details_Id);
// }
Export()
{
        this.Student_Service_.exportExcel(this.Student_Data_Search,'freelancer manager')

}
Details_Button(User_Details_Id){
    debugger
    // for (var i = 0; i < this.Users_Data.length; i++) {
    //     if (User_Details_Id== this.Users_Data[i].User_Details_Id)
    //     this.User_Search=this.Users_Data[i];
    // }
    
    this.Freelancer_User_Id = User_Details_Id;
    this.Pending_FollowUp(this.Freelancer_User_Id);
 }


 Details_Button_Manager(User_Details_Id){
    debugger
    for (var i = 0; i < this.Users_Data.length; i++) {
        if (User_Details_Id== this.Users_Data[i].User_Details_Id)
        this.User_Search=this.Users_Data[i];
// this.Agent_Search=this.Users_Data[i];
        
    }
    
    this.Freelancer_Manager_User_Id = User_Details_Id
    this.FollowUp_Summary(this.Freelancer_Manager_User_Id);
 }
Pending_FollowUp(User_Id)
{
    debugger
    this.freelancer_manager_div=false;
    this.Search_Div=false
    this.Summary_Div=true
    this.Graph=false
    this.missedfollowup_count =0;
var value = 1, dept_id=0,search_name_='0',look_In_Date_Value=0,branch_id=0,To_User_Id1=0, Department_Status_Id = 0;
    if(this.Search_By_!=undefined && this.Search_By_!=null)
    if (this.Search_By_ != undefined && this.Search_By_ != null && this.Search_By_ != '')
    value=this.Search_By_;

    if (this.Look_In_Date == true )
    look_In_Date_Value = 1;

    if (this.Search_Name != undefined && this.Search_Name != null && this.Search_Name != '')
    search_name_ = this.Search_Name;

    // for (var i = 0; i < this.Users_Data.length; i++) {
    //     if (User_Id== this.Users_Data[i].User_Details_Id)
    //     this.Agent_Search=this.Users_Data[i];
    // }
    // if (this.Agent_Search != undefined && this.Agent_Search!=null)
    // if (this.Agent_Search.User_Details_Id != undefined && this.Agent_Search.User_Details_Id != null)
    //  User_Id = this.Agent_Search.User_Details_Id;

    if (this.To_User_Search1 != undefined && this.To_User_Search1!=null)
        if (this.To_User_Search1.User_Details_Id != undefined && this.To_User_Search1.User_Details_Id != null)
        To_User_Id1 = this.To_User_Search1.User_Details_Id;

    if (this.Department_Search != undefined && this.Department_Search != null)
    if (this.Department_Search.Department_Id != undefined && this.Department_Search.Department_Id != null)
    dept_id = this.Department_Search.Department_Id;


    if (this.Search_Status != undefined && this.Search_Status != null)
        if (
            this.Search_Status.Department_Status_Id != undefined &&
            this.Search_Status.Department_Status_Id != null
        )
            Department_Status_Id = this.Search_Status.Department_Status_Id;

    // if (this.Search_Branch != undefined && this.Search_Branch != null)
    // if (this.Search_Branch.Branch_Id != undefined && this.Search_Branch.Branch_Id != null)
    // branch_id = this.Search_Branch.Branch_Id;

    this.Freelancer_Manager_User_Id = this.User_Search.User_Details_Id;
    this.issLoading = true;
    debugger
    this.Student_Service_.Freelancer_Report_Search_Sub_Page(moment(this.Search_FromDate).format('YYYY-MM-DD'), moment(this.Search_ToDate).format('YYYY-MM-DD'), 
    value, search_name_,dept_id,branch_id,To_User_Id1,User_Id,look_In_Date_Value,this.Login_User,this.Freelancer_Manager_User_Id,Department_Status_Id)
.subscribe(Rows => 
{
    debugger
    //log(Rows)
    this.Student_Data_Search = Rows.returnvalue.Leads;
    this.Total_Data= this.Student_Data_Search.length
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


FollowUp_Summary(User_Id)
{
    debugger
    this.freelancer_manager_div=false;
    this.Search_Div=true
    this.Summary_Div=false
    // this.Summary_Sub=true
    // var User_Id=0;
    this.Missed_follow=0;
    this.Graph=false
    var User_Id1 = 0
    // var User_Id2=0
    if (this.User_Search != undefined && this.User_Search!=null)
        if (this.User_Search.User_Details_Id != undefined && this.User_Search.User_Details_Id != null)
            User_Id = this.User_Search.User_Details_Id;
    // this.User_Search.User_Details_Id=this.Agent_Search.User_Details_Id;



    if (this.Agent_Search1 != undefined && this.Agent_Search1!=null)
    if (this.Agent_Search1.User_Details_Id != undefined && this.Agent_Search1.User_Details_Id != null)
    User_Id1 = this.Agent_Search1.User_Details_Id;

    this.issLoading = true;
    
    this.Student_Service_.Freelancer_Summary_Search_Sub_Page(User_Id,this.Login_User,User_Id1)
.subscribe(Rows => 
{
    debugger
    //log(Rows)
    this.Student_Data_Search = Rows.returnvalue.Leads;
    this.Total_Entries1=this.Student_Data_Search.length
    this.Total_Students1=0;
    for(var h = 0;h<this.Total_Entries1;h++)
    {
        this.Total_Students1 += this.Student_Data_Search[h].Count;
    }
    console.log('total_students: ',this.Total_Students1);
    this.issLoading = false;
    this.Missed_follow=0;
    var Branchwise_data_temp = Rows.returnvalue.Leads;
    var data= Rows.returnvalue.Leads;
    for (var j=0;j<data.length;j++){
        this.Missed_follow=Number( this.Missed_follow)+Number(data[j].Pending)
    }
    this.issLoading = false;
    var result = [];
     this.Branchwise_columnNames=[];
    for (var i in Branchwise_data_temp)
    {
        result.push([Branchwise_data_temp[i].To_Staff, Branchwise_data_temp[i].Pending]);
    } 
   // var data_temp = new google.visualization.DataTable(result)
    this.Branchwise_columnNames.push('User_Details_Name')
    this.Branchwise_columnNames.push('Missed_FollowUp')
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

Freelancer_manager_search()
{
    debugger
    this.freelancer_manager_div=true;
    this.Search_Div=false;
    this.Summary_Div=false
    this.Summary_Sub=true
    var User_Id=0;
    this.Missed_follow=0;
    this.Graph=false
    
    if (this.Agent_Search != undefined && this.Agent_Search!=null)
    if (this.Agent_Search.User_Details_Id != undefined && this.Agent_Search.User_Details_Id != null)
    User_Id = this.Agent_Search.User_Details_Id;

    this.issLoading = true;
    
    this.Student_Service_.Freelancer_Manager_Search_data_Details(User_Id,this.Login_User)
.subscribe(Rows => 
{
    debugger
    //log(Rows)
    this.Student_Data_Search = Rows.returnvalue.Leads;
    this.Total_Entries=this.Student_Data_Search.length
    this.Total_Students=0;
    for(var h = 0;h<this.Total_Entries;h++)
    {
        this.Total_Students += this.Student_Data_Search[h].Count;
    }
    console.log('total_freelancer: ',this.Total_Students);
    this.issLoading = false;
    this.Missed_follow=0;
    var Branchwise_data_temp = Rows.returnvalue.Leads;
    var data= Rows.returnvalue.Leads;
    for (var j=0;j<data.length;j++){
        this.Missed_follow=Number( this.Missed_follow)+Number(data[j].Pending)
    }
    this.issLoading = false;
    var result = [];
     this.Branchwise_columnNames=[];
    for (var i in Branchwise_data_temp)
    {
        result.push([Branchwise_data_temp[i].To_Staff, Branchwise_data_temp[i].Pending]);
    } 
   // var data_temp = new google.visualization.DataTable(result)
    this.Branchwise_columnNames.push('User_Details_Name')
    this.Branchwise_columnNames.push('Missed_FollowUp')
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
    {debugger
        
        this.issLoading = true;
        this.Student_Service_.Get_Lead_Load_Data_ByUser(Login_User).subscribe(Rows => 
        
    {debugger
     
    
      this.Department_Data = Rows[15].slice();
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



   this.Users_Data = Rows[13].slice();
   this.Users_Temp.User_Details_Id = 0;
   this.Users_Temp.User_Details_Name = "All";
   this.Users_Data.unshift(Object.assign({},this.Users_Temp));
   this.Agent_Search = this.Users_Data[0];


   this.Users_Data = Rows[13].slice();
   this.Users_Temp.User_Details_Id = 0;
   this.Users_Temp.User_Details_Name = "All";
   this.Users_Data.unshift(Object.assign({},this.Users_Temp));
   this.User_Search = this.Users_Data[0];


   this.Users_Data1 = Rows[14].slice();
   this.Users_Temp1.User_Details_Id = 0;
   this.Users_Temp1.Agent_Name = "All";
   this.Users_Data1.unshift(Object.assign({},this.Users_Temp1));
   this.Agent_Search1 = this.Users_Data1[0];

   this.Users_Data12 = Rows[16].slice();
   this.Users_Temp1.User_Details_Id = 0;
   this.Users_Temp1.User_Details_Name = "All";
   this.Users_Data12.unshift(Object.assign({},this.Users_Temp1));
   this.User_Search1 = this.Users_Data12[0];
   this.To_User_Search1= this.Users_Data12[0];


// this.FollowUp_Summary();
},
Rows => { 
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}}); });
}



Next_Click()
{debugger
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
        this.Pending_FollowUp(this.User_Search.User_Details_Id);
    }
}
}
previous_Click()
{debugger
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
    this.Pending_FollowUp(this.User_Search.User_Details_Id);
}
}   

Graph_View(){
    debugger
    this.Graph=true
    this.Summary_Sub=false
}


checkDepartmentCount(Student_Id: number, i: number) {
    debugger;
    this.Student_Service_.Get_Student_Edit_check(Student_Id).subscribe(
        (response: any) => {
            debugger;
            console.log('API Response: ', response);
            const departmentCount = response[0][0].department_count;
            const application_count = response[0][0].application_count
            if (departmentCount > 1 || application_count>0) {
                this.dialogBox.open(DialogBox_Component, {
                    panelClass: 'Dialogbox-Class',
                    data: { Message: 'Cannot edit the  student', Type: "2" }
                });
            } else {
                this.Edit_Student_Notification(Student_Id, i);
            }
        },
        (error) => {
            console.error('Error fetching student data', error);
            this.dialogBox.open(DialogBox_Component, {
                panelClass: 'Dialogbox-Class',
                data: { Message: 'Error fetching student data', Type: "2" }
            });
        }
    );
}

Edit_Student_Notification(Student_Id, i) {
    debugger
    localStorage.setItem('Student_Id', Student_Id);
    console.log(Student_Id)
    this.Edit_Page_Permission = Get_Page_Permission(5);
    if (this.Edit_Page_Permission == undefined) {
        const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'No permission to view', Type: "2" } });
    }
    else if (this.Edit_Page_Permission.View == true){
        this.router.navigate(['/Student']);
       // this.router.navigateByUrl('/Stu');
      // window.open('/Student')
      this.goToLink();}
    else {
        const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'No permission to view', Type: "2" } });
    }
}

// Edit_Student_Notification(Student_Id: number, i: number) {
//     debugger;
//     localStorage.setItem('Student_Id', Student_Id.toString());
//     console.log(Student_Id);
//     debugger;
    
//     // Make API call to get student details and perform required actions
//     this.Student_Service_.Get_Student_Edit_check(Student_Id).subscribe(
//         (response: any) => {
//             debugger;
//             // Process the API response
//             console.log('API Response: ', response);
//             const departmentCount = response[0][0].department_count;
//             // Check the department count
//             if (departmentCount > 1) {
//                 // If department count is greater than 1, show dialog box
//                 this.dialogBox.open(DialogBox_Component, {
//                     panelClass: 'Dialogbox-Class',
//                     data: { Message: 'Cannot edit student with multiple departments', Type: "2" }
//                 });
//             } else {
//                 // If department count is 1 or less, proceed with permission check
//                 this.Edit_Page_Permission = Get_Page_Permission(5);
//                 if (this.Edit_Page_Permission == undefined) {
//                     this.dialogBox.open(DialogBox_Component, {
//                         panelClass: 'Dialogbox-Class',
//                         data: { Message: 'No permission to view', Type: "2" }
//                     });
//                 } else if (this.Edit_Page_Permission.View === true) {
//                     this.goToLink();  // Navigate if permission is granted
//                 } else {
//                     this.dialogBox.open(DialogBox_Component, {
//                         panelClass: 'Dialogbox-Class',
//                         data: { Message: 'No permission to view', Type: "2" }
//                     });
//                 }
//             }
//         },
//         (error) => {
//             console.error('Error fetching student data', error);
//             // Handle error (e.g., show a dialog or alert)
//             this.dialogBox.open(DialogBox_Component, {
//                 panelClass: 'Dialogbox-Class',
//                 data: { Message: 'Error fetching student data', Type: "2" }
//             });
//         }
//     );
// }
goToLink() {
        
    return;
    const url = this.router.serializeUrl(
      this.router.createUrlTree(['/Student'])
    );
    // window.open('/Student');
    window.open(url, '_blank');
  }

/*** Added on 31-07-2024 */


View_Back_To_Freelancer_Manager(){
    debugger
    // this.Department_Search.Department_Name="All";
    // this.User_Search.User_Details_Name=null;
    // this.Search_Branch.Branch_Name="All"
    // this.Get_Lead_Load_Data_ByUser(this.Login_User);
    if(this.Users_Data1!=null && this.Users_Data1 != undefined)
        {
            this.Agent_Search1=this.Users_Data1[0];
        }
      
    // if(this.Users_Data!=null && this.Users_Data != undefined)
    //     {
    //         this.User_Search=this.Users_Data[0];
    //     }

    this.Freelancer_manager_search();
    this.Freelancer_Manager_User_Id = 0;
    this.Freelancer_User_Id = 0;
    this.Search_Div=false;
    this.Summary_Div=false;
    this.freelancer_manager_div = true;


    
    // if(this.Users_Data!=null && this.Users_Data != undefined)
    //     this.Agent_Search=this.Users_Data[0];
    // this.FollowUp_Summary();
}

}

