import { Component, OnInit } from '@angular/core';

import { YtAPIService } from './yt-api.service';

@Component({
  selector: 'app-video-item',
  templateUrl: './video-item.component.html',
  styleUrls: ['./video-item.component.css']
})
export class VideoItemComponent implements OnInit {

  video;

  constructor(private ytAPI: YtAPIService){}

  ngOnInit(){
    this.ytAPI.getVideo().subscribe( vid => this.video = vid);
  }
}
