import { Component, OnInit, Inject, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatMenuModule, MatButtonModule, MatIconModule, MatCardModule } from '@angular/material';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { OverlayContainer } from '@angular/cdk/overlay';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-DialogBox',
  templateUrl: './DialogBox.component.html',
  styleUrls: ['./DialogBox.component.css']
})

export class DialogBox_Component implements OnInit {
  @Input() showCloseIcon: boolean = false; // Default is true (show close icon)
  message: any;
  showNo: string;
  show: boolean;
  Heading: string;
  NoButton: String;
  YesButton: String;
  Image_Url:string;
  
  constructor(
    public dialogRef: MatDialogRef<DialogBox_Component>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.message = data.Message;
    this.showNo = data.Type;
    this.showNo= this.showNo.toString();
     
    if (this.showNo == "false" || this.showNo == "False") {
      this.NoButton = "No";
      this.YesButton = "OK";
      this.Image_Url='/assets/img/Green_Tick.gif';
      //giphy.gif
      this.show=false;
    }
    else if(this.showNo == "true" ||this.showNo == "True") {
      this.NoButton = "No";
      this.YesButton = "Yes";
      this.Image_Url='/assets/img/Question_Mark.gif';
      this.show=true;
    }
    else if(this.showNo == "2" )
    {
      this.NoButton = "No";
      this.YesButton = "OK";
      this.Image_Url='/assets/img/Red_Into.gif';
      this.show=false;
    }
    else if(this.showNo == "3" )
    {
      this.NoButton = "No";
      this.YesButton = "OK";
      this.Image_Url='/assets/img/White_Img.png';
      this.show=false;
    }
   
    this.Heading = data.Heading;
    if (this.Heading == '' || this.Heading == undefined) {
      this.Heading = 'Trackbox';
    }
  }
  onNoClick(): void {
    this.dialogRef.close('No');
  }
  onYesClick(): void {
    this.dialogRef.close('Yes');
  }
  onCloseClick(): void {
    this.dialogRef.close('Close'); // Return a specific string when 'Close' is clicked
  }
  ngOnInit() {
  }
}
