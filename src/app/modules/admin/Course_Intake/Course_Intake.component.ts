import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course_Intake_Service } from '../../../services/Course_Intake.service';
import { DialogBox_Component } from '../DialogBox/DialogBox.component';
import { Course_Intake } from '../../../models/Course_Intake';
import {MatDialog} from '@angular/material';import { ROUTES,Get_Page_Permission } from '../../../components/sidebar/sidebar.component';@Component({
selector: 'app-Course_Intake',
templateUrl: './Course_Intake.component.html',
styleUrls: ['./Course_Intake.component.css']
})
export class Course_IntakeComponent implements OnInit {
Course_Intake_Data:Course_Intake[]
Course_Intake_:Course_Intake= new Course_Intake();
Course_Intake_Name_Search:string;
Entry_View:boolean=true;
EditIndex: number;
Total_Entries: number;
color = 'primary';
mode = 'indeterminate';
value = 50;
issLoading: boolean;
Permissions: any;
Course_Intake_Edit:boolean;
Course_Intake_Save:boolean;
Course_Intake_Delete:boolean;
myInnerHeight: number;
constructor(public Course_Intake_Service_:Course_Intake_Service, private route: ActivatedRoute, private router: Router,public dialogBox: MatDialog) { }
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
this.Course_Intake_Edit=this.Permissions.Edit;
this.Course_Intake_Save=this.Permissions.Save;
this.Course_Intake_Delete=this.Permissions.Delete;
this.Page_Load()
}
}
Page_Load()
{
this.myInnerHeight = (window.innerHeight);
this.myInnerHeight = this.myInnerHeight - 200;
this.Clr_Course_Intake();
this.Search_Course_Intake();
this.Entry_View=false;
}
Create_New()
{
this.Entry_View = true;
this.Clr_Course_Intake();
}
Close_Click()
{
this.Entry_View = false;
}
trackByFn(index, item) 
{
return index;
}

 Clr_Course_Intake()
 {
this.Course_Intake_.Course_Id=0;
this.Course_Intake_.Intake_Id=0;

}
Search_Course_Intake()
{
this.issLoading=true;
this.Course_Intake_Service_.Search_Course_Intake('').subscribe(Rows => {
 this.Course_Intake_Data=Rows[0];
this.Total_Entries=this.Course_Intake_Data.length;
if(this.Course_Intake_Data.length==0)
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
Delete_Course_Intake(Course_Intake_Id,index)
{
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Do you want to delete ?',Type:true,Heading:'Confirm'}});
dialogRef.afterClosed().subscribe(result =>
{
if(result=='Yes')
{
this.issLoading=true;
this.Course_Intake_Service_.Delete_Course_Intake(Course_Intake_Id).subscribe(Delete_status => {
if(Delete_status[0][0].Course_Intake_Id_>0){
this.Course_Intake_Data.splice(this.EditIndex, 1);
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
Save_Course_Intake()
{
this.issLoading=true;
this.Course_Intake_Service_.Save_Course_Intake(this.Course_Intake_).subscribe(Save_status => {
Save_status=Save_status[0];
if(Number(Save_status[0].Course_Intake_Id_)>0)
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
Edit_Course_Intake(Course_Intake_e:Course_Intake,index)
{
this.Entry_View=true;
this.Course_Intake_=Course_Intake_e;
this.Course_Intake_=Object.assign({},Course_Intake_e);
}
}

