import { Component, OnInit, Input, Injectable } from '@angular/core';
import { Department_Service } from '../../../services/Department.Service';
import { DialogBox_Component } from '../DialogBox/DialogBox.component';
import { Department } from '../../../models/Department';
import { Colors } from '../../../models/Colors';
import { Department_Status } from '../../../models/Department_Status';
import { ActivatedRoute, Router } from '@angular/router';
// import { MatColorPickerModule } from 'mat-color-picker';

import { ROUTES,Get_Page_Permission } from '../../../components/sidebar/sidebar.component'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material';
@Component({
selector: 'app-Department',
templateUrl: './Department.component.html',
styleUrls: ['./Department.component.css']
})
export class DepartmentComponent implements OnInit 
{
  Department_management_view:Boolean = false
constructor(public Department_Service_: Department_Service, private route: ActivatedRoute,
  private router: Router, public dialogBox: MatDialog) { }
Department_: Department = new Department();
Department_Data: Department[];
Total_Entries:Number;
Department_Status_: Department_Status = new Department_Status();
Department_Status_Data     : Department_Status[];
Department_Name_Search: string;
Entry_View : boolean =true;
EditIndex: number; 
color = 'primary';
 mode = 'indeterminate'; 
 value = 50;
myInnerHeight: number;
myTotalHeight:number;
  issLoading: boolean;

  Round_Robin_Check:Boolean = false
  Agent_View_Check:Boolean = false

Edit_Id : number;
Menu_Id:number=14;
Department_Edit:boolean;
Department_Save:boolean;
Department_Delete:boolean;
array:any;
Login_User:string="0";
Permissions: any;
Transfer_Method_:number=0;
Color_Type_:string="";

Department_Status_Dropdown_: Department_Status = new Department_Status();
Department_Status_Dropdown_Temp: Department_Status = new Department_Status();
Department_Status_Dropdown_Data: Department_Status[];

Color_Status_: Colors = new Colors();
Color_Status_Temp: Colors = new Colors();
Color_Status_Data: Colors[];
 
selectedColor: string = '#007bff'

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
  // this.Department_Edit= this.array.Edit;
  // this.Department_Save= this.array.Save;
  // this.Department_Delete= this.array.Delete;

this.Page_Load()
}}
Page_Load()
 {
  this.Get_Menu_Status(14,this.Login_User);

  this.myInnerHeight = (window.innerHeight);
  // this.myInnerHeight = this.myInnerHeight - 250;
this.Clr_Department();
this.Entry_View =false;
this.Load_Color();
this.Search_Department();
this.Search_Department_Status();
this.Load_Status_Dropdown();
this.myInnerHeight = (window.innerHeight);
// this.myTotalHeight=this.myInnerHeight - 100;

// this.myTotalHeight=this.myTotalHeight-100;
// this.myInnerHeight = this.myInnerHeight - 230;

this.myInnerHeight = (window.innerHeight);
    this.myTotalHeight=this.myInnerHeight -100;
    this.myTotalHeight=this.myTotalHeight- 80;
    this.myInnerHeight = this.myInnerHeight ;



}



Get_Menu_Status(Menu_id, Login_user_id)
{
    
this.issLoading = false;
this.Department_Service_.Get_Menu_Status(Menu_id,Login_user_id).subscribe(Rows => {            

    
    if (Rows[0][0]==undefined)
    {
      if(Menu_id==14)
        {
        localStorage.removeItem('token');
        this.router.navigateByUrl('Home_Page');
        }
    }  
    else
    if (Rows[0][0].View >0) 
    {
        
        
        if(Menu_id==14)
        {
            
        

            this.Permissions=Rows[0][0];
            if(this.Permissions==undefined || this.Permissions==null)
                {
                    localStorage.removeItem('token');
                    this.router.navigateByUrl('Home_Page');
                }
                this.Department_Edit= this.Permissions.Edit;
                this.Department_Save= this.Permissions.Save;
                this.Department_Delete= this.Permissions.Delete;
        }

    }
},
Rows => {
    this.issLoading = false;
    const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Error Occured', Type: "2" } });
});
}

