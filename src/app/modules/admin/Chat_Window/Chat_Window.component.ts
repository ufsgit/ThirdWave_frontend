import {
	Component,
	OnInit,
	Input,
	Injectable,
	ErrorHandler,
	AfterViewInit,
	ViewChild,
	ElementRef,
} from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Department_Status_Service } from "../../../services/Department_Status.service";
import { DialogBox_Component } from "../DialogBox/DialogBox.component";
import { Department_Status } from "../../../models/Department_Status";
import {
	MatDialog,
	MatDialogRef,
	MAT_DIALOG_DATA,
	MatDialogConfig,
} from "@angular/material";
import { Observable, of as observableOf, merge, throwError } from "rxjs";
import * as io from "socket.io-client";
import { environment } from "../../../../environments/environment";
import { Chat_Window_Service } from "../../../services/Chat_Window.Service";
import { Chats } from "../../../models/Chats";
import { User_Details } from "../../../models/User_Details";
import { Task_Service } from "../../../services/Task.service";
import { Tagged_User } from "../../../models/Tagged_User";
import { Group } from "../../../models/Group";
import { Channels } from "../../../models/Channels";
import { Department_Service } from "../../../services/Department.Service";
@Component({
	selector: "app-Chat_Window",
	templateUrl: "./Chat_Window.component.html",
	styleUrls: ["./Chat_Window.component.css"],
})
export class Chat_WindowComponent implements OnInit, AfterViewInit {
	@ViewChild("chatsec", { static: false }) chatsec: ElementRef;

	Entry_View: boolean = true;
	EditIndex: number;
	Menu_Id: number = 133;
	color = "primary";
	mode = "indeterminate";
	value = 50;
	Total_Entries: Number;
	issLoading: boolean;
	array: any;
	myInnerHeight: number;
	myInnerHeightTwo: number;
	myTotalHeight: number;
	Login_User: string = "0";
	Permissions: any;
	private sockets;
	url = environment.NotificationPath;
	To_user_list = "";
	messageText: string = "";
	messages: string[] = [];
	incomingmessages: string[] = [];
	Chats_: Chats = new Chats();
	Login_User_Name: string;
	ImageFile_: any;
	Display_File_: string;
	Document_File_Array: any[];
	User_Details_: string;
	User_Details_Temp: User_Details = new User_Details();
	User_Details_Data: User_Details[];
	Comments_Data: Chats[];
	User_Details_Filter: User_Details[];

	tagged_users: Tagged_User[];
	Users: User_Details[];
	User_Div: boolean = false;
	User_Name_: string;
	show_tags: Boolean = false;
	Image_View: boolean = false;
	File: File;
	Group_User_View: boolean = false;
	Group_User_full_View: boolean = false;
	GUsers: User_Details[];
	grouped_users_list: Tagged_User[];
	grouped_users: Tagged_User[];
	GroupSave: boolean = false;
	Group_: Group = new Group();
	Group_Name_: string;
	Channel_Log: Channels[];
	Channels_: Channels = new Channels();
	Channel_Id_Temp_: number;
	Notifictn_Count: number = 0;
	Noticn_Count_View: boolean = false;
	chat_view: boolean = false;
	group_view: boolean = false;

	m_channel_id: number = 0;
	d_channel_id: number = 0;
	msg_: Channels = new Channels();

	Chat_Data: any;
	Chat_Count_: number = 0;
	OpenChannel_Id: number = 0;
	User_List_Data: any;
	Exist_Channels: any;
	Exist_Channels_Id: number = 0;
	msg_cunt: number = 0;
	Check_Box_View: boolean = false;
	Flag_Channel_Id_: number = 0;
	Flag_Channel_Name_: string = "";
	Flag_Channel_Type_: number;
	Edited_Name_: string;
	Select_TaggedUser: boolean = false;
	Select_GroupedUser: boolean = false;
	Tagged_Ids: any;
	id_num: any;
	Alert_Message: string = "";
	alertValue: number = 0;
	Chat_Edit: any;
	Chat_Delete: any;
	Chat_Save: any;
	Chat_View: any;
	Save_Call_Status: boolean = false;
	uniqueU: Tagged_User[];
	Tagged_Check_Box: boolean = false;

