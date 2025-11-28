// Add ngOnChanges import
import { Component, OnInit, OnChanges, Input, Output, EventEmitter, Inject, SimpleChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User_Details_Service } from 'app/services/User_Details.Service';
import { Student_Service } from 'app/services/Student.Service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { Course_Service } from 'app/services/Course.service';
import { DialogBox_Component } from '../DialogBox/DialogBox.component';

@Component({
  selector: 'app-CourseSubjects',
  templateUrl: './CourseSubjects.component.html',
  styleUrls: ['./CourseSubjects.component.css']
})
export class CourseSubjectsComponent implements OnInit {
  @Input() courseId: number = 0;
   @Input() existingData: any[] = []; 
  @Output() closeDialog = new EventEmitter<void>();
  @Output() subjectsUpdated = new EventEmitter<any[]>();

  // Form data
  selectedQualification: number = 0;
  selectedState: number = 0;
  selectedUniversity: number = 0;
  selectedStream: number = 0;
  subjectName: string = '';
Login_User:string="0";
  // Dropdown data
  qualifications: any[] = [];
  states: any[] = [];
  universities: any[] = [];
  filteredUniversities: any[] = [];
  streams: any[] = [];
  issLoading: boolean = false;
  // Subject management
  subjects: any[] = [];
savedSubjects: any[] = [];

availableSubjects: any[] = [];
  constructor( public User_Details_Service_: User_Details_Service, public Course_Service_: Course_Service,
         public Student_Service_:Student_Service, 
          private route: ActivatedRoute,
          private router: Router,
          public dialogBox: MatDialog) {}

ngOnInit() {
      this.Login_User=localStorage.getItem(("Login_User"));
  this.resetComponentState();
  this.loadQualifications();
  this.loadStates();
  this.loadUniversities();
  this.loadStreams();

}

 
  ngOnChanges(changes: SimpleChanges) {
  // Clear existing data when courseId changes
  if (changes['courseId'] && changes['courseId'].currentValue) {
    this.savedSubjects = [];
  }
  
  // Load existing data when input changes
  if (changes['existingData'] && changes['existingData'].currentValue) {
    this.savedSubjects = [...changes['existingData'].currentValue];
    console.log('Loaded existing data in component:', this.savedSubjects);
  }
}
resetComponentState() {
  this.savedSubjects = [];
  this.selectedQualification = 0;
  this.selectedState = 0;
  this.selectedUniversity = 0;
  this.selectedStream = 0;
  this.availableSubjects = [];
  this.filteredUniversities = this.universities;
}
 loadQualifications() {
  this.issLoading = true;
  this.Course_Service_.Load_Qualifications().subscribe(
    (Rows) => {
      this.issLoading = false;
      if (Rows && Rows[0]) {
        this.qualifications  = Rows[0];
      } else {
        this.qualifications  = [];
      }
    },
    (error) => {
      this.issLoading = false;
      console.error('Error loading qualifications:', error);
      this.dialogBox.open(DialogBox_Component, {
        panelClass: 'Dialogbox-Class',
        data: { Message: 'Error loading qualification data', Type: '2' }
      });
    }
  );
}

  loadStates() {
  this.issLoading = true;
  this.Course_Service_.Load_States().subscribe(
    (Rows) => {
      this.issLoading = false;
      if (Rows && Rows[0]) {
        this.states = Rows[0];
      } else {
        this.states = [];
      }
    },
    (error) => {
      this.issLoading = false;
      console.error('Error loading states:', error);
      this.dialogBox.open(DialogBox_Component, {
        panelClass: 'Dialogbox-Class',
        data: { Message: 'Error loading state data', Type: '2' }
      });
    }
  );
}


 loadUniversities() {
  this.issLoading = true;
  this.Course_Service_.Load_Universities().subscribe(
    (Rows) => {
      this.issLoading = false;
      if (Rows && Rows[0]) {
        this.universities = Rows[0];
      } else {
        this.universities = [];
      }
    },
    (error) => {
      this.issLoading = false;
      console.error('Error loading universities:', error);
      this.dialogBox.open(DialogBox_Component, {
        panelClass: 'Dialogbox-Class',
        data: { Message: 'Error loading university data', Type: '2' }
      });
    }
  );
}

loadStreams() {
  this.issLoading = true;
  this.Course_Service_.Load_Streams().subscribe(
    (Rows) => {
      this.issLoading = false;
      if (Rows && Rows[0]) {
        this.streams = Rows[0];
      } else {
        this.streams = [];
      }
    },
    (error) => {
      this.issLoading = false;
      console.error('Error loading streams:', error);
      this.dialogBox.open(DialogBox_Component, {
        panelClass: 'Dialogbox-Class',
        data: { Message: 'Error loading stream data', Type: '2' }
      });
    }
  );
}


