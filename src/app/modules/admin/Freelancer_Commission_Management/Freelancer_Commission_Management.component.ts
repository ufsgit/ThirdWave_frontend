import { Component, OnInit, Input, Injectable } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable, of as observableOf, merge } from "rxjs";
import { Student_Service } from "../../../services/Student.service";
import { DialogBox_Component } from "../DialogBox/DialogBox.component";
import { Student } from "../../../models/Student";
import { Branch } from "../../../models/Branch";
import { User_Details } from "../../../models/User_Details";
import { Department } from "../../../models/Department";
import { Department_Status } from "../../../models/Department_Status";
import { Gender } from "../../../models/Gender";
import {
    ROUTES,
    Get_Page_Permission,
} from "../../../components/sidebar/sidebar.component";
import {
    MatDialog,
    MatDialogRef,
    MAT_DIALOG_DATA,
    MatDialogConfig,
} from "@angular/material";
import { FormControl } from "@angular/forms";
import { MomentDateAdapter } from "@angular/material-moment-adapter";
import {
    DateAdapter,
    MAT_DATE_FORMATS,
    MAT_DATE_LOCALE,
} from "@angular/material/core";
import * as _moment from "moment";
import { default as _rollupMoment } from "moment";
import { Remarks } from "../../../models/Remarks";
import { Enquiry_Source } from "../../../models/Enquiry_Source";
import { Student_FollowUp } from "../../../models/Student_FollowUp";
import { sum } from "chartist";

const moment = _rollupMoment || _moment;
export const MY_FORMATS = {
    parse: {
        dateInput: "DD/MM/YYYY",
    },
    display: {
        dateInput: "DD/MM/YYYY",
        monthYearLabel: "MMM YYYY",
        dateA11yLabel: "DD/MM/YYYY",
        monthYearA11yLabel: "MMMM YYYY",
    },
};

