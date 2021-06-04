import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


import { SUPPORTED_APIS } from '../api.config';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseApi = 'http://127.0.0.1:8000';
  constructor(
    private readonly http: HttpClient,
  ) {}

  getYoutubeChannel(name: string): Observable<any> {
    const url = `${ this.baseApi }${SUPPORTED_APIS.videos}/${name}`;

    return this.http.get(url);
  }
}
