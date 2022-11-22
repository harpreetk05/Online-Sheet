import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnlineTestRoutingModule } from './online-test-routing.module';

import { OptionComponent } from './component/option/option.component';
import { QuestionComponent } from './component/question/question.component';
import { QuestionHeadingComponent } from './component/question-heading/question-heading.component';
import { OnlineTestComponent } from './online-test.component';
import { MatCardModule } from '@angular/material/card';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    OnlineTestComponent,
    OptionComponent,
    QuestionComponent,
    QuestionHeadingComponent
  ],
  imports: [
    CommonModule,
    OnlineTestRoutingModule,
    MatCardModule,
    NgxPaginationModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatRadioModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class OnlineTestModule { }