  onQualificationChange() {
    debugger
    // Reset dependent dropdowns
    this.selectedUniversity = 0;
    this.filterUniversities();
  }

  onStateChange() {
    debugger
    this.filterUniversities();
  }

  onUniversityChange() {
  debugger  // Additional logic if needed
  }
onStreamChange() {
 if (this.selectedStream > 0) {
   this.loadSubjectsByStream();
 } else {
   this.availableSubjects = [];
 }
}
removeSavedSubject(courseSubject,index: number) {


   
  // Call the service to delete the course subject
 this.issLoading = true;
  this.Course_Service_.Delete_Course_Subjects( courseSubject.id).subscribe(
    (Rows) => {
      debugger
      this.issLoading = false;
     
      if (Rows && Rows[0]) {
       this.savedSubjects.splice(index, 1);
      }  
    },
    (error) => {
      this.issLoading = false;
      console.error('Error :', error);
      this.dialogBox.open(DialogBox_Component, {
        panelClass: 'Dialogbox-Class',
        data: { Message: 'Error  ', Type: '2' }
      });
    }
  );
  
}


loadSubjectsByStream() {
  this.issLoading = true;
  this.Course_Service_.Load_Subjects_By_Stream(this.selectedStream).subscribe(
    (Rows) => {
      this.issLoading = false;
      if (Rows && Rows[0]) {
        this.availableSubjects = Rows[0].map(subject => ({
          ...subject,
          Mark: 0,
          Is_Compulsory: false
        }));
      } else {
        this.availableSubjects = [];
      }
    },
    (error) => {
      this.issLoading = false;
      console.error('Error loading subjects:', error);
      this.dialogBox.open(DialogBox_Component, {
        panelClass: 'Dialogbox-Class',
        data: { Message: 'Error loading subject data', Type: '2' }
      });
    }
  );
}
saveCourseSubjects() {
  debugger
  if (this.isFormValid()) {
    debugger
    const subjectsWithMarks = this.availableSubjects.filter(subject => subject.Mark > 0);
    console.log('subjectsWithMarks: ', subjectsWithMarks);
    
    const courseSubjectData = {
   
      Course_Id: this.courseId,
      Qualification_Id: this.selectedQualification,
      State_Id: this.selectedState,
      University_Id: this.selectedUniversity,
      Stream_Id: this.selectedStream,
      Subjects: subjectsWithMarks,
      Total_Marks: this.getTotalMarks()
    };
   console.log('courseSubjectData: ', courseSubjectData);
    this.issLoading = true;
    debugger
    this.Course_Service_.Save_Course_Subjects(courseSubjectData).subscribe(
      (Save_status) => {
        debugger
        this.issLoading = false;
        if (Save_status[0] && Save_status[0][0] && Save_status[0][0].Course_Subject_Id_ > 0) {
          // Add to saved list with names
          const savedSubject = {
            ...courseSubjectData,
            Qualification_Name: this.getQualificationName(this.selectedQualification),
            State_Name: this.getStateName(this.selectedState),
            University_Name: this.getUniversityName(this.selectedUniversity),
            Stream_Name: this.getStreamName(this.selectedStream),
            Course_Subject_Id: Save_status[0][0].Course_Subject_Id_
          };
          
          this.savedSubjects.push(savedSubject);
          this.resetForm();
           const dialogRef = this.dialogBox.open(DialogBox_Component, {
            panelClass: "Dialogbox-Class",
            data: { Message: "Course subjects saved successfully", Type: "false" },
          });
         
        } else {
          this.dialogBox.open(DialogBox_Component, {
            panelClass: 'Dialogbox-Class',
            data: { Message: 'Error saving course subjects', Type: '2' }
          });
        }
      },
      (error) => {
        this.issLoading = false;
        console.error('Error saving course subjects:', error);
        this.dialogBox.open(DialogBox_Component, {
          panelClass: 'Dialogbox-Class',
          data: { Message: 'Error saving course subjects', Type: '2' }
        });
      }
    );
  }
}
getTotalMarks(): number {
 return this.availableSubjects.reduce((total, subject) => total + (subject.Mark || 0), 0);
}
isFormValid(): boolean {
 return this.selectedQualification > 0 && 
        this.selectedState > 0 && 
        this.selectedUniversity > 0 && 
        this.selectedStream > 0 &&
        this.availableSubjects.some(subject => subject.Mark > 0);
}

addSubject() {
 if (this.isFormValid()) {
   const subjectsWithMarks = this.availableSubjects.filter(subject => subject.Mark > 0);
   
   const subject = {
     Course_Id: this.courseId,
     Qualification_Id: this.selectedQualification,
     Qualification_Name: this.getQualificationName(this.selectedQualification),
     State_Id: this.selectedState,
     State_Name: this.getStateName(this.selectedState),
     University_Id: this.selectedUniversity,
     University_Name: this.getUniversityName(this.selectedUniversity),
     Stream_Id: this.selectedStream,
     Stream_Name: this.getStreamName(this.selectedStream),
     Subjects: subjectsWithMarks,
     Total_Marks: this.getTotalMarks()
   };

   this.subjects.push(subject);
   this.resetForm();
 }
}
  filterUniversities() {
    debugger
    if (this.selectedState > 0) {
      this.filteredUniversities = this.universities.filter(uni => uni.stateId === this.selectedState);
    } else {
      this.filteredUniversities = this.universities;
    }
  }