	loadedMessageCount = 0; 
	constructor(
		public Task_Service_: Task_Service,
		public Chat_Window_Service_: Chat_Window_Service,
		public Department_Service_: Department_Service,
		private route: ActivatedRoute,
		private router: Router,
		public dialogBox: MatDialog
	) { 
		console.log('this.url: ', this.url);
		this.sockets = io(this.url, {
				transports: ["websocket"],
				auth: {
					token: localStorage.getItem("token"),
				},
			});
			this.sockets = io(this.url);
		// 		this.sockets = io(this.url, {
		// 	withCredentials: true,
		// 	transports: ['websocket', 'polling'],
		// 	reconnection: true, 
		// 	reconnectionAttempts: 5,
		// 	reconnectionDelay: 1000,
		// 	reconnectionDelayMax: 5000,
		// 	timeout: 20000,
		// 	autoConnect: true,
		// 	forceNew: true,
		// 	extraHeaders: {
		// 	  'Origin': window.location.origin
		// 	},
		// 	auth: {
		// 		token: localStorage.getItem("token"),
		// 	},
		//   });
		  this.sockets.on("connect", () => {
			console.log("Socket.io connected successfully.",);
			this.sockets.on("new-message", (message) => {
				console.log('message:34 ', message);
				;
				if (message.Notification_Type_Name == "New Channel") {
					var tempuser_id = "m" + this.Login_User + "m";
					;
					// console.log(message.To_User_List, 34);
					// console.log(tempuser_id, 35);
					if (message.To_User_List)
						var k = message.To_User_List.includes(tempuser_id);
					if (k) {
						;
						this.Channels_.Channel_Id = message.Channel_Id;
						this.Channels_.Channel_Name = message.Channel_Name;
						this.Channels_.Channel_Type = message.Channel_Type;
						this.Channels_.User_Name = message.User_Name;
						this.Channels_.Msg_Count = 0;
						if (this.Channels_.Channel_Name != undefined)
							this.Channel_Log.push(this.Channels_);
	
						//this.Channels_.Msg_Count = 1;
						//this.Channel_Log.push(this.Channels_);
					}
				} else {
					if (message.Channel_Id != this.Channel_Id_Temp_) {
						for (var i = 0; i < this.Channel_Log.length; i++) {
							if (
								message.Channel_Id == this.Channel_Log[i].Channel_Id &&
								message.From_User != Number(this.Login_User)
							) {
								this.Channel_Log[i].Msg_Count++;
								break;
							}
						}
					}
	
					;
					// for (var i = 0; i < this.Channel_Log.length; i++) {
					// 	if (message.Channel_Id == this.Channel_Log[i].Channel_Id) {
					// 		this.Channel_Log[i].Msg_Count++;
					// 		break;
					// 	}
					// 	if (message.Channel_Id != this.Channel_Id_Temp_) {
					// 		this.Channel_Log[i].Msg_Count;
					// 		break;
					// 	}
					// }
				}
				this.messages.push(message);
				console.log('this.messages: ', this.messages);
				// console.log(this.messages, 78);
				// if (message.Channel_Id == this.Channel_Id_Temp_) {
				// 	;
				// this.Chat_Window_Service_.Reset_CurrentChannel_Count(
				// 	this.Channel_Id_Temp_,
				// 	this.Login_User
				// ).subscribe(
				// 	(Rows) => {
				// 		;
				// 		this.issLoading = false;
				// 	},
				// 	(Rows) => {
				// 		this.issLoading = false;
				// 	}
				// );
				// }
				// if (
				// 	message.From_User != Number(this.Login_User) &&
				// 	message.Channel_Id == this.Channel_Id_Temp_
				// ) {
				// 	;
				// 	// this.messages.push(message);
				// } else {
				// 	for (var i = 0; i < this.Channel_Log.length; i++) {
				// 		if (message.Channel_Id == this.Channel_Log[i].Channel_Id) {
				// 			this.Channel_Log[i].Msg_Count++;
	
				// 			break;
				// 		}
				// 	}
				// }
	
				// this.msg_ =message
				// if(message.From_User != Number(this.Login_User) && message.Channel_Id != this.Channel_Id_Temp_)
	
				// this.Notifictn_Count = Number(this.Notifictn_Count)+1
				// message.Chats="";
				// message.Display_File="";
				// message.Tagged_Users_List="";
				// message.From_User_Name="";
				// message.Date="";
	
				//  this.Load_Channels()
				//  if(message.From_User != Number(this.Login_User) && message.Channel_Id == this.Channel_Id_Temp_)
				//  {
				//     this.Get_Chats(this.Channel_Id_Temp_,0);
				//     // this.Notifictn_Count = Number(this.Notifictn_Count)+1
				// }
	
				// console.log(this.messages, 1);
			});
			});
			
	}
	
	getMessages1 = () => {
		return Observable.create((observer) => {
			this.sockets.on("new-message", (message) => {
				console.log('message: ', message);
				observer.next(message);
			});
		});
	};
	
	ngOnInit() {
		this.Login_User = localStorage.getItem("Login_User");
		this.Login_User_Name = localStorage.getItem("uname");
		localStorage.setItem("Current_Channel_Id", "0");
		;
		this.Page_Load();
		this.Load_Channels();
	
	}
	ngAfterViewInit() {
		setTimeout(() => {
			this.scrollToBottom();
		}, 100);
	}

