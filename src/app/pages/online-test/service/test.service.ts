import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TestService {
  constructor(private http: HttpClient) {}

  public getSheet(): Observable<any> {
    const url = `https://docs.google.com/spreadsheets/d/1fq-j3mrHOmjCXpoe9OSrXyOeR3b9DDf1qK08e_7_t9I/gviz/tq?tqx=out:json&tq&gid=0`;
    console.log('sss', url);
    return this.http.get(url);
  }
}
