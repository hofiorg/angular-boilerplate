import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Demo, DemoFilter} from '../model/demo.model';

@Injectable({
  providedIn: 'root'
})
export class DemoService {
  private apiUrl = '/api/demo/search';

  constructor(private http: HttpClient) {
  }

  search(filter: DemoFilter): Observable<Array<Demo>> {
    return this.http.post<Array<Demo>>(this.apiUrl, filter);
  }
}
