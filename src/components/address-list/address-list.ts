import { Component, Input } from '@angular/core';

/**
 * Generated class for the AddressListComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'address-list',
  templateUrl: 'address-list.html'
})
export class AddressListComponent {

  @Input() navTitle: string;
  @Input() location: Location

  constructor() {}

}
