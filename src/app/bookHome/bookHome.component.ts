import { Component } from '@angular/core';
import {Router} from '@angular/router';

/**
*	This class represents the lazy loaded LoginComponent.
*/

@Component({
	moduleId: module.id,
	selector: 'booking-home',
	templateUrl: 'bookHome.component.html',
	styleUrls: ['./bookHome.css']
})

export class BookingHomeComponent { 

constructor(private router: Router) { }

  leftImage:boolean=false;
  rightImage:boolean=false;

	 toggleImg(index){
		if(index==1){
			this.leftImage=true;
			this.rightImage=false;
			console.log(this.rightImage);
		}
		else {
			this.leftImage=false;
			this.rightImage=true;
			console.log(this.rightImage);       
		}
	}

	goLogin(){
		this.router.navigate(['./login']);
	}

	 goDashboard(){
		this.router.navigate(['./dashboard/currentbooking']);
	}
}

