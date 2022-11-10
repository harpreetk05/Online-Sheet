import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnlineTestRoutingModule } from './online-test-routing.module';

import { OptionComponent } from './component/option/option.component';
import { QuestionComponent } from './component/question/question.component';
import { QuestionHeadingComponent } from './component/question-heading/question-heading.component';
import { OnlineTestComponent } from './online-test.component';


@NgModule({
  declarations: [
    OnlineTestComponent,
    OptionComponent,
    QuestionComponent,
    QuestionHeadingComponent
  ],
  imports: [
    CommonModule,
    OnlineTestRoutingModule
  ]
})
export class OnlineTestModule { }
