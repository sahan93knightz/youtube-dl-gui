import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitDownloadDialogComponent } from './init-download-dialog.component';

describe('InitDownloadDialogComponent', () => {
  let component: InitDownloadDialogComponent;
  let fixture: ComponentFixture<InitDownloadDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitDownloadDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InitDownloadDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
