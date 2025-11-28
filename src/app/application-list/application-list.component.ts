import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ApplicationdetailsHistory } from 'app/models/ApplicationdetailsHistory';
import { Department_Status } from 'app/models/Department_Status';
import { DialogBox_Component } from 'app/modules/admin/DialogBox/DialogBox.component';
import { Country_Service } from 'app/services/Country.service';
import { Student_Service } from 'app/services/Student.service';
import moment from 'moment';

@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.scss']
})
export class ApplicationListComponent implements OnInit {



@Input() parent: any;


  constructor(		public Student_Service_: Student_Service,		public dialogBox: MatDialog,public Country_Service_: Country_Service,
    ) { }

  ngOnInit() {
    console.log(this.parent);
  }
	Get_ApplicationDetailswise_History(application_details_id_, feesdetails_id_) {
		this.parent.History_View = true;
		this.parent.application_details_View = false;
		this.parent.Qualification_details_View = false;
		this.parent.language_details_View = false;
		this.parent.FeesId_History = feesdetails_id_;

		this.parent.issLoading = true;
		this.parent.Student_Service_.Get_ApplicationDetailswise_History(
			application_details_id_,
			feesdetails_id_
		).subscribe(
			(Rows) => {
				// const dialogRef = this.parent.dialogBox.open( StudentComponent);

				this.parent.ApplicationdetailsHistory_Data = Rows[0];

				this.parent.issLoading = false;
			},
			(Rows) => {
				this.parent.issLoading = false;
			}
		);
	}
	Create_Application() {
		this.parent.Applicationmodal_View = true;
		this.parent.application_details_View = false;
		this.parent.ApplicationDetails_.Offer_Received = false;
		this.parent.ApplicationDetails_.Feespaymentcheck = false;

		this.parent.ApplicationDetails_.Duration_Id = 0;
		// this.parent.closei();
	}

