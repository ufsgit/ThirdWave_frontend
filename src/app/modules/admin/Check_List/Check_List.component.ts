import { Component, OnInit,Input,Injectable, ErrorHandler } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of as observableOf, merge, throwError } from 'rxjs';
import { Check_List_Service } from '../../../services/Check_List.service';
import { DialogBox_Component } from '../DialogBox/DialogBox.component';
import { Check_List} from '../../../models/Check_List';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA,MatDialogConfig} from '@angular/material';
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/output_ast';
import { getParseErrors, syntaxError } from '@angular/compiler';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { ROUTES,Get_Page_Permission } from '../../../components/sidebar/sidebar.component'
//import { ConsoleReporter } from 'jasmine';
import { error } from '@angular/compiler/src/util';
@Component({
selector: 'app-Check_List',
templateUrl: './Check_List.component.html',
styleUrls: ['./Check_List.component.css']
})
export class Check_ListComponent implements OnInit {
Check_List_Data:Check_List[]
Check_List_:Check_List= new Check_List();
Check_List_Name_Search:string;
Entry_View:boolean=false;
EditIndex: number;
Menu_Id:number=60;
color = 'primary';
mode = 'indeterminate';
value = 50;Total_Entries:Number;
issLoading: boolean;
Check_List_Edit:boolean;
Check_List_Save:boolean;
Check_List_Delete:boolean;
array:any;
myInnerHeight: number;
myTotalHeight:number;
Login_User:string="0";
Permissions: any;

constructor(public Check_List_Service_:Check_List_Service, private route: ActivatedRoute, private router: Router,public dialogBox: MatDialog) { }
ngOnInit() 
{
    this.Login_User=localStorage.getItem(("Login_User"));

    // this.array=Get_Page_Permission(this.Menu_Id);
    // if(this.array==undefined || this.array==null)
    // {
    // localStorage.removeItem('token');
    // this.router.navigateByUrl('/auth/login');
    // }
    // else 
    {
    // this.Check_List_Edit= this.array.Edit;
    // this.Check_List_Save= this.array.Save;
    // this.Check_List_Delete= this.array.Delete;
this.Page_Load()
}}
Page_Load()
{
    this.Get_Menu_Status(62,this.Login_User); 

    this.myInnerHeight = (window.innerHeight);
    this.myInnerHeight = this.myInnerHeight - 250;
this.Clr_Check_List();
this.Search_Check_List();

this.myInnerHeight = (window.innerHeight);
this.myTotalHeight=this.myInnerHeight - 180;
this.myTotalHeight=this.myTotalHeight-40;
this.myInnerHeight = this.myInnerHeight - 250;
}

Get_Menu_Status(Menu_id, Login_user_id)
{
    
this.issLoading = false;
this.Check_List_Service_.Get_Menu_Status(Menu_id,Login_user_id).subscribe(Rows => {            

    
    if (Rows[0][0]==undefined)
    {
        if(Menu_id==60)
        {
        localStorage.removeItem('token');
        this.router.navigateByUrl('Home_Page');
        }
    }  
    else
    if (Rows[0][0].View >0) 
    {
        
        
        if(Menu_id==60)
        {
            
           

            this.Permissions=Rows[0][0];
            if(this.Permissions==undefined || this.Permissions==null)
                {
                    localStorage.removeItem('token');
                    this.router.navigateByUrl('Home_Page');
                }
               
                this.Check_List_Edit= this.array.Edit;
                this.Check_List_Save= this.array.Save;
                this.Check_List_Delete= this.array.Delete;
        }

    }
},
Rows => {
    this.issLoading = false;
    const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Error Occured', Type: "2" } });
});
}

Create_New_Check_List() 
{
this.Entry_View = true;
this.Clr_Check_List();
}
Close_Click()
{
this.Entry_View = false;
}
trackByFn(index, item) 
{
return index;
}

Clr_Check_List()
{
this.Check_List_.Check_List_Id=0;
this.Check_List_.Check_List_Name="";
// this.Check_List_.Status_Order=0;
// this.Check_List_.Editable=false;
// this.Check_List_.Color="";

}
show_Loader()
{

}
hide_Loader()
{

}
Search_Check_List()
{
    this.issLoading=true;
    
this.Check_List_Service_.Search_Check_List(this.Check_List_Name_Search).subscribe(Rows => {
this.Check_List_Data=Rows[0];
this.Total_Entries=this.Check_List_Data.length;

if(this.Check_List_Data.length==0)
{
const dialogRef = this.dialogBox.open
( DialogBox_Component, {panelClass:'Dialogbox-Class'
,data:{Message:'No Details Found',Type:"3"}});
}
this.issLoading=false;
},
Rows => { 
    this.issLoading=false;
 const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}}); });

}

Delete_Check_List(Check_List_Id,index)
{
const dialogRef = this.dialogBox.open
( DialogBox_Component, {panelClass:'Dialogbox-Class'
,data:{Message:'Do you want to delete ?',Type:"true",Heading:'Confirm'}});
dialogRef.afterClosed().subscribe(result =>
{
if(result=='Yes')
{
    this.issLoading=true;
this.Check_List_Service_.Delete_Check_List(Check_List_Id).subscribe(Delete_status => {
if(Delete_status[0].status==true){
this.Check_List_Data.splice(this.EditIndex, 1);
const dialogRef = this.dialogBox.open
( DialogBox_Component, {panelClass:'Dialogbox-Class'
,data:{Message:'Deleted',Type:"false"}});

}
else
{
this.Check_List_Data.splice(index, 1);
const dialogRef = this.dialogBox.open
( DialogBox_Component, {panelClass:'Dialogbox-Class'
,data:{Message:'Deleted',Type:"false"}});
}
this.issLoading=false;
},
Rows => { this.issLoading=false;
 const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}}); });

}
});
}
Save_Check_List()
{

if(this.Check_List_.Check_List_Name==undefined || this.Check_List_.Check_List_Name==null || this.Check_List_.Check_List_Name=="")
{
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Enter Check List',Type:"3"}});   
}
else{
document.getElementById("Save_Button").hidden=true;
this.issLoading=true;

this.Check_List_Service_.Save_Check_List(this.Check_List_).subscribe(Save_status => {
    
    this.issLoading=false;
Save_status=Save_status[0];
if(Save_status!=undefined)
{
    
if (Number(Save_status[0].Check_List_Id_) > 0) 
{
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Saved',Type:"false"}});
document.getElementById("Save_Button").hidden=false;
this.Clr_Check_List();
this.Search_Check_List();
}
}
else{
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
document.getElementById("Save_Button").hidden=false;
}
this.issLoading=false;
},
Rows => { 
    this.issLoading=false;
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
document.getElementById("Save_Button").hidden=false;
});

}
}
Edit_Check_List(Check_List_e:Check_List,index)
{

this.Entry_View=true;
this.Check_List_=Check_List_e;
this.Check_List_ = Object.assign({}, Check_List_e);
}
}
