import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImgtickComponent } from './src/app/_components/imgtick/imgtick.component';
import { ClockComponent } from './_components/clock/clock.component';

@NgModule({
  declarations: [
    AppComponent,
    ImgtickComponent,
    ClockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
