import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course_Import_Service } from '../../../services/Course_Import.Service';
import { Course_Import } from '../../../models/Course_Import';
import { Import_Master } from '../../../models/Import_Master';
import { Course } from '../../../models/Course';
import { ROUTES,Get_Page_Permission } from '../../../components/sidebar/sidebar.component';
import {MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import * as _moment from 'moment';
import {default as _rollupMoment} from 'moment';
import * as XLSX from 'ts-xlsx';
const moment = _rollupMoment || _moment;
export const MY_FORMATS = {
parse: {
     dateInput: 'DD/MM/YYYY',
    },
  display: {dateInput: 'DD/MM/YYYY', monthYearLabel: 'MMM YYYY',  dateA11yLabel: 'DD/MM/YYYY',monthYearA11yLabel: 'MMMM YYYY',},
};
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA,MatDialogConfig} from '@angular/material';import { DialogBox_Component } from '../DialogBox/DialogBox.component';
import { Internship_Service } from 'app/services/Internship.Service';
import { Process } from 'app/models/process';

@Component({
selector: 'app-Course_Import',
templateUrl: './Course_Import.component.html',
styleUrls: ['./Course_Import.component.css'],
providers: [
{provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
{provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
],
})
export class Course_ImportComponent implements OnInit {

Course_Import:Course_Import=new Course_Import()
Course_Import_Name_Search="";
Entry_View:boolean=true;
myInnerHeight: number;
myHeight: number;
EditIndex: number;
 Total_Entries: number=0;
Data:string;
color = 'primary';
mode = 'indeterminate';
value = 50;
issLoading: boolean;
Permissions: any;
Course_Import_Edit:boolean;
Course_Import_Save:boolean;
Course_Import_Delete:boolean;
ImageFile:any
year:any;
month:any;
day:any;
date:any;
isLoading=false; 
Login_Id:string;
Search_FromDate: Date = new Date();
Search_ToDate: Date = new Date();
Is_Expiry_Show:boolean=true;
Look_In_Date:boolean=true;
Error_View:boolean = false;
Error_Length:number =0;
List_View:boolean=false;
Import_View:boolean = false;
Employee_Edit:boolean=false;
Employee_Name:string;
Employee_Id:number;
arrayBuffer:any;
file:File;

Import_Length:number=0;



Process_: Process = new Process();
Process_Data: Process[];
Process_Temp: Process = new Process();



Display_File_Name_:string
Key_Value_Name:string="";
Store_Id:number;
Store_Name:string;
Store_Edit:boolean=false;
User_Type:number;
Course_Import_Details_Data:Course[]
Error_Data:Course[]
Error_Details:Course =new Course();
Course_Import_Index:number;
Course_Import_: Course_Import=new Course_Import();
    Course_Import_Data: any;
    Import_Master_: Import_Master;
    Search_Course_Import_Details_Data: any;
constructor(
  public Internship_Service_: Internship_Service,public Course_Import_Service_:Course_Import_Service,private router: Router,public dialogBox: MatDialog) { }
ngOnInit() 
{     
debugger
    this.User_Type=Number(localStorage.getItem('User_Type'));

        this.Login_Id=localStorage.getItem('Login_User');
        this.Permissions = Get_Page_Permission(10);
         
        if(this.Permissions==undefined || this.Permissions==null)
        {
        localStorage.removeItem('token');
        this.router.navigateByUrl('Home_Page');
        }
        else
        {
        this.Course_Import_Edit=this.Permissions.Edit;
        this.Course_Import_Save=this.Permissions.Save;
        this.Course_Import_Delete=this.Permissions.Delete;debugger
        this.Page_Load();
        }
}
trackByFn(index, item) 
{
    return index;
}

Create_New()
{
    this.Import_View = true;
    this.Error_View = false;
    this,this.List_View = false;
    this.Clr_Course_Import();
}
Close_Click()
{
    this.Import_View = false;
    this.List_View = true;
    this.Is_Expiry_Show=true;
    this.Search_FromDate=new Date();
    this.Search_FromDate=this.New_Date(this.Search_FromDate);
    this.Search_ToDate=new Date();
    this.Search_ToDate=this.New_Date(this.Search_ToDate);
} 


Clr_Course_Import()
{
    this.Course_Import_Details_Data =[];
    this.Error_Data = [];
    this.Display_File_Name_="";
    this.file = null;
    if (
			this.Process_Data != null &&
			this.Process_Data != undefined
		)
			this.Process_ = this.Process_Data[0];


}

Page_Load()
{debugger
    this.myInnerHeight = (window.innerHeight);
    this.myInnerHeight = this.myInnerHeight - 400;
    this.myHeight = (window.innerHeight);
    this.myHeight = this.myHeight - 400;
    this.Import_View=true;
    this.Load_Dropdowns();
    if (this.User_Type==2){
    this.Store_Edit=true;
    this.Get_Menu_Status(10,this.Login_Id); 
    debugger
    
    //this.Course_Import_Details_Data()
    }
}
New_Date(Date_)
{
    this.date=Date_
        this.year = this.date.getFullYear();
        this.month = this.date.getMonth() + 1;
        if (this.month < 10) {
        this.month = "0" + this.month;
    }
        this.day = this.date.getDate().toString();
        if (Number.parseInt(this.day) <10) {
        this.day = "0" + this.day;
    }
        this.date = this.year + "-" + this.month + "-" + this.day;
    return this.date;
}

Search_Course_Import()
{
    
    this.Search_FromDate=new Date();
    this.Search_FromDate=this.New_Date(this.Search_FromDate);
    this.Search_ToDate=new Date();
    this.Search_ToDate=this.New_Date(this.Search_ToDate);
    var look_In_Date_Value=0;
    if (this.Look_In_Date == true )
    look_In_Date_Value = 1;
this.issLoading=true;

this.Course_Import_Service_.Search_Course_Import(moment(this.Search_FromDate).format('YYYY-MM-DD'), moment(this.Search_ToDate).format('YYYY-MM-DD'),look_In_Date_Value).subscribe(Rows => {
     
this.Search_Course_Import_Details_Data=Rows[0];
 
this.Total_Entries=this.Search_Course_Import_Details_Data.length;

 this.issLoading=false;
 
if(this.Search_Course_Import_Details_Data.length==0)
{
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'No Details Found',Type: "3" }});
}
 this.issLoading=false;
},
Rows => { 
        this.issLoading=false;
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
});
}
Get_Menu_Status(Menu_id, Login_user_id)
{
    
this.issLoading = false;
this.Course_Import_Service_.Get_Menu_Status(Menu_id,Login_user_id).subscribe(Rows => {            

    
    if (Rows[0][0]==undefined)
    {
      if(Menu_id==10)
      {
        localStorage.removeItem('token');
        this.router.navigateByUrl('Home_Page');
      }
    }  
    else
    if (Rows[0][0].View >0) 
    {
        
        
        if(Menu_id==10)
        {
            
   

            this.Permissions=Rows[0][0];
            if(this.Permissions==undefined || this.Permissions==null)
                {
                    localStorage.removeItem('token');
                    this.router.navigateByUrl('Home_Page');
                }
               
                this.Course_Import_Edit=this.Permissions.Edit;
                this.Course_Import_Save=this.Permissions.Save;
                this.Course_Import_Delete=this.Permissions.Delete;
        }

    }
},
Rows => {
    this.issLoading = false;
    const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Error Occured', Type: "2" } });
});
}



