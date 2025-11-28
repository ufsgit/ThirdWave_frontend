import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogBox_Component } from '../DialogBox/DialogBox.component';
import { Enquiry_Source} from '../../../models/Enquiry_Source';
import { Enquiry_Source_Service } from '../../../services/Enquiry_Source.service';
import { Application_Status_Service } from '../../../services/Application_status.service';
import {MatDialog} from '@angular/material';import { ROUTES,Get_Page_Permission } from '../../../components/sidebar/sidebar.component';
import { ApplicationStatus } from 'app/models/ApplicationStatus';
import { Application_Group } from "../../../models/Application_Group";
import { ApplicationGroupService } from "../../../services/application-group.service";
import { Department } from 'app/models/Department';
import { Student_Service } from 'app/services/Student.service';
import { User_Details_Service } from 'app/services/User_Details.service';


@Component({
selector: 'app-Application_Status',
templateUrl: './Application_Status.component.html',
styleUrls: ['./Application_Status.component.css']
})
export class Application_StatusComponent implements OnInit {
Application_Status_Data:ApplicationStatus[]
Group_restriction_Data:Application_Group[];
Application_Status_:ApplicationStatus= new ApplicationStatus();


Application_Restriction_Group_:Application_Group= new Application_Group();

Application_Name_Search:string;
Application_Group_:Application_Group = new Application_Group();
Application_Group_Data: Application_Group[];
Application_Group_Data_Filter: Application_Group[];
Application_Group_Temp: ApplicationStatus = new ApplicationStatus();

Entry_View:boolean=true;
EditIndex: number;
Total_Entries: number;
color = 'primary';
mode = 'indeterminate';
value = 50;
issLoading: boolean;
Permissions: any;
Application_Status_Edit:boolean;
Application_Status_Save:boolean;
Application_Status_Delete:boolean;
myInnerHeight: number;
myTotalHeight:number;
Login_User:string="0";

Automatic_Department_Data:Department[]
Automatic_Department_Data_Temp:Department = new Department();

Restriction_Data_Temp:Application_Group = new Application_Group();
    Enable_Call_Button :boolean = true
    Enable_Call :number;


    Automatic_Department_: Department = new Department();
    Notification_Department_: Department = new Department();
    

constructor(public Application_Status_Service_:Application_Status_Service,public User_Details_Service_ : User_Details_Service,public Student_Service_:Student_Service,public Application_Group_Service_:ApplicationGroupService,public Enquiry_Source_Service_:Enquiry_Source_Service, private route: ActivatedRoute, private router: Router,public dialogBox: MatDialog) { }
ngOnInit() 
{
    this.Login_User=localStorage.getItem(("Login_User"));

// this.Permissions = Get_Page_Permission(20);
// if(this.Permissions==undefined || this.Permissions==null)
// {
// localStorage.removeItem('token');
// this.router.navigateByUrl('Home_Page');
// }
// else
{
// this.Enquiry_Source_Edit=this.Permissions.Edit;
// this.Enquiry_Source_Save=this.Permissions.Save;
// this.Enquiry_Source_Delete=this.Permissions.Delete;
this.Page_Load()
}
}
Page_Load()
{
this.myInnerHeight = (window.innerHeight);
this.myInnerHeight = this.myInnerHeight - 250;
this.Clr_Application_status();
this.Load_Restriction_Status();
this.Get_Menu_Status(100,this.Login_User);

this.Search_Application_Status();
this.Load_Automatic_Departments();
this.Entry_View=false;

this.myInnerHeight = (window.innerHeight);
this.myTotalHeight=this.myInnerHeight - 200;
this.myTotalHeight=this.myTotalHeight-40;
this.myInnerHeight = this.myInnerHeight - 230;
}

Get_Menu_Status(Menu_id, Login_user_id)
{
this.issLoading = true;
this.Enquiry_Source_Service_.Get_Menu_Status(Menu_id,Login_user_id).subscribe(Rows => {            
  
    
    if (Rows[0][0]==undefined)
    {
        if(Menu_id==100)
        {
        localStorage.removeItem('token');
        this.router.navigateByUrl('Home_Page');
        }
    }  
    else
    if (Rows[0][0].View >0) 
    {
        
        
        if(Menu_id==100)
        {
            
        

            this.Permissions=Rows[0][0];
            if(this.Permissions==undefined || this.Permissions==null)
                {
                    localStorage.removeItem('token');
                    this.router.navigateByUrl('Home_Page');
                }
                this.Application_Status_Edit=this.Permissions.Edit;
                this.Application_Status_Save=this.Permissions.Save;
                this.Application_Status_Delete=this.Permissions.Delete;
    
        }

    }

},
Rows => {
    this.issLoading = false;
    const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Error Occured', Type: "2" } });
});
}

Create_New()
{
this.Entry_View = true;
this.Clr_Application_status();
}
Close_Click()
{
this.Entry_View = false;

}
trackByFn(index, item) 
{
return index;
}

