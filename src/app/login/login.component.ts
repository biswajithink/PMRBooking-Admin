import { Component } from '@angular/core';
import {Router} from '@angular/router';

/**
*	This class represents the lazy loaded LoginComponent.
*/

@Component({
	moduleId: module.id,
	selector: 'login',
	templateUrl: 'login.component.html',
	styleUrls: ['./login.css']
})

export class LoginComponent { 
	
constructor(private router: Router) { }

goHome(){
    /*document.getElementById("bodyId").className =
    document.getElementById("bodyId").className.replace('bodyBack','homeBody');*/
    this.router.navigate(['./booking-home']);
}

}

