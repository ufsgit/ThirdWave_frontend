import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogBox_Component } from '../DialogBox/DialogBox.component';
import { Fees} from '../../../models/Fees';

import { Fees_Service } from '../../../services/Fees.service';
import { Student_Service } from '../../../services/Student.service';
import {MatDialog} from '@angular/material';import { ROUTES,Get_Page_Permission } from '../../../components/sidebar/sidebar.component';@Component({
selector: 'app-Fees',
templateUrl: './Fees.component.html',
styleUrls: ['./Fees.component.css']
})
export class FeesComponent implements OnInit {
Fees_Data:Fees[]
Fees_:Fees= new Fees();

Fees_Name_Search:string;


Entry_View:boolean=true;
EditIndex: number;
Total_Entries: number;
color = 'primary';
mode = 'indeterminate';
value = 50;
issLoading: boolean;
Permissions: any;
Fees_Edit:boolean;
Fees_Save:boolean;
Fees_Delete:boolean;
myInnerHeight: number;
myTotalHeight:number;

Login_User:string="0";


constructor(public Fees_Service_:Fees_Service,public Student_Service_:Student_Service, private route: ActivatedRoute, private router: Router,public dialogBox: MatDialog) { }
ngOnInit() 
{
    this.Login_User=localStorage.getItem(("Login_User"));

// this.Permissions = Get_Page_Permission(29);
// if(this.Permissions==undefined || this.Permissions==null)
// {
// localStorage.removeItem('token');
// this.router.navigateByUrl('Home_Page');
// }
// else
{
// this.Fees_Edit=this.Permissions.Edit;
// this.Fees_Save=this.Permissions.Save;
// this.Fees_Delete=this.Permissions.Delete;
this.Page_Load()
}
}
Page_Load()
{
    
    this.Get_Menu_Status(29,this.Login_User); 

this.myInnerHeight = (window.innerHeight);
this.myInnerHeight = this.myInnerHeight - 230;
this.Clr_Fees();
this.Search_Fees();
this.Entry_View=false;
// this.Get_Menu_Status()
this.myInnerHeight = (window.innerHeight);
    this.myTotalHeight=this.myInnerHeight - 230;
    this.myTotalHeight=this.myTotalHeight-55;
    this.myInnerHeight = this.myInnerHeight - 230;


}

Get_Menu_Status(Menu_id, Login_user_id)
{
    
this.issLoading = false;
this.Student_Service_.Get_Menu_Status(Menu_id,Login_user_id).subscribe(Rows => {            

    
    if (Rows[0][0]==undefined)
    {
        localStorage.removeItem('token');
        this.router.navigateByUrl('Home_Page');
    }  
    else
    if (Rows[0][0].View >0) 
    {
        
        
        if(Menu_id==29)
        {
            
           

            this.Permissions=Rows[0][0];
            if(this.Permissions==undefined || this.Permissions==null)
                {
                    localStorage.removeItem('token');
                    this.router.navigateByUrl('Home_Page');
                }
                this.Fees_Edit=this.Permissions.Edit;
                this.Fees_Save=this.Permissions.Save;
                this.Fees_Delete=this.Permissions.Delete;
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
this.Clr_Fees();
}
Close_Click()
{
this.Entry_View = false;

}
trackByFn(index, item) 
{
return index;
}

 Clr_Fees()
 {
this.Fees_.Fees_Id=0;
this.Fees_.Fees_Name="";


}
Search_Fees()
{
    
this.issLoading=true;
this.Fees_Service_.Search_Fees(this.Fees_Name_Search).subscribe(Rows => {
    
 this.Fees_Data=Rows[0];
this.Total_Entries=this.Fees_Data.length;
if(this.Fees_Data.length==0)
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
Delete_Fees(Fees_Id,index)
{
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Do you want to delete ?',Type:true,Heading:'Confirm'}});
this.Search_Fees();
dialogRef.afterClosed().subscribe(result =>
{
if(result=='Yes')
{

this.issLoading=true;
this.Fees_Service_.Delete_Fees(Fees_Id).subscribe(Delete_status => {
    
if(Delete_status[0][0].Fees_Id_>0){
this.Fees_Data.splice(this.EditIndex, 1);
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Deleted',Type: "false"}});
this.Search_Fees();
}
else if(Number(Delete_status[0][0].Fees_Id_)== -2)
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
    Save_Fees()
    {
        if(this.Fees_.Fees_Name== undefined || this.Fees_.Fees_Name == null || this.Fees_.Fees_Name == undefined || this.Fees_.Fees_Name=='') {
                const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Enter Fees Name', Type: "3" } });
               return;
            }
        
    this.issLoading=true;

    this.Fees_Service_.Save_Fees(this.Fees_).subscribe(Save_status => {
        
    //Save_status=Save_status[0];
    if(Number(Save_status[0][0].Fees_Id_)>0)
    {
    const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Saved',Type:"false"}});
    this.Search_Fees();
    this.Clr_Fees();
    }
    else{
    const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Enter Fees Name',Type:"2"}});
    }
    this.issLoading=false;
    },
 Rows => { 
this.issLoading=false;
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:Rows.error,Type:"2"}});
 });
 
}
Edit_Fees(Fees_e:Fees,index)
{
   
this.Entry_View=true;
this.Fees_=Fees_e;
this.Fees_=Object.assign({},Fees_e);
}
}



