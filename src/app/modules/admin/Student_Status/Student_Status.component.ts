import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student_Status_Service } from '../../../services/Student_Status.service';
import { DialogBox_Component } from '../DialogBox/DialogBox.component';
import { Student_Status } from '../../../models/Student_Status';
import {MatDialog} from '@angular/material';import { ROUTES,Get_Page_Permission } from '../../../components/sidebar/sidebar.component';@Component({
selector: 'app-Student_Status',
templateUrl: './Student_Status.component.html',
styleUrls: ['./Student_Status.component.css']
})
export class Student_StatusComponent implements OnInit {
Student_Status_Data:Student_Status[]
Student_Status_:Student_Status= new Student_Status();
Student_Status_Name_Search:string;
Entry_View:boolean=true;
EditIndex: number;
Total_Entries: number;
color = 'primary';
mode = 'indeterminate';
value = 50;
issLoading: boolean;
Permissions: any;
Student_Status_Edit:boolean;
Student_Status_Save:boolean;
Student_Status_Delete:boolean;
myInnerHeight: number;
constructor(public Student_Status_Service_:Student_Status_Service, private route: ActivatedRoute, private router: Router,public dialogBox: MatDialog) { }
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
this.Student_Status_Edit=this.Permissions.Edit;
this.Student_Status_Save=this.Permissions.Save;
this.Student_Status_Delete=this.Permissions.Delete;
this.Page_Load()
}
}
Page_Load()
{
this.myInnerHeight = (window.innerHeight);
this.myInnerHeight = this.myInnerHeight - 200;
this.Clr_Student_Status();
this.Search_Student_Status();
this.Entry_View=false;
}
Create_New()
{
this.Entry_View = true;
this.Clr_Student_Status();
}
Close_Click()
{
this.Entry_View = false;
}
trackByFn(index, item) 
{
return index;
}

 Clr_Student_Status()
 {
this.Student_Status_.Student_Status_Id=0;
this.Student_Status_.Student_Status_Name="";

}
Search_Student_Status()
{
this.issLoading=true;
this.Student_Status_Service_.Search_Student_Status('').subscribe(Rows => {
 this.Student_Status_Data=Rows[0];
this.Total_Entries=this.Student_Status_Data.length;
if(this.Student_Status_Data.length==0)
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
Delete_Student_Status(Student_Status_Id,index)
{
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Do you want to delete ?',Type:true,Heading:'Confirm'}});
dialogRef.afterClosed().subscribe(result =>
{
if(result=='Yes')
{
this.issLoading=true;
this.Student_Status_Service_.Delete_Student_Status(Student_Status_Id).subscribe(Delete_status => {
if(Delete_status[0][0].Student_Status_Id_>0){
this.Student_Status_Data.splice(this.EditIndex, 1);
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
Save_Student_Status()
{
this.issLoading=true;
this.Student_Status_Service_.Save_Student_Status(this.Student_Status_).subscribe(Save_status => {
Save_status=Save_status[0];
if(Number(Save_status[0].Student_Status_Id_)>0)
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
Edit_Student_Status(Student_Status_e:Student_Status,index)
{
this.Entry_View=true;
this.Student_Status_=Student_Status_e;
this.Student_Status_=Object.assign({},Student_Status_e);
}
}

