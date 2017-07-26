import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-leaderboard-compact',
  templateUrl: './leaderboard-compact.component.html',
  styleUrls: ['./leaderboard-compact.component.css']
})
export class LeaderboardCompactComponent implements OnInit {
  @Input() students;
  @Output() update: EventEmitter<any> = new EventEmitter<any>();
  @Output() delete: EventEmitter<any> = new EventEmitter<any>();
  @Output() details: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  deleteStudent(item) {
    this.delete.emit(item);
  }
  updateStudent(item) {
    this.update.emit(item);
  }
  showDetails(student) {
    this.details.emit(student);
  }
}

