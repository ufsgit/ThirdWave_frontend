import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Document_Service } from '../../../services/Document.Service';
import { DialogBox_Component } from '../DialogBox/DialogBox.component';
import { Document } from '../../../models/Document';
import {MatDialog} from '@angular/material';import { ROUTES,Get_Page_Permission } from '../../../components/sidebar/sidebar.component';
// import { Document_type } from 'app/models/Document_type';
import { Country } from 'app/models/Country';
import { Country_Service } from 'app/services/Country.service';
import { University } from 'app/models/University';
import { Process } from 'app/models/process.interface';
import { Process_Status_Details } from 'app/models/Process_Status_Details';
import { Department_Status } from 'app/models/Department_Status';
import {  Input } from '@angular/core';
// import { Job_Category } from 'app/models/Job_Category';
// import { Job_Specialisation } from 'app/models/job_specialisation';
@Component({
selector: 'app-Department_Status_Process_update',
templateUrl: './Department_Status_Process_update.component.html',
styleUrls: ['./Department_Status_Process_update.component.css']
})
export class Department_Status_Process_updateComponent implements OnInit {

  @Output() close = new EventEmitter<void>();
  @Output() processStatusDetails = new EventEmitter<any>();
  @Input() progress: number = 0;
  // @Output() closeEvent = new EventEmitter<void>();
Document_Data:Document[]
Document_:Document= new Document();
// Document_type_Data:Document_type[];
Document_View_Data:Document[];
// Job_Sector_Data:Job_Category[];
Process_Status_Details_: Process_Status_Details = new Process_Status_Details();
// Job_Specialisation_Data:Job_Specialisation[];
Job_Specialisation_Filer_Data:any[];

University_Filer_Data:any[];
Country_types_Data:Country[];
Document_Name_Search:string;
Process_Filer_Data:any[];

Entry_View:boolean=true;
EditIndex: number;
Total_Entries: number;
color = 'primary';
mode = 'indeterminate';
value = 50;
issLoading: boolean;
Permissions: any;
Document_Edit:boolean;
All_time_view:Boolean = false
Document_Save:boolean;
Document_Delete:boolean;
myInnerHeight: number;
// Document_Selection_Data_Temp:Document[]=[];
// Document_Type_Data_Temp:Document_type[]=[];
Login_User_Id:number;
Document_Data_Temp:Document[]=[];
Country_Data_Temp:Country[]=[];
Country_Data:Country[]=[];
Process_Data: Process[];
University_Data:University[];
University_Temp:University[]=[];
Process_Filer_Data_Temp:Process[]=[];

Process_Status_Data:Department_Status [];
Process_Status_Data_Temp:Department_Status[]=[];



Select_View_Country:boolean=false;
Select_View_University:boolean=false;
Select_View_Process:boolean=false;
// Job_Specialisation_Temp:Job_Specialisation[]=[];
Login_User: string = "0";
mandatory_master_details_id:number;

Select_View_Process_Status:boolean=false;
progress_button:number=0;

processStatusConfig: any = {};
constructor(public Document_Service_:Document_Service,public Country_Service_:Country_Service, private route: ActivatedRoute, private router: Router,public dialogBox: MatDialog) { }
ngOnInit() 
{
    debugger
    this.Login_User = localStorage.getItem("Login_User");
    this.Login_User_Id=Number(this.Login_User)
this.Permissions = Get_Page_Permission(4);

if(this.Permissions==undefined || this.Permissions==null)
{
localStorage.removeItem('token');
this.router.navigateByUrl('Home_Page');
}


else
{
this.Document_Edit=this.Permissions.Edit;
this.Document_Save=this.Permissions.Save;
this.Document_Delete=this.Permissions.Delete;
this.Page_Load()
}
}
Page_Load()
{
    debugger
this.myInnerHeight = (window.innerHeight);
this.myInnerHeight = this.myInnerHeight - 200;
this.Load_Country_Type();
// this.Load_Document_Data();
// this.Load_Job_Sector_Type();
 this.Load_University_Type();
 this.Load_Process_Data();
 
this.Select_View_Country= false
for(var m=0;m<this.Country_Data.length;m++)
  {
  this.Country_Data[m].Country_Data_view= false;
// this.User_Department_Data[m].Check_Box_View= false;
  }

this.Clr_Document();
// this.Search_Mandatory_Document();
this.Entry_View=true;
}
Create_New()
{
this.Entry_View = true;
this.Clr_Document();
}

Close_Click() {
  this.close.emit();
  this.progress_button=0;
}
trackByFn(index, item) 
{
return index;
}
Create_New121() {
  // Navigate to the Process_update page
  this.router.navigate(['/Department_Status_Process_update']);
}
 Clr_Document()
 {
  debugger
  this.University_Filer_Data=[];
  this.Process_Filer_Data=[];
//  this.Document_.mandatory_master_details_id=0;
//  this.Document_.In_country_view=false;
// this.Document_.Out_country_view=false;


this.Select_View_Country= false
for(var m=0;m<this.Country_Data.length;m++)
  {
  this.Country_Data[m].Country_Data_view= false;
// this.User_Department_Data[m].Check_Box_View= false;
  }


  this.Select_View_University= false
for(var m=0;m<this.University_Data.length;m++)
  {
  this.University_Data[m].University_View= false;
// this.User_Department_Data[m].Check_Box_View= false;
  }

  this.Select_View_Process= false
for(var m=0;m<this.Process_Filer_Data.length;m++)
  {
  this.Process_Filer_Data[m].Process_View= false;
// this.User_Department_Data[m].Check_Box_View= false;
  }
// this.Document_.Document_Name="";
// this.Document_.Description="";
// this.Document_.All_time_view = false
// this.Document_.In_country_view=false;
// this.Document_.Out_country_view=false;
// this.Document_.Interview_Dcocument=false;
// this.Document_.Interview_Document_Outcountry=false;
// this.Document_.In_country_view=false;
// for(var m=0;m<this.Document_type_Data.length;m++)
// {
// this.Document_type_Data[m].Document_view=false;}
this.mandatory_master_details_id=0;
// for(var m=0;m<this.Country_types_Data.length;m++)
//   {
//   this.Country_types_Data[m].Country_view=false;}

  for(var m=0;m<this.Country_Data.length;m++)
    {
    this.Country_Data[m].Country_Data_view=false;}

    for(var m=0;m<this.University_Data.length;m++)
      {
      this.University_Data[m].University_View=false;}


      for(var m=0;m<this.Process_Data.length;m++)
        {
        this.Process_Data[m].Process_View=false;}
        this.Process_Status_Details_.Insert_Not_Found = false;

}

// Load_document_Type() {
//     debugger; // Add breakpoint for debugging
//     this.Document_Service_.Load_document_Type().subscribe(
//       Rows => {
//         debugger
//         this.Document_type_Data = Rows.Document_type;
//         this.issLoading = false;
//       },
//       error => {
//         this.issLoading = false;
//         const dialogRef = this.dialogBox.open( DialogBox_Component, {
//           panelClass: 'Dialogbox-Class',
//           data: { Message: 'Error Occured', Type: "2" }
//         });
//         this.Search_Document();
//       }
      
//     );
//   }


