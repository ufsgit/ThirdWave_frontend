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
selector: 'app-Agency_Dashboard',
templateUrl: './Agency_Dashboard.component.html',
styleUrls: ['./Agency_Dashboard.component.css'],
providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
    ],
})
export class Agency_DashboardComponent implements OnInit {
    Dashboard_Edit:boolean;
    Dashboard_Save:boolean;
    Dashboard_Delete:boolean;
 
    missedfollowup_count: number = 1;

    followup_count: number = 1;
    Search_FromDate: Date = new Date();
    Search_ToDate: Date = new Date();
    Look_In_Date: Boolean = true;

     
    color = 'primary';
    mode = 'indeterminate';
    value = 50;
myInnerHeight: number;
    issLoading: boolean;
 
    Login_User: string = "0";
    Menu_Id: number = 9;

    myTotalHeight:number;

    Dashboard_Count:number;
    Dashboard_Count1: number;
    Dashboard_Count2:number;
    Dashboard_Count3:number; 
    Dashboard_Count4:number;
    Dashboard_Count5:number;
    Dashboard_Count6:number;
    Dashboard_Count7:number;
    Dashboard_Count8:number;
    Dashboard_Count9:number;
    Edit_Page_Permission: any;
 

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
  
    temparray: any;
    AddAgentPermissions: any;
    AddAgent_Visiblility: boolean;
    Title_Bar = '';
  Type_Bar = 'BarChart';
    Data_Bar = [
   
  ];
  columnNames_Bar = ['Source', 'Count'];
  options_Bar = {
    is3D: true,
  };

  Permissions: any;

  /** Added on 23-07-2024 */