Delete_Course_Import(User_Id,index)
{
     
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Do you want to delete ?',Type:"true",Heading:'Confirm'}});
this.Search_Course_Import();
dialogRef.afterClosed().subscribe(result =>
{
     
if(result=='Yes')
{

this.Course_Import_Details_Data.splice(index, 1);
 
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Deleted',Type:"false"}});


}
});
}

incomingfile(event) {
     this.file = event.target.files[0];
    // this.ImageFile = file;
     this.Display_File_Name_ = this.file.name;
     this.Upload();
     event.target.value='';

  }

 Upload() {
     
      let fileReader = new FileReader();
        fileReader.onload = (e) => {
            this.arrayBuffer = fileReader.result;
            var data = new Uint8Array(this.arrayBuffer);
            var arr = new Array();
            for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
            var bstr = arr.join("");
            var workbook = XLSX.read(bstr, {type:"binary"});
            var first_sheet_name = workbook.SheetNames[0];
            var worksheet = workbook.Sheets[first_sheet_name];
         
            this.Course_Import_Details_Data=(XLSX.utils.sheet_to_json(worksheet,{raw:true}));
            this.Import_Length= this.Course_Import_Details_Data.length;
            
            this.Course_Import_Details_Data.sort();
            
        }
        fileReader.readAsArrayBuffer(this.file);
}

