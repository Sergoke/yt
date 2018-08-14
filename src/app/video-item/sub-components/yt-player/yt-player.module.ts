import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YtPlayerComponent } from './yt-player.component'
import { SafePipe } from './safe.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [YtPlayerComponent, SafePipe],
  exports: [YtPlayerComponent]
})
export class YtPlayerModule { }
