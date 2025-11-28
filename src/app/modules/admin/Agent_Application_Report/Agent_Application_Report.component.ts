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
import { Agent } from '../../../models/Agent';
import { ApplicationStatus } from '../../../models/ApplicationStatus';
import { ROUTES,Get_Page_Permission } from '../../../components/sidebar/sidebar.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA,MatDialogConfig} from '@angular/material';
import {FormControl} from '@angular/forms';
import {MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import * as _moment from 'moment';
import {default as _rollupMoment} from 'moment';
import { Intake } from 'app/models/Intake';
import { Country_Service } from 'app/services/Country.service';
import { Country } from 'app/models/Country';
import { University_Service } from 'app/services/University.service';
import { University } from 'app/models/University';
import { Intake_Year } from 'app/models/Intake_Year';
import { Department_Service } from 'app/services/Department.service';
import { Course } from 'app/models/Course';
import { Course_Service } from 'app/services/Course.service';
import { Student_FollowUp } from 'app/models/Student_FollowUp';
import { Application_Report_Details } from 'app/models/Application_Report_Details';
import { Student_Selected_Details } from 'app/models/Student_Selected_Details';
import {ViewChild } from '@angular/core';
// import { MatSort, MatTableDataSource } from '@angular/material';
// import { MatSortModule } from '@angular/material/sort';

// import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';







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
selector: 'app-Agent_Application_Report',
templateUrl: './Agent_Application_Report.component.html',
styleUrls: ['./Agent_Application_Report.component.css'],
providers:[
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
    ],
    })

export class Agent_Application_ReportComponent implements OnInit {
    Status_Search: Department_Status = new Department_Status();
    User_Search: User_Details = new User_Details();
    To_User_Search: User_Details = new User_Details();
    Search_Name = "";
    Department_Search: Department = new Department()
    Search_Branch: Branch = new Branch();
    Search_FromDate: Date = new Date();
    Search_ToDate: Date = new Date();
    Look_In_Date: Boolean = true;
    Active_In:Boolean=true;
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

    Intake_Mode_: Intake = new Intake();
	Intake_Mode_Temp: Intake = new Intake();
	Intake_Mode_Data: Intake[];
    Intake_Search:Intake = new Intake();

    expandedCourses: boolean[] = [];

    Intake_Year_: Intake_Year = new Intake_Year();
	Intake_Year_Temp: Intake_Year = new Intake_Year();
	Intake_Year_Data: Intake_Year[];
    Intake_Year_Search:Intake_Year = new Intake_Year();

    Department_Status_Dropdown_: Department_Status = new Department_Status();
	Department_Status_Dropdown_Temp: Department_Status = new Department_Status();
	Department_Status_Dropdown_Data: Department_Status[];


    Lead_Data: Student[]
    // Student_Data_Search: Student_Selected_Details[]/
    // Student_Data_Search: any;
    // Student_Data_Search: any[] = [];
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
    Agent_Id:number;
    Application_status_Id:number;
    Menu_Id: number = 66;

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
    Agent_Permissions: any;
    WorkSummary_Div:boolean=false;
    More_Options_Button_View:boolean=true;
    Less_Options_Button_View:boolean=false;
    More_Options_Div_View:boolean=false;
     User_Details_Id:number

     Agent_View:boolean
    Export_Permission:any
    Export_View:boolean=false

    Graph:boolean=false;
    Summary_Sub:boolean=true;

    Agent_Mode_: Agent = new Agent;
Agent_Mode_Temp: Agent = new Agent;
Agent_Mode_Data: Agent[]


Status_1: Department_Status = new Department_Status();

Department_Status_Data: Department_Status[];
Department_Status_Data_Filter_2: Department_Status[];

Application_Status_Mode_: ApplicationStatus = new ApplicationStatus;
Application_Status_Mode_Temp: ApplicationStatus = new ApplicationStatus;
Application_Status_Mode_Data: ApplicationStatus[]

Agent_Search: Agent = new Agent();
Country_Data: Country[];
Country_Data_Filter: Country[];
University_Data_Filter_2: University[];

University_Data: University[];
Profile_Country_: Country = new Country();
University_1: University = new University();
	University_Data_Filter: University[];
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
Is_Status:any
Application_status_Id_:number=0;

    Course_Data_Filter: Course[];
    Course_Data: Course[];
    Course_Data_Typeahead: Course[];
    Course_: Course = new Course();
    Program_Course_: Course = new Course();
    Course_Temp: Course = new Course();
 
    Total_Selected:number;
    Balance_Selected:number=0;
    ToStaff_Student_Data: User_Details[];

    FollowUp_Branch_: Branch = new Branch();
    Followup_Branch_Data: Branch[];
    Branch_Temp: Branch = new Branch();

    Touser_Branch_Data : Branch[];
    Touser_Branch_Id:number;
    Touser_Branch_name:string;

    Followup_Date_Change:Date;
    Data_Giving: number;

    Show_FollowUp: boolean = false;
    main_View: boolean = false;
    Student_Selected_Data: Student[];
    FollowUp_: Student_FollowUp = new Student_FollowUp();

    Select_Student: boolean = false;
    Select_View: boolean = false;
    Student_Id: number = 0;
    Student_: Application_Report_Details = new Application_Report_Details();
    count_change:number;
    Login_User_Name: string;

    FollowUp_Department_Temp: Department = new Department();
    Followup_Department_Data: Department[];
    Followup_Department_Data_T: Department[];
    Followup_Department_Data_Check: Department[];

    Followup_Users_Data: User_Details[];
    Followup_Users_Data_t: User_Details[];
    Followup_Users_Data_t_Filter: User_Details[];
    Followup_Users_Data_tN: Student_FollowUp[];