  resetForm() {
 this.selectedQualification = 0;
 this.selectedState = 0;
 this.selectedUniversity = 0;
 this.selectedStream = 0;
 this.availableSubjects = [];
 this.filteredUniversities = this.universities;
}
//   isFormValid(): boolean {

//     return this.selectedQualification > 0 && 
   
//            this.selectedState > 0 && 
          
//            this.selectedUniversity > 0 && 
          
//            this.selectedStream > 0 && 
          
//            this.subjectName.trim() !== '';
            
//   }

//   addSubject() {
//     debugger
//     if (this.isFormValid()) {
//       const subject = {
       
//         qualificationId: this.selectedQualification,
//         qualificationName: this.getQualificationName(this.selectedQualification),
//         stateId: this.selectedState,
//         stateName: this.getStateName(this.selectedState),
//         universityId: this.selectedUniversity,
//         universityName: this.getUniversityName(this.selectedUniversity),
//         streamId: this.selectedStream,
//         streamName: this.getStreamName(this.selectedStream),
//         subjectName: this.subjectName.trim(),
//         courseId: this.courseId
//       };
//  console.log('subject: ', subject);
//       this.subjects.push(subject);
//       this.resetForm();
//     }
//   }

  removeSubject(index: number) {
    debugger
    this.subjects.splice(index, 1);
  }

  saveAllSubjects() {
    debugger
    if (this.subjects.length > 0) {
    //   this.http.post('/api/course-subjects/bulk', this.subjects).subscribe(
    //     response => {
    //       console.log('Subjects saved successfully:', response);
    //       this.subjectsUpdated.emit(this.subjects);
    //       this.subjects = [];
    //       this.closeDialogHandler();
    //     },
    //     error => {
    //       console.error('Error saving subjects:', error);
    //     }
    //   );
    }
  }

  // resetForm() {
  //   debugger
  //   this.selectedQualification = 0;
  //   this.selectedState = 0;
  //   this.selectedUniversity = 0;
  //   this.selectedStream = 0;
  //   this.subjectName = '';
  //   this.filteredUniversities = this.universities;
  // }

  // Fixed EventEmitter method
  closeDialogHandler() {
    debugger
    this.closeDialog.emit();
  }

 getQualificationName(id: number | string): string {
  debugger
  console.log('qualifications: ', this.qualifications);
  const qual = this.qualifications.find(q => q.Qualification_Id == id); // Use == instead of ===
  return qual ? qual.Qualification_Name : '';
}

getStateName(id: number | string): string {
  debugger
  console.log('states: ', this.states);
  const state = this.states.find(s => s.State_Id == id); // Use == instead of ===
  return state ? state.State_Name : '';
}

getUniversityName(id: number | string): string {
  debugger
  console.log('universities: ', this.universities);
  const uni = this.universities.find(u => u.University_Id == id); // Use == instead of ===
  return uni ? uni.University_Name : '';
}

getStreamName(id: number | string): string {
  debugger
  console.log('streams: ', this.streams);
  const stream = this.streams.find(s => s.Stream_Id == id); // Use == instead of ===
  return stream ? stream.Stream_Name : '';
}
}