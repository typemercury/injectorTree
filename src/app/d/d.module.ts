import { DComponent } from './d.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HiService } from '../hi.service';

@NgModule({
  declarations: [DComponent],
  providers: [
    { provide: HiService, useFactory: () => new HiService('DModule') }
  ],
  imports: [CommonModule],
  exports: [DComponent],
  entryComponents: [DComponent]
})
export class DModule {}
