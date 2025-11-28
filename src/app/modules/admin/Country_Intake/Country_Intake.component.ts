import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Country_Service } from '../../../services/Country.service';
import { DialogBox_Component } from '../DialogBox/DialogBox.component';
import { Country } from '../../../models/Country';
import {MatDialog} from '@angular/material';import { ROUTES,Get_Page_Permission } from '../../../components/sidebar/sidebar.component';
import { Country_Intake } from 'app/models/Country_Intake';
import { University } from 'app/models/University';
import { Intake } from 'app/models/Intake';
import { Intake_Year } from 'app/models/Intake_Year';
import { Internship_Service } from 'app/services/Internship.service';
import { Country_Intake_Status } from 'app/models/Country_Intake_Status';
import { Course_Service } from 'app/services/Course.service';
@Component({
selector: 'app-Country_Intake',
templateUrl: './Country_Intake.component.html',
styleUrls: ['./Country_Intake.component.css']
})
export class Country_IntakeComponent implements OnInit {
Country_Intake_Data:Country_Intake[]
Country_Intake_:Country_Intake= new Country_Intake();
Country_Name_Search:string;
Entry_View:boolean=true;
EditIndex: number;
Total_Entries: number;
color = 'primary';
mode = 'indeterminate';
value = 50;
issLoading: boolean;
Permissions: any;
Country_Edit:boolean;
Country_Save:boolean;
Country_Delete:boolean;
myInnerHeight: number;


Country_Data: Country[];
Country_Temp: Country = new Country();
 Country_: Country = new Country();

 Intake_: Intake = new Intake();
 Intake_Temp: Intake = new Intake();
 Intake_Data: Intake[]

 Intake_Year_: Intake_Year = new Intake_Year();
Intake_Year_Temp: Intake_Year = new Intake_Year();
Intake_Year_Data: Intake_Year[];

Country_Intake_Status_: Country_Intake_Status = new Country_Intake_Status();
Country_Intake_Status_Temp: Country_Intake_Status = new Country_Intake_Status();
Country_Intake_Status_Data: Country_Intake_Status[];

Search_Country_: Country = new Country();
Search_Intake_: Intake = new Intake();
Search_Intake_Year_: Intake_Year = new Intake_Year();
Search_Country_Intake_Status_: Country_Intake_Status = new Country_Intake_Status();

Select_Status:boolean=false;
   Select_Selection:boolean=false;
   IntakeSelection:boolean;
   IntakeStatus:boolean;
   Item_Export:boolean;

constructor(public Country_Service_:Country_Service,public Course_Service_:Course_Service ,public Internship_Service_:Internship_Service, private route: ActivatedRoute, private router: Router,public dialogBox: MatDialog) { }
ngOnInit() 
{
     
    this.issLoading=true;
this.Permissions = Get_Page_Permission(162);
if(this.Permissions==undefined || this.Permissions==null)
{
localStorage.removeItem('token');
this.router.navigateByUrl('Home_Page');
}
else
{
this.Country_Edit=this.Permissions.Edit;
this.Country_Save=this.Permissions.Save;
this.Country_Delete=this.Permissions.Delete;
this.Page_Load()
}
}
Page_Load()
{
this.myInnerHeight = (window.innerHeight);
this.myInnerHeight = this.myInnerHeight - 270;
this.Get_Intakes_InCourse() ;
this.Clr_Country();
this.Search_Country();
this.Load_Dropdowns() ;

this.Entry_View=false;
}
Create_New()
{
this.Entry_View = true;
this.Clr_Country();
for(var i=0;i<this.Intake_Data.length;i++)
        {
        
                this.Intake_Data[i].Intake_Selection=false;
                this.Intake_Data[i].Intake_Status=false;
        }
}
Close_Click()
{
this.Entry_View = false;
for(var i=0;i<this.Intake_Data.length;i++)
        {
        
                this.Intake_Data[i].Intake_Selection=false;
                this.Intake_Data[i].Intake_Status=false;
        }
}
trackByFn(index, item) 
{
return index;
}

