import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User_Role_Service } from '../../../services/User_Role.service';
import { DialogBox_Component } from '../DialogBox/DialogBox.component';
import { User_Role } from '../../../models/User_Role';
import {MatDialog} from '@angular/material';import { ROUTES,Get_Page_Permission } from '../../../components/sidebar/sidebar.component';import { User_Details_Service } from 'app/services/User_Details.service';
import { User_Menu_Selection } from 'app/models/User_Menu_Selection';
@Component({
selector: 'app-User_Role',
templateUrl: './User_Role.component.html',
styleUrls: ['./User_Role.component.css']
})
export class User_RoleComponent implements OnInit {
User_Role_Data:User_Role[]
User_Role_Typeahead_Data:User_Role[]
User_Role_:User_Role= new User_Role();
User_Role_Temp:User_Role= new User_Role();
Under_Role_:User_Role= new User_Role();
User_Role_Name_Search:string;
Search_User_Role_:string;
Entry_View:boolean=true;
myInnerHeight: number;
EditIndex: number;
Id:number;
Name:string;
Total_Entries: number=0;
User_Role_Id:number= 0;
color = 'primary';
mode = 'indeterminate';
value = 50;
issLoading: boolean;
Permissions: any;
User_Role_Edit:boolean;
User_Role_Save:boolean;
User_Role_Delete:boolean;
Login_User: string = "0";
myTotalHeight:number;
Select_View:boolean=false;
Select_Save:boolean=false;
Select_Edit:boolean=false;
Select_Delete:boolean=false;
User_Menu_Selection_Data:User_Menu_Selection[]
User_Menu_Selection_Data_Temp: User_Menu_Selection[] = [];


constructor(public User_Role_Service_:User_Role_Service,public User_Details_Service_:User_Details_Service, private route: ActivatedRoute, private router: Router,public dialogBox: MatDialog) { }
ngOnInit() 
    {
        this.User_Role_Typeahead_Data = [];
    this.Login_User = localStorage.getItem("Login_User");

        
    // this.Permissions = Get_Page_Permission(54);
    // if(this.Permissions==undefined || this.Permissions==null)
    // {
    // localStorage.removeItem('token');
    // this.router.navigateByUrl('Home_Page');
    // }
    // else
    {
    // this.User_Role_Edit=this.Permissions.Edit;
    // this.User_Role_Save=this.Permissions.Save;
    // this.User_Role_Delete=this.Permissions.Delete;
    this.Page_Load()
    }
}
Page_Load()
{
    this.Get_Menu_Status(54,this.Login_User); 

    this.myInnerHeight = (window.innerHeight);
    this.myInnerHeight = this.myInnerHeight - 230;
    this.Clr_User_Role();
    this.Search_User_Role();
    this.Load_Dropdowns();
    //this.Load_User_Role();
    this.Entry_View=false;
    this.myInnerHeight = (window.innerHeight);
    this.myTotalHeight=this.myInnerHeight - 100;
    this.myTotalHeight=this.myTotalHeight-90;
    this.myInnerHeight = this.myInnerHeight - 230;
}


Get_Menu_Status(Menu_id, Login_user_id)
{
    
this.issLoading = false;
this.User_Role_Service_.Get_Menu_Status(Menu_id,Login_user_id).subscribe(Rows => {            

    
    if (Rows[0][0]==undefined)
    {
        if(Menu_id==54)
        {
        localStorage.removeItem('token');
        this.router.navigateByUrl('Home_Page');
        }
    }  
    else
    if (Rows[0][0].View >0) 
    {
        
        
        if(Menu_id==54)
        {
            
          

            this.Permissions=Rows[0][0];
            if(this.Permissions==undefined || this.Permissions==null)
                {
                    localStorage.removeItem('token');
                    this.router.navigateByUrl('Home_Page');
                }
               
                this.User_Role_Edit=this.Permissions.Edit;
                this.User_Role_Save=this.Permissions.Save;
                this.User_Role_Delete=this.Permissions.Delete;
        }

    }
},
Rows => {
    this.issLoading = false;
    const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Error Occured', Type: "2" } });
});
}

trackByFn(index, item) 
{
return index;
}
Create_New()                           
{
    this.Entry_View = true;
    this.Clr_User_Role();
}
Close_Click()
{
    this.Entry_View = false;
}
Clr_User_Role()
 {
     this.User_Role_.User_Role_Id = 0;
    this.User_Role_.User_Role_Name=null;
    this.Under_Role_=null;
    this.User_Role_.User_Role_Name=""

    if(this.User_Menu_Selection_Data!=undefined)//&& this.User_Menu_Selection_Data!=null&&this.User_Menu_Selection_Data!=""
{
for(var i=0;i<this.User_Menu_Selection_Data.length;i++)
{
   this.User_Menu_Selection_Data[i].IsDelete=false;
   this.User_Menu_Selection_Data[i].IsEdit=false;
   this.User_Menu_Selection_Data[i].IsSave=false;
   this.User_Menu_Selection_Data[i].IsView=false;
}
}
   
}

Load_User_Role(event: any) 
{           
    var Value = "";
    if (event.target.value == "")
    Value = undefined;
    else
    Value = event.target.value;
    this.issLoading=true;
        this.User_Role_Service_.Load_User_Role(Value).subscribe(Rows => {
              
            if (Rows != null) {
            this.User_Role_Typeahead_Data=Rows[0];
            }
            this.issLoading=false;
             },
        Rows => 
        {
            this.issLoading=false;
       const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
        });
}     
display_Under_Role(User_Role_: User_Role)
{      
       if (User_Role_) { return User_Role_.User_Role_Name;  }
}
Search_User_Role()
{       
     
        this.issLoading=true;
        this.User_Role_Service_.Search_User_Role(this.Search_User_Role_).subscribe(Rows => {
            
              
        this.User_Role_Data=Rows[0];
        this.Total_Entries=this.User_Role_Data.length;
        if(this.User_Role_Data.length==0)
        {
             
            const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'No Details Found',Type:"3"}});
        }
         this.issLoading=false;
        },
        Rows => 
        {
            this.issLoading=false;
            const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
        });
}
Delete_User_Role(User_Role_Id_,index)
    {
         
    const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Do you want to delete ?',Type:"true",Heading:'Confirm'}});
    dialogRef.afterClosed().subscribe(result =>
       
    {
        
    if(result=='Yes')
    {
         
        this.issLoading=true;
        this.User_Role_Service_.Delete_User_Role(User_Role_Id_).subscribe(Delete_status => {
            
            // Delete_status=Delete_status[0];
            // Delete_status=Delete_status[0].DeleteStatus_.data[0];
        if(Number(Delete_status[0][0].User_Role_Id_)>0){
        this.User_Role_Data.splice(index, 1);         
        const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Deleted',Type:"false"}});
        this.Search_User_Role();
    }else if(Number(Delete_status[0][0].User_Role_Id_)== -2)
    {
        const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Already in Use, Cannot be Deleted!',Type:"2"}});
    }else{
        const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
    }
      this.issLoading=false;
    },
        Rows => {
        this.issLoading=false;
        const dialogRef = this.dialogBox.open    ( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}}); });
    }
    });
}
Save_User_Role()
{
    
    if (this.User_Role_.User_Role_Name == null || this.User_Role_.User_Role_Name == "" || this.User_Role_.User_Role_Name == undefined) {
    const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Enter the  User Role', Type: "3" } });
    }
    else if ( this.Under_Role_ == undefined || this.Under_Role_ == null  || this.Under_Role_.User_Role_Id == 0 || this.Under_Role_.User_Role_Id==undefined)
    {
        const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Select Under Role',Type:"3"}});
    }
else{


    this.User_Menu_Selection_Data_Temp=[]; 

    for (var i = 0; i< this.User_Menu_Selection_Data.length; i++) 
        {
        if (Boolean(this.User_Menu_Selection_Data[i].IsView) == true||Boolean(this.User_Menu_Selection_Data[i].IsSave) == true
        ||Boolean(this.User_Menu_Selection_Data[i].IsEdit) == true||Boolean(this.User_Menu_Selection_Data[i].IsDelete) == true) 
            {
            this.User_Menu_Selection_Data_Temp.push(this.User_Menu_Selection_Data[i]);
            }
        }
        this.User_Role_.User_Menu_Selection_Data = this.User_Menu_Selection_Data_Temp;


    this.User_Role_.Role_Under_Id=this.Under_Role_.User_Role_Id;
    this.issLoading=true;
      debugger
    this.User_Role_Service_.Save_User_Role(this.User_Role_).subscribe(Save_status => {  
      debugger  
        Save_status=Save_status[0];
        
    if(Number(Save_status[0].User_Role_Id_)>0)
    {
    const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Saved',Type:"false"}});
    this.Search_User_Role();
    this.Close_Click();
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
    this.Clr_User_Role();
 
}
}
Edit_User_Role(User_Role_e:User_Role,index)
{
 debugger     
this.Entry_View=true;
this.User_Role_=User_Role_e;
this.User_Role_=Object.assign({},User_Role_e);
this.User_Role_Id=User_Role_e.User_Role_Id;
this.Get_User_Details_Edit(this.User_Role_.User_Role_Id);
 
this.User_Role_Temp.User_Role_Id=User_Role_e.Role_Under_Id;
this.User_Role_Temp.User_Role_Name=User_Role_e.Role_Under
this.Under_Role_=this.User_Role_Temp;



}


Save_Duplicate_User_Details()
{
    
   // this.duplicate_user = true;
    this.User_Role_.User_Role_Id=0;
    this.User_Role_.User_Role_Name=null;
    this.Under_Role_=null;
    // this.User_Role_.Password=null;
   //this.Save_User_Details();
}
Get_User_Details_Edit(User_Role_Id) 

    {
       debugger  
        this.issLoading=true;
    this.User_Details_Service_.Get_User_Role_Edit(User_Role_Id).subscribe(Rows => 
    {
        debugger
         
this.User_Menu_Selection_Data=Rows[0].Menu;
    for(var j=0;j<this.User_Menu_Selection_Data.length;j++)
    {
    if (this.User_Menu_Selection_Data[j].IsView.toString()=='1')
    this.User_Menu_Selection_Data[j].IsView= true;  
    else
    this.User_Menu_Selection_Data[j].IsView= false;
    if (this.User_Menu_Selection_Data[j].IsEdit.toString()=='1')
    this.User_Menu_Selection_Data[j].IsEdit= true;
    else  
    this.User_Menu_Selection_Data[j].IsEdit= false; 
    if (this.User_Menu_Selection_Data[j].IsSave.toString()=='1')  
    this.User_Menu_Selection_Data[j].IsSave= true; 
    else
    this.User_Menu_Selection_Data[j].IsSave= false;
    if (this.User_Menu_Selection_Data[j].IsDelete.toString()=='1')
    this.User_Menu_Selection_Data[j].IsDelete= true;
    else 
    this.User_Menu_Selection_Data[j].IsDelete= false;
    }


    this.issLoading=false;
    },
  Rows => { 
    this.issLoading=false;
 const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}}); });

    }



