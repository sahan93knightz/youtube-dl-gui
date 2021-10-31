import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { InitDownloadDialogComponent } from "./init-download-dialog.component";
import { MatDialogModule } from "@angular/material/dialog";
import { MatSelectModule } from "@angular/material/select";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [InitDownloadDialogComponent],
    imports: [CommonModule, MatDialogModule, MatSelectModule, MatButtonModule, FormsModule],
  exports: [InitDownloadDialogComponent],
})
export class InitDownloadDialogModule {}