	sendmsg() {
		this.sockets.emit("new-message", "jid");
	}
	Get_Menu_Status(Menu_id, Login_user_id) {
		this.issLoading = false;
		this.Department_Service_.Get_Menu_Status(Menu_id, Login_user_id).subscribe(
			(Rows) => {
				if (Rows[0][0] == undefined) {
					if (Menu_id == 133) {
						localStorage.removeItem("token");
						this.router.navigateByUrl("Home_Page");
					}
				} else if (Rows[0][0].View > 0) {
					if (Menu_id == 133) {
						this.Permissions = Rows[0][0];
						if (this.Permissions == undefined || this.Permissions == null) {
							localStorage.removeItem("token");
							this.router.navigateByUrl("Home_Page");
						}
						this.Chat_Edit = this.Permissions.Edit;
						this.Chat_Save = this.Permissions.Save;
						this.Chat_Delete = this.Permissions.Delete;
						this.Chat_View = this.Permissions.View;
					}
				}
			},
			(Rows) => {
				this.issLoading = false;
				const dialogRef = this.dialogBox.open(DialogBox_Component, {
					panelClass: "Dialogbox-Class",
					data: { Message: "Error Occured", Type: "2" },
				});
			}
		);
	}
	sendMessage1(message: string): void {
  const trimmedString = this.messageText.trim();

  if (trimmedString !== "" || this.Display_File_ !== "") {
    // Prepare chat data
    this.Chats_.Chats = this.messageText;
    this.Chats_.From_User = Number(this.Login_User);
    this.Chats_.From_User_Name = this.Login_User_Name;
    this.Chats_.Display_File = this.Display_File_;
    this.Chats_.Tagged_User = this.tagged_users;
	console.log('this.Chats_.Tagged_User: ', this.Chats_.Tagged_User);
    this.Chats_.Channel_Id = this.Channel_Id_Temp_;

    if (this.Save_Call_Status) return;
    this.Save_Call_Status = true;

    this.Chat_Window_Service_.Save_Chat(this.Chats_, this.ImageFile_, this.Document_File_Array).subscribe(
      (Save_status) => {
		console.log('Save_status: ', Save_status);
		console.log('Save_status: ', Save_status[0]);
        this.issLoading = false;
	console.log('Save_status[1][0].TaggedIn_: ', Save_status[1][0].TaggedIn_);
        // Handle tagged notifications
        const taggedUsers = Save_status[1][0].TaggedIn_;
	
        if (Array.isArray(taggedUsers)) {
          for (let element of taggedUsers) {
            const msg2 = {
              Notification_Type_Name: "Tagged Chat",
              Entry_Type: 17,
              From_User_Name: "",
              To_User: element,
              Student_Name: Save_status[0][0].messages_,
            };
            this.sockets.emit("new-message", msg2);
            console.log('msg2: ', msg2);
          }
        }
debugger
        // Unwrap the actual chat result
        const chatData = Save_status[0][0];
        console.log('chatData: ', chatData);
	console.log('his.To_user_list: ', this.To_user_list);
        if (chatData && Number(chatData.Chat_Id_) > 0) {
	
          const msg = {
            Notification_Type_Name: "Chat",
            From_User_Name: chatData.From_User_Name_,
            From_User: chatData.From_user_,
            Chats: chatData.messages_,
            Date: chatData.Date_,
            Tagged_Users_List: chatData.User_Details_Name_,
            To_User_List: this.To_user_list,
		
            File_Name: chatData.File_,
            Display_File: chatData.File_Name_,
            Channel_Id: chatData.Channel_Id_,
          };

          this.sockets.emit("new-message", msg);
          console.log('msg: ', msg);

          setTimeout(() => {
            this.scrollToBottom();
          }, 100);
debugger
          this.clr_Chat_Window();
		    this.refreshMessagesAfterSend(chatData.Chat_Id_);
	
        } else {
          this.dialogBox.open(DialogBox_Component, {
            panelClass: "Dialogbox-Class",
            data: { Message: "Error Occurred", Type: "2" },
          });
          document.getElementById("Save_Button").hidden = false;
        }

        this.Save_Call_Status = false;
      },
      (error) => {
        this.issLoading = false;
        this.dialogBox.open(DialogBox_Component, {
          panelClass: "Dialogbox-Class",
          data: { Message: "Error Occurred", Type: "2" },
        });
        document.getElementById("Save_Button").hidden = false;
      }
    );
  }
}
	clr_Chat_Window() {
		;
		this.tagged_users = [];
		this.Users = [];
		this.messageText = "";
		this.ImageFile_ = [];
		this.Display_File_ = "";
		// this.Select_TaggedUser == false;
		// this.User_Details_Data = [];
		// for (var i = 0; i < this.User_Details_Data.length; i++) {
		// 	if (this.Select_TaggedUser == false)
		// 		this.User_Details_Data[i].Check_Box = false;
		// 	else this.User_Details_Data[i].Check_Box = false;
		// }
		this.User_Details_Data = [];
	}
	
