import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProblemaService {

  private apiUrl = 'https://cuentas-7n8n.onrender.com/problema';

  constructor(private http: HttpClient) { }

  getProblema(): Observable<any> {
    console.log('...')
    return this.http.get<any>(this.apiUrl);
  }
}
