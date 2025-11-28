import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Document_Service } from '../../../services/Document.Service';
import { DialogBox_Component } from '../DialogBox/DialogBox.component';
import { Document } from '../../../models/Document';
import {MatDialog} from '@angular/material';import { ROUTES,Get_Page_Permission } from '../../../components/sidebar/sidebar.component';import { Document_Type } from 'app/models/Document_Type';
import { agency_document_type } from 'app/models/agency_document_type';
@Component({
selector: 'app-Document',
templateUrl: './Document.component.html',
styleUrls: ['./Document.component.css']
})
export class DocumentComponent implements OnInit {
Document_Data:Document[]
Document_:Document= new Document();

Document_Name_Search:string;
// Search_Document_Type:number;
// Document_Type:number=1;
Document_Type: Document_Type = new Document_Type();
agency_document_type:agency_document_type =new agency_document_type()
Entry_View:boolean=true;
EditIndex: number;
Total_Entries: number;
color = 'primary';
mode = 'indeterminate';
value = 50;
issLoading: boolean;
Permissions: any;
Document_Edit:boolean;
Document_Save:boolean;
Document_Delete:boolean;
myInnerHeight: number;

Search_Document_Type: Document_Type = new Document_Type();
Search_Document_Type_Temp: Document_Type = new Document_Type();
Search_Document_Type_Data: Document_Type[];
agencyDocumentTypes_Data:agency_document_type[];
agency_document_type_Temp: agency_document_type = new agency_document_type();
  FileTypeData: any;
constructor(public Document_Service_:Document_Service, private route: ActivatedRoute, private router: Router,public dialogBox: MatDialog) { }
ngOnInit() 
{
   
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
   
this.myInnerHeight = (window.innerHeight);
this.myInnerHeight = this.myInnerHeight - 250;

this.Clr_Document();

this.Search_Document();
this.Document_Type_Dropdown();
this.Load_File_Type()
this.Entry_View=false;
}
Create_New()
{
this.Entry_View = true;
this.Clr_Document();
}
Close_Click()
{
this.Entry_View = false;
this.Clr_Document();
}
trackByFn(index, item) 
{
return index;
}

