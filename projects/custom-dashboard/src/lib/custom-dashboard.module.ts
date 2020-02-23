import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { SimpleComponent } from './components/simple/simple.component';
import { SidenavSectionComponent } from './components/sidenav-section/sidenav-section.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavService } from './services/nav.service';

@NgModule({
  declarations: [SimpleComponent, SidenavSectionComponent],
  entryComponents: [SimpleComponent, SidenavSectionComponent],
  imports: [
    MaterialModule,
    CommonModule,
    RouterModule,
  ],
  exports: [SimpleComponent, SidenavSectionComponent],
  providers: [NavService],
})
export class CustomDashboardModule { }
