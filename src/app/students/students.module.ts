import {
  MdButtonModule, MdSlideToggleModule, MdCardModule,
  MdInputModule, MdNativeDateModule, MdDatepickerModule,
  MdIconModule, MdSnackBarModule, MdSelectModule, MdDialogModule
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
import { LeaderboardCompactComponent } from './leaderboard-compact/leaderboard-compact.component';
import { DetailStudentComponent } from './detail-student/detail-student.component'


@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    HttpModule,
    NgxDatatableModule,
    FormsModule,
    MdIconModule, MdSnackBarModule, MdSelectModule, MdDialogModule,
    MdButtonModule, MdSlideToggleModule, MdCardModule, MdIconModule,
    MdInputModule, MdDatepickerModule, MdNativeDateModule,
    InMemoryWebApiModule.forRoot(StudentsDataService)
  ],
  declarations: [
    StudentsComponent,
    LeaderboardComponent,
    CreateStudentComponent,
    TopScoresDirective,
    LeaderboardCompactComponent,
    DetailStudentComponent
  ],
  entryComponents: [
    DetailStudentComponent
  ],
  providers: [
    StudentsService
  ],
  exports: [
    LeaderboardComponent
  ]
})
export class StudentsModule { }
