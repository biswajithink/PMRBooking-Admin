
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SignUpComponent } from './signup.component';

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [SignUpComponent],
    exports: [SignUpComponent]
})

export class SignUpModule { }
