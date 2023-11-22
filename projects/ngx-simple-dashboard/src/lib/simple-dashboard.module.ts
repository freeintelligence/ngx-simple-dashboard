import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { NgxSimpleDashboardBaseComponent } from './components/base/base.component';
import { NgxSimpleDashboardSidenavComponent } from './components/sidenav/sidenav.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxSimpleDashboardNavService } from './services/nav.service';

@NgModule({
  declarations: [
    NgxSimpleDashboardBaseComponent,
    NgxSimpleDashboardSidenavComponent,
  ],
  imports: [MaterialModule, CommonModule, RouterModule],
  exports: [
    NgxSimpleDashboardBaseComponent,
    NgxSimpleDashboardSidenavComponent,
  ],
  providers: [NgxSimpleDashboardNavService],
})
export class NgxSimpleDashboardModule {}
