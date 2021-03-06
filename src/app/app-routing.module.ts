import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'student',
    pathMatch: 'full'
  },
  {
    path: 'student',
    component: StudentComponent,
  },
  {
    path: 'studentDetails',
    component: StudentDetailsComponent,
  },
  {
    path:"**",
    component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
