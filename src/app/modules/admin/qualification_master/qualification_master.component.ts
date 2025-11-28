import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogBox_Component } from '../DialogBox/DialogBox.component';
import { qualification_master} from '../../../models/qualification_master';
import { qualification_master_Service } from '../../../services/qualification_master.Service';
import {MatDialog} from '@angular/material';
import { ROUTES,Get_Page_Permission } from '../../../components/sidebar/sidebar.component';
import { Student_Service } from 'app/services/Student.Service';
import { enquiry_mode } from 'app/models/Enquiry_Mode';
@Component({
selector: 'app-qualification_master',
templateUrl: './qualification_master.component.html',
styleUrls: ['./qualification_master.component.css']
})
export class qualification_masterComponent implements OnInit {
qualification_master_Data:qualification_master[]
qualification_master_:qualification_master= new qualification_master();

Qualification_Name_Search:string;


Entry_View:boolean=true;
EditIndex: number;
Total_Entries: number;
color = 'primary';
mode = 'indeterminate';
value = 50;
issLoading: boolean;
Permissions: any;
qualification_master_Edit:boolean;
qualification_master_Save:boolean;
qualification_master_Delete:boolean;
myInnerHeight: number;
myTotalHeight:number;
Login_User:string="0";

Enq_Source_Temp: qualification_master = new qualification_master();

qualification_master_T_: qualification_master = new qualification_master();

qualification_master_Temp1: qualification_master = new qualification_master();
qualification_master_Data1: qualification_master[];
qualification_master_Data_Filter: qualification_master[];

constructor(public qualification_master_Service_:qualification_master_Service,public Student_Service_: Student_Service, private route: ActivatedRoute, private router: Router,public dialogBox: MatDialog) { }
ngOnInit() 
{
    this.Login_User=localStorage.getItem(("Login_User"));

// this.Permissions = Get_Page_Permission(20);
// if(this.Permissions==undefined || this.Permissions==null)
// {
// localStorage.removeItem('token');
// this.router.navigateByUrl('Home_Page');
// }
// else
{
// this.qualification_master_Edit=this.Permissions.Edit;
// this.qualification_master_Save=this.Permissions.Save;
// this.qualification_master_Delete=this.Permissions.Delete;
this.Page_Load()
}
}
Page_Load()
{
this.myInnerHeight = (window.innerHeight);
this.myInnerHeight = this.myInnerHeight - 250;
this.Clr_qualification_master();
this.Get_Menu_Status(187,this.Login_User);

this.Search_qualification_master();
this.Entry_View=false;

this.myInnerHeight = (window.innerHeight);
this.myTotalHeight=this.myInnerHeight - 200;
this.myTotalHeight=this.myTotalHeight-90;
this.myInnerHeight = this.myInnerHeight - 230;
}

Get_Menu_Status(Menu_id, Login_user_id)
{
this.issLoading = true;
this.qualification_master_Service_.Get_Menu_Status(Menu_id,Login_user_id).subscribe(Rows => { 
    if (Rows[0][0]==undefined)
    {
        if(Menu_id==187)
        {
        localStorage.removeItem('token');
        this.router.navigateByUrl('Home_Page');
        }
    }  
    else
    if (Rows[0][0].View >0) 
    {        
        if(Menu_id==187)
        {
            this.Permissions=Rows[0][0];
            if(this.Permissions==undefined || this.Permissions==null)
                {
                    localStorage.removeItem('token');
                    this.router.navigateByUrl('Home_Page');
                }
                this.qualification_master_Edit=this.Permissions.Edit;
                this.qualification_master_Save=this.Permissions.Save;
                this.qualification_master_Delete=this.Permissions.Delete;    
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
this.Clr_qualification_master();
}
Close_Click()
{
this.Entry_View = false;

}
trackByFn(index, item) 
{
return index;
}

 Clr_qualification_master()
 {
this.qualification_master_.Qualification_Master_Id =0;
this.qualification_master_. Qualification_Name ="";
this.qualification_master_T_=null;

}
Search_qualification_master()
{
this.issLoading=true;
this.qualification_master_Service_.Search_Qualification_Master(this.Qualification_Name_Search).subscribe(Rows => {
 this.qualification_master_Data=Rows[0];
this.Total_Entries=this.qualification_master_Data.length;
if(this.qualification_master_Data.length==0)
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
Delete_qualification_master(Qualification_Master_Id,index)
{
    
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Do you want to delete ?',Type:true,Heading:'Confirm'}});
this.Search_qualification_master();
dialogRef.afterClosed().subscribe(result =>
{
if(result=='Yes')
{
this.issLoading=true;
this.qualification_master_Service_.Delete_qualification_master(Qualification_Master_Id).subscribe(Delete_status => {
if(Number(Delete_status[0][0].Qualification_Master_Id_)>0){
this.qualification_master_Data.splice(this.EditIndex, 1);
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Deleted',Type: "false"}});
this.Search_qualification_master();
}else if(Number(Delete_status[0][0].Qualification_Master_Id_)== -2)
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
Save_qualification_master()
{
   
    
this.issLoading=true;
debugger
this.qualification_master_Service_.Save_Qualification_Master(this.qualification_master_).subscribe(Save_status => {
Save_status=Save_status[0];
if(Number(Save_status[0].Qualification_Master_Id_)>0)
{
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Saved',Type:"false"}});
this.Search_qualification_master();
this.Clr_qualification_master();
}
else{
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
}
this.issLoading=false;
 },
 Rows => { 
this.issLoading=false;
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:Rows.error,Type:"2"}});
 }); 
}
Edit_qualification_master(qualification_master_e:qualification_master,index)
{
   debugger
this.Entry_View=true;
this.qualification_master_=qualification_master_e;
this.qualification_master_=Object.assign({},qualification_master_e);
} 
display_qualification_master(Document_: qualification_master) {
    if (Document_) {
        return Document_.Qualification_Name;
    }
}
}