	clr_Group_Window() {
		this.grouped_users_list = [];
		this.grouped_users = [];
		this.Group_Name_ = "";
		this.Group_User_View = false;
		this.Group_User_full_View = false;
		this.GroupSave = false;
		this.GUsers = [];
		this.Group_.Channel_Id = 0;
		this.Select_GroupedUser = false;
		this.Select_TaggedUser = false;
		for (var m = 0; m < this.User_Details_Data.length; m++) {
			this.User_Details_Data[m].Check_Box = false;
		}
	}
	refreshMessagesAfterSend(newChatId: number): void {
  console.log('Refreshing messages for channel:', this.Channel_Id_Temp_);
  this.Chat_Window_Service_.Get_Chats(
			this.Channel_Id_Temp_,
			this.Login_User
		).subscribe(
			(Rows) => {
				this.User_List_Data = Rows[1];

				var temp_user_list_data = "";
				for (var i = 0; i < this.User_List_Data.length; i++) {
					temp_user_list_data += "m" + this.User_List_Data[i].User_Id + "m,";
				}

				this.To_user_list = temp_user_list_data;
				;
				if (Rows[0].length > 0) {
					this.messages = Rows[0].slice().reverse();
					this.OpenChannel_Id = Rows[0][0].Channel_Id;
				} else this.messages = [];
				this.Load_Channels();

				;
				this.Flag_Channel_Id_ = Rows[2][0].Channel_Id;
				var channeltemp = Rows[2][0].Channel_Name;
				this.Flag_Channel_Type_ = Rows[2][0].Channel_Type;
				if (this.Flag_Channel_Type_ == 2 && channeltemp == this.Login_User_Name)
					this.Flag_Channel_Name_ = Rows[2][0].User_Name;
				else this.Flag_Channel_Name_ = Rows[2][0].Channel_Name;
				setTimeout(() => {
					this.scrollToBottom();
				}, 100);
			},
			(Rows) => {
				this.issLoading = false;
			}
		);
	}
	Page_Load() {
		this.myInnerHeight = window.innerHeight;
		this.myTotalHeight = this.myInnerHeight;
		this.myTotalHeight = this.myInnerHeight - 730;
		this.myInnerHeight = this.myInnerHeight - 140;
		this.myInnerHeightTwo = this.myInnerHeight - 700;
		this.Get_Menu_Status(133, this.Login_User);

		this.Entry_View = false;

		// this.New_view = true;
	}
	File_Change(event: Event) {
		const file = (event.target as HTMLInputElement).files;
		this.ImageFile_ = file;
		this.Display_File_ = this.ImageFile_[0].name;
	}

	Load_User_Details(event: any) {
		;
		var Value = "";
		// if (event== undefined) Value = ""
		if (event.target.value == "") Value = "undefined";
		else if (event.target.value == undefined) Value = "undefined";
		else Value = event.target.value.toLowerCase();
		this.issLoading = true;
		this.Chat_Window_Service_.Load_ChatUser_Details(
			Value,
			Number(this.Login_User)
		).subscribe(
			(Rows) => {
				debugger
				console.log('Rows: ', Rows);
				;
				if (Value == "undefined") {
					Value = "";
				}
				if (Rows != null) {
					this.User_Details_Data = Rows[0];

					this.User_Details_Filter = [];

					for (var i = 0; i < this.User_Details_Data.length; i++) {
						if (
							this.User_Details_Data[
								i
							].User_Details_Name.toLowerCase().includes(Value)
						)
							this.User_Details_Filter.push(this.User_Details_Data[i]);
					}
					this.issLoading = false;
				}
			},
			(Rows) => {
				this.issLoading = false;
			}
		);
	}
	User_Click() {
		this.User_Div = true;
		for (var m = 0; m < this.User_Details_Data.length; m++) {
			this.User_Details_Data[m].Check_Box = false;
		}
	}

