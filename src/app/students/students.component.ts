import { DetailStudentComponent } from './detail-student/detail-student.component';
import { MdSnackBar, MdDialog, MdDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { StudentsService } from './services/students.service';
import { DatatableComponent } from '@swimlane/ngx-datatable/release';
import { Students } from './students.model';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  viewType = false;
  students: Students[];
  temp = [];

  @ViewChild(DatatableComponent) table: DatatableComponent;

  constructor(
    private studentsService: StudentsService,
    private router: Router,
    private snackBar: MdSnackBar,
    public dialog: MdDialog
  ) { }

  ngOnInit() {
    this.getStudents();
  }

  studentDetails(student) {
    const dialogRef = this.dialog.open(DetailStudentComponent, {
      data: student
    });
  }

  changeView() {
    this.viewType = !this.viewType;
  }

  filterTable(event) {
    const val = event.target.value.toLowerCase();
    const temp = this.temp.filter((d) => {
      return d.fullname.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.students = temp;
    // this.table.offset = 0;
  }

  getStudents() {
    this.studentsService.getStudents().subscribe((student: Students[]) => {
      this.students = student;
      this.temp = [...student];
    });
  }

  updateStudent(row: Students): void {
    this.router.navigate(['/create-student', row],
      { skipLocationChange: true })
  }

  deleteStudent(student) {
    this.studentsService.delete(student.id)
      .then(() => {
        // this.getStudents();
        this.snackBar.open(`${student.fullname} was deleted`, 'x', {
          duration: 3000
        });
        this.students = this.students.filter(x => x !== student);
      })
  }
}
