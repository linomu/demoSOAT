import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class RCService {
    private verifyUrl = '/recaptcha';
    // private verifyUrl = 'https://www.google.com/recaptcha/api/siteverify';
    private secretKey = '6Lf80TkqAAAAAKY4E6jgfaLV5fFTCeoKGztMl14-';
  
    constructor(private http: HttpClient) { }
  
    verifyToken(token: string): Observable<any> {
      const params = new HttpParams()
        .set('secret', this.secretKey)
        .set('response', token);
  
      return this.http.post(this.verifyUrl, {}, { params });
    }
    
}
