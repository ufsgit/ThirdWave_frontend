import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Remarks_Service } from '../../../services/Remarks.service';
import { DialogBox_Component } from '../DialogBox/DialogBox.component';
import { Document_Type } from '../../../models/Document_Type';
import {MatDialog} from '@angular/material';
import { ROUTES,Get_Page_Permission } from '../../../components/sidebar/sidebar.component';
import { outgoing_webhook } from 'app/models/outgoing_webhook';
import { system_webhook_fields } from 'app/models/system_webhook_fields';
import { custom_webhook_fields } from 'app/models/custom_webhook_fields';

import { fields } from 'app/models/fields';
import { Outgoing_Webhook_Service } from 'app/services/Outgoing_Webhook.Service';
@Component({

selector: 'app-Outgoing_Webhook',
templateUrl: './Outgoing_Webhook.component.html',
styleUrls: ['./Outgoing_Webhook.component.css']
})
export class Outgoing_WebhookComponent implements OnInit {
Document_Type_Data:Document_Type[]
Document_Type_:Document_Type= new Document_Type();
Document_Type_Name_Search:string;
Entry_View:boolean=true;
EditIndex: number;
Total_Entries: number;
color = 'primary';
mode = 'indeterminate';
value = 50;
issLoading: boolean;
Permissions: any;
Webhook_Edit:boolean;
Webhook_Save:boolean;
Webhook_Delete:boolean;
myInnerHeight: number;
myTotalHeight:number;
Login_User:string="0";

outgoing_webhook_Data:outgoing_webhook[]
outgoing_webhook_:outgoing_webhook= new outgoing_webhook();

system_webhook_fields_Data:system_webhook_fields[]
system_webhook_fields_:system_webhook_fields= new system_webhook_fields();

custom_webhook_fields_Data:custom_webhook_fields[]
custom_webhook_fields_:custom_webhook_fields= new custom_webhook_fields();

fields_Data:fields[]
fields_:fields= new fields();
fields_temp_:fields= new fields();

system_webhook_fields_Index: number = -1;
custom_webhook_fields_Index: number = -1;


Webhook_Name_Search:string="";


constructor(public Document_Type_Service_:Remarks_Service, public Outgoing_Webhook_Service_:Outgoing_Webhook_Service,private route: ActivatedRoute, private router: Router,public dialogBox: MatDialog) { }
ngOnInit() 
{
    this.Login_User=localStorage.getItem(("Login_User"));

{

this.Page_Load()
}
}
Page_Load()
{
    this.Get_Menu_Status(169,this.Login_User); 

    this.myInnerHeight = (window.innerHeight);
    this.myInnerHeight = this.myInnerHeight - 230;
    this.Search_Outgoing_Webhook();
    this.Load_Webhook_Dropdowns() ;
    this.Entry_View=false;

    this.myInnerHeight = (window.innerHeight);
    this.myTotalHeight=this.myInnerHeight - 200;
    this.myTotalHeight=this.myTotalHeight-90;
    this.myInnerHeight = this.myInnerHeight - 230;

}

Get_Menu_Status(Menu_id, Login_user_id)
{
    
this.issLoading = false;
this.Outgoing_Webhook_Service_.Get_Menu_Status(Menu_id,Login_user_id).subscribe(Rows => {            

    
    if (Rows[0][0]==undefined)
    {
        if(Menu_id==191)
        {
        localStorage.removeItem('token');
        this.router.navigateByUrl('Home_Page');
        }
    }  
    else
    if (Rows[0][0].View >0) 
    {
        
        
        if(Menu_id==191)
        {
            
       

            this.Permissions=Rows[0][0];
            if(this.Permissions==undefined || this.Permissions==null)
                {
                    localStorage.removeItem('token');
                    this.router.navigateByUrl('Home_Page');
                }
               
                this.Webhook_Edit=this.Permissions.Edit;
                this.Webhook_Save=this.Permissions.Save;
                this.Webhook_Delete=this.Permissions.Delete;
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
this.Clr_Outgoing_Webhook();
}
Close_Click()
{
this.Entry_View = false;
this.Clr_Outgoing_Webhook();
this.Search_Outgoing_Webhook();
}
trackByFn(index, item) 
{
return index;
}

 
// <------------------------------------>

Load_Webhook_Dropdowns() {
    this.issLoading = true;
    this.Outgoing_Webhook_Service_.Load_Webhook_Dropdowns().subscribe(
        (Rows) => {
            if (Rows != null) {
                this.fields_Data = Rows[0];
                this.fields_temp_.Fields_Id = 0;
                this.fields_temp_.Fields_Name = "Select";
                this.fields_Data.unshift(this.fields_temp_);

                this.fields_ = this.fields_Data[0];
                console.log('this.fields_: ', this.fields_);
                this.issLoading = false;
            }
        },
        (Rows) => {
            this.issLoading = false;
        }
    );
}




Plus_System_webhook_Field(event)
{
    
    
    if (this.fields_.Fields_Id == undefined || this.fields_.Fields_Id == null || this.fields_.Fields_Id == 0 || this.fields_==null )
    {
        const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message:'Select Field ',Type:"3"}});
        return
    }
    // else if (this.system_webhook_fields_.Field_Map == undefined || this.system_webhook_fields_.Field_Map == null || this.system_webhook_fields_.Field_Map=='' )
    // {
    //     const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message:'Enter Field Map',Type:"3"}});
    //     return
    // } 


    if (this.system_webhook_fields_Data == undefined)
        this.system_webhook_fields_Data = [];
    this.system_webhook_fields_.Fields_Id = this.fields_.Fields_Id
    this.system_webhook_fields_.Fields_Name = this.fields_.Fields_Name



    if (this.system_webhook_fields_Index >= 0) {
        this.system_webhook_fields_Data[this.system_webhook_fields_Index] = Object.assign({}, this.system_webhook_fields_)// this.Sales_Details_;
        }
        else {
        this.system_webhook_fields_Data.push(Object.assign({}, this.system_webhook_fields_));
        }
    this.system_webhook_fields_Index=-1;
    this.Clr_system_webhook_fields();
}

Clr_system_webhook_fields()
{
this.system_webhook_fields_.System_Webhook_Fields_Id=0;
this.system_webhook_fields_.Webhook_Id=0;
this.system_webhook_fields_.Slno=0;
this.system_webhook_fields_.Fields_Id=0;
this.system_webhook_fields_.Field_Map='';


if (this.fields_Data != undefined && this.fields_Data != null)
    this.fields_ = this.fields_Data[0];

   
}

Delete_System_Webhook_Fields(system_webhook_fields_:system_webhook_fields,index)
{
    this.system_webhook_fields_Data.splice(index, 1);
    this.Clr_system_webhook_fields();
}



Edit_System_Webhook_Fields(system_webhook_fields_e:system_webhook_fields,index)
{   
    this.system_webhook_fields_Index=index;
    this.system_webhook_fields_ = Object.assign({}, system_webhook_fields_e); 

    

    for (var i = 0; i < this.fields_Data.length; i++) {
        if (this.fields_Data[i].Fields_Id == this.system_webhook_fields_.Fields_Id) {
            this.fields_ = this.fields_Data[i];
        }       
    }


}



Plus_Custom_webhook_Field(event)
{
    
    
    if (this.custom_webhook_fields_.Field_Name == undefined || this.custom_webhook_fields_.Field_Name == null || this.custom_webhook_fields_.Field_Name=='' )
        {
            const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message:'Enter Field Name',Type:"3"}});
            return
        } 
    // else if (this.custom_webhook_fields_.Field_Map == undefined || this.custom_webhook_fields_.Field_Map == null || this.custom_webhook_fields_.Field_Map=='' )
    // {
    //     const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message:'Enter Field Map',Type:"3"}});
    //     return
    // } 


    if (this.custom_webhook_fields_Data == undefined)
        this.custom_webhook_fields_Data = [];
   



    if (this.custom_webhook_fields_Index >= 0) {
        this.custom_webhook_fields_Data[this.custom_webhook_fields_Index] = Object.assign({}, this.custom_webhook_fields_)// this.Sales_Details_;
        }
        else {
        this.custom_webhook_fields_Data.push(Object.assign({}, this.custom_webhook_fields_));
        }
    this.custom_webhook_fields_Index=-1;
    this.Clr_Custom_webhook_fields();
}

