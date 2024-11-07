import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable, timer} from 'rxjs';
import {Demo, DemoFilter} from '../model/demo.model';

@Injectable({
  providedIn: 'root'
})
export class DemoService {
  //private apiUrl = 'http://localhost:7148/api/demo';

  constructor(private http: HttpClient) {
  }

  search(filter: DemoFilter): Observable<Array<Demo>> {

    console.log('search: ', filter);

    let items = [];

    for (let i = 0; i < 1000; i++) {
      items.push({ name: "Name " + i, gender: "Gender " + i, company: "Company " + i });
    }
    // simulate 5 seconds delay
    return timer(2000).pipe(
      map(() => [
        ...items
      ])
    );

    //return this.http.get(this.apiUrl, { responseType: 'text' });
  }
}