Load_Dropdowns() 
    {
         
    this.User_Details_Service_.Get_Users_Load_Data().subscribe(Rows =>
    {
         
   this.User_Menu_Selection_Data =  Rows.User_Menu_Selection; 

    },
  Rows => { 
 const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}}); });
}

View_Click()
{
 
 for(var i=0;i<this.User_Menu_Selection_Data.length;i++)
{
    if(this.Select_View==false)
        this.User_Menu_Selection_Data[i].IsView=true;
    else
        this.User_Menu_Selection_Data[i].IsView=false;
}
}

Save_Click()
{
 
 for(var i=0;i<this.User_Menu_Selection_Data.length;i++)
{
    if(this.Select_Save==false)
        this.User_Menu_Selection_Data[i].IsSave=true;
    else
        this.User_Menu_Selection_Data[i].IsSave=false;
}
}
Edit_Click()
{
 
 for(var i=0;i<this.User_Menu_Selection_Data.length;i++)
{
    if(this.Select_Edit==false)
        this.User_Menu_Selection_Data[i].IsEdit=true;
    else
        this.User_Menu_Selection_Data[i].IsEdit=false;
}
}
Delete_Click()
{
 
 for(var i=0;i<this.User_Menu_Selection_Data.length;i++)
{
    if(this.Select_Delete==false)
        this.User_Menu_Selection_Data[i].IsDelete=true;
    else
        this.User_Menu_Selection_Data[i].IsDelete=false;
}
}

}

