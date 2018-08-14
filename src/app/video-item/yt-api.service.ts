import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { tap, map, share } from 'rxjs/operators';

@Injectable()
export class YtAPIService {

  private url = "https://www.googleapis.com/youtube/v3/videos";
  private key = "AIzaSyBLVlx_YeT_1BFQOyBmFzg9HZsf7a8UuL4";
  private id = "FM7MFYoylVs";

  private video_url = `${this.url}?key=${this.key}&part=snippet&id=${this.id}`;

  constructor(private http: HttpClient) { }

  public getVideo(){
    return this.http.get(this.video_url).pipe(
      map( (res: any) => res.items[0]),

      map( video => {
        return {
          title: video.snippet.title,
          id: video.id,
          thumbnail: video.snippet.thumbnails.medium.url
        }
      }),

      share(),

      tap( res => console.log(res))
    );
  }
}
