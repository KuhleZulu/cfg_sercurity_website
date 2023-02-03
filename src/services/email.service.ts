import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Email } from 'src/models/email.model';
import { BASE_URL } from 'src/models/constants';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  url: string;

  constructor(private http: HttpClient) { 
    this.url = BASE_URL;
  }

  sendGeneralTextEmail(data: Email): Observable<any> {
    return this.http.post<any>(`${this.url}api/email/general-email.php`, data);
  }
}
