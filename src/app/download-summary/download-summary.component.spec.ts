import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadSummaryComponent } from './download-summary.component';

describe('DownloadSummaryComponent', () => {
  let component: DownloadSummaryComponent;
  let fixture: ComponentFixture<DownloadSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
