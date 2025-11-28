import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student_Message_Service } from '../../../services/Student_Message.service';
import { DialogBox_Component } from '../DialogBox/DialogBox.component';
import { Student_Message } from '../../../models/Student_Message';
import {MatDialog} from '@angular/material';import { ROUTES,Get_Page_Permission } from '../../../components/sidebar/sidebar.component';@Component({
selector: 'app-Student_Message',
templateUrl: './Student_Message.component.html',
styleUrls: ['./Student_Message.component.css']
})
export class Student_MessageComponent implements OnInit {
Student_Message_Data:Student_Message[]
Student_Message_:Student_Message= new Student_Message();
Student_Message_Name_Search:string;
Entry_View:boolean=true;
EditIndex: number;
Total_Entries: number;
color = 'primary';
mode = 'indeterminate';
value = 50;
issLoading: boolean;
Permissions: any;
Student_Message_Edit:boolean;
Student_Message_Save:boolean;
Student_Message_Delete:boolean;
myInnerHeight: number;
constructor(public Student_Message_Service_:Student_Message_Service, private route: ActivatedRoute, private router: Router,public dialogBox: MatDialog) { }
ngOnInit() 
{
this.Permissions = Get_Page_Permission(15);
if(this.Permissions==undefined || this.Permissions==null)
{
localStorage.removeItem('token');
this.router.navigateByUrl('Home_Page');
}
else
{
this.Student_Message_Edit=this.Permissions.Edit;
this.Student_Message_Save=this.Permissions.Save;
this.Student_Message_Delete=this.Permissions.Delete;
this.Page_Load()
}
}
Page_Load()
{
this.myInnerHeight = (window.innerHeight);
this.myInnerHeight = this.myInnerHeight - 200;
this.Clr_Student_Message();
this.Search_Student_Message();
this.Entry_View=false;
}
Create_New()
{
this.Entry_View = true;
this.Clr_Student_Message();
}
Close_Click()
{
this.Entry_View = false;
}
trackByFn(index, item) 
{
return index;
}

 Clr_Student_Message()
 {
this.Student_Message_.Student_Message_Id=0;
this.Student_Message_.Student_Id=0;
this.Student_Message_.Message_Detail="";

}
Search_Student_Message()
{
this.issLoading=true;
this.Student_Message_Service_.Search_Student_Message('').subscribe(Rows => {
 this.Student_Message_Data=Rows[0];
this.Total_Entries=this.Student_Message_Data.length;
if(this.Student_Message_Data.length==0)
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
Delete_Student_Message(Student_Message_Id,index)
{
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Do you want to delete ?',Type:true,Heading:'Confirm'}});
dialogRef.afterClosed().subscribe(result =>
{
if(result=='Yes')
{
this.issLoading=true;
this.Student_Message_Service_.Delete_Student_Message(Student_Message_Id).subscribe(Delete_status => {
if(Delete_status[0][0].Student_Message_Id_>0){
this.Student_Message_Data.splice(this.EditIndex, 1);
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Deleted',Type: "false"}});
}
else
{
this.issLoading=false;
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
Save_Student_Message()
{
this.issLoading=true;
this.Student_Message_Service_.Save_Student_Message(this.Student_Message_).subscribe(Save_status => {
Save_status=Save_status[0];
if(Number(Save_status[0].Student_Message_Id_)>0)
{
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Saved',Type:"false"}});
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
Edit_Student_Message(Student_Message_e:Student_Message,index)
{
this.Entry_View=true;
this.Student_Message_=Student_Message_e;
this.Student_Message_=Object.assign({},Student_Message_e);
}
}

