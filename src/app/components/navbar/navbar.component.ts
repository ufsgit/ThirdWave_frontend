import { Component, OnInit, ElementRef } from "@angular/core";
import {
	Location,
	LocationStrategy,
	PathLocationStrategy,
} from "@angular/common";
import { UserData } from "../../services/user-data";
import { Router } from "@angular/router";
// import { ROUTES } from '../sidebar/sidebar.component';
import { MatButtonModule, MatMenuModule } from "@angular/material";
import * as io from "socket.io-client";
import { Observable } from "rxjs";
import { Student_Service } from "../../services/Student.Service";
import { MomentDateAdapter } from "@angular/material-moment-adapter";

import {
	DateAdapter,
	MAT_DATE_FORMATS,
	MAT_DATE_LOCALE,
} from "@angular/material/core";
import * as _moment from "moment";
import { default as _rollupMoment } from "moment";
import { Notification_Class } from "../../models/Notification_Class";
import { DialogBox_Component } from "../../modules/admin/DialogBox/DialogBox.component";
import { Get_Page_Permission } from "../../components/sidebar/sidebar.component";
import {
	MatDialog,
	MatDialogRef,
	MAT_DIALOG_DATA,
	MatDialogConfig,
} from "@angular/material";
import { environment } from "../../../environments/environment";
import { AuthenticationService } from "../../services/Authenticatiuon.Service";
// import { debug } from "console";
declare const $: any;
declare interface RouteInfo {
	path: string;
	title: string;
	icon: string;
	class: string;
	Menu_Id: string;
	Save: string;
	Delete: string;
	View: string;
	Edit: string;
	Menu_Type: boolean;
}