@Component({
    selector: "app-Freelancer_Commission_Management",
    templateUrl: "./Freelancer_Commission_Management.component.html",
    styleUrls: ["./Freelancer_Commission_Management.component.css"],
    providers: [
        {
            provide: DateAdapter,
            useClass: MomentDateAdapter,
            deps: [MAT_DATE_LOCALE],
        },
        { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
    ],
})
export class Freelancer_Commission_ManagementComponent implements OnInit {
    Status_Search: Department_Status = new Department_Status();
    User_Search: User_Details = new User_Details();


    Users_Temp1: User_Details = new User_Details();
    Users_Data1: User_Details[]
    User_Search1: User_Details = new User_Details();
    To_User_Search1: User_Details = new User_Details();

    To_User_Search: User_Details = new User_Details();
    Search_Name = "";
    Department_Search: Department = new Department();
    Search_Branch: Branch = new Branch();
    Search_Remark: Remarks = new Remarks();
    Search_FromDate: Date = new Date();
    Search_ToDate: Date = new Date();
    Look_In_Date: Boolean = true;

    Remove_Old_Datas: Boolean = false;

    More_Search_Options: boolean = true;

    Department_Data: Department[];
    Users_Data: User_Details[];
    Branch_Data: Branch[];

    Touser_Branch_Data : Branch[];
    Touser_Branch_Id:number;
    Touser_Branch_name:string;

    Enquiry_Source_Data: Enquiry_Source[];
    Enquiry_Source_Temp1: Enquiry_Source = new Enquiry_Source();
    Enquiry_Source_Search: Enquiry_Source = new Enquiry_Source();

    Status_Data: Department_Status[];
    Gender_Data: Gender[];
    Branch_Temp1: Branch = new Branch();
    Users_Temp: User_Details = new User_Details();
    Department_Temp: Department = new Department();
    Status_Temp: Department_Status = new Department_Status();
    missedfollowup_count: number = 1;
    followup_count: number = 1;
    FollowUp_: Student_FollowUp = new Student_FollowUp();

    Lead_Data: Student[];
    Student_Data_Search: Student[];
    Student_Data: Student[];
    Student_Data_Item: Student = new Student();
    Lead_: Student = new Student();
    Search_Div: boolean = false;
    array: any;
    color = "primary";
    mode = "indeterminate";
    value = 50;
    myInnerHeight: number;
    issLoading: boolean;

    Show_FollowUp: boolean = false;
    main_View: boolean = false;
    Student_Selected_Data: Student[];

    Black: boolean = false;
    Red: boolean = false;
    pagePointer: number = 0;
    pageindex2: number = 0;
    pageindex: number = 0;
    Total_Rows: number = 0;
    isLoading = false;
    Search_By_: any;
    Commission_Type_: any;
    Registered_By_: any;
    year: any;
    month: any;
    day: any;
    date: any;
    Login_User: string = "0";
    Menu_Id: number = 184;

    Select_Student: boolean = false;
    Select_View: boolean = false;
    Student_Id: number = 0;
    Student_: Student = new Student();
    count_change:number;

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
    Total_Selected:number;
    Balance_Selected:number=0;

    Followup_Users_Data: User_Details[];
    Followup_Branch_User_Data: User_Details[];
    Followup_Users_: User_Details = new User_Details();
    

    Student_Selection_Data_Temp: Student[];

    FollowUp_Status_: Department_Status = new Department_Status();

    Followup_Status_Data: Department_Status[];

    FollowUp_Department_: Department = new Department();
    Followup_Department_Data: Department[];
    Followup_Department_Data_Check: Department[];

    FollowUp_Branch_: Branch = new Branch();
    Followup_Branch_Data: Branch[];
    Branch_Temp: Branch = new Branch();

    Remarks_: Remarks = new Remarks();
    Remarks_Data: Remarks[];
    Remarks_Temp: Remarks = new Remarks();
    Login_Id: number;
    Export_Permission: any;
    Delete_Permission: any;
    Export_View: boolean = false;
    Student_Report_Delete_Button:boolean=false;
    Total_Data: number = 0;
    Permissions: any;
    Login_User_Name: string;

    Search_Status: Department_Status = new Department_Status();

    Is_Registered: any;
    UserType:any;

    Followup_Date:boolean = false;
    ToStaff_Student_Data: User_Details[];
    Followup_Date_Change:Date;
    Data_Giving: number;

    myInnerHeighttemp: number;
    myTotalHeight: number;

    profile_View: boolean = true;
    More_Search_Options_Profile: boolean = true;
    More_Button_view=true;
    constructor(
        public Student_Service_: Student_Service,
        private route: ActivatedRoute,
        private router: Router,
        public dialogBox: MatDialog
    ) {}
    ngOnInit() {
        this.Login_User = localStorage.getItem("Login_User");
        this.Login_User_Name = localStorage.getItem("uname");
       
        {
            this.Page_Load();

            if (this.Export_Permission != undefined && this.Export_Permission != null)
                this.Export_View=this.Export_Permission.Edit
        }
    }
    Page_Load() {
       
        this.myInnerHeight = window.innerHeight;
        this.myInnerHeight = this.myInnerHeight - 300;

        this.myTotalHeight = this.myInnerHeight;
        this.myTotalHeight = this.myTotalHeight - 40;
        this.myInnerHeighttemp = this.myInnerHeight


        this.Black_Stop = this.Page_Length_;
        this.Red_Stop = this.Page_Length_;
        this.main_View = true;
        this.Search_Freelancer_Commission_Management();
        this.Show_FollowUp = false;
        this.Search_By_ = 0;
        this.Commission_Type_=0;
        this.Registered_By_ = 1;
        this.Is_Registered = 1;
        this.UserType = 1;
        this.Get_Lead_Load_Data_ByUser(this.Login_User);
        this.Get_Menu_Status(184, this.Login_User);
        this.Get_Menu_Status(38, this.Login_User);
        this.Get_Menu_Status(131, this.Login_User);
        this.Search_FromDate = this.New_Date(this.Search_FromDate);
        this.Search_ToDate = this.New_Date(this.Search_ToDate);
        this.More_Button_view=true;
       
    }

    Get_Menu_Status(Menu_id, Login_user_id) {
        this.issLoading = false;
        this.Student_Service_.Get_Menu_Status(Menu_id, Login_user_id).subscribe(
            (Rows) => {
                if (Rows[0][0] == undefined) {
                    if (Menu_id == 184) {
                        localStorage.removeItem("token");
                        this.router.navigateByUrl("Home_Page");
                    }
                } else if (Rows[0][0].View > 0) {
                    if (Menu_id == 184) {
                        this.Permissions = Rows[0][0];
                        if (this.Permissions == undefined || this.Permissions == null) {
                            localStorage.removeItem("token");
                            this.router.navigateByUrl("Home_Page");
                        }
                    }
                }

                if (Menu_id == 38) {
                    this.Export_Permission = Rows[0][0];

                    if (
                        this.Export_Permission != undefined &&
                        this.Export_Permission != null
                    )
                        this.Export_View = this.Export_Permission.View;
                    else this.Export_View = true;
                }



                else if (Menu_id == 131) {
                   
                    this.Delete_Permission = Rows[0][0];

               

                if (this.Delete_Permission.View == true)
							this.Student_Report_Delete_Button = true;
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

    New_Date(Date_) {
        this.date = Date_;
        this.year = this.date.getFullYear();
        this.month = this.date.getMonth() + 1;
        if (this.month < 10) {
            this.month = "0" + this.month;
        }
        this.day = this.date.getDate().toString();
        if (Number.parseInt(this.day) < 10) {
            this.day = "0" + this.day;
        }
        this.date = this.year + "-" + this.month + "-" + this.day;
        return this.date;
    }
    trackByFn(index, item) {
        return index;
    }
    Edit_Lead(Lead_Id, i) {
        localStorage.setItem("Lead_Id", Lead_Id);

        this.Edit_Page_Permission = Get_Page_Permission(1);
        if (this.Edit_Page_Permission == undefined) {
            const dialogRef = this.dialogBox.open(DialogBox_Component, {
                panelClass: "Dialogbox-Class",
                data: { Message: "No permission to view", Type: "2" },
            });
        } else if (this.Edit_Page_Permission.View == true)
            this.router.navigateByUrl("/Leads");
        else {
            const dialogRef = this.dialogBox.open(DialogBox_Component, {
                panelClass: "Dialogbox-Class",
                data: { Message: "No permission to view", Type: "2" },
            });
        }
    }

    Student_View_Click() {
        for (var i = 0; i < this.Student_Data_Search.length; i++) {
            if (this.Select_Student == false)
                this.Student_Data_Search[i].Check_Box_View = true;
            else this.Student_Data_Search[i].Check_Box_View = false;
        }
    }
 
    Search_Lead_button() {
        this.Black_Start = 1;
        this.Black_Stop = this.Page_Length_;
        this.Red_Start = 1;
        this.Total_Rows = 0;
        this.Red_Stop = this.Page_Length_;
        this.Search_Freelancer_Commission_Management();
    }
    

    Search_More_Options() {
       
        if (this.More_Search_Options == true) 
        {
            this.myInnerHeight=this.myInnerHeighttemp-220;
            this.More_Search_Options = false;
        }
        
        else 
        {
            this.More_Search_Options = true;
            this.myInnerHeight=this.myInnerHeighttemp
        }
        
    }


    Export() {
        this.Student_Service_.exportExcel(
            this.Student_Data_Search,
            "Student_Report"
        );
    }
    
    Search_Freelancer_Commission_Management() {
        debugger
        var 
        freelancer_=0,
            User_Id = 0,
            commission_type_=0,
            look_In_Date_Value = 0;

        if (this.Commission_Type_ != undefined && this.Commission_Type_ != null)
            if (
                this.Commission_Type_ != undefined &&
                this.Commission_Type_ != null &&
                this.Commission_Type_ != ""
            )
            commission_type_ = this.Commission_Type_;

        if (this.Look_In_Date == true) look_In_Date_Value = 1;


        if (this.To_User_Search != undefined && this.To_User_Search != null)
            if (
                this.To_User_Search.User_Details_Id != undefined &&
                this.To_User_Search.User_Details_Id != null
            )
            freelancer_ = this.To_User_Search.User_Details_Id;

        

      

        this.issLoading = true;
debugger
        this.Student_Service_.Search_Freelancer_Commission_Management(
            moment(this.Search_FromDate).format("YYYY-MM-DD"),
            moment(this.Search_ToDate).format("YYYY-MM-DD"),look_In_Date_Value,
            freelancer_,
            commission_type_,
            this.Black_Start,
            this.Black_Stop,
            this.Login_User,
            this.Red_Start,
            this.Red_Stop
        ).subscribe(
            (Rows) => {
                debugger 
                // log(Rows)
                this.Student_Data_Search = Rows.returnvalue.Leads;
                this.Total_Data = this.Student_Data_Search.length;
                this.missedfollowup_count = 0;
                this.followup_count = 0;

                for (var i = 0; i < this.Student_Data_Search.length; i++) {
                    this.Student_Data_Search[i].RowNo = i + 1 + this.Total_Rows;
                    if (this.Student_Data_Search[i].tp == 1)
                        this.followup_count = this.followup_count + 1;
                    if (this.Student_Data_Search[i].tp == 2)
                        this.missedfollowup_count = this.missedfollowup_count + 1;
                }

                if (this.Student_Data_Search.length > 0)
                    this.Total_Rows = this.Total_Rows + this.Student_Data_Search.length;
                this.issLoading = false;
                if (this.Student_Data_Search.length == 0) {
                    const dialogRef = this.dialogBox.open(DialogBox_Component, {
                        panelClass: "Dialogbox-Class",
                        data: { Message: "No Details Found", Type: "3" },
                    });
                }
            },
            (Rows) => {
                // log(Rows)
                const dialogRef = this.dialogBox.open(DialogBox_Component, {
                    panelClass: "Dialogbox-Class",
                    data: { Message: "Error Occured", Type: "2" },
                });
                this.issLoading = false;
            }
        );
    }

    
    Get_Lead_Load_Data_ByUser(Login_User) {
        debugger
        this.Student_Service_.Get_Lead_Load_Data_ByUser(Login_User).subscribe(
            (Rows) => {
                debugger
               

                this.Users_Data1 = Rows[20].slice();
                this.Users_Temp1.User_Details_Id = 0;
                this.Users_Temp1.User_Details_Name = "All";
                this.Users_Data1.unshift(Object.assign({},this.Users_Temp1));
                this.To_User_Search= this.Users_Data1[0];

                
            },
            (Rows) => {
                const dialogRef = this.dialogBox.open(DialogBox_Component, {
                    panelClass: "Dialogbox-Class",
                    data: { Message: "Error Occured", Type: "2" },
                });
            }
        );
    }

    Next_Click() {
        if (this.Student_Data_Search.length == this.Page_Length_) {
            this.Black_Start = this.Black_Start + this.Page_Length_;
            this.Black_Stop = this.Black_Stop + this.Page_Length_;
            if (this.missedfollowup_count > 0) {
                this.Red_Start = this.Red_Start + this.missedfollowup_count;
                this.Red_Stop = this.Red_Start + this.Page_Length_;
            }
            this.nextflag = 1;
            if (this.Student_Data_Search.length > 0) {
                this.Search_Freelancer_Commission_Management();
            }
        }
    }
    previous_Click() {
        if (this.Black_Start > 1) {
            {
                this.Black_Start = this.Black_Start - this.Page_Length_;
                this.Black_Stop = this.Black_Stop - this.Page_Length_;
            }
            if (this.missedfollowup_count > 0 || this.Red_Start > 1) {
                this.Red_Start = this.Red_Start - this.Page_Length_;
                if (this.Red_Start <= 0) this.Red_Start = 1;
                this.Red_Stop = this.Red_Start + this.Page_Length_;
            }
            this.Total_Rows =
                this.Total_Rows - this.Student_Data_Search.length - this.Page_Length_;
            this.Search_Freelancer_Commission_Management();
        }
    }

    

    Save_Freelancer_Commission_Management() {
        var Student_Deatils = [];


        var Status = false;
        var Student_Deatils_Count =[];

debugger
        for (var m = 0; m < this.Student_Data_Search.length; m++) {
            if (Boolean(this.Student_Data_Search[m].Check_Box_View) == true)
            {
                Student_Deatils.push( this.Student_Data_Search[m]);
                Student_Deatils_Count.push( this.Student_Data_Search[m]);
                this.Total_Selected =Student_Deatils_Count.length;
            }

        }
        debugger

        // for (var m = 0; m < this.Student_Data_Search.length; m++) {
        //     if (Boolean(this.Student_Data_Search[m].Check_Box_View) == true)

        //         Status = true;      
        // }
        if (this.Total_Selected <= 0) {
            const dialogRef = this.dialogBox.open(DialogBox_Component, {
                panelClass: "Dialogbox-Class",
                data: { Message: "Select Student to Update", Type: "3" },
            });
            return;
        }
        debugger

        // for (var m = 0; m < this.Student_Data_Search.length; m++) {
        //     if (Boolean(this.Student_Data_Search[m].Check_Box_View) == true) {
        //                     Student_Deatils.push( this.Student_Data_Search[m]);
        //                     m++;
        //                     if (m >=this.Student_Data_Search.length)
        //                     {
                               
        //                         m = this.Student_Data_Search.length;
        //                         break

        //                     }
        //     }
        // }






        
        {

           
            
            // this.Student_.Branch = this.FollowUp_Branch_.Branch_Id;
            // this.Student_.Branch_Name = this.FollowUp_Branch_.Branch_Name;
            // this.Student_.By_User_Id = parseInt(this.Login_User);
            // this.Student_.By_User_Name = this.Login_User_Name;
            this.Student_.Student_Selected_Details = Student_Deatils;

            // document.getElementById("Save_Button").hidden = true;
            this.issLoading = true;
debugger
            this.Student_Service_.Save_Freelancer_Commission_Management(
                this.Student_
            ).subscribe(
                (Save_status) => {
                 debugger   
                    this.issLoading = false;

                 
                    if (Number(Save_status[0][0].Student_Id_) > 0) {
                        const dialogRef = this.dialogBox.open(DialogBox_Component, {
                            panelClass: "Dialogbox-Class",
                            data: { Message: "Saved", Type: "false" },
                        });

                        this.Close_Click();
                        this.Search_Freelancer_Commission_Management();
                        // document.getElementById("Save_Button").hidden = false;
                    } else {
                        this.issLoading = false;
                        const dialogRef = this.dialogBox.open(DialogBox_Component, {
                            panelClass: "Dialogbox-Class",
                            data: { Message: "Error Occured", Type: "2" },
                        });
                        // document.getElementById("Save_Button").hidden = false;
                    }
                },
                (Rows) => {
                    this.issLoading = false;
                    // document.getElementById("Save_Button").hidden = false;
                    const dialogRef = this.dialogBox.open(DialogBox_Component, {
                        panelClass: "Dialogbox-Class",
                        data: { Message: "Error Occured", Type: "2" },
                    });
                }
            );
        }
    }

    Close_Click() {
        this.Show_FollowUp = false;
        this.main_View = true;
        this.Select_Student = false;
        this.Select_View = false;
        this.FollowUp_Branch_ = null;
        this.FollowUp_Department_ = null;
        this.FollowUp_Status_ = null;
        this.Followup_Users_ = null;
        this.Remarks_ = null;
        this.Student_.Next_FollowUp_Date = null;
        this.Student_.Check_Box_View = false;
        this.Select_Student = false;
        this.ToStaff_Student_Data = null;
        this.Followup_Date  = false;
    }


    Edit_Student_Notification(Student_Id, i) {
       
        localStorage.setItem('Student_Id', Student_Id);
        console.log(Student_Id)
        this.Edit_Page_Permission = Get_Page_Permission(5);
        if (this.Edit_Page_Permission == undefined) {
            const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'No permission to view', Type: "2" } });
        }
        else if (this.Edit_Page_Permission.View == true)
       
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