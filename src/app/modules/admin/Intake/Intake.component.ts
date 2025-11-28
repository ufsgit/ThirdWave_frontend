import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Intake_Service } from '../../../services/Intake.service';
import { DialogBox_Component } from '../DialogBox/DialogBox.component';
import { Intake } from '../../../models/Intake';
import {MatDialog} from '@angular/material';import { ROUTES,Get_Page_Permission } from '../../../components/sidebar/sidebar.component';@Component({
selector: 'app-Intake',
templateUrl: './Intake.component.html',
styleUrls: ['./Intake.component.css']
})
export class IntakeComponent implements OnInit {
Intake_Data:Intake[]
Intake_:Intake= new Intake();
Intake_Name_Search:string;
Entry_View:boolean=true;
EditIndex: number;
Total_Entries: number;
color = 'primary';
mode = 'indeterminate';
value = 50;
issLoading: boolean;
Permissions: any;
Intake_Edit:boolean;
Intake_Save:boolean;
Intake_Delete:boolean;
myInnerHeight: number;
Login_User:string='0';
constructor(public Intake_Service_:Intake_Service, private route: ActivatedRoute, private router: Router,public dialogBox: MatDialog) { }
ngOnInit() 
{

    this.Login_User=localStorage.getItem(("Login_User"));
    
    this.Page_Load();
}
Page_Load()
{
this.myInnerHeight = (window.innerHeight);
this.myInnerHeight = this.myInnerHeight - 230;
this.Get_Menu_Status(70, this.Login_User);
this.Clr_Intake();
this.Search_Intake();
this.Entry_View=false;
}
Get_Menu_Status(Menu_id, Login_user_id)
{
    
this.issLoading = false;
this.Intake_Service_.Get_Menu_Status(Menu_id,Login_user_id).subscribe(Rows => {            

    
    if (Rows[0][0]==undefined)
    {
        if(Menu_id==70)
        {
        localStorage.removeItem('token');
        this.router.navigateByUrl('Home_Page');
        }
    }  
    else
    if (Rows[0][0].View >0) 
    {
        
        
        if(Menu_id==70)
        {
            
           

            this.Permissions=Rows[0][0];
            if(this.Permissions==undefined || this.Permissions==null)
                {
                    localStorage.removeItem('token');
                    this.router.navigateByUrl('Home_Page');
                }
               
                this.Intake_Edit=this.Permissions.Edit;
                this.Intake_Save=this.Permissions.Save;
                this.Intake_Delete=this.Permissions.Delete;
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
this.Clr_Intake();
}
Close_Click()
{
this.Entry_View = false;
}
trackByFn(index, item) 
{
return index;
}

 Clr_Intake()
 {
this.Intake_.Intake_Id=0;
this.Intake_.Intake_Name="";

}
Search_Intake()
{
this.issLoading=true;
this.Intake_Service_.Search_Intake(this.Intake_Name_Search).subscribe(Rows => {
 this.Intake_Data=Rows[0];
this.Total_Entries=this.Intake_Data.length;
if(this.Intake_Data.length==0)
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
Delete_Intake(Intake_Id,index)
{
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Do you want to delete ?',Type:true,Heading:'Confirm'}});
dialogRef.afterClosed().subscribe(result =>
{
if(result=='Yes')
{
this.issLoading=true;
this.Intake_Service_.Delete_Intake(Intake_Id).subscribe(Delete_status => {
if(Delete_status[0][0].Intake_Id_>0){
this.Intake_Data.splice(this.EditIndex, 1);
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Deleted',Type: "false"}});
this.Search_Intake();
}else if(Number(Delete_status[0][0].Intake_Id_)== -2)
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
Save_Intake()
{
    if (this.Intake_.Intake_Name == undefined || this.Intake_.Intake_Name == null || this.Intake_.Intake_Name == undefined || this.Intake_.Intake_Name=='') {
        const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Enter Intake', Type: "3" } });
       return;
    }


this.issLoading=true;
this.Intake_Service_.Save_Intake(this.Intake_).subscribe(Save_status => {
Save_status=Save_status[0];
if(Number(Save_status[0].Intake_Id_)>0)
{
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Saved',Type:"false"}});
this.Search_Intake();
this.Clr_Intake();
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
Edit_Intake(Intake_e:Intake,index)
{
this.Entry_View=true;
this.Intake_=Intake_e;
this.Intake_=Object.assign({},Intake_e);
}
}

