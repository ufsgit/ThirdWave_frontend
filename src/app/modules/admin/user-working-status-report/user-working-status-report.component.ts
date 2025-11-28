import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User_Details_Service } from '../../../services/User_Details.Service';
import { DialogBox_Component } from '../DialogBox/DialogBox.component';
import { User_Details } from '../../../models/User_Details';
import { Department } from '../../../models/Department';
import { User_Status } from '../../../models/User_Status';
import { MatDialog } from '@angular/material';
import { Student_Service } from 'app/services/Student.Service';


@Component({
  selector: 'app-user-working-status-report',
  templateUrl: './user-working-status-report.component.html',
  styleUrls: ['./user-working-status-report.component.scss']
})
export class UserWorkingStatusReportComponent implements OnInit {
// Data arrays
    User_Data: User_Details[] = [];
    Filtered_User_Data: User_Details[] = [];
    Department_Data: Department[] = [];
    User_Status_Data: User_Status[] = [];
    Selected_Department: Department = new Department();
    Search_Name: string = '';

    // Loading states
    issLoading: boolean = false;
    isChangingStatus: { [key: number]: boolean } = {};
Login_User:string="0";
Permissions: any;
    // Pagination
    currentPage: number = 1;
    itemsPerPage: number = 10;
    totalItems: number = 0;
    myInnerHeight: number;
myTotalHeight:number;
Fees_Edit:boolean;
Fees_Save:boolean;
   // Status change tracking
    statusChangeTracker: { [key: number]: number } = {}; // userId -> selected status ID
Fees_Delete:boolean;
  constructor(
       public User_Details_Service_: User_Details_Service,
       public Student_Service_:Student_Service, 
        private route: ActivatedRoute,
        private router: Router,
        public dialogBox: MatDialog
  ) { }

  ngOnInit() {
    debugger
     this.Login_User=localStorage.getItem(("Login_User"));
     this.Page_Load()
 
  }
  Page_Load()
{debugger
this.myInnerHeight = (window.innerHeight);
this.myInnerHeight = this.myInnerHeight - 250;

this.Get_Menu_Status(149,this.Login_User);

this.Load_Users();
this.Load_User_Status();
this.Load_Departments();
this.myInnerHeight = (window.innerHeight);
this.myTotalHeight=this.myInnerHeight - 200;
this.myTotalHeight=this.myTotalHeight-90;
this.myInnerHeight = this.myInnerHeight - 230;
}
Get_Menu_Status(Menu_id, Login_user_id)
{
    debugger
this.issLoading = false;
this.Student_Service_.Get_Menu_Status(Menu_id,Login_user_id).subscribe(Rows => {            
debugger
    
    if (Rows[0][0]==undefined)
    {
        localStorage.removeItem('token');
        this.router.navigateByUrl('Home_Page');
    }  
    else
    if (Rows[0][0].View >0) 
    {
        
        
        if(Menu_id==149)
        {
            
           

            this.Permissions=Rows[0][0];
            if(this.Permissions==undefined || this.Permissions==null)
                {
                    localStorage.removeItem('token');
                    this.router.navigateByUrl('Home_Page');
                }
                this.Fees_Edit=this.Permissions.Edit;
                this.Fees_Save=this.Permissions.Save;
                this.Fees_Delete=this.Permissions.Delete;
        }

    }
},
Rows => {
    this.issLoading = false;
    const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Error Occured', Type: "2" } });
});
}
  Load_Departments() {
    debugger;
        this.User_Details_Service_.Load_Department().subscribe(
            (Rows) => {
              debugger
                if (Rows != null) {
                    this.Department_Data = Rows[0];
                    // Add "All Departments" option
                    const allDepartments = new Department();
                    allDepartments.Department_Id = 0;
                    allDepartments.Department_Name = 'All Departments';
                    this.Department_Data.unshift(allDepartments);
                    this.Selected_Department = allDepartments;
                }
            },
            (Rows) => {
                console.error('Error loading departments:', Rows);
            }
        );
    }

    // Load user status options
      Load_User_Status() {
        debugger
        this.User_Details_Service_.Load_User_Status().subscribe(
            (Rows) => {
              debugger
                if (Rows != null) {
                    this.User_Status_Data = Rows[0];
                    console.log('Available statuses:', this.User_Status_Data);
                }
            },
            (Rows) => {
                console.error('Error loading user status:', Rows);
            }
        );
    }

