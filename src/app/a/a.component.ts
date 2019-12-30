import { Component, OnInit } from '@angular/core';
import { HiService } from '../hi.service';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.scss']
  // providers: [
  //   { provide: HiService, useFactory: () => new HiService('AComponent') }
  // ]
})
export class AComponent implements OnInit {
  constructor(public hi: HiService) {}

  ngOnInit() {}
}
