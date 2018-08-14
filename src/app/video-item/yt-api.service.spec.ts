import { TestBed, inject } from '@angular/core/testing';

import { YtAPIService } from './yt-api.service';

describe('YtAPIService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [YtAPIService]
    });
  });

  it('should be created', inject([YtAPIService], (service: YtAPIService) => {
    expect(service).toBeTruthy();
  }));
});
