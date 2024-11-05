import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable, timer} from 'rxjs';
import {Demo} from '../model/demo.model';

@Injectable({
  providedIn: 'root'
})
export class DemoService {
  //private apiUrl = 'http://localhost:7148/api/demo';

  constructor(private http: HttpClient) {
  }

  search(): Observable<Array<Demo>> {

    // simulate 5 seconds delay
    return timer(5000).pipe(
      map(() => [
        {
          name: "Name1",
          gender: "Gender1",
          company: "Company1"
        }
      ])
    );

    //return this.http.get(this.apiUrl, { responseType: 'text' });
  }
}
