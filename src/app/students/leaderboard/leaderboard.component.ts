import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {
  @Input() students;
  @Output() delete: EventEmitter<any> = new EventEmitter<any>();
  @Output() update: EventEmitter<any> = new EventEmitter<any>();

  constructor(
  ) { }

  ngOnInit() {

  }

  updateStudent(student): void {
    this.update.emit(student);
  }

  deleteStudent(student) {
    this.delete.emit(student);
  }

}
