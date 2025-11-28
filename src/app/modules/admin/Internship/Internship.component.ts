import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Internship_Service } from '../../../services/Internship.service';
import { DialogBox_Component } from '../DialogBox/DialogBox.component';
import { Internship } from '../../../models/Internship';
import {MatDialog} from '@angular/material';import { ROUTES,Get_Page_Permission } from '../../../components/sidebar/sidebar.component';@Component({
selector: 'app-Internship',
templateUrl: './Internship.component.html',
styleUrls: ['./Internship.component.css']
})
export class InternshipComponent implements OnInit {
Internship_Data:Internship[]
Internship_:Internship= new Internship();
Internship_Name_Search:string;
Entry_View:boolean=true;
EditIndex: number;
Total_Entries: number;
color = 'primary';
mode = 'indeterminate';
value = 50;
issLoading: boolean;
Permissions: any;
Internship_Edit:boolean;
Internship_Save:boolean;
Internship_Delete:boolean;
myInnerHeight: number;
constructor(public Internship_Service_:Internship_Service, private route: ActivatedRoute, private router: Router,public dialogBox: MatDialog) { }
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
this.Internship_Edit=this.Permissions.Edit;
this.Internship_Save=this.Permissions.Save;
this.Internship_Delete=this.Permissions.Delete;
this.Page_Load()
}
}
Page_Load()
{
this.myInnerHeight = (window.innerHeight);
this.myInnerHeight = this.myInnerHeight - 200;
this.Clr_Internship();
this.Search_Internship();
this.Entry_View=false;
}
Create_New()
{
this.Entry_View = true;
this.Clr_Internship();
}
Close_Click()
{
this.Entry_View = false;
}
trackByFn(index, item) 
{
return index;
}

 Clr_Internship()
 {
this.Internship_.Internship_Id=0;
this.Internship_.Internship_Name="";

}
Search_Internship()
{
this.issLoading=true;
this.Internship_Service_.Search_Internship('').subscribe(Rows => {
 this.Internship_Data=Rows[0];
this.Total_Entries=this.Internship_Data.length;
if(this.Internship_Data.length==0)
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
Delete_Internship(Internship_Id,index)
{
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Do you want to delete ?',Type:true,Heading:'Confirm'}});
dialogRef.afterClosed().subscribe(result =>
{
if(result=='Yes')
{
this.issLoading=true;
this.Internship_Service_.Delete_Internship(Internship_Id).subscribe(Delete_status => {
if(Delete_status[0][0].Internship_Id_>0){
this.Internship_Data.splice(this.EditIndex, 1);
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
Save_Internship()
{
this.issLoading=true;
this.Internship_Service_.Save_Internship(this.Internship_).subscribe(Save_status => {
Save_status=Save_status[0];
if(Number(Save_status[0].Internship_Id_)>0)
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
Edit_Internship(Internship_e:Internship,index)
{
this.Entry_View=true;
this.Internship_=Internship_e;
this.Internship_=Object.assign({},Internship_e);
}
}