 Clr_Application_status()
 {
    
this.Application_Status_.Application_status_Id=0;
this.Application_Status_.Application_Status_Name="";
this.Application_Status_.Application_Group_Id=0;
this.Application_Status_.Application_Group_Name="";
this.Application_Group_=null
this.Application_Status_.Notification_Status=false;
this.Application_Status_.Transfer_Status=false;
if (
this.Automatic_Department_Data != null &&
this.Automatic_Department_Data != undefined
)
this.Notification_Department_ = this.Automatic_Department_Data[0];

if (
this.Automatic_Department_Data != null &&
this.Automatic_Department_Data != undefined
)
this.Automatic_Department_ = this.Automatic_Department_Data[0];

if (
this.Group_restriction_Data != null &&
this.Group_restriction_Data != undefined
)
this.Application_Restriction_Group_ = this.Group_restriction_Data[0]; 

}
Search_Application_Group_Typeahead(event: any) {
    var Value = "";
    if (event.target.value == "") Value = "";
    else Value = event.target.value.toLowerCase();

    if (this.Application_Group_Data == undefined || this.Application_Group_Data.length == 0) {
        this.issLoading = true;

        this.Application_Group_Service_.Search_Application_Group_Typeahead(Value).subscribe(
            (Rows) => {
                if (Rows != null) {
                    this.Application_Group_Data = Rows[0];
                    this.Application_Group_Data_Filter = [];
                    for (var i = 0; i < this.Application_Group_Data.length; i++) {
                        if (
                            this.Application_Group_Data[i].Application_Group_Name.toLowerCase().includes(Value)
                        )
                            this.Application_Group_Data_Filter.push(this.Application_Group_Data[i]);
                    }
                }
                this.issLoading = false;
            },
            (Rows) => {
                this.issLoading = false;
            }
        );
    } else {
        this.Application_Group_Data_Filter = [];
        for (var i = 0; i < this.Application_Group_Data.length; i++) {
            if (this.Application_Group_Data[i].Application_Group_Name.toLowerCase().includes(Value))
                this.Application_Group_Data_Filter.push(this.Application_Group_Data[i]);
        }
    }
}
display_Application_Group(Application_Group_e: Application_Group) {
    if (Application_Group_e) {
        return Application_Group_e.Application_Group_Name;
    }
}
Search_Application_Status()
{
this.issLoading=true;

this.Application_Status_Service_.Search_Application_Status(this.Application_Name_Search).subscribe(Rows => {
    
 this.Application_Status_Data=Rows[0];
this.Total_Entries=this.Application_Status_Data.length;
if(this.Application_Status_Data.length==0)
{
this.issLoading=false;
const dialogRef = this.dialogBox.open
( DialogBox_Component, {panelClass:'Dialogbox-Class'
,data:{Message:'No Details Found',Type:"3"}});
}
this.issLoading=false;
 },
 Rows => { 
this.issLoading=false;
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
 });
}
Delete_Application_Status(Application_status_Id,index)
{
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Do you want to delete ?',Type:true,Heading:'Confirm'}});
this.Search_Application_Status();
dialogRef.afterClosed().subscribe(result =>
{
if(result=='Yes')
{
this.issLoading=true;
this.Application_Status_Service_.Delete_Application_Status(Application_status_Id).subscribe(Delete_status => {
if(Delete_status[0][0].Application_status_Id_>0){
this.Application_Status_Data.splice(this.EditIndex, 1);
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Deleted',Type: "false"}});
this.Search_Application_Status();
}else if(Number(Delete_status[0][0].Application_status_Id_)== -2)
{
    const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Already in Use, Cannot be Deleted!',Type:"2"}});
}else{
    const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
}
this.issLoading=false;
 },
 Rows => { 
this.issLoading=false;
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
 });
}
 });
}
Save_Application_Status()
{    
if (this.Application_Status_.Application_Status_Name == undefined || this.Application_Status_.Application_Status_Name== null || this.Application_Status_.Application_Status_Name == undefined || this.Application_Status_.Application_Status_Name=='') {
    const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Enter Application Status', Type: "3" } });
    return;
}
    
if (this.Application_Group_ == undefined || this.Application_Group_== null) {
const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Select Application Group', Type: "3" } });
return;
}
if(this.Application_Status_.Transfer_Status== true){
    if (
        this.Automatic_Department_.Department_Id == undefined ||
        this.Automatic_Department_.Department_Id == null ||
        this.Automatic_Department_.Department_Id == 0
    ) {
        const dialogRef = this.dialogBox.open(DialogBox_Component, {
            panelClass: "Dialogbox-Class",
            data: { Message: "Select Transfer Department", Type: "3" },
        });
        return;
    }
}
if(this.Application_Status_.Notification_Status== true){
    if (
        this.Notification_Department_.Department_Id == undefined ||
        this.Notification_Department_.Department_Id == null ||
        this.Notification_Department_.Department_Id == 0
    ) {
        const dialogRef = this.dialogBox.open(DialogBox_Component, {
            panelClass: "Dialogbox-Class",
            data: { Message: "Select Notification Department", Type: "3" },
        });
        return;
    }
}
var Application_Group_Id_temp = 0;
var Application_Group_Caption_Temp = "";

if (this.Application_Group_ != undefined || this.Application_Group_ != null) {
    if (
        this.Application_Group_.Application_Group_Id == undefined ||
        this.Application_Group_.Application_Group_Id == null
    ) {
        Application_Group_Id_temp = -1;
        Application_Group_Caption_Temp = String(this.Application_Group_);
    } else {
        Application_Group_Id_temp = this.Application_Group_.Application_Group_Id;
        Application_Group_Caption_Temp = this.Application_Group_.Application_Group_Name;
    }
} else {
    Application_Group_Id_temp = 0;
    Application_Group_Caption_Temp = "";
}
this.Application_Status_.Application_Group_Name = Application_Group_Caption_Temp;
this.Application_Status_.Application_Group_Id = Application_Group_Id_temp;

this.Application_Status_.Transfer_Department_Id = this.Automatic_Department_.Department_Id;
this.Application_Status_.Transfer_Department_Name = this.Automatic_Department_.Department_Name;

this.Application_Status_.Notification_Department_Id = this.Notification_Department_.Department_Id;
this.Application_Status_.Notification_Department_Name = this.Notification_Department_.Department_Name;
this.Application_Status_.Group_Restriction=this.Application_Restriction_Group_.Application_Group_Id;
this.issLoading=true;
this.Application_Status_Service_.Save_Application_Status(this.Application_Status_).subscribe(Save_status => {
    
Save_status=Save_status[0];
if(Number(Save_status[0].Application_status_Id_)>0)
{
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Saved',Type:"false"}});
this.Search_Application_Status();
this.Clr_Application_status();
}
else{
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
}
this.issLoading=false;
 },
 Rows => { 
this.issLoading=false;
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:Rows.error,Type:"2"}});
 });
 
}
Edit_Application_Status(ApplicationStatus_e:ApplicationStatus,index)
{ 

// console.log(ApplicationStatus_e);    
this.Entry_View=true;
// this.Application_Status_=ApplicationStatus_e;
this.Application_Status_=Object.assign({},ApplicationStatus_e);


this.Application_Group_Temp.Application_Group_Id = this.Application_Status_.Application_Group_Id;
this.Application_Group_Temp.Application_Group_Name = this.Application_Status_.Application_Group_Name;
this.Application_Group_ = Object.assign({}, this.Application_Group_Temp);
// this.Application_Status_.Application_status_Id = this.Application_Status_.Application_status_Id;
// this.Application_Status_.Application_Status_Name = this.Application_Status_.Application_Status_Name;

// this.Application_Group_Temp.Application_Group_Id = this.Application_Status_.Application_Group_Id;
// this.Application_Group_Temp.Application_Group_Name = this.Application_Status_.Application_Group_Name;
// this.Application_Status_ = Object.assign({},ApplicationStatus_e);

for (var i = 0; i < this.Automatic_Department_Data.length; i++) {
    if (
        this.Application_Status_.Transfer_Department_Id ==
        this.Automatic_Department_Data[i].Department_Id
    )
        this.Automatic_Department_ = this.Automatic_Department_Data[i];
}

for (var i = 0; i < this.Automatic_Department_Data.length; i++) {
    if (
        this.Application_Status_.Notification_Department_Id ==
        this.Automatic_Department_Data[i].Department_Id
    )
        this.Notification_Department_ = this.Automatic_Department_Data[i];
}
if(this.Application_Status_.Group_Restriction!= null || this.Application_Status_.Group_Restriction!= undefined ){
    for (var i = 0; i < this.Group_restriction_Data.length; i++) {
        if (
            this.Application_Status_.Group_Restriction ==
            this.Group_restriction_Data[i].Application_Group_Id
        )
            this.Application_Restriction_Group_ = this.Group_restriction_Data[i];
    }
}

else{
    this.Load_Restriction_Status()
}

}