Load_Color() {
		this.issLoading = true;
		this.Department_Service_.Load_Color().subscribe(
			(Rows) => {
				if (Rows != null) {
					this.Color_Status_Data = Rows[0];
					this.Color_Status_Temp.Colors_Id = 0;
					this.Color_Status_Temp.Colors_Name = "Select";
					this.Color_Status_Data.unshift(this.Color_Status_Temp);

					this.Color_Status_ = this.Color_Status_Data[0];
					this.issLoading = false;
				}
			},
			(Rows) => {
				this.issLoading = false;
			}
		);
	}
Create_New() 
{
this.Clr_Department();
this.Entry_View =true;
}
Close_Click() 
{
this.Entry_View =false;
}
trackByFn(index, item) {
return index;
}

Clr_Department() 
{
this.Department_.Department_Id = 0;
this.Department_.Department_Name = "";
this.Department_.FollowUp = "0";
this.Department_.Status = "";
this.Department_.Department_Order = 0;
this.Department_.Color = "";
this.Department_Status_.Check_Box=false;

this.Department_management_view = false
this.Round_Robin_Check = false
this.Agent_View_Check=false;
if(this.Department_Status_Data!= undefined)
for(var i=0;i<this.Department_Status_Data.length;i++)
{
this.Department_Status_Data[i].Check_Box=false
}
this.Department_.Transfer_Method_Id =0;
this.Transfer_Method_ =0;

// this.Department_.Color_Type_Id=0;
// this.Color_Type_="";

if(this.Department_Status_Dropdown_Data!=null && this.Department_Status_Dropdown_Data != undefined)
this.Department_Status_Dropdown_=this.Department_Status_Dropdown_Data[0];
this.Department_.Color_Type_Name="#f3f5f6"






// if(this.Color_Status_Data!=null && this.Color_Status_Data != undefined)
// this.Color_Status_=this.Color_Status_Data[0];

// this.Department_.Color_Type_Name="";

}



Load_Status_Dropdown1() {
  
  this.issLoading = true;
  this.Department_Service_.Load_Status_Dropdown().subscribe(
    (Rows) => {
      
      if (Rows != null) {
        this.Department_Status_Dropdown_Data = Rows[0];
        this.Department_Status_Dropdown_Temp.Department_Status_Id = 0;
        this.Department_Status_Dropdown_Temp.Department_Status_Name = "Select";
        this.Department_Status_Dropdown_Data.unshift(this.Department_Status_Dropdown_Temp);

        this.Department_Status_Dropdown_ = this.Department_Status_Dropdown_Data[0];
        this.issLoading = false;
      }
    },
    (Rows) => {
      this.issLoading = false;
    }
  );
}