  // Load_Country_Type() {
  //   debugger; 
  //   this.Country_Service_.Load_Country_Type().subscribe(
  //     Rows => {
  //       debugger
  //       this.Country_types_Data = Rows.Country_type;
  //       this.issLoading = false;
  //     },
  //     error => {
  //       this.issLoading = false;
  //       const dialogRef = this.dialogBox.open( DialogBox_Component, {
  //         panelClass: 'Dialogbox-Class',
  //         data: { Message: 'Error Occured', Type: "2" }
  //       });
  //       this.Search_Mandatory_Document();
  //     }
      
  //   );
  // }
  onJobSectorCheckboxChange(event: any, id: number) {
    console.log('id: ', id);
    const isChecked = event.target.checked;
  
    // Filter the selectedJob_Sector based on Job_Category_View
    const selectedJob_Sector = this.Country_Data
      .filter(item => item.Country_Data_view === true)
      .map(item => item.Country_Id);
  
    console.log(this.Country_Data);
    if (!isChecked) {
      this.University_Filer_Data
        .filter(item => item.Country_Id == id)
        .forEach(item => item.University_View = false);
    }
    // Filter the Job_Specialisation_Filer_Data based on selectedJob_Sector
    this.University_Filer_Data = this.University_Data.filter(item =>
      selectedJob_Sector.includes(item.Country_Id)
    );
  
  
  
    // If the checkbox is unchecked, set Job_Specialisation_View to false for the corresponding items
    console.log('isChecked: ', isChecked);
   
    console.log('selectedJob_Sector: ', selectedJob_Sector);

    console.log('this.Job_Specialisation_Data: ', this.University_Data);
    console.log('this.University_Filer_Data: ', this.University_Filer_Data);
  }