 Clr_Country()
 {
this.Country_Intake_.Country_Intake_Id =0; 
this.Country_Intake_.Country_Id =0; 
this.Country_Intake_.Intake_Id =0; 
this.Country_Intake_.Year_Id =0; 
this.Country_Intake_.Status_Id =0; 
this.Country_Intake_.Status_Name ="";

if(this.Country_Data!=null && this.Country_Data != undefined)
    this.Country_=this.Country_Data[0];

// if(this.Intake_Data!=null && this.Intake_Data != undefined)
//     this.Intake_=this.Intake_Data[0];

if(this.Intake_Year_Data!=null && this.Intake_Year_Data != undefined)
    this.Intake_Year_=this.Intake_Year_Data[0];

// if(this.Country_Intake_Status_Data!=null && this.Country_Intake_Status_Data != undefined)
//     this.Country_Intake_Status_=this.Country_Intake_Status_Data[0];

// for(var i=0;i<this.Intake_Data.length;i++)
//     {
    
//             this.Intake_Data[i].Intake_Selection=false;
//             this.Intake_Data[i].Intake_Status=false;
//     }

}
Search_Country()
{
    var Country_Id_=0,Intake_Id_=0,Year_Id_=0,Status_Id_=0;

    debugger
    if(this.Search_Country_ != null&&this.Search_Country_ != undefined&&this.Search_Country_.Country_Id != null&&
    this.Search_Country_.Country_Id != undefined&& this.Search_Country_.Country_Id != 0)
    {
    Country_Id_=this.Search_Country_.Country_Id
    }
    else
    {
        Country_Id_=0
        }

    if(this.Search_Intake_ != null&&this.Search_Intake_ != undefined&&this.Search_Intake_.Intake_Id != null&&
    this.Search_Intake_.Intake_Id != undefined&& this.Search_Intake_.Intake_Id != 0)
    {
        Intake_Id_=this.Search_Intake_.Intake_Id
    }
    else
    {
        Intake_Id_=0
        }

    if(this.Search_Intake_Year_ != null&&this.Search_Intake_Year_ != undefined&&this.Search_Intake_Year_.Intake_Year_Id != null&&
    this.Search_Intake_Year_.Intake_Year_Id != undefined&& this.Search_Intake_Year_.Intake_Year_Id != 0)
    {
        Year_Id_=this.Search_Intake_Year_.Intake_Year_Id
    }
    else
    {
        Year_Id_=0
        }

    if(this.Search_Country_Intake_Status_ != null&&this.Search_Country_Intake_Status_ != undefined&&this.Search_Country_Intake_Status_.Country_Intake_Status_Id != null&&
    this.Search_Country_Intake_Status_.Country_Intake_Status_Id != undefined&& this.Search_Country_Intake_Status_.Country_Intake_Status_Id != 0)
    {
        Status_Id_=this.Search_Country_Intake_Status_.Country_Intake_Status_Id
    }
    else
    {
        Status_Id_=0
        }
this.issLoading=true;
this.Country_Service_.Search_Country_Intake(Country_Id_,Intake_Id_,Year_Id_,Status_Id_).subscribe(Rows => {
     debugger
 this.Country_Intake_Data=Rows[0];
this.Total_Entries=this.Country_Intake_Data.length;
if(this.Country_Intake_Data.length==0)
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


Delete_Country(Country_Intake_Id,index)
{
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Do you want to delete ?',Type:true,Heading:'Confirm'}});

dialogRef.afterClosed().subscribe(result =>
{
if(result=='Yes')
{
// this.issLoading=true;
// this.Country_Service_.Delete_Country(Country_Id).subscribe(Delete_status => {
// if(Delete_status[0][0].Country_Id_>0){

// this.Country_Data.splice(this.EditIndex, 1);
// const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Deleted',Type: "false"}});
// this.Search_Country();
// }
// else
// {
// this.issLoading=false;
// const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
// }
// this.issLoading=false;
//  },
//  Rows => { 
// this.issLoading=false;
// const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
//  });
// }
debugger
this.issLoading=true;
this.Country_Service_.Delete_Country_Intake(Country_Intake_Id).subscribe(Delete_status => {
    debugger
    if(Number(Delete_status[0][0].Country_Intake_Id_)>0){
        
        this.Country_Intake_Data.splice(this.EditIndex, 1);
         const dialogRef = this.dialogBox.open    ( DialogBox_Component, {panelClass:'Dialogbox-Class'    ,data:{Message:'Deleted',Type:"false"}});
        this.Entry_View = false
        this.Search_Country()
        }
        else if(Number(Delete_status[0][0].Country_Intake_Id_)== -2)
        {
            const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Already in Use, Cannot be Deleted!',Type:"2"}});
        }else{
            const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
        }
        this.issLoading=false;
        },
        Rows => {   this.issLoading=false;
       const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}}); });

}









 });
}
Save_Country_Intake()
{

    if (this.Country_ == undefined || this.Country_ == null || this.Country_.Country_Id == undefined || this.Country_.Country_Id==0) {
        const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Select Country', Type: "3" } });
       return;
    }

    // if (this.Intake_ == undefined || this.Intake_ == null || this.Intake_.Intake_Id == undefined || this.Intake_.Intake_Id==0) {
    //     const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Select Intake', Type: "3" } });
    //    return;
    // }

    if (this.Intake_Year_ == undefined || this.Intake_Year_ == null || this.Intake_Year_.Intake_Year_Id == undefined || this.Intake_Year_.Intake_Year_Id==0) {
        const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Select Intake Year', Type: "3" } });
       return;
    }

    // if (this.Country_Intake_Status_ == undefined || this.Country_Intake_Status_ == null || this.Country_Intake_Status_.Country_Intake_Status_Id == undefined || this.Country_Intake_Status_.Country_Intake_Status_Id==0) {
    //     const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Select Status', Type: "3" } });
    //    return;
    // }
    
this.Country_Intake_.Country_Id=this.Country_.Country_Id;
// this.Country_Intake_.Intake_Id=this.Intake_.Intake_Id;
this.Country_Intake_.Year_Id=this.Intake_Year_.Intake_Year_Id;
this.Country_Intake_.Intake_Year_Name=this.Intake_Year_.Intake_Year_Name;
// this.Country_Intake_.Status_Id=this.Country_Intake_Status_.Country_Intake_Status_Id;
// this.Country_Intake_.Status_Name=this.Country_Intake_Status_.Country_Intake_Status_Name;
debugger
for (var i = 0; i < this.Intake_Data.length; i++) {
        if (this.Intake_Data[i].Intake_Status== true )
            {
                this.Intake_Data[i].Status_Id=1
                this.Intake_Data[i].Status_Name="Open"
            }
            else{
                 this.Intake_Data[i].Status_Id=2
                this.Intake_Data[i].Status_Name="Close"
            }
        // this.Intake_Data.push(this.Intake_Data[i]);
        }


this.Country_Intake_.Intake_Data=this.Intake_Data;


this.issLoading=true;
debugger
this.Country_Service_.Save_Country_Intake(this.Country_Intake_).subscribe(Save_status => {
    debugger
Save_status=Save_status[0];
if(Number(Save_status[0].Country_Intake_Id_)>0)
{
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Saved',Type:"false"}});
this.Search_Country();
this.Clr_Country();

for(var i=0;i<this.Intake_Data.length;i++)
    {
    
            this.Intake_Data[i].Intake_Selection=false;
            this.Intake_Data[i].Intake_Status=false;
    }
    
}
else if(Number(Save_status[0].Country_Intake_Id_) == -1)
    {
    const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'This Country already exist in this year',Type:"3"}});
    
    }

else  {
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
}
this.issLoading=false;
 },
 Rows => { 
this.issLoading=false;
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:Rows.error.error,Type:"2"}});
 });
}
// Edit_Country(Country_Intake_e:Country_Intake,index)
// {
// this.Entry_View=true;
// this.Country_Intake_=Country_Intake_e;
// this.Country_Intake_=Object.assign({},Country_Intake_e);