	Edit_ApplicationDetails(Applicationdetails_e: any, index) {
		let top = document.getElementById("Topdiv");
		if (top !== null) {
			top.scrollIntoView();
			top = null;
		}
		this.Create_Application();

		// this.parent.Clr_ApplicationDetails();
		// this.parent.ApplicationDetails_=Applicationdetails_e
		// this.parent.ApplicationDetails_ = Object.assign({},Applicationdetails_e);

		// this.parent.Student_Service_.Get_ApplicationDetails(this.parent.Student_.Student_Id).subscribe(Rows =>{
		//  this.parent.ApplicationDetails_= Object.assign({},Rows[0][0]);

		this.parent.ApplicationDetails_ = Applicationdetails_e;

		if(this.parent.ApplicationDetails_.To_User_Id != this.parent.Login_User_Id )
		{
			this.parent.Edit_save_button_view =false;
		}

		this.parent.ApplicationDetails_ = Object.assign({}, Applicationdetails_e);
		this.parent.Save_Student_Approved_Status =
			Applicationdetails_e.Student_Approved_Status;
		this.parent.Bph_Approved_Status = Applicationdetails_e.Bph_Approved_Status;
		this.parent.Old_Application_Status_Id =
			this.parent.ApplicationDetails_.Application_status_Id;

		if (
			this.parent.ApplicationDetails_.Duration_Id == 0 ||
			this.parent.ApplicationDetails_.Duration_Id == null
		) {
			this.parent.Duration_Id = 0;
		} else this.parent.Duration_Id = this.parent.ApplicationDetails_.Duration_Id;



		if(this.parent.ApplicationDetails_.Course_Link !="" && this.parent.ApplicationDetails_.Course_Link !=null && this.parent.ApplicationDetails_.Course_Link !=undefined )
		{
			this.parent.Course_Link_Button=true;
		}

		if (this.parent.ApplicationDetails_.Application_Source == 0) {
			this.parent.ApplicationDetails_.Course_Id = 0;
			this.parent.ApplicationDetails_.University_Id = 0;
		}

		if (this.parent.ApplicationDetails_.Feespaymentcheck.toString() == "1")
			this.parent.ApplicationDetails_.Feespaymentcheck = true;
		else this.parent.ApplicationDetails_.Feespaymentcheck = false;
		if (this.parent.ApplicationDetails_.Fees_Payment_Last_Date == null) {
			this.parent.ApplicationDetails_.Fees_Payment_Last_Date = new Date();
			this.parent.ApplicationDetails_.Fees_Payment_Last_Date = this.New_Date(
				this.parent.ApplicationDetails_.Fees_Payment_Last_Date
			);
		} else
			this.parent.ApplicationDetails_.Fees_Payment_Last_Date = this.New_Date(
				new Date(
					moment(this.parent.ApplicationDetails_.Fees_Payment_Last_Date).format(
						"YYYY-MM-DD"
					)
				)
			);

		if (this.parent.ApplicationDetails_.Offer_Received.toString() == "1")
			this.parent.ApplicationDetails_.Offer_Received = true;
		else this.parent.ApplicationDetails_.Offer_Received = false;

		if (this.parent.ApplicationDetails_.Date_Of_Applying == null) {
			this.parent.ApplicationDetails_.Date_Of_Applying = new Date();
			this.parent.ApplicationDetails_.Date_Of_Applying = this.New_Date(
				this.parent.ApplicationDetails_.Date_Of_Applying
			);
		} else
			this.parent.ApplicationDetails_.Date_Of_Applying = this.New_Date(
				new Date(
					moment(this.parent.ApplicationDetails_.Date_Of_Applying).format("YYYY-MM-DD")
				)
			);

		if (this.parent.ApplicationDetails_.Fees_Payment_Last_Date == null) {
			this.parent.ApplicationDetails_.Fees_Payment_Last_Date = new Date();
			this.parent.ApplicationDetails_.Fees_Payment_Last_Date = this.New_Date(
				this.parent.ApplicationDetails_.Fees_Payment_Last_Date
			);
		} else
			this.parent.ApplicationDetails_.Fees_Payment_Last_Date = this.New_Date(
				new Date(
					moment(this.parent.ApplicationDetails_.Fees_Payment_Last_Date).format(
						"YYYY-MM-DD"
					)
				)
			);

		for (var i = 0; i < this.parent.Agent_Mode_Data.length; i++) {
			if (this.parent.ApplicationDetails_.Agent_Id == this.parent.Agent_Mode_Data[i].Agent_Id)
				this.parent.Agent_Mode_ = this.parent.Agent_Mode_Data[i];
		}

		// for (var i = 0; i < this.parent.Application_Status_Mode_Data.length; i++) {
		// 	if (
		// 		this.parent.ApplicationDetails_.Application_status_Id ==
		// 		this.parent.Application_Status_Mode_Data[i].Application_status_Id
		// 	)
		// 		this.parent.Application_Status_Mode_ = this.parent.Application_Status_Mode_Data[i];
		// }
		for (var i = 0; i < this.parent.Intake_Mode_Data.length; i++) {
			if (
				this.parent.ApplicationDetails_.intake_Id == this.parent.Intake_Mode_Data[i].Intake_Id
			)
				this.parent.Intake_Mode_ = this.parent.Intake_Mode_Data[i];
		}
		for (var i = 0; i < this.parent.Intake_Year_Mode_Data.length; i++) {
			if (
				this.parent.ApplicationDetails_.Intake_Year_Id ==
				this.parent.Intake_Year_Mode_Data[i].Intake_Year_Id
			)
				this.parent.Intake_Year_Mode_ = this.parent.Intake_Year_Mode_Data[i];
		}

		this.parent.Country_Temp.Country_Id = this.parent.ApplicationDetails_.Country_Id;
		this.parent.Country_Temp.Country_Name = this.parent.ApplicationDetails_.Country_Name;
		this.parent.Application_Country_ = Object.assign({}, this.parent.Country_Temp);

		this.parent.University_Temp.University_Id = this.parent.ApplicationDetails_.University_Id;
		this.parent.University_Temp.University_Name =
			this.parent.ApplicationDetails_.University_Name;
		this.parent.University_1 = Object.assign({}, this.parent.University_Temp);

		this.parent.Course_Temp.Course_Id = this.parent.ApplicationDetails_.Course_Id;
		this.parent.Course_Temp.Course_Name = this.parent.ApplicationDetails_.Course_Name;
		this.parent.Course_ = Object.assign({}, this.parent.Course_Temp);

		//
		// this.parent.Document_Array= Rows[1];
		// this.parent.Document_File_Array=[];
		// for(var i=0;i<this.parent.Document_Array.length;i++)
		// this.parent.Document_File_Array.push('')

		this.Get_Application_DocumentList(
			this.parent.ApplicationDetails_.Application_details_Id
		);

		this.parent.Activte_Visiblility = false;
		this.parent.Remove_Activte_Visiblility = false;

		if (this.parent.ApplicationDetails_.Activation_Status == true) {
			if (
				this.parent.Remove_Activity_Permissions != undefined &&
				this.parent.Remove_Activity_Permissions != null
			)
				if (this.parent.Remove_Activity_Permissions.View == true)
					this.parent.Remove_Activte_Visiblility = true;
		} else {
			if (
				this.parent.Activity_Permissions != undefined &&
				this.parent.Activity_Permissions != null
			)
				if (this.parent.Activity_Permissions.View == true)
					this.parent.Activte_Visiblility = true;
		}

		// this.parent.issLoading = false;
		// } ,
		// Rows => {
		// this.parent.issLoading = false;
		// const dialogRef = this.parent.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
		// });
		//  this.parent.Get_ApplicationDetails();

		// this.parent.Get_ApplicationDetailswise_History(this.parent.ApplicationDetails_.Application_details_Id);
	}

