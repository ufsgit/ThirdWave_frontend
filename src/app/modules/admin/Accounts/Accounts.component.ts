import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogBox_Component } from '../DialogBox/DialogBox.component';
import { Accounts} from '../../../models/Accounts';

//import { Accounts_Service } from '../../../services/Accounts.service';
import { Student_Service } from '../../../services/Student.service';
import {MatDialog} from '@angular/material';import { ROUTES,Get_Page_Permission } from '../../../components/sidebar/sidebar.component';
import { Accounts_Service } from 'app/services/Accounts.Service';
@Component({
selector: 'app-Accounts',
templateUrl: './Accounts.component.html',
styleUrls: ['./Accounts.component.css']
})
export class AccountsComponent implements OnInit {

Accounts_:Accounts= new Accounts();
Accounts_Group_:Accounts= new Accounts();
Accounts_Data:Accounts[];
Accounts_Temp:Accounts= new Accounts();
Accounts_Data_Dropdown:Accounts[];

Client_Accounts_Name_Search:string;


Entry_View:boolean=true;
EditIndex: number;
Total_Entries: number;
color = 'primary';
mode = 'indeterminate';
value = 50;
issLoading: boolean;
Permissions: any;
Accounts_Edit:boolean;
Accounts_Save:boolean;
Accounts_Delete:boolean;
myInnerHeight: number;
myTotalHeight:number;

Login_User:string="0";


constructor(public Accounts_Service_:Accounts_Service,public Student_Service_:Student_Service, private route: ActivatedRoute, private router: Router,public dialogBox: MatDialog) { }
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
// this.Accounts_Edit=this.Permissions.Edit;
// this.Accounts_Save=this.Permissions.Save;
// this.Accounts_Delete=this.Permissions.Delete;
this.Page_Load()
}
}
Page_Load()
{
    
    this.Get_Menu_Status(120,this.Login_User); 
this.Load_AccountGroup();
this.myInnerHeight = (window.innerHeight);
this.myInnerHeight = this.myInnerHeight - 250;
this.Clr_Accounts();
this.Search_Accounts();
this.Entry_View=false;
// this.Get_Menu_Status()
this.myInnerHeight = (window.innerHeight);
    this.myTotalHeight=this.myInnerHeight - 230;
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
        
        
        if(Menu_id==120)
        {
            
           

            this.Permissions=Rows[0][0];
            if(this.Permissions==undefined || this.Permissions==null)
                {
                    localStorage.removeItem('token');
                    this.router.navigateByUrl('Home_Page');
                }
                this.Accounts_Edit=this.Permissions.Edit;
                this.Accounts_Save=this.Permissions.Save;
                this.Accounts_Delete=this.Permissions.Delete;
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
this.Clr_Accounts();
}
Close_Click()
{
this.Entry_View = false;

}
trackByFn(index, item) 
{
return index;
}

 Clr_Accounts()
 {
this.Accounts_.Client_Accounts_Id=0;
this.Accounts_.Client_Accounts_Name="";


if (
    this.Accounts_Data_Dropdown != null &&
    this.Accounts_Data_Dropdown != undefined
)
    this.Accounts_Group_ = this.Accounts_Data_Dropdown[0];

}


Load_AccountGroup() {
   
    this.issLoading = true;
    this.Accounts_Service_.Load_AccountGroup().subscribe(
        (Rows) => {
           
            if (Rows != null) {
                
            
                this.Accounts_Data_Dropdown = Rows[0];
                this.Accounts_Temp.Account_Group_Id = 0;
                this.Accounts_Temp.Group_Name = "Select";
                this.Accounts_Data_Dropdown.unshift(Object.assign({},this.Accounts_Temp));
                this.Accounts_Group_ = this.Accounts_Data_Dropdown[0];
                this.issLoading = false;



            }
        },
        (Rows) => {
            this.issLoading = false;
           
        }
    );
}





Search_Accounts()
{
   
  var  search_Account_Group_Id=0
this.issLoading=true;
if(this.Accounts_Group_!=undefined && this.Accounts_Group_!=null )
search_Account_Group_Id=this.Accounts_Group_.Account_Group_Id;

this.Accounts_Service_.Search_Accounts(this.Client_Accounts_Name_Search,search_Account_Group_Id).subscribe(Rows => {
    
 this.Accounts_Data=Rows[0];
this.Total_Entries=this.Accounts_Data.length;
if(this.Accounts_Data.length==0)
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
Delete_Accounts(Client_Accounts_Id,index)
{
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Do you want to delete ?',Type:true,Heading:'Confirm'}});
this.Search_Accounts();
dialogRef.afterClosed().subscribe(result =>
{
if(result=='Yes')
{

this.issLoading=true;
this.Accounts_Service_.Delete_Accounts(Client_Accounts_Id).subscribe(Delete_status => {
    
if(Delete_status[0][0].Client_Accounts_Id_>0){
this.Accounts_Data.splice(this.EditIndex, 1);
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Deleted',Type: "false"}});
this.Search_Accounts();
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
    Save_Accounts()
    {
      
        
        if(this.Accounts_.Client_Accounts_Name== undefined || this.Accounts_.Client_Accounts_Name == null || this.Accounts_.Client_Accounts_Name == undefined || this.Accounts_.Client_Accounts_Name=='') {
                const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Enter Accounts Name', Type: "3" } });
               return;
            }

            if(this.Accounts_Group_.Account_Group_Id == null || this.Accounts_Group_.Account_Group_Id == 0 || this.Accounts_Group_.Account_Group_Id == undefined ) {
                const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Select Accounts Group', Type: "3" } });
               return;
            }


            this.Accounts_.Account_Group_Id =this.Accounts_Group_.Account_Group_Id;
            this.Accounts_.Group_Name =this.Accounts_Group_.Group_Name; 
        
    this.issLoading=true;
   
    this.Accounts_Service_.Save_Accounts(this.Accounts_).subscribe(Save_status => {
        
    //Save_status=Save_status[0];
    if(Number(Save_status[0][0].Client_Accounts_Id_)>0)
    {
    const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Saved',Type:"false"}});
    this.Search_Accounts();
    this.Clr_Accounts();
    }
    else{
    const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Enter Accounts Name',Type:"2"}});
    }
    this.issLoading=false;
    },
 Rows => { 
this.issLoading=false;
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:Rows.error,Type:"2"}});
 });
 
}
Edit_Accounts(Accounts_e:Accounts,index)
{
   
this.Entry_View=true;
this.Accounts_=Accounts_e;
this.Accounts_=Object.assign({},Accounts_e);




for (var i = 0; i < this.Accounts_Data_Dropdown.length; i++) {
    if (
        this.Accounts_.Account_Group_Id ==
        this.Accounts_Data_Dropdown[i].Account_Group_Id
    )
        this.Accounts_Group_ = this.Accounts_Data_Dropdown[i];
}
// if(this.Department_Status_.Status_Type_Id==1){this.Status_Type_ =1}
// if(this.Department_Status_.Status_Type_Id==2){this.Status_Type_ =2}
// if(this.Department_Status_.Status_Type_Id==0){this.Status_Type_ =0}
 
}






}



