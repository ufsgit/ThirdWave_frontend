import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User_Details_Service } from '../../../services/User_Details.Service';
import { DialogBox_Component } from '../DialogBox/DialogBox.component';
import { User_Details } from '../../../models/User_Details';
import { User_Menu_Selection } from '../../../models/User_Menu_Selection';
import { User_Type } from '../../../models/User_Type';
import { User_Status } from '../../../models/User_Status';
import { User_Department } from '../../../models/User_Department';
import { Branch } from '../../../models/Branch';
import { User_Role } from '../../../models/User_Role';
import { ApplicationStatus } from '../../../models/ApplicationStatus';
import { Application_Group } from '../../../models/Application_Group';
import {MatDialog} from '@angular/material';import { ROUTES,Get_Page_Permission } from '../../../components/sidebar/sidebar.component';
import { Department } from '../../../models/Department';
import * as io from "socket.io-client";
import { environment } from "../../../../environments/environment.js";
import { Country } from '../../../models/Country';
import { Region } from 'app/models/Region';
import { Region_Service } from 'app/services/Region.Service';
import { element } from 'protractor';
import { Department_University } from 'app/models/Department_University';
import { University_Service } from 'app/services/University.Service';
import { University } from 'app/models/University';
import { Commision_Mode } from 'app/models/Commision_Mode';
import { UserCombination } from 'app/models/UserCombination';
import { AgentManagement } from 'app/models/AgentManagement';
import { UserDetails } from 'aws-sdk/clients/transfer';
import { Subordinates } from 'app/models/Subordinates';
@Component({
selector: 'app-User_Details',
templateUrl: './User_Details.component.html',
styleUrls: ['./User_Details.component.css']
})
export class User_DetailsComponent implements OnInit {
User_Details_Data:User_Details[]
Search_User_Name_: string;
University_Data: University[];
University_Data_Filter: University[];

url = environment.NotificationPath ;//'http://regnewapi.trackbox.co.in:3646/'
private socket;
Region_List:Region[];
Search_Branch_: Branch = new Branch();

User_Menu_Selection_Data_Temp: User_Menu_Selection[] = [];
User_Menu_Selection_Data:User_Menu_Selection[]
User_Menu_Selection_:User_Menu_Selection= new User_Menu_Selection();
User_Details_:User_Details= new User_Details();
User_Type_:User_Type=new User_Type();
User_Type_Temp:User_Type=new User_Type();
User_Type_Data:User_Type[]
User_Id:number=0;
User_Details_Name_Search:string;

User_Role_Temp:User_Role=new User_Role();
User_Role_Data:User_Role[];
User_Role_:User_Role=new User_Role();

Department_Selection_Data_Temp:User_Department[]=[];
User_Selection_Data_Temp:Subordinates[]=[];

User_Department_:User_Department=new User_Department();
User_Department_Temp:User_Department=new User_Department();
User_Department_Data: User_Department[];
UserName_Details_Data: Subordinates[];
UserName_Details_Temp:Subordinates=new Subordinates();

User_Profile_Department_:Department=new Department();
Search_User_Profile_Department_:Department=new Department();
User_Profile_Department_Temp:Department=new Department();
User_Profile_Department_Data: Department[];
Department_Data: Department[];
AlltimeDepts_Temp: Department[];
Department_Temp:Department=new Department();



Commision_Mode_Data:Commision_Mode[]
Commision_Mode_Temp:Commision_Mode = new Commision_Mode();
Commision_Mode_: Commision_Mode = new Commision_Mode();

User_Status_Data: User_Status[]
User_Status_Temp:User_Status = new User_Status();
User_Status_: User_Status = new User_Status();
Search_User_Status_: User_Status = new User_Status();
Branch_Data: Branch[]
Branch_: Branch = new Branch();

Backup_User_: User_Details = new User_Details;
Backup_User_Temp: User_Details = new User_Details;
Backup_User_Data: User_Details[];
Backup_User_Data1: User_Details[];
Backup_User_Data_Filter: User_Details[]
    Filtered_User_Data: User_Details[] = [];
Entry_View:boolean=true;
myInnerHeight: number;  
myInnerHeightTwo: number;  
myTotalHeight:number;
EditIndex: number;
Total_Entries: number=0;
color = 'primary';
mode = 'indeterminate';
value = 50;
issLoading: boolean;
Permissions: any;

// Registration_Target:number;
// FollowUp_Target:number

User_Combinations: UserCombination[] ;
User_Combination_: UserCombination = new UserCombination;

User_Combinations_temp:UserCombination = new UserCombination;




agent_managements: AgentManagement[] ;
agent_management_: AgentManagement = new AgentManagement;

agent_managements_temp:AgentManagement = new AgentManagement;
User_Details_Edit:boolean;
Select_View:boolean=false;
Select_NameView:boolean=false;

Select_View_Department:boolean=false;

Select_View_User:boolean=false;


Select_All_timeView_Department:boolean=false;
Select_All_Country:boolean=false;
Select_View_All_Department:boolean=false;
Select_Save:boolean=false;
Select_Edit:boolean=false;
Select_Delete:boolean=false;
User_Details_Save:boolean;
User_Details_Delete:boolean;

View_Password:string;
Branch_Temp: Branch = new Branch();

Login_User:string="0";

