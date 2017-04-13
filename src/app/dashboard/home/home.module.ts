import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { AgmCoreModule } from 'angular2-google-maps/core';

@NgModule({
    imports: [
        CommonModule, 
        AgmCoreModule.forRoot({
        apiKey: 'AIzaSyBRs8dJH8luo1qJLnK9XdoAFPzB-ZksGN4 '
        }),
    ],
    declarations: [HomeComponent],
    exports: [HomeComponent]
})

export class HomeModule {
       
 }
