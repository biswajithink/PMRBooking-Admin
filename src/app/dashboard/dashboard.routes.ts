import { Route } from '@angular/router';

import { HomeRoutes } from './home/index';
import { ChartRoutes } from './chart/index';
import { FormRoutes } from './form/index';
import { CurrentBookingRoutes } from './currentbooking/index';
import { PreviousBookingRoutes } from './previousbooking/index';

import { PreviousBookingComponent } from './previousbooking/index';


import { DashboardComponent } from './index';

export const DashboardRoutes: Route[] = [
  	{
    	path: 'dashboard',
    	component: DashboardComponent,
    	children: [
	    	...HomeRoutes,
			...ChartRoutes,
			...FormRoutes,
			...CurrentBookingRoutes,
			...PreviousBookingRoutes
    	]
  	}
];