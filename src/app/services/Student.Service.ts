import { Component, OnInit, Input, Injectable } from "@angular/core";
import { environment } from "../../environments/environment.js";
import S3 from 'aws-sdk/clients/s3';

import {
	HttpClient,
	HttpHeaders,
	HttpErrorResponse,
} from "@angular/common/http";
// import { Observable, of } from "rxjs";
import { map, catchError, tap } from "rxjs/operators";
import { AnimationKeyframesSequenceMetadata } from "@angular/animations";
import { BehaviorSubject, Observable, Subject, of } from "rxjs";
// import { Student_Status } from '../../../models/Student_Status';
import * as FileSaver from "file-saver";
 import * as XLSX from "xlsx";
@Injectable({
	providedIn: "root",
})
export class Student_Service {
	constructor(private http: HttpClient) {
		const httpOptions = {
			headers: new HttpHeaders({
				"Content-Type": "application/json",
			}),
		};
	}

	navTitle$: BehaviorSubject<string> = new BehaviorSubject<string>('');

	AnimationKeyframesSequenceMetadata;
	// Save_Student(Student_)
	// {

	// return this.http.post(environment.BasePath +'Student/Save_Student/',Student_);}

	Save_Student(
		Main_Array,
		Passport_Copy_Image: File[],
		IELTS_Image: File[],
		Passport_Photo_Image: File[],
		Tenth_Certificate_Image: File[],
		Work_Experience_Image: File[],
		Resume_Image: File[],
		Document_File_Array: File[],
		Document_Array: any[],
		Document_Description: string,
		ImageFile: File[],
		Display_File_Name_: string,
		Checklist_Array: any[]
	) {
		const postData = new FormData();

		if (Main_Array.Student != null) {
			postData.append("Student_Id_Student", Main_Array.Student.Student_Id);
			postData.append("Agent_Id", Main_Array.Student.Agent_Id);
			postData.append("Entry_Date", Main_Array.Student.Entry_Date);
			postData.append("Student_Name", Main_Array.Student.Student_Name);
			postData.append("Last_Name", Main_Array.Student.Last_Name);
			postData.append("Gender", Main_Array.Student.Gender);
			postData.append("Address1", Main_Array.Student.Address1);
			postData.append("Address2", Main_Array.Student.Address2);
			postData.append("Pincode", Main_Array.Student.Pincode);
			postData.append("Email", Main_Array.Student.Email);
			postData.append("Phone_Number", Main_Array.Student.Phone_Number);

			postData.append("Enquiryfor_Id", Main_Array.Student.Enquiryfor_Id);
			postData.append("Enquirfor_Name", Main_Array.Student.Enquirfor_Name);
			postData.append("Shore_Id", Main_Array.Student.Shore_Id);
			postData.append("Shore_Name", Main_Array.Student.Shore_Name);
			postData.append("Spouse_Name", Main_Array.Student.Spouse_Name);
			postData.append("Date_of_Marriage", Main_Array.Student.Date_of_Marriage);
			postData.append("Spouse_Occupation", Main_Array.Student.Spouse_Occupation);
			postData.append("Spouse_Qualification", Main_Array.Student.Spouse_Qualification);
			postData.append("Dropbox_Link", Main_Array.Student.Dropbox_Link);
			postData.append("No_of_Kids_and_Age", Main_Array.Student.No_of_Kids_and_Age);
			postData.append("Previous_Visa_Rejection", Main_Array.Student.Previous_Visa_Rejection);


			postData.append(
				"Alternative_Phone_Number",
				Main_Array.Student.Alternative_Phone_Number
			);
			postData.append(
				"Alternative_Email",
				Main_Array.Student.Alternative_Email
			);
			postData.append("Facebook", Main_Array.Student.Facebook);
			postData.append("Whatsapp", Main_Array.Student.Whatsapp);
			postData.append("Dob", Main_Array.Student.Dob);
			postData.append("Country_Name", Main_Array.Student.Country_Name);
			postData.append("Promotional_Code", Main_Array.Student.Promotional_Code);
			postData.append(
				"Student_Status_Id",
				Main_Array.Student.Student_Status_Id
			);
			postData.append(
				"Enquiry_Source_Id",
				Main_Array.Student.Enquiry_Source_Id
			);
			postData.append("Password", Main_Array.Student.Password);
			postData.append("Passport_Copy", Main_Array.Student.Passport_Copy);
			postData.append("IELTS", Main_Array.Student.IELTS);
			postData.append("Passport_Photo", Main_Array.Student.Passport_Photo);
			postData.append(
				"Tenth_Certificate",
				Main_Array.Student.Tenth_Certificate
			);
			postData.append("Work_Experience", Main_Array.Student.Work_Experience);
			postData.append("Resume", Main_Array.Student.Resume);
			postData.append(
				"Passport_Copy_File_Name",
				Main_Array.Student.Passport_Copy_File_Name
			);
			postData.append("IELTS_File_Name", Main_Array.Student.IELTS_File_Name);
			postData.append(
				"Passport_Photo_File_Name",
				Main_Array.Student.Passport_Photo_File_Name
			);
			postData.append(
				"Tenth_Certificate_File_Name",
				Main_Array.Student.Tenth_Certificate_File_Name
			);
			postData.append(
				"Work_Experience_File_Name",
				Main_Array.Student.Work_Experience_File_Name
			);
			postData.append("Resume_File_Name", Main_Array.Student.Resume_File_Name);
			postData.append(
				"College_University",
				Main_Array.Student.College_University
			);
			postData.append("Programme_Course", Main_Array.Student.Programme_Course);
			postData.append("Intake", Main_Array.Student.Intake);
			postData.append("Year", Main_Array.Student.Year);
			postData.append("Reference", Main_Array.Student.Reference);
			postData.append(
				"Visa_Submission_Date",
				Main_Array.Student.Visa_Submission_Date
			);
			postData.append("Activity", Main_Array.Student.Activity);
			postData.append("Course_Link", Main_Array.Student.Course_Link);
			postData.append("Agent", Main_Array.Student.Agent);
			postData.append("Student_Remark", Main_Array.Student.Student_Remark);
			postData.append("Status_Details", Main_Array.Student.Status_Details);

			postData.append("sslc_year", Main_Array.Student.sslc_year);
			postData.append("sslc_institution", Main_Array.Student.sslc_institution);
			postData.append("sslc_markoverall", Main_Array.Student.sslc_markoverall);
			postData.append("sslc_englishmark", Main_Array.Student.sslc_englishmark);
			postData.append("plustwo_year", Main_Array.Student.plustwo_year);
			postData.append(
				"plustwo_institution",
				Main_Array.Student.plustwo_institution
			);
			postData.append(
				"plustwo_markoverall",
				Main_Array.Student.plustwo_markoverall
			);
			postData.append(
				"plustwo_englishmark",
				Main_Array.Student.plustwo_englishmark
			);
			postData.append("graduation_year", Main_Array.Student.graduation_year);
			postData.append(
				"graduation_institution",
				Main_Array.Student.graduation_institution
			);
			postData.append(
				"graduation_markoverall",
				Main_Array.Student.graduation_markoverall
			);
			postData.append(
				"graduation_englishmark",
				Main_Array.Student.graduation_englishmark
			);
			postData.append(
				"postgraduation_year",
				Main_Array.Student.postgraduation_year
			);
			postData.append(
				"postgraduation_institution",
				Main_Array.Student.postgraduation_institution
			);
			postData.append(
				"postgraduation_markoverall",
				Main_Array.Student.postgraduation_markoverall
			);
			postData.append(
				"postgraduation_englishmark",
				Main_Array.Student.postgraduation_englishmark
			);
			postData.append("other_year", Main_Array.Student.other_year);
			postData.append(
				"other_instituation",
				Main_Array.Student.other_instituation
			);
			postData.append(
				"other_markoverall",
				Main_Array.Student.other_markoverall
			);
			postData.append(
				"other_englishmark",
				Main_Array.Student.other_englishmark
			);

			postData.append(
				"exp_institution_1",
				Main_Array.Student.exp_institution_1
			);
			postData.append(
				"exp_institution_2",
				Main_Array.Student.exp_institution_2
			);
			postData.append(
				"exp_institution_3",
				Main_Array.Student.exp_institution_3
			);
			postData.append(
				"exp_institution_4",
				Main_Array.Student.exp_institution_4
			);
			postData.append(
				"exp_designation_1",
				Main_Array.Student.exp_designation_1
			);
			postData.append(
				"exp_designation_2",
				Main_Array.Student.exp_designation_2
			);
			postData.append(
				"exp_designation_3",
				Main_Array.Student.exp_designation_3
			);
			postData.append(
				"exp_designation_4",
				Main_Array.Student.exp_designation_4
			);
			postData.append("IELTS_Overall", Main_Array.Student.IELTS_Overall);
			postData.append("IELTS_Listening", Main_Array.Student.IELTS_Listening);
			postData.append("IELTS_Reading", Main_Array.Student.IELTS_Reading);
			postData.append("IELTS_Writting", Main_Array.Student.IELTS_Writting);
			postData.append("IELTS_Speaking", Main_Array.Student.IELTS_Speaking);
			postData.append("Passport_No", Main_Array.Student.Passport_No);
			postData.append(
				"Passport_fromdate",
				Main_Array.Student.Passport_fromdate
			);
			postData.append("Passport_Todate", Main_Array.Student.Passport_Todate);

			postData.append(
				"exp_tenure_from_1",
				Main_Array.Student.exp_tenure_from_1
			);
			postData.append(
				"exp_tenure_from_2",
				Main_Array.Student.exp_tenure_from_2
			);
			postData.append(
				"exp_tenure_from_3",
				Main_Array.Student.exp_tenure_from_3
			);
			postData.append(
				"exp_tenure_from_4",
				Main_Array.Student.exp_tenure_from_4
			);
			postData.append("exp_tenure_to_1", Main_Array.Student.exp_tenure_to_1);
			postData.append("exp_tenure_to_2", Main_Array.Student.exp_tenure_to_2);
			postData.append("exp_tenure_to_3", Main_Array.Student.exp_tenure_to_3);
			postData.append("exp_tenure_to_4", Main_Array.Student.exp_tenure_to_4);

			postData.append("LOR_1_Id", Main_Array.Student.LOR_1_Id);
			postData.append("LOR_2_Id", Main_Array.Student.LOR_2_Id);
			postData.append("MOI_Id", Main_Array.Student.MOI_Id);
			postData.append("SOP_Id", Main_Array.Student.SOP_Id);
			postData.append("Ielts_Id", Main_Array.Student.Ielts_Id);
			postData.append("Passport_Id", Main_Array.Student.Passport_Id);
			postData.append("Resume_Id", Main_Array.Student.Resume_Id);
			postData.append(
				"Marital_Status_Id",
				Main_Array.Student.Marital_Status_Id
			);
			postData.append(
				"Marital_Status_Name",
				Main_Array.Student.Marital_Status_Name
			);
			postData.append(
				"Program_Course_Id",
				Main_Array.Student.Program_Course_Id
			);
			postData.append(
				"Profile_University_Id",
				Main_Array.Student.Profile_University_Id
			);
			postData.append(
				"Profile_Country_Id",
				Main_Array.Student.Profile_Country_Id
			);
			// postData.append("Created_On", Main_Array.Student.Created_On);
			postData.append("Intake_Id", Main_Array.Student.Intake_Id);
			postData.append(
				"Enquiry_Source_Name",
				Main_Array.Student.Enquiry_Source_Name
			);
			postData.append("Login_Branch", Main_Array.Student.Login_Branch);
		}

		if (Main_Array.Followup != null) {
			postData.append(
				"Next_FollowUp_Date",
				Main_Array.Followup.Next_FollowUp_Date
			);
			postData.append("Department", Main_Array.Followup.Department);
			postData.append("Status", Main_Array.Followup.Status);
			postData.append("User_Id", Main_Array.Followup.User_Id);
			postData.append("Student_Id", Main_Array.Followup.Student_Id);
			postData.append("Branch", Main_Array.Followup.Branch);
			postData.append("Remark", Main_Array.Followup.Remark);
			postData.append("By_User_Id", Main_Array.Followup.By_User_Id);
			postData.append("Remark_Id", Main_Array.Followup.Remark_id);
			postData.append(
				"Department_FollowUp",
				Main_Array.Followup.Department_FollowUp
			);
			postData.append("Department_Name", Main_Array.Followup.Department_Name);
			postData.append("Branch_Name", Main_Array.Followup.Branch_Name);
			postData.append(
				"Department_Status_Name",
				Main_Array.Followup.Department_Status_Name
			);
			postData.append(
				"User_Details_Name",
				Main_Array.Followup.User_Details_Name
			);
			postData.append("By_User_Name", Main_Array.Followup.By_User_Name);
		}
		var i = 0;

		if (Passport_Copy_Image != undefined) {
			for (const img of Passport_Copy_Image) {
				postData.append("myFile", img);
				postData.append("Passport_Copy_Image", i.toString());
				i = i + 1;
			}
		}
		if (IELTS_Image != undefined) {
			for (const img of IELTS_Image) {
				postData.append("myFile", img);
				postData.append("IELTS_Image", i.toString());
				i = i + 1;
			}
		}
		if (Passport_Photo_Image != undefined) {
			for (const img of Passport_Photo_Image) {
				postData.append("myFile", img);
				postData.append("Passport_Photo_Image", i.toString());
				i = i + 1;
			}
		}
		if (Tenth_Certificate_Image != undefined) {
			for (const img of Tenth_Certificate_Image) {
				postData.append("myFile", img);
				postData.append("Tenth_Certificate_Image", i.toString());
				i = i + 1;
			}
		}
		if (Work_Experience_Image != undefined) {
			for (const img of Work_Experience_Image) {
				postData.append("myFile", img);
				postData.append("Work_Experience_Image", i.toString());
				i = i + 1;
			}
		}
		if (Resume_Image != undefined) {
			for (const img of Resume_Image) {
				postData.append("myFile", img);
				postData.append("Resume_Image", i.toString());
				i = i + 1;
			}
		}
		postData.append("Document_File_Array", i.toString());
		if (Document_File_Array != undefined) {
			var j = 0;
			for (const img of Document_File_Array) {
				if (Document_Array[j].New_Entry == 1) {
					postData.append("myFile", img);
				}
				j++;
				i = i + 1;
			}
		}
		if (ImageFile != undefined) {
			for (const img of ImageFile) {
				postData.append("myFile", img);
				Document_Array.push({
					New_Entry: 1,
					Document_Name: Document_Description,
					Document_File_Name: Display_File_Name_,
				});
				j++;
				i = i + 1;
			}
		}
		if (Document_Array != undefined) {
			var Document_Temp = "";
			j = 0;
			for (var i = 0; i < Document_Array.length; i++) {
				if (Document_Array[i].New_Entry == 1) {
					Document_Temp = "Document_Array" + j.toString();
					postData.append(Document_Temp, Document_Array[i].Document_Name);
					Document_Temp = "Document_File_Name" + j.toString();
					postData.append(Document_Temp, Document_Array[i].Document_File_Name);
					j++;
				}
			}
		}
		// if (Checklist_Array != null)
		// {
		//     for (var i = 0; i < Checklist_Array.length; i++)
		//     {

		//        postData.append("myFile", Checklist_Array[i]);
		//        Checklist_Array.push({'Applicable': Checklist_Array[i].Applicable
		//     })
		//        j++;
		//        i = i + 1;
		//    }

		// }

		j = 0;
		postData.append(
			"Checklist_Array_length",
			Checklist_Array.length.toString()
		);
		if (Checklist_Array != null) {
			var list_array = [];
			for (var i = 0; i < Checklist_Array.length; i++) {
				// Checklist_Array.push({'list_array': Checklist_Array[i].Applicable});
				// postData.append("myFile",list_array[i]);
				// postData.append("myFile",Checklist_Array[i].Check_List_Id);
				// postData.append("Check_List_Name",Checklist_Array[i].Check_List_Name);
				// postData.append("Checklist_Status",Checklist_Array[i].Checklist_Status);
				if (Checklist_Array[i].Applicable == 1) {
					Document_Temp = "Check_List_Id" + j.toString();
					postData.append(Document_Temp, Checklist_Array[i].Check_List_Id);
					Document_Temp = "Checklist_Array_Apllicable" + j.toString();
					postData.append(Document_Temp, Checklist_Array[i].Applicable);
					Document_Temp = "Checklist_Array_Status" + j.toString();
					postData.append(Document_Temp, Checklist_Array[i].Checklist_Status);
					j++;
				}
			}
		}
		return this.http.post(
			environment.BasePath + "Student/Save_Student",
			postData
		);
	}

	private extractData(res: Response) {
		let body = res;
		return body || {};
	}

	Lead_Summary_Report(dept_id, Branch_, User_Id,Status_Id_, Login_User_Id_ ,To_User_Id_): Observable<any> {
		debugger
		return this.http.get(
			environment.BasePath +
				"Student/Lead_Summary_Report/" +
				dept_id +
				"/" +
				Branch_ +
				"/" +
				User_Id +
				"/" +
				Status_Id_ +
				"/" +
				Login_User_Id_ +
				"/" + 
				To_User_Id_
		);
	}
	Lead_Summary(Department_Status_Id,User_Id, Login_User_Id_): Observable<any> {
        return this.http.get(
            environment.BasePath +
                "Student/Lead_Summary/"
				+
                Department_Status_Id +
                "/" + 
                User_Id +
                "/" +
                Login_User_Id_
        );
    }


