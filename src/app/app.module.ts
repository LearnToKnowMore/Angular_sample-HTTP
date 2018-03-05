import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component';
import { SaveserversToDbService } from './saveservers-to-db.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [SaveserversToDbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
