import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { UsersComponent } from './users/users.component';
import { AdminComponent } from './admin.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { AllComponent  as AllCoursesComponent }  from './courses/all/all.component';
import { CoursesComponent } from './courses/courses.component';
import { NewComponent as NewCourseComponent} from './courses/new/new.component';
import { SingleComponent as SingleCourseComponent } from './courses/single/single.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EarningsComponent } from './earnings/earnings.component';
import { LessonComponent } from './lesson/lesson.component';

const routes: Routes = [{
  path: 'admin',
  component: AdminComponent,
  children: [{
    path: '',
    component: DashboardComponent
  }, {
    path: 'course',
    component: CoursesComponent,
    children: [{
      path: '',
      component: AllCoursesComponent
    }, {
      path: 'single/:id',
      component: SingleCourseComponent
    }, {
      path: 'new',
      component: NewCourseComponent
    }, {
      path: 'new/:id',
      component: NewCourseComponent
    }]
  },  {
    path: 'lesson',
    component: LessonComponent
  },  {
    path: 'earnings',
    component: EarningsComponent
  },  {
    path: 'analytics',
    component: AnalyticsComponent
  },  {
    path: 'categories',
    component: CategoriesComponent
  },  {
    path: 'users',
    component: UsersComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