	Save_ApplicationDetails_Datas(
		Main_Array,
		ApplicationDocument_File_Array: File[],
		ApplicationDocument_Array: any[],
		ApplicationDocument_Description: string,
		ImageFile_Application: File[],
		ApplicationDisplay_File_Name_: string
	) {
		const postData = new FormData();

		if (Main_Array.Application != null) {
			postData.append(
				"Application_details_Id",
				Main_Array.Application.Application_details_Id
			);
			postData.append("Student_Id", Main_Array.Application.Student_Id);
			postData.append("Country_Id", Main_Array.Application.Country_Id);
			postData.append("Country_Name", Main_Array.Application.Country_Name);
			postData.append("University_Id", Main_Array.Application.University_Id);
			postData.append(
				"University_Name",
				Main_Array.Application.University_Name
			);
			
			postData.append("Course_Id", Main_Array.Application.Course_Id);
			postData.append("Course_Name", Main_Array.Application.Course_Name);
			postData.append("Course_Link", Main_Array.Application.Course_Link);
			postData.append("Application_Fees", Main_Array.Application.Application_Fees);
			postData.append("intake_Id", Main_Array.Application.intake_Id);
			postData.append("intake_Name", Main_Array.Application.intake_Name);
			postData.append("Intake_Year_Id", Main_Array.Application.Intake_Year_Id);
			postData.append("Course_Fee", Main_Array.Application.Course_Fee);
			postData.append("Living_Expense", Main_Array.Application.Living_Expense);
			postData.append("Preference", Main_Array.Application.Preference);
			postData.append("Student_Approved_Status", Main_Array.Application.Student_Approved_Status);
			postData.append("Bph_Approved_Status", Main_Array.Application.Bph_Approved_Status);

			postData.append("Portal_User_Name", Main_Array.Application.Portal_User_Name);
			postData.append("Password", Main_Array.Application.Password);
			postData.append("Offer_Student_Id", Main_Array.Application.Offer_Student_Id);
			postData.append("Fees_Payment_Last_Date", Main_Array.Application.Fees_Payment_Last_Date);

			postData.append("Feespaymentcheck", Main_Array.Application.Feespaymentcheck);
			postData.append("Offer_Received", Main_Array.Application.Offer_Received);
			postData.append("Duration_Id", Main_Array.Application.Duration_Id);
			

			postData.append(
				"Intake_Year_Name",
				Main_Array.Application.Intake_Year_Name
			);
			postData.append(
				"Date_Of_Applying",
				Main_Array.Application.Date_Of_Applying
			);
			postData.append("Remark", Main_Array.Application.Remark);
			postData.append(
				"Application_status_Id",
				Main_Array.Application.Application_status_Id
			);
			postData.append(
				"Application_Status_Name",
				Main_Array.Application.Application_Status_Name
			);
			postData.append("Agent_Id", Main_Array.Application.Agent_Id);

			postData.append("Agent_Name", Main_Array.Application.Agent_Name);
			postData.append("Reference_No", Main_Array.Application.Reference_No);
			postData.append(
				"Activation_Status",
				Main_Array.Application.Activation_Status
			);
			postData.append("User_Id", Main_Array.Application.User_Id);
			console.log(' Main_Array.Application.User_Id: ',  Main_Array.Application.User_Id);

			postData.append("Application_No", Main_Array.Application.Application_No);
			postData.append(
				"Student_Reference_Id",
				Main_Array.Application.Student_Reference_Id
			);
		}
		var i = 0;

		postData.append("ApplicationDocument_File_Array", i.toString());
		var j = 0;
		if (ApplicationDocument_File_Array != undefined) {
			for (const img of ApplicationDocument_File_Array) {
				if (ApplicationDocument_Array[j].New_Entry == 1) {
					postData.append("myFile", img);
					i = i + 1;
				}
				j++;
			}
		}

		if (ImageFile_Application != undefined) {
			for (const img of ImageFile_Application) {
				postData.append("myFile", img);
				ApplicationDocument_Array.push({
					New_Entry: 1,
					ApplicationDocument_Name: ApplicationDocument_Description,
					ApplicationDocument_File_Name: ApplicationDisplay_File_Name_,
				});
				j++;
				i = i + 1;
			}
		}
		if (ApplicationDocument_Array != undefined) {
			var ApplicationDocument_Temp = "";
			var j = 0;
			for (var i = 0; i < ApplicationDocument_Array.length; i++) {
				if (ApplicationDocument_Array[i].New_Entry == 1) {
					ApplicationDocument_Temp = "ApplicationDocument_Array" + j.toString();
					postData.append(
						ApplicationDocument_Temp,
						ApplicationDocument_Array[i].ApplicationDocument_Name
					);
					ApplicationDocument_Temp =
						"ApplicationDocument_File_Name" + j.toString();
					postData.append(
						ApplicationDocument_Temp,
						ApplicationDocument_Array[i].ApplicationDocument_File_Name
					);
					j++;
				}
			}
		}

		return this.http.post(
			environment.BasePath + "Student/Save_ApplicationDetails_Datas",
			postData
		);
	}

	Get_Student_PageLoadData_Dropdowns():Observable<any>
	{
		
	return this.http.get(environment.BasePath +'Student/Get_Student_PageLoadData_Dropdowns/');
	}
	// Load_Application_Fees_Dropdown(Student_Id_): Observable<any> {
	// 	
	// 	return this.http.get(environment.BasePath + 'Student/Load_Application_Fees_Dropdown/',Student_Id_);
	// }

	Load_Application_Fees_Dropdown(Student_Id_)
{
    return this.http.get(environment.BasePath + 'Student/Load_Application_Fees_Dropdown/' + Student_Id_);
}


Search_Branch_Department_TypeaheadNew(Dept_Name): Observable<any> {
	debugger
	return this.http.get(
		environment.BasePath +
			"Department/Search_Branch_Department_TypeaheadNew/" +	Dept_Name
	);
}



Search_Department_User_Typeahead_Latest(

	Dept_Id,
	User_name
): Observable<any> {
	debugger
	return this.http.get(
		environment.BasePath +
			"Department/Search_Department_User_Typeahead_Latest/" +
			
			Dept_Id +
			"/" +
			User_name
	);
}


	Save_FeesReceipt(
		Main_Array,
		FeesreceiptDocument_File_Array: File[],
		FeesreceiptDocument_Array: any[],
		FeesreceiptDocument_Description: string,
		ImageFile_Feesreceipt: File[],
		FeesreceiptDisplay_File_Name_: string
	) {
		const postData = new FormData();

		if (Main_Array.Fees != null) {
			postData.append("Fees_Receipt_Id", Main_Array.Fees.Fees_Receipt_Id);
			postData.append("Student_Id", Main_Array.Fees.Student_Id);
			postData.append("Entry_date", Main_Array.Fees.Entry_date);
			postData.append("User_Id", Main_Array.Fees.User_Id);
			postData.append("Description", Main_Array.Fees.Description);
			postData.append("Fees_Id", Main_Array.Fees.Fees_Id);
			postData.append("Amount", Main_Array.Fees.Amount);
			postData.append("Actual_Entry_date", Main_Array.Fees.Actual_Entry_date);
			postData.append("Fee_Receipt_Branch", Main_Array.Fees.Fee_Receipt_Branch);
			postData.append("Voucher_No", Main_Array.Fees.Voucher_No);
			postData.append("Student_Name", Main_Array.Fees.Student_Name);
			postData.append("Student_Email", Main_Array.Fees.Student_Email);
			postData.append("Currency", Main_Array.Fees.Currency);
			postData.append("Currency_Id", Main_Array.Fees.Currency_Id);
			postData.append("To_Account_Id", Main_Array.Fees.To_Account_Id);
			postData.append("To_Account_Name", Main_Array.Fees.To_Account_Name);
			postData.append("Application_details_Id", Main_Array.Fees.Application_details_Id);
			postData.append("Course_Name", Main_Array.Fees.Course_Name);
		}

		var i = 0;

		postData.append("FeesreceiptDocument_File_Array", i.toString());
		if (FeesreceiptDocument_File_Array != undefined) {
			var j = 0;
			for (const img of FeesreceiptDocument_File_Array) {
				if (FeesreceiptDocument_Array[j].New_Entry == 1) {
					postData.append("myFile", img);
				}
				j++;
				i = i + 1;
			}
		}
		if (ImageFile_Feesreceipt != undefined) {
			for (const img of ImageFile_Feesreceipt) {
				postData.append("myFile", img);
				FeesreceiptDocument_Array.push({
					New_Entry: 1,
					FeesreceiptDocument_Name: FeesreceiptDocument_Description,
					FeesreceiptDocument_File_Name: FeesreceiptDisplay_File_Name_,
				});
				j++;
				i = i + 1;
			}
		}
		if (FeesreceiptDocument_Array != undefined) {
			var FeesreceiptDocument_Temp = "";
			j = 0;
			for (var i = 0; i < FeesreceiptDocument_Array.length; i++) {
				if (FeesreceiptDocument_Array[i].New_Entry == 1) {
					FeesreceiptDocument_Temp = "FeesreceiptDocument_Array" + j.toString();
					postData.append(
						FeesreceiptDocument_Temp,
						FeesreceiptDocument_Array[i].FeesreceiptDocument_Name
					);
					FeesreceiptDocument_Temp =
						"FeesreceiptDocument_File_Name" + j.toString();
					postData.append(
						FeesreceiptDocument_Temp,
						FeesreceiptDocument_Array[i].FeesreceiptDocument_File_Name
					);
					j++;
				}
			}
		}

		return this.http.post(
			environment.BasePath + "Student/Save_FeesReceipt",
			postData
		);
	}

	fileType =
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
	fileExtension = ".xlsx";
	public exportExcel(jsonData: any[], fileName: string): void {
		const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(jsonData);
		const wb: XLSX.WorkBook = { Sheets: { data: ws }, SheetNames: ["data"] };
		const excelBuffer: any = XLSX.write(wb, {
			bookType: "xlsx",
			type: "array",
		});
		this.saveExcelFile(excelBuffer, fileName);
	}
	private saveExcelFile(buffer: any, fileName: string): void {
		const data: Blob = new Blob([buffer], { type: this.fileType });
		FileSaver.saveAs(data, fileName + this.fileExtension);
	}

	Send_Receipt_Sms_Email(
		Mobile_,
		Email_,
		Student_Name,
		Amount_,
		Date_,
		Total_Amount_

	) {
		return this.http.get(
			environment.BasePath +
				"Student/Send_Receipt_Sms_Email/" +
				Mobile_ +
				"/" +
				Email_ +
				"/" +
				Student_Name +
				"/" +
				Amount_ +
				"/" +
				Date_ +
				"/" +
				Total_Amount_

		);
	}

	Delete_Student_File(Student_Id, File_Name) {
		return this.http.get(
			environment.BasePath +
				"Student/Delete_Student_File/" +
				Student_Id +
				"/" +
				File_Name
		);
	}

	Delete_Student_Document(Student_Document_Id) {
		return this.http.get(
			environment.BasePath +
				"Student_Document/Delete_Student_Document/" +
				Student_Document_Id
		);
	}

Save_Qualification(Qualification_)
{
return this.http.post(environment.BasePath +'Student/Save_Qualification/',Qualification_);
}

Save_work_experience(Work_experience_)
{
return this.http.post(environment.BasePath +'Student/Save_work_experience/',Work_experience_);
}

Save_Cas_Followup(Cas_Followup_)
{
return this.http.post(environment.BasePath +'Student/Save_Cas_Followup/',Cas_Followup_);
}

Save_Leave_Management(Leave_Management_)

{
	console.log('Leave_Management_: ', Leave_Management_);
return this.http.post(environment.BasePath +'Student/Save_Leave_Management/',Leave_Management_);
}

Save_Profile(Profile_)
{

return this.http.post(environment.BasePath +'Student/Save_Profile/',Profile_);
}


// Transfer_Cofirmation(Transfer_)
// {
//
// return this.http.post(environment.BasePath +'Student/Transfer_Cofirmation/',Transfer_);
// } 



Transfer_Cofirmation(Student_Id_,Transfer_Source_,Login_User_Id_,Department_Id_,Remark_,Transfer_Status_Id_,Transfer_Status_Name_,Next_FollowUp_Date_,Sub_Status_Id_,Sub_Status_Name_,Application_Id_Ref_,hoursToAdd_:any='0') {
	//const remark_=encodeURIComponent(Remark_)
	var Search_Data = {
		Student_Id_: Student_Id_,
		Transfer_Source_: Transfer_Source_,
		Login_User_Id_: Login_User_Id_,
		Department_Id_:Department_Id_,
		Remark_:Remark_,
		Transfer_Status_Id_:Transfer_Status_Id_,
		Transfer_Status_Name_:Transfer_Status_Name_,
		Sub_Status_Id_:Sub_Status_Id_,
		Sub_Status_Name_:Sub_Status_Name_,
		Application_Id_Ref_:Application_Id_Ref_,
		Next_FollowUp_Date_:Next_FollowUp_Date_,
		hoursToAdd_
	};
	return this.http.get(
		environment.BasePath + "Student/Transfer_Cofirmation/",
		{ params: Search_Data }
	);
	// return this.http.get(
		
	// 	environment.BasePath + "Student/Transfer_Cofirmation/" + Student_Id + '/' + Transfer_Source+ '/' + Login_User_Id_+ '/' + Login_Department+ '/' + remark_+ '/' + Transfer_Status_Id+ '/' + Transfer_Status_Name+ '/' + Sub_Status_Id+ '/' + Sub_Status_Name+'/'+Application_Id_Ref_
	// );
}


Save_pre_visa(Previsa_)
{
	
return this.http.post(environment.BasePath +'Student/Save_pre_visa/',Previsa_);
}

Save_Pre_Admission(Preadmission_)
{
	
return this.http.post(environment.BasePath +'Student/Save_Pre_Admission/',Preadmission_);
}
Save_Review(Review_)
{
	
return this.http.post(environment.BasePath +'Student/Save_Review/',Review_);
}

Delete_Qualificationdetails(Qualification_Id)
{
 return this.http.get(environment.BasePath +'Student/Delete_Qualificationdetails/'+Qualification_Id);}

 Delete_Pre_Visa(Student_Checklist_Master_Id)
{
 return this.http.get(environment.BasePath +'Student/Delete_Pre_Visa/'+Student_Checklist_Master_Id);}

 Delete_Pre_Admission(Student_Preadmission_Checklist_Master_Id)
{
 return this.http.get(environment.BasePath +'Student/Delete_Pre_Admission/'+Student_Preadmission_Checklist_Master_Id);}
 
 Delete_Review(Review_Id)
{
 return this.http.get(environment.BasePath +'Student/Delete_Review/'+Review_Id);}

 Delete_Refund_Request(Refund_Request_Id)
{
 return this.http.get(environment.BasePath +'Student/Delete_Refund_Request/'+Refund_Request_Id);}

 Delete_Workexperiencedetails(Work_Experience_Id)
{
 return this.http.get(environment.BasePath +'Student/Delete_Workexperiencedetails/'+Work_Experience_Id);}

 Delete_Visa_Task(Student_Task_Id)
 {
	
  return this.http.get(environment.BasePath +'Student/Delete_Visa_Task/'+Student_Task_Id);}

 Delete_Ielts_Details(Ielts_Details_Id)
 {
  return this.http.get(environment.BasePath +'Student/Delete_Ielts_Details/'+Ielts_Details_Id);}

// Get_QualificationDetails(Student_Id_)
// {
// return this.http.get(environment.BasePath +'Student/Get_QualificationDetails/',Student_Id_);
// }
Get_QualificationDetails(Student_Id) {
	return this.http.get(
		environment.BasePath + "Student/Get_QualificationDetails/" + Student_Id
	);
	
}

Get_Previsa_Details(Student_Id) {
	return this.http.get(
		environment.BasePath + "Student/Get_Previsa_Details/" + Student_Id
	);
	
}


Get_Previsa_Details_Edit(Student_Checklist_Master_Id_) {
	return this.http.get(environment.BasePath + "Student/Get_Previsa_Details_Edit/" + Student_Checklist_Master_Id_);
}

Get_Preadmission_Details_Edit(Student_Preadmission_Checklist_Master_Id_) {
	return this.http.get(environment.BasePath + "Student/Get_Preadmission_Details_Edit/" + Student_Preadmission_Checklist_Master_Id_);
}

Get_Preadmission_Details(Student_Id) {
	return this.http.get(
		environment.BasePath + "Student/Get_Preadmission_Details/" + Student_Id
	);
	
}
Reset_Notification_Count(User_Id_) {
	
	return this.http.get(
		environment.BasePath + "Student/Reset_Notification_Count/" + User_Id_
	);
}
Get_All_Notification(date_, userid_, login_user_) {
	var Search_Data = {
		Date_: date_,
		User_Id_: userid_,
		login_Id_: login_user_,
	};
	return this.http.get(
		environment.BasePath + "Student/Get_All_Notification/",
		{ params: Search_Data }
	);
}

Get_ReviewDetails(Student_Id) {
	return this.http.get(
		environment.BasePath + "Student/Get_ReviewDetails/" + Student_Id
	);
	
}
Get_WorkexperienceDetails(Student_Id) {
	return this.http.get(
		environment.BasePath + "Student/Get_WorkexperienceDetails/" + Student_Id
	);
}

Get_Comments(Application_Id) {
	return this.http.get(
		environment.BasePath + "Student/Get_Comments/" + Application_Id
	);
}


Get_Visa_Task(Student_Id,Task_Group_Id) {
	return this.http.get(
		environment.BasePath + "Student/Get_Visa_Task/" + Student_Id+ "/"+ Task_Group_Id
	);
}

Get_Previsa_Task(Student_Id,Task_Group_Id) {
	return this.http.get(
		environment.BasePath + "Student/Get_Previsa_Task/" + Student_Id+ "/"+ Task_Group_Id
	);
}

Get_Preadmission_Task(Student_Id,Task_Group_Id) {
	return this.http.get(
		environment.BasePath + "Student/Get_Preadmission_Task/" + Student_Id+ "/"+ Task_Group_Id
	);
}

Get_Task_History(Student_Task_Id) {
	return this.http.get(
		environment.BasePath + "Student/Get_Task_History/" + Student_Task_Id
	);
}

get_student_checklist(Student_Id,Checklist_Type) {
	
	return this.http.get(
		environment.BasePath + "Student/get_student_checklist/" + Student_Id+ "/"+ Checklist_Type
	);
}

get_student_Preadmission_checklist(Student_Id,Checklist_Type) {
	
	return this.http.get(
		environment.BasePath + "Student/get_student_checklist/" + Student_Id+ "/"+ Checklist_Type
	);
}

SendLInk(Student_Id,Login_User_Id) {
	return this.http.get(
		environment.BasePath + "Student/SendLInk/" + Student_Id+ "/"+ Login_User_Id
	);
}

DropboxLInk(Student_Id,Login_User_Id) {
	return this.http.get(
		environment.BasePath + "Student/DropboxLInk/" + Student_Id+ "/"+ Login_User_Id
	);
}
Get_Proceeding_Details(Student_Id) {
	return this.http.get(
		environment.BasePath + "Student/Get_Proceeding_Details/" + Student_Id
	);
}

Get_Ielts_Details(Student_Id) {
	return this.http.get(
		environment.BasePath + "Student/Get_Ielts_Details/" + Student_Id
	);
}

Get_Refundrequestdetails(Student_Id,Fees_Receipt_Id) {
	return this.http.get(
		environment.BasePath + "Student/Get_Refundrequestdetails/" + Student_Id + "/"+ Fees_Receipt_Id);
}


Save_Work_Experience(Work_experience_)
{
return this.http.post(environment.BasePath +'Student/Save_Work_Experience/',Work_experience_);
}
Save_Ielts_Details(Ielts_Details_)
{
return this.http.post(environment.BasePath +'Student/Save_Ielts_Details/',Ielts_Details_);
}

Save_Refund_Request(Refund_Request_)
{
return this.http.post(environment.BasePath +'Student/Save_Refund_Request/',Refund_Request_);
}

	Delete_Application_Document(Application_Document_Id) {
		return this.http.get(
			environment.BasePath +
				"Student_Document/Delete_Application_Document/" +
				Application_Document_Id
		);
	}
	Delete_FeesRecepit_Document(Feesreceipt_document_Id) {
		return this.http.get(
			environment.BasePath +
				"Student_Document/Delete_FeesRecepit_Document/" +
				Feesreceipt_document_Id
		);
	}

	Load_Enquiryfor(): Observable<any>
{
    return this.http.get(environment.BasePath + 'Student/Load_Enquiryfor/');
}

Load_Shore(): Observable<any>
{
    return this.http.get(environment.BasePath + 'Student/Load_Shore/');
}
	Search_Student(
		Search_FromDate,
		Search_ToDate,
		value,
		Search_Name,
		dept_id,
		Branch_Id,
		Enquiry_For_id,
		Class_Id,
		Sort_By_Id,
		Intake_Id,
		Intake_Year_Id,
		Agent_Id,
		By_User_,
		By_User_Id,
		Status_Id_,
		User_Id1_,
		Freelancer_manager_Id1_,
		Look_In_Date,
		Page_Index1_,
		Page_Index2_,
		Login_User_Id_,
		RowCount_,
		RowCount2_,
		Register_Value,Date_Type_Value_
	): Observable<any> {
		debugger
		var Search_Data = {
			From_Date_: Search_FromDate,
			To_Date_: Search_ToDate,
			Search_By_: value,
			SearchbyName_: Search_Name,
			Department_: dept_id,
			Branch_: Branch_Id,
			Enquiry_For_:Enquiry_For_id,
			Class_:Class_Id,
			Sort_By_:Sort_By_Id,
			Intake_:Intake_Id,
			Intake_Year_:Intake_Year_Id,
			Agent_:Agent_Id,
			By_User_: By_User_,
			By_User_Id_:By_User_Id,
			Status_Id_: Status_Id_,
			User_Id1_: User_Id1_,
			Freelancer_manager_Id1_: Freelancer_manager_Id1_,
			Is_Date_Check_: Look_In_Date,
			Page_Index1_: Page_Index1_,
			Page_Index2_: Page_Index2_,
			Login_User_Id_: Login_User_Id_,
			RowCount: RowCount_,
			RowCount2: RowCount2_,
			Register_Value: Register_Value,
			Date_Type_Value_:Date_Type_Value_
		};
		return this.http.get(environment.BasePath + "Student/Search_Student/", {
			params: Search_Data,
		});
	}

