import {
  Component,
  OnInit,
  SkipSelf,
  ViewContainerRef,
  ComponentFactoryResolver
} from '@angular/core';
import { HiService } from '../hi.service';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.scss'],
  providers: [
    { provide: HiService, useFactory: () => new HiService('BComponent') }
  ]
  // viewProviders: [
  //   { provide: HiService, useFactory: () => new HiService('BComponent') }
  // ]
})
export class BComponent implements OnInit {
  constructor(@SkipSelf() public hi: HiService) {}

  ngOnInit() {}
}
