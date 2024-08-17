import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProblemaService {

  private apiUrl = 'http://localhost:3000/problema';

  constructor(private http: HttpClient) { }

  getProblema(): Observable<any> {
    console.log('...')
    return this.http.get<any>(this.apiUrl);
  }
}
