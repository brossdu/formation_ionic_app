import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CourseDetailPage } from './course-detail';
import { PipesModule } from "../../pipes/pipes.module";

@NgModule({
  declarations: [
    CourseDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(CourseDetailPage),
    PipesModule,
  ],
})
export class CourseDetailPageModule {}