    FollowUp_Status_: Department_Status = new Department_Status();
    FollowUp_Status_Task_: Department_Status = new Department_Status();
    Transfer_Status_: Department_Status = new Department_Status();
    // Transfer_Status_k: Sub_Status = new Sub_Status();
    Followup_Status_Data: Department_Status[];

    Followup_Users_: User_Details = new User_Details();
    Followup_Users_List_: User_Details = new User_Details();
    Followup_Users_Task_: User_Details = new User_Details();
    Followup_Users_t: User_Details = new User_Details();
    Followup_Users_temp: User_Details = new User_Details();

    FollowUp_Department_: Department = new Department();
    Usertype: number;

    // displayedColumns: string[] = ['Check_Box_View','Application_details_Id', 'Student', 'Mobile', 'Branch', 'Applied_Date', 'Country', 'Intake', 'Intake_Year', 'University', 'Course', 'Status', 'User', 'To_User_Name', 'Remark'];
    // dataSource: MatTableDataSource<Lead>;

    // displayedColumns: string[] = [
    //     'Check_Box_View', 'Application_details_Id', 'Student', 'Mobile', 'Branch',
    //     'Applied_Date', 'Country', 'Intake', 'Intake_Year', 'University', 'Course',
    //     'Status', 'User', 'To_User_Name', 'Remark'
    //   ];
    //   dataSource: MatTableDataSource<any>;
    
    //   @ViewChild(MatSort, { static: true }) sort: MatSort;

    // @ViewChild(MatSort, { static: true }) sort: MatSort;

    // ngAfterViewInit() {
    //     this.dataSource.sort = this.sort;
    //   }


    // desserts: Student_Data_Search[] = [
    //     {name: 'Frozen yogurt', calories: 159, fat: 6, carbs: 24, protein: 4},
    //     {name: 'Ice cream sandwich', calories: 237, fat: 9, carbs: 37, protein: 4},
    //     {name: 'Eclair', calories: 262, fat: 16, carbs: 24, protein: 6},
    //     {name: 'Cupcake', calories: 305, fat: 4, carbs: 67, protein: 4},
    //     {name: 'Gingerbread', calories: 356, fat: 16, carbs: 49, protein: 4},
    //   ];
    



    // Application_details_Id: number;
    // Student: string;
    // Mobile: string;
    // Branch: string;
    // Applied_Date: string;
    // Country: string;
    // Intake: string;
    // Intake_Year: string;
    // University: string;
    // Course: string;
    // Status: string;
    // User: string;
    // To_User_Name: string;
    // Remark: string;
    // Check_Box_View: boolean;
    // // Student_Id: number;


    displayedColumns: string[] = ['Check_Box_View',
        'Application_details_Id', 'Student', 'Mobile', 'Branch',
        'Applied_Date', 'Country', 'Intake', 'Intake_Year', 'University', 'Course',
        'Status', 'User', 'To_User_Name', 'Remark'
      ];
      
      Student_Data_Search: any[] = []; // Initialize as empty array
      sortedData: any[] = []; // Array to hold sorted data
    //   Total_Data = 0;
    //   issLoading = false;
    @ViewChild(MatSort, { static: true }) sort: MatSort;

  

constructor(public Student_Service_:Student_Service,
    public Country_Service_: Country_Service,
    public University_Service_: University_Service,public Course_Service_: Course_Service,public Department_Service_: Department_Service, private route: ActivatedRoute, private router: Router,public dialogBox: MatDialog) 
{   }
ngOnInit() 
{
  
    this.Login_User = localStorage.getItem("Login_User");
    this.Login_User_Name = localStorage.getItem("uname");
    this.Usertype = Number(localStorage.getItem("User_Type"));
    this.Application_status_Id_ = Number(localStorage.getItem("Application_status_Id"));
    localStorage.setItem('Application_status_Id',"0");
    // this.array = Get_Page_Permission(this.Menu_Id);
    // this.Export_Permission=Get_Page_Permission(38);
    // if (this.array == undefined || this.array == null)
    // {
    //     localStorage.removeItem('token');
    //     this.router.navigateByUrl('/auth/login');
    // }
    // else 
    debugger
    // this.dataSource = new MatTableDataSource(this.Student_Data_Search);
    // this.dataSource.sort = this.sort;

    // this.dataSource = new MatTableDataSource(this.Student_Data_Search);
    // this.dataSource.sort = this.sort;

    // this.Student_Data_Search: any[] = []; // Initialize as empty array

    this.sortedData = this.Student_Data_Search.slice();


    {
        this.Page_Load()
        // if (this.Export_Permission != undefined && this.Export_Permission != null)
        //     this.Export_View=this.Export_Permission.View
    }
}




sortData(sort: Sort) {
    debugger
    const data = this.Student_Data_Search.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'Check_Box_View': return this.compare(a.Check_Box_View, b.Check_Box_View, isAsc);
        case 'Application_details_Id': return this.compare(a.Application_details_Id, b.Application_details_Id, isAsc);
        case 'Student': return this.compare(a.Student, b.Student, isAsc);
        case 'Mobile': return this.compare(a.Mobile, b.Mobile, isAsc);
        case 'Branch': return this.compare(a.Branch, b.Branch, isAsc);
        case 'Applied_Date': return this.compare(a.Applied_Date, b.Applied_Date, isAsc);
        case 'Country': return this.compare(a.Country, b.Country, isAsc);
        case 'Intake': return this.compare(a.Intake, b.Intake, isAsc);
        case 'Intake_Year': return this.compare(a.Intake_Year, b.Intake_Year, isAsc);
        case 'University': return this.compare(a.University, b.University, isAsc);
        case 'Course': return this.compare(a.Course, b.Course, isAsc);
        case 'Status': return this.compare(a.Status, b.Status, isAsc);
        case 'User': return this.compare(a.User, b.User, isAsc);
        case 'To_User_Name': return this.compare(a.To_User_Name, b.To_User_Name, isAsc);
        case 'Remark': return this.compare(a.Remark, b.Remark, isAsc);
        default: return 0;
      }
    });
  }


  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }


