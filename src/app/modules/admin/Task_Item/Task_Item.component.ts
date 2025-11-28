import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogBox_Component } from '../DialogBox/DialogBox.component';
import { Enquiry_Source} from '../../../models/Enquiry_Source';
import { Enquiry_Source_Service } from '../../../services/Enquiry_Source.service';
import { Application_Status_Service } from '../../../services/Application_status.service';
import {MatDialog} from '@angular/material';import { ROUTES,Get_Page_Permission } from '../../../components/sidebar/sidebar.component';
import { ApplicationStatus } from 'app/models/ApplicationStatus';
import { Task_Item } from 'app/models/Task_Item';
import { Task_Item_Service } from 'app/services/Task_Item.Service';
import { Student_Service } from 'app/services/Student.service';
import { Task_Group } from 'app/models/Task_group';
import { Department } from 'app/models/Department';
import { Task_Type } from 'app/models/Task_Type';

@Component({
selector: 'app-Task_Item',
templateUrl: './Task_Item.component.html',
styleUrls: ['./Task_Item.component.css']
})
export class Task_ItemComponent implements OnInit {
Task_Item_Data:Task_Item[]
Task_Item_:Task_Item= new Task_Item();

Task_Item_Search:string;

Task_Type:Task_Type= new Task_Type();

Search_Task_Type: Task_Type = new Task_Type();
Search_Task_Type_Temp: Task_Type = new Task_Type();
Search_Task_Type_Data: Task_Type[];
Entry_View:boolean=true;
EditIndex: number;
Total_Entries: number;
color = 'primary';
mode = 'indeterminate';
value = 50;
issLoading: boolean;
Permissions: any;
Task_Item_Edit:boolean;
Task_Item_Save:boolean;
Task_Item_Delete:boolean;
myInnerHeight: number;
myTotalHeight:number;
Login_User:string="0";

Department_Data:Department[];
Department_Temp :Department = new Department();
Department_ : Department = new Department();


Task_Group_: Task_Group = new Task_Group();
Task_Group_Temp: Task_Group = new Task_Group();
Task_Group_Data: Task_Group[];
Task_Group_Search: Task_Group = new Task_Group();

constructor(public Task_Item_Service_:Task_Item_Service,public Student_Service_:Student_Service,public Enquiry_Source_Service_:Enquiry_Source_Service, private route: ActivatedRoute, private router: Router,public dialogBox: MatDialog) { }
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
this.Clr_Task_Item();
this.Get_Menu_Status(101,this.Login_User);

this.Search_Task_Item();
this.Task_Type_Dropdown();
this.Get_Student_PageLoadData_Dropdowns();
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
        if(Menu_id==101)
        {
        localStorage.removeItem('token');
        this.router.navigateByUrl('Home_Page');
        }
    }  
    else
    if (Rows[0][0].View >0) 
    {
        
        
        if(Menu_id==101)
        {
            
        

            this.Permissions=Rows[0][0];
            if(this.Permissions==undefined || this.Permissions==null)
                {
                    localStorage.removeItem('token');
                    this.router.navigateByUrl('Home_Page');
                }
                this.Task_Item_Edit=this.Permissions.Edit;
                this.Task_Item_Save=this.Permissions.Save;
                this.Task_Item_Delete=this.Permissions.Delete;
    
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
this.Clr_Task_Item();
}
Close_Click()
{
this.Entry_View = false;

}
trackByFn(index, item) 
{
return index;
}

Clr_Task_Item()
 {
    debugger
this.Task_Item_.Task_Item_Id=0;
this.Task_Item_.Task_Item_Name="";
this.Task_Item_.Duration=0;
this.Task_Item_.Document_Upload=false;
this.Task_Item_.Rating=false;
this.Task_Item_.Notification_Department_Id=0;
this.Task_Item_.Notification_Department_Name="";


if (this.Search_Task_Type_Data != null && this.Search_Task_Type_Data != undefined)
    this.Task_Type = this.Search_Task_Type_Data[0];
if (
    this.Task_Group_Data != null &&
    this.Task_Group_Data != undefined
)
    this.Task_Group_ = this.Task_Group_Data[0];

    if (this.Department_Data != null && this.Department_Data != undefined)
        this.Department_ = this.Department_Data[0];
}
Task_Type_Dropdown() {
    this.issLoading = true;
    this.Task_Item_Service_.Task_Type_Dropdown().subscribe(
      (Rows) => {
        if (Rows != null) {
          this.Search_Task_Type_Data = Rows[0];
          this.Search_Task_Type_Temp.Task_Type_Id = 0;
          this.Search_Task_Type_Temp.Task_Type_Name = "Select";
          this.Search_Task_Type_Data.unshift(this.Search_Task_Type_Temp);
          this.Search_Task_Type = this.Search_Task_Type_Data[0];
  
        
  
          this.issLoading = false;
        }
      },
      (Rows) => {
        this.issLoading = false;
      }
    );
  }

Search_Task_Item()
{
    debugger
this.issLoading=true;
this.Task_Item_Service_.Search_Task_Item(this.Task_Item_Search).subscribe(Rows => {
    debugger
 this.Task_Item_Data=Rows[0];
this.Total_Entries=this.Task_Item_Data.length;
if(this.Task_Item_Data.length==0)
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
Delete_Task_Item(Application_status_Id,index)
{
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Do you want to delete ?',Type:true,Heading:'Confirm'}});
this.Search_Task_Item();
dialogRef.afterClosed().subscribe(result =>
{
if(result=='Yes')
{
this.issLoading=true;
this.Task_Item_Service_.Delete_Task_Item(Application_status_Id).subscribe(Delete_status => {
if(Delete_status[0][0].Task_Item_Id_>0){
this.Task_Item_Data.splice(this.EditIndex, 1);
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Deleted',Type: "false"}});
this.Search_Task_Item();
}else if(Number(Delete_status[0][0].Task_Item_Id_)== -2)
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
Save_Task_Item()
{

    if (this.Task_Item_.Task_Item_Name == undefined || this.Task_Item_.Task_Item_Name== null || this.Task_Item_.Task_Item_Name == undefined || this.Task_Item_.Task_Item_Name=='') {
        const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Enter Task Item', Type: "3" } });
       return;
    }

    if (
        this.Task_Type == undefined ||
        this.Task_Type == null ||
        this.Task_Type.Task_Type_Id == undefined ||
        this.Task_Type.Task_Type_Id == 0
      ) {
        const dialogRef = this.dialogBox.open(DialogBox_Component, {
          panelClass: "Dialogbox-Class",
          data: { Message: "Select Task Type", Type: "3" },
        });
        return;
      }
  
    // if (
    //     this.Task_Group_ == undefined ||
    //     this.Task_Group_ == null ||
    //     this.Task_Group_.Task_Group_Id == undefined ||
    //     this.Task_Group_.Task_Group_Id == 0
    // ) {
    //     const dialogRef = this.dialogBox.open(DialogBox_Component, {
    //         panelClass: "Dialogbox-Class",
    //         data: { Message: "Select Task Group", Type: "3" },
    //     });
    //     return;
    // }

    // if (this.Task_Item_.Duration == undefined || this.Task_Item_.Duration== null || this.Task_Item_.Duration == undefined || this.Task_Item_.Duration==0) {
    //     const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Enter Duration', Type: "3" } });
    //    return;
    // }
    
this.issLoading=true;
this.Task_Item_.Task_Item_Group=this.Task_Group_.Task_Group_Id;
this.Task_Item_.Task_Type_Id= this.Task_Type.Task_Type_Id;
this.Task_Item_.Notification_Department_Id=this.Department_.Department_Id;
this.Task_Item_.Notification_Department_Name=this.Department_.Department_Name;
debugger
this.Task_Item_Service_.Save_Task_Item(this.Task_Item_).subscribe(Save_status => {
    debugger
Save_status=Save_status[0];
if(Number(Save_status[0].Task_Item_Id_)>0)
{
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Saved',Type:"false"}});

this.Clr_Task_Item();
this.Search_Task_Item();
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
Edit_Task_Item(Task_Item_e:Task_Item,index)
{ debugger
this.Entry_View=true;
this.Task_Item_=Task_Item_e;
this.Task_Item_=Object.assign({},Task_Item_e);
for (var i = 0; i < this.Search_Task_Type_Data.length; i++) {
    if (
        this.Task_Item_.Task_Type_Id ==
        this.Search_Task_Type_Data[i].Task_Type_Id
    )
        this.Task_Type = this.Search_Task_Type_Data[i];
}
for (var i = 0; i < this.Task_Group_Data.length; i++) {
    if (
        this.Task_Item_.Task_Item_Group ==
        this.Task_Group_Data[i].Task_Group_Id
    )
        this.Task_Group_ = this.Task_Group_Data[i];
}


debugger
for (var i = 0; i < this.Department_Data.length; i++) {
    if (
        this.Task_Item_.Notification_Department_Id ==
        this.Department_Data[i].Department_Id
    )
        this.Department_ = this.Department_Data[i];
}
// this.Clr_Task_Item();

}

Get_Student_PageLoadData_Dropdowns() {
    this.Student_Service_.Get_Student_PageLoadData_Dropdowns().subscribe(
        (Rows) => {


            this.Task_Group_Data = Rows[17].slice();
            this.Task_Group_Temp.Task_Group_Id = 0;
            this.Task_Group_Temp.Task_Group_Name = "Select";
            this.Task_Group_Data.unshift(Object.assign({}, this.Task_Group_Temp));
            this.Task_Group_ = this.Task_Group_Data[0];


            this.Department_Data = Rows[19].slice();
				this.Department_Temp.Department_Id = 0;
				this.Department_Temp.Department_Name = "Select";
				this.Department_Data.unshift(Object.assign({}, this.Department_Temp));
				this.Department_ = this.Department_Data[0];



        },
        (Rows) => {
            const dialogRef = this.dialogBox.open(DialogBox_Component, {
                panelClass: "Dialogbox-Class",
                data: { Message: "Error Occured", Type: "2" },
            });
        }
    );
}





}



