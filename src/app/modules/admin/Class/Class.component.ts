import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogBox_Component } from '../DialogBox/DialogBox.component';
import { Class } from '../../../models/Class';

import { Class_Service } from '../../../services/Class.Service';
import { Student_Service } from '../../../services/Student.Service';
import { MatDialog } from '@angular/material'; import { ROUTES, Get_Page_Permission } from '../../../components/sidebar/sidebar.component';

@Component({
    selector: 'app-Class',
    templateUrl: './Class.component.html',
    styleUrls: ['./Class.component.css']
})
export class ClassComponent implements OnInit {
    Class_Data:Class[]
    Class_:Class= new Class();
    
    Class_Name_Search:string;
    
    
    Entry_View:boolean=true;
    EditIndex: number;
    Total_Entries: number;
    color = 'primary';
    mode = 'indeterminate';
    value = 50;
    issLoading: boolean;
    Permissions: any;
    Class_Edit:boolean;
    Class_Save:boolean;
    Class_Delete:boolean;
    myInnerHeight: number;
    myTotalHeight:number;
    
    Login_User:string="0";
    
    
    constructor(public Class_Service_:Class_Service,public Student_Service_:Student_Service, private route: ActivatedRoute, private router: Router,public dialogBox: MatDialog) { }
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
    // this.Class_Edit=this.Permissions.Edit;
    // this.Class_Save=this.Permissions.Save;
    // this.Class_Delete=this.Permissions.Delete;
    this.Page_Load()
    }
    }
    Page_Load()
    {
        
        this.Get_Menu_Status(29,this.Login_User); 
    
    this.myInnerHeight = (window.innerHeight);
    this.myInnerHeight = this.myInnerHeight - 230;
    this.Clr_Class();
    this.Search_Class();
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
                    this.Class_Edit=this.Permissions.Edit;
                    this.Class_Save=this.Permissions.Save;
                    this.Class_Delete=this.Permissions.Delete;
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
    this.Clr_Class();
    }
    Close_Click()
    {
    this.Entry_View = false;
    
    }
    trackByFn(index, item) 
    {
    return index;
    }
    
     Clr_Class()
     {
    this.Class_.Class_Id=0;
    this.Class_.Class_Name="";
    this.Class_.Class_Order=0;
    
    
    }
    Search_Class()
    {
        
    this.issLoading=true;
    
    this.Class_Service_.Search_Class(this.Class_Name_Search).subscribe(Rows => {
    
     this.Class_Data=Rows[0];
    this.Total_Entries=this.Class_Data.length;
    if(this.Class_Data.length==0)
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

    Delete_Class(Class_Id,index)
    {
 
    const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Do you want to delete ?',Type:true,Heading:'Confirm'}});
    this.Search_Class();
    dialogRef.afterClosed().subscribe(result =>
    {
    if(result=='Yes')
    {
    
    this.issLoading=true;
 
    this.Class_Service_.Delete_Class(Class_Id).subscribe(DeleteStatus=> {
        
        
    if(DeleteStatus[0][0].Class_Id_>0){
    this.Class_Data.splice(this.EditIndex, 1);
    const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Deleted',Type: "false"}});
    this.Search_Class();
    }
    else if(Number(DeleteStatus[0][0].Class_Id_)== -2)
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
    
    
    
    
    
    
        Save_Class()
        {
           
            if(this.Class_.Class_Name== undefined || this.Class_.Class_Name == null || this.Class_.Class_Name == undefined || this.Class_.Class_Name=='') {
                    const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Enter Class Name', Type: "3" } });
              return;
                }
                
           if (this.Class_.Class_Order == undefined || this.Class_.Class_Order == null || this.Class_.Class_Order == 0) {
           
            const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Enter Class Order', Type: "3" } });
            return;
            }
          
            
        this.issLoading=true;
  
        this.Class_Service_.Save_Class(this.Class_).subscribe(Save_status => {
           
        //Save_status=Save_status[0];
        if(Number(Save_status[0][0].Class_Id_)>0)
        {
        const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Saved',Type:"false"}});
        this.Search_Class();
        this.Clr_Class();
        }
        else{
        const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Enter Class Name',Type:"2"}});
        }
        this.issLoading=false;
        },
     Rows => { 
    this.issLoading=false;
    const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:Rows.error,Type:"2"}});
     });
     
    }
    
    
    
    
    
    
    
    Edit_Class(Class_e:Class,index)
    {
  
    this.Entry_View=true;
    this.Class_=Class_e;
    this.Class_=Object.assign({},Class_e);
    }
    }
    
    
    


