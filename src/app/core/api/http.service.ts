import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class HttpService {
  private readonly host = environment.apiHost;

  constructor(private readonly httpClient: HttpClient) { }

  public delete(endpoint: string): Observable<any> {
    return this.httpClient.delete(`${this.host}${endpoint}`);
  }

  public get(endpoint: string): Observable<any> {
    return this.httpClient.get(`${this.host}${endpoint}`);
  }

  public patch(endpoint: string, payload: any): Observable<any> {
    return this.httpClient.patch(`${this.host}${endpoint}`, payload);
  }

  public post(endpoint: string, payload: any): Observable<any> {
    return this.httpClient.post(`${this.host}${endpoint}`, payload);
  }

  public put(endpoint: string, payload: any): Observable<any> {
    return this.httpClient.put(`${this.host}${endpoint}`, payload);
  }
}
