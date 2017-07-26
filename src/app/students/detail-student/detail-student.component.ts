import { Component, OnInit, Inject } from '@angular/core';
import { MD_DIALOG_DATA, MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-detail-student',
  templateUrl: './detail-student.component.html',
  styleUrls: ['./detail-student.component.css']
})
export class DetailStudentComponent implements OnInit {

  constructor(
    @Inject(MD_DIALOG_DATA) public student: any,
    public dialogRef: MdDialogRef<DetailStudentComponent>
  ) {
  }

  ngOnInit() {
  }

}
