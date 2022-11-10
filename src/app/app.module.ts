import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScriptlanesHeadingComponent } from './component/scriptlanes-heading/scriptlanes-heading.component';
import { OnlineTestModule } from './pages/online-test/online-test.module';

@NgModule({
  declarations: [
    AppComponent,
    ScriptlanesHeadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OnlineTestModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
