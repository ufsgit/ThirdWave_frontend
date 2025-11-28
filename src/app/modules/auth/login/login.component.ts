import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from '../../../helpers/custom-validators';
import { UserData } from '../../../services/user-data';
import { Route, Router } from '@angular/router';
import { MatSpinner } from '@angular/material';
import { ROUTES,Get_Page_Permission,Set_Page_Permission } from '../../../components/sidebar/sidebar.component'
import { DialogBox_Component } from '../../../modules/admin/DialogBox/DialogBox.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA,MatDialogConfig} from '@angular/material';
import { Menu_Service } from '../../../services/Menu.Service';
export var Pointer_Table: number[] = [
]

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  Login_Id:string;
  // menuItems: any[];
  color = 'primary';
  mode = 'indeterminate';
  value = 200;
  issLoading: boolean;
  Notification_count:number;
  Pointer_Table=new Array(200);  
  Permissions:any
  Enrolled_Application_Only_Permission:any

  Application_List_Permission: any;
	Application_List_Page_View: boolean = false;

  /*** Added on 24-07-2024 */

  Dashboard_Permission: any;
  Dashboard_Page_View: boolean = false;
  Profile_Type: number;
  Application_List_Permission1: any;
  Application_List_Page_View1: boolean = false;
  UserCombination_Id: number;




  constructor(
    public fb: FormBuilder, public Menu_Service_: Menu_Service, public userService: UserData, public router: Router,public dialogBox: MatDialog
  ) {
    this.initForm();
  }
  initForm() {
    this.loginForm = this.fb.group({
      userName: ['', CustomValidators.compose([CustomValidators.required])],
      password: ['', CustomValidators.compose([Validators.required])]
    })
     
  }
  async login() {
    if (this.loginForm.valid) {
      this.issLoading = true;
debugger
      const success = await this.userService.login(this.loginForm.value);
      if (success) 
      {debugger
        this.issLoading = false;
       // this.router.navigateByUrl('HomePage');
        this.Login_Id=localStorage.getItem('Login_User');
        ROUTES.length = 0;
 
        Pointer_Table=new Array(200);  
        for(var i=0;i<Pointer_Table.length;i++)
        Pointer_Table[i]=-1;
        this.Menu_Service_.Get_Menu_Permission(this.Login_Id).subscribe( Rows => 
          {
        //   log(Rows)
            if(Rows!=null)
              {
                var Menus;
                Menus=Rows[0];

              ;
                Rows=[];
    for(var i=0;i<Menus.length;i++)
    {
      if(Menus[i].Menu_Id==1)
      this.Push_Menu({ path: '/User_Details', title: 'User Details', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type});
      else if(Menus[i].Menu_Id==2)
      this.Push_Menu({ path: '/Country', title: 'Country ', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
      else if(Menus[i].Menu_Id==3)
      this.Push_Menu({ path: '/Course', title: 'Course', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete ,Menu_Type:Menus[i].Menu_Type});
      else if(Menus[i].Menu_Id==4)
      this.Push_Menu({ path: '/Document', title: 'Document', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
      else  if(Menus[i].Menu_Id==5)
      {
        localStorage.setItem("Navbar_Non_Registered_Lead","1");
        // localStorage.setItem("Navbar_Non_Registered_Lead1","1");
        this.Push_Menu({ path: '/Student', title: 'Student', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
      
      }
      else  if(Menus[i].Menu_Id==6)
      this.Push_Menu({ path: '/Subject', title: 'Subject', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
      else  if(Menus[i].Menu_Id==7)
      this.Push_Menu({ path: '/University', title: 'University ', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
    //  else  if(Menus[i].Menu_Id==8)
    //  this.Push_Menu({ path: '/Home_Page', title: 'Home Page ', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
       else  if(Menus[i].Menu_Id==9)
       {
        localStorage.setItem("Navbar_Non_Registered_Lead","5");
        this.Push_Menu(
            { path: '/Dashboard', 
              title: 'Dashboard ', 
              icon: 'unarchive', 
              class: '',
              Menu_Id:Menus[i].Menu_Id,
                     'View':Menus[i].VIew_All, 
                      Save:Menus[i].Menu_Save ,
                      Edit:Menus[i].Menu_Edit,
                      Delete:Menus[i].Menu_Delete,
                      Menu_Type:Menus[i].Menu_Type 
            });

            this.Dashboard_Permission = Menus[i];
						if (
							this.Dashboard_Permission != undefined &&
							this.Dashboard_Permission != null
						) {
							this.Dashboard_Page_View = this.Dashboard_Permission.VIew_All;
							
						}
       }
      else  if(Menus[i].Menu_Id==10)
      this.Push_Menu({ path: '/Course_Import', title: 'Course Import ', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
      else  if(Menus[i].Menu_Id==11)
      this.Push_Menu({ path: '/Account_Group', title: 'Account Group ', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
      else  if(Menus[i].Menu_Id==12)
      this.Push_Menu({ path: '/Client_Accounts', title: 'Client Accounts ', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
      else  if(Menus[i].Menu_Id==13)
      this.Push_Menu({ path: '/Agent', title: 'Agent ', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
      else  if(Menus[i].Menu_Id==14)
      this.Push_Menu({ path: '/Department', title: 'Department', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
      else  if(Menus[i].Menu_Id==15)
      this.Push_Menu({ path: '/Branch', title: 'Branch ', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
      else  if(Menus[i].Menu_Id==16)
      this.Push_Menu({ path: '/Department_Status', title: 'Department Status ', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
      else  if(Menus[i].Menu_Id==17)
      this.Push_Menu({ path: '/Student_Report', title: 'Student Report ', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
      else  if(Menus[i].Menu_Id==18)
      this.Push_Menu({ path: '/Remarks', title: 'Remarks', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
      else  if(Menus[i].Menu_Id==19)
      this.Push_Menu({ path: '/Work_report', title: 'Work Report', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
      else  if(Menus[i].Menu_Id==20)
      this.Push_Menu({ path: '/Enquiry_Source', title: 'Enquiry Source', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
      else  if(Menus[i].Menu_Id==21)
      this.Push_Menu({ path: '/TimeTrack', title: 'Time Track', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
      else  if(Menus[i].Menu_Id==22)
      this.Push_Menu({ path: '/Registration', title: 'Enrollment', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
      else  if(Menus[i].Menu_Id==23)
      this.Push_Menu({ path: '/Remove Enrollment', title: 'Remove Enrollment', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
      else  if(Menus[i].Menu_Id==24)
      this.Push_Menu({ path: '/Registration_Report', title: 'Enrollment Report', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type  });
      else  if(Menus[i].Menu_Id==25)
      this.Push_Menu({ path: '/Enquiry_Source_Report', title: 'Enquiry Source Report', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
      else  if(Menus[i].Menu_Id==26)
      this.Push_Menu({ path: '/Efficiency_Report', title: 'Efficiency Report', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
      else  if(Menus[i].Menu_Id==27)
      this.Push_Menu({ path: '/Student_Import', title: 'Student Import', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
      else  if(Menus[i].Menu_Id==28)
      this.Push_Menu({ path: '/Pending_FollowUp', title: 'Pending Follow Up ', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
      else  if(Menus[i].Menu_Id==29)
      this.Push_Menu({ path: '/Fees', title: 'Fees', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
      else  if(Menus[i].Menu_Id==30)
      this.Push_Menu({ path: '/Fees_Receipt_Report', title: 'Fees Receipt Report', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
      else  if(Menus[i].Menu_Id==31)
      this.Push_Menu({ path: '/Fees_Collection', title: 'Fees Collection ', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
      else  if(Menus[i].Menu_Id==32)
      this.Push_Menu({ path: '/Enquiry_Source_Summary', title: 'Enquiry Source Summary ', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
      else  if(Menus[i].Menu_Id==33)
      this.Push_Menu({ path: '/Counselor_Fees_Receipt_Report', title: 'Counselor Fees Receipt Report  ', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
      else  if(Menus[i].Menu_Id==34)
      this.Push_Menu({ path: '/Counselor_Registration_Report', title: 'Counselor Enrollment Report ', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
      else  if(Menus[i].Menu_Id==35)
      this.Push_Menu({ path: '/Student_Summary_Report', title: 'Student Summary Report ', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
      else  if(Menus[i].Menu_Id==36)
      this.Push_Menu({ path: '/Staff_Target_Report', title: 'Staff Target Report ', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
      else  if(Menus[i].Menu_Id==37)
      this.Push_Menu({ path: '/Student_Search', title: 'Student Search ', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
      else  if(Menus[i].Menu_Id==38)
      {
        ;
        this.Push_Menu({ path: '/Export_Permission', title: 'Export Permission ', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
      }
      // else  if(Menus[i].Menu_Id==39)
      // this.Push_Menu({ path: '/Work_Summary', title: 'Work Summary ', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
      else  if(Menus[i].Menu_Id==40)
      this.Push_Menu({ path: '/Application_Tab', title: 'Application Tab ', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:0 });
      else  if(Menus[i].Menu_Id==41)
      this.Push_Menu({ path: '/Search_Course_Tab', title: 'Search Course Tab ', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
      else  if(Menus[i].Menu_Id==42)
      this.Push_Menu({ path: '/Fees_Collection_Tab', title: 'Fees Collection Tab ', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:0 });
      // else  if(Menus[i].Menu_Id==43)
      // this.Push_Menu({ path: '/Userwise_Summary', title: 'Userwise Receipt Summary ', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
      // else  if(Menus[i].Menu_Id==44)
      // this.Push_Menu({ path: '/Branchwise_Summary', title: 'Branchwise Summary ', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
      else  if(Menus[i].Menu_Id==45)
      this.Push_Menu({ path: '/Statistics_Tab', title: 'Statistics Tab ', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:0});
      else  if(Menus[i].Menu_Id==46)
      this.Push_Menu({ path: '/PageA', title: 'PageA ', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
      else  if(Menus[i].Menu_Id==47)
      this.Push_Menu({ path: '/PageB', title: 'PageB ', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
      else  if(Menus[i].Menu_Id==48)
      this.Push_Menu({ path: '/PageC', title: 'PageC', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
      else  if(Menus[i].Menu_Id==49)
      this.Push_Menu({ path: '/Document_View', title: 'Document View', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
      else  if(Menus[i].Menu_Id==50)
      this.Push_Menu({ path: '/Receipt_Summary_Report', title: 'Receipt Summary Report', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
      else  if(Menus[i].Menu_Id==51)
      this.Push_Menu({ path: '/Registration_Summary', title: 'Enrollment Summary', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
      else  if(Menus[i].Menu_Id==52)
      this.Push_Menu({ path: '/Enquiry_Conversion', title: 'Enquiry Conversion', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
      else  if(Menus[i].Menu_Id==53)
      this.Push_Menu({ path: '/Employee_Summary', title: 'Employee Summary', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
      else  if(Menus[i].Menu_Id==54)
      this.Push_Menu({ path: '/User_Role', title: 'User Role', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
      else  if(Menus[i].Menu_Id==55)
      this.Push_Menu({ path: '/Company', title: 'Company', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
      else  if(Menus[i].Menu_Id==56)
      this.Push_Menu({ path: '/Settings', title: 'General Settings', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
      else  if(Menus[i].Menu_Id==57)
      this.Push_Menu({ path: '/Documentation_Report', title: 'My Candidates', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
      else  if(Menus[i].Menu_Id==58)
      this.Push_Menu({ path: '/Work_History', title: 'Work History', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
      else  if(Menus[i].Menu_Id==59)
      this.Push_Menu({ path: '/Registration_EnquirySource', title: 'Enrollment By EnquirySource', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
      else  if(Menus[i].Menu_Id==62)
      this.Push_Menu({ path: '/Check_List', title: 'Check List', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
      
      else  if(Menus[i].Menu_Id==66)
      this.Push_Menu({ path: '/Agent_Details', title: 'Agent Details', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });

      else  if(Menus[i].Menu_Id==67)
      this.Push_Menu({ path: '/Application_Report', title: 'Application Report', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
  
      else  if(Menus[i].Menu_Id==70)
      this.Push_Menu({ path: '/Intake', title: 'Intake', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
      else  if(Menus[i].Menu_Id==71)
      this.Push_Menu({ path: '/Task', title: 'Task', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
      else  if(Menus[i].Menu_Id==74)
      this.Push_Menu({ path: '/Notification', title: 'Notification', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
      else  if(Menus[i].Menu_Id==91)
      this.Push_Menu({ path: '/Receipt_Confirmation', title: 'Receipt Confirmation', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
      else  if(Menus[i].Menu_Id==92)
      this.Push_Menu({ path: '/Refund_Confirmation', title: 'Refund Confirmation', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
      else  if(Menus[i].Menu_Id==93)
      this.Push_Menu({ path: '/Refund_Approval', title: 'Refund Approval', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
      else  if(Menus[i].Menu_Id==94)
      this.Push_Menu({ path: '/Application_Dashboard', title: 'Application Dashboard', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
      else if(Menus[i].Menu_Id==95)
      this.Push_Menu({ path: '/Student_Task', title: 'Task', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
    
      else if(Menus[i].Menu_Id==96)
      this.Push_Menu({ path: '/Passport_Expiry_Report', title: 'Passport Expiry Report', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
      else if(Menus[i].Menu_Id==100)
      this.Push_Menu({ path: '/Application_Status', title: 'Application Status', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
      else if(Menus[i].Menu_Id==101)
      this.Push_Menu({ path: '/Task_Item', title: 'Task Item', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
      else if(Menus[i].Menu_Id==103)
      this.Push_Menu({ path: '/New_Task', title: 'New Task', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
      // else if(Menus[i].Menu_Id==73)
      // this.Push_Menu({ path: '/Passport_Expiry_Report', title: 'Passport Expiry Report', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
      else if(Menus[i].Menu_Id==104)
      this.Push_Menu({ path: '/Application_List', title: 'Application List', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });

      else if(Menus[i].Menu_Id==123)
      this.Push_Menu({ path: '/Data_Migration', title: 'Data Migration', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
    
      else if(Menus[i].Menu_Id==106)
      this.Push_Menu({ path: '/Create New application', title: 'Create New application', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
      else if(Menus[i].Menu_Id==107)
      this.Push_Menu({ path: '/Application List Section', title: 'Application List Section', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
      else if(Menus[i].Menu_Id==108)
      this.Push_Menu({ path: '/Application List Offerchasing Section', title: 'Application List Offerchasing Section', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
      else if(Menus[i].Menu_Id==120)
      this.Push_Menu({ path: '/Accounts', title: 'Accounts', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
      else if(Menus[i].Menu_Id==133)
      this.Push_Menu({ path: '/Chat_Window', title: 'Chat', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });

      else if(Menus[i].Menu_Id==121)
      this.Push_Menu({ path: '/Agent Application List', title: 'Agent Application List', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
      else if(Menus[i].Menu_Id==122)
      this.Push_Menu({ path: '/Application No View', title: 'Application No View', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
      else if(Menus[i].Menu_Id==124)
      this.Push_Menu({ path: '/Fees_Pending_Report', title: 'Fees Pending Report', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });

      else if(Menus[i].Menu_Id==126)
      this.Push_Menu({ path: '/Class_Summary', title: 'Class Summary', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });


      else if(Menus[i].Menu_Id==134)
      this.Push_Menu({ path: '/Student_Followup_Report', title: 'Student Followup Report', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
      else if(Menus[i].Menu_Id==135)
      this.Push_Menu({ path: '/Application_Data', title: 'Application Data', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });


      else if(Menus[i].Menu_Id==127)
      this.Push_Menu({ path: '/Class', title: 'Class', icon:
'unarchive', class:
'',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All,
Save:Menus[i].Menu_Save
,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type
});

    
      else if(Menus[i].Menu_Id==105)
      this.Push_Menu({ path: '/Application_Settings', title: 'Application Settings', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
      else if(Menus[i].Menu_Id==109)
      this.Push_Menu({ path: '/Documents', title: 'Documents', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
      else if(Menus[i].Menu_Id==110){
        this.Push_Menu({ path: '/Enrolled_Application_Only', title: 'Enrolled Application Only', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
       // this.Permissions = Menus[i];
        // if (this.Permissions!= undefined)
        
        //   if (this.Permissions.VIew_All ==  1) 
        //     localStorage.setItem('Enrolled_Application',this.Permissions.VIew_All);
         }


          else if(Menus[i].Menu_Id==111)
          this.Push_Menu({ path: '/DocumentName', title: 'Document', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
          else if(Menus[i].Menu_Id==112)
          this.Push_Menu({ path: '/Application History Delete', title: 'Application History Delete', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
          else if(Menus[i].Menu_Id==113){
            this.Push_Menu({ path: '/Application_View', title: 'Application View', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
            
            
            this.Permissions = Menus[i];
            if (this.Permissions!= undefined)
            
              if (this.Permissions.VIew_All ==  1) 
                localStorage.setItem('View_Permission',this.Permissions.VIew_All);
          }
          else if(Menus[i].Menu_Id==128)
          this.Push_Menu({ path: '/Enquirywise_Status_Report', title: 'Enquirywise Status Report', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
          else if(Menus[i].Menu_Id==129)
          this.Push_Menu({ path: '/Department_Status_Report', title: 'Department Status Report', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
          // else if(Menus[i].Menu_Id==130)
          // this.Push_Menu({ path: '/FollowUp_Status_Report', title: 'FollowUp Status Report', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });

          else if(Menus[i].Menu_Id==130)
          this.Push_Menu({ path: '/Department_Report', title: 'Department Report', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
          

          else if(Menus[i].Menu_Id==137)
          this.Push_Menu({ path: '/Data_Fields', title: 'Data Field', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
                  
          else if(Menus[i].Menu_Id==136)
          this.Push_Menu({ path: '/Process', title: 'Process', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
                   
          else if(Menus[i].Menu_Id==138)
          {

            localStorage.setItem("Navbar_Non_Registered_Lead","3");
            this.Push_Menu({ path: '/Application_List', title: 'Application List', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
            this.Application_List_Permission1 = Menus[i];
            debugger;
            if (
              this.Application_List_Permission1 != undefined &&
              this.Application_List_Permission1 != null
            ) {
              this.Application_List_Page_View1 = this.Application_List_Permission1.VIew_All;
              
            }
          }
            
          else if(Menus[i].Menu_Id==139)
          this.Push_Menu({ path: '/Region', title: 'Region ', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
              
          else if(Menus[i].Menu_Id==140)
          this.Push_Menu({ path: '/Holiday', title: 'Holiday List', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
           
               
          else if(Menus[i].Menu_Id==141)
          this.Push_Menu({ path: '/Change_Username', title: 'Change Username', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
           
          else if(Menus[i].Menu_Id==143)
          this.Push_Menu({ path: '/Document_Type', title: 'Document Type', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
         
          else if(Menus[i].Menu_Id==144)
          this.Push_Menu({ path: '/Freelancer_Details', title: 'Freelancer Details', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });

          else if(Menus[i].Menu_Id==145)
            this.Push_Menu({ path: '/Task_Report', title: 'Task Report', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });

          else if(Menus[i].Menu_Id==146)
            this.Push_Menu({ path: '/My_Student_Report', title: 'My Student Report', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
          else if(Menus[i].Menu_Id==146)
            this.Push_Menu({ path: '/Payment_Tab', title: 'Payment Tab', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
         
          else if(Menus[i].Menu_Id==182)
            this.Push_Menu({ path: '/Agent_Summary_Report', title: 'Agent Summary Report', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
         
          else if(Menus[i].Menu_Id==183)
            this.Push_Menu({ path: '/Freelancer_Summary_Report', title: 'Freelancer Summary Report', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
         

          else if(Menus[i].Menu_Id==147)
            this.Push_Menu({ path: '/Agent_Student', title: 'Agent Student', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
          
          else if(Menus[i].Menu_Id==148)
            this.Push_Menu({ path: '/Agency_Dashboard', title: 'Agent Dashboard', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
          else if(Menus[i].Menu_Id==149)
            this.Push_Menu({ path: '/Freelancer_Dashboard', title: 'Freelancer Dashboard', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
        

          else if(Menus[i].Menu_Id==150)
            this.Push_Menu({ path: '/Agent_StudentDetails', title: 'Agent Student Details', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
          else if(Menus[i].Menu_Id==151)
            this.Push_Menu({ path: '/Receipt_Summary_Report_Agent', title: 'Receipt Summary Agent Report', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
          
          else if(Menus[i].Menu_Id==152)
            this.Push_Menu({ path: '/Registration_Summary_Agent', title: 'Enrollment Summary Agent Report', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
          
          
          else if(Menus[i].Menu_Id==153)
            this.Push_Menu({ path: '/Freelancer_Student_Details', title: 'Freelancer Student Details', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
          
          else if(Menus[i].Menu_Id==154)
            this.Push_Menu({ path: '/Receipt_Summary_Report_Freelancer', title: 'Receipt Summary Report Freelancer ', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
          

          else if(Menus[i].Menu_Id==155)
            this.Push_Menu({ path: '/Registration_Summary_Freelancer', title: 'Enrollment Summary Freelancer ', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
          
          else if(Menus[i].Menu_Id==157)
            this.Push_Menu({ path: '/Freelancer_Payment', title: 'Freelancer Payment', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });

          else if(Menus[i].Menu_Id==156)
            this.Push_Menu({ path: '/Freelancer_Amount', title: 'Freelancer Amount ', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });

          else if(Menus[i].Menu_Id==157)
            this.Push_Menu({ path: '/Freelancer_Payment', title: 'Freelancer Payment', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });

          
          
          else if(Menus[i].Menu_Id==158)
            this.Push_Menu({ path: '/Freelancer_User_Amount', title: 'Freelancer User Amount', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });


          else if(Menus[i].Menu_Id==159)
            {
              localStorage.setItem("Navbar_Non_Registered_Lead","2");
              localStorage.setItem("Navbar_Non_Registered_Lead2","2");
      
              this.Push_Menu({ path: '/Student', title: 'Lead', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
            }


            else if(Menus[i].Menu_Id==160)
              {
                localStorage.setItem("Navbar_Non_Registered_Lead","4");
        
                this.Push_Menu({ path: '/Application_List', title: 'Agent Applications', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
              
                // this.Application_List_Permission1 = Menus[i];
                // if (
                //   this.Application_List_Permission1 != undefined &&
                //   this.Application_List_Permission1 != null
                // ) {
                //   this.Application_List_Page_View1 = this.Application_List_Permission1.VIew_All;
                  
                // }
              

              }
  

              else if(Menus[i].Menu_Id==161)
                this.Push_Menu({ path: '/Leads_Report', title: 'Leads Report', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
     


          // else if (Menus[i].Menu_Id == 136)
          // this.Push_Menu({path: "/Process",title: "Process",icon: "unarchive",class: "",Menu_Id: Menus[i].Menu_Id,View: Menus[i].VIew_All,Save: Menus[i].Menu_Save,Edit: Menus[i].Menu_Edit,Delete: Menus[i].Menu_Delete,Menu_Type: Menus[i].Menu_Type,});

          // else if(Menus[i].Menu_Id==132)
          // this.Push_Menu({ path: '/Process', title: 'Process', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
           
          else if (Menus[i].Menu_Id==132) {
						
						this.Application_List_Permission = Menus[i];
						if (
							this.Application_List_Permission != undefined &&
							this.Application_List_Permission != null
						) {
							this.Application_List_Page_View = this.Application_List_Permission.VIew_All;
							
						}
					} 
       
          else if (Menus[i].Menu_Id == 162)
            this.Push_Menu({path: "/Country_Intake",title: "Country Intake",icon: "unarchive",class: "",Menu_Id: Menus[i].Menu_Id,View: Menus[i].VIew_All,Save: Menus[i].Menu_Save,Edit: Menus[i].Menu_Edit,Delete: Menus[i].Menu_Delete,Menu_Type: Menus[i].Menu_Type,});
  

          else if(Menus[i].Menu_Id==164)
            this.Push_Menu({ path: '/Freelancer_Manager', title: 'Freelancer Manager', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });

          else if(Menus[i].Menu_Id==165)
            this.Push_Menu({ path: '/Freelance_Manager_Dashboard', title: 'Freelancer Manager Dashboard', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });

          else if(Menus[i].Menu_Id==166)
            
            this.Push_Menu({ path: '/Freelancer_Transferred_lead_Data', title: 'Freelancer Transferred lead Data', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });

            else if(Menus[i].Menu_Id==167)
            
              this.Push_Menu({ path: '/Lead_Student_Report', title: 'Lead Student Report', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
  

              else if(Menus[i].Menu_Id==168)
            
                this.Push_Menu({ path: '/Student_Data_Report', title: 'Student Data Report', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
    
                else if(Menus[i].Menu_Id==169)
            
                  this.Push_Menu({ path: '/Direct_Application_Report', title: 'Direct Application Report', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
      
                  else if(Menus[i].Menu_Id==170)
            
                    this.Push_Menu({ path: '/Agent_Application_Report', title: 'Agent Application Report', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
        
                    else if(Menus[i].Menu_Id==171)
            
                      this.Push_Menu({ path: '/Leave_Management', title: 'Leave Management', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
          
                      else if(Menus[i].Menu_Id==172)
            
                        this.Push_Menu({ path: '/Application_List_report', title: 'Application List report Agent', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
            
    
                        else if(Menus[i].Menu_Id==173)
            
                          this.Push_Menu({ path: '/Application_List_report_Direct', title: 'Application List report Direct', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
                      else if(Menus[i].Menu_Id==174)
                            this.Push_Menu({ path: '/Create New Student Button', title: 'Create New Student Button', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
                      
                      else if(Menus[i].Menu_Id==175)
                        this.Push_Menu({ path: '/User_Enrollment_Summary', title: 'User Enrollment Summary', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
                        
                      else if(Menus[i].Menu_Id==176)
                        this.Push_Menu({ path: '/Agent_Enrollment_Summary', title: 'Agent Enrollment Summary', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
                      else if(Menus[i].Menu_Id==177)
                        this.Push_Menu({ path: '/Freelancer_Enrollment_Summary', title: 'Freelancer Enrollment Summary', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
                         
                      else if(Menus[i].Menu_Id==178)
                        this.Push_Menu({ path: '/Agent_Student_Report', title: 'Agent Student Report', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
                      else if(Menus[i].Menu_Id==178)
                        this.Push_Menu({ path: '/Agent_Student_Report', title: 'Agent Student Report', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
                      else if(Menus[i].Menu_Id==180)
                        this.Push_Menu({ path: '/Intake_Report', title: 'Intake Report', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
                          
                         
                      else if(Menus[i].Menu_Id==181)
                        this.Push_Menu({ path: '/User_Resignation_Management', title: 'User Resignation Management', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
                         
                      else if(Menus[i].Menu_Id==184)
                        this.Push_Menu({ path: '/Freelancer_Commission_Management', title: 'Freelancer Commission Management', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
                                          

                           
                      else if(Menus[i].Menu_Id==185)
                        this.Push_Menu({ path: '/ProcessFlowDiagram', title: 'Process Flow Diagram', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
                         

                      else if(Menus[i].Menu_Id==186)
                        this.Push_Menu({ path: '/Process_Status_chart', title: 'Process Flow Chart', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
                      
                       else if(Menus[i].Menu_Id==187)
                        this.Push_Menu({ path: '/Task_Type', title: 'Task Type', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
                         
                      else if(Menus[i].Menu_Id==188)
                        this.Push_Menu({ path: '/qualification_master', title: 'Qualification Master', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
                         
                          
                      else if(Menus[i].Menu_Id==189)
                        this.Push_Menu({ path: '/user_working_status_report', title: 'User Working Status Report', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
                         
                         
                      else if(Menus[i].Menu_Id==190)
                        this.Push_Menu({ path: '/Course_Search', title: 'Course Search ', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
                         
                             else if(Menus[i].Menu_Id==191)
                        this.Push_Menu({ path: '/Outgoing_Webhook', title: 'Outgoing Webhook', icon: 'unarchive', class: '',Menu_Id:Menus[i].Menu_Id,'View':Menus[i].VIew_All, Save:Menus[i].Menu_Save ,Edit:Menus[i].Menu_Edit,Delete:Menus[i].Menu_Delete,Menu_Type:Menus[i].Menu_Type });
                         
                    };
 
localStorage.setItem("Routes_Temp",JSON.stringify(ROUTES));
localStorage.setItem("Pointer_Temp",JSON.stringify(Pointer_Table));

// if(this.Application_List_Page_View==true)
// {
//   this.router.navigateByUrl('Application_List');
// }

// else
// {
//   this.router.navigateByUrl('Student');
// }
debugger;
this.Profile_Type = Number(localStorage.getItem("Profile_Type"));
this.UserCombination_Id = Number(localStorage.getItem("UserCombination_Id"));

console.log('Application_List_Page_View: ',this.Application_List_Page_View)
if(this.Dashboard_Page_View==true)
  {
    this.router.navigateByUrl('Dashboard');
  }
else  if(this.Application_List_Page_View==true || this.Application_List_Page_View1 == true)
    {
      console.log('Application_List_Page_View: ', this.Application_List_Page_View);
      console.log('Application_List_Page_View1: ', this.Application_List_Page_View1);
      console.log('Profile_Type: ', this.Profile_Type);
      console.log('UserCombination_Id: ', this.UserCombination_Id);


      if(this.Application_List_Page_View1 == true && this.UserCombination_Id != 3 && (this.Profile_Type === 3 || this.Profile_Type === 1) )
      {
        localStorage.setItem("Navbar_Non_Registered_Lead","3");
      }
      this.router.navigateByUrl('Application_List');
    }
  
  else
  {
    this.router.navigateByUrl('Student');
  }
}


              
},
Rows => { 
     
});
  }
 else
  {
    this.issLoading = false;
    const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Invalid User Name/Password', Type:"3"}});
  }
}
}
  Push_Menu(Menu_Data)
  {
    ROUTES.push(Menu_Data);
    Pointer_Table[Menu_Data.Menu_Id-1] = ROUTES.length-1;
  }
  ngOnInit() {
  }
}