declare interface PointerInfo {
	Root_Index: number;
}
export var ROUTES: RouteInfo[] = [];
export var Pointer_Table: number[] = [];
export const MY_FORMATS = {
	parse: {
		dateInput: "DD/MM/YYYY",
	},
	display: {
		dateInput: "DD/MM/YYYY",
		monthYearLabel: "MMM YYYY",
		dateA11yLabel: "DD/MM/YYYY",
		monthYearA11yLabel: "MMMM YYYY",
	},
};
const moment = _rollupMoment || _moment;
@Component({
	selector: "app-navbar",
	templateUrl: "./navbar.component.html",
	styleUrls: ["./navbar.component.css"],
	providers: [
		{
			provide: DateAdapter,
			useClass: MomentDateAdapter,
			deps: [MAT_DATE_LOCALE],
		},
		{ provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
	],
})
export class NavbarComponent implements OnInit {
	//private url = 'http://regnewapi.trackbox.co.in:3646/'
	url = environment.NotificationPath;
	private socket;
	private listTitles: any[];
	location: Location;
	mobile_menu_visible: any = 0;
	private toggleButton: any;
	private sidebarVisible: boolean;
	uname: string;
	Notification_Count: number = 0;
	u_id: number;
	menuItems: any[];
	menuArray: any[];
	issLoading: boolean = true;
	year: any;
	month: any;
	day: any;
	More_Search_Options: boolean = false;
	More_Search_Options1: boolean = false;
	date: any;
	Hours: any;
	Minutes: any;
	Seconds: any;
	Search_ToDate: Date = new Date();
	Notification_Data: any;
	Notification_Temp: Notification_Class = new Notification_Class();
	Total_Counts: number = 0;
	Student_Task_Count = 0;
	Aheight: number = 50;
	Count_Notification: boolean = false;
	Notification_List: boolean = false;

	chat_count_view: boolean = false;
	Chat_Data: any;
	Chat_Count_: number = 0;
	Current_Channel_Id: number = 0;

	Edit_Page_Permission: any;
	studentid_n: number;
	Updated_Serial_No_: number;
	Fetched_Serial_No: number;
	submenus: boolean = false;
	studentSubmenus: boolean = false;
	submenus_std: boolean = false;
	submenus1 :boolean = false;
	submenus2 :boolean = false;
	submenus3 : boolean = false;
	submenus4 : boolean = false;
	submenus21: boolean = false;
	submenus8: boolean;
	applicationSubmenus: boolean = false;
	reportsSubmenus: boolean = false;
	summarySubmenus: boolean = false;

	statusSubmenus: boolean = false;

	Is_Hover_Name: boolean = false;

	Nav_Title: string;
	Nav_Title_Show:boolean=false;
	Navbar_Leads_View:number;
	Navbar_Leads_View_Menus:number;

	private timeOutId:any;
	isDropdownVisible: boolean = false;
	/** Added on 24-07-2024 */
	Profile_Type: number=3;

	constructor(
		location: Location,
		public userData: UserData,
		private element: ElementRef,
		public Student_Service_: Student_Service,
		private router: Router,
		public dialogBox: MatDialog,
		public auth: AuthenticationService
	) {
		this.location = location;
		this.sidebarVisible = false;
		var retrievedObject = localStorage.getItem("Routes_Temp");
		ROUTES = JSON.parse(retrievedObject);
		this.menuItems = ROUTES.filter((menuItem) => menuItem);
		var retrievedPointer = localStorage.getItem("Pointer_Temp");
		Pointer_Table = JSON.parse(retrievedPointer);
		// this.menuArray = Pointer_Table.filter(menuItem => menuItem);
		this.menuArray = Pointer_Table;
		this.socket = io(this.url, {
			transports: ["websocket"],
			auth: {
				token: localStorage.getItem("token"),
			},
		});
		this.socket = io(this.url);
	}
	getMessages = () => {
		// debugger
		return Observable.create((observer) => {
			this.socket.on("new-message", (message) => {
				// console.log(message);
				 //alert(message);
				observer.next(message);
			});
		});
	};
	sendmsg() {
		this.socket.emit("new-message", "jid");
	}
	public sendMessage(message) {
		console.log(message);
		this.socket.emit("new-message", message);
	}
	logout() {
		this.userData.logout();
		// localStorage.removeItem("Routes_Temp");
		ROUTES = [];
		Pointer_Table = [];
		localStorage.setItem("Routes_Temp", JSON.stringify(ROUTES));
		localStorage.setItem("Pointer_Temp", JSON.stringify(Pointer_Table));
		localStorage.removeItem("Login_User");
		this.router.navigateByUrl("/auth/login");
	}
	ngOnInit() {
		this.uname = localStorage.getItem("uname");
		this.u_id = Number(localStorage.getItem("Login_User"));

		this.Current_Channel_Id = Number(
			localStorage.getItem("Current_Channel_Id")
		);
		if (this.Chat_Count_ > 0) {
			this.chat_count_view = true;
		}


		// debugger

		this.Navbar_Leads_View_Menus= Number(localStorage.getItem('Navbar_Non_Registered_Lead'));

		this.Navbar_Leads_View = Number(localStorage.getItem("Navbar_Leads_View"));
		// debugger
		
		if (this.Navbar_Leads_View_Menus == 1) {
			this.Nav_Title = 'Student';
			this.Nav_Title_Show = true;
			localStorage.setItem('Navbar_Leads_View', '1');
		} else if (this.Navbar_Leads_View_Menus == 2) {
			this.Nav_Title = 'Lead';
			this.Nav_Title_Show = true;
			localStorage.setItem('Navbar_Leads_View', '2');
		} 

		else if (this.Navbar_Leads_View_Menus == 3) {
			this.Nav_Title = 'Applications';
			this.Nav_Title_Show = true;
			localStorage.setItem('Navbar_Leads_View', '3');
		} 

		else if (this.Navbar_Leads_View_Menus == 4) {
			this.Nav_Title = 'Agent Applications';
			this.Nav_Title_Show = true;
			localStorage.setItem('Navbar_Leads_View', '4');
		} 
		else if (this.Navbar_Leads_View_Menus == 5) {
			this.Nav_Title = 'Dashboard';
			this.Nav_Title_Show = true;
			localStorage.setItem('Navbar_Leads_View', '5');
		} 

// debugger;
		if(this.Navbar_Leads_View==1)
		{this.Nav_Title='Student'}
		else if(this.Navbar_Leads_View==2)
		{this.Nav_Title='Lead'}
		else if(this.Navbar_Leads_View==3)
		{this.Nav_Title='Applications'}
		else if(this.Navbar_Leads_View==4)
		{this.Nav_Title='Agent Applications'}
		else if(this.Navbar_Leads_View==5)
		{this.Nav_Title='Dashboard'}



		this.Updated_Serial_No_ = Number(localStorage.getItem("Updated_Serial_Id"));
		this.Notification_Data = [];
		// this.Notification_Count = Number(
		//  localStorage.getItem("Notification_Count")
		// );

		this.menuItems = ROUTES.filter((menuItem) => menuItem);
		this.listTitles = ROUTES.filter((listTitle) => listTitle);


		this.socket.on("connect", () => {
			console.log("Socket.io connected successfully.",);
			});
			
			
	

		const navbar: HTMLElement = this.element.nativeElement;

		this.toggleButton = navbar.getElementsByClassName("navbar-toggler")[0];
		this.router.events.subscribe((event) => {
			this.sidebarClose();
			var $layer: any = document.getElementsByClassName("close-layer")[0];
			if ($layer) {
				$layer.remove();
				this.mobile_menu_visible = 0;
			}
		});
// debugger
		this.getMessages().subscribe((message: any) => {
			console.log('message: ', message);
			if (this.Notification_Data==undefined) this.Notification_Data =[]

// debugger	
			if(message.User_Id && message.User_Id.length)
			{

	
			if (message.User_Id.includes(Number(this.u_id))) {
	this.Notification_Count = Number(this.Notification_Count) + 1;
	console.log('this.Notification_Count : includes ', this.Notification_Count );
				// this.Play_Sound();
				this.animate();
				// debugger
				this.Notification_Data.unshift(
					Object.assign(
						{},
						
						{
							
							
							Student_Name: message.Student_Name,
							Notification_Type_Name: message.Notification_Type_Name,
							Notification_Id: message.Notification_Id,
							Entry_Type: message.Entry_Type,
							Student_Id: message.Student_Id,
							To_User: message.To_User
						}
					)
				);
				this.Count_Notification = false;
				if (this.Notification_Count < 4)
					this.Aheight = 52 * (this.Notification_Count + 1);
				else this.Aheight = 52 * 10;

				if(message.Student_Id>0)
			
				{
				
					localStorage.setItem("Notification_Student_Id", message.Student_Id);
					localStorage.setItem("Notification_Student_Name", message.Student_Name);
					localStorage.setItem("Notification_File_Info", message.File_Info);
			
					localStorage.setItem("Notification_Phone_Number", message.Phone_Number);
					//alert( message.Phone_Number)
				
					let currentUrl = this.router.url;
								this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
									// this.router.navigate(['/Student']);
								});
				}
				
				else if(message.Student_Id==-1)
				
				{
				
					localStorage.setItem("Notification_Student_Id", message.Student_Id);
					localStorage.setItem("Notification_Phone_Number", message.Phone_Number);
					let currentUrl = this.router.url;
								this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
									// this.router.navigate(['/Student']);
								});
				}
			
			
			
			}	
			// var tempuser_id = "m" + this.u_id + "m";
			// this.Current_Channel_Id = Number(
			// 	localStorage.getItem("Current_Channel_Id")
			// );
			// // tempuser_id='oi'
			// if (
			// 	message.Notification_Type_Name == "Chat" &&
			// 	Number(this.u_id) != message.From_User
			// ) {
			// 	;
			// 	var k = message.To_User_List.includes(tempuser_id);
			// 	if (k) {
			// 		let currentUrl = this.router.url;
			// 		console.log('currentUrl: ', currentUrl);

			// 		if (
			// 			currentUrl != "/Chat_Window" ||
			// 			message.Channel_Id != this.Current_Channel_Id
			// 		) {
			// 			this.Chat_Count_++;
			// 			this.chat_count_view = true;
			// 		} else if (
			// 			message.Channel_Id == this.Current_Channel_Id ||
			// 			currentUrl == "/Chat_Window"
			// 		) {
			// 			this.Chat_Count_ = this.Chat_Count_;
			// 		}
			// 		// if(this.Chat_Count_!=0){this.chat_count_view=true}
			// 		// else(this.chat_count_view=false)
			// 	}
			// }

			// if (
			// 	message.Notification_Type_Name == "read_msg" &&
			// 	Number(this.u_id) == message.From_User
			// ) {
			// 	;
			
			// 	if (this.Chat_Count_)
			// 		this.Chat_Count_ = this.Chat_Count_ - message.Msg_Count;
			// 	if (this.Chat_Count_ != 0 && this.Chat_Count_ != null) {
			// 		this.chat_count_view = true;
			// 	} else this.chat_count_view = false;
			// }
		}

// CHAT MESSAGE HANDLING - Only once!
        var tempuser_id = "m" + this.u_id + "m";
        this.Current_Channel_Id = Number(localStorage.getItem("Current_Channel_Id"));

        if (message.Notification_Type_Name == "Chat" && Number(this.u_id) != message.From_User) {
            var k = message.To_User_List.includes(tempuser_id);
            if (k) {
                let currentUrl = this.router.url;
                console.log('currentUrl: ', currentUrl);

                if (currentUrl != "/Chat_Window" || message.Channel_Id != this.Current_Channel_Id) {
                    this.Chat_Count_++;
                    this.chat_count_view = true;
                } else if (message.Channel_Id == this.Current_Channel_Id || currentUrl == "/Chat_Window") {
                    this.Chat_Count_ = this.Chat_Count_;
                }
            }
        }

        // READ MESSAGE HANDLING - Only once!
        if (message.Notification_Type_Name === "read_msg" && Number(this.u_id) === message.From_User) {
            console.log("Read Msg Event:", message.Msg_Count, "Existing Count:", this.Chat_Count_);
            this.Chat_Count_ = Math.max(0, this.Chat_Count_ - message.Msg_Count);
            this.chat_count_view = this.Chat_Count_ > 0;
        }


			// var tempuser_id = "m" + this.u_id + "m";
			// this.Current_Channel_Id = Number(
			// 	localStorage.getItem("Current_Channel_Id")
			// );
			// // tempuser_id='oi'
			// console.log('this.u_id: ', this.u_id);
			// if (
			// 	message.Notification_Type_Name == "Chat" &&
			// 	Number(this.u_id) != message.From_User
			// ) {
			// 	// debugger;
			// 	var k = message.To_User_List.includes(tempuser_id);
			// 	if (k) {
			// 		let currentUrl = this.router.url;

			// 		if (
			// 			currentUrl != "/Chat_Window" ||
			// 			message.Channel_Id != this.Current_Channel_Id
			// 		) {
			// 			this.Chat_Count_++;
			// 			this.chat_count_view = true;
			// 		} else if (
			// 			message.Channel_Id == this.Current_Channel_Id ||
			// 			currentUrl == "/Chat_Window"
			// 		) {
			// 			this.Chat_Count_ = this.Chat_Count_;
			// 		}
			// 		// if(this.Chat_Count_!=0){this.chat_count_view=true}
			// 		// else(this.chat_count_view=false)
			// 	}
			// }




			// if (
			// 	message.Notification_Type_Name == "read_msg" &&
			// 	Number(this.u_id) == message.From_User
			// ) {
			// 	// debugger;
			
			// 	if (this.Chat_Count_)
			// 		this.Chat_Count_ = this.Chat_Count_ - message.Msg_Count;
			// 	if (this.Chat_Count_ != 0 && this.Chat_Count_ != null) {
			// 		this.chat_count_view = true;
			// 	} else this.chat_count_view = false;
			// }
			 else {
				//  this.messages.push(message);
			//alert(message);
// debugger
			if (Number(this.u_id) == message.To_User) {
				// if (message.Notification_Type_Name == "Task") {
				// 	this.Student_Task_Count = message.Task_Count;
				// } else 
				if (message.Notification_Type_Name == "User Details Updated") {
					this.logout();
				} else {
					// debugger
					this.Student_Task_Count = message.Task_Count;

					// this.Notification_Count = Number(this.Notification_Count) + 1;
					this.Notification_Temp.Student_Name = message.Student_Name;
					this.Notification_Temp.From_User_Name = message.From_User_Name;
					this.Notification_Temp.Notification_Type_Name =
						message.Notification_Type_Name;
						this.Notification_Temp.Entry_Type = message.Entry_Type;
						this.Notification_Temp.Notification_Id = message.Notification_Id;
						this.Notification_Temp.Student_Id = message.Student_Id;
					this.Notification_Temp.Status_Name = message.Status_Name;
					this.Notification_Temp.Task_Item_Name = message.Task_Item_Name;
					this.Notification_Temp.Task_Details = message.Task_Details;
					

					this.animate();
					if (message.Notification_Type_Name == "Task")
					{
						this.animatetask()
					}					
					// this.Notification_Data.unshift(Object.assign({}, this.Notification_Temp));
					this.Notification_Data.unshift(
						Object.assign(
							{},
							{
								Notification_Type_Name: message.Notification_Type_Name,
								From_User_Name: message.From_User_Name,
								Student_Name: message.Student_Name,
								Status_Name: message.Status_Name,
								Task_Item_Name: message.Task_Item_Name,
								Task_Details: message.Task_Details,
								Entry_Type: message.Entry_Type,
								Notification_Id: message.Notification_Id,
								Student_Id: message.Student_Id,
							}
						)
					);
					this.Count_Notification = false;
					//this.Get_All_Notification();
					if (this.Notification_Count < 4)
						this.Aheight = 52 * (this.Notification_Count + 1);
					else this.Aheight = 52 * 10;
				}
			}

			}

			// if (this.Notification_Data.length > 10)
			//  this.Notification_Data.splice(-1, 1);
		});

		//localStorage.setItem("Notification_Count", "0");
		this.Get_All_Notification();
	}
	hasMenuItems(): boolean {
		// Add all the menuArray indices related to Settings
		const settingsMenuItems = [126, 135, 15, 13, 14, 170, 142, 53, 0, 19, 132, 17, 28, 119, 3, 100, 136, 143, 156, 65, 1, 6];
		return settingsMenuItems.some(index => this.menuArray[index] > -1);
	  }
	  hasDashboardMenuItems(): boolean {
		const dashboardMenuItems = [8, 147, 148, 164];
		return dashboardMenuItems.some(index => this.menuArray[index] > -1);
	  }
	  hasApplicationMenuItems(): boolean {
		const applicationMenuItems = [137, 159];
		return applicationMenuItems.some(index => this.menuArray[index] > -1);
	  }
	  hasStudentMenuItems(): boolean {
		const studentMenuItems = [158, 4];
		return studentMenuItems.some(index => this.menuArray[index] > -1);
	  }
	sidebarOpen() {
		const toggleButton = this.toggleButton;
		const body = document.getElementsByTagName("body")[0];
		setTimeout(function () {
			// toggleButton.classList.add('toggled');
		}, 500);

		body.classList.add("nav-open");

		this.sidebarVisible = true;
	}
	sidebarClose() {
		const body = document.getElementsByTagName("body")[0];
		// this.toggleButton.classList.remove('toggled');
		this.sidebarVisible = false;
		body.classList.remove("nav-open");
	}
	showDropdown() {
        this.isDropdownVisible = true;
    }

    // Method to hide the dropdown
    hideDropdown() {
        this.isDropdownVisible = false;
    }

	sidebarToggle() {
		// const toggleButton = this.toggleButton;
		// const body = document.getElementsByTagName('body')[0];
		var $toggle = document.getElementsByClassName("navbar-toggler")[0];

		if (this.sidebarVisible === false) {
			this.sidebarOpen();
		} else {
			this.sidebarClose();
		}
		const body = document.getElementsByTagName("body")[0];

		if (this.mobile_menu_visible == 1) {
			// $('html').removeClass('nav-open');
			body.classList.remove("nav-open");
			if ($layer) {
				$layer.remove();
			}
			setTimeout(function () {
				$toggle.classList.remove("toggled");
			}, 400);

			this.mobile_menu_visible = 0;
		} else {
			setTimeout(function () {
				$toggle.classList.add("toggled");
			}, 430);

			var $layer = document.createElement("div");
			$layer.setAttribute("class", "close-layer");

			if (body.querySelectorAll(".main-panel")) {
				document.getElementsByClassName("main-panel")[0].appendChild($layer);
			} else if (body.classList.contains("off-canvas-sidebar")) {
				document
					.getElementsByClassName("wrapper-full-page")[0]
					.appendChild($layer);
			}

			setTimeout(function () {
				$layer.classList.add("visible");
			}, 100);

			$layer.onclick = function () {
				//asign a function
				body.classList.remove("nav-open");
				this.mobile_menu_visible = 0;
				$layer.classList.remove("visible");
				setTimeout(function () {
					$layer.remove();
					$toggle.classList.remove("toggled");
				}, 400);
			}.bind(this);

			body.classList.add("nav-open");
			this.mobile_menu_visible = 1;
		}
	}
	isMobileMenu() {
		if ($(window).width() > 991) {
			return false;
		}
		return true;
	}
	isDesktopMenu() {
		if ($(window).width() < 991) {
			return false;
		}
		return true;
	}

	getView() {
		return "hai";
		var titlee = this.location.prepareExternalUrl(this.location.path());
		if (titlee.charAt(0) === "#") {
			titlee = titlee.slice(1);
		}

		for (var item = 0; item < this.listTitles.length; item++) {
			if (this.listTitles[item].path === titlee) {
				return this.listTitles[item].title;
			}
		}
		return "Dashboard";
	}
	getTitle() {
		// return ("hai");
		var titlee = this.location.prepareExternalUrl(this.location.path());
		if (titlee.charAt(0) === "#") {
			titlee = titlee.slice(1);
			
		}

		if(titlee=='/Student')
			{	
				if(this.Nav_Title == 'Applications' || 'Agent Applications'){
					this.Student_Service_.navTitle$.subscribe(title => {
						this.Nav_Title = title
					  });
					
				}
				
				return this.Nav_Title;
			}

		else if(titlee=='/Application_List')
			{
				return this.Nav_Title;
			}
			else
			{

		for (var item = 0; item < this.listTitles.length; item++) {
			if (this.listTitles[item].path === titlee) {
				return this.listTitles[item].title;
			}
		}}

		return "Dashboard";



		



	}

	Reset_Notification_Count() {
		this.issLoading = true;
		this.Student_Service_.Reset_Notification_Count(this.u_id).subscribe(
			(Rows) => {
				this.Notification_Count = Rows[0][0].Notification_Count_;

				this.issLoading = false;
			},
			(Rows) => {
				this.issLoading = false;
			}
		);
	}
	Get_Notification() {
		this.router.navigateByUrl("Notification");
	
	}
	Get_All_Notification() {
		var User_Id = 0;
		this.Student_Service_.Get_All_Notification(
			moment(this.Search_ToDate).format("YYYY-MM-DD"),
			User_Id,
			this.u_id
		).subscribe((Rows) => {
			
			 this.Notification_Data = Rows[0];
			 console.log(this.Notification_Data)
			this.Student_Task_Count = Rows[2][0].Student_Task_Count;
			this.Fetched_Serial_No = Rows[3][0].Updated_Serial_Id;
			if (this.Fetched_Serial_No == undefined || this.Fetched_Serial_No == null)
				this.Fetched_Serial_No = 0;			
			this.Total_Counts = Rows[1][0].Counts;
			this.Notification_Count = this.Total_Counts;
			this.Count_Notification = false;
			if (this.Total_Counts < 4) this.Aheight = 52 * (this.Total_Counts + 1);
			else this.Aheight = 52 * 10;
			if (this.Updated_Serial_No_ != this.Fetched_Serial_No) {
				this.logout();
				return;
			}
		});
	}
	update_Read_Status(Notification_Id) {
		this.Student_Service_.update_Read_Status(
			this.u_id,
			Notification_Id
		).subscribe((Rows) => {
			this.Notification_Data = Rows[0];
		});
	}

	Notification_Item_Click(Notification_Item) {
		if (
			(Notification_Item.Entry_Type >= 1 &&
				Notification_Item.Entry_Type <= 3) ||
			Notification_Item.Entry_Type == 5 ||
			Notification_Item.Entry_Type == 6 ||
			Notification_Item.Entry_Type == 12
		) {
			localStorage.setItem("Student_Id", Notification_Item.Student_Id);
			this.Edit_Page_Permission = Get_Page_Permission(5);
			if (this.Edit_Page_Permission == undefined) {
				const dialogRef = this.dialogBox.open(DialogBox_Component, {
					panelClass: "Dialogbox-Class",
					data: { Message: "No permission to view", Type: "2" },
				});
			} else if (this.Edit_Page_Permission.View == true) {
				let currentUrl = this.router.url;
				this.router
					.navigateByUrl("/", { skipLocationChange: true })
					.then(() => {
						this.router.navigate(["/Student"]);
					});
			} else {
				const dialogRef = this.dialogBox.open(DialogBox_Component, {
					panelClass: "Dialogbox-Class",
					data: { Message: "No permission to view", Type: "2" },
				});
			}
		} else if (Notification_Item.Entry_Type == 4) {
			let currentUrl = this.router.url;
			this.router.navigateByUrl("/", { skipLocationChange: true }).then(() => {
				this.router.navigate(["/Receipt_Confirmation"]);
			});
		}
		// else if (Notification_Item.Entry_Type==5 || Notification_Item.Entry_Type==6 || Notification_Item.Entry_Type==12)
		// {
		//  localStorage.setItem("Student_Id", Notification_Item.Student_Id);
		//  let currentUrl = this.router.url;
		//  this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
		//      this.router.navigate(['/Student']);
		//  });
		// }
		else if (
			Notification_Item.Entry_Type == 7 ||
			Notification_Item.Entry_Type == 11
		) {
			let currentUrl = this.router.url;
			this.router.navigateByUrl("/", { skipLocationChange: true }).then(() => {
				this.router.navigate(["/Refund_Confirmation"]);
			});
		} else if (Notification_Item.Entry_Type == 8) {
			// debugger
			let currentUrl = this.router.url;
			this.router.navigateByUrl("/", { skipLocationChange: true }).then(() => {
				this.router.navigate(["/Student_Task"]);
			});
		} else if (
			Notification_Item.Entry_Type == 9 ||
			Notification_Item.Entry_Type == 10
		) {
			let currentUrl = this.router.url;
			this.router.navigateByUrl("/", { skipLocationChange: true }).then(() => {
				this.router.navigate(["/Refund_Approval"]);
			});
		}
	}
	Edit_Lead(Lead_Id, i) {
		localStorage.setItem("Student_Id", Lead_Id);
		this.Edit_Page_Permission = Get_Page_Permission(5);
		if (this.Edit_Page_Permission == undefined) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "No permission to view", Type: "2" },
			});
		} else if (this.Edit_Page_Permission.View == true) {
			let currentUrl = this.router.url;
			this.router.navigateByUrl("/", { skipLocationChange: true }).then(() => {
				this.router.navigate(["/Student"]);
			});
		}
		// this.router.navigateByUrl("/Student");
		else {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "No permission to view", Type: "2" },
			});
		}
	}
	// enlargeIcon(iconContainer) {
	// 	iconContainer.querySelector('i').style.fontSize = '30px';
	//   }
	  
	//    resetIcon(iconContainer) {
	// 	iconContainer.querySelector('i').style.fontSize = '24px';
	//   }
	//   enlargeIcon(iconElement: ElementRef) {
	// 	const icon = iconElement.nativeElement;
	// 	icon.style.fontSize = '2rem'; // Change this value to increase or decrease the size of the icon
	//   }

	// enlargeIcon(iconElement: ElementRef) {
	// 	const icon = iconElement.nativeElement;
	// 	icon.style.fontSize = '2rem';
	//   }
	
	//   resetIcon(iconElement: ElementRef) {
	// 	const icon = iconElement.nativeElement;
	// 	icon.style.fontSize = '1rem';
	//   }
	
	//   resetIcons() {
	// 	this.icon.forEach(icon => {
	// 	  this.resetIcon(icon);
	// 	});
	//   }






	submenu(){
        
		this.submenus = !this.submenus;
		this.studentSubmenus = false;
		this.applicationSubmenus= false;
		this.reportsSubmenus= false;
		this.statusSubmenus=false;
		this.summarySubmenus=false;
		}

		
