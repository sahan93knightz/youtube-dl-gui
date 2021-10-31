export interface YoutubeDlInfo {
  thumbnail: string;
  title: string;
  formats: Array<Format>;
  webpageUrl: string;
}

export interface Format {
  format: string;
  ext: string;
  formatId: string;
  url: string;
}
