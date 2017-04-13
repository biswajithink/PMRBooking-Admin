import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CarouselModule, DropdownModule, AlertModule } from 'ng2-bootstrap/ng2-bootstrap';
import { AgmCoreModule } from 'angular2-google-maps/core';

@NgModule({
    imports: [
        CommonModule, 
        CarouselModule, 
        DropdownModule, 
        AlertModule,
        AgmCoreModule.forRoot({
        apiKey: 'AIzaSyBRs8dJH8luo1qJLnK9XdoAFPzB-ZksGN4 '
        }),
    ],
    declarations: [HomeComponent],
    exports: [HomeComponent]
})

export class HomeModule {
       
 }
