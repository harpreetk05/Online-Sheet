import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.scss']
})
export class OptionComponent {
  @Output() userSelected: EventEmitter<string> = new EventEmitter<string>();
  @Input() opt: any;
  value: any;
  optionForm!: FormGroup;
  ans: any;

  onClick(value:string) {
    this.userSelected.emit(value);
  }
}
