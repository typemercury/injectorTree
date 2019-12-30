import { Component, OnInit } from '@angular/core';
import { HiService } from '../hi.service';

@Component({
  selector: 'app-d',
  templateUrl: './d.component.html',
  styleUrls: ['./d.component.scss'],
  providers: [
    { provide: HiService, useFactory: () => new HiService('DComponent') }
  ]
})
export class DComponent implements OnInit {
  constructor(public hi: HiService) {}

  ngOnInit() {}
}
