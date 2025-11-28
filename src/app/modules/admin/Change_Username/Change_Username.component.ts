import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Remarks_Service } from '../../../services/Remarks.service';
import { DialogBox_Component } from '../DialogBox/DialogBox.component';
import { Remarks } from '../../../models/Remarks';
import {MatDialog} from '@angular/material';
import { ROUTES,Get_Page_Permission } from '../../../components/sidebar/sidebar.component';
import { User_Details } from 'app/models/User_Details';
@Component({
selector: 'app-Change_Username',
templateUrl: './Change_Username.component.html',
styleUrls: ['./Change_Username.component.css']
})
export class Change_UsernameComponent implements OnInit {
Remarks_Data:Remarks[]
Users_Data:User_Details[]
Remarks_:User_Details= new User_Details();
Remarks_Name_Search:string;
Entry_View:boolean=true;
EditIndex: number;
Total_Entries: number;
color = 'primary';
mode = 'indeterminate';
value = 50;
issLoading: boolean;
Permissions: any;
Remarks_Edit:boolean;
Remarks_Save:boolean;
Remarks_Delete:boolean;
myInnerHeight: number;
myTotalHeight:number;
Login_User:string="0";


constructor(public Remarks_Service_:Remarks_Service, private route: ActivatedRoute, private router: Router,public dialogBox: MatDialog) { }
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
// this.Remarks_Edit=this.Permissions.Edit;
// this.Remarks_Save=this.Permissions.Save;
// this.Remarks_Delete=this.Permissions.Delete;
this.Page_Load()
}
}
Page_Load()
{
    this.Get_Menu_Status(141,this.Login_User); 

    this.myInnerHeight = (window.innerHeight);
    this.myInnerHeight = this.myInnerHeight - 230;
    this.Clr_Remarks();
    this.Search_Remarks();
    this.Entry_View=false;

    this.myInnerHeight = (window.innerHeight);
    this.myTotalHeight=this.myInnerHeight - 200;
    this.myTotalHeight=this.myTotalHeight-90;
    this.myInnerHeight = this.myInnerHeight - 230;

}

Get_Menu_Status(Menu_id, Login_user_id)
{
    
this.issLoading = false;
this.Remarks_Service_.Get_Menu_Status(Menu_id,Login_user_id).subscribe(Rows => {            

    
    if (Rows[0][0]==undefined)
    {
        if(Menu_id==141)
        {
        localStorage.removeItem('token');
        this.router.navigateByUrl('Home_Page');
        }
    }  
    else
    if (Rows[0][0].View >0) 
    {
        
        
        if(Menu_id==141)
        {
            
       

            this.Permissions=Rows[0][0];
            if(this.Permissions==undefined || this.Permissions==null)
                {
                    localStorage.removeItem('token');
                    this.router.navigateByUrl('Home_Page');
                }
               
                this.Remarks_Edit=this.Permissions.Edit;
                this.Remarks_Save=this.Permissions.Save;
                this.Remarks_Delete=this.Permissions.Delete;
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
this.Clr_Remarks();
}
Close_Click()
{
this.Entry_View = false;
}
trackByFn(index, item) 
{
return index;
}

 Clr_Remarks()
 {
this.Remarks_.User_Details_Id=0;
this.Remarks_.User_Details_Name="";

}
Search_Remarks()
{
    
this.issLoading=true;
debugger
this.Remarks_Service_.Search_Username(Number(this.Login_User)).subscribe(Rows => {
    debugger
 this.Users_Data=Rows[0];
this.Total_Entries=this.Users_Data.length;
if(this.Users_Data.length==0)
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
Delete_Remarks(Remarks_Id,index)
{
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Do you want to delete ?',Type:true,Heading:'Confirm'}});

dialogRef.afterClosed().subscribe(result =>
{
if(result=='Yes')
{
this.issLoading=true;
this.Remarks_Service_.Delete_Remarks(Remarks_Id).subscribe(Delete_status => {
   
if(Delete_status[0][0].Remarks_Id_>0){
this.Remarks_Data.splice(this.EditIndex, 1);
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Deleted',Type: "false"}});
this.Search_Remarks();
}
else if(Number(Delete_status[0][0].Remarks_Id_)== -2)
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
Save_Remarks()
{


    if (this.Remarks_.User_Details_Name == undefined || this.Remarks_.User_Details_Name == null || this.Remarks_.User_Details_Name == undefined || this.Remarks_.User_Details_Name=='') {
        const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Enter Username', Type: "3" } });
       return;
    }




this.issLoading=true;
debugger
this.Remarks_Service_.Save_Username(this.Remarks_).subscribe(Save_status => {
    debugger
Save_status=Save_status[0];
if(Number(Save_status[0].User_Details_Id_)>0)
{
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Saved',Type:"false"}});
this.Search_Remarks();
this.Clr_Remarks();
this.Close_Click()
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
Edit_Remarks(Remarks_e:User_Details,index)
{
    debugger
this.Entry_View=true;
this.Remarks_=Remarks_e;
this.Remarks_=Object.assign({},Remarks_e);
}
}