	// Search_Application_Report(
	
	// 	Search_FromDate,
	// 	Search_ToDate,
	// 	Branch_Id,
	// 	By_User_,
	// 	Look_In_Date,
	// 	Login_User_Id_,
	// 	Status_Value_,
	// 	Agent_Id_,
	// 	Application_status_Id_,
	// 	Intake_Id_,
	// 	Country_Id_,
	// 	University_Id_,
	// 	Active_In_Vlaue_
	// ): Observable<any> {
	// 	
	// 	var Search_Data = {
	// 		Fromdate_: Search_FromDate,
	// 		Todate_: Search_ToDate,
	// 		Branch_: Branch_Id,
	// 		By_User_: By_User_,
	// 		Is_Date_Check_: Look_In_Date,
	// 		Login_User_Id_: Login_User_Id_,
	// 		Status_Value_: Status_Value_,
	// 		Agent_Id_: Agent_Id_,
	// 		Application_status_Id_: Application_status_Id_,
	// 		Intake_Id_: Intake_Id_,
	// 		Country_Id_: Country_Id_,
	// 		University_Id_:University_Id_,
	// 		Is_Active_Check_:Active_In_Vlaue_
	// 	};
	// 	return this.http.get(
	// 		environment.BasePath + "Student/Search_Application_Report/",
	// 		{ params: Search_Data }
	// 	);
	// }

	// Search_Notification(
	
	// 	Search_FromDate,
	// 	Search_ToDate,
	// 	Branch_Id,
	// 	By_User_,
	// 	Look_In_Date,
	// 	Login_User_Id_,
	// 	Status_Value_,
	// 	Agent_Id_,
	// 	Application_status_Id_,
	// 	Intake_Id_,
	// 	Country_Id_,
	// 	University_Id_,
	// 	Active_In_Vlaue_
	// ): Observable<any> {
	// 	
	// 	var Search_Data = {
	// 		Fromdate_: Search_FromDate,
	// 		Todate_: Search_ToDate,
	// 		Branch_: Branch_Id,
	// 		By_User_: By_User_,
	// 		Is_Date_Check_: Look_In_Date,
	// 		Login_User_Id_: Login_User_Id_,
	// 		Status_Value_: Status_Value_,
	// 		Agent_Id_: Agent_Id_,
	// 		Application_status_Id_: Application_status_Id_,
	// 		Intake_Id_: Intake_Id_,
	// 		Country_Id_: Country_Id_,
	// 		University_Id_:University_Id_,
	// 		Is_Active_Check_:Active_In_Vlaue_
	// 	};
	// 	return this.http.get(
	// 		environment.BasePath + "Student/Search_Notification/",
	// 		{ params: Search_Data }
	// 	);
	// }

	// Search_Notification(Login_User_,Page_Index1_,Page_Index2_) {
	// 	return this.http.get(
	// 		environment.BasePath + "Student/Search_Notification/" + Login_User_ + "/" + Page_Index1_ + "/" + Page_Index2_
	// 	);
	// }


	Search_Notification(
        Login_User_,
        notification_type_,
		Sort_By_,
		search_name_,
        Page_Index1_,
        Page_Index2_
    ) {
        return this.http.get(
            environment.BasePath +
                "Student/Search_Notification/" +
                Login_User_ +
                "/" +
                notification_type_ +
                "/" +
				Sort_By_ +
                "/" +
				search_name_ +
                "/" +
                Page_Index1_ +
                "/" +
                Page_Index2_
        );
    }


	Search_Student_With_PhoneNumber(Phone_Number): Observable<any> {
		return this.http.get(
			environment.BasePath +
				"Student/Search_Student_With_PhoneNumber/" +
				Phone_Number
		);
	}
	Check_Duplicate_Student(Phone_Number, Branch_Id_): Observable<any> {
		return this.http.get(
			environment.BasePath +
				"Student/Check_Duplicate_Student/" +
				Phone_Number +
				"/" +
				Branch_Id_
		);
	}

	Search_Documentation_Report(Phone_Number, Login_User): Observable<any> {
		return this.http.get(
			environment.BasePath +
				"Student/Search_Documentation_Report/" +
				Phone_Number +
				"/" +
				Login_User
		);
	}

	Delete_Student(Student_Id,Login_User_) {
		return this.http.get(
			environment.BasePath + "Student/Delete_Student/" + Student_Id+'/'+Login_User_
		);
	}

	// Transfer_Cofirmation(Student_Id,Transfer_Source,Login_User_Id_,Login_Department,Remark_,Transfer_Status_Id,Transfer_Status_Name,Sub_Status_Id,Sub_Status_Name,Application_Id_Ref_,Followup_Branch_Id_,Followup_Branch_Name_,Followup_Department_Id_,Followup_Department_Name_,Followup_Status_Id_,Followup_Status_Name_,Followup_To_User_Id_,Followup_To_User_Name_) {
	// 	
	// 	return this.http.get(
			
	// 		environment.BasePath + "Student/Transfer_Cofirmation/" + Student_Id + '/' + Transfer_Source+ '/' + Login_User_Id_+ '/' + Login_Department+ '/' + Remark_+ '/' + Transfer_Status_Id+ '/' + Transfer_Status_Name+ '/' + Sub_Status_Id+ '/' + Sub_Status_Name+'/'+Application_Id_Ref_+'/'+Followup_Branch_Id_+'/'+Followup_Branch_Name_+'/'+Followup_Department_Id_+'/'+Followup_Department_Name_+'/'+Followup_Status_Id_+'/'+Followup_Status_Name_+'/'+Followup_To_User_Id_+'/'+Followup_To_User_Name_
	// 	);
	// }




	Get_Student(Student_Id,Login_User_) {
		return this.http.get(
			environment.BasePath + "Student/Get_Student/" + Student_Id+'/'+Login_User_
		);
	}
	Get_Fees_Receipt(Fees_Receipt_Id) {
		return this.http.get(
			environment.BasePath + "Student/Get_Fees_Receipt/" + Fees_Receipt_Id
		);
	}

	Search_Student_Status(Student_Status_Name) {
		return this.http.get(
			environment.BasePath +
				"Student_Status/Search_Student_Status/" +
				Student_Status_Name
		);
	}
	Search_Enquiry_Source(Enquiry_Source_Name) {
		return this.http.get(
			environment.BasePath +
				"Student_Status/Search_Enquiry_Sourc/" +
				Enquiry_Source_Name
		);
	}

	Get_Student_Course_Selection(Student_Course_Apply_Id) {
		return this.http.get(
			environment.BasePath +
				"Student/Get_Student_Course_Selection/" +
				Student_Course_Apply_Id
		);
	}
	Get_Message_Details(Student_Id) {
		return this.http.get(
			environment.BasePath + "Student/Get_Message_Details/" + Student_Id
		);
	}
	Get_Student_Document(Student_Id) {
		return this.http.get(
			environment.BasePath +
				"Student_Document/Get_Student_Document/" +
				Student_Id
		);
	}
	Get_FollowUp_Details(Student_Id): Observable<any> {
		debugger
		return this.http.get(
			environment.BasePath + "Student/Get_FollowUp_Details/" + Student_Id
		);
	}
	Get_Lead_Load_Data(): Observable<any> {
		return this.http.get(environment.BasePath + "Student/Get_Lead_Load_Data1/");
	}
	Get_Lead_Load_Data_ByUser(Login_User): Observable<any> {
		return this.http.get(
			environment.BasePath + "Student/Get_Lead_Load_Data_ByUser/" + Login_User
		);
	}

	Load_Department_User_Dropdown(Login_User): Observable<any> {
		return this.http.get(
			environment.BasePath + "Student/Load_Department_User_Dropdown/" + Login_User
		);
	}

	// Search_User_Typeahead_ByUser( Login_Id_,User_name): Observable<any> {
	//     return this.http.get(environment.BasePath + 'User_Details/Search_User_Typeahead_ByUser/' + Login_Id_ +'/'+ User_name);
	// }

	Save_Student_Report_FollowUp(Student_Details) {
		return this.http.post(
			environment.BasePath + "Student/Save_Student_Report_FollowUp/",
			Student_Details
		);
	}

	Save_Freelancer_Commission_Management(Student_Details) {
		return this.http.post(
			environment.BasePath + "Student/Save_Freelancer_Commission_Management/",
			Student_Details
		);
	}
	Save_FollowUp(Student_Details) {
		return this.http.post(
			environment.BasePath + "Student/Save_FollowUp/",
			Student_Details
		);
	}

	Search_Work_report(
		Search_FromDate,
		Search_ToDate,
		value,
		Search_Name,
		dept_id,
		Branch_Id,
		User_Id,
		Look_In_Date,
		Page_Index1_,
		Page_Index2_,
		Login_User_Id_,
		RowCount_,
		RowCount2_
	): Observable<any> {
		return this.http.get(
			environment.BasePath +
				"Student/Search_Work_report/" +
				Search_FromDate +
				"/" +
				Search_ToDate +
				"/" +
				value +
				"/" +
				Search_Name +
				"/" +
				dept_id +
				"/" +
				Branch_Id +
				"/" +
				User_Id +
				"/" +
				Look_In_Date +
				"/" +
				Page_Index1_ +
				"/" +
				Page_Index2_ +
				"/" +
				Login_User_Id_ +
				"/" +
				RowCount_ +
				"/" +
				RowCount2_
		);
	}
	// Search_Student_Report(
	// 	Search_FromDate,
	// 	Search_ToDate,
	// 	value,
	// 	Search_Name,
	// 	dept_id,
	// 	enquiry_source_id,
	// 	Branch_Id,
	// 	User_Id,
	// 	Look_In_Date,
	// 	Page_Index1_,
	// 	Page_Index2_,
	// 	Login_User_Id_,
	// 	RowCount_,
	// 	RowCount2_,
	// 	remarks_Id,
	// 	To_User_,
	// 	Status_Id_,
	// 	Register_Value
	// ): Observable<any> {
	// 	return this.http.get(
	// 		environment.BasePath +
	// 			"Student/Search_Student_Report/" +
	// 			Search_FromDate +
	// 			"/" +
	// 			Search_ToDate +
	// 			"/" +
	// 			value +
	// 			"/" +
	// 			Search_Name +
	// 			"/" +
	// 			dept_id +
	// 			"/" +
	// 			enquiry_source_id +
	// 			"/" +
	// 			Branch_Id +
	// 			"/" +
	// 			User_Id +
	// 			"/" +
	// 			Look_In_Date +
	// 			"/" +
	// 			Page_Index1_ +
	// 			"/" +
	// 			Page_Index2_ +
	// 			"/" +
	// 			Login_User_Id_ +
	// 			"/" +
	// 			RowCount_ +
	// 			"/" +
	// 			RowCount2_ +
	// 			"/" +
	// 			remarks_Id +
	// 			"/" +
	// 			To_User_ +
	// 			"/" +
	// 			Status_Id_ +
	// 			"/" +
	// 			Register_Value
	// 	);
	// }
	Search_Branchwise_Summary(
		Search_FromDate,
		Search_ToDate,
		value,
		Search_Name,
		dept_id,
		Branch_Id,
		User_Id,
		Look_In_Date,
		Page_Index1_,
		Page_Index2_,
		Login_User_Id_,
		RowCount_,
		RowCount2_
	): Observable<any> {
		return this.http.get(
			environment.BasePath +
				"Student/Search_Branchwise_Summary/" +
				Search_FromDate +
				"/" +
				Search_ToDate +
				"/" +
				value +
				"/" +
				Search_Name +
				"/" +
				dept_id +
				"/" +
				Branch_Id +
				"/" +
				User_Id +
				"/" +
				Look_In_Date +
				"/" +
				Page_Index1_ +
				"/" +
				Page_Index2_ +
				"/" +
				Login_User_Id_ +
				"/" +
				RowCount_ +
				"/" +
				RowCount2_
		);
	}
	Search_Userwise_Summary(
		Search_FromDate,
		Search_ToDate,
		value,
		Search_Name,
		dept_id,
		Branch_Id,
		User_Id,
		Look_In_Date,
		Page_Index1_,
		Page_Index2_,
		Login_User_Id_,
		RowCount_,
		RowCount2_
	): Observable<any> {
		return this.http.get(
			environment.BasePath +
				"Student/Search_Userwise_Summary/" +
				Search_FromDate +
				"/" +
				Search_ToDate +
				"/" +
				value +
				"/" +
				Search_Name +
				"/" +
				dept_id +
				"/" +
				Branch_Id +
				"/" +
				User_Id +
				"/" +
				Look_In_Date +
				"/" +
				Page_Index1_ +
				"/" +
				Page_Index2_ +
				"/" +
				Login_User_Id_ +
				"/" +
				RowCount_ +
				"/" +
				RowCount2_
		);
	}
	Student_Registration_Summary(
		Search_FromDate,
		Search_ToDate,
		Branch_Id,
		look_In_Date_Value,
		Login_User_Id_
	): Observable<any> {
		return this.http.get(
			environment.BasePath +
				"Student/Student_Registration_Summary/" +
				Search_FromDate +
				"/" +
				Search_ToDate +
				"/" +
				Branch_Id +
				"/" +
				look_In_Date_Value +
				"/" +
				Login_User_Id_
		);
	}
	Student_Registration_Summary_Agent(
		Search_FromDate,
		Search_ToDate,
		Branch_Id,
		look_In_Date_Value,
		Login_User_Id_
	): Observable<any> {debugger
		return this.http.get(
			environment.BasePath +
				"Student/Student_Registration_Summary_Agent/" +
				Search_FromDate +
				"/" +
				Search_ToDate +
				"/" +
				Branch_Id +
				"/" +
				look_In_Date_Value +
				"/" +
				Login_User_Id_
		);
	}

	Student_Registration_Summary_Freelancer(
		Search_FromDate,
		Search_ToDate,
		Branch_Id,
		look_In_Date_Value,
		Login_User_Id_
	): Observable<any> {debugger
		return this.http.get(
			environment.BasePath +
				"Student/Student_Registration_Summary_Freelancer/" +
				Search_FromDate +
				"/" +
				Search_ToDate +
				"/" +
				Branch_Id +
				"/" +
				look_In_Date_Value +
				"/" +
				Login_User_Id_
		);
	}

	Search_Registration_Report_Freelancer(
        Search_FromDate,
        Search_ToDate,
        value,
        Search_Name,
        dept_id,
        Branch_Id,
        User_Id,
        Look_In_Date,
        Page_Index1_,
        Page_Index2_,
        Login_User_Id_,
        RowCount_,
        RowCount2_,
        View_Branch_,Freelancer_Manager_User_Id_
    ): Observable<any> {
        return this.http.get(
            environment.BasePath +
                "Student/Search_Registration_Report_Freelancer/" +
                Search_FromDate +
                "/" +
                Search_ToDate +
                "/" +
                value +
                "/" +
                Search_Name +
                "/" +
                dept_id +
                "/" +
                Branch_Id +
                "/" +
                User_Id +
                "/" +
                Look_In_Date +
                "/" +
                Page_Index1_ +
                "/" +
                Page_Index2_ +
                "/" +
                Login_User_Id_ +
                "/" +
                RowCount_ +
                "/" +
                RowCount2_+
                "/" +
                View_Branch_+
				"/" +
			Freelancer_Manager_User_Id_
        );
    }
	Search_Registration_Report_Agent(
        Search_FromDate,
        Search_ToDate,
        value,
        Search_Name,
        dept_id,
        Branch_Id,
        User_Id,
        Look_In_Date,
        Page_Index1_,
        Page_Index2_,
        Login_User_Id_,
        RowCount_,
        RowCount2_,
        View_Branch_
    ): Observable<any> {
        return this.http.get(
            environment.BasePath +
                "Student/Search_Registration_Report_Agent/" +
                Search_FromDate +
                "/" +
                Search_ToDate +
                "/" +
                value +
                "/" +
                Search_Name +
                "/" +
                dept_id +
                "/" +
                Branch_Id +
                "/" +
                User_Id +
                "/" +
                Look_In_Date +
                "/" +
                Page_Index1_ +
                "/" +
                Page_Index2_ +
                "/" +
                Login_User_Id_ +
                "/" +
                RowCount_ +
                "/" +
                RowCount2_+
                "/" +
                View_Branch_
        );
    }
	Student_Registration_By_Enquirysource(
		Search_FromDate,
		Search_ToDate,
		Branch_Id,
		look_In_Date_Value,
		Login_User_Id_
	): Observable<any> {
		return this.http.get(
			environment.BasePath +
				"Student/Student_Registration_By_Enquirysource/" +
				Search_FromDate +
				"/" +
				Search_ToDate +
				"/" +
				Branch_Id +
				"/" +
				look_In_Date_Value +
				"/" +
				Login_User_Id_
		);
	}
	Student_Registration_By_Enquirysource_Report(
		Search_FromDate,
		Search_ToDate,
		value,
		Search_Name,
		dept_id,
		Branch_Id,
		Enquiry_Source_,
		Look_In_Date,
		Page_Index1_,
		Page_Index2_,
		Login_User_Id_,
		RowCount_,
		RowCount2_
	): Observable<any> {
		return this.http.get(
			environment.BasePath +
				"Student/Student_Registration_By_Enquirysource_Report/" +
				Search_FromDate +
				"/" +
				Search_ToDate +
				"/" +
				value +
				"/" +
				Search_Name +
				"/" +
				dept_id +
				"/" +
				Branch_Id +
				"/" +
				Enquiry_Source_ +
				"/" +
				Look_In_Date +
				"/" +
				Page_Index1_ +
				"/" +
				Page_Index2_ +
				"/" +
				Login_User_Id_ +
				"/" +
				RowCount_ +
				"/" +
				RowCount2_
		);
	}
	Search_Student_Summary_Report(
		Search_FromDate,
		Search_ToDate,
		value,
		Search_Name,
		dept_id,
		Branch_Id,
		User_Id,
		Look_In_Date,
		Page_Index1_,
		Page_Index2_,
		Login_User_Id_,
		RowCount_,
		RowCount2_
	): Observable<any> {
		return this.http.get(
			environment.BasePath +
				"Student/Search_Student_Summary_Report/" +
				Search_FromDate +
				"/" +
				Search_ToDate +
				"/" +
				value +
				"/" +
				Search_Name +
				"/" +
				dept_id +
				"/" +
				Branch_Id +
				"/" +
				User_Id +
				"/" +
				Look_In_Date +
				"/" +
				Page_Index1_ +
				"/" +
				Page_Index2_ +
				"/" +
				Login_User_Id_ +
				"/" +
				RowCount_ +
				"/" +
				RowCount2_
		);
	}
	Search_Work_Summary(
		Search_FromDate,
		Search_ToDate,
		User_Id,
		Login_User_Id_,
		look_In_Date_Value,
		branch_id
	): Observable<any> {
		return this.http.get(
			environment.BasePath +
				"Student/Search_Work_Summary/" +
				Search_FromDate +
				"/" +
				Search_ToDate +
				"/" +
				User_Id +
				"/" +
				Login_User_Id_ +
				"/" +
				look_In_Date_Value +
				"/" +
				branch_id
		);
	}
	Search_Enquiry_Source_Report(
		Search_FromDate,
		Search_ToDate,
		Is_Date_Check,
		Branch
	): Observable<any> {
		return this.http.get(
			environment.BasePath +
				"Student/Search_Enquiry_Source_Report/" +
				Search_FromDate +
				"/" +
				Search_ToDate +
				"/" +
				Is_Date_Check +
				"/" +
				Branch
		);
	}