  onProcessCheckboxChange(event: any, id: number) {
    console.log('id: ', id);
    const isChecked = event.target.checked;
  
    // Ensure University_Filer_Data is defined
    if (!this.University_Filer_Data) {
      console.error('University_Filer_Data is undefined');
      return;
    }
  
    // Update the University_View for the changed item
    const changedUniversity = this.University_Filer_Data.find(item => item.University_Id === id);
    if (changedUniversity) {
      changedUniversity.University_View = isChecked;
    }
  
    // Filter the selectedProcess based on University_View
    const selectedProcess = this.University_Filer_Data
      .filter(item => item.University_View === true)
      .map(item => item.University_Id);
  
    console.log(this.University_Filer_Data);
  
    // Ensure Process_Filer_Data and Process_Data are defined
    if (!this.Process_Filer_Data || !this.Process_Data) {
      console.error('Process_Filer_Data or Process_Data is undefined');
      return;
    }
  
    if (!isChecked) {
      // Update Process_View for unchecked items
      this.Process_Filer_Data
        .filter(item => item.University_Id === id)
        .forEach(item => item.Process_View = false);
    }
  
    // Filter the Process_Filer_Data based on selectedProcess
    this.Process_Filer_Data = this.Process_Data.filter(item =>
      selectedProcess.includes(item.University_Id)
    );
  
    console.log('isChecked: ', isChecked);
    console.log('selectedProcess: ', selectedProcess);
    console.log('this.Process_Data: ', this.Process_Data);
    console.log('this.Process_Filer_Data: ', this.Process_Filer_Data);
  }
  // onProcessCheckboxChange(event: any, id: number) {
  //   console.log('id: ', id);
  //   const isChecked = event.target.checked;
  
  //   // Filter the selectedJob_Sector based on Job_Category_View
  //   const selectedProcess = this.University_Filer_Data
  //     .filter(item => item.University_View === true)
  //     .map(item => item.University_Id);
  
  //   console.log(this.University_Filer_Data);
  //   if (!isChecked) {
  //     this.Process_Filer_Data
  //       .filter(item => item.University_Id == id)
  //       .forEach(item => item.Process_View = false);
  //   }
  //   debugger
  //   // Filter the Job_Specialisation_Filer_Data based on selectedJob_Sector
  //   this.Process_Filer_Data = this.Process_Data.filter(item =>
  //     selectedProcess.includes(item.University_Id)
  //   );
  
  
  
  //   // If the checkbox is unchecked, set Job_Specialisation_View to false for the corresponding items
  //   console.log('isChecked: ', isChecked);
   
  //   console.log('selectedProcess: ', selectedProcess);