   Available_Status_List: any[] = []; // Populate from your service
    User_Status_Change: boolean = false; // Set based on user permissions

Application_Status_:ApplicationStatus = new ApplicationStatus()

Application_Status_Temp:ApplicationStatus=new ApplicationStatus();
Application_Status_Data: ApplicationStatus[];

Application_Status_Data_Temp: ApplicationStatus[]; 

Department_university:Department_University[] = [];myInnerHeight3: number;
;

Default_Application_Status_Data: ApplicationStatus[];
Default_Application_Status_Temp:ApplicationStatus=new ApplicationStatus();
Default_Application_Status_:ApplicationStatus = new ApplicationStatus()

Application_Group_:Application_Group = new Application_Group()
Application_Group_Temp:Application_Group=new Application_Group();
Application_Group_Data: Application_Group[];
Application_Group_Data_Temp: Application_Group[];
Application_View:Boolean = false
All_time_view:Boolean = false
Deparment_management_view:Boolean = false

Country_time_view:Boolean = false
  User_Data: User_Details[] = [];
User_Details_Id_temp_:number;
tab_view: boolean = true;
profile_View: boolean = true;
Application_Tab_View: boolean = false;
Select_View_Application_Group:boolean=false;
Select_View_Application_Status:boolean=false;
Enable_Call_Button: boolean = true;
Enable_Call: number;
Country_Data:Country[]
  isChangingStatus: { [key: number]: boolean } = {};
/*** Added on 26-07-2024 */
statusChangeTracker: { [key: number]: number } = {}; // userId -> selected status ID
Search_UserCombination_: UserCombination = new UserCombination();
UserCombination_Temp: UserCombination = new UserCombination();
UserCombination_Data: UserCombination[]
UserCombination_: UserCombination = new UserCombination();


constructor(public User_Details_Service_:User_Details_Service,	public University_Service_: University_Service, private route: ActivatedRoute, private router: Router,public dialogBox: MatDialog,private Region_Service_:Region_Service,) { 
    this.socket = io(this.url, { transports: ["websocket"] });
	this.socket = io(this.url);
}
addbar(){
    this.Department_university.push(new Department_University({
        Department_Name:null,
        Country_Id: null,
        Country_Name:null,
        Department_Id: null
      }));
    console.log(' this.Department_university: ',  this.Department_university);

}
ngOnInit() 
{

    // this.Department_university.push(new Department_University({
    //     Department_Name:null,
    //     Country_Id: null,
    //     Country_Name:null,
    //     Department_Id: null
    //   }));
    console.log(' this.Department_university: ',  this.Department_university);

    console.log('this.User_Details_.Region: ', this.User_Details_.Region);
    this.User_Details_.Region=0
    this.Login_User=localStorage.getItem(("Login_User"));
    
this.Permissions = Get_Page_Permission(1);
if(this.Permissions==undefined || this.Permissions==null)
{
localStorage.removeItem('token');
this.router.navigateByUrl('Home_Page');
}
else
{
this.User_Details_Edit=this.Permissions.Edit;
this.User_Details_Save=this.Permissions.Save;
this.User_Details_Delete=this.Permissions.Delete;
this.Page_Load()

}
}
University_Typeahead(event: any,uni) {
    console.log('uni: ', uni);
    var Value = "";
    if (event.target.value == "") Value = "";
    else Value = event.target.value.toLowerCase();
    if (
      
        uni.Country_Id == 0 
  
    ) {
        const dialogRef = this.dialogBox.open(DialogBox_Component, {
            panelClass: "Dialogbox-Class",
            data: { Message: "Select Country ", Type: "3" },
        });
    } else if (
        this.University_Data == undefined ||
        this.University_Data.length == 0
        ) {
        console.log(' this.University_Data : ',  this.University_Data );
        this.issLoading = true;

        this.University_Service_.University_Typeahead_with_Country(
            uni.Country_Id,
            Value
        ).subscribe(
            (Rows) => {
                if (Rows != null) {
                    this.University_Data = Rows[0];
                    this.issLoading = false;
                    this.University_Data_Filter = [];
                    for (var i = 0; i < this.University_Data.length; i++) {
                        if (
                            this.University_Data[i].University_Name.toLowerCase().includes(
                                Value
                            )
                        )
                            this.University_Data_Filter.push(this.University_Data[i]);
                    }
                }
            },
            (Rows) => {
                this.issLoading = false;
            }
        );
    } else {
        this.University_Data_Filter = [];
        for (var i = 0; i < this.University_Data.length; i++) {
            if (
                this.University_Data[i].University_Name.toLowerCase().includes(Value)
            )
                this.University_Data_Filter.push(this.University_Data[i]);
        }
    }
}
display_University(University_e: University) {
    if (University_e) {
        return University_e.University_Name;
    }
}
Page_Load()
{
    
    this.myInnerHeight = (window.innerHeight);
    // this.myInnerHeight = this.myInnerHeight - 200;   
    this.myInnerHeight = this.myInnerHeight - 230;  
    this.Search_User_Role(
        
    );
    this.Search_Region();
    this.Load_Dropdowns();
    // this.Get_Direct_Agent_Combinations();
    this.Search_User_Details();
    this.Entry_View=false;
    this.Get_Menu_Status(1,this.Login_User); 
    // this.myInnerHeight = (window.innerHeight);
    // this.myTotalHeight=this.myInnerHeight - 100;
    // this.myTotalHeight=this.myTotalHeight-0;
    // this.myInnerHeight = this.myInnerHeight - 250;   

    // this.myInnerHeight = (window.innerHeight);
    // this.myTotalHeight=this.myInnerHeight -100;
    // this.myTotalHeight=this.myTotalHeight-0;
    // this.myInnerHeight = this.myInnerHeight - 250;
    this.myInnerHeight = (window.innerHeight);
    this.myTotalHeight=this.myInnerHeight -230;
    this.myTotalHeight=this.myTotalHeight- -130;
    this.myInnerHeight = this.myInnerHeight - 260;
    this.myInnerHeight3 = this.myInnerHeight - 50;
    this.myInnerHeightTwo = this.myInnerHeight - 330;
}
    // Your existing onStatusChange method stays the same
    onStatusChange(user: User_Details, newStatusId: number) {
        debugger
          console.log('user.User_Details_Name: ', user.User_Details_Name);
        console.log(`Changing status for ${user.User_Details_Name} to status ID: ${newStatusId}`);
      
        debugger
        // Don't proceed if same status selected
        if (newStatusId === user.Working_Status) {
   debugger
            return;
        }
                 console.log('(newStatusId: ', (newStatusId));
        // Prevent multiple simultaneous requests
        if (this.isChangingStatus[user.User_Details_Id]) {
            console.log('this.isChangingStatus: ', this.isChangingStatus);
            debugger
            return;
        }
        
        this.isChangingStatus[user.User_Details_Id] = true;
        console.log('his.isChangingStatus[user.User_Details_Id]: ', this.isChangingStatus[user.User_Details_Id]);
        debugger
        this.User_Details_Service_.Change_User_Status(user.User_Details_Id, newStatusId).subscribe(
            (response) => {
                debugger
                this.isChangingStatus[user.User_Details_Id] = false;
                
                if (response && response[0] && response[0][0]) {
                    const result = response[0][0];
                    
                    if (result.success) {
                        // Update local data
                        const userIndex = this.User_Data.findIndex(u => u.User_Details_Id === user.User_Details_Id);
                        if (userIndex > -1) {
                            this.User_Data[userIndex].User_Status_Name = result.new_status_name;
                            this.User_Data[userIndex].Working_Status = result.new_status_id;
                        }
                        
                        // Update filtered data
                        const filteredIndex = this.Filtered_User_Data.findIndex(u => u.User_Details_Id === user.User_Details_Id);
                        if (filteredIndex > -1) {
                            this.Filtered_User_Data[filteredIndex].User_Status_Name = result.new_status_name;
                            this.Filtered_User_Data[filteredIndex].Working_Status = result.new_status_id;
                        }
                        
                        // Update tracker
                        this.statusChangeTracker[user.User_Details_Id] = result.new_status_id;
                        
                        this.dialogBox.open(DialogBox_Component, {
                            panelClass: 'Dialogbox-Class',
                            data: {
                                Message: `${user.User_Details_Name}'s status updated to ${result.new_status_name}`,
                                Type: 'false'
                            }
                        });
                    } else {
                        // Reset dropdown to original value on error
                        this.statusChangeTracker[user.User_Details_Id] = user.Working_Status;
                        
                        this.dialogBox.open(DialogBox_Component, {
                            panelClass: 'Dialogbox-Class',
                            data: { Message: result.message || 'Failed to update status', Type: '2' }
                        });
                    }
                } else {
                    // Reset dropdown to original value on error
                    this.statusChangeTracker[user.User_Details_Id] = user.Working_Status;
                    
                    this.dialogBox.open(DialogBox_Component, {
                        panelClass: 'Dialogbox-Class',
                        data: { Message: 'Unexpected response format', Type: '2' }
                    });
                }
                this.Clr_User_Details();
                   this.Search_User_Details()
                   
            },
            
         
            (error) => {
                this.isChangingStatus[user.User_Details_Id] = false;
                // Reset dropdown to original value on error
                this.statusChangeTracker[user.User_Details_Id] = user.Working_Status;
                
                console.error('Error changing status:', error);
                this.dialogBox.open(DialogBox_Component, {
                    panelClass: 'Dialogbox-Class',
                    data: { Message: 'Error updating working status', Type: '2' }
                });
            }
        );
    }
Search_Region()
{       
     
        this.issLoading=true;
        this.Region_Service_.Search_Region('').subscribe(Rows => {
            
              
        this.Region_List=Rows[0];
        if(this.Region_List.length==0)
        {
             
            const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'No Region Found',Type:"3"}});
        }
         this.issLoading=false;
        },
        Rows => 
        {
            this.issLoading=false;
            const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Region Error Occured',Type:"2"}});
        });
}
Get_Menu_Status(Menu_id, Login_user_id)
{
    
this.issLoading = false;
this.User_Details_Service_.Get_Menu_Status(Menu_id,Login_user_id).subscribe(Rows => { 
    if (Rows[0][0]==undefined)
    {
        if(Menu_id==1)
        {
        localStorage.removeItem('token');
        this.router.navigateByUrl('Home_Page');
        }
    }  
    else
    if (Rows[0][0].View >0) 
    {      
        
        if(Menu_id==1)
        {
            
         

            this.Permissions=Rows[0][0];
            if(this.Permissions==undefined || this.Permissions==null)
                {
                    localStorage.removeItem('token');
                    this.router.navigateByUrl('Home_Page');
                }
               
                this.User_Details_Edit=this.Permissions.Edit;
                this.User_Details_Save=this.Permissions.Save;
                this.User_Details_Delete=this.Permissions.Delete;
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
this.profile_View = true;
this.Application_Tab_View = false
this.Clr_User_Details();
this.addbar()
}
Close_Click()
{
this.Clr_User_Details();
this.Entry_View = false;
this.profile_View = true;
this.Application_Tab_View = false
}
Password_View_Click(){
this.View_Password=this.User_Details_.Password;


}
trackByFn(index, item) 
{
return index;
}
 Clr_User_Details()
 {
      
    this.Select_View=false;
    this.Select_NameView = false;
    this.Select_View_Department=false;
    this.Select_View_User = false;
    this.Select_All_timeView_Department=false;
    this.Select_All_Country=false;

    
    this.Select_View_All_Department=false;
    this.Select_View_Application_Group=false;
    this.Select_View_Application_Status=false;
    this.Select_Edit=false;
    this.Select_Save=false;
    this.Select_Delete=false;
    this.View_Password="";
this.User_Details_.User_Details_Id=0;
this.User_Details_.User_Details_Name="";
this.User_Details_.Password="";
this.User_Details_.Working_Status=0;
this.User_Details_.User_Type=0;
this.User_Details_.Role_Id=0;
this.User_Details_.Address1="";
this.User_Details_.Address2="";
this.User_Details_.Address3="";
this.User_Details_.Address4="";
this.User_Details_.Pincode="";
this.User_Details_.Mobile="";
this.User_Details_.Region=0;
this.User_Details_.Email="";
this.User_Details_.Registration_Target=null
this.User_Details_.FollowUp_Target=null
this.User_Details_.Influencer_Count=null;

if(this.User_Type_Data!=null && this.User_Type_Data != undefined)
this.User_Type_=this.User_Type_Data[0];

if(this.User_Status_Data!=null && this.User_Status_Data != undefined)
this.User_Status_=this.User_Status_Data[0];

if(this.Commision_Mode_Data!=null && this.Commision_Mode_Data != undefined)
    this.Commision_Mode_=this.Commision_Mode_Data[0];

if(this.User_Role_Data!=null && this.User_Role_Data != undefined)
this.User_Role_=this.User_Role_Data[0];

if(this.Branch_Data!=null && this.Branch_Data != undefined)
this.Branch_=this.Branch_Data[0];

if(this.Default_Application_Status_Data!=null && this.Default_Application_Status_Data != undefined)
this.Default_Application_Status_=this.Default_Application_Status_Data[0];

if(this.User_Profile_Department_Data!=null && this.User_Profile_Department_Data != undefined)
this.User_Profile_Department_=this.User_Profile_Department_Data[0];

if(this.User_Combinations!=null && this.User_Combinations != undefined)
    this.User_Combination_=this.User_Combinations[0];
    

if(this.agent_managements!=null && this.agent_managements != undefined)
    this.agent_management_=this.agent_managements[0];

for(var m=0;m<this.User_Department_Data.length;m++)
{
this.User_Department_Data[m].Check_Box_VIew_All= false;
this.User_Department_Data[m].Check_Box_View= false;
}

for(var m=0;m<this.UserName_Details_Data.length;m++)
    {
    this.UserName_Details_Data[m].Check_Box_View_New= false;
    }

if(this.User_Menu_Selection_Data!=undefined)
    //&& this.User_Menu_Selection_Data!=null&&this.User_Menu_Selection_Data!=""
{
for(var i=0;i<this.User_Menu_Selection_Data.length;i++)
{
   this.User_Menu_Selection_Data[i].IsDelete=false;
   this.User_Menu_Selection_Data[i].IsEdit=false;
   this.User_Menu_Selection_Data[i].IsSave=false;
   this.User_Menu_Selection_Data[i].IsView=false;
}
}
if(this.Application_Group_Data!=undefined){
    for(var n=0;n<this.Application_Group_Data.length;n++)
{
    this.Application_Group_Data[n].View= false;
    this.Application_Group_Data[n].View= false;
}
}
if(this.Application_Status_Data!=undefined){
    for(var q=0;q<this.Application_Status_Data.length;q++)
{
    this.Application_Status_Data[q].View= false;
    this.Application_Status_Data[q].View= false;
}
}
if(this.Department_Data!=undefined){
    for(var r=0;r<this.Department_Data.length;r++)
{
    this.Department_Data[r].checkbox_view= false;
    this.Department_Data[r].checkbox_view= false;
}
}
this.Application_View = false
this.All_time_view = false
this.Deparment_management_view = false

this.Country_time_view=false;
for(var s=0;s<this.Country_Data.length;s++)
{
    this.Country_Data[s].Check_Box=false;		   
}
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
Department_View_Click()
{ 
 for(var i=0;i<this.User_Department_Data.length;i++)
{
    if(this.Select_View_Department==false)
        this.User_Department_Data[i].Check_Box_View=true;
    else
        this.User_Department_Data[i].Check_Box_View=false;
}
}

UserName_View_Click()
{ 
 for(var i=0;i<this.UserName_Details_Data.length;i++)
{
    if(this.Select_View_Department==false)
        this.UserName_Details_Data[i].Check_Box_View_New=true;
    else
        this.UserName_Details_Data[i].Check_Box_View_New=false;
}
}


Department_All_TimeView_Click()
{ 
 for(var i=0;i<this.Department_Data.length;i++)
{
    if(this.Select_All_timeView_Department==false)
        this.Department_Data[i].checkbox_view=true;
    else
        this.Department_Data[i].checkbox_view=false;
}
}

Country_All_Click()
{ 
   ;
 for(var i=0;i<this.Country_Data.length;i++)
{
   ;
    if(this.Select_All_Country==false)
        this.Country_Data[i].checkbox_view=true;
    else
        this.Country_Data[i].checkbox_view=false;
}
}


Department_View_All_Click()
{
 
 for(var i=0;i<this.User_Department_Data.length;i++)
{
    if(this.Select_View_All_Department==false)
        this.User_Department_Data[i].Check_Box_VIew_All=true;
    else
        this.User_Department_Data[i].Check_Box_VIew_All=false;
}
}
Application_Group_View_Click()
{ 
 for(var i=0;i<this.Application_Group_Data.length;i++)
{
    if(this.Select_View_Application_Group==false)
        this.Application_Group_Data[i].View=true;
    else
        this.Application_Group_Data[i].View=false;
}
}
Application_Status_View_Click()
{ 
 for(var i=0;i<this.Application_Status_Data.length;i++)
{
    if(this.Select_View_Application_Status==false)
        this.Application_Status_Data[i].View=true;
    else
        this.Application_Status_Data[i].View=false;
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
Search_User_Role() 
    {
    this.User_Details_Service_.Search_User_Role('').subscribe(Rows => {
    this.User_Role_Data = Rows[0];
    this.User_Role_Temp.User_Role_Id=0;
    this.User_Role_Temp.User_Role_Name="Select";
    this.User_Role_Data.unshift(this.User_Role_Temp);
    this.User_Role_ = this.User_Role_Data[0];
debugger
    this.Country_Data = Rows[1].slice();
    
    },
    Rows => 
    {
    //  const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
    });
    }
Load_Dropdowns() 
    {
         debugger
    this.User_Details_Service_.Get_Users_Load_Data().subscribe(Rows =>
    {
        debugger
    this.User_Type_Data = Rows.User_Type;
   this.User_Menu_Selection_Data =  Rows.User_Menu_Selection; 
   this.User_Status_Data = Rows.User_Status; 
   this.Branch_Data = Rows.Branch;
   this.Commision_Mode_Data = Rows.User_Commision   ;
   this.User_Department_Data = Rows.User_Department;
   this.UserName_Details_Data = Rows.User_Details_Name;
   this.User_Profile_Department_Data=Rows.Profile_Department;
   this.User_Combinations=Rows.User_Combination;
   this.agent_managements=Rows.agent_management;
   console.log('User_Combination: ', Rows.User_Combination);
   console.log('User_Combinations: ', this.User_Combinations);
   this.Department_Data=[...Rows.Profile_Department];
   this.Application_Group_Data=Rows.Application_Groups;
   this.Default_Application_Status_Data=[...Rows.Application_Statuses];
   this.Application_Status_Data= [...Rows.Application_Statuses];
   this.Enable_Call = Number(Rows.Call_Status[0].Settings_Value);
   if (this.Enable_Call == 1) this.Enable_Call_Button = true;
   else this.Enable_Call_Button = false;
   
   

   this.User_Profile_Department_Temp.Department_Id = 0;
   this.User_Profile_Department_Temp.Department_Name = "Select";
   this.User_Profile_Department_Data.unshift(this.User_Profile_Department_Temp);
   this.User_Profile_Department_ = this.User_Profile_Department_Data[0];
   this.Search_User_Profile_Department_ = this.User_Profile_Department_Data[0];

   this.User_Combinations_temp.UserCombination_Id = 0;
   this.User_Combinations_temp.UserCombination_Name = "Select";
//    console.log('this.User_Combinations_temp.UserCombination_Name : ', this.User_Combinations_temp.UserCombination_Name );
   this.User_Combinations.unshift(this.User_Combinations_temp);
   this.User_Combination_ = this.User_Combinations[0];
//    console.log('User_Combination_: ', this.User_Combination_);
   this.Search_UserCombination_ = this.User_Combinations[0];
   console.log('Search_UserCombination_: ', this.Search_UserCombination_);

//    this.Search_User_Profile_Department_ = this.User_Combinations[0];


this.agent_managements_temp.AgentManagement_Id = 0;
this.agent_managements_temp.AgentManagement_Name = "Select";
//    console.log('this.agent_managements_temp.UserCombination_Name : ', this.agent_managements_temp.UserCombination_Name );
this.agent_managements.unshift(this.agent_managements_temp);
this.agent_management_ = this.agent_managements[0];

   this.User_Type_Temp.User_Type_Id = 0;
   this.User_Type_Temp.User_Type_Name = "Select";
   this.User_Type_Data.unshift(this.User_Type_Temp);
   this.User_Type_ = this.User_Type_Data[0];

   this.Default_Application_Status_Temp.Application_status_Id = 0;
   this.Default_Application_Status_Temp.Application_Status_Name = "Select";
   this.Default_Application_Status_Data.unshift(Object.assign({},this.Default_Application_Status_Temp));
   this.Default_Application_Status_ = Object.assign({},this.Default_Application_Status_Data[0]);
   


   this.Branch_Temp.Branch_Id=0;
   this.Branch_Temp.Branch_Name="Select";
   this.Branch_Data.unshift(this.Branch_Temp);
   this.Branch_ = this.Branch_Data[0];

   this.Search_Branch_ = this.Branch_Data[0];

   this.User_Status_Temp.User_Status_Id=0;
   this.User_Status_Temp.User_Status_Name="Select";
   this.User_Status_Data.unshift(this.User_Status_Temp);
   this.User_Status_ = this.User_Status_Data[0];
   this.Search_User_Status_ = this.User_Status_Data[0];


   this.Commision_Mode_Temp.Commision_Mode_Id=0;
   this.Commision_Mode_Temp.Commision_Mode_Name="Select";
   this.Commision_Mode_Data.unshift(this.Commision_Mode_Temp);
   this.Commision_Mode_ = this.Commision_Mode_Data[0];

//    this.Application_Group_Temp.Application_Group_Id=0;
//    this.Application_Group_Temp.Application_Group_Name="Select";
//    this.Application_Group_Data.unshift(this.Application_Group_Temp);
//    this.Application_Group_ = this.Application_Group_Data[0];

//    this.Application_Status_Temp.Application_status_Id=0;
//    this.Application_Status_Temp.Application_Status_Name="Select";
//    this.Application_Status_Data.unshift(this.Application_Status_Temp);
//    this.Application_Status_ = this.Application_Status_Data[0];
    },
  Rows => { 
 const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}}); });
}
selectRegion(data: Region) {
    console.log('Region: ', data);
    this.User_Details_.Region= data.Region_Id
    // Check if Region_Ids array is empty
  

    console.log('this.Holiday_: ', this.User_Details_);
}

isRegionCheckd(data: Region): boolean {
    return this.User_Details_.Region==  data.Region_Id
 
}
Search_User_Details()
{
    
  var Search_Branch_Id = 0 ,Search_User_Status_Id= 0,Search_Department_Id=0,Search_User_Combination_Id = 0;

this.issLoading=true;
if(this.Search_User_Name_==undefined)
this.Search_User_Name_="";
if(this.Search_Branch_!=undefined && this.Search_Branch_!=null )
    Search_Branch_Id=this.Search_Branch_.Branch_Id;
if(this.Search_User_Profile_Department_!=undefined && this.Search_User_Profile_Department_!=null )
    Search_Department_Id=this.Search_User_Profile_Department_.Department_Id;
if(this.Search_User_Status_!=undefined && this.Search_User_Status_!=null )
    Search_User_Status_Id=this.Search_User_Status_.User_Status_Id;
if(this.Search_UserCombination_!=undefined && this.Search_UserCombination_!=null )
    Search_User_Combination_Id=this.Search_UserCombination_.UserCombination_Id;

this.User_Details_Service_.Search_User_Details(this.Search_User_Name_,Search_Branch_Id,Search_Department_Id,Search_User_Status_Id,Search_User_Combination_Id).subscribe(Rows => {
    
 this.User_Details_Data=Rows.returnvalue.Leads;
this.Total_Entries=this.User_Details_Data.length;
if(this.User_Details_Data.length==0)
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


Delete_User_Details(User_Details_Id,index)
{
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Do you want to delete ?',Type:"true",Heading:'Confirm'}});
dialogRef.afterClosed().subscribe(result =>
{
if(result=='Yes')
{
this.issLoading=true;

this.User_Details_Service_.Delete_User_Details(User_Details_Id).subscribe(Delete_status => {
    
if(Delete_status[0][0].User_Details_Id_>0){
this.User_Details_Data.splice(index, 1);
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Deleted',Type:"false"}});
}
else if(Delete_status[0][0].User_Details_Id_ == -2)
{
    const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Cannot be deleted,the user is used with FollowUp',Type:"2"}});
}
else
{
//this.User_Details_Data.splice(index, 1);
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
Save_Duplicate_User_Details()
{
    
   // this.duplicate_user = true;
    this.User_Details_.User_Details_Id=0;
    this.User_Details_.User_Details_Name=null;
    this.User_Details_.Password=null;
   //this.Save_User_Details();
}
Save_User_Details()
{
    debugger  
    var Menu_Status=false;
    for (var i = 0; i < this.User_Menu_Selection_Data.length; i++)
    {
        if(this.User_Menu_Selection_Data[i].IsView== true)
        Menu_Status=true
    } 
    var Department_Status=false;
    for(var m=0;m<this.User_Department_Data.length;m++)
    {
   if(this.User_Department_Data[m].Check_Box_View== true)  
        Department_Status=true
    }


    var UserName_Status=false;
    for(var m=0;m<this.UserName_Details_Data.length;m++)
    {
   if(this.UserName_Details_Data[m].Check_Box_View_New== true)  
        UserName_Status=true;
   this.User_Details_.subordinaters_length=1
    }

    if(UserName_Status==false){this.User_Details_.subordinaters_length=0}


        // else
        // {
        //     this.User_Details_.subordinaters_length=1;
        // }


var Default_Status=false,application_status_tick = false;
    if(this.Application_View == true){    
        for (var k = 0; k < this.Application_Status_Data.length; k++)
        {
          if(this.Application_Status_Data[k].View== true){
            application_status_tick = true
            if(this.Default_Application_Status_.Application_status_Id == this.Application_Status_Data[k].Application_status_Id )
            {    
              Default_Status=true
            }  
        }   
        }
    }
  
    
    if (Menu_Status==false)
    {
   const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Select Atleast One Menu', Type: "3" } });
   return;
   }

   
//    else if (this.Application_View == true && application_status_tick==false)
//    {
//        const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Select Atleast one Application Status' , Type: "3" } });
//        return;
//    }
//    else if (this.Application_View == true && Default_Status==false)
//    {
//        const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Select Same Application Status from Default status that selected in Application Status' , Type: "3" } });
//        return;
//    }


   else if (Department_Status==false)
    {
   const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Select Atleast One Department', Type: "3" } });
   return;
   }
//    else if (UserName_Status==false)
//     {
//    const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Select Atleast One Subordinates', Type: "3" } });
//    return;
//    }

   else if(this.User_Details_.User_Details_Name==undefined||this.User_Details_.User_Details_Name==null||this.User_Details_.User_Details_Name=="")
   {
    const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Enter the User Name', Type: "3" } });
    return;
   }
   else if(this.User_Details_.Password==undefined||this.User_Details_.Password==null||this.User_Details_.Password=="")
   {
    const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Enter the Password', Type: "3" } });
    return;
   }
   else if(this.User_Details_.Email==undefined||this.User_Details_.Email==null||this.User_Details_.Email=="")
   {
    const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Enter Email', Type: "3" } });
    return;
   }
   else if(this.User_Details_.Mobile==undefined||this.User_Details_.Mobile==null||this.User_Details_.Mobile=="")
   {
    const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Enter the Mobile Number', Type: "3" } });
    return;
   }
    else if (this.User_Type_ == undefined || this.User_Type_ == null || this.User_Type_.User_Type_Id == undefined || this.User_Type_.User_Type_Id==0) {
    const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Select User Type', Type: "3" } });
    return;
    }
    else if (this.User_Status_ == undefined || this.User_Status_ == null || this.User_Status_.User_Status_Id == undefined || this.User_Status_.User_Status_Id==0) {
    const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Select User Status', Type: "3" } });
    return;
     }

    //  else if (this.Commision_Mode_ == undefined || this.Commision_Mode_ == null || this.Commision_Mode_.Commision_Mode_Id == undefined || this.Commision_Mode_.Commision_Mode_Id==0) {
    //     const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Select Commission Mode', Type: "3" } });
    //     return;
    //      }
    else if (this.Branch_ == undefined || this.Branch_ == null || this.Branch_.Branch_Id == undefined || this.Branch_.Branch_Id==0) {
        const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Select Branch', Type: "3" } });
        return;
    }
    else if (this.User_Role_ == undefined || this.User_Role_ == null || this.User_Role_.User_Role_Id == undefined || this.User_Role_.User_Role_Id==0) {
        const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Select User Role', Type: "3" } });
        return;
    }

    else if (this.User_Profile_Department_ == undefined || this.User_Profile_Department_ == null || this.User_Profile_Department_.Department_Id == undefined || this.User_Profile_Department_.Department_Id==0) {
        
        const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Select Department', Type: "3" } });
        return;
    }
    // else if (this.User_Combination_ == undefined || this.User_Combination_ == null || this.User_Combination_.UserCombination_Id == undefined || this.User_Combination_.UserCombination_Id==0) {
        
    //     const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Select User Combination', Type: "3" } });
    //     return;
    // }
    else if (this.agent_management_ == undefined || this.agent_management_ == null || this.agent_management_.AgentManagement_Id == undefined ) {
        
        const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Select Agent Management ', Type: "3" } });
        return;
    }
    // else if(this.User_Details_.Influencer_Count==undefined||this.User_Details_.Influencer_Count==null||this.User_Details_.Influencer_Count==0)
    //     {
    //      const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Enter the Limit of Influencer', Type: "3" } });
    //      return;
    //     }
    
    if (this.User_Status_.User_Status_Id ==2 ||this.User_Status_.User_Status_Id ==3 )
   
    {
        if (this.Backup_User_.User_Details_Id == undefined || this.Backup_User_.User_Details_Id == null|| this.Backup_User_.User_Details_Id == 0 || this.Backup_User_ == null || this.Backup_User_ == undefined ) {
            const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Select Backup User', Type: "3" } });
            return;
            }
    }

if(this.Enable_Call_Button == true){
    if(this.User_Details_.FollowUp_Target==undefined||this.User_Details_.FollowUp_Target==null||this.User_Details_.FollowUp_Target==0)
    {
     const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Enter Extension', Type: "3" } });
     return;
    }
}
   

    // if(this.User_Details_.Mobile!=''&&this.User_Details_.Mobile!=null&&this.User_Details_.Mobile!=undefined)
    // {
    //     if(this.User_Details_.Mobile.toString().length!=10 )
    //     {
    //         const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class'  ,data:{Message:'Enter valid Mobile',Type:"3"}});
    //         return
    //     }
    // } 

    

    if(this.User_Details_.Mobile.toString().length!=10 )
    {
        const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class'  ,data:{Message:'Enter valid Phone',Type:"3"}});
        return;
  
    }

    else{
        
        
        var Appln_view = false,alltime_view = false,countrytime_view=false,Deparmentmanagement_view= false;
        this.User_Details_.User_Type = this.User_Type_.User_Type_Id;
        this.User_Details_.Working_Status= this.User_Status_.User_Status_Id;
        this.User_Details_.User_Type = this.User_Type_.User_Type_Id;
        this.User_Details_.Branch_Id=this.Branch_.Branch_Id;
        this.User_Details_.Commision_Mode_Id=3;
        this.User_Details_.Role_Id=this.User_Role_.User_Role_Id;
        this.User_Details_.Department_Id=this.User_Profile_Department_.Department_Id;
        this.User_Details_.Department_Name=this.User_Profile_Department_.Department_Name;
        
        debugger
        this.User_Details_.UserCombination_Id=2;
        
        this.User_Details_.UserCombination_Name=this.User_Combination_.UserCombination_Name;

        this.User_Details_.AgentManagement_Id=this.agent_management_.AgentManagement_Id;
        
        this.User_Details_.AgentManagement_Name=this.agent_management_.AgentManagement_Name;
        this.User_Details_.Backup_User_Id=this.Backup_User_.User_Details_Id;
        this.User_Details_.Backup_User_Name=this.Backup_User_.User_Details_Name;

        let shadowCopy = [...this.Department_university];

        // Applying the filter operation on the shadow copy
        let filteredShadowCopy = shadowCopy.filter(item => 
            item.Department_Id !== null && 
            item.Country_Id !== null && 
            item.University_Id !== null
        );
        
        // Assigning the filtered shadow copy back to the original property
        this.Department_university = filteredShadowCopy;
        this.User_Details_.university=this.Department_university;


        // this.User_Details_.university=this.Department_university;

        this.User_Details_.Default_Application_Status_Id=this.Default_Application_Status_.Application_status_Id;
        this.User_Details_.Default_Application_Status_Name=this.Default_Application_Status_.Application_Status_Name;
        this.User_Menu_Selection_Data_Temp=[]; 
        debugger
        if(this.Deparment_management_view == true) Deparmentmanagement_view = true ;

        if(this.Application_View == true) Appln_view = true ;
        if(this.All_time_view == true) alltime_view = true ;
        if(this.Country_time_view == true) countrytime_view = true ;
        this.User_Details_.Application_View = Appln_view;
        this.User_Details_.All_Time_Department_View = alltime_view;

        this.User_Details_.Deparment_management_view = Deparmentmanagement_view;

        this.User_Details_.All_Time_Country_View = countrytime_view;
        for (var i = 0; i< this.User_Menu_Selection_Data.length; i++) 
        {
        if (Boolean(this.User_Menu_Selection_Data[i].IsView) == true||Boolean(this.User_Menu_Selection_Data[i].IsSave) == true
        ||Boolean(this.User_Menu_Selection_Data[i].IsEdit) == true||Boolean(this.User_Menu_Selection_Data[i].IsDelete) == true) 
            {
            this.User_Menu_Selection_Data_Temp.push(this.User_Menu_Selection_Data[i]);
            }
        }
        this.User_Details_.User_Menu_Selection_Data = this.User_Menu_Selection_Data_Temp;

 
        this.Department_Selection_Data_Temp=[];
        
        for (var m = 0; m < this.User_Department_Data.length; m++) 
        {
            if (Boolean(this.User_Department_Data[m].Check_Box_VIew_All) == true|| Boolean(this.User_Department_Data[m].Check_Box_View) == true)
            {
                this.Department_Selection_Data_Temp.push(this.User_Department_Data[m]);
            }
        }
        this.User_Details_.User_Department_Data = this.Department_Selection_Data_Temp;



        this.User_Selection_Data_Temp=[];
        
        for (var m = 0; m < this.UserName_Details_Data.length; m++) 
        {
            if (Boolean(this.UserName_Details_Data[m].Check_Box_View_New) == true)
            {
                this.User_Selection_Data_Temp.push(this.UserName_Details_Data[m]);
            }
        }
        this.User_Details_.UserName_Details_Data = this.User_Selection_Data_Temp;

        debugger
    if(this.User_Selection_Data_Temp.length==0)
        {
            this.UserName_Details_Temp.User_Details_Id = 0;
            this.UserName_Details_Temp.User_Details_Name = '';
            this.UserName_Details_Data.push(Object.assign({}, this.UserName_Details_Temp));
        //    this.User_Details_.subordinaters_length=0;
        this.User_Details_.UserName_Details_Data = this.UserName_Details_Data;
        }


        this.Application_Group_Data_Temp=[]; 
        for (var i = 0; i< this.Application_Group_Data.length; i++) 
        {
        if (Boolean(this.Application_Group_Data[i].View) == true) 
            {
                this.Application_Group_Data_Temp.push(this.Application_Group_Data[i]);
            }
        }
        this.User_Details_.User_Application_Group = this.Application_Group_Data_Temp;
        this.Application_Status_Data_Temp=[]; 
        for (var i = 0; i< this.Application_Status_Data.length; i++) 
        {
        if (Boolean(this.Application_Status_Data[i].View) == true) 
            {
            this.Application_Status_Data_Temp.push(this.Application_Status_Data[i]);
            }
        }
        this.User_Details_.User_Application_Status = this.Application_Status_Data_Temp;
        this.AlltimeDepts_Temp=[]; 
        for (var i = 0; i< this.Department_Data.length; i++) 
        {
        if (Boolean(this.Department_Data[i].checkbox_view) == true) 
            {
            this.AlltimeDepts_Temp.push(this.Department_Data[i]);
            }
        }
        this.User_Details_.All_Time_Departments = this.AlltimeDepts_Temp;
        var Country_Array = [];
		for (var i = 0; i < this.Country_Data.length; i++) {
			if (this.Country_Data[i].checkbox_view == true)
                Country_Array.push(this.Country_Data[i]);
        }
        this.User_Details_.Countries = Country_Array
    this.issLoading=true;
   debugger
    this.User_Details_Service_.Save_User_Details(this.User_Details_).subscribe(Save_status => {
        debugger
       
    if(Number(Save_status[0].User_Details_Id_)>0)
    {
    const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Saved',Type:"false"}});
    this.Search_User_Details();
    //notification emits
        var message = {
            Notification_Type_Name:Save_status[0].Notification_Type_Name_,
            To_User: Save_status[0].User_Details_Id_

        };
        this.socket.emit("new-message", message);
    }
    else if(Number(Save_status[0].User_Details_Id_)==-1){
        const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'User Limit Exceeded',Type:"2"}});
    }

    else if(Number(Save_status[0].User_Details_Id_)==-2){
        const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'University Already Assigned to Another User',Type:"3"}});
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
 this.Clr_User_Details();
}
}
countryChange(deptId: number, countryIndex: number): void {
    console.log('deptId: ', deptId);
    console.log('this.User_Department_Data: ', this.User_Department_Data);
  
    // Assuming User_Department_Data is your original data array
    const updatedData = this.User_Department_Data.map((department) => {
      if (department.Department_Id === deptId) {
        // Create a shallow copy of the department
        const updatedDepartment = { ...department };
  
        // Create a new array with distinct copies of the countryData objects
        updatedDepartment.countryData = department.countryData.map((country, index) => {
          // Create a shallow copy of the country
          const updatedCountry = { ...country };
  
          // Update the Check_Box property for the specific country
          if (index === countryIndex) {
            updatedCountry.Check_Box = !updatedCountry.Check_Box;
          }
  
          return updatedCountry;
        });
  
        // Update the specific department in the array
        return updatedDepartment;
      } else {
        return department; // For other departments, keep them unchanged
      }
    });
  
    // Update the original array with the modified data
    console.log('updatedData: ', updatedData);
    this.User_Department_Data = updatedData;
  }
  
Get_User_Details_Edit(User_Details_Id) 

    {
        debugger
        this.issLoading=true;
    this.User_Details_Service_.Get_User_Details_Edit(User_Details_Id).subscribe(Rows => 
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

    this.UserName_Details_Data = Rows[0].User_Name

    for(var i=0;i<this.UserName_Details_Data.length;i++)
        {
        if (this.UserName_Details_Data[i].Check_Box_View_New.toString()=='1')
        {
        this.UserName_Details_Data[i].Check_Box_View_New=true
        }
        else 
        {
        this.UserName_Details_Data[i].Check_Box_View_New=false
        }
        
        }
debugger
    this.User_Department_Data = Rows[0].Department;
    for(var i=0;i<this.User_Department_Data.length;i++)
    {
    if (this.User_Department_Data[i].Check_Box_VIew_All.toString()=='1')
    {
    this.User_Department_Data[i].Check_Box_VIew_All=true
    }
    else 
    {
    this.User_Department_Data[i].Check_Box_VIew_All=false
    }
    if (this.User_Department_Data[i].Check_Box_View.toString()=='1')
    {

    this.User_Department_Data[i].Check_Box_View=true
    }
    else 
    {
    this.User_Department_Data[i].Check_Box_View=false
    }
    let countryData = this.Country_Data.map(country => ({
        Country_Id: country.Country_Id,
        Country_Name: country.Country_Name,
        Check_Box: false
      }));
    
      // If there's an existing value with Check_Box true, update the countryData
      const existingCountryData = this.User_Department_Data[i].countryData;
      if (existingCountryData && existingCountryData.length > 0) {
        countryData = countryData.map(country => {
          const existingCountry = existingCountryData.find(
            existing => existing.Country_Id === country.Country_Id
          );
          if (existingCountry) {
            country.Check_Box = existingCountry.Check_Box;
          }
          return country;
        });
      }
    
      this.User_Department_Data[i].countryData = countryData;

        
    }
    this.Department_university=Rows[0].User_University
    this.Application_Group_Data = Rows[0].Applic_Group;
    for(var i=0;i<this.Application_Group_Data.length;i++)
    {
        
        if (this.Application_Group_Data[i].View.toString()=='1')
        {
        this.Application_Group_Data[i].View=true
        }
        else 
        {
        this.Application_Group_Data[i].View=false
        }
    }
    this.Application_Status_Data = Rows[0].Applic_Status;
    for(var i=0;i<this.Application_Status_Data.length;i++)
    {
        if (this.Application_Status_Data[i].View.toString()=='1')
        {
        this.Application_Status_Data[i].View=true
        }
        else 
        {
        this.Application_Status_Data[i].View=false
        }
    }
    
    this.Department_Data = Rows[0].All_time_dept
    for(var k=0;k<this.Department_Data.length;k++)
    {
        if (this.Department_Data[k].checkbox_view.toString()=='1')
        {
            this.Department_Data[k].checkbox_view=true
        }
        else 
        {
            this.Department_Data[k].checkbox_view=false
        }
    }
    var temp_Countries = Rows[0].User_Countries;
    for (var i = 0; i < this.Country_Data.length; i++) {
        this.Country_Data[i].checkbox_view = false;
        for (var j = 0; j < temp_Countries.length; j++) {
            if (
                temp_Countries[j].Country_Id ==
                this.Country_Data[i].Country_Id
            )
                this.Country_Data[i].checkbox_view = true;
        }
    }
    this.issLoading=false;
    },
  Rows => { 
    this.issLoading=false;
 const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}}); });

    }



    User_Role_Change(User_Role_Id)
    {
debugger
this.Get_User_Role_Edit(User_Role_Id)
    }


    Get_User_Role_Edit(User_Role_Id) 

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



    removeuniversity(indexToRemove){
        console.log('indexToRemove: ', indexToRemove);
        this.Department_university.splice(indexToRemove, 1)
        console.log(this.Department_university);
    }
    addCountryDepartment(dept){
       
        let deptarment: User_Department | undefined = this.User_Department_Data.find(element => element.Department_Id == dept);
        let country=[...this.Country_Data]
        for (var i = 0; i < country.length; i++) {
            country[i].Check_Box = false;
         
        }
        deptarment.countryData=country
        console.log('deptarment: ', deptarment);
        
        // console.log(this.countryData);
        
    }
    console(){
        console.log(' this.User_Department_Data: ',  this.Department_university);

    }
    onDepartmentChange(uni: Department_University) {
        const selectedDepartment = this.User_Department_Data.find(dept => dept.Department_Id === uni.Department_Id);
        if (selectedDepartment) {
          uni.Department_Name = selectedDepartment.Department_Name;
        }
      }
    
      onCountryChange(uni: Department_University) {
        const selectedCountry = this.Country_Data.find(country => country.Country_Id === uni.Country_Id);
        if (selectedCountry) {
          uni.Country_Name = selectedCountry.Country_Name;
        }
        uni.University_Id=0
        this.University_Data=[]
      }
      
      onUniversityChange(uni: Department_University) {
        console.log('uni: ', uni);
          console.log('this.University_Data: ', this.University_Data);
        const selectedUniversity= this.University_Data.find(University => University.University_Id == uni.University_Id);
        console.log('selectedUniversity: ', selectedUniversity);
        if (selectedUniversity) {
          uni.University_Name = selectedUniversity.University_Name;
        }
        console.log(uni);
      }
      
Edit_User_Details(User_Details_e:User_Details,index)
{
this.Entry_View=true;
this.profile_View = true;
this.Application_Tab_View = false
this.User_Details_=User_Details_e;
this.User_Id=User_Details_e.User_Details_Id;
this.User_Details_Id_temp_=User_Details_e.User_Details_Id;
this.User_Details_=Object.assign({},User_Details_e);



if(this.User_Details_.Deparment_management_view1==1)
    {
        this.Deparment_management_view=true
    }

if (this.User_Details_.Application_View==true)
    this.Application_View= true;  
else this.Application_View= false;
if (this.User_Details_.All_Time_Department_View==true)
    this.All_time_view= true;  
else this.All_time_view= false;


if (this.User_Details_.Deparment_management_view==true)
    this.Deparment_management_view= true;  
else this.Deparment_management_view= false;

if (this.User_Details_.All_Time_Country_View==true)
    this.Country_time_view= true;  
else this.Country_time_view= false;
debugger
this.Get_User_Details_Edit(this.User_Details_.User_Details_Id);
// this.Get_User_Role_Edit(this.User_Details_.Role_Id)


for (var i = 0; i < this.User_Type_Data.length; i++) {
    if (this.User_Details_.User_Type == this.User_Type_Data[i].User_Type_Id)
    this.User_Type_=this.User_Type_Data[i];
}
for (var i = 0; i < this.User_Status_Data.length; i++) {
    if (this.User_Details_.Working_Status == this.User_Status_Data[i].User_Status_Id)
    this.User_Status_=this.User_Status_Data[i];
}

for (var i = 0; i < this.Commision_Mode_Data.length; i++) {
    if (this.User_Details_.Commision_Mode_Id == this.Commision_Mode_Data[i].Commision_Mode_Id)
    this.Commision_Mode_=this.Commision_Mode_Data[i];
}
for (var i = 0; i < this.Branch_Data.length; i++) {
    if (this.User_Details_.Branch_Id == this.Branch_Data[i].Branch_Id)
    this.Branch_=this.Branch_Data[i];
}

for (var i = 0; i < this.Default_Application_Status_Data.length; i++) {
        if (this.User_Details_.Default_Application_Status_Id == this.Default_Application_Status_Data[i].Application_status_Id)
        this.Default_Application_Status_=this.Default_Application_Status_Data[i];
}
for (var i = 0; i < this.User_Role_Data.length; i++) {
    if (this.User_Details_.Role_Id == this.User_Role_Data[i].User_Role_Id)
    this.User_Role_=this.User_Role_Data[i];
}
for (var i = 0; i < this.User_Profile_Department_Data.length; i++) {
    if (this.User_Details_.Department_Id == this.User_Profile_Department_Data[i].Department_Id)
    this.User_Profile_Department_=this.User_Profile_Department_Data[i];
}
debugger
for (var i = 0; i < this.User_Combinations.length; i++) {
    if (this.User_Details_.UserCombination_Id == this.User_Combinations[i].UserCombination_Id)
     
    this.User_Combination_=this.User_Combinations[i];
}   console.log('this.User_Details_.UserCombination_Id : ', this.User_Details_.UserCombination_Id );

for (var i = 0; i < this.agent_managements.length; i++) {
    if (this.User_Details_.AgentManagement_Id == this.agent_managements[i].AgentManagement_Id)
     
    this.agent_management_=this.agent_managements[i];
}
console.log('(this.User_Details_.AgentManagement_Id: ', (this.User_Details_.AgentManagement_Id));
this.Backup_User_Temp.User_Details_Id=this.User_Details_.Backup_User_Id
        this.Backup_User_Temp.User_Details_Name=this.User_Details_.Backup_User_Name
        this.Backup_User_=Object.assign(this.Backup_User_Temp)
}

Search_Backup_User_Typeahead(event: any)
{     

    this.Backup_User_Data=[];
    var Value = "";
    if (event.target.value == "")
        Value = "";
    else
        Value = event.target.value;
    if (this.Backup_User_Data == undefined || this.Backup_User_Data.length==0)
    {
        this.issLoading = true;
       
        this.User_Details_Service_.Search_Backup_User_Typeahead('',this.User_Profile_Department_.Department_Id).subscribe(Rows => {
           
    if (Rows != null) 
    {
        this.Backup_User_Data = Rows[0];


debugger
        // this.Backup_User_Data1 = Rows[0];



this.Backup_User_Data1 = [];

for (var i = 0; i < this.Backup_User_Data.length; i++) {
    if (this.Backup_User_Data[i].User_Details_Id !== this.User_Details_.User_Details_Id) {
        this.Backup_User_Data1.push(this.Backup_User_Data[i]);
    }
}


        this.issLoading = false;
        this.Backup_User_Data_Filter=[];

        for (var i=0;i<this.Backup_User_Data.length;i++)
        {
            if(this.Backup_User_Data[i].User_Details_Name.toLowerCase().includes(Value))
                this.Backup_User_Data_Filter.push(this.Backup_User_Data[i])
        }

    }
    },
    Rows => {
     this.issLoading = false;
    });
    } 

    else
    {
       
        this.Backup_User_Data_Filter=[];
        for (var i=0;i<this.Backup_User_Data.length;i++)
        {
            if(this.Backup_User_Data[i].User_Details_Name.toLowerCase().includes(Value))
                this.Backup_User_Data_Filter.push(this.Backup_User_Data[i])
        }
    }


}
display_Backup_User(Backup_User_: User_Details)
{     
    if (Backup_User_) { return Backup_User_.User_Details_Name; }
}
Tab_Click(Current_tab){
    
    this.profile_View = false;
    this.Application_Tab_View = false
    if (Current_tab == 1) {
        this.profile_View = true;
    }else if(Current_tab == 2){
        this.Application_Tab_View = true
        this.profile_View = false
    }
}

/*** Added on 26-07-2024 */

// Get_Direct_Agent_Combinations()
// {
//     debugger;
//     this.User_Details_Service_.Get_Direct_Agent_Combinations().subscribe(Rows =>
//         {
//             debugger 
//        this.UserCombination_Data = Rows[0].slice();
//        this.UserCombination_Temp.UserCombination_Id=0;
//        this.UserCombination_Temp.UserCombination_Name="Select";
//        this.UserCombination_Data.unshift(this.UserCombination_Temp);
//        this.UserCombination_ = this.UserCombination_Data[0];    
//        this.Search_UserCombination_ = this.UserCombination_Data[0];

//         },
//       Rows => { 
//      const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}}); });

// }


/*** */

}
