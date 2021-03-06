import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CheckGlucoseLevelService {
  baseUrl = "https://smart-diabetic-companion.herokuapp.com"
  constructor(private http: HttpClient) { }

  getGlucoseReading(): Observable<any> {
    const token = localStorage.getItem('token');
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders().set('Authorization', `Token ${token}`), 
    };
    return this.http.post(this.baseUrl + "/patient/check-glucose-level", null, requestOptions);
  }
}
