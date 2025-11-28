import { Component, OnInit,Input,Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of as observableOf, merge } from 'rxjs';
import { Branch_Service } from '../../../services/Branch.service';
import { Department_Service } from '../../../services/Department.Service';
import { DialogBox_Component } from '../DialogBox/DialogBox.component';
import { Department } from '../../../models/Department';
import { Branch } from '../../../models/Branch';
import { ROUTES,Get_Page_Permission } from '../../../components/sidebar/sidebar.component'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA,MatDialogConfig} from '@angular/material';@Component({
selector: 'app-Details_check',
templateUrl: './Details_check.component.html',
styleUrls: ['./Details_check.component.css']
})
export class Details_checkComponent implements OnInit {
    Branch_Data:Branch[]
    Department_Data:Department[]
    Branch_:Branch= new Branch();
    Department_: Department = new Department();
    Branch_Name_Search:string;
    Entry_View:boolean=true;
    EditIndex: number;
    color = 'primary'; 
    mode = 'indeterminate'; 
    value = 50;
myInnerHeight: number;
    issLoading: boolean;
    Menu_Id:number=15;
    array:any;
    Total_Entries:number;
    Branch_Edit:boolean;
Branch_Save:boolean;ssss
Branch_Delete:boolean;
Login_User:string="0";
Permissions: any;


constructor(public Branch_Service_:Branch_Service,public Department_Service_:Department_Service, private route: ActivatedRoute, private router: Router,public dialogBox: MatDialog) { }
ngOnInit() 
{
    this.Login_User=localStorage.getItem(("Login_User"));

    this.array=Get_Page_Permission(this.Menu_Id);
    // if(this.array==undefined || this.array==null)
    // {
    // localStorage.removeItem('token');
    // this.router.navigateByUrl('/auth/login');
    // }
    // else 
    {
    // this.Branch_Edit= this.array.Edit;
    // this.Branch_Save= this.array.Save;
    // this.Branch_Delete= this.array.Delete;

this.Page_Load()
}
}
Page_Load()
{
    this.Get_Menu_Status(15,this.Login_User); 

    this.myInnerHeight = (window.innerHeight);
    this.myInnerHeight = this.myInnerHeight - 200;
this.Clr_Branch();
this.Search_Branch();
this.Search_Department();
this.Entry_View =false;
}

Get_Menu_Status(Menu_id, Login_user_id)
{
    
this.issLoading = false;
this.Branch_Service_.Get_Menu_Status(Menu_id,Login_user_id).subscribe(Rows => {            

    
    if (Rows[0][0]==undefined)
    {
        if(Menu_id==15)
        {
        localStorage.removeItem('token');
        this.router.navigateByUrl('Home_Page');
        }
    }  
    else
    if (Rows[0][0].View >0) 
    {
        
        
        if(Menu_id==15)
        {
            
        
            this.Permissions=Rows[0][0];
            if(this.Permissions==undefined || this.Permissions==null)
                {
                    localStorage.removeItem('token');
                    this.router.navigateByUrl('Home_Page');
                }
               
                this.Branch_Edit= this.array.Edit;
                this.Branch_Save= this.array.Save;
                this.Branch_Delete= this.array.Delete;
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
this.Entry_View =true;
this.Clr_Branch();
}
Close_Click()
{
this.Entry_View = false;
}
trackByFn(index, item) 
{
return index;
}
Clr_Branch()
    {
    this.Branch_.Branch_Id=0;
    this.Branch_.Branch_Name="";
    this.Branch_.Address="";
    this.Branch_.Location="";
    this.Branch_.District="";
    this.Branch_.State="";
    this.Branch_.Country="";
    this.Branch_.PinCode="";
    this.Branch_.Phone_Number="";
    this.Branch_.Email="";
    this.Branch_.Branch_Code="";
    if(this.Department_Data!= undefined)
    for(var i=0;i<this.Department_Data.length;i++)
    {
    this.Department_Data[i].Check_Box=false
    }
    }
show_Loader()
{
}
hide_Loader()
{
}
Search_Branch()
    {
        this.issLoading=true;
    this.Branch_Service_.Search_Branch('').subscribe(Rows => {
        this.issLoading=false;
    this.Branch_Data= Rows[0];
    this.Total_Entries=this.Branch_Data.length;
    if(this.Branch_Data.length==0)
    {
    const dialogRef = this.dialogBox.open
    ( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'No Details Found',Type:"3"}});
    }
    this.issLoading=false;
    },
    Rows => { 
        this.issLoading=false;
     const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}}); });
 
    }
