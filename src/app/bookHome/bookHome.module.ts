
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BookingHomeComponent } from './bookHome.component';

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [BookingHomeComponent],
    exports: [BookingHomeComponent]
})

export class BookingHomeModule { }
