import { Component } from '@angular/core';

/**
 * Generated class for the PopoverComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'popover',
  templateUrl: 'popover.html'
})
export class PopoverComponent {

  Cvs: any;

  constructor() {
    this.Cvs = [
        {Cv:'CV'},
        {Cv:'CV'},
        {Cv:'CV'},
        {Cv:'CV'},
    ]
  }

}
