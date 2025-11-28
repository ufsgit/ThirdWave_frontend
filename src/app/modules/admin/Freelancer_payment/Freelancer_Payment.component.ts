import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Agent_Details_Service } from '../../../services/Agent_Details.Service';
import { DialogBox_Component } from '../DialogBox/DialogBox.component';
import { Agent_Payment } from '../../../models/Agent_Payment';
import {MatDialog} from '@angular/material';import { ROUTES,Get_Page_Permission } from '../../../components/sidebar/sidebar.component';
import { Student_Service } from 'app/services/Student.Service';
import { Branch } from 'app/models/Branch';
import { User_Details } from 'app/models/User_Details';
import { Student_FollowUp } from 'app/models/Student_FollowUp';
import { Profile } from 'app/models/Profile';
import { Department } from 'app/models/Department';
import { MatDialogRef, MAT_DIALOG_DATA,MatDialogConfig} from '@angular/material';
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
selector: 'app-Freelancer_Details',
templateUrl: './Freelancer_Payment.component.html',
styleUrls: ['./Freelancer_Payment.component.css'],
providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
    ],
})
export class Freelancer_PaymentComponent implements OnInit {
Agent_Details_Data:Agent_Payment[]
Agent_Details_Typeahead_Data:Agent_Payment[]
Agent_Details_:Agent_Payment= new Agent_Payment();
Agent_Details_Temp:Agent_Payment= new Agent_Payment();
Under_Role_:Agent_Payment= new Agent_Payment();
Agent_Details_Name_Search:string;
FromDate= new Date();
ToDate= new Date();
Search_Agent_Details_:string;
Entry_View:boolean=true;
myInnerHeight: number;
EditIndex: number;
Id:number;
Name:string;
Total_Entries: number=0;
color = 'primary';
mode = 'indeterminate';
value = 50;
issLoading: boolean;
Permissions: any;
Agent_Details_Edit:boolean;
Agent_Details_Save:boolean;
Agent_Details_Delete:boolean;
Login_User: string = "0";
myTotalHeight:number;

Branch_: Branch = new Branch();
Branch_Temp: Branch = new Branch();
Branch_Data: Branch[];

User_: User_Details = new User_Details();
User_Temp: User_Details = new User_Details();
User_Data: User_Details[];

FollowUp_Department_TN: Student_FollowUp = new Student_FollowUp();
Followup_Users_Data_tN: Student_FollowUp[];
Profile_: Profile = new Profile();
Login_User_Id_temp:number;
Influencer_Count:number ;
Followup_Department_Data: Department[];
Followup_Department_Data_Check: Department[];
FollowUp_Department_: Department = new Department();
Followup_Users_Data_t: User_Details[];

Followup_Users_: User_Details = new User_Details();
Is_Follow_: number;
FollowUp_: Student_FollowUp = new Student_FollowUp();
Users_Data: User_Details[]
Users_Temp: User_Details = new User_Details();

