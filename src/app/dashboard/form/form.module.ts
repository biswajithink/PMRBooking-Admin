import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FormComponent } from './form.component';

@NgModule({
    imports: [
        RouterModule
    ],
    declarations: [FormComponent],
    exports: [FormComponent]
})

export class FormModule { }
