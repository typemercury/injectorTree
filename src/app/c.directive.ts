import { Directive } from '@angular/core';
import { HiService } from './hi.service';

@Directive({
  selector: '[appC]'
  // providers: [
  //   { provide: HiService, useFactory: () => new HiService('CDirective') }
  // ]
})
export class CDirective {
  constructor() {}
}
