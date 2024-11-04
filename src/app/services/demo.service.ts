import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemoService {
  //private apiUrl = 'http://localhost:7148/api/demo';

  constructor(private http: HttpClient) {}

  getDemoData(): Observable<string> {
    return of("Hello World")
    //return this.http.get(this.apiUrl, { responseType: 'text' });
  }
}