	Tagged_Users(User_D_e: User_Details, IsChecked: boolean) {
		;
		if (this.Users == undefined) this.Users = [];
		;
		let index = this.Users.indexOf(User_D_e);
		if (!IsChecked) {
			if (index > -1) {
				this.Users.splice(index, 1);
			}
		} else {
			this.Users.push(User_D_e);
		}

		const uniqueUsers = this.Users.filter(
			(user, index, self) =>
				index ===
				self.findIndex((u) => u.User_Details_Id === user.User_Details_Id)
		);

		// Extract the name property values into an array and use join() to concatenate them into a single string
		const namesString = uniqueUsers
			.map((obj) => `@${obj.User_Details_Name}`)
			.join(", ");
		this.id_num = uniqueUsers.map((obj) => obj.User_Details_Id).join(", ");
		const id = parseInt(this.id_num);
		;
		this.Tagged_Ids = this.id_num.split(",").map((id) => parseInt(id));
		// Create an object with the concatenated namesString as the value of the name property
		this.tagged_users = [
			{
				User_Id: this.id_num,
				User_Details_Name: namesString,
				User_Details_Id: 0,
			},
		];
	}
	Load_Channels() {
		this.issLoading = true;

		// localStorage.setItem('Chat_Count_', '0');
		this.Chat_Window_Service_.Load_Channels(this.Login_User).subscribe(
			(Rows) => {
				;
				this.Channel_Log = Rows[0];
				// this.Chat_Data = Rows[1];
				// this.Chat_Count_ =this.Chat_Data[0].Chat_Count

				// localStorage.setItem('Chat_Count_', String(this.Chat_Count_));

				// for (var i = 0; i < this.Channel_Log.length; i++) {
				// if(this.Channel_Log.)
				// {
				//     this.Notifictn_Count = ;
				// }

				// }

				// this.Notifictn_Count=Rows[0][0].Msg_Count

				// for (var i=0;i<this.Channel_Log.length;i++)
				// {
				//     if(this.Channel_Log[i].Channel_Id === this.msg_.Channel_Id)
				//     {
				//         this.Channel_Log[i].Msg_Count= this.Channel_Log[i].Msg_Count
				//     }

				// }
			},
			(Rows) => {
				this.issLoading = false;
			}
		);
	}
	Get_Chats(Channel_Id, Msg_Count) {
		this.tagged_users = [];
		// this.setActive(ChannelLogs);
		this.chat_view = true;
		this.Channel_Id_Temp_ = Channel_Id;

		localStorage.setItem("Current_Channel_Id", String(Channel_Id));
		if (Msg_Count != 0) {
			var msg = {
				From_User: Number(this.Login_User),
				Notification_Type_Name: "read_msg",
				Msg_Count: Msg_Count,
			};

			this.sockets.emit("new-message", msg);
			this.messageText = "";
		}

		this.issLoading = true;
		this.Chat_Window_Service_.Get_Chats(
			this.Channel_Id_Temp_,
			this.Login_User
		).subscribe(
			(Rows) => {
				this.User_List_Data = Rows[1];

				var temp_user_list_data = "";
				for (var i = 0; i < this.User_List_Data.length; i++) {
					temp_user_list_data += "m" + this.User_List_Data[i].User_Id + "m,";
				}

				this.To_user_list = temp_user_list_data;
				;
				if (Rows[0].length > 0) {
					this.messages = Rows[0].slice().reverse();
					this.OpenChannel_Id = Rows[0][0].Channel_Id;
				} else this.messages = [];
				this.Load_Channels();

				;
				this.Flag_Channel_Id_ = Rows[2][0].Channel_Id;
				var channeltemp = Rows[2][0].Channel_Name;
				this.Flag_Channel_Type_ = Rows[2][0].Channel_Type;
				if (this.Flag_Channel_Type_ == 2 && channeltemp == this.Login_User_Name)
					this.Flag_Channel_Name_ = Rows[2][0].User_Name;
				else this.Flag_Channel_Name_ = Rows[2][0].Channel_Name;
				setTimeout(() => {
					this.scrollToBottom();
				}, 100);
			},
			(Rows) => {
				this.issLoading = false;
			}
		);
	}
	// Load_old_messages() {
	// 	this.myInnerHeight = this.myInnerHeight - 140;
	// 	this.issLoading = true;
	// 	this.Chat_Window_Service_.Load_old_messages(this.Channel_Id_Temp_).subscribe(
	// 		(Rows) => {
	// 			// this.messages.unshift(...Rows[0])
	// 			this.messages.unshift(...Rows[0].slice().reverse());
	// 			console.log(this.messages, 2);
	// 		},
	// 		(Rows) => {
	// 			this.issLoading = false;
	// 		}
	// 	);
	// }
	Load_old_messages() {
    console.log('Loading more messages, current count:', this.loadedMessageCount);
    
    this.issLoading = true;
    
    this.Chat_Window_Service_.Load_old_messages(this.Channel_Id_Temp_, this.loadedMessageCount).subscribe(
        (Rows) => {
            this.issLoading = false; // Always reset loading state
            
            if(Rows[0].length > 0) {
                this.messages.unshift(...Rows[0].slice().reverse());
                this.loadedMessageCount += Rows[0].length; // Update count
                console.log('Loaded', Rows[0].length, 'more messages. Total loaded:', this.loadedMessageCount);
            } else {
                const dialogRef = this.dialogBox.open(DialogBox_Component, {
                    panelClass: "Dialogbox-Class",
                    data: { Message: "No More Messages", Type: "3" },
                });
            }
        },
        (error) => {
            this.issLoading = false; // Reset on error too
            console.error('Error loading messages:', error);
        }
    );
}
	// Load_old_messages() {
	// 	debugger
	// 	//this.myInnerHeight = this.myInnerHeight - 140;
	// 	this.issLoading = true;
	// 	this.Chat_Window_Service_.Load_old_messages(this.Channel_Id_Temp_).subscribe(
	// 		(Rows) => {
	// 			debugger
	// 			// this.messages.unshift(...Rows[0])
	// 			if(Rows[0].length >0)
	// 			{
	// 				this.messages.unshift(...Rows[0].slice().reverse());
	// 			}
			