	Department_Data_Temp: Department = new Department();
	Followup_Users_temp: User_Details = new User_Details();
    User_Type:number;
temp ={
    User_Details_Id:0,
    User_Details_Name:''
}
Users_Data_Filter=[];
        
constructor(public Agent_Details_Service_:Agent_Details_Service,public Student_Service_: Student_Service, private route: ActivatedRoute, private router: Router,public dialogBox: MatDialog) { }
ngOnInit() 
    {
        this.Agent_Details_Typeahead_Data = [];
    this.Login_User = localStorage.getItem("Login_User");
    this.Login_User_Id_temp=Number(this.Login_User)
    this.User_Type = Number(localStorage.getItem("User_Type"));
        this.Influencer_Count = Number(localStorage.getItem("Influencer_Count"));
        // localStorage.setItem("Influencer_Count", "0");
    // this.Permissions = Get_Page_Permission(66);
    // if(this.Permissions==undefined || this.Permissions==null)
    // {
    // localStorage.removeItem('token');
    // this.router.navigateByUrl('Home_Page');
    // }
    // else
    {
    // this.Agent_Details_Edit=this.Permissions.Edit;
    // this.Agent_Details_Save=this.Permissions.Save;
    // this.Agent_Details_Delete=this.Permissions.Delete;
    this.Page_Load()
    }
}
Page_Load()
{
    this.Get_Menu_Status(144,this.Login_User); 
    this.Get_Lead_Load_Data_ByUser(this.Login_User);
    this.myInnerHeight = (window.innerHeight);
    this.myInnerHeight = this.myInnerHeight - 280;
    this.Clr_Agent_Details();
    this.Search_Agent_Details();
    this.Get_Student_PageLoadData_Dropdowns()
    //this.Load_Agent_Details();
    this.Entry_View=false;
    this.myInnerHeight = (window.innerHeight);
    this.myTotalHeight=this.myInnerHeight - 200;
    this.myTotalHeight=this.myTotalHeight-40;
    this.myInnerHeight = this.myInnerHeight - 250;

}


Get_Menu_Status(Menu_id, Login_user_id)
{
    
this.issLoading = false;
this.Agent_Details_Service_.Get_Menu_Status(Menu_id,Login_user_id).subscribe(Rows => {            

    
    if (Rows[0][0]==undefined)
    {
        if(Menu_id==144)
        {
        localStorage.removeItem('token');
        this.router.navigateByUrl('Home_Page');
        }
    }  
    else
    if (Rows[0][0].View >0) 
    {
        
        if(Menu_id==144)
        {
            
            this.Permissions=Rows[0][0];
            if(this.Permissions==undefined || this.Permissions==null)
                {
                    localStorage.removeItem('token');
                    this.router.navigateByUrl('Home_Page');
                }
               
                this.Agent_Details_Edit=this.Permissions.Edit;
                this.Agent_Details_Save=this.Permissions.Save;
                this.Agent_Details_Delete=this.Permissions.Delete;
        }

    }
},
Rows => {
    this.issLoading = false;
    const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Error Occured', Type: "2" } });
});
}

trackByFn(index, item) 
{
return index;
}
Create_New()                           
{ 
    debugger
      if (this.Total_Entries >= this.Influencer_Count) {
    const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Limit Exceeded', Type: "3" } });
} else {
    this.Entry_View = true;
    this.Clr_Agent_Details();
}

}
Close_Click()
{
    this.Entry_View = false;
    this.Clr_Agent_Details()
}
Clr_Agent_Details()
 {
    this.Agent_Details_.influencer_payment_id = 0;
     this.Agent_Details_.Agent_Id = 0;
    this.Agent_Details_.Agent_Name=null;
    this.Under_Role_=null;
    this.Agent_Details_.Amount=null;
    
   
   
}




Get_Student_PageLoadData_Dropdowns() {
    this.Student_Service_.Get_Student_PageLoadData_Dropdowns().subscribe(
        (Rows) => {
            debugger
            this.Branch_Data = Rows[20].slice();
            this.Branch_Temp.Branch_Id = 0;
            this.Branch_Temp.Branch_Name = "Select";
            this.Branch_Data.unshift(Object.assign({}, this.Branch_Temp));
            this.Branch_ = this.Branch_Data[1];

            this.User_Data = Rows[22].slice();
            this.User_Temp.User_Details_Id = 0;
            this.User_Temp.User_Details_Name = "Select";
            this.User_Data.unshift(Object.assign({}, this.User_Temp));
            this.User_ = this.User_Data[1];

        },
        (Rows) => {
            const dialogRef = this.dialogBox.open(DialogBox_Component, {
                panelClass: "Dialogbox-Class",
                data: { Message: "Error Occured", Type: "2" },
            });
        }
    );
}


// Load_Agent_Details(event: any) 
// {           
//     var Value = "";
//     if (event.target.value == "")
//     Value = undefined;
//     else
//     Value = event.target.value;
//     this.issLoading=true;
//         this.Agent_Details_Service_.Load_Agent_Details(Value).subscribe(Rows => {
              
//             if (Rows != null) {
//             this.Agent_Details_Typeahead_Data=Rows[0];
//             }
//             this.issLoading=false;
//              },
//         Rows => 
//         {
//             this.issLoading=false;
//        const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
//         });
// }     
// display_Under_Role(Agent_Details_: Agent_Details)
// {      
//        if (Agent_Details_) { return Agent_Details_.Name;  }
// }
Search_Agent_Details()
{     
        this.issLoading=true;
        this.Agent_Details_Service_.Search_Freelancer_Payment(moment(this.FromDate).format("YYYY-MM-DD"), moment(this.ToDate).format("YYYY-MM-DD"), this.Agent_Details_Name_Search).subscribe(Rows => {
              
              debugger
        this.Agent_Details_Data=Rows[0];
        this.Total_Entries=this.Agent_Details_Data.length;
        if(this.Agent_Details_Data.length==0)
        {
             
            const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'No Details Found',Type:"3"}});
        }
         this.issLoading=false;
        },
        Rows => 
        {
            this.issLoading=false;
            const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
        });
}
    Delete_Agent_Details(Agent_Id_, index) {

        debugger
        const dialogRef = this.dialogBox.open
            (DialogBox_Component, {
                panelClass: 'Dialogbox-Class'
                , data: { Message: 'Do you want to delete ?', Type: "true", Heading: 'Confirm' }
            });
        dialogRef.afterClosed().subscribe(result => {
            if (result == 'Yes') {
                this.issLoading = true;
                debugger
                this.Agent_Details_Service_.Delete_Agent_Payment(Agent_Id_).subscribe(Delete_status => {

                    debugger
                    if (Delete_status[0][0].influencer_payment_id_ > 0) {

                        this.Agent_Details_Data.splice(this.EditIndex, 1);
                        const dialogRef = this.dialogBox.open
                            (DialogBox_Component, {
                                panelClass: 'Dialogbox-Class'
                                , data: { Message: 'Deleted', Type: "false" }
                            });
                        this.Search_Agent_Details();

                    }
                    





                    this.issLoading = false;
                },
                    Rows => {
                        this.issLoading = false;
                        const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Error Occured', Type: "2" } });
                    });

            }
        });


    }
