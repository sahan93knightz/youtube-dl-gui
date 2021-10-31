import { TestBed } from '@angular/core/testing';

import { YoutubeDlService } from './youtube-dl.service';

describe('YoutubeDlService', () => {
  let service: YoutubeDlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YoutubeDlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