Load_Status_Dropdown() {
  this.issLoading = true;
  this.Department_Service_.Load_Status_Dropdown().subscribe(
    (Rows) => {
      if (Rows != null) {
        this.Department_Status_Dropdown_Data = Rows[0];
        this.Department_Status_Dropdown_Temp.Department_Status_Id = 0;
        this.Department_Status_Dropdown_Temp.Department_Status_Name = "Select";
        this.Department_Status_Dropdown_Data.unshift(this.Department_Status_Dropdown_Temp);

        this.Department_Status_Dropdown_ = this.Department_Status_Dropdown_Data[0];
        this.issLoading = false;
      }
    },
    (Rows) => {
      this.issLoading = false;
    }
  );
}
show_Loader() 
{

}
check_Change(event: any): void {
  debugger
  console.log(event);
  this.Department_management_view = !event;
}
hide_Loader() 
{
}
Search_Department() {
  this.issLoading=true;
this.Department_Service_.Search_Department(this.Department_Name_Search).subscribe(Rows => {
  this.issLoading=false;
this.Department_Data = Rows[0];
// this.Total_Entries=this.Department_Data.length;
if (this.Department_Data.length == 0) {
const dialogRef = this.dialogBox.open
(DialogBox_Component, {
panelClass: 'Dialogbox-Class'
, data: { Message: 'No Details Found', Type: false }
});
}
},
Rows => {
  this.issLoading=false;
 const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
});

}
Search_Department_Status() {
this.Department_Service_.Search_Department_Status('').subscribe(Rows => {
 
this.Department_Status_Data = Rows[0];

if (this.Department_Status_Data.length == 0) {
const dialogRef = this.dialogBox.open
(DialogBox_Component, {
panelClass: 'Dialogbox-Class'
, data: { Message: 'No Details Found', Type: false }
});
}
},
Rows => {
  this.issLoading=false;
});

}
Delete_Department(Department_,index)
{
const dialogRef = this.dialogBox.open
( DialogBox_Component, {panelClass:'Dialogbox-Class'
,data:{Message:'Do you want to delete ?',Type:"true",Heading:'Confirm'}});
dialogRef.afterClosed().subscribe(result =>
{
if(result=='Yes')
{
  this.issLoading=true;
this.Department_Service_.Delete_Department(Department_.Department_Id).subscribe(Delete_status => {
 
if(Number(Delete_status[0][0].Department_Id_)>0){
this.Department_Data.splice(this.EditIndex, 1);
const dialogRef = this.dialogBox.open
( DialogBox_Component, {panelClass:'Dialogbox-Class'
,data:{Message:'Deleted',Type:"false"}});
this.Search_Department();
this.Entry_View = false;
}
else if (Number(Delete_status[0][0].Department_Id_)==-2)
{
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Cannot Delete the Department',Type:"2"}});
}else{
  const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
}
this.issLoading=false;
},
Rows => {
 const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
});
this.issLoading=false;
}
});
}
Save_Department()
{
debugger
   
  this.Department_.Transfer_Method_Id =this.Transfer_Method_;
  // this.Department_.Color_Type_Id=this.Color_Type_;
//   
// this.Department_.Color_Type_Id=this.Color_Status_.Colors_Id;
// this.Department_.Color_Type_Name=this.Color_Status_.Colors_Name;
if(this.Department_management_view == true) Deparmentmanagement_view = true ;

  this.Department_.Department_management_view = Deparmentmanagement_view;

  if(this.Round_Robin_Check == true) 
  {
    this.Department_.Round_Robin_Check=1;
  }
  else
  {
    this.Department_.Round_Robin_Check=0;
  }

  if(this.Agent_View_Check == true) 
    {
      this.Department_.Agent_View_Check=1;
    }
    else
    {
      this.Department_.Agent_View_Check=0;
    }
  
    

   this.Department_.FollowUp;
 
        var Department_Status=false;
        for (var j = 0; j < this.Department_Status_Data.length; j++)
        {
            if(this.Department_Status_Data[j].Check_Box== true)
            Department_Status=true
        }

        var Default_Status=false;
        for (var k = 0; k < this.Department_Status_Data.length; k++)
        {
          if(this.Department_Status_Data[k].Check_Box== true)
            if(this.Department_Status_Dropdown_.Department_Status_Id == this.Department_Status_Data[k].Department_Status_Id )
        
            {
        
              Default_Status=true
            }               
            
        }

        if (this.Department_.Department_Name == undefined || this.Department_.Department_Name == null || this.Department_.Department_Name == "") {
          const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Enter The Department Name', Type: "3" } });
          }
          // else if (this.Department_.FollowUp === undefined || this.Department_.FollowUp === null || this.Department_.FollowUp === "") {
          //   const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Select The Followup', Type: "3" } });
          //   }

          else if (this.Department_.Department_Order == undefined || this.Department_.Department_Order == null || this.Department_.Department_Order == 0) {
            const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Enter The Department Order', Type: "3" } });
            }
          
            else if (this.Department_Status_Dropdown_ == undefined || this.Department_Status_Dropdown_ == null ||
               this.Department_Status_Dropdown_.Department_Status_Id == undefined 
               || this.Department_Status_Dropdown_.Department_Status_Id==0) {
                  
              const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: 
              { Message: 'Select Default Status', Type: "3" } });
          
              return;
          }
          
          // else if (this.Transfer_Method_ == undefined || this.Transfer_Method_ == null ||
          //   this.Department_.Transfer_Method_Id == undefined 
          //   || this.Department_.Transfer_Method_Id ==0) {
               
          //  const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: 
          //  { Message: 'Select Transfer Method', Type: "3" } });
          
          //  return;
          // }
          
          
        else if (Department_Status==false)
        {
       const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Select Atleast One Department Status', Type: "3" } });
       }



       else if (Default_Status==false)
       {
          const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Select Corresponding Default Status from Department Status', Type: "3" } });
          return;
       }
       
 