	Search_Fees_Receipt_Report(
		
		Search_FromDate,
		Search_ToDate,
		value,
		Search_Name,
		dept_id,
		To_Account_Id,
		Branch_Id,
		User_Id,
		Look_In_Date,
		Page_Index1_,
		Page_Index2_,
		Login_User_Id_,
		RowCount_,
		RowCount2_,
		Fees_id
	): Observable<any> {
		
		return this.http.get(
			environment.BasePath +
				"Student/Search_Fees_Receipt_Report/" +
				Search_FromDate +
				"/" +
				Search_ToDate +
				"/" +
				value +
				"/" +
				Search_Name +
				"/" +
				dept_id +
				"/" +
				To_Account_Id +
				"/" +
				Branch_Id +
				"/" +
				User_Id +
				"/" +
				Look_In_Date +
				"/" +
				Page_Index1_ +
				"/" +
				Page_Index2_ +
				"/" +
				Login_User_Id_ +
				"/" +
				RowCount_ +
				"/" +
				RowCount2_ +
				"/" +
				Fees_id
		);
	}
	Search_Counselor_Fees_Receipt_Report(
		Search_FromDate,
		Search_ToDate,
		value,
		Search_Name,
		dept_id,
		Branch_Id,
		User_Id,
		Look_In_Date,
		Page_Index1_,
		Page_Index2_,
		Login_User_Id_,
		RowCount_,
		RowCount2_,
		Fees_id
	): Observable<any> {
		return this.http.get(
			environment.BasePath +
				"Student/Search_Counselor_Fees_Receipt_Report/" +
				Search_FromDate +
				"/" +
				Search_ToDate +
				"/" +
				value +
				"/" +
				Search_Name +
				"/" +
				dept_id +
				"/" +
				Branch_Id +
				"/" +
				User_Id +
				"/" +
				Look_In_Date +
				"/" +
				Page_Index1_ +
				"/" +
				Page_Index2_ +
				"/" +
				Login_User_Id_ +
				"/" +
				RowCount_ +
				"/" +
				RowCount2_ +
				"/" +
				Fees_id
		);
	}
	// Search_Registration_Report(
	// 	Search_FromDate,
	// 	Search_ToDate,
	// 	value,
	// 	Search_Name,
	// 	dept_id,
	// 	Branch_Id,
	// 	User_Id,
	// 	Look_In_Date,
	// 	Page_Index1_,
	// 	Page_Index2_,
	// 	Login_User_Id_,
	// 	RowCount_,
	// 	RowCount2_
	// ): Observable<any> {
	// 	return this.http.get(
	// 		environment.BasePath +
	// 			"Student/Search_Registration_Report/" +
	// 			Search_FromDate +
	// 			"/" +
	// 			Search_ToDate +
	// 			"/" +
	// 			value +
	// 			"/" +
	// 			Search_Name +
	// 			"/" +
	// 			dept_id +
	// 			"/" +
	// 			Branch_Id +
	// 			"/" +
	// 			User_Id +
	// 			"/" +
	// 			Look_In_Date +
	// 			"/" +
	// 			Page_Index1_ +
	// 			"/" +
	// 			Page_Index2_ +
	// 			"/" +
	// 			Login_User_Id_ +
	// 			"/" +
	// 			RowCount_ +
	// 			"/" +
	// 			RowCount2_
	// 	);
	// }


	Search_Registration_Report(
        Search_FromDate,
        Search_ToDate,
        value,
        Search_Name,
        dept_id,
        Branch_Id,
        User_Id,
        Look_In_Date,
        Page_Index1_,
        Page_Index2_,
        Login_User_Id_,
        RowCount_,
        RowCount2_,
        View_Branch_
    ): Observable<any> {
        return this.http.get(
            environment.BasePath +
                "Student/Search_Registration_Report/" +
                Search_FromDate +
                "/" +
                Search_ToDate +
                "/" +
                value +
                "/" +
                Search_Name +
                "/" +
                dept_id +
                "/" +
                Branch_Id +
                "/" +
                User_Id +
                "/" +
                Look_In_Date +
                "/" +
                Page_Index1_ +
                "/" +
                Page_Index2_ +
                "/" +
                Login_User_Id_ +
                "/" +
                RowCount_ +
                "/" +
                RowCount2_+
                "/" +
                View_Branch_
        );
    }

	Search_Counselor_Registration_Report(
		Search_FromDate,
		Search_ToDate,
		value,
		Search_Name,
		dept_id,
		Branch_Id,
		User_Id,
		Look_In_Date,
		Page_Index1_,
		Page_Index2_,
		Login_User_Id_,
		RowCount_,
		RowCount2_
	): Observable<any> {
		return this.http.get(
			environment.BasePath +
				"Student/Search_Counselor_Registration_Report/" +
				Search_FromDate +
				"/" +
				Search_ToDate +
				"/" +
				value +
				"/" +
				Search_Name +
				"/" +
				dept_id +
				"/" +
				Branch_Id +
				"/" +
				User_Id +
				"/" +
				Look_In_Date +
				"/" +
				Page_Index1_ +
				"/" +
				Page_Index2_ +
				"/" +
				Login_User_Id_ +
				"/" +
				RowCount_ +
				"/" +
				RowCount2_
		);
	}
	
	Pending_FollowUp(dept_id, Branch_, User_Id,user_category, Login_User_Id_,Day_Type_value_,
		look_In_Date_Value_,FromDate_,ToDate_): Observable<any> {
		debugger
		return this.http.get(
			
			environment.BasePath +
				"Student/Pending_FollowUp/" +
				dept_id +
				"/" +
				Branch_ +
				"/" +
				User_Id +
				"/" +
				user_category +
				"/" +
				Login_User_Id_+
				"/" +
				Day_Type_value_+
                "/" +
                look_In_Date_Value_+
                "/" +
                FromDate_+
                "/" +
                ToDate_
		);
	}

	Pending_FollowUp_Task(dept_id, Branch_, User_Id,user_category, Login_User_Id_,Day_Type_value_,look_In_Date_Value_,FromDate_,ToDate_): Observable<any> {
		debugger
		return this.http.get(
			
			environment.BasePath +
				"Student/Pending_FollowUp_Task/" +
				dept_id +
				"/" +
				Branch_ +
				"/" +
				User_Id +
				"/" +
				user_category +
				"/" +
				Login_User_Id_+
				"/" +
				Day_Type_value_+
                "/" +
                look_In_Date_Value_+
                "/" +
                FromDate_+
                "/" +
                ToDate_
		);
	}

	View_Detail_agent(dept_id, Branch_, User_Id, Login_User_Id_): Observable<any> {
		return this.http.get(
			environment.BasePath +
				"Student/View_Detail_agent/" +
				dept_id +
				"/" +
				Branch_ +
				"/" +
				User_Id +
				"/" +
				Login_User_Id_
		);
	}

	Class_Details_Report(dept_id, Branch_, Class_id, Login_User_Id_,Max_Status_Id_): Observable<any> {
		return this.http.get(
			environment.BasePath +
				"Student/Class_Details_Report/" +
				dept_id +
				"/" +
				Branch_ +
				"/" +
				Class_id +
				"/" +
				Login_User_Id_ +
				"/" +
				Max_Status_Id_
		);
	}
	Class_Summary(User_Id, Login_User_Id_,Branch_Id,Department_Id): Observable<any> {
		return this.http.get(
			environment.BasePath +
				"Student/Class_Summary/" +
				User_Id +
				"/" +
				Login_User_Id_ +
				"/" +
				Branch_Id +
				"/" +
				Department_Id
		);
	}

	FollowUp_Summary(User_Id,dept_id,UserType_Value,Login_User_Id_,Day_Type_value_,
		look_In_Date_Value_,FromDate_,ToDate_
	): Observable<any> {
		debugger
        return this.http.get(
            environment.BasePath +
                "Student/FollowUp_Summary/" +
                User_Id +
                "/" +
				dept_id +
                "/" +
				UserType_Value +
                "/" +
                Login_User_Id_ +
                "/" +
                Day_Type_value_+
                "/" +
                look_In_Date_Value_+
                "/" +
                FromDate_+
                "/" +
                ToDate_
        );
    }

	Agent_Search_data(User_Id): Observable<any> {
        return this.http.get(
            environment.BasePath +
                "Student/Agent_Search_data/"  +
                User_Id 
        );
    }



	Delete_Data() {
		return this.http.get(environment.BasePath + "Student/Delete_Data/");
	}
	Search_Student_Count(
		Search_FromDate,
		Search_ToDate,
		value,
		Search_Name,
		dept_id,
		Branch_Id,
		User_Id,
		Look_In_Date,
		Page_Index1_,
		Page_Index2_,
		Login_User_Id_,
		RowCount_,
		RowCount2_
	): Observable<any> {
		return this.http.get(
			environment.BasePath +
				"Student/Search_Student_Count/" +
				Search_FromDate +
				"/" +
				Search_ToDate +
				"/" +
				value +
				"/" +
				Search_Name +
				"/" +
				dept_id +
				"/" +
				Branch_Id +
				"/" +
				User_Id +
				"/" +
				Look_In_Date +
				"/" +
				Page_Index1_ +
				"/" +
				Page_Index2_ +
				"/" +
				Login_User_Id_ +
				"/" +
				RowCount_ +
				"/" +
				RowCount2_
		);
	}
	Search_Student_Count_Track_Report(Search_FromDate, User_Id): Observable<any> {
		return this.http.get(
			environment.BasePath +
				"Student/Search_Student_Count_Track_Report/" +
				Search_FromDate +
				"/" +
				User_Id
		);
	}
	Search_Enquiry_Source_Summary_Track(
		Search_FromDate,
		Search_ToDate,
		Login_User_Id_,
		look_In_Date_Value,
		branch_id
	): Observable<any> {
		return this.http.get(
			environment.BasePath +
				"Student/Search_Enquiry_Source_Summary_Track/" +
				Search_FromDate +
				"/" +
				Search_ToDate +
				"/" +
				Login_User_Id_ +
				"/" +
				look_In_Date_Value +
				"/" +
				branch_id
				
		);
	}
	
	Search_Enrollment_Agent_Summary_Track(
		Search_FromDate,
		Search_ToDate,
		Login_User_Id_,
		look_In_Date_Value,
		branch_id
	): Observable<any> {
		return this.http.get(
			environment.BasePath +
				"Student/Search_Enrollment_Agent_Summary_Track/" +
				Search_FromDate +
				"/" +
				Search_ToDate +
				"/" +
				Login_User_Id_ +
				"/" +
				look_In_Date_Value +
				"/" +
				branch_id
				
		);
	}


	Search_Enrollment_Freelancer_Summary_Track(
		Search_FromDate,
		Search_ToDate,
		Login_User_Id_,
		look_In_Date_Value,
		branch_id
	): Observable<any> {
		return this.http.get(
			environment.BasePath +
				"Student/Search_Enrollment_Freelancer_Summary_Track/" +
				Search_FromDate +
				"/" +
				Search_ToDate +
				"/" +
				Login_User_Id_ +
				"/" +
				look_In_Date_Value +
				"/" +
				branch_id
				
		);
	}


	Search_Enrollment_User_Summary_Track(
		Search_FromDate,
		Search_ToDate,
		Login_User_Id_,
		look_In_Date_Value,
		branch_id,UserType_Value
	): Observable<any> {
		return this.http.get(
			environment.BasePath +
				"Student/Search_Enrollment_User_Summary_Track/" +
				Search_FromDate +
				"/" +
				Search_ToDate +
				"/" +
				Login_User_Id_ +
				"/" +
				look_In_Date_Value +
				"/" +
				branch_id+
				"/" +
				UserType_Value
		);
	}


	Search_Efficiency_Count_Report(
		Search_FromDate,
		Search_ToDate,
		Branch_Id,
		User_Id
	): Observable<any> {
		return this.http.get(
			environment.BasePath +
				"Student/Search_Efficiency_Count_Report/" +
				Search_FromDate +
				"/" +
				Search_ToDate +
				"/" +
				Branch_Id +
				"/" +
				User_Id
		);
	}

	Get_Dashboard_Count(Login_User_Id_,FromDate_,ToDate_,Date_Value_,User_Id_): Observable<any> {
		return this.http.get(
			environment.BasePath + "Student/Get_Dashboard_Count/" + Login_User_Id_+'/'+
			FromDate_+
			'/'+
			ToDate_ + 
			'/'+
			Date_Value_ +
			'/'+

User_Id_);
	}
	Get_Dashboard_Count_Agent(Login_User_Id_,FromDate_,ToDate_,Date_Value_): Observable<any> {
		return this.http.get(
			environment.BasePath + "Student/Get_Dashboard_Count_Agent/" + Login_User_Id_+'/'+
			FromDate_+
			'/'+
			ToDate_ + 
			'/'+
			Date_Value_ 
		);
	}
	Get_Dashboard_Count_Freelancer(Login_User_Id_,FromDate_,ToDate_,Date_Value_): Observable<any> {
		return this.http.get(
			environment.BasePath + "Student/Get_Dashboard_Count_Freelancer/" + Login_User_Id_+'/'+
			FromDate_+
			'/'+
			ToDate_ + 
			'/'+
			Date_Value_ 
		);
	}

	Get_Dashboard_Count_Freelancer_Manager(Login_User_Id_,FromDate_,ToDate_,Date_Value_): Observable<any> {
		return this.http.get(
			environment.BasePath + "Student/Get_Dashboard_Count_Freelancer_Manager/" + Login_User_Id_+'/'+
			FromDate_+
			'/'+
			ToDate_ + 
			'/'+
			Date_Value_ 
		);
	}
	Get_Application_Dashboard_Count(Login_User_Id_): Observable<any> {
		return this.http.get(
			environment.BasePath + "Student/Get_Application_Dashboard_Count/" + Login_User_Id_
		);
	}

	Public_Search_Course_Typeahead(
		Level_Detail_Id,
		Country_Id,
		Intake_Id,
		Sub_Section_Id,
		Course_Name,
		Branch_Search,
		Duration_Search,
		Ielts_,
		Page_Start,
		Page_End,
		Page_Length,
		University,
		Subject_1
	): Observable<any> {
		var Search_Data = {
			Level_Detail_Id: Level_Detail_Id,
			Country_Id: Country_Id,
			Intake_Id: Intake_Id,
			Sub_Section_Id: Sub_Section_Id,
			Course_Name: Course_Name,
			Branch_Search: Branch_Search,
			Duration_Search: Duration_Search,
			Ielts_: Ielts_,
			Page_Start: Page_Start,
			Page_End: Page_End,
			Page_Length: Page_Length,
			University: University,
			Subject_1: Subject_1,
		};
		return this.http.get(
			environment.BasePath + "Public_Data/Public_Search_Course_Typeahead/",
			{ params: Search_Data }
		);
	}
	Public_Search_Course(
		Level_Detail_Id,
		Country_Id,
		Intake_Id,
		Sub_Section_Id,
		Course_Name,
		Branch_Search,
		Duration_Search,
		Ielts_,
		Page_Start,
		Page_End,
		Page_Length,
		University,
		Subject_1
	): Observable<any> {
		try {
			if (Course_Name !== undefined) {
				if (Course_Name.Course_Name !== undefined) {
					Course_Name = Course_Name.Course_Name;
				}
			}
		} catch (error) {
			error("Here is the error message", error);
		}
		var Search_Data = {
			Level_Detail_Id: Level_Detail_Id,
			Country_Id: Country_Id,
			Intake_Id: Intake_Id,
			Sub_Section_Id: Sub_Section_Id,
			Course_Name: Course_Name,
			Branch_Search: Branch_Search,
			Duration_Search: Duration_Search,
			Ielts_: Ielts_,
			Page_Start: Page_Start,
			Page_End: Page_End,
			Page_Length: Page_Length,
			University: University,
			Subject_1: Subject_1,
		};
		return this.http.get(
			environment.BasePath + "Public_Data/Public_Search_Course/",
			{ params: Search_Data }
		);
	}
	Get_More_Information(Course_Id): Observable<any> {
		return this.http.get(
			environment.BasePath + "Public_Data/Get_More_Information/" + Course_Id
		);
	}

	Search_Enquiry_Conversion(
		Search_FromDate,
		Search_ToDate,
		Login_User_Id_,
		look_In_Date_Value,
		branch_id
	): Observable<any> {
		return this.http.get(
			environment.BasePath +
				"Student/Search_Enquiry_Conversion/" +
				Search_FromDate +
				"/" +
				Search_ToDate +
				"/" +
				Login_User_Id_ +
				"/" +
				look_In_Date_Value +
				"/" +
				branch_id
		);
	}


	Search_Receipt_Confirmation(
		Search_FromDate,
		Search_ToDate,
		value,
		Search_Name,
		Login_User_Id_,
		look_In_Date_Value,
		branch_id,
		Fees_Receipt_Status_Id
	): Observable<any> {
		debugger
		return this.http.get(
			environment.BasePath +
				"Student/Search_Receipt_Confirmation/" +
				Search_FromDate +
				"/" +
				Search_ToDate +
				"/" +
				value +
				"/" +
				Search_Name +
				"/" +
				Login_User_Id_ +
				"/" +
				look_In_Date_Value +
				"/" +
				branch_id +
				"/" +
				Fees_Receipt_Status_Id
		);
	}


	Search_Refund_Confirmation(
		Search_FromDate,
		Search_ToDate,
		Login_User_Id_,
		look_In_Date_Value,
		branch_id,
		Fees_Receipt_Status_Id
	): Observable<any> {
		
		return this.http.get(
			environment.BasePath +
				"Student/Search_Refund_Confirmation/" +
				Search_FromDate +
				"/" +
				Search_ToDate +
				"/" +
				Login_User_Id_ +
				"/" +
				look_In_Date_Value +
				"/" +
				branch_id +
				"/" +
				Fees_Receipt_Status_Id
		);
	}

	Search_Refund_Approval(
		Search_FromDate,
		Search_ToDate,
		Login_User_Id_,
		look_In_Date_Value,
		branch_id,
		Fees_Receipt_Status_Id
	): Observable<any> {
		
		return this.http.get(
			environment.BasePath +
				"Student/Search_Refund_Approval/" +
				Search_FromDate +
				"/" +
				Search_ToDate +
				"/" +
				Login_User_Id_ +
				"/" +
				look_In_Date_Value +
				"/" +
				branch_id +
				"/" +
				Fees_Receipt_Status_Id
		);
	}

	Search_Task_Data(
		Search_FromDate,
		Search_ToDate,
		Login_User_Id_,
		look_In_Date_Value,
		Status_Id,
		Task_Item_Id,
		Pointer_Start_,
		Pointer_Stop_,
		Page_Length_,Assign_User_
	): Observable<any> {
		debugger
		return this.http.get(
			environment.BasePath +
				"Student/Search_Task_Data/" +
				Search_FromDate +
				"/" +
				Search_ToDate +
				"/" +
				Login_User_Id_ +
				"/" +
				look_In_Date_Value +
				"/" +
				Status_Id +
				"/" +
				Task_Item_Id+
				"/" +
				Pointer_Start_+
				"/" +
				Pointer_Stop_+
				"/" +
				Page_Length_+
				"/" +
				Assign_User_
		);
	}


	
	Search_Task_Data_Report(
		Search_FromDate,
		Search_ToDate,
		Login_User_Id_,
		look_In_Date_Value,
		Status_Id,
		Task_Item_Id,
		Pointer_Start_,
		Pointer_Stop_,
		Page_Length_
	): Observable<any> {
		
		return this.http.get(
			environment.BasePath +
				"Student/Search_Task_Data_Report/" +
				Search_FromDate +
				"/" +
				Search_ToDate +
				"/" +
				Login_User_Id_ +
				"/" +
				look_In_Date_Value +
				"/" +
				Status_Id +
				"/" +
				Task_Item_Id+
				"/" +
				Pointer_Start_+
				"/" +
				Pointer_Stop_+
				"/" +
				Page_Length_
		);
	}

	

	// Save_Student_Document(Document_Id, Student_Id, image: File[]) {
	// 	const postData = new FormData();
	// 	postData.append("Document_Id", Document_Id.toString());
	// 	postData.append("Student_Id", Student_Id.toString());
	// 	//postData.append("Image_Detail", Image_Detail);

