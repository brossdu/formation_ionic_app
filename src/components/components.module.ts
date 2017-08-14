import { NgModule } from '@angular/core';
import { AddressListComponent } from './address-list/address-list';
import { PipesModule } from "../pipes/pipes.module";
import { IonicModule } from "ionic-angular";
@NgModule({
	declarations: [AddressListComponent],
	imports: [PipesModule,IonicModule],
	exports: [AddressListComponent]
})
export class ComponentsModule {}
