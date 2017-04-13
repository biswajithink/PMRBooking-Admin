import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { ChartComponent } from './chart.component';

@NgModule({
    imports: [RouterModule, ChartsModule],
    declarations: [ChartComponent],
    exports: [ChartComponent]
})

export class ChartModule { }