  //   console.log('this.Process_Data: ', this.Process_Data);
  //   console.log('this.Process_Filer_Data: ', this.Process_Filer_Data);
  // }
  Load_Process_Data() {
    debugger; // Add breakpoint for debugging
    this.Document_Service_.Load_Process_Data().subscribe(
      Rows => {
        debugger
        this.Process_Data = Rows.Process_Datatype;
        this.issLoading = false;
      },
      error => {
        this.issLoading = false;
        const dialogRef = this.dialogBox.open( DialogBox_Component, {
          panelClass: 'Dialogbox-Class',
          data: { Message: 'Error Occured', Type: "2" }
        });
        // this.Search_Mandatory_Document();
      }
      
    );
  }
  Load_Country_Type() {
    debugger; // Add breakpoint for debugging
    this.Document_Service_.Load_Country_Type().subscribe(
      Rows => {
        debugger
        this.Country_Data= Rows.Job_Sector_type;
        this.issLoading = false;
      },
      error => {
        this.issLoading = false;
        const dialogRef = this.dialogBox.open( DialogBox_Component, {
          panelClass: 'Dialogbox-Class',
          data: { Message: 'Error Occured', Type: "2" }
        });
        // this.Search_Mandatory_Document();
      }
      
    );
  }
  Load_University_Type() {
    debugger; // Add breakpoint for debugging
    this.Document_Service_.Load_University_Type().subscribe(
      Rows => {
        debugger
        this.University_Data = Rows.Job_Specialisation_type;
        console.log('this.University_Data: ', this.University_Data);
        this.issLoading = false;
      },
      error => {
        this.issLoading = false;
        const dialogRef = this.dialogBox.open( DialogBox_Component, {
          panelClass: 'Dialogbox-Class',
          data: { Message: 'Error Occured', Type: "2" }
        });
        // this.Search_Mandatory_Document();
      }
      
    );
  }
// Search_Mandatory_Document()
// {debugger

 
// this.issLoading=true;
// debugger
// this.Document_Service_.Search_Mandatory_Document().subscribe(Rows => {
//     debugger
//  this.Document_Data=Rows[0];
 
//  console.log('this.Document_Data: ', this.Document_Data);
// this.Total_Entries=this.Document_Data.length;
// if(this.Document_Data.length==0)
// {
// this.issLoading=false;
// const dialogRef = this.dialogBox.open
// ( DialogBox_Component, {panelClass:'Dialogbox-Class'
// ,data:{Message:'No Details Found',Type:"3"}});
// }
// this.issLoading=false;
//  },
//  Rows => { 
// this.issLoading=false;
// const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
//  });
// }
// Delete_Document(mandatory_master_details_id,index)
// {
//   debugger
// const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Do you want to delete ?',Type:true,Heading:'Confirm'}});
// this.Search_Mandatory_Document();
// dialogRef.afterClosed().subscribe(result =>
// {
// if(result=='Yes')
// {
// this.issLoading=true;
// debugger
// this.Document_Service_.Delete_Mandatory_Document(mandatory_master_details_id).subscribe(Delete_status => {
//   debugger
//   if(Delete_status[0][0].mandatory_master_details_id_>0){

// this.Document_Data.splice(this.EditIndex, 1);
// const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Deleted',Type: "false"}});
// this.Search_Mandatory_Document();
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
//  });
// }

// ---------------------------------------------Commented----------------------------------



Save_Process_view() {

  this.progress_button=1;
  // Create a simplified data object
  const selectedData = {
      // Get only selected processes
      Process_Filer_Data: this.Process_Filer_Data.filter(process => 
          Boolean(process.Process_View) === true
      ),
      
      // Get only selected process statuses
      Process_Status_Data: this.Process_Status_Data.filter(status => 
          Boolean(status.Process_Status_View) === true
      ),
      
      // Get only selected universities
      University_Filer_Data: this.University_Filer_Data.filter(uni => 
          Boolean(uni.University_View) === true
      ),
      
      // Get only selected countries
      Country_Data: this.Country_Data.filter(country => 
          Boolean(country.Country_Data_view) === true
      ),
      
      // Fixed Insert_Not_Found assignment
      Insert_Not_Found: this.Process_Status_Details_ && this.Process_Status_Details_.Insert_Not_Found ? 
          Boolean(this.Process_Status_Details_.Insert_Not_Found) : false
  };

  // Emit only the selected data
  this.processStatusDetails.emit(selectedData);
}




// Save_Process_view() {
//   this.University_Temp = [];
//   for (var m = 0; m < this.University_Filer_Data.length; m++) {
//     if (Boolean(this.University_Filer_Data[m].University_View) == true) {
//       this.University_Temp.push(this.University_Filer_Data[m]);
//     }
//   }
//   this.processStatusConfig.University_Filer_Data = this.University_Temp;

//   this.Process_Filer_Data_Temp = [];
//   for (var n = 0; n < this.Process_Filer_Data.length; n++) {
//     if (Boolean(this.Process_Filer_Data[n].Process_View) == true) {
//       this.Process_Filer_Data_Temp.push(this.Process_Filer_Data[n]);
//     }
//   }
//   this.processStatusConfig.Process_Filer_Data = this.Process_Filer_Data_Temp;

//   this.Country_Data_Temp = [];
//   for (var o = 0; o < this.Country_Data.length; o++) {
//     if (Boolean(this.Country_Data[o].Country_Data_view) == true) {
//       this.Country_Data_Temp.push(this.Country_Data[o]);
//     }
//   }
//   this.processStatusConfig.Country_Data = this.Country_Data_Temp;
//   // console.log(' this.processStatusConfig: ',  this.processStatusConfig);

//   // // Emit the data to the parent component
//   // this.processStatusDetails.emit(this.processStatusConfig);



//     // Extract Process_Id from Process_Filer_Data_Temp and pass as a single array
//     const processIds = this.Process_Filer_Data_Temp.map(data => data.Process_Id);

// //    process status 
//     this.Process_Status_Data_Temp = [];
//   for (var n = 0; n < this.Process_Status_Data.length; n++) {
//     if (Boolean(this.Process_Status_Data[n].Process_Status_View) == true) {
//       this.Process_Status_Data_Temp.push(this.Process_Status_Data[n]);
//     }
//   }
//   this.processStatusConfig.Process_Status_Data = this.Process_Status_Data_Temp;


//       // Add the value of the new checkbox to processStatusConfig

//       if (this.Process_Status_Details_.Insert_Not_Found) {
//         debugger
//         this.processStatusConfig.Insert_Not_Found = Boolean(this.Process_Status_Details_.Insert_Not_Found);
//     } else {
//         this.processStatusConfig.Insert_Not_Found = 0;
//     }
//       // this.processStatusConfig.Insert_Not_Found = 0;
//   //  this.processStatusConfig.Insert_Not_Found = Boolean(this.Process_Status_Details_.Insert_Not_Found);

//     // Log the processStatusConfig and processIds
//     console.log('this.processStatusConfig: ', this.processStatusConfig);
//     console.log('Extracted Process Ids: ', processIds);
  
//     // Emit the processStatusConfig with Process_Filer_Data as an array of Process_Id
//     this.processStatusConfig.Process_Ids = processIds;
//     this.processStatusDetails.emit(this.processStatusConfig);
// }



// ---------------------------------------------Commented stoped----------------------














// Save_Process_view(){
//   debugger

//   this.University_Temp=[];
//   for (var m = 0; m < this.University_Filer_Data.length; m++) 
//   {
//       if (Boolean(this.University_Filer_Data[m].University_View) == true)
//       {
//           this.University_Temp.push(this.University_Filer_Data[m]);
//       }
//   }
//   this.processStatusConfig.University_Filer_Data = this.University_Temp;

// debugger
  
//   this.Process_Filer_Data_Temp=[];
//   for (var n = 0; n < this.Process_Filer_Data.length; n++) 
//   {
//       if (Boolean(this.Process_Filer_Data[n].Process_View) == true)
//       {
//           this.Process_Filer_Data_Temp.push(this.Process_Filer_Data[n]);
//       }
//   }
//   this.processStatusConfig.Process_Filer_Data = this.Process_Filer_Data_Temp;

//   debugger
  
//   this.Country_Data_Temp=[];
//   for (var o = 0; o < this.Country_Data.length; o++) 
//   {
//       if (Boolean(this.Country_Data[o].Country_Data_view) == true)
//       {
//           this.Country_Data_Temp.push(this.Country_Data[o]);
//       }
//   }
//   this.processStatusConfig.Country_Data = this.Country_Data_Temp;


//   debugger
  

// this.issLoading=true;
// console.log('this.Document_: ', this.Document_);
// console.log('this.Login_User: ', this.Login_User);
// this.Document_Service_.Save_Process_view(this.processStatusConfig,this.Login_User).subscribe(Save_status => {
//   debugger
// Save_status=Save_status[0];

// if(Number(Save_status[0].mandatory_master_details_id_)>0)
// {

// const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Saved',Type:"false"}});
// this.Clr_Document();
// this.mandatory_master_details_id= Number(Save_status[0].mandatory_master_details_id_)

// }
// else{
// const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
// }
// this.issLoading=false;
// },
// Rows => { 
// this.issLoading=false;
// const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:Rows.error.error,Type:"2"}});
// });



// }



// Save_Document()
// {
//     debugger

//     if (this.Document_.Document_Name == undefined || this.Document_.Document_Name == null || this.Document_.Document_Name == undefined || this.Document_.Document_Name=='') {
//         const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Select Document', Type: "3" } });
//        return;
//     }
//     var Document_Status=false;
//     for (var i = 0; i < this.Document_type_Data.length; i++)
//     {
//         if(this.Document_type_Data[i].Document_view== true)
//         Document_Status=true
//     } 

//     this.Document_Type_Data_Temp=[];
//         for (var m = 0; m < this.Document_type_Data.length; m++) 
//         {
//             if (Boolean(this.Document_type_Data[m].Document_view) == true)
//             {
//                 this.Document_Type_Data_Temp.push(this.Document_type_Data[m]);
//             }
//         }
//         // this.Document_.Document_type_Data = this.Document_Type_Data_Temp;
// this.issLoading=true;
// debugger
// this.Document_Service_.Save_Document(this.Document_).subscribe(Save_status => {
//     debugger
// Save_status=Save_status[0];

// if(Number(Save_status[0].Document_Id_)>0)
// {
// const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Saved',Type:"false"}});
// this.Clr_Document();
// // this.Search_Mandatory_Document();
// }
// else{
// const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
// }
// this.issLoading=false;
//  },
//  Rows => { 
// this.issLoading=false;
// const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:Rows.error.error,Type:"2"}});
//  });
 
// }
// Edit_Document(Document_e:Document,index)
// {
//   debugger
// this.Entry_View=true;
// this.Document_=Document_e;
// this.Document_=Object.assign({},Document_e);
// this.Get_Mandatory_Document_Edit(this.Document_.mandatory_master_details_id);
// console.log('this.mandatory_master_details_id: ', this.mandatory_master_details_id);


//     }



