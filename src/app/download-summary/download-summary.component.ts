import { Component, OnInit } from '@angular/core';
import { YoutubeDlService } from '../core/services/youtube-dl/youtube-dl.service';
import { DownloadSummary } from '../shared/models/download-summary.model';

@Component({
  selector: 'app-download-summary',
  templateUrl: './download-summary.component.html',
  styleUrls: ['./download-summary.component.scss']
})
export class DownloadSummaryComponent implements OnInit {
  readonly displayedColumns = ['title', 'extension', 'size', 'percentage', 'eta', 'speed', 'status'];
  datasource: Array<DownloadSummary> = [];

  constructor(private youtubeDlService: YoutubeDlService) {
  }

  ngOnInit(): void {
  }

}
