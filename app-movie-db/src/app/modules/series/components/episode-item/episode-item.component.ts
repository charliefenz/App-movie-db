import { Component, Input, OnInit } from '@angular/core';
import { GlobalConstants } from 'src/app/common/classes/global-constants';
import { Episode } from '../../models/episode';

@Component({
  selector: 'app-episode-item',
  templateUrl: './episode-item.component.html',
  styleUrls: ['./episode-item.component.scss']
})
export class EpisodeItemComponent implements OnInit {

  @Input()
  episode: Episode;
  constructor() { }

  ngOnInit(): void {
    if (this.episode.still_path !== null) {
      this.episode.still_path = `${GlobalConstants.imagesPosterUrl}${this.episode.still_path}`;
    }
  }

}
