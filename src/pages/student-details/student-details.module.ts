import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudentDetailsPage } from './student-details';
import { PipesModule } from "../../pipes/pipes.module";
import { AddressListComponent } from "../../components/address-list/address-list";
import { ComponentsModule } from "../../components/components.module";

@NgModule({
  declarations: [
    StudentDetailsPage
  ],
  imports: [
    IonicPageModule.forChild(StudentDetailsPage),
    PipesModule,
    ComponentsModule
  ],
})
export class StudentDetailsPageModule {}
