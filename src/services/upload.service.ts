import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UploadService {

  constructor(private http: HttpClient) {
  }

  uploadFile(formData: any): Observable<any> {
    return this.http.post<any>(`https://cfgsecurity.co.za/api/api/upload/upload.php`, formData);
  }
}
