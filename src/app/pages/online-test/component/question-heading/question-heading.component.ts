import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-heading',
  templateUrl: './question-heading.component.html',
  styleUrls: ['./question-heading.component.scss']
})
export class QuestionHeadingComponent implements OnInit{
  @Input() qsno: string | undefined;
  ngOnInit(): void {
  }
}
