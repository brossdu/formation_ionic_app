import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PipesModule } from "../../pipes/pipes.module";
import { StudentPage } from "./student";

@NgModule({
  declarations: [
    StudentPage,
  ],
  imports: [
    PipesModule,
    IonicPageModule.forChild(StudentPage),

  ],
})
export class CourseDetailPageModule {}
