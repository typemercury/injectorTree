import { Directive } from '@angular/core';

@Directive({
  selector: '[appA]'
  // providers: [
  //   { provide: HiService, useFactory: () => new HiService('ADirective') }
  // ]
})
export class ADirective {
  constructor() {}
}