    // Load all users
    Load_Users() {
        this.issLoading = true;
        debugger
        this.User_Details_Service_.Load_User_Working_Status_Report().subscribe(
            (Rows) => {
              debugger
                this.issLoading = false;
                if (Rows != null && Rows[0]) {
                    this.User_Data = Rows[0];
                    this.Apply_Filters();
                } else {
                    this.User_Data = [];
                    this.Filtered_User_Data = [];
                }
            },
            (error) => {
                this.issLoading = false;
                console.error('Error loading users:', error);
                this.dialogBox.open(DialogBox_Component, {
                    panelClass: 'Dialogbox-Class',
                    data: { Message: 'Error loading user data', Type: '2' }
                });
            }
        );
    }
 // Apply filters to user data
    Apply_Filters() {
        let filtered = [...this.User_Data];

        // Filter by department
        if (this.Selected_Department && this.Selected_Department.Department_Id > 0) {
            filtered = filtered.filter(user => 
                user.Department_Id === this.Selected_Department.Department_Id
            );
        }

        // Filter by name
        if (this.Search_Name && this.Search_Name.trim()) {
            const searchTerm = this.Search_Name.toLowerCase().trim();
            filtered = filtered.filter(user =>
                user.User_Details_Name.toLowerCase().includes(searchTerm)
            );
        }

        this.Filtered_User_Data = filtered;
        this.totalItems = filtered.length;
        this.currentPage = 1;
    }

    // Get paginated data
    get Paginated_Users(): User_Details[] {
        const startIndex = (this.currentPage - 1) * this.itemsPerPage;
        const endIndex = startIndex + this.itemsPerPage;
        return this.Filtered_User_Data.slice(startIndex, endIndex);
    }

    // Get total pages
    get totalPages(): number {
        return Math.ceil(this.totalItems / this.itemsPerPage);
    }

    // Handle status change from dropdown
    onStatusChange(user: User_Details, newStatusId: number) {
        console.log(`Changing status for ${user.User_Details_Name} to status ID: ${newStatusId}`);
        
        // Don't proceed if same status selected
        if (newStatusId === user.Working_Status) {
            return;
        }

        // Prevent multiple simultaneous requests
        if (this.isChangingStatus[user.User_Details_Id]) {
            return;
        }

        this.isChangingStatus[user.User_Details_Id] = true;
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

    // Get status badge class
    getStatusBadgeClass(status: string): string {
        switch (status.toLowerCase()) {
            case 'working':
                return 'badge badge-success';
            case 'leave':
                return 'badge badge-warning';
            case 'resigned':
                return 'badge badge-danger';
            default:
                return 'badge badge-secondary';
        }
    }

    // Get status by ID
    getStatusById(statusId: number): User_Status | undefined {
        return this.User_Status_Data.find(status => status.User_Status_Id === statusId);
    }

    // Pagination methods
    nextPage() {
        if (this.currentPage < this.totalPages) {
            this.currentPage++;
        }
    }

    previousPage() {
        if (this.currentPage > 1) {
            this.currentPage--;
        }
    }

    goToPage(page: number) {
        if (page >= 1 && page <= this.totalPages) {
            this.currentPage = page;
        }
    }

    // Export functionality
    // Export_To_Excel() {
    //     this.User_Details_Service_.Export_User_Working_Status_Report(
    //         this.Selected_Department.Department_Id || 0,
    //         this.Search_Name || ''
    //     ).subscribe(
    //         (response) => {
    //             // Handle file download
    //             const blob = new Blob([response], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    //             const url = window.URL.createObjectURL(blob);
    //             const anchor = document.createElement('a');
    //             anchor.download = `User_Working_Status_Report_${new Date().toISOString().split('T')[0]}.xlsx`;
    //             anchor.href = url;
    //             anchor.click();
    //             window.URL.revokeObjectURL(url);
    //         },
    //         (error) => {
    //             console.error('Export error:', error);
    //             this.dialogBox.open(DialogBox_Component, {
    //                 panelClass: 'Dialogbox-Class',
    //                 data: { Message: 'Error exporting report', Type: '2' }
    //             });
    //         }
    //     );
    // }

    // Refresh data
    Refresh_Data() {
        this.Load_Users();
    }
}