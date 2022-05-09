import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class HttpService {
  private readonly host = environment.apiHost;

  constructor(private readonly httpClient: HttpClient) { }

  public get(endpoint: string): Observable<any> {
    return this.httpClient.get(`${this.host}${endpoint}`);
  }
}
