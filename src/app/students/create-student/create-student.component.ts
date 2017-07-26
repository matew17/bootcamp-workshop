import { StudentsService } from './../services/students.service';
import { Students } from './../students.model';
import { Component, OnInit } from '@angular/core';
import { MdSnackBar } from '@angular/material';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  formMode = false;
  student: Students;
  images = [
    { value: './assets/images/18.png', viewValue: '18' },
    { value: './assets/images/bills.png', viewValue: 'Bills' },
    { value: './assets/images/boo.png', viewValue: 'Boo' },
    { value: './assets/images/cap-blue.png', viewValue: 'Cap Blue' },
    { value: './assets/images/freeza.png', viewValue: 'Freeza' },
    { value: './assets/images/goku.png', viewValue: 'Goku' },
    { value: './assets/images/picoro.png', viewValue: 'Picoro' },
    { value: './assets/images/pilaf.png', viewValue: 'Pilaf' },
    { value: './assets/images/vegeta.png', viewValue: 'Vegeta' },
    { value: './assets/images/zell.png', viewValue: 'Zell' }
  ]
  constructor(
    private studentsService: StudentsService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private snackBar: MdSnackBar
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      if (params.id) {
        this.declareStudents(Number(params.id), params.fullname,
          params.photo, (params.grade1), (params.grade2), (params.grade3),
          (params.grade4), (params.grade5), params.infoupdated)
        this.formMode = true;
      } else {
        this.declareStudents('', '', '', '', '', '', '', '', '');
        this.formMode = false;
      }
    })
  }

  declareStudents(id, fullname, photo, grade1, grade2, grade3, grade4, grade5, infoupdated) {
    this.student = Students.createInstance(id, fullname, photo, grade1, grade2, grade3, grade4, grade5, infoupdated);
  }

  submitForm() {
    if (this.formMode) {
      this.updateUser();
    } else {
      this.createUser();
    }
  }
  createUser() {
    this.studentsService.createStudent(this.student)
      .then(student => {
        this.snackBar.open(`${student.fullname} was created`, 'x', {
          duration: 3000
        });
        this.declareStudents('', '', '', '', '', '', '', '', '');
      })
      .then(() => {
        this.goBack();
      })
  }

  updateUser() {
    this.studentsService.updateStudent(this.student)
      .then(() => {
        this.snackBar.open(`user was updated`, 'x', {
          duration: 3000
        });
        this.declareStudents('', '', '', '', '', '', '', '', '');
      })
      .then(() => {
        this.goBack();
      })
  }
  goBack() {
    this.router.navigate(['/leaderboard']);
  }

}
