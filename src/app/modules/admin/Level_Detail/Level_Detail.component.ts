import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Level_Detail_Service } from '../../../services/Level_Detail.service';
import { DialogBox_Component } from '../DialogBox/DialogBox.component';
import { Level_Detail } from '../../../models/Level_Detail';
import {MatDialog} from '@angular/material';import { ROUTES,Get_Page_Permission } from '../../../components/sidebar/sidebar.component';@Component({
selector: 'app-Level_Detail',
templateUrl: './Level_Detail.component.html',
styleUrls: ['./Level_Detail.component.css']
})
export class Level_DetailComponent implements OnInit {
Level_Detail_Data:Level_Detail[]
Level_Detail_:Level_Detail= new Level_Detail();
Level_Detail_Name_Search:string;
Entry_View:boolean=true;
EditIndex: number;
Total_Entries: number;
color = 'primary';
mode = 'indeterminate';
value = 50;
issLoading: boolean;
Permissions: any;
Level_Detail_Edit:boolean;
Level_Detail_Save:boolean;
Level_Detail_Delete:boolean;
myInnerHeight: number;
constructor(public Level_Detail_Service_:Level_Detail_Service, private route: ActivatedRoute, private router: Router,public dialogBox: MatDialog) { }
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
this.Level_Detail_Edit=this.Permissions.Edit;
this.Level_Detail_Save=this.Permissions.Save;
this.Level_Detail_Delete=this.Permissions.Delete;
this.Page_Load()
}
}
Page_Load()
{
this.myInnerHeight = (window.innerHeight);
this.myInnerHeight = this.myInnerHeight - 200;
this.Clr_Level_Detail();
this.Search_Level_Detail();
this.Entry_View=false;
}
Create_New()
{
this.Entry_View = true;
this.Clr_Level_Detail();
}
Close_Click()
{
this.Entry_View = false;
}
trackByFn(index, item) 
{
return index;
}

 Clr_Level_Detail()
 {
this.Level_Detail_.Level_Detail_Id=0;
this.Level_Detail_.Level_Detail_Name="";

}
Search_Level_Detail()
{
this.issLoading=true;
this.Level_Detail_Service_.Search_Level_Detail('').subscribe(Rows => {
 this.Level_Detail_Data=Rows[0];
this.Total_Entries=this.Level_Detail_Data.length;
if(this.Level_Detail_Data.length==0)
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
Delete_Level_Detail(Level_Detail_Id,index)
{
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Do you want to delete ?',Type:true,Heading:'Confirm'}});
dialogRef.afterClosed().subscribe(result =>
{
if(result=='Yes')
{
this.issLoading=true;
this.Level_Detail_Service_.Delete_Level_Detail(Level_Detail_Id).subscribe(Delete_status => {
if(Delete_status[0][0].Level_Detail_Id_>0){
this.Level_Detail_Data.splice(this.EditIndex, 1);
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
Save_Level_Detail()
{
this.issLoading=true;
this.Level_Detail_Service_.Save_Level_Detail(this.Level_Detail_).subscribe(Save_status => {
Save_status=Save_status[0];
if(Number(Save_status[0].Level_Detail_Id_)>0)
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
Edit_Level_Detail(Level_Detail_e:Level_Detail,index)
{
this.Entry_View=true;
this.Level_Detail_=Level_Detail_e;
this.Level_Detail_=Object.assign({},Level_Detail_e);
}
}

