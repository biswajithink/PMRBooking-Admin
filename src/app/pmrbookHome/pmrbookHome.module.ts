
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { pmrBookingHomeComponent } from './pmrbookHome.component';

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [pmrBookingHomeComponent],
    exports: [pmrBookingHomeComponent]
})

export class pmrBookingHomeModule { }
