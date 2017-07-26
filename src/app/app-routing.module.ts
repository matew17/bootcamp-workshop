import { StudentsComponent } from './students/students.component';
import { CreateStudentComponent } from './students/create-student/create-student.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

const routes: Routes = [
    { path: 'leaderboard', component: StudentsComponent },
    { path: 'create-student', component: CreateStudentComponent },
    { path: 'create-student/:student', component: CreateStudentComponent },
    { path: '', component: StudentsComponent, pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