    // Get_Mandatory_Document_Edit(mandatory_master_details_id){
    //   console.log('mandatory_master_details_id: ', mandatory_master_details_id);
        
    //     this.Document_Service_.Get_Mandatory_Document_Edit(mandatory_master_details_id).subscribe(Rows => 
    //       {
    //         debugger
    //           console.log('Rows: ', Rows);
                
        
    //         this.Country_types_Data = Rows[3];
            
    //         for(var i=0;i<this.Country_types_Data.length;i++)
    //         {
    //         if (this.Country_types_Data[i].Country_view.toString()=='1')
    //         {
    //         this.Country_types_Data[i].Country_view=true
    //         }
    //         else 
    //         {
    //         this.Country_types_Data[i].Country_view=false
    //         }
            
    //         }
    //         this.Job_Sector_Data = Rows[2];
    //         for(var i=0;i<this.Job_Sector_Data.length;i++)
    //         {
    //         if (this.Job_Sector_Data[i].Job_Category_View.toString()=='1')
    //         {
    //         this.Job_Sector_Data[i].Job_Category_View=true
    //         }
    //         else 
    //         {
    //         this.Job_Sector_Data[i].Job_Category_View=false
    //         }
            
    //         }
            

    //         this.Job_Specialisation_Data = Rows[1];
    //         for(var i=0;i<this.Job_Specialisation_Data.length;i++)
    //         {
    //         if (this.Job_Specialisation_Data[i].Job_Specialisation_View)
    //         {
    //         this.Job_Specialisation_Data[i].Job_Specialisation_View=true
    //         }
    //         else 
    //         {
    //         this.Job_Specialisation_Data[i].Job_Specialisation_View=false
    //         }
            
