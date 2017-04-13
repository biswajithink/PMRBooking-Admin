import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DropdownModule } from 'ng2-bootstrap/ng2-bootstrap';
import { ModalModule } from 'ng2-bootstrap/ng2-bootstrap';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { AgmCoreModule } from 'angular2-google-maps/core';

import { HomeModule } from './home/home.module';
import { ChartModule } from './chart/chart.module';
import { FormModule } from './form/form.module';

import { DashboardComponent } from './dashboard.component';

import {TopNavComponent} from '../shared/index';
import {SidebarComponent} from '../shared/index';

@NgModule({
    imports: [
        CommonModule,
    	RouterModule,
        ChartsModule,
    	DropdownModule,
        ModalModule,
    	HomeModule,
        ChartModule,
        FormModule,
        AgmCoreModule.forRoot({
        apiKey: 'AIzaSyBRs8dJH8luo1qJLnK9XdoAFPzB-ZksGN4 '
        }),
    ],
    declarations: [DashboardComponent, SidebarComponent, TopNavComponent],
    exports: [DashboardComponent, SidebarComponent, TopNavComponent]
})

export class DashboardModule { }