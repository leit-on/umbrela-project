import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DemoMaterialModule } from '../demo-material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutes } from './dashboard.routing';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SalesOverviewComponent } from './dashboard-components/sales-overview/sales-overview.component';
import { OurVisiterComponent } from './dashboard-components/our-visiter/our-visiter.component';
import { ProfileComponent } from './dashboard-components/profile/profile.component';
import { ForecastWhetherComponent } from './dashboard-components/forecast-wheather/forecast-wheater.component';
import { ForecastWhetherCitiesComponent } from './dashboard-components/forecast-wheather-cities/forecast-wheater.component';
import { ForecastCarouselComponent } from './dashboard-components/';

import { ProgressSpinnerDialogComponent } from './dashboard-components/spinner-dialog-component/progress-spinner-dialog.component';


import { ContactsComponent } from './dashboard-components/contacts/contacts.component';
import { ActivityTimelineComponent } from './dashboard-components/activity-timeline/activity-timeline.component';
import {GridColsDirective} from './grid-directive'
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, 
    DemoMaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    NgApexchartsModule,
    
    RouterModule.forChild(DashboardRoutes)
  ],
  declarations: [DashboardComponent, SalesOverviewComponent, OurVisiterComponent,GridColsDirective, ProgressSpinnerDialogComponent, ProfileComponent,ForecastWhetherCitiesComponent,ForecastWhetherComponent, ContactsComponent, ActivityTimelineComponent]
})
export class DashboardModule {}