    //         }
    //         const selectedJob_Sector = this.Job_Sector_Data
    //         .filter(item => item.Job_Category_View === true)
    //         .map(item => item.Job_Category_Id);
        
    //       console.log(this.Job_Sector_Data);
      
    //       // Filter the Job_Specialisation_Filer_Data based on selectedJob_Sector
    //       this.Job_Specialisation_Filer_Data = this.Job_Specialisation_Data.filter(item =>
    //         selectedJob_Sector.includes(item.Job_Category_Id)
    //       );
            

    //         this.Document_View_Data = Rows[0];
    //         for(var i=0;i<this.Document_View_Data.length;i++)
    //         {
    //         if (this.Document_View_Data[i].Document_checkbox_view.toString()=='1')
    //         {
    //         this.Document_View_Data[i].Document_checkbox_view=true
    //         }
    //         else 
    //         {
    //         this.Document_View_Data[i].Document_checkbox_view=false
    //         }
            
    //         }
            



            
        
            
    //         this.issLoading=false;
    //         },
    //       Rows => { 
    //         this.issLoading=false;
    //      const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}}); });

    // }





      // Select all for Country
  Country_View_Click() {
    // Toggle the select all state
    this.Select_View_Country = !this.Select_View_Country;

    // Update all country checkboxes
    for (let country of this.Country_Data) {
      country.Country_Data_view = this.Select_View_Country;
    }

    // If selecting all countries, update university filter
    if (this.Select_View_Country) {
      this.University_Filer_Data = [...this.University_Data];
    } else {
      // If deselecting all countries, clear university and process filters
      this.University_Filer_Data = [];
      this.Process_Filer_Data = [];
    }
  }

