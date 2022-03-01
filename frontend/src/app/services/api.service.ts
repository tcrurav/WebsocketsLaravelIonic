import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const headers = new HttpHeaders({
  "Accept": 'application/json',
  'Content-Type': 'application/json'
});

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string = "http://localhost:8000/api";

  constructor(private httpClient: HttpClient) { }

  sendBroadcast(message) {
    return this.httpClient.post(`${this.url}/broadcast`, JSON.stringify(message), { headers });
  }
}
