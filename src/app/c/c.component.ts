import { Component, OnInit } from '@angular/core';
import { HiService } from '../hi.service';

@Component({
  selector: 'app-c',
  templateUrl: './c.component.html',
  styleUrls: ['./c.component.scss']
  // providers: [
  //   { provide: HiService, useFactory: () => new HiService('CComponent') }
  // ]
})
export class CComponent implements OnInit {
  constructor(public hi: HiService) {}

  ngOnInit() {}
}