	// 			// console.log(this.messages, 2);
	// 			if (Rows[0].length == 0) {
	// 				this.issLoading = false;
	// 				const dialogRef = this.dialogBox.open(DialogBox_Component, {
	// 					panelClass: "Dialogbox-Class",
	// 					data: { Message: "No Chats Found", Type: "3" },
	// 				});
	// 			}
	// 		},
	// 		(Rows) => {
	// 			this.issLoading = false;
	// 		}
	// 	);
	// }
	Download_Image(Photo) {
		var bs = environment.FilePath;
		var s = bs + Photo;
		window.open(s, "_blank");
	}
	Choose_Person() {
		this.Group_User_View = true;
		this.GroupSave = false;
	}
	Add_to_Group() {
		;
		this.Group_User_View = true;
		this.GroupSave = false;
		this.Group_User_full_View = true;
		this.Alert_Message = "";
		this.alertValue = 0;

		this.Tagged_Ids = "";
		this.Select_GroupedUser = false;
		this.Load_User_Details(event);
		this.tagged_users = [];
		this.grouped_users = [];
		this.grouped_users_list = [];
	}
	Group_Users(User_G_e: User_Details, index) {
		if (this.GUsers == undefined) this.GUsers = [];
		this.GUsers.push(User_G_e);

		this.User_Details_ = "";
		this.Load_User_Details(event);
		this.uniqueU = this.GUsers.filter(
			(user, index, self) =>
				index ===
				self.findIndex((u) => u.User_Details_Id === user.User_Details_Id)
		);
		this.grouped_users = this.uniqueU;

		// Extract the name property values into an array and use join() to concatenate them into a single string
		const namesStrings = this.uniqueU
			.map((obj) => `@${obj.User_Details_Name}`)
			.join(", ");
		const id_nums = this.uniqueU.map((obj) => obj.User_Details_Id).join(", ");
		//const ids = parseInt(id_nums);

		// Create an object with the concatenated namesString as the value of the name property
		this.grouped_users_list = [
			{ User_Id: "0", User_Details_Name: namesStrings, User_Details_Id: 0 },
		];
		this.grouped_users.push({
			User_Id: this.Login_User,
			User_Details_Name: this.Login_User_Name,
			User_Details_Id: 0,
		});
		this.Group_.Channel_Type = 1;
	}
	Move_to_GroupSave() {
		this.Alert_Message = "";
		this.alertValue = 0;
		if (
			this.grouped_users == undefined ||
			this.grouped_users == null ||
			this.grouped_users.length == 0
		) {
			{
				// const dialogRef = this.dialogBox.open(DialogBox_Component, {
				// 	panelClass: "Dialogbox-Class",
				// 	data: { Message: "At least 1 Contact must be selected", Type: "3" },
				// });
				// this.Alert_Message = "Choose Team"
				this.Alert_Message = "At least 1 Contact must be selected";
				this.alertValue = 1;

				//return;
			}
		} else {
			this.Group_User_View = false;
			this.GroupSave = true;
			this.Group_User_full_View = true;
		}

		;
	}
	Group_Save() {
		this.Alert_Message = "";
		this.alertValue = 0;
		if (
			this.Group_Name_ == "" ||
			this.Group_Name_ == undefined ||
			this.Group_Name_ == null
		) {
			{
				// const dialogRef = this.dialogBox.open(DialogBox_Component, {
				// 	panelClass: "Dialogbox-Class",
				// 	data: { Message: "Enter Group Name", Type: "3" },
				// });
				this.Alert_Message = "Enter Group Name";
				this.alertValue = 1;
				//return;
			}
		} else {
			;

			this.Group_.Group_Users = this.grouped_users;
			this.Group_.Group_Name = this.Group_Name_;
			this.Group_.From_User = Number(this.Login_User);
			this.Group_.From_UserName = this.Login_User_Name;

			var temp_user_list_data = "";
			for (var i = 0; i < this.grouped_users.length; i++) {
				temp_user_list_data += "m" + this.grouped_users[i].User_Id + "m,";
			}

			this.To_user_list = temp_user_list_data;
			;
			if (this.Save_Call_Status == true) return;
			else this.Save_Call_Status = true;
			this.issLoading = true;
			this.Chat_Window_Service_.Group_Save(this.Group_).subscribe(
				(Save_status) => {
					;
					this.issLoading = false;
					Save_status = Save_status[0];
					if (Number(Save_status[0].Channel_Id_) > 0) {
						if (Number(Save_status[0].Channel_Type_) == 1) {
							// const dialogRef = this.dialogBox.open(DialogBox_Component, {
							// 	panelClass: "Dialogbox-Class",
							// 	data: { Message: "Saved", Type: "false" },
							// });
							this.Alert_Message = "Saved";
							this.alertValue = 2;
						}

						if (Number(Save_status[0].Channel_Id_) > 0) {
							var msg = {
								Notification_Type_Name: "New Channel",
								From_User_Name: this.Login_User_Name,
								From_User: Number(this.Login_User),
								To_User_List: this.To_user_list,
								Channel_Id: Save_status[0].Channel_Id_,
								Channel_Name: this.Group_Name_,
								Channel_Type: Save_status[0].Channel_Type_,
								User_Name: Save_status[0].User_Name_,
							};
							;
							this.sockets.emit("new-message", msg);
							this.messageText = "";
						}

						this.clr_Group_Window();
						this.Load_Channels();
						this.Get_Chats(Save_status[0].Channel_Id_, 0);
					} else {
						const dialogRef = this.dialogBox.open(DialogBox_Component, {
							panelClass: "Dialogbox-Class",
							data: { Message: "Error Occured", Type: "2" },
						});
						document.getElementById("Save_Button").hidden = false;
					}
					this.issLoading = false;
					this.Save_Call_Status = false;
				},
				(Rows) => {
					this.issLoading = false;
					const dialogRef = this.dialogBox.open(DialogBox_Component, {
						panelClass: "Dialogbox-Class",
						data: { Message: "Error Occured", Type: "2" },
					});
					document.getElementById("Save_Button").hidden = false;
				}
			);
		}
	}
	// In_Person_Click(User_D_P:User_Details,index){
	//
	//     if (this.GUsers==undefined)    this.GUsers = []
	//     this.GUsers.push(User_D_P)

