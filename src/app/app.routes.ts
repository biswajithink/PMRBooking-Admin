import { Routes } from '@angular/router';

import { LoginRoutes } from './login/index';
import { DashboardRoutes } from './dashboard/index';
import { DashboardComponent } from './dashboard/index';

import { SignUpRoutes } from './signup/index';
import { SignUpComponent } from './signup/index';
import { BookHomeRoutes } from './bookHome/index';
import { BookingHomeComponent } from './bookHome/index';


import { LoginComponent } from './login/index';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/booking-home',
        pathMatch: 'full'
    },
    {
    	path: 'login',
    	component: LoginComponent
  	},      
    {
    	path: 'signup',
    	component: SignUpComponent
  	},
    {
    	path: 'booking-home',
    	component: BookingHomeComponent
  	},
    ...SignUpRoutes,
    ...BookHomeRoutes,
    ...LoginRoutes,
    ...DashboardRoutes,
    
];