// for (var i = 0; i < this.Country_Data.length; i++)
// {
// if (this.Country_Intake_.Country_Id == this.Country_Data[i].Country_Id)
// this.Country_=this.Country_Data[i];
// } 

// // for (var i = 0; i < this.Intake_Data.length; i++)
// // {
// // if (this.Country_Intake_.Intake_Id == this.Intake_Data[i].Intake_Id)
// // this.Intake_=this.Intake_Data[i];
// // } 

// for (var i = 0; i < this.Intake_Year_Data.length; i++)
// {
// if (this.Country_Intake_.Year_Id == this.Intake_Year_Data[i].Intake_Year_Id)
// this.Intake_Year_=this.Intake_Year_Data[i];
// } 

// // for (var i = 0; i < this.Country_Intake_Status_Data.length; i++)
// // {
// // if (this.Country_Intake_.Status_Id == this.Country_Intake_Status_Data[i].Country_Intake_Status_Id)
// // this.Country_Intake_Status_=this.Country_Intake_Status_Data[i];
// // } 




// }





Edit_Country(Country_Intake_e:Country_Intake,index)
{
     debugger
    
    this.Entry_View=true;
    this.Country_Intake_=Country_Intake_e;


//  this.Country_Intake_=Object.assign({},Country_Intake_e);

  



this.issLoading = true;

this.Country_Service_.Get_Country_Intake(Country_Intake_e.Country_Intake_Id).subscribe(Rows => 
    {
        debugger
        
        this.Country_Intake_= Object.assign({},Rows[0][0]);
        this.Intake_Data=Rows[1]
        for (var i = 0; i < this.Intake_Data.length; i++) {
            if (this.Intake_Data[i].Status_Selection.toString()=="1")
                this.Intake_Data[i].Intake_Status=true;
            else
                this.Intake_Data[i].Intake_Status=false;
            
            if (this.Intake_Data[i].Intake_Selection.toString()=="1")
                this.Intake_Data[i].Intake_Selection=true;
            else
                this.Intake_Data[i].Intake_Selection=false;
        }



        for (var i = 0; i < this.Country_Data.length; i++)
            {
            if (this.Country_Intake_.Country_Id == this.Country_Data[i].Country_Id)
            this.Country_=this.Country_Data[i];
            } 
debugger
            for (var i = 0; i < this.Intake_Year_Data.length; i++)
                {
                if (this.Country_Intake_.Year_Id == this.Intake_Year_Data[i].Intake_Year_Id)
                this.Intake_Year_=this.Intake_Year_Data[i];
                }     
            

        this.issLoading = false;
    },
     Rows => {
            this.issLoading = false;
       const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
    });
     
   
}