  Get_Application_DocumentList(application_details_id) {
		//    this.Clr_ApplicationDetails();
		this.parent.issLoading = true;
		this.Student_Service_.Get_Application_DocumentList(
			application_details_id
		).subscribe(
			(Rows) => {
				this.parent.ApplicationDocument_Array = Rows[0];
				this.parent.ApplicationDocument_File_Array = [];
				for (var i = 0; i < this.parent.ApplicationDocument_Array.length; i++)
					this.parent.ApplicationDocument_File_Array.push("");
				this.parent.issLoading = false;
			},
			(Rows) => {
				this.parent.issLoading = false;
			}
		);
	}
	New_Date(Date_) {
		this.parent.date = Date_;
		this.parent.year = this.parent.date.getFullYear();
		this.parent.month = this.parent.date.getMonth() + 1;
		if (this.parent.month < 10) {
			this.parent.month = "0" + this.parent.month;
		}
		this.parent.day = this.parent.date.getDate().toString();
		if (Number.parseInt(this.parent.day) < 10) {
			this.parent.day = "0" + this.parent.day;
		}
		this.parent.date = this.parent.year + "-" + this.parent.month + "-" + this.parent.day;
		return this.parent.date;
	}


	Change_Bph_Status(application_details_u: any, i) {
		
		debugger
    // Save required variable for fetching department statuses to selectedApplicationsIdDetails
    this.parent.selectedApplicationsIdDetails.Country_Id =
      application_details_u.Country_Id;
    this.parent.selectedApplicationsIdDetails.Course_Id =
      application_details_u.Course_Id;
    this.parent.selectedApplicationsIdDetails.University_Id =
      application_details_u.University_Id;
	  
	  this.parent.selectedApplicationsIdDetails.Application_status_Id= application_details_u.Application_status_Id


		this.parent.Department_Status_Mode_Data1=[];
		this.parent.Department_Status_Mode_Data1_Filter=[];
		this.parent.Department_Status_Mode1_=null;

				this.parent.application_details_View = false;
		this.parent.Applicationmodal_View = false;
		this.parent.Change_Status_View = true;
		//   this.parent.Application_Status_Edit=application_details_u.;
		this.parent.App_List_Student_Name = application_details_u.Student_Name;
		this.parent.Student_Id_Transfer = application_details_u.Student_Id;
		this.parent.Application_Status_.Remark = application_details_u.Remark;
		this.parent.Application_Id_Log = application_details_u.Application_details_Id;
		this.parent.ApplicationStatus_Id_Log = application_details_u.Application_status_Id;
		this.parent.Application_fees_paid = application_details_u.Application_Fees_Paid;
		this.parent.ApplicationStatus_Name_Log =
			application_details_u.Application_Status_Name;

		this.parent.group_restriction = application_details_u.Group_Restriction;

		if (this.parent.group_restriction > 0) {
			this.Load_Application_status_forchangestatus_restriction(
				this.parent.group_restriction
			);
		} else {
			this.parent.Application_Status_Mode_Data =
				this.parent.Application_Status_Mode_Data_Temp;
		}

		this.parent.Application_Id_Temp_ = application_details_u.Application_details_Id;
		this.parent.Change_Status_View = true;

		this.parent.ApplicationDetails_.Followup_Date = new Date();
		this.parent.ApplicationDetails_.Followup_Date = this.New_Date(
			new Date(moment(this.parent.ApplicationDetails_.Followup_Date).format("YYYY-MM-DD"))
		);
		this.parent.ApplicationDetails_.Deadline_Date = new Date();
		this.parent.ApplicationDetails_.Deadline_Date = this.New_Date(
			new Date(moment(this.parent.ApplicationDetails_.Deadline_Date).format("YYYY-MM-DD"))
		);

		// if (this.parent.Offerchasing_section_View == true) {
		// 	this.parent.Offtertype_View = true;
		// }


		// this.parent.Search_Div = false;

		//   for (var h = 0; h < this.parent.Application_Status_Mode_Data.length; h++) {
		//     if (
		//         application_details_u.Application_status_Id ==
		//         this.parent.Application_Status_Mode_Data[h].Application_status_Id
		//     )
		//         this.parent.Application_Status_Mode_ = this.parent.Application_Status_Mode_Data[h];
		// }

		// 	if (this.parent.Application_Status_.Transfer_Status.toString() == "1")
		//     this.parent.Application_Status_.Transfer_Status = true;
		//    else this.parent.Application_Status_.Transfer_Status = false;


		// this.parent.Department_Status_Mode_Temp1.Department_Status_Id = application_details_u.Application_status_Id;
		// this.parent.Department_Status_Mode_Temp1.Department_Status_Name = application_details_u.Application_Status_Name;
		// this.parent.Department_Status_Mode1_ = Object.assign({}, this.parent.Department_Status_Mode_Temp1);



		;
		this.parent.ApplicationDetails_.Application_No=application_details_u.Application_No;
		;
for(var n=0;n<this.parent.Department_Status_Mode_Data.length;n++)
{
	if(application_details_u.Department_Status_Id==this.parent.Department_Status_Mode_Data[n].Department_Status_Id)
	this.parent.Department_Status_Mode_=this.parent.Department_Status_Mode_Data[n];
}
;
for(var m=0;m<this.parent.Agent_Mode_Data.length;m++)
{
	if(application_details_u.Agent_Id==this.parent.Agent_Mode_Data[m].Agent_Id)
	this.parent.Agent_Mode_=this.parent.Agent_Mode_Data[m];
}
		for (var j = 0; j < this.parent.Automatic_Department_Data.length; j++) {
			if (
				application_details_u.Transfer_Department_Id ==
				this.parent.Automatic_Department_Data[j].Department_Id
			)
				this.parent.Automatic_Department_ = this.parent.Automatic_Department_Data[j];
		}
		this.parent.Offerletter_Type_.Offerletter_Type_Id=1;
		//     if (this.parent.Application_Status_.Notification_Status.toString() == "1")
		//     this.parent.Application_Status_.Notification_Status = true;
		//    else this.parent.Application_Status_.Notification_Status = false;

		for (var k = 0; k < this.parent.Automatic_Department_Data.length; k++) {
			if (
				application_details_u.Notification_Department_Id ==
				this.parent.Automatic_Department_Data[k].Department_Id
			)
				this.parent.Notification_Department_ = this.parent.Automatic_Department_Data[k];
		}


		// Save all required data to this.parent.taskCreationData to create task when changing status
this.parent.taskCreationData = application_details_u;
this.parent.taskCreationData.Student_Task_Id = 0;
this.parent.taskCreationData.Department_Id = this.parent.Department_Data;
this.parent.taskCreationData.By_User_Id = this.parent.Login_User_Id;
this.parent.taskCreationData.By_User_Name = localStorage.getItem("uname");
this.parent.taskCreationData.Department_Name = localStorage.getItem(
  "Login_Department_Name"
);
this.parent.taskCreationData.Department_Id =
  localStorage.getItem("Login_Department");
this.parent.taskCreationData.Task_Group_Id = 4;
this.parent.taskCreationData.To_User = 0;
this.parent.taskCreationData.To_User_Name = "";
this.parent.taskCreationData.Followup_Date = this.findNewDate();
this.parent.taskCreationData.Remark = "";

		this.Load_Conditions_Subdata_Edit(this.parent.Application_Id_Log);

console.log(this.parent.Change_Status_View);
	}
	Load_Conditions_Subdata_Edit(Application_details_Id_)
{
	;
	this.Student_Service_.Load_Conditions_Subdata_Edit(Application_details_Id_).subscribe(
		(Rows) => {
      ;
      console.log('Rows: ', Rows);
			if (Rows != null) {
				this.parent.Conditions_Sub_Data = Rows[0];
				this.parent.issLoading = false;
			}
		},
		(Rows) => {
			this.parent.issLoading = false;
		}
	);

}


