import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Channel} from '../models/api.models';


@Injectable({
  providedIn: 'root',
})
export class StateService {
  // tslint:disable-next-line:variable-name
  private readonly _channel = new BehaviorSubject<Channel | null>(null);
  readonly channel$ = this._channel.asObservable();

  setChannels(val: any) {
    this._channel.next(this.transformData(val));
  }

  transformData(data): Channel | null {
    let response: Channel | null;
    if (data && data.items) {
      const { snippet, statistics } = data.items[0];
      response = {
        description: snippet.description,
        img: snippet.thumbnails.high,
        title: snippet.title,
        statistics,
        avgViews: statistics.viewCount / statistics.videoCount,
      };
    } else {
      response = null;
    }
    return response;
  }
}
