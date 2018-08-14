import { Component, OnInit, Input, NgModule } from '@angular/core';
import { interval, Observable, Subscription, Unsubscribable} from 'rxjs';
import { takeWhile, first } from 'rxjs/operators';
import { ChangeDetectorRef } from '@angular/core';
import { inherits } from 'util';

@Component({
  selector: 'app-yt-player',
  templateUrl: './yt-player.component.html',
  styleUrls: ['./yt-player.component.css']
})

export class YtPlayerComponent implements OnInit {

  @Input() videoId: String;
  public url = "http://www.youtube.com/embed/" + "FM7MFYoylVs";
  public YT: any;
  public player: any;
  public text: Array<String>;
  public curWord = "";
  public curTimeEx: string | number;
  public $ul;

  constructor(private ref: ChangeDetectorRef) {}

  public txt = {
    '8.1': "0",
    '8.2': "0",
    '8.3': "0",
    '8.4': "0",
    '8.5': "0",
    '8.6': "0",
    '8.7': "0",
    '8.8': "0",
    '8.9': "0",
    '9': "0",
    '9.1': "0",
    '9.2': "0",
    '9.3': "0",
    '9.4': "0",
    '9.5': "0",
    '9.6': "0",
    '9.7': "0",
    '9.8': "0",
    '9.9': "0",
    '10': "0",
    '10.1': "0",
    '10.2': "0",
    '10.3': "0",
    '10.4': "0",
    '10.5': "0",
    
    '10.6': "1",
    '10.7': "1",
    '10.8': "1",
    '10.9': "1",
    '11': "1",
    '11.1': "1",
    '11.2': "1",
    '11.3': "1",
    '11.4': "1",
    '11.5': "1",
    '11.6': "1",
    '11.7': "1",
    '11.8': "1",
    '11.9': "1",
    '12': "1",
    '12.1': "1",
    '12.2': "1",
    '12.3': "1",
    '12.4': "1",
    '12.5': "1",
    '12.6': "1",
    '12.7': "1",
    '12.8': "1",

    '12.9': "2",
    '13': "2",
    '13.1': "2",
    '13.2': "2",
    '13.3': "2",
    '13.4': "2",
    '13.5': "2",
    '13.6': "2",
    '13.7': "2",
    '13.8': "2",
    '13.9': "2",
    '14': "2",
    '14.1': "2",
    '14.2': "2",
    '14.3': "2",
    '14.4': "2",
    '14.5': "2",
    '14.6': "2",
    '14.7': "2",
    '14.8': "2",
    '14.9': "2",
    '15': "2",
    '15.1': "2",

    '15.2': "3",
    '15.3': "3",
    '15.4': "3",
    '15.5': "3",
    '15.6': "3",
    '15.7': "3",
    '15.8': "3",
    '15.9': "3",
    '16': "3",
    '16.1': "3",
    '16.2': "3",
    '16.3': "3",
    '16.4': "3",
    '16.5': "3",
    '16.6': "3",
    '16.7': "3",
    '16.8': "3",
    '16.9': "3",
    '17': "3",
    '17.1': "3",
    '17.2': "3",
    '17.3': "3",
    '17.4': "3",
    '17.5': "3",
    '17.6': "3",

    '17.7': "4",
    '17.8': "4",
    '17.9': "4",
    '18': "4",
    '18.1': "4",
    '18.2': "4",
    '18.3': "4",
    '18.4': "4",
    '18.5': "4",
    '18.6': "4",
    '18.7': "4",
    '18.8': "4",
    '18.9': "4",
    '19': "4",
    '19.1': "4",
    '19.2': "4",
    '19.3': "4",
    '19.4': "4",
    '19.5': "4",
    '19.6': "4",
    '19.7': "4",
    '19.8': "4",

    '19.9': "5",
    '20': "5",
    '20.1': "5",
    '20.2': "5",
    '20.3': "5",
    '20.4': "5",
    '20.5': "5",
    '20.6': "5",
    '20.7': "5",
    '20.8': "5",
    '20.9': "5",
    '21': "5",
    '21.1': "5",
    '21.2': "5",
    '21.3': "5",
    '21.4': "5",
    '21.5': "5",
    '21.6': "5",
    '21.7': "5",
    '21.8': "5",
    '21.9': "5",
    '22': "5",
    '22.1': "5",
    '22.2': "5",
    '22.3': "5",
    '22.4': "5",
    '22.5': "5",
    '22.6': "5",
    
    '22.7': "6",
    '22.8': "6",
    '22.9': "6",
    '23': "6",
    '23.1': "6",
    '23.2': "6",
    '23.3': "6",
    '23.4': "6",
    '23.5': "6",
    '23.6': "6",
    '23.7': "6",
    '23.8': "6",
    '23.9': "6",
    '24': "6",
    '24.1': "6",
    '24.2': "6",
    '24.3': "6",
    '24.4': "6",
    '24.5': "6",
    '24.6': "6",
    '24.7': "6",
    '24.8': "6",
    '24.9': "6",
    '25': "6",
    '25.1': "6",
    '25.2': "6",
    '25.3': "6",
    '25.4': "6",
    '25.5': "6",
    '25.6': "6",
    '25.7': "6",
    '25.8': "6",
    '25.9': "6",
    '26': "6",
    '26.1': "6",
    '26.2': "6",
    '26.3': "6",
    '26.4': "6",

    

    // '26.4': "she",
    // '26.8': "said",
  }

  init() {
    var tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }

  ngOnInit() {
    this.init();
    this.$ul = document.getElementById("text");

    window['onYouTubeIframeAPIReady'] = (e) => {
      this.YT = window['YT'];
      this.player = new window['YT'].Player('player', {
        videoId: this.videoId,
        width: "100%",
        height: "100%",
        events: {
        'onStateChange': this.onStateChange.bind(this)
        }
      });

      document.getElementById("player").style.position = "absolute";
    };
  }

  inter: Unsubscribable;
  time: number;

  onStateChange(e){
    if(e.data == this.YT.PlayerState.PLAYING){
      let curTime: number;

      this.inter = this.inter ? this.inter : interval(100).subscribe( () => {
          console.log("checking");

          curTime = Math.round(this.player.getCurrentTime() * 10) / 10;

          if(this.txt.hasOwnProperty(curTime)){
            this.time = this.txt[curTime] * (-38);
            this.$ul.style.transform = `translateY(${this.time}px)`;
          }

          this.ref.detectChanges();
      });
    }
  }
}
