import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogBox_Component } from '../DialogBox/DialogBox.component';
import { Fees} from '../../../models/Fees';

import { Fees_Service } from '../../../services/Fees.service';
import { Student_Service } from '../../../services/Student.service';
import {MatDialog} from '@angular/material';import { ROUTES,Get_Page_Permission } from '../../../components/sidebar/sidebar.component';import { Data_Field } from 'app/models/Data_Field';
@Component({
selector: 'app-Data_Fields',
templateUrl: './Data_Fields.component.html',
styleUrls: ['./Data_Fields.component.css']
})
export class Data_FieldsComponent implements OnInit {
Fees_Data:Fees[]
Fees_:Fees= new Fees();

Fees_Name_Search:string;


Data_Field_Data:Data_Field[]
Data_Field_:Data_Field= new Data_Field();

Data_Field_Name_Search:string;


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
Data_Type:number=0

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
this.Clr_Data_Field();
this.Search_DataFields();
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
this.Clr_Data_Field();
}
Close_Click()
{
this.Entry_View = false;

}
trackByFn(index, item) 
{
return index;
}

 Clr_Data_Field()
 {
this.Data_Field_.Fields_Id=0;
this.Data_Field_.Fields_Name="";
this.Data_Type=0;


}
Search_DataFields()
{
   
    
this.issLoading=true;
this.Fees_Service_.Search_DataFields(this.Data_Field_Name_Search).subscribe(Rows => {
   
 this.Data_Field_Data=Rows[0];
this.Total_Entries=this.Data_Field_Data.length;
if(this.Data_Field_Data.length==0)
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


Delete_DataFields(Fields_Id,index)
{
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Do you want to delete ?',Type:true,Heading:'Confirm'}});
this.Search_DataFields();
dialogRef.afterClosed().subscribe(result =>
{
if(result=='Yes')
{

this.issLoading=true;
debugger
this.Fees_Service_.Delete_DataFields(Fields_Id).subscribe(Delete_status => {
   
if(Delete_status[0][0].Fields_Id_>0){
this.Data_Field_Data.splice(this.EditIndex, 1);
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Deleted',Type: "false"}});
this.Search_DataFields();
}
else if(Number(Delete_status[0][0].Fields_Id_)== -2)
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
Save_DataField()
    {
        if(this.Data_Field_.Fields_Name== undefined || this.Data_Field_.Fields_Name == null || this.Data_Field_.Fields_Name == undefined || this.Data_Field_.Fields_Name=='') {
                const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Enter Data Field Name', Type: "3" } });
               return;
            }

            if(this.Data_Type== undefined || this.Data_Type == null || this.Data_Type == undefined || Number(this.Data_Type)==0) {
                const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Enter Data Type', Type: "3" } });
               return;
            }

    this.Data_Field_.Data_Type=Number(this.Data_Type)
        
    this.issLoading=true;
debugger
    this.Fees_Service_.Save_DataField(this.Data_Field_).subscribe(Save_status => {
       debugger 
    if(Number(Save_status[0][0].Fields_Id_)>0)
    {
    const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Saved',Type:"false"}});
   this.Search_DataFields();
     this.Clr_Data_Field();
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
Edit_Data_Field(Data_Field_e:Data_Field,index)
{
   debugger
this.Entry_View=true;
this.Data_Field_=Data_Field_e;
this.Data_Field_=Object.assign({},Data_Field_e);

if (this.Data_Field_.Data_Type > 0) {
    this.Data_Type = this.Data_Field_.Data_Type;
  } else this.Data_Type = 0;


}
}