	findNewDate() {
		;
		const date = new Date();
		const nowDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
		return nowDate;
	  }






  Load_Application_status_forchangestatus_restriction(Group_Restriction_) {
		this.parent.issLoading = true;

		this.Student_Service_.Load_Application_status_forchangestatus_restriction(
			Group_Restriction_
		).subscribe(
			(Rows) => {
				if (Rows != null) {
					this.parent.Application_Status_Mode_Data = Rows[0];

					this.parent.Application_Status_Mode_Temp.Application_status_Id = 0;
					this.parent.Application_Status_Mode_Temp.Application_Status_Name = "Select";
					this.parent.Application_Status_Mode_Data.unshift(
						this.parent.Application_Status_Mode_Temp
					);
					//this.parent.Application_Status_Mode_Data_Temp=this.parent.Application_Status_Mode_Data
					this.parent.Application_Status_Mode_ = this.parent.Application_Status_Mode_Data[0];
					this.parent.issLoading = false;
				}
			},
			(Rows) => {
				this.parent.issLoading = false;
			}
		);
	}



	Delete_Application_Details(Application_details_Id, index) {
		const dialogRef = this.dialogBox.open(DialogBox_Component, {
			panelClass: "Dialogbox-Class",
			data: {
				Message: "Do you want to delete ?",
				Type: true,
				Heading: "Confirm",
			},
		});

		dialogRef.afterClosed().subscribe((result) => {
			if (result == "Yes") {
				this.parent.issLoading = true;
				this.Student_Service_.Delete_Application_Details(
					Application_details_Id
				).subscribe(
					(Delete_status) => {
						Delete_status = Delete_status[0];
						Delete_status = Delete_status[0].DeleteStatus_;
						if (Delete_status == 1) {
							this.parent.ApplicationDetails_Data.splice(index, 1);
							const dialogRef = this.parent.dialogBox.open(DialogBox_Component, {
								panelClass: "Dialogbox-Class",
								data: { Message: "Deleted", Type: false },
							});
							this.parent.Clr_ApplicationDetails();
							this.parent.Get_ApplicationDetails();
						} else {
							this.parent.issLoading = false;
							const dialogRef = this.parent.dialogBox.open(DialogBox_Component, {
								panelClass: "Dialogbox-Class",
								data: { Message: "Error Occured", Type: 2 },
							});
						}
						this.parent.issLoading = false;
					},
					(Rows) => {
						this.parent.issLoading = false;
						const dialogRef = this.parent.dialogBox.open(DialogBox_Component, {
							panelClass: "Dialogbox-Class",
							data: { Message: "Error Occured", Type: 2 },
						});
					}
				);
			}
		});
	}