Download_Excel(File_Name)
{
    
   var File_Name_Temp;

//    var bs='C:/Teena/Edabroad/Back End/Uploads/'
        var bs='assets/img/Course_Import.xlsx'

   var s=bs+File_Name_Temp;
   
   window.open(s,'_blank');  

}


Save_Course_Import()
 { 
  debugger
  if(this.Process_.Process_Id==0 ||this.Process_.Process_Id==undefined || this.Process_.Process_Id==null)
    {
         
        const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Please select Process',Type: "3" }});    
    
    return
    }
    if (this.Course_Import_Details_Data== undefined || this.Course_Import_Details_Data == null || this.Course_Import_Details_Data== undefined ) {
        const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Please Choose File', Type: "3" } });
       return;
    }
delete this.Course_Import_Details_Data['Category']
  
 
if(this.Course_Import_Details_Data.length==0)
{
     
    const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Please Add Details',Type: "3" }});    

return
}


var j = 0;
		for (var i = 0; i < this.Course_Import_Details_Data.length; i++) {
			j = i + 1;

			if (undefined == this.Course_Import_Details_Data[i].Course) {
				const dialogRef = this.dialogBox.open(DialogBox_Component, {
					panelClass: "Dialogbox-Class",
					data: { Message: "Course name is blank at row " + (j+1), Type: "3" },
				});
				i = this.Course_Import_Details_Data.length;
				return;
			}
			

 
			if ("" == String(this.Course_Import_Details_Data[i].Course).trim()) {
				const dialogRef = this.dialogBox.open(DialogBox_Component, {
					panelClass: "Dialogbox-Class",
					data: { Message: "Course name is blank at row " + (j+1), Type: "3" },
				});
				i = this.Course_Import_Details_Data.length;
				return;
			} else if (undefined == this.Course_Import_Details_Data[i].University) {
				const dialogRef = this.dialogBox.open(DialogBox_Component, {
					panelClass: "Dialogbox-Class",
					data: { Message: "University is blank at row " + (j+1), Type: "3" },
				});
				i = this.Course_Import_Details_Data.length;
				return;
			} else if (
				"" == this.Course_Import_Details_Data[i].University.toString().trim()
			) {
				const dialogRef = this.dialogBox.open(DialogBox_Component, {
					panelClass: "Dialogbox-Class",
					data: { Message: "university   is blank at row " + (j+1), Type: "3" },
				});
				i = this.Course_Import_Details_Data.length;
				return;
			}
      else if (undefined == this.Course_Import_Details_Data[i].Country) {
				const dialogRef = this.dialogBox.open(DialogBox_Component, {
					panelClass: "Dialogbox-Class",
					data: { Message: "Country is blank at row " + (j+1), Type: "3" },
				});
				i = this.Course_Import_Details_Data.length;
				return;
			} else if (
				"" == this.Course_Import_Details_Data[i].Country.toString().trim()
			) {
				const dialogRef = this.dialogBox.open(DialogBox_Component, {
					panelClass: "Dialogbox-Class",
					data: { Message: "Country   is blank at row " + (j+1), Type: "3" },
				});
				i = this.Course_Import_Details_Data.length;
				return;
			}
    }
// var j=0;
// var Error_Status;
// var Status = "Error";
// this.Error_Data = [];


//     for(var i=0; i<this.Course_Import_Details_Data.length;i++)
// { 
    
//      j=i+1
//     this.Error_Details =Object.assign({},this.Course_Import_Details_Data[i]);
//     this.Error_Details.Row_No = i+1;
//     Error_Status = false;
//     if (undefined == this.Course_Import_Details_Data[i].Course)
//     {        
//        // const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Course name is blank at row ' +j ,Type: "3" }});    
//         this.Error_Details.Course = Status;
//        // return;
//        Error_Status = true;
//     }
//     // else if ("" == this.Course_Import_Details_Data[i].Course.trim())
//     // {
//     //     // const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Course name is blank at row ' + j ,Type: "3" }});    
      
//     //     // return;
//     //     this.Error_Details.Course = Status;
//     //     // return;
//     //     Error_Status = true;
//     // }
//     //  else if (undefined == this.Course_Import_Details_Data[i].Course)
//     // {
//     //  const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Course name is blank at row ' + j ,Type: "3" }});    
//     //   
//     //     return;
//     //  }    



//     // else if (undefined == this.Course_Import_Details_Data[i].Code)
//     // {
//     //     const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Course code is blank at row ' + j ,Type: "3" }});    
//     //   
//     //     return;
//     // }
//     // else if (""== this.Course_Import_Details_Data[i].Code.trim())
//     // {
//     //     const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Course code is blank at row ' +j ,Type: "3" }});    
//     //   
//     //     return;
//     // }
//   if (undefined  == this.Course_Import_Details_Data[i].Country)
//     {
       
//        // const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Country is blank at row ' +j ,Type: "3" }});    
      
//         this.Error_Details.Country = Status;
//        // return;
//        Error_Status = true;
//     }
//     else if ("" == this.Course_Import_Details_Data[i].Country)
//      {
//         // const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Country is blank at row ' + j ,Type: "3" }});    
      
//         this.Error_Details.Country = Status;
//        //  return;
//        Error_Status = true;
//      }
//     if (undefined == this.Course_Import_Details_Data[i].Subject)
//     {
//       //  const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Subject is blank at row ' +j ,Type: "3" }});    
      
//         this.Error_Details.Subject = Status;
//         //return;
//         Error_Status = true;
//     }
   
//     else if ("" == this.Course_Import_Details_Data[i].Subject)
//     {
//         //const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Subject is blank at row ' + j ,Type: "3" }});    
      
//         this.Error_Details.Subject = Status;
//        // return;
//        Error_Status = true;
//     }
//     if (undefined == this.Course_Import_Details_Data[i].Sub_Section)
//     {
//        // const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'SubSection is blank at row ' +j ,Type: "3" }});    
      
//         this.Error_Details.Sub_Section = Status;
//         //return;
//         Error_Status = true;
//     }
//     else if ("" == this.Course_Import_Details_Data[i].Sub_Section)
//     {
//        // const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'SubSection is blank at row ' + j ,Type: "3" }});    
      
//         this.Error_Details.Sub_Section = Status;
//        // return;
//        Error_Status = true;
//     }
//     if (undefined == this.Course_Import_Details_Data[i].Duration)
//     {
//       //  const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Duration is blank at row ' + j,Type: "3" }});    
      
//         this.Error_Details.Duration = Status;
//         Error_Status = true;
//         //return;
//     }
//     else if ("" == this.Course_Import_Details_Data[i].Duration)
//     {
//         //const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Duration is blank at row ' + j,Type: "3" }});    
      
//         this.Error_Details.Duration = Status;
//       //  return;
//       Error_Status = true;
//     }
//      if (undefined == this.Course_Import_Details_Data[i].Level)
//     {
//         //const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Level is blank at row ' + j ,Type: "3" }});    
      
//         this.Error_Details.Level = Status;
//         //return;
//         Error_Status = true;
//     }
//     else if ("" == this.Course_Import_Details_Data[i].Level)
//     {
//         //const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Level is blank at row ' + j ,Type: "3" }});    
              
//         this.Error_Details.Level = Status;
//       //  return;
//         Error_Status = true;
//     }
//      if (undefined == this.Course_Import_Details_Data[i].Ielts)
//     {
//        // const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Ielts is blank at row ' + j,Type: "3" }});    
      
//         this.Error_Details.Ielts = Status;
//        // return;
//        Error_Status = true;
//     }
//     // else if ("" == this.Course_Import_Details_Data[i].Ielts.trim())
//     // {
//     //     const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Level is blank at row ' + j ,Type: "3" }});    
//     //   
//     //     return;
//     // }

//     else if ("" == this.Course_Import_Details_Data[i].Ielts)
//     {
//        // const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Ielts is blank at row ' + j ,Type: "3" }});    
      
//         this.Error_Details.Ielts = Status;
//        // return;
//        Error_Status = true;
//     }
    
//     // if (typeof this.Course_Import_Details_Data[i].Ielts != 'number') {
//     //     const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Ielts  should be a number,at row ' + j ,Type: "3" }});    
//     //       
//     //         return;
//     // }

//     if (undefined== this.Course_Import_Details_Data[i].Internship)
//     {
//        // const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Internship is blank at row ' + j,Type: "3" }});    
      
//         this.Error_Details.Internship = Status;
//        // return;
//        Error_Status = true;
//     }
//     else if ("" == this.Course_Import_Details_Data[i].Internship)
//     {
//         //const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Internship is blank at row ' + j,Type: "3" }});    
      
//         this.Error_Details.Internship = Status;
//         //return;
//         Error_Status = true;
//     }
//     if (undefined == this.Course_Import_Details_Data[i].Notes)
//     {
//       //  const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Notes is blank at row ' + j ,Type: "3" }});    
      
//         this.Error_Details.Notes = Status;
//         //return;
//         Error_Status = true;
//     }
//     else if ("" == this.Course_Import_Details_Data[i].Notes)
//     {
//        // const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Notes is blank at row ' +j ,Type: "3" }});    
      
//         this.Error_Details.Notes = Status;
//         //return;
//         Error_Status = true;
//     }
//     // else if (undefined == this.Course_Import_Details_Data[i].Details)
//     // {
//     //     const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Details is blank at row ' + j,Type: "3" }});    
//     //   
//     //     return;
//     // }

//     // else if ("" == this.Course_Import_Details_Data[i].Details.trim())
//     // {
//     //     const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Details is blank at row ' +j,Type: "3" }});    
//     //   
//     //     return;
//     // }



//     if (undefined == this.Course_Import_Details_Data[i].Fees)
//     {
//        // const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Fees is blank at row ' +j ,Type: "3" }});    
      
//         this.Error_Details.Fees = Status;
//         //return;
//         Error_Status = true;
//     }
//     else if ("" == this.Course_Import_Details_Data[i].Fees)
//     {
//        // const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Fees is blank at row ' + j ,Type: "3" }});    
      
//         this.Error_Details.Fees = Status;
//         //return;
//         Error_Status = true;
//     } 

//     // if (typeof this.Course_Import_Details_Data[i].Fees != 'number') {
//     //     const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Fees should be a number,at row ' + j ,Type: "3" }});    
//     //       
//     //         return;
//     // }



//     if (undefined == this.Course_Import_Details_Data[i].University)
//     {
//         //const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'University is blank at row ' + j,Type: "3" }});    
      
//         this.Error_Details.University = Status;
//         //return;
//         Error_Status = true;
//     } 
    
//     else if ("" == this.Course_Import_Details_Data[i].University)
//     {
//        // const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'University is blank at row ' +j ,Type: "3" }});    
      
//         this.Error_Details.University = Status;
//       //  return;
//       Error_Status = true;
//     } 

//     if (undefined == this.Course_Import_Details_Data[i].Intake)
//     {
//        // const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Intake is blank at row ' + j,Type: "3" }});    
      
//         this.Error_Details.Intake = Status;
//         //return;
//         Error_Status = true;
//     } 
//     else if ("" == this.Course_Import_Details_Data[i].Intake)
//     {
//        // const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Intake is blank at row ' +j,Type: "3" }});    
      
//         this.Error_Details.Intake = Status;
//        // return;
//        Error_Status = true;
//     } 
//     if (undefined  == this.Course_Import_Details_Data[i].Tution_Fees)
//     {
//        // const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Tution Fees is blank at row ' +j ,Type: "3" }});    
      
//         this.Error_Details.Tution_Fees = Status;
//        // return;
//        Error_Status = true;
//     }
//     else if ("" == this.Course_Import_Details_Data[i].Tution_Fees)
//     {
//       //  const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Tution Fees is blank at row ' + j ,Type: "3" }});    
      
//         this.Error_Details.Tution_Fees = Status;
//       //  return;
//       Error_Status = true;
//     }
//     if (undefined  == this.Course_Import_Details_Data[i].Fees)
//     {
//        // const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Tution Fees is blank at row ' +j ,Type: "3" }});    
      
//         this.Error_Details.Fees = Status;
//        // return;
//        Error_Status = true;
//     }
//     else if ("" == this.Course_Import_Details_Data[i].Fees)
//     {
//       //  const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Tution Fees is blank at row ' + j ,Type: "3" }});    
      
//         this.Error_Details.Fees = Status;
//       //  return;
//       Error_Status = true;
//     }
//     if (undefined  == this.Course_Import_Details_Data[i].Work_Experience)
//     {
//       //  const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Work Experience is blank at row ' +j ,Type: "3" }});    
      
//         this.Error_Details.Work_Experience = Status;
//        // return;
//        Error_Status = true;
//     }
//     else if ("" == this.Course_Import_Details_Data[i].Work_Experience)
//     {
//        // const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Work Experience is blank at row ' + j ,Type: "3" }});    
      
//         this.Error_Details.Work_Experience = Status;
//        // return;
//        Error_Status = true;
//     }
//     if (undefined  == this.Course_Import_Details_Data[i].Entry_Requirement)
//     {
//       //  const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Entry REquirement is blank at row ' +j ,Type: "3" }});    
      
//         this.Error_Details.Entry_Requirement = Status;
//         //return;
//         Error_Status = true;
//     }
//     else if ("" == this.Course_Import_Details_Data[i].Entry_Requirement)
//     {
//       //  const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Entry Requirement is blank at row ' + j ,Type: "3" }});    
      
//         this.Error_Details.Entry_Requirement = Status;
//         //return;
//         Error_Status = true;
//     }
//     if (undefined  == this.Course_Import_Details_Data[i].Living_Expense)
//     {
//       //  const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Living Expense is blank at row ' +j ,Type: "3" }});    
      
//         this.Error_Details.Living_Expense = Status;
//        // return;
//        Error_Status = true;
//     }
//    else if ("" == this.Course_Import_Details_Data[i].Living_Expense)
//     {
//        // const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Living Expense is blank at row ' + j ,Type: "3" }});    
      
//         this.Error_Details.Living_Expense = Status;
//       //  return;
//       Error_Status = true;
//     }
//     if (undefined  == this.Course_Import_Details_Data[i].Registration_Fees)
//     {
//       //  const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Living Expense is blank at row ' +j ,Type: "3" }});    
      
//         this.Error_Details.Registration_Fees = Status;
//        // return;
//        Error_Status = true;
//     }
//    else if ("" == this.Course_Import_Details_Data[i].Registration_Fees)
//     {
//        // const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Living Expense is blank at row ' + j ,Type: "3" }});    
      
//         this.Error_Details.Registration_Fees = Status;
//       //  return;
//       Error_Status = true;
//     }
//     if(Error_Status == true)
//     {
//         this.Error_Data.push(Object.assign({},this.Error_Details));
//         Error_Status = false;
//     }
    

// }



// if(this.Error_Data.length>0)
//     {
//         this.Error_Length = this.Error_Data.length;
//         this.Import_View = false;
//         this.List_View = false;
//         this.Error_View = true;
//         return;
//     }




    
{
  debugger    
this.Course_Import_.User_Id=parseInt( this.Login_Id);
 this.Course_Import_.Process_Id=this.Process_.Process_Id;
 this.Course_Import_.Course_Import_Details=this.Course_Import_Details_Data;
document.getElementById('Save_Button').hidden=true;
this.issLoading=true;
 
 debugger
this.Course_Import_Service_.Save_Course_Import(this.Course_Import_).subscribe(Save_status => {
      
  debugger
        this.issLoading=false;
            
     Save_status = Save_status[0][0].import_master_id_;
if(Number(Save_status)>0)
{
    
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Course Imported',Type:"false"}});
        //this.Search_Course_Import();
        this.Clr_Course_Import();
        this.Close_Click();
document.getElementById('Save_Button').hidden=false;
}
else{
    this.issLoading=false;
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
document.getElementById('Save_Button').hidden=true;
}

},
Rows => { 
        this.issLoading=false;
        
document.getElementById('Save_Button').hidden=true;
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
});
}
} 

Edit_Course_Import(Import_Master_e:Import_Master,index)
{
   
this.Course_Import_Index=index;
this.Course_Import_Service_.Get_Course_Import(Import_Master_e.Import_Master_Id).subscribe(Rows => {
     
if (Rows != null) {
this.Course_Import_Details_Data = Rows[0];

this.issLoading = false;
}

},
Rows => {
 
this.issLoading = false;
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
});
this.Import_View=true;
this.Import_Master_=Import_Master_e;
this.Import_Master_=Object.assign({},Import_Master_e);
}
Load_Dropdowns() {
  this.Internship_Service_.Get_Course_Load_Data().subscribe(
    (Rows) => {
      this.Process_Data = Rows[11];
      this.Process_Temp.Process_Id = 0;
      this.Process_Temp.Process_Name = "All";
      this.Process_Data.unshift(Object.assign({}, this.Process_Temp));
      this.Process_ = this.Process_Data[0];

       
 
    },
    (Rows) => {
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "Error Occured", Type: "2" },
      });
    }
  );
}

}

