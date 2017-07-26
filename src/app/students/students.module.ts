import {
  MdButtonModule, MdSlideToggleModule, MdCardModule,
  MdInputModule, MdNativeDateModule, MdDatepickerModule,
  MdIconModule, MdSnackBarModule
} from '@angular/material';
import { StudentsService } from './services/students.service';
import { StudentsDataService } from './data-mock/students-data';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { StudentsComponent } from './students.component';
import { DataSource } from '@angular/cdk';
import { FormsModule } from '@angular/forms';
import { CreateStudentComponent } from './create-student/create-student.component';
import { TopScoresDirective } from './top-scores.directive';
import { LeaderboardCompactComponent } from './leaderboard-compact/leaderboard-compact.component'


@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    HttpModule,
    NgxDatatableModule,
    FormsModule,
    MdIconModule, MdSnackBarModule,
    MdButtonModule, MdSlideToggleModule, MdCardModule, MdIconModule,
    MdInputModule, MdDatepickerModule, MdNativeDateModule,
    InMemoryWebApiModule.forRoot(StudentsDataService)
  ],
  declarations: [
    StudentsComponent,
    LeaderboardComponent,
    CreateStudentComponent,
    TopScoresDirective,
    LeaderboardCompactComponent
  ],
  providers: [
    StudentsService
  ],
  exports: [
    LeaderboardComponent
  ]
})
export class StudentsModule { }