Save_Agent_Details()
{

    if(this.temp.User_Details_Name==undefined || this.temp.User_Details_Name==null || this.temp.User_Details_Name=="")
    {
    const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Enter Name',Type:"3"}}); 
    return  
    }


    
    if(this.Agent_Details_.Amount==''&&this.Agent_Details_.Amount==null&&this.Agent_Details_.Amount==undefined)
    {
       
            const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class'  ,data:{Message:'Enter valid Amount',Type:"3"}});
            return
        
    }

    



    else{
    document.getElementById("Save_Button").hidden=true;
    this.issLoading=true;

    this.Agent_Details_.Agent_Id = this.temp.User_Details_Id;
    this.Agent_Details_.Agent_Name = this.temp.User_Details_Name;
    this.Agent_Details_.Agent_Name.toString();
    this.Agent_Details_Service_.Save_Freelancer_Payment(this.Agent_Details_).subscribe(Save_status => {
        
       
        this.issLoading=false;
    Save_status=Save_status[0];
    if(Save_status!=undefined)
    {
          
    if (Number(Save_status[0].influencer_payment_id_) > 0) 
    {
    const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Saved',Type:"false"}});
    document.getElementById("Save_Button").hidden=false;
    this.Clr_Agent_Details();
    this.Search_Agent_Details();
    this.Close_Click()
    }
    }
    else{
    const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
    document.getElementById("Save_Button").hidden=false;
    }
    this.issLoading=false;
    },
    Rows => { 
        this.issLoading=false;
    const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
    document.getElementById("Save_Button").hidden=false;
    });
    
    }
    }


Edit_Agent_Details(Agent_Details_e:Agent_Payment,index)
{
this.Entry_View=true;
this.Agent_Details_=Agent_Details_e;
console.log('this.Agent_Details_: ', this.Agent_Details_);
this.Agent_Details_=Object.assign({},Agent_Details_e);

for(let i=0;i<this.Users_Data.length;i++){
    if(this.Users_Data[i].User_Details_Id == this.Agent_Details_.Agent_Id){
        this.temp=this.Users_Data[i]
    }
}

}


Department_Change() {
   
    this.Followup_Users_ = null;
    
    this.Followup_Department_Data = [];
 
}


