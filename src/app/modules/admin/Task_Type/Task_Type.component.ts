import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Remarks_Service } from '../../../services/Remarks.service';
import { DialogBox_Component } from '../DialogBox/DialogBox.component';
import { Document_Type } from '../../../models/Document_Type';
import {MatDialog} from '@angular/material';
import { ROUTES,Get_Page_Permission } from '../../../components/sidebar/sidebar.component';
import { Task_Type } from 'app/models/Task_Type';
@Component({
selector: 'app-Task_Type',
templateUrl: './Task_Type.component.html',
styleUrls: ['./Task_Type.component.css']
})
export class Task_TypeComponent implements OnInit {
    Task_Type_Data:Task_Type[]
Task_Type_:Task_Type= new Task_Type();
Task_Type_Name_Search:string;
Entry_View:boolean=true;
EditIndex: number;
Total_Entries: number;
color = 'primary';
mode = 'indeterminate';
value = 50;
issLoading: boolean;
Permissions: any;
Task_Type_Edit:boolean;
Task_Type_Save:boolean;
Task_Type_Delete:boolean;
myInnerHeight: number;
myTotalHeight:number;
Login_User:string="0";


constructor(public Task_Type_Service_:Remarks_Service, private route: ActivatedRoute, private router: Router,public dialogBox: MatDialog) { }
ngOnInit() 
{
    this.Login_User=localStorage.getItem(("Login_User"));

// this.Permissions = Get_Page_Permission(18);
// if(this.Permissions==undefined || this.Permissions==null)
// {
// localStorage.removeItem('token');
// this.router.navigateByUrl('Home_Page');
// }
// else
{
// this.Task_Type_Edit=this.Permissions.Edit;
// this.Task_Type_Save=this.Permissions.Save;
// this.Task_Type_Delete=this.Permissions.Delete;
this.Page_Load()
}
}
Page_Load()
{
    this.Get_Menu_Status(143,this.Login_User); 

    this.myInnerHeight = (window.innerHeight);
    this.myInnerHeight = this.myInnerHeight - 230;
    this.Clr_Task_Type();
    this.Search_Task_Type();
    this.Entry_View=false;

    this.myInnerHeight = (window.innerHeight);
    this.myTotalHeight=this.myInnerHeight - 200;
    this.myTotalHeight=this.myTotalHeight-90;
    this.myInnerHeight = this.myInnerHeight - 230;

}

Get_Menu_Status(Menu_id, Login_user_id)
{
    
this.issLoading = false;
this.Task_Type_Service_.Get_Menu_Status(Menu_id,Login_user_id).subscribe(Rows => {            

    
    if (Rows[0][0]==undefined)
    {
        if(Menu_id==143)
        {
        localStorage.removeItem('token');
        this.router.navigateByUrl('Home_Page');
        }
    }  
    else
    if (Rows[0][0].View >0) 
    {
        
        
        if(Menu_id==143)
        {
            
       

            this.Permissions=Rows[0][0];
            if(this.Permissions==undefined || this.Permissions==null)
                {
                    localStorage.removeItem('token');
                    this.router.navigateByUrl('Home_Page');
                }
               
                this.Task_Type_Edit=this.Permissions.Edit;
                this.Task_Type_Save=this.Permissions.Save;
                this.Task_Type_Delete=this.Permissions.Delete;
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
this.Clr_Task_Type();
}
Close_Click()
{
this.Entry_View = false;
}
trackByFn(index, item) 
{
return index;
}

 Clr_Task_Type()
 {
this.Task_Type_.Task_Type_Id=0;
this.Task_Type_.Task_Type_Name="";

}
Search_Task_Type()
{
    debugger
this.issLoading=true;
this.Task_Type_Service_.Search_Task_Type(this.Task_Type_Name_Search).subscribe(Rows => {
    debugger
 this.Task_Type_Data=Rows[0];
this.Total_Entries=this.Task_Type_Data.length;
if(this.Task_Type_Data.length==0)
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
Delete_Task_Type(Task_Type_Id,index)
{
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Do you want to delete ?',Type:true,Heading:'Confirm'}});

dialogRef.afterClosed().subscribe(result =>
{
if(result=='Yes')
{
this.issLoading=true;
this.Task_Type_Service_.Delete_Task_Type(Task_Type_Id).subscribe(Delete_status => {
   
if(Delete_status[0][0].Task_Type_Id_>0){
this.Task_Type_Data.splice(this.EditIndex, 1);
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Deleted',Type: "false"}});
this.Search_Task_Type();
}
else if(Number(Delete_status[0][0].Task_Type_Id_)== -2)
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
Save_Task_Type()
{


    if (this.Task_Type_.Task_Type_Name == undefined || this.Task_Type_.Task_Type_Name == null || this.Task_Type_.Task_Type_Name == undefined || this.Task_Type_.Task_Type_Name=='') {
        const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Select Task_Type', Type: "3" } });
       return;
    }




this.issLoading=true;
this.Task_Type_Service_.Save_Task_Type(this.Task_Type_).subscribe(Save_status => {
Save_status=Save_status[0];
if(Number(Save_status[0].Task_Type_Id_)>0)
{
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Saved',Type:"false"}});
this.Search_Task_Type();
this.Clr_Task_Type();
}
else{
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
}
this.issLoading=false;
 },
 Rows => { 
this.issLoading=false;
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:Rows.error.error,Type:"2"}});
 });
}
Edit_Task_Type(Task_Type_e:Task_Type,index)
{
this.Entry_View=true;
this.Task_Type_=Task_Type_e;
this.Task_Type_=Object.assign({},Task_Type_e);
}
}

