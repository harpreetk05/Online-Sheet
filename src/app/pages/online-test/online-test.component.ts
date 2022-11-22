import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { table } from 'console';
import { TestService } from './service/test.service';

@Component({
  selector: 'app-online-test',
  templateUrl: './online-test.component.html',
  styleUrls: ['./online-test.component.scss'],
})
export class OnlineTestComponent implements OnInit {

  constructor(private test: TestService, private http: HttpClient) { }

  hasSubmit = true;
  value: any = '';
  user: any;
  number: any;
  userSelected: any;
  n: any;
  total: any=0;
  sheetData: any;
  sheetDataFilter: any;


  userEvent(value: any, index: number) {
    this.user = value;
    this.data[index].userSelected = value;
    console.log('User Selected :', value);
  }
  isdisable() {
    const isDisabled = false;
    const filter = this.data.some((item: { userSelected: string; }) => item.userSelected === '');
    return filter;
  }

  reset() {
    this.userSelected = '';
  }

  onsubmit(){
    this.n = this.data.length;
    console.log(this.n);

    for(let i=0;i< this.n;i++) {
      if(this.data[i].userSelected==0){
        alert("Please solve question");
        this.total = this.total;
      }
      else if(this.data[i].ans == this.data[i].userSelected) {
        this.total = this.total + 3;
      }
      else  {
        this.total = this.total - 1;
      }
      }
      console.log("totalMarks", this.total);
      return this.total;
  }

  data: any = [
    {
      qsnumber: 'Question: 1',
      ques: 'What can RxJS be used for?',
      option: [
        { label: 'Server-side' },
        { label: 'Browser' },
        { label: 'Both' },
        { label: 'None' },
      ],
      ans: 'Both',
      userSelected: '',
    },
    {
      qsnumber: 'Question: 2',
      ques: 'AngularJS was developed by which company?',
      option: [
        { label: 'Facebook' },
        { label: 'Google' },
        { label: 'Angular' },
        { label: 'Netflix' },
      ],
      ans: 'Google',
      userSelected: '',
    },
    {
      qsnumber: 'Question: 3',
      ques: 'Which decorator is used to make a class a service?',
      option: [
        { label: 'Injectable' },
        { label: 'Component' },
        { label: 'Server' },
        { label: 'Injector' },
      ],
      ans: 'Injectable',
      userSelected: '',
    },
  ];

  ngOnInit(): void {
        this.test.getSheet().subscribe(res => {
        console.log("aaa", res);
        this.sheetData = this.sheetData.split("*/")[1]

        console.log("excel data:",this.sheetData)
      },((err:any) => {
        console.log("err", err.error.text);
        this.sheetData = err.error.text;
        var from = this.sheetData.indexOf("{");
        var to = this.sheetData.lastIndexOf("}") + 1;
        var jsonText = this.sheetData.slice(from, to);
        var parsedText = JSON.parse(jsonText);
        this.sheetDataFilter = parsedText;
        for(let sheets in this.sheetDataFilter.table.rows){
          debugger
          for(let rows of sheets) {
            debugger
          console.log(this.sheetDataFilter.table.rows);



          }
        }
        console.log("sheetDataFilter", this.sheetDataFilter);
      }))
    }
}
