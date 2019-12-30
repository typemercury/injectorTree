import { BDirective } from './../b.directive';
import { BComponent } from './b.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CModule } from '../c/c.module';
import { HiService } from '../hi.service';

@NgModule({
  declarations: [BComponent, BDirective],
  providers: [
    { provide: HiService, useFactory: () => new HiService('BModule') }
  ],
  imports: [CommonModule, CModule],
  exports: [BComponent, BDirective]
})
export class BModule {}
