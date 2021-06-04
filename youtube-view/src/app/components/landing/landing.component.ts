import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ApiService} from '../../api/services/youtube-data-service';
import {ChannelsStateFacade} from '../../api/services/channels.facade';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingComponent {
  value: string;
  channel$ = this.channelsStateFacade.channel$;
  constructor(private channelsStateFacade: ChannelsStateFacade) { }

  searchByQuery() {
    this.channelsStateFacade.searchChannel(this.value);
  }

  clear() {
    this.value = '';
    this.channelsStateFacade.clearChannel();
  }
}
