import { AppComponent } from './app.component';
import { ArraysService } from '../services/Arrays';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ArraysService],
  bootstrap: [AppComponent]
})
export class AppModule { }