Search_Department() 
    {
        this.issLoading=true;
    this.Department_Service_.Search_Department('').subscribe(Rows => {
    this.Department_Data = Rows[0];
    if (this.Department_Data.length == 0) {
    const dialogRef = this.dialogBox.open
    (DialogBox_Component, {
    panelClass: 'Dialogbox-Class'
    , data: { Message: 'No Details Found', Type: false }
    });
    }
    this.issLoading=false;
    },
  Rows => { 
    this.issLoading=false;
 const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}}); 
});

}
Get_Branch_Department_Edit(Branch_Id) 
    {
        this.issLoading=true;
    this.Branch_Service_.Get_Branch_Department_Edit(Branch_Id).subscribe(Rows => {
    this.Department_Data = Rows[0];
    for(var i=0;i<this.Department_Data.length;i++)
    {
    if (this.Department_Data[i].Check_Box.toString()=='1')
    {
    this.Department_Data[i].Check_Box=true
    }
    else 
    {
    this.Department_Data[i].Check_Box=false
    }
    }
    if (this.Department_Data.length == 0) {
    const dialogRef = this.dialogBox.open
    (DialogBox_Component, {
    panelClass: 'Dialogbox-Class'
    , data: { Message: 'No Details Found', Type: false }
    });
    }
    this.issLoading=false;
    },
  Rows => { 
    this.issLoading=false;
 const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
 });

    }
Delete_Branch(Branch_,index)
    {
     const dialogRef = this.dialogBox.open
    ( DialogBox_Component, {panelClass:'Dialogbox-Class'
    ,data:{Message:'Do you want to delete ?',Type:"true",Heading:'Confirm'}});
    dialogRef.afterClosed().subscribe(result =>
    {
    if(result=='Yes')
    {
        this.issLoading=true;
    this.Branch_Service_.Delete_Branch(Branch_.Branch_Id).subscribe(Delete_status => {
  //log(Delete_status)
    if(Delete_status[0].status==true){
    this.Branch_Data.splice(this.EditIndex, 1);
     const dialogRef = this.dialogBox.open    ( DialogBox_Component, {panelClass:'Dialogbox-Class'    ,data:{Message:'Deleted',Type:"false"}});
    this.Entry_View = false
    }
    else
    {
    this.Branch_Data.splice(index, 1);
    const dialogRef = this.dialogBox.open
    ( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Deleted',Type:"false"}});
    }
    this.issLoading=false;
    },
    Rows => {   this.issLoading=false;
   const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}}); });

    }
    });
    }
Save_Branch()
    {
        
        var Department=false;
        for (var j = 0; j < this.Department_Data.length; j++)
        {
            if(this.Department_Data[j].Check_Box== true)
            Department=true
        }
        if (Department==false)
        {
       const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Select Atleast One Department', Type: "3" } });
       }
        else if (this.Branch_.Branch_Name == undefined || this.Branch_.Branch_Name == null || this.Branch_.Branch_Name == "") 
        {
        const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Enter The Branch name', Type: "3" } });
        }
         else 
    {
        
        this.Branch_.Company=0;
    this.Branch_.Department_Data = [];
    for(var i=0;i<this.Department_Data.length;i++)
    {
    if (this.Department_Data[i].Check_Box==true)
    {
    this.Branch_.Department_Data.push(Object.assign({}, this.Department_Data[i]));
    }
    }
    document.getElementById("Save_Button").hidden=true;
    this.issLoading=true;
    this.Branch_Service_.Save_Branch(this.Branch_).subscribe(Save_status => {
        
    if (Number(Save_status[0].Branch_Id_) > 0) 
    {
    const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Saved',Type:"false"}});
    document.getElementById("Save_Button").hidden=false;
    this.Clr_Branch();
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
Edit_Branch(Branch_e:Branch,index)
    {
    this.Entry_View =true;
    this.Branch_=Branch_e;
    this.Branch_ = Object.assign({}, Branch_e);
    this.Get_Branch_Department_Edit(this.Branch_.Branch_Id);
}
}