Page_Load()
{
    
    this.myInnerHeight = (window.innerHeight);
    this.myInnerHeight = this.myInnerHeight - 230;

    this.Black_Stop = this.Page_Length_;
    this.Red_Stop = this.Page_Length_;
    
     this.Search_Div=true
    this.Search_By_=1;
    this.Registered_By_ = 1;
    this.Is_Status=1;
    var my_date=new Date()
    this.Search_FromDate=new Date();
    this.Search_FromDate = new Date(my_date.getFullYear(), my_date.getMonth(), 1);
    this.Search_ToDate=new Date();
    this.Search_ToDate = this.New_Date(this.Search_ToDate);
    // this.Get_Lead_Load_Data();
    this.Get_Menu_Status(170, this.Login_User);
    this.Get_Menu_Status(38,this.Login_User);
    this.Get_Menu_Status(65,this.Login_User);
    this.Load_Agents();
    this.Load_application_status();
    this.Get_Student_PageLoadData_Dropdowns();
    this.Get_Lead_Load_Data_ByUser(this.Login_User); 
    this.Load_Status_Dropdown();
    
    
    this.myInnerHeight = (window.innerHeight);
    this.myTotalHeight=this.myInnerHeight -280;
    this.myTotalHeight=this.myTotalHeight-50;
    this.myInnerHeight = this.myInnerHeight - 450;
    this.Agent_View=false;
    this.Active_In=false;
    
    
}