	// 	var tm = "";
	// 	if (image != undefined) {
	// 		for (const img of image) {
	// 			postData.append("myFile", img);
	// 		}
	// 	}
	// 	return this.http.post(
	// 		environment.BasePath + "Student/Save_Student_Document",
	// 		postData
	// 	);
	// }
	Search_Employee_Summary(
		Search_FromDate,
		Search_ToDate,
		Login_User_Id_,
		look_In_Date_Value,
		branch_id
	): Observable<any> {
		return this.http.get(
			environment.BasePath +
				"Student/Search_Employee_Summary/" +
				Search_FromDate +
				"/" +
				Search_ToDate +
				"/" +
				Login_User_Id_ +
				"/" +
				look_In_Date_Value +
				"/" +
				branch_id
		);
	}
	Search_Work_History(
		Search_FromDate,
		Search_ToDate,
		Login_User_Id_,
		look_In_Date_Value,
		branch_id
	): Observable<any> {
		return this.http.get(
			environment.BasePath +
				"Student/Search_Work_History/" +
				Search_FromDate +
				"/" +
				Search_ToDate +
				"/" +
				Login_User_Id_ +
				"/" +
				look_In_Date_Value +
				"/" +
				branch_id
		);
	}
	Work_History_Send_Mail(Report_Data_): Observable<any> {
		return this.http.post(
			environment.BasePath + "Student/Work_History_Send_Mail/",
			Report_Data_
		);
	}
	Fees_Receipt_Mail(Receipt_Details_): Observable<any> {
		return this.http.post(
			environment.BasePath + "Student/Fees_Receipt_Mail/",
			Receipt_Details_
		);
	}
	Followup_History(Student_Id): Observable<any> {
		return this.http.get(
			environment.BasePath + "Student/Get_FollowUp_History/" + Student_Id
		);
	}
	Get_site_Pageload() {
		return this.http
			.get(environment.BasePath + "Public_Data/Get_site_Pageload/")
			.toPromise();
	}
	Get_Last_Followup(Login_User): Observable<any> {
		return this.http.get(
			environment.BasePath + "Student/Get_Last_FollowUp/" + Login_User
		);
	}
	Register_Candidate(Registration_Data_): Observable<any> {
		return this.http.post(
			environment.BasePath + "Student/Register_Candidate/",
			Registration_Data_
		);

		//return this.http.get(environment.BasePath + 'Student/Register_Candidate/' + Student_Id+ '/' +User_Id);
	}

	Send_Welcome_Mail(Send_Welcome_Mail_Data_): Observable<any> {
		return this.http.post(
			environment.BasePath + "Student/Send_Welcome_Mail/",
			Send_Welcome_Mail_Data_
		);
	}

	Delete_Receipt(Fees_Receipt_Id,Application_details_Id) {
		return this.http.get(
			environment.BasePath + "Student/Delete_Receipt/" + Fees_Receipt_Id +
			"/" +
			Application_details_Id
		);
	}

	Search_Receipt(Student_Id): Observable<any> {
		var Search_Data = { Student_Id: Student_Id };
		return this.http.get(environment.BasePath + "Student/Search_Receipt/", {
			params: Search_Data,
		});
	}

	Save_Receipt(Fees_Receipt_) {
		return this.http.post(
			environment.BasePath + "Student/Save_Receipt/",
			Fees_Receipt_
		);
	}
	Remove_Registration(Student_Id) {
		return this.http.get(
			environment.BasePath + "Student/Remove_Registration/" + Student_Id
		);
	}

	
	Search_Branch_Typeahead(Branch_Name): Observable<any> {
		return this.http.get(
			environment.BasePath + "Branch/Search_Branch_Typeahead/" + Branch_Name
		);
	}


	Search_Document_Typeahead(Document_Name): Observable<any> {
		return this.http.get(
			environment.BasePath + "Branch/Search_Document_Typeahead/" + Document_Name
		);
	}

	Search_Enquiry_Source_Typeahead(Enquiry_Source_Name): Observable<any> {
		return this.http.get(
			environment.BasePath + "Branch/Search_Enquiry_Source_Typeahead/" + Enquiry_Source_Name
		);
	}


	Search_Branch_User_Typeahead(Branch_Id, User_Details_Name_): Observable<any> {
		return this.http.get(
			environment.BasePath +
				"Department/Search_Branch_User_Typeahead/" +
				Branch_Id +
				"/" +
				User_Details_Name_
		);
	}
	Search_Branch_Department_Typeahead(Branch_Id, Dept_Name): Observable<any> {
		return this.http.get(
			environment.BasePath +
				"Department/Search_Branch_Department_Typeahead/" +	Branch_Id +"/" +Dept_Name
		);
	}



	// Search_Department_Typeahead(): Observable<any> {
	// 	return this.http.get(environment.BasePath +"Department/Search_Department_Typeahead/" );
	// }

	Search_Department_Typeahead(Student_Id): Observable<any> {
		return this.http.get(environment.BasePath +"Department/Search_Department_Typeahead/"  + Student_Id );
	}


	Search_Department_Typeahead_Tasknew(Student_Id): Observable<any> {
		
		return this.http.get(environment.BasePath +"Department/Search_Department_Typeahead_Tasknew/"  + Student_Id );
	}


	Search_Department_Status_Typeahead(Dept_Id, Status_Name): Observable<any> {
		
		return this.http.get(
			environment.BasePath +
				"Department/Search_Department_Status_Typeahead/" +
				Dept_Id +
				"/" +
				Status_Name
		);
	}


	Search_Department_Transfer_Status_Typeahead(Dept_Id, Status_Name): Observable<any> {
		return this.http.get(
			environment.BasePath +
				"Department/Search_Department_Transfer_Status_Typeahead/" +
				Dept_Id +
				"/" +
				Status_Name
		);
	}

	Get_All_ByUser(Login_User): Observable<any> {
		
		return this.http.get(
			environment.BasePath +
				"Student/Get_All_ByUser/" +
				Login_User 
				 
		);
	}

	Get_Subordinates_Users(Login_User): Observable<any> {
		
		return this.http.get(
			environment.BasePath +
				"Student/Get_Subordinates_Users/" +
				Login_User 
				 
		);
	}

	Search_Substatus_Typeahead(Status_Id, Sub_Status_Name): Observable<any> {
		
		return this.http.get(
			environment.BasePath +
				"Department/Search_Substatus_Typeahead/" +
				Status_Id +
				"/" +
				Sub_Status_Name
		);
	}
	Search_Fees_Typeahead(Fees_Id, Fees_Name): Observable<any> {
		return this.http.get(
			environment.BasePath +
				"Fees/Search_Fees_Typeahead/" +
				Fees_Id +
				"/" +
				Fees_Name
		);
	}
	Search_Department_User_Typeahead(
		Branch_Id,
		Dept_Id,
		User_name
	): Observable<any> {
		return this.http.get(
			environment.BasePath +
				"Department/Search_Department_User_Typeahead/" +
				Branch_Id +
				"/" +
				Dept_Id +
				"/" +
				User_name
		);
	}

	Search_Department_User_Typeahead_changestaff(
		Branch_Id,
		Dept_Id,
		User_name
	): Observable<any> {
		return this.http.get(
			environment.BasePath +
				"Department/Search_Department_User_Typeahead_changestaff/" +
				Branch_Id +
				"/" +
				Dept_Id +
				"/" +
				User_name
		);
	}



	// Save_Task_Complete(payload: any[], loginUser: any): Observable<any> {
	// 	const endpoint = `${this.baseUrl}/saveTaskComplete`; // Replace with your actual endpoint
	// 	const requestBody = {
	// 	  tasks: payload, 
	// 	  loginUser: loginUser // Pass loginUser along with the payload if required
	// 	};
	
	// 	return this.http.post(endpoint, requestBody);
	//   }

	  
	Save_Task_Complete(payload: any[], loginUser: any): Observable<any> {
		const requestBody = {
			tasks: payload,
			loginUser: loginUser // Include loginUser in the request if necessary
		};
	
		return this.http.post(
			`${environment.BasePath}Student/Save_Task_Complete/`,
			requestBody
		);
	}
	
	


	Search_Department_User_Typeahead_New(
		Branch_Id_,
		Department_Id_,
		Users_Name_,
		Usertype_
	): Observable<any> {
		return this.http.get(
			environment.BasePath +
				"Department/Search_Department_User_Typeahead_New/" +
				Branch_Id_ +
				"/" +
				Department_Id_ +
				"/" +
				Users_Name_ +
				"/" +
				Usertype_
		);
	}


	Search_Department_User_Typeahead_Change_User(
		Branch_Id_,
		Department_Id_,
		Users_Name_,
		Usertype_
	): Observable<any> {
		return this.http.get(
			environment.BasePath +
				"Department/Search_Department_User_Typeahead_Change_User/" +
				Branch_Id_ +
				"/" +
				Department_Id_ +
				"/" +
				Users_Name_ +
				"/" +
				Usertype_
		);
	}
	

	Search_User_Typeahead(User_name): Observable<any> {
		return this.http.get(
			environment.BasePath + "User_Details/Search_User_Typeahead/" + User_name
		);
	}

	Search_User_Typeahead_ByUser(Login_Id_, User_name): Observable<any> {
		return this.http.get(
			environment.BasePath +
				"User_Details/Search_User_Typeahead_ByUser/" +Login_Id_ +	"/" +	User_name
		);
	}

	Remarks_Typeahead(Remarks_Id): Observable<any> {
		var Search_Data = { Remarks_Name: Remarks_Id };
		return this.http.get(environment.BasePath + "Remarks/Remarks_Typeahead/", {
			params: Search_Data,
		});
	}
	Save_Student_Course(Student_Course_Apply_) {
		return this.http.post(
			environment.BasePath + "Public_Data/Save_Student_Course/",
			Student_Course_Apply_
		);
	}
	Get_Student_Course_Apply(Student_Id) {
		return this.http.get(
			environment.BasePath + "Student/Get_Student_Course_Apply/" + Student_Id
		);
	}


	Get_Student_Edit_check(Student_Id) {
		return this.http.get(
			environment.BasePath + "Student/Get_Student_Edit_check/" + Student_Id
		);
	}

	Get_Menu_Status(Menu_Id_, Login_User_) {
		return this.http.get(
			environment.BasePath +
				"Student/Get_Menu_Status/" +
				Menu_Id_ +
				"/" +
				Login_User_
		);
	}



	Get_Menu_Status_Multiple(Menu_Id_, Login_User_) {
		
		return this.http.get(
			environment.BasePath +
				"Student/Get_Menu_Status_Multiple/" +
				Menu_Id_ +
				"/" +
				Login_User_
		);
	}




	Delete_Student_Report(Student_) {
		return this.http.post(
			environment.BasePath + "Student/Delete_Student_Report/",
			Student_
		);
	}

	Delete_Student_Report1(Student_) {
		return this.http.post(
			environment.BasePath + "Student/Delete_Student_Report1/",
			Student_
		);
	}
	Delete_Student_freelancer(Student_Id)
{debugger
 return this.http.get(environment.BasePath +'Student/Delete_Student_freelancer_data/'+Student_Id);}
	Get_Resume_Photo(Student_Id) {
		return this.http.get(
			environment.BasePath + "Student/Get_Resume_Photo/" + Student_Id
		);
	}
	Get_MOI_Photo(Student_Id) {
		return this.http.get(
			environment.BasePath + "Student/Get_MOI_Photo/" + Student_Id
		);
	}
	Get_SOP_Photo(Student_Id) {
		return this.http.get(
			environment.BasePath + "Student/Get_SOP_Photo/" + Student_Id
		);
	}
	Get_IELTS_Photo(Student_Id) {
		return this.http.get(
			environment.BasePath + "Student/Get_IELTS_Photo/" + Student_Id
		);
	}
	Resume_Mode_Dropdown(): Observable<any> {
		return this.http.get(
			environment.BasePath + "Student/Resume_Mode_Dropdown/"
		);
	}
	Passport_Mode_Dropdown(): Observable<any> {
		return this.http.get(
			environment.BasePath + "Student/Passport_Mode_Dropdown/"
		);
	}
	LOR1_Mode_Dropdown(): Observable<any> {
		return this.http.get(environment.BasePath + "Student/LOR1_Mode_Dropdown/");
	}

	Task_Status_Dropdown(): Observable<any> {
		return this.http.get(environment.BasePath + "Student/Task_Status_Dropdown/");
	}

	Task_Item_Dropdown(Task_Group_Id_): Observable<any> {
		
		return this.http.get(environment.BasePath + "Student/Task_Item_Dropdown/" + Task_Group_Id_);
	}
	Task_Item_Dropdown_All(): Observable<any> {
		
		return this.http.get(environment.BasePath + "Student/Task_Item_Dropdown_All/");
	}
	LOR2_Mode_Dropdown(): Observable<any> {
		return this.http.get(environment.BasePath + "Student/LOR2_Mode_Dropdown/");
	}
	MOI_Mode_Dropdown(): Observable<any> {
		return this.http.get(environment.BasePath + "Student/MOI_Mode_Dropdown/");
	}
	SOP_Mode_Dropdown(): Observable<any> {
		return this.http.get(environment.BasePath + "Student/SOP_Mode_Dropdown/");
	}
	IELTS_Mode_Dropdown(): Observable<any> {
		return this.http.get(environment.BasePath + "Student/IELTS_Mode_Dropdown/");
	}
	Load_Agents(): Observable<any> {
		return this.http.get(environment.BasePath + "Agent/Load_Agents/");
	}
	Load_application_status(): Observable<any> {
		return this.http.get(
			environment.BasePath + "Student/Load_application_status/"
		);
	}
	Load_Marital_Status(): Observable<any> {
		return this.http.get(environment.BasePath + "Student/Load_Marital_Status/");
	}
	Load_Visa_Type(): Observable<any> {
		return this.http.get(environment.BasePath + "Student/Load_Visa_Type/");
	}
	Save_ApplicationDetails(ApplicationDetails_) {
		return this.http.post(
			environment.BasePath + "Student/Save_ApplicationDetails/",
			ApplicationDetails_
		);
	}
	Get_ApplicationDetails(Student_Id) {
		return this.http.get(
			environment.BasePath + "Student/Get_ApplicationDetails/" + Student_Id
		);
	}

	Get_Bph_ApplicationDetails(Student_Id) {
		return this.http.get(
			environment.BasePath + "Student/Get_Bph_ApplicationDetails/" + Student_Id
		);
	}
	Get_Feesrecepitdetails(Student_Id) {
		return this.http.get(
			environment.BasePath + "Student/Get_Feesrecepitdetails/" + Student_Id
		);
	}

	Get_Application_DocumentList(Application_details_Id) {
		return this.http.get(
			environment.BasePath +
				"Student/Get_Application_DocumentList/" +
				Application_details_Id
		);
	}
	Get_Feesrecepit_DocumentList(Fees_Receipt_Id) {
		return this.http.get(
			environment.BasePath +
				"Student/Get_Feesrecepit_DocumentList/" +
				Fees_Receipt_Id
		);
	}

	Get_ApplicationDetails_History(Student_Id) {
		return this.http.get(
			environment.BasePath +
				"Student/Get_ApplicationDetails_History/" +
				Student_Id
		);
	}

	Get_ApplicationDetailswise_History(Application_details_Id,Feesdetails_Id) {
		return this.http.get(
			environment.BasePath +
				"Student/Get_ApplicationDetailswise_History/" + Application_details_Id + "/" + Feesdetails_Id
		);
	}

	Get_ApplicationDetailswise_Dataview(Application_details_Id) {
		return this.http.get(
			environment.BasePath +
				"Student/Get_ApplicationDetailswise_Dataview/" + Application_details_Id 
		);
	}
	Search_ApplicationDetails(Application_details_Id): Observable<any> {
		return this.http.get(
			environment.BasePath +
				"Student/Search_ApplicationDetails/" +
				Application_details_Id
		);
	}

	Delete_Application_Details(Application_details_Id) {
		return this.http.get(
			environment.BasePath +
				"Student/Delete_Application_Details/" +
				Application_details_Id
		);
	}

	Get_Checklist() {
		return this.http.get(environment.BasePath + "Student/Get_Checklist/");
	}
	Get_Student_Edit(Student_Id_) {
		return this.http.get(
			environment.BasePath + "Student/Get_Student_Edit/" + Student_Id_
		);
	}

	//    Activate_Application(Application_details_Id_,Student_Id_): Observable<any> {
	//     return this.http.get(environment.BasePath + 'Student/Activate_Application/' + Application_details_Id_,Student_Id_);
	// }

	// Activate_Application(Application_details_Id, Student_Id): Observable<any> {
	// 	var Search_Data = {
	// 		Application_details_Id_: Application_details_Id,
	// 		Student_Id_: Student_Id,
	// 	};
	// 	return this.http.get(
	// 		environment.BasePath + "Student/Activate_Application/",
	// 		{ params: Search_Data }
	// 	);
	// }
	Activate_Application(Application_details_)
	{
		
	return this.http.post(environment.BasePath +'Student/Activate_Application/',Application_details_  );
	}


	// Get_ApplicationDetailswise_History(Application_details_Id,Feesdetails_Id) {
	// 	return this.http.get(
	// 		environment.BasePath +
	// 			"Student/Get_ApplicationDetailswise_History/" + Application_details_Id + "/" + Feesdetails_Id
	// 	);
	// }


	Save_Bph_Status(Application_Status_Edit, Login_User,Bph_Status,Bph_Remark): Observable<any> {
		
		var Search_Data = {
			Application_details_Id_: Application_Status_Edit,
			Login_User_: Login_User,
			Bph_Status_:Bph_Status,
			Bph_Remark_:Bph_Remark,
		};
		return this.http.get(
			environment.BasePath + "Student/Save_Bph_Status/",
			{ params: Search_Data }
		);
	}
	

	

	Student_Approve(Application_details_Id, Login_User): Observable<any> {
		
		var Search_Data = {
			Application_details_Id_: Application_details_Id,
			Login_User_: Login_User,
		};
		return this.http.get(
			environment.BasePath + "Student/Student_Approve/",
			{ params: Search_Data }
		);
	}

	Receipt_Approve(Fees_Receipt_Id, Login_User,applicationdetails_Id,Receiptamount): Observable<any> {
		
		var Search_Data = {
			Fees_Receipt_Id_: Fees_Receipt_Id,
			Login_User_: Login_User,
			applicationdetails_Id_:applicationdetails_Id,
			Receiptamount_:Receiptamount,
		};
		return this.http.get(
			environment.BasePath + "Student/Receipt_Approve/",
			{ params: Search_Data }
		);
	}
	Refund_Approve(
        Fees_Receipt_Id,
        Student_Id_temp_,
        Login_User
    ): Observable<any> {
        
        var Search_Data = {
            Fees_Receipt_Id_: Fees_Receipt_Id,
            Student_Id_temp_: Student_Id_temp_,
            Login_User_: Login_User,
        };
        return this.http.get(environment.BasePath + "Student/Refund_Approve/", {
            params: Search_Data,
        });
    }

	Lead_Refund_Approve_Reject(Fees_Receipt_Id,status,Comment, Login_User): Observable<any> {
		
		var Search_Data = {
			Fees_Receipt_Id_: Fees_Receipt_Id,
			Status_:status,
			Comment_:Comment,
			Login_User_: Login_User,
			
			
		};
		return this.http.get(
			environment.BasePath + "Student/Lead_Refund_Approve_Reject/",
			{ params: Search_Data }
		);
	}



	Remove_Receipt_Approval(Fees_Receipt_Id_) {
		return this.http.get(
			environment.BasePath +
				"Student/Remove_Receipt_Approval/" +
				Fees_Receipt_Id_
		);
	}



	Remove_Refund_Approval(Fees_Receipt_Id_, Login_User_) {
		return this.http.get(
			environment.BasePath +
				"Student/Remove_Refund_Approval/" +
				Fees_Receipt_Id_ +
				"/" +
				Login_User_
		);
	}

