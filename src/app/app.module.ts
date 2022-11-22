import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScriptlanesHeadingComponent } from './component/scriptlanes-heading/scriptlanes-heading.component';
import { OnlineTestModule } from './pages/online-test/online-test.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ScriptlanesHeadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OnlineTestModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
