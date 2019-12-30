import { Directive } from '@angular/core';
import { HiService } from './hi.service';

@Directive({
  selector: '[appB]'
  // providers: [
  //   { provide: HiService, useFactory: () => new HiService('BDirective') }
  // ]
})
export class BDirective {
  constructor() {}
}