 Clr_Document()
 {debugger
this.Document_.Document_Id=0;
this.Document_.Document_Name="";
this.Document_.Document_Order=0;
this.Document_.agency_documents_id=0;
this.Document_.agency_documents_name="";

// this.Document_Type = 0;

if (this.Search_Document_Type_Data != null && this.Search_Document_Type_Data != undefined)
			this.Document_Type = this.Search_Document_Type_Data[0];

if (this.agencyDocumentTypes_Data != null && this.agencyDocumentTypes_Data != undefined)
  this.agency_document_type = this.agencyDocumentTypes_Data[0];



}


Document_Type_Dropdown() {
  this.issLoading = true;
  this.Document_Service_.Document_Type_Dropdown().subscribe(
    (Rows) => {
      if (Rows != null) {
        this.Search_Document_Type_Data = Rows[0];
        this.Search_Document_Type_Temp.Document_Type_Id = 0;
        this.Search_Document_Type_Temp.Document_Type_Name = "Select";
        this.Search_Document_Type_Data.unshift(this.Search_Document_Type_Temp);
        this.Search_Document_Type = this.Search_Document_Type_Data[0];

        this.agencyDocumentTypes_Data = Rows[1];
        this.agency_document_type_Temp.agency_documents_id = 0;
        this.agency_document_type_Temp.agency_documents_name = "Select";
        this.agencyDocumentTypes_Data.unshift(this.agency_document_type_Temp);
        this.agency_document_type = this.agencyDocumentTypes_Data[0];

        this.issLoading = false;
      }
    },
    (Rows) => {
      this.issLoading = false;
    }
  );
}


Search_Document()
{
   
this.issLoading=true;
debugger
console.log('Document_Name_Search: ', this.Document_Name_Search);
this.Document_Service_.Document_Search(this.Document_Name_Search, this.Search_Document_Type.Document_Type_Id).subscribe(Rows => {

   debugger
 this.Document_Data=Rows[0];
 
this.Total_Entries=this.Document_Data.length;
if(this.Document_Data.length==0)
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
Delete_Document(Document_Id,index)
{
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Do you want to delete ?',Type:true,Heading:'Confirm'}});
this.Search_Document();
dialogRef.afterClosed().subscribe(result =>
{
if(result=='Yes')
{
this.issLoading=true;
this.Document_Service_.Delete_Document(Document_Id).subscribe(Delete_status => {
if(Delete_status[0][0].Document_Id_>0){
this.Document_Data.splice(this.EditIndex, 1);
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Deleted',Type: "false"}});
this.Search_Document();
}
else
{
this.issLoading=false;
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
Save_Document()
{
   

    if (this.Document_.Document_Name == undefined || this.Document_.Document_Name == null || this.Document_.Document_Name == undefined || this.Document_.Document_Name=='') {
        const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Select Document', Type: "3" } });
       return;
    }


    if (
      this.Document_Type == undefined ||
      this.Document_Type == null ||
      this.Document_Type.Document_Type_Id == undefined ||
      this.Document_Type.Document_Type_Id == 0
    ) {
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "Select Document Type", Type: "3" },
      });
      return;
    }



    
    if (
      this.agency_document_type == undefined ||
      this.agency_document_type == null ||
      this.agency_document_type.agency_documents_id == undefined ||
      this.agency_document_type.agency_documents_id == 0
    ) {
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "Select Document Type", Type: "3" },
      });
      return;
    }

    if (this.Document_.Document_Order == undefined || this.Document_.Document_Order == null || this.Document_.Document_Order == undefined || this.Document_.Document_Order==0) {
      const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Enter Document Order', Type: "3" } });
     return;
  }

    
   debugger
    this.Document_.Document_Type = this.Document_Type.Document_Type_Id;

    this.Document_.agency_documents_id = this.agency_document_type.agency_documents_id;
    this.Document_.agency_documents_name = this.agency_document_type.agency_documents_name;
    this.Document_.File_Type_Data = []
    
    for (var m = 0; m < this.FileTypeData.length; m++) 
      {
          if (Boolean(this.FileTypeData[m].Selected) == true)
          {
              this.Document_.File_Type_Data.push(this.FileTypeData[m]);
          }
      }
      console.log('this.Document_: ', this.Document_);
      

this.issLoading=true;

this.Document_Service_.Save_Document(this.Document_).subscribe(Save_status => {
   
Save_status=Save_status[0];

if(Number(Save_status[0].Document_Id_)>0)
{
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Saved',Type:"false"}});
this.Clr_Document();
this.Search_Document();
this.Reset_FileTypeData(); // New function to reset FileTypeData
// for (let i = 0; i < this.FileTypeData.length; i++) {
//   this.FileTypeData[i].Selected = false;
   
//  }
}
else{
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
}
this.issLoading=false;
 },
 Rows => { 
this.issLoading=false;
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:Rows.error.error,Type:"2"}});
 });
 
}

Reset_FileTypeData() {
  for (let i = 0; i < this.FileTypeData.length; i++) {
      this.FileTypeData[i].Selected = false;
  }
}
Edit_Document(Document_e:Document,index)
{
this.Entry_View=true;
this.Document_=Document_e;
this.Get_File_Type(this.Document_.Document_Id);
debugger
// if (this.Document_.Document_Type == 1) {
//     this.Document_Type = 1;
//   } else if (this.Document_.Document_Type == 2) {
//     this.Document_Type = 2;
//   } else this.Document_Type = 0;
this.Document_=Object.assign({},Document_e);


for (var i = 0; i < this.Search_Document_Type_Data.length; i++) {
  if (
    this.Document_.Document_Type_Id ==
    this.Search_Document_Type_Data[i].Document_Type_Id
  )
    this.Document_Type = this.Search_Document_Type_Data[i];
}

for (var i = 0; i < this.agencyDocumentTypes_Data.length; i++) {
  if (
    this.Document_.agency_documents_id ==
    this.agencyDocumentTypes_Data[i].agency_documents_id
  )
    this.agency_document_type = this.agencyDocumentTypes_Data[i];
}

}

Load_File_Type(){
  this.Document_Service_.Load_File_Type().subscribe(result => {
   
    this.FileTypeData = result.FileType
    for (let i = 0; i < this.FileTypeData.length; i++) {
      this.FileTypeData[i].Selected = false
      
    }
  })
}
Get_File_Type(Document_Id_) {
  this.Document_Service_.Get_File_Type(Document_Id_).subscribe(result => {
    var selected = result[0];

    // First, set all FileTypeData items to unselected
    for (let i = 0; i < this.FileTypeData.length; i++) {
      this.FileTypeData[i].Selected = false;
    }

    // Then, set only the matching items to selected
    for (let i = 0; i < this.FileTypeData.length; i++) {
      for (let j = 0; j < selected.length; j++) {
        if (this.FileTypeData[i].File_Type_Id === selected[j].File_Type_Id) {
          this.FileTypeData[i].Selected = true;
          break; // No need to continue inner loop once a match is found
        }
      }
    }

    console.log('Updated FileTypeData: ', this.FileTypeData);
  });
}
// Get_File_Type(Document_Id_){
//   debugger
//   this.Document_Service_.Get_File_Type(Document_Id_).subscribe(result => {
//     debugger
//     var selected = []
//     selected = result[0]
//     for (let i = 0; i < this.FileTypeData.length; i++) {
//       for (let j = 0; j < selected.length; j++) {
//         if(this.FileTypeData[i].File_Type_Id=== selected[j].File_Type_Id){
//           console.log('this.FileTypeData[i]: ', this.FileTypeData[i]);
//           this.FileTypeData[i].Selected = true
//         }
        
//       }
//     }
//     console.log('   this.FileTypeData: ',    this.FileTypeData);
//   })
// }
}