	Remove_Activity(Application_details_Id, index) {
		//    application_details_id_
		const dialogRef = this.dialogBox.open(DialogBox_Component, {
			panelClass: "Dialogbox-Class",
			data: {
				Message: "Do you want to Deactivate ?",
				Type: true,
				Heading: "Confirm",
			},
		});

		dialogRef.afterClosed().subscribe((result) => {
			if (result == "Yes") {
				this.parent.issLoading = true;
				this.Student_Service_.Remove_Activity(Application_details_Id).subscribe(
					(update_status) => {
						if (update_status[0][0].Application_details_Id_ > 0) {
							const dialogRef = this.dialogBox.open(DialogBox_Component, {
								panelClass: "Dialogbox-Class",
								data: { Message: "Deactivated", Type: "false" },
							});
							// this.parent.Total_Rows = this.parent.Total_Rows - this.parent.Student_Data.length;
							this.Get_ApplicationDetails();
							if (Number(this.parent.Login_User) != update_status[0][0].To_User_) {
								var message = {
									Student_Name: update_status[0][0].Student_Name_,
									From_User_Name: update_status[0][0].From_User_Name_,
									Notification_Type_Name:
										update_status[0][0].Notification_Type_Name_,
									Entry_Type: update_status[0][0].Entry_Type_,
									To_User: update_status[0][0].To_User_,
									Notification_Id: update_status[0][0].Notification_Id_,
									Student_Id: update_status[0][0].Student_Id_,
								};
								this.parent.socket.emit("new-message", message);
							}
							this.parent.Remove_Activte_Visiblility = false;
							this.parent.Activte_Visiblility = false;

							if (
								this.parent.Remove_Activity_Permissions != undefined &&
								this.parent.Remove_Activity_Permissions != null
							)
								if (this.parent.Activity_Permissions.View == true)
									this.parent.Activte_Visiblility = true;
						} else {
							this.parent.issLoading = false;
							const dialogRef = this.dialogBox.open(DialogBox_Component, {
								panelClass: "Dialogbox-Class",
								data: { Message: "Error Occured", Type: "2" },
							});
						}
						this.parent.issLoading = false;
					},
					(Rows) => {
						this.parent.issLoading = false;
						const dialogRef = this.dialogBox.open(DialogBox_Component, {
							panelClass: "Dialogbox-Class",
							data: { Message: "Error Occured", Type: "2" },
						});
					}
				);
			}
		});
	}

