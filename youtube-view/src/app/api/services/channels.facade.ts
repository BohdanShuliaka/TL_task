import {ApiService} from './youtube-data-service';
import {Injectable} from '@angular/core';
import {StateService} from './state.service';
import {takeUntil, tap} from 'rxjs/operators';
import {Observable, Subject} from 'rxjs';
import {Channel} from '../models/api.models';

@Injectable()
export class ChannelsStateFacade {
  channel$: Observable<Channel | null> = this.stateService.channel$;
  private destroy$$ = new Subject<void>();

  constructor(private readonly apiService: ApiService,
              private readonly stateService: StateService) {
  }

  searchChannel(name: string): void {
    this.apiService.getYoutubeChannel(name).pipe(
      takeUntil(this.destroy$$),
      tap(data => {
        this.stateService.setChannels(data);
      })
    ).subscribe(() => this.destroy$$.next());
  }

  clearChannel() {
    this.stateService.setChannels(null);
  }
}
