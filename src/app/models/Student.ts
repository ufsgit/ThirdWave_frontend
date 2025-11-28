export class Student {
	Student_Id: number;
	Agent_Id: number;
	User_Id: number;
	Student_Name: string;
	Last_Name: string;
	Gender: string;
	Address1: string;
	Address2: string;
	Pincode: string;
	Email: string;
	Alternative_Email: string;
	Phone_Number: string;
	Alternative_Phone_Number: string;
	Dob: string;
	Country_Name: string;
	Promotional_Code: string;
	Student_Status_Id: number;
	Enquiry_Source_Id: number;
	Password: string;
	Whatsapp: string;
	Facebook: string;
	Country_Id: number;
	Country: number;
	Subject_Id: number;
	No: number;
	tp: number;
	RowNo: number;
	RowNo_sort: number;
	Count: number;
	Passport_Copy: string;
	IELTS: string;
	Passport_Photo: string;
	Tenth_Certificate: string;
	Is_Registered: boolean;
	Registered_By: number;
	Registered_On: any;
	Passport_Copy_File_Name: string;
	IELTS_File_Name: string;
	Passport_Photo_File_Name: string;
	Tenth_Certificate_File_Name: string;
	Work_Experience_File_Name: string;
	Resume_File_Name: string;
	Check_Box_View: boolean;
	Remark_Id: number;
	Remark: string;
	B_Remark: string;
	Branch: number;
	Department: number;
	Status: number;
	By_User_Id: number;
	Next_FollowUp_Date: Date;
	Student_Selected_Details: Student[];
	User_Status: number;
	Actual_Next_FollowUp_Date: Date;
	College_University: string;
	Programme_Course: string;
	Intake: string;
	Intake_Year: string;
	
	Remove_Old_User_Value:number;

	Year: string;
	Reference: string;
	Visa_Submission_Date: string;
	Activity: string;
	Course_Link: string;
	Agent: string;
	Status_Details: string;
	Student_Remark: string;
	Work_Experience: string;
	Resume: string;
	By_User_Name: string;
	To_User_Name:string;
	Department_FollowUp:boolean ;
	Delete_Data_Details: Student[];
	Send_Welcome_Mail_Status: number;
	CLient_Accounts_Name: string;
	sslc_year: string;
	sslc_institution: string;
	sslc_markoverall: string;
	sslc_englishmark: string;
	plustwo_year: string;
	plustwo_institution: string;
	plustwo_markoverall: string;
	plustwo_englishmark: string;
	graduation_year: string;
	graduation_institution: string;
	graduation_markoverall: string;
	graduation_englishmark: string;
	postgraduation_year: string;
	postgraduation_institution: string;
	postgraduation_markoverall: string;
	postgraduation_englishmark: string;
	other_year: string;
	other_instituation: string;
	other_markoverall: string;
	other_englishmark: string;
	Id: number;
	exp_institution_1: string;
	exp_institution_2: string;
	exp_institution_3: string;
	exp_institution_4: string;
	exp_designation_1: string;
	exp_designation_2: string;
	exp_designation_3: string;
	exp_designation_4: string;
	exp_tenure_from_1: Date;
	exp_tenure_from_2: Date;
	exp_tenure_from_3: Date;
	exp_tenure_from_4: Date;
	exp_tenure_to_1: Date;
	exp_tenure_to_2: Date;
	exp_tenure_to_3: Date;
	exp_tenure_to_4: Date;

	IELTS_Overall: string;
	IELTS_Listening: string;
	IELTS_Reading: string;
	IELTS_Writting: string;
	IELTS_Speaking: string;

	Passport_No: string;
	Passport_fromdate: Date;
	Passport_Todate: Date;

	LOR_1_Id: number;
	LOR_2_Id: number;
	MOI_Id: number;
	SOP_Id: number;
	Resume_Id: number;
	Ielts_Id: number;
	Passport_Id: number;
	Class_Id:number;
	Class_Name:string;

	

	Sub_Status_Id:number;
	Sub_Status_Name:string;
	Department_Status_Name:string;
	Department_Name:string;

	Marital_Status_Id: Number;
	Marital_Status_Name: String;

	Student_Registration_Id: number;
	Program_Course_Id: number;
	Program_Course_Name: string;
	Profile_University_Id: number;
	Profile_University_Name: string;
	Profile_Country_Id: number;
	Profile_Country_Name: string;
	Created_On: Date;
	Intake_Id: number;
	Enquiry_Source_Name: string;
	Login_Branch: number;
	Branch_Name: string;
	User_Name: string;


	Enquiryfor_Id:number;
	Enquirfor_Name:string;
	Enquiry_Mode_Id:number;
    Enquiry_Mode_Name:string;
	Shore_Id:number;
	Shore_Name:string;
	Spouse_Name:string;
	Date_of_Marriage:Date;
	Spouse_Occupation:string;
	Spouse_Qualification:string;
	Dropbox_Link:string;
	No_of_Kids_and_Age:string;
	Previous_Visa_Rejection:string;
	date:Date
	Transfer_Remark:String;
	

	constructor(values: Object = {}) {
		Object.assign(this, values);
	}
}