  Get_ApplicationDetails() {
		//  this.Clr_ApplicationDetails();
		this.parent.issLoading = true;
		this.parent.ApplicationDetails_.Date_Of_Applying = new Date();
		this.parent.ApplicationDetails_.Date_Of_Applying = this.New_Date(
			this.parent.ApplicationDetails_.Date_Of_Applying
		);
		this.parent.ApplicationDetails_.Date_Of_Applying = this.New_Date(
			new Date(
				moment(this.parent.ApplicationDetails_.Date_Of_Applying).format("YYYY-MM-DD")
			)
		);

		this.parent.ApplicationDetails_.Fees_Payment_Last_Date = new Date();
		this.parent.ApplicationDetails_.Fees_Payment_Last_Date = this.New_Date(
			this.parent.ApplicationDetails_.Fees_Payment_Last_Date
		);
		this.parent.ApplicationDetails_.Fees_Payment_Last_Date = this.New_Date(
			new Date(
				moment(this.parent.ApplicationDetails_.Fees_Payment_Last_Date).format(
					"YYYY-MM-DD"
				)
			)
		);
		
		this.Student_Service_.Get_ApplicationDetails(
			// this.parent.Profile_.Student_Id
			this.parent.Student_Id_Edit
		).subscribe(
			(Rows) => {
				
				this.parent.ApplicationDetails_Data = Rows[0];
				this.parent.issLoading = false;
			},
			(Rows) => {
				this.parent.issLoading = false;
			}
		);
	}


