import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Duration_Service } from '../../../services/Duration.service';
import { DialogBox_Component } from '../DialogBox/DialogBox.component';
import { Duration } from '../../../models/Duration';
import {MatDialog} from '@angular/material';import { ROUTES,Get_Page_Permission } from '../../../components/sidebar/sidebar.component';@Component({
selector: 'app-Duration',
templateUrl: './Duration.component.html',
styleUrls: ['./Duration.component.css']
})
export class DurationComponent implements OnInit {
Duration_Data:Duration[]
Duration_:Duration= new Duration();
Duration_Name_Search:string;
Entry_View:boolean=true;
EditIndex: number;
Total_Entries: number;
color = 'primary';
mode = 'indeterminate';
value = 50;
issLoading: boolean;
Permissions: any;
Duration_Edit:boolean;
Duration_Save:boolean;
Duration_Delete:boolean;
myInnerHeight: number;
constructor(public Duration_Service_:Duration_Service, private route: ActivatedRoute, private router: Router,public dialogBox: MatDialog) { }
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
this.Duration_Edit=this.Permissions.Edit;
this.Duration_Save=this.Permissions.Save;
this.Duration_Delete=this.Permissions.Delete;
this.Page_Load()
}
}
Page_Load()
{
this.myInnerHeight = (window.innerHeight);
this.myInnerHeight = this.myInnerHeight - 200;
this.Clr_Duration();
this.Search_Duration();
this.Entry_View=false;
}
Create_New()
{
this.Entry_View = true;
this.Clr_Duration();
}
Close_Click()
{
this.Entry_View = false;
}
trackByFn(index, item) 
{
return index;
}

 Clr_Duration()
 {
this.Duration_.Duration_Id=0;
this.Duration_.Duration_Name="";

}
Search_Duration()
{
this.issLoading=true;
this.Duration_Service_.Search_Duration('').subscribe(Rows => {
 this.Duration_Data=Rows[0];
this.Total_Entries=this.Duration_Data.length;
if(this.Duration_Data.length==0)
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
Delete_Duration(Duration_Id,index)
{
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Do you want to delete ?',Type:true,Heading:'Confirm'}});
dialogRef.afterClosed().subscribe(result =>
{
if(result=='Yes')
{
this.issLoading=true;
this.Duration_Service_.Delete_Duration(Duration_Id).subscribe(Delete_status => {
if(Delete_status[0][0].Duration_Id_>0){
this.Duration_Data.splice(this.EditIndex, 1);
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
Save_Duration()
{
this.issLoading=true;
this.Duration_Service_.Save_Duration(this.Duration_).subscribe(Save_status => {
Save_status=Save_status[0];
if(Number(Save_status[0].Duration_Id_)>0)
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
Edit_Duration(Duration_e:Duration,index)
{
this.Entry_View=true;
this.Duration_=Duration_e;
this.Duration_=Object.assign({},Duration_e);
}
}

