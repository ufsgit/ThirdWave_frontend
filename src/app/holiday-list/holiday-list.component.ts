import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { Holiday } from 'app/models/Holiday';
import { Region } from 'app/models/Region';
import { DialogBox_Component } from 'app/modules/admin/DialogBox/DialogBox.component';
import { Holiday_Service } from 'app/services/Holiday.Service';
import { Region_Service } from 'app/services/Region.Service';
import { error } from 'console';
import moment from 'moment';

@Component({
  selector: 'app-holiday-list',
  templateUrl: './holiday-list.component.html',
  styleUrls: ['./holiday-list.component.scss']
})
export class HolidayListComponent implements OnInit {

  Holiday_Data:Holiday[]
  Holiday_:Holiday= new Holiday();
  Region_List:Region[];
  Holiday_Name_Search:string;
  Search_Holiday_:string;
  Entry_View:boolean=true;
  myInnerHeight: number;
  EditIndex: number;
  Id:number;
  Name:string;
  Total_Entries: number=0;
  color = 'primary';
  mode = 'indeterminate';
  value = 50;
  issLoading: boolean;
  Permissions: any;
  Holiday_Edit:boolean;
  Holiday_Save:boolean;
  Holiday_Delete:boolean;
  Login_User: string = "0";
  myTotalHeight:number;
  
  
  constructor(private Region_Service_:Region_Service,private Holiday_Service_:Holiday_Service, private route: ActivatedRoute, private router: Router,public dialogBox: MatDialog) { }
  ngOnInit() 
      {
        this.Holiday_.Region_Ids=[]
      this.Login_User = localStorage.getItem("Login_User");
  
          
      // this.Permissions = Get_Page_Permission(54);
      // if(this.Permissions==undefined || this.Permissions==null)
      // {
      // localStorage.removeItem('token');
      // this.router.navigateByUrl('Home_Page');
      // }
      // else
      {
      // this.Holiday_Edit=this.Permissions.Edit;
      // this.Holiday_Save=this.Permissions.Save;
      // this.Holiday_Delete=this.Permissions.Delete;
      this.Page_Load()
      }
  }
  Page_Load()
  {
      this.Get_Menu_Status(54,this.Login_User); 
  this.Search_Region();
      this.myInnerHeight = (window.innerHeight);
      this.myInnerHeight = this.myInnerHeight - 230;
      this.Clr_Holiday();
      this.Search_Holiday();
      //this.Load_Holiday();
      this.Entry_View=false;
      this.myInnerHeight = (window.innerHeight);
      this.myTotalHeight=this.myInnerHeight - 100;
      this.myTotalHeight=this.myTotalHeight-90;
      this.myInnerHeight = this.myInnerHeight - 230;
  }
  Search_Region()
  {       
       
          this.issLoading=true;
          this.Region_Service_.Search_Region('').subscribe(Rows => {
              
                
          this.Region_List=Rows[0];
          this.Total_Entries=this.Region_List.length;
          if(this.Region_List.length==0)
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
  selectRegion(data: Region) {
    console.log('Region: ', data);

    // Check if Region_Ids array is empty
    if (this.Holiday_.Region_Ids.length === 0) {
        // If it's empty, push the new object
        this.Holiday_.Region_Ids.push(data);
    } else {
        // Check if Region_Id is already present
        const existingRegion = this.Holiday_.Region_Ids.find(region => region.Region_Id === data.Region_Id);

        if (existingRegion) {
            // If Region_Id is present, remove the existing object
            this.Holiday_.Region_Ids = this.Holiday_.Region_Ids.filter(region => region.Region_Id !== data.Region_Id);
        } else {
            // If Region_Id is not present, push the new object
            this.Holiday_.Region_Ids.push(data);
        }
    }

    console.log('this.Holiday_: ', this.Holiday_);
}

isRegionCheckd(data: Region): boolean {
    if (this.Holiday_ && this.Holiday_.Region_Ids) {
        const existingRegion = this.Holiday_.Region_Ids.find(region => region.Region_Id === data.Region_Id);

        return !!existingRegion;  // Using double negation to convert to boolean
    } else {
        return false;  // Default to false if Region_Ids is not defined
    }
}

  
  Get_Menu_Status(Menu_id, Login_user_id)
  {
      
  this.issLoading = false;
  this.Holiday_Service_.Get_Menu_Status(Menu_id,Login_user_id).subscribe(Rows => {            
  
      
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
                 
                  this.Holiday_Edit=this.Permissions.Edit;
                  this.Holiday_Save=this.Permissions.Save;
                  this.Holiday_Delete=this.Permissions.Delete;
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
      this.Clr_Holiday();
  }
  Close_Click()
  {
      this.Entry_View = false;
  }
  Clr_Holiday()
   {
       this.Holiday_.Holiday_Id = 0;
       this.Holiday_.Holiday_Date = '';
     this.Holiday_.Region_Ids.length=0
      this.Holiday_.Holiday_Name=""
     
  }
    
  display_Under_Role(Holiday_: Holiday)
  {      
         if (Holiday_) { return Holiday_.Holiday_Name;  }
  }
  Search_Holiday()
  {       
       
          this.issLoading=true;
          this.Holiday_Service_.Search_Holiday(this.Search_Holiday_).subscribe(Rows => {
              
                
          this.Holiday_Data=Rows;
          this.Total_Entries=this.Holiday_Data.length;
          if(this.Holiday_Data.length==0)
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
  Delete_Holiday(Holiday_Id_,index)
      {
           
      const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Do you want to delete ?',Type:"true",Heading:'Confirm'}});
      dialogRef.afterClosed().subscribe(result =>
         
      {
          
      if(result=='Yes')
      {
           
          this.issLoading=true;
          this.Holiday_Service_.Delete_Holiday(Holiday_Id_).subscribe(Delete_status => {
              
              // Delete_status=Delete_status[0];
              // Delete_status=Delete_status[0].DeleteStatus_.data[0];
          if(Number(Delete_status[0].Holiday_Id)>0){
          this.Holiday_Data.splice(index, 1);         
          const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Deleted',Type:"false"}});
          this.Search_Holiday();
      }else if(Number(Delete_status[0].Holiday_Id)== -2)
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
  Save_Holiday()
  {
      
      if (this.Holiday_.Holiday_Name == null || this.Holiday_.Holiday_Name == "" || this.Holiday_.Holiday_Name == undefined) {
      const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Enter the  Holiday', Type: "3" } });
      }
    else  if (this.Holiday_.Holiday_Date == null || this.Holiday_.Holiday_Date == undefined ||this.Holiday_.Holiday_Date == "" ) {
      const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Enter the  Holiday Date', Type: "3" } });
      }
  
    else  if (this.Holiday_.Region_Ids == null || this.Holiday_.Region_Ids == undefined || this.Holiday_.Region_Ids.length==0) {
      const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Enter the Region', Type: "3" } });
      }
     
  else{
      this.issLoading=true;
        
      console.log('this.Holiday_: ', this.Holiday_);
      this.Holiday_Service_.Save_Holiday(this.Holiday_).subscribe(Save_status => {  
          
          Save_status=Save_status[0];
          console.log('Save_status: ', Save_status);
          
      if(Number(Save_status['holiday_Id'])>0)
      {
      const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Saved',Type:"false"}});
      this.Search_Holiday();
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
      this.Clr_Holiday();
   
  }
  }
  Edit_Holiday(Holiday_e:Holiday,index)
  {
    this.issLoading=true;
    this.Holiday_=Object.assign({},Holiday_e);

    // this.Holiday_.Holiday_Date= moment(Holiday_e.Holiday_Date).format("YYYY-MM-DD");;
    //   console.log('Holiday_e: ', Holiday_e);
        // this.Holiday_Service_.Get_Holiday()




  this.Entry_View=true;
this.Holiday_Service_.Get_Holiday_Region(Holiday_e.Holiday_Id).subscribe(res=>{
    console.log('res: ', res);
    this.issLoading=false;
    this.Holiday_.Region_Ids = res as Region[];
},error=>{
    this.issLoading=false;

    const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
 
})
  

  console.log(' this.Holiday_.Holiday_Date: ',  this.Holiday_.Holiday_Date);



 

  }
  }
  
  
