import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogBox_Component } from '../DialogBox/DialogBox.component';
import { Enquiry_Source} from '../../../models/Enquiry_Source';
import { Enquiry_Source_Service } from '../../../services/Enquiry_Source.service';
import {MatDialog} from '@angular/material';import { ROUTES,Get_Page_Permission } from '../../../components/sidebar/sidebar.component';import { Student_Service } from 'app/services/Student.Service';
import { enquiry_mode } from 'app/models/Enquiry_Mode';
@Component({
selector: 'app-Enquiry_Source',
templateUrl: './Enquiry_Source.component.html',
styleUrls: ['./Enquiry_Source.component.css']
})
export class Enquiry_SourceComponent implements OnInit {
Enquiry_Source_Data:Enquiry_Source[]
Enquiry_Source_:Enquiry_Source= new Enquiry_Source();

Enquiry_Source_Name_Search:string;


Entry_View:boolean=true;
EditIndex: number;
Total_Entries: number;
color = 'primary';
mode = 'indeterminate';
value = 50;
issLoading: boolean;
Permissions: any;
Enquiry_Source_Edit:boolean;
Enquiry_Source_Save:boolean;
Enquiry_Source_Delete:boolean;
myInnerHeight: number;
myTotalHeight:number;
Login_User:string="0";

Enq_Source_Temp: Enquiry_Source = new Enquiry_Source();

Enquiry_Source_T_: Enquiry_Source = new Enquiry_Source();

Enquiry_Source_Temp1: Enquiry_Source = new Enquiry_Source();
Enquiry_Source_Data1: Enquiry_Source[];
Enquiry_Source_Data_Filter: Enquiry_Source[];

constructor(public Enquiry_Source_Service_:Enquiry_Source_Service,public Student_Service_: Student_Service, private route: ActivatedRoute, private router: Router,public dialogBox: MatDialog) { }
ngOnInit() 
{
    this.Login_User=localStorage.getItem(("Login_User"));

// this.Permissions = Get_Page_Permission(20);
// if(this.Permissions==undefined || this.Permissions==null)
// {
// localStorage.removeItem('token');
// this.router.navigateByUrl('Home_Page');
// }
// else
{
// this.Enquiry_Source_Edit=this.Permissions.Edit;
// this.Enquiry_Source_Save=this.Permissions.Save;
// this.Enquiry_Source_Delete=this.Permissions.Delete;
this.Page_Load()
}
}
Page_Load()
{
this.myInnerHeight = (window.innerHeight);
this.myInnerHeight = this.myInnerHeight - 250;
this.Clr_Enquiry_Source();
this.Get_Menu_Status(20,this.Login_User);

this.Search_Enquiry_Source();
this.Entry_View=false;

this.myInnerHeight = (window.innerHeight);
this.myTotalHeight=this.myInnerHeight - 200;
this.myTotalHeight=this.myTotalHeight-90;
this.myInnerHeight = this.myInnerHeight - 230;
}

Get_Menu_Status(Menu_id, Login_user_id)
{
this.issLoading = true;
this.Enquiry_Source_Service_.Get_Menu_Status(Menu_id,Login_user_id).subscribe(Rows => {            
  
    
    if (Rows[0][0]==undefined)
    {
        if(Menu_id==20)
        {
        localStorage.removeItem('token');
        this.router.navigateByUrl('Home_Page');
        }
    }  
    else
    if (Rows[0][0].View >0) 
    {
        
        
        if(Menu_id==20)
        {
            
        

            this.Permissions=Rows[0][0];
            if(this.Permissions==undefined || this.Permissions==null)
                {
                    localStorage.removeItem('token');
                    this.router.navigateByUrl('Home_Page');
                }
                this.Enquiry_Source_Edit=this.Permissions.Edit;
                this.Enquiry_Source_Save=this.Permissions.Save;
                this.Enquiry_Source_Delete=this.Permissions.Delete;
    
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
this.Clr_Enquiry_Source();
}
Close_Click()
{
this.Entry_View = false;

}
trackByFn(index, item) 
{
return index;
}

 Clr_Enquiry_Source()
 {
this.Enquiry_Source_.Enquiry_Source_Id=0;
this.Enquiry_Source_.Enquiry_Source_Name="";
this.Enquiry_Source_T_=null;

}
Search_Enquiry_Source()
{
this.issLoading=true;
this.Enquiry_Source_Service_.Search_Enquiry_Source(this.Enquiry_Source_Name_Search).subscribe(Rows => {
 this.Enquiry_Source_Data=Rows[0];
this.Total_Entries=this.Enquiry_Source_Data.length;
if(this.Enquiry_Source_Data.length==0)
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
Delete_Enquiry_Source(Enquiry_Source_Id,index)
{
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Do you want to delete ?',Type:true,Heading:'Confirm'}});
this.Search_Enquiry_Source();
dialogRef.afterClosed().subscribe(result =>
{
if(result=='Yes')
{
this.issLoading=true;
this.Enquiry_Source_Service_.Delete_Enquiry_Source(Enquiry_Source_Id).subscribe(Delete_status => {
if(Number(Delete_status[0][0].Enquiry_Source_Id_)>0){
this.Enquiry_Source_Data.splice(this.EditIndex, 1);
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Deleted',Type: "false"}});
this.Search_Enquiry_Source();
}else if(Number(Delete_status[0][0].Enquiry_Source_Id_)== -2)
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
Save_Enquiry_Source()
{

    if (this.Enquiry_Source_.Enquiry_Source_Name == undefined || this.Enquiry_Source_.Enquiry_Source_Name== null || this.Enquiry_Source_.Enquiry_Source_Name == undefined || this.Enquiry_Source_.Enquiry_Source_Name=='') {
        const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Select Enquiry Source', Type: "3" } });
       return;
    }


    if (this.Enquiry_Source_T_.Enquiry_Source_Id == undefined || this.Enquiry_Source_T_.Enquiry_Source_Id== null || this.Enquiry_Source_T_.Enquiry_Source_Id == undefined || this.Enquiry_Source_T_.Enquiry_Source_Id==0) {
        const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Select Under Enquiry Source', Type: "3" } });
       return;
    }
    

    this.Enquiry_Source_.Enquiry_Source_Under_Id=this.Enquiry_Source_T_.Enquiry_Source_Id

this.issLoading=true;
debugger
this.Enquiry_Source_Service_.Save_Enquiry_Source(this.Enquiry_Source_).subscribe(Save_status => {
Save_status=Save_status[0];
if(Number(Save_status[0].Enquiry_Source_Id_)>0)
{
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Saved',Type:"false"}});
this.Search_Enquiry_Source();
this.Clr_Enquiry_Source();
}
else{
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
}
this.issLoading=false;
 },
 Rows => { 
this.issLoading=false;
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:Rows.error,Type:"2"}});
 });
 
}
Edit_Enquiry_Source(Enquiry_Source_e:Enquiry_Source,index)
{
   debugger
this.Entry_View=true;
this.Enquiry_Source_=Enquiry_Source_e;
this.Enquiry_Source_=Object.assign({},Enquiry_Source_e);


                this.Enq_Source_Temp.Enquiry_Source_Id = this.Enquiry_Source_.Enquiry_Source_Under_Id;
				this.Enq_Source_Temp.Enquiry_Source_Name = this.Enquiry_Source_.Enquiry_Source_Under_Name;
				this.Enquiry_Source_T_ = Object.assign({}, this.Enq_Source_Temp);


}


Search_Enquiry_Source_Typeahead(event: any,source:number) {
    // if (this.Followup_Branch_Data == undefined)
    // this.Followup_Branch_Data = [];
    // if (this.Followup_Branch_Data.length == 0) {
        var Value = "";
        if (event.target.value == "") Value = "";
        else Value = event.target.value.toLowerCase();

    if (
        this.Enquiry_Source_Data1 == undefined ||
        this.Enquiry_Source_Data1.length == 0
    ) {
        this.issLoading = true;
        this.Student_Service_.Search_Enquiry_Source_Typeahead("").subscribe(
            (Rows) => {
                
                if (Rows != null) {
                    this.Enquiry_Source_Data1 = Rows[0];
                    this.Enquiry_Source_Data_Filter = []
                    if(source==1){
                        for (var i = 0; i < this.Enquiry_Source_Data1.length; i++) {
                            if (
                                this.Enquiry_Source_Data1[i].Enquiry_Source_Name.toLowerCase().includes(
                                    Value
                                )
                            )
                                this.Enquiry_Source_Data_Filter.push(
                                    this.Enquiry_Source_Data1[i]
                                );
                        }
                    }else{
                        this.Enquiry_Source_Data_Filter = Rows[0];
                    }
                    
                    this.issLoading = false;
                }
            },
            (Rows) => {
                this.issLoading = false;
            }
        );
    }else {
        if(source==1){
            this.Enquiry_Source_Data_Filter = [];
            for (var i = 0; i < this.Enquiry_Source_Data1.length; i++) {
                if (
                    this.Enquiry_Source_Data1[i].Enquiry_Source_Name.toLowerCase().includes(Value)
                )
                    this.Enquiry_Source_Data_Filter.push(this.Enquiry_Source_Data1[i]);
            }
        }else{
            this.Enquiry_Source_Data_Filter = [];
            for (var i = 0; i < this.Enquiry_Source_Data1.length; i++) {					
                    this.Enquiry_Source_Data_Filter.push(this.Enquiry_Source_Data1[i]);
            }
        }
        
    }
    // }
}
display_Enquiry_Source(Document_: Enquiry_Source) {
    if (Document_) {
        return Document_.Enquiry_Source_Name;
    }
}

}



