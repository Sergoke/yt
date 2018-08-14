import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { VideoItemComponent } from './video-item/video-item.component';
import { YtAPIService } from './video-item/yt-api.service';
import { YtPlayerModule } from './video-item/sub-components/yt-player/yt-player.module';


@NgModule({
  declarations: [
    AppComponent,
    VideoItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    YtPlayerModule
  ],
  providers: [YtAPIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
