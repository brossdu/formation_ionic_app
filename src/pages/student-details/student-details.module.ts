import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudentDetailsPage } from './student-details';
import { PipesModule } from "../../pipes/pipes.module";

@NgModule({
  declarations: [
    StudentDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(StudentDetailsPage),
    PipesModule,
  ],
})
export class StudentDetailsPageModule {}
