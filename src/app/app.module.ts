import { HiService } from './hi.service';
import { AModule } from './a/a.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AModule],
  providers: [
    { provide: HiService, useFactory: () => new HiService('AppModule') }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