Search_Branch_Department_Typeahead(event: any) {
    debugger
    var Value = "";
    if (event.target.value == "") Value = undefined;
    else Value = event.target.value;

    
        if (
            this.Followup_Department_Data == undefined ||
            this.Followup_Department_Data.length == 0
        ) {
            
                this.issLoading = true;
                debugger
                this.Student_Service_.Search_Branch_Department_TypeaheadNew("").subscribe(
                    (Rows) => {
                        debugger
                        if (Rows != null) {
                            if(Rows.code!=undefined)
                            {
                                const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:Rows.Code,Type:"false"}});
                            }
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
            
        }
        
}



display_Department(Department_: Department) {
    if (Department_) {
        return Department_.Department_Name;
    }
}
display_DepartmentT(Department_t: Student_FollowUp) {
    if (Department_t) {
        return Department_t.Dept_Name;
    }
}



Search_Department_User_Typeahead_Fllowup(event: any) {
    debugger
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
      
            debugger
            this.Student_Service_.Search_Department_User_Typeahead_Latest(
                this.FollowUp_Department_.Department_Id,""
            ).subscribe(
                
                (Rows) => {
                    debugger
                    if (Rows != null) {
                        debugger
                        this.Followup_Users_Data_t = Rows[0];
                        this.issLoading = false;
                    }
                },
                (Rows) => {
                    this.issLoading = false;
                }
            );
      
    }
}

display_Followup_Users(Users_: User_Details) {
    if (Users_) {
        return Users_.User_Details_Name;
    }
}

Search_Name_Typeahead(event: any) {
    debugger
    var Value = "";
    if (event.target.value == "") Value = "";
    else Value = event.target.value.toLowerCase();
    if (this.Users_Data == undefined || this.Users_Data.length == 0) {
        this.issLoading = true;
debugger
        this.Agent_Details_Service_.Search_Name_Typeahead(Value).subscribe(
            (Rows) => {
                debugger
                if (Rows != null) {
                    this.Users_Data = Rows[0];
               
                    this.Users_Data_Filter = [];
                    for (var i = 0; i < this.Users_Data.length; i++) {
                        if (this.Users_Data[i].User_Details_Name.toLowerCase().includes(Value))
                            this.Users_Data_Filter.push(this.Users_Data[i]);
                    }
                }
                this.issLoading = false;
            },
            (Rows) => {
                this.issLoading = false;
            }
        );
    } else {
        this.Users_Data_Filter = [];
        for (var i = 0; i < this.Users_Data.length; i++) {
            if (this.Users_Data[i].User_Details_Name.toLowerCase().includes(Value))
                this.Users_Data_Filter.push(this.Users_Data[i]);
        }
    }
}

	// Search_Status_Typeahead(event: any)
	// {
	//     var Value = "";
	//     if (event.target.value == "")
	//         Value = "";
	//     else
	//         Value = event.target.value.toLowerCase();
	//     if (this.Followup_Status_Data == undefined || this.Followup_Status_Data.length==0)
	//     {
	//         this.issLoading = true;
	//         this.Student_Service_.Search_Status_Typeahead('',3).subscribe(Rows => {
	//         if (Rows != null)
	//         {
	//             this.Followup_Status_Data = Rows[0];
	//             this.issLoading = false;
	//             this.Followup_Status_Data_filter=[];
	//             for (var i=0;i<this.Followup_Status_Data.length;i++)
	//             {
	//                 if(this.Followup_Status_Data[i].Status_Name.toLowerCase().includes(Value))
	//                     this.Followup_Status_Data_filter.push(this.Followup_Status_Data[i])
	//             }
	//         }
	//     },
	//     Rows => {
	//      this.issLoading = false;
	//     });
	//     }
	//     else
	//     {
	//         this.Followup_Status_Data_filter=[];
	//         for (var i=0;i<this.Followup_Status_Data.length;i++)
	//         {
	//             if(this.Followup_Status_Data[i].Status_Name.toLowerCase().includes(Value))
	//                 this.Followup_Status_Data_filter.push(this.Followup_Status_Data[i])
	//         }
	//     }

	// }

display_Course_1(Course_e) {
    if (Course_e) {
        return Course_e.User_Details_Name;
    }
}


Get_Lead_Load_Data_ByUser(Login_User)
    {debugger
        
        this.issLoading = true;
        this.Student_Service_.Get_Lead_Load_Data_ByUser(Login_User).subscribe(Rows => 
        
    {
//    this.Users_Data = Rows[12].slice();
},
Rows => { 
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}}); });
}



}