	Lead_Refund_Reject(Fees_Receipt_Id_) {
		return this.http.get(
			environment.BasePath +
				"Student/Lead_Refund_Reject/" +
				Fees_Receipt_Id_
		);
	}

	Remove_Activity(Application_details_Id_) {
		return this.http.get(
			environment.BasePath +
				"Student/Remove_Activity/" +
				Application_details_Id_
		);
	}
	
	
	Remove_Student_Approval(Application_details_Id_) {
		return this.http.get(
			environment.BasePath +
				"Student/Remove_Student_Approval/" +
				Application_details_Id_
		);
	}

	Save_Visa(
		Visa_,
		Visa_Document_File_Array: File[],
		Visa_Document_Array: any[],
		Visa_Document_Description: string,
		ImageFile_Visa: File[],
		Display_VisaFile_: string
	) {
		const postData = new FormData();

		if (Visa_ != null) {
			postData.append("Visa_Id", Visa_.Visa_Id);
			postData.append("Student_Id", Visa_.Student_Id);
			postData.append("Approved_Date", Visa_.Approved_Date);
			postData.append("Approved_Date_L", Visa_.Approved_Date_L);
			postData.append("Approved_Date_F", Visa_.Approved_Date_F);
			postData.append("Visa_Granted", Visa_.Visa_Granted);
			postData.append("Visa_Letter", Visa_.Visa_Letter);
			postData.append("Visa_File", Visa_.Visa_File);
			postData.append("Application_No", Visa_.Application_No);
			postData.append("Total_Fees", Visa_.Total_Fees);
			postData.append("Scholarship_Fees", Visa_.Scholarship_Fees);
			postData.append("Balance_Fees", Visa_.Balance_Fees);
			postData.append("Paid_Fees", Visa_.Paid_Fees);
			postData.append("Visa_Type_Id", Visa_.Visa_Type_Id);
			postData.append("Visa_Type_Name", Visa_.Visa_Type_Name);
			postData.append("Description", Visa_.Description);

			postData.append("Username", Visa_.Username);
			postData.append("Password", Visa_.Password);
			postData.append("Security_Question", Visa_.Security_Question);

			postData.append("Visa_Rejected", Visa_.Visa_Rejected);
			postData.append("Visa_Rejected_Date", Visa_.Visa_Rejected_Date);
			postData.append("ATIP_Submitted", Visa_.ATIP_Submitted);
			postData.append("ATIP_Submitted_Date", Visa_.ATIP_Submitted_Date);
			postData.append("ATIP_Received", Visa_.ATIP_Received);
			postData.append("ATIP_Received_Date", Visa_.ATIP_Received_Date);
			postData.append("Visa_Re_Submitted", Visa_.Visa_Re_Submitted);
			postData.append("Visa_Re_Submitted_Date", Visa_.Visa_Re_Submitted_Date);



		}

		var i = 0;

		postData.append("Visa_Document_File_Array", i.toString());
		if (Visa_Document_File_Array != undefined) {
			var j = 0;
			for (const img of Visa_Document_File_Array) {
				if (Visa_Document_Array[j].New_Entry == 1) {
					postData.append("myFile", img);
				}
				j++;
				i = i + 1;
			}
		}
		if (ImageFile_Visa != undefined) {
			for (const img of ImageFile_Visa) {
				postData.append("myFile", img);
				Visa_Document_Array.push({
					New_Entry: 1,
					Visa_Document_Name: Visa_Document_Description,
					Visa_Document_File_Name: Display_VisaFile_,
				});
				j++;
				i = i + 1;
			}
		}
		if (Visa_Document_Array != undefined) {
			var Visa_Document_Temp = "";
			j = 0;
			for (var i = 0; i < Visa_Document_Array.length; i++) {
				if (Visa_Document_Array[i].New_Entry == 1) {
					Visa_Document_Temp = "Visa_Document_Array" + j.toString();
					postData.append(
						Visa_Document_Temp,
						Visa_Document_Array[i].Visa_Document_Name
					);
					Visa_Document_Temp = "Visa_Document_File_Name" + j.toString();
					postData.append(
						Visa_Document_Temp,
						Visa_Document_Array[i].Visa_Document_File_Name
					);
					j++;
				}
			}
		}

		return this.http.post(environment.BasePath + "Student/Save_Visa", postData);
	}
	Get_Visa_Details(Student_Id) {
		return this.http.get(
			environment.BasePath + "Student/Get_Visa_Details/" + Student_Id
		);
	}
	Get_Visa_Documents(Visa_Id_) {
		return this.http.get(
			environment.BasePath + "Student/Get_Visa_Documents/" + Visa_Id_
		);
	}
	Delete_Visa(Visa_Id_) {
		return this.http.get(
			environment.BasePath + "Student/Delete_Visa/" + Visa_Id_
		);
	}
	Delete_Visa_Document(Visa_Document_Id_) {
		return this.http.get(
			environment.BasePath + "Student/Delete_Visa_Document/" + Visa_Document_Id_
		);
	}
	Save_Invoice(
		Invoice_,
		Invoice_Document_File_Array: File[],
		Invoice_Document_Array: any[],
		Invoice_Document_Description: string,
		ImageFile_Invoice: File[],
		Display_InvoiceFile_: string
	) {
		const postData = new FormData();

		if (Invoice_ != null) {
			postData.append("Invoice_Id", Invoice_.Invoice_Id);
			postData.append("Student_Id", Invoice_.Student_Id);
			postData.append("Entry_Date", Invoice_.Entry_Date);
			postData.append("Description", Invoice_.Description);
			postData.append("Amount", Invoice_.Amount);
		}

		var i = 0;

		postData.append("Invoice_Document_File_Array", i.toString());
		if (Invoice_Document_File_Array != undefined) {
			var j = 0;
			for (const img of Invoice_Document_File_Array) {
				if (Invoice_Document_Array[j].New_Entry == 1) {
					postData.append("myFile", img);
				}
				j++;
				i = i + 1;
			}
		}
		if (ImageFile_Invoice != undefined) {
			for (const img of ImageFile_Invoice) {
				postData.append("myFile", img);
				Invoice_Document_Array.push({
					New_Entry: 1,
					Invoice_Document_Name: Invoice_Document_Description,
					Invoice_Document_File_Name: Display_InvoiceFile_,
				});
				j++;
				i = i + 1;
			}
		}
		if (Invoice_Document_Array != undefined) {
			var Invoice_Document_Temp = "";
			j = 0;
			for (var i = 0; i < Invoice_Document_Array.length; i++) {
				if (Invoice_Document_Array[i].New_Entry == 1) {
					Invoice_Document_Temp = "Invoice_Document_Array" + j.toString();
					postData.append(
						Invoice_Document_Temp,
						Invoice_Document_Array[i].Invoice_Document_Name
					);
					Invoice_Document_Temp = "Invoice_Document_File_Name" + j.toString();
					postData.append(
						Invoice_Document_Temp,
						Invoice_Document_Array[i].Invoice_Document_File_Name
					);
					j++;
				}
			}
		}

		return this.http.post(
			environment.BasePath + "Student/Save_Invoice",
			postData
		);
	}
	Get_Invoice_Details(Student_Id) {
		return this.http.get(
			environment.BasePath + "Student/Get_Invoice_Details/" + Student_Id
		);
	}

	Move_To_Freelancer_Click(Student_Id,Login_User_Id_): Observable<any> {
		debugger
		const url = `${environment.BasePath}Student/Move_To_Freelancer_Click/${Student_Id}/${Login_User_Id_}`;
		
		return this.http.post(url, {});
	  }
	  
//   Move_To_Freelancer_Click(Student_Id,Login_User_Id_): Observable<any> {
// 	debugger
//     return this.http.post(
//       environment.BasePath + "Student/Move_To_Freelancer_Click/" + Student_Id +
// 	  "/" +
// 	  Login_User_Id_
//       {}
//     );
//   }

	Get_Invoice_Documents(Invoice_Id_) {
		return this.http.get(
			environment.BasePath + "Student/Get_Invoice_Documents/" + Invoice_Id_
		);
	}
	Delete_Invoice(Invoice_Id_) {
		return this.http.get(
			environment.BasePath + "Student/Delete_Invoice/" + Invoice_Id_
		);
	}
	Delete_Invoice_Document(Invoice_Document_Id_) {
		return this.http.get(
			environment.BasePath +
				"Student/Delete_Invoice_Document/" +
				Invoice_Document_Id_
		);
	}
	Get_Receipt_Sum(Student_Id_) {
		return this.http.get(
			environment.BasePath + "Student/Get_Receipt_Sum/" + Student_Id_
		);
	}
	Delete_Application_History(Application_details_history_Id_) {
		return this.http.get(
			environment.BasePath +
				"Student/Delete_Application_History/" +
				Application_details_history_Id_
		);
	}

	Transfer_With_Application(Application_Transfer_) {
        return this.http.post(environment.BasePath + 'Student/Transfer_With_Application/', Application_Transfer_);
    }

	My_Student_Report(
        Search_FromDate,
        Search_ToDate,
        value,
        Search_Name,
        dept_id,
        enquiry_source_id,
        Branch_Id,
        User_Id,
        Look_In_Date,
        Remove_Old_Datas,
        Page_Index1_,
        Page_Index2_,
        Login_User_Id_,
        RowCount_,
        RowCount2_,
        remarks_Id,
        To_User_,
        Status_Id_,
        Register_Value
    ): Observable<any> {
        return this.http.get(
            environment.BasePath +
                "Student/My_Student_Report/" +
                Search_FromDate +
                "/" +
                Search_ToDate +
                "/" +
                value +
                "/" +
                Search_Name +
                "/" +
                dept_id +
                "/" +
                enquiry_source_id +
                "/" +
                Branch_Id +
                "/" +
                User_Id +
                "/" +
                Look_In_Date +
                "/" +
                Remove_Old_Datas +
                "/" +
                Page_Index1_ +
                "/" +
                Page_Index2_ +
                "/" +
                Login_User_Id_ +
                "/" +
                RowCount_ +
                "/" +
                RowCount2_ +
                "/" +
                remarks_Id +
                "/" +
                To_User_ +
                "/" +
                Status_Id_ +
                "/" +
                Register_Value
        );
    }


	Freelancer_Transferred_lead_Data(
        Search_FromDate,
        Search_ToDate,
        value,
        Search_Name,
        dept_id,
        enquiry_source_id,
        Branch_Id,
        User_Id,
        Look_In_Date,
        Remove_Old_Datas,
        Page_Index1_,
        Page_Index2_,
        Login_User_Id_,
        RowCount_,
        RowCount2_,
        remarks_Id,
        To_User_,
        Status_Id_,
        Register_Value
    ): Observable<any> {
        return this.http.get(
            environment.BasePath +
                "Student/Freelancer_Transferred_lead_Data/" +
                Search_FromDate +
                "/" +
                Search_ToDate +
                "/" +
                value +
                "/" +
                Search_Name +
                "/" +
                dept_id +
                "/" +
                enquiry_source_id +
                "/" +
                Branch_Id +
                "/" +
                User_Id +
                "/" +
                Look_In_Date +
                "/" +
                Remove_Old_Datas +
                "/" +
                Page_Index1_ +
                "/" +
                Page_Index2_ +
                "/" +
                Login_User_Id_ +
                "/" +
                RowCount_ +
                "/" +
                RowCount2_ +
                "/" +
                remarks_Id +
                "/" +
                To_User_ +
                "/" +
                Status_Id_ +
                "/" +
                Register_Value
        );
    }

	Search_Student_Report(
        Search_FromDate,
        Search_ToDate,
        value,
        Search_Name,
        dept_id,
        enquiry_source_id,
        Branch_Id,
        User_Id,
        Look_In_Date,
        Remove_Old_Datas,
        Page_Index1_,
        Page_Index2_,
        Login_User_Id_,
        RowCount_,
        RowCount2_,
        remarks_Id,
        To_User_,
        Status_Id_,
        Register_Value,UserType_Value
    ): Observable<any> {
		debugger
        return this.http.get(
            environment.BasePath +
                "Student/Search_Student_Report/" +
                Search_FromDate +
                "/" +
                Search_ToDate +
                "/" +
                value +
                "/" +
                Search_Name +
                "/" +
                dept_id +
                "/" +
                enquiry_source_id +
                "/" +
                Branch_Id +
                "/" +
                User_Id +
                "/" +
                Look_In_Date +
                "/" +
                Remove_Old_Datas +
                "/" +
                Page_Index1_ +
                "/" +
                Page_Index2_ +
                "/" +
                Login_User_Id_ +
                "/" +
                RowCount_ +
                "/" +
                RowCount2_ +
                "/" +
                remarks_Id +
                "/" +
                To_User_ +
                "/" +
                Status_Id_ +
                "/" +
                Register_Value+
                "/" +
                UserType_Value
        );
    }

	Search_Freelancer_Commission_Management(
        Search_FromDate,
        Search_ToDate,
        Look_In_Date,freelancer_,
		commission_type_,
        Page_Index1_,
        Page_Index2_,
        Login_User_Id_,
        RowCount_,
        RowCount2_
    ): Observable<any> {
		debugger
        return this.http.get(
            environment.BasePath +
                "Student/Search_Freelancer_Commission_Management/" +
                Search_FromDate +
                "/" +
                Search_ToDate +
                "/" +
                Look_In_Date +
                "/" +
				freelancer_ +
                "/" +
                commission_type_  +
                "/" +
                Page_Index1_ +
                "/" +
                Page_Index2_ +
                "/" +
                Login_User_Id_ +
                "/" +
                RowCount_ +
                "/" +
                RowCount2_ 
        );
    }


	Lead_Search_Student_Report(
        Search_FromDate,
        Search_ToDate,
        value,
        Search_Name,
        dept_id,
        enquiry_source_id,
        Branch_Id,
        User_Id,
        Look_In_Date,
        Remove_Old_Datas,
        Page_Index1_,
        Page_Index2_,
        Login_User_Id_,
        RowCount_,
        RowCount2_,
        remarks_Id,
        To_User_,
        Status_Id_,
        Register_Value,UserType_Value,Date_Type_Value_
    ): Observable<any> {
		debugger
        return this.http.get(
            environment.BasePath +
                "Student/Lead_Search_Student_Report/" +
                Search_FromDate +
                "/" +
                Search_ToDate +
                "/" +
                value +
                "/" +
                Search_Name +
                "/" +
                dept_id +
                "/" +
                enquiry_source_id +
                "/" +
                Branch_Id +
                "/" +
                User_Id +
                "/" +
                Look_In_Date +
                "/" +
                Remove_Old_Datas +
                "/" +
                Page_Index1_ +
                "/" +
                Page_Index2_ +
                "/" +
                Login_User_Id_ +
                "/" +
                RowCount_ +
                "/" +
                RowCount2_ +
                "/" +
                remarks_Id +
                "/" +
                To_User_ +
                "/" +
                Status_Id_ +
                "/" +
                Register_Value+
                "/" +
                UserType_Value+
				"/"+
				Date_Type_Value_
        );
    }
	Agent_Search_Student_Report(
        Search_FromDate,
        Search_ToDate,
        value,
        Search_Name,
        dept_id,
        enquiry_source_id,
        Branch_Id,
        User_Id,
        Look_In_Date,
        Remove_Old_Datas,
        Page_Index1_,
        Page_Index2_,
        Login_User_Id_,
        RowCount_,
        RowCount2_,
        remarks_Id,
        To_User_,
        Status_Id_,
        Register_Value,UserType_Value,Application_Status_Search
    ): Observable<any> {
		debugger
        return this.http.get(
            environment.BasePath +
                "Student/Agent_Search_Student_Report/" +
                Search_FromDate +
                "/" +
                Search_ToDate +
                "/" +
                value +
                "/" +
                Search_Name +
                "/" +
                dept_id +
                "/" +
                enquiry_source_id +
                "/" +
                Branch_Id +
                "/" +
                User_Id +
                "/" +
                Look_In_Date +
                "/" +
                Remove_Old_Datas +
                "/" +
                Page_Index1_ +
                "/" +
                Page_Index2_ +
                "/" +
                Login_User_Id_ +
                "/" +
                RowCount_ +
                "/" +
                RowCount2_ +
                "/" +
                remarks_Id +
                "/" +
                To_User_ +
                "/" +
                Status_Id_ +
                "/" +
                Register_Value+
                "/" +
                UserType_Value+
				"/" +
				Application_Status_Search
        );
    }


	Student_data_Search_Report(
        Search_FromDate,
        Search_ToDate,
        value,
        Search_Name,
        dept_id,
        enquiry_source_id,
        Branch_Id,
        User_Id,
        Look_In_Date,
        Remove_Old_Datas,
        Page_Index1_,
        Page_Index2_,
        Login_User_Id_,
        RowCount_,
        RowCount2_,
        remarks_Id,
        To_User_,
        Status_Id_,
        Register_Value,UserType_Value,Date_Type_Value_
    ): Observable<any> {
		debugger
        return this.http.get(
            environment.BasePath +
                "Student/Student_data_Search_Report/" +
                Search_FromDate +
                "/" +
                Search_ToDate +
                "/" +
                value +
                "/" +
                Search_Name +
                "/" +
                dept_id +
                "/" +
                enquiry_source_id +
                "/" +
                Branch_Id +
                "/" +
                User_Id +
                "/" +
                Look_In_Date +
                "/" +
                Remove_Old_Datas +
                "/" +
                Page_Index1_ +
                "/" +
                Page_Index2_ +
                "/" +
                Login_User_Id_ +
                "/" +
                RowCount_ +
                "/" +
                RowCount2_ +
                "/" +
                remarks_Id +
                "/" +
                To_User_ +
                "/" +
                Status_Id_ +
                "/" +
                Register_Value+
                "/" +
                UserType_Value+
				"/"+
				Date_Type_Value_
        );
    }


Search_Passport_Expiry_Report(
        Search_FromDate,
        Search_ToDate,
        User_Id,
        Login_User_Id_,
        look_In_Date_Value
    ): Observable<any> {
        return this.http.get(
            environment.BasePath +
                "Student/Search_Passport_Expiry_Report/" +
                Search_FromDate +
                "/" +
                Search_ToDate +
                "/" +
                User_Id +
                "/" +
                Login_User_Id_ +
                "/" +
                look_In_Date_Value 
        );
    }


