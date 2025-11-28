import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { Region } from 'app/models/Region';
import { DialogBox_Component } from 'app/modules/admin/DialogBox/DialogBox.component';
import { Region_Service } from 'app/services/Region.Service';

@Component({
  selector: 'app-region-list',
  templateUrl: './region-list.component.html',
  styleUrls: ['./region-list.component.scss']
})

export class RegionListComponent implements OnInit {
  Region_Data:Region[]
  Region_Typeahead_Data:Region[]
  Region_:Region= new Region();
  Region_Temp:Region= new Region();
  Under_Role_:Region= new Region();
  Region_Name_Search:string;
  Search_Region_:string;
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
  Region_Edit:boolean;
  Region_Save:boolean;
  Region_Delete:boolean;
  Login_User: string = "0";
  myTotalHeight:number;
  
  
  constructor(public Region_Service_:Region_Service, private route: ActivatedRoute, private router: Router,public dialogBox: MatDialog) { }
  ngOnInit() 
      {
          this.Region_Typeahead_Data = [];
      this.Login_User = localStorage.getItem("Login_User");
  
          
      // this.Permissions = Get_Page_Permission(54);
      // if(this.Permissions==undefined || this.Permissions==null)
      // {
      // localStorage.removeItem('token');
      // this.router.navigateByUrl('Home_Page');
      // }
      // else
      {
      // this.Region_Edit=this.Permissions.Edit;
      // this.Region_Save=this.Permissions.Save;
      // this.Region_Delete=this.Permissions.Delete;
      this.Page_Load()
      }
  }
  Page_Load()
  {
      this.Get_Menu_Status(54,this.Login_User); 
  
      this.myInnerHeight = (window.innerHeight);
      this.myInnerHeight = this.myInnerHeight - 230;
      this.Clr_Region();
      this.Search_Region();
      //this.Load_Region();
      this.Entry_View=false;
      this.myInnerHeight = (window.innerHeight);
      this.myTotalHeight=this.myInnerHeight - 100;
      this.myTotalHeight=this.myTotalHeight-90;
      this.myInnerHeight = this.myInnerHeight - 230;
  }
  
  
  Get_Menu_Status(Menu_id, Login_user_id)
  {
      
  this.issLoading = false;
  this.Region_Service_.Get_Menu_Status(Menu_id,Login_user_id).subscribe(Rows => {            
  
      
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
                 
                  this.Region_Edit=this.Permissions.Edit;
                  this.Region_Save=this.Permissions.Save;
                  this.Region_Delete=this.Permissions.Delete;
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
      this.Clr_Region();
  }
  Close_Click()
  {
      this.Entry_View = false;
  }
  Clr_Region()
   {
       this.Region_.Region_Id = 0;
     
      this.Region_.Region_Name=""
      this.Region_.To_Time=""
      this.Region_.From_Time=""
      
     
  }
    
  display_Under_Role(Region_: Region)
  {      
         if (Region_) { return Region_.Region_Name;  }
  }
  Search_Region()
  {       
       
          this.issLoading=true;
          this.Region_Service_.Search_Region(this.Search_Region_).subscribe(Rows => {
              
                
          this.Region_Data=Rows[0];
          this.Total_Entries=this.Region_Data.length;
          if(this.Region_Data.length==0)
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
  Delete_Region(Region_Id_,index)
      {
           
      const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Do you want to delete ?',Type:"true",Heading:'Confirm'}});
      dialogRef.afterClosed().subscribe(result =>
         
      {
          
      if(result=='Yes')
      {
           
          this.issLoading=true;
          this.Region_Service_.Delete_Region(Region_Id_).subscribe(Delete_status => {
              
              // Delete_status=Delete_status[0];
              // Delete_status=Delete_status[0].DeleteStatus_.data[0];
          if(Number(Delete_status[0][0].Region_Id)>0){
          this.Region_Data.splice(index, 1);         
          const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Deleted',Type:"false"}});
          this.Search_Region();
      }else if(Number(Delete_status[0][0].Region_Id)== -2)
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
  Save_Region()
  {
     debugger 
      if (this.Region_.Region_Name == null || this.Region_.Region_Name == "" || this.Region_.Region_Name == undefined) {
      const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Enter the  Region', Type: "3" } });
      }
     
  else{
      this.issLoading=true;
      debugger
      this.Region_Service_.Save_Region(this.Region_).subscribe(Save_status => {  
        debugger
          Save_status=Save_status[0];
          console.log('Save_status: ', Save_status);
          
      if(Number(Save_status[0].Region_Id)>0)
      {
      const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Saved',Type:"false"}});
      this.Search_Region();
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
      this.Clr_Region();
   
  }
  }
  Edit_Region(Region_e:Region,index)
  {
        
  this.Entry_View=true;
  this.Region_=Region_e;
  this.Region_=Object.assign({},Region_e);
   

  }
  }
  
  