	Remove_Student_Approval(Application_details_Id, index) {
		//    application_details_id_
		const dialogRef = this.dialogBox.open(DialogBox_Component, {
			panelClass: "Dialogbox-Class",
			data: {
				Message: "Do you want to Remove Student Approval ?",
				Type: true,
				Heading: "Confirm",
			},
		});

		dialogRef.afterClosed().subscribe((result) => {
			if (result == "Yes") {
				this.parent.issLoading = true;
				this.Student_Service_.Remove_Student_Approval(
					Application_details_Id
				).subscribe(
					(update_status) => {
						if (update_status[0][0].Application_details_Id_ > 0) {
							const dialogRef = this.parent.dialogBox.open(DialogBox_Component, {
								panelClass: "Dialogbox-Class",
								data: { Message: "Approval Removed", Type: "false" },
							});
							// this.parent.Total_Rows = this.parent.Total_Rows - this.parent.Student_Data.length;
							this.Get_ApplicationDetails();
							// this.parent.Remove_Activte_Visiblility = false;
							// this.parent.Activte_Visiblility = false;

							// if (
							// 	this.parent.Remove_Activity_Permissions != undefined &&
							// 	this.parent.Remove_Activity_Permissions != null
							// )
							// 	if (this.parent.Activity_Permissions.View == true)
							// 		this.parent.Activte_Visiblility = true;
						} else {
							this.parent.issLoading = false;
							const dialogRef = this.dialogBox.open(DialogBox_Component, {
								panelClass: "Dialogbox-Class",
								data: { Message: "Error Occured", Type: "2" },
							});
						}
						this.parent.issLoading = false;
					},
					(Rows) => {
						this.parent.issLoading = false;
						const dialogRef = this.dialogBox.open(DialogBox_Component, {
							panelClass: "Dialogbox-Class",
							data: { Message: "Error Occured", Type: "2" },
						});
					}
				);
			}
		});
	}



  display_Application_Status(Application_Status_e: Department_Status) {
    if (Application_Status_e) {
      return Application_Status_e.Department_Status_Name;
    }
  }
  application_File_Change_std_Doc(Document_data_view,event: Event) {
    const file = (event.target as HTMLInputElement).files;
    this.parent.ImageFile_Doc = file;
    // this.parent.Image_Photo = this.parent.ImageFile_Doc[0].name;
    Document_data_view.Image_Photo=this.parent.ImageFile_Doc[0].name
    Document_data_view.ImageFile_Doc=file
    // Document_data_view.Document_Name=''
  }
	Search_Application_StatusforChangeStatus_Typeahead(event: any, Source :number) {
		
		var Value = "";
		if (event.target.value == "" || Source==1) 
		
		{

			Value = "";

			
	this.parent. document_view  =false;
	this.parent. Data_list_view   =false;
	this.parent. Task_Details_view  = false;
		}
		else Value = event.target.value.toLowerCase();

		if (this.parent. Department_Status_Mode_Data1 == undefined || this.parent. Department_Status_Mode_Data1.length == 0) {
			this.parent. issLoading = true;
debugger
console.log('this.parent.selectedApplicationsIdDetails: ', this.parent.selectedApplicationsIdDetails);
			this.Country_Service_.Search_Application_StatusforChangeStatus_Typeahead(Value,this.parent.Login_User,this.parent.selectedApplicationsIdDetails).subscribe(
				(Rows) => {
					
					
					if (Rows != null) {
						this.parent. Department_Status_Mode_Data1 = Rows[0];
						this.parent. Department_Status_Mode_Data1_Filter = [];
						for (var i = 0; i < this.parent. Department_Status_Mode_Data1.length; i++) {
							if (
								this.parent. Department_Status_Mode_Data1[i].Department_Status_Name.toLowerCase().includes(Value)
							)
								this.parent. Department_Status_Mode_Data1_Filter.push(this.parent. Department_Status_Mode_Data1[i]);
						}
					}
					this.parent. issLoading = false;
					
				},
				(Rows) => {
					this.parent. issLoading = false;
				}
			);
		} else {
			this.parent. Department_Status_Mode_Data1_Filter = [];
			for (var i = 0; i < this.parent. Department_Status_Mode_Data1.length; i++) {
				if (this.parent. Department_Status_Mode_Data1[i].Department_Status_Name.toLowerCase().includes(Value))
					this.parent. Department_Status_Mode_Data1_Filter.push(this.parent. Department_Status_Mode_Data1[i]);
			}
		}
	}








}