else 
{
;
var Deparmentmanagement_view= false;
this.Department_.Department_Status_Data = [];
for(var i=0;i<this.Department_Status_Data.length;i++)
{
if (this.Department_Status_Data[i].Check_Box==true)
{
this.Department_.Department_Status_Data.push(Object.assign({}, this.Department_Status_Data[i]));
}
}
document.getElementById("Save_Button").hidden=true;
this.issLoading=true;
this.Department_.Department_Status_Id=this.Department_Status_Dropdown_.Department_Status_Id;
debugger
this.Department_Service_.Save_Department(this.Department_).subscribe(Save_status => {
 debugger
  
  
if (Number(Save_status[0].Department_Id_) > 0) 
{
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Saved',Type:"false"}});
document.getElementById("Save_Button").hidden=false;
this.Search_Department();
this.Clr_Department();
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
Get_Status_Selection_Edit(Department_Id) {
  this.issLoading=true;
this.Department_Service_.Get_Status_Selection_Edit(Department_Id).subscribe(Rows => {
this.Department_Status_Data = Rows[0];
for(var i=0;i<this.Department_Status_Data.length;i++)
{
if (this.Department_Status_Data[i].Check_Box.toString()=='1')
{
this.Department_Status_Data[i].Check_Box=true
}
else 
{
this.Department_Status_Data[i].Check_Box=false
}
}
if (this.Department_Status_Data.length == 0) {
const dialogRef = this.dialogBox.open
(DialogBox_Component, {
panelClass: 'Dialogbox-Class'
, data: { Message: 'No Details Found', Type: false }
});
this.issLoading=false;
}
},
Rows => {
 const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
});
this.issLoading=false;
}
Edit_Department(Department_e:Department,index)
{

  
   debugger
this.Entry_View =true;
this.Department_=Department_e;
this.Department_ = Object.assign({}, Department_e);

if(this.Department_.Transfer_Method_Id==1){this.Transfer_Method_ =1}
if(this.Department_.Transfer_Method_Id==2){this.Transfer_Method_ =2}
if(this.Department_.Transfer_Method_Id==0){this.Transfer_Method_ =0}
debugger
if(this.Department_.Deparment_management_view1==1)
  {
      this.Department_management_view=true }
      else
    {  this.Department_management_view=false 
  }

  if(this.Department_.Round_Robin_Check==1)
    {
        this.Round_Robin_Check=true }
        else
      {  this.Round_Robin_Check=false 
    }

    if(this.Department_.Agent_View_Check==1)
      {
          this.Agent_View_Check=true }
          else
        {  this.Agent_View_Check=false 
      }

    

// for (var i = 0; i < this.Color_Status_Data.length; i++) {
//   if (this.Department_.Color_Type_Id == this.Color_Status_Data[i].Colors_Id)
//     this.Color_Status_ = this.Color_Status_Data[i];
// }

// 
// for (var i = 0; i < this.Color_Status_Data.length; i++) {
//   if (this.Department_.Color_Type_Name == this.Color_Status_Data[i].Colors_Name)
//     this.Color_Status_ = this.Color_Status_Data[i];
// }



// if(this.Department_.Color_Type_Name="Select"){this.Color_Status_.Colors_Name ="Select"}
// if(this.Department_.Color_Type_Name="red"){this.Color_Status_.Colors_Name ="red"}
// if(this.Department_.Color_Type_Name="green"){this.Color_Status_.Colors_Name ="green"}
// if(this.Department_.Color_Type_Name="blue"){this.Color_Status_.Colors_Name ="blue"}


// if(this.Department_.Color_Type_Name=="red"){this.Color_Status_.Colors_Name ="red"}
// if(this.Department_.Color_Type_Name=="green"){this.Color_Status_.Colors_Name ="green"}
// if(this.Department_.Color_Type_Name=="blue"){this.Color_Status_.Colors_Name ="blue"}

// if (this.Department_.Department_management_view==true)
//   this.Department_management_view= true;  
// else this.Department_management_view= false;
this.Get_Status_Selection_Edit(this.Department_.Department_Id);

for (var i = 0; i < this.Department_Status_Dropdown_Data.length; i++) {
  if (this.Department_.Department_Status_Id == this.Department_Status_Dropdown_Data[i].Department_Status_Id)
  this.Department_Status_Dropdown_=this.Department_Status_Dropdown_Data[i];
}


}






}