	//     const uniqueUsers = this.GUsers.filter((user, index, self) =>
	//     index === self.findIndex((u) => u.User_Details_Id === user.User_Details_Id)
	//     );
	//     this.grouped_users = uniqueUsers
	//     this.grouped_users.push({'User_Details_Id':Number(this.Login_User),'User_Details_Name':this.Login_User_Name})
	//
	//     this.Group_Name_ = User_D_P.User_Details_Name
	//     this.Group_.Channel_Type = 2
	//     this.Group_Save()
	// }

	In_Person_Click(User_D_P: User_Details, index) {
		debugger
		if (this.GUsers == undefined) this.GUsers = [];
		this.GUsers.push(User_D_P);
		const uniqueUsers = this.GUsers.filter(
			(user, index, self) =>
				index === self.findIndex((u) => u.User_Id === user.User_Id)
		);
		this.grouped_users = uniqueUsers;
		//if (this.grouped_users == undefined) this.grouped_users = [];
		this.grouped_users.push({
			User_Id: this.Login_User,
			User_Details_Name: this.Login_User_Name,
			User_Details_Id: 0,
		});
		;
		this.Group_Name_ = User_D_P.User_Details_Name;
		this.Group_.Channel_Type = 2;

		this.issLoading = true;
		debugger
		this.Chat_Window_Service_.Load_Exist_Channels(
			User_D_P.User_Details_Id,
			this.Login_User
		).subscribe((Rows) => {
			debugger
			if (Rows[0].length != 0) {
				this.Exist_Channels = Rows[0];
				this.Exist_Channels_Id = Rows[0][0].Channel_Id;
				this.msg_cunt = Rows[0][0].Msg_Count;

				if (this.Exist_Channels_Id > 0) {
					debugger
					this.Group_User_View = false;
					this.Get_Chats(this.Exist_Channels_Id, this.msg_cunt);
				}
			} else this.Group_Save();
		});
	}
	scrollToBottom() {
		const div = this.chatsec.nativeElement.querySelector(".div-b");
		div.scrollTop = div.scrollHeight;
	}
	Delete_Channel(Channel_Id) {
		const dialogRef = this.dialogBox.open(DialogBox_Component, {
			panelClass: "Dialogbox-Class",
			data: {
				Message: "Do you want to delete ?",
				Type: "true",
				Heading: "Confirm",
			},
		});
		dialogRef.afterClosed().subscribe((result) => {
			;
			if (result == "Yes") {
				this.issLoading = true;
				this.Chat_Window_Service_.Delete_Channel(
					this.Flag_Channel_Id_
				).subscribe(
					(Delete_status) => {
						;
						if (Number(Delete_status[0][0].Channel_Id_) > 0) {
							this.Channel_Log.splice(this.EditIndex, 1);
							const dialogRef = this.dialogBox.open(DialogBox_Component, {
								panelClass: "Dialogbox-Class",
								data: { Message: "Deleted", Type: "false" },
							});
							this.Load_Channels();
							this.Flag_Channel_Name_ = "";
							this.Flag_Channel_Type_ = 0;
						} else {
							const dialogRef = this.dialogBox.open(DialogBox_Component, {
								panelClass: "Dialogbox-Class",
								data: { Message: "Error Occured", Type: "2" },
							});
						}
						this.issLoading = false;
					},
					(Rows) => {
						const dialogRef = this.dialogBox.open(DialogBox_Component, {
							panelClass: "Dialogbox-Class",
							data: { Message: "Error Occured", Type: "2" },
						});
					}
				);
				this.issLoading = false;
			}
		});
	}
	editclick(Flag_Channel_Name_) {
		;
		this.Edited_Name_ = Flag_Channel_Name_;
	}
	Edit_Channel() {
		;
		if (
			this.Edited_Name_ == "" ||
			this.Edited_Name_ == undefined ||
			this.Edited_Name_ == null
		) {
			{
				const dialogRef = this.dialogBox.open(DialogBox_Component, {
					panelClass: "Dialogbox-Class",
					data: { Message: "Enter Group Name", Type: "3" },
				});
				return;
			}
		}
		this.Chat_Window_Service_.Edit_Group(
			this.Flag_Channel_Id_,
			this.Edited_Name_
		).subscribe(
			(Rows) => {
				;

				if (Rows[0].length > 0) {
					const dialogRef = this.dialogBox.open(DialogBox_Component, {
						panelClass: "Dialogbox-Class",
						data: { Message: "Updated", Type: "false" },
					});
				}

				this.Load_Channels();
				this.Get_Chats(this.Flag_Channel_Id_, 0);
			},
			(Rows) => {
				this.issLoading = false;
			}
		);
	}
	Select_All_TaggedUser() {
		if (this.Users == undefined) this.Users = [];
		for (var i = 0; i < this.User_Details_Data.length; i++) {
			if (this.Select_TaggedUser == false)
				this.User_Details_Data[i].Check_Box = true;
			else this.User_Details_Data[i].Check_Box = false;
		}
		for (var m = 0; m < this.User_Details_Data.length; m++) {
			if (Boolean(this.User_Details_Data[m].Check_Box) == true) {
				this.Users.push(this.User_Details_Data[m]);
			} else {
				this.Users = [];
			}
		}
		;
		const uniqueUsers = this.Users.filter(
			(user, index, self) =>
				index ===
				self.findIndex((u) => u.User_Details_Id === user.User_Details_Id)
		);

		// Extract the name property values into an array and use join() to concatenate them into a single string
		const namesString = uniqueUsers
			.map((obj) => `@${obj.User_Details_Name}`)
			.join(", ");
		const id_num = uniqueUsers.map((obj) => obj.User_Details_Id).join(", ");
		const id = parseInt(id_num);

		// Create an object with the concatenated namesString as the value of the name property
		this.tagged_users = [
			{ User_Id: id_num, User_Details_Name: namesString, User_Details_Id: 0 },
		];
	}
	Select_All_GroupUser() {
		;
		this.Alert_Message = "";
		this.alertValue = 0;
		if (this.GUsers == undefined) this.GUsers = [];
		for (var i = 0; i < this.User_Details_Data.length; i++) {
			if (this.Select_GroupedUser == false)
				this.User_Details_Data[i].Check_Box = true;
			else this.User_Details_Data[i].Check_Box = false;
		}
		for (var m = 0; m < this.User_Details_Data.length; m++) {
			if (Boolean(this.User_Details_Data[m].Check_Box) == true) {
				this.GUsers.push(this.User_Details_Data[m]);
			} else {
				this.GUsers = [];
				this.grouped_users = [];
				this.grouped_users_list = [];
			}
		}
		;
		this.uniqueU = this.GUsers.filter(
			(user, index, self) =>
				index ===
				self.findIndex((u) => u.User_Details_Id === user.User_Details_Id)
		);
		this.grouped_users = this.uniqueU;

		// Extract the name property values into an array and use join() to concatenate them into a single string
		const namesStrings = this.uniqueU
			.map((obj) => `@${obj.User_Details_Name}`)
			.join(", ");
		const id_nums = this.uniqueU.map((obj) => obj.User_Details_Id).join(", ");
		//const ids = parseInt(id_nums);

		// Create an object with the concatenated namesString as the value of the name property
		if (this.uniqueU.length > 0) {
			this.grouped_users_list = [
				{ User_Id: "0", User_Details_Name: namesStrings, User_Details_Id: 0 },
			];
			this.grouped_users.push({
				User_Id: this.Login_User,
				User_Details_Name: this.Login_User_Name,
				User_Details_Id: 0,
			});
		}

		this.Group_.Channel_Type = 1;
	}
	GroupName_Click() {
		;
		this.Alert_Message = "";
		this.alertValue = 0;
	}
	Remove_User(index) {
		;
		this.GUsers.splice(index, 1);
	}
}