  year: any;
  month: any;
  day: any;
  date: any;

constructor( public Student_Service_:Student_Service, private route: ActivatedRoute, private router: Router,public dialogBox: MatDialog) { }

ngOnInit() 
{
    this.Login_User = localStorage.getItem("Login_User");
    // this.Permissions = Get_Page_Permission(9);
    // if(this.Permissions==undefined || this.Permissions==null)
    // {
    // localStorage.removeItem('token');
    // this.router.navigateByUrl('Home_Page');
    // }
    // else
    {
    // this.Dashboard_Edit=this.Permissions.Edit;
    // this.Dashboard_Save=this.Permissions.Save;
    // this.Dashboard_Delete=this.Permissions.Delete;
    if(Number(this.Login_User)>0)
     this.Page_Load()
    }
} 

Page_Load()
{
    this.myInnerHeight = (window.innerHeight);
    this.myTotalHeight=this.myInnerHeight
    this.myTotalHeight=this.myTotalHeight-40;
    this.myInnerHeight = this.myInnerHeight - 100;
    
    var my_date=new Date()
    this.Search_FromDate = new Date(my_date.getFullYear(), my_date.getMonth(), 1);
    this.Search_ToDate = this.New_Date(this.Search_ToDate);

    this.Get_Menu_Status(148,this.Login_User); 
    this.Get_Menu_Status_Multiple(
        "163",
        this.Login_User
    );
    this.Get_Dashboard_Count();

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
this.Student_Service_.Get_Menu_Status(Menu_id,Login_user_id).subscribe(Rows => {     

    if (Rows[0][0]==undefined)
    {
        if(Menu_id==148)
        {
        localStorage.removeItem('token');
        this.router.navigateByUrl('Home_Page');
        }
    }  
    
    if (Rows[0][0].View >0) 
    {
        if(Menu_id==148)
        {
            this.Permissions=Rows[0][0];
            if(this.Permissions==undefined || this.Permissions==null)
                {
                    localStorage.removeItem('token');
                    this.router.navigateByUrl('Home_Page');
                }
               
                this.Dashboard_Edit=this.Permissions.Edit;
                this.Dashboard_Save=this.Permissions.Save;
                this.Dashboard_Delete=this.Permissions.Delete;
        }

    }
    this.issLoading = false;
},
Rows => {
    this.issLoading = false;
    const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Error Occured', Type: "2" } });
});
}

Get_Menu_Status_Multiple(Menu_id, Login_user_id) {
    this.issLoading = true;

    this.Student_Service_.Get_Menu_Status_Multiple(
        Menu_id,
        Login_user_id
    ).subscribe(
        (Rows) => {
            
            Rows = Rows[0];
            this.temparray = Rows;
            for (var i = 0;i < this.temparray.length;i++ ) {
                Menu_id = Rows[i]["menu_id"];
                if (Menu_id == 163) {
                    this.AddAgentPermissions = Rows[i];
                    this.AddAgent_Visiblility = this.AddAgentPermissions.View;
                   
                } 
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

Get_Dashboard_Count()
{
    {

        var look_In_Date_Value=0
        if (this.Look_In_Date == true) look_In_Date_Value = 1;

debugger
            this.issLoading = true;
            
            this.Student_Service_.Get_Dashboard_Count_Agent(this.Login_User,moment(this.Search_FromDate).format("YYYY-MM-DD"),
            moment(this.Search_ToDate).format("YYYY-MM-DD"),look_In_Date_Value)
        .subscribe(Rows => 
        {
           debugger
            //log(Rows)
            this.Dashboard_Count =Rows.returnvalue.Leads[0].Data_Count;  
            this.Dashboard_Count1=Rows.returnvalue.Leads[1].Data_Count; 
            this.Dashboard_Count2=Rows.returnvalue.Leads[2].Data_Count; 
            this.Dashboard_Count3=Rows.returnvalue.Leads[3].Data_Count; 
            this.Dashboard_Count4=Rows.returnvalue.Leads[4].Data_Count;
            this.Dashboard_Count5=Rows.returnvalue.Leads[5].Data_Count; 
            this.Dashboard_Count7=Rows.returnvalue.Leads[6].Data_Count; 
            this.Dashboard_Count8=Rows.returnvalue.Leads[7].Data_Count; 
            this.Dashboard_Count9=Rows.returnvalue.Leads[8].Data_Count;
            // this.Dashboard_Count6=Rows.returnvalue.Leads[6].Data_Count; 
            
            // log(this.Dashboard_Count)    
            
             var Enquiry_Source_data_temp = Rows.returnvalue.Enquiry_Source_data;            
            var result = [];
             this.Enquiry_Source_columnNames=[];
            for (var i in Enquiry_Source_data_temp)
            {
                result.push([Enquiry_Source_data_temp[i].Enquiry_Source_Name, Enquiry_Source_data_temp[i].Data_Count]);
      
            }
           // var data_temp = new google.visualization.DataTable(result);
            this.Enquiry_Source_columnNames.push('Source')
            this.Enquiry_Source_columnNames.push('Count')
            this.Enquiry_Source_data = result;  
            this.Data_Bar=result;     
            this.issLoading = false;
        },
        Rows => 
        {   
            const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
            this.issLoading = false;
        });
        }
}
Click_No1()
{
    this.router.navigateByUrl('/Enquiry_Source_Summary');
}
Click_No2()
{
    if(this.Look_In_Date === true)
        {
            var Look_In_Date = 1;
        }
    else
        {
            var Look_In_Date = 0;
        }
    localStorage.setItem("Look_In_Date_From_Agent_Dashboard",Look_In_Date.toString());
    localStorage.setItem("Search_FromDate_From_Agent_Dashboard",this.Search_FromDate.toString());
    localStorage.setItem("Search_ToDate_From_Agent_Dashboard",this.Search_ToDate.toString());
    
      this.router.navigateByUrl('/Registration_Summary_Agent');  
}
Click_No3()
{
    this.router.navigateByUrl('/Pending_FollowUp');
   
}
Click_No4()
{
    debugger;
    if(this.Look_In_Date === true)
    {
        var Look_In_Date = 1;
    }
    else
    {
        var Look_In_Date = 0;
    }
    localStorage.setItem("Look_In_Date_From_Agent_Dashboard",Look_In_Date.toString());
    localStorage.setItem("Search_FromDate_From_Agent_Dashboard",this.Search_FromDate.toString());
    localStorage.setItem("Search_ToDate_From_Agent_Dashboard",this.Search_ToDate.toString());

    this.router.navigateByUrl('/Receipt_Summary_Report_Agent');
   
} 
Click_No5()
{
    this.router.navigateByUrl('/Agent_Summary');
   
}
 
Click_No6()
{
    this.router.navigateByUrl('/Application_Report');
   
}

Click_No7()
{
    this.router.navigateByUrl('/Student_Task');
   
}

Click_No8()
{
    this.router.navigateByUrl('/Student');
   
}
Click_No10()
{
    this.router.navigateByUrl('/Agent_StudentDetails');
   
}

Agent_Entry_View_Click(Page_Check){
    localStorage.setItem('Page_Check',Page_Check.toString());

    this.router.navigateByUrl('/Agent_Details');
}



}