Load_Automatic_Departments() {
    this.issLoading = true;
    this.User_Details_Service_.Get_Users_Load_Data().subscribe(
      (Rows) => {
        if (Rows != null) {
          
            this.Automatic_Department_Data=Rows.Profile_Department;

            this.Automatic_Department_Data_Temp.Department_Id = 0;
            this.Automatic_Department_Data_Temp.Department_Name = "Select";
            this.Automatic_Department_Data.unshift(this.Automatic_Department_Data_Temp);
            this.Notification_Department_ = this.Automatic_Department_Data[0];
            this.Automatic_Department_ = this.Automatic_Department_Data[0];

            // this.Automatic_Department_Data = Rows[0].slice();
            // this.Automatic_Department_Data_Temp.Department_Id = 0;
            // this.Automatic_Department_Data_Temp.Department_Name = "Select";
            // this.Automatic_Department_Data.unshift(Object.assign({}, this.Automatic_Department_Data_Temp));
            // this.Automatic_Department_ = this.Automatic_Department_Data[0];
            // this.Notification_Department_ = this.Automatic_Department_Data[0];
            // this.Notification_Department_ = Object.assign({}, this.Automatic_Department_Data[0])

        }
      },
      (Rows) => {
        this.issLoading = false;
      }
    );
  }




  Load_Restriction_Status() {
    this.issLoading = true;
    this.Student_Service_.Load_Restriction_Status().subscribe(
      (Rows) => {
        if (Rows != null) {
          
            this.Group_restriction_Data = Rows[0].slice();
            this.Restriction_Data_Temp.Application_Group_Id = 0;
            this.Restriction_Data_Temp.Application_Group_Name = "Select";
            this.Group_restriction_Data.unshift(Object.assign({}, this.Restriction_Data_Temp));
            this.Application_Restriction_Group_ = this.Group_restriction_Data[0];
          this.issLoading = false;
        }
      },
      (Rows) => {
        this.issLoading = false;
      }
    );
  }


}

