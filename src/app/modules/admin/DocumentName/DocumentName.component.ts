import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogBox_Component } from '../DialogBox/DialogBox.component';
import { Fees} from '../../../models/Fees';
import { Document} from '../../../models/Document';
import { Fees_Service } from '../../../services/Fees.service';
import { Student_Service } from '../../../services/Student.service';
import {MatDialog} from '@angular/material';import { ROUTES,Get_Page_Permission } from '../../../components/sidebar/sidebar.component';@Component({
selector: 'app-DocumentName',
templateUrl: './DocumentName.component.html',
styleUrls: ['./DocumentName.component.css']
})
export class DocumentNameComponent implements OnInit {

Fees_Data:Fees[]
Fees_:Fees= new Fees();
Fees_Name_Search:string;

Document_Data:Document[]
Document_:Document= new Document();
Document_Name_Search:string;



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

DocumentName_Edit:boolean;
DocumentName_Save:boolean;
DocumentName_Delete:boolean;

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
// this.DocumentName_Edit=this.Permissions.Edit;
// this.DocumentName_Save=this.Permissions.Save;
// this.DocumentName_Delete=this.Permissions.Delete;
this.Page_Load()
}
}
Page_Load()
{
    
    this.Get_Menu_Status(111,this.Login_User); 

this.myInnerHeight = (window.innerHeight);
this.myInnerHeight = this.myInnerHeight - 250;
this.Clr_Document();
this.Search_Documents();
this.Entry_View=false;
// this.Get_Menu_Status()
this.myInnerHeight = (window.innerHeight);
    this.myTotalHeight=this.myInnerHeight - 200;
    this.myTotalHeight=this.myTotalHeight-40;
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
        
        
        if(Menu_id==111)
        {
            
           

            this.Permissions=Rows[0][0];
            if(this.Permissions==undefined || this.Permissions==null)
                {
                    localStorage.removeItem('token');
                    this.router.navigateByUrl('Home_Page');
                }
                this.DocumentName_Edit=this.Permissions.Edit;
                this.DocumentName_Save=this.Permissions.Save;
                this.DocumentName_Delete=this.Permissions.Delete;
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
this.Clr_Document();
}
Close_Click()
{
this.Entry_View = false;

}
trackByFn(index, item) 
{
return index;
}

 Clr_Document()
 {
this.Document_.Document_Id=0;
this.Document_.Document_Name="";


}
Search_Documents()
{
    
this.issLoading=true;
this.Student_Service_.Search_DocumentName(this.Document_Name_Search).subscribe(Rows => {
    
 this.Document_Data=Rows[0];
this.Total_Entries=this.Document_Data.length;
if(this.Document_Data.length==0)
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
Delete_DocumentName(Document_Id,index)
{
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Do you want to delete ?',Type:true,Heading:'Confirm'}});
this.Search_Documents();
dialogRef.afterClosed().subscribe(result =>
{
if(result=='Yes')
{

this.issLoading=true;
this.Student_Service_.Delete_DocumentName(Document_Id).subscribe(Delete_status => {
    
if(Delete_status[0][0].Document_Id_>0){
this.Document_Data.splice(this.EditIndex, 1);
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Deleted',Type: "false"}});
this.Search_Documents();
}else if(Number(Delete_status[0][0].Document_Id_)== -2)
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
Save_DocumentName()
    {
        if(this.Document_.Document_Name== undefined || this.Document_.Document_Name == null || this.Document_.Document_Name == undefined || this.Document_.Document_Name=='') {
                const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Enter Document Name', Type: "3" } });
               return;
            }
        
    this.issLoading=true;

    this.Student_Service_.Save_DocumentName(this.Document_).subscribe(Save_status => {
        
    //Save_status=Save_status[0];
    if(Number(Save_status[0][0].Document_Id_)>0)
    {
    const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Saved',Type:"false"}});
    this.Search_Documents();
    this.Clr_Document();
    }
    else{
    const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Enter Document Name',Type:"2"}});
    }
    this.issLoading=false;
    },
 Rows => { 
this.issLoading=false;
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:Rows.error,Type:"2"}});
 });
 
}
Edit_Document(Document_e:Document,index)
{
   
this.Entry_View=true;
this.Document_=Document_e;
this.Document_=Object.assign({},Document_e);
}
}



