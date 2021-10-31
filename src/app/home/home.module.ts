import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatButtonModule } from '@angular/material/button';

import { HomeRoutingModule } from "./home-routing.module";

import { HomeComponent } from "./home.component";
import { SharedModule } from "../shared/shared.module";

import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { CoreModule } from "../core/core.module";
import { InitDownloadDialogModule } from "../init-download-dialog/init-download-dialog.module";

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    CoreModule,
    InitDownloadDialogModule,
    MatButtonModule,
  ],
})
export class HomeModule {}
