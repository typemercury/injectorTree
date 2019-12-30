import { ADirective } from './../a.directive';
import { AComponent } from './a.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BModule } from '../b/b.module';
import { HiService } from '../hi.service';

@NgModule({
  declarations: [AComponent, ADirective],
  imports: [CommonModule, BModule],
  providers: [
    { provide: HiService, useFactory: () => new HiService('AModule') }
  ],
  exports: [AComponent, ADirective]
})
export class AModule {}