Clr_Custom_webhook_fields()
{
this.custom_webhook_fields_.Custom_Webhook_Fields_Id=0;
this.custom_webhook_fields_.Webhook_Id=0;
this.custom_webhook_fields_.Field_Name='';
this.custom_webhook_fields_.Field_Map='';


if (this.fields_Data != undefined && this.fields_Data != null)
    this.fields_ = this.fields_Data[0];

   
}

Delete_Custom_Webhook_Fields(custom_webhook_fields_:custom_webhook_fields,index)
{
    this.custom_webhook_fields_Data.splice(index, 1);
    this.Clr_system_webhook_fields();
}



Edit_Custom_Webhook_Fields(custom_webhook_fields_e:custom_webhook_fields,index)
{   
    this.custom_webhook_fields_Index=index;
    this.custom_webhook_fields_ = Object.assign({}, custom_webhook_fields_e); 

}


Save_Outgoing_Webhook()
{
    if(this.outgoing_webhook_.Webhook_Name===undefined || this.outgoing_webhook_.Webhook_Name==null || this.outgoing_webhook_.Webhook_Name=="")
    {
    const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message:'Enter Webhook Name ',Type: "3" }});
    return  
    }
    
   else if(this.outgoing_webhook_.Webhook_Link===undefined || this.outgoing_webhook_.Webhook_Link==null || this.outgoing_webhook_.Webhook_Link=="")
        {
        const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message:'Enter Webhook Link ',Type: "3" }});
        return  
        }
   

    this.issLoading=true;
    debugger
    if(this.system_webhook_fields_Data!=undefined&&this.system_webhook_fields_Data!=null){
    if(this.system_webhook_fields_Data.length>0)
    {
        this.outgoing_webhook_.system_webhook_fields_Data_length=this.system_webhook_fields_Data.length;
        this.outgoing_webhook_.system_webhook_fields = this.system_webhook_fields_Data;
    }
}
    else{
         this.outgoing_webhook_.system_webhook_fields_Data_length=0;
         this.outgoing_webhook_.system_webhook_fields = null;
        }

    if(this.custom_webhook_fields_Data!=undefined&&this.custom_webhook_fields_Data!=null){
        if(this.custom_webhook_fields_Data.length>0 )
            {
             this.outgoing_webhook_.custom_webhook_fields_Data_length=this.custom_webhook_fields_Data.length;
             this.outgoing_webhook_.custom_webhook_fields = this.custom_webhook_fields_Data;
            }
    }
   else{
    this.outgoing_webhook_.custom_webhook_fields_Data_length=0;
    this.outgoing_webhook_.custom_webhook_fields =null;
   }


     


   debugger
    this.Outgoing_Webhook_Service_.Save_Outgoing_Webhook(this.outgoing_webhook_).subscribe(Save_status => {
        debugger
  
    if(Number(Save_status[0].Webhook_Id_)>0)
    {
    const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Saved',Type:"false"}});
    this.Close_Click();
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




Search_Outgoing_Webhook()
{
    debugger
this.issLoading=true;
this.Outgoing_Webhook_Service_.Search_Outgoing_Webhook(this.Webhook_Name_Search).subscribe(Rows => {
    debugger
 this.outgoing_webhook_Data=Rows[0];
this.Total_Entries=this.outgoing_webhook_Data.length;
if(this.outgoing_webhook_Data.length==0)
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

Delete_Outgoing_Webhook(Webhook_Id,index)
{
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Do you want to delete ?',Type:true,Heading:'Confirm'}});

dialogRef.afterClosed().subscribe(result =>
{
if(result=='Yes')
{
this.issLoading=true;
this.Outgoing_Webhook_Service_.Delete_Outgoing_Webhook(Webhook_Id).subscribe(Delete_status => {
   debugger
if(Delete_status[0][0].Webhook_Id_>0){
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Deleted',Type: "false"}});
this.Search_Outgoing_Webhook();
}
else{
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



Edit_Outgoing_Webhook(outgoing_webhook_e:outgoing_webhook,index)
{
    this.Entry_View=true;
    this.outgoing_webhook_=outgoing_webhook_e;
    this.outgoing_webhook_=Object.assign({},outgoing_webhook_e);


    this.issLoading = true;
    this.Outgoing_Webhook_Service_.Get_Outgoing_Webhook(this.outgoing_webhook_.Webhook_Id).subscribe(Rows => {
        
         this.system_webhook_fields_Data = Rows[0]
        this.custom_webhook_fields_Data = Rows[1]
        this.issLoading = false;

    },

        Rows => {
            this.issLoading = false;
            const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Error Occured', Type: "2" } });
        });

}

Clr_Outgoing_Webhook()
{
    this.outgoing_webhook_.Webhook_Id =0 ;
    this.outgoing_webhook_.Webhook_Name =''; 
    this.outgoing_webhook_.Description =''; 

    this.outgoing_webhook_.Webhook_Link =''; 
    this.outgoing_webhook_.system_webhook_fields=[];
    this.outgoing_webhook_.custom_webhook_fields=[];

    this.outgoing_webhook_.system_webhook_fields_Data_length=0;
    this.outgoing_webhook_.custom_webhook_fields_Data_length=0;

    this.custom_webhook_fields_Data=null;
    this.system_webhook_fields_Data=null;
}


}