  // Select all for University
  University_View_Click() {
    // Toggle the select all state
    this.Select_View_University = !this.Select_View_University;

    // Update all university checkboxes in filtered data
    for (let university of this.University_Filer_Data) {
      university.University_View = this.Select_View_University;
    }

    // Update process filter based on university selection
    if (this.Select_View_University) {
      // Get all university IDs from filtered universities
      const selectedUniversities = this.University_Filer_Data.map(u => u.University_Id);
      // Filter process data based on selected universities
      this.Process_Filer_Data = this.Process_Data.filter(p => 
        selectedUniversities.includes(p.University_Id)
      );
    } else {
      // Clear process filter if deselecting all universities
      this.Process_Filer_Data = [];
    }
  }

  // Select all for Process
  Process_View_Click() {
    // Toggle the select all state
    this.Select_View_Process = !this.Select_View_Process;

    // Update all process checkboxes in filtered data
    for (let process of this.Process_Filer_Data) {
      process.Process_View = this.Select_View_Process;
    }

    if (this.Select_View_Process) {
      const selectedProcess = this.Process_Filer_Data
      .filter(item => item.Process_View === true)
      .map(item => item.Process_Id)
      .join(','); // Convert array to a comma-separated string
    
    console.log('selectedProcess: ', selectedProcess);

    this.Document_Service_.Get_Process_Status_by_process(selectedProcess).subscribe(
      Rows => {
        debugger
        this.Process_Status_Data = Rows[0];
        this.issLoading = false;
      },
      error => {
        this.issLoading = false;
        const dialogRef = this.dialogBox.open( DialogBox_Component, {
          panelClass: 'Dialogbox-Class',
          data: { Message: 'Error Occured', Type: "2" }
        });
        // this.Search_Mandatory_Document();
      }
    );
    
    } else {
      // Clear process filter if deselecting all universities
      this.Process_Status_Data = [];
    }

  }


    // Country_View_Click(){
    //   // this.Select_View_Check = !this.Select_View_Check;
    //   for(var i=0;i<this.Country_Data.length;i++)
    //     {
    //         if(this.Select_View_Country==false)
    //             this.Country_Data[i].Country_Data_view=true;
    //         else
    //             this.Country_Data[i].Country_Data_view=false;
    //     }
    // }
    // University_View_Click(){
    //   // this.Select_View_Check = !this.Select_View_Check;
    //   for(var i=0;i<this.University_Data.length;i++)
    //     {
    //         if(this.Select_View_University==false)
    //             this.University_Data[i].University_View=true;
    //         else
    //             this.University_Data[i].University_View=false;
    //     }
    // }
    // Process_View_Click(){
    //   // this.Select_View_Check = !this.Select_View_Check;
    //   for(var i=0;i<this.Process_Filer_Data.length;i++)
    //     {
    //         if(this.Select_View_Process==false)
    //             this.Process_Filer_Data[i].Process_View=true;
    //         else
    //             this.Process_Filer_Data[i].Process_View=false;
    //     }
    // }


    onsubProcessCheckboxChange(event: any, id: number)
    {
      debugger
      console.log('id: ', id);
const isChecked = event.target.checked;

const selectedProcess = this.Process_Filer_Data
  .filter(item => item.Process_View === true)
  .map(item => item.Process_Id)
  .join(','); // Convert array to a comma-separated string

console.log('selectedProcess: ', selectedProcess);

this.Document_Service_.Get_Process_Status_by_process(selectedProcess).subscribe(
  Rows => {
    debugger
    this.Process_Status_Data = Rows[0];
    this.issLoading = false;
  },
  error => {
    this.issLoading = false;
    const dialogRef = this.dialogBox.open( DialogBox_Component, {
      panelClass: 'Dialogbox-Class',
      data: { Message: 'Error Occured', Type: "2" }
    });
    // this.Search_Mandatory_Document();
  }
);

    }

    Process_Status_View_Click() {
      // Toggle the select all state
      this.Select_View_Process_Status = !this.Select_View_Process_Status;
  
      // Update all process checkboxes in filtered data
      for (let process1 of this.Process_Status_Data) {
        process1.Process_Status_View = this.Select_View_Process_Status;
      }
    }
  
}





