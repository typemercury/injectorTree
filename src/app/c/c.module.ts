import { CDirective } from './../c.directive';
import { CComponent } from './c.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HiService } from '../hi.service';

@NgModule({
  declarations: [CComponent, CDirective],
  imports: [CommonModule],
  exports: [CComponent, CDirective],
  providers: [
    { provide: HiService, useFactory: () => new HiService('CModule') }
  ]
})
export class CModule {}
