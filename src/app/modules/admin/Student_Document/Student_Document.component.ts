import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student_Document_Service } from '../../../services/Student_Document.service';
import { DialogBox_Component } from '../DialogBox/DialogBox.component';
import { Student_Document } from '../../../models/Student_Document';
import {MatDialog} from '@angular/material';import { ROUTES,Get_Page_Permission } from '../../../components/sidebar/sidebar.component';@Component({
selector: 'app-Student_Document',
templateUrl: './Student_Document.component.html',
styleUrls: ['./Student_Document.component.css']
})
export class Student_DocumentComponent implements OnInit {
Student_Document_Data:Student_Document[]
Student_Document_:Student_Document= new Student_Document();
Student_Document_Name_Search:string;
Entry_View:boolean=true;
EditIndex: number;
Total_Entries: number;
color = 'primary';
mode = 'indeterminate';
value = 50;
issLoading: boolean;
Permissions: any;
Student_Document_Edit:boolean;
Student_Document_Save:boolean;
Student_Document_Delete:boolean;
myInnerHeight: number;
constructor(public Student_Document_Service_:Student_Document_Service, private route: ActivatedRoute, private router: Router,public dialogBox: MatDialog) { }
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
this.Student_Document_Edit=this.Permissions.Edit;
this.Student_Document_Save=this.Permissions.Save;
this.Student_Document_Delete=this.Permissions.Delete;
this.Page_Load()
}
}
Page_Load()
{
this.myInnerHeight = (window.innerHeight);
this.myInnerHeight = this.myInnerHeight - 200;
this.Clr_Student_Document();
this.Search_Student_Document();
this.Entry_View=false;
}
Create_New()
{
this.Entry_View = true;
this.Clr_Student_Document();
}
Close_Click()
{
this.Entry_View = false;
}
trackByFn(index, item) 
{
return index;
}

 Clr_Student_Document()
 {
this.Student_Document_.Student_Document_Id=0;
this.Student_Document_.Student_Id=0;
this.Student_Document_.Document_Id=0;

}
Search_Student_Document()
{
this.issLoading=true;
this.Student_Document_Service_.Search_Student_Document('').subscribe(Rows => {
 this.Student_Document_Data=Rows[0];
this.Total_Entries=this.Student_Document_Data.length;
if(this.Student_Document_Data.length==0)
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
Delete_Student_Document(Student_Document_Id,index)
{
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Do you want to delete ?',Type:true,Heading:'Confirm'}});
dialogRef.afterClosed().subscribe(result =>
{
if(result=='Yes')
{
this.issLoading=true;
this.Student_Document_Service_.Delete_Student_Document(Student_Document_Id).subscribe(Delete_status => {
if(Delete_status[0][0].Student_Document_Id_>0){
this.Student_Document_Data.splice(this.EditIndex, 1);
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
Save_Student_Document()
{
this.issLoading=true;
this.Student_Document_Service_.Save_Student_Document(this.Student_Document_).subscribe(Save_status => {
Save_status=Save_status[0];
if(Number(Save_status[0].Student_Document_Id_)>0)
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
Edit_Student_Document(Student_Document_e:Student_Document,index)
{
this.Entry_View=true;
this.Student_Document_=Student_Document_e;
this.Student_Document_=Object.assign({},Student_Document_e);
}
}