Load_Dropdowns() 
{
    
        
  this. Internship_Service_.Get_Course_Load_Data().subscribe(Rows =>
        
{
 
  
    
    debugger

    this.Country_Data = Rows[9];
    this.Country_Temp.Country_Id = 0;
    this.Country_Temp.Country_Name = "Select";
    this.Country_Data.unshift(this.Country_Temp);
    this.Country_ = this.Country_Data[0];


    // this.Intake_Data = Rows[10];
    // this.Intake_Temp.Intake_Id = 0;
    // this.Intake_Temp.Intake_Name = "Select";
    // this.Intake_Data.unshift(this.Intake_Temp);
    // this.Intake_ = this.Intake_Data[0];



    this.Intake_Year_Data = Rows[7].slice();
    this.Intake_Year_Temp.Intake_Year_Id = 0;
    this.Intake_Year_Temp.Intake_Year_Name = "Select";
    this.Intake_Year_Data.unshift(Object.assign({}, this.Intake_Year_Temp));
    this.Intake_Year_ = this.Intake_Year_Data[0];

    this.Country_Intake_Status_Data = Rows[8].slice();
    this.Country_Intake_Status_Temp.Country_Intake_Status_Id = 0;
    this.Country_Intake_Status_Temp.Country_Intake_Status_Name = "Select";
    this.Country_Intake_Status_Data.unshift(Object.assign({}, this.Country_Intake_Status_Temp));
    this.Country_Intake_Status_ = this.Country_Intake_Status_Data[0];

   
  

  },
Rows => { 
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}}); });
}



    
Get_Intakes_InCourse() 
        {

            this.issLoading=true;
       this.Course_Service_.Get_Intakes_InCourse().subscribe(Rows => {
         

        this.Intake_Data=Rows[0];
    for(var j=0;j<this.Intake_Data.length;j++)
    {
    if (this.Intake_Data[j].Intake_Selection.toString()=='1')
    this.Intake_Data[j].Intake_Selection= true;  
    else
    this.Intake_Data[j].Intake_Selection= false;
    if (this.Intake_Data[j].Intake_Status.toString()=='1')
    this.Intake_Data[j].Intake_Status= true;
    else  
    this.Intake_Data[j].Intake_Status= false; 
    }
   
                   
        if (Rows != null) {
       this.Intake_Data = Rows[0];
        }
        this.issLoading=false;
        },
        Rows => 
        {
            this.issLoading=false;
       const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
        });
        }


        

Selection_Click()
{
     


 
 for(var i=0;i<this.Intake_Data.length;i++)
{
    if(this.Select_Selection==false)
        this.Intake_Data[i].Intake_Selection=true;
    else
        this.Intake_Data[i].Intake_Selection=false;
}
}
Status_Click()
{
 
    for(var i=0;i<this.Intake_Data.length;i++)
   {
       if(this.Select_Status==false)
           this.Intake_Data[i].Intake_Status=true;
       else
           this.Intake_Data[i].Intake_Status=false;
   }
   }




}

