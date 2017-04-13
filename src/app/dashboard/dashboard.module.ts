import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { AgmCoreModule } from 'angular2-google-maps/core';

import { HomeModule } from './home/home.module';
import { ChartModule } from './chart/chart.module';
import { FormModule } from './form/form.module';
import { CurrentBookingModule } from './currentbooking/currentbooking.module';
//import { CurrentBookingComponent } from './currentbooking/currentbooking.component';
import { PreviousBookingModule } from './previousbooking/previousbooking.module';
//import { PreviousBookingComponent } from './previousbooking/previousbooking.component';

import { DashboardComponent } from './dashboard.component';

import {TopNavComponent} from '../shared/index';
import {SidebarComponent} from '../shared/index';

@NgModule({
    imports: [
        CommonModule,
    	RouterModule,
        ChartsModule,
    	HomeModule,
        ChartModule,
        FormModule,
        AgmCoreModule.forRoot({
        apiKey: 'AIzaSyBRs8dJH8luo1qJLnK9XdoAFPzB-ZksGN4 '
        }),
        CurrentBookingModule,
        PreviousBookingModule
    ],
    declarations: [DashboardComponent, SidebarComponent, TopNavComponent],
    exports: [DashboardComponent, SidebarComponent, TopNavComponent]
})

export class DashboardModule { }