// submenu() {
//     this.submenus = !this.submenus;
// }

studentSubmenu() {
    this.studentSubmenus = !this.studentSubmenus;
	this.submenus=false;
	this.applicationSubmenus= false;
	this.reportsSubmenus= false;
	this.summarySubmenus=false;
}

		submenu_click(){
			this.submenus=false;
			this.submenus1=false;
			this.submenus2=false;
			this.submenus3 = false;
			this.submenus4 =false;
			this.submenus21 = false;
			this.submenus8 = false;
this.studentSubmenus = false;
			this.applicationSubmenus= false;
			this.reportsSubmenus= false;
			this.statusSubmenus=false;
			this.summarySubmenus=false;


		}

		submenuz(){
			this.submenus1=true;
			this.submenus8 = false;
			this.studentSubmenus = false;
			this.submenus=false;
			//this.submenus1=false;
			this.applicationSubmenus= false;
			this.reportsSubmenus= false;
			this.statusSubmenus=false;
			this.summarySubmenus=false;
			this.submenus2=false;
			this.submenus3 = false;
			this.submenus4 =false;
			this.submenus21 = false;
		}

		submenuz2(){
			this.submenus2=true;
			this.submenus8 = false;
			this.studentSubmenus = false;
			this.submenus=false;
			this.submenus1=false;

			this.applicationSubmenus= false;
			this.reportsSubmenus= false;
			this.summarySubmenus=false;
			//this.submenus2=false;
			this.submenus3 = false;
			this.submenus4 =false;
			this.submenus21 = false;
		}

		submenuz3(){
			this.submenus3=true;
			this.submenus8 = false;
			this.studentSubmenus = false;
			this.submenus=false;
			this.submenus1=false;
			this.submenus2=false;
			this.applicationSubmenus= false;
			this.reportsSubmenus= false;
			this.statusSubmenus=false;
			this.summarySubmenus=false;
			//this.submenus3 = false;
			this.submenus4 =false;
			this.submenus21 = false;

		}

		submenuz4(){
			this.submenus4=true;
			this.submenus8 = false;
			this.applicationSubmenus= false;
			this.reportsSubmenus= false;
			this.statusSubmenus=false;
			this.summarySubmenus=false;
			this.studentSubmenus = false;
			this.submenus=false;
			this.submenus1=false;
			this.submenus2=false;
			this.submenus3 = false;
			//this.submenus4 =false;
			this.submenus21 = false;
		}
	
		submenuz5() {
			this.submenus21 = true;
			this.submenus8 = false;
			this.studentSubmenus = false;
			this.applicationSubmenus= false;
			this.reportsSubmenus= false;
			this.statusSubmenus=false;
			this.summarySubmenus=false;
			this.submenus2 = false;
			this.submenus3 = false;
			this.submenus4 = false;
			this.submenus = false;
			this.submenus1 = false;
			
		}

		
		submenuz6() {
			this.submenus21 = false;
			this.submenus8 = false;
			this.studentSubmenus = false;
			this.applicationSubmenus= false;
			this.reportsSubmenus= false;
			this.summarySubmenus=false;
			this.submenus2 = false;
			this.submenus3 = false;
			this.submenus4 = false;
			this.submenus = true;
			this.submenus1 = false;
			
		}
		submenuz8() {

			this.submenus8 = true;
			this.submenus21 = false;
			this.studentSubmenus = false;
			this.applicationSubmenus= false;
			this.reportsSubmenus= false;
			this.statusSubmenus=false;
			this.submenus2 = false;
			this.submenus = false;
			this.submenus3 = false;
			this.submenus4 = false;
			this.submenus = false;
			this.submenus1 = false;
			
		}
		applicationSubmenu() {
			this.submenus=false;
			this.studentSubmenus = false;
			this.reportsSubmenus= false;
			this.statusSubmenus=false;
			this.summarySubmenus=false;
			this.applicationSubmenus = !this.applicationSubmenus;
		}

		reportsSubmenu() {
			this.submenus=false;
			this.studentSubmenus = false;
			this.applicationSubmenus = false;
			this.summarySubmenus=false;
			this.statusSubmenus=false;
			this.reportsSubmenus = !this.reportsSubmenus;
		}

		summarySubmenu() {
			this.submenus=false;
			this.studentSubmenus = false;
			this.applicationSubmenus = false;
			this.reportsSubmenus = false;
			this.statusSubmenus=false;
			this.summarySubmenus = !this.summarySubmenus;
		}

		statusubmenu() {
			this.submenus=false;
			this.studentSubmenus = false;
			this.applicationSubmenus = false;
			this.reportsSubmenus = false;
			this.summarySubmenus = false;
			this.statusSubmenus = !this.statusSubmenus;
		}

		Student_menu_click()
		{


			let currentUrl = this.router.url;
			this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
				this.router.navigate(['/Student']);
			});


		}
	
			
	
					
	
		Hover_Name_On()
		{
			clearTimeout(this.timeOutId);
			this.timeOutId = setTimeout(() => {
			this.Is_Hover_Name = true;
			},350);
		}
	
		Hover_Name_Off()
		{
			clearTimeout(this.timeOutId);
			this.Is_Hover_Name = false;	
		}

		animate(){
			// debugger
			this.More_Search_Options = true;
			setTimeout(() => {
				this.More_Search_Options = false;
			}, 10000);
			   
			
		
		}

		animatetask(){
			// debugger
			this.More_Search_Options1 = true;
			setTimeout(() => {
				this.More_Search_Options1 = false;
			}, 10000);
			   
			
		
		}


		Lead_click()
		{
			this.Nav_Title='Student'
			this.Nav_Title_Show=true;
// debugger


			this.router.navigateByUrl('/Student');
			localStorage.setItem("Navbar_Leads_View",'1');
			
			localStorage.setItem("Navbar_Non_Registered_Lead","1");
			let currentUrl = this.router.url;
			this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
				this.router.navigate(['/Student']);
			});

			this.getTitle()
		}
	  
		Non_Registered_Lead_click()
		{
			this.Nav_Title='Lead'
			this.Nav_Title_Show=true;
// debugger
			this.router.navigateByUrl('/Student');
			localStorage.setItem("Navbar_Leads_View",'2');
		
			localStorage.setItem("Navbar_Non_Registered_Lead","2");
			let currentUrl = this.router.url;
			this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
				this.router.navigate(['/Student']);
			});


			this.getTitle()


		}
	 

		Application_click()
		{
			this.Nav_Title='Applications'
			this.Nav_Title_Show=true;
// debugger


			this.router.navigateByUrl('/Application_List');
			localStorage.setItem("Navbar_Leads_View",'3');
			
			localStorage.setItem("Navbar_Non_Registered_Lead","3");
			let currentUrl = this.router.url;
			this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
				this.router.navigate(['/Application_List']);
			});

			this.getTitle()
		}

		Agent_Application_click()
		{
			this.Nav_Title='Agent Applications'
			this.Nav_Title_Show=true;
// debugger


			this.router.navigateByUrl('/Application_List');
			localStorage.setItem("Navbar_Leads_View",'4');
			
			localStorage.setItem("Navbar_Non_Registered_Lead","4");
			let currentUrl = this.router.url;
			this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
				this.router.navigate(['/Application_List']);
			});

			this.getTitle()
		}


	}
	  
	