	Search_Agent_Application_Report(
    
        Search_FromDate,
        Search_ToDate,
        Branch_Id,
        By_User_,
        Look_In_Date,
        Login_User_Id_,
        Status_Value_,
        Agent_Id_,
        Application_status_Id_,
        Intake_Id_,
        Intake_Year_Id_,
        Country_Id_,
        University_Id_,
        Active_In_Vlaue_,To_User_Id_,Course_Id_
    ): Observable<any> {
        
        var Search_Data = {
            Fromdate_: Search_FromDate,
            Todate_: Search_ToDate,
            Branch_: Branch_Id,
            By_User_: By_User_,
            Is_Date_Check_: Look_In_Date,
            Login_User_Id_: Login_User_Id_,
            Status_Value_: Status_Value_,
            Agent_Id_: Agent_Id_,
            Application_status_Id_: Application_status_Id_,
            Intake_Id_: Intake_Id_,
            Intake_Year_Id_: Intake_Year_Id_,
            Country_Id_: Country_Id_,
            University_Id_:University_Id_,
            Is_Active_Check_:Active_In_Vlaue_,
			To_User_Id_:To_User_Id_,
			Course_Id_:Course_Id_
        };
        return this.http.get(
            environment.BasePath + "Student/Search_Agent_Application_Report/",
            { params: Search_Data }
        );
    }


	
	Search__direct_Application_Report(
    
        Search_FromDate,
        Search_ToDate,
        Branch_Id,
        By_User_,
        Look_In_Date,
        Login_User_Id_,
        Status_Value_,
        Agent_Id_,
        Application_status_Id_,
        Intake_Id_,
        Intake_Year_Id_,
        Country_Id_,
        University_Id_,
        Active_In_Vlaue_,To_User_Id_,Course_Id_
    ): Observable<any> {
        
        var Search_Data = {
            Fromdate_: Search_FromDate,
            Todate_: Search_ToDate,
            Branch_: Branch_Id,
            By_User_: By_User_,
            Is_Date_Check_: Look_In_Date,
            Login_User_Id_: Login_User_Id_,
            Status_Value_: Status_Value_,
            Agent_Id_: Agent_Id_,
            Application_status_Id_: Application_status_Id_,
            Intake_Id_: Intake_Id_,
            Intake_Year_Id_: Intake_Year_Id_,
            Country_Id_: Country_Id_,
            University_Id_:University_Id_,
            Is_Active_Check_:Active_In_Vlaue_,
			To_User_Id_:To_User_Id_,
			Course_Id_:Course_Id_
        };
        return this.http.get(
            environment.BasePath + "Student/Search__direct_Application_Report/",
            { params: Search_Data }
        );
    }

// Search_Application_Report(
    
//         Search_FromDate,
//         Search_ToDate,
//         Branch_Id,
//         By_User_,
//         Look_In_Date,
//         Login_User_Id_,
//         Status_Value_,
//         Agent_Id_,
//         Application_status_Id_,
//         Intake_Id_,
//         Intake_Year_Id_,
//         Country_Id_,
//         University_Id_,
//         Active_In_Vlaue_,To_User_Id_,Course_Id_,
//     ): Observable<any> {
        
//         var Search_Data = {
//             Fromdate_: Search_FromDate,
//             Todate_: Search_ToDate,
//             Branch_: Branch_Id,
//             By_User_: By_User_,
//             Is_Date_Check_: Look_In_Date,
//             Login_User_Id_: Login_User_Id_,
//             Status_Value_: Status_Value_,
//             Agent_Id_: Agent_Id_,
//             Application_status_Id_: Application_status_Id_,
//             Intake_Id_: Intake_Id_,
//             Intake_Year_Id_: Intake_Year_Id_,
//             Country_Id_: Country_Id_,
//             University_Id_:University_Id_,
//             Is_Active_Check_:Active_In_Vlaue_,
// 			To_User_Id_:To_User_Id_,
// 			Course_Id_:Course_Id_
//         };
//         return this.http.get(
//             environment.BasePath + "Student/Search_Application_Report/",
//             { params: Search_Data }
//         );
//     }


	
Search_Application_Report(
    
	Search_FromDate,
	Search_ToDate,
	Branch_Id,
	By_User_,
	Look_In_Date,
	Login_User_Id_,
	Status_Value_,
	Agent_Id_,
	Application_status_Id_,
	Intake_Id_,
	Intake_Year_Id_,
	Country_Id_,
	University_Id_,
	Active_In_Vlaue_,To_User_Id_,Course_Id_,Subordinators_id_
): Observable<any> {
	
	var Search_Data = {
		Fromdate_: Search_FromDate,
		Todate_: Search_ToDate,
		Branch_: Branch_Id,
		By_User_: By_User_,
		Is_Date_Check_: Look_In_Date,
		Login_User_Id_: Login_User_Id_,
		Status_Value_: Status_Value_,
		Agent_Id_: Agent_Id_,
		Application_status_Id_: Application_status_Id_,
		Intake_Id_: Intake_Id_,
		Intake_Year_Id_: Intake_Year_Id_,
		Country_Id_: Country_Id_,
		University_Id_:University_Id_,
		Is_Active_Check_:Active_In_Vlaue_,
		To_User_Id_:To_User_Id_,
		Course_Id_:Course_Id_,
		Subordinators_id_:Subordinators_id_
	};
	return this.http.get(
		environment.BasePath + "Student/Search_Application_Report/",
		{ params: Search_Data }
	);
}

	Make_A_Call(Extension_Data_)
    {
        
    return this.http.post( 'https://pbx.voxbaysolutions.com/api/call.php?uid=beepDGDSFsdGvd4pidqnopsdvcDS596&pin=honedfsafser1roykSsa6djklasfAW4563&ext='+Extension_Data_.Extension+'&destination='+Extension_Data_.Phone_No,'' );}




	Notification_Read_Status(Notification_Count_,User_Id_): Observable<any> {
        return this.http.get(environment.BasePath + "Student/Notification_Read_Status/"+Notification_Count_+'/'+User_Id_);
    }
	update_Read_Status(login_user_, Notification_Id_) {
		var Search_Data = {
			login_Id_: login_user_,
			Notification_Id_: Notification_Id_,
		};
		return this.http.get(environment.BasePath + "Student/update_Read_Status/", {
			params: Search_Data,
		});
	}


	Search_Department_User_Typeahead_Task(Dept_Id): Observable<any> {
		
		return this.http.get(environment.BasePath +"Department/Search_Department_User_Typeahead_Task/"  + Dept_Id);
	}

	Search_Department_User_Typeahead_Tasknew(Dept_Id,Student_Id): Observable<any> {
		
		return this.http.get(environment.BasePath +"Department/Search_Department_User_Typeahead_Tasknew/"  + Dept_Id + "/" + Student_Id);
	}
	Search_Faculty_Typeahead(Users_Name,Role_Type): Observable<any> {
		debugger
		var Search_Data = { Users_Name: Users_Name,Role_Type:Role_Type };
		return this.http.get(
			environment.BasePath + "Student/Search_Faculty_Typeahead/",
			{ params: Search_Data }
		);
	}

	Save_CAS_NewTask_Followup(Cas_Followup_)
	{
		
	return this.http.post(environment.BasePath +'Student/Save_CAS_NewTask_Followup/',Cas_Followup_);
	}


	Save_CAS_NewTask_Followup_Navbar(Cas_Followup_)
	{
		
	return this.http.post(environment.BasePath +'Student/Save_CAS_NewTask_Followup_Navbar/',Cas_Followup_);
	}
	
	Get_Tasknew_Task(Student_Id,Task_Group_Id,Login_User_) {
		
		return this.http.get(
			environment.BasePath + "Student/Get_Tasknew_Task/" + Student_Id+ "/"+ Task_Group_Id+"/"+Login_User_
		);
	}


	Delete_Tasknew(Student_Task_Id)
	{
	   
	 return this.http.get(environment.BasePath +'Student/Delete_Tasknew/'+Student_Task_Id);}
	 Search_Agent_Application_Report_old(Search_FromDate,
		Search_ToDate,LoginUser_Id_,
		// Course_Id_,
		Course_Ids_: number[],
		Country_Id_,
		// University_Id_,
		University_Ids_: number[],
		Intake_Id_,Intake_Year_Id_,Department_Status_Id_,Enrolled_Application_Only_View_Permission_,Pointer_Start_,Pointer_Stop_,Page_Length_,
		Is_View_,Department_Id_,search_name_,look_In_Date_Value,followup_user_selection,View_Type_,Entry_type_,search_application_no_,To_User_Id,application_status_,Created_User_Id): Observable<any> {
			debugger
			// Convert the array of University IDs to a comma-separated string
			const University_Id_ = University_Ids_.join(',');
			const Course_Id_ = Course_Ids_.join(',');
			return this.http.get(environment.BasePath + "Student/Search_Agent_Application_Report_old/"+Search_FromDate +'/' +Search_ToDate +'/' +LoginUser_Id_+'/'
			 +Course_Id_+'/' +Country_Id_+'/' +University_Id_+'/'+Intake_Id_+'/'+Intake_Year_Id_+'/'+Department_Status_Id_+'/'+Enrolled_Application_Only_View_Permission_+'/'+Pointer_Start_+'/'+Pointer_Stop_+'/'
			 +Page_Length_+'/'+Is_View_+'/'+Department_Id_+'/'+search_name_+'/'+look_In_Date_Value+'/'+followup_user_selection+'/'+ View_Type_+'/'+ Entry_type_+'/'+ search_application_no_+'/'+ To_User_Id+'/'+ application_status_+'/'+ Created_User_Id);
    }
	Search_Direct_Application_Report_new(Search_FromDate,
		Search_ToDate,LoginUser_Id_,
		// Course_Id_,
		Course_Ids_: number[],
		Country_Id_,
		// University_Id_,
		University_Ids_: number[],
		Intake_Id_,Intake_Year_Id_,Department_Status_Id_,Enrolled_Application_Only_View_Permission_,Pointer_Start_,Pointer_Stop_,Page_Length_,
		Is_View_,Department_Id_,search_name_,look_In_Date_Value,followup_user_selection,View_Type_,Entry_type_,search_application_no_,To_User_Id,application_status_,): Observable<any> {
			debugger
			// Convert the array of University IDs to a comma-separated string
			const University_Id_ = University_Ids_.join(',');
			const Course_Id_ = Course_Ids_.join(',');
			return this.http.get(environment.BasePath + "Student/Search_Direct_Application_Report_new/"+Search_FromDate +'/' +Search_ToDate +'/' +LoginUser_Id_+'/'
			 +Course_Id_+'/' +Country_Id_+'/' +University_Id_+'/'+Intake_Id_+'/'+Intake_Year_Id_+'/'+Department_Status_Id_+'/'+Enrolled_Application_Only_View_Permission_+'/'+Pointer_Start_+'/'+Pointer_Stop_+'/'
			 +Page_Length_+'/'+Is_View_+'/'+Department_Id_+'/'+search_name_+'/'+look_In_Date_Value+'/'+followup_user_selection+'/'+ View_Type_+'/'+ Entry_type_+'/'+ search_application_no_+'/'+ To_User_Id+'/'+ application_status_);
    }
	 Search_Application_List(Search_FromDate,
		Search_ToDate,LoginUser_Id_,
		// Course_Id_,
		Course_Ids_: number[],
		Country_Id_,
		// University_Id_,
		University_Ids_: number[],
		Intake_Id_,Intake_Year_Id_,Department_Status_Id_,To_User_Id_,Enrolled_Application_Only_View_Permission_,Pointer_Start_,Pointer_Stop_,Page_Length_,
		Is_View_,Department_Id_,search_name_,look_In_Date_Value,followup_user_selection,View_Type_,Entry_type_,search_application_no_,application_status_ ,Created_User_Id_): Observable<any> {
			debugger
			// Convert the array of University IDs to a comma-separated string
			const University_Id_ = University_Ids_.join(',');
			const Course_Id_ = Course_Ids_.join(',');
			return this.http.get(environment.BasePath + "Student/Search_Application_List/"+Search_FromDate +'/' +Search_ToDate +'/' +LoginUser_Id_+'/'
			 +Course_Id_+'/' +Country_Id_+'/' +University_Id_+'/'+Intake_Id_+'/'+Intake_Year_Id_+'/'+Department_Status_Id_+'/'+To_User_Id_+'/'+Enrolled_Application_Only_View_Permission_+'/'+Pointer_Start_+'/'+Pointer_Stop_+'/'
			 +Page_Length_+'/'+Is_View_+'/'+Department_Id_+'/'+search_name_+'/'+look_In_Date_Value+'/'+followup_user_selection+'/'+ View_Type_+'/'+ Entry_type_+'/'+ search_application_no_+'/'+ application_status_+'/'+ Created_User_Id_);
    }
	Load_Application_status_for_user(Login_User_Id_): Observable<any> {
		return this.http.get(
			environment.BasePath + "Student/Load_Application_status_for_user/"+Login_User_Id_
		);
	}
	Save_Application_Status(Application_Status_Edit, Login_User,Application_Status_,Bph_Remark): Observable<any> {
		
		var Search_Data = {
			Application_details_Id_: Application_Status_Edit,
			Login_User_: Login_User,
			Application_Status_:Application_Status_,
			Bph_Remark_:Bph_Remark,
		};
		return this.http.get(
			environment.BasePath + "Student/Save_Application_Status/",
			{ params: Search_Data }
		);
	}
	
	Load_Automatic_Departments(): Observable<any> {
		return this.http.get(
			environment.BasePath + "Student/Load_Automatic_Departments/"
		);
	}
	Get_ToStaff_Student_DataCount(Branch_,Followup_Date_) {
        
        return this.http.get(
            
            environment.BasePath + "Student/Get_ToStaff_Student_DataCount/" + Branch_+ "/"+ Followup_Date_
        );
    }

	Load_Application_status_forchangestatus(Login_Id_): Observable<any> {
		return this.http.get(
			environment.BasePath + "Student/Load_Application_status_forchangestatus/"+Login_Id_
		);
	}

	// Save_Lodgemet(Application_Status_Edit, Login_User,Application_Status_Id,Application_Status_Name,Application_No,Agent_Id,Agent_Name): Observable<any> {
	// 	
	// 	var Search_Data = {
	// 		Application_details_Id_: Application_Status_Edit,
	// 		Login_User_: Login_User,
	// 		Application_Status_Id_:Application_Status_Id,
	// 		Application_Status_Name_:Application_Status_Name,
	// 		Application_No_:Application_No,
	// 		Agent_Id_:Agent_Id,
	// 		Agent_Name_:Agent_Name,
	// 	};
	// 	return this.http.get(
	// 		environment.BasePath + "Student/Save_Lodgemet/",
	// 		{ params: Search_Data }
	// 	);
	// }


	Load_Restriction_Status(): Observable<any> {
        return this.http.get(
            environment.BasePath + "Student/Load_Restriction_Status/"
        );
    }
	

	Load_OfferLetter_Type(): Observable<any> {
        return this.http.get(
            environment.BasePath + "Student/Load_OfferLetter_Type/"
        );
    }


	Save_Offerchasingdetails(ApplicationDetails_)
	{
	return this.http.post(environment.BasePath +'Student/Save_Offerchasingdetails/',ApplicationDetails_);
	}


	Save_Student_Document(
		Student_Documents_,
		ImageFile_Doc: File[],
		Document_File_Array:any[] 
	  ) {
		debugger
		// const postData = new FormData();
		// 	postData.append("Student_Document_Id", Student_Documents_.Student_Document_Id);
		// 	postData.append("Student_Id", Student_Documents_.Student_Id);
		// 	postData.append("File_Name", Student_Documents_.File_Name);
		// 	postData.append("Description", Student_Documents_.Description); 
		// 	postData.append("Document_Id", Student_Documents_.Document_Id);
		// 	postData.append("Document_Name", Student_Documents_.Document_Name);
		// var i = 0;
		
		// if (ImageFile_Doc != undefined) {
		//   for (const img of ImageFile_Doc) {
		// 	postData.append("myFile", img);
		// 	postData.append("ImageFile_Doc", i.toString());
		// 	i = i + 1;
		//   }
		// }
		// postData.append("Document_File_Array", i.toString());
		
		return this.http.post(environment.BasePath + "Student/Save_Student_Document", Student_Documents_);
	  }




	  Search_Conditions(Application_details_Id): Observable<any> {
        return this.http.get(environment.BasePath + 'Student/Search_Conditions/' + Application_details_Id);
    }


	Save_Viewconditions(Conditions_Search_Data)
{
return this.http.post(environment.BasePath +'Student/Save_Viewconditions/',Conditions_Search_Data);}



Load_Application_status_forchangestatus_restriction(Group_Restriction_): Observable<any> {
	return this.http.get(
		environment.BasePath + "Student/Load_Application_status_forchangestatus_restriction/"+Group_Restriction_
	);
}

Load_ChatUser_Details(Value_, Login_User_): Observable<any> {
	return this.http.get(
		environment.BasePath +
			"Student/Load_ChatUser_Details/" +
			Value_ +
			"/" +
			Login_User_
	);
}

Load_Conditions_Subdata_Edit(Application_details_Id_): Observable<any> {
	return this.http.get(
		environment.BasePath + "Student/Load_Conditions_Subdata_Edit/"+Application_details_Id_
	);
}

Save_Lodgemet(Status_Change_Data_)
{
	debugger
return this.http.post(environment.BasePath +'Student/Save_Lodgemet/',Status_Change_Data_);
}

Save_Application_Change_User(Status_Change_Data_)
{
	
return this.http.post(environment.BasePath +'Student/Save_Application_Change_User/',Status_Change_Data_);
}


Save_DocumentName(Document_)
{
return this.http.post(environment.BasePath +'Student/Save_DocumentName/',Document_);}

Search_DocumentName(Document_Name):Observable<any>
{
        
var Search_Data={'Document_Name':Document_Name}
 return this.http.get(environment.BasePath +'Student/Search_DocumentName/',{params:Search_Data});}

 Delete_DocumentName(Document_Id)
 {
  return this.http.get(environment.BasePath +'Student/Delete_DocumentName/'+Document_Id);}

  Get_ToStaff_Student_DataCount_Excel(Branch_,Followup_Date_,Department_) {
	
	return this.http.get(
		
		environment.BasePath + "Student/Get_ToStaff_Student_DataCount_Excel/" + Branch_+ "/"+ Followup_Date_ + "/" + Department_
	);
  }

  Search_Users_Import(Users_Name): Observable<any> {
	var Search_Data = { Users_Name: Users_Name };
	return this.http.get(
		environment.BasePath + "Student/Search_Users_Import/",
		{ params: Search_Data }
	);
}

Get_FollowUp_History_Withdate(Student_Id): Observable<any> {
    return this.http.get(
      environment.BasePath +
        "Student/Get_FollowUp_History_Withdate/" +
        Student_Id
    );
  }


  Save_CAS_NewTask_Followup_By_Process_ID(Cas_Followup_) {
    return this.http.post(
      environment.BasePath + "Student/Save_CAS_NewTask_Followup_By_Process_Id",
      Cas_Followup_
    );
  }