Get_Menu_Status(Menu_id, Login_user_id)
{
    
this.issLoading = false;
this.Student_Service_.Get_Menu_Status(Menu_id,Login_user_id).subscribe(Rows => {            
    
    // if(Menu_id==66)

    if (Rows[0][0]==undefined)
    {
        if(Menu_id==169)
        {
        localStorage.removeItem('token');
        this.router.navigateByUrl('Home_Page');
        }
    }  
    // else
     // if (Rows[0][0]!=undefined)
    if (Rows[0][0].View >0) 
    { 
        if(Menu_id==170)
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
        else if(Menu_id==65)
        {
           
             
            this.Agent_Permissions=Rows[0][0];

            if(this.Agent_Permissions.View==true)
            this.Agent_View=true;
            else
            this.Agent_View=false;
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

Search_Country_Typeahead(event: any) {
		var Value = "";
		if (event.target.value == "") Value = "";
		else Value = event.target.value.toLowerCase();

		if (this.Country_Data == undefined || this.Country_Data.length == 0) {
			this.issLoading = true;

			this.Country_Service_.Search_Country_Typeahead(Value).subscribe(
				(Rows) => {
					if (Rows != null) {
						this.Country_Data = Rows[0];
						this.Country_Data_Filter = [];
						for (var i = 0; i < this.Country_Data.length; i++) {
							if (
								this.Country_Data[i].Country_Name.toLowerCase().includes(Value)
							)
								this.Country_Data_Filter.push(this.Country_Data[i]);
						}
					}
					this.issLoading = false;
				},
				(Rows) => {
					this.issLoading = false;
				}
			);
		} else {
			this.Country_Data_Filter = [];
			for (var i = 0; i < this.Country_Data.length; i++) {
				if (this.Country_Data[i].Country_Name.toLowerCase().includes(Value))
					this.Country_Data_Filter.push(this.Country_Data[i]);
			}
		}
	}

    display_Country(Country_e: Country) {
		if (Country_e) {
			return Country_e.Country_Name;
		}
	}


	Search_University_Typeahead(event: any) {
		var Value = "";
		if (event.target.value == "") Value = "";
		else Value = event.target.value.toLowerCase();

		if (this.University_Data == undefined || this.University_Data.length == 0) {
			this.issLoading = true;
			this.University_Service_.Search_University_Typeahead(Value).subscribe(
				(Rows) => {
					if (Rows != null) {
						this.University_Data = Rows[0];
						this.University_Data_Filter_2 = [];
						for (var i = 0; i < this.University_Data.length; i++) {
							if (
								this.University_Data[i].University_Name.toLowerCase().includes(
									Value
								)
							)
								this.University_Data_Filter_2.push(this.University_Data[i]);
						}
					}
					this.issLoading = false;
				},
				(Rows) => {
					this.issLoading = false;
				}
			);
		} else {
			this.University_Data_Filter_2 = [];
			for (var i = 0; i < this.University_Data.length; i++) {
				if (
					this.University_Data[i].University_Name.toLowerCase().includes(Value)
				)
					this.University_Data_Filter_2.push(this.University_Data[i]);
			}
		}
	}
	display_University_1(University_e: University) {
		if (University_e) {
			return University_e.University_Name;
		}
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
    // this.Search_Work_report(this.User_Search.User_Details_Id);
    
}

Get_Student_PageLoadData_Dropdowns() {
    this.Student_Service_.Get_Student_PageLoadData_Dropdowns().subscribe(
        (Rows) => {

            
            this.Intake_Mode_Data = Rows[2];
            this.Intake_Mode_Temp.Intake_Id =0;
            this.Intake_Mode_Temp.Intake_Name ="Select";
            this.Intake_Mode_Data.unshift(Object.assign({},this.Intake_Mode_Temp));      
            this.Intake_Search = this.Intake_Mode_Data[0];


            this.Intake_Year_Data = Rows[5];
            this.Intake_Year_Temp.Intake_Year_Id =0;
            this.Intake_Year_Temp.Intake_Year_Name ="Select";
            this.Intake_Year_Data.unshift(Object.assign({},this.Intake_Year_Temp));      
            this.Intake_Year_Search = this.Intake_Year_Data[0];


        },
        (Rows) => {
            const dialogRef = this.dialogBox.open(DialogBox_Component, {
                panelClass: "Dialogbox-Class",
                data: { Message: "Error Occured", Type: "2" },
            });
        }
    );
}

Search_Lead_button() 
{
    this.Black_Start =1;
    this.Black_Stop = this.Page_Length_;
    this.Red_Start = 1;
    this.Total_Rows=0;
    this.Red_Stop = this.Page_Length_;
    //this.Search_Work_report(this.User_Search.User_Details_Id);
    this.Search_Application_Report();
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
   ;
        this.Student_Service_.exportExcel(this.Student_Data_Search,'Application-Report')

}


View_Details_Click(User_Details_Id){
    //this.issLoading =true;
    
    for (var i = 0; i < this.Users_Data.length; i++) {
        if (User_Details_Id== this.Users_Data[i].User_Details_Id)
        this.User_Search=this.Users_Data[i];
    }
    this.Search_Application_Report();
}

Search_Application_Report()
{
  
  
    this.WorkSummary_Div=false
    this.Search_Div=true
    this.Graph=false
var value = 1,Intake_Id=0,Intake_Year_Id=0,Country_Id=0,University_Id=0,Course_Id=0, dept_id=0,Status_Value=1,search_name_='0',look_In_Date_Value=0,branch_id=0,User_Id=0,Agent_Id=0,Active_In_Vlaue=0,Application_status_Id=0,To_User_Id=0;
    

    if (this.Look_In_Date == true )
        look_In_Date_Value = 1;
    if (this.Active_In == true )
        Active_In_Vlaue = 1;

 

    if (this.User_Search != undefined && this.User_Search!=null)
    if (this.User_Search.User_Details_Id != undefined && this.User_Search.User_Details_Id != null)
    User_Id = this.User_Search.User_Details_Id;

    if (this.To_User_Search != undefined && this.To_User_Search!=null)
    if (this.To_User_Search.User_Details_Id != undefined && this.To_User_Search.User_Details_Id != null)
    To_User_Id = this.To_User_Search.User_Details_Id;

    

    if (this.Agent_Mode_ != undefined && this.Agent_Mode_!=null)
    if (this.Agent_Mode_.Agent_Id != undefined && this.Agent_Mode_.Agent_Id != null)
    Agent_Id = this.Agent_Mode_.Agent_Id;

    // if (this.Application_Status_Mode_ != undefined && this.Application_Status_Mode_!=null)
    // if (this.Application_Status_Mode_.Application_status_Id != undefined && this.Application_Status_Mode_.Application_status_Id != null)
    // Application_status_Id = this.Application_Status_Mode_.Application_status_Id;

    
debugger
    // if (this.Department_Status_Dropdown_ != undefined && this.Department_Status_Dropdown_!=null)
    // if (this.Department_Status_Dropdown_.Department_Status_Id != undefined && this.Department_Status_Dropdown_.Department_Status_Id != null)
    // Application_status_Id = this.Department_Status_Dropdown_.Department_Status_Id;
    
    
		if (this.Status_1 != undefined && this.Status_1 != null)
            if (this.Status_1.Department_Status_Id != undefined && this.Status_1.Department_Status_Id != null)
                Application_status_Id = this.Status_1.Department_Status_Id;

    if (this.Search_Branch != undefined && this.Search_Branch != null)
    if (this.Search_Branch.Branch_Id != undefined && this.Search_Branch.Branch_Id != null)
    branch_id = this.Search_Branch.Branch_Id;

    if (this.Is_Status != undefined && this.Is_Status != null)
    if (this.Is_Status != undefined && this.Is_Status != null && this.Is_Status != '')
       Status_Value = this.Is_Status;

    if (this.Intake_Search != undefined && this.Intake_Search != null)
    if (this.Intake_Search.Intake_Id != undefined && this.Intake_Search.Intake_Id != null)
    Intake_Id = this.Intake_Search.Intake_Id;

        if (this.Intake_Year_Search != undefined && this.Intake_Year_Search != null)
    if (this.Intake_Year_Search.Intake_Year_Id != undefined && this.Intake_Year_Search.Intake_Year_Id != null)
    Intake_Year_Id = this.Intake_Year_Search.Intake_Year_Id;

    if (this.Profile_Country_ != undefined && this.Profile_Country_ != null)
    if (this.Profile_Country_.Country_Id != undefined && this.Profile_Country_.Country_Id != null)
    Country_Id = this.Profile_Country_.Country_Id;

    if (this.University_1 != undefined && this.University_1 != null)
    if (this.University_1.University_Id != undefined && this.University_1.University_Id != null)
    University_Id = this.University_1.University_Id;
    
    debugger
    if (this.Program_Course_ != undefined && this.Program_Course_ != null)
        if (this.Program_Course_.Course_Id != undefined && this.Program_Course_.Course_Id != null)
        Course_Id = this.Program_Course_.Course_Id;
        

    this.issLoading = true;
  
    
    this.Student_Service_.Search_Agent_Application_Report(moment(this.Search_FromDate).format('YYYY-MM-DD'), moment(this.Search_ToDate).format('YYYY-MM-DD'),
    branch_id, User_Id,look_In_Date_Value, this.Login_User,Status_Value, Agent_Id,Application_status_Id,Intake_Id,Intake_Year_Id,Country_Id,University_Id,Active_In_Vlaue,To_User_Id,Course_Id)
.subscribe(Rows =>
{
    
    this.issLoading = true;

    this.Student_Data_Search = Rows.returnvalue.Leads;
    this.Total_Data=this.Student_Data_Search.length
    this.missedfollowup_count =0;
    this.followup_count=0;

    // this.sortedData=this.Student_Data_Search;
    this.sortedData = this.Student_Data_Search.slice(); // Initialize sorted data
debugger
    // this.dataSource = new MatTableDataSource(this.Student_Data_Search);
    // this.dataSource.sort = this.sort;


    // this.dataSource = new MatTableDataSource(this.Student_Data_Search);
    //   this.dataSource.sort = this.sort;
   
    
      
   
  
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
   this.To_User_Search= this.Users_Data[0];
   
  
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
   this.Department_Status_Dropdown_=this.Status_Data[0];

   this.Touser_Branch_Data = Rows[9].slice();
   this.Touser_Branch_Id = this.Touser_Branch_Data[0].Branch_Id;
   this.Touser_Branch_name = this.Touser_Branch_Data[0].Branch_Name;



 


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
        // this.Search_Application_Report();
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
    // this.Search_Application_Report();
}
}   

Graph_View(){
    this.Graph=true
    this.Summary_Sub=false
}

Load_Agents()
{
    
    this.issLoading = true;
    this.Student_Service_.Load_Agents().subscribe(Rows => {
        
        if (Rows != null) {
            this.Agent_Mode_Data = Rows[0];
            this.Agent_Mode_Temp.Agent_Id = 0;
            this.Agent_Mode_Temp.Agent_Name = "Select";
            this.Agent_Mode_Data.unshift(this.Agent_Mode_Temp);
            
            this.Agent_Mode_ = this.Agent_Mode_Data[0];
            this.issLoading = false;
        }
    },
        Rows => {
        
            this.issLoading = false;
        });
}

Load_application_status()
{
    
    this.issLoading = true;
    this.Student_Service_.Load_application_status().subscribe(Rows => {
        
        if (Rows != null) {
            this.Application_Status_Mode_Data = Rows[0];
            this.Application_Status_Mode_Temp.Application_status_Id = 0;
            this.Application_Status_Mode_Temp.Application_Status_Name = "Select";
            this.Application_Status_Mode_Data.unshift(this.Application_Status_Mode_Temp);
            this.Application_Status_Mode_ = this.Application_Status_Mode_Data[0];
           
            this.issLoading = false;
            
            if(this.Application_status_Id_ >0)
            {
                for (var i = 0; i < this.Application_Status_Mode_Data.length; i++) {
                    if (
                        this.Application_Status_Mode_Data[i].Application_status_Id == this.Application_status_Id_
                    )
                        this.Application_Status_Mode_ = this.Application_Status_Mode_Data[i];
                       
                }
                       
            }
            else
                this.Application_Status_Mode_ = this.Application_Status_Mode_Data[1];

            this.Search_Application_Report()
        }
    },
        Rows => {
        
            this.issLoading = false;
        });
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

  Load_Status_Dropdown() {
    this.issLoading = true;
    debugger
    this.Country_Service_.Search_Application_StatusforChangeStatus_Typeahead('',this.Login_User,'').subscribe(
      (Rows) => {
        if (Rows != null) {
          debugger 
          this.Department_Status_Dropdown_Data = Rows[0];
          this.Department_Status_Dropdown_Temp.Department_Status_Id = 0;
          this.Department_Status_Dropdown_Temp.Department_Status_Name = "Select";
          this.Department_Status_Dropdown_Data.unshift(this.Department_Status_Dropdown_Temp);
  
          this.Department_Status_Dropdown_ = this.Department_Status_Dropdown_Data[0];
          this.issLoading = false;
        }
      },
      (Rows) => {
        this.issLoading = false;
      }
    );
  }

  More_Options_button()
  {
    this.More_Options_Button_View=false;
    this.More_Options_Div_View=true;
    this.Less_Options_Button_View=true
  }

  Less_Options_button()
  {
    this.More_Options_Button_View=true;
    this.More_Options_Div_View=false;
    this.Less_Options_Button_View=false
  }





  showFullCourseName(index: number) {
    this.expandedCourses[index] = true;
  }

  hideFullCourseName(index: number) {
    this.expandedCourses[index] = false;
  }

  Country_Change1(){
    debugger
	this.University_1=null;
		this.University_Data=[];
		this.University_Data_Filter_2=[];
		this.Course_Data_Filter=[];
		this.Department_Status_Data=[];
		this.Department_Status_Data_Filter_2 = [];
}
  
	
	Search_Courses_Typeahead(event: any) {
		var Value = "";
		if (event.target.value == "") Value = "";
		else Value = event.target.value.toLowerCase();
		if (this.Course_Data == undefined || this.Course_Data.length == 0) {
			this.issLoading = true;

			this.Course_Service_.Search_Courses_Typeahead(Value).subscribe(
				(Rows) => {
					if (Rows != null) {
						this.Course_Data = Rows[0];
						this.Course_Data_Filter = [];
						for (var i = 0; i < this.Course_Data.length; i++) {
							if (this.Course_Data[i].Course_Name.toLowerCase().includes(Value))
								this.Course_Data_Filter.push(this.Course_Data[i]);
						}
					}
					this.issLoading = false;
				},
				(Rows) => {
					this.issLoading = false;
				}
			);
		} else {
			this.Course_Data_Filter = [];
			for (var i = 0; i < this.Course_Data.length; i++) {
				if (this.Course_Data[i].Course_Name.toLowerCase().includes(Value))
					this.Course_Data_Filter.push(this.Course_Data[i]);
			}
		}
	}
	display_Course_1_temp(Course_e: Course) {
		if (Course_e) {
			return Course_e.Course_Name;
		}
	}


    	Search_University_Typeahead_Country(event: any) {
		debugger

		if (
			this.Profile_Country_ == undefined ||
			this.Profile_Country_ == null ||
			this.Profile_Country_.Country_Id == undefined ||
			this.Profile_Country_.Country_Id == 0
		) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Select Country", Type: "3" },
			});
			return;
		}

		var Value = "";
		if (event.target.value == "") Value = "";
		else Value = event.target.value.toLowerCase();
		
		if (this.University_Data == undefined || this.University_Data.length == 0) {
			this.issLoading = true;
			debugger
			this.University_Service_.Search_University_Typeahead_Country(Value,this.Profile_Country_.Country_Id).subscribe(
				(Rows) => {
					debugger
					if (Rows != null) {
						this.University_Data = Rows[0];
						this.University_Data_Filter_2 = [];
						for (var i = 0; i < this.University_Data.length; i++) {
							if (
								this.University_Data[i].University_Name.toLowerCase().includes(
									Value
								)
							)
								this.University_Data_Filter_2.push(this.University_Data[i]);
						}
					}
					this.issLoading = false;
				},
				(Rows) => {
					this.issLoading = false;
				}
			);
		} else {
			this.University_Data_Filter_2 = [];
			for (var i = 0; i < this.University_Data.length; i++) {
				if (
					this.University_Data[i].University_Name.toLowerCase().includes(Value)
				)
					this.University_Data_Filter_2.push(this.University_Data[i]);
			}
		}
	}
	display_University_12(University_e: University) {
		if (University_e) {
			return University_e.University_Name;
		}
	}
    onUniversityChange(){
		
		this.Course_=null;
		this.Course_Data = [];
		this.Course_Data_Filter=[];
		// this.Intake_Mode_Data_Filter = []; 
	}

    Search_Status_Typeahead(event: any) {
		var Value = "";
		if (event.target.value == "") Value = "";
		else Value = event.target.value.toLowerCase();

		if (
			this.University_1 == undefined ||
			this.University_1 == null ||
			this.University_1.University_Id == undefined ||
			this.University_1.University_Id == 0
		) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Select University", Type: "3" },
			});
			return;
		}
        debugger
		if (this.Department_Status_Data == undefined || this.Department_Status_Data.length == 0) {
			this.issLoading = true;
			this.University_Service_.Search_Status_Typeahead(Value,this.University_1.University_Id).subscribe(
				(Rows) => {
                    debugger
					if (Rows != null) {
						this.Department_Status_Data = Rows[0];
						this.Department_Status_Data_Filter_2 = [];
						for (var i = 0; i < this.Department_Status_Data.length; i++) {
							if (
								this.Department_Status_Data[i].Department_Status_Name.toLowerCase().includes(
									Value
								)
							)
								this.Department_Status_Data_Filter_2.push(this.Department_Status_Data[i]);
						}
					}
					this.issLoading = false;
				},
				(Rows) => {
					this.issLoading = false;
				}
			);
		} else {
			this.Department_Status_Data_Filter_2 = [];
			for (var i = 0; i < this.Department_Status_Data.length; i++) {
				if (
					this.Department_Status_Data[i].Department_Status_Name.toLowerCase().includes(Value)
				)
					this.Department_Status_Data_Filter_2.push(this.Department_Status_Data[i]);
			}
		}
	}
	display_Status_1(Department_Status_e: Department_Status) {
		if (Department_Status_e) {
			return Department_Status_e.Department_Status_Name;
		}
	}
    New_Followup() {

        this.Show_FollowUp = true;
        this.Search_Div=false;
        var Status = false;
        var Student_Deatils_Count =[];
       

        for (var m = 0; m < this.Student_Data_Search.length; m++) {
            if (Boolean(this.Student_Data_Search[m].Check_Box_View) == true)
            {
                Student_Deatils_Count.push( this.Student_Data_Search[m]);
                this.Total_Selected =Student_Deatils_Count.length;
            }

        }


        for (var m = 0; m < this.Student_Data_Search.length; m++) {
            if (Boolean(this.Student_Data_Search[m].Check_Box_View) == true)

                Status = true;      
        }
        if (Status == false) {
            const dialogRef = this.dialogBox.open(DialogBox_Component, {
                panelClass: "Dialogbox-Class",
                data: { Message: "Select Student to Transfer", Type: "3" },
            });
            return;
        }
        this.Show_FollowUp = true;
        this.Search_Div = false;
        this.FollowUp_.Next_FollowUp_Date=new Date();
        this.FollowUp_.Next_FollowUp_Date=this.New_Date( this.FollowUp_.Next_FollowUp_Date);
        this.Followup_Date_Change =this.FollowUp_.Next_FollowUp_Date;

        this.Branch_Temp.Branch_Id = this.Touser_Branch_Id;
        this.Branch_Temp.Branch_Name = this.Touser_Branch_name;
        this.FollowUp_Branch_ = Object.assign({}, this.Branch_Temp);

        this.Get_ToStaff_Student_DataCount()

    }


    Get_ToStaff_Student_DataCount() {
       
        this.issLoading = true;
        
        
        this.Student_Service_.Get_ToStaff_Student_DataCount(this.FollowUp_Branch_.Branch_Id,this.Followup_Date_Change).subscribe(
            (Rows) => {
               
                this.ToStaff_Student_Data = Rows[0];
                this.issLoading = false;
            },
            (Rows) => {
                this.issLoading = false;
            }
        );
    }

    Student_View_Click() {
        for (var i = 0; i < this.Student_Data_Search.length; i++) {
            if (this.Select_Student == false)
                this.Student_Data_Search[i].Check_Box_View = true;
            else this.Student_Data_Search[i].Check_Box_View = false;
        }
    }

    Close_Click() {
        this.Show_FollowUp = false;
        this.Search_Div = true;
        this.Select_Student = false;
        this.Select_View = false;
        this.FollowUp_Branch_ = null;
        this.FollowUp_Department_ = null;
        // this.FollowUp_Status_ = null;
        this.Followup_Users_ = null;
        this.Followup_Users_List_=null;
        // this.Remarks_ = null;
        // this.Student_.Next_FollowUp_Date = null;
        this.Student_.Check_Box_View = false;
        this.Select_Student = false;
        this.ToStaff_Student_Data = null;
        // this.Followup_Date  = false;
    }

    Search_Branch_Typeahead(event: any) {
        var Value = "";
        if (this.Followup_Branch_Data == undefined) this.Followup_Branch_Data = [];
        if (this.Followup_Branch_Data.length == 0) {
            if (event.target.value == "") Value = undefined;
            else Value = event.target.value;

            if (
                this.Followup_Branch_Data == undefined ||
                this.Followup_Branch_Data.length == 0
            ) {
                this.issLoading = true;
                this.Student_Service_.Search_Branch_Typeahead("").subscribe(
                    (Rows) => {
                        if (Rows != null) {
                            this.Followup_Branch_Data = Rows[0];
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
    display_Branch(Branch_: Branch) {
        if (Branch_) {
            return Branch_.Branch_Name;
        }
    }



    Save_Application_Report_Change_User() {
        var Student_Deatils = [];
debugger
        for (var m = 0; m < this.Student_Data_Search.length; m++) {
         if (Boolean(this.Student_Data_Search[m].Check_Box_View) == true) {
             //Status=true
             //this.Student_Selection_Data_Temp.push(this.Student_Data[m]);
             Student_Deatils.push({ Student_Id: this.Student_Data_Search[m].Student_Id });
             Student_Deatils.push({ Application_details_Id: this.Student_Data_Search[m].Application_details_Id });
         }
        }





        // for (var m = 0; m < this.Student_Data_Search.length; m++) {
        //     if (Boolean(this.Student_Data_Search[m].Check_Box_View) == true) {
        //         for (var n = 0; n < this.ToStaff_Student_Data.length;n++)
        //         {
        //             if ((this.ToStaff_Student_Data[n].Data_Giving) >0)
        //             {
        //                 for (var k = 0; k < this.ToStaff_Student_Data[n].Data_Giving;k++) 
        //                 {
        //                     this.Student_Data_Search[m].User_Id=this.ToStaff_Student_Data[n].User_Details_Id;
        //                     this.Student_Data_Search[m].User_Name=this.ToStaff_Student_Data[n].User_Details_Name;
        //                     Student_Deatils.push( this.Student_Data_Search[m]);
        //                     m++;
        //                     if (m >=this.Student_Data_Search.length)
        //                     {
        //                         n = this.ToStaff_Student_Data.length;
        //                         m = this.Student_Data_Search.length;
        //                         break

        //                     }
                           
                            
                            
        //                 }
        //             }
        //         }
        //     }
        // }




        // if (this.Balance_Selected < 0) {
        //     const dialogRef = this.dialogBox.open(DialogBox_Component, {
        //         panelClass: "Dialogbox-Class",
        //         data: { Message: "New assign count is invalid", Type: "3" },
        //     });
        //     return;
        // }

        // if (this.Balance_Selected != 0) {
        //     const dialogRef = this.dialogBox.open(DialogBox_Component, {
        //         panelClass: "Dialogbox-Class",
        //         data: { Message: "New assign is not equal to total selected students", Type: "3" },
        //     });
        //     return;
        // }


        if (
            this.FollowUp_Branch_ == null ||
            this.FollowUp_Branch_.Branch_Id == undefined
        ) {
            const dialogRef = this.dialogBox.open(DialogBox_Component, {
                panelClass: "Dialogbox-Class",
                data: { Message: "Enter Branch", Type: "3" },
            });
            return;
        }
        if(this.FollowUp_Department_==null||this.FollowUp_Department_.Department_Id==undefined){
            const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Enter Department', Type: "3" } });
            return;
        }
        // if(this.FollowUp_Status_==null||this.FollowUp_Status_.Department_Status_Id==undefined){
        //     const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Enter Status', Type: "3" } });
        //     return;
        // }
        // if (
        //  this.Followup_Users_ == null ||
        //  this.Followup_Users_.User_Details_Id == undefined
        // ) {
        //  const dialogRef = this.dialogBox.open(DialogBox_Component, {
        //      panelClass: "Dialogbox-Class",
        //      data: { Message: "Enter User", Type: "3" },
        //  });
        //  return;
        // }

        // if(this.FollowUp_.Next_FollowUp_Date==undefined){
        //     const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Choose Date', Type: "3" } });
        //     return;
        // }


    



        if (Student_Deatils.length == 0) {
            const dialogRef = this.dialogBox.open(DialogBox_Component, {
                panelClass: "Dialogbox-Class",
                data: { Message: "Please Assign Student", Type: "3" },
            });
            return;
        }
        //     if(this.Remarks_==null || this.Remarks_.Remarks_Id==undefined || this.Remarks_.Remarks_Name==undefined)
        //     {
        //        const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Please Select Remark',Type:"3"}});
        //       return;
        //    }
        {

           
            
            this.Student_.Branch = this.FollowUp_Branch_.Branch_Id;
            this.Student_.Branch_Name = this.FollowUp_Branch_.Branch_Name;
            this.Student_.Department_Id= this.FollowUp_Department_.Department_Id;
            this.Student_.Department_Name= this.FollowUp_Department_.Department_Name;
            this.Student_.To_User_Id= this.Followup_Users_List_.User_Details_Id;
            this.Student_.To_User_Name= this.Followup_Users_List_.User_Details_Name;
            //this.Student_.Status=this.FollowUp_Status_.Department_Status_Id;
            //this.Student_.Remark=this.Remarks_.Remarks_Name
            //this.Student_.Remark_Id=this.Remarks_.Remarks_Id
            //this.Student_.Next_FollowUp_Date= this.New_Date(new Date(moment(this.FollowUp_.Next_FollowUp_Date).format('YYYY-MM-DD')));
            // this.Student_.User_Id = this.Followup_Users_.User_Details_Id;
            // this.Student_.User_Name = this.Followup_Users_.User_Details_Name;
            this.Student_.By_User_Id = parseInt(this.Login_User);
            this.Student_.By_User_Name = this.Login_User_Name;
            this.Student_.Student_Selected_Details = Student_Deatils;
            // this.Student_.Student_Selected_Details = this.Student_Selection_Data_Temp;

            // document.getElementById("Save_Button").hidden = true;
            this.issLoading = true;

            this.Student_Service_.Save_Application_Report_Change_User(
                this.Student_
            ).subscribe(
                (Save_status) => {
                    debugger
                    this.issLoading = false;

                    // log(Save_status[0][0])
                    if (Number(Save_status[0][0].Application_details_Id_) > 0) {
                        const dialogRef = this.dialogBox.open(DialogBox_Component, {
                            panelClass: "Dialogbox-Class",
                            data: { Message: "Saved", Type: "false" },
                        });

                        this.Close_Click();
                        this.Search_Application_Report();
                        document.getElementById("Save_Button").hidden = false;
                    } else {
                        this.issLoading = false;
                        const dialogRef = this.dialogBox.open(DialogBox_Component, {
                            panelClass: "Dialogbox-Class",
                            data: { Message: "Error Occured", Type: "2" },
                        });
                        document.getElementById("Save_Button").hidden = false;
                    }
                },
                (Rows) => {
                    this.issLoading = false;
                    document.getElementById("Save_Button").hidden = false;
                    const dialogRef = this.dialogBox.open(DialogBox_Component, {
                        panelClass: "Dialogbox-Class",
                        data: { Message: "Error Occured", Type: "2" },
                    });
                }
            );
        }
    }

    Count_Change()
    {
       
        
    var count_change=[],count_change_number:any=0;
        
        for (var n = 0; n < this.ToStaff_Student_Data.length;n++)
        if ((this.ToStaff_Student_Data[n].Data_Giving) >= 1)
            {
                count_change.push(this.ToStaff_Student_Data[n].Data_Giving);
                count_change_number=0;
            }
           
        for(var l=0;l<count_change.length;l++){
            count_change_number =Number(count_change_number) +Number(count_change[l])
        }
         this.Balance_Selected= this.Total_Selected - count_change_number;


        //  if (this.Balance_Selected < 0) {
        //     const dialogRef = this.dialogBox.open(DialogBox_Component, {
        //         panelClass: "Dialogbox-Class",
        //         data: { Message: "New assign exceed total selected students", Type: "3" },
        //     });
        //     return;
        // }
}



Search_Branch_Department_Typeahead(event: any) {
    debugger
    var Value = "";
    if (event.target.value == "") Value = undefined;
    else Value = event.target.value;

    if (
        this.FollowUp_Branch_ == null ||
        this.FollowUp_Branch_.Branch_Id == undefined
    ) {
        const dialogRef = this.dialogBox.open(DialogBox_Component, {
            panelClass: "Dialogbox-Class",
            data: { Message: "Select Branch", Type: "3" },
        });
    } else {
        if (
            this.Followup_Department_Data == undefined ||
            this.Followup_Department_Data.length == 0
        ) {
            if (
                this.Followup_Department_Data_Check == undefined ||
                this.Followup_Department_Data_Check.length == 0
            ) {
                this.issLoading = true;
                this.Student_Service_.Search_Branch_Department_Typeahead(
                    this.FollowUp_Branch_.Branch_Id,
                    ""
                ).subscribe(
                    (Rows) => {
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
                    (Rows) => {
                        this.issLoading = false;
                        const dialogRef = this.dialogBox.open(DialogBox_Component, {
                            panelClass: "Dialogbox-Class",
                            data: { Message: "Error Occured", Type: "2" },
                        });
                    }
                );
            } else {
                this.Followup_Department_Data = this.Followup_Department_Data_Check;
            }
        }
    }
}
display_Department(Department_: Department) {
    if (Department_) {
        return Department_.Department_Name;
    }
}

Department_Change() {
    //  document.getElementById("Followup_Status").focus();
    $("[name=Followup_Status]").focus();
    // this.Focus_It();
    this.Followup_Users_ = null;
    this.FollowUp_Status_ = null;
    this.Followup_Users_Data = [];
    this.Followup_Users_Data_t=[];
    this.Followup_Status_Data = [];
    this.Followup_Department_Data = [];
    this.Followup_Users_Task_ = null;
    // if(this.FollowUp_Department_.Department_FollowUp==true)
    // this.Next_FollowUp_Date_Visible=false;
    // else
    // this.Next_FollowUp_Date_Visible=true;
    this.FollowUp_.Next_FollowUp_Date = new Date();
    this.FollowUp_.Next_FollowUp_Date = this.New_Date(
        this.FollowUp_.Next_FollowUp_Date
    );
}



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
    } else {
        if (
            this.Followup_Users_Data == undefined ||
            this.Followup_Users_Data.length == 0
        ) {
            this.issLoading = true;
            var uname = undefined;

            this.Student_Service_.Search_Department_User_Typeahead_Change_User(
                this.FollowUp_Branch_.Branch_Id,
                this.FollowUp_Department_.Department_Id,
                uname,
                this.Usertype
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
display_Followup_Users(Users_: User_Details) {
    if (Users_) {
        return Users_.User_Details_Name;
    }
}

// sort_option()
// {

//     debugger
//     this.dataSource = new MatTableDataSource(this.Student_Data_Search);
//     this.dataSource.sort = this.sort;
// }


}









