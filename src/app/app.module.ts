import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScriptlanesHeadingComponent } from './component/scriptlanes-heading/scriptlanes-heading.component';
import { OptionComponent } from './pages/online-test/component/option/option.component';
import { OnlineTestComponent } from './pages/online-test/online-test.component';


@NgModule({
  declarations: [
    AppComponent,
    ScriptlanesHeadingComponent,
    OnlineTestComponent,
    OptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