  Search_EnquirywiseStatus_Summary(
	Search_FromDate,
	Search_ToDate,
	User_Id,
	Login_User_Id_,
	look_In_Date_Value,
	Status_Id_
): Observable<any> {
	return this.http.get(
		environment.BasePath +
			"Student/Search_EnquirywiseStatus_Summary/" +
			Search_FromDate +
			"/" +
			Search_ToDate +
			"/" +
			User_Id +
			"/" +
			Login_User_Id_ +
			"/" +
			look_In_Date_Value +
			"/" +
			Status_Id_
	);
}
Search_EnquirywiseStatus_report(
	Search_FromDate,
	Search_ToDate,
	value,
	Search_Name,
	dept_id,
	Status_Id_,
	User_Id,
	Look_In_Date,
	Page_Index1_,
	Page_Index2_,
	Login_User_Id_,
	RowCount_,
	RowCount2_
): Observable<any> {
	return this.http.get(
		environment.BasePath +
			"Student/Search_EnquirywiseStatus_report/" +
			Search_FromDate +
			"/" +
			Search_ToDate +
			"/" +
			value +
			"/" +
			Search_Name +
			"/" +
			dept_id +
			"/" +
			Status_Id_ +
			"/" +
			User_Id +
			"/" +
			Look_In_Date +
			"/" +
			Page_Index1_ +
			"/" +
			Page_Index2_ +
			"/" +
			Login_User_Id_ +
			"/" +
			RowCount_ +
			"/" +
			RowCount2_
	);
}
Search_DepartmentStatus_Summary(
	Search_FromDate,
	Search_ToDate,
	User_Id,
	Login_User_Id_,
	look_In_Date_Value,
	Department_Id_
): Observable<any> {
	return this.http.get(
		environment.BasePath +
			"Student/Search_DepartmentStatus_Summary/" +
			Search_FromDate +
			"/" +
			Search_ToDate +
			"/" +
			User_Id +
			"/" +
			Login_User_Id_ +
			"/" +
			look_In_Date_Value +
			"/" +
			Department_Id_
	);
}




Search_Department_Report(
	Search_FromDate,
	Search_ToDate,
	User_Id,
	Login_User_Id_,
	look_In_Date_Value,
	Department_Id_
): Observable<any> {
	return this.http.get(
		environment.BasePath +
			"Student/Search_Department_Report/" +
			Search_FromDate +
			"/" +
			Search_ToDate +
			"/" +
			User_Id +
			"/" +
			Login_User_Id_ +
			"/" +
			look_In_Date_Value +
			"/" +
			Department_Id_
	);
}



Search_DepartmentStatus_report(
	Search_FromDate,
	Search_ToDate,
	value,
	Search_Name,
	dept_id,
	Branch_Id_,
	User_Id,
	Look_In_Date,
	Page_Index1_,
	Page_Index2_,
	Login_User_Id_,
	RowCount_,
	RowCount2_,
	Status_Id_
): Observable<any> {
	return this.http.get(
		environment.BasePath +
			"Student/Search_DepartmentStatus_report/" +
			Search_FromDate +
			"/" +
			Search_ToDate +
			"/" +
			value +
			"/" +
			Search_Name +
			"/" +
			dept_id +
			"/" +
			Branch_Id_ +
			"/" +
			User_Id +
			"/" +
			Look_In_Date +
			"/" +
			Page_Index1_ +
			"/" +
			Page_Index2_ +
			"/" +
			Login_User_Id_ +
			"/" +
			RowCount_ +
			"/" +
			RowCount2_+
			"/"+
			Status_Id_
	);
}



Search_Department_Details_report(
	Search_FromDate,
	Search_ToDate,
	value,
	Search_Name,
	dept_id,
	Branch_Id_,
	User_Id,
	Look_In_Date,
	Page_Index1_,
	Page_Index2_,
	Login_User_Id_,
	RowCount_,
	RowCount2_,
	Status_Id_
): Observable<any> {
	return this.http.get(
		environment.BasePath +
			"Student/Search_Department_Details_report/" +
			Search_FromDate +
			"/" +
			Search_ToDate +
			"/" +
			value +
			"/" +
			Search_Name +
			"/" +
			dept_id +
			"/" +
			Branch_Id_ +
			"/" +
			User_Id +
			"/" +
			Look_In_Date +
			"/" +
			Page_Index1_ +
			"/" +
			Page_Index2_ +
			"/" +
			Login_User_Id_ +
			"/" +
			RowCount_ +
			"/" +
			RowCount2_+
			"/"+
			Status_Id_
	);
}


Search_Application_Data(
    
	Search_FromDate,
	Search_ToDate,
	Branch_Id,
	By_User_,
	Look_In_Date,
	Login_User_Id_,
	Status_Value_,
	Agent_Id_,
	Application_status_Id_,
	Intake_Id_,
	Intake_Year_Id_,
	Country_Id_,
	University_Id_,
	Active_In_Vlaue_
): Observable<any> {
	
	var Search_Data = {
		Fromdate_: Search_FromDate,
		Todate_: Search_ToDate,
		Branch_: Branch_Id,
		By_User_: By_User_,
		Is_Date_Check_: Look_In_Date,
		Login_User_Id_: Login_User_Id_,
		Status_Value_: Status_Value_,
		Agent_Id_: Agent_Id_,
		Application_status_Id_: Application_status_Id_,
		Intake_Id_: Intake_Id_,
		Intake_Year_Id_: Intake_Year_Id_,
		Country_Id_: Country_Id_,
		University_Id_:University_Id_,
		Is_Active_Check_:Active_In_Vlaue_
	};
	return this.http.get(
		environment.BasePath + "Student/Search_Application_Data/",
		{ params: Search_Data }
	);
}


Search_Student_Report_Followup(
	Search_FromDate,
	Search_ToDate,
	value,
	Search_Name,
	dept_id,
	enquiry_source_id,
	Branch_Id,
	User_Id,
	Look_In_Date,
	Remove_Old_Datas,
	Page_Index1_,
	Page_Index2_,
	Login_User_Id_,
	RowCount_,
	RowCount2_,
	remarks_Id,
	To_User_,
	Status_Id_,
	Register_Value,
	Date_value_
): Observable<any> {
	return this.http.get(
		environment.BasePath +
			"Student/Search_Student_Report_Followup/" +
			Search_FromDate +
			"/" +
			Search_ToDate +
			"/" +
			value +
			"/" +
			Search_Name +
			"/" +
			dept_id +
			"/" +
			enquiry_source_id +
			"/" +
			Branch_Id +
			"/" +
			User_Id +
			"/" +
			Look_In_Date +
			"/" +
			Remove_Old_Datas +
			"/" +
			Page_Index1_ +
			"/" +
			Page_Index2_ +
			"/" +
			Login_User_Id_ +
			"/" +
			RowCount_ +
			"/" +
			RowCount2_ +
			"/" +
			remarks_Id +
			"/" +
			To_User_ +
			"/" +
			Status_Id_ +
			"/" +
			Register_Value+
			"/"+Date_value_
	);
}
// uploadFile(file) {
//     return new Promise((resolve, reject) => {
//       const contentType = file.type;
//     //   const key = `${file.name}`;
// 	const key = `${file.name}-${Math.random().toString(36).substring(2, 15)}`;

//       const bucket = new S3({
//         accessKeyId: " AKIAX37YDYI4ACBOVVMU",
//         secretAccessKey: "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",
//         region: "us-east-2",
//       });

//       const params = {
//         Bucket: "ufsnabeelphotoalbum",
//         Key: key,
//         Body: file,
//         ACL: "public-read",
//         ContentType: contentType,
//       };

//       bucket.upload(params, function (err, data) {
//         if (err) {
//           console.log("There was an error uploading your file: ", err);
//           reject(err);
//         } else {
//           console.log("Successfully uploaded file.", data);
//           resolve(data);
//         }
//       });
//     });
//   }

uploadFile(file: File,Student_Id): Promise<string> {
	console.log('file: ', file);
	let filetype = file.name.split('.').pop();
	const currentDate = new Date();
	const formattedDate = currentDate.toISOString().replace(/[-:.TZ]/g, "").replace("T", "");
	return new Promise((resolve, reject) => {
	  const contentType = file.type;
	  const key = `EmpireNew/${Student_Id}/${Math.random().toString(36).substring(2, 15)}_${formattedDate}.${filetype}`;
	  console.log('key: ', key);
	  const bucket = new S3({
		accessKeyId: "AKIAX37YDYI4ACBOVVMU",
		secretAccessKey: "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",
		region: "us-east-2",
	  });
	  const params = {
		Bucket: "ufsnabeelphotoalbum",
		Key: key,
		Body: file,
		ACL: "public-read",
		ContentType: contentType,
	  };
	  bucket.upload(params, function (err, data) {
		if (err) {
		  console.log("There was an error uploading your file: ", err);
		  reject(err);
		} else {
		  console.log("Successfully uploaded file.", data);
		  resolve(key);  // Resolve with the key
		}
	  });
	});
  }


  uploadFile_Country(file: File,Student_Id): Promise<string> {
	console.log('file: ', file);
	let filetype = file.name.split('.').pop();
	const currentDate = new Date();
	const formattedDate = currentDate.toISOString().replace(/[-:.TZ]/g, "").replace("T", "");
	return new Promise((resolve, reject) => {
	  const contentType = file.type;
	  const key = `EmpireNew/Country/${Student_Id}`;
	  console.log('key: ', key);
	  const bucket = new S3({
		accessKeyId: "AKIAX37YDYI4ACBOVVMU",
		secretAccessKey: "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",
		region: "us-east-2",
	  });
	  const params = {
		Bucket: "ufsnabeelphotoalbum",
		Key: key,
		Body: file,
		ACL: "public-read",
		ContentType: contentType,
	  };
	  bucket.upload(params, function (err, data) {
		if (err) {
		  console.log("There was an error uploading your file: ", err);
		  reject(err);
		} else {
		  console.log("Successfully uploaded file.", data);
		  resolve(key);  // Resolve with the key
		}
	  });
	});
  }

applicationUploadFile(file, documen_Id) {
	return new Promise((resolve, reject) => {
	  let filetype = file.name.split('.').pop();
	  const contentType = file.type;
	 const currentDate = new Date();
	   const formattedDate = currentDate.toISOString().replace(/[-:.TZ]/g, "").replace("T", "");
	  
	  const key = `EmpireNew/${documen_Id}/${Math.random().toString(36).substring(2, 15)}_${formattedDate}`;
	  console.log('key: ', key);
  
	  const bucket = new S3({
		accessKeyId: " AKIAX37YDYI4ACBOVVMU",
		secretAccessKey: "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",
		region: "us-east-2",
	  });
  
	  const params = {
		Bucket: "ufsnabeelphotoalbum",
		Key: key,
		Body: file,
		ACL: "public-read",
		ContentType:contentType
	  };
  
	  bucket.upload(params, function (err, data) {
		if (err) {
		  console.log("There was an error uploading your file: ", err);
		  reject(err);
		} else {
		  console.log("Successfully uploaded file.", data);
		  resolve(data);
		}
	  });
	});
  }



  /*** Added on 13-06-2024 */
  Get_Payment_Tab_Details(Student_Id) {
	return this.http.get(
		environment.BasePath + "Student/Get_Payment_Tab_Details/" + Student_Id
	);
}

Delete_Payment_Tab_Details(Payment_Tab_Id_) {
	return this.http.get(
		environment.BasePath +
			"Student/Delete_Payment_Tab_Details/" +
			Payment_Tab_Id_
	);
}

Save_Payment_Tab_Details(Payment_Tab_Details_)
{
	debugger
return this.http.post(environment.BasePath +'Student/Save_Payment_Tab_Details/',Payment_Tab_Details_);
}

Load_Account_Dropdown(): Observable<any> {
	return this.http.get(environment.BasePath + "Student/Load_Account_Dropdown/");
}

Get_Enquiry_Source_Client_Id(Enquiry_Id_) {
	debugger
	return this.http.get(
		environment.BasePath + "Student/Get_Enquiry_Source_Client_Id/" + Enquiry_Id_
	);
}



/*** */
 
Search_Fees_Receipt_Report_Freelancer(
		
	Search_FromDate,
	Search_ToDate,
	value,
	Search_Name,
	dept_id,
	To_Account_Id,
	Branch_Id,
	User_Id,
	Look_In_Date,
	Page_Index1_,
	Page_Index2_,
	Login_User_Id_,
	RowCount_,
	RowCount2_,
	Fees_id
): Observable<any> {
	
	return this.http.get(
		environment.BasePath +
			"Student/Search_Fees_Receipt_Report_Freelancer/" +
			Search_FromDate +
			"/" +
			Search_ToDate +
			"/" +
			value +
			"/" +
			Search_Name +
			"/" +
			dept_id +
			"/" +
			To_Account_Id +
			"/" +
			Branch_Id +
			"/" +
			User_Id +
			"/" +
			Look_In_Date +
			"/" +
			Page_Index1_ +
			"/" +
			Page_Index2_ +
			"/" +
			Login_User_Id_ +
			"/" +
			RowCount_ +
			"/" +
			RowCount2_ +
			"/" +
			Fees_id
	);
}
Search_Fees_Receipt_Report_Agent(
		
	Search_FromDate,
	Search_ToDate,
	value,
	Search_Name,
	dept_id,
	To_Account_Id,
	Branch_Id,
	User_Id,
	Look_In_Date,
	Page_Index1_,
	Page_Index2_,
	Login_User_Id_,
	RowCount_,
	RowCount2_,
	Fees_id
): Observable<any> {
	
	return this.http.get(
		environment.BasePath +
			"Student/Search_Fees_Receipt_Report_Agent/" +
			Search_FromDate +
			"/" +
			Search_ToDate +
			"/" +
			value +
			"/" +
			Search_Name +
			"/" +
			dept_id +
			"/" +
			To_Account_Id +
			"/" +
			Branch_Id +
			"/" +
			User_Id +
			"/" +
			Look_In_Date +
			"/" +
			Page_Index1_ +
			"/" +
			Page_Index2_ +
			"/" +
			Login_User_Id_ +
			"/" +
			RowCount_ +
			"/" +
			RowCount2_ +
			"/" +
			Fees_id
	);
}


Search_Userwise_Summary_Agent(
	Search_FromDate,
	Search_ToDate,
	value,
	Search_Name,
	dept_id,
	Branch_Id,
	User_Id,
	Look_In_Date,
	Page_Index1_,
	Page_Index2_,
	Login_User_Id_,
	RowCount_,
	RowCount2_
): Observable<any> {
	return this.http.get(
		environment.BasePath +
			"Student/Search_Userwise_Summary_Agent/" +
			Search_FromDate +
			"/" +
			Search_ToDate +
			"/" +
			value +
			"/" +
			Search_Name +
			"/" +
			dept_id +
			"/" +
			Branch_Id +
			"/" +
			User_Id +
			"/" +
			Look_In_Date +
			"/" +
			Page_Index1_ +
			"/" +
			Page_Index2_ +
			"/" +
			Login_User_Id_ +
			"/" +
			RowCount_ +
			"/" +
			RowCount2_
	);
}


Agent_Search_data_Details(User_Id,Login_User_): Observable<any> {
	return this.http.get(
		environment.BasePath +
			"Student/Agent_Search_data_Details/"  +
			User_Id +
			"/" +
			 Login_User_
	);
}
 
View_Detail_agent_Details(dept_id, Branch_, User_Id, Login_User_Id_,File_Status_Value): Observable<any> {
	return this.http.get(
		environment.BasePath +
			"Student/View_Detail_agent_Details/" +
			dept_id +
			"/" +
			Branch_ +
			"/" +
			User_Id +
			"/" +
			Login_User_Id_ +
			"/" +
			 File_Status_Value
	);
}
Search_Agent_Summary_Track(
	Search_FromDate,
	Search_ToDate,
	Login_User_Id_,
	look_In_Date_Value,
	branch_id
): Observable<any> {
	return this.http.get(
		environment.BasePath +
			"Student/Search_Agent_Summary_Track/" +
			Search_FromDate +
			"/" +
			Search_ToDate +
			"/" +
			Login_User_Id_ +
			"/" +
			look_In_Date_Value +
			"/" +
			branch_id
	);
}

Search_Userwise_Summary_Freelancer(
	Search_FromDate,
	Search_ToDate,
	value,
	Search_Name,
	dept_id,
	Branch_Id,
	User_Id,
	Look_In_Date,
	Page_Index1_,
	Page_Index2_,
	Login_User_Id_,
	RowCount_,
	RowCount2_
): Observable<any> {
	return this.http.get(
		environment.BasePath +
			"Student/Search_Userwise_Summary_Freelancer/" +
			Search_FromDate +
			"/" +
			Search_ToDate +
			"/" +
			value +
			"/" +
			Search_Name +
			"/" +
			dept_id +
			"/" +
			Branch_Id +
			"/" +
			User_Id +
			"/" +
			Look_In_Date +
			"/" +
			Page_Index1_ +
			"/" +
			Page_Index2_ +
			"/" +
			Login_User_Id_ +
			"/" +
			RowCount_ +
			"/" +
			RowCount2_
	);
}

Freelancer_Search_data_Details(User_Id,Login_User_): Observable<any> {
	return this.http.get(
		environment.BasePath +
			"Student/Freelancer_Search_data_Details/"  +
			User_Id  +
			"/" +
			 Login_User_

	);
}

Freelancer_Manager_Search_data_Details(User_Id,Login_User_): Observable<any> {
	return this.http.get(
		environment.BasePath +
			"Student/Freelancer_Manager_Search_data_Details/"  +
			User_Id  +
			"/" +
			 Login_User_

	);
}
Freelancer_Search_Amount_Details(User_Id,Login_User_): Observable<any> {
	return this.http.get(
		environment.BasePath +
			"Student/Freelancer_Search_Amount_Details/"  +
			User_Id  +
			"/" +
			 Login_User_

	);
}
Freelancer_Search_User_Amount(User_Id,Login_User_): Observable<any> {
	return this.http.get(
		environment.BasePath +
			"Student/Freelancer_Search_User_Amount/"  +
			User_Id  +
			"/" +
			 Login_User_

	);
}
View_Detail_Freelancer_Details(value,
	Search_Name,dept_id, Branch_, To_User_Id1,User_Id, Login_User_Id_): Observable<any> {
	return this.http.get(
		environment.BasePath +
			"Student/View_Detail_Freelancer_Details/" +
			value +
				"/" +
				Search_Name +
				"/" +
			dept_id +
			"/" +
			Branch_ +
			"/" +
			To_User_Id1 +
				"/" +
			User_Id +
			"/" +
			Login_User_Id_
	);
}

updateNavTitle(newTitle: string): void {
	this.navTitle$.next(newTitle);
  }


  Save_Application_Report_Change_User(Student_Details) {
	return this.http.post(
		environment.BasePath + "Student/Save_Application_Report_Change_User/",
		Student_Details
	);
}

/** Added on 29-07-2024 */

Freelancer_Summary_Search_Sub_Page(User_Id,Login_User_,Freelancer_Id_): Observable<any> {
	return this.http.get(
		environment.BasePath +
			"Student/Freelancer_Summary_Search_Sub_Page/"  +
			User_Id  +
			"/" +
			 Login_User_ +
			 "/" +
			 Freelancer_Id_

	);
}

Freelancer_Report_Search_Sub_Page(Search_FromDate,
	Search_ToDate,
	value,
	Search_Name,dept_id, Branch_,To_User_Id1, User_Id, Look_In_Date,Login_User_Id_,Freelancer_Manager_User_Id_,Department_Status_Id_): Observable<any> {
		debugger
	return this.http.get(
		
		environment.BasePath +
			"Student/Freelancer_Report_Search_Sub_Page/" +
			Search_FromDate +
				"/" +
				Search_ToDate +
				"/" +
				value +
				"/" +
				Search_Name +
				"/" +
				dept_id +
				"/" +
				Branch_  +
				"/" +
				To_User_Id1 +
				"/" +
				User_Id +
				"/" +
				Look_In_Date +
				"/" +
				Login_User_Id_ +
				"/" +
				Freelancer_Manager_User_Id_+
				"/" +
				Department_Status_Id_
	);
}
getDocumentTypeByDocumentId(Document_Id_): Observable<any> 
{
	debugger
	return this.http.get(
		environment.BasePath + "Document/getDocumentTypeByDocumentId/" + Document_Id_
	);
}


Search_Intake_Report(Intake_Id, Intake_Year_Id, Login_User, View_Type_, Entry_Type_,UserType_Value,Country_Id): Observable<any> {
	debugger
	return this.http.get(environment.BasePath +"Student/Search_Intake_Report/" + Intake_Id + "/" + Intake_Year_Id + "/" + Login_User + "/" + View_Type_ + "/" + Entry_Type_+ "/" + UserType_Value+"/" + Country_Id);
}

Search_Agent_Summary_Report(Intake_Id, Intake_Year_Id, Login_User, View_Type_, Entry_Type_,UserType_Value,Country_Id,search_name_): Observable<any> {
	debugger
	return this.http.get(environment.BasePath +"Student/Search_Agent_Summary_Report/" + Intake_Id + "/" + Intake_Year_Id + "/" + Login_User + "/" + View_Type_ + "/" + Entry_Type_+ "/" + UserType_Value+"/" + Country_Id+"/" + search_name_);
}

Search_Freelancer_Summary_Report(Intake_Id, Intake_Year_Id, Login_User, View_Type_, Entry_Type_,UserType_Value,Country_Id,search_name_): Observable<any> {
	debugger
	return this.http.get(environment.BasePath +"Student/Search_Freelancer_Summary_Report/" + Intake_Id + "/" + Intake_Year_Id + "/" + Login_User + "/" + View_Type_ + "/" + Entry_Type_+ "/" + UserType_Value+"/" + Country_Id+"/" + search_name_);
}


/*** Added on 20-11-2024 */
Get_Intake_Count():Observable<any>
{
	
return this.http.get(environment.BasePath +'Student/Get_Intake_Count/');
}

Get_Intake_Data_With_Count_Greater_Than_Zero():Observable<any>
{
return this.http.get(environment.BasePath +'Student/Get_Intake_Data_With_Count_Greater_Than_Zero/');
}
}