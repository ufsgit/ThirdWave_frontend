import { Component, OnInit,Input,Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of as observableOf, merge } from 'rxjs';
import { Student_Service } from '../../../services/Student.service';
import { DialogBox_Component } from '../DialogBox/DialogBox.component';
import { Student } from '../../../models/Student';
import { Branch } from '../../../models/Branch';
import { User_Details } from '../../../models/User_Details';
import { Department } from '../../../models/Department';
import { Department_Status } from '../../../models/Department_Status';
import { Gender } from '../../../models/Gender';
import { ROUTES,Get_Page_Permission } from '../../../components/sidebar/sidebar.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA,MatDialogConfig} from '@angular/material';
import {FormControl} from '@angular/forms';
import {MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import * as _moment from 'moment';
import {default as _rollupMoment} from 'moment';


const moment = _rollupMoment || _moment;
export const MY_FORMATS = {
parse: {
dateInput: 'DD/MM/YYYY',
},
display: {
dateInput: 'DD/MM/YYYY',monthYearLabel: 'MMM YYYY',dateA11yLabel: 'DD/MM/YYYY',monthYearA11yLabel: 'MMMM YYYY',
},
};

@Component({
selector: 'app-Settings',
templateUrl: './Settings.component.html',
styleUrls: ['./Settings.component.css'],
providers:[
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
    ],
    })

export class SettingsComponent implements OnInit {

    Settings_Div:boolean=false;

    array: any;
    color = 'primary';
    mode = 'indeterminate';
    value = 50;
    myInnerHeight: number;
    issLoading: boolean;

   
    Login_User: string = "0";
    Menu_Id: number = 55;


    WorkSummary_Div:boolean=false;
     User_Details_Id:number

    Export_Permission:any
    Export_View:boolean=false
  Permissions: any;



 
constructor(public Student_Service_:Student_Service, private route: ActivatedRoute, private router: Router,public dialogBox: MatDialog) 
{   }
ngOnInit() 
{
  
    this.Login_User = localStorage.getItem("Login_User");
    // this.array = Get_Page_Permission(this.Menu_Id);
    // if (this.array == undefined || this.array == null)
    // {
    //     localStorage.removeItem('token');
    //     this.router.navigateByUrl('/auth/login');
    // }

    // else 
    {
        this.Page_Load()
        if (this.Export_Permission != undefined && this.Export_Permission != null)
            this.Export_View=this.Export_Permission.View
    }
   
}
Page_Load()
{
    this.Get_Menu_Status(55,this.Login_User); 

    
    this.myInnerHeight = (window.innerHeight);
    this.myInnerHeight = this.myInnerHeight - 250;

    
    this.Settings_Div=true;
   


}

Get_Menu_Status(Menu_id, Login_user_id)
{
    
this.issLoading = false;
this.Student_Service_.Get_Menu_Status(Menu_id,Login_user_id).subscribe(Rows => {            

    
    if (Rows[0][0]==undefined)
    {
        if(Menu_id==55)
        {
        localStorage.removeItem('token');
        this.router.navigateByUrl('Home_Page');
        }
    }  
    else
    if (Rows[0][0].View >0) 
    {
        
        
        if(Menu_id==55)
        {
            
         

            this.Permissions=Rows[0][0];
            if(this.Permissions==undefined || this.Permissions==null)
                {
                    localStorage.removeItem('token');
                    this.router.navigateByUrl('Home_Page');
                }
               
                
        }

    }
},
Rows => {
    this.issLoading = false;
    const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Error Occured', Type: "2" } });
});
}

// Delete_Data()
// {
//     
// const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Do you want to delete ?',Type:"true",Heading:'Confirm'}});
// dialogRef.afterClosed().subscribe(result =>
// {
     
// if(result=='Yes')
// {
// this.issLoading=true;
//  
// this.Student_Service_.Delete_Data().subscribe(Delete_status => {
     
//     
//     Delete_status=Delete_status[0];
//     
//          Delete_status=Delete_status[0].DeleteStatus_.data[0];
//          
//          if(Delete_status==1){
//             
//     const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Deleted',Type:"false"}});
    
// }
// else              
// {
//     
//     const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
// }
// this.issLoading=false;
//  },
//  Rows => { 
//      
// const dialogRef = this.dialogBox.open
// ( DialogBox_Component, {panelClass:'Dialogbox-Class'
// ,data:{Message:'Error',Type:"2"}});
//  });
// this.issLoading=false;
// }
//  });
// }

Delete_Data()
{
    
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Do you want to erase all data from database ?',Type:"true",Heading:'Confirm'}});
dialogRef.afterClosed().subscribe(result =>
{
if(result=='Yes')
{
this.issLoading=false;

this.Student_Service_.Delete_Data().subscribe(Delete_status => {

this.issLoading=false;
    const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Deleted',Type:"false"}});
this.issLoading=false;
 },
 Rows => { 
    this.issLoading=false;
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
 });

}
 });
}



}